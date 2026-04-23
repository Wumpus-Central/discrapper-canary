n.d(t, { DH: () => eR, Ay: () => eM }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(17928),
    o = n(834730),
    d = n(983851),
    c = n(717558),
    u = n(429913),
    h = n(478063),
    m = n(47167),
    p = n(22705),
    g = n(209932),
    f = n(63995),
    _ = n(69407),
    x = n(530804),
    A = n(616356),
    E = n(495544),
    S = n(734057),
    I = n(309010),
    v = n(485296),
    b = n(287809),
    C = n(977997),
    T = n(607567),
    y = n(256415),
    j = n(403362),
    w = n(996439),
    N = n(3451),
    R = n(810412),
    M = n(412477),
    O = n(489277),
    k = n(243612),
    D = n(419354),
    z = n(778712),
    P = n(604121),
    L = n(97808),
    V = n(939249),
    G = n(922016),
    U = n(442433),
    H = n(391973),
    F = n(684013),
    W = n(401843),
    Z = n(765671),
    Y = n(964486),
    X = n(775602),
    B = n(66004),
    K = n(556525),
    q = n(80682),
    Q = n(643501),
    $ = n(71393),
    J = n(576705),
    ee = n(290863),
    et = n(954571),
    en = n(279250),
    ei = n(834757),
    ea = n(727353),
    er = n(652215),
    el = n(378219);
class es extends a.PureComponent {
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
            hideTip: s,
            onWatch: o,
            activeStream: d,
            currentUserId: c,
            canWatch: u,
            unavailableReason: h,
            streamApplication: m,
        } = this.props;
        return null == n
            ? null
            : (0, i.jsx)("div", {
                  className: l()(el.yt, { [el.P0]: a }),
                  children: (0, i.jsx)(ea.Z, {
                      stream: n,
                      activeStream: d,
                      streamActivity: e,
                      streamApplication: m,
                      user: t,
                      currentUserId: c,
                      canWatch: u ?? !1,
                      unavailableReason: h,
                      onWatchStream: o,
                      onAction: r,
                      hideTip: s,
                  }),
              });
    }
}
function eo(e) {
    let { user: t, channel: n, ...r } = e,
        [l, o] = (0, s.yK)([C.A, $.A, J.A, Q.default], () => (0, en.eo)(n, C.A, $.A, J.A, Q.default)),
        d = (0, s.bG)([A.A], () => A.A.getStreamForUser(t.id, n.getGuildId())),
        c = (0, s.bG)([A.A], () => A.A.getActiveStreamForApplicationStream(d)),
        u = (0, s.bG)([E.default], () => E.default.getId()),
        h = (0, ei.AO)(d),
        m = (0, s.bG)([ee.A], () => (0, ei.nr)(d, ee.A)),
        p = a.useMemo(() => ({ [n.guild_id]: [t.id] }), [n.guild_id, t.id]);
    return (
        (0, q.Eq)(p, "StreamPreviewPopout"),
        (0, i.jsx)(es, {
            ...r,
            canWatch: l,
            unavailableReason: o,
            user: t,
            streamApplication: h,
            stream: d,
            activeStream: c,
            currentUserId: u,
            activity: m,
            channel: n,
        })
    );
}
var ed = n(534400),
    ec = n(342296),
    eu = n(481947),
    eh = n(38502),
    em = n(969341),
    ep = n(427262),
    eg = n(985018),
    ef = n(458509);
