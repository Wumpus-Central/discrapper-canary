n.d(t, { Z: () => p });
var r = n(392711),
    i = n.n(r),
    a = n(981631),
    o = n(388032);
let { CAPTCHA: s, EMAIL: l, PHONE: c, REVERIFY_EMAIL: u, REVERIFY_PHONE: d } = a.PUi,
    f = {
        [a.c2C.REQUIRE_VERIFIED_EMAIL]: [l],
        [a.c2C.REQUIRE_VERIFIED_PHONE]: [c],
        [a.c2C.REQUIRE_REVERIFIED_EMAIL]: [u],
        [a.c2C.REQUIRE_REVERIFIED_PHONE]: [d],
        [a.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, c],
        [a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, u],
        [a.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, d],
        [a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [u, d],
        [a.c2C.REQUIRE_CAPTCHA]: [s],
        [a.c2C.AGREEMENTS]: [],
        [a.c2C.REQUIRE_SAFETY_FLOWS]: [],
    },
    p = {
        isPhoneReverification: (e, t) =>
            void 0 !== e &&
            e.isPhoneVerified() &&
            (t === a.c2C.REQUIRE_REVERIFIED_PHONE ||
                t === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                t === a.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
            e === a.c2C.REQUIRE_REVERIFIED_EMAIL ||
            e === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            e === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        isFullScreenVerification(e) {
            return (
                e === a.c2C.REQUIRE_CAPTCHA ||
                e === a.c2C.REQUIRE_VERIFIED_EMAIL ||
                e === a.c2C.REQUIRE_VERIFIED_PHONE ||
                e === a.c2C.REQUIRE_REVERIFIED_PHONE ||
                e === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                e === a.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
                this.isEmailReverification(e)
            );
        },
        getVerificationTypes: (e) => (null == e || "symbol" == typeof e ? [] : f[e]),
        getButtonTitle(e) {
            switch (e) {
                case a.PUi.EMAIL:
                    return o.intl.string(o.t["1MPz27"]);
                case a.PUi.PHONE:
                    return o.intl.string(o.t.mjJeco);
                case a.PUi.REVERIFY_EMAIL:
                    return o.intl.string(o.t.nmdPFX);
                case a.PUi.REVERIFY_PHONE:
                    return o.intl.string(o.t.of2125);
                default:
                    return o.intl.string(o.t["oF6+Ww"]);
            }
        },
        areVerificationTypesEqual: (e, t) => i().isEqual(e, t),
    };
