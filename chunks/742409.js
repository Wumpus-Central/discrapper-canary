g.d(v, {
    Z: () => E,
    l: () => M
});
var B = g(255367);
g(73800);
var t = g(120356),
    f = g.n(t),
    C = g(481060),
    e = g(957537),
    r = g(737770),
    Q = g(839008),
    w = g(685184),
    h = g(369509),
    n = g(941469),
    D = g(388032),
    o = g(668271);
function M(A) {
    return (0, B.jsxs)('div', {
        className: f()(o.messageContainer, A.className),
        children: [
            (0, B.jsx)('div', {
                className: o.avatarContainer,
                children:
                    'string' == typeof A.avatar
                        ? (0, B.jsx)('img', {
                              className: o.avatar,
                              src: A.avatar,
                              alt: ''.concat(A.username, ' avatar'),
                              width: 40,
                              height: 40
                          })
                        : A.avatar
            }),
            (0, B.jsxs)('div', {
                className: o.contentContainer,
                children: [
                    (0, B.jsxs)('div', {
                        className: o.usernameContainer,
                        children: [
                            (0, B.jsx)(C.Text, {
                                'data-text': A.username,
                                className: A.usernameClassName,
                                variant: 'text-md/semibold',
                                style: A.usernameStyle,
                                children: A.username
                            }),
                            void 0 !== A.decorations &&
                                (0, B.jsx)('div', {
                                    className: o.decorationsContainer,
                                    children: A.decorations
                                })
                        ]
                    }),
                    (0, B.jsx)(C.Text, {
                        variant: 'text-md/medium',
                        children: A.message
                    })
                ]
            })
        ]
    });
}
let E = function (A) {
    return (0, B.jsxs)('div', {
        className: o.container,
        children: [
            (0, B.jsx)(M, {
                className: o.unfocusedMessage,
                avatar: e.Z,
                username: 'Roka',
                usernameStyle: { color: 'var(--brand-400)' },
                message: D.intl.string(n.default.bpghV1)
            }),
            (0, B.jsx)(M, {
                className: o.unfocusedMessage,
                avatar: r.Z,
                username: 'hongo',
                usernameStyle: { color: 'var(--green-230)' },
                message: D.intl.string(n.default['rnpv7+'])
            }),
            (0, B.jsx)(M, {
                avatar: Q.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: D.intl.string(n.default.u7tjsr),
                decorations: (0, B.jsx)(
                    h.S,
                    (function (A) {
                        for (var v = 1; v < arguments.length; v++) {
                            var g = null != arguments[v] ? arguments[v] : {},
                                B = Object.keys(g);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (B = B.concat(
                                    Object.getOwnPropertySymbols(g).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(g, A).enumerable;
                                    })
                                )),
                                B.forEach(function (v) {
                                    var B;
                                    (B = g[v]),
                                        v in A
                                            ? Object.defineProperty(A, v, {
                                                  value: B,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (A[v] = B);
                                });
                        }
                        return A;
                    })({}, A)
                )
            }),
            (0, B.jsx)(M, {
                className: o.unfocusedMessage,
                avatar: w.Z,
                username: 'sharon',
                usernameStyle: { color: 'var(--brand-400)' },
                message: D.intl.string(n.default.GlWVJC)
            }),
            (0, B.jsx)(M, {
                className: o.unfocusedMessage,
                avatar: Q.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: D.intl.string(n.default.AIp9ho)
            })
        ]
    });
};
