let l, i, r, u, a;
n.d(t, {
    Z: () => _,
    i: () => g,
});
var o,
    c,
    d,
    s = n(512722),
    E = n.n(s),
    p = n(442837),
    I = n(570140),
    T = n(904245),
    f = n(911969),
    m = n(603721),
    S = n(70956),
    g =
        (((o = {})[(o.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (o[(o.ERRORED = 1)] = "ERRORED"),
        (o[(o.SUCCEEDED = 2)] = "SUCCEEDED"),
        o);
class C extends (d = p.ZP.Store) {
    getModalState(e) {
        return e !== l ? null : i;
    }
}
(c = "displayName") in C
    ? Object.defineProperty(C, c, {
          value: "InteractionModalStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (C[c] = "InteractionModalStore");
let _ = new C(I.Z, {
    LOGOUT: function () {
        return (l = null), (i = null), (r = null), (u = null), (a = null), !0;
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === a && (T.Z.deleteMessage(u, r, !0), (r = null), (u = null), (a = null)), !1;
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === a && (T.Z.deleteMessage(u, r, !0), (r = null), (u = null), (a = null)), !1;
    },
    INTERACTION_QUEUE: function (e) {
        let { messageId: t, nonce: n, data: o } = e;
        switch (o.interactionType) {
            case f.B8.APPLICATION_COMMAND:
                return (r = t), (u = o.channelId), (a = n), !1;
            case f.B8.MODAL_SUBMIT:
                return (
                    E()(null == l || 1 === i || 2 === i, "cannot submit multiple modals at once"),
                    (l = n),
                    (i = 0),
                    setTimeout(() => {
                        l === n && 0 === i && (0, m.yr)(n);
                    }, 10 * S.Z.Millis.SECOND),
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
    },
});
