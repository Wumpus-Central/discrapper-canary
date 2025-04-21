n.d(t, { z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(650774),
    o = n(434404),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { guildId: t, defaultSettings: n, canManageGuild: u } = e,
        m = (0, l.e7)([a.Z], () => a.Z.getMemberCount(t)),
        g = i.useMemo(
            () => [
                {
                    name: d.intl.string(d.t['n/bTaW']),
                    value: c.bL.ALL_MESSAGES,
                    desc: null != m && m >= c.qWG ? d.intl.string(d.t['L+P4t7']) : null
                },
                {
                    name: d.intl.string(d.t['6fQPho']),
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
        disabled: !u,
        onChange: p
    });
}
