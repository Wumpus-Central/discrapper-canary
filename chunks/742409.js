B.d(g, {
    Z: () => d,
    v: () => t
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
    r = B(817239),
    e = B(388032),
    o = B(668271);
function t(A) {
    return (0, C.jsxs)('div', {
        className: w()(o.messageContainer, A.className),
        children: [
            (0, C.jsx)('div', {
                className: o.avatarContainer,
                children: (0, C.jsx)('img', {
                    src: A.avatar,
                    alt: ''.concat(A.username, ' avatar'),
                    width: 40,
                    height: 40
                })
            }),
            (0, C.jsxs)('div', {
                className: o.contentContainer,
                children: [
                    (0, C.jsxs)('div', {
                        className: o.usernameContainer,
                        children: [
                            (0, C.jsx)(D.Text, {
                                variant: 'text-md/semibold',
                                style: A.usernameStyle,
                                children: A.username
                            }),
                            void 0 !== A.decorations &&
                                (0, C.jsx)('div', {
                                    className: o.decorationsContainer,
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
        className: o.container,
        children: [
            (0, C.jsx)(t, {
                className: o.unfocusedMessage,
                avatar: f.Z,
                username: 'Roka',
                usernameStyle: { color: 'var(--brand-400)' },
                message: e.NW.string(r.Z.bpghV1)
            }),
            (0, C.jsx)(t, {
                className: o.unfocusedMessage,
                avatar: E.Z,
                username: 'hongo',
                usernameStyle: { color: 'var(--green-230)' },
                message: e.NW.string(r.Z['rnpv7+'])
            }),
            (0, C.jsx)(t, {
                avatar: v.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: e.NW.string(r.Z.u7tjsr),
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
            (0, C.jsx)(t, {
                className: o.unfocusedMessage,
                avatar: I.Z,
                username: 'sharon',
                usernameStyle: { color: 'var(--brand-400)' },
                message: e.NW.string(r.Z.GlWVJC)
            }),
            (0, C.jsx)(t, {
                className: o.unfocusedMessage,
                avatar: v.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: e.NW.string(r.Z.AIp9ho)
            })
        ]
    });
};
