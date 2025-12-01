n.d(t, { I: () => p });
var r = n(54381),
    i = n(481060),
    a = n(626135),
    o = n(582113),
    s = n(981631);
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
let f = "social-layer-storefront-item-claimed-successfully-modal",
    p = (e) => {
        let { sku: t, application: l, analyticsLocations: u } = e;
        (0, i.ZDy)(
            async () => {
                let { SocialLayerStorefrontItemClaimedSuccessfullyModal: e } = await n
                    .e("21021")
                    .then(n.bind(n, 519193));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        d(c({}, n), {
                            sku: t,
                            application: l,
                            analyticsLocations: u,
                        }),
                    );
            },
            {
                modalKey: f,
                onCloseCallback: () => {
                    a.default.track(s.rMx.SLAYER_STOREFRONT_MODAL_CLOSED, {
                        type: o.ng,
                        sku_id: t.id,
                        application_id: l.id,
                        location_stack: null != u ? u : [],
                    });
                },
            },
        );
    };
