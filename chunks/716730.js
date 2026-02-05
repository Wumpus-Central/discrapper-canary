n.d(t, { A: () => f }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(311907),
    r = n(397927),
    o = n(315502),
    d = n(709562),
    c = n(222823),
    u = n(741961),
    h = n(234320),
    A = n(795816),
    g = n(933958),
    m = n(5867),
    p = n(652215),
    _ = n(985018),
    x = n(766924);
function f(e) {
    let { channelId: t, className: n, ...f } = e,
        E = l.useRef(null),
        C = (0, a.bG)([g.Ay], () => g.Ay.getFocusedLayout() === m.E8.RESIZABLE),
        I = l.useCallback(() => {
            let e = C ? m.E8.NO_CHAT : m.E8.RESIZABLE;
            (0, A.i5)(e);
        }, [C]),
        { unreadCount: S, mentionCount: b } = (function (e) {
            let t = (0, a.bG)([u.A], () => !(0, s.isEmpty)(u.A.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, a.cf)(
                    [c.Ay],
                    () => ({ unreadCount: c.Ay.getUnreadCount(e), mentionCount: c.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: n, mentionCount: i, isTyping: t };
        })(t),
        N = l.useCallback(() => {
            E.current?.focus();
        }, []);
    (0, h.Vo)({ event: p.jej.FOCUS_CHAT_BUTTON, handler: N });
    let T = C ? _.intl.string(_.t["5MstTl"]) : _.intl.string(_.t.kkKapG),
        j = [T];
    b > 0 && j.push(_.intl.formatToPlainString(_.t["3l1GOx"], { mentionCount: b })),
        S > 0 && j.push(_.intl.string(_.t.x5zAGZ));
    let v = (0, a.bG)([g.Ay], () => g.Ay.getFocusedLayout()),
        y = b > 0 ? b : S,
        R = y > 0;
    return (0, i.jsxs)("div", {
        className: x.iE,
        children: [
            (0, i.jsx)(d.l, {
                isTrayButton: !0,
                buttonRef: E,
                onClick: I,
                label: T,
                "aria-label": j.join(", "),
                tooltipPosition: "top",
                iconComponent: v === m.E8.NO_CHAT ? r.jQp : r.g8p,
                themeable: !0,
                className: n,
                ...f,
            }),
            R ? (0, i.jsx)(o.A, { hasMentions: b > 0, truncatedCount: y > 99 ? "99+" : y, className: x.qS }) : null,
        ],
    });
}
