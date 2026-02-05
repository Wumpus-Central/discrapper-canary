n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(935649),
    a = n(847599),
    l = n(36149),
    o = n(323073),
    c = n(264249),
    d = n(253932),
    u = n(406274),
    _ = n(871930),
    m = n(578746),
    A = n(531525),
    g = n(985018);
function E() {
    let e = (0, u.A)() ?? !0,
        t = (0, c.tI)(),
        n = (0, o.sP)(),
        E = (0, l.yM)(),
        h = s.useMemo(() => (!n || !!E) && !e, [n, e, E]),
        p = s.useCallback(
            (e) => {
                n && e
                    ? r.A.showAgeVerificationGetStartedModal({
                          entryPoint: a.q1.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS,
                      })
                    : d.Kg.updateSetting(e);
            },
            [n],
        );
    return (0, i.jsx)(_.h, {
        setting: A.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
        children: (0, i.jsx)(m.Ay, {
            title: g.intl.string(g.t["L+yTsa"]),
            value: t,
            onChange: p,
            disabled: h,
            note: g.intl.string(g.t.hiM8pU),
        }),
    });
}
