(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(442837),
    s = n(573385),
    c = n(481060),
    u = n(606318),
    d = n(402235),
    p = n(485386),
    m = n(848697);
function g(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: o = !1,
            zalgo: b = !0,
            preview: h = !1,
            disableInteraction: O = !1,
            childrenRepliedMessage: y,
            childrenExecutedCommand: v,
            childrenHeader: j,
            childrenSystemMessage: P,
            childrenButtons: x,
            childrenMessageContent: w,
            childrenAccessories: C,
            messageRef: S,
            focusProps: E = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: N,
            isSystemMessage: Z,
            hasReply: R,
            author: T,
            onMouseEnter: I,
            onMouseLeave: _
        } = e,
        k = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
            }
            return l;
        })(e, ['className', 'compact', 'contentOnly', 'zalgo', 'preview', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply', 'author', 'onMouseEnter', 'onMouseLeave']);
    let M = (0, a.e7)([p.Z], () => ((null == T ? void 0 : T.guildId) == null || (null == T ? void 0 : T.colorRoleId) == null ? null : p.Z.getRole(T.guildId, T.colorRoleId))),
        D = (0, d.yH)(null == T ? void 0 : T.guildId, M) && (0, u.S2)(T),
        [A, L] = l.useState(!1),
        G = l.useCallback(
            (e) => {
                (L(!0), null == I || I(e));
            },
            [I]
        ),
        U = l.useCallback(
            (e) => {
                (L(!1), null == _ || _(e));
            },
            [_]
        ),
        B = (0, r.jsx)(s.d.Provider, {
            value: {
                animate: A,
                setAnimate: L
            },
            children: (0, r.jsx)(
                c.tEY,
                f(g({}, E), {
                    children: (0, r.jsxs)(
                        'div',
                        f(
                            g(
                                {
                                    className: i()(t, {
                                        [m.gradient]: D,
                                        [m.wrapper]: !0,
                                        [m.contentOnly]: o,
                                        [m.compact]: n,
                                        [m.preview]: h,
                                        [m.cozy]: !n,
                                        [m.zalgo]: b,
                                        [m.hasThread]: N,
                                        [m.isSystemMessage]: Z,
                                        [m.hasReply]: R
                                    }),
                                    ref: S
                                },
                                k
                            ),
                            {
                                role: 'article',
                                onMouseEnter: G,
                                onMouseLeave: U,
                                children: [
                                    y,
                                    v,
                                    (0, r.jsxs)('div', {
                                        className: m.contents,
                                        children: [P, j, null == P && w]
                                    }),
                                    C,
                                    null != x
                                        ? (0, r.jsx)('div', {
                                              className: m.buttonContainer,
                                              children: x
                                          })
                                        : null
                                ]
                            }
                        )
                    )
                })
            )
        });
    return O ? (0, r.jsx)(c.Rny, { children: B }) : B;
};
