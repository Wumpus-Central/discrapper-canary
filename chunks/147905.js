i.d(t, { Ay: () => W, FT: () => k, Ob: () => R });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(522160),
    d = i(311907),
    o = i(397927),
    u = i(442433),
    c = i(391973),
    A = i(684013),
    g = i(401843),
    m = i(765671),
    f = i(717558),
    h = i(964486),
    I = i(775602),
    p = i(659974),
    x = i(66004),
    S = i(142524),
    E = i(534400),
    y = i(342296),
    v = i(481947),
    N = i(616356),
    T = i(961350),
    V = i(555528),
    C = i(430452),
    _ = i(485296),
    j = i(977997),
    D = i(996439),
    w = i(427262),
    G = i(810412),
    O = i(652215),
    L = i(985018),
    b = i(585990);
function k(e) {
    switch (e) {
        case O.OSZ.LARGE:
            return o._3J.SIZE_32;
        case O.OSZ.SMALL:
            return o._3J.SIZE_24;
        default:
            return o._3J.SIZE_32;
    }
}
function R(e) {
    return o.vCh[e].size;
}
let M = () =>
        i
            .e("15423")
            .then(i.t.bind(i, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    P = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    U = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function F(e, t) {
    let [i, n] = s.useState(null != e && e > Date.now() - 1e4),
        [l, r] = s.useState(!1),
        [a, d] = s.useState(!0);
    return (
        (0, h.Ay)(() => {
            i &&
                !t &&
                (d(!1),
                setTimeout(() => {
                    r(!0);
                }, 16));
        }),
        (0, h.Ay)(() => {
            let e = setTimeout(() => {
                n(!1),
                    setTimeout(() => {
                        r(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        s.useMemo(
            () => ({
                showConnectedAnimation: l,
                recentlyConnected: i,
                hideConnectedAnimation: a,
                setHideConnectedAnimation: d,
            }),
            [l, i, a, d],
        )
    );
}
let Y = s.memo(function (e) {
        let { nick: t, connectedOn: i, isSettingsPreview: l, voiceBackgroundWidth: u, rightAlign: c = !1 } = e,
            {
                showConnectedAnimation: A,
                recentlyConnected: g,
                hideConnectedAnimation: f,
                setHideConnectedAnimation: h,
            } = F(i, l),
            { ref: p, width: x } = (0, m.Ay)(),
            S = (0, d.bG)([I.A], () => I.A.useReducedMotion),
            E = g ? "entering" : "exiting",
            { width: y } = (0, a.useSpring)({ ...P[E], width: A ? x : u }),
            { opacity: v } = (0, a.useSpring)({
                ...U[E],
                opacity: +!!A,
                onRest: () => {
                    A || h(!0);
                },
            }),
            N = s.useMemo(() => (f || S ? "none" : "block"), [f, S]);
        return (0, n.jsx)(a.animated.div, {
            className: r()(b.rH, { [b.pG]: c }),
            style: { width: y, opacity: v, display: N },
            children: (0, n.jsxs)("div", {
                ref: p,
                className: r()(b.LB, { [b.RP]: "exiting" === E, [b.kb]: !c, [b.pG]: c }),
                children: [
                    c && (0, n.jsx)(o.akl, { importData: M, shouldAnimate: !S, className: b.lY }),
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: L.intl.format(L.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !c && (0, n.jsx)(o.akl, { importData: M, shouldAnimate: !S, className: b.lY }),
                    (0, n.jsx)("div", { className: b.k1 }),
                ],
            }),
        });
    }),
    z = s.memo(function (e) {
        let { avatarSize: t, userId: i, channelId: s, guildId: l } = e,
            r = 2 * t,
            a = -(t / 2);
        return (0, n.jsx)("div", {
            className: b.QZ,
            style: { top: a, left: a, width: r, height: r },
            children: (0, n.jsx)(x.A, {
                userId: i,
                channelId: s,
                guildId: l,
                containerDimensions: { width: r, height: r },
            }),
        });
    }),
    Z = s.memo(o.euF),
    B = s.memo(function (e) {
        let {
                channel: t,
                flipped: i = !1,
                locked: l = !1,
                user: a,
                nick: u,
                displayNameMode: c,
                displayUserMode: A,
                size: h = O.OSZ.LARGE,
                onClick: I,
                onContextMenu: x,
                context: y,
                guildId: V,
                isSettingsPreview: w = !1,
                voiceState: L,
                showStreamPreview: M,
                onShowStreamPreview: P,
                onWatchStream: U,
                connectedOn: B,
                ref: W,
            } = e,
            K = (0, d.bG)([T.default], () => T.default.getId() === a.id, [a.id]),
            { ref: X, width: q } = (0, m.Ay)(),
            { showConnectedAnimation: H } = F(B, w),
            J = L?.sessionId,
            Q = t.id,
            $ = a.id,
            [ee] = (0, d.bG)(
                [j.A],
                () => [
                    j.A.getVoiceStateForChannel(Q, $) ?? j.A.getVoiceStateForSession($, J),
                    j.A.getVoiceStateVersion(),
                ],
                [Q, $, J],
                D.D,
            ),
            et = w ? L : (ee ?? L),
            [ei, en, es] = (0, d.yK)(
                [C.Ay],
                () =>
                    K
                        ? [
                              !C.Ay.isSupported() || C.Ay.isSelfMute() || C.Ay.isSelfMutedTemporarily(),
                              C.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!C.Ay.isSupported() || C.Ay.isLocalMute(a.id), !1, C.Ay.isLocalVideoDisabled(a.id)],
                [K, a.id],
            ),
            el = (0, d.bG)([N.A], () => {
                let e = N.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== a.id && N.A.getViewerIds(e).filter((e) => e === a.id).length > 0;
            }, [a.id]),
            er = w && L?.discoverable,
            ea = (0, f.A)({ userId: a.id, context: y }) || er,
            ed = (0, d.bG)([N.A], () => N.A.getStreamForUser(a.id, V)),
            eo = null != ed,
            eu = s.useCallback(() => {
                (M || null != eo) && P(null);
            }, [P, M, eo]),
            ec = s.useCallback(
                () =>
                    (0, n.jsx)(S.A, {
                        user: a,
                        channel: t,
                        onWatch: () => {
                            null != ed && ((0, g.A9)(ed, { forceMultiple: !0, noFocus: !0 }), eu(), U(ed ?? null));
                        },
                        onAction: () => U,
                        previewIsOpen: M,
                        location: O.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [a, t, ed, M, eu, U],
            ),
            eA = s.useCallback(
                (e) => {
                    l || x?.(e, a);
                },
                [l, x, a],
            ),
            eg = s.useCallback(() => {
                l || (null != eo && P(a.id));
            }, [l, P, eo, a]),
            em = l || w,
            ef = s.useMemo(() => k(h), [h]),
            eh = s.useMemo(() => R(ef), [ef]),
            eI = s.useMemo(() => a.getAvatarURL(V, eh), [a, V, eh]),
            ep = (0, d.bG)([_.A], () => _.A.getVoiceVolume($));
        return (A === O.f5z.ONLY_WHILE_SPEAKING && em && !ea) || null == et
            ? null
            : i
              ? (0, n.jsxs)(o.DUT, {
                    innerRef: W,
                    className: r()(b.q7, { [b.zY]: ea, [b.bG]: !l, [b.zq]: i, [b.cU]: H }),
                    onClick: l ? void 0 : (e) => I?.(e, a),
                    onContextMenu: eA,
                    onMouseEnter: eg,
                    onMouseLeave: eu,
                    children: [
                        em && (c === O.pwA.NEVER || (!ea && c === O.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, n.jsx)(o.YNO, {
                                  targetElementRef: X,
                                  position: "left",
                                  renderPopout: ec,
                                  shouldShow: M,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, n.jsxs)("div", {
                                          className: b.Xh,
                                          ref: X,
                                          children: [
                                              (0, n.jsx)(v.Kc, {
                                                  guildId: V,
                                                  user: a,
                                                  video: et.selfVideo,
                                                  isStreaming: eo,
                                                  className: b.ZA,
                                                  iconClassName: b.Ow,
                                                  isWatching: el,
                                                  localMute: ei && !K,
                                                  localVideoDisabled: es,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (en && !K),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !w &&
                                                  (0, n.jsx)(E.Ay, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: V,
                                                      className: b.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, G.YX)(O.uss.VOICE_V3, {
                                                              type: G.Z5.VOICE,
                                                              value: G.IP.PROFILE_OPENED,
                                                              userId: a.id,
                                                          });
                                                      },
                                                  }),
                                              (0, n.jsx)(o.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                          ],
                                      }),
                              }),
                        !K &&
                            (0, n.jsx)(Y, {
                                nick: u,
                                connectedOn: B,
                                isSettingsPreview: w,
                                voiceBackgroundWidth: q,
                                rightAlign: !0,
                            }),
                        (0, n.jsx)(Z, {
                            className: r()(b.my, { [b.yS]: ep === -1 / 0 }),
                            size: ef,
                            src: eI,
                            isSpeaking: ea,
                            voiceDb: ep,
                            speakingStylesConfig: {
                                spreadDirection: p.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(z, { avatarSize: eh, userId: a.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, n.jsxs)(o.DUT, {
                    innerRef: W,
                    className: r()(b.q7, { [b.zY]: ea, [b.bG]: !l, [b.zq]: i, [b.cU]: H }),
                    onClick: l ? void 0 : (e) => I?.(e, a),
                    onContextMenu: eA,
                    onMouseEnter: eg,
                    onMouseLeave: eu,
                    children: [
                        (0, n.jsx)(Z, {
                            className: r()(b.my, { [b.yS]: ep === -1 / 0 }),
                            size: ef,
                            src: eI,
                            isSpeaking: ea,
                            voiceDb: ep,
                            speakingStylesConfig: {
                                spreadDirection: p.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !K && (0, n.jsx)(Y, { nick: u, connectedOn: B, isSettingsPreview: w, voiceBackgroundWidth: q }),
                        em && (c === O.pwA.NEVER || (!ea && c === O.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, n.jsx)(o.YNO, {
                                  targetElementRef: X,
                                  position: "right",
                                  renderPopout: ec,
                                  shouldShow: M,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, n.jsxs)("div", {
                                          className: r()(b.Xh, { [b.$A]: eo }),
                                          ref: X,
                                          children: [
                                              (0, n.jsx)(o.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !w &&
                                                  (0, n.jsx)(E.Ay, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: V,
                                                      className: b.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, G.YX)(O.uss.VOICE_V3, {
                                                              type: G.Z5.VOICE,
                                                              value: G.IP.PROFILE_OPENED,
                                                              userId: a.id,
                                                          });
                                                      },
                                                  }),
                                              (0, n.jsx)(v.Kc, {
                                                  guildId: V,
                                                  user: a,
                                                  video: et.selfVideo,
                                                  isStreaming: eo,
                                                  className: b.ZA,
                                                  iconClassName: b.Ow,
                                                  isWatching: el,
                                                  localMute: ei && !K,
                                                  localVideoDisabled: es,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (en && !K),
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
    W = s.memo(function (e) {
        let {
                widgetId: t,
                channel: l,
                sortedVoiceState: r,
                displayNameMode: a,
                displayUserMode: d,
                locked: o,
                flipped: g,
                size: m,
                isPreviewingInGame: f,
                isSettingsPreview: h,
                context: I,
            } = e,
            p = s.useRef(null),
            { user: x, member: S, voiceState: E, connectedOn: v } = r,
            [N, T] = s.useState(null),
            [C, _] = s.useState(null);
        s.useEffect(() => {
            o && _(null);
        }, [o]),
            s.useEffect(() => {
                null != N && (0, G.YX)(O.uss.VOICE_V3, { type: G.Z5.GO_LIVE, value: G.IP.STREAM_PREVIEWED });
            }, [N]);
        let j = (e) => {
                T(e);
            },
            D = (e, t) => {
                h ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([i.e("97262"), i.e("87997"), i.e("50478")]).then(
                            i.bind(i, 180812),
                        );
                        return (
                            (0, G.YX)(O.uss.VOICE_V3, { type: G.Z5.VOICE, value: G.IP.SETTINGS_OPENED, userId: t.id }),
                            (i) =>
                                (0, n.jsx)(e, {
                                    ...i,
                                    user: t,
                                    channelId: l?.id,
                                    guildId: l?.guild_id,
                                    mediaEngineContext: I,
                                    onShowProfile: () => _(t.id),
                                    appContext: O.BRT.OVERLAY,
                                    onWatchStream: () => {
                                        (0, G.YX)(O.uss.VOICE_V3, {
                                            type: G.Z5.GO_LIVE,
                                            value: G.IP.ENABLED,
                                            userId: t.id,
                                        });
                                    },
                                })
                        );
                    });
            },
            L = s.useCallback(
                (e) => {
                    let i = V.A.getWidget(t)?.layoutId,
                        n = null != i ? V.A.getWidgetsForLayout(i)?.find((e) => e.type === O.uss.GO_LIVE) : null;
                    null == n ||
                        n.pinned ||
                        ((0, c.v0)(n.id),
                        A.A.track(O.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: l?.guild_id,
                            channel_id: l?.id,
                            channel_type: l?.type,
                            widget_type: O.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != n &&
                            (0, G.YX)(O.uss.VOICE_V3, { type: G.Z5.GO_LIVE, value: G.IP.ENABLED, userId: e.ownerId });
                },
                [l, t],
            );
        if (null == x || null == l || null == E) return null;
        let b = o || f;
        return (0, n.jsx)(
            y.A,
            {
                targetElementRef: p,
                user: x,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: O.BRT.OVERLAY,
                shouldShow: C === x.id,
                onRequestClose: () => _(null),
                spacing: 24,
                children: () =>
                    (0, n.jsx)(B, {
                        ref: p,
                        guildId: l?.guild_id,
                        user: x,
                        connectedOn: v,
                        nick: S?.nick ?? w.Ay.getName(x),
                        flipped: g,
                        voiceState: E,
                        displayNameMode: a,
                        displayUserMode: d,
                        size: m,
                        locked: b,
                        onContextMenu: D,
                        onClick: D,
                        context: I,
                        channel: l,
                        showStreamPreview: x.id === N,
                        onShowStreamPreview: j,
                        onWatchStream: L,
                        isSettingsPreview: h,
                    }),
            },
            x.id,
        );
    });
