n.d(t, {
    P: () => s,
    b: () => l,
});
var r = n(951288),
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
    let { isGift: a, giftRecipient: s, giftingOrigin: l } = t;
    (0, i.ZDy)(
        async () => {
            let { default: t } = await n.e("45227").then(n.bind(n, 556266));
            return (n) =>
                (0, r.jsx)(
                    t,
                    o(
                        {
                            skuId: e.id,
                            applicationId: e.applicationId,
                            analyticsLocations: [],
                            isGift: a,
                            giftRecipient: s,
                            giftingOrigin: l,
                        },
                        n,
                    ),
                );
        },
        { modalKey: "slayers-payment-modal" },
    );
}
function l() {
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e("92275"), n.e("21854")]).then(n.bind(n, 211912));
            return (t) => (0, r.jsx)(e, o({}, t));
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
