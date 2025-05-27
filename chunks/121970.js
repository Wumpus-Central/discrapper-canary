n.d(t, { w: () => c });
var i = n(255367),
    l = n(442837),
    s = n(481060),
    r = n(607070),
    a = n(987209),
    o = n(286961),
    C = n(897942),
    d = n(549904);
function c() {
    let e = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        { claimableRewards: t } = (0, a.wD)(),
        n = (0, o.Z)(),
        c = null == n ? void 0 : n.planSelection;
    return null == c || null == t || 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: d.container,
              children: [
                  (0, i.jsx)('div', {
                      className: d.avatar,
                      children: (0, i.jsx)(C.Z, {
                          maxRewardImageSrc: c.getImageUrl(!0, e),
                          claimableRewards: t,
                          size: s.EFr.SIZE_48
                      })
                  }),
                  (0, i.jsxs)('div', {
                      className: d.textSection,
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-md/bold',
                              color: 'text-primary',
                              children: c.heading()
                          }),
                          null != c.subheading &&
                              t.length > 1 &&
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  className: d.subheading,
                                  children: c.subheading(t.length)
                              })
                      ]
                  })
              ]
          });
}
