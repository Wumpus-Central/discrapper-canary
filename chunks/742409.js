B.d(g, {
    Z: () => d,
    l: () => n
});
var C = B(200651);
B(192379);
var Q = B(120356),
    w = B.n(Q),
    D = B(481060),
    f = B(957537),
    E = B(737770),
    v = B(839008),
    I = B(685184),
    P = B(369509),
    e = B(817239),
    r = B(388032),
    t = B(668271);
function n(A) {
    return (0, C.jsxs)('div', {
        className: w()(t.messageContainer, A.className),
        children: [
            (0, C.jsx)('div', {
                className: t.avatarContainer,
                children: (0, C.jsx)('img', {
                    src: A.avatar,
                    alt: ''.concat(A.username, ' avatar'),
                    width: 40,
                    height: 40
                })
            }),
            (0, C.jsxs)('div', {
                className: t.contentContainer,
                children: [
                    (0, C.jsxs)('div', {
                        className: t.usernameContainer,
                        children: [
                            (0, C.jsx)(D.Text, {
                                'data-text': A.username,
                                className: A.usernameClassName,
                                variant: 'text-md/semibold',
                                style: A.usernameStyle,
                                children: A.username
                            }),
                            void 0 !== A.decorations &&
                                (0, C.jsx)('div', {
                                    className: t.decorationsContainer,
                                    children: A.decorations
                                })
                        ]
                    }),
                    (0, C.jsx)(D.Text, {
                        variant: 'text-md/medium',
                        children: A.message
                    })
                ]
            })
        ]
    });
}
let d = function (A) {
    return (0, C.jsxs)('div', {
        className: t.container,
        children: [
            (0, C.jsx)(n, {
                className: t.unfocusedMessage,
                avatar: f.Z,
                username: 'Roka',
                usernameStyle: { color: 'var(--brand-400)' },
                message: r.intl.string(e.default.bpghV1)
            }),
            (0, C.jsx)(n, {
                className: t.unfocusedMessage,
                avatar: E.Z,
                username: 'hongo',
                usernameStyle: { color: 'var(--green-230)' },
                message: r.intl.string(e.default['rnpv7+'])
            }),
            (0, C.jsx)(n, {
                avatar: v.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: r.intl.string(e.default.u7tjsr),
                decorations: (0, C.jsx)(
                    P.S,
                    (function (A) {
                        for (var g = 1; g < arguments.length; g++) {
                            var B = null != arguments[g] ? arguments[g] : {},
                                C = Object.keys(B);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (C = C.concat(
                                    Object.getOwnPropertySymbols(B).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(B, A).enumerable;
                                    })
                                )),
                                C.forEach(function (g) {
                                    var C;
                                    (C = B[g]),
                                        g in A
                                            ? Object.defineProperty(A, g, {
                                                  value: C,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (A[g] = C);
                                });
                        }
                        return A;
                    })({}, A)
                )
            }),
            (0, C.jsx)(n, {
                className: t.unfocusedMessage,
                avatar: I.Z,
                username: 'sharon',
                usernameStyle: { color: 'var(--brand-400)' },
                message: r.intl.string(e.default.GlWVJC)
            }),
            (0, C.jsx)(n, {
                className: t.unfocusedMessage,
                avatar: v.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: r.intl.string(e.default.AIp9ho)
            })
        ]
    });
};
