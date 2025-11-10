n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var l = n(399606),
    i = n(607070),
    s = n(70097),
    a = n(451478),
    o = n(884697),
    c = n(813083),
    u = n(794324),
    d = n(388032),
    p = n(638758);
function g(e) {
    let { category: t } = e,
        n = (0, l.e7)([i.Z], () => i.Z.useReducedMotion),
        o = (0, l.e7)([a.Z], () => a.Z.isFocused()),
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
                o &&
                (0, r.jsx)(s.Z, {
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
(0, o.IC)(90);
