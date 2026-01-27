let r, l, a, i, s;
n.d(t, {
    A: () => j,
    Z: () => y,
});
var o,
    c,
    u,
    d = n(284009),
    m = n.n(d),
    f = n(311907),
    p = n(73153),
    h = n(843472),
    b = n(155718),
    g = n(706727),
    x = n(927813),
    y =
        (((o = {})[(o.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (o[(o.ERRORED = 1)] = "ERRORED"),
        (o[(o.SUCCEEDED = 2)] = "SUCCEEDED"),
        o);
class v extends (u = f.Ay.Store) {
    getModalState(e) {
        return e !== r ? null : l;
    }
}
(c = "displayName") in v
    ? Object.defineProperty(v, c, {
          value: "InteractionModalStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (v[c] = "InteractionModalStore");
let j = new v(p.h, {
    LOGOUT: function () {
        return (r = null), (l = null), (a = null), (i = null), (s = null), !0;
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === s && (h.A.deleteMessage(i, a, !0), (a = null), (i = null), (s = null)), !1;
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === s && (h.A.deleteMessage(i, a, !0), (a = null), (i = null), (s = null)), !1;
    },
    INTERACTION_QUEUE: function (e) {
        let { messageId: t, nonce: n, data: o, preflight: c } = e;
        switch (o.interactionType) {
            case b.G4.APPLICATION_COMMAND:
                return (a = t), (i = o.channelId), (s = n), !1;
            case b.G4.MODAL_SUBMIT:
                m()(null == r || 1 === l || 2 === l, "cannot submit multiple modals at once"), (r = n), (l = 0);
                let u = (e) => {
                    setTimeout(() => {
                        r === n && 0 === l && (0, g.C1)(n);
                    }, e);
                };
                return (
                    null != c
                        ? (u(2 * x.A.Millis.MINUTE), c.then(() => u(10 * x.A.Millis.SECOND)).catch(() => (0, g.C1)(n)))
                        : u(10 * x.A.Millis.SECOND),
                    !0
                );
            default:
                return !1;
        }
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        return null != t && t === r && ((l = 2), !0);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        return null != t && t === r && ((l = 1), !0);
    },
});
