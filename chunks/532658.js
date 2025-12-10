n.d(t, {
    ZP: () => X,
    e5: () => G,
    px: () => U,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(467721),
    l = n(442837),
    c = n(481060),
    u = n(239091),
    d = n(765250),
    f = n(13245),
    p = n(872810),
    _ = n(393238),
    m = n(586902),
    h = n(493773),
    g = n(607070),
    E = n(415635),
    b = n(701362),
    y = n(172751),
    O = n(670188),
    v = n(597998),
    S = n(199902),
    I = n(314897),
    T = n(355863),
    C = n(131951),
    A = n(979651),
    N = n(136015),
    P = n(51144),
    R = n(444295),
    D = n(981631),
    w = n(388032),
    x = n(213285);
function L(e, t, n) {
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
function j(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
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
let Z = () =>
        n
            .e("43841")
            .then(n.t.bind(n, 737848, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    B = 10000,
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
    let [n, r] = i.useState(null != e && e > Date.now() - B),
        [a, o] = i.useState(!1),
        [s, l] = i.useState(!0);
    return (
        (0, h.ZP)(() => {
            n &&
                !t &&
                (l(!1),
                setTimeout(() => {
                    o(!0);
                }, V));
        }),
        (0, h.ZP)(() => {
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
                recentlyConnected: p,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: h,
            } = W(n, a),
            { ref: E, width: b } = (0, _.ZP)(),
            y = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
            O = p ? "entering" : "exiting",
            { width: v } = (0, s.useSpring)(k(j({}, H[O]), { width: f ? b : u })),
            { opacity: S } = (0, s.useSpring)(
                k(j({}, Y[O]), {
                    opacity: +!!f,
                    onRest: () => {
                        f || h(!0);
                    },
                }),
            ),
            I = i.useMemo(() => (m || y ? "none" : "block"), [m, y]);
        return (0, r.jsx)(s.animated.div, {
            className: o()(x.connectedAnimationContainer, { [x.right]: d }),
            style: {
                width: v,
                opacity: S,
                display: I,
            },
            children: (0, r.jsxs)("div", {
                ref: E,
                className: o()(x.connectedAnimationInnerContainer, {
                    [x.exiting]: "exiting" === O,
                    [x.left]: !d,
                    [x.right]: d,
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: Z,
                            shouldAnimate: !y,
                            className: x.animation,
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
                            importData: Z,
                            shouldAnimate: !y,
                            className: x.animation,
                        }),
                    (0, r.jsx)("div", { className: x.emptySpace }),
                ],
            }),
        });
    }),
    z = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: a } = e,
            o = 2 * t,
            s = -(t / 2);
        return (0, r.jsx)("div", {
            className: x.effect,
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
    Q = i.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: a = !1,
                user: s,
                nick: u,
                displayNameMode: d,
                displayUserMode: f,
                size: h = D.ipw.LARGE,
                onClick: g,
                onContextMenu: E,
                context: O,
                guildId: T,
                isSettingsPreview: P = !1,
                voiceState: w,
                showStreamPreview: L,
                onShowStreamPreview: j,
                onWatchStream: M,
                connectedOn: k,
                ref: Z,
            } = e,
            B = (0, l.e7)([I.default], () => I.default.getId() === s.id, [s.id]),
            { ref: F, width: V } = (0, _.ZP)(),
            { showConnectedAnimation: H } = W(k, P),
            Y = null == w ? void 0 : w.sessionId,
            Q = t.id,
            X = s.id,
            [J] = (0, l.e7)(
                [A.Z],
                () => {
                    var e;
                    return [
                        null != (e = A.Z.getVoiceStateForChannel(Q, X)) ? e : A.Z.getVoiceStateForSession(X, Y),
                        A.Z.getVoiceStateVersion(),
                    ];
                },
                [Q, X, Y],
                N.Q,
            ),
            $ = P ? w : null != J ? J : w,
            [ee, et, en] = (0, l.Wu)(
                [C.Z],
                () =>
                    B
                        ? [!C.Z.isSupported() || C.Z.isSelfMute() || C.Z.isSelfMutedTemporarily(), C.Z.isSelfDeaf(), !1]
                        : [!C.Z.isSupported() || C.Z.isLocalMute(s.id), !1, C.Z.isLocalVideoDisabled(s.id)],
                [B, s.id],
            ),
            er = (0, l.e7)([S.Z], () => {
                let e = S.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== s.id && S.Z.getViewerIds(e).filter((e) => e === s.id).length > 0;
            }, [s.id]),
            ei = P && (null == w ? void 0 : w.discoverable),
            ea =
                (0, m.Z)({
                    userId: s.id,
                    context: O,
                }) || ei,
            eo = (0, l.e7)([S.Z], () => S.Z.getStreamForUser(s.id, T)),
            es = null != eo,
            el = i.useCallback(() => {
                (L || null != es) && j(null);
            }, [j, L, es]),
            ec = i.useCallback(
                () =>
                    (0, r.jsx)(b.Z, {
                        user: s,
                        channel: t,
                        onWatch: () => {
                            null != eo &&
                                ((0, p.rn)(eo, {
                                    forceMultiple: !0,
                                    noFocus: !0,
                                }),
                                el(),
                                M(null != eo ? eo : null));
                        },
                        onAction: () => M,
                        previewIsOpen: L,
                        location: D.Sbl.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [s, t, eo, L, el, M],
            ),
            eu = i.useCallback(
                (e) => {
                    a || null == E || E(e, s);
                },
                [a, E, s],
            ),
            ed = i.useCallback(() => {
                a || (null != es && j(s.id));
            }, [a, j, es, s]),
            ef = a || P,
            ep = i.useMemo(() => U(h), [h]),
            e_ = i.useMemo(() => G(ep), [ep]),
            em = i.useMemo(() => s.getAvatarURL(T, e_), [s, T, e_]);
        return (f === D.OYC.ONLY_WHILE_SPEAKING && ef && !ea) || null == $
            ? null
            : n
              ? (0, r.jsxs)(c.P3F, {
                    innerRef: Z,
                    className: o()(x.voiceUser, {
                        [x.speaking]: ea,
                        [x.interactive]: !a,
                        [x.flipped]: n,
                        [x.justConnected]: H,
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
                                  shouldShow: L,
                                  onRequestClose: el,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: x.username,
                                          ref: F,
                                          children: [
                                              (0, r.jsx)(v.nm, {
                                                  guildId: T,
                                                  user: s,
                                                  video: $.selfVideo,
                                                  isStreaming: es,
                                                  className: x.voiceIcons,
                                                  iconClassName: x.voiceIcon,
                                                  isWatching: er,
                                                  localMute: ee && !B,
                                                  localVideoDisabled: en,
                                                  mute: $.isVoiceMuted(),
                                                  deaf: $.isVoiceDeafened() || (et && !B),
                                                  serverMute: $.mute || $.suppress,
                                                  serverDeaf: $.deaf,
                                                  disabled: !1,
                                              }),
                                              !P &&
                                                  (0, r.jsx)(y.ZP, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: T,
                                                      className: x.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.Ws)(D.Odu.VOICE_V3, {
                                                              type: R.Qu.VOICE,
                                                              value: R.bk.PROFILE_OPENED,
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
                        !B &&
                            (0, r.jsx)(K, {
                                nick: u,
                                connectedOn: k,
                                isSettingsPreview: P,
                                voiceBackgroundWidth: V,
                                rightAlign: !0,
                            }),
                        (0, r.jsx)(q, {
                            className: x.avatar,
                            size: ep,
                            src: em,
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(z, {
                            avatarSize: e_,
                            userId: s.id,
                            channelId: t.id,
                            guildId: t.getGuildId(),
                        }),
                    ],
                })
              : (0, r.jsxs)(c.P3F, {
                    innerRef: Z,
                    className: o()(x.voiceUser, {
                        [x.speaking]: ea,
                        [x.interactive]: !a,
                        [x.flipped]: n,
                        [x.justConnected]: H,
                    }),
                    onClick: a ? void 0 : (e) => (null == g ? void 0 : g(e, s)),
                    onContextMenu: eu,
                    onMouseEnter: ed,
                    onMouseLeave: el,
                    children: [
                        (0, r.jsx)(q, {
                            className: x.avatar,
                            size: ep,
                            src: em,
                            "aria-hidden": !0,
                        }),
                        !B &&
                            (0, r.jsx)(K, {
                                nick: u,
                                connectedOn: k,
                                isSettingsPreview: P,
                                voiceBackgroundWidth: V,
                            }),
                        ef && (d === D.wC$.NEVER || (!ea && d === D.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  targetElementRef: F,
                                  position: "right",
                                  renderPopout: ec,
                                  shouldShow: L,
                                  onRequestClose: el,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: o()(x.username, { [x.streaming]: es }),
                                          ref: F,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !P &&
                                                  (0, r.jsx)(y.ZP, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: T,
                                                      className: x.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.Ws)(D.Odu.VOICE_V3, {
                                                              type: R.Qu.VOICE,
                                                              value: R.bk.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, r.jsx)(v.nm, {
                                                  guildId: T,
                                                  user: s,
                                                  video: $.selfVideo,
                                                  isStreaming: es,
                                                  className: x.voiceIcons,
                                                  iconClassName: x.voiceIcon,
                                                  isWatching: er,
                                                  localMute: ee && !B,
                                                  localVideoDisabled: en,
                                                  mute: $.isVoiceMuted(),
                                                  deaf: $.isVoiceDeafened() || (et && !B),
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
    X = i.memo(function (e) {
        let {
                widgetId: t,
                channel: a,
                sortedVoiceState: o,
                displayNameMode: s,
                displayUserMode: l,
                locked: c,
                flipped: p,
                size: _,
                isPreviewingInGame: m,
                isSettingsPreview: h,
                context: g,
            } = e,
            E = i.useRef(null),
            { user: b, member: y, voiceState: v, connectedOn: S } = o,
            [I, C] = i.useState(null),
            [A, N] = i.useState(null);
        i.useEffect(() => {
            c && N(null);
        }, [c]),
            i.useEffect(() => {
                null != I &&
                    (0, R.Ws)(D.Odu.VOICE_V3, {
                        type: R.Qu.GO_LIVE,
                        value: R.bk.STREAM_PREVIEWED,
                    });
            }, [I]);
        let w = (e) => {
                C(e);
            },
            x = (e, t) => {
                h ||
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
                        return (
                            (0, R.Ws)(D.Odu.VOICE_V3, {
                                type: R.Qu.VOICE,
                                value: R.bk.SETTINGS_OPENED,
                                userId: t.id,
                            }),
                            (n) =>
                                (0, r.jsx)(
                                    e,
                                    k(j({}, n), {
                                        user: t,
                                        channelId: null == a ? void 0 : a.id,
                                        guildId: null == a ? void 0 : a.guild_id,
                                        mediaEngineContext: g,
                                        onShowProfile: () => N(t.id),
                                        appContext: D.IlC.OVERLAY,
                                        onWatchStream: () => {
                                            (0, R.Ws)(D.Odu.VOICE_V3, {
                                                type: R.Qu.GO_LIVE,
                                                value: R.bk.ENABLED,
                                                userId: t.id,
                                            });
                                        },
                                    }),
                                )
                        );
                    });
            },
            L = i.useCallback(
                (e) => {
                    var n, r;
                    let i = null == (n = T.Z.getWidget(t)) ? void 0 : n.layoutId,
                        o =
                            null != i
                                ? null == (r = T.Z.getWidgetsForLayout(i))
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
                            (0, R.Ws)(D.Odu.VOICE_V3, {
                                type: R.Qu.GO_LIVE,
                                value: R.bk.ENABLED,
                                userId: e.ownerId,
                            });
                },
                [a, t],
            );
        if (null == b || null == a || null == v) return null;
        let M = c || m;
        return (0, r.jsx)(
            O.Z,
            {
                targetElementRef: E,
                user: b,
                guildId: a.guild_id,
                channelId: a.id,
                appContext: D.IlC.OVERLAY,
                shouldShow: A === b.id,
                onRequestClose: () => N(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(Q, {
                        ref: E,
                        guildId: null == a ? void 0 : a.guild_id,
                        user: b,
                        connectedOn: S,
                        nick: null != (e = null == y ? void 0 : y.nick) ? e : P.ZP.getName(b),
                        flipped: p,
                        voiceState: v,
                        displayNameMode: s,
                        displayUserMode: l,
                        size: _,
                        locked: M,
                        onContextMenu: x,
                        onClick: x,
                        context: g,
                        channel: a,
                        showStreamPreview: b.id === I,
                        onShowStreamPreview: w,
                        onWatchStream: L,
                        isSettingsPreview: h,
                    });
                },
            },
            b.id,
        );
    });
