n.d(t, {
    U: () => d,
    g: () => u,
});
var r = n(54381),
    i = n(481060);
function a(e, t, n) {
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
function o(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = "social-layer-storefront-product-details-modal",
    u = (e) => {
        let { skuId: t, applicationId: a, guildId: s, isStorefront: u, onClose: d } = e;
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e("84802").then(n.bind(n, 250317));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(o({}, n), {
                            skuId: t,
                            applicationId: a,
                            guildId: s,
                            isStorefront: u,
                        }),
                    );
            },
            {
                modalKey: c,
                onCloseCallback: () => {
                    null == d || d();
                },
            },
        );
    };
function d() {
    (0, i.nfh)(c) && (0, i.Mr3)(c);
}
