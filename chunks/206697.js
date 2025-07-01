n.d(t, { w: () => b });
var r = n(255367),
    s = n(73800),
    l = n(657707),
    a = n(793030),
    i = n(481060),
    o = n(100527),
    c = n(436774),
    u = n(767714),
    d = n(74538),
    h = n(175006),
    p = n(981631),
    f = n(474936),
    g = n(388032),
    m = n(491350),
    S = n(492764),
    y = n(235810);
function b() {
    return (0, h.Z)()
        ? (0, r.jsx)('div', {
              className: m.emptyContainer,
              children: (0, r.jsxs)('div', {
                  className: m.emptyInner,
                  children: [
                      (0, r.jsx)('img', {
                          src: S,
                          className: m.image,
                          alt: ''
                      }),
                      (0, r.jsx)(i.X6q, {
                          className: m.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-default',
                          children: g.intl.string(g.t.erEf2t)
                      }),
                      (0, r.jsx)(a.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: g.intl.string(g.t.NaRCXV)
                      })
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: m.emptyContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: m.emptyInner,
                      children: [
                          (0, r.jsx)('img', {
                              src: y,
                              className: m.image,
                              alt: ''
                          }),
                          (0, r.jsx)(i.X6q, {
                              className: m.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-default',
                              children: g.intl.string(g.t.w4DRbW)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: g.intl.string(g.t.F6u3Ex)
                          })
                      ]
                  }),
                  (0, r.jsx)(x, {})
              ]
          });
}
function x() {
    let e = (0, d.Px)(f.p9.TIER_2),
        t = s.useCallback(
            () =>
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('50740').then(n.bind(n, 639565));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({ source: o.Z.FOR_LATER_POPOUT }, t)
                        );
                }),
            []
        ),
        h = g.intl.format(g.t.qXh3fn, {
            nitroTierName: e,
            onClick: t
        });
    return (0, r.jsxs)('div', {
        className: m.upsellContainer,
        children: [
            (0, r.jsx)(l.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(a.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: m.upsellText,
                children: h
            }),
            (0, r.jsx)(u.Z, {
                className: m.upsellButton,
                size: i.PhG.TINY,
                shinyButtonClassName: m.upsellButton,
                subscriptionTier: f.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: p.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
