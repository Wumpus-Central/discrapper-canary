n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    a = n(481060),
    o = n(460562),
    s = n(768581),
    c = n(682662),
    u = n(662146),
    d = n(619645);
function f(e) {
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
function h(e) {
    let [t, h] = i.useState(!1),
        p = (0, l.Ie)("guild-".concat(e.id));
    return (0, r.jsx)(c.H, {
        children: (0, r.jsx)(u.Z, {
            text: e.name,
            children: (0, r.jsx)(a.aRk, {
                className: d.circleIconButton,
                selected: t,
                lowerBadge: (0, r.jsx)(a.G2e, {
                    icon: (0, a.GSL)(o.Z),
                    disableColor: !0,
                    className: d.geoRestrictedBadge,
                }),
                children: (0, r.jsx)(
                    a.LYs,
                    f(
                        {
                            name: e.name,
                            onMouseEnter: () => {
                                h(!0);
                            },
                            onMouseLeave: () => {
                                h(!1);
                            },
                            onClick: () => {
                                (0, a.ZDy)(async () => {
                                    let { default: t } = await n.e("42358").then(n.bind(n, 210995));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            f(
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
                        p,
                    ),
                ),
            }),
        }),
    });
}
