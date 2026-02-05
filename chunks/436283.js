"use strict";
let r, i;
n.d(t, { Ay: () => P });
var a = n(311907),
    s = n(73153),
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
    g = {},
    E = {};
function A() {
    (h = {}),
        (m = {}),
        (g = {}),
        (E = {}),
        setInterval(() => {
            let e = Date.now();
            for (let [t, n] of Object.entries(E)) e - n.insertedAt > p && delete E[t];
        }, f);
}
function I(e) {
    let { nonce: t, messageId: n, data: r, onCreate: i, onCancel: a, onSuccess: s, onFailure: o } = e;
    null != n && ((m[n] = t), (g[t] = n)),
        (h[t] = { state: _.m.QUEUED, data: r, onCreate: i, onCancel: a, onSuccess: s, onFailure: o });
}
function T(e) {
    let { nonce: t, interactionId: n } = e;
    if (null == t) return !1;
    let r = h[t];
    if (null == r || r.state !== _.m.QUEUED) return !1;
    (r.state = _.m.CREATED), r.onCreate?.(n);
}
function y(e) {
    let { nonce: t } = e;
    L(t);
}
function S(e) {
    let { message: t } = e;
    if (null == t.nonce) return !1;
    {
        let e = h[t.nonce];
        if (null == e) return !1;
        e.onSuccess?.(), w(t.nonce);
    }
}
function v(e) {
    let { nonce: t, errorCode: n, errorMessage: r, status: i, reasonCode: a } = e;
    if (null == t) return !1;
    let s = h[t];
    if (null == s) return !1;
    s.onFailure?.(n, r, i, a),
        s.data.interactionType === l.G4.APPLICATION_COMMAND
            ? w(t)
            : (h[t] = { ...s, state: _.m.FAILED, errorCode: n, errorMessage: r });
}
function C(e) {
    let { channelId: t } = e;
    if (null == c.A.getChannel(t)) return !1;
    for (let [e, t] of Object.entries(h)) t.state === _.m.FAILED && w(e);
}
function b(e) {
    let { nonce: t } = e;
    L(t);
}
function N(e) {
    let { application: t, nonce: n } = e;
    (i = t.id), L(n);
}
function R() {
    (r = void 0), (i = void 0);
}
function O(e) {
    let { modalKey: t } = e;
    r = t;
}
function D(e) {
    let t,
        n,
        { participants: r } = e,
        i = u.default.getSessionId(),
        a = u.default.getId(),
        s = r.find((e) => e.user_id === a && e.session_id === i);
    if (null == s || null == s.nonce) return;
    let l = E[s.nonce];
    null == l ? ((t = g[s.nonce]), (n = h[s.nonce])) : ((t = l.messageId), (n = l.interaction)),
        null != n &&
            null != t &&
            (w(s.nonce), null != t && "channelId" in n.data && o.A.deleteMessage(n.data.channelId, t, !0));
}
function L(e) {
    if (null == e) return !1;
    let t = h[e];
    if (null == t) return !1;
    t.onSuccess?.(), w(e);
}
function w(e) {
    if (null != E[e]) return void delete E[e];
    let t = h[e];
    delete h[e];
    let n = g[e];
    null != n && delete m[n], delete g[e], (E[e] = { insertedAt: Date.now(), nonce: e, messageId: n, interaction: t });
}
class x extends a.Ay.Store {
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
            let r = g[t];
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
}
let P = new x(s.h, {
    LOGOUT: A,
    INTERACTION_QUEUE: I,
    INTERACTION_CREATE: T,
    INTERACTION_SUCCESS: y,
    INTERACTION_FAILURE: v,
    MESSAGE_CREATE: S,
    CHANNEL_SELECT: C,
    INTERACTION_IFRAME_MODAL_CREATE: N,
    INTERACTION_IFRAME_MODAL_CLOSE: R,
    INTERACTION_IFRAME_MODAL_KEY_CREATE: O,
    INTERACTION_MODAL_CREATE: b,
    EMBEDDED_ACTIVITY_UPDATE_V2: D,
});
