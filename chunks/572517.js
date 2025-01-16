n.d(t, {
    c: function () {
        return p;
    }
});
var i = n(200651),
    l = n(442837),
    s = n(780384),
    r = n(481060),
    a = n(410030),
    o = n(607070),
    C = n(987209),
    d = n(286961),
    u = n(897942),
    c = n(235665);
function p() {
    var e;
    let t = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        n = (0, a.ZP)(),
        p = (0, s.wj)(n),
        x = null === (e = (0, d.Z)()) || void 0 === e ? void 0 : e.planSelectionBanner,
        { claimableRewards: h } = (0, C.wD)();
    return null == x || null == h
        ? null
        : (0, i.jsxs)('div', {
              className: c.promotionalFooterBanner,
              children: [
                  (0, i.jsx)('div', {
                      className: c.promotionalAvatars,
                      children: (0, i.jsx)(u.Z, {
                          claimableRewards: h,
                          maxRewardImageSrc: x.getImageUrl(p, t),
                          size: r.AvatarSizes.SIZE_32
                      })
                  }),
                  (0, i.jsx)(r.Text, {
                      variant: 'text-md/normal',
                      className: c.bannerText,
                      children: x.body(h.length)
                  })
              ]
          });
}
