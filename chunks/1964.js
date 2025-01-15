var s = n(392711),
    i = n.n(s),
    o = n(981631),
    l = n(388032);
let { CAPTCHA: r, EMAIL: a, PHONE: h, REVERIFY_EMAIL: c, REVERIFY_PHONE: u } = o.PUi,
    d = {
        [o.c2C.REQUIRE_VERIFIED_EMAIL]: [a],
        [o.c2C.REQUIRE_VERIFIED_PHONE]: [h],
        [o.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
        [o.c2C.REQUIRE_REVERIFIED_PHONE]: [u],
        [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, h],
        [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [h, c],
        [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, u],
        [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, u],
        [o.c2C.REQUIRE_CAPTCHA]: [r],
        [o.c2C.AGREEMENTS]: []
    };
t.Z = {
    isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === o.c2C.REQUIRE_REVERIFIED_PHONE || t === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
    isEmailReverification: (e) => e === o.c2C.REQUIRE_REVERIFIED_EMAIL || e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
    getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : d[e]),
    getButtonTitle(e) {
        switch (e) {
            case o.PUi.EMAIL:
                return l.intl.string(l.t['1MPz29']);
            case o.PUi.PHONE:
                return l.intl.string(l.t.mjJecn);
            case o.PUi.REVERIFY_EMAIL:
                return l.intl.string(l.t.nmdPFR);
            case o.PUi.REVERIFY_PHONE:
                return l.intl.string(l.t.of2129);
            default:
                return l.intl.string(l.t['oF6+W1']);
        }
    },
    areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
};
