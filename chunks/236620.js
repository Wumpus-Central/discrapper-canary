n.d(t, { y: () => u }), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(498642),
    c = n(997509),
    o = n(652215),
    d = n(985018);
function u(e) {
    let { label: t, description: n, helperText: u, guildId: f, defaultSettings: g, canManageGuild: b } = e,
        m = (0, l.bG)([a.A], () => a.A.getMemberCount(f)),
        p = i.useMemo(
            () => [
                {
                    name: d.intl.string(d.t["n/bTaY"]),
                    value: o.orn.ALL_MESSAGES,
                    desc: null != m && m >= o._4N ? d.intl.string(d.t["L+P4t2"]) : null,
                },
                {
                    name: d.intl.string(d.t["6fQPhu"]),
                    value: o.orn.ONLY_MENTIONS,
                },
            ],
            [m],
        ),
        x = i.useCallback((e) => {
            c.A.updateGuild({ defaultMessageNotifications: e });
        }, []);
    return (0, r.jsx)(s.z6M, {
        label: t,
        description: n,
        helperText: u,
        options: p,
        value: g,
        disabled: !b,
        onChange: x,
    });
}
