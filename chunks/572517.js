r.d(t, { c: () => _ });
var n = r(255367),
    i = r(442837),
    o = r(780384),
    a = r(481060),
    l = r(410030),
    s = r(607070),
    d = r(987209),
    C = r(717401),
    c = r(286961),
    u = r(897942),
    p = r(42154);
function _() {
    var e;
    let t = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        r = (0, l.ZP)(),
        _ = (0, o.wj)(r),
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
                maxRewardImageSrc: m.getImageUrl(_, t),
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
