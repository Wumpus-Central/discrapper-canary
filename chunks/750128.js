"use strict";
let i, r, s, a, o;
n.d(t, { A: () => A, Z: () => m });
var l,
    u = n(284009),
    c = n.n(u),
    d = n(17928),
    _ = n(228366),
    f = n(720149),
    h = n(155718),
    p = n(706727),
    E = n(927813),
    m =
        (((l = {})[(l.IN_FLIGHT = 0)] = "IN_FLIGHT"),
        (l[(l.ERRORED = 1)] = "ERRORED"),
        (l[(l.SUCCEEDED = 2)] = "SUCCEEDED"),
        l);
class g extends d.Ay.Store {
    static displayName = "InteractionModalStore";
    getModalState(e) {
        return e !== i ? null : r;
    }
}
let A = new g(_.h, {
    LOGOUT: function () {
        return (i = null), (r = null), (s = null), (a = null), (o = null), !0;
    },
    INTERACTION_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === o && (f.A.deleteMessage(a, s, !0), (s = null), (a = null), (o = null)), !1;
    },
    INTERACTION_IFRAME_MODAL_CREATE: function (e) {
        let { nonce: t } = e;
        return t === o && (f.A.deleteMessage(a, s, !0), (s = null), (a = null), (o = null)), !1;
    },
    INTERACTION_QUEUE: function (e) {
        let { messageId: t, nonce: n, data: l, preflight: u } = e;
        switch (l.interactionType) {
            case h.G4.APPLICATION_COMMAND:
                return (s = t), (a = l.channelId), (o = n), !1;
            case h.G4.MODAL_SUBMIT:
                c()(null == i || 1 === r || 2 === r, "cannot submit multiple modals at once"), (i = n), (r = 0);
                let d = (e) => {
                    setTimeout(() => {
                        i === n && 0 === r && (0, p.C1)(n);
                    }, e);
                };
                return (
                    null != u
                        ? (d(2 * E.A.Millis.MINUTE), u.then(() => d(10 * E.A.Millis.SECOND)).catch(() => (0, p.C1)(n)))
                        : d(10 * E.A.Millis.SECOND),
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
