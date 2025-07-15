r.d(t, { w: () => x });
var n = r(255367),
    s = r(73800),
    l = r(657707),
    a = r(793030),
    o = r(755721),
    i = r(481060),
    c = r(100527),
    u = r(436774),
    d = r(767714),
    h = r(74538),
    p = r(175006),
    f = r(981631),
    g = r(474936),
    m = r(388032),
    b = r(491350),
    y = r(492764),
    S = r(235810);
function x() {
    return (0, p.Z)()
        ? (0, n.jsx)('div', {
              className: b.emptyContainer,
              children: (0, n.jsxs)('div', {
                  className: b.emptyInner,
                  children: [
                      (0, n.jsx)('img', {
                          src: y,
                          className: b.image,
                          alt: ''
                      }),
                      (0, n.jsx)(i.X6q, {
                          className: b.header,
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
              className: b.emptyContainer,
              children: [
                  (0, n.jsxs)('div', {
                      className: b.emptyInner,
                      children: [
                          (0, n.jsx)('img', {
                              src: S,
                              className: b.image,
                              alt: ''
                          }),
                          (0, n.jsx)(i.X6q, {
                              className: b.header,
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
                  (0, n.jsx)(O, {})
              ]
          });
}
function O() {
    let e = (0, h.Px)(g.p9.TIER_2),
        t = s.useCallback(
            () =>
                (0, i.ZDy)(async () => {
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
        className: b.upsellContainer,
        children: [
            (0, n.jsx)(l.SrA, {
                size: 'md',
                color: u.JX.PREMIUM_TIER_2
            }),
            (0, n.jsx)(a.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: b.upsellText,
                children: p
            }),
            (0, n.jsx)(d.Z, {
                className: b.upsellButton,
                size: o.Ph.TINY,
                shinyButtonClassName: b.upsellButton,
                subscriptionTier: g.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: f.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