function e_(e) {
    switch (e) {
        case er.OSZ.LARGE:
            return z._3.SIZE_32;
        case er.OSZ.SMALL:
            return z._3.SIZE_24;
        default:
            return z._3.SIZE_32;
    }
}
function ex(e) {
    return z.vC[e].size;
}
let eA = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    eE = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    eS = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function eI(e, t) {
    let [n, i] = a.useState(null != e && e > Date.now() - 1e4),
        [r, l] = a.useState(!1),
        [s, o] = a.useState(!0);
    return (
        (0, Y.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    l(!0);
                }, 16));
        }),
        (0, Y.Ay)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        l(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        a.useMemo(
            () => ({
                showConnectedAnimation: r,
                recentlyConnected: n,
                hideConnectedAnimation: s,
                setHideConnectedAnimation: o,
            }),
            [r, n, s, o],
        )
    );
}
let ev = a.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: r, voiceBackgroundWidth: d, rightAlign: c = !1 } = e,
            {
                showConnectedAnimation: u,
                recentlyConnected: h,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: p,
            } = eI(n, r),
            { ref: g, width: f } = (0, Z.Ay)(),
            _ = (0, s.bG)([X.A], () => X.A.useReducedMotion),
            x = h ? "entering" : "exiting",
            { width: A } = (0, D.useSpring)({ ...eE[x], width: u ? f : d }),
            { opacity: E } = (0, D.useSpring)({
                ...eS[x],
                opacity: +!!u,
                onRest: () => {
                    u || p(!0);
                },
            }),
            S = a.useMemo(() => (m || _ ? "none" : "block"), [m, _]);
        return (0, i.jsx)(D.animated.div, {
            className: l()(ef.rH, { [ef.pG]: c }),
            style: { width: A, opacity: E, display: S },
            children: (0, i.jsxs)("div", {
                ref: g,
                className: l()(ef.LB, { [ef.RP]: "exiting" === x, [ef.kb]: !c, [ef.pG]: c }),
                children: [
                    c && (0, i.jsx)(P.a, { importData: eA, shouldAnimate: !_, className: ef.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: eg.intl.format(eg.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !c && (0, i.jsx)(P.a, { importData: eA, shouldAnimate: !_, className: ef.lY }),
                    (0, i.jsx)("div", { className: ef.k1 }),
                ],
            }),
        });
    }),
    eb = a.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: a, guildId: r } = e,
            l = 2 * t,
            s = -(t / 2);
        return (0, i.jsx)("div", {
            className: ef.QZ,
            style: { top: s, left: s, width: l, height: l },
            children: (0, i.jsx)(B.A, {
                userId: n,
                channelId: a,
                guildId: r,
                containerDimensions: { width: l, height: l },
            }),
        });
    }),
    eC = a.memo(L.eu),
    eT = a.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: r = !1,
                user: d,
                nick: u,
                displayNameMode: h,
                displayUserMode: m,
                size: p = er.OSZ.LARGE,
                onClick: g,
                onContextMenu: f,
                context: _,
                guildId: x,
                isSettingsPreview: S = !1,
                voiceState: I,
                showStreamPreview: b,
                onShowStreamPreview: T,
                onWatchStream: y,
                connectedOn: j,
                ref: N,
            } = e,
            M = (0, s.bG)([E.default], () => E.default.getId() === d.id, [d.id]),
            { ref: O, width: k } = (0, Z.Ay)(),
            { showConnectedAnimation: D } = eI(j, S),
            z = I?.sessionId,
            P = t.id,
            L = d.id,
            [U] = (0, s.bG)(
                [C.A],
                () => [
                    C.A.getVoiceStateForChannel(P, L) ?? C.A.getVoiceStateForSession(L, z),
                    C.A.getVoiceStateVersion(),
                ],
                [P, L, z],
                w.D,
            ),
            H = S ? I : (U ?? I),
            [F, Y, X] = (0, s.yK)(
                [em.Ay],
                () =>
                    M
                        ? [
                              !em.Ay.isSupported() || em.Ay.isSelfMute() || em.Ay.isSelfMutedTemporarily(),
                              em.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!em.Ay.isSupported() || em.Ay.isLocalMute(d.id), !1, em.Ay.isLocalVideoDisabled(d.id)],
                [M, d.id],
            ),
            B = (0, s.bG)([A.A], () => {
                let e = A.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== d.id && A.A.getViewerIds(e).filter((e) => e === d.id).length > 0;
            }, [d.id]),
            q = S && I?.discoverable,
            Q = (0, c.A)({ userId: d.id, context: _ }) || q,
            $ = (0, s.bG)([A.A], () => A.A.getStreamForUser(d.id, x)),
            J = null != $,
            ee = a.useCallback(() => {
                (b || null != J) && T(null);
            }, [T, b, J]),
            et = a.useCallback(
                () =>
                    (0, i.jsx)(eo, {
                        user: d,
                        channel: t,
                        onWatch: () => {
                            null != $ && ((0, W.A9)($, { forceMultiple: !0, noFocus: !0 }), ee(), y($ ?? null));
                        },
                        onAction: () => y,
                        previewIsOpen: b,
                        location: er.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [d, t, $, b, ee, y],
            ),
            en = a.useCallback(
                (e) => {
                    r || f?.(e, d);
                },
                [r, f, d],
            ),
            ei = a.useCallback(() => {
                r || (null != J && T(d.id));
            }, [r, T, J, d]),
            ea = r || S,
            el = a.useMemo(() => e_(p), [p]),
            es = a.useMemo(() => ex(el), [el]),
            ec = a.useMemo(() => d.getAvatarURL(x, es), [d, x, es]),
            eh = (0, s.bG)([v.A], () => v.A.getVoiceVolume(L));
        return (m === er.f5z.ONLY_WHILE_SPEAKING && ea && !Q) || null == H
            ? null
            : n
              ? (0, i.jsxs)(V.D, {
                    innerRef: N,
                    className: l()(ef.q7, { [ef.zY]: Q, [ef.bG]: !r, [ef.zq]: n, [ef.cU]: D }),
                    onClick: r ? void 0 : (e) => g?.(e, d),
                    onContextMenu: en,
                    onMouseEnter: ei,
                    onMouseLeave: ee,
                    children: [
                        ea && (h === er.pwA.NEVER || (!Q && h === er.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: O,
                                  position: "left",
                                  renderPopout: et,
                                  shouldShow: b,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: ef.Xh,
                                          ref: O,
                                          children: [
                                              (0, i.jsx)(eu.Kc, {
                                                  guildId: x,
                                                  user: d,
                                                  video: H.selfVideo,
                                                  isStreaming: J,
                                                  className: ef.ZA,
                                                  iconClassName: ef.Ow,
                                                  isWatching: B,
                                                  localMute: F && !M,
                                                  localVideoDisabled: X,
                                                  mute: H.isVoiceMuted(),
                                                  deaf: H.isVoiceDeafened() || (Y && !M),
                                                  serverMute: H.mute || H.suppress,
                                                  serverDeaf: H.deaf,
                                                  disabled: !1,
                                              }),
                                              !S &&
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
                                connectedOn: j,
                                isSettingsPreview: S,
                                voiceBackgroundWidth: k,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(eC, {
                            className: l()(ef.my, { [ef.yS]: eh === -1 / 0 }),
                            size: el,
                            src: ec,
                            isSpeaking: Q,
                            voiceDb: eh,
                            speakingStylesConfig: {
                                spreadDirection: K.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(eb, { avatarSize: es, userId: d.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(V.D, {
                    innerRef: N,
                    className: l()(ef.q7, { [ef.zY]: Q, [ef.bG]: !r, [ef.zq]: n, [ef.cU]: D }),
                    onClick: r ? void 0 : (e) => g?.(e, d),
                    onContextMenu: en,
                    onMouseEnter: ei,
                    onMouseLeave: ee,
                    children: [
                        (0, i.jsx)(eC, {
                            className: l()(ef.my, { [ef.yS]: eh === -1 / 0 }),
                            size: el,
                            src: ec,
                            isSpeaking: Q,
                            voiceDb: eh,
                            speakingStylesConfig: {
                                spreadDirection: K.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !M &&
                            (0, i.jsx)(ev, { nick: u, connectedOn: j, isSettingsPreview: S, voiceBackgroundWidth: k }),
                        ea && (h === er.pwA.NEVER || (!Q && h === er.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(G.Y, {
                                  targetElementRef: O,
                                  position: "right",
                                  renderPopout: et,
                                  shouldShow: b,
                                  onRequestClose: ee,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: l()(ef.Xh, { [ef.$A]: J }),
                                          ref: O,
                                          children: [
                                              (0, i.jsx)(o.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !S &&
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
                                                  video: H.selfVideo,
                                                  isStreaming: J,
                                                  className: ef.ZA,
                                                  iconClassName: ef.Ow,
                                                  isWatching: B,
                                                  localMute: F && !M,
                                                  localVideoDisabled: X,
                                                  mute: H.isVoiceMuted(),
                                                  deaf: H.isVoiceDeafened() || (Y && !M),
                                                  serverMute: H.mute || H.suppress,
                                                  serverDeaf: H.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    ey = a.memo(function (e) {
        let {
                widgetId: t,
                channel: r,
                sortedVoiceState: l,
                displayNameMode: s,
                displayUserMode: o,
                locked: d,
                flipped: c,
                size: u,
                isPreviewingInGame: h,
                isSettingsPreview: m,
                context: p,
            } = e,
            g = a.useRef(null),
            { user: f, member: _, voiceState: x, connectedOn: A } = l,
            [E, S] = a.useState(null),
            [I, v] = a.useState(null);
        a.useEffect(() => {
            d && v(null);
        }, [d]),
            a.useEffect(() => {
                null != E && (0, R.YX)(er.uss.VOICE_V3, { type: R.Z5.GO_LIVE, value: R.IP.STREAM_PREVIEWED });
            }, [E]);
        let b = (e) => {
                S(e);
            },
            C = (e, t) => {
                m ||
                    (0, U.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("58980")]).then(n.bind(n, 535503));
                        return (
                            (0, R.YX)(er.uss.VOICE_V3, { type: R.Z5.VOICE, value: R.IP.SETTINGS_OPENED, userId: t.id }),
                            (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t,
                                    channelId: r?.id,
                                    guildId: r?.guild_id,
                                    mediaEngineContext: p,
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
            T = a.useCallback(
                (e) => {
                    let n = eh.A.getWidget(t)?.layoutId,
                        i = null != n ? eh.A.getWidgetsForLayout(n)?.find((e) => e.type === er.uss.GO_LIVE) : null;
                    null == i ||
                        i.pinned ||
                        ((0, H.v0)(i.id),
                        F.A.track(er.HAw.OVERLAY_PIN_TOGGLED, {
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
        let y = d || h;
        return (0, i.jsx)(
            ec.A,
            {
                targetElementRef: g,
                user: f,
                guildId: r.guild_id,
                channelId: r.id,
                appContext: er.BRT.OVERLAY,
                shouldShow: I === f.id,
                onRequestClose: () => v(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(eT, {
                        ref: g,
                        guildId: r?.guild_id,
                        user: f,
                        connectedOn: A,
                        nick: _?.nick ?? ep.Ay.getName(f),
                        flipped: c,
                        voiceState: x,
                        displayNameMode: s,
                        displayUserMode: o,
                        size: u,
                        locked: y,
                        onContextMenu: C,
                        onClick: C,
                        context: p,
                        channel: r,
                        showStreamPreview: f.id === E,
                        onShowStreamPreview: b,
                        onWatchStream: T,
                        isSettingsPreview: m,
                    }),
            },
            f.id,
        );
    });
n(392164);
var ej = n(731854);
let ew = (e) => {
    let t = (e ?? 0) % N.A.DEFAULT_AVATARS.length;
    return N.A.DEFAULT_AVATARS[t];
};
function eN(e) {
    let { hiddenVoiceStates: t, voiceStateMap: n, size: a, locked: r, flipped: d } = e,
        c = ex(a),
        u = (0, s.yK)(
            [b.default, S.A],
            () =>
                t
                    .map((e) => {
                        let t = b.default.getUser(e);
                        if (null == t) return;
                        let i = S.A.getChannel(n.get(e)?.voiceState.channelId);
                        return t.getAvatarURL(i?.getGuildId(), c, !1);
                    })
                    .filter(j.Vq),
            [t, n, c],
        ),
        m = u[0] ?? ew(0),
        p = u[1] ?? ew(1);
    return (0, i.jsxs)("div", {
        className: l()(ef.ZR, r && ef.xt, d && ef.zq),
        children: [
            (0, i.jsx)("div", {
                className: ef.e5,
                children: (0, i.jsx)(h.A, { size: a, backSrc: m, frontSrc: p, isTyping: !1 }),
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
            context: n = ej.x.DEFAULT,
            channel: r,
            overlayVoiceStates: l,
            displayNameMode: o,
            displayUserMode: c,
            locked: u,
            pinned: h,
            guildId: m,
            showEmpty: p = !0,
            isPreviewingInGame: g,
            isSettingsPreview: f = !1,
            anchorLeft: _,
            avatarSizeMode: x,
            maxDisplayedVoiceStates: E = 8,
        } = e,
        S = (0, R.Dk)(
            () =>
                (function (e) {
                    let [t, n] = e;
                    return new Set(n);
                })(l),
            [l],
        ),
        [I, v] = l,
        b = v.length > 0 && null != n && null != r && (!u || h),
        C = (0, s.yK)(
            [A.A],
            () =>
                Array.from(S)
                    .map((e) => A.A.getStreamForUser(e, m))
                    .filter(j.Vq)
                    .map((e) => e.ownerId),
            [m, S],
        );
    a.useEffect(() => {
        b &&
            (0, R.Y)(er.uss.VOICE_V3, {
                locked: y.default.isInstanceLocked(),
                shownUserIds: Array.from(S),
                liveUserIds: C,
                contentInventoryIds: [],
            });
    }, [S, C, b]);
    let T = -1 !== E ? v.slice(0, E) : v,
        w = -1 !== E ? v.slice(E) : [],
        N = I.get(w[0]),
        O = c === er.f5z.ALWAYS && -1 !== E;
    return b
        ? (0, i.jsxs)("div", {
              className: ef.h8,
              children: [
                  T.map((e) => {
                      let a = I.get(e);
                      return null == a
                          ? null
                          : (0, i.jsx)(
                                ey,
                                {
                                    sortedVoiceState: a,
                                    channel: r,
                                    widgetId: t,
                                    flipped: !_,
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
                  O &&
                      1 === w.length &&
                      null != N &&
                      (0, i.jsx)(
                          ey,
                          {
                              sortedVoiceState: N,
                              channel: r,
                              widgetId: t,
                              flipped: !_,
                              isPreviewingInGame: g,
                              isSettingsPreview: f,
                              context: n,
                              size: x,
                              displayNameMode: o,
                              displayUserMode: c,
                              locked: u,
                          },
                          w[0],
                      ),
                  O &&
                      w.length > 1 &&
                      (0, i.jsx)(eN, { hiddenVoiceStates: w, voiceStateMap: I, size: e_(x), locked: u, flipped: !_ }),
              ],
          })
        : u || !p
          ? null
          : (0, i.jsx)(M.g, { emptyText: eg.intl.string(eg.t.hEh0l1), icon: d.H });
});
function eM(e) {
    let { isSettingsPreview: t } = e,
        n = (0, s.bG)([I.A, S.A], () => S.A.getChannel(I.A.getVoiceChannelId())),
        r = (0, m.Ay)(n),
        l = (function (e, t) {
            let n = (0, s.bG)([I.A, S.A], () => S.A.getChannel(I.A.getVoiceChannelId())),
                [i] = (0, s.bG)(
                    [T.Ay, f.A, I.A, S.A],
                    () => {
                        let e = S.A.getChannel(I.A.getVoiceChannelId());
                        return null == e
                            ? [[], -1]
                            : e.isGuildStageVoice()
                              ? [f.A.getMutableParticipants(e.id, _.ip.SPEAKER), f.A.getParticipantsVersion(e.id)]
                              : [T.Ay.getVoiceStatesForChannel(e), T.Ay.getVoiceStateVersion(e.getGuildId())];
                    },
                    [],
                    w.D,
                ),
                r = (0, x.$n)(n?.id, i),
                l = a.useMemo(() => new Map(r.map((e) => [e.user.id, e])), [r]),
                o = (0, s.bG)([E.default], () => E.default.getId());
            return [
                l,
                (0, s.yK)([C.A, I.A, v.A, g.A], () => {
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
                                [C.A, I.A, v.A, g.A],
                            ),
                            a = t === o;
                        (n || a) && i.set(t, { isSpeaking: n, isCurrentUser: a });
                    }
                    let a = [],
                        l = [],
                        s = [];
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e],
                            o = i.get(r);
                        e < t ? a.push(r) : o && (o.isSpeaking || o.isCurrentUser) ? s.push(r) : l.push(r);
                    }
                    if (s.length > 0) {
                        let e = a.slice(0, t - s.length),
                            n = a.slice(t - s.length);
                        return [...e, ...s, ...n, ...l];
                    }
                    return n;
                }, [r, e, o, t]),
            ];
        })(ej.x.DEFAULT, e.maxDisplayedVoiceStates),
        o = (0, s.bG)([A.A], () => A.A.getStreamerActiveStreamMetadata()),
        d = (0, k.b4)(),
        h = (0, u.h)(d?.id),
        b = (0, s.cf)([A.A, y.default, O.A], () => {
            let e = A.A.getCurrentUserActiveStream();
            return {
                displayUserMode: y.default.getDisplayUserMode(),
                displayNameMode: y.default.getDisplayNameMode(),
                avatarSizeMode: y.default.getAvatarSizeMode(),
                streamApplication: o?.pid === O.A.getTargetPID() ? (0, p.A)(d) : null,
                stream: e,
            };
        });
    return (0, i.jsx)(eR, {
        ...b,
        application: h,
        ...e,
        overlayVoiceStates: l,
        channel: n,
        guildId: n?.guild_id,
        title: r ?? "",
        streamMetadata: o,
        streamApplication: b.streamApplication ?? { id: null, name: o?.sourceName },
        isSettingsPreview: t,
    });
}
