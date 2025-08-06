e.d(t, {
    Z: () => s,
    l: () => w,
});
var r = e(255367);
e(73800);
var g = e(120356),
    v = e.n(g),
    n = e(481060),
    f = e(957537),
    B = e(737770),
    l = e(839008),
    h = e(685184),
    i = e(369509),
    o = e(195196),
    C = e(388032),
    a = e(668271);
function w(A) {
    return (0, r.jsxs)("div", {
        className: v()(a.messageContainer, A.className),
        children: [
            (0, r.jsx)("div", {
                className: a.avatarContainer,
                children:
                    "string" == typeof A.avatar
                        ? (0, r.jsx)("img", {
                              className: a.avatar,
                              src: A.avatar,
                              alt: "".concat(A.username, " avatar"),
                              width: 40,
                              height: 40,
                          })
                        : A.avatar,
            }),
            (0, r.jsxs)("div", {
                className: a.contentContainer,
                children: [
                    (0, r.jsxs)("div", {
                        className: a.usernameContainer,
                        children: [
                            "string" == typeof A.username
                                ? (0, r.jsx)(n.Text, {
                                      "data-text": A.username,
                                      className: A.usernameClassName,
                                      variant: "text-md/semibold",
                                      style: A.usernameStyle,
                                      children: A.username,
                                  })
                                : A.username,
                            void 0 !== A.decorations &&
                                (0, r.jsx)("div", {
                                    className: a.decorationsContainer,
                                    children: A.decorations,
                                }),
                        ],
                    }),
                    null != A.message &&
                        (0, r.jsx)(n.Text, {
                            variant: "text-md/medium",
                            children: A.message,
                        }),
                    A.asset,
                ],
            }),
        ],
    });
}
let s = function (A) {
    var { className: t } = A,
        e = (function (A, t) {
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
        })(A, ["className"]);
    return (0, r.jsxs)("div", {
        className: v()(a.container, t),
        children: [
            (0, r.jsx)(w, {
                className: a.unfocusedMessage,
                avatar: f.Z,
                username: "Roka",
                usernameStyle: { color: "var(--brand-400)" },
                message: C.intl.string(o.default.bpghV1),
            }),
            (0, r.jsx)(w, {
                className: a.unfocusedMessage,
                avatar: B.Z,
                username: "hongo",
                usernameStyle: { color: "var(--green-230)" },
                message: C.intl.string(o.default["rnpv7+"]),
            }),
            (0, r.jsx)(w, {
                avatar: l.Z,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: C.intl.string(o.default.u7tjsr),
                decorations: (0, r.jsx)(
                    i.S,
                    (function (A) {
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
                    })({}, e),
                ),
            }),
            (0, r.jsx)(w, {
                className: a.unfocusedMessage,
                avatar: h.Z,
                username: "sharon",
                usernameStyle: { color: "var(--brand-400)" },
                message: C.intl.string(o.default.GlWVJC),
            }),
            (0, r.jsx)(w, {
                className: a.unfocusedMessage,
                avatar: l.Z,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: C.intl.string(o.default.AIp9ho),
            }),
        ],
    });
};
