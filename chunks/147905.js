n.d(t, {
    Ay: () => J,
    FT: () => U,
    Ob: () => G,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(92674),
    o = n(311907),
    c = n(397927),
    u = n(442433),
    d = n(391973),
    p = n(684013),
    f = n(401843),
    m = n(765671),
    g = n(717558),
    y = n(964486),
    b = n(775602),
    _ = n(659974),
    h = n(66004),
    A = n(142524),
    v = n(534400),
    O = n(342296),
    S = n(481947),
    j = n(616356),
    x = n(961350),
    I = n(555528),
    E = n(430452),
    C = n(485296),
    P = n(977997),
    N = n(996439),
    T = n(427262),
    w = n(810412),
    L = n(652215),
    D = n(985018),
    R = n(585990);

function k(e) {
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

function M(e, t) {
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

function U(e) {
    switch (e) {
        case L.OSZ.LARGE:
            return c._3J.SIZE_32;
        case L.OSZ.SMALL:
            return c._3J.SIZE_24;
        default:
            return c._3J.SIZE_32;
    }
}

function G(e) {
    return c.vCh[e].size;
}
let V = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    F = {
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
    W = {
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

function H(e, t) {
    let [n, r] = l.useState(null != e && e > Date.now() - 1e4),
        [i, a] = l.useState(!1),
        [s, o] = l.useState(!0);
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
        l.useMemo(
            () => ({
                showConnectedAnimation: i,
                recentlyConnected: n,
                hideConnectedAnimation: s,
                setHideConnectedAnimation: o,
            }),
            [i, n, s, o],
        )
    );
}
let z = l.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: i, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            {
                showConnectedAnimation: p,
                recentlyConnected: f,
                hideConnectedAnimation: g,
                setHideConnectedAnimation: y,
            } = H(n, i),
            { ref: _, width: h } = (0, m.Ay)(),
            A = (0, o.bG)([b.A], () => b.A.useReducedMotion),
            v = f ? "entering" : "exiting",
            { width: O } = (0, s.useSpring)(
                M(k({}, F[v]), {
                    width: p ? h : u,
                }),
            ),
            { opacity: S } = (0, s.useSpring)(
                M(k({}, W[v]), {
                    opacity: +!!p,
                    onRest: () => {
                        p || y(!0);
                    },
                }),
            ),
            j = l.useMemo(() => (g || A ? "none" : "block"), [g, A]);
        return (0, r.jsx)(s.animated.div, {
            className: a()(R.rH, {
                [R.pG]: d,
            }),
            style: {
                width: O,
                opacity: S,
                display: j,
            },
            children: (0, r.jsxs)("div", {
                ref: _,
                className: a()(R.LB, {
                    [R.RP]: "exiting" === v,
                    [R.kb]: !d,
                    [R.pG]: d,
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.akl, {
                            importData: V,
                            shouldAnimate: !A,
                            className: R.lY,
                        }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: D.intl.format(D.t.uFcReq, {
                                nick: t,
                            }),
                        }),
                    }),
                    !d &&
                        (0, r.jsx)(c.akl, {
                            importData: V,
                            shouldAnimate: !A,
                            className: R.lY,
                        }),
                    (0, r.jsx)("div", {
                        className: R.k1,
                    }),
                ],
            }),
        });
    }),
    K = l.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: l, guildId: i } = e,
            a = 2 * t,
            s = -(t / 2);
        return (0, r.jsx)("div", {
            className: R.QZ,
            style: {
                top: s,
                left: s,
                width: a,
                height: a,
            },
            children: (0, r.jsx)(h.A, {
                userId: n,
                channelId: l,
                guildId: i,
                containerDimensions: {
                    width: a,
                    height: a,
                },
            }),
        });
    }),
    B = l.memo(c.euF),
    Y = l.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: i = !1,
                user: s,
                nick: u,
                displayNameMode: d,
                displayUserMode: p,
                size: y = L.OSZ.LARGE,
                onClick: b,
                onContextMenu: h,
                context: O,
                guildId: I,
                isSettingsPreview: T = !1,
                voiceState: D,
                showStreamPreview: k,
                onShowStreamPreview: M,
                onWatchStream: V,
                connectedOn: F,
                ref: W,
            } = e,
            Y = (0, o.bG)([x.default], () => x.default.getId() === s.id, [s.id]),
            { ref: J, width: Z } = (0, m.Ay)(),
            { showConnectedAnimation: X } = H(F, T),
            q = null == D ? void 0 : D.sessionId,
            $ = t.id,
            Q = s.id,
            [ee] = (0, o.bG)(
                [P.A],
                () => {
                    var e;
                    return [
                        null != (e = P.A.getVoiceStateForChannel($, Q)) ? e : P.A.getVoiceStateForSession(Q, q),
                        P.A.getVoiceStateVersion(),
                    ];
                },
                [$, Q, q],
                N.D,
            ),
            et = T ? D : null != ee ? ee : D,
            [en, er, el] = (0, o.yK)(
                [E.A],
                () =>
                    Y
                        ? [!E.A.isSupported() || E.A.isSelfMute() || E.A.isSelfMutedTemporarily(), E.A.isSelfDeaf(), !1]
                        : [!E.A.isSupported() || E.A.isLocalMute(s.id), !1, E.A.isLocalVideoDisabled(s.id)],
                [Y, s.id],
            ),
            ei = (0, o.bG)([j.A], () => {
                let e = j.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== s.id && j.A.getViewerIds(e).filter((e) => e === s.id).length > 0;
            }, [s.id]),
            ea = T && (null == D ? void 0 : D.discoverable),
            es =
                (0, g.A)({
                    userId: s.id,
                    context: O,
                }) || ea,
            eo = (0, o.bG)([j.A], () => j.A.getStreamForUser(s.id, I)),
            ec = null != eo,
            eu = l.useCallback(() => {
                (k || null != ec) && M(null);
            }, [M, k, ec]),
            ed = l.useCallback(
                () =>
                    (0, r.jsx)(A.A, {
                        user: s,
                        channel: t,
                        onWatch: () => {
                            null != eo &&
                                ((0, f.A9)(eo, {
                                    forceMultiple: !0,
                                    noFocus: !0,
                                }),
                                eu(),
                                V(null != eo ? eo : null));
                        },
                        onAction: () => V,
                        previewIsOpen: k,
                        location: L.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [s, t, eo, k, eu, V],
            ),
            ep = l.useCallback(
                (e) => {
                    i || null == h || h(e, s);
                },
                [i, h, s],
            ),
            ef = l.useCallback(() => {
                i || (null != ec && M(s.id));
            }, [i, M, ec, s]),
            em = i || T,
            eg = l.useMemo(() => U(y), [y]),
            ey = l.useMemo(() => G(eg), [eg]),
            eb = l.useMemo(() => s.getAvatarURL(I, ey), [s, I, ey]),
            e_ = (0, o.bG)([C.A], () => C.A.getVoiceVolume(Q));
        return (p === L.f5z.ONLY_WHILE_SPEAKING && em && !es) || null == et
            ? null
            : n
              ? (0, r.jsxs)(c.DUT, {
                    innerRef: W,
                    className: a()(R.q7, {
                        [R.zY]: es,
                        [R.bG]: !i,
                        [R.zq]: n,
                        [R.cU]: X,
                    }),
                    onClick: i ? void 0 : (e) => (null == b ? void 0 : b(e, s)),
                    onContextMenu: ep,
                    onMouseEnter: ef,
                    onMouseLeave: eu,
                    children: [
                        em && (d === L.pwA.NEVER || (!es && d === L.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.YNO, {
                                  targetElementRef: J,
                                  position: "left",
                                  renderPopout: ed,
                                  shouldShow: k,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: R.Xh,
                                          ref: J,
                                          children: [
                                              (0, r.jsx)(S.Kc, {
                                                  guildId: I,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ec,
                                                  className: R.ZA,
                                                  iconClassName: R.Ow,
                                                  isWatching: ei,
                                                  localMute: en && !Y,
                                                  localVideoDisabled: el,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (er && !Y),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !T &&
                                                  (0, r.jsx)(v.Ay, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: I,
                                                      className: R.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, w.YX)(L.uss.VOICE_V3, {
                                                              type: w.Z5.VOICE,
                                                              value: w.IP.PROFILE_OPENED,
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
                        !Y &&
                            (0, r.jsx)(z, {
                                nick: u,
                                connectedOn: F,
                                isSettingsPreview: T,
                                voiceBackgroundWidth: Z,
                                rightAlign: !0,
                            }),
                        (0, r.jsx)(B, {
                            className: a()(R.my, {
                                [R.yS]: e_ === -1 / 0,
                            }),
                            size: eg,
                            src: eb,
                            isSpeaking: es,
                            voiceDb: e_,
                            speakingStylesConfig: {
                                spreadDirection: _.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(K, {
                            avatarSize: ey,
                            userId: s.id,
                            channelId: t.id,
                            guildId: t.getGuildId(),
                        }),
                    ],
                })
              : (0, r.jsxs)(c.DUT, {
                    innerRef: W,
                    className: a()(R.q7, {
                        [R.zY]: es,
                        [R.bG]: !i,
                        [R.zq]: n,
                        [R.cU]: X,
                    }),
                    onClick: i ? void 0 : (e) => (null == b ? void 0 : b(e, s)),
                    onContextMenu: ep,
                    onMouseEnter: ef,
                    onMouseLeave: eu,
                    children: [
                        (0, r.jsx)(B, {
                            className: a()(R.my, {
                                [R.yS]: e_ === -1 / 0,
                            }),
                            size: eg,
                            src: eb,
                            isSpeaking: es,
                            voiceDb: e_,
                            speakingStylesConfig: {
                                spreadDirection: _.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !Y &&
                            (0, r.jsx)(z, {
                                nick: u,
                                connectedOn: F,
                                isSettingsPreview: T,
                                voiceBackgroundWidth: Z,
                            }),
                        em && (d === L.pwA.NEVER || (!es && d === L.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.YNO, {
                                  targetElementRef: J,
                                  position: "right",
                                  renderPopout: ed,
                                  shouldShow: k,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: a()(R.Xh, {
                                              [R.$A]: ec,
                                          }),
                                          ref: J,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !T &&
                                                  (0, r.jsx)(v.Ay, {
                                                      primaryGuild: s.primaryGuild,
                                                      userId: s.id,
                                                      contextGuildId: I,
                                                      className: R.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, w.YX)(L.uss.VOICE_V3, {
                                                              type: w.Z5.VOICE,
                                                              value: w.IP.PROFILE_OPENED,
                                                              userId: s.id,
                                                          });
                                                      },
                                                  }),
                                              (0, r.jsx)(S.Kc, {
                                                  guildId: I,
                                                  user: s,
                                                  video: et.selfVideo,
                                                  isStreaming: ec,
                                                  className: R.ZA,
                                                  iconClassName: R.Ow,
                                                  isWatching: ei,
                                                  localMute: en && !Y,
                                                  localVideoDisabled: el,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (er && !Y),
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
    J = l.memo(function (e) {
        let {
                widgetId: t,
                channel: i,
                sortedVoiceState: a,
                displayNameMode: s,
                displayUserMode: o,
                locked: c,
                flipped: f,
                size: m,
                isPreviewingInGame: g,
                isSettingsPreview: y,
                context: b,
            } = e,
            _ = l.useRef(null),
            { user: h, member: A, voiceState: v, connectedOn: S } = a,
            [j, x] = l.useState(null),
            [E, C] = l.useState(null);
        l.useEffect(() => {
            c && C(null);
        }, [c]),
            l.useEffect(() => {
                null != j &&
                    (0, w.YX)(L.uss.VOICE_V3, {
                        type: w.Z5.GO_LIVE,
                        value: w.IP.STREAM_PREVIEWED,
                    });
            }, [j]);
        let P = (e) => {
                x(e);
            },
            N = (e, t) => {
                y ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("87997"), n.e("50478")]).then(
                            n.bind(n, 180812),
                        );
                        return (
                            (0, w.YX)(L.uss.VOICE_V3, {
                                type: w.Z5.VOICE,
                                value: w.IP.SETTINGS_OPENED,
                                userId: t.id,
                            }),
                            (n) =>
                                (0, r.jsx)(
                                    e,
                                    M(k({}, n), {
                                        user: t,
                                        channelId: null == i ? void 0 : i.id,
                                        guildId: null == i ? void 0 : i.guild_id,
                                        mediaEngineContext: b,
                                        onShowProfile: () => C(t.id),
                                        appContext: L.BRT.OVERLAY,
                                        onWatchStream: () => {
                                            (0, w.YX)(L.uss.VOICE_V3, {
                                                type: w.Z5.GO_LIVE,
                                                value: w.IP.ENABLED,
                                                userId: t.id,
                                            });
                                        },
                                    }),
                                )
                        );
                    });
            },
            D = l.useCallback(
                (e) => {
                    var n, r;
                    let l = null == (n = I.A.getWidget(t)) ? void 0 : n.layoutId,
                        a =
                            null != l
                                ? null == (r = I.A.getWidgetsForLayout(l))
                                    ? void 0
                                    : r.find((e) => e.type === L.uss.GO_LIVE)
                                : null;
                    null == a ||
                        a.pinned ||
                        ((0, d.v0)(a.id),
                        p.A.track(L.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: null == i ? void 0 : i.guild_id,
                            channel_id: null == i ? void 0 : i.id,
                            channel_type: null == i ? void 0 : i.type,
                            widget_type: L.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != a &&
                            (0, w.YX)(L.uss.VOICE_V3, {
                                type: w.Z5.GO_LIVE,
                                value: w.IP.ENABLED,
                                userId: e.ownerId,
                            });
                },
                [i, t],
            );
        if (null == h || null == i || null == v) return null;
        let R = c || g;
        return (0, r.jsx)(
            O.A,
            {
                targetElementRef: _,
                user: h,
                guildId: i.guild_id,
                channelId: i.id,
                appContext: L.BRT.OVERLAY,
                shouldShow: E === h.id,
                onRequestClose: () => C(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)(Y, {
                        ref: _,
                        guildId: null == i ? void 0 : i.guild_id,
                        user: h,
                        connectedOn: S,
                        nick: null != (e = null == A ? void 0 : A.nick) ? e : T.Ay.getName(h),
                        flipped: f,
                        voiceState: v,
                        displayNameMode: s,
                        displayUserMode: o,
                        size: m,
                        locked: R,
                        onContextMenu: N,
                        onClick: N,
                        context: b,
                        channel: i,
                        showStreamPreview: h.id === j,
                        onShowStreamPreview: P,
                        onWatchStream: D,
                        isSettingsPreview: y,
                    });
                },
            },
            h.id,
        );
    });
