n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n(442837),
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
    C = n(388032),
    x = n(636501);
function v(e) {
    let { channelId: t, className: n, ...v } = e,
        _ = l.useRef(null),
        I = (0, a.e7)([m.ZP], () => m.ZP.getFocusedLayout() === f.MI.RESIZABLE),
        E = l.useCallback(() => {
            let e = I ? f.MI.NO_CHAT : f.MI.RESIZABLE;
            (0, p.gC)(e);
        }, [I]),
        { unreadCount: b, mentionCount: Z } = (function (e) {
            let t = (0, a.e7)([u.Z], () => !(0, r.isEmpty)(u.Z.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, a.cj)(
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
        S = l.useCallback(() => {
            var e;
            null === (e = _.current) || void 0 === e || e.focus();
        }, []);
    (0, h.yp)({
        event: g.CkL.FOCUS_CHAT_BUTTON,
        handler: S
    });
    let N = I ? C.intl.string(C.t['5MstTk']) : C.intl.string(C.t.kkKapK),
        T = [N];
    Z > 0 && T.push(C.intl.formatToPlainString(C.t['3l1GOz'], { mentionCount: Z })), b > 0 && T.push(C.intl.string(C.t.x5zAGR));
    let j = (0, a.e7)([m.ZP], () => m.ZP.getFocusedLayout()),
        A = Z > 0 ? Z : b,
        y = A > 0;
    return (0, i.jsxs)('div', {
        className: x.wrapper,
        children: [
            (0, i.jsx)(c.d, {
                buttonRef: _,
                onClick: E,
                label: N,
                'aria-label': T.join(', '),
                tooltipPosition: 'top',
                iconComponent: j === f.MI.NO_CHAT ? s.ChevronLargeUpIcon : s.ChevronLargeDownIcon,
                themeable: !0,
                className: n,
                ...v
            }),
            y
                ? (0, i.jsx)(o.Z, {
                      hasMentions: Z > 0,
                      truncatedCount: A > 99 ? '99+' : A,
                      className: x.badge
                  })
                : null
        ]
    });
}
