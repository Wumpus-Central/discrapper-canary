n.d(t, { Z: () => p });
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(481060),
    c = n(477747),
    l = n(848697);
function u(e) {
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
function d(e, t) {
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
let p = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: a = !1,
            zalgo: p = !0,
            disableInteraction: g = !1,
            childrenRepliedMessage: m,
            childrenExecutedCommand: f,
            childrenHeader: _,
            childrenSystemMessage: b,
            childrenButtons: h,
            childrenMessageContent: y,
            childrenAccessories: v,
            messageRef: O,
            focusProps: x = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: C,
            isSystemMessage: j,
            hasReply: P,
            authorHasGradientRole: T = !1,
            guildId: N
        } = e,
        I = (function (e, t) {
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
        })(e, ['className', 'compact', 'contentOnly', 'zalgo', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply', 'authorHasGradientRole', 'guildId']);
    let w = (0, c.Z)(N, 'BaseMessage'),
        S = !!o.isValidElement(_) && !!w && T,
        k = (0, r.jsx)(
            s.tEY,
            d(u({}, x), {
                children: (0, r.jsxs)(
                    'div',
                    d(
                        u(
                            {
                                className: i()(t, {
                                    [l.gradient]: S,
                                    [l.wrapper]: !0,
                                    [l.contentOnly]: a,
                                    [l.compact]: n,
                                    [l.cozy]: !n,
                                    [l.zalgo]: p,
                                    [l.hasThread]: C,
                                    [l.isSystemMessage]: j,
                                    [l.hasReply]: P
                                }),
                                ref: O
                            },
                            I
                        ),
                        {
                            role: 'article',
                            children: [
                                m,
                                f,
                                (0, r.jsxs)('div', {
                                    className: l.contents,
                                    children: [b, _, null == b && y]
                                }),
                                v,
                                null != h
                                    ? (0, r.jsx)('div', {
                                          className: l.buttonContainer,
                                          children: h
                                      })
                                    : null
                            ]
                        }
                    )
                )
            })
        );
    return g ? (0, r.jsx)(s.Rny, { children: k }) : k;
};
