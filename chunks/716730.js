"use strict";
n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(311907),
    a = n(397927),
    o = n(315502),
    c = n(709562),
    d = n(222823),
    u = n(741961),
    h = n(234320),
    A = n(795816),
    p = n(933958),
    g = n(5867),
    m = n(652215),
    _ = n(985018),
    f = n(766924);
function x(e) {
    let { channelId: t, className: n, ...x } = e,
        C = s.useRef(null),
        E = (0, r.bG)([p.Ay], () => p.Ay.getFocusedLayout() === g.E8.RESIZABLE),
        I = s.useCallback(() => {
            let e = E ? g.E8.NO_CHAT : g.E8.RESIZABLE;
            (0, A.i5)(e);
        }, [E]),
        { unreadCount: b, mentionCount: N } = (function (e) {
            let t = (0, r.bG)([u.A], () => !(0, l.isEmpty)(u.A.getTypingUsers(e)), [e]),
                { unreadCount: n, mentionCount: i } = (0, r.cf)(
                    [d.Ay],
                    () => ({ unreadCount: d.Ay.getUnreadCount(e), mentionCount: d.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: n, mentionCount: i, isTyping: t };
        })(t),
        S = s.useCallback(() => {
            C.current?.focus();
        }, []);
    (0, h.Vo)({ event: m.jej.FOCUS_CHAT_BUTTON, handler: S });
    let T = E ? _.intl.string(_.t["5MstTl"]) : _.intl.string(_.t.kkKapG),
        v = [T];
    N > 0 && v.push(_.intl.formatToPlainString(_.t["3l1GOx"], { mentionCount: N })),
        b > 0 && v.push(_.intl.string(_.t.x5zAGZ));
    let y = (0, r.bG)([p.Ay], () => p.Ay.getFocusedLayout()),
        j = N > 0 ? N : b,
        R = j > 0;
    return (0, i.jsxs)("div", {
        className: f.iE,
        children: [
            (0, i.jsx)(c.l, {
                isTrayButton: !0,
                buttonRef: C,
                onClick: I,
                label: T,
                "aria-label": v.join(", "),
                tooltipPosition: "top",
                iconComponent: y === g.E8.NO_CHAT ? a.jQp : a.g8p,
                themeable: !0,
                className: n,
                ...x,
            }),
            R ? (0, i.jsx)(o.A, { hasMentions: N > 0, truncatedCount: j > 99 ? "99+" : j, className: f.qS }) : null,
        ],
    });
}
