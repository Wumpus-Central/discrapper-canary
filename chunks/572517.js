n.d(t, { c: () => p });
var r = n(200651),
    i = n(442837),
    l = n(780384),
    s = n(481060),
    o = n(410030),
    a = n(607070),
    C = n(987209),
    d = n(286961),
    c = n(897942),
    u = n(42154);
function p() {
    var e;
    let t = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        n = (0, o.ZP)(),
        p = (0, l.wj)(n),
        _ = null == (e = (0, d.Z)()) ? void 0 : e.planSelectionBanner,
        { claimableRewards: x } = (0, C.wD)();
    return null == _ || null == x
        ? null
        : (0, r.jsxs)('div', {
              className: u.promotionalFooterBanner,
              children: [
                  (0, r.jsx)(c.Z, {
                      claimableRewards: x,
                      maxRewardImageSrc: _.getImageUrl(p, t),
                      size: s.EFr.SIZE_32
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-md/medium',
                      className: u.bannerText,
                      children: _.desktopBannerText(x.length)
                  })
              ]
          });
}
