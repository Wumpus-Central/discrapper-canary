n.d(t, { w: () => x });
var r = n(200651),
    i = n(192379),
    a = n(657707),
    l = n(793030),
    o = n(481060),
    s = n(100527),
    c = n(436774),
    u = n(197115),
    d = n(74538),
    p = n(175006),
    m = n(981631),
    f = n(474936),
    h = n(388032),
    g = n(491350),
    _ = n(492764),
    b = n(235810);
function x() {
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
                      (0, r.jsx)(o.X6q, {
                          className: g.header,
                          variant: 'heading-xl/semibold',
                          color: 'text-normal',
                          children: h.NW.string(h.t.erEf2t)
                      }),
                      (0, r.jsx)(l.xv, {
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
                          (0, r.jsx)(o.X6q, {
                              className: g.header,
                              variant: 'heading-xl/semibold',
                              color: 'text-normal',
                              children: h.NW.string(h.t.w4DRbW)
                          }),
                          (0, r.jsx)(l.xv, {
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
    let e = (0, d.Px)(f.p9.TIER_2),
        t = i.useCallback(
            () =>
                (0, o.ZDy)(async () => {
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
            (0, r.jsx)(l.xv, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: g.upsellText,
                children: p
            }),
            (0, r.jsx)(u.Z, {
                className: g.upsellButton,
                size: o.PhG.TINY,
                shinyButtonClassName: g.upsellButton,
                subscriptionTier: f.Si.TIER_2,
                premiumModalAnalyticsLocation: { section: m.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
