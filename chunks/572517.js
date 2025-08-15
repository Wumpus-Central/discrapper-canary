t.d(n, { c: () => x });
var i = t(951288),
    r = t(442837),
    l = t(780384),
    s = t(481060),
    a = t(410030),
    o = t(607070),
    C = t(987209),
    d = t(347896),
    c = t(717401),
    u = t(897942),
    p = t(432483);
function x() {
    var e;
    let n = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        t = (0, a.ZP)(),
        x = (0, l.wj)(t),
        h = (0, d.Z)(),
        j = null == h ? void 0 : h.planSelectionBanner,
        { claimableRewards: f } = (0, C.wD)();
    if (null == j || null == f) return null;
    let m =
            null == (e = j.gradientConfig)
                ? void 0
                : e.call(j, {
                      isDarkMode: x,
                      isAndroid: !1,
                  }),
        _ = (0, c.Tl)(m);
    return (0, i.jsxs)("div", {
        className: p.promotionalFooterBanner,
        style: _,
        children: [
            (0, i.jsx)(u.Z, {
                claimableRewards: f,
                maxRewardImageSrc: j.getImageUrl(x, n),
                size: s.EFr.SIZE_40,
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-md/medium",
                className: p.bannerText,
                children: j.desktopBannerText(f.length),
            }),
        ],
    });
}
