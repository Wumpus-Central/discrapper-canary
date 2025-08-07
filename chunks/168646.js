e.d(t, { G: () => h });
var r = e(255367);
e(73800);
var g = e(331595),
    v = e(84502);
let n = ["#ba3500", "#fd6214", "#f0f0f0"],
    f = [0.1, 0.3, 1],
    B = [
        {
            base: 3,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
        {
            base: 10,
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
                            d: "M13 6V4h-1V1h-1v1h-1v1H9v1H8v1H3v1H2v2H1v4h1v1h1v1h1v1h8v-1h1v-1h1V6h-1Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            d: "M0 8v4h1V8H0ZM15 9v3h1V9h-1ZM14 6v3h1V6h-1ZM13 4v2h1V4h-1Z",
                            fill: "#000",
                        }),
                        (0, r.jsx)("path", {
                            d: "M14 9v3h1V9h-1ZM13 6v3h1V6h-1ZM12 4v2h1V4h-1Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M1 6v2h1V6H1ZM7 3H6v1h1V3ZM9 3H8v1h1V3ZM8 4H7v1h1V4ZM2 5v1h1V5H2ZM1 12v1h1v-1H1ZM2 13v1h1v-1H2ZM3 14v1h1v-1H3ZM14 12v1h1v-1h-1ZM13 13v1h1v-1h-1ZM12 14v1h1v-1h-1ZM4 15v1h8v-1H4ZM3 4v1h1V4H3ZM4 3v1h1V3H4ZM5 2v1h1V2H5ZM9 2v1h1V2H9ZM10 1v1h1V1h-1ZM11 0v1h1V0h-1Z",
                            fill: "#000",
                        }),
                        (0, r.jsx)("path", {
                            d: "M11 1v1h1V1h-1ZM10 2v1h1V2h-1ZM9 3v1h1V3H9ZM8 4v1h1V4H8ZM5 3v1h1V3H5ZM4 4v1h1V4H4ZM6 4v1h1V4H6Z",
                            fill: C[2],
                        }),
                        (0, r.jsx)("path", {
                            d: "M5 4v1h1V4H5Z",
                            fill: C[1],
                        }),
                        (0, r.jsx)("path", {
                            opacity: ".5",
                            d: "M11 4v1h1V4h-1ZM12 9V8h-1V6h-1v1H9v1H6V7H5v2H3v2h1v2h1v1h6v-1h1v-2h1V9h-1Z",
                            fill: "#fff",
                        }),
                        (0, r.jsx)("path", {
                            d: "M3 5v1h1V5H3ZM2 6v2h1V6H2ZM4 8v1h1V8H4Z",
                            fill: C[2],
                        }),
                        (0, r.jsx)("path", {
                            d: "M2 12v1h1v-1H2ZM3 13v1h1v-1H3ZM12 13v1h1v-1h-1ZM13 12v1h1v-1h-1ZM4 14v1h8v-1H4Z",
                            fill: C[0],
                        }),
                        (0, r.jsx)("path", {
                            d: "M1 8v2h1V8H1ZM11 10h-1V9H6v1H5v2h1v1h4v-1h1v-2Z",
                            fill: C[2],
                        }),
                        (0, r.jsx)("path", {
                            d: "M12 1v3h1V1h-1Z",
                            fill: "#000",
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
