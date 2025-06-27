n.d(t, { f: () => u });
var i = n(255367),
    r = n(442837),
    s = n(481060),
    l = n(607070),
    a = n(987209),
    o = n(286961),
    c = n(897942),
    d = n(263562);
function u() {
    let e = (0, r.e7)([l.Z], () => l.Z.useReducedMotion),
        { claimableRewards: t } = (0, a.wD)(),
        n = (0, o.Z)(),
        u = null == n ? void 0 : n.planSelection;
    return null == u || null == t || 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: d.container,
              children: [
                  (0, i.jsx)('div', {
                      className: d.avatar,
                      children: (0, i.jsx)(c.Z, {
                          maxRewardImageSrc: u.getImageUrl(!0, e),
                          claimableRewards: t,
                          size: s.EFr.SIZE_48
                      })
                  }),
                  (0, i.jsxs)('div', {
                      className: d.textSection,
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              color: 'text-primary',
                              children: u.heading()
                          }),
                          null != u.subheading &&
                              t.length > 1 &&
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  className: d.subheading,
                                  children: u.subheading(t.length)
                              })
                      ]
                  })
              ]
          });
}
