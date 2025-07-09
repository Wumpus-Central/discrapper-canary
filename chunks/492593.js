(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    s = n(573385),
    a = n(481060),
    c = n(606318),
    u = n(402235),
    d = n(848697);
function p(e) {
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
function m(e, t) {
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
let g = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: o = !1,
            zalgo: g = !0,
            preview: f = !1,
            disableInteraction: b = !1,
            childrenRepliedMessage: h,
            childrenExecutedCommand: O,
            childrenHeader: y,
            childrenSystemMessage: v,
            childrenButtons: j,
            childrenMessageContent: P,
            childrenAccessories: x,
            messageRef: C,
            focusProps: w = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: S,
            isSystemMessage: E,
            hasReply: N,
            author: T,
            onMouseEnter: Z,
            onMouseLeave: R
        } = e,
        _ = (function (e, t) {
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
    let I = (0, u.ZP)(null == T ? void 0 : T.guildId, null == T ? void 0 : T.authorId) && (0, c.S2)(T),
        [k, M] = l.useState(!1),
        D = l.useCallback(
            (e) => {
                (M(!0), null == Z || Z(e));
            },
            [Z]
        ),
        A = l.useCallback(
            (e) => {
                (M(!1), null == R || R(e));
            },
            [R]
        ),
        L = (0, r.jsx)(s.d.Provider, {
            value: {
                animate: k,
                setAnimate: M
            },
            children: (0, r.jsx)(
                a.tEY,
                m(p({}, w), {
                    children: (0, r.jsxs)(
                        'div',
                        m(
                            p(
                                {
                                    className: i()(t, {
                                        [d.gradient]: I,
                                        [d.wrapper]: !0,
                                        [d.contentOnly]: o,
                                        [d.compact]: n,
                                        [d.preview]: f,
                                        [d.cozy]: !n,
                                        [d.zalgo]: g,
                                        [d.hasThread]: S,
                                        [d.isSystemMessage]: E,
                                        [d.hasReply]: N
                                    }),
                                    ref: C
                                },
                                _
                            ),
                            {
                                role: 'article',
                                onMouseEnter: D,
                                onMouseLeave: A,
                                children: [
                                    h,
                                    O,
                                    (0, r.jsxs)('div', {
                                        className: d.contents,
                                        children: [v, y, null == v && P]
                                    }),
                                    x,
                                    null != j
                                        ? (0, r.jsx)('div', {
                                              className: d.buttonContainer,
                                              children: j
                                          })
                                        : null
                                ]
                            }
                        )
                    )
                })
            )
        });
    return b ? (0, r.jsx)(a.Rny, { children: L }) : L;
};
