n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(104510),
    l = n(534514),
    s = n(834730),
    a = n(827734),
    o = n(379512),
    d = n(568065),
    u = n(697311);
function c(e) {
    let { count: t, type: n } = e;
    return (0, r.jsxs)("div", {
        className: u.k,
        children: [
            (0, r.jsxs)("div", {
                className: u.N,
                children: [
                    (0, r.jsx)(i._, {
                        size: "sm",
                        color: n !== d.yG.AVAILABLE ? a.A.colors.TEXT_MUTED : a.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                    }),
                    (0, r.jsx)(l.D, {
                        color: n !== d.yG.AVAILABLE ? "text-muted" : "text-strong",
                        variant: "heading-lg/semibold",
                        children: t,
                    }),
                ],
            }),
            (0, r.jsx)(s.E, { color: "text-muted", variant: "text-sm/medium", children: (0, o.F)(t, n) }),
        ],
    });
}
