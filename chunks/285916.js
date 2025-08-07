e.d(t, { W: () => h });
var r = e(255367);
e(73800);
var g = e(331595),
    v = e(84502);
let n = ["#008456", "#6BE473"],
    f = [0.17, 0.6],
    B = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
    ],
    h = (A) => {
        var t,
            e,
            { width: h = 24, height: l = 24, primaryTintColor: i } = A,
            o = (function (A, t) {
                if (null == A) return {};
                var e,
                    r,
                    g = (function (A, t) {
                        if (null == A) return {};
                        var e,
                            r,
                            g = {},
                            v = Object.keys(A);
                        for (r = 0; r < v.length; r++) (e = v[r]), t.indexOf(e) >= 0 || (g[e] = A[e]);
                        return g;
                    })(A, t);
                if (Object.getOwnPropertySymbols) {
                    var v = Object.getOwnPropertySymbols(A);
                    for (r = 0; r < v.length; r++)
                        (e = v[r]),
                            !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e]);
                }
                return g;
            })(A, ["width", "height", "primaryTintColor"]);
        let { primaryColorsTransformed: C } = (0, v.s)({
            primaryBaseColors: n,
            primaryTintColor: i,
            primaryTintLuminances: f,
            primaryLuminanceWeights: B,
        });
        return (0, r.jsxs)(
            "svg",
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(e).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(e, A).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = e[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (A[t] = r);
                        });
                }
                return A;
            })({}, (0, g.Z)(o))),
            (e = e =
                {
                    width: h,
                    height: l,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsx)("path", {
                            d: "M16 11.9295V9H15V11.9295H16Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M16 12V9H15V12H16Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M1 7L1 4H0L0 7H1Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M15 12H14V13H15V12Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M13 9H12V10H13V9Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 8H8V9H12V8Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5 3H2V4H5V3Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M7 9H6V10H7V9Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M8 6H7V7H8V6Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M8 5H7V6H8V5Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M7 10H6V11H7V10Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M6 9H5V10H6V9Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M9 6H8V7H9V6Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M2 3H1V4H2V3Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M2 4H1V5H2V4Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 13V15H5.00002V13H1.00002V9H6.00002V8H2.00002V7H1.00002V8H1.52588e-05V14H4.00002V16H12V14H14V13H11Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M13 3V7H15V3H13Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M9 1V3H11V1L9 1Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M9 13V15H11V13H9Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 5V4H11V3H9.00002V1H5.00002V2H7.00002V3H8.00002V4H9.00002V5H10V6H11V7H13V5H12Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M9.00002 12V11H8.00002V10H7.00002V11H6.00002V10H5.00002V9H1.00002V10H4.00002V11H5.00002V12H6.00002V13H7.00002V14H8.00002V15H9.00002V13H10V12H9.00002Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 2V0H4.00002V2H2.00002V3H5.00002V1H11V3H12H15V7H8.00002V8H14V9H15V8H16V2H12Z",
                            fill: "black",
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : (function (A, t) {
                      var e = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(A);
                          e.push.apply(e, r);
                      }
                      return e;
                  })(Object(e)).forEach(function (A) {
                      Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(e, A));
                  }),
            t),
        );
    };
