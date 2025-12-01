let r, i, a, o, s;
n.d(t, {
    Z: () => A,
    i: () => E,
});
var l,
    c = n(512722),
    u = n.n(c),
    d = n(442837),
    f = n(570140),
    p = n(904245),
    _ = n(911969),
    m = n(603721),
    h = n(70956);
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
    return (r = null), (i = null), (a = null), (o = null), (s = null), !0;
}
function y(e) {
    let { messageId: t, nonce: n, data: l, preflight: c } = e;
    switch (l.interactionType) {
        case _.B8.APPLICATION_COMMAND:
            return (a = t), (o = l.channelId), (s = n), !1;
        case _.B8.MODAL_SUBMIT:
            u()(null == r || 1 === i || 2 === i, "cannot submit multiple modals at once"), (r = n), (i = 0);
            let d = (e) => {
                setTimeout(() => {
                    r === n && 0 === i && (0, m.yr)(n);
                }, e);
            };
            return (
                null != c
                    ? (d(2 * h.Z.Millis.MINUTE), c.then(() => d(10 * h.Z.Millis.SECOND)).catch(() => (0, m.yr)(n)))
                    : d(10 * h.Z.Millis.SECOND),
                !0
            );
        default:
            return !1;
    }
}
function O(e) {
    let { nonce: t } = e;
    return t === s && (p.Z.deleteMessage(o, a, !0), (a = null), (o = null), (s = null)), !1;
}
function v(e) {
    let { nonce: t } = e;
    return t === s && (p.Z.deleteMessage(o, a, !0), (a = null), (o = null), (s = null)), !1;
}
function S(e) {
    let { nonce: t } = e;
    return null != t && t === r && ((i = 2), !0);
}
function I(e) {
    let { nonce: t } = e;
    return null != t && t === r && ((i = 1), !0);
}
class T extends (l = d.ZP.Store) {
    getModalState(e) {
        return e !== r ? null : i;
    }
}
g(T, "displayName", "InteractionModalStore");
let A = new T(f.Z, {
    LOGOUT: b,
    INTERACTION_MODAL_CREATE: O,
    INTERACTION_IFRAME_MODAL_CREATE: v,
    INTERACTION_QUEUE: y,
    INTERACTION_SUCCESS: S,
    INTERACTION_FAILURE: I,
});
