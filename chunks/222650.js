l.d(t, {
    A: () => u,
    e: () => f,
});
var n = l(627968);
l(64700);
var r = l(990078),
    s = l(397927),
    i = l(557722),
    a = l(31457),
    o = l(53516),
    c = l(985018),
    d = l(712104);

function u() {
    return (0, n.jsx)(a.ZK, {
        className: d.jm,
        icon: s.u6o,
        text: c.intl.string(c.t.woMjLV),
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, n.jsx)(r.m, {
            asContainer: !0,
            text: c.intl.string(c.t.mGlP30),
            children: (0, n.jsx)(s.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: c.intl.string(c.t["13ofGu"]),
            }),
        }),
    });
}

function f(e) {
    let { isUserVerified: t } = e,
        r = t ? c.intl.string(c.t.WWzQta) : c.intl.string(c.t.woMjLV);
    return (0, n.jsx)(a.ZK, {
        className: d.jm,
        icon: s.u6o,
        text: r,
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, n.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: c.intl.string(c.t["13ofGu"]),
            onClick: () => {
                (0, s.mMO)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(l.bind(l, 615715));
                        return (t) =>
                            (0, n.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var l = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(l);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                                }),
                                            )),
                                            n.forEach(function (t) {
                                                var n;
                                                (n = l[t]),
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
                                })(
                                    {
                                        reason: i.d.GUILD_PHONE_REQUIRED,
                                    },
                                    t,
                                ),
                            );
                    },
                    {
                        modalKey: o.V,
                    },
                );
            },
        }),
    });
}
