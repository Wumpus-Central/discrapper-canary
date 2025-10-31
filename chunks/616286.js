n.d(t, { T: () => E }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(442837),
    c = n(475179),
    u = n(906732),
    d = n(358221),
    p = n(522651),
    f = n(306680),
    h = n(944486),
    m = n(111583),
    g = n(459273),
    b = n(880831),
    _ = n(774168),
    y = n(871499),
    C = n(981631),
    v = n(388032);
function O(e) {
    let t = (0, s.e7)([m.Z], () => !(0, o.isEmpty)(m.Z.getTypingUsers(e)), [e]),
        n = (0, s.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
        { unreadCount: r, mentionCount: i } = (0, s.cj)(
            [f.ZP],
            () => ({
                unreadCount: f.ZP.getUnreadCount(e),
                mentionCount: f.ZP.getMentionCount(e),
            }),
            [e],
        );
    return {
        unreadCount: r,
        mentionCount: i,
        voiceChannelIsSelected: n,
        isTyping: t,
    };
}
function x(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: i, mentionCount: l, isTyping: a, voiceChannelIsSelected: o } = O(n);
    return (0, r.jsx)(_.Z, {
        className: t,
        unreadCount: i,
        mentionCount: l,
        isTyping: a,
        canBadge: o,
    });
}
function E(e) {
    let t;
    var {
            channelId: n,
            className: l,
            showingClassName: o,
            onClick: f,
            inPopout: h,
            showRequestToSpeakSidebar: m,
            toggleRequestToSpeakSidebar: _,
        } = e,
        E = (function (e, t) {
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, [
            "channelId",
            "className",
            "showingClassName",
            "onClick",
            "inPopout",
            "showRequestToSpeakSidebar",
            "toggleRequestToSpeakSidebar",
        ]);
    let { parentAnalyticsLocation: j } = (0, u.ZP)(),
        { disabled: S } = E,
        P = i.useRef(null),
        I = (0, s.e7)([d.Z], () => d.Z.getChatOpen(n), [n]),
        {
            isShowing: Z,
            unreadCount: T,
            mentionCount: N,
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: r } = O(e),
                [l, a] = i.useState(!1);
            return (
                i.useEffect(() => {
                    a(t > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, b.z);
                    return () => {
                        clearTimeout(e), a(!1);
                    };
                }, [t]),
                {
                    isShowing: l || n > 0 || r,
                    unreadCount: t,
                    mentionCount: n,
                }
            );
        })(n),
        A = i.useCallback(() => {
            (0, p.v)(j, p.d.CHAT, !I), null == f || f(), !I && m && (null == _ || _()), c.Z.updateChatOpen(n, !I);
        }, [n, I, f, m, _, j]),
        w = i.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, r.jsx)(x, {
                    className: t,
                    channelId: n,
                });
            },
            [n],
        ),
        M = i.useCallback(() => {
            var e;
            null == (e = P.current) || e.focus();
        }, []);
    (0, g.yp)({
        event: C.CkL.FOCUS_CHAT_BUTTON,
        handler: S ? null : M,
    });
    let [R, D] = i.useState(!1),
        L = i.useCallback(() => {
            h && D(!0);
        }, [h]);
    (0, g.yp)({
        event: C.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: L,
    }),
        i.useEffect(() => {
            let e;
            return (
                R &&
                    (e = setTimeout(() => {
                        D(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [R]);
    let k = [(t = h && S ? v.intl.string(v.t.DPgc5h) : I ? v.intl.string(v.t.nthdxB) : v.intl.string(v.t["5KxXrK"]))];
    return (
        N > 0 && k.push(v.intl.formatToPlainString(v.t["3l1GOx"], { mentionCount: N })),
        T > 0 && k.push(v.intl.string(v.t.x5zAGZ)),
        (0, r.jsx)(
            y.Z,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
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
                    "aria-label": k.join(", "),
                    iconComponent: w,
                    tooltipPosition: "bottom",
                    wrapperClassName: a()(l, null != o && { [o]: Z }),
                    forceTooltipOpen: R,
                },
                E,
            ),
        )
    );
}
