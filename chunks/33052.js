n.d(t, { K: () => d });
var i = n(200651),
    r = n(442837),
    a = n(481060),
    s = n(607070),
    o = n(987209),
    l = n(286961),
    u = n(897942),
    c = n(168654);
function d() {
    var e;
    let t = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        { claimableRewards: n } = (0, o.wD)(),
        d = null === (e = (0, l.Z)()) || void 0 === e ? void 0 : e.planSelection;
    return null == d || null == n || 0 === n.length
        ? null
        : (0, i.jsxs)('div', {
              className: c.promotionalGiftMessage,
              children: [
                  (0, i.jsxs)('div', {
                      className: c.promotionalTextSection,
                      children: [
                          (0, i.jsx)(a.Text, {
                              className: c.promotionalGiftMessageText,
                              variant: 'text-sm/semibold',
                              children: d.heading()
                          }),
                          null != d.subheading &&
                              n.length > 1 &&
                              (0, i.jsx)(a.Text, {
                                  className: c.promotionalGiftMessageText,
                                  variant: 'text-sm/normal',
                                  children: d.subheading(n.length)
                              })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: c.avatar,
                      children: (0, i.jsx)(u.Z, {
                          maxRewardImageSrc: d.getImageUrl(!0, t),
                          claimableRewards: n,
                          size: a.EFr.SIZE_56
                      })
                  })
              ]
          });
}
