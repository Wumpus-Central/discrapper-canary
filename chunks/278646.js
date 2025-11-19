n.d(t, { h: () => d });
var r = n(54381),
    i = n(481060),
    l = n(262212),
    o = n(795338),
    a = n(535396),
    s = n(130231),
    c = n(388032),
    u = n(477487);
function d(e, t) {
    if (null == t) return;
    let d = a.uc.has(t.skuId);
    (0, i.ZDy)(async () => {
        let { default: a } = await n.e("13965").then(n.bind(n, 666083));
        return (n) =>
            (0, r.jsx)(
                a,
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
                        title: c.intl.formatToPlainString(s.default.lFuOFF, { perkName: t.title }),
                        description: c.intl.formatToPlainString(s.default.y3wHot, { perkName: t.title }),
                        image: (0, r.jsx)(o.m, {
                            className: u.image,
                            powerup: t,
                        }),
                        button: d
                            ? (0, r.jsx)(l.ms, {
                                  className: u.button,
                                  guildId: e,
                                  powerup: t,
                                  onClick: n.onClose,
                              })
                            : (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: u.button,
                                  children: (0, r.jsx)(i.Button, {
                                      variant: "primary",
                                      text: c.intl.string(c.t.cpT0Cq),
                                      onClick: n.onClose,
                                  }),
                              }),
                    },
                    n,
                ),
            );
    });
}
