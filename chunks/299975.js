n.d(t, {
    h: () => d,
});
var r = n(627968),
    l = n(397927),
    i = n(722523),
    a = n(490557),
    s = n(568065),
    o = n(333354),
    c = n(985018),
    u = n(413526);

function d(e, t) {
    if (null == t) return;
    let d = s.HO.has(t.skuId);
    (0, l.mMO)(async () => {
        let { default: s } = await n.e("957").then(n.bind(n, 523084));
        return (n) =>
            (0, r.jsx)(
                s,
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
                        title: c.intl.formatToPlainString(o.default.lFuOFF, {
                            perkName: t.title,
                        }),
                        description: c.intl.formatToPlainString(o.default.y3wHot, {
                            perkName: t.title,
                        }),
                        image: (0, r.jsx)(a.l, {
                            className: u.Sl,
                            powerup: t,
                        }),
                        button: d
                            ? (0, r.jsx)(i.GU, {
                                  className: u.x6,
                                  guildId: e,
                                  powerup: t,
                                  onClick: n.onClose,
                              })
                            : (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: u.x6,
                                  children: (0, r.jsx)(l.Button, {
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
