n.d(t, { c: () => x });
var i = n(255367),
    r = n(442837),
    l = n(780384),
    s = n(481060),
    a = n(410030),
    o = n(607070),
    C = n(987209),
    d = n(717401),
    c = n(286961),
    u = n(897942),
    p = n(42154);
function x() {
    var e;
    let t = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        n = (0, a.ZP)(),
        x = (0, l.wj)(n),
        h = (0, c.Z)(),
        f = null == h ? void 0 : h.planSelectionBanner,
        { claimableRewards: j } = (0, C.wD)();
    if (null == f || null == j) return null;
    let m =
            null == (e = f.gradientConfig)
                ? void 0
                : e.call(f, {
                      isDarkMode: x,
                      isAndroid: !1
                  }),
        _ = (0, d.Tl)(m);
    return (0, i.jsxs)('div', {
        className: p.promotionalFooterBanner,
        style: _,
        children: [
            (0, i.jsx)(u.Z, {
                claimableRewards: j,
                maxRewardImageSrc: f.getImageUrl(x, t),
                size: s.EFr.SIZE_40
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                className: p.bannerText,
                children: f.desktopBannerText(j.length)
            })
        ]
    });
}
