n.d(t, { c: () => x });
var r = n(951288),
    i = n(442837),
    l = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(607070),
    C = n(987209),
    d = n(347896),
    c = n(717401),
    u = n(897942),
    p = n(432483);
function x() {
    var e, t;
    let n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        x = (0, s.ZP)(),
        h = (0, l.wj)(x),
        f = (0, d.Z)(),
        _ = null == f ? void 0 : f.planSelectionBanner,
        { claimableRewards: m } = (0, C.wD)();
    if (null == _ || null == m) return null;
    let j = null == (e = _.getBackgroundImageUrl) ? void 0 : e.call(_, h),
        g = (0, c.Yr)(j),
        b =
            null == (t = _.gradientConfig)
                ? void 0
                : t.call(_, {
                      isDarkMode: h,
                      isAndroid: !1,
                  }),
        y = (0, c.Tl)(b, {
            colorStops: [0, 12, 100],
        }),
        L = (0, c.$q)(g, y);
    return (0, r.jsxs)("div", {
        className: p.promotionalFooterBanner,
        style: L,
        children: [
            (0, r.jsx)("div", {
                className: p.avatar,
                children: (0, r.jsx)(u.Z, {
                    claimableRewards: m,
                    maxRewardImageSrc: _.getImageUrl(h, n),
                    size: a.EFr.SIZE_40,
                    imageScaling: 1.25,
                }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                className: p.bannerText,
                color: "always-white",
                children: _.desktopBannerText(m.length),
            }),
        ],
    });
}
