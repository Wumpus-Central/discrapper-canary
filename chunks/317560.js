n.d(t, {
    R: () => d,
    j: () => f,
});
var r = n(627968),
    i = n(397927),
    a = n(733391);

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

function s(e) {
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

function l(e, t) {
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

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = "social-layer-storefront-product-details-modal",
    d = (e) => {
        let {
            skuId: t,
            applicationId: o,
            guildId: l,
            isStorefront: d,
            analyticsLocations: f,
            analyticsContext: p,
            onClose: _,
        } = e;
        (0, a.iR)(l, t, "openSocialLayerStorefrontProductDetailsModal"),
            (0, i.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("40396"), n.e("67851")]).then(n.bind(n, 108105));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            c(s({}, n), {
                                skuId: t,
                                applicationId: o,
                                guildId: l,
                                isStorefront: d,
                                analyticsLocations: f,
                                analyticsContext: p,
                            }),
                        );
                },
                {
                    modalKey: u,
                    allowsNavigation: d,
                    onCloseCallback: () => {
                        null == _ || _();
                    },
                },
            );
    };

function f() {
    (0, i.kBI)(u) && (0, i.OoC)(u);
}
