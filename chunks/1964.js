n.d(t, { Z: () => p });
var s = n(392711),
    i = n.n(s),
    r = n(981631),
    o = n(388032);
let { CAPTCHA: l, EMAIL: a, PHONE: h, REVERIFY_EMAIL: c, REVERIFY_PHONE: d } = r.PUi,
    u = {
        [r.c2C.REQUIRE_VERIFIED_EMAIL]: [a],
        [r.c2C.REQUIRE_VERIFIED_PHONE]: [h],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
        [r.c2C.REQUIRE_REVERIFIED_PHONE]: [d],
        [r.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [a, h],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [h, c],
        [r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [a, d],
        [r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, d],
        [r.c2C.REQUIRE_CAPTCHA]: [l],
        [r.c2C.AGREEMENTS]: []
    },
    p = {
        isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === r.c2C.REQUIRE_REVERIFIED_PHONE || t === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === r.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) => e === r.c2C.REQUIRE_REVERIFIED_EMAIL || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === r.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : u[e]),
        getButtonTitle(e) {
            switch (e) {
                case r.PUi.EMAIL:
                    return o.NW.string(o.t['1MPz29']);
                case r.PUi.PHONE:
                    return o.NW.string(o.t.mjJecn);
                case r.PUi.REVERIFY_EMAIL:
                    return o.NW.string(o.t.nmdPFR);
                case r.PUi.REVERIFY_PHONE:
                    return o.NW.string(o.t.of2129);
                default:
                    return o.NW.string(o.t['oF6+W1']);
            }
        },
        areVerificationTypesEqual: (e, t) => i().isEqual(e, t)
    };
