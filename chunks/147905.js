i.d(t, { Ay: () => Y, FT: () => M, Ob: () => w });
var n = i(627968),
    a = i(64700),
    l = i(503698),
    r = i.n(l),
    s = i(92674),
    o = i(311907),
    d = i(397927),
    c = i(442433),
    u = i(391973),
    m = i(684013),
    _ = i(401843),
    A = i(765671),
    g = i(717558),
    h = i(964486),
    f = i(775602),
    p = i(659974),
    S = i(66004),
    I = i(142524),
    x = i(534400),
    v = i(342296),
    C = i(481947),
    E = i(616356),
    y = i(961350),
    T = i(555528),
    N = i(430452),
    b = i(485296),
    j = i(977997),
    L = i(996439),
    P = i(427262),
    O = i(810412),
    R = i(652215),
    D = i(985018),
    U = i(585990);
function M(e) {
    switch (e) {
        case R.OSZ.LARGE:
            return d._3J.SIZE_32;
        case R.OSZ.SMALL:
            return d._3J.SIZE_24;
        default:
            return d._3J.SIZE_32;
    }
}
function w(e) {
    return d.vCh[e].size;
}
let V = () =>
        i
            .e("15423")
            .then(i.t.bind(i, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    G = {
        entering: { config: { mass: 0.2, tension: 180, friction: 14 } },
        exiting: { config: { mass: 1, tension: 80, friction: 10, clamp: !0 } },
    },
    k = {
        entering: { config: { mass: 0.5, tension: 240, friction: 10 } },
        exiting: { config: { mass: 1.5, tension: 300, friction: 30, clamp: !0 }, delay: 300 },
    };
function F(e, t) {
    let [i, n] = a.useState(null != e && e > Date.now() - 1e4),
        [l, r] = a.useState(!1),
        [s, o] = a.useState(!0);
    return (
        (0, h.Ay)(() => {
            i &&
                !t &&
                (o(!1),
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
        a.useMemo(
            () => ({
                showConnectedAnimation: l,
                recentlyConnected: i,
                hideConnectedAnimation: s,
                setHideConnectedAnimation: o,
            }),
            [l, i, s, o],
        )
    );
}
let H = a.memo(function (e) {
        let { nick: t, connectedOn: i, isSettingsPreview: l, voiceBackgroundWidth: c, rightAlign: u = !1 } = e,
            {
                showConnectedAnimation: m,
                recentlyConnected: _,
                hideConnectedAnimation: g,
                setHideConnectedAnimation: h,
            } = F(i, l),
            { ref: p, width: S } = (0, A.Ay)(),
            I = (0, o.bG)([f.A], () => f.A.useReducedMotion),
            x = _ ? "entering" : "exiting",
            { width: v } = (0, s.useSpring)({ ...G[x], width: m ? S : c }),
            { opacity: C } = (0, s.useSpring)({
                ...k[x],
                opacity: +!!m,
                onRest: () => {
                    m || h(!0);
                },
            }),
            E = a.useMemo(() => (g || I ? "none" : "block"), [g, I]);
        return (0, n.jsx)(s.animated.div, {
            className: r()(U.rH, { [U.pG]: u }),
            style: { width: v, opacity: C, display: E },
            children: (0, n.jsxs)("div", {
                ref: p,
                className: r()(U.LB, { [U.RP]: "exiting" === x, [U.kb]: !u, [U.pG]: u }),
                children: [
                    u && (0, n.jsx)(d.akl, { importData: V, shouldAnimate: !I, className: U.lY }),
                    (0, n.jsx)("div", {
                        children: (0, n.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: D.intl.format(D.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !u && (0, n.jsx)(d.akl, { importData: V, shouldAnimate: !I, className: U.lY }),
                    (0, n.jsx)("div", { className: U.k1 }),
                ],
            }),
        });
    }),
    W = a.memo(function (e) {
        let { avatarSize: t, userId: i, channelId: a, guildId: l } = e,
            r = 2 * t,
            s = -(t / 2);
        return (0, n.jsx)("div", {
            className: U.QZ,
            style: { top: s, left: s, width: r, height: r },
            children: (0, n.jsx)(S.A, {
                userId: i,
                channelId: a,
                guildId: l,
                containerDimensions: { width: r, height: r },
            }),
        });
    }),
    B = a.memo(d.euF),
    z = a.memo(function (e) {
        let {
                channel: t,
                flipped: i = !1,
                locked: l = !1,
                user: s,
                nick: c,
                displayNameMode: u,
                displayUserMode: m,
                size: h = R.OSZ.LARGE,
                onClick: f,
                onContextMenu: S,
                context: v,
                guildId: T,
                isSettingsPreview: P = !1,
                voiceState: D,
                showStreamPreview: V,
                onShowStreamPreview: G,
                onWatchStream: k,
                connectedOn: z,
                ref: Y,
            } = e,
            K = (0, o.bG)([y.default], () => y.default.getId() === s.id, [s.id]),
            { ref: J, width: Z } = (0, A.Ay)(),
            { showConnectedAnimation: q } = F(z, P),
            $ = D?.sessionId,
            X = t.id,
            Q = s.id,
            [ee] = (0, o.bG)(
                [j.A],
                () => [
                    j.A.getVoiceStateForChannel(X, Q) ?? j.A.getVoiceStateForSession(Q, $),
                    j.A.getVoiceStateVersion(),
                ],
                [X, Q, $],
                L.D,
            ),
            et = P ? D : (ee ?? D),
            [ei, en, ea] = (0, o.yK)(
                [N.A],
                () =>
                    K
                        ? [!N.A.isSupported() || N.A.isSelfMute() || N.A.isSelfMutedTemporarily(), N.A.isSelfDeaf(), !1]
                        : [!N.A.isSupported() || N.A.isLocalMute(s.id), !1, N.A.isLocalVideoDisabled(s.id)],
                [K, s.id],
            ),
            el = (0, o.bG)([E.A], () => {
                let e = E.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== s.id && E.A.getViewerIds(e).filter((e) => e === s.id).length > 0;
            }, [s.id]),
            er = P && D?.discoverable,
            es = (0, g.A)({ userId: s.id, context: v }) || er,
            eo = (0, o.bG)([E.A], () => E.A.getStreamForUser(s.id, T)),
            ed = null != eo,
            ec = a.useCallback(() => {
                (V || null != ed) && G(null);
            }, [G, V, ed]),
            eu = a.useCallback(
                () =>
                    (0, n.jsx)(I.A, {
                        user: s,
                        channel: t,
                        onWatch: () => {
                            null != eo && ((0, _.A9)(eo, { forceMultiple: !0, noFocus: !0 }), ec(), k(eo ?? null));
                        },
                        onAction: () => k,
                        previewIsOpen: V,
                        location: R.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [s, t, eo, V, ec, k],
            ),
            em = a.useCallback(
                (e) => {
                    l || S?.(e, s);
                },
                [l, S, s],
            ),
            e_ = a.useCallback(() => {
                l || (null != ed && G(s.id));
            }, [l, G, ed, s]),
            eA = l || P,
            eg = a.useMemo(() => M(h), [h]),
            eh = a.useMemo(() => w(eg), [eg]),
            ef = a.useMemo(() => s.getAvatarURL(T, eh), [s, T, eh]),
            ep = (0, o.bG)([b.A], () => b.A.getVoiceVolume(Q));
        return (m === R.f5z.ONLY_WHILE_SPEAKING && eA && !es) || null == et
            ? null
            : i
              ? (0, n.jsxs)(d.DUT, {
                    innerRef: Y,
                    className: r()(U.q7, { [U.zY]: es, [U.bG]: !l, [U.zq]: i, [U.cU]: q }),
                    onClick: l ? void 0 : (e) => f?.(e, s),
                    onContextMenu: em,
                    onMouseEnter: e_,
                    onMouseLeave: ec,
                    children: [
                        eA && (u === R.pwA.NEVER || (!es && u === R.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, n.jsx)(d.YNO, {
                                  targetElementRef: J,
                                  position: "left",
                                  renderPopout: eu,
                                  shouldShow: V,
                                  onRequestClose: ec,
                                  spacing: 0,
                                  children: () =>
                                      (0, n.jsxs)("div", {
                                          className: U.Xh,
                                          ref: J,
                                          children: [
                                              (0, n.jsx)(C.Kc, {
                                                  guildId: T,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ed,
                                                  className: U.ZA,
                                                  iconClassName: U.Ow,
                                                  isWatching: el,
                                                  localMute: ei && !K,
                                                  localVideoDisabled: ea,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (en && !K),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !P &&
                                                  (0, n.jsx)(x.Ay, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: T,
                                                      className: U.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, O.YX)(R.uss.VOICE_V3, {
                                                              type: O.Z5.VOICE,
                                                              value: O.IP.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, n.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                          ],
                                      }),
                              }),
                        !K &&
                            (0, n.jsx)(H, {
                                nick: c,
                                connectedOn: z,
                                isSettingsPreview: P,
                                voiceBackgroundWidth: Z,
                                rightAlign: !0,
                            }),
                        (0, n.jsx)(B, {
                            className: r()(U.my, { [U.yS]: ep === -1 / 0 }),
                            size: eg,
                            src: ef,
                            isSpeaking: es,
                            voiceDb: ep,
                            speakingStylesConfig: {
                                spreadDirection: p.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, n.jsx)(W, { avatarSize: eh, userId: s.id, channelId: t.id, guildId: t.getGuildId() }),
                    ],
                })
              : (0, n.jsxs)(d.DUT, {
                    innerRef: Y,
                    className: r()(U.q7, { [U.zY]: es, [U.bG]: !l, [U.zq]: i, [U.cU]: q }),
                    onClick: l ? void 0 : (e) => f?.(e, s),
                    onContextMenu: em,
                    onMouseEnter: e_,
                    onMouseLeave: ec,
                    children: [
                        (0, n.jsx)(B, {
                            className: r()(U.my, { [U.yS]: ep === -1 / 0 }),
                            size: eg,
                            src: ef,
                            isSpeaking: es,
                            voiceDb: ep,
                            speakingStylesConfig: {
                                spreadDirection: p.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !K && (0, n.jsx)(H, { nick: c, connectedOn: z, isSettingsPreview: P, voiceBackgroundWidth: Z }),
                        eA && (u === R.pwA.NEVER || (!es && u === R.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, n.jsx)(d.YNO, {
                                  targetElementRef: J,
                                  position: "right",
                                  renderPopout: eu,
                                  shouldShow: V,
                                  onRequestClose: ec,
                                  spacing: 0,
                                  children: () =>
                                      (0, n.jsxs)("div", {
                                          className: r()(U.Xh, { [U.$A]: ed }),
                                          ref: J,
                                          children: [
                                              (0, n.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: c,
                                              }),
                                              !P &&
                                                  (0, n.jsx)(x.Ay, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: T,
                                                      className: U.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, O.YX)(R.uss.VOICE_V3, {
                                                              type: O.Z5.VOICE,
                                                              value: O.IP.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, n.jsx)(C.Kc, {
                                                  guildId: T,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ed,
                                                  className: U.ZA,
                                                  iconClassName: U.Ow,
                                                  isWatching: el,
                                                  localMute: ei && !K,
                                                  localVideoDisabled: ea,
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
    Y = a.memo(function (e) {
        let {
                widgetId: t,
                channel: l,
                sortedVoiceState: r,
                displayNameMode: s,
                displayUserMode: o,
                locked: d,
                flipped: _,
                size: A,
                isPreviewingInGame: g,
                isSettingsPreview: h,
                context: f,
            } = e,
            p = a.useRef(null),
            { user: S, member: I, voiceState: x, connectedOn: C } = r,
            [E, y] = a.useState(null),
            [N, b] = a.useState(null);
        a.useEffect(() => {
            d && b(null);
        }, [d]),
            a.useEffect(() => {
                null != E && (0, O.YX)(R.uss.VOICE_V3, { type: O.Z5.GO_LIVE, value: O.IP.STREAM_PREVIEWED });
            }, [E]);
        let j = (e) => {
                y(e);
            },
            L = (e, t) => {
                h ||
                    (0, c.L3)(e, async () => {
                        let { default: e } = await Promise.all([i.e("97262"), i.e("87997"), i.e("50478")]).then(
                            i.bind(i, 180812),
                        );
                        return (
                            (0, O.YX)(R.uss.VOICE_V3, { type: O.Z5.VOICE, value: O.IP.SETTINGS_OPENED, userId: t.id }),
                            (i) =>
                                (0, n.jsx)(e, {
                                    ...i,
                                    user: t,
                                    channelId: l?.id,
                                    guildId: l?.guild_id,
                                    mediaEngineContext: f,
                                    onShowProfile: () => b(t.id),
                                    appContext: R.BRT.OVERLAY,
                                    onWatchStream: () => {
                                        (0, O.YX)(R.uss.VOICE_V3, {
                                            type: O.Z5.GO_LIVE,
                                            value: O.IP.ENABLED,
                                            userId: t.id,
                                        });
                                    },
                                })
                        );
                    });
            },
            D = a.useCallback(
                (e) => {
                    let i = T.A.getWidget(t)?.layoutId,
                        n = null != i ? T.A.getWidgetsForLayout(i)?.find((e) => e.type === R.uss.GO_LIVE) : null;
                    null == n ||
                        n.pinned ||
                        ((0, u.v0)(n.id),
                        m.A.track(R.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: l?.guild_id,
                            channel_id: l?.id,
                            channel_type: l?.type,
                            widget_type: R.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != n &&
                            (0, O.YX)(R.uss.VOICE_V3, { type: O.Z5.GO_LIVE, value: O.IP.ENABLED, userId: e.ownerId });
                },
                [l, t],
            );
        if (null == S || null == l || null == x) return null;
        let U = d || g;
        return (0, n.jsx)(
            v.A,
            {
                targetElementRef: p,
                user: S,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: R.BRT.OVERLAY,
                shouldShow: N === S.id,
                onRequestClose: () => b(null),
                spacing: 24,
                children: () =>
                    (0, n.jsx)(z, {
                        ref: p,
                        guildId: l?.guild_id,
                        user: S,
                        connectedOn: C,
                        nick: I?.nick ?? P.Ay.getName(S),
                        flipped: _,
                        voiceState: x,
                        displayNameMode: s,
                        displayUserMode: o,
                        size: A,
                        locked: U,
                        onContextMenu: L,
                        onClick: L,
                        context: f,
                        channel: l,
                        showStreamPreview: S.id === E,
                        onShowStreamPreview: j,
                        onWatchStream: D,
                        isSettingsPreview: h,
                    }),
            },
            S.id,
        );
    });
