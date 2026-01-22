l.d(t, { A: () => d });
var r = l(627968);
l(64700);
var n = l(934551),
    i = l(158954),
    s = l(827734),
    o = l(379512),
    a = l(568065),
    u = l(924190);
function d(e) {
    let { count: t, type: l } = e;
    return (0, r.jsxs)("div", {
        className: u.k,
        children: [
            (0, r.jsxs)("div", {
                className: u.N,
                children: [
                    (0, r.jsx)(n.BoostGemIcon, {
                        size: "sm",
                        color: l !== a.yG.AVAILABLE ? s.A.colors.TEXT_MUTED : s.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, r.jsx)(i.DZT, {
                        color: l !== a.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(i.EYj, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: (0, o.F)(t, l),
            }),
        ],
    });
}
