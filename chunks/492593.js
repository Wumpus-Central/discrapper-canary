n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    i = n(481060),
    s = n(477747),
    l = n(848697);
function c(e) {
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
function u(e, t) {
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
let d = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: o = !1,
            zalgo: d = !0,
            preview: p = !1,
            disableInteraction: g = !1,
            childrenRepliedMessage: m,
            childrenExecutedCommand: f,
            childrenHeader: b,
            childrenSystemMessage: h,
            childrenButtons: _,
            childrenMessageContent: y,
            childrenAccessories: v,
            messageRef: O,
            focusProps: j = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: x,
            isSystemMessage: C,
            hasReply: P,
            authorHasGradientRole: T = !1,
            guildId: w
        } = e,
        S = (function (e, t) {
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
        })(e, ['className', 'compact', 'contentOnly', 'zalgo', 'preview', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply', 'authorHasGradientRole', 'guildId']);
    let I = (0, s.Z)(w, 'BaseMessage'),
        k = (0, r.jsx)(
            i.tEY,
            u(c({}, j), {
                children: (0, r.jsxs)(
                    'div',
                    u(
                        c(
                            {
                                className: a()(t, {
                                    [l.gradient]: !!I && T,
                                    [l.wrapper]: !0,
                                    [l.contentOnly]: o,
                                    [l.compact]: n,
                                    [l.preview]: p,
                                    [l.cozy]: !n,
                                    [l.zalgo]: d,
                                    [l.hasThread]: x,
                                    [l.isSystemMessage]: C,
                                    [l.hasReply]: P
                                }),
                                ref: O
                            },
                            S
                        ),
                        {
                            role: 'article',
                            children: [
                                m,
                                f,
                                (0, r.jsxs)('div', {
                                    className: l.contents,
                                    children: [h, b, null == h && y]
                                }),
                                v,
                                null != _
                                    ? (0, r.jsx)('div', {
                                          className: l.buttonContainer,
                                          children: _
                                      })
                                    : null
                            ]
                        }
                    )
                )
            })
        );
    return g ? (0, r.jsx)(i.Rny, { children: k }) : k;
};
