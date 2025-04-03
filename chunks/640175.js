n.d(t, { z: () => u });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(650774),
    o = n(434404),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { guildId: t, defaultSettings: n, canManageGuild: u } = e,
        m = (0, s.e7)([l.Z], () => l.Z.getMemberCount(t)),
        g = i.useMemo(
            () => [
                {
                    name: d.NW.string(d.t['n/bTaW']),
                    value: c.bL.ALL_MESSAGES,
                    desc: null != m && m >= c.qWG ? d.NW.string(d.t['L+P4t7']) : null
                },
                {
                    name: d.NW.string(d.t['6fQPho']),
                    value: c.bL.ONLY_MENTIONS
                }
            ],
            [m]
        ),
        p = i.useCallback((e) => {
            let { value: t } = e;
            o.Z.updateGuild({ defaultMessageNotifications: t });
        }, []);
    return (0, r.jsx)(a.FXm, {
        options: g,
        value: n,
        disabled: !u,
        onChange: p
    });
}
