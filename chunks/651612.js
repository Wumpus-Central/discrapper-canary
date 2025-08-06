(n.d(t, { Z: () => x }), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n(442837),
    s = n(481060),
    o = n(481051),
    c = n(871499),
    u = n(306680),
    d = n(111583),
    h = n(459273),
    p = n(566620),
    f = n(317381),
    g = n(918559),
    m = n(981631),
    b = n(388032),
    y = n(408912);
function x(e) {
    var { channelId: t, className: n } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['channelId', 'className']);
    let j = i.useRef(null),
        _ = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout() === g.MI.RESIZABLE),
        O = i.useCallback(() => {
            let e = _ ? g.MI.NO_CHAT : g.MI.RESIZABLE;
            (0, p.gC)(e);
        }, [_]),
        { unreadCount: v, mentionCount: C } = (function (e) {
            let t = (0, a.e7)([d.Z], () => !(0, l.isEmpty)(d.Z.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: r } = (0, a.cj)(
                    [u.ZP],
                    () => ({
                        unreadCount: u.ZP.getUnreadCount(e),
                        mentionCount: u.ZP.getMentionCount(e)
                    }),
                    [e]
                );
            return {
                unreadCount: n,
                mentionCount: r,
                isTyping: t
            };
        })(t),
        E = i.useCallback(() => {
            var e;
            null == (e = j.current) || e.focus();
        }, []);
    (0, h.yp)({
        event: m.CkL.FOCUS_CHAT_BUTTON,
        handler: E
    });
    let S = _ ? b.intl.string(b.t['5MstTk']) : b.intl.string(b.t.kkKapK),
        Z = [S];
    (C > 0 && Z.push(b.intl.formatToPlainString(b.t['3l1GOz'], { mentionCount: C })), v > 0 && Z.push(b.intl.string(b.t.x5zAGR)));
    let I = (0, a.e7)([f.ZP], () => f.ZP.getFocusedLayout()),
        P = C > 0 ? C : v,
        T = P > 0;
    return (0, r.jsxs)('div', {
        className: y.wrapper,
        children: [
            (0, r.jsx)(
                c.d,
                (function (e) {
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
                })(
                    {
                        isTrayButton: !0,
                        buttonRef: j,
                        onClick: O,
                        label: S,
                        'aria-label': Z.join(', '),
                        tooltipPosition: 'top',
                        iconComponent: I === g.MI.NO_CHAT ? s.sXD : s.hic,
                        themeable: !0,
                        className: n
                    },
                    x
                )
            ),
            T
                ? (0, r.jsx)(o.Z, {
                      hasMentions: C > 0,
                      truncatedCount: P > 99 ? '99+' : P,
                      className: y.badge
                  })
                : null
        ]
    });
}
