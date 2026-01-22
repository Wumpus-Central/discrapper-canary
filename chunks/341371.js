n.d(t, { A: () => d });
var r,
    i,
    s = n(311907),
    l = n(73153);
let a = !1,
    o = null,
    c = null;
class u extends (i = s.Ay.Store) {
    getState() {
        return {
            verifySuccess: a,
            verifyErrors: o,
            redirectGuildId: c,
        };
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "HubEmailVerificationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "HubEmailVerificationStore");
let d = new u(l.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (a = !0), (o = null), (c = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (a = !1), (o = t);
    },
});
