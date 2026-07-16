"use strict";
n.d(t, { A: () => E });
var i = n(435558),
    r = n.n(i),
    a = n(652215),
    s = n(375708);
let { CAPTCHA: l, EMAIL: o, PHONE: d, REVERIFY_EMAIL: c, REVERIFY_PHONE: u } = a.Fz7,
    _ = {
        [a.a3B.REQUIRE_VERIFIED_EMAIL]: [o],
        [a.a3B.REQUIRE_VERIFIED_PHONE]: [d],
        [a.a3B.REQUIRE_REVERIFIED_EMAIL]: [c],
        [a.a3B.REQUIRE_REVERIFIED_PHONE]: [u],
        [a.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [o, d],
        [a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [d, c],
        [a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [o, u],
        [a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, u],
        [a.a3B.REQUIRE_CAPTCHA]: [l],
        [a.a3B.AGREEMENTS]: [],
        [a.a3B.REQUIRE_SAFETY_FLOWS]: [],
    },
    E = {
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
        getVerificationTypes: (e) => (null == e || "symbol" == typeof e ? [] : _[e]),
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
        areVerificationTypesEqual: (e, t) => r().isEqual(e, t),
    };
