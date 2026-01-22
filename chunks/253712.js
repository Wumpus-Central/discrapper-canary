e.d(t, {
    A: () => n,
});
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#87553B", "#B88166"],
    B = [0.2, 0.5],
    h = [
        {
            base: 7,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
    ],
    n = (A) => {
        var t, e;
        let { width: n = 24, height: l = 24, primaryTintColor: C } = A,
            w = (function (A, t) {
                if (null == A) return {};
                var e,
                    g,
                    r,
                    v = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (r = 0, e = Reflect.ownKeys(A); r < e.length; r++)
                        (g = e[r]),
                            !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
                    return v;
                }
                if (
                    ((v = (function (A, t) {
                        if (null == A) return {};
                        var e,
                            g,
                            r = {},
                            v = Object.getOwnPropertyNames(A);
                        for (g = 0; g < v.length; g++)
                            (e = v[g]),
                                !(t.indexOf(e) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(A, e) &&
                                    (r[e] = A[e]);
                        return r;
                    })(A, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (r = 0, e = Object.getOwnPropertySymbols(A); r < e.length; r++)
                        (g = e[r]),
                            !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
                return v;
            })(A, ["width", "height", "primaryTintColor"]),
            { primaryColorsTransformed: o } = (0, v.V)({
                primaryBaseColors: f,
                primaryTintColor: C,
                primaryTintLuminances: B,
                primaryLuminanceWeights: h,
            });
        return (0, g.jsxs)(
            "svg",
            ((t = (function (A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {},
                        g = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (g = g.concat(
                            Object.getOwnPropertySymbols(e).filter(function (A) {
                                return Object.getOwnPropertyDescriptor(e, A).enumerable;
                            }),
                        )),
                        g.forEach(function (t) {
                            var g;
                            (g = e[t]),
                                t in A
                                    ? Object.defineProperty(A, t, {
                                          value: g,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (A[t] = g);
                        });
                }
                return A;
            })({}, (0, r.A)(w))),
            (e = e =
                {
                    width: n,
                    height: l,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, g.jsx)("path", {
                            d: "M15 6H13V8H15V6Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M2.99998 6H0.999985V8H2.99998V6Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M9.99998 14H5.99998V5H6.99998V4H8.99998V5H9.99998V14Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 6V7H9V10H11V11H12V6H10Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 6V7H7V10H5V11H4V6H6Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M9.99998 12H5.99998V13H9.99998V12Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 7H13V8H15V7Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M2.99998 7H0.999985V8H2.99998V7Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M8.99998 14H6.99998V15H8.99998V14Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M9.99998 4H8.99998V5H9.99998V4Z",
                            fill: "#D1CDD5",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6.99998 4H5.99998V5H6.99998V4Z",
                            fill: "#D1CDD5",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 5H9.99998V6H11V5Z",
                            fill: "#D1CDD5",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5.99998 5H4.99998V6H5.99998V5Z",
                            fill: "#D1CDD5",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5.99998 5H3.99998V3H2.99998V2H1.99998V1H4.99998V2H5.99998V5Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M9.99998 5H12V3H13V2H14V1H11V2H9.99998V5Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 2H11V3H12V2Z",
                            fill: "#D1CDD5",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4.99998 2H3.99998V3H4.99998V2Z",
                            fill: "#D1CDD5",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4.99998 0H1.99998V1H4.99998V0Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 0H11V1H14V0Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5.99998 9V7H4.99999V9H5.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 9V7H9.99999V9H11Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M8.99998 12H6.99998V13H8.99998V12Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M8.99998 10H6.99998V11H8.99998V10Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 5V3H12V5H11V6H12V11H13V9H15V8H13V6H15V8H16V5H13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 5H4V3H3V5H0V8H1V6H3V8H1V9H3V11H4V6H5V5Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 11V10H10V14H11V12H12V11H11Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M9.99998 14H8.99998V15H9.99998V14Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 15V14H6V15H5V16H9V15H7Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 10V11H4V12H5V14H6V10H5Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 2V1H1V3H3V2H2Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5.99998 1H4.99998V2H5.99998V1Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 2V3H7V2H6V4H10V2H9Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 1H9.99998V2H11V1Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 1V2H13V3H15V1H14Z",
                            fill: "black",
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                : (function (A, t) {
                      var e = Object.keys(A);
                      if (Object.getOwnPropertySymbols) {
                          var g = Object.getOwnPropertySymbols(A);
                          e.push.apply(e, g);
                      }
                      return e;
                  })(Object(e)).forEach(function (A) {
                      Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(e, A));
                  }),
            t),
        );
    };
