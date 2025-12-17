n.d(t, {
    ZP: () => $,
    e5: () => F,
    px: () => Z,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
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
    E = n(538870),
    b = n(415635),
    y = n(701362),
    O = n(172751),
    v = n(670188),
    S = n(597998),
    I = n(199902),
    T = n(314897),
    C = n(355863),
    A = n(131951),
    N = n(606304),
    P = n(979651),
    R = n(136015),
    w = n(51144),
    D = n(444295),
    x = n(981631),
    L = n(388032),
    j = n(864570);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    switch (e) {
        case x.ipw.LARGE:
            return c.EFr.SIZE_32;
        case x.ipw.SMALL:
            return c.EFr.SIZE_24;
        default:
            return c.EFr.SIZE_32;
    }
}
function F(e) {
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
    V = 10000,
    H = 2600,
    Y = 16,
    W = {
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
    K = {
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
function z(e, t) {
    let [n, r] = i.useState(null != e && e > Date.now() - V),
        [a, o] = i.useState(!1),
        [s, l] = i.useState(!0);
    return (
        (0, h.ZP)(() => {
            n &&
                !t &&
                (l(!1),
                setTimeout(() => {
                    o(!0);
                }, Y));
        }),
        (0, h.ZP)(() => {
            let e = setTimeout(() => {
                r(!1),
                    setTimeout(() => {
                        o(!1);
                    }, Y);
            }, H);
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
let q = i.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: a, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            {
                showConnectedAnimation: f,
                recentlyConnected: p,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: h,
            } = z(n, a),
            { ref: E, width: b } = (0, _.ZP)(),
            y = (0, l.e7)([g.Z], () => g.Z.useReducedMotion),
            O = p ? "entering" : "exiting",
            { width: v } = (0, s.useSpring)(G(k({}, W[O]), { width: f ? b : u })),
            { opacity: S } = (0, s.useSpring)(
                G(k({}, K[O]), {
                    opacity: +!!f,
                    onRest: () => {
                        f || h(!0);
                    },
                }),
            ),
            I = i.useMemo(() => (m || y ? "none" : "block"), [m, y]);
        return (0, r.jsx)(s.animated.div, {
            className: o()(j.connectedAnimationContainer, { [j.right]: d }),
            style: {
                width: v,
                opacity: S,
                display: I,
            },
            children: (0, r.jsxs)("div", {
                ref: E,
                className: o()(j.connectedAnimationInnerContainer, {
                    [j.exiting]: "exiting" === O,
                    [j.left]: !d,
                    [j.right]: d,
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: B,
                            shouldAnimate: !y,
                            className: j.animation,
                        }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: L.intl.format(L.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !d &&
                        (0, r.jsx)(c.Fmz, {
                            importData: B,
                            shouldAnimate: !y,
                            className: j.animation,
                        }),
                    (0, r.jsx)("div", { className: j.emptySpace }),
                ],
            }),
        });
    }),
    Q = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: a } = e,
            o = 2 * t,
            s = -(t / 2);
        return (0, r.jsx)("div", {
            className: j.effect,
            style: {
                top: s,
                left: s,
                width: o,
                height: o,
            },
            children: (0, r.jsx)(b.Z, {
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
    X = i.memo(c.qEK),
    J = i.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: a = !1,
                user: s,
                nick: u,
                displayNameMode: d,
                displayUserMode: f,
                size: h = x.ipw.LARGE,
                onClick: g,
                onContextMenu: b,
                context: v,
                guildId: C,
                isSettingsPreview: w = !1,
                voiceState: L,
                showStreamPreview: M,
                onShowStreamPreview: k,
                onWatchStream: U,
                connectedOn: G,
                ref: B,
            } = e,
            V = (0, l.e7)([T.default], () => T.default.getId() === s.id, [s.id]),
            { ref: H, width: Y } = (0, _.ZP)(),
            { showConnectedAnimation: W } = z(G, w),
            K = null == L ? void 0 : L.sessionId,
            J = t.id,
            $ = s.id,
            [ee] = (0, l.e7)(
                [P.Z],
                () => {
                    var e;
                    return [
                        null != (e = P.Z.getVoiceStateForChannel(J, $)) ? e : P.Z.getVoiceStateForSession($, K),
                        P.Z.getVoiceStateVersion(),
                    ];
                },
                [J, $, K],
                R.Q,
            ),
            et = w ? L : null != ee ? ee : L,
            [en, er, ei] = (0, l.Wu)(
                [A.Z],
                () =>
                    V
                        ? [!A.Z.isSupported() || A.Z.isSelfMute() || A.Z.isSelfMutedTemporarily(), A.Z.isSelfDeaf(), !1]
                        : [!A.Z.isSupported() || A.Z.isLocalMute(s.id), !1, A.Z.isLocalVideoDisabled(s.id)],
                [V, s.id],
            ),
            ea = (0, l.e7)([I.Z], () => {
                let e = I.Z.getCurrentUserActiveStream();
                return null != e && e.ownerId !== s.id && I.Z.getViewerIds(e).filter((e) => e === s.id).length > 0;
            }, [s.id]),
            eo = w && (null == L ? void 0 : L.discoverable),
            es =
                (0, m.Z)({
                    userId: s.id,
                    context: v,
                }) || eo,
            el = (0, l.e7)([I.Z], () => I.Z.getStreamForUser(s.id, C)),
            ec = null != el,
            eu = i.useCallback(() => {
                (M || null != ec) && k(null);
            }, [k, M, ec]),
            ed = i.useCallback(
                () =>
                    (0, r.jsx)(y.Z, {
                        user: s,
                        channel: t,
                        onWatch: () => {
                            null != el &&
                                ((0, p.rn)(el, {
                                    forceMultiple: !0,
                                    noFocus: !0,
                                }),
                                eu(),
                                U(null != el ? el : null));
                        },
                        onAction: () => U,
                        previewIsOpen: M,
                        location: x.Sbl.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [s, t, el, M, eu, U],
            ),
            ef = i.useCallback(
                (e) => {
                    a || null == b || b(e, s);
                },
                [a, b, s],
            ),
            ep = i.useCallback(() => {
                a || (null != ec && k(s.id));
            }, [a, k, ec, s]),
            e_ = a || w,
            em = i.useMemo(() => Z(h), [h]),
            eh = i.useMemo(() => F(em), [em]),
            eg = i.useMemo(() => s.getAvatarURL(C, eh), [s, C, eh]),
            eE = (0, l.e7)([N.Z], () => N.Z.getVoiceVolume($));
        return (f === x.OYC.ONLY_WHILE_SPEAKING && e_ && !es) || null == et
            ? null
            : n
              ? (0, r.jsxs)(c.P3F, {
                    innerRef: B,
                    className: o()(j.voiceUser, {
                        [j.speaking]: es,
                        [j.interactive]: !a,
                        [j.flipped]: n,
                        [j.justConnected]: W,
                    }),
                    onClick: a ? void 0 : (e) => (null == g ? void 0 : g(e, s)),
                    onContextMenu: ef,
                    onMouseEnter: ep,
                    onMouseLeave: eu,
                    children: [
                        e_ && (d === x.wC$.NEVER || (!es && d === x.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  targetElementRef: H,
                                  position: "left",
                                  renderPopout: ed,
                                  shouldShow: M,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: j.username,
                                          ref: H,
                                          children: [
                                              (0, r.jsx)(S.nm, {
                                                  guildId: C,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ec,
                                                  className: j.voiceIcons,
                                                  iconClassName: j.voiceIcon,
                                                  isWatching: ea,
                                                  localMute: en && !V,
                                                  localVideoDisabled: ei,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (er && !V),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !w &&
                                                  (0, r.jsx)(O.ZP, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: C,
                                                      className: j.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, D.Ws)(x.Odu.VOICE_V3, {
                                                              type: D.Qu.VOICE,
                                                              value: D.bk.PROFILE_OPENED,
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
                        !V &&
                            (0, r.jsx)(q, {
                                nick: u,
                                connectedOn: G,
                                isSettingsPreview: w,
                                voiceBackgroundWidth: Y,
                                rightAlign: !0,
                            }),
                        (0, r.jsx)(X, {
                            className: j.avatar,
                            size: em,
                            src: eg,
                            isSpeaking: es,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: E.h.OUTSET_ONLY,
                                maxOuterSpreadRadius: 4,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(Q, {
                            avatarSize: eh,
                            userId: s.id,
                            channelId: t.id,
                            guildId: t.getGuildId(),
                        }),
                    ],
                })
              : (0, r.jsxs)(c.P3F, {
                    innerRef: B,
                    className: o()(j.voiceUser, {
                        [j.speaking]: es,
                        [j.interactive]: !a,
                        [j.flipped]: n,
                        [j.justConnected]: W,
                    }),
                    onClick: a ? void 0 : (e) => (null == g ? void 0 : g(e, s)),
                    onContextMenu: ef,
                    onMouseEnter: ep,
                    onMouseLeave: eu,
                    children: [
                        (0, r.jsx)(X, {
                            className: j.avatar,
                            size: em,
                            src: eg,
                            isSpeaking: es,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: E.h.OUTSET_ONLY,
                                maxOuterSpreadRadius: 4,
                            },
                            "aria-hidden": !0,
                        }),
                        !V &&
                            (0, r.jsx)(q, {
                                nick: u,
                                connectedOn: G,
                                isSettingsPreview: w,
                                voiceBackgroundWidth: Y,
                            }),
                        e_ && (d === x.wC$.NEVER || (!es && d === x.wC$.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.yRy, {
                                  targetElementRef: H,
                                  position: "right",
                                  renderPopout: ed,
                                  shouldShow: M,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: o()(j.username, { [j.streaming]: ec }),
                                          ref: H,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !w &&
                                                  (0, r.jsx)(O.ZP, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: C,
                                                      className: j.clanTag,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, D.Ws)(x.Odu.VOICE_V3, {
                                                              type: D.Qu.VOICE,
                                                              value: D.bk.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, r.jsx)(S.nm, {
                                                  guildId: C,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ec,
                                                  className: j.voiceIcons,
                                                  iconClassName: j.voiceIcon,
                                                  isWatching: ea,
                                                  localMute: en && !V,
                                                  localVideoDisabled: ei,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (er && !V),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    $ = i.memo(function (e) {
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
            { user: b, member: y, voiceState: O, connectedOn: S } = o,
            [I, T] = i.useState(null),
            [A, N] = i.useState(null);
        i.useEffect(() => {
            c && N(null);
        }, [c]),
            i.useEffect(() => {
                null != I &&
                    (0, D.Ws)(x.Odu.VOICE_V3, {
                        type: D.Qu.GO_LIVE,
                        value: D.bk.STREAM_PREVIEWED,
                    });
            }, [I]);
        let P = (e) => {
                T(e);
            },
            R = (e, t) => {
                h ||
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
                        return (
                            (0, D.Ws)(x.Odu.VOICE_V3, {
                                type: D.Qu.VOICE,
                                value: D.bk.SETTINGS_OPENED,
                                userId: t.id,
                            }),
                            (n) =>
                                (0, r.jsx)(
                                    e,
                                    G(k({}, n), {
                                        user: t,
                                        channelId: null == a ? void 0 : a.id,
                                        guildId: null == a ? void 0 : a.guild_id,
                                        mediaEngineContext: g,
                                        onShowProfile: () => N(t.id),
                                        appContext: x.IlC.OVERLAY,
                                        onWatchStream: () => {
                                            (0, D.Ws)(x.Odu.VOICE_V3, {
                                                type: D.Qu.GO_LIVE,
                                                value: D.bk.ENABLED,
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
                    let i = null == (n = C.Z.getWidget(t)) ? void 0 : n.layoutId,
                        o =
                            null != i
                                ? null == (r = C.Z.getWidgetsForLayout(i))
                                    ? void 0
                                    : r.find((e) => e.type === x.Odu.GO_LIVE)
                                : null;
                    null == o ||
                        o.pinned ||
                        ((0, d.xh)(o.id),
                        f.Z.track(x.rMx.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: null == a ? void 0 : a.guild_id,
                            channel_id: null == a ? void 0 : a.id,
                            channel_type: null == a ? void 0 : a.type,
                            widget_type: x.Odu.GO_LIVE,
                        })),
                        null != e &&
                            null != o &&
                            (0, D.Ws)(x.Odu.VOICE_V3, {
                                type: D.Qu.GO_LIVE,
                                value: D.bk.ENABLED,
                                userId: e.ownerId,
                            });
                },
                [a, t],
            );
        if (null == b || null == a || null == O) return null;
        let j = c || m;
        return (0, r.jsx)(
            v.Z,
            {
                targetElementRef: E,
                user: b,
                guildId: a.guild_id,
                channelId: a.id,
                appContext: x.IlC.OVERLAY,
                shouldShow: A === b.id,
                onRequestClose: () => N(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(J, {
                        ref: E,
                        guildId: null == a ? void 0 : a.guild_id,
                        user: b,
                        connectedOn: S,
                        nick: null != (e = null == y ? void 0 : y.nick) ? e : w.ZP.getName(b),
                        flipped: p,
                        voiceState: O,
                        displayNameMode: s,
                        displayUserMode: l,
                        size: _,
                        locked: j,
                        onContextMenu: R,
                        onClick: R,
                        context: g,
                        channel: a,
                        showStreamPreview: b.id === I,
                        onShowStreamPreview: P,
                        onWatchStream: L,
                        isSettingsPreview: h,
                    });
                },
            },
            b.id,
        );
    });
