n.d(t, { Z: () => p });
var s = n(392711),
    i = n.n(s),
    l = n(981631),
    o = n(388032);
let { CAPTCHA: a, EMAIL: r, PHONE: h, REVERIFY_EMAIL: c, REVERIFY_PHONE: d } = l.PUi,
    u = {
        [l.c2C.REQUIRE_VERIFIED_EMAIL]: [r],
        [l.c2C.REQUIRE_VERIFIED_PHONE]: [h],
        [l.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
        [l.c2C.REQUIRE_REVERIFIED_PHONE]: [d],
        [l.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, h],
        [l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [h, c],
        [l.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [r, d],
        [l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, d],
        [l.c2C.REQUIRE_CAPTCHA]: [a],
        [l.c2C.AGREEMENTS]: []
    },
    p = {
        isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === l.c2C.REQUIRE_REVERIFIED_PHONE || t === l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === l.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) => e === l.c2C.REQUIRE_REVERIFIED_EMAIL || e === l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === l.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : u[e]),
        getButtonTitle(e) {
            switch (e) {
                case l.PUi.EMAIL:
                    return o.intl.string(o.t['1MPz29']);
                case l.PUi.PHONE:
                    return o.intl.string(o.t.mjJecn);
                case l.PUi.REVERIFY_EMAIL:
                    return o.intl.string(o.t.nmdPFR);
                case l.PUi.REVERIFY_PHONE:
                    return o.intl.string(o.t.of2129);
                default:
                    return o.intl.string(o.t['oF6+W1']);
            }
        },
        areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
    };
