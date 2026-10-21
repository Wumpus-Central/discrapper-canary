(n.d(t, { DH: () => eb, Ay: () => ew }), n(321073));
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
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
    C = n(287809),
    T = n(977997),
    y = n(607567),
    b = n(532294),
    w = n(403362),
    N = n(996439),
    _ = n(3451),
    O = n(810412),
    R = n(412477),
    M = n(233741),
    D = n(243612),
    z = n(941143),
    k = n(778712),
    P = n(604121),
    L = n(97808),
    V = n(939249),
    G = n(265872),
    U = n(442433),
    F = n(391973),
    Y = n(401843),
    H = n(765671),
    Z = n(964486),
    W = n(775602),
    X = n(66004),
    B = n(556525),
    K = n(80682),
    q = n(290863),
    Q = n(174459),
    J = n(834757),
    $ = n(727353),
    ee = n(652215),
    et = n(626436);
class en extends l.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        Q.default.track(ee.HAw.OPEN_POPOUT, {
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
            previewIsOpen: l,
            onAction: r,
            hideTip: a,
            onWatch: o,
            streamApplication: d,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(et.yt, { [et.P0]: l }),
                  children: (0, i.jsx)($.Z, {
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
function ei(e) {
    let { user: t, channel: n, ...r } = e,
        s = (0, a.bG)([E.A], () => E.A.getStreamForUser(t.id, n.getGuildId())),
        o = (0, J.AO)(s),
        d = (0, a.bG)([q.A], () => (0, J.nr)(s, q.A)),
        u = l.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, K.Eq)(u, "StreamPreviewPopout"),
        (0, i.jsx)(en, { ...r, user: t, streamApplication: o, stream: s, activity: d, channel: n })
    );
}
var el = n(534400),
    er = n(342296),
    es = n(936520),
    ea = n(32584),
    eo = n(360906),
    ed = n(427262),
    eu = n(870373),
    ec = n(105292),
    eh = n(940220);
function em(e) {
    switch (e) {
        case ee.OSZ.LARGE:
            return k._3.SIZE_32;
        case ee.OSZ.SMALL:
            return k._3.SIZE_24;
        default:
            return k._3.SIZE_32;
    }
}
function eg(e) {
    return k.vC[e].size;
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
    let [n, i] = l.useState(null != e && e > Date.now() - 1e4),
        [r, s] = l.useState(!1),
        [a, o] = l.useState(!0);
    return (
        (0, Z.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    s(!0);
                }, 16));
        }),
        (0, Z.Ay)(() => {
            let e = setTimeout(() => {
                (i(!1),
                    setTimeout(() => {
                        s(!1);
                    }, 16));
            }, 2600);
            return () => clearTimeout(e);
        }),
        l.useMemo(
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
let eE = l.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: r, voiceBackgroundWidth: d, rightAlign: u = !1 } = e,
            {
                showConnectedAnimation: c,
                recentlyConnected: h,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: g,
            } = eA(n, r),
            { ref: p, width: f } = (0, H.Ay)(),
            x = (0, a.bG)([W.Ay], () => W.Ay.useReducedMotion),
            A = h ? "entering" : "exiting",
            { width: E } = (0, z.useSpring)({ ...ef[A], width: c ? f : d }),
            { opacity: S } = (0, z.useSpring)({
                ...ex[A],
                opacity: +!!c,
                onRest: () => {
                    c || g(!0);
                },
            }),
            I = l.useMemo(() => (m || x ? "none" : "block"), [m, x]);
        return (0, i.jsx)(z.animated.div, {
            className: s()(eh.rH, { [eh.pG]: u }),
            style: { width: E, opacity: S, display: I },
            children: (0, i.jsxs)("div", {
                ref: p,
                className: s()(eh.LB, { [eh.RP]: "exiting" === A, [eh.kb]: !u, [eh.pG]: u }),
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
    eS = l.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: l, guildId: r } = e,
            s = 2 * t,
            a = -(t / 2);
        return (0, i.jsx)("div", {
            className: eh.QZ,
            style: { top: a, left: a, width: s, height: s },
            children: (0, i.jsx)(X.A, {
                userId: n,
                channelId: l,
                guildId: r,
                containerDimensions: { width: s, height: s },
            }),
        });
    }),
    eI = l.memo(L.eu),
    ev = l.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: r = !1,
                user: d,
                nick: c,
                displayNameMode: h,
                displayUserMode: m,
                size: g = ee.OSZ.LARGE,
                onClick: f,
                onContextMenu: x,
                context: A,
                guildId: I,
                isSettingsPreview: v = !1,
                voiceState: C,
                showStreamPreview: y,
                onShowStreamPreview: b,
                onWatchStream: w,
                connectedOn: _,
                ref: R,
            } = e,
            M = (0, a.bG)([S.default], () => S.default.getId() === d.id, [d.id]),
            { ref: D, width: z } = (0, H.Ay)(),
            { showConnectedAnimation: P } = eA(_, v),
            L = C?.sessionId,
            U = t.id,
            F = d.id,
            [Z] = (0, a.bG)(
                [T.A],
                () => [
                    T.A.getVoiceStateForChannel(U, F) ?? T.A.getVoiceStateForSession(F, L),
                    T.A.getVoiceStateVersion(),
                ],
                [U, F, L],
                N.D,
            ),
            W = v ? C : (Z ?? C),
            [X, K, q] = (0, a.yK)(
                [eo.Ay],
                () =>
                    M
                        ? [
                              !eo.Ay.isSupported() || eo.Ay.isSelfMute() || eo.Ay.isSelfMutedTemporarily(),
                              eo.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!eo.Ay.isSupported() || eo.Ay.isLocalMute(d.id), !1, eo.Ay.isLocalVideoDisabled(d.id)],
                [M, d.id],
            ),
            Q = (0, a.bG)(
                [E.A],
                () => {
                    let e = E.A.getCurrentUserActiveStream();
                    return null != e && e.ownerId !== d.id && E.A.getViewerIds(e).filter((e) => e === d.id).length > 0;
                },
                [d.id],
            ),
            J = v && C?.discoverable,
            $ = (0, u.A)({ userId: d.id, context: A }) || J,
            et = (0, a.bG)([p.A], () => p.A.isUserPlayingSounds(d.id)),
            en = $ || et,
            er = (0, a.bG)([E.A], () => E.A.getStreamForUser(d.id, I)),
            ea = null != er,
            ed = l.useCallback(() => {
                (y || null != ea) && b(null);
            }, [b, y, ea]),
            eu = l.useCallback(
                () =>
                    (0, i.jsx)(ei, {
                        user: d,
                        channel: t,
                        onWatch: () => {
                            null != er && ((0, Y.A9)(er, { forceMultiple: !0, noFocus: !0 }), ed(), w(er ?? null));
                        },
                        onAction: () => w,
                        previewIsOpen: y,
                        location: ee.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [d, t, er, y, ed, w],
            ),
            ec = l.useCallback(
                (e) => {
                    r || x?.(e, d);
                },
                [r, x, d],
            ),
            ep = l.useCallback(() => {
                r || (null != ea && b(d.id));
            }, [r, b, ea, d]),
            ef = r || v,
            ex = l.useMemo(() => em(g), [g]),
            ev = l.useMemo(() => eg(ex), [ex]),
            ej = l.useMemo(() => d.getAvatarURL(I, ev), [d, I, ev]),
            eC = (0, a.bG)([j.A], () => j.A.getVoiceVolume(F));
        return (m === ee.f5z.ONLY_WHILE_SPEAKING && ef && !$) || null == W
            ? null
            : n
              ? (0, i.jsxs)(V.D, {
                    innerRef: R,
                    className: s()(eh.q7, { [eh.zY]: $, [eh.QF]: et, [eh.bG]: !r, [eh.zq]: n, [eh.cU]: P }),
                    onClick: r ? void 0 : (e) => f?.(e, d),
                    onContextMenu: ec,
                    onMouseEnter: ep,
                    onMouseLeave: ed,
                    children: [
                        ef && (h === ee.pwA.NEVER || (!en && h === ee.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: D,
                                  position: "left",
                                  renderPopout: eu,
                                  shouldShow: y,
                                  onRequestClose: ed,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: eh.Xh,
                                          ref: D,
                                          children: [
                                              (0, i.jsx)(es.Kc, {
                                                  guildId: I,
                                                  user: d,
                                                  video: W.selfVideo,
                                                  isStreaming: ea,
                                                  className: eh.ZA,
                                                  iconClassName: eh.Ow,
                                                  isWatching: Q,
                                                  localMute: X && !M,
                                                  localVideoDisabled: q,
                                                  mute: W.isVoiceMuted(),
                                                  deaf: W.isVoiceDeafened() || (K && !M),
                                                  serverMute: W.mute || W.suppress,
                                                  serverDeaf: W.deaf,
                                                  disabled: !1,
                                              }),
                                              !v &&
                                                  (0, i.jsx)(el.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: I,
                                                      className: eh.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, O.YX)(ee.uss.VOICE_V3, {
                                                              type: O.Z5.VOICE,
                                                              value: O.IP.PROFILE_OPENED,
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
                        !M &&
                            (0, i.jsx)(eE, {
                                nick: c,
                                connectedOn: _,
                                isSettingsPreview: v,
                                voiceBackgroundWidth: z,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(eI, {
                            className: s()(eh.my, { [eh.yS]: eC === -1 / 0 }),
                            size: ex,
                            src: ej,
                            voiceStatus: (0, k.n$)($, et),
                            voiceDb: eC,
                            speakingStylesConfig: {
                                spreadDirection: B.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(eS, { avatarSize: ev, userId: d.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(V.D, {
                    innerRef: R,
                    className: s()(eh.q7, { [eh.zY]: $, [eh.QF]: et, [eh.bG]: !r, [eh.zq]: n, [eh.cU]: P }),
                    onClick: r ? void 0 : (e) => f?.(e, d),
                    onContextMenu: ec,
                    onMouseEnter: ep,
                    onMouseLeave: ed,
                    children: [
                        (0, i.jsx)(eI, {
                            className: s()(eh.my, { [eh.yS]: eC === -1 / 0 }),
                            size: ex,
                            src: ej,
                            voiceStatus: (0, k.n$)($, et),
                            voiceDb: eC,
                            speakingStylesConfig: {
                                spreadDirection: B.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !M &&
                            (0, i.jsx)(eE, { nick: c, connectedOn: _, isSettingsPreview: v, voiceBackgroundWidth: z }),
                        ef && (h === ee.pwA.NEVER || (!$ && h === ee.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: D,
                                  position: "right",
                                  renderPopout: eu,
                                  shouldShow: y,
                                  onRequestClose: ed,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: s()(eh.Xh, { [eh.$A]: ea }),
                                          ref: D,
                                          children: [
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                              !v &&
                                                  (0, i.jsx)(el.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: I,
                                                      className: eh.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, O.YX)(ee.uss.VOICE_V3, {
                                                              type: O.Z5.VOICE,
                                                              value: O.IP.PROFILE_OPENED,
                                                              userId: d.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(es.Kc, {
                                                  guildId: I,
                                                  user: d,
                                                  video: W.selfVideo,
                                                  isStreaming: ea,
                                                  className: eh.ZA,
                                                  iconClassName: eh.Ow,
                                                  isWatching: Q,
                                                  localMute: X && !M,
                                                  localVideoDisabled: q,
                                                  mute: W.isVoiceMuted(),
                                                  deaf: W.isVoiceDeafened() || (K && !M),
                                                  serverMute: W.mute || W.suppress,
                                                  serverDeaf: W.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    ej = l.memo(function (e) {
        let {
                widgetId: t,
                channel: r,
                sortedVoiceState: s,
                displayNameMode: a,
                displayUserMode: o,
                locked: d,
                flipped: u,
                size: c,
                isPreviewingInGame: h,
                isSettingsPreview: m,
                context: g,
            } = e,
            p = l.useRef(null),
            { user: f, member: x, voiceState: A, connectedOn: E } = s,
            [S, I] = l.useState(null),
            [v, j] = l.useState(null);
        function C(e) {
            I(e);
        }
        function T(e, t) {
            m ||
                (0, U.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("463317"),
                        n.e("926132"),
                        n.e("893190"),
                        n.e("146652"),
                        n.e("189673"),
                        n.e("882073"),
                        n.e("797558"),
                        n.e("691994"),
                        n.e("242204"),
                        n.e("449145"),
                        n.e("470314"),
                        n.e("404524"),
                        n.e("654148"),
                        n.e("658980"),
                    ]).then(n.bind(n, 535503));
                    return (
                        (0, O.YX)(ee.uss.VOICE_V3, { type: O.Z5.VOICE, value: O.IP.SETTINGS_OPENED, userId: t.id }),
                        (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                channelId: r?.id,
                                guildId: r?.guild_id,
                                mediaEngineContext: g,
                                onShowProfile: () => j(t.id),
                                appContext: ee.BRT.OVERLAY,
                                onWatchStream: () => {
                                    (0, O.YX)(ee.uss.VOICE_V3, {
                                        type: O.Z5.GO_LIVE,
                                        value: O.IP.ENABLED,
                                        userId: t.id,
                                    });
                                },
                            })
                    );
                });
        }
        (l.useEffect(() => {
            d && j(null);
        }, [d]),
            l.useEffect(() => {
                null != S && (0, O.YX)(ee.uss.VOICE_V3, { type: O.Z5.GO_LIVE, value: O.IP.STREAM_PREVIEWED });
            }, [S]));
        let y = l.useCallback(
            (e) => {
                let n = ea.A.getWidget(t)?.layoutId,
                    i = null != n ? ea.A.getWidgetsForLayout(n)?.find((e) => e.type === ee.uss.GO_LIVE) : null;
                (null == i ||
                    i.pinned ||
                    ((0, F.v0)(i.id),
                    (0, eu.g)(ee.HAw.OVERLAY_PIN_TOGGLED, {
                        pinned: !0,
                        guild_id: r?.guild_id,
                        channel_id: r?.id,
                        channel_type: r?.type,
                        widget_type: ee.uss.GO_LIVE,
                    })),
                    null != e &&
                        null != i &&
                        (0, O.YX)(ee.uss.VOICE_V3, { type: O.Z5.GO_LIVE, value: O.IP.ENABLED, userId: e.ownerId }));
            },
            [r, t],
        );
        if (null == f || null == r || null == A) return null;
        let b = d || h;
        return (0, i.jsx)(
            er.A,
            {
                targetElementRef: p,
                user: f,
                guildId: r.guild_id,
                channelId: r.id,
                appContext: ee.BRT.OVERLAY,
                shouldShow: v === f.id,
                onRequestClose: () => j(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(ev, {
                        ref: p,
                        guildId: r?.guild_id,
                        user: f,
                        connectedOn: E,
                        nick: x?.nick ?? ed.Ay.getName(f),
                        flipped: u,
                        voiceState: A,
                        displayNameMode: a,
                        displayUserMode: o,
                        size: c,
                        locked: b,
                        onContextMenu: T,
                        onClick: T,
                        context: g,
                        channel: r,
                        showStreamPreview: f.id === S,
                        onShowStreamPreview: C,
                        onWatchStream: y,
                        isSettingsPreview: m,
                    }),
            },
            f.id,
        );
    });
n(392164);
var eC = n(731854);
function eT(e) {
    let t = (e ?? 0) % _.A.DEFAULT_AVATARS.length;
    return _.A.DEFAULT_AVATARS[t];
}
function ey(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: l, locked: r, flipped: d } = e,
        u = eg(l),
        c = (0, a.yK)(
            [C.default, I.A],
            () =>
                t
                    .map((e) => {
                        let t = C.default.getUser(e);
                        if (null == t) return;
                        let i = I.A.getChannel(n.get(e)?.voiceState.channelId);
                        return t.getAvatarURL(i?.getGuildId(), u, !1);
                    })
                    .filter(w.Vq),
            [t, n, u],
        ),
        m = c[0] ?? eT(0),
        g = c[1] ?? eT(1);
    return (0, i.jsxs)("div", {
        className: s()(eh.ZR, r && eh.xt, d && eh.zq),
        children: [
            (0, i.jsx)("div", {
                className: eh.e5,
                children: (0, i.jsx)(h.A, { size: l, backSrc: m, frontSrc: g, isTyping: !1 }),
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
let eb = l.memo(function (e) {
    let {
            id: t,
            context: n = eC.x.DEFAULT,
            channel: r,
            overlayVoiceStates: s,
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
        I = (0, O.Dk)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(s),
            [s],
        ),
        [v, j] = s,
        C = j.length > 0 && null != n && null != r && (!c || h),
        T = (0, a.yK)(
            [E.A],
            () =>
                Array.from(I)
                    .map((e) => E.A.getStreamForUser(e, m))
                    .filter(w.Vq)
                    .map((e) => e.ownerId),
            [m, I],
        );
    l.useEffect(() => {
        C &&
            (0, O.Y)(ee.uss.VOICE_V3, {
                locked: b.default.isInstanceLocked(),
                shownUserIds: Array.from(I),
                liveUserIds: T,
                contentInventoryIds: [],
            });
    }, [I, T, C]);
    let y = -1 !== S ? j.slice(0, S) : j,
        N = -1 !== S ? j.slice(S) : [],
        _ = v.get(N[0]),
        M = u === ee.f5z.ALWAYS && -1 !== S;
    return C
        ? (0, i.jsxs)("div", {
              className: eh.h8,
              children: [
                  y.map((e) => {
                      let l = v.get(e);
                      return null == l
                          ? null
                          : (0, i.jsx)(
                                ej,
                                {
                                    sortedVoiceState: l,
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
          : (0, i.jsx)(R.g, { emptyText: ec.intl.string(ec.t.hEh0l1), icon: d.H });
});
function ew(e) {
    let { isSettingsPreview: t } = e,
        n = (0, a.bG)([v.Ay, I.A], () => I.A.getChannel(v.Ay.getVoiceChannelId())),
        r = (0, m.Ay)(n),
        s = (function (e, t) {
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
                s = l.useMemo(() => new Map(r.map((e) => [e.user.id, e])), [r]),
                o = (0, a.bG)([S.default], () => S.default.getId());
            return [
                s,
                (0, a.yK)(
                    [T.A, v.Ay, j.A, p.A],
                    () => {
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
                            let n = (0, u.R)({ userId: t, checkSoundSharing: !0, checkIsMuted: !0, context: e }, [
                                    T.A,
                                    v.Ay,
                                    j.A,
                                    p.A,
                                ]),
                                l = t === o;
                            (n || l) && i.set(t, { isSpeaking: n, isCurrentUser: l });
                        }
                        let l = [],
                            s = [],
                            a = [];
                        for (let e = 0; e < n.length; e++) {
                            let r = n[e],
                                o = i.get(r);
                            e < t ? l.push(r) : o && (o.isSpeaking || o.isCurrentUser) ? a.push(r) : s.push(r);
                        }
                        if (a.length > 0) {
                            let e = l.slice(0, t - a.length),
                                n = l.slice(t - a.length);
                            return [...e, ...a, ...n, ...s];
                        }
                        return n;
                    },
                    [r, e, o, t],
                ),
            ];
        })(eC.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, a.bG)([E.A], () => E.A.getStreamerActiveStreamMetadata()),
        d = (0, D.b4)(),
        h = (0, c.h)(d?.id),
        C = (0, a.cf)([E.A, b.default, M.A], () => {
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
        ...C,
        application: h,
        ...e,
        overlayVoiceStates: s,
        channel: n,
        guildId: n?.guild_id,
        title: r ?? "",
        streamMetadata: o,
        streamApplication: C.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
