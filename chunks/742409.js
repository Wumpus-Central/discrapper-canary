v.d(g, {
    Z: () => i,
    l: () => l
});
var t = v(255367);
v(73800);
var B = v(120356),
    e = v.n(B),
    f = v(481060),
    r = v(957537),
    C = v(737770),
    h = v(839008),
    w = v(685184),
    Q = v(369509),
    n = v(195196),
    D = v(388032),
    o = v(668271);
function l(A) {
    return (0, t.jsxs)('div', {
        className: e()(o.messageContainer, A.className),
        children: [
            (0, t.jsx)('div', {
                className: o.avatarContainer,
                children:
                    'string' == typeof A.avatar
                        ? (0, t.jsx)('img', {
                              className: o.avatar,
                              src: A.avatar,
                              alt: ''.concat(A.username, ' avatar'),
                              width: 40,
                              height: 40
                          })
                        : A.avatar
            }),
            (0, t.jsxs)('div', {
                className: o.contentContainer,
                children: [
                    (0, t.jsxs)('div', {
                        className: o.usernameContainer,
                        children: [
                            'string' == typeof A.username
                                ? (0, t.jsx)(f.Text, {
                                      'data-text': A.username,
                                      className: A.usernameClassName,
                                      variant: 'text-md/semibold',
                                      style: A.usernameStyle,
                                      children: A.username
                                  })
                                : A.username,
                            void 0 !== A.decorations &&
                                (0, t.jsx)('div', {
                                    className: o.decorationsContainer,
                                    children: A.decorations
                                })
                        ]
                    }),
                    (0, t.jsx)(f.Text, {
                        variant: 'text-md/medium',
                        children: A.message
                    })
                ]
            })
        ]
    });
}
let i = function (A) {
    var { className: g } = A,
        v = (function (A, g) {
            if (null == A) return {};
            var v,
                t,
                B = (function (A, g) {
                    if (null == A) return {};
                    var v,
                        t,
                        B = {},
                        e = Object.keys(A);
                    for (t = 0; t < e.length; t++) ((v = e[t]), g.indexOf(v) >= 0 || (B[v] = A[v]));
                    return B;
                })(A, g);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(A);
                for (t = 0; t < e.length; t++) ((v = e[t]), !(g.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(A, v) && (B[v] = A[v]));
            }
            return B;
        })(A, ['className']);
    return (0, t.jsxs)('div', {
        className: e()(o.container, g),
        children: [
            (0, t.jsx)(l, {
                className: o.unfocusedMessage,
                avatar: r.Z,
                username: 'Roka',
                usernameStyle: { color: 'var(--brand-400)' },
                message: D.intl.string(n.default.bpghV1)
            }),
            (0, t.jsx)(l, {
                className: o.unfocusedMessage,
                avatar: C.Z,
                username: 'hongo',
                usernameStyle: { color: 'var(--green-230)' },
                message: D.intl.string(n.default['rnpv7+'])
            }),
            (0, t.jsx)(l, {
                avatar: h.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: D.intl.string(n.default.u7tjsr),
                decorations: (0, t.jsx)(
                    Q.S,
                    (function (A) {
                        for (var g = 1; g < arguments.length; g++) {
                            var v = null != arguments[g] ? arguments[g] : {},
                                t = Object.keys(v);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (t = t.concat(
                                    Object.getOwnPropertySymbols(v).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(v, A).enumerable;
                                    })
                                )),
                                t.forEach(function (g) {
                                    var t;
                                    ((t = v[g]),
                                        g in A
                                            ? Object.defineProperty(A, g, {
                                                  value: t,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (A[g] = t));
                                }));
                        }
                        return A;
                    })({}, v)
                )
            }),
            (0, t.jsx)(l, {
                className: o.unfocusedMessage,
                avatar: w.Z,
                username: 'sharon',
                usernameStyle: { color: 'var(--brand-400)' },
                message: D.intl.string(n.default.GlWVJC)
            }),
            (0, t.jsx)(l, {
                className: o.unfocusedMessage,
                avatar: h.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: D.intl.string(n.default.AIp9ho)
            })
        ]
    });
};
