n.d(t, {
    M: () => p,
    t: () => f,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(4227),
    s = n(466459);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = "collectibles shop product details modal",
    f = (e) => {
        let {
            product: t,
            category: o,
            shouldCheckoutWithOrbs: c,
            analyticsSource: f,
            analyticsLocations: p,
            returnRef: _,
            tab: h,
            rentalDuration: m,
        } = e;
        if (t.isCategoryReward) {
            let { isPurchased: e } = (0, s.o)(a.A, t);
            if (!e) return;
        }
        (0, i.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("98763"), n.e("1784")]).then(n.bind(n, 929400));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        u(l({}, n), {
                            product: t,
                            category: o,
                            shouldCheckoutWithOrbs: c,
                            analyticsSource: f,
                            analyticsLocations: p,
                            returnRef: _,
                            tab: h,
                            rentalDuration: m,
                        }),
                    );
            },
            { modalKey: d },
        );
    },
    p = () => {
        (0, i.OoC)(d);
    };
