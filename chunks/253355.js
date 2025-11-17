n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var l = n(399606),
    i = n(607070),
    a = n(70097),
    o = n(451478),
    s = n(884697),
    c = n(813083),
    u = n(794324),
    d = n(388032),
    p = n(638758);
function g(e) {
    let { category: t } = e,
        n = (0, l.e7)([i.Z], () => i.Z.useReducedMotion),
        s = (0, l.e7)([o.Z], () => o.Z.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: f } = (0, u.Oi)(t);
    return (0, r.jsxs)("div", {
        className: p.catalogBanner,
        children: [
            (0, r.jsx)("img", {
                className: p.catalogBannerImage,
                src: g,
                alt: t.name,
            }),
            null != f &&
                !n &&
                s &&
                (0, r.jsx)(a.Z, {
                    src: f,
                    className: p.animationAsset,
                    autoPlay: !0,
                    loop: !0,
                }),
            (0, r.jsx)(c.Z, {
                category: t,
                className: p.limitedTimeBadge,
                daysRemainingText: d.t["8gsP5M"],
            }),
        ],
    });
}
(0, s.IC)(90);
