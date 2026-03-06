s.r(e), s.d(e, { default: () => b });
var d = s(627968),
    c = s(64700),
    t = s(397927),
    i = s(685073),
    l = s(534400),
    n = s(743981),
    r = s(219052);
let b = c.memo(function (a) {
    let { guildId: e, guildProfile: s } = a;
    return (0, d.jsx)("div", {
        className: r.I8,
        children: (0, d.jsxs)("div", {
            className: r.Tc,
            children: [
                null != s.badge &&
                    (0, d.jsx)(
                        l.Z9,
                        { src: (0, i.gC)(e, s.badge, n.Sl.SIZE_32), size: n.Sl.SIZE_32, className: r.qS },
                        (0, i.gC)(e, s.badge, n.Sl.SIZE_32) ?? e,
                    ),
                (0, d.jsx)(t.Text, { tag: "span", variant: "heading-xl/semibold", children: s.tag }),
            ],
        }),
    });
});
