n.d(t, { z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(650774),
    o = n(434404),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { guildId: t, defaultSettings: n, canManageGuild: d } = e,
        m = (0, l.e7)([a.Z], () => a.Z.getMemberCount(t)),
        g = i.useMemo(
            () => [
                {
                    name: u.intl.string(u.t['n/bTaW']),
                    value: c.bL.ALL_MESSAGES,
                    desc: null != m && m >= c.qWG ? u.intl.string(u.t['L+P4t7']) : null
                },
                {
                    name: u.intl.string(u.t['6fQPho']),
                    value: c.bL.ONLY_MENTIONS
                }
            ],
            [m]
        ),
        p = i.useCallback((e) => {
            let { value: t } = e;
            o.Z.updateGuild({ defaultMessageNotifications: t });
        }, []);
    return (0, r.jsx)(s.FXm, {
        options: g,
        value: n,
        disabled: !d,
        onChange: p
    });
}
