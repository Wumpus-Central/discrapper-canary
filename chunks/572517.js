n.d(r, { c: () => _ });
var t = n(255367),
    i = n(442837),
    o = n(780384),
    a = n(481060),
    l = n(410030),
    s = n(607070),
    C = n(987209),
    d = n(717401),
    c = n(286961),
    p = n(897942),
    u = n(288978);
function _() {
    var e;
    let r = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        n = (0, l.ZP)(),
        _ = (0, o.wj)(n),
        x = (0, c.Z)(),
        f = null == x ? void 0 : x.planSelectionBanner,
        { claimableRewards: m } = (0, C.wD)();
    if (null == f || null == m) return null;
    let h =
            null == (e = f.gradientConfig)
                ? void 0
                : e.call(f, {
                      isDarkMode: _,
                      isAndroid: !1,
                  }),
        j = (0, d.Tl)(h);
    return (0, t.jsxs)("div", {
        className: u.promotionalFooterBanner,
        style: j,
        children: [
            (0, t.jsx)(p.Z, {
                claimableRewards: m,
                maxRewardImageSrc: f.getImageUrl(_, r),
                size: a.EFr.SIZE_40,
            }),
            (0, t.jsx)(a.Text, {
                variant: "text-md/medium",
                className: u.bannerText,
                children: f.desktopBannerText(m.length),
            }),
        ],
    });
}
