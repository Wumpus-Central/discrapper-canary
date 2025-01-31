n.d(t, { Z: () => x }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n(442837),
    s = n(481060),
    o = n(481051),
    c = n(871499),
    d = n(306680),
    u = n(111583),
    h = n(459273),
    p = n(566620),
    m = n(317381),
    f = n(918559),
    g = n(981631),
    _ = n(388032),
    C = n(636501);
function x(e) {
    let { channelId: t, className: n, ...x } = e,
        v = l.useRef(null),
        E = (0, r.e7)([m.ZP], () => m.ZP.getFocusedLayout() === f.MI.RESIZABLE),
        I = l.useCallback(() => {
            let e = E ? f.MI.NO_CHAT : f.MI.RESIZABLE;
            (0, p.gC)(e);
        }, [E]),
        { unreadCount: b, mentionCount: Z } = (function (e) {
            let t = (0, r.e7)([u.Z], () => !(0, a.isEmpty)(u.Z.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, r.cj)(
                    [d.ZP],
                    () => ({
                        unreadCount: d.ZP.getUnreadCount(e),
                        mentionCount: d.ZP.getMentionCount(e)
                    }),
                    [e]
                );
            return {
                unreadCount: n,
                mentionCount: i,
                isTyping: t
            };
        })(t),
        N = l.useCallback(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.focus();
        }, []);
    (0, h.yp)({
        event: g.CkL.FOCUS_CHAT_BUTTON,
        handler: N
    });
    let T = E ? _.intl.string(_.t['5MstTk']) : _.intl.string(_.t.kkKapK),
        S = [T];
    Z > 0 && S.push(_.intl.formatToPlainString(_.t['3l1GOz'], { mentionCount: Z })), b > 0 && S.push(_.intl.string(_.t.x5zAGR));
    let j = (0, r.e7)([m.ZP], () => m.ZP.getFocusedLayout()),
        A = Z > 0 ? Z : b,
        y = A > 0;
    return (0, i.jsxs)('div', {
        className: C.wrapper,
        children: [
            (0, i.jsx)(c.d, {
                buttonRef: v,
                onClick: I,
                label: T,
                'aria-label': S.join(', '),
                tooltipPosition: 'top',
                iconComponent: j === f.MI.NO_CHAT ? s.sXD : s.hic,
                themeable: !0,
                className: n,
                ...x
            }),
            y
                ? (0, i.jsx)(o.Z, {
                      hasMentions: Z > 0,
                      truncatedCount: A > 99 ? '99+' : A,
                      className: C.badge
                  })
                : null
        ]
    });
}
