n.d(t, { Z: () => d });
var l = n(951288),
    i = n(481060),
    a = n(703656),
    r = n(981631),
    s = n(176505),
    o = n(401561),
    u = n(388032),
    c = n(438957);
function d(e, t) {
    (0, i.ZDy)(async () => {
        let { default: d } = await n.e("13965").then(n.bind(n, 666083));
        return (n) =>
            (0, l.jsx)(
                d,
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
                        title: u.intl.string(o.default.hcBOZW),
                        description: u.intl.formatToPlainString(o.default.KCgZMj, { provider: "Portkey" }),
                        image: (0, l.jsx)("div", {
                            className: c.imageContainer,
                            children: (0, l.jsx)("img", {
                                className: c.image,
                                alt: "",
                                src: t.imageUrl,
                            }),
                        }),
                        button: (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            children: (0, l.jsx)(i.zxk, {
                                variant: "primary",
                                text: u.intl.string(o.default.AS3n8v),
                                onClick: () => {
                                    (0, a.uL)(r.Z5c.CHANNEL(e, s.oC.PORTKEY)), n.onClose();
                                },
                            }),
                        }),
                    },
                    n,
                ),
            );
    });
}
