n.d(t, { DH: () => eb, Ay: () => ew }), n(321073);
var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r),
    a = n(17928),
    o = n(834730),
    d = n(983851),
    u = n(717558),
    c = n(429913),
    h = n(478063),
    m = n(47167),
    g = n(22705),
    p = n(209932),
    f = n(63995),
    x = n(518769),
    A = n(530804),
    E = n(616356),
    S = n(280450),
    I = n(734057),
    v = n(309010),
    j = n(485296),
    T = n(287809),
    C = n(977997),
    y = n(607567),
    b = n(184809),
    w = n(403362),
    N = n(996439),
    _ = n(3451),
    R = n(810412),
    O = n(412477),
    M = n(489277),
    k = n(243612),
    D = n(74445),
    z = n(778712),
    P = n(604121),
    L = n(97808),
    V = n(939249),
    G = n(922016),
    U = n(442433),
    F = n(391973),
    H = n(684013),
    Z = n(401843),
    Y = n(765671),
    X = n(964486),
    W = n(775602),
    B = n(66004),
    q = n(556525),
    K = n(80682),
    Q = n(290863),
    J = n(174459),
    $ = n(834757),
    ee = n(727353),
    et = n(652215),
    en = n(626436);
class ei extends s.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        J.default.track(et.HAw.OPEN_POPOUT, {
            type: "Stream Preview",
            other_user_id: e.id,
            application_id: null != t ? t.id : null,
            application_name: null != t ? t.name : null,
            game_id: null != t ? t.id : null,
            is_streaming: !0,
        });
    }
    render() {
        let {
            activity: e,
            user: t,
            stream: n,
            previewIsOpen: s,
            onAction: r,
            hideTip: a,
            onWatch: o,
            streamApplication: d,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: l()(en.yt, { [en.P0]: s }),
                  children: (0, i.jsx)(ee.Z, {
                      stream: n,
                      streamActivity: e,
                      streamApplication: d,
                      user: t,
                      onWatchStream: o,
                      onAction: r,
                      hideTip: a,
                  }),
              });
    }
}
function es(e) {
    let { user: t, channel: n, ...r } = e,
        l = (0, a.bG)([E.A], () => E.A.getStreamForUser(t.id, n.getGuildId())),
        o = (0, $.AO)(l),
        d = (0, a.bG)([Q.A], () => (0, $.nr)(l, Q.A)),
        u = s.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, K.Eq)(u, "StreamPreviewPopout"),
        (0, i.jsx)(ei, { ...r, user: t, streamApplication: o, stream: l, activity: d, channel: n })
    );
}
var er = n(534400),
    el = n(342296),
    ea = n(481947),
    eo = n(38502),
    ed = n(916546),
    eu = n(427262),
    ec = n(375708),
    eh = n(940220);
