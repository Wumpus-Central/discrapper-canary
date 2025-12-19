n.d(e, { v: () => d });
var i = n(473749),
    l = n(168107),
    s = n(480916),
    u = n(81643),
    r = n(622822),
    a = n(509613),
    o = n(519207),
    T = n(695346),
    S = n(313789),
    c = n(682578),
    E = n(388032);
let d = (0, a.qs)(S.n.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
    useTitle: () => E.intl.string(E.t["L+yTsa"]),
    useSubtitle: () => E.intl.string(E.t.hiM8pU),
    useValue: o.q3,
    useDisabled: () => {
        var t;
        let e = null == (t = (0, c.J)()) || t,
            n = (0, r.xi)(),
            l = (0, u.Jm)();
        return i.useMemo(() => (!n || !!l) && !e, [n, e, l]);
    },
    setValue: (t) => {
        if ((0, r.Uw)() && t)
            return void l.Z.showAgeVerificationGetStartedModal({
                entryPoint: s.cU.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS,
            });
        T.DC.updateSetting(t);
    },
});
