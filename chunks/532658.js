n.d(t, {
    ZP: () => Q,
    e5: () => G,
    px: () => U,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(790519),
    l = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(765250),
    f = n(13245),
    _ = n(872810),
    p = n(393238),
    h = n(586902),
    m = n(493773),
    g = n(607070),
    E = n(415635),
    b = n(701362),
    y = n(172751),
    O = n(456077),
    v = n(597998),
    I = n(199902),
    T = n(314897),
    S = n(355863),
    A = n(131951),
    C = n(979651),
    N = n(136015),
    R = n(51144),
    P = n(444295),
    D = n(981631),
    w = n(388032),
    L = n(213285);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    switch (e) {
        case D.ipw.LARGE:
            return c.EFr.SIZE_32;
        case D.ipw.SMALL:
            return c.EFr.SIZE_24;
        default:
            return c.EFr.SIZE_32;
    }
}
function G(e) {
    return c.ny6[e].size;
}
let B = () =>
        n
            .e("43841")
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    Z = 10000,
    F = 2600,
    V = 16,
    H = {
        entering: {
            config: {
                mass: 0.2,
                tension: 180,
                friction: 14,
            },
        },
        exiting: {
            config: {
                mass: 1,
                tension: 80,
                friction: 10,
                clamp: !0,
            },
        },
    },
    Y = {
        entering: {
            config: {
                mass: 0.5,
                tension: 240,
                friction: 10,
            },
        },
        exiting: {
            config: {
                mass: 1.5,
                tension: 300,
                friction: 30,
                clamp: !0,
            },
            delay: 300,
        },
    };
function W(e, t) {
    let [n, r] = i.useState(null != e && e > Date.now() - Z),
        [a, o] = i.useState(!1),
        [s, l] = i.useState(!0);
    return (
        (0, m.ZP)(() => {
            n &&
                !t &&
                (l(!1),
                setTimeout(() => {
                    o(!0);
                }, V));
        }),
        (0, m.ZP)(() => {
            let e = setTimeout(() => {
                r(!1),
                    setTimeout(() => {
                        o(!1);
                    }, V);
            }, F);
            return () => clearTimeout(e);
        }),
        i.useMemo(
            () => ({
                showConnectedAnimation: a,
                recentlyConnected: n,
                hideConnectedAnimation: s,
                setHideConnectedAnimation: l,
            }),
            [a, n, s, l],
        )
    );
}
let K = i.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: a, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            {
                showConnectedAnimation: f,
                recentlyConnected: _,
                hideConnectedAnimation: h,
                setHideConnectedAnimation: m,
            } = W(n, a),
            { ref: E, width: b } = (0, p.ZP)(),
            y = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
            O = _ ? "entering" : "exiting",
            { width: v } = (0, s.useSpring)(j(M({}, H[O]), { width: f ? b : u })),
            { opacity: I } = (0, s.useSpring)(
                j(M({}, Y[O]), {
                    opacity: +!!f,
                    onRest: () => {
                        f || m(!0);
                    },
                }),
            ),
            T = i.useMemo(() => (h || y ? "none" : "block"), [h, y]);
        return (0, r.jsx)(s.animated.div, {
            className: o()(L.connectedAnimationContainer, { [L.right]: d }),
            style: {
                width: v,
                opacity: I,
                display: T,
            },
            children: (0, r.jsxs)("div", {
                ref: E,
                className: o()(L.connectedAnimationInnerContainer, {
                    [L.exiting]: "exiting" === O,
                    [L.left]: !d,
                    [L.right]: d,
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: B,
                            shouldAnimate: !y,
                            className: L.animation,
                        }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: w.intl.format(w.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: B,
                            shouldAnimate: !y,
                            className: L.animation,
                        }),
                    (0, r.jsx)("div", { className: L.emptySpace }),
                ],
            }),
        });
    }),
    z = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: a } = e,
            o = 2 * t,
            s = -(t / 2);
        return (0, r.jsx)("div", {
            className: L.effect,
            style: {
                top: s,
                left: s,
                width: o,
                height: o,
            },
            children: (0, r.jsx)(E.Z, {
                userId: n,
                channelId: i,
                guildId: a,
                containerDimensions: {
                    width: o,
                    height: o,
                },
            }),
        });
    }),
    q = i.memo(c.qEK),
    X = i.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: a = !1,
                user: s,
                nick: u,
                displayNameMode: d,
                displayUserMode: f,
                size: m = D.ipw.LARGE,
                onClick: g,
                onContextMenu: E,
                context: O,
                guildId: S,
                isSettingsPreview: R = !1,
                voiceState: w,
                showStreamPreview: x,
                onShowStreamPreview: M,
                onWatchStream: k,
                connectedOn: j,
                ref: B,
            } = e,
            Z = (0, l.e7)([T.default], () => T.default.getId() === s.id, [s.id]),
            { ref: F, width: V } = (0, p.ZP)(),
            { showConnectedAnimation: H } = W(j, R),
            Y = null == w ? void 0 : w.sessionId,
            X = t.id,
            Q = s.id,
            [J] = (0, l.e7)(
                [C.Z],
                () => {
                    var e;
                    return [
                        null != (e = C.Z.getVoiceStateForChannel(X, Q)) ? e : C.Z.getVoiceStateForSession(Q, Y),
                        C.Z.getVoiceStateVersion(),
                    ];
                },
                [X, Q, Y],
                N.Q,
            ),
            $ = R ? w : null != J ? J : w,
            [ee, et, en] = (0, l.Wu)(
                [A.Z],
                () =>
                    Z
                        ? [!A.Z.isSupported() || A.Z.isSelfMute() || A.Z.isSelfMutedTemporarily(), A.Z.isSelfDeaf(), !1]
                        : [!A.Z.isSupported() || A.Z.isLocalMute(s.id), !1, A.Z.isLocalVideoDisabled(s.id)],
                [Z, s.id],
            ),
            er = (0, l.e7)([I.Z], () => {
                let e = I.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== s.id && I.Z.getViewerIds(e).filter((e) => e === s.id).length > 0;
            }, [s.id]),
            ei = R && (null == w ? void 0 : w.discoverable),
            ea =
                (0, h.Z)({
                    userId: s.id,
                    context: O,
                }) || ei,
            eo = (0, l.e7)([I.Z], () => I.Z.getStreamForUser(s.id, S)),
            es = null != eo,
            el = i.useCallback(() => {
                (x || null != es) && M(null);
            }, [M, x, es]),
            ec = i.useCallback(
                () =>
                    (0, r.jsx)(b.Z, {
                        user: s,
                        channel: t,
                        onWatch: () => {
                            null != eo &&
                                ((0, _.rn)(eo, {
                                    forceMultiple: !0,
                                    noFocus: !0,
                                }),
                                el(),
                                k(null != eo ? eo : null));
                        },
                        onAction: () => k,
                        previewIsOpen: x,
                        location: D.Sbl.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [s, t, eo, x, el, k],
            ),
            eu = i.useCallback(
                (e) => {
                    a || null == E || E(e, s);
                },
                [a, E, s],
            ),
            ed = i.useCallback(() => {
                a || (null != es && M(s.id));
            }, [a, M, es, s]),
            ef = a || R,
            e_ = i.useMemo(() => U(m), [m]),
            ep = i.useMemo(() => G(e_), [e_]),
            eh = i.useMemo(() => s.getAvatarURL(S, ep), [s, S, ep]);
        return (f === D.OYC.ONLY_WHILE_SPEAKING && ef && !ea) || null == $
            ? null
            : n
              ? (0, r.jsxs)(c.P3F, {
                    innerRef: B,
                    className: o()(L.voiceUser, {
                        [L.speaking]: ea,
                        [L.interactive]: !a,
                        [L.flipped]: n,
                        [L.justConnected]: H,
                    }),
                    onClick: a ? void 0 : (e) => (null == g ? void 0 : g(e, s)),
                    onContextMenu: eu,
                    onMouseEnter: ed,
                    onMouseLeave: el,
                    children: [
                        ef && (d === D.wC$.NEVER || (!ea && d === D.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  targetElementRef: F,
                                  position: "left",
                                  renderPopout: ec,
                                  shouldShow: x,
                                  onRequestClose: el,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: L.username,
                                          ref: F,
                                          children: [
                                              (0, r.jsx)(v.nm, {
                                                  guildId: S,
                                                  user: s,
                                                  video: $.selfVideo,
                                                  isStreaming: es,
                                                  className: L.voiceIcons,
                                                  iconClassName: L.voiceIcon,
                                                  isWatching: er,
                                                  localMute: ee && !Z,
                                                  localVideoDisabled: en,
                                                  mute: $.isVoiceMuted(),
                                                  deaf: $.isVoiceDeafened() || (et && !Z),
                                                  serverMute: $.mute || $.suppress,
                                                  serverDeaf: $.deaf,
                                                  disabled: !1,
                                              }),
                                              !R &&
                                                  (0, r.jsx)(y.ZP, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: S,
                                                      className: L.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, P.Ws)(D.Odu.VOICE_V3, {
                                                              type: P.Qu.VOICE,
                                                              value: P.bk.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                          ],
                                      }),
                              }),
                        !Z &&
                            (0, r.jsx)(K, {
                                nick: u,
                                connectedOn: j,
                                isSettingsPreview: R,
                                voiceBackgroundWidth: V,
                                rightAlign: !0,
                            }),
                        (0, r.jsx)(q, {
                            className: L.avatar,
                            size: e_,
                            src: eh,
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(z, {
                            avatarSize: ep,
                            userId: s.id,
                            channelId: t.id,
                            guildId: t.getGuildId(),
                        }),
                    ],
                })
              : (0, r.jsxs)(c.P3F, {
                    innerRef: B,
                    className: o()(L.voiceUser, {
                        [L.speaking]: ea,
                        [L.interactive]: !a,
                        [L.flipped]: n,
                        [L.justConnected]: H,
                    }),
                    onClick: a ? void 0 : (e) => (null == g ? void 0 : g(e, s)),
                    onContextMenu: eu,
                    onMouseEnter: ed,
                    onMouseLeave: el,
                    children: [
                        (0, r.jsx)(q, {
                            className: L.avatar,
                            size: e_,
                            src: eh,
                            "aria-hidden": !0,
                        }),
                        !Z &&
                            (0, r.jsx)(K, {
                                nick: u,
                                connectedOn: j,
                                isSettingsPreview: R,
                                voiceBackgroundWidth: V,
                            }),
                        ef && (d === D.wC$.NEVER || (!ea && d === D.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  targetElementRef: F,
                                  position: "right",
                                  renderPopout: ec,
                                  shouldShow: x,
                                  onRequestClose: el,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: o()(L.username, { [L.streaming]: es }),
                                          ref: F,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !R &&
                                                  (0, r.jsx)(y.ZP, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: S,
                                                      className: L.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, P.Ws)(D.Odu.VOICE_V3, {
                                                              type: P.Qu.VOICE,
                                                              value: P.bk.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, r.jsx)(v.nm, {
                                                  guildId: S,
                                                  user: s,
                                                  video: $.selfVideo,
                                                  isStreaming: es,
                                                  className: L.voiceIcons,
                                                  iconClassName: L.voiceIcon,
                                                  isWatching: er,
                                                  localMute: ee && !Z,
                                                  localVideoDisabled: en,
                                                  mute: $.isVoiceMuted(),
                                                  deaf: $.isVoiceDeafened() || (et && !Z),
                                                  serverMute: $.mute || $.suppress,
                                                  serverDeaf: $.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    Q = i.memo(function (e) {
        let {
                widgetId: t,
                channel: a,
                sortedVoiceState: o,
                displayNameMode: s,
                displayUserMode: l,
                locked: c,
                flipped: _,
                size: p,
                isPreviewingInGame: h,
                isSettingsPreview: m,
                context: g,
            } = e,
            E = i.useRef(null),
            { user: b, member: y, voiceState: v, connectedOn: I } = o,
            [T, A] = i.useState(null),
            [C, N] = i.useState(null);
        i.useEffect(() => {
            c && N(null);
        }, [c]),
            i.useEffect(() => {
                null != T &&
                    (0, P.Ws)(D.Odu.VOICE_V3, {
                        type: P.Qu.GO_LIVE,
                        value: P.bk.STREAM_PREVIEWED,
                    });
            }, [T]);
        let w = (e) => {
                A(e);
            },
            L = (e, t) => {
                m ||
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
                        return (
                            (0, P.Ws)(D.Odu.VOICE_V3, {
                                type: P.Qu.VOICE,
                                value: P.bk.SETTINGS_OPENED,
                                userId: t.id,
                            }),
                            (n) =>
                                (0, r.jsx)(
                                    e,
                                    j(M({}, n), {
                                        user: t,
                                        channelId: null == a ? void 0 : a.id,
                                        guildId: null == a ? void 0 : a.guild_id,
                                        mediaEngineContext: g,
                                        onShowProfile: () => N(t.id),
                                        appContext: D.IlC.OVERLAY,
                                        onWatchStream: () => {
                                            (0, P.Ws)(D.Odu.VOICE_V3, {
                                                type: P.Qu.GO_LIVE,
                                                value: P.bk.ENABLED,
                                                userId: t.id,
                                            });
                                        },
                                    }),
                                )
                        );
                    });
            },
            x = i.useCallback(
                (e) => {
                    var n, r;
                    let i = null == (n = S.Z.getWidget(t)) ? void 0 : n.layoutId,
                        o =
                            null != i
                                ? null == (r = S.Z.getWidgetsForLayout(i))
                                    ? void 0
                                    : r.find((e) => e.type === D.Odu.GO_LIVE)
                                : null;
                    null == o ||
                        o.pinned ||
                        ((0, d.xh)(o.id),
                        f.Z.track(D.rMx.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: null == a ? void 0 : a.guild_id,
                            channel_id: null == a ? void 0 : a.id,
                            channel_type: null == a ? void 0 : a.type,
                            widget_type: D.Odu.GO_LIVE,
                        })),
                        null != e &&
                            null != o &&
                            (0, P.Ws)(D.Odu.VOICE_V3, {
                                type: P.Qu.GO_LIVE,
                                value: P.bk.ENABLED,
                                userId: e.ownerId,
                            });
                },
                [a, t],
            );
        if (null == b || null == a || null == v) return null;
        let k = c || h;
        return (0, r.jsx)(
            O.Z,
            {
                targetElementRef: E,
                user: b,
                guildId: a.guild_id,
                channelId: a.id,
                appContext: D.IlC.OVERLAY,
                shouldShow: C === b.id,
                onRequestClose: () => N(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(X, {
                        ref: E,
                        guildId: null == a ? void 0 : a.guild_id,
                        user: b,
                        connectedOn: I,
                        nick: null != (e = null == y ? void 0 : y.nick) ? e : R.ZP.getName(b),
                        flipped: _,
                        voiceState: v,
                        displayNameMode: s,
                        displayUserMode: l,
                        size: p,
                        locked: k,
                        onContextMenu: L,
                        onClick: L,
                        context: g,
                        channel: a,
                        showStreamPreview: b.id === T,
                        onShowStreamPreview: w,
                        onWatchStream: x,
                        isSettingsPreview: m,
                    });
                },
            },
            b.id,
        );
    });
