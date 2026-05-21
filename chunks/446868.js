"use strict";
n.d(t, { A: () => f });
var i = n(735438),
    r = n.n(i),
    s = n(652215),
    a = n(375708);
let { CAPTCHA: o, EMAIL: l, PHONE: u, REVERIFY_EMAIL: c, REVERIFY_PHONE: d } = s.Fz7,
    _ = {
        [s.a3B.REQUIRE_VERIFIED_EMAIL]: [l],
        [s.a3B.REQUIRE_VERIFIED_PHONE]: [u],
        [s.a3B.REQUIRE_REVERIFIED_EMAIL]: [c],
        [s.a3B.REQUIRE_REVERIFIED_PHONE]: [d],
        [s.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, u],
        [s.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, c],
        [s.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, d],
        [s.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, d],
        [s.a3B.REQUIRE_CAPTCHA]: [o],
        [s.a3B.AGREEMENTS]: [],
        [s.a3B.REQUIRE_SAFETY_FLOWS]: [],
    },
    f = {
        isPhoneReverification: (e, t) =>
            void 0 !== e &&
            e.isPhoneVerified() &&
            (t === s.a3B.REQUIRE_REVERIFIED_PHONE ||
                t === s.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                t === s.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
            e === s.a3B.REQUIRE_REVERIFIED_EMAIL ||
            e === s.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            e === s.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        isFullScreenVerification(e) {
            return (
                e === s.a3B.REQUIRE_CAPTCHA ||
                e === s.a3B.REQUIRE_VERIFIED_EMAIL ||
                e === s.a3B.REQUIRE_VERIFIED_PHONE ||
                e === s.a3B.REQUIRE_REVERIFIED_PHONE ||
                e === s.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                e === s.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                this.isEmailReverification(e)
            );
        },
        getVerificationTypes: (e) => (null == e || "symbol" == typeof e ? [] : _[e]),
        getButtonTitle(e) {
            switch (e) {
                case s.Fz7.EMAIL:
                    return a.intl.string(a.t["1MPz27"]);
                case s.Fz7.PHONE:
                    return a.intl.string(a.t.mjJeco);
                case s.Fz7.REVERIFY_EMAIL:
                    return a.intl.string(a.t.nmdPFX);
                case s.Fz7.REVERIFY_PHONE:
                    return a.intl.string(a.t.of2125);
                default:
                    return a.intl.string(a.t["oF6+Ww"]);
            }
        },
        areVerificationTypesEqual: (e, t) => r().isEqual(e, t),
    };