function em(e) {
    switch (e) {
        case et.OSZ.LARGE:
            return z._3.SIZE_32;
        case et.OSZ.SMALL:
            return z._3.SIZE_24;
        default:
            return z._3.SIZE_32;
    }
}
function eg(e) {
    return z.vC[e].size;
}
function ep() {
    return n
        .e("515423")
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let ef = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    ex = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function eA(e, t) {
    let [n, i] = s.useState(null != e && e > Date.now() - 1e4),
        [r, l] = s.useState(!1),
        [a, o] = s.useState(!0);
    return (
        (0, X.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    l(!0);
                }, 16));
        }),
        (0, X.Ay)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        l(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        s.useMemo(
            () => ({
                showConnectedAnimation: r,
                recentlyConnected: n,
                hideConnectedAnimation: a,
                setHideConnectedAnimation: o,
            }),
            [r, n, a, o],
        )
    );
}
let eE = s.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: r, voiceBackgroundWidth: d, rightAlign: u = !1 } = e,
            {
                showConnectedAnimation: c,
                recentlyConnected: h,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: g,
            } = eA(n, r),
            { ref: p, width: f } = (0, Y.Ay)(),
            x = (0, a.bG)([W.Ay], () => W.Ay.useReducedMotion),
            A = h ? "entering" : "exiting",
            { width: E } = (0, D.useSpring)({ ...ef[A], width: c ? f : d }),
            { opacity: S } = (0, D.useSpring)({
                ...ex[A],
                opacity: +!!c,
                onRest: () => {
                    c || g(!0);
                },
            }),
            I = s.useMemo(() => (m || x ? "none" : "block"), [m, x]);
        return (0, i.jsx)(D.animated.div, {
            className: l()(eh.rH, { [eh.pG]: u }),
            style: { width: E, opacity: S, display: I },
            children: (0, i.jsxs)("div", {
                ref: p,
                className: l()(eh.LB, { [eh.RP]: "exiting" === A, [eh.kb]: !u, [eh.pG]: u }),
                children: [
                    u && (0, i.jsx)(P.a, { importData: ep, shouldAnimate: !x, className: eh.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: ec.intl.format(ec.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !u && (0, i.jsx)(P.a, { importData: ep, shouldAnimate: !x, className: eh.lY }),
                    (0, i.jsx)("div", { className: eh.k1 }),
                ],
            }),
        });
    }),
    eS = s.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: s, guildId: r } = e,
            l = 2 * t,
            a = -(t / 2);
        return (0, i.jsx)("div", {
            className: eh.QZ,
            style: { top: a, left: a, width: l, height: l },
            children: (0, i.jsx)(B.A, {
                userId: n,
                channelId: s,
                guildId: r,
                containerDimensions: { width: l, height: l },
            }),
        });
    }),
    eI = s.memo(L.eu),
    ev = s.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: r = !1,
                user: d,
                nick: c,
                displayNameMode: h,
                displayUserMode: m,
                size: g = et.OSZ.LARGE,
                onClick: p,
                onContextMenu: f,
                context: x,
                guildId: A,
                isSettingsPreview: I = !1,
                voiceState: v,
                showStreamPreview: T,
                onShowStreamPreview: y,
                onWatchStream: b,
                connectedOn: w,
                ref: _,
            } = e,
            O = (0, a.bG)([S.default], () => S.default.getId() === d.id, [d.id]),
            { ref: M, width: k } = (0, Y.Ay)(),
            { showConnectedAnimation: D } = eA(w, I),
            z = v?.sessionId,
            P = t.id,
            L = d.id,
            [U] = (0, a.bG)(
                [C.A],
                () => [
                    C.A.getVoiceStateForChannel(P, L) ?? C.A.getVoiceStateForSession(L, z),
                    C.A.getVoiceStateVersion(),
                ],
                [P, L, z],
                N.D,
            ),
            F = I ? v : (U ?? v),
            [H, X, W] = (0, a.yK)(
                [ed.Ay],
                () =>
                    O
                        ? [
                              !ed.Ay.isSupported() || ed.Ay.isSelfMute() || ed.Ay.isSelfMutedTemporarily(),
                              ed.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!ed.Ay.isSupported() || ed.Ay.isLocalMute(d.id), !1, ed.Ay.isLocalVideoDisabled(d.id)],
                [O, d.id],
            ),
            B = (0, a.bG)([E.A], () => {
                let e = E.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== d.id && E.A.getViewerIds(e).filter((e) => e === d.id).length > 0;
            }, [d.id]),
            K = I && v?.discoverable,
            Q = (0, u.A)({ userId: d.id, context: x }) || K,
            J = (0, a.bG)([E.A], () => E.A.getStreamForUser(d.id, A)),
            $ = null != J,
            ee = s.useCallback(() => {
                (T || null != $) && y(null);
            }, [y, T, $]),
            en = s.useCallback(
                () =>
                    (0, i.jsx)(es, {
                        user: d,
                        channel: t,
                        onWatch: () => {
                            null != J && ((0, Z.A9)(J, { forceMultiple: !0, noFocus: !0 }), ee(), b(J ?? null));
                        },
                        onAction: () => b,
                        previewIsOpen: T,
                        location: et.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [d, t, J, T, ee, b],
            ),
            ei = s.useCallback(
                (e) => {
                    r || f?.(e, d);
                },
                [r, f, d],
            ),
            el = s.useCallback(() => {
                r || (null != $ && y(d.id));
            }, [r, y, $, d]),
            eo = r || I,
            eu = s.useMemo(() => em(g), [g]),
            ec = s.useMemo(() => eg(eu), [eu]),
            ep = s.useMemo(() => d.getAvatarURL(A, ec), [d, A, ec]),
            ef = (0, a.bG)([j.A], () => j.A.getVoiceVolume(L));
        return (m === et.f5z.ONLY_WHILE_SPEAKING && eo && !Q) || null == F
            ? null
            : n
              ? (0, i.jsxs)(V.D, {
                    innerRef: _,
                    className: l()(eh.q7, { [eh.zY]: Q, [eh.bG]: !r, [eh.zq]: n, [eh.cU]: D }),
                    onClick: r ? void 0 : (e) => p?.(e, d),
                    onContextMenu: ei,
                    onMouseEnter: el,
                    onMouseLeave: ee,
                    children: [
                        eo && (h === et.pwA.NEVER || (!Q && h === et.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: M,
                                  position: "left",
                                  renderPopout: en,
                                  shouldShow: T,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: eh.Xh,
                                          ref: M,
                                          children: [
                                              (0, i.jsx)(ea.Kc, {
                                                  guildId: A,
                                                  user: d,
                                                  video: F.selfVideo,
                                                  isStreaming: $,
                                                  className: eh.ZA,
                                                  iconClassName: eh.Ow,
                                                  isWatching: B,
                                                  localMute: H && !O,
                                                  localVideoDisabled: W,
                                                  mute: F.isVoiceMuted(),
                                                  deaf: F.isVoiceDeafened() || (X && !O),
                                                  serverMute: F.mute || F.suppress,
                                                  serverDeaf: F.deaf,
                                                  disabled: !1,
                                              }),
                                              !I &&
                                                  (0, i.jsx)(er.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: A,
                                                      className: eh.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.YX)(et.uss.VOICE_V3, {
                                                              type: R.Z5.VOICE,
                                                              value: R.IP.PROFILE_OPENED,
                                                              userId: d.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                          ],
                                      }),
                              }),
                        !O &&
                            (0, i.jsx)(eE, {
                                nick: c,
                                connectedOn: w,
                                isSettingsPreview: I,
                                voiceBackgroundWidth: k,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(eI, {
                            className: l()(eh.my, { [eh.yS]: ef === -1 / 0 }),
                            size: eu,
                            src: ep,
                            isSpeaking: Q,
                            voiceDb: ef,
                            speakingStylesConfig: {
                                spreadDirection: q.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(eS, { avatarSize: ec, userId: d.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(V.D, {
                    innerRef: _,
                    className: l()(eh.q7, { [eh.zY]: Q, [eh.bG]: !r, [eh.zq]: n, [eh.cU]: D }),
                    onClick: r ? void 0 : (e) => p?.(e, d),
                    onContextMenu: ei,
                    onMouseEnter: el,
                    onMouseLeave: ee,
                    children: [
                        (0, i.jsx)(eI, {
                            className: l()(eh.my, { [eh.yS]: ef === -1 / 0 }),
                            size: eu,
                            src: ep,
                            isSpeaking: Q,
                            voiceDb: ef,
                            speakingStylesConfig: {
                                spreadDirection: q.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !O &&
                            (0, i.jsx)(eE, { nick: c, connectedOn: w, isSettingsPreview: I, voiceBackgroundWidth: k }),
                        eo && (h === et.pwA.NEVER || (!Q && h === et.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: M,
                                  position: "right",
                                  renderPopout: en,
                                  shouldShow: T,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: l()(eh.Xh, { [eh.$A]: $ }),
                                          ref: M,
                                          children: [
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                              !I &&
                                                  (0, i.jsx)(er.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: A,
                                                      className: eh.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.YX)(et.uss.VOICE_V3, {
                                                              type: R.Z5.VOICE,
                                                              value: R.IP.PROFILE_OPENED,
                                                              userId: d.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(ea.Kc, {
                                                  guildId: A,
                                                  user: d,
                                                  video: F.selfVideo,
                                                  isStreaming: $,
                                                  className: eh.ZA,
                                                  iconClassName: eh.Ow,
                                                  isWatching: B,
                                                  localMute: H && !O,
                                                  localVideoDisabled: W,
                                                  mute: F.isVoiceMuted(),
                                                  deaf: F.isVoiceDeafened() || (X && !O),
                                                  serverMute: F.mute || F.suppress,
                                                  serverDeaf: F.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    ej = s.memo(function (e) {
        let {
                widgetId: t,
                channel: r,
                sortedVoiceState: l,
                displayNameMode: a,
                displayUserMode: o,
                locked: d,
                flipped: u,
                size: c,
                isPreviewingInGame: h,
                isSettingsPreview: m,
                context: g,
            } = e,
            p = s.useRef(null),
            { user: f, member: x, voiceState: A, connectedOn: E } = l,
            [S, I] = s.useState(null),
            [v, j] = s.useState(null);
        function T(e) {
            I(e);
        }
        function C(e, t) {
            m ||
                (0, U.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("866038"),
                        n.e("926132"),
                        n.e("146652"),
                        n.e("893190"),
                        n.e("189673"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("449145"),
                        n.e("470314"),
                        n.e("404524"),
                        n.e("654148"),
                        n.e("658980"),
                    ]).then(n.bind(n, 535503));
                    return (
                        (0, R.YX)(et.uss.VOICE_V3, { type: R.Z5.VOICE, value: R.IP.SETTINGS_OPENED, userId: t.id }),
                        (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                channelId: r?.id,
                                guildId: r?.guild_id,
                                mediaEngineContext: g,
                                onShowProfile: () => j(t.id),
                                appContext: et.BRT.OVERLAY,
                                onWatchStream: () => {
                                    (0, R.YX)(et.uss.VOICE_V3, {
                                        type: R.Z5.GO_LIVE,
                                        value: R.IP.ENABLED,
                                        userId: t.id,
                                    });
                                },
                            })
                    );
                });
        }
        s.useEffect(() => {
            d && j(null);
        }, [d]),
            s.useEffect(() => {
                null != S && (0, R.YX)(et.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.STREAM_PREVIEWED });
            }, [S]);
        let y = s.useCallback(
            (e) => {
                let n = eo.A.getWidget(t)?.layoutId,
                    i = null != n ? eo.A.getWidgetsForLayout(n)?.find((e) => e.type === et.uss.GO_LIVE) : null;
                null == i ||
                    i.pinned ||
                    ((0, F.v0)(i.id),
                    H.A.track(et.HAw.OVERLAY_PIN_TOGGLED, {
                        pinned: !0,
                        guild_id: r?.guild_id,
                        channel_id: r?.id,
                        channel_type: r?.type,
                        widget_type: et.uss.GO_LIVE,
                    })),
                    null != e &&
                        null != i &&
                        (0, R.YX)(et.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.ENABLED, userId: e.ownerId });
            },
            [r, t],
        );
        if (null == f || null == r || null == A) return null;
        let b = d || h;
        return (0, i.jsx)(
            el.A,
            {
                targetElementRef: p,
                user: f,
                guildId: r.guild_id,
                channelId: r.id,
                appContext: et.BRT.OVERLAY,
                shouldShow: v === f.id,
                onRequestClose: () => j(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(ev, {
                        ref: p,
                        guildId: r?.guild_id,
                        user: f,
                        connectedOn: E,
                        nick: x?.nick ?? eu.Ay.getName(f),
                        flipped: u,
                        voiceState: A,
                        displayNameMode: a,
                        displayUserMode: o,
                        size: c,
                        locked: b,
                        onContextMenu: C,
                        onClick: C,
                        context: g,
                        channel: r,
                        showStreamPreview: f.id === S,
                        onShowStreamPreview: T,
                        onWatchStream: y,
                        isSettingsPreview: m,
                    }),
            },
            f.id,
        );
    });
n(392164);
var eT = n(731854);
function eC(e) {
    let t = (e ?? 0) % _.A.DEFAULT_AVATARS.length;
    return _.A.DEFAULT_AVATARS[t];
}
function ey(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: s, locked: r, flipped: d } = e,
        u = eg(s),
        c = (0, a.yK)(
            [T.default, I.A],
            () =>
                t
                    .map((e) => {
                        let t = T.default.getUser(e);
                        if (null == t) return;
                        let i = I.A.getChannel(n.get(e)?.voiceState.channelId);
                        return t.getAvatarURL(i?.getGuildId(), u, !1);
                    })
                    .filter(w.Vq),
            [t, n, u],
        ),
        m = c[0] ?? eC(0),
        g = c[1] ?? eC(1);
    return (0, i.jsxs)("div", {
        className: l()(eh.ZR, r && eh.xt, d && eh.zq),
        children: [
            (0, i.jsx)("div", {
                className: eh.e5,
                children: (0, i.jsx)(h.A, { size: s, backSrc: m, frontSrc: g, isTyping: !1 }),
            }),
            (0, i.jsx)("div", {
                className: eh.AP,
                children: (0, i.jsxs)(o.E, {
                    variant: "text-xs/medium",
                    children: ["+", t.length, " others in voice"],
                }),
            }),
        ],
    });
}
let eb = s.memo(function (e) {
    let {
            id: t,
            context: n = eT.x.DEFAULT,
            channel: r,
            overlayVoiceStates: l,
            displayNameMode: o,
            displayUserMode: u,
            locked: c,
            pinned: h,
            guildId: m,
            showEmpty: g = !0,
            isPreviewingInGame: p,
            isSettingsPreview: f = !1,
            anchorLeft: x,
            avatarSizeMode: A,
            maxDisplayedVoiceStates: S = 8,
        } = e,
        I = (0, R.Dk)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(l),
            [l],
        ),
        [v, j] = l,
        T = j.length > 0 && null != n && null != r && (!c || h),
        C = (0, a.yK)(
            [E.A],
            () =>
                Array.from(I)
                    .map((e) => E.A.getStreamForUser(e, m))
                    .filter(w.Vq)
                    .map((e) => e.ownerId),
            [m, I],
        );
    s.useEffect(() => {
        T &&
            (0, R.Y)(et.uss.VOICE_V3, {
                locked: b.default.isInstanceLocked(),
                shownUserIds: Array.from(I),
                liveUserIds: C,
                contentInventoryIds: [],
            });
    }, [I, C, T]);
    let y = -1 !== S ? j.slice(0, S) : j,
        N = -1 !== S ? j.slice(S) : [],
        _ = v.get(N[0]),
        M = u === et.f5z.ALWAYS && -1 !== S;
    return T
        ? (0, i.jsxs)("div", {
              className: eh.h8,
              children: [
                  y.map((e) => {
                      let s = v.get(e);
                      return null == s
                          ? null
                          : (0, i.jsx)(
                                ej,
                                {
                                    sortedVoiceState: s,
                                    channel: r,
                                    widgetId: t,
                                    flipped: !x,
                                    isPreviewingInGame: p,
                                    isSettingsPreview: f,
                                    context: n,
                                    size: A,
                                    displayNameMode: o,
                                    displayUserMode: u,
                                    locked: c,
                                },
                                e,
                            );
                  }),
                  M &&
                      1 === N.length &&
                      null != _ &&
                      (0, i.jsx)(
                          ej,
                          {
                              sortedVoiceState: _,
                              channel: r,
                              widgetId: t,
                              flipped: !x,
                              isPreviewingInGame: p,
                              isSettingsPreview: f,
                              context: n,
                              size: A,
                              displayNameMode: o,
                              displayUserMode: u,
                              locked: c,
                          },
                          N[0],
                      ),
                  M &&
                      N.length > 1 &&
                      (0, i.jsx)(ey, { hiddenVoiceStates: N, voiceStateMap: v, size: em(A), locked: c, flipped: !x }),
              ],
          })
        : c || !g
          ? null
          : (0, i.jsx)(O.g, { emptyText: ec.intl.string(ec.t.hEh0l1), icon: d.H });
});
function ew(e) {
    let { isSettingsPreview: t } = e,
        n = (0, a.bG)([v.Ay, I.A], () => I.A.getChannel(v.Ay.getVoiceChannelId())),
        r = (0, m.Ay)(n),
        l = (function (e, t) {
            let n = (0, a.bG)([v.Ay, I.A], () => I.A.getChannel(v.Ay.getVoiceChannelId())),
                [i] = (0, a.bG)(
                    [y.Ay, f.A, v.Ay, I.A],
                    () => {
                        let e = I.A.getChannel(v.Ay.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [f.A.getMutableParticipants(e.id, x.ip.SPEAKER), f.A.getParticipantsVersion(e.id)]
                              : [y.Ay.getVoiceStatesForChannel(e), y.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    N.D,
                ),
                r = (0, A.$n)(n?.id, i),
                l = s.useMemo(() => new Map(r.map((e) => [e.user.id, e])), [r]),
                o = (0, a.bG)([S.default], () => S.default.getId());
            return [
                l,
                (0, a.yK)([C.A, v.Ay, j.A, p.A], () => {
                    let n = Array.from(
                        new Set(
                            r.map((e) => {
                                let { user: t } = e;
                                return t.id;
                            }),
                        ),
                    );
                    if (-1 === t || n.length <= t) return n;
                    let i = new Map();
                    for (let t of n) {
                        let n = (0, u.R)(
                                {
                                    userId: t,
                                    checkSoundSharing: !0,
                                    checkSoundboardSounds: !1,
                                    checkIsMuted: !0,
                                    context: e,
                                },
                                [C.A, v.Ay, j.A, p.A],
                            ),
                            s = t === o;
                        (n || s) && i.set(t, { isSpeaking: n, isCurrentUser: s });
                    }
                    let s = [],
                        l = [],
                        a = [];
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e],
                            o = i.get(r);
                        e < t ? s.push(r) : o && (o.isSpeaking || o.isCurrentUser) ? a.push(r) : l.push(r);
                    }
                    if (a.length > 0) {
                        let e = s.slice(0, t - a.length),
                            n = s.slice(t - a.length);
                        return [...e, ...a, ...n, ...l];
                    }
                    return n;
                }, [r, e, o, t]),
            ];
        })(eT.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, a.bG)([E.A], () => E.A.getStreamerActiveStreamMetadata()),
        d = (0, k.b4)(),
        h = (0, c.h)(d?.id),
        T = (0, a.cf)([E.A, b.default, M.A], () => {
            let e = E.A.getCurrentUserActiveStream();
            return {
                displayUserMode: b.default.getDisplayUserMode(),
                displayNameMode: b.default.getDisplayNameMode(),
                avatarSizeMode: b.default.getAvatarSizeMode(),
                streamApplication: o?.pid === M.A.getTargetPID() ? (0, g.A)(d) : null,
                stream: e,
            };
        });
    return (0, i.jsx)(eb, {
        ...T,
        application: h,
        ...e,
        overlayVoiceStates: l,
        channel: n,
        guildId: n?.guild_id,
        title: r ?? "",
        streamMetadata: o,
        streamApplication: T.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
