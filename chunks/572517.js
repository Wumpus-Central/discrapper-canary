t.d(r, { c: () => _ });
var n = t(255367),
    i = t(442837),
    o = t(780384),
    a = t(481060),
    l = t(410030),
    s = t(607070),
    d = t(987209),
    C = t(717401),
    c = t(286961),
    u = t(897942),
    p = t(42154);
function _() {
    var e;
    let r = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        t = (0, l.ZP)(),
        _ = (0, o.wj)(t),
        f = (0, c.Z)(),
        m = null == f ? void 0 : f.planSelectionBanner,
        { claimableRewards: x } = (0, d.wD)();
    if (null == m || null == x) return null;
    let h =
            null == (e = m.gradientConfig)
                ? void 0
                : e.call(m, {
                      isDarkMode: _,
                      isAndroid: !1,
                  }),
        j = (0, C.Tl)(h);
    return (0, n.jsxs)("div", {
        className: p.promotionalFooterBanner,
        style: j,
        children: [
            (0, n.jsx)(u.Z, {
                claimableRewards: x,
                maxRewardImageSrc: m.getImageUrl(_, r),
                size: a.EFr.SIZE_40,
            }),
            (0, n.jsx)(a.Text, {
                variant: "text-md/medium",
                className: p.bannerText,
                children: m.desktopBannerText(x.length),
            }),
        ],
    });
}
