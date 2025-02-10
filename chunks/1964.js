n.d(t, { Z: () => g });
var i = n(392711),
    r = n.n(i),
    a = n(981631),
    s = n(388032);
let { CAPTCHA: l, EMAIL: o, PHONE: c, REVERIFY_EMAIL: d, REVERIFY_PHONE: u } = a.PUi,
    m = {
        [a.c2C.REQUIRE_VERIFIED_EMAIL]: [o],
        [a.c2C.REQUIRE_VERIFIED_PHONE]: [c],
        [a.c2C.REQUIRE_REVERIFIED_EMAIL]: [d],
        [a.c2C.REQUIRE_REVERIFIED_PHONE]: [u],
        [a.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [o, c],
        [a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, d],
        [a.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [o, u],
        [a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, u],
        [a.c2C.REQUIRE_CAPTCHA]: [l],
        [a.c2C.AGREEMENTS]: []
    },
    g = {
        isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === a.c2C.REQUIRE_REVERIFIED_PHONE || t === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === a.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) => e === a.c2C.REQUIRE_REVERIFIED_EMAIL || e === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : m[e]),
        getButtonTitle(e) {
            switch (e) {
                case a.PUi.EMAIL:
                    return s.intl.string(s.t['1MPz29']);
                case a.PUi.PHONE:
                    return s.intl.string(s.t.mjJecn);
                case a.PUi.REVERIFY_EMAIL:
                    return s.intl.string(s.t.nmdPFR);
                case a.PUi.REVERIFY_PHONE:
                    return s.intl.string(s.t.of2129);
                default:
                    return s.intl.string(s.t['oF6+W1']);
            }
        },
        areVerificationTypesEqual: (e, t) => r().isEqual(e, t)
    };
