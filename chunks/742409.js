v.d(g, {
    Z: () => i,
    l: () => s
});
var B = v(200651);
v(192379);
var t = v(120356),
    e = v.n(t),
    f = v(481060),
    r = v(957537),
    C = v(737770),
    h = v(839008),
    n = v(685184),
    w = v(369509),
    Q = v(817239),
    D = v(388032),
    o = v(668271);
function s(A) {
    return (0, B.jsxs)('div', {
        className: e()(o.messageContainer, A.className),
        children: [
            (0, B.jsx)('div', {
                className: o.avatarContainer,
                children: (0, B.jsx)('img', {
                    src: A.avatar,
                    alt: ''.concat(A.username, ' avatar'),
                    width: 40,
                    height: 40
                })
            }),
            (0, B.jsxs)('div', {
                className: o.contentContainer,
                children: [
                    (0, B.jsxs)('div', {
                        className: o.usernameContainer,
                        children: [
                            (0, B.jsx)(f.Text, {
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
                    (0, B.jsx)(f.Text, {
                        variant: 'text-md/medium',
                        children: A.message
                    })
                ]
            })
        ]
    });
}
let i = function (A) {
    return (0, B.jsxs)('div', {
        className: o.container,
        children: [
            (0, B.jsx)(s, {
                className: o.unfocusedMessage,
                avatar: r.Z,
                username: 'Roka',
                usernameStyle: { color: 'var(--brand-400)' },
                message: D.intl.string(Q.default.bpghV1)
            }),
            (0, B.jsx)(s, {
                className: o.unfocusedMessage,
                avatar: C.Z,
                username: 'hongo',
                usernameStyle: { color: 'var(--green-230)' },
                message: D.intl.string(Q.default['rnpv7+'])
            }),
            (0, B.jsx)(s, {
                avatar: h.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: D.intl.string(Q.default.u7tjsr),
                decorations: (0, B.jsx)(
                    w.S,
                    (function (A) {
                        for (var g = 1; g < arguments.length; g++) {
                            var v = null != arguments[g] ? arguments[g] : {},
                                B = Object.keys(v);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (B = B.concat(
                                    Object.getOwnPropertySymbols(v).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(v, A).enumerable;
                                    })
                                )),
                                B.forEach(function (g) {
                                    var B;
                                    (B = v[g]),
                                        g in A
                                            ? Object.defineProperty(A, g, {
                                                  value: B,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (A[g] = B);
                                });
                        }
                        return A;
                    })({}, A)
                )
            }),
            (0, B.jsx)(s, {
                className: o.unfocusedMessage,
                avatar: n.Z,
                username: 'sharon',
                usernameStyle: { color: 'var(--brand-400)' },
                message: D.intl.string(Q.default.GlWVJC)
            }),
            (0, B.jsx)(s, {
                className: o.unfocusedMessage,
                avatar: h.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: D.intl.string(Q.default.AIp9ho)
            })
        ]
    });
};
