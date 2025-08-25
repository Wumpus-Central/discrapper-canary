n.d(t, { c: () => x });
var r = n(951288),
    i = n(442837),
    l = n(780384),
    s = n(481060),
    a = n(410030),
    o = n(607070),
    C = n(987209),
    d = n(347896),
    c = n(717401),
    p = n(897942),
    u = n(432483);
function x() {
    var e, t;
    let n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        x = (0, a.ZP)(),
        h = (0, l.wj)(x),
        _ = (0, d.Z)(),
        f = null == _ ? void 0 : _.planSelectionBanner,
        { claimableRewards: j } = (0, C.wD)();
    if (null == f || null == j) return null;
    let m = null == (e = f.getBackgroundImageUrl) ? void 0 : e.call(f, h),
        L =
            null == (t = f.gradientConfig)
                ? void 0
                : t.call(f, {
                      isDarkMode: h,
                      isAndroid: !1,
                  }),
        g = (0, c.Tl)(L);
    return (0, r.jsxs)("div", {
        className: u.promotionalFooterBanner,
        style: null != m ? { backgroundImage: "url(".concat(m, ")") } : g,
        children: [
            (0, r.jsx)(p.Z, {
                claimableRewards: j,
                maxRewardImageSrc: f.getImageUrl(h, n),
                size: s.EFr.SIZE_40,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: u.bannerText,
                children: f.desktopBannerText(j.length),
            }),
        ],
    });
}
