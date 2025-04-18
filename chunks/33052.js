n.d(t, { K: () => d });
var r = n(200651),
    i = n(442837),
    a = n(481060),
    o = n(607070),
    s = n(987209),
    l = n(286961),
    c = n(897942),
    u = n(154422);
function d() {
    var e;
    let t = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        { claimableRewards: n } = (0, s.wD)(),
        d = null == (e = (0, l.Z)()) ? void 0 : e.planSelection;
    return null == d || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)('div', {
              className: u.promotionalGiftMessage,
              children: [
                  (0, r.jsxs)('div', {
                      className: u.promotionalTextSection,
                      children: [
                          (0, r.jsx)(a.Text, {
                              className: u.promotionalGiftMessageText,
                              variant: 'text-sm/semibold',
                              children: d.heading()
                          }),
                          null != d.subheading &&
                              n.length > 1 &&
                              (0, r.jsx)(a.Text, {
                                  className: u.promotionalGiftMessageText,
                                  variant: 'text-sm/normal',
                                  children: d.subheading(n.length)
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: u.avatar,
                      children: (0, r.jsx)(c.Z, {
                          maxRewardImageSrc: d.getImageUrl(!0, t),
                          claimableRewards: n,
                          size: a.EFr.SIZE_56
                      })
                  })
              ]
          });
}
