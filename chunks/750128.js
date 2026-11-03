let e, u, E, i, r;
t.d(n, { A: () => R, Z: () => O });
var s,
    a = t(284009),
    c = t.n(a),
    A = t(127258),
    I = t(17928),
    C = t(73153),
    T = t(148494),
    o = t(706727),
    N = t(927813),
    O =
        (((s = {})[(s.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (s[(s.ERRORED = 1)] = "ERRORED"),
        (s[(s.SUCCEEDED = 2)] = "SUCCEEDED"),
        s);
class M extends I.Ay.Store {
    static displayName = "InteractionModalStore";
    getModalState(l) {
        return l !== e ? null : u;
    }
}
let R = new M(C.h, {
    LOGOUT: function () {
        return ((e = null), (u = null), (E = null), (i = null), (r = null), !0);
    },
    INTERACTION_MODAL_CREATE: function (l) {
        let { nonce: n } = l;
        return (n === r && (T.A.deleteMessage(i, E, !0), (E = null), (i = null), (r = null)), !1);
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (l) {
        let { nonce: n } = l;
        return (n === r && (T.A.deleteMessage(i, E, !0), (E = null), (i = null), (r = null)), !1);
    },
    INTERACTION_QUEUE: function (l) {
        let { messageId: n, nonce: t, data: s, preflight: a } = l;
        switch (s.interactionType) {
            case A.G.APPLICATION_COMMAND:
                return ((E = n), (i = s.channelId), (r = t), !1);
            case A.G.MODAL_SUBMIT:
                (c()(null == e || 1 === u || 2 === u, "cannot submit multiple modals at once"), (e = t), (u = 0));
                let I = (l) => {
                    setTimeout(() => {
                        e === t && 0 === u && (0, o.C1)(t);
                    }, l);
                };
                return (
                    null != a
                        ? (I(2 * N.A.Millis.MINUTE), a.then(() => I(10 * N.A.Millis.SECOND)).catch(() => (0, o.C1)(t)))
                        : I(10 * N.A.Millis.SECOND),
                    !0
                );
            default:
                return !1;
        }
    },
    INTERACTION_SUCCESS: function (l) {
        let { nonce: n } = l;
        return null != n && n === e && ((u = 2), !0);
    },
    INTERACTION_FAILURE: function (l) {
        let { nonce: n } = l;
        return null != n && n === e && ((u = 1), !0);
    },
});
