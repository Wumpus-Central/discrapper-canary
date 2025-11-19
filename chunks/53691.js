n.d(t, { p: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(636606),
    s = n(481060),
    l = n(436774),
    c = n(597276),
    u = n(740594),
    d = n(767714),
    f = n(474936),
    _ = n(894928);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let {
            showUpsell: t,
            text: n,
            textVariant: i,
            button: p,
            buttonAnalyticsObject: m,
            className: g,
            buttonStyles: E,
            onSubscribeModalClose: b,
            showShadow: y = !0,
            position: O = "floating",
            buttonSize: v = "md",
            useLockIcon: I = !1,
        } = e,
        T = (0, c.Z)({ location: "PremiumFloatingPickerUpsell" }),
        S = (0, s.q_F)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 14,
            },
        }),
        A = I
            ? (0, r.jsx)(s.d$P, {
                  size: "custom",
                  height: 20,
                  width: 20,
                  color: "currentColor",
                  className: _.lockIcon,
              })
            : (0, r.jsx)(s.SrA, {
                  size: "md",
                  color: l.JX.PREMIUM_TIER_2,
              });
    return (0, r.jsxs)(o.animated.div, {
        style: h({}, S),
        className: a()(
            _.upsellContainer,
            {
                [_.upsellContainerShadow]: !T && y,
                [_.upsellContainerFloating]: "floating" === O,
                [_.upsellContainerInline]: "inline" === O,
            },
            g,
        ),
        children: [
            !T && A,
            (0, r.jsx)(s.Text, {
                variant: null != i ? i : "text-sm/medium",
                color: "header-primary",
                className: _.upsellText,
                children: n,
            }),
            "string" == typeof p
                ? T
                    ? (0, r.jsx)(u.Z, {
                          size: "sm",
                          subscriptionTier: f.Si.TIER_2,
                          buttonTextOverride: p,
                          premiumModalAnalyticsLocation: m,
                          tabIndex: t ? 0 : -1,
                          onSubscribeModalClose: b,
                      })
                    : (0, r.jsx)(d.Z, {
                          size: v,
                          className: _.upsellButton,
                          shinyButtonClassName: null != E ? E : _.upsellButton,
                          subscriptionTier: f.Si.TIER_2,
                          textOptions: { textOverride: p },
                          premiumModalAnalyticsLocation: m,
                          tabIndex: t ? 0 : -1,
                          onSubscribeModalClose: b,
                      })
                : p,
        ],
    });
}
