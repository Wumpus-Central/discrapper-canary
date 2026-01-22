n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(935649),
    s = n(847599),
    o = n(36149),
    l = n(323073),
    c = n(264249),
    u = n(253932),
    d = n(406274),
    f = n(871930),
    p = n(578746),
    _ = n(531525),
    h = n(985018);
function m() {
    var e;
    let t = (0, c.hT)(),
        n = null == (e = (0, d.A)()) || e,
        m = (0, l.sP)(),
        g = (0, o.yM)(),
        E = i.useMemo(() => (!m || !!g) && !n, [m, n, g]),
        b = i.useCallback(
            (e) => {
                m && e
                    ? a.A.showAgeVerificationGetStartedModal({ entryPoint: s.q1.AGE_RESTRICTED_DM_COMMANDS_SETTINGS })
                    : u.Qe.updateSetting(e);
            },
            [m],
        );
    return (0, r.jsx)(f.h, {
        setting: _.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2,
        children: (0, r.jsx)(p.Ay, {
            value: t,
            onChange: b,
            title: h.intl.string(h.t.XahVjj),
            note: h.intl.string(h.t.R9fXyS),
            disabled: E,
        }),
    });
}
