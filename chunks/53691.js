n.d(t, { p: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(467721),
    s = n(481060),
    l = n(436774),
    c = n(597276),
    u = n(740594),
    d = n(767714),
    f = n(474936),
    p = n(414239);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: _,
            buttonAnalyticsObject: h,
            className: g,
            buttonStyles: E,
            onSubscribeModalClose: b,
            showShadow: y = !0,
            position: O = "floating",
            buttonSize: v = "md",
            useLockIcon: S = !1,
        } = e,
        I = (0, c.Z)({ location: "PremiumFloatingPickerUpsell" }),
        T = (0, s.q_F)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 14,
            },
        }),
        C = S
            ? (0, r.jsx)(s.d$P, {
                  size: "custom",
                  height: 20,
                  width: 20,
                  color: "currentColor",
                  className: p.lockIcon,
              })
            : (0, r.jsx)(s.SrA, {
                  size: "md",
                  color: l.JX.PREMIUM_TIER_2,
              });
    return (0, r.jsxs)(o.animated.div, {
        style: m({}, T),
        className: a()(
            p.upsellContainer,
            {
                [p.upsellContainerShadow]: !I && y,
                [p.upsellContainerFloating]: "floating" === O,
                [p.upsellContainerInline]: "inline" === O,
            },
            g,
        ),
        children: [
            !I && C,
            (0, r.jsx)(s.Text, {
                variant: null != i ? i : "text-sm/medium",
                color: "header-primary",
                className: p.upsellText,
                children: n,
            }),
            "string" == typeof _
                ? I
                    ? (0, r.jsx)(u.Z, {
                          size: "sm",
                          subscriptionTier: f.Si.TIER_2,
                          buttonTextOverride: _,
                          premiumModalAnalyticsLocation: h,
                          tabIndex: t ? 0 : -1,
                          onSubscribeModalClose: b,
                      })
                    : (0, r.jsx)(d.Z, {
                          size: v,
                          className: p.upsellButton,
                          shinyButtonClassName: null != E ? E : p.upsellButton,
                          subscriptionTier: f.Si.TIER_2,
                          textOptions: { textOverride: _ },
                          premiumModalAnalyticsLocation: h,
                          tabIndex: t ? 0 : -1,
                          onSubscribeModalClose: b,
                      })
                : _,
        ],
    });
}
