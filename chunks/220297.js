r.d(t, {
    b: () => o,
});
var n = r(627968),
    i = r(397927),
    l = r(954571),
    s = r(188275),
    a = r(652215);
let o = (e) => {
    let {
        sku: t,
        giftCode: o,
        channelContext: c,
        customGiftMessage: u,
        analyticsLocations: d,
        emojiName: p,
        soundId: f,
    } = e;
    (0, i.mMO)(
        async () => {
            let { default: e } = await r.e("94544").then(r.bind(r, 173971));
            return (r) => {
                var i, l;
                return (0, n.jsx)(
                    e,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, r)),
                    (l = l =
                        {
                            sku: t,
                            giftCode: o,
                            channelContext: c,
                            customGiftMessage: u,
                            analyticsLocations: d,
                            emojiName: p,
                            soundId: f,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i),
                );
            };
        },
        {
            modalKey: "social-layer-storefront-gift-code-claim-modal",
            onCloseCallback: () => {
                l.default.track(a.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                    type: s.Nu,
                    sku_id: t.id,
                    application_id: t.applicationId,
                    location_stack: null != d ? d : [],
                });
            },
        },
    );
};
