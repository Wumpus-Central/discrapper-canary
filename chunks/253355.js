n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var l = n(399606),
    i = n(607070),
    s = n(70097),
    o = n(451478),
    a = n(884697),
    c = n(813083),
    u = n(794324),
    d = n(388032),
    g = n(638758);
function f(e) {
    let { category: t } = e,
        n = (0, l.e7)([i.Z], () => i.Z.useReducedMotion),
        a = (0, l.e7)([o.Z], () => o.Z.isFocused()),
        { catalogBannerStatic: f, catalogBannerAnimated: p } = (0, u.Oi)(t);
    return (0, r.jsxs)("div", {
        className: g.catalogBanner,
        children: [
            (0, r.jsx)("img", {
                className: g.catalogBannerImage,
                src: f,
                alt: t.name,
            }),
            null != p &&
                !n &&
                a &&
                (0, r.jsx)(s.Z, {
                    src: p,
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
(0, a.IC)(90);
