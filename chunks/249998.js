e.d(t, { L: () => w });
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#be0351", "#ff2c52", "#f0f0f0"],
    B = ["#4282d8", "#47baff", "#f0f0f0"],
    h = [0.1, 0.25, 1],
    n = [
        {
            base: 3,
            tint: 1,
        },
        {
            base: 2,
            tint: 1,
        },
        {
            base: 2,
            tint: 1,
        },
    ],
    l = [0.1, 0.25, 1],
    C = [
        {
            base: 3,
            tint: 1,
        },
        {
            base: 2,
            tint: 1,
        },
        {
            base: 2,
            tint: 1,
        },
    ],
    w = (A) => {
        var t, e;
        let { width: w = 24, height: o = 24, primaryTintColor: Q, secondaryTintColor: i } = A,
            H = (function (A, t) {
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
            })(A, ["width", "height", "primaryTintColor", "secondaryTintColor"]),
            { primaryColorsTransformed: s, secondaryColorsTransformed: a } = (0, v.V)({
                primaryBaseColors: f,
                primaryTintColor: Q,
                primaryTintLuminances: h,
                primaryLuminanceWeights: n,
                secondaryBaseColors: B,
                secondaryTintColor: i,
                secondaryTintLuminances: l,
                secondaryLuminanceWeights: C,
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
            })({}, (0, r.A)(H))),
            (e = e =
                {
                    width: w,
                    height: o,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, g.jsx)("path", {
                            d: "M10 4V3H9V1H7v2H6v1H5v1h1v1h1v1h2V6h1V5h1V4h-1Z",
                            fill: a[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 12v1H9v2H7v-2H6v-1H5v-1h1v-1h1V9h2v1h1v1h1v1h-1Z",
                            fill: s[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 0v1h2V0H7Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 1v1h2V1H7Z",
                            fill: a[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 6v1h2V6H7Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 1H6v2h1V1ZM1 7H0v2h1V7ZM3 7V6H1v1h2ZM6 3H5v1h1V3Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 4H5v1h1V4ZM7 3H6v1h1V3Z",
                            fill: a[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 9v1h2V9H7Z",
                            fill: a[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 14v1h2v-1H7ZM7 12H6v1h1v-1ZM6 11H5v1h1v-1Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M7 10H6v1h1v-1Z",
                            fill: a[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M9 13h1v-1H9v1ZM10 12h1v-1h-1v1ZM9 11h1v-1H9v1Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M8 4H7v1h1V4Z",
                            fill: a[2],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 5H9v1h1V5ZM11 4h-1v1h1V4Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 10h1V9h2V7h-2V6h-1V5h-1v1h-1v1H9v2h1v1h1v1h1v-1Z",
                            fill: "#C7C7C7",
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 7h-1v2h1V7Z",
                            fill: "#707070",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 6V5h-1v1h1ZM11 7V6h-1v1h1Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 10V9h-1v1h1ZM10 9V8H9v1h1ZM13 10V9h-1v1h1ZM12 11v-1h-1v1h1Z",
                            fill: "#707070",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 10H3V9H1V7h2V6h1V5h1v1h1v1h1v2H6v1H5v1H4v-1Z",
                            fill: "#C7C7C7",
                        }),
                        (0, g.jsx)("path", {
                            d: "M1 9h1V7H1v2Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 9h1V7H6v2Z",
                            fill: "#707070",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 6V5H4v1h1ZM4 7V6H3v1h1ZM5 8V7H4v1h1Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 10V9H5v1h1ZM5 11v-1H4v1h1Z",
                            fill: "#707070",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 4H4v1h1V4ZM6 5H5v1h1V5ZM7 6H6v1h1V6ZM9 7H7v2h2V7ZM10 9H9v1h1V9ZM11 10h-1v1h1v-1ZM4 5H3v1h1V5ZM9 16v-1H7v1h2ZM7 13H6v2h1v-2ZM1 9v1h2V9H1ZM6 12H5v1h1v-1ZM5 11H4v1h1v-1ZM4 10H3v1h1v-1ZM9 3h1V1H9v2ZM15 9h1V7h-1v2ZM15 7V6h-2v1h2ZM10 4h1V3h-1v1ZM11 5h1V4h-1v1ZM10 6h1V5h-1v1ZM9 7h1V6H9v1ZM6 10h1V9H6v1ZM5 11h1v-1H5v1Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 5h1V4h-1v1ZM12 6h1V5h-1v1ZM9 15h1v-2H9v2ZM13 9v1h2V9h-2ZM10 13h1v-1h-1v1ZM11 12h1v-1h-1v1ZM12 11h1v-1h-1v1Z",
                            fill: "#000",
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
