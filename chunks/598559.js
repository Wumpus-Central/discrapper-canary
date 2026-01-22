e.d(t, {
    v: () => n,
});
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#ffb84b", "#ffe361", "#f0f0f0"],
    B = [0.15, 0.5, 0.9],
    h = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 3,
            tint: 2,
        },
        {
            base: 10,
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
                            d: "M5 6H4v1H2v2h6v2H7v1H6v1H5v1H4v1h2v-1h1v-1h1v-1h1v-1h2v-1h1V9h2V7H7V6h1V5h1V4h1V3H8v1H7v1H5v1Z",
                            fill: o[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M1 7H0v2h1V7Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 7H1v2h1V7Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M16 7h-1v2h1V7ZM3 6H1v1h2V6ZM6 4H4v1h2V4ZM4 5H3v1h1V5Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 6H3v1h1V6ZM5 5H4v1h1V5ZM6 6H5v1h1V6ZM7 4H6v1h1V4ZM8 3H7v1h1V3ZM8 10H7v1h1v-1ZM7 11H6v1h1v-1ZM6 12H5v1h1v-1ZM5 13H4v1h1v-1ZM4 14H3v1h1v-1Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 2h-1v1h1V2ZM13 9h-1v1h1V9ZM12 10h-1v1h1v-1ZM10 11H9v1h1v-1ZM9 12H8v1h1v-1ZM15 8h-1v1h1V8Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 7h-1v1h1V7Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 3h-1v1h1V3ZM10 4H9v1h1V4ZM9 5H8v1h1V5ZM8 6H7v1h1V6Z",
                            fill: o[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 2H9v1h1V2Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 2H7v1h2V2ZM7 3H6v1h1V3ZM13 0h-3v1h3V0Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M13 1h-3v1h3V1Z",
                            fill: o[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 6H8v1h7V6ZM10 1H9v1h1V1ZM14 1h-1v1h1V1ZM13 2h-1v1h1V2ZM12 3h-1v1h1V3ZM11 4h-1v1h1V4ZM10 5H9v1h1V5ZM15 9h-2v1h2V9ZM12 11h-2v1h2v-1ZM13 10h-1v1h1v-1ZM9 13H7v1h2v-1ZM10 12H9v1h1v-1ZM6 15H3v1h3v-1ZM8 9H1v1h7V9ZM7 14H6v1h1v-1ZM3 14H2v1h1v-1ZM4 13H3v1h1v-1ZM5 12H4v1h1v-1ZM6 11H5v1h1v-1ZM7 10H6v1h1v-1Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 2h-1v1h1V2Z",
                            fill: o[1],
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
