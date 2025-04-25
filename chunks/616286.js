n.d(t, { T: () => O }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(442837),
    c = n(475179),
    u = n(906732),
    d = n(358221),
    p = n(522651),
    h = n(306680),
    f = n(944486),
    m = n(111583),
    g = n(459273),
    b = n(880831),
    _ = n(774168),
    y = n(871499),
    x = n(981631),
    C = n(388032);
function v(e) {
    let t = (0, s.e7)([m.Z], () => !(0, a.isEmpty)(m.Z.getTypingUsers(e)), [e]),
        n = (0, s.e7)([f.Z], () => f.Z.getVoiceChannelId() === e, [e]),
        { unreadCount: r, mentionCount: i } = (0, s.cj)(
            [h.ZP],
            () => ({
                unreadCount: h.ZP.getUnreadCount(e),
                mentionCount: h.ZP.getMentionCount(e)
            }),
            [e]
        );
    return {
        unreadCount: r,
        mentionCount: i,
        voiceChannelIsSelected: n,
        isTyping: t
    };
}
function j(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: i, mentionCount: l, isTyping: o, voiceChannelIsSelected: a } = v(n);
    return (0, r.jsx)(_.Z, {
        className: t,
        unreadCount: i,
        mentionCount: l,
        isTyping: o,
        canBadge: a
    });
}
function O(e) {
    let t;
    var { channelId: n, className: l, showingClassName: a, onClick: h, inPopout: f, showRequestToSpeakSidebar: m, toggleRequestToSpeakSidebar: _ } = e,
        O = (function (e, t) {
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
        })(e, ['channelId', 'className', 'showingClassName', 'onClick', 'inPopout', 'showRequestToSpeakSidebar', 'toggleRequestToSpeakSidebar']);
    let { parentAnalyticsLocation: E } = (0, u.ZP)(),
        { disabled: I } = O,
        P = i.useRef(null),
        S = (0, s.e7)([d.Z], () => d.Z.getChatOpen(n), [n]),
        {
            isShowing: Z,
            unreadCount: N,
            mentionCount: T
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: r } = v(e),
                [l, o] = i.useState(!1);
            return (
                i.useEffect(() => {
                    o(t > 0);
                    let e = setTimeout(() => {
                        o(!1);
                    }, b.z);
                    return () => {
                        clearTimeout(e), o(!1);
                    };
                }, [t]),
                {
                    isShowing: l || n > 0 || r,
                    unreadCount: t,
                    mentionCount: n
                }
            );
        })(n),
        A = i.useCallback(() => {
            (0, p.v)(E, p.d.CHAT, !S), null == h || h(), !S && m && (null == _ || _()), c.Z.updateChatOpen(n, !S);
        }, [n, S, h, m, _, E]),
        w = i.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, r.jsx)(j, {
                    className: t,
                    channelId: n
                });
            },
            [n]
        ),
        R = i.useCallback(() => {
            var e;
            null == (e = P.current) || e.focus();
        }, []);
    (0, g.yp)({
        event: x.CkL.FOCUS_CHAT_BUTTON,
        handler: I ? null : R
    });
    let [k, M] = i.useState(!1),
        L = i.useCallback(() => {
            f && M(!0);
        }, [f]);
    (0, g.yp)({
        event: x.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: L
    }),
        i.useEffect(() => {
            let e;
            return (
                k &&
                    (e = setTimeout(() => {
                        M(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [k]);
    let D = [(t = f && I ? C.intl.string(C.t.DPgc5u) : S ? C.intl.string(C.t.nthdxM) : C.intl.string(C.t['5KxXrK']))];
    return (
        T > 0 && D.push(C.intl.formatToPlainString(C.t['3l1GOz'], { mentionCount: T })),
        N > 0 && D.push(C.intl.string(C.t.x5zAGR)),
        (0, r.jsx)(
            y.Z,
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
                    buttonRef: P,
                    onClick: A,
                    label: t,
                    'aria-label': D.join(', '),
                    iconComponent: w,
                    tooltipPosition: 'bottom',
                    wrapperClassName: o()(l, null != a && { [a]: Z }),
                    forceTooltipOpen: k
                },
                O
            )
        )
    );
}
