n.d(t, {
    A: () => p,
});
var r = n(735438),
    i = n.n(r),
    a = n(652215),
    s = n(985018);
let { CAPTCHA: o, EMAIL: l, PHONE: c, REVERIFY_EMAIL: u, REVERIFY_PHONE: d } = a.Fz7,
    f = {
        [a.a3B.REQUIRE_VERIFIED_EMAIL]: [l],
        [a.a3B.REQUIRE_VERIFIED_PHONE]: [c],
        [a.a3B.REQUIRE_REVERIFIED_EMAIL]: [u],
        [a.a3B.REQUIRE_REVERIFIED_PHONE]: [d],
        [a.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, c],
        [a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, u],
        [a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, d],
        [a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [u, d],
        [a.a3B.REQUIRE_CAPTCHA]: [o],
        [a.a3B.AGREEMENTS]: [],
        [a.a3B.REQUIRE_SAFETY_FLOWS]: [],
    },
    p = {
        isPhoneReverification: (e, t) =>
            void 0 !== e &&
            e.isPhoneVerified() &&
            (t === a.a3B.REQUIRE_REVERIFIED_PHONE ||
                t === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                t === a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
            e === a.a3B.REQUIRE_REVERIFIED_EMAIL ||
            e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        isFullScreenVerification(e) {
            return (
                e === a.a3B.REQUIRE_CAPTCHA ||
                e === a.a3B.REQUIRE_VERIFIED_EMAIL ||
                e === a.a3B.REQUIRE_VERIFIED_PHONE ||
                e === a.a3B.REQUIRE_REVERIFIED_PHONE ||
                e === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                e === a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                this.isEmailReverification(e)
            );
        },
        getVerificationTypes: (e) => (null == e || "symbol" == typeof e ? [] : f[e]),
        getButtonTitle(e) {
            switch (e) {
                case a.Fz7.EMAIL:
                    return s.intl.string(s.t["1MPz27"]);
                case a.Fz7.PHONE:
                    return s.intl.string(s.t.mjJeco);
                case a.Fz7.REVERIFY_EMAIL:
                    return s.intl.string(s.t.nmdPFX);
                case a.Fz7.REVERIFY_PHONE:
                    return s.intl.string(s.t.of2125);
                default:
                    return s.intl.string(s.t["oF6+Ww"]);
            }
        },
        areVerificationTypesEqual: (e, t) => i().isEqual(e, t),
    };
