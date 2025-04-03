B.d(g, { Z: () => n }), B(47120);
var C = B(200651),
    Q = B(192379),
    w = B(120356),
    D = B.n(w),
    f = B(866442),
    E = B(481060),
    v = B(550271),
    I = B(688298),
    P = B(434404),
    r = B(254925),
    e = B(116175),
    o = B(817239),
    t = B(388032),
    d = B(602268);
let n = function (A) {
    let { className: g, guildId: B, badge: w, primaryColor: n, secondaryColor: M } = A,
        [L, s] = Q.useState(!1),
        X = Q.useMemo(() => r.go.every((A) => A.primary !== n || A.secondary !== M), [n, M]);
    function c(A) {
        let g = {};
        void 0 !== A.primary && (g.badgeColorPrimary = A.primary), void 0 !== A.secondary && (g.badgeColorSecondary = A.secondary), P.Z.updateGuildProfile(B, g);
    }
    return (0, C.jsxs)('div', {
        className: g,
        children: [
            (0, C.jsx)(E.vwX, {
                className: d.sectionTitle,
                children: t.NW.string(o.Z.zSbMdX)
            }),
            (0, C.jsxs)('div', {
                className: d.pickerGrid,
                children: [
                    r.go.map((A) =>
                        (0, C.jsx)(
                            E.P3F,
                            {
                                className: D()(d.pickerItem, { [d.pickerItemSelected]: A.primary === n && A.secondary === M }),
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
                        showSecondaryColor: e.ME[w] >= 2,
                        palette: {
                            primary: n,
                            secondary: M
                        },
                        onPrimaryColorChange: (A) => {
                            c({ primary: (0, f.Rf)(A) });
                        },
                        onSecondaryColorChange: (A) => {
                            c({ secondary: (0, f.Rf)(A) });
                        },
                        shouldShow: L,
                        onRequestClose: () => s(!1),
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
                                            s((A) => !A);
                                        },
                                        className: D()(d.pickerItem, { [d.pickerItemSelected]: X }),
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
