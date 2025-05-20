n.d(t, { K: () => d });
var r = n(255367),
    i = n(442837),
    l = n(481060),
    a = n(607070),
    s = n(987209),
    o = n(286961),
    c = n(897942),
    u = n(154422);
function d() {
    var e;
    let t = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        { claimableRewards: n } = (0, s.wD)(),
        d = null == (e = (0, o.Z)()) ? void 0 : e.planSelection;
    return null == d || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)('div', {
              className: u.promotionalGiftMessage,
              children: [
                  (0, r.jsxs)('div', {
                      className: u.promotionalTextSection,
                      children: [
                          (0, r.jsx)(l.Text, {
                              className: u.promotionalGiftMessageText,
                              variant: 'text-sm/semibold',
                              children: d.heading()
                          }),
                          null != d.subheading &&
                              n.length > 1 &&
                              (0, r.jsx)(l.Text, {
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
                          size: l.EFr.SIZE_56
                      })
                  })
              ]
          });
}
