t.d(n, { c: () => x });
var i = t(255367),
    l = t(442837),
    r = t(780384),
    s = t(481060),
    a = t(410030),
    o = t(607070),
    C = t(987209),
    d = t(717401),
    c = t(286961),
    u = t(897942),
    p = t(42154);
function x() {
    var e;
    let n = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        t = (0, a.ZP)(),
        x = (0, r.wj)(t),
        h = (0, c.Z)(),
        j = null == h ? void 0 : h.planSelectionBanner,
        { claimableRewards: f } = (0, C.wD)();
    if (null == j || null == f) return null;
    let _ =
            null == (e = j.gradientConfig)
                ? void 0
                : e.call(j, {
                      isDarkMode: x,
                      isAndroid: !1
                  }),
        m = (0, d.Tl)(_);
    return (0, i.jsxs)('div', {
        className: p.promotionalFooterBanner,
        style: m,
        children: [
            (0, i.jsx)(u.Z, {
                claimableRewards: f,
                maxRewardImageSrc: j.getImageUrl(x, n),
                size: s.EFr.SIZE_40
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/medium',
                className: p.bannerText,
                children: j.desktopBannerText(f.length)
            })
        ]
    });
}
