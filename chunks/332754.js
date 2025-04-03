n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    a = n(84615),
    o = n(429142),
    s = n(1964),
    c = n(852758),
    u = n(314897),
    d = n(594174),
    p = n(374023),
    h = n(886162),
    f = n(981631),
    g = n(815660),
    m = n(308569),
    b = n(231338);
let _ = {
    init() {
        l.Z.subscribe('CONNECTION_OPEN', this.handleRequiredAction), l.Z.subscribe('USER_REQUIRED_ACTION_UPDATE', this.handleRequiredAction), l.Z.subscribe('CURRENT_USER_UPDATE', this.handleCurrentUserUpdate), u.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !p.s.isDisallowPopupsSet() &&
            null != d.default.getCurrentUser() &&
            (t === f.c2C.REQUIRE_CAPTCHA || t === f.c2C.REQUIRE_VERIFIED_EMAIL || t === f.c2C.REQUIRE_VERIFIED_PHONE || t === f.c2C.REQUIRE_REVERIFIED_PHONE || t === f.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE || t === f.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === f.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || s.Z.isEmailReverification(t)
                ? (0, a.q4)(() => (0, r.jsx)(c.Z, {}), {
                      layerKey: m.CV,
                      Layer: o.ZP
                  })
                : t === f.c2C.AGREEMENTS
                  ? (0, i.h7j)(
                        (e) =>
                            (0, r.jsx)(
                                h.Z,
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
                            modalKey: m.f1,
                            onCloseRequest: b.Vq
                        }
                    )
                  : null == t && ((0, a.ob)(m.CV), (0, i.nfh)(m.f1) && (0, i.Mr3)(m.f1)));
    },
    handleAuthenticationStoreChanged() {
        null == u.default.getId() && ((0, a.ob)(m.CV), (0, i.Mr3)(m.f1), (0, i.Mr3)(m.HR), (0, i.Mr3)(m.F0), (0, i.Mr3)(g.M));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, i.Mr3)(m.F0);
    }
};
