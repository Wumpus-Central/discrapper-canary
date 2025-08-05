(n.d(t, { T: () => w }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(442837),
    c = n(475179),
    u = n(906732),
    d = n(358221),
    f = n(522651),
    _ = n(306680),
    p = n(944486),
    h = n(111583),
    m = n(459273),
    g = n(880831),
    E = n(774168),
    b = n(871499),
    y = n(981631),
    O = n(388032);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            }));
    }
    return e;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function A(e) {
    let t = (0, l.e7)([h.Z], () => !(0, s.isEmpty)(h.Z.getTypingUsers(e)), [e]),
        n = (0, l.e7)([p.Z], () => p.Z.getVoiceChannelId() === e, [e]),
        { unreadCount: r, mentionCount: i } = (0, l.cj)(
            [_.ZP],
            () => ({
                unreadCount: _.ZP.getUnreadCount(e),
                mentionCount: _.ZP.getMentionCount(e)
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
function N(e) {
    let { unreadCount: t, mentionCount: n, isTyping: r } = A(e),
        [a, o] = i.useState(!1);
    return (
        i.useEffect(() => {
            o(t > 0);
            let e = setTimeout(() => {
                o(!1);
            }, g.z);
            return () => {
                (clearTimeout(e), o(!1));
            };
        }, [t]),
        {
            isShowing: a || n > 0 || r,
            unreadCount: t,
            mentionCount: n
        }
    );
}
function C(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: i, mentionCount: a, isTyping: o, voiceChannelIsSelected: s } = A(n);
    return (0, r.jsx)(E.Z, {
        className: t,
        unreadCount: i,
        mentionCount: a,
        isTyping: o,
        canBadge: s
    });
}
function w(e) {
    let t;
    var { channelId: n, className: a, showingClassName: s, onClick: _, inPopout: p, showRequestToSpeakSidebar: h, toggleRequestToSpeakSidebar: g } = e,
        E = T(e, ['channelId', 'className', 'showingClassName', 'onClick', 'inPopout', 'showRequestToSpeakSidebar', 'toggleRequestToSpeakSidebar']);
    let { parentAnalyticsLocation: v } = (0, u.ZP)(),
        { disabled: S } = E,
        A = i.useRef(null),
        w = (0, l.e7)([d.Z], () => d.Z.getChatOpen(n), [n]),
        { isShowing: R, unreadCount: P, mentionCount: D } = N(n),
        L = i.useCallback(() => {
            ((0, f.v)(v, f.d.CHAT, !w), null == _ || _(), !w && h && (null == g || g()), c.Z.updateChatOpen(n, !w));
        }, [n, w, _, h, g, v]),
        x = i.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, r.jsx)(C, {
                    className: t,
                    channelId: n
                });
            },
            [n]
        ),
        k = i.useCallback(() => {
            var e;
            null == (e = A.current) || e.focus();
        }, []);
    (0, m.yp)({
        event: y.CkL.FOCUS_CHAT_BUTTON,
        handler: S ? null : k
    });
    let [j, M] = i.useState(!1),
        U = i.useCallback(() => {
            p && M(!0);
        }, [p]);
    ((0, m.yp)({
        event: y.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: U
    }),
        i.useEffect(() => {
            let e;
            return (
                j &&
                    (e = setTimeout(() => {
                        M(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [j]));
    let G = [(t = p && S ? O.intl.string(O.t.DPgc5u) : w ? O.intl.string(O.t.nthdxM) : O.intl.string(O.t['5KxXrK']))];
    return (
        D > 0 && G.push(O.intl.formatToPlainString(O.t['3l1GOz'], { mentionCount: D })),
        P > 0 && G.push(O.intl.string(O.t.x5zAGR)),
        (0, r.jsx)(
            b.Z,
            I(
                {
                    buttonRef: A,
                    onClick: L,
                    label: t,
                    'aria-label': G.join(', '),
                    iconComponent: x,
                    tooltipPosition: 'bottom',
                    wrapperClassName: o()(a, null != s && { [s]: R }),
                    forceTooltipOpen: j
                },
                E
            )
        )
    );
}
