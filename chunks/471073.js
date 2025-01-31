let l, i, u, a, r;
n.d(t, {
    Z: () => N,
    i: () => _
});
var o,
    d,
    c,
    s,
    E = n(512722),
    T = n.n(E),
    I = n(442837),
    p = n(570140),
    m = n(904245),
    S = n(911969),
    f = n(603721),
    C = n(70956),
    _ = (((o = {})[(o.IN_FLIGHT = 0)] = 'IN_FLIGHT'), (o[(o.ERRORED = 1)] = 'ERRORED'), (o[(o.SUCCEEDED = 2)] = 'SUCCEEDED'), o);
class g extends (s = I.ZP.Store) {
    getModalState(e) {
        return e !== l ? null : i;
    }
}
(c = 'InteractionModalStore'),
    (d = 'displayName') in g
        ? Object.defineProperty(g, d, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[d] = c);
let N = new g(p.Z, {
    LOGOUT: function () {
        return (l = null), (i = null), (u = null), (a = null), (r = null), !0;
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === r && (m.Z.deleteMessage(a, u, !0), (u = null), (a = null), (r = null)), !1;
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === r && (m.Z.deleteMessage(a, u, !0), (u = null), (a = null), (r = null)), !1;
    },
    INTERACTION_QUEUE: function (e) {
        let { messageId: t, nonce: n, data: o } = e;
        switch (o.interactionType) {
            case S.B8.APPLICATION_COMMAND:
                return (u = t), (a = o.channelId), (r = n), !1;
            case S.B8.MODAL_SUBMIT:
                return (
                    T()(null == l || 1 === i || 2 === i, 'cannot submit multiple modals at once'),
                    (l = n),
                    (i = 0),
                    setTimeout(() => {
                        l === n && 0 === i && (0, f.yr)(n);
                    }, 10 * C.Z.Millis.SECOND),
                    !0
                );
            default:
                return !1;
        }
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        return null != t && t === l && ((i = 2), !0);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        return null != t && t === l && ((i = 1), !0);
    }
});
