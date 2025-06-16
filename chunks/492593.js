n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(573385),
    a = n(481060),
    c = n(606318),
    u = n(402235),
    d = n(848697);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
            contentOnly: l = !1,
            zalgo: g = !0,
            preview: f = !1,
            disableInteraction: b = !1,
            childrenRepliedMessage: h,
            childrenExecutedCommand: O,
            childrenHeader: y,
            childrenSystemMessage: j,
            childrenButtons: v,
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
            isSystemMessage: N,
            hasReply: E,
            author: T,
            onMouseEnter: R,
            onMouseLeave: Z
        } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['className', 'compact', 'contentOnly', 'zalgo', 'preview', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply', 'author', 'onMouseEnter', 'onMouseLeave']);
    let k = (0, u.Z)(null == T ? void 0 : T.guildId, 'BaseMessage') && (0, c.S2)(T),
        [I, M] = o.useState(!1),
        D = o.useCallback(
            (e) => {
                M(!0), null == R || R(e);
            },
            [R]
        ),
        A = o.useCallback(
            (e) => {
                M(!1), null == Z || Z(e);
            },
            [Z]
        ),
        L = (0, r.jsx)(s.d.Provider, {
            value: {
                animate: I,
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
                                        [d.gradient]: k,
                                        [d.wrapper]: !0,
                                        [d.contentOnly]: l,
                                        [d.compact]: n,
                                        [d.preview]: f,
                                        [d.cozy]: !n,
                                        [d.zalgo]: g,
                                        [d.hasThread]: S,
                                        [d.isSystemMessage]: N,
                                        [d.hasReply]: E
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
                                        children: [j, y, null == j && P]
                                    }),
                                    x,
                                    null != v
                                        ? (0, r.jsx)('div', {
                                              className: d.buttonContainer,
                                              children: v
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
