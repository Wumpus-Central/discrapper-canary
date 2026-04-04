n.d(t, { a: () => _ });
var i = n(64700),
    s = n(935649),
    l = n(847599),
    a = n(36149),
    r = n(323073),
    o = n(419954),
    d = n(264249),
    c = n(253932),
    u = n(780964),
    m = n(406274),
    g = n(985018);
let _ = (0, o.zD)(u.X.CONTENT_AND_SOCIAL_AGE_RESTRICTED_IOS_SETTING, {
    useTitle: () => g.intl.string(g.t["L+yTsa"]),
    useSubtitle: () => g.intl.string(g.t.hiM8pU),
    useValue: d.tI,
    useDisabled: () => {
        let e = (0, m.A)() ?? !0,
            t = (0, r.sP)(),
            n = (0, a.yM)();
        return i.useMemo(() => (!t || !!n) && !e, [t, e, n]);
    },
    setValue: (e) => {
        (0, r.p5)() && e
            ? s.A.showAgeVerificationGetStartedModal({ entryPoint: l.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS })
            : c.Kg.updateSetting(e);
    },
});
