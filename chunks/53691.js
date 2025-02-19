n.d(t, { p: () => _ });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(642128),
    s = n(481060),
    l = n(436774),
    c = n(197115),
    u = n(474936),
    d = n(292204);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let { showUpsell: t, text: n, textVariant: i, button: f, buttonAnalyticsObject: _, className: h, buttonStyles: m, onSubscribeModalClose: g, showShadow: E = !0, position: v = 'floating', buttonSize: b = 'md', useLockIcon: y = !1 } = e,
        O = (0, s.q_F)({
            transform: t ? 'translateY(0%)' : 'translateY(120%)',
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 14
            }
        });
    return (0, r.jsxs)(a.animated.div, {
        style: p({}, O),
        className: o()(
            d.upsellContainer,
            {
                [d.upsellContainerShadow]: E,
                [d.upsellContainerFloating]: 'floating' === v,
                [d.upsellContainerInline]: 'inline' === v
            },
            h
        ),
        children: [
            y
                ? (0, r.jsx)(s.d$P, {
                      size: 'custom',
                      height: 20,
                      width: 20,
                      color: 'currentColor',
                      className: d.lockIcon
                  })
                : (0, r.jsx)(s.SrA, {
                      size: 'md',
                      color: l.JX.PREMIUM_TIER_2
                  }),
            (0, r.jsx)(s.Text, {
                variant: null != i ? i : 'text-sm/medium',
                color: 'header-primary',
                className: d.upsellText,
                children: n
            }),
            'string' == typeof f
                ? (0, r.jsx)(c.Z, {
                      size: b,
                      className: d.upsellButton,
                      shinyButtonClassName: null != m ? m : d.upsellButton,
                      subscriptionTier: u.Si.TIER_2,
                      buttonText: f,
                      premiumModalAnalyticsLocation: _,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: g
                  })
                : f
        ]
    });
}
