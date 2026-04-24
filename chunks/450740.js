n.d(t, { DH: () => eR, Ay: () => eM }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(17928),
    o = n(834730),
    d = n(983851),
    c = n(717558),
    u = n(429913),
    h = n(478063),
    _ = n(47167),
    m = n(22705),
    g = n(209932),
    f = n(63995),
    p = n(69407),
    x = n(530804),
    A = n(616356),
    S = n(495544),
    I = n(734057),
    E = n(309010),
    v = n(485296),
    b = n(287809),
    C = n(977997),
    y = n(607567),
    T = n(256415),
    w = n(403362),
    j = n(996439),
    N = n(3451),
    R = n(810412),
    M = n(412477),
    k = n(489277),
    O = n(243612),
    L = n(419354),
    P = n(778712),
    D = n(604121),
    z = n(97808),
    V = n(939249),
    G = n(922016),
    U = n(442433),
    F = n(391973),
    H = n(684013),
    W = n(401843),
    Z = n(765671),
    Y = n(964486),
    B = n(775602),
    X = n(66004),
    q = n(556525),
    K = n(80682),
    Q = n(643501),
    $ = n(71393),
    J = n(576705),
    ee = n(290863),
    et = n(954571),
    en = n(279250),
    ei = n(834757),
    ea = n(727353),
    er = n(652215),
    es = n(378219);
class el extends a.PureComponent {
    componentDidMount() {
        let { user: e, streamApplication: t } = this.props;
        et.default.track(er.HAw.OPEN_POPOUT, {
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
            previewIsOpen: a,
            onAction: r,
            hideTip: l,
            onWatch: o,
            activeStream: d,
            currentUserId: c,
            canWatch: u,
            unavailableReason: h,
            streamApplication: _,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: s()(es.yt, { [es.P0]: a }),
                  children: (0, i.jsx)(ea.Z, {
                      stream: n,
                      activeStream: d,
                      streamActivity: e,
                      streamApplication: _,
                      user: t,
                      currentUserId: c,
                      canWatch: u ?? !1,
                      unavailableReason: h,
                      onWatchStream: o,
                      onAction: r,
                      hideTip: l,
                  }),
              });
    }
}
function eo(e) {
    let { user: t, channel: n, ...r } = e,
        [s, o] = (0, l.yK)([C.A, $.A, J.A, Q.default], () => (0, en.eo)(n, C.A, $.A, J.A, Q.default)),
        d = (0, l.bG)([A.A], () => A.A.getStreamForUser(t.id, n.getGuildId())),
        c = (0, l.bG)([A.A], () => A.A.getActiveStreamForApplicationStream(d)),
        u = (0, l.bG)([S.default], () => S.default.getId()),
        h = (0, ei.AO)(d),
        _ = (0, l.bG)([ee.A], () => (0, ei.nr)(d, ee.A)),
        m = a.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, K.Eq)(m, "StreamPreviewPopout"),
        (0, i.jsx)(el, {
            ...r,
            canWatch: s,
            unavailableReason: o,
            user: t,
            streamApplication: h,
            stream: d,
            activeStream: c,
            currentUserId: u,
            activity: _,
            channel: n,
        })
    );
}
var ed = n(534400),
    ec = n(342296),
    eu = n(481947),
    eh = n(38502),
    e_ = n(969341),
    em = n(427262),
    eg = n(985018),
    ef = n(458509);
