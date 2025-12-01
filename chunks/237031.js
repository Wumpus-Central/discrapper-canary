n.d(t, {
    T: () => p,
    v: () => _,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(1870),
    o = n(724994),
    s = n(215023);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = "collectibles shop product details modal",
    p = (e) => {
        let {
            product: t,
            category: l,
            shouldCheckoutWithOrbs: u,
            analyticsSource: p,
            analyticsLocations: _,
            returnRef: m,
            tab: h,
            rentalDuration: g,
        } = e;
        if (
            s.y8.some((e) => {
                let { rewardSkuId: n } = e;
                return n === t.skuId;
            })
        ) {
            let { isPurchased: e } = (0, o.U)(a.Z, t);
            if (!e) return;
        }
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("78825"), n.e("6377")]).then(n.bind(n, 702370));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        d(c({}, n), {
                            product: t,
                            category: l,
                            shouldCheckoutWithOrbs: u,
                            analyticsSource: p,
                            analyticsLocations: _,
                            returnRef: m,
                            tab: h,
                            rentalDuration: g,
                        }),
                    );
            },
            { modalKey: f },
        );
    },
    _ = () => {
        (0, i.Mr3)(f);
    };
