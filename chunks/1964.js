n.d(t, { Z: () => E });
var s = n(392711),
    i = n.n(s),
    r = n(981631),
    l = n(388032);
let { CAPTCHA: o, EMAIL: a, PHONE: c, REVERIFY_EMAIL: h, REVERIFY_PHONE: u } = r.PUi,
    d = {
        [r.c2C.REQUIRE_VERIFIED_EMAIL]: [a],
        [r.c2C.REQUIRE_VERIFIED_PHONE]: [c],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL]: [h],
        [r.c2C.REQUIRE_REVERIFIED_PHONE]: [u],
        [r.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, c],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, h],
        [r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, u],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [h, u],
        [r.c2C.REQUIRE_CAPTCHA]: [o],
        [r.c2C.AGREEMENTS]: [],
        [r.c2C.REQUIRE_SAFETY_FLOWS]: []
    },
    E = {
        isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === r.c2C.REQUIRE_REVERIFIED_PHONE || t === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) => e === r.c2C.REQUIRE_REVERIFIED_EMAIL || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        isFullScreenVerification(e) {
            return e === r.c2C.REQUIRE_CAPTCHA || e === r.c2C.REQUIRE_VERIFIED_EMAIL || e === r.c2C.REQUIRE_VERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || this.isEmailReverification(e);
        },
        getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : d[e]),
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
