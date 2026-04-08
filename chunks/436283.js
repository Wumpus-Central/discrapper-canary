"use strict";
let r, i;
n.d(t, { Ay: () => x });
var s = n(311907),
    a = n(73153),
    o = n(843472),
    l = n(155718),
    u = n(961350),
    c = n(734057),
    d = n(927813),
    _ = n(337591);
let f = 5 * d.A.Millis.MINUTE,
    p = 10 * d.A.Millis.SECOND,
    h = {},
    m = {},
    E = {},
    g = {};
function A() {
    (h = {}),
        (m = {}),
        (E = {}),
        (g = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [t, n] of Object.entries(g)) e - n.insertedAt > p && delete g[t];
        }, f);
}
function I(e) {
    let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: s, onSuccess: a, onFailure: o } = e;
    null != n && ((m[n] = t), (E[t] = n)),
        (h[t] = { state: _.m.QUEUED, data: r, onCreate: i, onCancel: s, onSuccess: a, onFailure: o });
}
function T(e) {
    let { nonce: t, interactionId: n } = e;
    if (null == t) return !1;
    let r = h[t];
    if (null == r || r.state !== _.m.QUEUED) return !1;
    (r.state = _.m.CREATED), r.onCreate?.(n);
}
function S(e) {
    let { nonce: t } = e;
    L(t);
}
function y(e) {
    let { message: t } = e;
    if (null == t.nonce) return !1;
    {
        let e = h[t.nonce];
        if (null == e) return !1;
        e.onSuccess?.(), w(t.nonce);
    }
}
function v(e) {
    let { nonce: t, errorCode: n, errorMessage: r, status: i, reasonCode: s } = e;
    if (null == t) return !1;
    let a = h[t];
    if (null == a) return !1;
    a.onFailure?.(n, r, i, s),
        a.data.interactionType === l.G4.APPLICATION_COMMAND
            ? w(t)
            : (h[t] = { ...a, state: _.m.FAILED, errorCode: n, errorMessage: r });
}
function N(e) {
    let { channelId: t } = e;
    if (null == c.A.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(h)) t.state === _.m.FAILED && w(e);
}
function C(e) {
    let { nonce: t } = e;
    L(t);
}
function R(e) {
    let { application: t, nonce: n } = e;
    (i = t.id), L(n);
}
function O() {
    (r = void 0), (i = void 0);
}
function b(e) {
    let { modalKey: t } = e;
    r = t;
}
function D(e) {
    let t,
        n,
        { participants: r } = e,
        i = u.default.getSessionId(),
        s = u.default.getId(),
        a = r.find((e) => e.user_id === s && e.session_id === i);
    if (null == a || null == a.nonce) return;
    let l = g[a.nonce];
    null == l ? ((t = E[a.nonce]), (n = h[a.nonce])) : ((t = l.messageId), (n = l.interaction)),
        null != n &&
            null != t &&
            (w(a.nonce), null != t && "channelId" in n.data && o.A.deleteMessage(n.data.channelId, t, !0));
}
function L(e) {
    if (null == e) return !1;
    let t = h[e];
    if (null == t) return !1;
    t.onSuccess?.(), w(e);
}
function w(e) {
    if (null != g[e]) return void delete g[e];
    let t = h[e];
    delete h[e];
    let n = E[e];
    null != n && delete m[n], delete E[e], (g[e] = { insertedAt: Date.now(), nonce: e, messageId: n, interaction: t });
}
class M extends s.Ay.Store {
    initialize() {
        this.waitFor(u.default, c.A);
    }
    static displayName = "InteractionStore";
    getInteraction(e) {
        let t = m[e.id];
        return null != t ? h[t] : null;
    }
    getMessageInteractionStates() {
        let e = {};
        for (let [t, n] of Object.entries(h)) {
            let r = E[t];
            null != r && (e[r] = n.state);
        }
        return e;
    }
    canQueueInteraction(e, t) {
        let n = m[e];
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
        if (null != t) return { interaction: t, messageId: E[e] };
        let n = g[e];
        if (null != n) return { interaction: n.interaction, messageId: n.messageId };
    }
}
let x = new M(a.h, {
    LOGOUT: A,
    INTERACTION_QUEUE: I,
    INTERACTION_CREATE: T,
    INTERACTION_SUCCESS: S,
    INTERACTION_FAILURE: v,
    MESSAGE_CREATE: y,
    CHANNEL_SELECT: N,
    INTERACTION_IFRAME_MODAL_CREATE: R,
    INTERACTION_IFRAME_MODAL_CLOSE: O,
    INTERACTION_IFRAME_MODAL_KEY_CREATE: b,
    INTERACTION_MODAL_CREATE: C,
    EMBEDDED_ACTIVITY_UPDATE_V2: D,
});
