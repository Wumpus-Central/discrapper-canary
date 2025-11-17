g.d(t, { W: () => n });
var v = g(54381);
g(473749);
var e = g(331595),
    r = g(84502);
let f = ["#008456", "#6BE473"],
    B = [0.17, 0.6],
    h = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
    ],
    n = (A) => {
        var t,
            g,
            { width: n = 24, height: C = 24, primaryTintColor: w } = A,
            l = (function (A, t) {
                if (null == A) return {};
                var g,
                    v,
                    e = (function (A, t) {
                        if (null == A) return {};
                        var g,
                            v,
                            e = {},
                            r = Object.keys(A);
                        for (v = 0; v < r.length; v++) (g = r[v]), t.indexOf(g) >= 0 || (e[g] = A[g]);
                        return e;
                    })(A, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(A);
                    for (v = 0; v < r.length; v++)
                        (g = r[v]),
                            !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (e[g] = A[g]);
                }
                return e;
            })(A, ["width", "height", "primaryTintColor"]);
        let { primaryColorsTransformed: Q } = (0, r.s)({
            primaryBaseColors: f,
            primaryTintColor: w,
            primaryTintLuminances: B,
            primaryLuminanceWeights: h,
        });
        return (0, v.jsxs)(
            "svg",
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var g = null != arguments[t] ? arguments[t] : {},
                        v = Object.keys(g);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (v = v.concat(
                            Object.getOwnPropertySymbols(g).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(g, A).enumerable;
                            }),
                        )),
                        v.forEach(function (t) {
                            var v;
                            (v = g[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: v,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (A[t] = v);
                        });
                }
                return A;
            })({}, (0, e.Z)(l))),
            (g = g =
                {
                    width: n,
                    height: C,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, v.jsx)("path", {
                            d: "M16 11.9295V9H15V11.9295H16Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M16 12V9H15V12H16Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M1 7L1 4H0L0 7H1Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M15 7V3H11V1H5.00002V3H2.00002V4H1.00002V7H2.00002V8H5.00002V9H1.00002V13H5.00002V15H11V13H14V12H15V9H14V8H11V7H15Z",
                            fill: Q[1],
                        }),
                        (0, v.jsx)("path", {
                            d: "M15 12H14V13H15V12Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M13 9H12V10H13V9Z",
                            fill: "white",
                        }),
                        (0, v.jsx)("path", {
                            d: "M12 8H8V9H12V8Z",
                            fill: "white",
                        }),
                        (0, v.jsx)("path", {
                            d: "M5 3H2V4H5V3Z",
                            fill: "white",
                        }),
                        (0, v.jsx)("path", {
                            d: "M7 9H6V10H7V9Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M8 6H7V7H8V6Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M8 5H7V6H8V5Z",
                            fill: Q[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M7 10H6V11H7V10Z",
                            fill: Q[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M6 9H5V10H6V9Z",
                            fill: Q[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 6H8V7H9V6Z",
                            fill: Q[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M2 3H1V4H2V3Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M2 4H1V5H2V4Z",
                            fill: "white",
                        }),
                        (0, v.jsx)("path", {
                            d: "M11 13V15H5.00002V13H1.00002V9H6.00002V8H2.00002V7H1.00002V8H1.52588e-05V14H4.00002V16H12V14H14V13H11Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M13 3V7H15V3H13Z",
                            fill: Q[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 1V3H11V1L9 1Z",
                            fill: Q[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 13V15H11V13H9Z",
                            fill: Q[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M14 9V8H12V9H13V12H12V13H14V12H15V9H14Z",
                            fill: Q[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M12 5V4H11V3H9.00002V1H5.00002V2H7.00002V3H8.00002V4H9.00002V5H10V6H11V7H13V5H12Z",
                            fill: "white",
                        }),
                        (0, v.jsx)("path", {
                            d: "M9.00002 12V11H8.00002V10H7.00002V11H6.00002V10H5.00002V9H1.00002V10H4.00002V11H5.00002V12H6.00002V13H7.00002V14H8.00002V15H9.00002V13H10V12H9.00002Z",
                            fill: "white",
                        }),
                        (0, v.jsx)("path", {
                            d: "M12 2V0H4.00002V2H2.00002V3H5.00002V1H11V3H12H15V7H8.00002V8H14V9H15V8H16V2H12Z",
                            fill: "black",
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g))
                : (function (A, t) {
                      var g = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var v = Object.getOwnPropertySymbols(A);
                          g.push.apply(g, v);
                      }
                      return g;
                  })(Object(g)).forEach(function (A) {
                      Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(g, A));
                  }),
            t),
        );
    };
