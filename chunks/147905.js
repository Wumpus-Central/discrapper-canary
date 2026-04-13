n.d(t, { Ay: () => B, FT: () => L, Ob: () => k });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(294426),
    o = n(311907),
    u = n(397927),
    d = n(442433),
    c = n(391973),
    h = n(684013),
    g = n(401843),
    m = n(765671),
    f = n(717558),
    A = n(964486),
    I = n(775602),
    E = n(66004),
    p = n(556525),
    _ = n(142524),
    S = n(534400),
    x = n(342296),
    T = n(481947),
    N = n(616356),
    C = n(961350),
    v = n(555528),
    y = n(430452),
    M = n(485296),
    R = n(977997),
    D = n(996439),
    b = n(427262),
    O = n(810412),
    w = n(652215),
    j = n(985018),
    U = n(901245);
function L(e) {
    switch (e) {
        case w.OSZ.LARGE:
            return u._3J.SIZE_32;
        case w.OSZ.SMALL:
            return u._3J.SIZE_24;
        default:
            return u._3J.SIZE_32;
    }
}
function k(e) {
    return u.vCh[e].size;
}
let G = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    P = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    F = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function V(e, t) {
    let [n, i] = l.useState(null != e && e > Date.now() - 1e4),
        [r, s] = l.useState(!1),
        [a, o] = l.useState(!0);
    return (
        (0, A.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    s(!0);
                }, 16));
        }),
        (0, A.Ay)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        s(!1);
                    }, 16);
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
let z = l.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: r, voiceBackgroundWidth: d, rightAlign: c = !1 } = e,
            {
                showConnectedAnimation: h,
                recentlyConnected: g,
                hideConnectedAnimation: f,
                setHideConnectedAnimation: A,
            } = V(n, r),
            { ref: E, width: p } = (0, m.Ay)(),
            _ = (0, o.bG)([I.A], () => I.A.useReducedMotion),
            S = g ? "entering" : "exiting",
            { width: x } = (0, a.useSpring)({ ...P[S], width: h ? p : d }),
            { opacity: T } = (0, a.useSpring)({
                ...F[S],
                opacity: +!!h,
                onRest: () => {
                    h || A(!0);
                },
            }),
            N = l.useMemo(() => (f || _ ? "none" : "block"), [f, _]);
        return (0, i.jsx)(a.animated.div, {
            className: s()(U.rH, { [U.pG]: c }),
            style: { width: x, opacity: T, display: N },
            children: (0, i.jsxs)("div", {
                ref: E,
                className: s()(U.LB, { [U.RP]: "exiting" === S, [U.kb]: !c, [U.pG]: c }),
                children: [
                    c && (0, i.jsx)(u.akl, { importData: G, shouldAnimate: !_, className: U.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: j.intl.format(j.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !c && (0, i.jsx)(u.akl, { importData: G, shouldAnimate: !_, className: U.lY }),
                    (0, i.jsx)("div", { className: U.k1 }),
                ],
            }),
        });
    }),
    H = l.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: l, guildId: r } = e,
            s = 2 * t,
            a = -(t / 2);
        return (0, i.jsx)("div", {
            className: U.QZ,
            style: { top: a, left: a, width: s, height: s },
            children: (0, i.jsx)(E.A, {
                userId: n,
                channelId: l,
                guildId: r,
                containerDimensions: { width: s, height: s },
            }),
        });
    }),
    Y = l.memo(u.euF),
    W = l.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: r = !1,
                user: a,
                nick: d,
                displayNameMode: c,
                displayUserMode: h,
                size: A = w.OSZ.LARGE,
                onClick: I,
                onContextMenu: E,
                context: x,
                guildId: v,
                isSettingsPreview: b = !1,
                voiceState: j,
                showStreamPreview: G,
                onShowStreamPreview: P,
                onWatchStream: F,
                connectedOn: W,
                ref: B,
            } = e,
            Z = (0, o.bG)([C.default], () => C.default.getId() === a.id, [a.id]),
            { ref: X, width: K } = (0, m.Ay)(),
            { showConnectedAnimation: $ } = V(W, b),
            q = j?.sessionId,
            J = t.id,
            Q = a.id,
            [ee] = (0, o.bG)(
                [R.A],
                () => [
                    R.A.getVoiceStateForChannel(J, Q) ?? R.A.getVoiceStateForSession(Q, q),
                    R.A.getVoiceStateVersion(),
                ],
                [J, Q, q],
                D.D,
            ),
            et = b ? j : (ee ?? j),
            [en, ei, el] = (0, o.yK)(
                [y.Ay],
                () =>
                    Z
                        ? [
                              !y.Ay.isSupported() || y.Ay.isSelfMute() || y.Ay.isSelfMutedTemporarily(),
                              y.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!y.Ay.isSupported() || y.Ay.isLocalMute(a.id), !1, y.Ay.isLocalVideoDisabled(a.id)],
                [Z, a.id],
            ),
            er = (0, o.bG)([N.A], () => {
                let e = N.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== a.id && N.A.getViewerIds(e).filter((e) => e === a.id).length > 0;
            }, [a.id]),
            es = b && j?.discoverable,
            ea = (0, f.A)({ userId: a.id, context: x }) || es,
            eo = (0, o.bG)([N.A], () => N.A.getStreamForUser(a.id, v)),
            eu = null != eo,
            ed = l.useCallback(() => {
                (G || null != eu) && P(null);
            }, [P, G, eu]),
            ec = l.useCallback(
                () =>
                    (0, i.jsx)(_.A, {
                        user: a,
                        channel: t,
                        onWatch: () => {
                            null != eo && ((0, g.A9)(eo, { forceMultiple: !0, noFocus: !0 }), ed(), F(eo ?? null));
                        },
                        onAction: () => F,
                        previewIsOpen: G,
                        location: w.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [a, t, eo, G, ed, F],
            ),
            eh = l.useCallback(
                (e) => {
                    r || E?.(e, a);
                },
                [r, E, a],
            ),
            eg = l.useCallback(() => {
                r || (null != eu && P(a.id));
            }, [r, P, eu, a]),
            em = r || b,
            ef = l.useMemo(() => L(A), [A]),
            eA = l.useMemo(() => k(ef), [ef]),
            eI = l.useMemo(() => a.getAvatarURL(v, eA), [a, v, eA]),
            eE = (0, o.bG)([M.A], () => M.A.getVoiceVolume(Q));
        return (h === w.f5z.ONLY_WHILE_SPEAKING && em && !ea) || null == et
            ? null
            : n
              ? (0, i.jsxs)(u.DUT, {
                    innerRef: B,
                    className: s()(U.q7, { [U.zY]: ea, [U.bG]: !r, [U.zq]: n, [U.cU]: $ }),
                    onClick: r ? void 0 : (e) => I?.(e, a),
                    onContextMenu: eh,
                    onMouseEnter: eg,
                    onMouseLeave: ed,
                    children: [
                        em && (c === w.pwA.NEVER || (!ea && c === w.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(u.YNO, {
                                  targetElementRef: X,
                                  position: "left",
                                  renderPopout: ec,
                                  shouldShow: G,
                                  onRequestClose: ed,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: U.Xh,
                                          ref: X,
                                          children: [
                                              (0, i.jsx)(T.Kc, {
                                                  guildId: v,
                                                  user: a,
                                                  video: et.selfVideo,
                                                  isStreaming: eu,
                                                  className: U.ZA,
                                                  iconClassName: U.Ow,
                                                  isWatching: er,
                                                  localMute: en && !Z,
                                                  localVideoDisabled: el,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (ei && !Z),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !b &&
                                                  (0, i.jsx)(S.Ay, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: v,
                                                      className: U.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, O.YX)(w.uss.VOICE_V3, {
                                                              type: O.Z5.VOICE,
                                                              value: O.IP.PROFILE_OPENED,
                                                              userId: a.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(u.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: d,
                                              }),
                                          ],
                                      }),
                              }),
                        !Z &&
                            (0, i.jsx)(z, {
                                nick: d,
                                connectedOn: W,
                                isSettingsPreview: b,
                                voiceBackgroundWidth: K,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(Y, {
                            className: s()(U.my, { [U.yS]: eE === -1 / 0 }),
                            size: ef,
                            src: eI,
                            isSpeaking: ea,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: p.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(H, { avatarSize: eA, userId: a.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(u.DUT, {
                    innerRef: B,
                    className: s()(U.q7, { [U.zY]: ea, [U.bG]: !r, [U.zq]: n, [U.cU]: $ }),
                    onClick: r ? void 0 : (e) => I?.(e, a),
                    onContextMenu: eh,
                    onMouseEnter: eg,
                    onMouseLeave: ed,
                    children: [
                        (0, i.jsx)(Y, {
                            className: s()(U.my, { [U.yS]: eE === -1 / 0 }),
                            size: ef,
                            src: eI,
                            isSpeaking: ea,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: p.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !Z && (0, i.jsx)(z, { nick: d, connectedOn: W, isSettingsPreview: b, voiceBackgroundWidth: K }),
                        em && (c === w.pwA.NEVER || (!ea && c === w.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(u.YNO, {
                                  targetElementRef: X,
                                  position: "right",
                                  renderPopout: ec,
                                  shouldShow: G,
                                  onRequestClose: ed,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: s()(U.Xh, { [U.$A]: eu }),
                                          ref: X,
                                          children: [
                                              (0, i.jsx)(u.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: d,
                                              }),
                                              !b &&
                                                  (0, i.jsx)(S.Ay, {
                                                      primaryGuild: a.primaryGuild,
                                                      userId: a.id,
                                                      contextGuildId: v,
                                                      className: U.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, O.YX)(w.uss.VOICE_V3, {
                                                              type: O.Z5.VOICE,
                                                              value: O.IP.PROFILE_OPENED,
                                                              userId: a.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(T.Kc, {
                                                  guildId: v,
                                                  user: a,
                                                  video: et.selfVideo,
                                                  isStreaming: eu,
                                                  className: U.ZA,
                                                  iconClassName: U.Ow,
                                                  isWatching: er,
                                                  localMute: en && !Z,
                                                  localVideoDisabled: el,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (ei && !Z),
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
    B = l.memo(function (e) {
        let {
                widgetId: t,
                channel: r,
                sortedVoiceState: s,
                displayNameMode: a,
                displayUserMode: o,
                locked: u,
                flipped: g,
                size: m,
                isPreviewingInGame: f,
                isSettingsPreview: A,
                context: I,
            } = e,
            E = l.useRef(null),
            { user: p, member: _, voiceState: S, connectedOn: T } = s,
            [N, C] = l.useState(null),
            [y, M] = l.useState(null);
        l.useEffect(() => {
            u && M(null);
        }, [u]),
            l.useEffect(() => {
                null != N && (0, O.YX)(w.uss.VOICE_V3, { type: O.Z5.GO_LIVE, value: O.IP.STREAM_PREVIEWED });
            }, [N]);
        let R = (e) => {
                C(e);
            },
            D = (e, t) => {
                A ||
                    (0, d.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("87997")]).then(n.bind(n, 180812));
                        return (
                            (0, O.YX)(w.uss.VOICE_V3, { type: O.Z5.VOICE, value: O.IP.SETTINGS_OPENED, userId: t.id }),
                            (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t,
                                    channelId: r?.id,
                                    guildId: r?.guild_id,
                                    mediaEngineContext: I,
                                    onShowProfile: () => M(t.id),
                                    appContext: w.BRT.OVERLAY,
                                    onWatchStream: () => {
                                        (0, O.YX)(w.uss.VOICE_V3, {
                                            type: O.Z5.GO_LIVE,
                                            value: O.IP.ENABLED,
                                            userId: t.id,
                                        });
                                    },
                                })
                        );
                    });
            },
            j = l.useCallback(
                (e) => {
                    let n = v.A.getWidget(t)?.layoutId,
                        i = null != n ? v.A.getWidgetsForLayout(n)?.find((e) => e.type === w.uss.GO_LIVE) : null;
                    null == i ||
                        i.pinned ||
                        ((0, c.v0)(i.id),
                        h.A.track(w.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: r?.guild_id,
                            channel_id: r?.id,
                            channel_type: r?.type,
                            widget_type: w.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != i &&
                            (0, O.YX)(w.uss.VOICE_V3, { type: O.Z5.GO_LIVE, value: O.IP.ENABLED, userId: e.ownerId });
                },
                [r, t],
            );
        if (null == p || null == r || null == S) return null;
        let U = u || f;
        return (0, i.jsx)(
            x.default,
            {
                targetElementRef: E,
                user: p,
                guildId: r.guild_id,
                channelId: r.id,
                appContext: w.BRT.OVERLAY,
                shouldShow: y === p.id,
                onRequestClose: () => M(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(W, {
                        ref: E,
                        guildId: r?.guild_id,
                        user: p,
                        connectedOn: T,
                        nick: _?.nick ?? b.Ay.getName(p),
                        flipped: g,
                        voiceState: S,
                        displayNameMode: a,
                        displayUserMode: o,
                        size: m,
                        locked: U,
                        onContextMenu: D,
                        onClick: D,
                        context: I,
                        channel: r,
                        showStreamPreview: p.id === N,
                        onShowStreamPreview: R,
                        onWatchStream: j,
                        isSettingsPreview: A,
                    }),
            },
            p.id,
        );
    });
