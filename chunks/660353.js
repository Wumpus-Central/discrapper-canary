i.d(e, { u: () => S });
var n = i(935649),
    l = i(847599),
    s = i(36149),
    r = i(323073),
    a = i(419954),
    u = i(264249),
    o = i(253932),
    d = i(780964),
    T = i(406274),
    A = i(985018);
let S = (0, a.zD)(d.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
    useTitle: () => A.intl.string(A.t.XahVjj),
    useSubtitle: () => A.intl.string(A.t.R9fXyS),
    useValue: u.hT,
    useDisabled: () => {
        let t = (0, T.A)() ?? !0,
            e = (0, r.sP)(),
            i = (0, s.yM)();
        return (!e || !!i) && !t;
    },
    setValue: (t) => {
        (0, r.p5)() && t
            ? n.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
            : o.Qe.updateSetting(t);
    },
});
