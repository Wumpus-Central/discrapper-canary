let s, i, l, r, a;
n.d(t, { A: () => _, Z: () => C });
var o,
    d = n(284009),
    u = n.n(d),
    c = n(17928),
    h = n(228366),
    E = n(720149),
    p = n(155718),
    A = n(706727),
    m = n(927813),
    C =
        (((o = {})[(o.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (o[(o.ERRORED = 1)] = "ERRORED"),
        (o[(o.SUCCEEDED = 2)] = "SUCCEEDED"),
        o);
class g extends c.Ay.Store {
    static displayName = "InteractionModalStore";
    getModalState(e) {
        return e !== s ? null : i;
    }
}
let _ = new g(h.h, {
    LOGOUT: function () {
        return (s = null), (i = null), (l = null), (r = null), (a = null), !0;
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === a && (E.A.deleteMessage(r, l, !0), (l = null), (r = null), (a = null)), !1;
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === a && (E.A.deleteMessage(r, l, !0), (l = null), (r = null), (a = null)), !1;
    },
    INTERACTION_QUEUE: function (e) {
        let { messageId: t, nonce: n, data: o, preflight: d } = e;
        switch (o.interactionType) {
            case p.G4.APPLICATION_COMMAND:
                return (l = t), (r = o.channelId), (a = n), !1;
            case p.G4.MODAL_SUBMIT:
                u()(null == s || 1 === i || 2 === i, "cannot submit multiple modals at once"), (s = n), (i = 0);
                let c = (e) => {
                    setTimeout(() => {
                        s === n && 0 === i && (0, A.C1)(n);
                    }, e);
                };
                return (
                    null != d
                        ? (c(2 * m.A.Millis.MINUTE), d.then(() => c(10 * m.A.Millis.SECOND)).catch(() => (0, A.C1)(n)))
                        : c(10 * m.A.Millis.SECOND),
                    !0
                );
            default:
                return !1;
        }
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        return null != t && t === s && ((i = 2), !0);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        return null != t && t === s && ((i = 1), !0);
    },
});
