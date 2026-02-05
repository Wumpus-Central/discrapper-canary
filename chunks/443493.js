i.d(t, { A: () => d });
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    r = i(323443),
    s = i(977997),
    o = i(985018);
let d = (e) => {
    let { guildId: t, channelId: i, variant: d = "active", size: c = "sm", onAction: u, ...m } = e,
        _ = (0, a.bG)([s.A], () => s.A.isInChannel(i), [i]);
    return (0, n.jsx)(l.Button, {
        variant: d,
        size: c,
        text: o.intl.string(o.t.ZYO5OK),
        disabled: _,
        onClick: () => {
            u?.(), r.CH(t, i);
        },
        fullWidth: !0,
        ...m,
    });
};
