n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(657707),
    o = n(793030),
    l = n(692547),
    a = n(673833),
    s = n(535396),
    u = n(618725);
function c(e) {
    let { count: t, type: n } = e;
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsxs)("div", {
                className: u.headerContainer,
                children: [
                    (0, r.jsx)(i.BoostGemIcon, {
                        size: "sm",
                        color: n !== s.br.AVAILABLE ? l.Z.colors.TEXT_MUTED : l.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, r.jsx)(o.X6q, {
                        color: n !== s.br.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(o.xvT, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: (0, a.t)(t, n),
            }),
        ],
    });
}
