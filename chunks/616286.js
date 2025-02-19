n.d(t, { T: () => x }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(442837),
    c = n(475179),
    u = n(358221),
    d = n(306680),
    p = n(944486),
    h = n(111583),
    f = n(459273),
    m = n(880831),
    g = n(774168),
    b = n(871499),
    _ = n(981631),
    C = n(388032);
function v(e) {
    let t = (0, s.e7)([h.Z], () => !(0, a.isEmpty)(h.Z.getTypingUsers(e)), [e]),
        n = (0, s.e7)([p.Z], () => p.Z.getVoiceChannelId() === e, [e]),
        { unreadCount: r, mentionCount: i } = (0, s.cj)(
            [d.ZP],
            () => ({
                unreadCount: d.ZP.getUnreadCount(e),
                mentionCount: d.ZP.getMentionCount(e)
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
function y(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: i, mentionCount: l, isTyping: o, voiceChannelIsSelected: a } = v(n);
    return (0, r.jsx)(g.Z, {
        className: t,
        unreadCount: i,
        mentionCount: l,
        isTyping: o,
        canBadge: a
    });
}
function x(e) {
    let t;
    var { channelId: n, className: l, showingClassName: a, onClick: d, inPopout: p, showRequestToSpeakSidebar: h, toggleRequestToSpeakSidebar: g } = e,
        x = (function (e, t) {
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
    let { disabled: j } = x,
        O = i.useRef(null),
        N = (0, s.e7)([u.Z], () => u.Z.getChatOpen(n), [n]),
        {
            isShowing: E,
            unreadCount: P,
            mentionCount: I
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: r } = v(e),
                [l, o] = i.useState(!1);
            return (
                i.useEffect(() => {
                    o(t > 0);
                    let e = setTimeout(() => {
                        o(!1);
                    }, m.z);
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
        S = i.useCallback(() => {
            null == d || d(), !N && h && (null == g || g()), c.Z.updateChatOpen(n, !N);
        }, [n, N, d, h, g]),
        Z = i.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, r.jsx)(y, {
                    className: t,
                    channelId: n
                });
            },
            [n]
        ),
        T = i.useCallback(() => {
            var e;
            null === (e = O.current) || void 0 === e || e.focus();
        }, []);
    (0, f.yp)({
        event: _.CkL.FOCUS_CHAT_BUTTON,
        handler: j ? null : T
    });
    let [A, w] = i.useState(!1),
        R = i.useCallback(() => {
            p && w(!0);
        }, [p]);
    (0, f.yp)({
        event: _.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: R
    }),
        i.useEffect(() => {
            let e;
            return (
                A &&
                    (e = setTimeout(() => {
                        w(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [A]);
    let k = [(t = p && j ? C.NW.string(C.t.DPgc5u) : N ? C.NW.string(C.t.nthdxM) : C.NW.string(C.t['5KxXrK']))];
    return (
        I > 0 && k.push(C.NW.formatToPlainString(C.t['3l1GOz'], { mentionCount: I })),
        P > 0 && k.push(C.NW.string(C.t.x5zAGR)),
        (0, r.jsx)(
            b.Z,
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
                    buttonRef: O,
                    onClick: S,
                    label: t,
                    'aria-label': k.join(', '),
                    iconComponent: Z,
                    tooltipPosition: 'bottom',
                    wrapperClassName: o()(l, null != a && { [a]: E }),
                    forceTooltipOpen: A
                },
                x
            )
        )
    );
}
