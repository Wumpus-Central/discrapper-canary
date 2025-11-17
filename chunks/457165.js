n.d(t, { i: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(981631);
function l() {
    (0, i.ZDy)(async () => {
        let { default: e } = await n.e("10165").then(n.bind(n, 166335));
        return (t) =>
            (0, r.jsx)(
                e,
                (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        analyticsSource: o.Sbl.VOICE_FILTERS,
                        analyticsLocation: {
                            section: o.jXE.VOICE_FILTERS_UPSELL_MODAL,
                            object: o.qAy.BUTTON_CTA,
                        },
                    },
                    t,
                ),
            );
    });
}
