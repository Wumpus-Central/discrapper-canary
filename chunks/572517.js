n.d(t, { c: () => x });
var r = n(951288),
    i = n(442837),
    l = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(607070),
    C = n(987209),
    d = n(347896),
    c = n(717401),
    p = n(897942),
    u = n(432483);
function x() {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        n = (0, s.ZP)(),
        x = (0, l.wj)(n),
        f = (0, d.Z)(),
        h = null == f ? void 0 : f.planSelectionBanner,
        { claimableRewards: _ } = (0, C.wD)();
    if (null == h || null == _) return null;
    let j =
            null == (e = h.gradientConfig)
                ? void 0
                : e.call(h, {
                      isDarkMode: x,
                      isAndroid: !1,
                  }),
        m = (0, c.Tl)(j);
    return (0, r.jsxs)("div", {
        className: u.promotionalFooterBanner,
        style: m,
        children: [
            (0, r.jsx)(p.Z, {
                claimableRewards: _,
                maxRewardImageSrc: h.getImageUrl(x, t),
                size: a.EFr.SIZE_40,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                className: u.bannerText,
                children: h.desktopBannerText(_.length),
            }),
        ],
    });
}
