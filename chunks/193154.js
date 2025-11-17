n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    o = n(481060),
    a = n(460562),
    s = n(768581),
    c = n(682662),
    u = n(662146),
    d = n(961699);
function p(e) {
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
}
function f(e) {
    let [t, f] = i.useState(!1),
        h = (0, l.Ie)("guild-".concat(e.id));
    return (0, r.jsx)(c.H, {
        children: (0, r.jsx)(u.Z, {
            text: e.name,
            children: (0, r.jsx)(o.aRk, {
                className: d.circleIconButton,
                selected: t,
                lowerBadge: (0, r.jsx)(o.G2e, {
                    icon: (0, o.GSL)(a.Z),
                    disableColor: !0,
                    className: d.geoRestrictedBadge,
                }),
                children: (0, r.jsx)(
                    o.LYs,
                    p(
                        {
                            name: e.name,
                            onMouseEnter: () => {
                                f(!0);
                            },
                            onMouseLeave: () => {
                                f(!1);
                            },
                            onClick: () => {
                                (0, o.ZDy)(async () => {
                                    let { default: t } = await n.e("42358").then(n.bind(n, 210995));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            p(
                                                {
                                                    name: e.name,
                                                    guildId: e.id,
                                                },
                                                n,
                                            ),
                                        );
                                });
                            },
                            icon:
                                null != e.icon
                                    ? s.ZP.getGuildIconURL({
                                          id: e.id,
                                          icon: e.icon,
                                          canAnimate: !1,
                                          size: 42,
                                      })
                                    : null,
                        },
                        h,
                    ),
                ),
            }),
        }),
    });
}
