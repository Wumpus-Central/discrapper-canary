B.d(g, { Z: () => d }), B(388685);
var C = B(200651),
    Q = B(192379),
    w = B(120356),
    D = B.n(w),
    f = B(866442),
    E = B(481060),
    v = B(550271),
    I = B(229190),
    P = B(434404),
    e = B(254925),
    r = B(116175),
    t = B(817239),
    n = B(388032),
    o = B(602268);
let d = function (A) {
    let { className: g, guildId: B, badge: w, primaryColor: d, secondaryColor: M } = A,
        [s, L] = Q.useState(!1),
        X = Q.useMemo(() => e.go.every((A) => A.primary !== d || A.secondary !== M), [d, M]);
    function c(A) {
        let g = {};
        void 0 !== A.primary && (g.badgeColorPrimary = A.primary), void 0 !== A.secondary && (g.badgeColorSecondary = A.secondary), P.Z.updateGuildProfile(B, g);
    }
    return (0, C.jsxs)('div', {
        className: g,
        children: [
            (0, C.jsx)(E.vwX, {
                className: o.sectionTitle,
                children: n.NW.string(t.Z.zSbMdX)
            }),
            (0, C.jsxs)('div', {
                className: o.pickerGrid,
                children: [
                    e.go.map((A) =>
                        (0, C.jsx)(
                            E.P3F,
                            {
                                className: D()(o.pickerItem, { [o.pickerItemSelected]: A.primary === d && A.secondary === M }),
                                onClick: () => c(A),
                                children: (0, C.jsx)(v.A, {
                                    badge: w,
                                    width: 32,
                                    height: 32,
                                    primaryTintColor: A.primary,
                                    secondaryTintColor: A.secondary
                                })
                            },
                            ''.concat(A.primary).concat(A.secondary)
                        )
                    ),
                    (0, C.jsx)(I.Z, {
                        showSecondaryColor: r.ME[w] >= 2,
                        palette: {
                            primary: d,
                            secondary: M
                        },
                        onPrimaryColorChange: (A) => {
                            c({ primary: (0, f.Rf)(A) });
                        },
                        onSecondaryColorChange: (A) => {
                            c({ secondary: (0, f.Rf)(A) });
                        },
                        shouldShow: s,
                        onRequestClose: () => L(!1),
                        children: (A) => {
                            var g, B;
                            return (0, C.jsx)(
                                E.P3F,
                                ((g = (function (A) {
                                    for (var g = 1; g < arguments.length; g++) {
                                        var B = null != arguments[g] ? arguments[g] : {},
                                            C = Object.keys(B);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (C = C.concat(
                                                Object.getOwnPropertySymbols(B).filter(function (A) {
                                                    return Object.getOwnPropertyDescriptor(B, A).enumerable;
                                                })
                                            )),
                                            C.forEach(function (g) {
                                                var C;
                                                (C = B[g]),
                                                    g in A
                                                        ? Object.defineProperty(A, g, {
                                                              value: C,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (A[g] = C);
                                            });
                                    }
                                    return A;
                                })({}, A)),
                                (B = B =
                                    {
                                        onClick: () => {
                                            L((A) => !A);
                                        },
                                        className: D()(o.pickerItem, { [o.pickerItemSelected]: X }),
                                        children: (0, C.jsx)(E.ilE, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        })
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(B))
                                    : (function (A, g) {
                                          var B = Object.keys(A);
                                          if (Object.getOwnPropertySymbols) {
                                              var C = Object.getOwnPropertySymbols(A);
                                              B.push.apply(B, C);
                                          }
                                          return B;
                                      })(Object(B)).forEach(function (A) {
                                          Object.defineProperty(g, A, Object.getOwnPropertyDescriptor(B, A));
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
