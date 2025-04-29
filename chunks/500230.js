v.d(g, { Z: () => M }), v(388685);
var B = v(255367),
    t = v(73800),
    e = v(120356),
    f = v.n(e),
    r = v(866442),
    C = v(481060),
    h = v(229190),
    n = v(510918),
    w = v(434404),
    Q = v(254925),
    D = v(131085),
    o = v(817239),
    s = v(388032),
    i = v(602268);
let M = function (A) {
    let { className: g, guildId: v, badge: e, primaryColor: M, secondaryColor: a } = A,
        [l, E] = t.useState(!1),
        c = t.useMemo(() => Q.go.every((A) => A.primary !== M || A.secondary !== a), [M, a]);
    function P(A) {
        let g = {};
        void 0 !== A.primary && (g.badgeColorPrimary = A.primary), void 0 !== A.secondary && (g.badgeColorSecondary = A.secondary), w.Z.updateGuildProfile(v, g);
    }
    return (0, B.jsxs)('div', {
        className: g,
        children: [
            (0, B.jsx)(C.vwX, {
                className: i.sectionTitle,
                children: s.intl.string(o.default.zSbMdX)
            }),
            (0, B.jsxs)('div', {
                className: i.pickerGrid,
                children: [
                    Q.go.map((A) =>
                        (0, B.jsx)(
                            C.P3F,
                            {
                                className: f()(i.pickerItem, { [i.pickerItemSelected]: A.primary === M && A.secondary === a }),
                                onClick: () => P(A),
                                children: (0, B.jsx)(n.v, {
                                    badge: e,
                                    width: 32,
                                    height: 32,
                                    primaryTintColor: A.primary,
                                    secondaryTintColor: A.secondary
                                })
                            },
                            ''.concat(A.primary).concat(A.secondary)
                        )
                    ),
                    (0, B.jsx)(h.Z, {
                        showSecondaryColor: D.ER[e] >= 2,
                        palette: {
                            primary: M,
                            secondary: a
                        },
                        onPrimaryColorChange: (A) => {
                            P({ primary: (0, r.Rf)(A) });
                        },
                        onSecondaryColorChange: (A) => {
                            P({ secondary: (0, r.Rf)(A) });
                        },
                        shouldShow: l,
                        onRequestClose: () => E(!1),
                        children: (A) => {
                            var g, v;
                            return (0, B.jsx)(
                                C.P3F,
                                ((g = (function (A) {
                                    for (var g = 1; g < arguments.length; g++) {
                                        var v = null != arguments[g] ? arguments[g] : {},
                                            B = Object.keys(v);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (B = B.concat(
                                                Object.getOwnPropertySymbols(v).filter(function (A) {
                                                    return Object.getOwnPropertyDescriptor(v, A).enumerable;
                                                })
                                            )),
                                            B.forEach(function (g) {
                                                var B;
                                                (B = v[g]),
                                                    g in A
                                                        ? Object.defineProperty(A, g, {
                                                              value: B,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (A[g] = B);
                                            });
                                    }
                                    return A;
                                })({}, A)),
                                (v = v =
                                    {
                                        onClick: () => {
                                            E((A) => !A);
                                        },
                                        className: f()(i.pickerItem, { [i.pickerItemSelected]: c }),
                                        children: (0, B.jsx)(C.ilE, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(v))
                                    : (function (A, g) {
                                          var v = Object.keys(A);
                                          if (Object.getOwnPropertySymbols) {
                                              var B = Object.getOwnPropertySymbols(A);
                                              v.push.apply(v, B);
                                          }
                                          return v;
                                      })(Object(v)).forEach(function (A) {
                                          Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(v, A));
                                      }),
                                g)
                            );
                        }
                    })
                ]
            })
        ]
    });
};
