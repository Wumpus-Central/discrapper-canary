n.d(t, { z: () => u }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(650774),
    o = n(434404),
    c = n(981631),
    d = n(388032);
function u(e) {
    let { label: t, description: n, helperText: u, guildId: g, defaultSettings: f, canManageGuild: m } = e,
        b = (0, l.e7)([s.Z], () => s.Z.getMemberCount(g)),
        p = i.useMemo(
            () => [
                {
                    name: d.intl.string(d.t["n/bTaY"]),
                    value: c.bL.ALL_MESSAGES,
                    desc: null != b && b >= c.qWG ? d.intl.string(d.t["L+P4t2"]) : null,
                },
                {
                    name: d.intl.string(d.t["6fQPhu"]),
                    value: c.bL.ONLY_MENTIONS,
                },
            ],
            [b],
        ),
        h = i.useCallback((e) => {
            o.Z.updateGuild({ defaultMessageNotifications: e });
        }, []);
    return (0, r.jsx)(a.FXm, {
        label: t,
        description: n,
        helperText: u,
        options: p,
        value: f,
        disabled: !m,
        onChange: h,
    });
}
