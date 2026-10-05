let i, r;
n.d(t, { Ay: () => S });
var a = n(127258),
    s = n(17928),
    l = n(73153),
    o = n(148494),
    d = n(280450),
    c = n(734057),
    u = n(927813),
    _ = n(337591);
let E = 5 * u.A.Millis.MINUTE,
    A = 10 * u.A.Millis.SECOND,
    h = {},
    f = {},
    I = {},
    p = {};
function T(e) {
    if (null == e) return !1;
    let t = h[e];
    if (null == t) return !1;
    (t.onSuccess?.(), g(e));
}
function g(e) {
    if (null != p[e]) return void delete p[e];
    let t = h[e];
    delete h[e];
    let n = I[e];
    (null != n && delete f[n],
        delete I[e],
        (p[e] = { insertedAt: Date.now(), nonce: e, messageId: n, interaction: t }));
}
class m extends s.Ay.Store {
    initialize() {
        this.waitFor(d.default, c.A);
    }
    static displayName = "InteractionStore";
    getInteraction(e) {
        let t = f[e.id];
        return null != t ? h[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(h)) {
            let i = I[t];
            null != i && (e[i] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = f[e];
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
        if (null != t) return { interaction: t, messageId: I[e] };
        let n = p[e];
        if (null != n) return { interaction: n.interaction, messageId: n.messageId };
    }
}
let S = new m(l.h, {
    LOGOUT: function () {
        ((h = {}),
            (f = {}),
            (I = {}),
            (p = {}),
            setInterval(() => {
                let e = Date.now();
                for (let [t, n] of Object.entries(p)) e - n.insertedAt > A && delete p[t];
            }, E));
    },
    INTERACTION_QUEUE: function (e) {
        let { nonce: t, messageId: n, data: i, onCreate: r, onCancel: a, onSuccess: s, onFailure: l } = e;
        (null != n && ((f[n] = t), (I[t] = n)),
            (h[t] = { state: _.m.QUEUED, data: i, onCreate: r, onCancel: a, onSuccess: s, onFailure: l }));
    },
    INTERACTION_CREATE: function (e) {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return !1;
        let i = h[t];
        if (null == i || i.state !== _.m.QUEUED) return !1;
        ((i.state = _.m.CREATED), i.onCreate?.(n));
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        T(t);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t, errorCode: n, errorMessage: i, status: r, reasonCode: s } = e;
        if (null == t) return !1;
        let l = h[t];
        if (null == l) return !1;
        (l.onFailure?.(n, i, r, s),
            l.data.interactionType === a.G.APPLICATION_COMMAND
                ? g(t)
                : (h[t] = { ...l, state: _.m.FAILED, errorCode: n, errorMessage: i, reasonCode: s }));
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (null == t.nonce) return !1;
        {
            let e = h[t.nonce];
            if (null == e) return !1;
            (e.onSuccess?.(), g(t.nonce));
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == c.A.getChannel(t)) return !1;
        for (let [e, t] of Object.entries(h)) t.state === _.m.FAILED && g(e);
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { application: t, nonce: n } = e;
        ((r = t.id), T(n));
    },
    INTERACTION_IFRAME_MODAL_CLOSE: function () {
        ((i = void 0), (r = void 0));
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
            l = r.find((e) => e.user_id === s && e.session_id === a);
        if (null == l || null == l.nonce) return;
        let c = p[l.nonce];
        (null == c ? ((t = I[l.nonce]), (n = h[l.nonce])) : ((t = c.messageId), (n = c.interaction)),
            null != n &&
                null != t &&
                (g(l.nonce), null != t && "channelId" in n.data && o.A.deleteMessage(n.data.channelId, t, !0)));
    },
});
