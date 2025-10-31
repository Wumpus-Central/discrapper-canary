n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(13941),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(74538),
    d = n(45474),
    f = n(388032),
    _ = n(660770),
    p = n(947866);
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
        { analyticsLocations: b } = (0, c.ZP)(l.Z.CHURN_DISCOUNT_PERSISTENT_CTA),
        y = (0, s.q_F)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: {
                tension: 120,
                friction: 12,
            },
        }),
        O = () => {
            (0, s.ZDy)(async () => {
                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n.e("26526").then(n.bind(n, 48813));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        E(m({}, t), {
                            premiumSubscription: i,
                            analyticsLocations: b,
                            initialStep: d.R.CONFIRM_DISCOUNT,
                        }),
                    );
            });
        };
    return (0, r.jsx)(o.animated.div, {
        className: a()(_.wrapper, { [_.invisible]: !t }),
        style: y,
        children: (0, r.jsxs)("div", {
            className: _.innerWrapper,
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    src: p,
                    className: _.nitroIcon,
                }),
                (0, r.jsxs)("div", {
                    className: _.descriptionContainer,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-primary",
                            children: f.intl.format(f.t["3yZP0G"], { percent: h.discount.amount }),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: f.intl.format(f.t["3Q4wCy"], {
                                numMonths: h.discount.user_usage_limit,
                                discountedPrice: g,
                                billingPeriod: (0, u.JP)(h.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(s.Button, {
                    variant: "expressive",
                    icon: s.SrA,
                    size: "md",
                    text: f.intl.string(f.t.zrCzVB),
                    onClick: () => O(),
                }),
            ],
        }),
    });
};
