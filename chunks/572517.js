n.d(t, { c: () => _ });
var r = n(951288),
    i = n(442837),
    a = n(780384),
    l = n(481060),
    o = n(410030),
    s = n(607070),
    d = n(987209),
    c = n(347896),
    C = n(717401),
    u = n(897942),
    p = n(432483);
function _() {
    var e, t;
    let n = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        _ = (0, o.ZP)(),
        h = (0, a.wj)(_),
        f = (0, c.Z)(),
        m = null == f ? void 0 : f.planSelectionBanner,
        { claimableRewards: x } = (0, d.wD)();
    if (null == m || null == x) return null;
    let g = null == (e = m.getBackgroundImageUrl) ? void 0 : e.call(m, h),
        j = (0, C.Yr)(g),
        b =
            null == (t = m.gradientConfig)
                ? void 0
                : t.call(m, {
                      isDarkMode: h,
                      isAndroid: !1,
                  }),
        v = (0, C.Tl)(b);
    return (0, r.jsxs)("div", {
        className: p.promotionalFooterBanner,
        style: null != j ? j : v,
        children: [
            (0, r.jsx)("div", {
                className: p.avatar,
                children: (0, r.jsx)(u.Z, {
                    claimableRewards: x,
                    maxRewardImageSrc: m.getImageUrl(h, n),
                    size: l.EFr.SIZE_40,
                    imageScaling: 2,
                }),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/medium",
                className: p.bannerText,
                color: "always-white",
                children: m.desktopBannerText(x.length),
            }),
        ],
    });
}
