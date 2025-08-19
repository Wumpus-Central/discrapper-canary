r.d(t, { Z: () => p });
var n = r(951288);
r(647438);
var l = r(399606),
    a = r(607070),
    i = r(70097),
    o = r(451478),
    s = r(884697),
    c = r(813083),
    u = r(794324),
    d = r(638758);
function p(e) {
    let { category: t } = e,
        r = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        s = (0, l.e7)([o.Z], () => o.Z.isFocused()),
        { catalogBannerStatic: p, catalogBannerAnimated: g } = (0, u.Oi)(t);
    return (0, n.jsxs)("div", {
        className: d.catalogBanner,
        children: [
            (0, n.jsx)("img", {
                className: d.catalogBannerImage,
                src: p,
                alt: t.name,
            }),
            null != g &&
                !r &&
                s &&
                (0, n.jsx)(i.Z, {
                    src: g,
                    className: d.animationAsset,
                    autoPlay: !0,
                    loop: !0,
                }),
            (0, n.jsx)(c.Z, {
                category: t,
                className: d.limitedTimeBadge,
                display: c.k.BANNER,
            }),
        ],
    });
}
(0, s.IC)(90);
