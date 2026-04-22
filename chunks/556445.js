n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(990078),
    a = n(408278),
    s = n(835723),
    r = n(562153),
    o = n(353411);
function c(e) {
    let {
            activity: t,
            user: n,
            channelId: c,
            guildId: d,
            source: u,
            size: h = "sm",
            variant: m = "secondary",
            onAction: A,
            ...g
        } = e,
        { tooltip: p, loading: _, disabled: f, onClick: E } = (0, o.J$)(t, n, u, r.Ay.getNickname(d, c, n));
    return (0, i.jsx)(l.m, {
        text: p,
        children: (0, i.jsx)(a.K, {
            icon: s.J,
            size: h,
            variant: m,
            onClick: () => {
                A?.(), E();
            },
            disabled: f,
            loading: _,
            "aria-label": p ?? t.name,
            ...g,
        }),
    });
}
