n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    i = n(481060),
    s = n(442837),
    l = n(607070),
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
let g = function (e) {
    var {
            className: t,
            compact: n = !1,
            contentOnly: o = !1,
            zalgo: g = !0,
            preview: m = !1,
            disableInteraction: f = !1,
            childrenRepliedMessage: b,
            childrenExecutedCommand: h,
            childrenHeader: y,
            childrenSystemMessage: _,
            childrenButtons: O,
            childrenMessageContent: v,
            childrenAccessories: j,
            messageRef: x,
            focusProps: C = {
                offset: {
                    left: 4,
                    right: 4
                }
            },
            hasThread: P,
            isSystemMessage: N,
            hasReply: T,
            authorHasGradientRole: w = !1,
            guildId: S
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
        })(e, ['className', 'compact', 'contentOnly', 'zalgo', 'preview', 'disableInteraction', 'childrenRepliedMessage', 'childrenExecutedCommand', 'childrenHeader', 'childrenSystemMessage', 'childrenButtons', 'childrenMessageContent', 'childrenAccessories', 'messageRef', 'focusProps', 'hasThread', 'isSystemMessage', 'hasReply', 'authorHasGradientRole', 'guildId']);
    let k = (0, c.Z)(S, 'BaseMessage'),
        M = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        R = (0, r.jsx)(
            i.tEY,
            p(d({}, C), {
                children: (0, r.jsxs)(
                    'div',
                    p(
                        d(
                            {
                                className: a()(t, {
                                    [u.gradient]: !!k && w,
                                    [u.reducedMotion]: M,
                                    [u.wrapper]: !0,
                                    [u.contentOnly]: o,
                                    [u.compact]: n,
                                    [u.preview]: m,
                                    [u.cozy]: !n,
                                    [u.zalgo]: g,
                                    [u.hasThread]: P,
                                    [u.isSystemMessage]: N,
                                    [u.hasReply]: T
                                }),
                                ref: x
                            },
                            I
                        ),
                        {
                            role: 'article',
                            children: [
                                b,
                                h,
                                (0, r.jsxs)('div', {
                                    className: u.contents,
                                    children: [_, y, null == _ && v]
                                }),
                                j,
                                null != O
                                    ? (0, r.jsx)('div', {
                                          className: u.buttonContainer,
                                          children: O
                                      })
                                    : null
                            ]
                        }
                    )
                )
            })
        );
    return f ? (0, r.jsx)(i.Rny, { children: R }) : R;
};
