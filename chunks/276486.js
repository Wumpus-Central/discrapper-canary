n.d(t, {
    l: () => d,
    v: () => m,
});
var r = n(54381);
n(473749);
var l = n(28664),
    i = n(481060),
    s = n(144114),
    a = n(489813),
    o = n(815660),
    c = n(388032),
    u = n(162359);
function d() {
    return (0, r.jsx)(a.PU, {
        className: u.editableRequirementContainer,
        icon: i.AtH,
        text: c.intl.string(c.t.woMjLV),
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, r.jsx)(l.u, {
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
    return (0, r.jsx)(a.PU, {
        className: u.editableRequirementContainer,
        icon: i.AtH,
        text: l,
        footnote: c.intl.string(c.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, r.jsx)(i.Button, {
            variant: "primary",
            size: "sm",
            text: c.intl.string(c.t["13ofGu"]),
            onClick: () => {
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
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
                                })({ reason: s.L.GUILD_PHONE_REQUIRED }, t),
                            );
                    },
                    { modalKey: o.M },
                );
            },
        }),
    });
}
