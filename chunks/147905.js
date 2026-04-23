n.d(t, { Ay: () => Q, FT: () => U, Ob: () => H });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(419354),
    o = n(311907),
    d = n(778712),
    c = n(604121),
    u = n(834730),
    h = n(97808),
    m = n(939249),
    p = n(265872),
    g = n(442433),
    f = n(391973),
    _ = n(684013),
    x = n(401843),
    A = n(765671),
    E = n(717558),
    S = n(964486),
    I = n(775602),
    v = n(66004),
    b = n(556525),
    C = n(142524),
    T = n(534400),
    j = n(342296),
    y = n(481947),
    w = n(616356),
    N = n(961350),
    R = n(555528),
    M = n(430452),
    O = n(485296),
    k = n(977997),
    D = n(996439),
    z = n(427262),
    P = n(810412),
    L = n(652215),
    V = n(985018),
    G = n(458509);
function U(e) {
    switch (e) {
        case L.OSZ.LARGE:
            return d._3.SIZE_32;
        case L.OSZ.SMALL:
            return d._3.SIZE_24;
        default:
            return d._3.SIZE_32;
    }
}
function H(e) {
    return d.vC[e].size;
}
let F = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    W = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    Z = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function Y(e, t) {
    let [n, i] = r.useState(null != e && e > Date.now() - 1e4),
        [a, s] = r.useState(!1),
        [l, o] = r.useState(!0);
    return (
        (0, S.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    s(!0);
                }, 16));
        }),
        (0, S.Ay)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        s(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        r.useMemo(
            () => ({
                showConnectedAnimation: a,
                recentlyConnected: n,
                hideConnectedAnimation: l,
                setHideConnectedAnimation: o,
            }),
            [a, n, l, o],
        )
    );
}
let X = r.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: a, voiceBackgroundWidth: d, rightAlign: h = !1 } = e,
            {
                showConnectedAnimation: m,
                recentlyConnected: p,
                hideConnectedAnimation: g,
                setHideConnectedAnimation: f,
            } = Y(n, a),
            { ref: _, width: x } = (0, A.Ay)(),
            E = (0, o.bG)([I.A], () => I.A.useReducedMotion),
            S = p ? "entering" : "exiting",
            { width: v } = (0, l.useSpring)({ ...W[S], width: m ? x : d }),
            { opacity: b } = (0, l.useSpring)({
                ...Z[S],
                opacity: +!!m,
                onRest: () => {
                    m || f(!0);
                },
            }),
            C = r.useMemo(() => (g || E ? "none" : "block"), [g, E]);
        return (0, i.jsx)(l.animated.div, {
            className: s()(G.rH, { [G.pG]: h }),
            style: { width: v, opacity: b, display: C },
            children: (0, i.jsxs)("div", {
                ref: _,
                className: s()(G.LB, { [G.RP]: "exiting" === S, [G.kb]: !h, [G.pG]: h }),
                children: [
                    h && (0, i.jsx)(c.a, { importData: F, shouldAnimate: !E, className: G.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: V.intl.format(V.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !h && (0, i.jsx)(c.a, { importData: F, shouldAnimate: !E, className: G.lY }),
                    (0, i.jsx)("div", { className: G.k1 }),
                ],
            }),
        });
    }),
    B = r.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: r, guildId: a } = e,
            s = 2 * t,
            l = -(t / 2);
        return (0, i.jsx)("div", {
            className: G.QZ,
            style: { top: l, left: l, width: s, height: s },
            children: (0, i.jsx)(v.A, {
                userId: n,
                channelId: r,
                guildId: a,
                containerDimensions: { width: s, height: s },
            }),
        });
    }),
    K = r.memo(h.eu),
    q = r.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: a = !1,
                user: l,
                nick: d,
                displayNameMode: c,
                displayUserMode: h,
                size: g = L.OSZ.LARGE,
                onClick: f,
                onContextMenu: _,
                context: S,
                guildId: I,
                isSettingsPreview: v = !1,
                voiceState: j,
                showStreamPreview: R,
                onShowStreamPreview: z,
                onWatchStream: V,
                connectedOn: F,
                ref: W,
            } = e,
            Z = (0, o.bG)([N.default], () => N.default.getId() === l.id, [l.id]),
            { ref: q, width: Q } = (0, A.Ay)(),
            { showConnectedAnimation: $ } = Y(F, v),
            J = j?.sessionId,
            ee = t.id,
            et = l.id,
            [en] = (0, o.bG)(
                [k.A],
                () => [
                    k.A.getVoiceStateForChannel(ee, et) ?? k.A.getVoiceStateForSession(et, J),
                    k.A.getVoiceStateVersion(),
                ],
                [ee, et, J],
                D.D,
            ),
            ei = v ? j : (en ?? j),
            [er, ea, es] = (0, o.yK)(
                [M.Ay],
                () =>
                    Z
                        ? [
                              !M.Ay.isSupported() || M.Ay.isSelfMute() || M.Ay.isSelfMutedTemporarily(),
                              M.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!M.Ay.isSupported() || M.Ay.isLocalMute(l.id), !1, M.Ay.isLocalVideoDisabled(l.id)],
                [Z, l.id],
            ),
            el = (0, o.bG)([w.A], () => {
                let e = w.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== l.id && w.A.getViewerIds(e).filter((e) => e === l.id).length > 0;
            }, [l.id]),
            eo = v && j?.discoverable,
            ed = (0, E.A)({ userId: l.id, context: S }) || eo,
            ec = (0, o.bG)([w.A], () => w.A.getStreamForUser(l.id, I)),
            eu = null != ec,
            eh = r.useCallback(() => {
                (R || null != eu) && z(null);
            }, [z, R, eu]),
            em = r.useCallback(
                () =>
                    (0, i.jsx)(C.A, {
                        user: l,
                        channel: t,
                        onWatch: () => {
                            null != ec && ((0, x.A9)(ec, { forceMultiple: !0, noFocus: !0 }), eh(), V(ec ?? null));
                        },
                        onAction: () => V,
                        previewIsOpen: R,
                        location: L.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [l, t, ec, R, eh, V],
            ),
            ep = r.useCallback(
                (e) => {
                    a || _?.(e, l);
                },
                [a, _, l],
            ),
            eg = r.useCallback(() => {
                a || (null != eu && z(l.id));
            }, [a, z, eu, l]),
            ef = a || v,
            e_ = r.useMemo(() => U(g), [g]),
            ex = r.useMemo(() => H(e_), [e_]),
            eA = r.useMemo(() => l.getAvatarURL(I, ex), [l, I, ex]),
            eE = (0, o.bG)([O.A], () => O.A.getVoiceVolume(et));
        return (h === L.f5z.ONLY_WHILE_SPEAKING && ef && !ed) || null == ei
            ? null
            : n
              ? (0, i.jsxs)(m.D, {
                    innerRef: W,
                    className: s()(G.q7, { [G.zY]: ed, [G.bG]: !a, [G.zq]: n, [G.cU]: $ }),
                    onClick: a ? void 0 : (e) => f?.(e, l),
                    onContextMenu: ep,
                    onMouseEnter: eg,
                    onMouseLeave: eh,
                    children: [
                        ef && (c === L.pwA.NEVER || (!ed && c === L.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(p.Y, {
                                  targetElementRef: q,
                                  position: "left",
                                  renderPopout: em,
                                  shouldShow: R,
                                  onRequestClose: eh,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: G.Xh,
                                          ref: q,
                                          children: [
                                              (0, i.jsx)(y.Kc, {
                                                  guildId: I,
                                                  user: l,
                                                  video: ei.selfVideo,
                                                  isStreaming: eu,
                                                  className: G.ZA,
                                                  iconClassName: G.Ow,
                                                  isWatching: el,
                                                  localMute: er && !Z,
                                                  localVideoDisabled: es,
                                                  mute: ei.isVoiceMuted(),
                                                  deaf: ei.isVoiceDeafened() || (ea && !Z),
                                                  serverMute: ei.mute || ei.suppress,
                                                  serverDeaf: ei.deaf,
                                                  disabled: !1,
                                              }),
                                              !v &&
                                                  (0, i.jsx)(T.Ay, {
                                                      primaryGuild: l.primaryGuild,
                                                      userId: l.id,
                                                      contextGuildId: I,
                                                      className: G.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, P.YX)(L.uss.VOICE_V3, {
                                                              type: P.Z5.VOICE,
                                                              value: P.IP.PROFILE_OPENED,
                                                              userId: l.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(u.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: d,
                                              }),
                                          ],
                                      }),
                              }),
                        !Z &&
                            (0, i.jsx)(X, {
                                nick: d,
                                connectedOn: F,
                                isSettingsPreview: v,
                                voiceBackgroundWidth: Q,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(K, {
                            className: s()(G.my, { [G.yS]: eE === -1 / 0 }),
                            size: e_,
                            src: eA,
                            isSpeaking: ed,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: b.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(B, { avatarSize: ex, userId: l.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(m.D, {
                    innerRef: W,
                    className: s()(G.q7, { [G.zY]: ed, [G.bG]: !a, [G.zq]: n, [G.cU]: $ }),
                    onClick: a ? void 0 : (e) => f?.(e, l),
                    onContextMenu: ep,
                    onMouseEnter: eg,
                    onMouseLeave: eh,
                    children: [
                        (0, i.jsx)(K, {
                            className: s()(G.my, { [G.yS]: eE === -1 / 0 }),
                            size: e_,
                            src: eA,
                            isSpeaking: ed,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: b.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !Z && (0, i.jsx)(X, { nick: d, connectedOn: F, isSettingsPreview: v, voiceBackgroundWidth: Q }),
                        ef && (c === L.pwA.NEVER || (!ed && c === L.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(p.Y, {
                                  targetElementRef: q,
                                  position: "right",
                                  renderPopout: em,
                                  shouldShow: R,
                                  onRequestClose: eh,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: s()(G.Xh, { [G.$A]: eu }),
                                          ref: q,
                                          children: [
                                              (0, i.jsx)(u.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: d,
                                              }),
                                              !v &&
                                                  (0, i.jsx)(T.Ay, {
                                                      primaryGuild: l.primaryGuild,
                                                      userId: l.id,
                                                      contextGuildId: I,
                                                      className: G.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, P.YX)(L.uss.VOICE_V3, {
                                                              type: P.Z5.VOICE,
                                                              value: P.IP.PROFILE_OPENED,
                                                              userId: l.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(y.Kc, {
                                                  guildId: I,
                                                  user: l,
                                                  video: ei.selfVideo,
                                                  isStreaming: eu,
                                                  className: G.ZA,
                                                  iconClassName: G.Ow,
                                                  isWatching: el,
                                                  localMute: er && !Z,
                                                  localVideoDisabled: es,
                                                  mute: ei.isVoiceMuted(),
                                                  deaf: ei.isVoiceDeafened() || (ea && !Z),
                                                  serverMute: ei.mute || ei.suppress,
                                                  serverDeaf: ei.deaf,
                                                  disabled: !1,
                                              }),
                                          ],
                                      }),
                              }),
                    ],
                });
    }),
    Q = r.memo(function (e) {
        let {
                widgetId: t,
                channel: a,
                sortedVoiceState: s,
                displayNameMode: l,
                displayUserMode: o,
                locked: d,
                flipped: c,
                size: u,
                isPreviewingInGame: h,
                isSettingsPreview: m,
                context: p,
            } = e,
            x = r.useRef(null),
            { user: A, member: E, voiceState: S, connectedOn: I } = s,
            [v, b] = r.useState(null),
            [C, T] = r.useState(null);
        r.useEffect(() => {
            d && T(null);
        }, [d]),
            r.useEffect(() => {
                null != v && (0, P.YX)(L.uss.VOICE_V3, { type: P.Z5.GO_LIVE, value: P.IP.STREAM_PREVIEWED });
            }, [v]);
        let y = (e) => {
                b(e);
            },
            w = (e, t) => {
                m ||
                    (0, g.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("87997")]).then(n.bind(n, 180812));
                        return (
                            (0, P.YX)(L.uss.VOICE_V3, { type: P.Z5.VOICE, value: P.IP.SETTINGS_OPENED, userId: t.id }),
                            (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t,
                                    channelId: a?.id,
                                    guildId: a?.guild_id,
                                    mediaEngineContext: p,
                                    onShowProfile: () => T(t.id),
                                    appContext: L.BRT.OVERLAY,
                                    onWatchStream: () => {
                                        (0, P.YX)(L.uss.VOICE_V3, {
                                            type: P.Z5.GO_LIVE,
                                            value: P.IP.ENABLED,
                                            userId: t.id,
                                        });
                                    },
                                })
                        );
                    });
            },
            N = r.useCallback(
                (e) => {
                    let n = R.A.getWidget(t)?.layoutId,
                        i = null != n ? R.A.getWidgetsForLayout(n)?.find((e) => e.type === L.uss.GO_LIVE) : null;
                    null == i ||
                        i.pinned ||
                        ((0, f.v0)(i.id),
                        _.A.track(L.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: a?.guild_id,
                            channel_id: a?.id,
                            channel_type: a?.type,
                            widget_type: L.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != i &&
                            (0, P.YX)(L.uss.VOICE_V3, { type: P.Z5.GO_LIVE, value: P.IP.ENABLED, userId: e.ownerId });
                },
                [a, t],
            );
        if (null == A || null == a || null == S) return null;
        let M = d || h;
        return (0, i.jsx)(
            j.A,
            {
                targetElementRef: x,
                user: A,
                guildId: a.guild_id,
                channelId: a.id,
                appContext: L.BRT.OVERLAY,
                shouldShow: C === A.id,
                onRequestClose: () => T(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(q, {
                        ref: x,
                        guildId: a?.guild_id,
                        user: A,
                        connectedOn: I,
                        nick: E?.nick ?? z.Ay.getName(A),
                        flipped: c,
                        voiceState: S,
                        displayNameMode: l,
                        displayUserMode: o,
                        size: u,
                        locked: M,
                        onContextMenu: w,
                        onClick: w,
                        context: p,
                        channel: a,
                        showStreamPreview: A.id === v,
                        onShowStreamPreview: y,
                        onWatchStream: N,
                        isSettingsPreview: m,
                    }),
            },
            A.id,
        );
    });
