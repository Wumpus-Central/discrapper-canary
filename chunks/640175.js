n.d(t, { z: () => u });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(538534),
    a = n(650774),
    o = n(434404),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { guildId: t, defaultSettings: n, canManageGuild: u } = e,
        g = (0, l.e7)([a.Z], () => a.Z.getMemberCount(t)),
        m = i.useMemo(
            () => [
                {
                    name: d.intl.string(d.t["n/bTaW"]),
                    value: c.bL.ALL_MESSAGES,
                    desc: null != g && g >= c.qWG ? d.intl.string(d.t["L+P4t7"]) : null,
                },
                {
                    name: d.intl.string(d.t["6fQPho"]),
                    value: c.bL.ONLY_MENTIONS,
                },
            ],
            [g],
        ),
        p = i.useCallback((e) => {
            o.Z.updateGuild({ defaultMessageNotifications: e });
        }, []);
    return (0, r.jsx)(s.E, {
        options: m,
        value: n,
        disabled: !u,
        onChange: p,
    });
}
