n.d(t, {
    A: () => d,
    e: () => m,
});
var r = n(627968);
n(64700);
var l = n(990078),
    i = n(397927),
    s = n(557722),
    a = n(31457),
    o = n(53516),
    c = n(985018),
    u = n(712104);

function d() {
    return (0, r.jsx)(a.ZK, {
        className: u.jm,
        icon: i.u6o,
        text: c.intl.string(c.t.woMjLV),
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, r.jsx)(l.m, {
            asContainer: !0,
            text: c.intl.string(c.t.mGlP30),
            children: (0, r.jsx)(i.Button, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: c.intl.string(c.t["13ofGu"]),
            }),
        }),
    });
}

function m(e) {
    let { isUserVerified: t } = e,
        l = t ? c.intl.string(c.t.WWzQta) : c.intl.string(c.t.woMjLV);
    return (0, r.jsx)(a.ZK, {
        className: u.jm,
        icon: i.u6o,
        text: l,
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, r.jsx)(i.Button, {
            variant: "primary",
            size: "sm",
            text: c.intl.string(c.t["13ofGu"]),
            onClick: () => {
                (0, i.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("84704"), n.e("45668")]).then(n.bind(n, 615715));
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
                                        reason: s.d.GUILD_PHONE_REQUIRED,
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
