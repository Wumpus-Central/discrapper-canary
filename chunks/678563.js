g.d(t, { h: () => l });
var v = g(54381);
g(473749);
var e = g(331595),
    r = g(84502);
let f = ["#ba3500", "#fd6214", "#ffb84b", "#f0f0f0"],
    B = ["#35363a", "#57595f", "#d8d8d8"],
    h = [0.05, 0.15, 0.4, 0.9],
    n = [
        {
            base: 8,
            tint: 1,
        },
        {
            base: 5,
            tint: 1,
        },
        {
            base: 3,
            tint: 1,
        },
        {
            base: 8,
            tint: 1,
        },
    ],
    C = [0.05, 0.3, 0.95],
    w = [
        {
            base: 2,
            tint: 1,
        },
        {
            base: 4,
            tint: 1,
        },
        {
            base: 4,
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
                            d: "M14 7V6h-1v1h-3V6H9V3h1V2H7v4H6v1H1v2h1v1h1V9h3v1h1v3H6v1h1v1h2v-1h1v-1H9v-3h1V9h3v1h1V9h1V7h-1Z",
                            fill: s[2],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 0H7v1h2V0ZM6 2H3v1h3V2ZM3 3H2v3h1V3ZM7 3H6v3h1V3ZM10 3H9v3h1V3ZM14 3h-1v3h1V3ZM13 2h-3v1h3V2ZM6 6H3v1h3V6ZM13 6h-3v1h3V6ZM7 1H6v1h1V1Z",
                            fill: "#000",
                        }),
                        (0, v.jsx)("path", {
                            d: "M6 3H5v1h1V3ZM5 4H4v1h1V4ZM13 3h-1v1h1V3ZM12 4h-1v1h1V4ZM13 10h-1v1h1v-1ZM12 11h-1v1h1v-1ZM6 10H5v1h1v-1ZM5 11H4v1h1v-1Z",
                            fill: a[1],
                        }),
                        (0, v.jsx)("path", {
                            d: "M10 1H9v1h1V1ZM1 7H0v2h1V7Z",
                            fill: "#000",
                        }),
                        (0, v.jsx)("path", {
                            d: "M5 4v1H3v1h3V4H5ZM12 4v1h-2v1h3V4h-1ZM5 11v1H3v1h3v-2H5ZM12 11v1h-2v1h3v-2h-1Z",
                            fill: a[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M2 9H1v1h1V9ZM2 6H1v1h1V6ZM16 7h-1v2h1V7Z",
                            fill: "#000",
                        }),
                        (0, v.jsx)("path", {
                            d: "M15 7h-1v2h1V7Z",
                            fill: s[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M2 7H1v2h1V7Z",
                            fill: s[3],
                        }),
                        (0, v.jsx)("path", {
                            d: "M15 6h-1v1h1V6ZM15 9h-1v1h1V9Z",
                            fill: "#000",
                        }),
                        (0, v.jsx)("path", {
                            d: "M14 9h-1v1h1V9ZM7 9H6v1h1V9ZM3 9H2v1h1V9ZM10 9H9v1h1V9Z",
                            fill: s[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 15H7v1h2v-1ZM6 13H3v1h3v-1ZM3 10H2v3h1v-3ZM7 10H6v3h1v-3ZM10 10H9v3h1v-3ZM14 10h-1v3h1v-3ZM13 13h-3v1h3v-1ZM6 9H3v1h3V9ZM13 9h-3v1h3V9Z",
                            fill: "#000",
                        }),
                        (0, v.jsx)("path", {
                            d: "M6 8H3v1h3V8ZM13 8h-3v1h3V8Z",
                            fill: s[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M7 14H6v1h1v-1ZM10 14H9v1h1v-1Z",
                            fill: "#000",
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 14H7v1h2v-1Z",
                            fill: s[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 1H7v1h2V1ZM7 2H6v1h1V1Z",
                            fill: s[3],
                        }),
                        (0, v.jsx)("path", {
                            d: "M10 13H9v1h1v-1Z",
                            fill: s[0],
                        }),
                        (0, v.jsx)("path", {
                            d: "M5 3H3v2h1V4h1V3ZM12 3h-2v2h1V4h1V3ZM5 10H3v2h1v-1h1v-1ZM12 10h-2v2h1v-1h1v-1Z",
                            fill: a[2],
                        }),
                        (0, v.jsx)("path", {
                            d: "M9 5V4H8V2H7v3h2ZM9 6H8v1H7v1H6v1h1v2h1v3h1v-4H8V8h2V7H9V6ZM14 7h-1v1h1V7Z",
                            fill: s[1],
                        }),
                        (0, v.jsx)("path", {
                            d: "M7 6H6v1h1V6ZM3 7H2v1h1V7ZM5 7H4v1h1V7Z",
                            fill: s[1],
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
