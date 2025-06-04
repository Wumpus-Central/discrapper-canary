t.d(n, { w: () => c });
var l = t(255367),
    i = t(442837),
    r = t(481060),
    s = t(607070),
    a = t(987209),
    o = t(286961),
    C = t(897942),
    d = t(549904);
function c() {
    let e = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        { claimableRewards: n } = (0, a.wD)(),
        t = (0, o.Z)(),
        c = null == t ? void 0 : t.planSelection;
    return null == c || null == n || 0 === n.length
        ? null
        : (0, l.jsxs)('div', {
              className: d.container,
              children: [
                  (0, l.jsx)('div', {
                      className: d.avatar,
                      children: (0, l.jsx)(C.Z, {
                          maxRewardImageSrc: c.getImageUrl(!0, e),
                          claimableRewards: n,
                          size: r.EFr.SIZE_48
                      })
                  }),
                  (0, l.jsxs)('div', {
                      className: d.textSection,
                      children: [
                          (0, l.jsx)(r.Text, {
                              variant: 'text-md/medium',
                              color: 'text-primary',
                              children: c.heading()
                          }),
                          null != c.subheading &&
                              n.length > 1 &&
                              (0, l.jsx)(r.Text, {
                                  variant: 'text-md/medium',
                                  className: d.subheading,
                                  children: c.subheading(n.length)
                              })
                      ]
                  })
              ]
          });
}
