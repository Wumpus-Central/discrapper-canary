n.d(t, { Z: () => p }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(91192),
    o = n(481060),
    s = n(460562),
    a = n(768581),
    c = n(682662),
    u = n(662146),
    d = n(138439);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e) {
    let [t, p] = i.useState(!1),
        f = (0, l.Ie)('guild-'.concat(e.id));
    return (0, r.jsx)(c.H, {
        children: (0, r.jsx)(u.Z, {
            text: e.name,
            children: (0, r.jsx)(o.aRk, {
                className: d.circleIconButton,
                selected: t,
                lowerBadge: (0, r.jsx)(o.G2e, {
                    icon: (0, o.GSL)(s.Z),
                    disableColor: !0,
                    className: d.geoRestrictedBadge
                }),
                children: (0, r.jsx)(
                    o.LYs,
                    h(
                        {
                            name: e.name,
                            onMouseEnter: () => {
                                p(!0);
                            },
                            onMouseLeave: () => {
                                p(!1);
                            },
                            onClick: () => {
                                (0, o.ZDy)(async () => {
                                    let { default: t } = await n.e('42358').then(n.bind(n, 210995));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            h(
                                                {
                                                    name: e.name,
                                                    guildId: e.id
                                                },
                                                n
                                            )
                                        );
                                });
                            },
                            icon:
                                null != e.icon
                                    ? a.ZP.getGuildIconURL({
                                          id: e.id,
                                          icon: e.icon,
                                          canAnimate: !1,
                                          size: 42
                                      })
                                    : null
                        },
                        f
                    )
                )
            })
        })
    });
}
