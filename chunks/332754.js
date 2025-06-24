n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(570140),
    a = n(84615),
    o = n(429142),
    s = n(886412),
    c = n(918714),
    u = n(1964),
    d = n(852758),
    p = n(314897),
    h = n(594174),
    f = n(374023),
    g = n(886162),
    m = n(981631),
    b = n(815660),
    _ = n(308569),
    E = n(231338);
let O = {
    init() {
        l.Z.subscribe('CONNECTION_OPEN', this.handleRequiredAction), l.Z.subscribe('USER_REQUIRED_ACTION_UPDATE', this.handleRequiredAction), l.Z.subscribe('CURRENT_USER_UPDATE', this.handleCurrentUserUpdate), p.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !f.s.isDisallowPopupsSet() &&
            null != h.default.getCurrentUser() &&
            (t === m.c2C.REQUIRE_CAPTCHA || t === m.c2C.REQUIRE_VERIFIED_EMAIL || t === m.c2C.REQUIRE_VERIFIED_PHONE || t === m.c2C.REQUIRE_REVERIFIED_PHONE || t === m.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE || t === m.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === m.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || u.Z.isEmailReverification(t)
                ? (0, s.bu)({ location: 'verification-legacy' })
                    ? (0, a.q4)(() => (0, r.jsx)(c.Z, {}), {
                          layerKey: _.CV,
                          Layer: o.ZP
                      })
                    : (0, a.q4)(() => (0, r.jsx)(d.Z, {}), {
                          layerKey: _.CV,
                          Layer: o.ZP
                      })
                : t === m.c2C.AGREEMENTS
                  ? (0, i.h7j)(
                        (e) =>
                            (0, r.jsx)(
                                g.Z,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, e)
                            ),
                        {
                            modalKey: _.f1,
                            onCloseRequest: E.Vq
                        }
                    )
                  : t === m.c2C.REQUIRE_SAFETY_FLOWS
                    ? (0, s.bu)({ location: 'verification-safety-flows' }) &&
                      (0, a.q4)(() => (0, r.jsx)(c.Z, {}), {
                          layerKey: _.CV,
                          Layer: o.ZP
                      })
                    : null == t && ((0, a.ob)(_.CV), (0, i.nfh)(_.f1) && (0, i.Mr3)(_.f1)));
    },
    handleAuthenticationStoreChanged() {
        null == p.default.getId() && ((0, a.ob)(_.CV), (0, i.Mr3)(_.f1), (0, i.Mr3)(_.HR), (0, i.Mr3)(_.F0), (0, i.Mr3)(b.M));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, i.Mr3)(_.F0);
    }
};
