n.d(t, { V: () => y }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(17928),
    c = n(367513),
    u = n(688810),
    d = n(313961),
    A = n(384059),
    E = n(222823),
    m = n(309010),
    h = n(741961),
    C = n(234320),
    g = n(20465),
    I = n(132500),
    p = n(863610),
    x = n(534890),
    T = n(315502),
    _ = n(589203);
function v(e) {
    let { width: t = 24, height: n = 24, isBadged: s = !1, isTyping: a = !1 } = e,
        [r] = i.useState(() => (0, I.A)());
    return (0, l.jsxs)("svg", {
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: [
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("mask", {
                    id: r,
                    children: [
                        (0, l.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        a &&
                            (0, l.jsx)("g", {
                                fill: "black",
                                transform: `translate(5.5, 10.5) scale(${11 / 24})`,
                                children: (0, l.jsx)(p.U, { dotRadius: 3.5, spacing: 3, fill: "black" }),
                            }),
                        s && (0, l.jsx)("circle", { cx: "20", cy: "19", r: "10", fill: "red" }),
                    ],
                }),
            }),
            (0, l.jsx)("g", {
                mask: `url(#${r})`,
                children: (0, l.jsx)(x.o, { size: "custom", width: t, height: n, color: "currentColor" }),
            }),
        ],
    });
}
function N(e) {
    let { className: t, unreadCount: n, mentionCount: i, isTyping: s, canBadge: r } = e,
        o = null != i && i > 0,
        c = (o ? i : n) ?? 0,
        u = r && null != n && n > 0;
    return (0, l.jsxs)("div", {
        className: a()(_.Or, t),
        children: [
            (0, l.jsx)(v, { isBadged: u, isTyping: s }),
            u && (0, l.jsx)(T.A, { hasMentions: o, truncatedCount: c > 99 ? "99+" : c, className: _.qS }),
        ],
    });
}
var f = n(709562),
    j = n(652215),
    S = n(985018);
function b(e) {
    let t = (0, o.bG)([h.A], () => !(0, r.isEmpty)(h.A.getTypingUsers(e)), [e]),
        n = (0, o.bG)([m.A], () => m.A.getVoiceChannelId() === e, [e]),
        { unreadCount: l, mentionCount: i } = (0, o.cf)(
            [E.Ay],
            () => ({ unreadCount: E.Ay.getUnreadCount(e), mentionCount: E.Ay.getMentionCount(e) }),
            [e],
        );
    return { unreadCount: l, mentionCount: i, voiceChannelIsSelected: n, isTyping: t };
}
function O(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: i, mentionCount: s, isTyping: a, voiceChannelIsSelected: r } = b(n);
    return (0, l.jsx)(N, { className: t, unreadCount: i, mentionCount: s, isTyping: a, canBadge: r });
}
function y(e) {
    let t,
        {
            channelId: n,
            className: s,
            showingClassName: r,
            onClick: E,
            inPopout: m,
            showRequestToSpeakSidebar: h,
            toggleRequestToSpeakSidebar: I,
            ...p
        } = e,
        { parentAnalyticsLocation: x } = (0, u.Ay)(),
        { disabled: T } = p,
        _ = i.useRef(null),
        v = (0, o.bG)([d.A], () => d.A.getChatOpen(n), [n]),
        {
            isShowing: N,
            unreadCount: y,
            mentionCount: L,
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: l } = b(e),
                [s, a] = i.useState(!1);
            return (
                i.useEffect(() => {
                    a(t > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, g.R);
                    return () => {
                        clearTimeout(e), a(!1);
                    };
                }, [t]),
                { isShowing: s || n > 0 || l, unreadCount: t, mentionCount: n }
            );
        })(n),
        M = i.useCallback(() => {
            (0, A.X)(x, A.O.CHAT, !v), E?.(), !v && h && I?.(), c.A.updateChatOpen(n, !v, "toggle chat button");
        }, [n, v, E, h, I, x]),
        R = i.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, l.jsx)(O, { className: t, channelId: n });
            },
            [n],
        ),
        D = i.useCallback(() => {
            _.current?.focus();
        }, []);
    (0, C.Vo)({ event: j.jej.FOCUS_CHAT_BUTTON, handler: T ? null : D });
    let [P, G] = i.useState(!1),
        k = i.useCallback(() => {
            m && G(!0);
        }, [m]);
    (0, C.Vo)({ event: j.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP, handler: k }),
        i.useEffect(() => {
            let e;
            return (
                P &&
                    (e = setTimeout(() => {
                        G(!1);
                    }, 3e3)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [P]);
    let U = [(t = m && T ? S.intl.string(S.t.DPgc5h) : v ? S.intl.string(S.t.nthdxB) : S.intl.string(S.t["5KxXrK"]))];
    return (
        L > 0 && U.push(S.intl.formatToPlainString(S.t["3l1GOx"], { mentionCount: L })),
        y > 0 && U.push(S.intl.string(S.t.x5zAGZ)),
        (0, l.jsx)(f.A, {
            buttonRef: _,
            onClick: M,
            label: t,
            "aria-label": U.join(", "),
            iconComponent: R,
            tooltipPosition: "bottom",
            wrapperClassName: a()(s, null != r && { [r]: N }),
            forceTooltipOpen: P,
            ...p,
        })
    );
}
