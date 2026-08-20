e.r(a), e.d(a, { default: () => h });
var d = e(477900),
    l = e(582128),
    i = e(834730),
    c = e(685073),
    n = e(534400),
    r = e(743981),
    t = e(950776);
let h = l.memo(function (s) {
    let { guildId: a, guildProfile: e } = s;
    return (0, d.jsx)("div", {
        className: t.I8,
        children: (0, d.jsxs)("div", {
            className: t.Tc,
            children: [
                null != e.badge &&
                    (0, d.jsx)(
                        n.Z9,
                        { src: (0, c.gC)(a, e.badge, r.Sl.SIZE_32), size: r.Sl.SIZE_32, className: t.qS },
                        (0, c.gC)(a, e.badge, r.Sl.SIZE_32) ?? a,
                    ),
                (0, d.jsx)(i.E, { tag: "span", variant: "heading-xl/semibold", children: e.tag }),
            ],
        }),
    });
});
