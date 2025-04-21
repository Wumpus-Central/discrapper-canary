n.d(t, { Z: () => p });
var s = n(392711),
    i = n.n(s),
    l = n(981631),
    r = n(388032);
let { CAPTCHA: o, EMAIL: a, PHONE: h, REVERIFY_EMAIL: c, REVERIFY_PHONE: d } = l.PUi,
    u = {
        [l.c2C.REQUIRE_VERIFIED_EMAIL]: [a],
        [l.c2C.REQUIRE_VERIFIED_PHONE]: [h],
        [l.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
        [l.c2C.REQUIRE_REVERIFIED_PHONE]: [d],
        [l.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, h],
        [l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [h, c],
        [l.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, d],
        [l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, d],
        [l.c2C.REQUIRE_CAPTCHA]: [o],
        [l.c2C.AGREEMENTS]: []
    },
    p = {
        isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === l.c2C.REQUIRE_REVERIFIED_PHONE || t === l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === l.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) => e === l.c2C.REQUIRE_REVERIFIED_EMAIL || e === l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : u[e]),
        getButtonTitle(e) {
            switch (e) {
                case l.PUi.EMAIL:
                    return r.intl.string(r.t['1MPz29']);
                case l.PUi.PHONE:
                    return r.intl.string(r.t.mjJecn);
                case l.PUi.REVERIFY_EMAIL:
                    return r.intl.string(r.t.nmdPFR);
                case l.PUi.REVERIFY_PHONE:
                    return r.intl.string(r.t.of2129);
                default:
                    return r.intl.string(r.t['oF6+W1']);
            }
        },
        areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
    };
