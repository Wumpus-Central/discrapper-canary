n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(866442),
    o = n(481060),
    c = n(550271),
    A = n(688298),
    d = n(434404),
    u = n(254925),
    g = n(116175),
    f = n(502936),
    m = n(388032),
    p = n(935921);
let h = function (e) {
    let { className: t, guildId: n, badge: s, primaryColor: h, secondaryColor: C } = e,
        [b, v] = i.useState(!1),
        x = i.useMemo(() => u.go.every((e) => e.primary !== h || e.secondary !== C), [h, C]);
    function N(e) {
        let t = {};
        void 0 !== e.primary && (t.badgeColorPrimary = e.primary), void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary), d.Z.updateGuildProfile(n, t);
    }
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(o.vwX, {
                className: p.sectionTitle,
                children: m.NW.string(f.Z.zSbMdX)
            }),
            (0, r.jsxs)('div', {
                className: p.pickerGrid,
                children: [
                    u.go.map((e) =>
                        (0, r.jsx)(
                            o.P3F,
                            {
                                className: a()(p.pickerItem, { [p.pickerItemSelected]: e.primary === h && e.secondary === C }),
                                onClick: () => N(e),
                                children: (0, r.jsx)(c.A, {
                                    badge: u.QV['0'],
                                    width: 32,
                                    height: 32,
                                    primaryTintColor: e.primary,
                                    secondaryTintColor: e.secondary
                                })
                            },
                            ''.concat(e.primary).concat(e.secondary)
                        )
                    ),
                    (0, r.jsx)(A.Z, {
                        showSecondaryColor: g.ME[s] >= 2,
                        palette: {
                            primary: h,
                            secondary: C
                        },
                        onPrimaryColorChange: (e) => {
                            N({ primary: (0, l.Rf)(e) });
                        },
                        onSecondaryColorChange: (e) => {
                            N({ secondary: (0, l.Rf)(e) });
                        },
                        shouldShow: b,
                        onRequestClose: () => v(!1),
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
                                            v((e) => !e);
                                        },
                                        className: a()(p.pickerItem, { [p.pickerItemSelected]: x }),
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
