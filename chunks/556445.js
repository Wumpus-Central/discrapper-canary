i.d(t, { A: () => o });
var n = i(627968);
i(64700);
var a = i(990078),
    l = i(397927),
    r = i(562153),
    s = i(353411);
function o(e) {
    let {
            activity: t,
            user: i,
            channelId: o,
            guildId: d,
            source: c,
            size: u = "sm",
            variant: m = "secondary",
            onAction: _,
            ...A
        } = e,
        { tooltip: g, loading: h, disabled: f, onClick: p } = (0, s.J$)(t, i, c, r.Ay.getNickname(d, o, i));
    return (0, n.jsx)(a.m, {
        text: g,
        children: (0, n.jsx)(l.K0, {
            icon: l.J2m,
            size: u,
            variant: m,
            onClick: () => {
                _?.(), p();
            },
            disabled: f,
            loading: h,
            "aria-label": g ?? t.name,
            ...A,
        }),
    });
}
