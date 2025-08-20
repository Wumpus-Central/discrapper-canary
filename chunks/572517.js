t.d(n, { c: () => x });
var r = t(951288),
    i = t(442837),
    l = t(780384),
    s = t(481060),
    a = t(410030),
    o = t(607070),
    C = t(987209),
    d = t(347896),
    p = t(717401),
    c = t(897942),
    u = t(432483);
function x() {
    var e;
    let n = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        t = (0, a.ZP)(),
        x = (0, l.wj)(t),
        _ = (0, d.Z)(),
        f = null == _ ? void 0 : _.planSelectionBanner,
        { claimableRewards: h } = (0, C.wD)();
    if (null == f || null == h) return null;
    let j =
            null == (e = f.gradientConfig)
                ? void 0
                : e.call(f, {
                      isDarkMode: x,
                      isAndroid: !1,
                  }),
        L = (0, p.Tl)(j);
    return (0, r.jsxs)("div", {
        className: u.promotionalFooterBanner,
        style: L,
        children: [
            (0, r.jsx)(c.Z, {
                claimableRewards: h,
                maxRewardImageSrc: f.getImageUrl(x, n),
                size: s.EFr.SIZE_40,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: u.bannerText,
                children: f.desktopBannerText(h.length),
            }),
        ],
    });
}
