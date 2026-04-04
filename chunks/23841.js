n.d(t, { u: () => g });
var i = n(935649),
    s = n(847599),
    l = n(36149),
    a = n(323073),
    r = n(419954),
    o = n(264249),
    d = n(253932),
    c = n(780964),
    u = n(406274),
    m = n(985018);
let g = (0, r.zD)(c.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
    useTitle: () => m.intl.string(m.t.XahVjj),
    useSubtitle: () => m.intl.string(m.t.R9fXyS),
    useValue: o.hT,
    useDisabled: () => {
        let e = (0, u.A)() ?? !0,
            t = (0, a.sP)(),
            n = (0, l.yM)();
        return (!t || !!n) && !e;
    },
    setValue: (e) => {
        (0, a.p5)() && e
            ? i.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
            : d.Qe.updateSetting(e);
    },
});
