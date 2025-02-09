n.d(t, { Z: () => h });
var r = n(392711),
    o = n.n(r),
    i = n(981631),
    a = n(388032);
let { CAPTCHA: s, EMAIL: l, PHONE: c, REVERIFY_EMAIL: d, REVERIFY_PHONE: u } = i.PUi,
    E = {
        [i.c2C.REQUIRE_VERIFIED_EMAIL]: [l],
        [i.c2C.REQUIRE_VERIFIED_PHONE]: [c],
        [i.c2C.REQUIRE_REVERIFIED_EMAIL]: [d],
        [i.c2C.REQUIRE_REVERIFIED_PHONE]: [u],
        [i.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, c],
        [i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [c, d],
        [i.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, u],
        [i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, u],
        [i.c2C.REQUIRE_CAPTCHA]: [s],
        [i.c2C.AGREEMENTS]: []
    },
    h = {
        isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === i.c2C.REQUIRE_REVERIFIED_PHONE || t === i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === i.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) => e === i.c2C.REQUIRE_REVERIFIED_EMAIL || e === i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === i.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) => (null == e || 'symbol' == typeof e ? [] : E[e]),
        getButtonTitle(e) {
            switch (e) {
                case i.PUi.EMAIL:
                    return a.intl.string(a.t['1MPz29']);
                case i.PUi.PHONE:
                    return a.intl.string(a.t.mjJecn);
                case i.PUi.REVERIFY_EMAIL:
                    return a.intl.string(a.t.nmdPFR);
                case i.PUi.REVERIFY_PHONE:
                    return a.intl.string(a.t.of2129);
                default:
                    return a.intl.string(a.t['oF6+W1']);
            }
        },
        areVerificationTypesEqual: (e, t) => o().isEqual(e, t)
    };
