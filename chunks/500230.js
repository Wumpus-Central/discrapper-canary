(t.d(r, { Z: () => x }), t(388685));
var n = t(255367),
    i = t(73800),
    a = t(120356),
    s = t.n(a),
    l = t(866442),
    o = t(481060),
    c = t(229190),
    d = t(510918),
    u = t(434404),
    m = t(254925),
    p = t(131085),
    h = t(195196),
    f = t(388032),
    g = t(602268);
let x = function (e) {
    let { className: r, guildId: t, badge: a, primaryColor: x, secondaryColor: y } = e,
        [j, v] = i.useState(!1),
        C = i.useRef(null),
        b = i.useMemo(() => m.go.every((e) => e.primary !== x || e.secondary !== y), [x, y]);
    function N(e) {
        let r = {};
        (void 0 !== e.primary && (r.badgeColorPrimary = e.primary), void 0 !== e.secondary && (r.badgeColorSecondary = e.secondary), u.Z.updateGuildProfile(t, r));
    }
    return (0, n.jsxs)('div', {
        className: r,
        children: [
            (0, n.jsx)(o.vwX, {
                className: g.sectionTitle,
                children: f.intl.string(h.default.zSbMdX)
            }),
            (0, n.jsxs)('div', {
                className: g.pickerGrid,
                children: [
                    m.go.map((e) =>
                        (0, n.jsx)(
                            o.P3F,
                            {
                                className: s()(g.pickerItem, { [g.pickerItemSelected]: e.primary === x && e.secondary === y }),
                                onClick: () => N(e),
                                children: (0, n.jsx)(d.v, {
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
                    (0, n.jsx)(c.Z, {
                        popoutTargetRef: C,
                        showSecondaryColor: p.ER[a] >= 2,
                        palette: {
                            primary: x,
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
                                        innerRef: C,
                                        onClick: () => {
                                            v((e) => !e);
                                        },
                                        className: s()(g.pickerItem, { [g.pickerItemSelected]: b }),
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
