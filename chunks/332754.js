n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(84615),
    s = n(429142),
    o = n(1964),
    d = n(852758),
    c = n(314897),
    u = n(594174),
    h = n(374023),
    m = n(886162),
    p = n(981631),
    g = n(815660),
    _ = n(308569),
    f = n(231338);
let E = {
    init() {
        r.Z.subscribe('CONNECTION_OPEN', this.handleRequiredAction), r.Z.subscribe('USER_REQUIRED_ACTION_UPDATE', this.handleRequiredAction), r.Z.subscribe('CURRENT_USER_UPDATE', this.handleCurrentUserUpdate), c.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !h.s.isDisallowPopupsSet() &&
            null != u.default.getCurrentUser() &&
            (t === p.c2C.REQUIRE_CAPTCHA || t === p.c2C.REQUIRE_VERIFIED_EMAIL || t === p.c2C.REQUIRE_VERIFIED_PHONE || t === p.c2C.REQUIRE_REVERIFIED_PHONE || t === p.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE || t === p.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === p.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || o.Z.isEmailReverification(t)
                ? (0, a.q4)(() => (0, i.jsx)(d.Z, {}), {
                      layerKey: _.CV,
                      Layer: s.ZP
                  })
                : t === p.c2C.AGREEMENTS
                  ? (0, l.h7j)((e) => (0, i.jsx)(m.Z, { ...e }), {
                        modalKey: _.f1,
                        onCloseRequest: f.Vq
                    })
                  : null == t && ((0, a.ob)(_.CV), (0, l.nfh)(_.f1) && (0, l.Mr3)(_.f1)));
    },
    handleAuthenticationStoreChanged() {
        null == c.default.getId() && ((0, a.ob)(_.CV), (0, l.Mr3)(_.f1), (0, l.Mr3)(_.HR), (0, l.Mr3)(_.F0), (0, l.Mr3)(g.M));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, l.Mr3)(_.F0);
    }
};
