let l, i, u, r, a;
n.d(t, {
    i: function () {
        return E;
    }
});
var o,
    d,
    c,
    s,
    E,
    T,
    I = n(512722),
    f = n.n(I),
    p = n(442837),
    m = n(570140),
    S = n(904245),
    C = n(911969),
    _ = n(603721),
    g = n(70956);
((o = E || (E = {}))[(o.IN_FLIGHT = 0)] = 'IN_FLIGHT'), (o[(o.ERRORED = 1)] = 'ERRORED'), (o[(o.SUCCEEDED = 2)] = 'SUCCEEDED');
class N extends (T = p.ZP.Store) {
    getModalState(e) {
        return e !== l ? null : i;
    }
}
(s = 'InteractionModalStore'),
    (c = 'displayName') in (d = N)
        ? Object.defineProperty(d, c, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[c] = s),
    (t.Z = new N(m.Z, {
        LOGOUT: function () {
            return (l = null), (i = null), (u = null), (r = null), (a = null), !0;
        },
        INTERACTION_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            return t === a && (S.Z.deleteMessage(r, u, !0), (u = null), (r = null), (a = null)), !1;
        },
        INTERACTION_IFRAME_MODAL_CREATE: function (e) {
            let { nonce: t } = e;
            return t === a && (S.Z.deleteMessage(r, u, !0), (u = null), (r = null), (a = null)), !1;
        },
        INTERACTION_QUEUE: function (e) {
            let { messageId: t, nonce: n, data: o } = e;
            switch (o.interactionType) {
                case C.B8.APPLICATION_COMMAND:
                    return (u = t), (r = o.channelId), (a = n), !1;
                case C.B8.MODAL_SUBMIT:
                    return (
                        f()(null == l || 1 === i || 2 === i, 'cannot submit multiple modals at once'),
                        (l = n),
                        (i = 0),
                        setTimeout(() => {
                            l === n && 0 === i && (0, _.yr)(n);
                        }, 10 * g.Z.Millis.SECOND),
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
    }));
