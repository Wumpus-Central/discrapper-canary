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
        _ = (0, l.wj)(x),
        h = (0, d.Z)(),
        f = null == h ? void 0 : h.planSelectionBanner,
        { claimableRewards: j } = (0, C.wD)();
    if (null == f || null == j) return null;
    let m = null == (e = f.getBackgroundImageUrl) ? void 0 : e.call(f, _),
        L = (0, c.Yr)(m),
        b =
            null == (t = f.gradientConfig)
                ? void 0
                : t.call(f, {
                      isDarkMode: _,
                      isAndroid: !1,
                  }),
        g = (0, c.Tl)(b);
    return (0, r.jsxs)("div", {
        className: u.promotionalFooterBanner,
        style: null != L ? L : g,
        children: [
            (0, r.jsx)("div", {
                className: u.avatar,
                children: (0, r.jsx)(p.Z, {
                    claimableRewards: j,
                    maxRewardImageSrc: f.getImageUrl(_, n),
                    size: s.EFr.SIZE_40,
                    imageScaling: 2,
                }),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: u.bannerText,
                color: "always-white",
                children: f.desktopBannerText(j.length),
            }),
        ],
    });
}
