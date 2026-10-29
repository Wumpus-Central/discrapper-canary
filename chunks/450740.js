(n.d(t, { DH: () => ew, Ay: () => eN }), n(321073));
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
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
    _ = n(532294),
    b = n(403362),
    w = n(996439),
    N = n(3451),
    R = n(810412),
    O = n(412477),
    M = n(233741),
    D = n(243612),
    z = n(399513),
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
    K = n(384077),
    q = n(80682),
    J = n(290863),
    Q = n(174459),
    $ = n(834757),
    ee = n(727353),
    et = n(652215),
    en = n(626436);
class ei extends r.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        Q.default.track(et.HAw.OPEN_POPOUT, {
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
            previewIsOpen: r,
            onAction: l,
            hideTip: a,
            onWatch: o,
            streamApplication: d,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(en.yt, { [en.P0]: r }),
                  children: (0, i.jsx)(ee.Z, {
                      stream: n,
                      streamActivity: e,
                      streamApplication: d,
                      user: t,
                      onWatchStream: o,
                      onAction: l,
                      hideTip: a,
                  }),
              });
    }
}
function er(e) {
    let { user: t, channel: n, ...l } = e,
        s = (0, a.bG)([E.A], () => E.A.getStreamForUser(t.id, n.getGuildId())),
        o = (0, $.AO)(s),
        d = (0, a.bG)([J.A], () => (0, $.nr)(s, J.A)),
        u = r.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, q.Eq)(u, "StreamPreviewPopout"),
        (0, i.jsx)(ei, { ...l, user: t, streamApplication: o, stream: s, activity: d, channel: n })
    );
}
var el = n(534400),
    es = n(342296),
    ea = n(541157),
    eo = n(936520),
    ed = n(32584),
    eu = n(999926),
    ec = n(427262),
    eh = n(870373),
    em = n(105292),
    eg = n(940220);
