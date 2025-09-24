n.d(t, { Z: () => m });
var l = n(951288),
    a = n(481060),
    i = n(703656),
    r = n(981631),
    s = n(176505),
    o = n(401561),
    c = n(388032),
    u = n(477487),
    d = n(438957);
function m(e, t) {
    (0, a.ZDy)(async () => {
        let { default: m } = await n.e("13965").then(n.bind(n, 666083));
        return (n) =>
            (0, l.jsx)(
                m,
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
                        title: c.intl.string(o.default.hcBOZW),
                        description: c.intl.formatToPlainString(o.default.KCgZMj, { provider: "Portkey" }),
                        image: (0, l.jsx)("div", {
                            className: d.imageContainer,
                            children: (0, l.jsx)("img", {
                                className: d.image,
                                alt: "",
                                src: t.imageUrl,
                            }),
                        }),
                        button: (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: u.button,
                            children: (0, l.jsx)(a.zxk, {
                                variant: "primary",
                                text: c.intl.string(o.default.AS3n8v),
                                onClick: () => {
                                    (0, i.uL)(r.Z5c.CHANNEL(e, s.oC.PORTKEY)), n.onClose();
                                },
                            }),
                        }),
                    },
                    n,
                ),
            );
    });
}
