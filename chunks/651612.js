n.d(t, { Z: () => C }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n(442837),
    a = n(481060),
    s = n(481051),
    c = n(871499),
    u = n(306680),
    d = n(111583),
    p = n(459273),
    h = n(566620),
    f = n(317381),
    m = n(918559),
    g = n(981631),
    b = n(388032),
    _ = n(23657);
function C(e) {
    var { channelId: t, className: n } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channelId', 'className']);
    let v = i.useRef(null),
        y = (0, o.e7)([f.ZP], () => f.ZP.getFocusedLayout() === m.MI.RESIZABLE),
        x = i.useCallback(() => {
            let e = y ? m.MI.NO_CHAT : m.MI.RESIZABLE;
            (0, h.gC)(e);
        }, [y]),
        { unreadCount: j, mentionCount: O } = (function (e) {
            let t = (0, o.e7)([d.Z], () => !(0, l.isEmpty)(d.Z.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: r } = (0, o.cj)(
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
        N = i.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.focus();
        }, []);
    (0, p.yp)({
        event: g.CkL.FOCUS_CHAT_BUTTON,
        handler: N
    });
    let E = y ? b.NW.string(b.t['5MstTk']) : b.NW.string(b.t.kkKapK),
        P = [E];
    O > 0 && P.push(b.NW.formatToPlainString(b.t['3l1GOz'], { mentionCount: O })), j > 0 && P.push(b.NW.string(b.t.x5zAGR));
    let I = (0, o.e7)([f.ZP], () => f.ZP.getFocusedLayout()),
        S = O > 0 ? O : j,
        Z = S > 0;
    return (0, r.jsxs)('div', {
        className: _.wrapper,
        children: [
            (0, r.jsx)(
                c.d,
                (function (e) {
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
                })(
                    {
                        buttonRef: v,
                        onClick: x,
                        label: E,
                        'aria-label': P.join(', '),
                        tooltipPosition: 'top',
                        iconComponent: I === m.MI.NO_CHAT ? a.sXD : a.hic,
                        themeable: !0,
                        className: n
                    },
                    C
                )
            ),
            Z
                ? (0, r.jsx)(s.Z, {
                      hasMentions: O > 0,
                      truncatedCount: S > 99 ? '99+' : S,
                      className: _.badge
                  })
                : null
        ]
    });
}
