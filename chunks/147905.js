i.d(t, { Ay: () => K, FT: () => M, Ob: () => k });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(382222),
    d = i(311907),
    o = i(397927),
    u = i(442433),
    c = i(391973),
    A = i(684013),
    m = i(401843),
    g = i(765671),
    h = i(717558),
    p = i(964486),
    x = i(775602),
    f = i(66004),
    I = i(556525),
    S = i(142524),
    E = i(534400),
    v = i(342296),
    y = i(481947),
    N = i(616356),
    V = i(961350),
    j = i(555528),
    T = i(430452),
    C = i(485296),
    _ = i(977997),
    w = i(996439),
    b = i(427262),
    O = i(810412),
    G = i(652215),
    D = i(985018),
    P = i(222128);
function M(e) {
    switch (e) {
        case G.OSZ.LARGE:
            return o._3J.SIZE_32;
        case G.OSZ.SMALL:
            return o._3J.SIZE_24;
        default:
            return o._3J.SIZE_32;
    }
}
function k(e) {
    return o.vCh[e].size;
}
let R = () =>
        i
            .e("15423")
            .then(i.t.bind(i, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    L = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    U = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function Y(e, t) {
    let [i, n] = l.useState(null != e && e > Date.now() - 1e4),
        [s, a] = l.useState(!1),
        [r, d] = l.useState(!0);
    return (
        (0, p.Ay)(() => {
            i &&
                !t &&
                (d(!1),
                setTimeout(() => {
                    a(!0);
                }, 16));
        }),
        (0, p.Ay)(() => {
            let e = setTimeout(() => {
                n(!1),
                    setTimeout(() => {
                        a(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        l.useMemo(
            () => ({
                showConnectedAnimation: s,
                recentlyConnected: i,
                hideConnectedAnimation: r,
                setHideConnectedAnimation: d,
            }),
            [s, i, r, d],
        )
    );
}
let z = l.memo(function (e) {
        let { nick: t, connectedOn: i, isSettingsPreview: s, voiceBackgroundWidth: u, rightAlign: c = !1 } = e,
            {
                showConnectedAnimation: A,
                recentlyConnected: m,
                hideConnectedAnimation: h,
                setHideConnectedAnimation: p,
            } = Y(i, s),
            { ref: f, width: I } = (0, g.Ay)(),
            S = (0, d.bG)([x.A], () => x.A.useReducedMotion),
            E = m ? "entering" : "exiting",
            { width: v } = (0, r.useSpring)({ ...L[E], width: A ? I : u }),
            { opacity: y } = (0, r.useSpring)({
                ...U[E],
                opacity: +!!A,
                onRest: () => {
                    A || p(!0);
                },
            }),
            N = l.useMemo(() => (h || S ? "none" : "block"), [h, S]);
        return (0, n.jsx)(r.animated.div, {
            className: a()(P.rH, { [P.pG]: c }),
            style: { width: v, opacity: y, display: N },
            children: (0, n.jsxs)("div", {
                ref: f,
                className: a()(P.LB, { [P.RP]: "exiting" === E, [P.kb]: !c, [P.pG]: c }),
                children: [
                    c && (0, n.jsx)(o.akl, { importData: R, shouldAnimate: !S, className: P.lY }),
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: D.intl.format(D.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !c && (0, n.jsx)(o.akl, { importData: R, shouldAnimate: !S, className: P.lY }),
                    (0, n.jsx)("div", { className: P.k1 }),
                ],
            }),
        });
    }),
    Z = l.memo(function (e) {
        let { avatarSize: t, userId: i, channelId: l, guildId: s } = e,
            a = 2 * t,
            r = -(t / 2);
        return (0, n.jsx)("div", {
            className: P.QZ,
            style: { top: r, left: r, width: a, height: a },
            children: (0, n.jsx)(f.A, {
                userId: i,
                channelId: l,
                guildId: s,
                containerDimensions: { width: a, height: a },
            }),
        });
    }),
    F = l.memo(o.euF),
    W = l.memo(function (e) {
        let {
                channel: t,
                flipped: i = !1,
                locked: s = !1,
                user: r,
                nick: u,
                displayNameMode: c,
                displayUserMode: A,
                size: p = G.OSZ.LARGE,
                onClick: x,
                onContextMenu: f,
                context: v,
                guildId: j,
                isSettingsPreview: b = !1,
                voiceState: D,
                showStreamPreview: R,
                onShowStreamPreview: L,
                onWatchStream: U,
                connectedOn: W,
                ref: K,
            } = e,
            X = (0, d.bG)([V.default], () => V.default.getId() === r.id, [r.id]),
            { ref: B, width: q } = (0, g.Ay)(),
            { showConnectedAnimation: H } = Y(W, b),
            J = D?.sessionId,
            Q = t.id,
            $ = r.id,
            [ee] = (0, d.bG)(
                [_.A],
                () => [
                    _.A.getVoiceStateForChannel(Q, $) ?? _.A.getVoiceStateForSession($, J),
                    _.A.getVoiceStateVersion(),
                ],
                [Q, $, J],
                w.D,
            ),
            et = b ? D : (ee ?? D),
            [ei, en, el] = (0, d.yK)(
                [T.Ay],
                () =>
                    X
                        ? [
                              !T.Ay.isSupported() || T.Ay.isSelfMute() || T.Ay.isSelfMutedTemporarily(),
                              T.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!T.Ay.isSupported() || T.Ay.isLocalMute(r.id), !1, T.Ay.isLocalVideoDisabled(r.id)],
                [X, r.id],
            ),
            es = (0, d.bG)([N.A], () => {
                let e = N.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== r.id && N.A.getViewerIds(e).filter((e) => e === r.id).length > 0;
            }, [r.id]),
            ea = b && D?.discoverable,
            er = (0, h.A)({ userId: r.id, context: v }) || ea,
            ed = (0, d.bG)([N.A], () => N.A.getStreamForUser(r.id, j)),
            eo = null != ed,
            eu = l.useCallback(() => {
                (R || null != eo) && L(null);
            }, [L, R, eo]),
            ec = l.useCallback(
                () =>
                    (0, n.jsx)(S.A, {
                        user: r,
                        channel: t,
                        onWatch: () => {
                            null != ed && ((0, m.A9)(ed, { forceMultiple: !0, noFocus: !0 }), eu(), U(ed ?? null));
                        },
                        onAction: () => U,
                        previewIsOpen: R,
                        location: G.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [r, t, ed, R, eu, U],
            ),
            eA = l.useCallback(
                (e) => {
                    s || f?.(e, r);
                },
                [s, f, r],
            ),
            em = l.useCallback(() => {
                s || (null != eo && L(r.id));
            }, [s, L, eo, r]),
            eg = s || b,
            eh = l.useMemo(() => M(p), [p]),
            ep = l.useMemo(() => k(eh), [eh]),
            ex = l.useMemo(() => r.getAvatarURL(j, ep), [r, j, ep]),
            ef = (0, d.bG)([C.A], () => C.A.getVoiceVolume($));
        return (A === G.f5z.ONLY_WHILE_SPEAKING && eg && !er) || null == et
            ? null
            : i
              ? (0, n.jsxs)(o.DUT, {
                    innerRef: K,
                    className: a()(P.q7, { [P.zY]: er, [P.bG]: !s, [P.zq]: i, [P.cU]: H }),
                    onClick: s ? void 0 : (e) => x?.(e, r),
                    onContextMenu: eA,
                    onMouseEnter: em,
                    onMouseLeave: eu,
                    children: [
                        eg && (c === G.pwA.NEVER || (!er && c === G.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, n.jsx)(o.YNO, {
                                  targetElementRef: B,
                                  position: "left",
                                  renderPopout: ec,
                                  shouldShow: R,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, n.jsxs)("div", {
                                          className: P.Xh,
                                          ref: B,
                                          children: [
                                              (0, n.jsx)(y.Kc, {
                                                  guildId: j,
                                                  user: r,
                                                  video: et.selfVideo,
                                                  isStreaming: eo,
                                                  className: P.ZA,
                                                  iconClassName: P.Ow,
                                                  isWatching: es,
                                                  localMute: ei && !X,
                                                  localVideoDisabled: el,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (en && !X),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !b &&
                                                  (0, n.jsx)(E.Ay, {
                                                      primaryGuild: r.primaryGuild,
                                                      userId: r.id,
                                                      contextGuildId: j,
                                                      className: P.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, O.YX)(G.uss.VOICE_V3, {
                                                              type: O.Z5.VOICE,
                                                              value: O.IP.PROFILE_OPENED,
                                                              userId: r.id,
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
                        !X &&
                            (0, n.jsx)(z, {
                                nick: u,
                                connectedOn: W,
                                isSettingsPreview: b,
                                voiceBackgroundWidth: q,
                                rightAlign: !0,
                            }),
                        (0, n.jsx)(F, {
                            className: a()(P.my, { [P.yS]: ef === -1 / 0 }),
                            size: eh,
                            src: ex,
                            isSpeaking: er,
                            voiceDb: ef,
                            speakingStylesConfig: {
                                spreadDirection: I.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(Z, { avatarSize: ep, userId: r.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, n.jsxs)(o.DUT, {
                    innerRef: K,
                    className: a()(P.q7, { [P.zY]: er, [P.bG]: !s, [P.zq]: i, [P.cU]: H }),
                    onClick: s ? void 0 : (e) => x?.(e, r),
                    onContextMenu: eA,
                    onMouseEnter: em,
                    onMouseLeave: eu,
                    children: [
                        (0, n.jsx)(F, {
                            className: a()(P.my, { [P.yS]: ef === -1 / 0 }),
                            size: eh,
                            src: ex,
                            isSpeaking: er,
                            voiceDb: ef,
                            speakingStylesConfig: {
                                spreadDirection: I.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !X && (0, n.jsx)(z, { nick: u, connectedOn: W, isSettingsPreview: b, voiceBackgroundWidth: q }),
                        eg && (c === G.pwA.NEVER || (!er && c === G.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, n.jsx)(o.YNO, {
                                  targetElementRef: B,
                                  position: "right",
                                  renderPopout: ec,
                                  shouldShow: R,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, n.jsxs)("div", {
                                          className: a()(P.Xh, { [P.$A]: eo }),
                                          ref: B,
                                          children: [
                                              (0, n.jsx)(o.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !b &&
                                                  (0, n.jsx)(E.Ay, {
                                                      primaryGuild: r.primaryGuild,
                                                      userId: r.id,
                                                      contextGuildId: j,
                                                      className: P.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, O.YX)(G.uss.VOICE_V3, {
                                                              type: O.Z5.VOICE,
                                                              value: O.IP.PROFILE_OPENED,
                                                              userId: r.id,
                                                          });
                                                      },
                                                  }),
                                              (0, n.jsx)(y.Kc, {
                                                  guildId: j,
                                                  user: r,
                                                  video: et.selfVideo,
                                                  isStreaming: eo,
                                                  className: P.ZA,
                                                  iconClassName: P.Ow,
                                                  isWatching: es,
                                                  localMute: ei && !X,
                                                  localVideoDisabled: el,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (en && !X),
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
    K = l.memo(function (e) {
        let {
                widgetId: t,
                channel: s,
                sortedVoiceState: a,
                displayNameMode: r,
                displayUserMode: d,
                locked: o,
                flipped: m,
                size: g,
                isPreviewingInGame: h,
                isSettingsPreview: p,
                context: x,
            } = e,
            f = l.useRef(null),
            { user: I, member: S, voiceState: E, connectedOn: y } = a,
            [N, V] = l.useState(null),
            [T, C] = l.useState(null);
        l.useEffect(() => {
            o && C(null);
        }, [o]),
            l.useEffect(() => {
                null != N && (0, O.YX)(G.uss.VOICE_V3, { type: O.Z5.GO_LIVE, value: O.IP.STREAM_PREVIEWED });
            }, [N]);
        let _ = (e) => {
                V(e);
            },
            w = (e, t) => {
                p ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            i.e("97262"),
                            i.e("11478"),
                            i.e("87997"),
                            i.e("36468"),
                        ]).then(i.bind(i, 180812));
                        return (
                            (0, O.YX)(G.uss.VOICE_V3, { type: O.Z5.VOICE, value: O.IP.SETTINGS_OPENED, userId: t.id }),
                            (i) =>
                                (0, n.jsx)(e, {
                                    ...i,
                                    user: t,
                                    channelId: s?.id,
                                    guildId: s?.guild_id,
                                    mediaEngineContext: x,
                                    onShowProfile: () => C(t.id),
                                    appContext: G.BRT.OVERLAY,
                                    onWatchStream: () => {
                                        (0, O.YX)(G.uss.VOICE_V3, {
                                            type: O.Z5.GO_LIVE,
                                            value: O.IP.ENABLED,
                                            userId: t.id,
                                        });
                                    },
                                })
                        );
                    });
            },
            D = l.useCallback(
                (e) => {
                    let i = j.A.getWidget(t)?.layoutId,
                        n = null != i ? j.A.getWidgetsForLayout(i)?.find((e) => e.type === G.uss.GO_LIVE) : null;
                    null == n ||
                        n.pinned ||
                        ((0, c.v0)(n.id),
                        A.A.track(G.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: s?.guild_id,
                            channel_id: s?.id,
                            channel_type: s?.type,
                            widget_type: G.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != n &&
                            (0, O.YX)(G.uss.VOICE_V3, { type: O.Z5.GO_LIVE, value: O.IP.ENABLED, userId: e.ownerId });
                },
                [s, t],
            );
        if (null == I || null == s || null == E) return null;
        let P = o || h;
        return (0, n.jsx)(
            v.A,
            {
                targetElementRef: f,
                user: I,
                guildId: s.guild_id,
                channelId: s.id,
                appContext: G.BRT.OVERLAY,
                shouldShow: T === I.id,
                onRequestClose: () => C(null),
                spacing: 24,
                children: () =>
                    (0, n.jsx)(W, {
                        ref: f,
                        guildId: s?.guild_id,
                        user: I,
                        connectedOn: y,
                        nick: S?.nick ?? b.Ay.getName(I),
                        flipped: m,
                        voiceState: E,
                        displayNameMode: r,
                        displayUserMode: d,
                        size: g,
                        locked: P,
                        onContextMenu: w,
                        onClick: w,
                        context: x,
                        channel: s,
                        showStreamPreview: I.id === N,
                        onShowStreamPreview: _,
                        onWatchStream: D,
                        isSettingsPreview: p,
                    }),
            },
            I.id,
        );
    });
