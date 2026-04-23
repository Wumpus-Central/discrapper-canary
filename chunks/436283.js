"use strict";
let i, r;
n.d(t, { Ay: () => S });
var s = n(17928),
    a = n(228366),
    o = n(720149),
    l = n(155718),
    d = n(495544),
    _ = n(734057),
    u = n(927813),
    c = n(337591);
let E = 5 * u.A.Millis.MINUTE,
    h = 10 * u.A.Millis.SECOND,
    m = {},
    f = {},
    g = {},
    p = {};
function A(e) {
    if (null == e) return !1;
    let t = m[e];
    if (null == t) return !1;
    t.onSuccess?.(), I(e);
}
function I(e) {
    if (null != p[e]) return void delete p[e];
    let t = m[e];
    delete m[e];
    let n = g[e];
    null != n && delete f[n], delete g[e], (p[e] = { insertedAt: Date.now(), nonce: e, messageId: n, interaction: t });
}
class T extends s.Ay.Store {
    initialize() {
        this.waitFor(d.default, _.A);
    }
    static displayName = "InteractionStore";
    getInteraction(e) {
        let t = f[e.id];
        return null != t ? m[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(m)) {
            let i = g[t];
            null != i && (e[i] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = f[e];
        return (null == n || null == m[n] || m[n].state === c.m.FAILED) && (null == m[t] || m[t].state === c.m.FAILED);
    }
    getIFrameModalApplicationId() {
        return r;
    }
    getIFrameModalKey() {
        return i;
    }
    getInteractionDebugContext(e) {
        if (null == e) return;
        let t = m[e];
        if (null != t) return { interaction: t, messageId: g[e] };
        let n = p[e];
        if (null != n) return { interaction: n.interaction, messageId: n.messageId };
    }
}
let S = new T(a.h, {
    LOGOUT: function () {
        (m = {}),
            (f = {}),
            (g = {}),
            (p = {}),
            setInterval(() => {
                let e = Date.now();
                for (let [t, n] of Object.entries(p)) e - n.insertedAt > h && delete p[t];
            }, E);
    },
    INTERACTION_QUEUE: function (e) {
        let { nonce: t, messageId: n, data: i, onCreate: r, onCancel: s, onSuccess: a, onFailure: o } = e;
        null != n && ((f[n] = t), (g[t] = n)),
            (m[t] = { state: c.m.QUEUED, data: i, onCreate: r, onCancel: s, onSuccess: a, onFailure: o });
    },
    INTERACTION_CREATE: function (e) {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return !1;
        let i = m[t];
        if (null == i || i.state !== c.m.QUEUED) return !1;
        (i.state = c.m.CREATED), i.onCreate?.(n);
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        A(t);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t, errorCode: n, errorMessage: i, status: r, reasonCode: s } = e;
        if (null == t) return !1;
        let a = m[t];
        if (null == a) return !1;
        a.onFailure?.(n, i, r, s),
            a.data.interactionType === l.G4.APPLICATION_COMMAND
                ? I(t)
                : (m[t] = { ...a, state: c.m.FAILED, errorCode: n, errorMessage: i });
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (null == t.nonce) return !1;
        {
            let e = m[t.nonce];
            if (null == e) return !1;
            e.onSuccess?.(), I(t.nonce);
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == _.A.getChannel(t)) return !1;
        for (let [e, t] of Object.entries(m)) t.state === c.m.FAILED && I(e);
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
            { participants: i } = e,
            r = d.default.getSessionId(),
            s = d.default.getId(),
            a = i.find((e) => e.user_id === s && e.session_id === r);
        if (null == a || null == a.nonce) return;
        let l = p[a.nonce];
        null == l ? ((t = g[a.nonce]), (n = m[a.nonce])) : ((t = l.messageId), (n = l.interaction)),
            null != n &&
                null != t &&
                (I(a.nonce), null != t && "channelId" in n.data && o.A.deleteMessage(n.data.channelId, t, !0));
    },
});
