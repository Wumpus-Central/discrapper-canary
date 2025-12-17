n.d(t, { c: () => h });
var r = n(54381),
    l = n(442837),
    i = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(607070),
    u = n(987209),
    c = n(347896),
    d = n(717401),
    p = n(897942),
    m = n(325117);
function h() {
    var e, t;
    let n = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        h = (0, s.ZP)(),
        f = (0, i.wj)(h),
        g = (0, c.Z)(),
        y = null == g ? void 0 : g.planSelectionBanner,
        { claimableRewards: j } = (0, u.wD)();
    if (null == y || null == j) return null;
    let v = null == (e = y.getBackgroundImageUrl) ? void 0 : e.call(y, f),
        b = (0, d.Yr)(v),
        O =
            null == (t = y.gradientConfig)
                ? void 0
                : t.call(y, {
                      isDarkMode: f,
                      isAndroid: !1,
                  }),
        S = (0, d.Tl)(O, {
            colorStops: [0, 12, 100],
        }),
        P = (0, d.$q)(b, S, {
            backgroundSize: "cover, auto",
            backgroundPosition: "right center, 0% 0%",
        });
    return (0, r.jsxs)("div", {
        className: m.promotionalFooterBanner,
        style: P,
        children: [
            (0, r.jsx)("div", {
                className: m.avatar,
                children: (0, r.jsx)(p.Z, {
                    claimableRewards: j,
                    maxRewardImageSrc: y.getImageUrl(f, n),
                    size: a.EFr.SIZE_40,
                    imageScaling: 1.25,
                }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                className: m.bannerText,
                color: "always-white",
                children: y.desktopBannerText(j.length),
            }),
        ],
    });
}