function ep(e) {
    switch (e) {
        case er.OSZ.LARGE:
            return P._3.SIZE_32;
        case er.OSZ.SMALL:
            return P._3.SIZE_24;
        default:
            return P._3.SIZE_32;
    }
}
function ex(e) {
    return P.vC[e].size;
}
let eA = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    eS = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    eI = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function eE(e, t) {
    let [n, i] = a.useState(null != e && e > Date.now() - 1e4),
        [r, s] = a.useState(!1),
        [l, o] = a.useState(!0);
    return (
        (0, Y.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    s(!0);
                }, 16));
        }),
        (0, Y.Ay)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        s(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        a.useMemo(
            () => ({
                showConnectedAnimation: r,
                recentlyConnected: n,
                hideConnectedAnimation: l,
                setHideConnectedAnimation: o,
            }),
            [r, n, l, o],
        )
    );
}
let ev = a.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: r, voiceBackgroundWidth: d, rightAlign: c = !1 } = e,
            {
                showConnectedAnimation: u,
                recentlyConnected: h,
                hideConnectedAnimation: _,
                setHideConnectedAnimation: m,
            } = eE(n, r),
            { ref: g, width: f } = (0, Z.Ay)(),
            p = (0, l.bG)([B.A], () => B.A.useReducedMotion),
            x = h ? "entering" : "exiting",
            { width: A } = (0, L.useSpring)({ ...eS[x], width: u ? f : d }),
            { opacity: S } = (0, L.useSpring)({
                ...eI[x],
                opacity: +!!u,
                onRest: () => {
                    u || m(!0);
                },
            }),
            I = a.useMemo(() => (_ || p ? "none" : "block"), [_, p]);
        return (0, i.jsx)(L.animated.div, {
            className: s()(ef.rH, { [ef.pG]: c }),
            style: { width: A, opacity: S, display: I },
            children: (0, i.jsxs)("div", {
                ref: g,
                className: s()(ef.LB, { [ef.RP]: "exiting" === x, [ef.kb]: !c, [ef.pG]: c }),
                children: [
                    c && (0, i.jsx)(D.a, { importData: eA, shouldAnimate: !p, className: ef.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: eg.intl.format(eg.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !c && (0, i.jsx)(D.a, { importData: eA, shouldAnimate: !p, className: ef.lY }),
                    (0, i.jsx)("div", { className: ef.k1 }),
                ],
            }),
        });
    }),
    eb = a.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: a, guildId: r } = e,
            s = 2 * t,
            l = -(t / 2);
        return (0, i.jsx)("div", {
            className: ef.QZ,
            style: { top: l, left: l, width: s, height: s },
            children: (0, i.jsx)(X.A, {
                userId: n,
                channelId: a,
                guildId: r,
                containerDimensions: { width: s, height: s },
            }),
        });
    }),
    eC = a.memo(z.eu),
    ey = a.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: r = !1,
                user: d,
                nick: u,
                displayNameMode: h,
                displayUserMode: _,
                size: m = er.OSZ.LARGE,
                onClick: g,
                onContextMenu: f,
                context: p,
                guildId: x,
                isSettingsPreview: I = !1,
                voiceState: E,
                showStreamPreview: b,
                onShowStreamPreview: y,
                onWatchStream: T,
                connectedOn: w,
                ref: N,
            } = e,
            M = (0, l.bG)([S.default], () => S.default.getId() === d.id, [d.id]),
            { ref: k, width: O } = (0, Z.Ay)(),
            { showConnectedAnimation: L } = eE(w, I),
            P = E?.sessionId,
            D = t.id,
            z = d.id,
            [U] = (0, l.bG)(
                [C.A],
                () => [
                    C.A.getVoiceStateForChannel(D, z) ?? C.A.getVoiceStateForSession(z, P),
                    C.A.getVoiceStateVersion(),
                ],
                [D, z, P],
                j.D,
            ),
            F = I ? E : (U ?? E),
            [H, Y, B] = (0, l.yK)(
                [e_.Ay],
                () =>
                    M
                        ? [
                              !e_.Ay.isSupported() || e_.Ay.isSelfMute() || e_.Ay.isSelfMutedTemporarily(),
                              e_.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!e_.Ay.isSupported() || e_.Ay.isLocalMute(d.id), !1, e_.Ay.isLocalVideoDisabled(d.id)],
                [M, d.id],
            ),
            X = (0, l.bG)([A.A], () => {
                let e = A.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== d.id && A.A.getViewerIds(e).filter((e) => e === d.id).length > 0;
            }, [d.id]),
            K = I && E?.discoverable,
            Q = (0, c.A)({ userId: d.id, context: p }) || K,
            $ = (0, l.bG)([A.A], () => A.A.getStreamForUser(d.id, x)),
            J = null != $,
            ee = a.useCallback(() => {
                (b || null != J) && y(null);
            }, [y, b, J]),
            et = a.useCallback(
                () =>
                    (0, i.jsx)(eo, {
                        user: d,
                        channel: t,
                        onWatch: () => {
                            null != $ && ((0, W.A9)($, { forceMultiple: !0, noFocus: !0 }), ee(), T($ ?? null));
                        },
                        onAction: () => T,
                        previewIsOpen: b,
                        location: er.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [d, t, $, b, ee, T],
            ),
            en = a.useCallback(
                (e) => {
                    r || f?.(e, d);
                },
                [r, f, d],
            ),
            ei = a.useCallback(() => {
                r || (null != J && y(d.id));
            }, [r, y, J, d]),
            ea = r || I,
            es = a.useMemo(() => ep(m), [m]),
            el = a.useMemo(() => ex(es), [es]),
            ec = a.useMemo(() => d.getAvatarURL(x, el), [d, x, el]),
            eh = (0, l.bG)([v.A], () => v.A.getVoiceVolume(z));
        return (_ === er.f5z.ONLY_WHILE_SPEAKING && ea && !Q) || null == F
            ? null
            : n
              ? (0, i.jsxs)(V.D, {
                    innerRef: N,
                    className: s()(ef.q7, { [ef.zY]: Q, [ef.bG]: !r, [ef.zq]: n, [ef.cU]: L }),
                    onClick: r ? void 0 : (e) => g?.(e, d),
                    onContextMenu: en,
                    onMouseEnter: ei,
                    onMouseLeave: ee,
                    children: [
                        ea && (h === er.pwA.NEVER || (!Q && h === er.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: k,
                                  position: "left",
                                  renderPopout: et,
                                  shouldShow: b,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: ef.Xh,
                                          ref: k,
                                          children: [
                                              (0, i.jsx)(eu.Kc, {
                                                  guildId: x,
                                                  user: d,
                                                  video: F.selfVideo,
                                                  isStreaming: J,
                                                  className: ef.ZA,
                                                  iconClassName: ef.Ow,
                                                  isWatching: X,
                                                  localMute: H && !M,
                                                  localVideoDisabled: B,
                                                  mute: F.isVoiceMuted(),
                                                  deaf: F.isVoiceDeafened() || (Y && !M),
                                                  serverMute: F.mute || F.suppress,
                                                  serverDeaf: F.deaf,
                                                  disabled: !1,
                                              }),
                                              !I &&
                                                  (0, i.jsx)(ed.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: x,
                                                      className: ef.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.YX)(er.uss.VOICE_V3, {
                                                              type: R.Z5.VOICE,
                                                              value: R.IP.PROFILE_OPENED,
                                                              userId: d.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                          ],
                                      }),
                              }),
                        !M &&
                            (0, i.jsx)(ev, {
                                nick: u,
                                connectedOn: w,
                                isSettingsPreview: I,
                                voiceBackgroundWidth: O,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(eC, {
                            className: s()(ef.my, { [ef.yS]: eh === -1 / 0 }),
                            size: es,
                            src: ec,
                            isSpeaking: Q,
                            voiceDb: eh,
                            speakingStylesConfig: {
                                spreadDirection: q.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(eb, { avatarSize: el, userId: d.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(V.D, {
                    innerRef: N,
                    className: s()(ef.q7, { [ef.zY]: Q, [ef.bG]: !r, [ef.zq]: n, [ef.cU]: L }),
                    onClick: r ? void 0 : (e) => g?.(e, d),
                    onContextMenu: en,
                    onMouseEnter: ei,
                    onMouseLeave: ee,
                    children: [
                        (0, i.jsx)(eC, {
                            className: s()(ef.my, { [ef.yS]: eh === -1 / 0 }),
                            size: es,
                            src: ec,
                            isSpeaking: Q,
                            voiceDb: eh,
                            speakingStylesConfig: {
                                spreadDirection: q.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !M &&
                            (0, i.jsx)(ev, { nick: u, connectedOn: w, isSettingsPreview: I, voiceBackgroundWidth: O }),
                        ea && (h === er.pwA.NEVER || (!Q && h === er.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: k,
                                  position: "right",
                                  renderPopout: et,
                                  shouldShow: b,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: s()(ef.Xh, { [ef.$A]: J }),
                                          ref: k,
                                          children: [
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !I &&
                                                  (0, i.jsx)(ed.Ay, {
                                                      primaryGuild: d.primaryGuild,
                                                      userId: d.id,
                                                      contextGuildId: x,
                                                      className: ef.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, R.YX)(er.uss.VOICE_V3, {
                                                              type: R.Z5.VOICE,
                                                              value: R.IP.PROFILE_OPENED,
                                                              userId: d.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(eu.Kc, {
                                                  guildId: x,
                                                  user: d,
                                                  video: F.selfVideo,
                                                  isStreaming: J,
                                                  className: ef.ZA,
                                                  iconClassName: ef.Ow,
                                                  isWatching: X,
                                                  localMute: H && !M,
                                                  localVideoDisabled: B,
                                                  mute: F.isVoiceMuted(),
                                                  deaf: F.isVoiceDeafened() || (Y && !M),
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
    eT = a.memo(function (e) {
        let {
                widgetId: t,
                channel: r,
                sortedVoiceState: s,
                displayNameMode: l,
                displayUserMode: o,
                locked: d,
                flipped: c,
                size: u,
                isPreviewingInGame: h,
                isSettingsPreview: _,
                context: m,
            } = e,
            g = a.useRef(null),
            { user: f, member: p, voiceState: x, connectedOn: A } = s,
            [S, I] = a.useState(null),
            [E, v] = a.useState(null);
        a.useEffect(() => {
            d && v(null);
        }, [d]),
            a.useEffect(() => {
                null != S && (0, R.YX)(er.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.STREAM_PREVIEWED });
            }, [S]);
        let b = (e) => {
                I(e);
            },
            C = (e, t) => {
                _ ||
                    (0, U.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("58980"), n.e("22880")]).then(
                            n.bind(n, 535503),
                        );
                        return (
                            (0, R.YX)(er.uss.VOICE_V3, { type: R.Z5.VOICE, value: R.IP.SETTINGS_OPENED, userId: t.id }),
                            (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t,
                                    channelId: r?.id,
                                    guildId: r?.guild_id,
                                    mediaEngineContext: m,
                                    onShowProfile: () => v(t.id),
                                    appContext: er.BRT.OVERLAY,
                                    onWatchStream: () => {
                                        (0, R.YX)(er.uss.VOICE_V3, {
                                            type: R.Z5.GO_LIVE,
                                            value: R.IP.ENABLED,
                                            userId: t.id,
                                        });
                                    },
                                })
                        );
                    });
            },
            y = a.useCallback(
                (e) => {
                    let n = eh.A.getWidget(t)?.layoutId,
                        i = null != n ? eh.A.getWidgetsForLayout(n)?.find((e) => e.type === er.uss.GO_LIVE) : null;
                    null == i ||
                        i.pinned ||
                        ((0, F.v0)(i.id),
                        H.A.track(er.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: r?.guild_id,
                            channel_id: r?.id,
                            channel_type: r?.type,
                            widget_type: er.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != i &&
                            (0, R.YX)(er.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.ENABLED, userId: e.ownerId });
                },
                [r, t],
            );
        if (null == f || null == r || null == x) return null;
        let T = d || h;
        return (0, i.jsx)(
            ec.A,
            {
                targetElementRef: g,
                user: f,
                guildId: r.guild_id,
                channelId: r.id,
                appContext: er.BRT.OVERLAY,
                shouldShow: E === f.id,
                onRequestClose: () => v(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(ey, {
                        ref: g,
                        guildId: r?.guild_id,
                        user: f,
                        connectedOn: A,
                        nick: p?.nick ?? em.Ay.getName(f),
                        flipped: c,
                        voiceState: x,
                        displayNameMode: l,
                        displayUserMode: o,
                        size: u,
                        locked: T,
                        onContextMenu: C,
                        onClick: C,
                        context: m,
                        channel: r,
                        showStreamPreview: f.id === S,
                        onShowStreamPreview: b,
                        onWatchStream: y,
                        isSettingsPreview: _,
                    }),
            },
            f.id,
        );
    });
n(392164);
var ew = n(731854);
let ej = (e) => {
    let t = (e ?? 0) % N.A.DEFAULT_AVATARS.length;
    return N.A.DEFAULT_AVATARS[t];
};
function eN(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: a, locked: r, flipped: d } = e,
        c = ex(a),
        u = (0, l.yK)(
            [b.default, I.A],
            () =>
                t
                    .map((e) => {
                        let t = b.default.getUser(e);
                        if (null == t) return;
                        let i = I.A.getChannel(n.get(e)?.voiceState.channelId);
                        return t.getAvatarURL(i?.getGuildId(), c, !1);
                    })
                    .filter(w.Vq),
            [t, n, c],
        ),
        _ = u[0] ?? ej(0),
        m = u[1] ?? ej(1);
    return (0, i.jsxs)("div", {
        className: s()(ef.ZR, r && ef.xt, d && ef.zq),
        children: [
            (0, i.jsx)("div", {
                className: ef.e5,
                children: (0, i.jsx)(h.A, { size: a, backSrc: _, frontSrc: m, isTyping: !1 }),
            }),
            (0, i.jsx)("div", {
                className: ef.AP,
                children: (0, i.jsxs)(o.E, {
                    variant: "text-xs/medium",
                    children: ["+", t.length, " others in voice"],
                }),
            }),
        ],
    });
}
let eR = a.memo(function (e) {
    let {
            id: t,
            context: n = ew.x.DEFAULT,
            channel: r,
            overlayVoiceStates: s,
            displayNameMode: o,
            displayUserMode: c,
            locked: u,
            pinned: h,
            guildId: _,
            showEmpty: m = !0,
            isPreviewingInGame: g,
            isSettingsPreview: f = !1,
            anchorLeft: p,
            avatarSizeMode: x,
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
        [E, v] = s,
        b = v.length > 0 && null != n && null != r && (!u || h),
        C = (0, l.yK)(
            [A.A],
            () =>
                Array.from(I)
                    .map((e) => A.A.getStreamForUser(e, _))
                    .filter(w.Vq)
                    .map((e) => e.ownerId),
            [_, I],
        );
    a.useEffect(() => {
        b &&
            (0, R.Y)(er.uss.VOICE_V3, {
                locked: T.default.isInstanceLocked(),
                shownUserIds: Array.from(I),
                liveUserIds: C,
                contentInventoryIds: [],
            });
    }, [I, C, b]);
    let y = -1 !== S ? v.slice(0, S) : v,
        j = -1 !== S ? v.slice(S) : [],
        N = E.get(j[0]),
        k = c === er.f5z.ALWAYS && -1 !== S;
    return b
        ? (0, i.jsxs)("div", {
              className: ef.h8,
              children: [
                  y.map((e) => {
                      let a = E.get(e);
                      return null == a
                          ? null
                          : (0, i.jsx)(
                                eT,
                                {
                                    sortedVoiceState: a,
                                    channel: r,
                                    widgetId: t,
                                    flipped: !p,
                                    isPreviewingInGame: g,
                                    isSettingsPreview: f,
                                    context: n,
                                    size: x,
                                    displayNameMode: o,
                                    displayUserMode: c,
                                    locked: u,
                                },
                                e,
                            );
                  }),
                  k &&
                      1 === j.length &&
                      null != N &&
                      (0, i.jsx)(
                          eT,
                          {
                              sortedVoiceState: N,
                              channel: r,
                              widgetId: t,
                              flipped: !p,
                              isPreviewingInGame: g,
                              isSettingsPreview: f,
                              context: n,
                              size: x,
                              displayNameMode: o,
                              displayUserMode: c,
                              locked: u,
                          },
                          j[0],
                      ),
                  k &&
                      j.length > 1 &&
                      (0, i.jsx)(eN, { hiddenVoiceStates: j, voiceStateMap: E, size: ep(x), locked: u, flipped: !p }),
              ],
          })
        : u || !m
          ? null
          : (0, i.jsx)(M.g, { emptyText: eg.intl.string(eg.t.hEh0l1), icon: d.H });
});
function eM(e) {
    let { isSettingsPreview: t } = e,
        n = (0, l.bG)([E.A, I.A], () => I.A.getChannel(E.A.getVoiceChannelId())),
        r = (0, _.Ay)(n),
        s = (function (e, t) {
            let n = (0, l.bG)([E.A, I.A], () => I.A.getChannel(E.A.getVoiceChannelId())),
                [i] = (0, l.bG)(
                    [y.Ay, f.A, E.A, I.A],
                    () => {
                        let e = I.A.getChannel(E.A.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [f.A.getMutableParticipants(e.id, p.ip.SPEAKER), f.A.getParticipantsVersion(e.id)]
                              : [y.Ay.getVoiceStatesForChannel(e), y.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    j.D,
                ),
                r = (0, x.$n)(n?.id, i),
                s = a.useMemo(() => new Map(r.map((e) => [e.user.id, e])), [r]),
                o = (0, l.bG)([S.default], () => S.default.getId());
            return [
                s,
                (0, l.yK)([C.A, E.A, v.A, g.A], () => {
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
                        let n = (0, c.R)(
                                {
                                    userId: t,
                                    checkSoundSharing: !0,
                                    checkSoundboardSounds: !1,
                                    checkIsMuted: !0,
                                    context: e,
                                },
                                [C.A, E.A, v.A, g.A],
                            ),
                            a = t === o;
                        (n || a) && i.set(t, { isSpeaking: n, isCurrentUser: a });
                    }
                    let a = [],
                        s = [],
                        l = [];
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e],
                            o = i.get(r);
                        e < t ? a.push(r) : o && (o.isSpeaking || o.isCurrentUser) ? l.push(r) : s.push(r);
                    }
                    if (l.length > 0) {
                        let e = a.slice(0, t - l.length),
                            n = a.slice(t - l.length);
                        return [...e, ...l, ...n, ...s];
                    }
                    return n;
                }, [r, e, o, t]),
            ];
        })(ew.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, l.bG)([A.A], () => A.A.getStreamerActiveStreamMetadata()),
        d = (0, O.b4)(),
        h = (0, u.h)(d?.id),
        b = (0, l.cf)([A.A, T.default, k.A], () => {
            let e = A.A.getCurrentUserActiveStream();
            return {
                displayUserMode: T.default.getDisplayUserMode(),
                displayNameMode: T.default.getDisplayNameMode(),
                avatarSizeMode: T.default.getAvatarSizeMode(),
                streamApplication: o?.pid === k.A.getTargetPID() ? (0, m.A)(d) : null,
                stream: e,
            };
        });
    return (0, i.jsx)(eR, {
        ...b,
        application: h,
        ...e,
        overlayVoiceStates: s,
        channel: n,
        guildId: n?.guild_id,
        title: r ?? "",
        streamMetadata: o,
        streamApplication: b.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
