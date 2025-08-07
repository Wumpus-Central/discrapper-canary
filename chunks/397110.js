e.d(t, { K: () => h });
var r = e(255367);
e(73800);
var g = e(331595),
    v = e(84502);
let n = ["#847D8B", "#D1CDD5"],
    f = [0.2, 0.65],
    B = [
        {
            base: 4,
            tint: 1,
        },
        {
            base: 3,
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
                        (0, r.jsxs)("g", {
                            "clip-path": "url(#clip0_290_14574)",
                            children: [
                                (0, r.jsx)("path", {
                                    d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z",
                                    fill: C[1],
                                }),
                                (0, r.jsx)("path", {
                                    d: "M5 8H4V6H3V4H2V2H4V4H5V8Z",
                                    fill: "#FF7FC0",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M12 8H11V4H12V2H14V4H13V6H12V8Z",
                                    fill: "#FF7FC0",
                                }),
                                (0, r.jsx)("path", {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z",
                                    fill: "white",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M9 12V13H7V12H9Z",
                                    fill: "#FF1B90",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M14 15V16H2V15H14Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M2 15H1V14H2V15Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M15 15H14V14H15V15Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M2 14H1V13H2V14Z",
                                    fill: C[0],
                                }),
                                (0, r.jsx)("path", {
                                    d: "M15 14H14V13H15V14Z",
                                    fill: C[0],
                                }),
                                (0, r.jsx)("path", {
                                    d: "M1 14H0V12H1V14Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M16 14H15V12H16V14Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M2 12H1V10H2V12Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M15 12H14V10H15V12Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M3 10H2V9H3V10Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M14 10H13V9H14V10Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M4 9H3V8H4V9Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M13 9H12V8H13V9Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M3 8H2V6H3V8Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M14 8H13V6H14V8Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M2 6H1V4H2V6Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M15 6H14V4H15V6Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M1 4H0V1H1V4Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M16 4H15V1H16V4Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M6 3H5V1H6V3Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M11 3H10V1H11V3Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M5 1H1V0H5V1Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M15 1H11V0H15V1Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M6 12H5V10H6V12Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M11 12H10V10H11V12Z",
                                    fill: "black",
                                }),
                                (0, r.jsx)("path", {
                                    d: "M14 14H12V15H14V14Z",
                                    fill: C[0],
                                }),
                                (0, r.jsx)("path", {
                                    d: "M4 14H2V15H4V14Z",
                                    fill: C[0],
                                }),
                            ],
                        }),
                        (0, r.jsx)("defs", {
                            children: (0, r.jsx)("clipPath", {
                                id: "clip0_290_14574",
                                children: (0, r.jsx)("rect", {
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
