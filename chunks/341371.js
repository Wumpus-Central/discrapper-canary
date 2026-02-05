"use strict";
n.d(t, { A: () => c });
var i = n(311907),
    s = n(73153);
let r = !1,
    l = null,
    a = null;
class o extends i.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: r, verifyErrors: l, redirectGuildId: a };
    }
}
let c = new o(s.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (r = !0), (l = null), (a = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (r = !1), (l = t);
    },
});
