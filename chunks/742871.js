n.d(t, { a: () => _ });
var i = n(64700),
    s = n(935649),
    l = n(847599),
    a = n(36149),
    r = n(323073),
    o = n(419954),
    d = n(264249),
    u = n(253932),
    c = n(780964),
    g = n(406274),
    m = n(985018);
let _ = (0, o.zD)(c.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
    useTitle: () => m.intl.string(m.t["L+yTsa"]),
    useSubtitle: () => m.intl.string(m.t.hiM8pU),
    useValue: d.tI,
    useDisabled: () => {
        let e = (0, g.A)() ?? !0,
            t = (0, r.sP)(),
            n = (0, a.yM)();
        return i.useMemo(() => (!t || !!n) && !e, [t, e, n]);
    },
    setValue: (e) => {
        (0, r.p5)() && e
            ? s.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
            : u.Kg.updateSetting(e);
    },
});
