r.d(t, { w: () => b });
var n = r(255367),
    s = r(73800),
    l = r(657707),
    a = r(793030),
    i = r(755721),
    o = r(481060),
    c = r(100527),
    u = r(436774),
    d = r(767714),
    h = r(74538),
    p = r(175006),
    f = r(981631),
    g = r(474936),
    m = r(388032),
    _ = r(491350),
    S = r(492764),
    y = r(235810);
function b() {
    return (0, p.Z)()
        ? (0, n.jsx)('div', {
              className: _.emptyContainer,
              children: (0, n.jsxs)('div', {
                  className: _.emptyInner,
                  children: [
                      (0, n.jsx)('img', {
                          src: S,
                          className: _.image,
                          alt: ''
                      }),
                      (0, n.jsx)(o.X6q, {
                          className: _.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-default',
                          children: m.intl.string(m.t.erEf2t)
                      }),
                      (0, n.jsx)(a.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: m.intl.string(m.t.NaRCXV)
                      })
                  ]
              })
          })
        : (0, n.jsxs)('div', {
              className: _.emptyContainer,
              children: [
                  (0, n.jsxs)('div', {
                      className: _.emptyInner,
                      children: [
                          (0, n.jsx)('img', {
                              src: y,
                              className: _.image,
                              alt: ''
                          }),
                          (0, n.jsx)(o.X6q, {
                              className: _.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-default',
                              children: m.intl.string(m.t.w4DRbW)
                          }),
                          (0, n.jsx)(a.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: m.intl.string(m.t.F6u3Ex)
                          })
                      ]
                  }),
                  (0, n.jsx)(x, {})
              ]
          });
}
function x() {
    let e = (0, h.Px)(g.p9.TIER_2),
        t = s.useCallback(
            () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await r.e('50740').then(r.bind(r, 639565));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            ((n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n));
                                        }));
                                }
                                return e;
                            })({ source: c.Z.FOR_LATER_POPOUT }, t)
                        );
                }),
            []
        ),
        p = m.intl.format(m.t.qXh3fn, {
            nitroTierName: e,
            onClick: t
        });
    return (0, n.jsxs)('div', {
        className: _.upsellContainer,
        children: [
            (0, n.jsx)(l.SrA, {
                size: 'md',
                color: u.JX.PREMIUM_TIER_2
            }),
            (0, n.jsx)(a.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: _.upsellText,
                children: p
            }),
            (0, n.jsx)(d.Z, {
                className: _.upsellButton,
                size: i.Ph.TINY,
                shinyButtonClassName: _.upsellButton,
                subscriptionTier: g.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: f.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
