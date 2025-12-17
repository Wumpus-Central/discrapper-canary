n.d(t, { T: () => j }), n(388685), n(539854);
var i = n(54381),
    r = n(473749),
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
    C = n(774168),
    y = n(871499),
    v = n(981631),
    x = n(388032);
function O(e) {
    let t = (0, s.e7)([m.Z], () => !(0, o.isEmpty)(m.Z.getTypingUsers(e)), [e]),
        n = (0, s.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
        { unreadCount: i, mentionCount: r } = (0, s.cj)(
            [f.ZP],
            () => ({
                unreadCount: f.ZP.getUnreadCount(e),
                mentionCount: f.ZP.getMentionCount(e),
            }),
            [e],
        );
    return {
        unreadCount: i,
        mentionCount: r,
        voiceChannelIsSelected: n,
        isTyping: t,
    };
}
function E(e) {
    let { className: t, channelId: n } = e,
        { unreadCount: r, mentionCount: l, isTyping: a, voiceChannelIsSelected: o } = O(n);
    return (0, i.jsx)(C.Z, {
        className: t,
        unreadCount: r,
        mentionCount: l,
        isTyping: a,
        canBadge: o,
    });
}
function j(e) {
    let t;
    var {
            channelId: n,
            className: l,
            showingClassName: o,
            onClick: f,
            inPopout: h,
            showRequestToSpeakSidebar: m,
            toggleRequestToSpeakSidebar: C,
        } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, [
            "channelId",
            "className",
            "showingClassName",
            "onClick",
            "inPopout",
            "showRequestToSpeakSidebar",
            "toggleRequestToSpeakSidebar",
        ]);
    let { parentAnalyticsLocation: S } = (0, u.ZP)(),
        { disabled: _ } = j,
        P = r.useRef(null),
        I = (0, s.e7)([d.Z], () => d.Z.getChatOpen(n), [n]),
        {
            isShowing: Z,
            unreadCount: T,
            mentionCount: N,
        } = (function (e) {
            let { unreadCount: t, mentionCount: n, isTyping: i } = O(e),
                [l, a] = r.useState(!1);
            return (
                r.useEffect(() => {
                    a(t > 0);
                    let e = setTimeout(() => {
                        a(!1);
                    }, b.z);
                    return () => {
                        clearTimeout(e), a(!1);
                    };
                }, [t]),
                {
                    isShowing: l || n > 0 || i,
                    unreadCount: t,
                    mentionCount: n,
                }
            );
        })(n),
        A = r.useCallback(() => {
            (0, p.v)(S, p.d.CHAT, !I), null == f || f(), !I && m && (null == C || C()), c.Z.updateChatOpen(n, !I);
        }, [n, I, f, m, C, S]),
        w = r.useCallback(
            (e) => {
                let { className: t } = e;
                return (0, i.jsx)(E, {
                    className: t,
                    channelId: n,
                });
            },
            [n],
        ),
        M = r.useCallback(() => {
            var e;
            null == (e = P.current) || e.focus();
        }, []);
    (0, g.yp)({
        event: v.CkL.FOCUS_CHAT_BUTTON,
        handler: _ ? null : M,
    });
    let [R, L] = r.useState(!1),
        D = r.useCallback(() => {
            h && L(!0);
        }, [h]);
    (0, g.yp)({
        event: v.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
        handler: D,
    }),
        r.useEffect(() => {
            let e;
            return (
                R &&
                    (e = setTimeout(() => {
                        L(!1);
                    }, 3000)),
                () => {
                    clearTimeout(e);
                }
            );
        }, [R]);
    let k = [(t = h && _ ? x.intl.string(x.t.DPgc5h) : I ? x.intl.string(x.t.nthdxB) : x.intl.string(x.t["5KxXrK"]))];
    return (
        N > 0 && k.push(x.intl.formatToPlainString(x.t["3l1GOx"], { mentionCount: N })),
        T > 0 && k.push(x.intl.string(x.t.x5zAGZ)),
        (0, i.jsx)(
            y.Z,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
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
                j,
            ),
        )
    );
}
