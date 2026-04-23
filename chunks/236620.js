n.d(t, { y: () => u });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(954197),
    a = n(498642),
    o = n(997509),
    d = n(652215),
    c = n(985018);
function u(e) {
    let { label: t, description: n, helperText: u, guildId: m, defaultSettings: g, canManageGuild: h } = e,
        x = (0, s.bG)([a.A], () => a.A.getMemberCount(m)),
        _ = l.useMemo(
            () => [
                {
                    name: c.intl.string(c.t["n/bTaY"]),
                    value: d.orn.ALL_MESSAGES,
                    desc: null != x && x >= d._4N ? c.intl.string(c.t["L+P4t2"]) : null,
                },
                { name: c.intl.string(c.t["6fQPhu"]), value: d.orn.ONLY_MENTIONS },
            ],
            [x],
        ),
        p = l.useCallback((e) => {
            o.A.updateGuild({ defaultMessageNotifications: e });
        }, []);
    return (0, i.jsx)(r.z, {
        label: t,
        description: n,
        helperText: u,
        options: _,
        value: g,
        disabled: !h,
        onChange: p,
    });
}
