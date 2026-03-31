n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(311907),
    r = n(397927),
    o = n(315502),
    c = n(709562),
    d = n(222823),
    u = n(741961),
    h = n(234320),
    A = n(795816),
    _ = n(933958),
    m = n(5867),
    g = n(652215),
    p = n(985018),
    f = n(610401);
function x(e) {
    let { channelId: t, className: n, ...x } = e,
        E = l.useRef(null),
        I = (0, a.bG)([_.Ay], () => _.Ay.getFocusedLayout() === m.E8.RESIZABLE),
        C = l.useCallback(() => {
            let e = I ? m.E8.NO_CHAT : m.E8.RESIZABLE;
            (0, A.i5)(e);
        }, [I]),
        { unreadCount: N, mentionCount: T } = (function (e) {
            let t = (0, a.bG)([u.A], () => !(0, s.isEmpty)(u.A.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, a.cf)(
                    [d.Ay],
                    () => ({ unreadCount: d.Ay.getUnreadCount(e), mentionCount: d.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: n, mentionCount: i, isTyping: t };
        })(t),
        S = l.useCallback(() => {
            E.current?.focus();
        }, []);
    (0, h.Vo)({ event: g.jej.FOCUS_CHAT_BUTTON, handler: S });
    let b = I ? p.intl.string(p.t["5MstTl"]) : p.intl.string(p.t.kkKapG),
        y = [b];
    T > 0 && y.push(p.intl.formatToPlainString(p.t["3l1GOx"], { mentionCount: T })),
        N > 0 && y.push(p.intl.string(p.t.x5zAGZ));
    let v = (0, a.bG)([_.Ay], () => _.Ay.getFocusedLayout()),
        j = T > 0 ? T : N,
        R = j > 0;
    return (0, i.jsxs)("div", {
        className: f.iE,
        children: [
            (0, i.jsx)(c.l, {
                isTrayButton: !0,
                buttonRef: E,
                onClick: C,
                label: b,
                "aria-label": y.join(", "),
                tooltipPosition: "top",
                iconComponent: v === m.E8.NO_CHAT ? r.jQp : r.g8p,
                themeable: !0,
                className: n,
                ...x,
            }),
            R ? (0, i.jsx)(o.A, { hasMentions: T > 0, truncatedCount: j > 99 ? "99+" : j, className: f.qS }) : null,
        ],
    });
}
