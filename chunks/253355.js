n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var l = n(399606),
    i = n(607070),
    a = n(70097),
    s = n(451478),
    o = n(884697),
    c = n(813083),
    u = n(794324),
    d = n(388032),
    g = n(55783);
function p(e) {
    let { category: t } = e,
        n = (0, l.e7)([i.Z], () => i.Z.useReducedMotion),
        o = (0, l.e7)([s.Z], () => s.Z.isFocused()),
        { catalogBannerStatic: p, catalogBannerAnimated: f } = (0, u.Oi)(t);
    return (0, r.jsxs)("div", {
        className: g.catalogBanner,
        children: [
            (0, r.jsx)("img", {
                className: g.catalogBannerImage,
                src: p,
                alt: t.name,
            }),
            null != f &&
                !n &&
                o &&
                (0, r.jsx)(a.Z, {
                    src: f,
                    className: g.animationAsset,
                    autoPlay: !0,
                    loop: !0,
                }),
            (0, r.jsx)(c.Z, {
                category: t,
                className: g.limitedTimeBadge,
                daysRemainingText: d.t["8gsP5M"],
            }),
        ],
    });
}
(0, o.IC)(90);
