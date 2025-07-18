(t.d(r, { Z: () => g }), t(388685));
var n = t(255367),
    a = t(73800),
    i = t(120356),
    s = t.n(i),
    l = t(866442),
    o = t(481060),
    d = t(229190),
    c = t(510918),
    u = t(434404),
    f = t(254925),
    m = t(131085),
    p = t(195196),
    h = t(388032),
    x = t(602268);
let g = function (e) {
    let { className: r, guildId: t, badge: i, primaryColor: g, secondaryColor: y } = e,
        [j, v] = a.useState(!1),
        b = a.useRef(null),
        C = a.useMemo(() => f.go.every((e) => e.primary !== g || e.secondary !== y), [g, y]);
    function N(e) {
        let r = {};
        (void 0 !== e.primary && (r.badgeColorPrimary = e.primary), void 0 !== e.secondary && (r.badgeColorSecondary = e.secondary), u.Z.updateGuildProfile(t, r));
    }
    return (0, n.jsxs)('div', {
        className: r,
        children: [
            (0, n.jsx)(o.vwX, {
                className: x.sectionTitle,
                children: h.intl.string(p.default.zSbMdX)
            }),
            (0, n.jsxs)('div', {
                className: x.pickerGrid,
                children: [
                    f.go.map((e) =>
                        (0, n.jsx)(
                            o.P3F,
                            {
                                className: s()(x.pickerItem, { [x.pickerItemSelected]: e.primary === g && e.secondary === y }),
                                onClick: () => N(e),
                                children: (0, n.jsx)(c.v, {
                                    badge: i,
                                    width: 32,
                                    height: 32,
                                    primaryTintColor: e.primary,
                                    secondaryTintColor: e.secondary
                                })
                            },
                            ''.concat(e.primary).concat(e.secondary)
                        )
                    ),
                    (0, n.jsx)(d.Z, {
                        popoutTargetRef: b,
                        showSecondaryColor: m.ER[i] >= 2,
                        palette: {
                            primary: g,
                            secondary: y
                        },
                        onPrimaryColorChange: (e) => {
                            N({ primary: (0, l.Rf)(e) });
                        },
                        onSecondaryColorChange: (e) => {
                            N({ secondary: (0, l.Rf)(e) });
                        },
                        shouldShow: j,
                        onRequestClose: () => v(!1),
                        children: (e) => {
                            var r, t;
                            return (0, n.jsx)(
                                o.P3F,
                                ((r = (function (e) {
                                    for (var r = 1; r < arguments.length; r++) {
                                        var t = null != arguments[r] ? arguments[r] : {},
                                            n = Object.keys(t);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (n = n.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                })
                                            )),
                                            n.forEach(function (r) {
                                                var n;
                                                ((n = t[r]),
                                                    r in e
                                                        ? Object.defineProperty(e, r, {
                                                              value: n,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[r] = n));
                                            }));
                                    }
                                    return e;
                                })({}, e)),
                                (t = t =
                                    {
                                        innerRef: b,
                                        onClick: () => {
                                            v((e) => !e);
                                        },
                                        className: s()(x.pickerItem, { [x.pickerItemSelected]: C }),
                                        children: (0, n.jsx)(o.ilE, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                                    : (function (e, r) {
                                          var t = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var n = Object.getOwnPropertySymbols(e);
                                              t.push.apply(t, n);
                                          }
                                          return t;
                                      })(Object(t)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                                      }),
                                r)
                            );
                        }
                    })
                ]
            })
        ]
    });
};
