n.d(t, { Z: () => p });
var s = n(392711),
    i = n.n(s),
    r = n(981631),
    l = n(388032);
let { CAPTCHA: o, EMAIL: a, PHONE: h, REVERIFY_EMAIL: c, REVERIFY_PHONE: d } = r.PUi,
    u = {
        [r.c2C.REQUIRE_VERIFIED_EMAIL]: [a],
        [r.c2C.REQUIRE_VERIFIED_PHONE]: [h],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
        [r.c2C.REQUIRE_REVERIFIED_PHONE]: [d],
        [r.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, h],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [h, c],
        [r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, d],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, d],
        [r.c2C.REQUIRE_CAPTCHA]: [o],
        [r.c2C.AGREEMENTS]: [],
        [r.c2C.REQUIRE_SAFETY_FLOWS]: []
    },
    p = {
        isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === r.c2C.REQUIRE_REVERIFIED_PHONE || t === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) => e === r.c2C.REQUIRE_REVERIFIED_EMAIL || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : u[e]),
        getButtonTitle(e) {
            switch (e) {
                case r.PUi.EMAIL:
                    return l.intl.string(l.t['1MPz29']);
                case r.PUi.PHONE:
                    return l.intl.string(l.t.mjJecn);
                case r.PUi.REVERIFY_EMAIL:
                    return l.intl.string(l.t.nmdPFR);
                case r.PUi.REVERIFY_PHONE:
                    return l.intl.string(l.t.of2129);
                default:
                    return l.intl.string(l.t['oF6+W1']);
            }
        },
        areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
    };
