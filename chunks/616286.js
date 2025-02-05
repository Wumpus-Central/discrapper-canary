n.d(t, { T: () => I }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n(442837),
    c = n(475179),
    d = n(358221),
    u = n(306680),
    h = n(944486),
    p = n(111583),
    m = n(459273),
    f = n(880831),
    g = n(774168),
    _ = n(871499),
    C = n(981631),
    x = n(388032);
function v(e) {
    let t = (0, o.e7)([p.Z], () => !(0, s.isEmpty)(p.Z.getTypingUsers(e)), [e]),
        n = (0, o.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: l } = (0, o.cj)(
            [u.ZP],
            () => ({
                unreadCount: u.ZP.getUnreadCount(e),
                mentionCount: u.ZP.getMentionCount(e)
            }),
            [e]
        );
    return {
        unreadCount: i,
        mentionCount: l,
        voiceChannelIsSelected: n,
        isTyping: t
    };
}
function E(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: l, mentionCount: a, isTyping: r, voiceChannelIsSelected: s } = v(n);
    return (0, i.jsx)(g.Z, {
        className: t,
        unreadCount: l,
        mentionCount: a,
        isTyping: r,
        canBadge: s
    });
}
function I(e) {
    let t,
        { channelId: n, className: a, showingClassName: s, onClick: u, inPopout: h, showRequestToSpeakSidebar: p, toggleRequestToSpeakSidebar: g, ...I } = e,
        { disabled: b } = I,
        Z = l.useRef(null),
        N = (0, o.e7)([d.Z], () => d.Z.getChatOpen(n), [n]),
        {
            isShowing: T,
            unreadCount: S,
            mentionCount: j
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: i } = v(e),
                [a, r] = l.useState(!1);
            return (
                l.useEffect(() => {
                    r(t > 0);
                    let e = setTimeout(() => {
                        r(!1);
                    }, f.z);
                    return () => {
                        clearTimeout(e), r(!1);
                    };
                }, [t]),
                {
                    isShowing: a || n > 0 || i,
                    unreadCount: t,
                    mentionCount: n
                }
            );
        })(n),
        y = l.useCallback(() => {
            null == u || u(), !N && p && (null == g || g()), c.Z.updateChatOpen(n, !N);
        }, [n, N, u, p, g]),
        A = l.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, i.jsx)(E, {
                    className: t,
                    channelId: n
                });
            },
            [n]
        ),
        P = l.useCallback(() => {
            var e;
            null === (e = Z.current) || void 0 === e || e.focus();
        }, []);
    (0, m.yp)({
        event: C.CkL.FOCUS_CHAT_BUTTON,
        handler: b ? null : P
    });
    let [R, M] = l.useState(!1),
        L = l.useCallback(() => {
            h && M(!0);
        }, [h]);
    (0, m.yp)({
        event: C.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: L
    }),
        l.useEffect(() => {
            let e;
            return (
                R &&
                    (e = setTimeout(() => {
                        M(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [R]);
    let k = [(t = h && b ? x.intl.string(x.t.DPgc5u) : N ? x.intl.string(x.t.nthdxM) : x.intl.string(x.t['5KxXrK']))];
    return (
        j > 0 && k.push(x.intl.formatToPlainString(x.t['3l1GOz'], { mentionCount: j })),
        S > 0 && k.push(x.intl.string(x.t.x5zAGR)),
        (0, i.jsx)(_.Z, {
            buttonRef: Z,
            onClick: y,
            label: t,
            'aria-label': k.join(', '),
            iconComponent: A,
            tooltipPosition: 'bottom',
            wrapperClassName: r()(a, null != s && { [s]: T }),
            forceTooltipOpen: R,
            ...I
        })
    );
}
