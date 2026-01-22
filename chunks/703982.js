n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(432022),
    o = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(927578),
    d = n(473702),
    f = n(985018),
    p = n(677300),
    _ = n(67423);
function h(e, t, n) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: h, discountedPrice: g } = e,
        { analyticsLocations: b } = (0, c.Ay)(l.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        y = (0, o.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12,
            },
        }),
        O = () => {
            (0, o.mMO)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                    .e("72820")
                    .then(n.bind(n, 281439));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        E(m({}, t), {
                            premiumSubscription: i,
                            analyticsLocations: b,
                            initialStep: d.g.CONFIRM_DISCOUNT,
                        }),
                    );
            });
        };
    return (0, r.jsx)(s.animated.div, {
        className: a()(p.iE, { [p.q4]: !t }),
        style: y,
        children: (0, r.jsxs)("div", {
            className: p.iJ,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    src: _,
                    className: p.oU,
                }),
                (0, r.jsxs)("div", {
                    className: p.iQ,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: f.intl.format(f.t["3yZP0G"], { percent: h.discount.amount }),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: f.intl.format(f.t["3Q4wCy"], {
                                numMonths: h.discount.user_usage_limit,
                                discountedPrice: g,
                                billingPeriod: (0, u.Ke)(h.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(o.Button, {
                    variant: "expressive",
                    icon: o.tvc,
                    size: "md",
                    text: f.intl.string(f.t.zrCzVB),
                    onClick: () => O(),
                }),
            ],
        }),
    });
};
