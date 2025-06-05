n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(570140),
    a = n(84615),
    o = n(429142),
    s = n(377656),
    c = n(1964),
    u = n(852758),
    d = n(314897),
    p = n(594174),
    h = n(374023),
    f = n(886162),
    g = n(981631),
    m = n(815660),
    b = n(308569),
    _ = n(231338);
let E = {
    init() {
        l.Z.subscribe('CONNECTION_OPEN', this.handleRequiredAction), l.Z.subscribe('USER_REQUIRED_ACTION_UPDATE', this.handleRequiredAction), l.Z.subscribe('CURRENT_USER_UPDATE', this.handleCurrentUserUpdate), d.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !h.s.isDisallowPopupsSet() &&
            null != p.default.getCurrentUser() &&
            (t === g.c2C.REQUIRE_CAPTCHA || t === g.c2C.REQUIRE_VERIFIED_EMAIL || t === g.c2C.REQUIRE_VERIFIED_PHONE || t === g.c2C.REQUIRE_REVERIFIED_PHONE || t === g.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE || t === g.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === g.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || c.Z.isEmailReverification(t)
                ? (0, a.q4)(() => (0, r.jsx)(u.Z, {}), {
                      layerKey: b.CV,
                      Layer: o.ZP
                  })
                : t === g.c2C.AGREEMENTS
                  ? (0, i.h7j)(
                        (e) =>
                            (0, r.jsx)(
                                f.Z,
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
                            modalKey: b.f1,
                            onCloseRequest: _.Vq
                        }
                    )
                  : t === g.c2C.REQUIRE_SAFETY_FLOWS
                    ? (0, a.q4)(() => (0, r.jsx)(s.Z, {}), {
                          layerKey: b.CV,
                          Layer: o.ZP
                      })
                    : null == t && ((0, a.ob)(b.CV), (0, i.nfh)(b.f1) && (0, i.Mr3)(b.f1)));
    },
    handleAuthenticationStoreChanged() {
        null == d.default.getId() && ((0, a.ob)(b.CV), (0, i.Mr3)(b.f1), (0, i.Mr3)(b.HR), (0, i.Mr3)(b.F0), (0, i.Mr3)(m.M));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, i.Mr3)(b.F0);
    }
};
