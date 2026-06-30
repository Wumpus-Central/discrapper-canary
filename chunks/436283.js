"use strict";
let i, r;
n.d(t, { Ay: () => S });
var s = n(17928),
    a = n(228366),
    o = n(493336),
    l = n(155718),
    u = n(495544),
    c = n(734057),
    d = n(927813),
    _ = n(337591);
let h = 5 * d.A.Millis.MINUTE,
    f = 10 * d.A.Millis.SECOND,
    p = {},
    E = {},
    m = {},
    g = {};
function A(e) {
    if (null == e) return !1;
    let t = p[e];
    if (null == t) return !1;
    t.onSuccess?.(), I(e);
}
function I(e) {
    if (null != g[e]) return void delete g[e];
    let t = p[e];
    delete p[e];
    let n = m[e];
    null != n && delete E[n], delete m[e], (g[e] = { insertedAt: Date.now(), nonce: e, messageId: n, interaction: t });
}
class T extends s.Ay.Store {
    initialize() {
        this.waitFor(u.default, c.A);
    }
    static displayName = "InteractionStore";
    getInteraction(e) {
        let t = E[e.id];
        return null != t ? p[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(p)) {
            let i = m[t];
            null != i && (e[i] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = E[e];
        return (null == n || null == p[n] || p[n].state === _.m.FAILED) && (null == p[t] || p[t].state === _.m.FAILED);
    }
    getIFrameModalApplicationId() {
        return r;
    }
    getIFrameModalKey() {
        return i;
    }
    getInteractionDebugContext(e) {
        if (null == e) return;
        let t = p[e];
        if (null != t) return { interaction: t, messageId: m[e] };
        let n = g[e];
        if (null != n) return { interaction: n.interaction, messageId: n.messageId };
    }
}
let S = new T(a.h, {
    LOGOUT: function () {
        (p = {}),
            (E = {}),
            (m = {}),
            (g = {}),
            setInterval(() => {
                let e = Date.now();
                for (let [t, n] of Object.entries(g)) e - n.insertedAt > f && delete g[t];
            }, h);
    },
    INTERACTION_QUEUE: function (e) {
        let { nonce: t, messageId: n, data: i, onCreate: r, onCancel: s, onSuccess: a, onFailure: o } = e;
        null != n && ((E[n] = t), (m[t] = n)),
            (p[t] = { state: _.m.QUEUED, data: i, onCreate: r, onCancel: s, onSuccess: a, onFailure: o });
    },
    INTERACTION_CREATE: function (e) {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return !1;
        let i = p[t];
        if (null == i || i.state !== _.m.QUEUED) return !1;
        (i.state = _.m.CREATED), i.onCreate?.(n);
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        A(t);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t, errorCode: n, errorMessage: i, status: r, reasonCode: s } = e;
        if (null == t) return !1;
        let a = p[t];
        if (null == a) return !1;
        a.onFailure?.(n, i, r, s),
            a.data.interactionType === l.G4.APPLICATION_COMMAND
                ? I(t)
                : (p[t] = { ...a, state: _.m.FAILED, errorCode: n, errorMessage: i });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (null == t.nonce) return !1;
        {
            let e = p[t.nonce];
            if (null == e) return !1;
            e.onSuccess?.(), I(t.nonce);
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == c.A.getChannel(t)) return !1;
        for (let [e, t] of Object.entries(p)) t.state === _.m.FAILED && I(e);
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { application: t, nonce: n } = e;
        (r = t.id), A(n);
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
        A(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let t,
            n,
            { instance: i } = e,
            r = i.participants,
            s = u.default.getSessionId(),
            a = u.default.getId(),
            l = r.find((e) => e.user_id === a && e.session_id === s);
        if (null == l || null == l.nonce) return;
        let c = g[l.nonce];
        null == c ? ((t = m[l.nonce]), (n = p[l.nonce])) : ((t = c.messageId), (n = c.interaction)),
            null != n &&
                null != t &&
                (I(l.nonce), null != t && "channelId" in n.data && o.A.deleteMessage(n.data.channelId, t, !0));
    },
});
