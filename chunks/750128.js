let r, i, a, s, o;
n.d(t, {
    A: () => T,
    Z: () => E,
});
var l,
    c = n(284009),
    u = n.n(c),
    d = n(311907),
    f = n(73153),
    p = n(843472),
    _ = n(155718),
    h = n(706727),
    m = n(927813);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var E = (function (e) {
    return (
        (e[(e.IN_FLIGHT = 0)] = "IN_FLIGHT"), (e[(e.ERRORED = 1)] = "ERRORED"), (e[(e.SUCCEEDED = 2)] = "SUCCEEDED"), e
    );
})({});
function b() {
    return (r = null), (i = null), (a = null), (s = null), (o = null), !0;
}
function y(e) {
    let { messageId: t, nonce: n, data: l, preflight: c } = e;
    switch (l.interactionType) {
        case _.G4.APPLICATION_COMMAND:
            return (a = t), (s = l.channelId), (o = n), !1;
        case _.G4.MODAL_SUBMIT:
            u()(null == r || 1 === i || 2 === i, "cannot submit multiple modals at once"), (r = n), (i = 0);
            let d = (e) => {
                setTimeout(() => {
                    r === n && 0 === i && (0, h.C1)(n);
                }, e);
            };
            return (
                null != c
                    ? (d(2 * m.A.Millis.MINUTE), c.then(() => d(10 * m.A.Millis.SECOND)).catch(() => (0, h.C1)(n)))
                    : d(10 * m.A.Millis.SECOND),
                !0
            );
        default:
            return !1;
    }
}
function O(e) {
    let { nonce: t } = e;
    return t === o && (p.A.deleteMessage(s, a, !0), (a = null), (s = null), (o = null)), !1;
}
function A(e) {
    let { nonce: t } = e;
    return t === o && (p.A.deleteMessage(s, a, !0), (a = null), (s = null), (o = null)), !1;
}
function v(e) {
    let { nonce: t } = e;
    return null != t && t === r && ((i = 2), !0);
}
function S(e) {
    let { nonce: t } = e;
    return null != t && t === r && ((i = 1), !0);
}
class I extends (l = d.Ay.Store) {
    getModalState(e) {
        return e !== r ? null : i;
    }
}
g(I, "displayName", "InteractionModalStore");
let T = new I(f.h, {
    LOGOUT: b,
    INTERACTION_MODAL_CREATE: O,
    INTERACTION_IFRAME_MODAL_CREATE: A,
    INTERACTION_QUEUE: y,
    INTERACTION_SUCCESS: v,
    INTERACTION_FAILURE: S,
});
