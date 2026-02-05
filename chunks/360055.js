i.d(e, { a: () => E });
var n = i(64700),
    l = i(935649),
    s = i(847599),
    r = i(36149),
    a = i(323073),
    u = i(419954),
    o = i(264249),
    d = i(253932),
    T = i(780964),
    A = i(406274),
    S = i(985018);
let E = (0, u.zD)(T.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
    useTitle: () => S.intl.string(S.t["L+yTsa"]),
    useSubtitle: () => S.intl.string(S.t.hiM8pU),
    useValue: o.tI,
    useDisabled: () => {
        let t = (0, A.A)() ?? !0,
            e = (0, a.sP)(),
            i = (0, r.yM)();
        return n.useMemo(() => (!e || !!i) && !t, [e, t, i]);
    },
    setValue: (t) => {
        (0, a.p5)() && t
            ? l.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
            : d.Kg.updateSetting(t);
    },
});
