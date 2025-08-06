e.d(t, { o: () => l });
var r = e(255367);
e(73800);
var g = e(331595),
    v = e(84502);
let n = ["#FD6214", "#FFB84B", "#FFE361"],
    f = [0.3, 0.56, 0.77],
    B = [
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
    l = (A) => {
        var t,
            e,
            { width: l = 24, height: h = 24, primaryTintColor: i } = A,
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
                    width: l,
                    height: h,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsx)("path", {
                            d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z",
                            fill: C[2],
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 15H3.99998V16H12V15Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 14H3.99998V15H12V14Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M13 13H12V15H13V13Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M3.99998 13H2.99998V15H3.99998V13Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5 10V11H6V12H4V13H7V10H5Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M5 7.99998H6L6 3.99998H5V7.99998Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 6.99998H13V3.99998H12V6.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 6.99998H10V7.99998H11V6.99998Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 6.99998H12V7.99998H14V6.99998Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M10 7.99998H9V8.99998H10V7.99998Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 2H10V6.99999H11V2Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M5.99998 2H4.99998V3.99999H5.99998V2Z",
                            fill: C[2],
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 3.99998V2.99998H12V3.99998H14Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M8 10H7V12H8V10Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
                            d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M3 7V4H2V8H4V7H3Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M10 12V11H11V10H9V13H12V12H10Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 8.99998V7.99998H12V8.99998H14Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M16 3.99998H15V6.99998H16V3.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 3.99998H13V6.99998H14V3.99998Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 9.99998H12V8.99998H11V9.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 7.99998H15V6.99998H14V7.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 3.99998H15V2.99998H14V3.99998Z",
                            fill: "black",
                        }),
                        (0, r.jsx)("path", {
                            d: "M7 13H4V14H7V13Z",
                            fill: "white",
                        }),
                        (0, r.jsx)("path", {
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
