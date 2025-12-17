n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var l = n(399606),
    a = n(607070),
    s = n(70097),
    o = n(451478),
    i = n(884697),
    c = n(813083),
    u = n(794324),
    d = n(388032),
    f = n(986517);
function g(e) {
    let { category: t } = e,
        n = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        i = (0, l.e7)([o.Z], () => o.Z.isFocused()),
        { catalogBannerStatic: g, catalogBannerAnimated: b } = (0, u.Oi)(t);
    return (0, r.jsxs)("div", {
        className: f.catalogBanner,
        children: [
            (0, r.jsx)("img", {
                className: f.catalogBannerImage,
                src: g,
                alt: t.name,
            }),
            null != b &&
                !n &&
                i &&
                (0, r.jsx)(s.Z, {
                    src: b,
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
(0, i.IC)(90);
