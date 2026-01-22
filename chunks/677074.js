a.r(s), a.d(s, { default: () => h });
var d = a(627968),
    c = a(64700),
    i = a(397927),
    l = a(685073),
    t = a(534400),
    r = a(743981),
    n = a(283306);
let h = c.memo(function (e) {
    let { guildId: s, guildProfile: a } = e;
    return (0, d.jsx)("div", {
        className: n.I8,
        children: (0, d.jsxs)("div", {
            className: n.Tc,
            children: [
                null != a.badge &&
                    (0, d.jsx)(t.Z9, {
                        src: (0, l.gC)(s, a.badge, r.Sl.SIZE_32),
                        size: r.Sl.SIZE_32,
                        className: n.qS,
                    }),
                (0, d.jsx)(i.Text, {
                    tag: "span",
                    variant: "heading-xl/semibold",
                    children: a.tag,
                }),
            ],
        }),
    });
});
