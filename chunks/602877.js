e.d(t, { J: () => n });
var g = e(627968);
e(64700);
var r = e(996682),
    v = e(211974);
let f = ["#847D8B", "#D1CDD5"],
    B = [0.2, 0.65],
    h = [
        {
            base: 4,
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
                        (0, g.jsxs)("g", {
                            clipPath: "url(#clip0_290_14574)",
                            children: [
                                (0, g.jsx)("path", {
                                    d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z",
                                    fill: o[1],
                                }),
                                (0, g.jsx)("path", {
                                    d: "M5 8H4V6H3V4H2V2H4V4H5V8Z",
                                    fill: "#FF7FC0",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M12 8H11V4H12V2H14V4H13V6H12V8Z",
                                    fill: "#FF7FC0",
                                }),
                                (0, g.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z",
                                    fill: "white",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M9 12V13H7V12H9Z",
                                    fill: "#FF1B90",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M14 15V16H2V15H14Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M2 15H1V14H2V15Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M15 15H14V14H15V15Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M2 14H1V13H2V14Z",
                                    fill: o[0],
                                }),
                                (0, g.jsx)("path", {
                                    d: "M15 14H14V13H15V14Z",
                                    fill: o[0],
                                }),
                                (0, g.jsx)("path", {
                                    d: "M1 14H0V12H1V14Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M16 14H15V12H16V14Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M2 12H1V10H2V12Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M15 12H14V10H15V12Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M3 10H2V9H3V10Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M14 10H13V9H14V10Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M4 9H3V8H4V9Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M13 9H12V8H13V9Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M3 8H2V6H3V8Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M14 8H13V6H14V8Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M2 6H1V4H2V6Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M15 6H14V4H15V6Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M1 4H0V1H1V4Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M16 4H15V1H16V4Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M6 3H5V1H6V3Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M11 3H10V1H11V3Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M5 1H1V0H5V1Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M15 1H11V0H15V1Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M6 12H5V10H6V12Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M11 12H10V10H11V12Z",
                                    fill: "black",
                                }),
                                (0, g.jsx)("path", {
                                    d: "M14 14H12V15H14V14Z",
                                    fill: o[0],
                                }),
                                (0, g.jsx)("path", {
                                    d: "M4 14H2V15H4V14Z",
                                    fill: o[0],
                                }),
                            ],
                        }),
                        (0, g.jsx)("defs", {
                            children: (0, g.jsx)("clipPath", {
                                id: "clip0_290_14574",
                                children: (0, g.jsx)("rect", {
                                    width: "16",
                                    height: "16",
                                    fill: "white",
                                }),
                            }),
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
