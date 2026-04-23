n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(821609),
    s = n(323443),
    r = n(977997),
    o = n(985018);
let c = (e) => {
    let { guildId: t, channelId: n, variant: c = "active", size: d = "sm", onAction: u, ...h } = e,
        m = (0, l.bG)([r.A], () => r.A.isInChannel(n), [n]);
    return (0, i.jsx)(a.$, {
        variant: c,
        size: d,
        text: o.intl.string(o.t.ZYO5OK),
        disabled: m,
        onClick: () => {
            u?.(), s.CH(t, n);
        },
        fullWidth: !0,
        ...h,
    });
};
