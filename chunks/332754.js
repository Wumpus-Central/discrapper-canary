var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(84615),
    s = n(429142),
    o = n(1964),
    c = n(852758),
    d = n(314897),
    u = n(594174),
    h = n(374023),
    m = n(886162),
    p = n(981631),
    g = n(815660),
    f = n(308569),
    _ = n(231338);
t.Z = {
    init() {
        l.Z.subscribe('CONNECTION_OPEN', this.handleRequiredAction), l.Z.subscribe('USER_REQUIRED_ACTION_UPDATE', this.handleRequiredAction), l.Z.subscribe('CURRENT_USER_UPDATE', this.handleCurrentUserUpdate), d.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        if (!h.s.isDisallowPopupsSet() && null != u.default.getCurrentUser())
            t === p.c2C.REQUIRE_CAPTCHA || t === p.c2C.REQUIRE_VERIFIED_EMAIL || t === p.c2C.REQUIRE_VERIFIED_PHONE || t === p.c2C.REQUIRE_REVERIFIED_PHONE || t === p.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === p.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || o.Z.isEmailReverification(t)
                ? (0, a.q4)(() => (0, i.jsx)(c.Z, {}), {
                      layerKey: f.CV,
                      Layer: s.ZP
                  })
                : t === p.c2C.AGREEMENTS
                  ? (0, r.openModal)((e) => (0, i.jsx)(m.Z, { ...e }), {
                        modalKey: f.f1,
                        onCloseRequest: _.Vq
                    })
                  : null == t && ((0, a.ob)(f.CV), (0, r.hasModalOpen)(f.f1) && (0, r.closeModal)(f.f1));
    },
    handleAuthenticationStoreChanged() {
        null == d.default.getId() && ((0, a.ob)(f.CV), (0, r.closeModal)(f.f1), (0, r.closeModal)(f.HR), (0, r.closeModal)(f.F0), (0, r.closeModal)(g.M));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, r.closeModal)(f.F0);
    }
};
