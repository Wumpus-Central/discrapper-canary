n.d(t, {
    Ay: () => J,
    FT: () => M,
    Ob: () => V,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(108531),
    o = n(311907),
    c = n(397927),
    u = n(442433),
    d = n(391973),
    p = n(684013),
    f = n(401843),
    m = n(765671),
    g = n(717558),
    y = n(964486),
    _ = n(775602),
    b = n(659974),
    A = n(66004),
    h = n(142524),
    v = n(534400),
    O = n(342296),
    j = n(481947),
    S = n(616356),
    I = n(961350),
    x = n(555528),
    E = n(430452),
    P = n(485296),
    T = n(977997),
    N = n(996439),
    w = n(427262),
    C = n(810412),
    D = n(652215),
    L = n(985018),
    k = n(585990);

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function M(e) {
    switch (e) {
        case D.OSZ.LARGE:
            return c._3J.SIZE_32;
        case D.OSZ.SMALL:
            return c._3J.SIZE_24;
        default:
            return c._3J.SIZE_32;
    }
}

function V(e) {
    return c.vCh[e].size;
}
let U = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    W = {
        entering: {
            config: {
                mass: 0.2,
                tension: 180,
                friction: 14,
            },
        },
        exiting: {
            config: {
                mass: 1,
                tension: 80,
                friction: 10,
                clamp: !0,
            },
        },
    },
    F = {
        entering: {
            config: {
                mass: 0.5,
                tension: 240,
                friction: 10,
            },
        },
        exiting: {
            config: {
                mass: 1.5,
                tension: 300,
                friction: 30,
                clamp: !0,
            },
            delay: 300,
        },
    };

function K(e, t) {
    let [n, r] = i.useState(null != e && e > Date.now() - 1e4),
        [l, a] = i.useState(!1),
        [s, o] = i.useState(!0);
    return (
        (0, y.Ay)(() => {
            n &&
                !t &&
                (o(!1),
                setTimeout(() => {
                    a(!0);
                }, 16));
        }),
        (0, y.Ay)(() => {
            let e = setTimeout(() => {
                r(!1),
                    setTimeout(() => {
                        a(!1);
                    }, 16);
            }, 2600);
            return () => clearTimeout(e);
        }),
        i.useMemo(
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
let z = i.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: l, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            {
                showConnectedAnimation: p,
                recentlyConnected: f,
                hideConnectedAnimation: g,
                setHideConnectedAnimation: y,
            } = K(n, l),
            { ref: b, width: A } = (0, m.Ay)(),
            h = (0, o.bG)([_.A], () => _.A.useReducedMotion),
            v = f ? "entering" : "exiting",
            { width: O } = (0, s.useSpring)(
                R(G({}, W[v]), {
                    width: p ? A : u,
                }),
            ),
            { opacity: j } = (0, s.useSpring)(
                R(G({}, F[v]), {
                    opacity: +!!p,
                    onRest: () => {
                        p || y(!0);
                    },
                }),
            ),
            S = i.useMemo(() => (g || h ? "none" : "block"), [g, h]);
        return (0, r.jsx)(s.animated.div, {
            className: a()(k.rH, {
                [k.pG]: d,
            }),
            style: {
                width: O,
                opacity: j,
                display: S,
            },
            children: (0, r.jsxs)("div", {
                ref: b,
                className: a()(k.LB, {
                    [k.RP]: "exiting" === v,
                    [k.kb]: !d,
                    [k.pG]: d,
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.akl, {
                            importData: U,
                            shouldAnimate: !h,
                            className: k.lY,
                        }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: L.intl.format(L.t.uFcReq, {
                                nick: t,
                            }),
                        }),
                    }),
                    !d &&
                        (0, r.jsx)(c.akl, {
                            importData: U,
                            shouldAnimate: !h,
                            className: k.lY,
                        }),
                    (0, r.jsx)("div", {
                        className: k.k1,
                    }),
                ],
            }),
        });
    }),
    H = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: l } = e,
            a = 2 * t,
            s = -(t / 2);
        return (0, r.jsx)("div", {
            className: k.QZ,
            style: {
                top: s,
                left: s,
                width: a,
                height: a,
            },
            children: (0, r.jsx)(A.A, {
                userId: n,
                channelId: i,
                guildId: l,
                containerDimensions: {
                    width: a,
                    height: a,
                },
            }),
        });
    }),
    Y = i.memo(c.euF),
    B = i.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: l = !1,
                user: s,
                nick: u,
                displayNameMode: d,
                displayUserMode: p,
                size: y = D.OSZ.LARGE,
                onClick: _,
                onContextMenu: A,
                context: O,
                guildId: x,
                isSettingsPreview: w = !1,
                voiceState: L,
                showStreamPreview: G,
                onShowStreamPreview: R,
                onWatchStream: U,
                connectedOn: W,
                ref: F,
            } = e,
            B = (0, o.bG)([I.default], () => I.default.getId() === s.id, [s.id]),
            { ref: J, width: Z } = (0, m.Ay)(),
            { showConnectedAnimation: X } = K(W, w),
            q = null == L ? void 0 : L.sessionId,
            $ = t.id,
            Q = s.id,
            [ee] = (0, o.bG)(
                [T.A],
                () => {
                    var e;
                    return [
                        null != (e = T.A.getVoiceStateForChannel($, Q)) ? e : T.A.getVoiceStateForSession(Q, q),
                        T.A.getVoiceStateVersion(),
                    ];
                },
                [$, Q, q],
                N.D,
            ),
            et = w ? L : null != ee ? ee : L,
            [en, er, ei] = (0, o.yK)(
                [E.A],
                () =>
                    B
                        ? [!E.A.isSupported() || E.A.isSelfMute() || E.A.isSelfMutedTemporarily(), E.A.isSelfDeaf(), !1]
                        : [!E.A.isSupported() || E.A.isLocalMute(s.id), !1, E.A.isLocalVideoDisabled(s.id)],
                [B, s.id],
            ),
            el = (0, o.bG)([S.A], () => {
                let e = S.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== s.id && S.A.getViewerIds(e).filter((e) => e === s.id).length > 0;
            }, [s.id]),
            ea = w && (null == L ? void 0 : L.discoverable),
            es =
                (0, g.A)({
                    userId: s.id,
                    context: O,
                }) || ea,
            eo = (0, o.bG)([S.A], () => S.A.getStreamForUser(s.id, x)),
            ec = null != eo,
            eu = i.useCallback(() => {
                (G || null != ec) && R(null);
            }, [R, G, ec]),
            ed = i.useCallback(
                () =>
                    (0, r.jsx)(h.A, {
                        user: s,
                        channel: t,
                        onWatch: () => {
                            null != eo &&
                                ((0, f.A9)(eo, {
                                    forceMultiple: !0,
                                    noFocus: !0,
                                }),
                                eu(),
                                U(null != eo ? eo : null));
                        },
                        onAction: () => U,
                        previewIsOpen: G,
                        location: D.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [s, t, eo, G, eu, U],
            ),
            ep = i.useCallback(
                (e) => {
                    l || null == A || A(e, s);
                },
                [l, A, s],
            ),
            ef = i.useCallback(() => {
                l || (null != ec && R(s.id));
            }, [l, R, ec, s]),
            em = l || w,
            eg = i.useMemo(() => M(y), [y]),
            ey = i.useMemo(() => V(eg), [eg]),
            e_ = i.useMemo(() => s.getAvatarURL(x, ey), [s, x, ey]),
            eb = (0, o.bG)([P.A], () => P.A.getVoiceVolume(Q));
        return (p === D.f5z.ONLY_WHILE_SPEAKING && em && !es) || null == et
            ? null
            : n
              ? (0, r.jsxs)(c.DUT, {
                    innerRef: F,
                    className: a()(k.q7, {
                        [k.zY]: es,
                        [k.bG]: !l,
                        [k.zq]: n,
                        [k.cU]: X,
                    }),
                    onClick: l ? void 0 : (e) => (null == _ ? void 0 : _(e, s)),
                    onContextMenu: ep,
                    onMouseEnter: ef,
                    onMouseLeave: eu,
                    children: [
                        em && (d === D.pwA.NEVER || (!es && d === D.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.YNO, {
                                  targetElementRef: J,
                                  position: "left",
                                  renderPopout: ed,
                                  shouldShow: G,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: k.Xh,
                                          ref: J,
                                          children: [
                                              (0, r.jsx)(j.Kc, {
                                                  guildId: x,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ec,
                                                  className: k.ZA,
                                                  iconClassName: k.Ow,
                                                  isWatching: el,
                                                  localMute: en && !B,
                                                  localVideoDisabled: ei,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (er && !B),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !w &&
                                                  (0, r.jsx)(v.Ay, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: x,
                                                      className: k.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, C.YX)(D.uss.VOICE_V3, {
                                                              type: C.Z5.VOICE,
                                                              value: C.IP.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                          ],
                                      }),
                              }),
                        !B &&
                            (0, r.jsx)(z, {
                                nick: u,
                                connectedOn: W,
                                isSettingsPreview: w,
                                voiceBackgroundWidth: Z,
                                rightAlign: !0,
                            }),
                        (0, r.jsx)(Y, {
                            className: a()(k.my, {
                                [k.yS]: eb === -1 / 0,
                            }),
                            size: eg,
                            src: e_,
                            isSpeaking: es,
                            voiceDb: eb,
                            speakingStylesConfig: {
                                spreadDirection: b.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(H, {
                            avatarSize: ey,
                            userId: s.id,
                            channelId: t.id,
                            guildId: t.getGuildId(),
                        }),
                    ],
                })
              : (0, r.jsxs)(c.DUT, {
                    innerRef: F,
                    className: a()(k.q7, {
                        [k.zY]: es,
                        [k.bG]: !l,
                        [k.zq]: n,
                        [k.cU]: X,
                    }),
                    onClick: l ? void 0 : (e) => (null == _ ? void 0 : _(e, s)),
                    onContextMenu: ep,
                    onMouseEnter: ef,
                    onMouseLeave: eu,
                    children: [
                        (0, r.jsx)(Y, {
                            className: a()(k.my, {
                                [k.yS]: eb === -1 / 0,
                            }),
                            size: eg,
                            src: e_,
                            isSpeaking: es,
                            voiceDb: eb,
                            speakingStylesConfig: {
                                spreadDirection: b.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !B &&
                            (0, r.jsx)(z, {
                                nick: u,
                                connectedOn: W,
                                isSettingsPreview: w,
                                voiceBackgroundWidth: Z,
                            }),
                        em && (d === D.pwA.NEVER || (!es && d === D.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.YNO, {
                                  targetElementRef: J,
                                  position: "right",
                                  renderPopout: ed,
                                  shouldShow: G,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: a()(k.Xh, {
                                              [k.$A]: ec,
                                          }),
                                          ref: J,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !w &&
                                                  (0, r.jsx)(v.Ay, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: x,
                                                      className: k.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, C.YX)(D.uss.VOICE_V3, {
                                                              type: C.Z5.VOICE,
                                                              value: C.IP.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, r.jsx)(j.Kc, {
                                                  guildId: x,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ec,
                                                  className: k.ZA,
                                                  iconClassName: k.Ow,
                                                  isWatching: el,
                                                  localMute: en && !B,
                                                  localVideoDisabled: ei,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (er && !B),
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
    J = i.memo(function (e) {
        let {
                widgetId: t,
                channel: l,
                sortedVoiceState: a,
                displayNameMode: s,
                displayUserMode: o,
                locked: c,
                flipped: f,
                size: m,
                isPreviewingInGame: g,
                isSettingsPreview: y,
                context: _,
            } = e,
            b = i.useRef(null),
            { user: A, member: h, voiceState: v, connectedOn: j } = a,
            [S, I] = i.useState(null),
            [E, P] = i.useState(null);
        i.useEffect(() => {
            c && P(null);
        }, [c]),
            i.useEffect(() => {
                null != S &&
                    (0, C.YX)(D.uss.VOICE_V3, {
                        type: C.Z5.GO_LIVE,
                        value: C.IP.STREAM_PREVIEWED,
                    });
            }, [S]);
        let T = (e) => {
                I(e);
            },
            N = (e, t) => {
                y ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("87997")]).then(
                            n.bind(n, 180812),
                        );
                        return (
                            (0, C.YX)(D.uss.VOICE_V3, {
                                type: C.Z5.VOICE,
                                value: C.IP.SETTINGS_OPENED,
                                userId: t.id,
                            }),
                            (n) =>
                                (0, r.jsx)(
                                    e,
                                    R(G({}, n), {
                                        user: t,
                                        channelId: null == l ? void 0 : l.id,
                                        guildId: null == l ? void 0 : l.guild_id,
                                        mediaEngineContext: _,
                                        onShowProfile: () => P(t.id),
                                        appContext: D.BRT.OVERLAY,
                                        onWatchStream: () => {
                                            (0, C.YX)(D.uss.VOICE_V3, {
                                                type: C.Z5.GO_LIVE,
                                                value: C.IP.ENABLED,
                                                userId: t.id,
                                            });
                                        },
                                    }),
                                )
                        );
                    });
            },
            L = i.useCallback(
                (e) => {
                    var n, r;
                    let i = null == (n = x.A.getWidget(t)) ? void 0 : n.layoutId,
                        a =
                            null != i
                                ? null == (r = x.A.getWidgetsForLayout(i))
                                    ? void 0
                                    : r.find((e) => e.type === D.uss.GO_LIVE)
                                : null;
                    null == a ||
                        a.pinned ||
                        ((0, d.v0)(a.id),
                        p.A.track(D.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: null == l ? void 0 : l.guild_id,
                            channel_id: null == l ? void 0 : l.id,
                            channel_type: null == l ? void 0 : l.type,
                            widget_type: D.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != a &&
                            (0, C.YX)(D.uss.VOICE_V3, {
                                type: C.Z5.GO_LIVE,
                                value: C.IP.ENABLED,
                                userId: e.ownerId,
                            });
                },
                [l, t],
            );
        if (null == A || null == l || null == v) return null;
        let k = c || g;
        return (0, r.jsx)(
            O.A,
            {
                targetElementRef: b,
                user: A,
                guildId: l.guild_id,
                channelId: l.id,
                appContext: D.BRT.OVERLAY,
                shouldShow: E === A.id,
                onRequestClose: () => P(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(B, {
                        ref: b,
                        guildId: null == l ? void 0 : l.guild_id,
                        user: A,
                        connectedOn: j,
                        nick: null != (e = null == h ? void 0 : h.nick) ? e : w.Ay.getName(A),
                        flipped: f,
                        voiceState: v,
                        displayNameMode: s,
                        displayUserMode: o,
                        size: m,
                        locked: k,
                        onContextMenu: N,
                        onClick: N,
                        context: _,
                        channel: l,
                        showStreamPreview: A.id === S,
                        onShowStreamPreview: T,
                        onWatchStream: L,
                        isSettingsPreview: y,
                    });
                },
            },
            A.id,
        );
    });
