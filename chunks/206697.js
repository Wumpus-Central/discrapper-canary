n.d(t, {
    w: function () {
        return C;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(657707),
    a = n(793030),
    o = n(481060),
    s = n(100527),
    c = n(436774),
    d = n(197115),
    u = n(74538),
    m = n(175006),
    h = n(981631),
    f = n(474936),
    p = n(388032),
    _ = n(402031),
    g = n(492764),
    E = n(235810);
function C() {
    return (0, m.Z)()
        ? (0, i.jsx)('div', {
              className: _.emptyContainer,
              children: (0, i.jsxs)('div', {
                  className: _.emptyInner,
                  children: [
                      (0, i.jsx)('img', {
                          src: g,
                          className: _.image,
                          alt: ''
                      }),
                      (0, i.jsx)(o.Heading, {
                          className: _.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-normal',
                          children: p.intl.string(p.t.erEf2t)
                      }),
                      (0, i.jsx)(a.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: p.intl.string(p.t.NaRCXV)
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: _.emptyContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: _.emptyInner,
                      children: [
                          (0, i.jsx)('img', {
                              src: E,
                              className: _.image,
                              alt: ''
                          }),
                          (0, i.jsx)(o.Heading, {
                              className: _.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-normal',
                              children: p.intl.string(p.t.w4DRbW)
                          }),
                          (0, i.jsx)(a.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: p.intl.string(p.t.F6u3Ex)
                          })
                      ]
                  }),
                  (0, i.jsx)(I, {})
              ]
          });
}
function I() {
    let e = (0, u.Px)(f.p9.TIER_2),
        t = r.useCallback(
            () =>
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('34906').then(n.bind(n, 639565));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: s.Z.FOR_LATER_POPOUT,
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
        className: _.upsellContainer,
        children: [
            (0, i.jsx)(l.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(a.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: _.upsellText,
                children: m
            }),
            (0, i.jsx)(d.Z, {
                className: _.upsellButton,
                size: o.ButtonSizes.TINY,
                shinyButtonClassName: _.upsellButton,
                subscriptionTier: f.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: h.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
