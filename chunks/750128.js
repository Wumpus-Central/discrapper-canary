let l, i, u, r, o;
t.d(e, { A: () => N, Z: () => T });
var s,
    E = t(284009),
    d = t.n(E),
    a = t(127258),
    c = t(17928),
    A = t(73153),
    h = t(148494),
    I = t(706727),
    C = t(927813),
    T =
        (((s = {})[(s.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (s[(s.ERRORED = 1)] = "ERRORED"),
        (s[(s.SUCCEEDED = 2)] = "SUCCEEDED"),
        s);
class w extends c.Ay.Store {
    static displayName = "InteractionModalStore";
    getModalState(n) {
        return n !== l ? null : i;
    }
}
let N = new w(A.h, {
    LOGOUT: function () {
        return ((l = null), (i = null), (u = null), (r = null), (o = null), !0);
    },
    INTERACTION_MODAL_CREATE: function (n) {
        let { nonce: e } = n;
        return (e === o && (h.A.deleteMessage(r, u, !0), (u = null), (r = null), (o = null)), !1);
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (n) {
        let { nonce: e } = n;
        return (e === o && (h.A.deleteMessage(r, u, !0), (u = null), (r = null), (o = null)), !1);
    },
    INTERACTION_QUEUE: function (n) {
        let { messageId: e, nonce: t, data: s, preflight: E } = n;
        switch (s.interactionType) {
            case a.G.APPLICATION_COMMAND:
                return ((u = e), (r = s.channelId), (o = t), !1);
            case a.G.MODAL_SUBMIT:
                (d()(null == l || 1 === i || 2 === i, "cannot submit multiple modals at once"), (l = t), (i = 0));
                let c = (n) => {
                    setTimeout(() => {
                        l === t && 0 === i && (0, I.C1)(t);
                    }, n);
                };
                return (
                    null != E
                        ? (c(2 * C.A.Millis.MINUTE), E.then(() => c(10 * C.A.Millis.SECOND)).catch(() => (0, I.C1)(t)))
                        : c(10 * C.A.Millis.SECOND),
                    !0
                );
            default:
                return !1;
        }
    },
    INTERACTION_SUCCESS: function (n) {
        let { nonce: e } = n;
        return null != e && e === l && ((i = 2), !0);
    },
    INTERACTION_FAILURE: function (n) {
        let { nonce: e } = n;
        return null != e && e === l && ((i = 1), !0);
    },
});
