n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(311907),
    r = n(138017),
    o = n(715482),
    d = n(315502),
    c = n(709562),
    u = n(222823),
    h = n(741961),
    A = n(234320),
    _ = n(795816),
    m = n(933958),
    g = n(5867),
    p = n(652215),
    f = n(985018),
    E = n(702321);
function x(e) {
    let { channelId: t, className: n, ...x } = e,
        I = l.useRef(null),
        C = (0, a.bG)([m.Ay], () => m.Ay.getFocusedLayout() === g.E8.RESIZABLE),
        b = l.useCallback(() => {
            let e = C ? g.E8.NO_CHAT : g.E8.RESIZABLE;
            (0, _.i5)(e);
        }, [C]),
        { unreadCount: N, mentionCount: S } = (function (e) {
            let t = (0, a.bG)([h.A], () => !(0, s.isEmpty)(h.A.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, a.cf)(
                    [u.Ay],
                    () => ({ unreadCount: u.Ay.getUnreadCount(e), mentionCount: u.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: n, mentionCount: i, isTyping: t };
        })(t),
        v = l.useCallback(() => {
            I.current?.focus();
        }, []);
    (0, A.Vo)({ event: p.jej.FOCUS_CHAT_BUTTON, handler: v });
    let T = C ? f.intl.string(f.t["5MstTl"]) : f.intl.string(f.t.kkKapG),
        y = [T];
    S > 0 && y.push(f.intl.formatToPlainString(f.t["3l1GOx"], { mentionCount: S })),
        N > 0 && y.push(f.intl.string(f.t.x5zAGZ));
    let R = (0, a.bG)([m.Ay], () => m.Ay.getFocusedLayout()),
        j = S > 0 ? S : N,
        L = j > 0;
    return (0, i.jsxs)("div", {
        className: E.iE,
        children: [
            (0, i.jsx)(c.l, {
                isTrayButton: !0,
                buttonRef: I,
                onClick: b,
                label: T,
                "aria-label": y.join(", "),
                tooltipPosition: "top",
                iconComponent: R === g.E8.NO_CHAT ? r.j : o.g,
                themeable: !0,
                className: n,
                ...x,
            }),
            L ? (0, i.jsx)(d.A, { hasMentions: S > 0, truncatedCount: j > 99 ? "99+" : j, className: E.qS }) : null,
        ],
    });
}
