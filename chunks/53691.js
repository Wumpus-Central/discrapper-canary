n.d(t, { p: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(81239),
    s = n(481060),
    l = n(9551),
    c = n(740594),
    u = n(474936),
    d = n(879149);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: f,
            buttonAnalyticsObject: _,
            className: m,
            onSubscribeModalClose: g,
            position: E = "floating",
        } = e,
        b = l.V.useConfig({ location: "PremiumFloatingPickerUpsell" }).enabled,
        y = (0, s.q_F)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 14,
            },
        });
    return (0, r.jsx)(o.animated.div, {
        style: p({}, y),
        className: a()(
            d.upsellContainer,
            b && d.upsellRedesignEnabled,
            {
                [d.upsellContainerFloating]: "floating" === E,
                [d.upsellContainerInline]: "inline" === E,
            },
            m,
        ),
        children: (0, r.jsxs)(h, {
            children: [
                (0, r.jsx)(s.Text, {
                    variant: null != i ? i : "text-sm/medium",
                    color: "text-strong",
                    className: d.upsellText,
                    children: n,
                }),
                "string" == typeof f
                    ? (0, r.jsx)(c.Z, {
                          size: "sm",
                          subscriptionTier: u.Si.TIER_2,
                          buttonTextOverride: f,
                          premiumModalAnalyticsLocation: _,
                          tabIndex: t ? 0 : -1,
                          onSubscribeModalClose: g,
                      })
                    : f,
            ],
        }),
    });
}
function h(e) {
    let { children: t } = e;
    return l.V.useConfig({ location: "PremiumFloatingPickerUpsell" }).enabled
        ? (0, r.jsx)(s.$1m, {
              color: "nitro-pink",
              offsetBottom: -3,
              className: d.expressiveGradientBg,
              children: t,
          })
        : t;
}
