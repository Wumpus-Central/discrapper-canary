n.d(t, { c: () => x });
var r = n(951288),
    i = n(442837),
    l = n(780384),
    s = n(481060),
    a = n(410030),
    o = n(607070),
    C = n(987209),
    d = n(347896),
    p = n(717401),
    c = n(897942),
    u = n(432483);
function x() {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        n = (0, a.ZP)(),
        x = (0, l.wj)(n),
        h = (0, d.Z)(),
        _ = null == h ? void 0 : h.planSelectionBanner,
        { claimableRewards: f } = (0, C.wD)();
    if (null == _ || null == f) return null;
    let j =
            null == (e = _.gradientConfig)
                ? void 0
                : e.call(_, {
                      isDarkMode: x,
                      isAndroid: !1,
                  }),
        m = (0, p.Tl)(j);
    return (0, r.jsxs)("div", {
        className: u.promotionalFooterBanner,
        style: m,
        children: [
            (0, r.jsx)(c.Z, {
                claimableRewards: f,
                maxRewardImageSrc: _.getImageUrl(x, t),
                size: s.EFr.SIZE_40,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: u.bannerText,
                children: _.desktopBannerText(f.length),
            }),
        ],
    });
}
