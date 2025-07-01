(t.d(n, { Z: () => g }), t(388685));
var r = t(255367),
    i = t(73800),
    a = t(120356),
    l = t.n(a),
    s = t(866442),
    d = t(481060),
    o = t(229190),
    c = t(510918),
    u = t(434404),
    m = t(254925),
    f = t(131085),
    h = t(195196),
    x = t(388032),
    p = t(602268);
let g = function (e) {
    let { className: n, guildId: t, badge: a, primaryColor: g, secondaryColor: b } = e,
        [y, j] = i.useState(!1),
        v = i.useRef(null),
        C = i.useMemo(() => m.go.every((e) => e.primary !== g || e.secondary !== b), [g, b]);
    function N(e) {
        let n = {};
        (void 0 !== e.primary && (n.badgeColorPrimary = e.primary), void 0 !== e.secondary && (n.badgeColorSecondary = e.secondary), u.Z.updateGuildProfile(t, n));
    }
    return (0, r.jsxs)('div', {
        className: n,
        children: [
            (0, r.jsx)(d.vwX, {
                className: p.sectionTitle,
                children: x.intl.string(h.default.zSbMdX)
            }),
            (0, r.jsxs)('div', {
                className: p.pickerGrid,
                children: [
                    m.go.map((e) =>
                        (0, r.jsx)(
                            d.P3F,
                            {
                                className: l()(p.pickerItem, { [p.pickerItemSelected]: e.primary === g && e.secondary === b }),
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
                            N({ primary: (0, s.Rf)(e) });
                        },
                        onSecondaryColorChange: (e) => {
                            N({ secondary: (0, s.Rf)(e) });
                        },
                        shouldShow: y,
                        onRequestClose: () => j(!1),
                        children: (e) => {
                            var n, t;
                            return (0, r.jsx)(
                                d.P3F,
                                ((n = (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            r = Object.keys(t);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (n) {
                                                var r;
                                                ((r = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[n] = r));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (t = t =
                                    {
                                        innerRef: v,
                                        onClick: () => {
                                            j((e) => !e);
                                        },
                                        className: l()(p.pickerItem, { [p.pickerItemSelected]: C }),
                                        children: (0, r.jsx)(d.ilE, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                                    : (function (e, n) {
                                          var t = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              t.push.apply(t, r);
                                          }
                                          return t;
                                      })(Object(t)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                                      }),
                                n)
                            );
                        }
                    })
                ]
            })
        ]
    });
};
