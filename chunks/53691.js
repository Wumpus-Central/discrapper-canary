r.d(n, {
    p: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(666912),
    l = r(481060),
    u = r(436774),
    c = r(197115),
    d = r(474936),
    f = r(998663);
function _(e) {
    let { showUpsell: n, text: r, textVariant: a, button: _, buttonAnalyticsObject: h, className: p, onSubscribeModalClose: m, showShadow: g = !0, position: E = 'floating' } = e,
        v = (0, l.useSpring)({
            transform: n ? 'translateY(0%)' : 'translateY(120%)',
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 14
            }
        });
    return (0, i.jsxs)(o.animated.div, {
        style: { ...v },
        className: s()(
            f.upsellContainer,
            {
                [f.upsellContainerShadow]: g,
                [f.upsellContainerFloating]: 'floating' === E,
                [f.upsellContainerInline]: 'inline' === E
            },
            p
        ),
        children: [
            (0, i.jsx)(l.NitroWheelIcon, {
                size: 'md',
                color: u.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(l.Text, {
                variant: null != a ? a : 'text-sm/medium',
                color: 'header-primary',
                className: f.upsellText,
                children: r
            }),
            'string' == typeof _
                ? (0, i.jsx)(c.Z, {
                      className: f.upsellButton,
                      shinyButtonClassName: f.upsellButton,
                      subscriptionTier: d.Si.TIER_2,
                      buttonText: _,
                      premiumModalAnalyticsLocation: h,
                      tabIndex: n ? 0 : -1,
                      onSubscribeModalClose: m
                  })
                : _
        ]
    });
}
