n.d(t, { c: () => h });
var r = n(54381),
    l = n(442837),
    a = n(780384),
    i = n(481060),
    o = n(410030),
    s = n(607070),
    d = n(987209),
    c = n(347896),
    u = n(717401),
    p = n(897942),
    m = n(432483);
function h() {
    var e, t;
    let n = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        h = (0, o.ZP)(),
        f = (0, a.wj)(h),
        b = (0, c.Z)(),
        g = null == b ? void 0 : b.planSelectionBanner,
        { claimableRewards: v } = (0, d.wD)();
    if (null == g || null == v) return null;
    let x = null == (e = g.getBackgroundImageUrl) ? void 0 : e.call(g, f),
        P = (0, u.Yr)(x),
        y =
            null == (t = g.gradientConfig)
                ? void 0
                : t.call(g, {
                      isDarkMode: f,
                      isAndroid: !1,
                  }),
        j = (0, u.Tl)(y, {
            colorStops: [0, 12, 100],
        }),
        S = (0, u.$q)(P, j, {
            backgroundSize: "cover, auto",
            backgroundPosition: "right center, 0% 0%",
        });
    return (0, r.jsxs)("div", {
        className: m.promotionalFooterBanner,
        style: S,
        children: [
            (0, r.jsx)("div", {
                className: m.avatar,
                children: (0, r.jsx)(p.Z, {
                    claimableRewards: v,
                    maxRewardImageSrc: g.getImageUrl(f, n),
                    size: i.EFr.SIZE_40,
                    imageScaling: 1.25,
                }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-md/medium",
                className: m.bannerText,
                color: "always-white",
                children: g.desktopBannerText(v.length),
            }),
        ],
    });
}