function ep(e) {
    switch (e) {
        case et.OSZ.LARGE:
            return k._3.SIZE_32;
        case et.OSZ.SMALL:
            return k._3.SIZE_24;
        default:
            return k._3.SIZE_32;
    }
}
function ef(e) {
    return k.vC[e].size;
}
function ex() {
    return n
        .e("515423")
        .then(n.t.bind(n, 155147, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let eA = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    eE = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function eS(e, t) {
    let [n, i] = r.useState(null != e && e > Date.now() - 1e4),
        [l, s] = r.useState(!1),
        [a, o] = r.useState(!0);
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
        r.useMemo(
            () => ({
                showConnectedAnimation: l,
                recentlyConnected: n,
                hideConnectedAnimation: a,
                setHideConnectedAnimation: o,
            }),
            [l, n, a, o],
        )
    );
}
let eI = r.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: l, voiceBackgroundWidth: d, rightAlign: u = !1 } = e,
            {
                showConnectedAnimation: c,
                recentlyConnected: h,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: g,
            } = eS(n, l),
            { ref: p, width: f } = (0, H.Ay)(),
            x = (0, a.bG)([W.Ay], () => W.Ay.useReducedMotion),
            A = h ? "entering" : "exiting",
            { width: E } = (0, z.useSpring)({ ...eA[A], width: c ? f : d }),
            { opacity: S } = (0, z.useSpring)({
                ...eE[A],
                opacity: +!!c,
                onRest: () => {
                    c || g(!0);
                },
            }),
            I = r.useMemo(() => (m || x ? "none" : "block"), [m, x]),
            v = !x && !(m && (0, K.lT)());
        return (0, i.jsx)(z.animated.div, {
            className: s()(eg.rH, { [eg.pG]: u }),
            style: { width: E, opacity: S, display: I },
            children: (0, i.jsxs)("div", {
                ref: p,
                className: s()(eg.LB, { [eg.RP]: "exiting" === A, [eg.kb]: !u, [eg.pG]: u }),
                children: [
                    u && (0, i.jsx)(P.a, { importData: ex, shouldAnimate: v, className: eg.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: em.intl.format(em.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !u && (0, i.jsx)(P.a, { importData: ex, shouldAnimate: v, className: eg.lY }),
                    (0, i.jsx)("div", { className: eg.k1 }),
                ],
            }),
        });
    }),
    ev = r.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: r, guildId: l } = e,
            s = 2 * t,
            a = -(t / 2);
        return (0, i.jsx)("div", {
            className: eg.QZ,
            style: { top: a, left: a, width: s, height: s },
            children: (0, i.jsx)(X.A, {
                userId: n,
                channelId: r,
                guildId: l,
                containerDimensions: { width: s, height: s },
            }),
        });
    }),
    ej = r.memo(L.eu),
    eC = r.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: l = !1,
                user: d,
                nick: c,
                displayNameMode: h,
                displayUserMode: m,
                size: g = et.OSZ.LARGE,
                onClick: f,
                onContextMenu: x,
                context: A,
                guildId: I,
                isSettingsPreview: v = !1,
                voiceState: C,
                showStreamPreview: y,
                onShowStreamPreview: _,
                onWatchStream: b,
                connectedOn: N,
                ref: O,
            } = e,
            M = (0, a.bG)([S.default], () => S.default.getId() === d.id, [d.id]),
            { ref: D, width: z } = (0, H.Ay)(),
            { showConnectedAnimation: P } = eS(N, v),
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
                w.D,
            ),
            W = (0, ea.oN)(),
            X = v ? C : (0, ea.Nd)(Z ?? C, W),
            [K, q, J] = (0, a.yK)(
                [eu.Ay],
                () =>
                    M
                        ? [
                              !eu.Ay.isSupported() || eu.Ay.isSelfMute() || eu.Ay.isSelfMutedTemporarily(),
                              eu.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!eu.Ay.isSupported() || eu.Ay.isLocalMute(d.id), !1, eu.Ay.isLocalVideoDisabled(d.id)],
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
            $ = v && C?.discoverable,
            ee = (0, u.A)({ userId: d.id, context: A }) || $,
            en = (0, a.bG)([p.A], () => p.A.isUserPlayingSounds(d.id)),
            ei = ee || en,
            es = (0, a.bG)([E.A], () => E.A.getStreamForUser(d.id, I)),
            ed = null != es,
            ec = r.useCallback(() => {
                (y || null != ed) && _(null);
            }, [_, y, ed]),
            eh = r.useCallback(
                () =>
                    (0, i.jsx)(er, {
                        user: d,
                        channel: t,
                        onWatch: () => {
                            null != es && ((0, Y.A9)(es, { forceMultiple: !0, noFocus: !0 }), ec(), b(es ?? null));
                        },
                        onAction: () => b,
                        previewIsOpen: y,
                        location: et.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [d, t, es, y, ec, b],
            ),
            em = r.useCallback(
                (e) => {
                    l || x?.(e, d);
                },
                [l, x, d],
            ),
            ex = r.useCallback(() => {
                l || (null != ed && _(d.id));
            }, [l, _, ed, d]),
            eA = l || v,
            eE = r.useMemo(() => ep(g), [g]),
            eC = r.useMemo(() => ef(eE), [eE]),
            eT = r.useMemo(() => d.getAvatarURL(I, eC), [d, I, eC]),
            ey = (0, a.bG)([j.A], () => j.A.getVoiceVolume(F));
        return (m === et.f5z.ONLY_WHILE_SPEAKING && eA && !ee) || null == X
            ? null
            : n
              ? (0, i.jsxs)(V.D, {
                    innerRef: O,
                    className: s()(eg.q7, { [eg.zY]: ee, [eg.QF]: en, [eg.bG]: !l, [eg.zq]: n, [eg.cU]: P }),
                    onClick: l ? void 0 : (e) => f?.(e, d),
                    onContextMenu: em,
                    onMouseEnter: ex,
                    onMouseLeave: ec,
                    children: [
                        eA && (h === et.pwA.NEVER || (!ei && h === et.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: D,
                                  position: "left",
                                  renderPopout: eh,
                                  shouldShow: y,
                                  onRequestClose: ec,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: eg.Xh,
                                          ref: D,
                                          children: [
                                              (0, i.jsx)(eo.Kc, {
                                                  guildId: I,
                                                  user: d,
                                                  video: X.selfVideo,
                                                  isStreaming: ed,
                                                  className: eg.ZA,
                                                  iconClassName: eg.Ow,
                                                  isWatching: Q,
                                                  localMute: K && !M,
                                                  localVideoDisabled: J,
                                                  mute: X.isVoiceMuted(),
                                                  deaf: X.isVoiceDeafened() || (q && !M),
                                                  serverMute: X.mute || X.suppress,
                                                  serverDeaf: X.deaf,
                                                  disabled: !1,
                                              }),
                                              !v &&
                                                  (0, i.jsx)(el.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: I,
                                                      className: eg.fc,
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
                        !M &&
                            (0, i.jsx)(eI, {
                                nick: c,
                                connectedOn: N,
                                isSettingsPreview: v,
                                voiceBackgroundWidth: z,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(ej, {
                            className: s()(eg.my, { [eg.yS]: ey === -1 / 0 }),
                            size: eE,
                            src: eT,
                            voiceStatus: (0, k.n$)(ee, en),
                            voiceDb: ey,
                            speakingStylesConfig: {
                                spreadDirection: B.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(ev, { avatarSize: eC, userId: d.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(V.D, {
                    innerRef: O,
                    className: s()(eg.q7, { [eg.zY]: ee, [eg.QF]: en, [eg.bG]: !l, [eg.zq]: n, [eg.cU]: P }),
                    onClick: l ? void 0 : (e) => f?.(e, d),
                    onContextMenu: em,
                    onMouseEnter: ex,
                    onMouseLeave: ec,
                    children: [
                        (0, i.jsx)(ej, {
                            className: s()(eg.my, { [eg.yS]: ey === -1 / 0 }),
                            size: eE,
                            src: eT,
                            voiceStatus: (0, k.n$)(ee, en),
                            voiceDb: ey,
                            speakingStylesConfig: {
                                spreadDirection: B.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !M &&
                            (0, i.jsx)(eI, { nick: c, connectedOn: N, isSettingsPreview: v, voiceBackgroundWidth: z }),
                        eA && (h === et.pwA.NEVER || (!ee && h === et.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: D,
                                  position: "right",
                                  renderPopout: eh,
                                  shouldShow: y,
                                  onRequestClose: ec,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: s()(eg.Xh, { [eg.$A]: ed }),
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
                                                      className: eg.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.YX)(et.uss.VOICE_V3, {
                                                              type: R.Z5.VOICE,
                                                              value: R.IP.PROFILE_OPENED,
                                                              userId: d.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(eo.Kc, {
                                                  guildId: I,
                                                  user: d,
                                                  video: X.selfVideo,
                                                  isStreaming: ed,
                                                  className: eg.ZA,
                                                  iconClassName: eg.Ow,
                                                  isWatching: Q,
                                                  localMute: K && !M,
                                                  localVideoDisabled: J,
                                                  mute: X.isVoiceMuted(),
                                                  deaf: X.isVoiceDeafened() || (q && !M),
                                                  serverMute: X.mute || X.suppress,
                                                  serverDeaf: X.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    eT = r.memo(function (e) {
        let {
                widgetId: t,
                channel: l,
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
            p = r.useRef(null),
            { user: f, member: x, voiceState: A, connectedOn: E } = s,
            [S, I] = r.useState(null),
            [v, j] = r.useState(null);
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
                        (0, R.YX)(et.uss.VOICE_V3, { type: R.Z5.VOICE, value: R.IP.SETTINGS_OPENED, userId: t.id }),
                        (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                channelId: l?.id,
                                guildId: l?.guild_id,
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
        (r.useEffect(() => {
            d && j(null);
        }, [d]),
            r.useEffect(() => {
                null != S && (0, R.YX)(et.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.STREAM_PREVIEWED });
            }, [S]));
        let y = r.useCallback(
            (e) => {
                let n = ed.A.getWidget(t)?.layoutId,
                    i = null != n ? ed.A.getWidgetsForLayout(n)?.find((e) => e.type === et.uss.GO_LIVE) : null;
                (null == i ||
                    i.pinned ||
                    ((0, F.v0)(i.id),
                    (0, eh.g)(et.HAw.OVERLAY_PIN_TOGGLED, {
                        pinned: !0,
                        guild_id: l?.guild_id,
                        channel_id: l?.id,
                        channel_type: l?.type,
                        widget_type: et.uss.GO_LIVE,
                    })),
                    null != e &&
                        null != i &&
                        (0, R.YX)(et.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.ENABLED, userId: e.ownerId }));
            },
            [l, t],
        );
        if (null == f || null == l || null == A) return null;
        let _ = d || h;
        return (0, i.jsx)(
            es.A,
            {
                targetElementRef: p,
                user: f,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: et.BRT.OVERLAY,
                shouldShow: v === f.id,
                onRequestClose: () => j(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(eC, {
                        ref: p,
                        guildId: l?.guild_id,
                        user: f,
                        connectedOn: E,
                        nick: x?.nick ?? ec.Ay.getName(f),
                        flipped: u,
                        voiceState: A,
                        displayNameMode: a,
                        displayUserMode: o,
                        size: c,
                        locked: _,
                        onContextMenu: T,
                        onClick: T,
                        context: g,
                        channel: l,
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
var ey = n(731854);
function e_(e) {
    let t = (e ?? 0) % N.A.DEFAULT_AVATARS.length;
    return N.A.DEFAULT_AVATARS[t];
}
function eb(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: r, locked: l, flipped: d } = e,
        u = ef(r),
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
                    .filter(b.Vq),
            [t, n, u],
        ),
        m = c[0] ?? e_(0),
        g = c[1] ?? e_(1);
    return (0, i.jsxs)("div", {
        className: s()(eg.ZR, l && eg.xt, d && eg.zq),
        children: [
            (0, i.jsx)("div", {
                className: eg.e5,
                children: (0, i.jsx)(h.A, { size: r, backSrc: m, frontSrc: g, isTyping: !1 }),
            }),
            (0, i.jsx)("div", {
                className: eg.AP,
                children: (0, i.jsxs)(o.E, {
                    variant: "text-xs/medium",
                    children: ["+", t.length, " others in voice"],
                }),
            }),
        ],
    });
}
let ew = r.memo(function (e) {
    let {
            id: t,
            context: n = ey.x.DEFAULT,
            channel: l,
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
        I = (0, R.Dk)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(s),
            [s],
        ),
        [v, j] = s,
        C = j.length > 0 && null != n && null != l && (!c || h),
        T = (0, a.yK)(
            [E.A],
            () =>
                Array.from(I)
                    .map((e) => E.A.getStreamForUser(e, m))
                    .filter(b.Vq)
                    .map((e) => e.ownerId),
            [m, I],
        );
    r.useEffect(() => {
        C &&
            (0, R.Y)(et.uss.VOICE_V3, {
                locked: _.default.isInstanceLocked(),
                shownUserIds: Array.from(I),
                liveUserIds: T,
                contentInventoryIds: [],
            });
    }, [I, T, C]);
    let y = -1 !== S ? j.slice(0, S) : j,
        w = -1 !== S ? j.slice(S) : [],
        N = v.get(w[0]),
        M = u === et.f5z.ALWAYS && -1 !== S;
    return C
        ? (0, i.jsxs)("div", {
              className: eg.h8,
              children: [
                  y.map((e) => {
                      let r = v.get(e);
                      return null == r
                          ? null
                          : (0, i.jsx)(
                                eT,
                                {
                                    sortedVoiceState: r,
                                    channel: l,
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
                      1 === w.length &&
                      null != N &&
                      (0, i.jsx)(
                          eT,
                          {
                              sortedVoiceState: N,
                              channel: l,
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
                          w[0],
                      ),
                  M &&
                      w.length > 1 &&
                      (0, i.jsx)(eb, { hiddenVoiceStates: w, voiceStateMap: v, size: ep(A), locked: c, flipped: !x }),
              ],
          })
        : c || !g
          ? null
          : (0, i.jsx)(O.g, { emptyText: em.intl.string(em.t.hEh0l1), icon: d.H });
});
function eN(e) {
    let { isSettingsPreview: t } = e,
        n = (0, a.bG)([v.Ay, I.A], () => I.A.getChannel(v.Ay.getVoiceChannelId())),
        l = (0, m.Ay)(n),
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
                    w.D,
                ),
                l = (0, A.$n)(n?.id, i),
                s = r.useMemo(() => new Map(l.map((e) => [e.user.id, e])), [l]),
                o = (0, a.bG)([S.default], () => S.default.getId());
            return [
                s,
                (0, a.yK)(
                    [T.A, v.Ay, j.A, p.A],
                    () => {
                        let n = Array.from(
                            new Set(
                                l.map((e) => {
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
                                r = t === o;
                            (n || r) && i.set(t, { isSpeaking: n, isCurrentUser: r });
                        }
                        let r = [],
                            s = [],
                            a = [];
                        for (let e = 0; e < n.length; e++) {
                            let l = n[e],
                                o = i.get(l);
                            e < t ? r.push(l) : o && (o.isSpeaking || o.isCurrentUser) ? a.push(l) : s.push(l);
                        }
                        if (a.length > 0) {
                            let e = r.slice(0, t - a.length),
                                n = r.slice(t - a.length);
                            return [...e, ...a, ...n, ...s];
                        }
                        return n;
                    },
                    [l, e, o, t],
                ),
            ];
        })(ey.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, a.bG)([E.A], () => E.A.getStreamerActiveStreamMetadata()),
        d = (0, D.b4)(),
        h = (0, c.h)(d?.id),
        C = (0, a.cf)([E.A, _.default, M.A], () => {
            let e = E.A.getCurrentUserActiveStream();
            return {
                displayUserMode: _.default.getDisplayUserMode(),
                displayNameMode: _.default.getDisplayNameMode(),
                avatarSizeMode: _.default.getAvatarSizeMode(),
                streamApplication: o?.pid === M.A.getTargetPID() ? (0, g.A)(d) : null,
                stream: e,
            };
        });
    return (0, i.jsx)(ew, {
        ...C,
        application: h,
        ...e,
        overlayVoiceStates: s,
        channel: n,
        guildId: n?.guild_id,
        title: l ?? "",
        streamMetadata: o,
        streamApplication: C.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
