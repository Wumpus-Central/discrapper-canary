"use strict";
n.d(t, { y: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(498642),
    o = n(997509),
    d = n(652215),
    c = n(985018);
function u(e) {
    let { label: t, description: n, helperText: u, guildId: m, defaultSettings: g, canManageGuild: x } = e,
        h = (0, l.bG)([a.A], () => a.A.getMemberCount(m)),
        _ = s.useMemo(
            () => [
                {
                    name: c.intl.string(c.t["n/bTaY"]),
                    value: d.orn.ALL_MESSAGES,
                    desc: null != h && h >= d._4N ? c.intl.string(c.t["L+P4t2"]) : null,
                },
                { name: c.intl.string(c.t["6fQPhu"]), value: d.orn.ONLY_MENTIONS },
            ],
            [h],
        ),
        A = s.useCallback((e) => {
            o.A.updateGuild({ defaultMessageNotifications: e });
        }, []);
    return (0, i.jsx)(r.z6M, {
        label: t,
        description: n,
        helperText: u,
        options: _,
        value: g,
        disabled: !x,
        onChange: A,
    });
}
