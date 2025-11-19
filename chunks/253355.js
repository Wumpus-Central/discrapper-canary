n.d(t, { Z: () => g });
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
    f = n(638758);
function g(e) {
    let { category: t } = e,
        n = (0, l.e7)([i.Z], () => i.Z.useReducedMotion),
        o = (0, l.e7)([s.Z], () => s.Z.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: p } = (0, u.Oi)(t);
    return (0, r.jsxs)("div", {
        className: f.catalogBanner,
        children: [
            (0, r.jsx)("img", {
                className: f.catalogBannerImage,
                src: g,
                alt: t.name,
            }),
            null != p &&
                !n &&
                o &&
                (0, r.jsx)(a.Z, {
                    src: p,
                    className: f.animationAsset,
                    autoPlay: !0,
                    loop: !0,
                }),
            (0, r.jsx)(c.Z, {
                category: t,
                className: f.limitedTimeBadge,
                daysRemainingText: d.t["8gsP5M"],
            }),
        ],
    });
}
(0, o.IC)(90);
