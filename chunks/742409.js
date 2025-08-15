t.d(e, {
    Z: () => d,
    l: () => h,
});
var n = t(951288);
t(647438);
var r = t(120356),
    l = t.n(r),
    i = t(481060),
    a = t(957537),
    s = t(737770),
    o = t(839008),
    g = t(685184),
    c = t(369509),
    f = t(899926),
    v = t(388032),
    u = t(215486);
function h(A) {
    return (0, n.jsxs)("div", {
        className: l()(u.messageContainer, A.className),
        children: [
            (0, n.jsx)("div", {
                className: u.avatarContainer,
                children:
                    "string" == typeof A.avatar
                        ? (0, n.jsx)("img", {
                              className: u.avatar,
                              src: A.avatar,
                              alt: "".concat(A.username, " avatar"),
                              width: 40,
                              height: 40,
                          })
                        : A.avatar,
            }),
            (0, n.jsxs)("div", {
                className: u.contentContainer,
                children: [
                    (0, n.jsxs)("div", {
                        className: u.usernameContainer,
                        children: [
                            "string" == typeof A.username
                                ? (0, n.jsx)(i.Text, {
                                      "data-text": A.username,
                                      className: A.usernameClassName,
                                      variant: "text-md/semibold",
                                      style: A.usernameStyle,
                                      children: A.username,
                                  })
                                : A.username,
                            void 0 !== A.decorations &&
                                (0, n.jsx)("div", {
                                    className: u.decorationsContainer,
                                    children: A.decorations,
                                }),
                        ],
                    }),
                    null != A.message &&
                        (0, n.jsx)(i.Text, {
                            variant: "text-md/medium",
                            children: A.message,
                        }),
                    A.asset,
                ],
            }),
        ],
    });
}
let d = function (A) {
    var { className: e } = A,
        t = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = (function (A, e) {
                    if (null == A) return {};
                    var t,
                        n,
                        r = {},
                        l = Object.keys(A);
                    for (n = 0; n < l.length; n++) (t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]);
                    return r;
                })(A, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(A);
                for (n = 0; n < l.length; n++)
                    (t = l[n]),
                        !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]);
            }
            return r;
        })(A, ["className"]);
    return (0, n.jsxs)("div", {
        className: l()(u.container, e),
        children: [
            (0, n.jsx)(h, {
                className: u.unfocusedMessage,
                avatar: a.Z,
                username: "Roka",
                usernameStyle: { color: "var(--brand-400)" },
                message: v.intl.string(f.default.bpghV1),
            }),
            (0, n.jsx)(h, {
                className: u.unfocusedMessage,
                avatar: s.Z,
                username: "hongo",
                usernameStyle: { color: "var(--green-230)" },
                message: v.intl.string(f.default["rnpv7+"]),
            }),
            (0, n.jsx)(h, {
                avatar: o.Z,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: v.intl.string(f.default.u7tjsr),
                decorations: (0, n.jsx)(
                    c.S,
                    (function (A) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(t, A).enumerable;
                                    }),
                                )),
                                n.forEach(function (e) {
                                    var n;
                                    (n = t[e]),
                                        e in A
                                            ? Object.defineProperty(A, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (A[e] = n);
                                });
                        }
                        return A;
                    })({}, t),
                ),
            }),
            (0, n.jsx)(h, {
                className: u.unfocusedMessage,
                avatar: g.Z,
                username: "sharon",
                usernameStyle: { color: "var(--brand-400)" },
                message: v.intl.string(f.default.GlWVJC),
            }),
            (0, n.jsx)(h, {
                className: u.unfocusedMessage,
                avatar: o.Z,
                username: "Lily",
                usernameStyle: { color: "var(--orange-300)" },
                message: v.intl.string(f.default.AIp9ho),
            }),
        ],
    });
};
