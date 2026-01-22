e.d(t, {
    r: () => n,
});
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#FD6214", "#FFB84B", "#FFE361"],
    B = [0.3, 0.56, 0.77],
    h = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 3,
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
                            d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 15H3.99998V16H12V15Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 14H3.99998V15H12V14Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 13H12V15H13V13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3.99998 13H2.99998V15H3.99998V13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 10V11H6V12H4V13H7V10H5Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 7.99998H6L6 3.99998H5V7.99998Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 6.99998H13V3.99998H12V6.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 6.99998H10V7.99998H11V6.99998Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 6.99998H12V7.99998H14V6.99998Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 7.99998H9V8.99998H10V7.99998Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 2H10V6.99999H11V2Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M5.99998 2H4.99998V3.99999H5.99998V2Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 3.99998V2.99998H12V3.99998H14Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M8 10H7V12H8V10Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M3 7V4H2V8H4V7H3Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 12V11H11V10H9V13H12V12H10Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 8.99998V7.99998H12V8.99998H14Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M16 3.99998H15V6.99998H16V3.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 3.99998H13V6.99998H14V3.99998Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 9.99998H12V8.99998H11V9.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 7.99998H15V6.99998H14V7.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 3.99998H15V2.99998H14V3.99998Z",
                            fill: "black",
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 13H4V14H7V13Z",
                            fill: "white",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 1V8H5V2H6V7H7V2H12V1H4Z",
                            fill: "white",
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
