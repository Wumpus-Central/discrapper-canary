n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    i = n(481060),
    s = n(456536);
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
function l(e, t) {
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
let u = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: o = !1,
            zalgo: u = !0,
            disableInteraction: d = !1,
            childrenRepliedMessage: p,
            childrenExecutedCommand: g,
            childrenHeader: m,
            childrenSystemMessage: f,
            childrenButtons: _,
            childrenMessageContent: b,
            childrenAccessories: h,
            messageRef: y,
            focusProps: v = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: O,
            isSystemMessage: x,
            hasReply: C
        } = e,
        j = (function (e, t) {
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
        })(e, ['className', 'compact', 'contentOnly', 'zalgo', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply']);
    let P = (0, r.jsx)(
        i.tEY,
        l(c({}, v), {
            children: (0, r.jsxs)(
                'div',
                l(
                    c(
                        {
                            className: a()(t, {
                                [s.wrapper]: !0,
                                [s.contentOnly]: o,
                                [s.compact]: n,
                                [s.cozy]: !n,
                                [s.zalgo]: u,
                                [s.hasThread]: O,
                                [s.isSystemMessage]: x,
                                [s.hasReply]: C
                            }),
                            ref: y
                        },
                        j
                    ),
                    {
                        role: 'article',
                        children: [
                            p,
                            g,
                            (0, r.jsxs)('div', {
                                className: s.contents,
                                children: [f, m, null == f && b]
                            }),
                            h,
                            null != _
                                ? (0, r.jsx)('div', {
                                      className: s.buttonContainer,
                                      children: _
                                  })
                                : null
                        ]
                    }
                )
            )
        })
    );
    return d ? (0, r.jsx)(i.Rny, { children: P }) : P;
};
