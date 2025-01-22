n.d(t, {
    T: function () {
        return E;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(871499),
    x = n(981631),
    v = n(388032);
function _(e) {
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
function I(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: l, mentionCount: r, isTyping: a, voiceChannelIsSelected: s } = _(n);
    return (0, i.jsx)(g.Z, {
        className: t,
        unreadCount: l,
        mentionCount: r,
        isTyping: a,
        canBadge: s
    });
}
function E(e) {
    let t,
        { channelId: n, className: r, showingClassName: s, onClick: u, inPopout: h, showRequestToSpeakSidebar: p, toggleRequestToSpeakSidebar: g, ...E } = e,
        { disabled: b } = E,
        Z = l.useRef(null),
        N = (0, o.e7)([d.Z], () => d.Z.getChatOpen(n), [n]),
        {
            isShowing: S,
            unreadCount: T,
            mentionCount: j
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: i } = _(e),
                [r, a] = l.useState(!1);
            return (
                l.useEffect(() => {
                    a(t > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, f.z);
                    return () => {
                        clearTimeout(e), a(!1);
                    };
                }, [t]),
                {
                    isShowing: r || n > 0 || i,
                    unreadCount: t,
                    mentionCount: n
                }
            );
        })(n),
        A = l.useCallback(() => {
            null == u || u(), !N && p && (null == g || g()), c.Z.updateChatOpen(n, !N);
        }, [n, N, u, p, g]),
        y = l.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, i.jsx)(I, {
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
        event: x.CkL.FOCUS_CHAT_BUTTON,
        handler: b ? null : P
    });
    let [M, R] = l.useState(!1),
        L = l.useCallback(() => {
            h && R(!0);
        }, [h]);
    (0, m.yp)({
        event: x.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: L
    }),
        l.useEffect(() => {
            let e;
            return (
                M &&
                    (e = setTimeout(() => {
                        R(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [M]);
    let k = [(t = h && b ? v.intl.string(v.t.DPgc5u) : N ? v.intl.string(v.t.nthdxM) : v.intl.string(v.t['5KxXrK']))];
    return (
        j > 0 && k.push(v.intl.formatToPlainString(v.t['3l1GOz'], { mentionCount: j })),
        T > 0 && k.push(v.intl.string(v.t.x5zAGR)),
        (0, i.jsx)(C.Z, {
            buttonRef: Z,
            onClick: A,
            label: t,
            'aria-label': k.join(', '),
            iconComponent: y,
            tooltipPosition: 'bottom',
            wrapperClassName: a()(r, null != s && { [s]: S }),
            forceTooltipOpen: M,
            ...E
        })
    );
}
