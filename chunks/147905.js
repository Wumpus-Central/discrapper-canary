n.d(t, { Ay: () => K, FT: () => w, Ob: () => U });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(4208),
    o = n(311907),
    d = n(397927),
    c = n(442433),
    u = n(391973),
    A = n(684013),
    h = n(401843),
    _ = n(765671),
    m = n(717558),
    g = n(964486),
    p = n(775602),
    E = n(659974),
    I = n(66004),
    f = n(142524),
    C = n(534400),
    T = n(342296),
    N = n(481947),
    S = n(616356),
    x = n(961350),
    v = n(555528),
    b = n(430452),
    y = n(485296),
    O = n(977997),
    L = n(996439),
    R = n(427262),
    P = n(810412),
    D = n(652215),
    M = n(985018),
    j = n(901245);
function w(e) {
    switch (e) {
        case D.OSZ.LARGE:
            return d._3J.SIZE_32;
        case D.OSZ.SMALL:
            return d._3J.SIZE_24;
        default:
            return d._3J.SIZE_32;
    }
}
function U(e) {
    return d.vCh[e].size;
}
let G = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    k = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    V = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function B(e, t) {
    let [n, i] = a.useState(null != e && e > Date.now() - 1e4),
        [l, r] = a.useState(!1),
        [s, o] = a.useState(!0);
    return (
        (0, g.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    r(!0);
                }, 16));
        }),
        (0, g.Ay)(() => {
            let e = setTimeout(() => {
                i(!1),
                    setTimeout(() => {
                        r(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        a.useMemo(
            () => ({
                showConnectedAnimation: l,
                recentlyConnected: n,
                hideConnectedAnimation: s,
                setHideConnectedAnimation: o,
            }),
            [l, n, s, o],
        )
    );
}
let H = a.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: l, voiceBackgroundWidth: c, rightAlign: u = !1 } = e,
            {
                showConnectedAnimation: A,
                recentlyConnected: h,
                hideConnectedAnimation: m,
                setHideConnectedAnimation: g,
            } = B(n, l),
            { ref: E, width: I } = (0, _.Ay)(),
            f = (0, o.bG)([p.A], () => p.A.useReducedMotion),
            C = h ? "entering" : "exiting",
            { width: T } = (0, s.useSpring)({ ...k[C], width: A ? I : c }),
            { opacity: N } = (0, s.useSpring)({
                ...V[C],
                opacity: +!!A,
                onRest: () => {
                    A || g(!0);
                },
            }),
            S = a.useMemo(() => (m || f ? "none" : "block"), [m, f]);
        return (0, i.jsx)(s.animated.div, {
            className: r()(j.rH, { [j.pG]: u }),
            style: { width: T, opacity: N, display: S },
            children: (0, i.jsxs)("div", {
                ref: E,
                className: r()(j.LB, { [j.RP]: "exiting" === C, [j.kb]: !u, [j.pG]: u }),
                children: [
                    u && (0, i.jsx)(d.akl, { importData: G, shouldAnimate: !f, className: j.lY }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: M.intl.format(M.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !u && (0, i.jsx)(d.akl, { importData: G, shouldAnimate: !f, className: j.lY }),
                    (0, i.jsx)("div", { className: j.k1 }),
                ],
            }),
        });
    }),
    F = a.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: a, guildId: l } = e,
            r = 2 * t,
            s = -(t / 2);
        return (0, i.jsx)("div", {
            className: j.QZ,
            style: { top: s, left: s, width: r, height: r },
            children: (0, i.jsx)(I.A, {
                userId: n,
                channelId: a,
                guildId: l,
                containerDimensions: { width: r, height: r },
            }),
        });
    }),
    Y = a.memo(d.euF),
    W = a.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: l = !1,
                user: s,
                nick: c,
                displayNameMode: u,
                displayUserMode: A,
                size: g = D.OSZ.LARGE,
                onClick: p,
                onContextMenu: I,
                context: T,
                guildId: v,
                isSettingsPreview: R = !1,
                voiceState: M,
                showStreamPreview: G,
                onShowStreamPreview: k,
                onWatchStream: V,
                connectedOn: W,
                ref: K,
            } = e,
            q = (0, o.bG)([x.default], () => x.default.getId() === s.id, [s.id]),
            { ref: z, width: $ } = (0, _.Ay)(),
            { showConnectedAnimation: Q } = B(W, R),
            X = M?.sessionId,
            Z = t.id,
            J = s.id,
            [ee] = (0, o.bG)(
                [O.A],
                () => [
                    O.A.getVoiceStateForChannel(Z, J) ?? O.A.getVoiceStateForSession(J, X),
                    O.A.getVoiceStateVersion(),
                ],
                [Z, J, X],
                L.D,
            ),
            et = R ? M : (ee ?? M),
            [en, ei, ea] = (0, o.yK)(
                [b.Ay],
                () =>
                    q
                        ? [
                              !b.Ay.isSupported() || b.Ay.isSelfMute() || b.Ay.isSelfMutedTemporarily(),
                              b.Ay.isSelfDeaf(),
                              !1,
                          ]
                        : [!b.Ay.isSupported() || b.Ay.isLocalMute(s.id), !1, b.Ay.isLocalVideoDisabled(s.id)],
                [q, s.id],
            ),
            el = (0, o.bG)([S.A], () => {
                let e = S.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== s.id && S.A.getViewerIds(e).filter((e) => e === s.id).length > 0;
            }, [s.id]),
            er = R && M?.discoverable,
            es = (0, m.A)({ userId: s.id, context: T }) || er,
            eo = (0, o.bG)([S.A], () => S.A.getStreamForUser(s.id, v)),
            ed = null != eo,
            ec = a.useCallback(() => {
                (G || null != ed) && k(null);
            }, [k, G, ed]),
            eu = a.useCallback(
                () =>
                    (0, i.jsx)(f.A, {
                        user: s,
                        channel: t,
                        onWatch: () => {
                            null != eo && ((0, h.A9)(eo, { forceMultiple: !0, noFocus: !0 }), ec(), V(eo ?? null));
                        },
                        onAction: () => V,
                        previewIsOpen: G,
                        location: D.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [s, t, eo, G, ec, V],
            ),
            eA = a.useCallback(
                (e) => {
                    l || I?.(e, s);
                },
                [l, I, s],
            ),
            eh = a.useCallback(() => {
                l || (null != ed && k(s.id));
            }, [l, k, ed, s]),
            e_ = l || R,
            em = a.useMemo(() => w(g), [g]),
            eg = a.useMemo(() => U(em), [em]),
            ep = a.useMemo(() => s.getAvatarURL(v, eg), [s, v, eg]),
            eE = (0, o.bG)([y.A], () => y.A.getVoiceVolume(J));
        return (A === D.f5z.ONLY_WHILE_SPEAKING && e_ && !es) || null == et
            ? null
            : n
              ? (0, i.jsxs)(d.DUT, {
                    innerRef: K,
                    className: r()(j.q7, { [j.zY]: es, [j.bG]: !l, [j.zq]: n, [j.cU]: Q }),
                    onClick: l ? void 0 : (e) => p?.(e, s),
                    onContextMenu: eA,
                    onMouseEnter: eh,
                    onMouseLeave: ec,
                    children: [
                        e_ && (u === D.pwA.NEVER || (!es && u === D.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(d.YNO, {
                                  targetElementRef: z,
                                  position: "left",
                                  renderPopout: eu,
                                  shouldShow: G,
                                  onRequestClose: ec,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: j.Xh,
                                          ref: z,
                                          children: [
                                              (0, i.jsx)(N.Kc, {
                                                  guildId: v,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ed,
                                                  className: j.ZA,
                                                  iconClassName: j.Ow,
                                                  isWatching: el,
                                                  localMute: en && !q,
                                                  localVideoDisabled: ea,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (ei && !q),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !R &&
                                                  (0, i.jsx)(C.Ay, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: v,
                                                      className: j.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, P.YX)(D.uss.VOICE_V3, {
                                                              type: P.Z5.VOICE,
                                                              value: P.IP.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                          ],
                                      }),
                              }),
                        !q &&
                            (0, i.jsx)(H, {
                                nick: c,
                                connectedOn: W,
                                isSettingsPreview: R,
                                voiceBackgroundWidth: $,
                                rightAlign: !0,
                            }),
                        (0, i.jsx)(Y, {
                            className: r()(j.my, { [j.yS]: eE === -1 / 0 }),
                            size: em,
                            src: ep,
                            isSpeaking: es,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: E.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, i.jsx)(F, { avatarSize: eg, userId: s.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, i.jsxs)(d.DUT, {
                    innerRef: K,
                    className: r()(j.q7, { [j.zY]: es, [j.bG]: !l, [j.zq]: n, [j.cU]: Q }),
                    onClick: l ? void 0 : (e) => p?.(e, s),
                    onContextMenu: eA,
                    onMouseEnter: eh,
                    onMouseLeave: ec,
                    children: [
                        (0, i.jsx)(Y, {
                            className: r()(j.my, { [j.yS]: eE === -1 / 0 }),
                            size: em,
                            src: ep,
                            isSpeaking: es,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: E.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !q && (0, i.jsx)(H, { nick: c, connectedOn: W, isSettingsPreview: R, voiceBackgroundWidth: $ }),
                        e_ && (u === D.pwA.NEVER || (!es && u === D.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, i.jsx)(d.YNO, {
                                  targetElementRef: z,
                                  position: "right",
                                  renderPopout: eu,
                                  shouldShow: G,
                                  onRequestClose: ec,
                                  spacing: 0,
                                  children: () =>
                                      (0, i.jsxs)("div", {
                                          className: r()(j.Xh, { [j.$A]: ed }),
                                          ref: z,
                                          children: [
                                              (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                              !R &&
                                                  (0, i.jsx)(C.Ay, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: v,
                                                      className: j.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, P.YX)(D.uss.VOICE_V3, {
                                                              type: P.Z5.VOICE,
                                                              value: P.IP.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, i.jsx)(N.Kc, {
                                                  guildId: v,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ed,
                                                  className: j.ZA,
                                                  iconClassName: j.Ow,
                                                  isWatching: el,
                                                  localMute: en && !q,
                                                  localVideoDisabled: ea,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (ei && !q),
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
    K = a.memo(function (e) {
        let {
                widgetId: t,
                channel: l,
                sortedVoiceState: r,
                displayNameMode: s,
                displayUserMode: o,
                locked: d,
                flipped: h,
                size: _,
                isPreviewingInGame: m,
                isSettingsPreview: g,
                context: p,
            } = e,
            E = a.useRef(null),
            { user: I, member: f, voiceState: C, connectedOn: N } = r,
            [S, x] = a.useState(null),
            [b, y] = a.useState(null);
        a.useEffect(() => {
            d && y(null);
        }, [d]),
            a.useEffect(() => {
                null != S && (0, P.YX)(D.uss.VOICE_V3, { type: P.Z5.GO_LIVE, value: P.IP.STREAM_PREVIEWED });
            }, [S]);
        let O = (e) => {
                x(e);
            },
            L = (e, t) => {
                g ||
                    (0, c.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("87997"), n.e("84991")]).then(
                            n.bind(n, 180812),
                        );
                        return (
                            (0, P.YX)(D.uss.VOICE_V3, { type: P.Z5.VOICE, value: P.IP.SETTINGS_OPENED, userId: t.id }),
                            (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t,
                                    channelId: l?.id,
                                    guildId: l?.guild_id,
                                    mediaEngineContext: p,
                                    onShowProfile: () => y(t.id),
                                    appContext: D.BRT.OVERLAY,
                                    onWatchStream: () => {
                                        (0, P.YX)(D.uss.VOICE_V3, {
                                            type: P.Z5.GO_LIVE,
                                            value: P.IP.ENABLED,
                                            userId: t.id,
                                        });
                                    },
                                })
                        );
                    });
            },
            M = a.useCallback(
                (e) => {
                    let n = v.A.getWidget(t)?.layoutId,
                        i = null != n ? v.A.getWidgetsForLayout(n)?.find((e) => e.type === D.uss.GO_LIVE) : null;
                    null == i ||
                        i.pinned ||
                        ((0, u.v0)(i.id),
                        A.A.track(D.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: l?.guild_id,
                            channel_id: l?.id,
                            channel_type: l?.type,
                            widget_type: D.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != i &&
                            (0, P.YX)(D.uss.VOICE_V3, { type: P.Z5.GO_LIVE, value: P.IP.ENABLED, userId: e.ownerId });
                },
                [l, t],
            );
        if (null == I || null == l || null == C) return null;
        let j = d || m;
        return (0, i.jsx)(
            T.A,
            {
                targetElementRef: E,
                user: I,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: D.BRT.OVERLAY,
                shouldShow: b === I.id,
                onRequestClose: () => y(null),
                spacing: 24,
                children: () =>
                    (0, i.jsx)(W, {
                        ref: E,
                        guildId: l?.guild_id,
                        user: I,
                        connectedOn: N,
                        nick: f?.nick ?? R.Ay.getName(I),
                        flipped: h,
                        voiceState: C,
                        displayNameMode: s,
                        displayUserMode: o,
                        size: _,
                        locked: j,
                        onContextMenu: L,
                        onClick: L,
                        context: p,
                        channel: l,
                        showStreamPreview: I.id === S,
                        onShowStreamPreview: O,
                        onWatchStream: M,
                        isSettingsPreview: g,
                    }),
            },
            I.id,
        );
    });
