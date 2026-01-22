n.d(t, { d: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(432022),
    o = n(397927),
    l = n(766708),
    c = n(857586),
    u = n(788868),
    d = n(732591);
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
        b = l.r.useConfig({ location: "PremiumFloatingPickerUpsell" }).enabled,
        y = (0, o.zhh)({
            transform: t ? "translateY(0%)" : "translateY(120%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 14,
            },
        });
    return (0, r.jsx)(s.animated.div, {
        style: p({}, y),
        className: a()(
            d.Zj,
            b && d.g9,
            {
                [d.tO]: "floating" === E,
                [d.Kx]: "inline" === E,
            },
            m,
        ),
        children: (0, r.jsxs)(h, {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: null != i ? i : "text-sm/medium",
                    color: "text-strong",
                    className: d.tD,
                    children: n,
                }),
                "string" == typeof f
                    ? (0, r.jsx)(c.A, {
                          size: "sm",
                          subscriptionTier: u.pe.TIER_2,
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
    return l.r.useConfig({ location: "PremiumFloatingPickerUpsell" }).enabled
        ? (0, r.jsx)(o.hLv, {
              color: "nitro-pink",
              offsetBottom: -3,
              className: d.mk,
              children: t,
          })
        : t;
}
