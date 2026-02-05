n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var l = n(934551),
    i = n(158954),
    s = n(827734),
    o = n(379512),
    a = n(568065),
    u = n(924190);
function d(e) {
    let { count: t, type: n } = e;
    return (0, r.jsxs)("div", {
        className: u.k,
        children: [
            (0, r.jsxs)("div", {
                className: u.N,
                children: [
                    (0, r.jsx)(l.BoostGemIcon, {
                        size: "sm",
                        color: n !== a.yG.AVAILABLE ? s.A.colors.TEXT_MUTED : s.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, r.jsx)(i.DZT, {
                        color: n !== a.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(i.EYj, { color: "text-muted", variant: "text-sm/medium", children: (0, o.F)(t, n) }),
        ],
    });
}
