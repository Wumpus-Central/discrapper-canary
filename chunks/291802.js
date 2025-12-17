n.d(e, { U: () => E });
var i = n(168107),
    l = n(480916),
    s = n(81643),
    u = n(622822),
    r = n(509613),
    a = n(519207),
    o = n(695346),
    S = n(313789),
    T = n(682578),
    c = n(388032);
let E = (0, r.qs)(S.n.CONTENT_AND_SOCIAL_AGE_RESTRICTED_DM_SETTING, {
    useTitle: () => c.intl.string(c.t.XahVjj),
    useSubtitle: () => c.intl.string(c.t.R9fXyS),
    useValue: a.Xg,
    useDisabled: () => {
        var t;
        let e = null == (t = (0, T.J)()) || t,
            n = (0, u.xi)(),
            i = (0, s.Jm)();
        return (!n || !!i) && !e;
    },
    setValue: (t) => {
        if ((0, u.Uw)() && t)
            return void i.Z.showAgeVerificationGetStartedModal({
                entryPoint: l.cU.AGE_RESTRICTED_DM_COMMANDS_SETTINGS,
            });
        o.xM.updateSetting(t);
    },
});
