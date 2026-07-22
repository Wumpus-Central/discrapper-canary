"use strict";
let i, r, a, s, l;
n.d(t, { A: () => T, Z: () => f });
var o,
    d = n(284009),
    c = n.n(d),
    u = n(17928),
    _ = n(228366),
    E = n(493336),
    A = n(155718),
    h = n(706727),
    I = n(927813),
    f =
        (((o = {})[(o.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (o[(o.ERRORED = 1)] = "ERRORED"),
        (o[(o.SUCCEEDED = 2)] = "SUCCEEDED"),
        o);
class p extends u.Ay.Store {
    static displayName = "InteractionModalStore";
    getModalState(e) {
        return e !== i ? null : r;
    }
}
let T = new p(_.h, {
    LOGOUT: function () {
        return (i = null), (r = null), (a = null), (s = null), (l = null), !0;
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === l && (E.A.deleteMessage(s, a, !0), (a = null), (s = null), (l = null)), !1;
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === l && (E.A.deleteMessage(s, a, !0), (a = null), (s = null), (l = null)), !1;
    },
    INTERACTION_QUEUE: function (e) {
        let { messageId: t, nonce: n, data: o, preflight: d } = e;
        switch (o.interactionType) {
            case A.G4.APPLICATION_COMMAND:
                return (a = t), (s = o.channelId), (l = n), !1;
            case A.G4.MODAL_SUBMIT:
                c()(null == i || 1 === r || 2 === r, "cannot submit multiple modals at once"), (i = n), (r = 0);
                let u = (e) => {
                    setTimeout(() => {
                        i === n && 0 === r && (0, h.C1)(n);
                    }, e);
                };
                return (
                    null != d
                        ? (u(2 * I.A.Millis.MINUTE), d.then(() => u(10 * I.A.Millis.SECOND)).catch(() => (0, h.C1)(n)))
                        : u(10 * I.A.Millis.SECOND),
                    !0
                );
            default:
                return !1;
        }
    },
    INTERACTION_SUCCESS: function (e) {
        let { nonce: t } = e;
        return null != t && t === i && ((r = 2), !0);
    },
    INTERACTION_FAILURE: function (e) {
        let { nonce: t } = e;
        return null != t && t === i && ((r = 1), !0);
    },
});
