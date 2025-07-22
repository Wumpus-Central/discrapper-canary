t.d(e, {
    Z: () => E,
    l: () => u
});
var n = t(255367);
t(73800);
var r = t(120356),
    l = t.n(r),
    i = t(481060),
    s = t(957537),
    a = t(737770),
    o = t(839008),
    g = t(685184),
    v = t(369509),
    f = t(195196),
    c = t(388032),
    h = t(668271);
function u(A) {
    return (0, n.jsxs)('div', {
        className: l()(h.messageContainer, A.className),
        children: [
            (0, n.jsx)('div', {
                className: h.avatarContainer,
                children:
                    'string' == typeof A.avatar
                        ? (0, n.jsx)('img', {
                              className: h.avatar,
                              src: A.avatar,
                              alt: ''.concat(A.username, ' avatar'),
                              width: 40,
                              height: 40
                          })
                        : A.avatar
            }),
            (0, n.jsxs)('div', {
                className: h.contentContainer,
                children: [
                    (0, n.jsxs)('div', {
                        className: h.usernameContainer,
                        children: [
                            'string' == typeof A.username
                                ? (0, n.jsx)(i.Text, {
                                      'data-text': A.username,
                                      className: A.usernameClassName,
                                      variant: 'text-md/semibold',
                                      style: A.usernameStyle,
                                      children: A.username
                                  })
                                : A.username,
                            void 0 !== A.decorations &&
                                (0, n.jsx)('div', {
                                    className: h.decorationsContainer,
                                    children: A.decorations
                                })
                        ]
                    }),
                    null != A.message &&
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/medium',
                            children: A.message
                        }),
                    A.asset
                ]
            })
        ]
    });
}
let E = function (A) {
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
                    for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
                    return r;
                })(A, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(A);
                for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
            }
            return r;
        })(A, ['className']);
    return (0, n.jsxs)('div', {
        className: l()(h.container, e),
        children: [
            (0, n.jsx)(u, {
                className: h.unfocusedMessage,
                avatar: s.Z,
                username: 'Roka',
                usernameStyle: { color: 'var(--brand-400)' },
                message: c.intl.string(f.default.bpghV1)
            }),
            (0, n.jsx)(u, {
                className: h.unfocusedMessage,
                avatar: a.Z,
                username: 'hongo',
                usernameStyle: { color: 'var(--green-230)' },
                message: c.intl.string(f.default['rnpv7+'])
            }),
            (0, n.jsx)(u, {
                avatar: o.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: c.intl.string(f.default.u7tjsr),
                decorations: (0, n.jsx)(
                    v.S,
                    (function (A) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {},
                                n = Object.keys(t);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (A) {
                                        return Object.getOwnPropertyDescriptor(t, A).enumerable;
                                    })
                                )),
                                n.forEach(function (e) {
                                    var n;
                                    ((n = t[e]),
                                        e in A
                                            ? Object.defineProperty(A, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (A[e] = n));
                                }));
                        }
                        return A;
                    })({}, t)
                )
            }),
            (0, n.jsx)(u, {
                className: h.unfocusedMessage,
                avatar: g.Z,
                username: 'sharon',
                usernameStyle: { color: 'var(--brand-400)' },
                message: c.intl.string(f.default.GlWVJC)
            }),
            (0, n.jsx)(u, {
                className: h.unfocusedMessage,
                avatar: o.Z,
                username: 'Lily',
                usernameStyle: { color: 'var(--orange-300)' },
                message: c.intl.string(f.default.AIp9ho)
            })
        ]
    });
};
