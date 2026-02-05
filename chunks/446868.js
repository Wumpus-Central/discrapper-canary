n.d(t, { A: () => h });
var s = n(735438),
    a = n.n(s),
    i = n(652215),
    l = n(985018);
let { CAPTCHA: o, EMAIL: r, PHONE: E, REVERIFY_EMAIL: d, REVERIFY_PHONE: c } = i.Fz7,
    u = {
        [i.a3B.REQUIRE_VERIFIED_EMAIL]: [r],
        [i.a3B.REQUIRE_VERIFIED_PHONE]: [E],
        [i.a3B.REQUIRE_REVERIFIED_EMAIL]: [d],
        [i.a3B.REQUIRE_REVERIFIED_PHONE]: [c],
        [i.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, E],
        [i.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [E, d],
        [i.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [r, c],
        [i.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, c],
        [i.a3B.REQUIRE_CAPTCHA]: [o],
        [i.a3B.AGREEMENTS]: [],
        [i.a3B.REQUIRE_SAFETY_FLOWS]: [],
    },
    h = {
        isPhoneReverification: (e, t) =>
            void 0 !== e &&
            e.isPhoneVerified() &&
            (t === i.a3B.REQUIRE_REVERIFIED_PHONE ||
                t === i.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                t === i.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
            e === i.a3B.REQUIRE_REVERIFIED_EMAIL ||
            e === i.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            e === i.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        isFullScreenVerification(e) {
            return (
                e === i.a3B.REQUIRE_CAPTCHA ||
                e === i.a3B.REQUIRE_VERIFIED_EMAIL ||
                e === i.a3B.REQUIRE_VERIFIED_PHONE ||
                e === i.a3B.REQUIRE_REVERIFIED_PHONE ||
                e === i.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                e === i.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                this.isEmailReverification(e)
            );
        },
        getVerificationTypes: (e) => (null == e || "symbol" == typeof e ? [] : u[e]),
        getButtonTitle(e) {
            switch (e) {
                case i.Fz7.EMAIL:
                    return l.intl.string(l.t["1MPz27"]);
                case i.Fz7.PHONE:
                    return l.intl.string(l.t.mjJeco);
                case i.Fz7.REVERIFY_EMAIL:
                    return l.intl.string(l.t.nmdPFX);
                case i.Fz7.REVERIFY_PHONE:
                    return l.intl.string(l.t.of2125);
                default:
                    return l.intl.string(l.t["oF6+Ww"]);
            }
        },
        areVerificationTypesEqual: (e, t) => a().isEqual(e, t),
    };
