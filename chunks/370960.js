e.d(t, { Y: () => w });
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#be0351", "#ff2c52"],
    B = ["#ffb84b", "#ffe361"],
    h = [0.12, 0.25],
    n = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 4,
            tint: 1,
        },
    ],
    l = [0.4, 0.8],
    C = [
        {
            base: 5,
            tint: 1,
        },
        {
            base: 4,
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
                            d: "M11 12v-2h-1V9H6v1H5v2H4v3h8v-3h-1Z",
                            fill: a[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M14 3V2h-2V1H4v1H2v1H1v6h1v1h2V9h8v1h2V9h1V3h-1Z",
                            fill: s[1],
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 0H4v1h8V0Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 1H4v1h8V1ZM4 2H2v1h2V2ZM14 2h-2v1h2V2Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M12 15H4v1h8v-1ZM1 3H0v6h1V3ZM4 1H2v1h2V1Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 7V3H1v6h2V7H2Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 3h-1v6h1V3Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M15 6h-2v2h2V6ZM12 2h-2v2h2V2Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            opacity: ".5",
                            d: "M15 6h-1v2h1V6Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 7H6v1h4V7ZM12 8h-2v1h2V8ZM6 8H4v1h2V8Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M6 10H5v2h1v-2Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M11 10h-1v2h1v-2ZM11 12v2H4v1h8v-3h-1Z",
                            fill: a[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 12H4v2h1v-2Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 9H2v1h2V9ZM14 9h-2v1h2V9Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M8 6H6v2h2V6Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            opacity: ".5",
                            d: "M8 7H6v1h2V7Z",
                            fill: s[0],
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 8H6v1h4V8Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M10 9H6v1h4V9Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M2 2H1v1h1V2Z",
                            fill: "#000",
                        }),
                        (0, g.jsx)("path", {
                            d: "M5 3H4v1h1V3Z",
                            fill: "#fff",
                        }),
                        (0, g.jsx)("path", {
                            d: "M4 12H3v3h1v-3ZM5 10h1V9H4v1H2v1h2v1h1v-2ZM2 9H1v1h1V9ZM16 3h-1v6h1V3ZM14 1h-2v1h2V1ZM15 2h-1v1h1V2ZM14 10h-2V9h-2v1h1v2h1v3h1v-3h-1v-1h2v-1h1V9h-1v1Z",
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
