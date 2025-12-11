n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(657707),
    l = n(793030),
    o = n(692547),
    a = n(673833),
    s = n(535396),
    c = n(618725);
function u(e) {
    let { count: t, type: n } = e;
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsxs)("div", {
                className: c.headerContainer,
                children: [
                    (0, r.jsx)(i.Ucv, {
                        size: "sm",
                        color: n !== s.br.AVAILABLE ? o.Z.colors.TEXT_MUTED : o.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, r.jsx)(l.X6q, {
                        color: n !== s.br.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(l.xvT, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: (0, a.t)(t, n),
            }),
        ],
    });
}
