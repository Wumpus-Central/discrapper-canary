n.d(t, {
    n: () => a,
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(652215);

function a() {
    (0, r.mMO)(async () => {
        let { default: e } = await n.e("90617").then(n.bind(n, 663072));
        return (t) =>
            (0, l.jsx)(
                e,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })(
                    {
                        analyticsSource: i.ThZ.VOICE_FILTERS,
                        analyticsLocation: {
                            section: i.JJy.VOICE_FILTERS_UPSELL_MODAL,
                            object: i.ZSU.BUTTON_CTA,
                        },
                    },
                    t,
                ),
            );
    });
}
