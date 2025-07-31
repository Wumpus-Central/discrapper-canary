n.d(t, { w: () => S });
var r = n(255367),
    s = n(73800),
    l = n(657707),
    a = n(793030),
    o = n(755721),
    i = n(481060),
    c = n(100527),
    u = n(436774),
    h = n(767714),
    d = n(74538),
    p = n(175006),
    f = n(981631),
    g = n(474936),
    m = n(388032),
    y = n(491350),
    x = n(492764),
    b = n(235810);
function S() {
    return (0, p.Z)()
        ? (0, r.jsx)('div', {
              className: y.emptyContainer,
              children: (0, r.jsxs)('div', {
                  className: y.emptyInner,
                  children: [
                      (0, r.jsx)('img', {
                          src: x,
                          className: y.image,
                          alt: ''
                      }),
                      (0, r.jsx)(i.X6q, {
                          className: y.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-default',
                          children: m.intl.string(m.t.erEf2t)
                      }),
                      (0, r.jsx)(a.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: m.intl.string(m.t.NaRCXV)
                      })
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: y.emptyContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: y.emptyInner,
                      children: [
                          (0, r.jsx)('img', {
                              src: b,
                              className: y.image,
                              alt: ''
                          }),
                          (0, r.jsx)(i.X6q, {
                              className: y.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-default',
                              children: m.intl.string(m.t.w4DRbW)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: m.intl.string(m.t.F6u3Ex)
                          })
                      ]
                  }),
                  (0, r.jsx)(v, {})
              ]
          });
}
function v() {
    let e = (0, d.Px)(g.p9.TIER_2),
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
                            })({ source: c.Z.FOR_LATER_POPOUT }, t)
                        );
                }),
            []
        ),
        p = m.intl.format(m.t.qXh3fn, {
            nitroTierName: e,
            onClick: t
        });
    return (0, r.jsxs)('div', {
        className: y.upsellContainer,
        children: [
            (0, r.jsx)(l.SrA, {
                size: 'md',
                color: u.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(a.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: y.upsellText,
                children: p
            }),
            (0, r.jsx)(h.Z, {
                className: y.upsellButton,
                size: o.Ph.TINY,
                shinyButtonClassName: y.upsellButton,
                subscriptionTier: g.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: f.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
