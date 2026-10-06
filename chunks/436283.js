let i;
n.d(t, { Ay: () => g });
var r = n(127258),
    a = n(17928),
    s = n(73153),
    l = n(148494),
    o = n(280450),
    d = n(734057),
    c = n(927813),
    u = n(337591);
let _ = 5 * c.A.Millis.MINUTE,
    E = 10 * c.A.Millis.SECOND,
    A = {},
    h = {},
    f = {},
    I = {};
function p(e) {
    if (null == e) return !1;
    let t = A[e];
    if (null == t) return !1;
    (t.onSuccess?.(), T(e));
}
function T(e) {
    if (null != I[e]) return void delete I[e];
    let t = A[e];
    delete A[e];
    let n = f[e];
    (null != n && delete h[n],
        delete f[e],
        (I[e] = { insertedAt: Date.now(), nonce: e, messageId: n, interaction: t }));
}
class m extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default, d.A);
    }
    static displayName = "InteractionStore";
    getInteraction(e) {
        let t = h[e.id];
        return null != t ? A[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(A)) {
            let i = f[t];
            null != i && (e[i] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = h[e];
        return (null == n || null == A[n] || A[n].state === u.m.FAILED) && (null == A[t] || A[t].state === u.m.FAILED);
    }
    getIFrameModal() {
        return i;
    }
    getInteractionDebugContext(e) {
        if (null == e) return;
        let t = A[e];
        if (null != t) return { interaction: t, messageId: f[e] };
        let n = I[e];
        if (null != n) return { interaction: n.interaction, messageId: n.messageId };
    }
}
let g = new m(s.h, {
    LOGOUT: function () {
        ((A = {}),
            (h = {}),
            (f = {}),
            (I = {}),
            setInterval(() => {
                let e = Date.now();
                for (let [t, n] of Object.entries(I)) e - n.insertedAt > E && delete I[t];
            }, _));
    },
    INTERACTION_QUEUE: function (e) {
        let { nonce: t, messageId: n, data: i, onCreate: r, onCancel: a, onSuccess: s, onFailure: l } = e;
        (null != n && ((h[n] = t), (f[t] = n)),
            (A[t] = { state: u.m.QUEUED, data: i, onCreate: r, onCancel: a, onSuccess: s, onFailure: l }));
    },
    INTERACTION_CREATE: function (e) {
        let { nonce: t, interactionId: n } = e;
        if (null == t) return !1;
        let i = A[t];
        if (null == i || i.state !== u.m.QUEUED) return !1;
        ((i.state = u.m.CREATED), i.onCreate?.(n));
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        p(t);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t, errorCode: n, errorMessage: i, status: a, reasonCode: s } = e;
        if (null == t) return !1;
        let l = A[t];
        if (null == l) return !1;
        (l.onFailure?.(n, i, a, s),
            l.data.interactionType === r.G.APPLICATION_COMMAND
                ? T(t)
                : (A[t] = { ...l, state: u.m.FAILED, errorCode: n, errorMessage: i, reasonCode: s }));
    },
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
        if (null == t.nonce) return !1;
        {
            let e = A[t.nonce];
            if (null == e) return !1;
            (e.onSuccess?.(), T(t.nonce));
        }
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == d.A.getChannel(t)) return !1;
        for (let [e, t] of Object.entries(A)) t.state === u.m.FAILED && T(e);
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { application: t, nonce: n, id: r, customId: a, channelId: s } = e;
        ((i = { applicationId: t.id, interactionId: r, customId: a, channelId: s, modalKey: void 0 }), p(n));
    },
    INTERACTION_IFRAME_MODAL_CLOSE: function () {
        i = void 0;
    },
    INTERACTION_IFRAME_MODAL_KEY_CREATE: function (e) {
        let { interactionId: t, modalKey: n } = e;
        if (null == i || i.interactionId !== t) return !1;
        i = { ...i, modalKey: n };
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        p(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let t,
            n,
            { instance: i } = e,
            r = i.participants,
            a = o.default.getSessionId(),
            s = o.default.getId(),
            d = r.find((e) => e.user_id === s && e.session_id === a);
        if (null == d || null == d.nonce) return;
        let c = I[d.nonce];
        (null == c ? ((t = f[d.nonce]), (n = A[d.nonce])) : ((t = c.messageId), (n = c.interaction)),
            null != n &&
                null != t &&
                (T(d.nonce), null != t && "channelId" in n.data && l.A.deleteMessage(n.data.channelId, t, !0)));
    },
});
