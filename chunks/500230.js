(n.d(t, { Z: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(866442),
    o = n(481060),
    c = n(229190),
    d = n(510918),
    u = n(434404),
    m = n(131085),
    g = n(195196),
    p = n(388032),
    h = n(602268);
let f = function (e) {
    let { className: t, guildId: n, badge: l, primaryColor: f, secondaryColor: x } = e,
        [b, j] = i.useState(!1),
        v = i.useRef(null),
        _ = i.useMemo(() => m.Ek.every((e) => e.primary !== f || e.secondary !== x), [f, x]);
    function O(e) {
        let t = {};
        (void 0 !== e.primary && (t.badgeColorPrimary = e.primary), void 0 !== e.secondary && (t.badgeColorSecondary = e.secondary), u.Z.updateGuildProfile(n, t));
    }
    return (0, r.jsxs)('div', {
        className: t,
        children: [
            (0, r.jsx)(o.vwX, {
                className: h.sectionTitle,
                children: p.intl.string(g.default.zSbMdX)
            }),
            (0, r.jsxs)('div', {
                className: h.pickerGrid,
                children: [
                    m.Ek.map((e) =>
                        (0, r.jsx)(
                            o.P3F,
                            {
                                className: a()(h.pickerItem, { [h.pickerItemSelected]: e.primary === f && e.secondary === x }),
                                onClick: () => O(e),
                                children: (0, r.jsx)(d.v, {
                                    badge: l,
                                    width: 32,
                                    height: 32,
                                    primaryTintColor: e.primary,
                                    secondaryTintColor: e.secondary
                                })
                            },
                            ''.concat(e.primary).concat(e.secondary)
                        )
                    ),
                    (0, r.jsx)(c.Z, {
                        popoutTargetRef: v,
                        showSecondaryColor: m.ER[l] >= 2,
                        palette: {
                            primary: f,
                            secondary: x
                        },
                        onPrimaryColorChange: (e) => {
                            O({ primary: (0, s.Rf)(e) });
                        },
                        onSecondaryColorChange: (e) => {
                            O({ secondary: (0, s.Rf)(e) });
                        },
                        shouldShow: b,
                        onRequestClose: () => j(!1),
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                o.P3F,
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
                                        className: a()(h.pickerItem, { [h.pickerItemSelected]: _ }),
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
