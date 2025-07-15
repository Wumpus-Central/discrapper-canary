(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(866442),
    d = n(481060),
    o = n(229190),
    c = n(510918),
    u = n(434404),
    h = n(254925),
    f = n(131085),
    m = n(195196),
    p = n(388032),
    x = n(602268);
let g = function (e) {
    let { className: t, guildId: n, badge: a, primaryColor: g, secondaryColor: b } = e,
        [y, j] = i.useState(!1),
        v = i.useRef(null),
        C = i.useMemo(() => h.go.every((e) => e.primary !== g || e.secondary !== b), [g, b]);
    function N(e) {
        let t = {};
        (void 0 !== e.primary && (t.badgeColorPrimary = e.primary), void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary), u.Z.updateGuildProfile(n, t));
    }
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(d.vwX, {
                className: x.sectionTitle,
                children: p.intl.string(m.default.zSbMdX)
            }),
            (0, r.jsxs)('div', {
                className: x.pickerGrid,
                children: [
                    h.go.map((e) =>
                        (0, r.jsx)(
                            d.P3F,
                            {
                                className: s()(x.pickerItem, { [x.pickerItemSelected]: e.primary === g && e.secondary === b }),
                                onClick: () => N(e),
                                children: (0, r.jsx)(c.v, {
                                    badge: a,
                                    width: 32,
                                    height: 32,
                                    primaryTintColor: e.primary,
                                    secondaryTintColor: e.secondary
                                })
                            },
                            ''.concat(e.primary).concat(e.secondary)
                        )
                    ),
                    (0, r.jsx)(o.Z, {
                        popoutTargetRef: v,
                        showSecondaryColor: f.ER[a] >= 2,
                        palette: {
                            primary: g,
                            secondary: b
                        },
                        onPrimaryColorChange: (e) => {
                            N({ primary: (0, l.Rf)(e) });
                        },
                        onSecondaryColorChange: (e) => {
                            N({ secondary: (0, l.Rf)(e) });
                        },
                        shouldShow: y,
                        onRequestClose: () => j(!1),
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                d.P3F,
                                ((t = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (n = n =
                                    {
                                        innerRef: v,
                                        onClick: () => {
                                            j((e) => !e);
                                        },
                                        className: s()(x.pickerItem, { [x.pickerItemSelected]: C }),
                                        children: (0, r.jsx)(d.ilE, {
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
