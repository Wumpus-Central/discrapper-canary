"use strict";
let i, r;
n.d(t, { Ay: () => S });
var a = n(17928),
    s = n(228366),
    l = n(493336),
    o = n(155718),
    d = n(280450),
    c = n(734057),
    u = n(927813),
    _ = n(337591);
let E = 5 * u.A.Millis.MINUTE,
    A = 10 * u.A.Millis.SECOND,
    h = {},
    I = {},
    f = {},
    p = {};
function T(e) {
    if (null == e) return !1;
    let t = h[e];
    if (null == t) return !1;
    t.onSuccess?.(), m(e);
}
function m(e) {
    if (null != p[e]) return void delete p[e];
    let t = h[e];
    delete h[e];
    let n = f[e];
    null != n && delete I[n], delete f[e], (p[e] = { insertedAt: Date.now(), nonce: e, messageId: n, interaction: t });
}
class g extends a.Ay.Store {
    initialize() {
        this.waitFor(d.default, c.A);
    }
    static displayName = "InteractionStore";
    getInteraction(e) {
        let t = I[e.id];
        return null != t ? h[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(h)) {
            let i = f[t];
            null != i && (e[i] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = I[e];
        return (null == n || null == h[n] || h[n].state === _.m.FAILED) && (null == h[t] || h[t].state === _.m.FAILED);
    }
    getIFrameModalApplicationId() {
        return r;
    }
    getIFrameModalKey() {
        return i;
    }
    getInteractionDebugContext(e) {
        if (null == e) return;
        let t = h[e];
        if (null != t) return { interaction: t, messageId: f[e] };
        let n = p[e];
        if (null != n) return { interaction: n.interaction, messageId: n.messageId };
    }
}
let S = new g(s.h, {
    LOGOUT: function () {
        (h = {}),
            (I = {}),
            (f = {}),
            (p = {}),
            setInterval(() => {
                let e = Date.now();
                for (let [t, n] of Object.entries(p)) e - n.insertedAt > A && delete p[t];
            }, E);
    },
    INTERACTION_QUEUE: function (e) {
        let { nonce: t, messageId: n, data: i, onCreate: r, onCancel: a, onSuccess: s, onFailure: l } = e;
        null != n && ((I[n] = t), (f[t] = n)),
            (h[t] = { state: _.m.QUEUED, data: i, onCreate: r, onCancel: a, onSuccess: s, onFailure: l });
    },
    INTERACTION_CREATE: function (e) {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return !1;
        let i = h[t];
        if (null == i || i.state !== _.m.QUEUED) return !1;
        (i.state = _.m.CREATED), i.onCreate?.(n);
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        T(t);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t, errorCode: n, errorMessage: i, status: r, reasonCode: a } = e;
        if (null == t) return !1;
        let s = h[t];
        if (null == s) return !1;
        s.onFailure?.(n, i, r, a),
            s.data.interactionType === o.G4.APPLICATION_COMMAND
                ? m(t)
                : (h[t] = { ...s, state: _.m.FAILED, errorCode: n, errorMessage: i, reasonCode: a });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (null == t.nonce) return !1;
        {
            let e = h[t.nonce];
            if (null == e) return !1;
            e.onSuccess?.(), m(t.nonce);
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == c.A.getChannel(t)) return !1;
        for (let [e, t] of Object.entries(h)) t.state === _.m.FAILED && m(e);
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { application: t, nonce: n } = e;
        (r = t.id), T(n);
    },
    INTERACTION_IFRAME_MODAL_CLOSE: function () {
        (i = void 0), (r = void 0);
    },
    INTERACTION_IFRAME_MODAL_KEY_CREATE: function (e) {
        let { modalKey: t } = e;
        i = t;
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        T(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let t,
            n,
            { instance: i } = e,
            r = i.participants,
            a = d.default.getSessionId(),
            s = d.default.getId(),
            o = r.find((e) => e.user_id === s && e.session_id === a);
        if (null == o || null == o.nonce) return;
        let c = p[o.nonce];
        null == c ? ((t = f[o.nonce]), (n = h[o.nonce])) : ((t = c.messageId), (n = c.interaction)),
            null != n &&
                null != t &&
                (m(o.nonce), null != t && "channelId" in n.data && l.A.deleteMessage(n.data.channelId, t, !0));
    },
});
