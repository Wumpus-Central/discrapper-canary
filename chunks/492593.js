(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(573385),
    c = n(481060),
    u = n(606318),
    d = n(402235),
    f = n(485386),
    _ = n(848697);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let y = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: a = !1,
            zalgo: p = !0,
            preview: m = !1,
            disableInteraction: b = !1,
            childrenRepliedMessage: y,
            childrenExecutedCommand: O,
            childrenHeader: v,
            childrenSystemMessage: I,
            childrenButtons: T,
            childrenMessageContent: S,
            childrenAccessories: A,
            messageRef: N,
            focusProps: C = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: w,
            isSystemMessage: R,
            hasReply: P,
            author: D,
            onMouseEnter: L,
            onMouseLeave: x
        } = e,
        k = E(e, ['className', 'compact', 'contentOnly', 'zalgo', 'preview', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply', 'author', 'onMouseEnter', 'onMouseLeave']);
    let j = (0, s.e7)([f.Z], () => ((null == D ? void 0 : D.guildId) == null || (null == D ? void 0 : D.colorRoleId) == null ? null : f.Z.getRole(D.guildId, D.colorRoleId))),
        M = (0, d.yH)(null == D ? void 0 : D.guildId, j) && (0, u.S2)(D),
        [U, G] = i.useState(!1),
        B = i.useCallback(
            (e) => {
                (G(!0), null == L || L(e));
            },
            [L]
        ),
        Z = i.useCallback(
            (e) => {
                (G(!1), null == x || x(e));
            },
            [x]
        ),
        F = (0, r.jsx)(l.d.Provider, {
            value: {
                animate: U,
                setAnimate: G
            },
            children: (0, r.jsx)(
                c.tEY,
                g(h({}, C), {
                    children: (0, r.jsxs)(
                        'div',
                        g(
                            h(
                                {
                                    className: o()(t, {
                                        [_.gradient]: M,
                                        [_.wrapper]: !0,
                                        [_.contentOnly]: a,
                                        [_.compact]: n,
                                        [_.preview]: m,
                                        [_.cozy]: !n,
                                        [_.zalgo]: p,
                                        [_.hasThread]: w,
                                        [_.isSystemMessage]: R,
                                        [_.hasReply]: P
                                    }),
                                    ref: N
                                },
                                k
                            ),
                            {
                                role: 'article',
                                onMouseEnter: B,
                                onMouseLeave: Z,
                                children: [
                                    y,
                                    O,
                                    (0, r.jsxs)('div', {
                                        className: _.contents,
                                        children: [I, v, null == I && S]
                                    }),
                                    A,
                                    null != T
                                        ? (0, r.jsx)('div', {
                                              className: _.buttonContainer,
                                              children: T
                                          })
                                        : null
                                ]
                            }
                        )
                    )
                })
            )
        });
    return b ? (0, r.jsx)(c.Rny, { children: F }) : F;
};
