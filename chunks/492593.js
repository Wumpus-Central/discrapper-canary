n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    o = n(73800),
    a = n(120356),
    i = n.n(a),
    l = n(573385),
    s = n(481060),
    c = n(477747),
    u = n(848697);
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
let g = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: a = !1,
            zalgo: g = !0,
            preview: m = !1,
            disableInteraction: f = !1,
            childrenRepliedMessage: b,
            childrenExecutedCommand: h,
            childrenHeader: _,
            childrenSystemMessage: y,
            childrenButtons: v,
            childrenMessageContent: O,
            childrenAccessories: j,
            messageRef: x,
            focusProps: C = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: P,
            isSystemMessage: T,
            hasReply: S,
            authorHasGradientRole: w = !1,
            guildId: I,
            onMouseEnter: N,
            onMouseLeave: k
        } = e,
        R = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['className', 'compact', 'contentOnly', 'zalgo', 'preview', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply', 'authorHasGradientRole', 'guildId', 'onMouseEnter', 'onMouseLeave']);
    let E = (0, c.Z)(I, 'BaseMessage'),
        [M, Z] = o.useState(!1),
        A = o.useCallback(
            (e) => {
                Z(!0), null == N || N(e);
            },
            [N]
        ),
        D = o.useCallback(
            (e) => {
                Z(!1), null == k || k(e);
            },
            [k]
        ),
        L = (0, r.jsx)(l.d.Provider, {
            value: {
                animate: M,
                setAnimate: Z
            },
            children: (0, r.jsx)(
                s.tEY,
                p(d({}, C), {
                    children: (0, r.jsxs)(
                        'div',
                        p(
                            d(
                                {
                                    className: i()(t, {
                                        [u.gradient]: !!E && w,
                                        [u.wrapper]: !0,
                                        [u.contentOnly]: a,
                                        [u.compact]: n,
                                        [u.preview]: m,
                                        [u.cozy]: !n,
                                        [u.zalgo]: g,
                                        [u.hasThread]: P,
                                        [u.isSystemMessage]: T,
                                        [u.hasReply]: S
                                    }),
                                    ref: x
                                },
                                R
                            ),
                            {
                                role: 'article',
                                onMouseEnter: A,
                                onMouseLeave: D,
                                children: [
                                    b,
                                    h,
                                    (0, r.jsxs)('div', {
                                        className: u.contents,
                                        children: [y, _, null == y && O]
                                    }),
                                    j,
                                    null != v
                                        ? (0, r.jsx)('div', {
                                              className: u.buttonContainer,
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
    return f ? (0, r.jsx)(s.Rny, { children: L }) : L;
};
