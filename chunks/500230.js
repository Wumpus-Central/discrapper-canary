r.d(n, { Z: () => y }), r(388685);
var t = r(255367),
    a = r(73800),
    i = r(120356),
    s = r.n(i),
    l = r(866442),
    o = r(481060),
    d = r(229190),
    c = r(510918),
    m = r(434404),
    f = r(254925),
    u = r(131085),
    h = r(817239),
    p = r(388032),
    x = r(602268);
let y = function (e) {
    let { className: n, guildId: r, badge: i, primaryColor: y, secondaryColor: b } = e,
        [g, j] = a.useState(!1),
        C = a.useRef(null),
        v = a.useMemo(() => f.go.every((e) => e.primary !== y || e.secondary !== b), [y, b]);
    function N(e) {
        let n = {};
        void 0 !== e.primary && (n.badgeColorPrimary = e.primary), void 0 !== e.secondary && (n.badgeColorSecondary = e.secondary), m.Z.updateGuildProfile(r, n);
    }
    return (0, t.jsxs)('div', {
        className: n,
        children: [
            (0, t.jsx)(o.vwX, {
                className: x.sectionTitle,
                children: p.intl.string(h.default.zSbMdX)
            }),
            (0, t.jsxs)('div', {
                className: x.pickerGrid,
                children: [
                    f.go.map((e) =>
                        (0, t.jsx)(
                            o.P3F,
                            {
                                className: s()(x.pickerItem, { [x.pickerItemSelected]: e.primary === y && e.secondary === b }),
                                onClick: () => N(e),
                                children: (0, t.jsx)(c.v, {
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
                    (0, t.jsx)(d.Z, {
                        popoutTargetRef: C,
                        showSecondaryColor: u.ER[i] >= 2,
                        palette: {
                            primary: y,
                            secondary: b
                        },
                        onPrimaryColorChange: (e) => {
                            N({ primary: (0, l.Rf)(e) });
                        },
                        onSecondaryColorChange: (e) => {
                            N({ secondary: (0, l.Rf)(e) });
                        },
                        shouldShow: g,
                        onRequestClose: () => j(!1),
                        children: (e) => {
                            var n, r;
                            return (0, t.jsx)(
                                o.P3F,
                                ((n = (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var r = null != arguments[n] ? arguments[n] : {},
                                            t = Object.keys(r);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (t = t.concat(
                                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                })
                                            )),
                                            t.forEach(function (n) {
                                                var t;
                                                (t = r[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: t,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[n] = t);
                                            });
                                    }
                                    return e;
                                })({}, e)),
                                (r = r =
                                    {
                                        innerRef: C,
                                        onClick: () => {
                                            j((e) => !e);
                                        },
                                        className: s()(x.pickerItem, { [x.pickerItemSelected]: v }),
                                        children: (0, t.jsx)(o.ilE, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                    : (function (e, n) {
                                          var r = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var t = Object.getOwnPropertySymbols(e);
                                              r.push.apply(r, t);
                                          }
                                          return r;
                                      })(Object(r)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
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
