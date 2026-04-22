"use strict";
let r, i;
n.d(t, { Ay: () => S });
var s = n(311907),
    a = n(73153),
    o = n(843472),
    l = n(155718),
    u = n(961350),
    d = n(734057),
    c = n(927813),
    _ = n(337591);
let f = 5 * c.A.Millis.MINUTE,
    E = 10 * c.A.Millis.SECOND,
    h = {},
    p = {},
    m = {},
    g = {};
function A(e) {
    if (null == e) return !1;
    let t = h[e];
    if (null == t) return !1;
    t.onSuccess?.(), I(e);
}
function I(e) {
    if (null != g[e]) return void delete g[e];
    let t = h[e];
    delete h[e];
    let n = m[e];
    null != n && delete p[n], delete m[e], (g[e] = { insertedAt: Date.now(), nonce: e, messageId: n, interaction: t });
}
class T extends s.Ay.Store {
    initialize() {
        this.waitFor(u.default, d.A);
    }
    static displayName = "InteractionStore";
    getInteraction(e) {
        let t = p[e.id];
        return null != t ? h[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(h)) {
            let r = m[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = p[e];
        return (null == n || null == h[n] || h[n].state === _.m.FAILED) && (null == h[t] || h[t].state === _.m.FAILED);
    }
    getIFrameModalApplicationId() {
        return i;
    }
    getIFrameModalKey() {
        return r;
    }
    getInteractionDebugContext(e) {
        if (null == e) return;
        let t = h[e];
        if (null != t) return { interaction: t, messageId: m[e] };
        let n = g[e];
        if (null != n) return { interaction: n.interaction, messageId: n.messageId };
    }
}
let S = new T(a.h, {
    LOGOUT: function () {
        (h = {}),
            (p = {}),
            (m = {}),
            (g = {}),
            setInterval(() => {
                let e = Date.now();
                for (let [t, n] of Object.entries(g)) e - n.insertedAt > E && delete g[t];
            }, f);
    },
    INTERACTION_QUEUE: function (e) {
        let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: s, onSuccess: a, onFailure: o } = e;
        null != n && ((p[n] = t), (m[t] = n)),
            (h[t] = { state: _.m.QUEUED, data: r, onCreate: i, onCancel: s, onSuccess: a, onFailure: o });
    },
    INTERACTION_CREATE: function (e) {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return !1;
        let r = h[t];
        if (null == r || r.state !== _.m.QUEUED) return !1;
        (r.state = _.m.CREATED), r.onCreate?.(n);
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        A(t);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t, errorCode: n, errorMessage: r, status: i, reasonCode: s } = e;
        if (null == t) return !1;
        let a = h[t];
        if (null == a) return !1;
        a.onFailure?.(n, r, i, s),
            a.data.interactionType === l.G4.APPLICATION_COMMAND
                ? I(t)
                : (h[t] = { ...a, state: _.m.FAILED, errorCode: n, errorMessage: r });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (null == t.nonce) return !1;
        {
            let e = h[t.nonce];
            if (null == e) return !1;
            e.onSuccess?.(), I(t.nonce);
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == d.A.getChannel(t)) return !1;
        for (let [e, t] of Object.entries(h)) t.state === _.m.FAILED && I(e);
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { application: t, nonce: n } = e;
        (i = t.id), A(n);
    },
    INTERACTION_IFRAME_MODAL_CLOSE: function () {
        (r = void 0), (i = void 0);
    },
    INTERACTION_IFRAME_MODAL_KEY_CREATE: function (e) {
        let { modalKey: t } = e;
        r = t;
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        A(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let t,
            n,
            { participants: r } = e,
            i = u.default.getSessionId(),
            s = u.default.getId(),
            a = r.find((e) => e.user_id === s && e.session_id === i);
        if (null == a || null == a.nonce) return;
        let l = g[a.nonce];
        null == l ? ((t = m[a.nonce]), (n = h[a.nonce])) : ((t = l.messageId), (n = l.interaction)),
            null != n &&
                null != t &&
                (I(a.nonce), null != t && "channelId" in n.data && o.A.deleteMessage(n.data.channelId, t, !0));
    },
});
