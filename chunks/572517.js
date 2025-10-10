n.d(t, { c: () => _ });
var r = n(951288),
    i = n(442837),
    a = n(780384),
    l = n(481060),
    o = n(410030),
    s = n(607070),
    d = n(987209),
    C = n(347896),
    c = n(717401),
    u = n(897942),
    p = n(432483);
function _() {
    var e, t;
    let n = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        _ = (0, o.ZP)(),
        f = (0, a.wj)(_),
        h = (0, C.Z)(),
        m = null == h ? void 0 : h.planSelectionBanner,
        { claimableRewards: x } = (0, d.wD)();
    if (null == m || null == x) return null;
    let j = null == (e = m.getBackgroundImageUrl) ? void 0 : e.call(m, f),
        g = (0, c.Yr)(j),
        b =
            null == (t = m.gradientConfig)
                ? void 0
                : t.call(m, {
                      isDarkMode: f,
                      isAndroid: !1,
                  }),
        y = (0, c.Tl)(b);
    return (0, r.jsxs)("div", {
        className: p.promotionalFooterBanner,
        style: null != g ? g : y,
        children: [
            (0, r.jsx)("div", {
                className: p.avatar,
                children: (0, r.jsx)(u.Z, {
                    claimableRewards: x,
                    maxRewardImageSrc: m.getImageUrl(f, n),
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
