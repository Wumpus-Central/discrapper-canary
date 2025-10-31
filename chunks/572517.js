n.d(t, { c: () => h });
var r = n(951288),
    i = n(442837),
    l = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(607070),
    d = n(987209),
    c = n(347896),
    C = n(717401),
    u = n(897942),
    p = n(432483);
function h() {
    var e, t;
    let n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        h = (0, s.ZP)(),
        m = (0, l.wj)(h),
        _ = (0, c.Z)(),
        f = null == _ ? void 0 : _.planSelectionBanner,
        { claimableRewards: x } = (0, d.wD)();
    if (null == f || null == x) return null;
    let j = null == (e = f.getBackgroundImageUrl) ? void 0 : e.call(f, m),
        g = (0, C.Yr)(j),
        b =
            null == (t = f.gradientConfig)
                ? void 0
                : t.call(f, {
                      isDarkMode: m,
                      isAndroid: !1,
                  }),
        L = (0, C.Tl)(b);
    return (0, r.jsxs)("div", {
        className: p.promotionalFooterBanner,
        style: null != g ? g : L,
        children: [
            (0, r.jsx)("div", {
                className: p.avatar,
                children: (0, r.jsx)(u.Z, {
                    claimableRewards: x,
                    maxRewardImageSrc: f.getImageUrl(m, n),
                    size: a.EFr.SIZE_40,
                    imageScaling: 2,
                }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                className: p.bannerText,
                color: "always-white",
                children: f.desktopBannerText(x.length),
            }),
        ],
    });
}
