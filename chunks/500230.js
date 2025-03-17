n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(866442),
    o = n(481060),
    c = n(550271),
    d = n(688298),
    u = n(434404),
    m = n(254925),
    g = n(116175),
    p = n(502936),
    h = n(388032),
    f = n(935921);
let b = function (e) {
    var t, n;
    let { className: s, guildId: b, guildProfile: x } = e,
        [j, N] = i.useState(!1),
        v = null !== (t = x.badgeColorPrimary) && void 0 !== t ? t : m.go['0'].primary,
        _ = null !== (n = x.badgeColorSecondary) && void 0 !== n ? n : m.go['0'].secondary,
        y = i.useMemo(() => m.go.every((e) => e.primary !== v || e.secondary !== _), [v, _]);
    function O(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary), void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary), u.Z.updateGuildProfile(b, t);
    }
    return (0, r.jsxs)('div', {
        className: s,
        children: [
            (0, r.jsx)(o.vwX, {
                className: f.sectionTitle,
                children: h.NW.string(p.Z.zSbMdX)
            }),
            (0, r.jsxs)('div', {
                className: f.pickerGrid,
                children: [
                    m.go.map((e) =>
                        (0, r.jsx)(
                            o.P3F,
                            {
                                className: a()(f.pickerItem, { [f.pickerItemSelected]: e.primary === v && e.secondary === _ }),
                                onClick: () => O(e),
                                children: (0, r.jsx)(c.A, {
                                    badge: m.QV['0'],
                                    width: 32,
                                    height: 32,
                                    primaryTintColor: e.primary,
                                    secondaryTintColor: e.secondary
                                })
                            },
                            ''.concat(e.primary).concat(e.secondary)
                        )
                    ),
                    (0, r.jsx)(d.Z, {
                        showSecondaryColor: null !== x.badge && g.ME[x.badge] >= 2,
                        palette: {
                            primary: v,
                            secondary: _
                        },
                        onPrimaryColorChange: (e) => {
                            O({ primary: (0, l.Rf)(e) });
                        },
                        onSecondaryColorChange: (e) => {
                            O({ secondary: (0, l.Rf)(e) });
                        },
                        shouldShow: j,
                        onRequestClose: () => N(!1),
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                o.P3F,
                                ((t = (function (e) {
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
                                })({}, e)),
                                (n = n =
                                    {
                                        onClick: () => {
                                            N((e) => !e);
                                        },
                                        className: a()(f.pickerItem, { [f.pickerItemSelected]: y }),
                                        children: (0, r.jsx)(o.ilE, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      }),
                                t)
                            );
                        }
                    })
                ]
            })
        ]
    });
};
