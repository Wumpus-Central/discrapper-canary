n.d(t, { w: () => v });
var r = n(200651),
    i = n(192379),
    a = n(657707),
    o = n(793030),
    l = n(481060),
    s = n(100527),
    c = n(436774),
    d = n(197115),
    u = n(74538),
    p = n(175006),
    m = n(981631),
    f = n(474936),
    h = n(388032),
    g = n(407731),
    _ = n(492764),
    b = n(235810);
function v() {
    return (0, p.Z)()
        ? (0, r.jsx)('div', {
              className: g.emptyContainer,
              children: (0, r.jsxs)('div', {
                  className: g.emptyInner,
                  children: [
                      (0, r.jsx)('img', {
                          src: _,
                          className: g.image,
                          alt: ''
                      }),
                      (0, r.jsx)(l.X6q, {
                          className: g.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-normal',
                          children: h.NW.string(h.t.erEf2t)
                      }),
                      (0, r.jsx)(o.xv, {
                          variant: 'text-md/medium',
                          color: 'text-muted',
                          children: h.NW.string(h.t.NaRCXV)
                      })
                  ]
              })
          })
        : (0, r.jsxs)('div', {
              className: g.emptyContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: g.emptyInner,
                      children: [
                          (0, r.jsx)('img', {
                              src: b,
                              className: g.image,
                              alt: ''
                          }),
                          (0, r.jsx)(l.X6q, {
                              className: g.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-normal',
                              children: h.NW.string(h.t.w4DRbW)
                          }),
                          (0, r.jsx)(o.xv, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: h.NW.string(h.t.F6u3Ex)
                          })
                      ]
                  }),
                  (0, r.jsx)(y, {})
              ]
          });
}
function y() {
    let e = (0, u.Px)(f.p9.TIER_2),
        t = i.useCallback(
            () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('34906').then(n.bind(n, 639565));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({ source: s.Z.FOR_LATER_POPOUT }, t)
                        );
                }),
            []
        ),
        p = h.NW.format(h.t.qXh3fn, {
            nitroTierName: e,
            onClick: t
        });
    return (0, r.jsxs)('div', {
        className: g.upsellContainer,
        children: [
            (0, r.jsx)(a.SrA, {
                size: 'md',
                color: c.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(o.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: g.upsellText,
                children: p
            }),
            (0, r.jsx)(d.Z, {
                className: g.upsellButton,
                size: l.PhG.TINY,
                shinyButtonClassName: g.upsellButton,
                subscriptionTier: f.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: m.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
