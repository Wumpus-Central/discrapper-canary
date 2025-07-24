r.d(t, { w: () => b });
var n = r(255367),
    s = r(73800),
    l = r(657707),
    a = r(793030),
    i = r(755721),
    o = r(481060),
    c = r(100527),
    u = r(436774),
    h = r(767714),
    d = r(74538),
    p = r(175006),
    f = r(981631),
    g = r(474936),
    m = r(388032),
    S = r(491350),
    _ = r(492764),
    y = r(235810);
function b() {
    return (0, p.Z)()
        ? (0, n.jsx)('div', {
              className: S.emptyContainer,
              children: (0, n.jsxs)('div', {
                  className: S.emptyInner,
                  children: [
                      (0, n.jsx)('img', {
                          src: _,
                          className: S.image,
                          alt: ''
                      }),
                      (0, n.jsx)(o.X6q, {
                          className: S.header,
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
              className: S.emptyContainer,
              children: [
                  (0, n.jsxs)('div', {
                      className: S.emptyInner,
                      children: [
                          (0, n.jsx)('img', {
                              src: y,
                              className: S.image,
                              alt: ''
                          }),
                          (0, n.jsx)(o.X6q, {
                              className: S.header,
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
    let e = (0, d.Px)(g.p9.TIER_2),
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
        className: S.upsellContainer,
        children: [
            (0, n.jsx)(l.SrA, {
                size: 'md',
                color: u.JX.PREMIUM_TIER_2
            }),
            (0, n.jsx)(a.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: S.upsellText,
                children: p
            }),
            (0, n.jsx)(h.Z, {
                className: S.upsellButton,
                size: i.Ph.TINY,
                shinyButtonClassName: S.upsellButton,
                subscriptionTier: g.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: f.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
