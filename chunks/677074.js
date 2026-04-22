s.r(a), s.d(a, { default: () => r });
var _ = s(627968),
    t = s(64700),
    n = s(834730),
    l = s(685073),
    i = s(534400),
    c = s(743981),
    d = s(518255);
let r = t.memo(function (e) {
    let { guildId: a, guildProfile: s } = e;
    return (0, _.jsx)("div", {
        className: d.I8,
        children: (0, _.jsxs)("div", {
            className: d.Tc,
            children: [
                null != s.badge &&
                    (0, _.jsx)(
                        i.Z9,
                        { src: (0, l.gC)(a, s.badge, c.Sl.SIZE_32), size: c.Sl.SIZE_32, className: d.qS },
                        (0, l.gC)(a, s.badge, c.Sl.SIZE_32) ?? a,
                    ),
                (0, _.jsx)(n.E, { tag: "span", variant: "heading-xl/semibold", children: s.tag }),
            ],
        }),
    });
});
