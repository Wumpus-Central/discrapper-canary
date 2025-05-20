n.d(t, { c: () => x });
var l = n(255367),
    i = n(442837),
    s = n(780384),
    r = n(481060),
    a = n(410030),
    o = n(607070),
    C = n(987209),
    d = n(717401),
    c = n(286961),
    u = n(897942),
    p = n(42154);
function x() {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        n = (0, a.ZP)(),
        x = (0, s.wj)(n),
        h = (0, c.Z)(),
        f = null == h ? void 0 : h.planSelectionBanner,
        { claimableRewards: j } = (0, C.wD)();
    if (null == f || null == j) return null;
    let _ =
            null == (e = f.gradientConfig)
                ? void 0
                : e.call(f, {
                      isDarkMode: x,
                      isAndroid: !1
                  }),
        L = (0, d.Tl)(_);
    return (0, l.jsxs)('div', {
        className: p.promotionalFooterBanner,
        style: L,
        children: [
            (0, l.jsx)(u.Z, {
                claimableRewards: j,
                maxRewardImageSrc: f.getImageUrl(x, t),
                size: r.EFr.SIZE_32
            }),
            (0, l.jsx)(r.Text, {
                variant: 'text-md/medium',
                className: p.bannerText,
                children: f.desktopBannerText(j.length)
            })
        ]
    });
}
