n.d(t, { c: () => h });
var l = n(54381),
    r = n(442837),
    i = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(607070),
    u = n(987209),
    c = n(347896),
    d = n(717401),
    m = n(897942),
    p = n(432483);
function h() {
    var e, t;
    let n = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        h = (0, s.ZP)(),
        f = (0, i.wj)(h),
        g = (0, c.Z)(),
        v = null == g ? void 0 : g.planSelectionBanner,
        { claimableRewards: j } = (0, u.wD)();
    if (null == v || null == j) return null;
    let y = null == (e = v.getBackgroundImageUrl) ? void 0 : e.call(v, f),
        b = (0, d.Yr)(y),
        S =
            null == (t = v.gradientConfig)
                ? void 0
                : t.call(v, {
                      isDarkMode: f,
                      isAndroid: !1,
                  }),
        x = (0, d.Tl)(S, {
            colorStops: [0, 12, 100],
        }),
        P = (0, d.$q)(b, x, {
            backgroundSize: "cover, auto",
            backgroundPosition: "right center, 0% 0%",
        });
    return (0, l.jsxs)("div", {
        className: p.promotionalFooterBanner,
        style: P,
        children: [
            (0, l.jsx)("div", {
                className: p.avatar,
                children: (0, l.jsx)(m.Z, {
                    claimableRewards: j,
                    maxRewardImageSrc: v.getImageUrl(f, n),
                    size: a.EFr.SIZE_40,
                    imageScaling: 1.25,
                }),
            }),
            (0, l.jsx)(a.Text, {
                variant: "text-md/medium",
                className: p.bannerText,
                color: "always-white",
                children: v.desktopBannerText(j.length),
            }),
        ],
    });
}
