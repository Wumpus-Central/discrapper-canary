t.d(n, { Z: () => m });
var a = t(951288),
    i = t(481060),
    r = t(703656),
    l = t(981631),
    s = t(176505),
    o = t(401561),
    c = t(388032),
    d = t(477487),
    u = t(438957);
function m(e, n) {
    (0, i.ZDy)(async () => {
        let { default: m } = await t.e("13965").then(t.bind(t, 666083));
        return (t) =>
            (0, a.jsx)(
                m,
                (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            a = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            a.forEach(function (n) {
                                var a;
                                (a = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = a);
                            });
                    }
                    return e;
                })(
                    {
                        title: c.intl.string(o.default.hcBOZW),
                        description: c.intl.formatToPlainString(o.default.KCgZMj, { provider: "Portkey" }),
                        image: (0, a.jsx)("div", {
                            className: u.imageContainer,
                            children: (0, a.jsx)("img", {
                                className: u.image,
                                alt: "",
                                src: n.imageUrl,
                            }),
                        }),
                        button: (0, a.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: d.button,
                            children: (0, a.jsx)(i.zxk, {
                                variant: "primary",
                                text: c.intl.string(o.default.AS3n8v),
                                onClick: () => {
                                    (0, r.uL)(l.Z5c.CHANNEL(e, s.oC.PORTKEY)), t.onClose();
                                },
                            }),
                        }),
                    },
                    t,
                ),
            );
    });
}
