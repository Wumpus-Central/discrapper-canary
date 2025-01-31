n.d(t, { w: () => E });
var i = n(200651),
    l = n(192379),
    a = n(657707),
    r = n(793030),
    s = n(481060),
    o = n(100527),
    c = n(436774),
    d = n(197115),
    u = n(74538),
    m = n(175006),
    h = n(981631),
    _ = n(474936),
    p = n(388032),
    g = n(402031),
    f = n(492764),
    x = n(235810);
function E() {
    return (0, m.Z)()
        ? (0, i.jsx)('div', {
              className: g.emptyContainer,
              children: (0, i.jsxs)('div', {
                  className: g.emptyInner,
                  children: [
                      (0, i.jsx)('img', {
                          src: f,
                          className: g.image,
                          alt: ''
                      }),
                      (0, i.jsx)(s.X6q, {
                          className: g.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-normal',
                          children: p.intl.string(p.t.erEf2t)
                      }),
                      (0, i.jsx)(r.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: p.intl.string(p.t.NaRCXV)
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: g.emptyContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: g.emptyInner,
                      children: [
                          (0, i.jsx)('img', {
                              src: x,
                              className: g.image,
                              alt: ''
                          }),
                          (0, i.jsx)(s.X6q, {
                              className: g.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-normal',
                              children: p.intl.string(p.t.w4DRbW)
                          }),
                          (0, i.jsx)(r.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: p.intl.string(p.t.F6u3Ex)
                          })
                      ]
                  }),
                  (0, i.jsx)(C, {})
              ]
          });
}
function C() {
    let e = (0, u.Px)(_.p9.TIER_2),
        t = l.useCallback(
            () =>
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e('34906').then(n.bind(n, 639565));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: o.Z.FOR_LATER_POPOUT,
                            ...t
                        });
                }),
            []
        ),
        m = p.intl.format(p.t.qXh3fn, {
            nitroTierName: e,
            onClick: t
        });
    return (0, i.jsxs)('div', {
        className: g.upsellContainer,
        children: [
            (0, i.jsx)(a.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(r.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: g.upsellText,
                children: m
            }),
            (0, i.jsx)(d.Z, {
                className: g.upsellButton,
                size: s.PhG.TINY,
                shinyButtonClassName: g.upsellButton,
                subscriptionTier: _.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: h.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
