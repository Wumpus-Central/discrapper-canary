n.d(t, {
    R: () => u,
    j: () => d,
});
var r = n(627968),
    i = n(397927);

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
        let {
            skuId: t,
            applicationId: a,
            guildId: s,
            isStorefront: u,
            analyticsLocations: d,
            analyticsContext: f,
            onClose: p,
        } = e;
        (0, i.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("40396"), n.e("67851")]).then(n.bind(n, 108105));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(o({}, n), {
                            skuId: t,
                            applicationId: a,
                            guildId: s,
                            isStorefront: u,
                            analyticsLocations: d,
                            analyticsContext: f,
                        }),
                    );
            },
            {
                modalKey: c,
                allowsNavigation: u,
                onCloseCallback: () => {
                    null == p || p();
                },
            },
        );
    };

function d() {
    (0, i.kBI)(c) && (0, i.OoC)(c);
}
