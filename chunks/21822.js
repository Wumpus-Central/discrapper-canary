g.d(t, { h: () => l });
var v = g(54381);
g(473749);
var e = g(331595),
    r = g(84502);
let f = ["#705224", "#F6A830"],
    B = ["#FFE880"],
    h = [0.05, 0.4],
    n = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
    ],
    C = [0.8],
    w = [
        {
            base: 6,
            tint: 1,
        },
    ],
    l = (A) => {
        var t,
            g,
            { width: l = 24, height: Q = 24, primaryTintColor: i, secondaryTintColor: H } = A,
            o = (function (A, t) {
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
            })(A, ["width", "height", "primaryTintColor", "secondaryTintColor"]);
        let { primaryColorsTransformed: s, secondaryColorsTransformed: a } = (0, r.s)({
            primaryBaseColors: f,
            primaryTintColor: i,
            primaryTintLuminances: h,
            primaryLuminanceWeights: n,
            secondaryBaseColors: B,
            secondaryTintColor: H,
            secondaryTintLuminances: C,
            secondaryLuminanceWeights: w,
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
            })({}, (0, e.Z)(o))),
            (g = g =
                {
                    width: l,
                    height: Q,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, v.jsx)("path", {
                            d: "M3 2.00002V5.00002H11V6.00001H9.99997V7.00001H8.99997V8.00001L15 8.00001V10H14V11H8V14H1V10V4.00002H2V2.00002H3Z",
                            fill: s[1],
                        }),
                        (0, v.jsx)("path", {
                            d: "M8 8.00002V9.00002H7V11H6V12H3V11H2V10H1V14H8V11H14V10H15V8.00002H8Z",
                            fill: a[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 12H8V14H9V12Z",
                            fill: "#FF1C90",
                        }),
                        (0, v.jsx)("path", {
                            d: "M7.99997 2.00002H6.99997V4.00002H7.99997V2.00002Z",
                            fill: s[1],
                        }),
                        (0, v.jsx)("path", {
                            d: "M5 2.00002V1.00002L3 1.00002V2.00002H5Z",
                            fill: s[1],
                        }),
                        (0, v.jsx)("path", {
                            d: "M4 5H6V2L4 2L4 5Z",
                            fill: "#FF7FC0",
                        }),
                        (0, v.jsx)("path", {
                            d: "M8 4H10V2H8V4Z",
                            fill: "#FF7FC0",
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 12V15H11V12H9Z",
                            fill: "#FF7FC0",
                        }),
                        (0, v.jsx)("path", {
                            d: "M12 8V9H13V10H15V8H12Z",
                            fill: s[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 1.00002H8V2.00002H9V1.00002Z",
                            fill: s[1],
                        }),
                        (0, v.jsx)("path", {
                            d: "M10 1.00002H9V2.00002H10V1.00002Z",
                            fill: "#FF7FC0",
                        }),
                        (0, v.jsx)("path", {
                            d: "M12 6.00002H11V7.00002H12V6.00002Z",
                            fill: s[1],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 14H1V15H9V14Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M1 14L1 4.00002H0L0 14H1Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M2 2.00002H1V4.00002H2V2.00002Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M4 2.00002H3V5.00002H4V2.00002Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M11 16V15H9V16H11Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M6 9H7V6H6V9Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M3 1.00002H2V2.00002H3V1.00002Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M8 1.00002H7V2.00002H8V1.00002Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M3 5.00002H2V6.00002H3V5.00002Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M12 5.00002H11V6.00002H12V5.00002Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M14 10V11H7.99997V12H11V15H12V13H13V12H15V10H14Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M13 7V6H12V7H11V6H9.99997V7H8.99997V8H15V10H16V7H13Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M2.99997 0V1H4.99997V2H5.99997V0H2.99997Z",
                            fill: "black",
                        }),
                        (0, v.jsx)("path", {
                            d: "M7.99997 0V1H9.99997V4H6.99997V2H5.99997V5H11V0H7.99997Z",
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
