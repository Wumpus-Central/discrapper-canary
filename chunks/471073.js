let r, i, o, a, s;
n.d(t, {
    Z: () => A,
    i: () => E
});
var l,
    c = n(512722),
    u = n.n(c),
    d = n(442837),
    f = n(570140),
    _ = n(904245),
    p = n(911969),
    h = n(603721),
    m = n(70956);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var E = (function (e) {
    return ((e[(e.IN_FLIGHT = 0)] = 'IN_FLIGHT'), (e[(e.ERRORED = 1)] = 'ERRORED'), (e[(e.SUCCEEDED = 2)] = 'SUCCEEDED'), e);
})({});
function b() {
    return ((r = null), (i = null), (o = null), (a = null), (s = null), !0);
}
function y(e) {
    let { messageId: t, nonce: n, data: l } = e;
    switch (l.interactionType) {
        case p.B8.APPLICATION_COMMAND:
            return ((o = t), (a = l.channelId), (s = n), !1);
        case p.B8.MODAL_SUBMIT:
            return (
                u()(null == r || 1 === i || 2 === i, 'cannot submit multiple modals at once'),
                (r = n),
                (i = 0),
                setTimeout(() => {
                    r === n && 0 === i && (0, h.yr)(n);
                }, 10 * m.Z.Millis.SECOND),
                !0
            );
        default:
            return !1;
    }
}
function O(e) {
    let { nonce: t } = e;
    return (t === s && (_.Z.deleteMessage(a, o, !0), (o = null), (a = null), (s = null)), !1);
}
function v(e) {
    let { nonce: t } = e;
    return (t === s && (_.Z.deleteMessage(a, o, !0), (o = null), (a = null), (s = null)), !1);
}
function I(e) {
    let { nonce: t } = e;
    return null != t && t === r && ((i = 2), !0);
}
function T(e) {
    let { nonce: t } = e;
    return null != t && t === r && ((i = 1), !0);
}
class S extends (l = d.ZP.Store) {
    getModalState(e) {
        return e !== r ? null : i;
    }
}
g(S, 'displayName', 'InteractionModalStore');
let A = new S(f.Z, {
    LOGOUT: b,
    INTERACTION_MODAL_CREATE: O,
    INTERACTION_IFRAME_MODAL_CREATE: v,
    INTERACTION_QUEUE: y,
    INTERACTION_SUCCESS: I,
    INTERACTION_FAILURE: T
});
