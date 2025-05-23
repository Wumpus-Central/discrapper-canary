n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(573385),
    a = n(481060),
    c = n(477747),
    u = n(161441);
function d(e) {
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
function p(e, t) {
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
let m = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: l = !1,
            zalgo: m = !0,
            preview: g = !1,
            disableInteraction: f = !1,
            childrenRepliedMessage: b,
            childrenExecutedCommand: h,
            childrenHeader: O,
            childrenSystemMessage: y,
            childrenButtons: j,
            childrenMessageContent: v,
            childrenAccessories: P,
            messageRef: x,
            focusProps: C = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: w,
            isSystemMessage: S,
            hasReply: N,
            authorHasGradientRole: E = !1,
            guildId: R,
            onMouseEnter: T,
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
        })(e, ['className', 'compact', 'contentOnly', 'zalgo', 'preview', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply', 'authorHasGradientRole', 'guildId', 'onMouseEnter', 'onMouseLeave']);
    let k = (0, c.Z)(R, 'BaseMessage'),
        [I, M] = o.useState(!1),
        D = o.useCallback(
            (e) => {
                M(!0), null == T || T(e);
            },
            [T]
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
                p(d({}, C), {
                    children: (0, r.jsxs)(
                        'div',
                        p(
                            d(
                                {
                                    className: i()(t, {
                                        [u.gradient]: !!k && E,
                                        [u.wrapper]: !0,
                                        [u.contentOnly]: l,
                                        [u.compact]: n,
                                        [u.preview]: g,
                                        [u.cozy]: !n,
                                        [u.zalgo]: m,
                                        [u.hasThread]: w,
                                        [u.isSystemMessage]: S,
                                        [u.hasReply]: N
                                    }),
                                    ref: x
                                },
                                _
                            ),
                            {
                                role: 'article',
                                onMouseEnter: D,
                                onMouseLeave: A,
                                children: [
                                    b,
                                    h,
                                    (0, r.jsxs)('div', {
                                        className: u.contents,
                                        children: [y, O, null == y && v]
                                    }),
                                    P,
                                    null != j
                                        ? (0, r.jsx)('div', {
                                              className: u.buttonContainer,
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
    return f ? (0, r.jsx)(a.Rny, { children: L }) : L;
};
