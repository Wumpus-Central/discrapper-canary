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
    let e = (0, c.hT)(),
        t = (0, u.A)() ?? !0,
        n = (0, o.sP)(),
        E = (0, l.yM)(),
        h = s.useMemo(() => (!n || !!E) && !t, [n, t, E]),
        p = s.useCallback(
            (e) => {
                n && e
                    ? r.A.showAgeVerificationGetStartedModal({ entryPoint: a.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                    : d.Qe.updateSetting(e);
            },
            [n],
        );
    return (0, i.jsx)(_.h, {
        setting: A.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, i.jsx)(m.Ay, {
            value: e,
            onChange: p,
            title: g.intl.string(g.t.XahVjj),
            note: g.intl.string(g.t.R9fXyS),
            disabled: h,
        }),
    });
}
