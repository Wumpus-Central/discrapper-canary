n.d(t, { p: () => f });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(481060),
    l = n(436774),
    u = n(197115),
    c = n(474936),
    d = n(318995);
function f(e) {
    let { showUpsell: t, text: n, textVariant: r, button: f, buttonAnalyticsObject: _, className: p, buttonStyles: h, onSubscribeModalClose: m, showShadow: g = !0, position: E = 'floating', buttonSize: v = 'md', useLockIcon: y = !1 } = e,
        I = (0, o.q_F)({
            transform: t ? 'translateY(0%)' : 'translateY(120%)',
            opacity: t ? 1 : 0,
            config: {
                tension: 120,
                friction: 14
            }
        });
    return (0, i.jsxs)(s.animated.div, {
        style: { ...I },
        className: a()(
            d.upsellContainer,
            {
                [d.upsellContainerShadow]: g,
                [d.upsellContainerFloating]: 'floating' === E,
                [d.upsellContainerInline]: 'inline' === E
            },
            p
        ),
        children: [
            y
                ? (0, i.jsx)(o.d$P, {
                      size: 'custom',
                      height: 20,
                      width: 20,
                      color: 'currentColor',
                      className: d.lockIcon
                  })
                : (0, i.jsx)(o.SrA, {
                      size: 'md',
                      color: l.JX.PREMIUM_TIER_2
                  }),
            (0, i.jsx)(o.Text, {
                variant: null != r ? r : 'text-sm/medium',
                color: 'header-primary',
                className: d.upsellText,
                children: n
            }),
            'string' == typeof f
                ? (0, i.jsx)(u.Z, {
                      size: v,
                      className: d.upsellButton,
                      shinyButtonClassName: null != h ? h : d.upsellButton,
                      subscriptionTier: c.Si.TIER_2,
                      buttonText: f,
                      premiumModalAnalyticsLocation: _,
                      tabIndex: t ? 0 : -1,
                      onSubscribeModalClose: m
                  })
                : f
        ]
    });
}
