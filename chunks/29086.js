e.d(t, {
    A: () => H,
    V: () => i,
});
var g = e(627968);
e(64700);
var r = e(503698),
    v = e.n(r),
    f = e(397927),
    B = e(328006),
    h = e(857909),
    n = e(334840),
    l = e(653919),
    C = e(203656),
    w = e(583970),
    o = e(985018),
    Q = e(197827);

function i(A) {
    return (0, g.jsxs)("div", {
        className: v()(Q.zC, A.className),
        children: [
            (0, g.jsx)("div", {
                className: Q.H,
                children:
                    "string" == typeof A.avatar
                        ? (0, g.jsx)("img", {
                              className: Q.my,
                              src: A.avatar,
                              alt: "".concat(A.username, " avatar"),
                              width: 40,
                              height: 40,
                          })
                        : A.avatar,
            }),
            (0, g.jsxs)("div", {
                className: Q.hQ,
                children: [
                    (0, g.jsxs)("div", {
                        className: Q.QV,
                        children: [
                            "string" == typeof A.username
                                ? (0, g.jsx)(f.Text, {
                                      "data-text": A.username,
                                      className: A.usernameClassName,
                                      variant: "text-md/semibold",
                                      style: A.usernameStyle,
                                      children: A.username,
                                  })
                                : A.username,
                            void 0 !== A.decorations &&
                                (0, g.jsx)("div", {
                                    className: Q.bw,
                                    children: A.decorations,
                                }),
                        ],
                    }),
                    null != A.message &&
                        (0, g.jsx)(f.Text, {
                            variant: "text-md/medium",
                            children: A.message,
                        }),
                    A.asset,
                ],
            }),
        ],
    });
}
let H = function (A) {
    let { className: t } = A,
        e = (function (A, t) {
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
                            !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (r[e] = A[e]);
                    return r;
                })(A, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, e = Object.getOwnPropertySymbols(A); r < e.length; r++)
                    (g = e[r]),
                        !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
            return v;
        })(A, ["className"]);
    return (0, g.jsxs)("div", {
        className: v()(Q.kL, t),
        children: [
            (0, g.jsx)(i, {
                className: Q.E6,
                avatar: B.A,
                username: "Roka",
                usernameStyle: {
                    color: "var(--brand-400)",
                },
                message: o.intl.string(w.default.bpghV6),
            }),
            (0, g.jsx)(i, {
                className: Q.E6,
                avatar: h.A,
                username: "hongo",
                usernameStyle: {
                    color: "var(--green-230)",
                },
                message: o.intl.string(w.default.rnpv79),
            }),
            (0, g.jsx)(i, {
                avatar: n.A,
                username: "Lily",
                usernameStyle: {
                    color: "var(--orange-300)",
                },
                message: o.intl.string(w.default.u7tjsh),
                decorations: (0, g.jsx)(
                    C.M,
                    (function (A) {
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
                    })({}, e),
                ),
            }),
            (0, g.jsx)(i, {
                className: Q.E6,
                avatar: l.A,
                username: "sharon",
                usernameStyle: {
                    color: "var(--brand-400)",
                },
                message: o.intl.string(w.default.GlWVJH),
            }),
            (0, g.jsx)(i, {
                className: Q.E6,
                avatar: n.A,
                username: "Lily",
                usernameStyle: {
                    color: "var(--orange-300)",
                },
                message: o.intl.string(w.default.AIp9hh),
            }),
        ],
    });
};
