r.d(n, {
    K: function () {
        return f;
    }
});
var i = r(200651),
    a = r(442837),
    s = r(481060),
    o = r(607070),
    l = r(987209),
    u = r(286961),
    c = r(897942),
    d = r(870705);
function f() {
    var e;
    let n = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        { claimableRewards: r } = (0, l.wD)(),
        f = null === (e = (0, u.Z)()) || void 0 === e ? void 0 : e.planSelection;
    return null == f || null == r || 0 === r.length
        ? null
        : (0, i.jsxs)('div', {
              className: d.promotionalGiftMessage,
              children: [
                  (0, i.jsxs)('div', {
                      className: d.promotionalTextSection,
                      children: [
                          (0, i.jsx)(s.Text, {
                              className: d.promotionalGiftMessageText,
                              variant: 'text-sm/bold',
                              children: f.heading()
                          }),
                          null != f.subheading &&
                              r.length > 1 &&
                              (0, i.jsx)(s.Text, {
                                  className: d.promotionalGiftMessageText,
                                  variant: 'text-sm/normal',
                                  children: f.subheading(r.length)
                              })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: d.avatar,
                      children: (0, i.jsx)(c.Z, {
                          maxRewardImageSrc: f.getImageUrl(!0, n),
                          claimableRewards: r,
                          size: s.AvatarSizes.SIZE_56
                      })
                  })
              ]
          });
}
