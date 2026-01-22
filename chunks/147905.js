n.d(t, {
    Ay: () => J,
    FT: () => V,
    Ob: () => F,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(311907),
    c = n(397927),
    u = n(442433),
    d = n(391973),
    f = n(684013),
    p = n(401843),
    _ = n(765671),
    h = n(717558),
    m = n(964486),
    g = n(775602),
    E = n(659974),
    b = n(66004),
    y = n(142524),
    O = n(534400),
    A = n(342296),
    v = n(481947),
    S = n(616356),
    I = n(961350),
    T = n(555528),
    C = n(430452),
    N = n(485296),
    R = n(977997),
    w = n(996439),
    P = n(427262),
    D = n(810412),
    x = n(652215),
    L = n(985018),
    j = n(585990);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e) {
    switch (e) {
        case x.OSZ.LARGE:
            return c._3J.SIZE_32;
        case x.OSZ.SMALL:
            return c._3J.SIZE_24;
        default:
            return c._3J.SIZE_32;
    }
}
function F(e) {
    return c.vCh[e].size;
}
let B = () =>
        n
            .e("15423")
            .then(n.t.bind(n, 155147, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    H = 10000,
    Y = 2600,
    W = 16,
    K = {
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
    z = {
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
function q(e, t) {
    let [n, r] = i.useState(null != e && e > Date.now() - H),
        [a, s] = i.useState(!1),
        [o, l] = i.useState(!0);
    return (
        (0, m.Ay)(() => {
            n &&
                !t &&
                (l(!1),
                setTimeout(() => {
                    s(!0);
                }, W));
        }),
        (0, m.Ay)(() => {
            let e = setTimeout(() => {
                r(!1),
                    setTimeout(() => {
                        s(!1);
                    }, W);
            }, Y);
            return () => clearTimeout(e);
        }),
        i.useMemo(
            () => ({
                showConnectedAnimation: a,
                recentlyConnected: n,
                hideConnectedAnimation: o,
                setHideConnectedAnimation: l,
            }),
            [a, n, o, l],
        )
    );
}
let X = i.memo(function (e) {
        let { nick: t, connectedOn: n, isSettingsPreview: a, voiceBackgroundWidth: u, rightAlign: d = !1 } = e,
            {
                showConnectedAnimation: f,
                recentlyConnected: p,
                hideConnectedAnimation: h,
                setHideConnectedAnimation: m,
            } = q(n, a),
            { ref: E, width: b } = (0, _.Ay)(),
            y = (0, l.bG)([g.A], () => g.A.useReducedMotion),
            O = p ? "entering" : "exiting",
            { width: A } = (0, o.useSpring)(G(k({}, K[O]), { width: f ? b : u })),
            { opacity: v } = (0, o.useSpring)(
                G(k({}, z[O]), {
                    opacity: +!!f,
                    onRest: () => {
                        f || m(!0);
                    },
                }),
            ),
            S = i.useMemo(() => (h || y ? "none" : "block"), [h, y]);
        return (0, r.jsx)(o.animated.div, {
            className: s()(j.rH, { [j.pG]: d }),
            style: {
                width: A,
                opacity: v,
                display: S,
            },
            children: (0, r.jsxs)("div", {
                ref: E,
                className: s()(j.LB, {
                    [j.RP]: "exiting" === O,
                    [j.kb]: !d,
                    [j.pG]: d,
                }),
                children: [
                    d &&
                        (0, r.jsx)(c.akl, {
                            importData: B,
                            shouldAnimate: !y,
                            className: j.lY,
                        }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: L.intl.format(L.t.uFcReq, { nick: t }),
                        }),
                    }),
                    !d &&
                        (0, r.jsx)(c.akl, {
                            importData: B,
                            shouldAnimate: !y,
                            className: j.lY,
                        }),
                    (0, r.jsx)("div", { className: j.k1 }),
                ],
            }),
        });
    }),
    Z = i.memo(function (e) {
        let { avatarSize: t, userId: n, channelId: i, guildId: a } = e,
            s = 2 * t,
            o = -(t / 2);
        return (0, r.jsx)("div", {
            className: j.QZ,
            style: {
                top: o,
                left: o,
                width: s,
                height: s,
            },
            children: (0, r.jsx)(b.A, {
                userId: n,
                channelId: i,
                guildId: a,
                containerDimensions: {
                    width: s,
                    height: s,
                },
            }),
        });
    }),
    Q = i.memo(c.euF),
    $ = i.memo(function (e) {
        let {
                channel: t,
                flipped: n = !1,
                locked: a = !1,
                user: o,
                nick: u,
                displayNameMode: d,
                displayUserMode: f,
                size: m = x.OSZ.LARGE,
                onClick: g,
                onContextMenu: b,
                context: A,
                guildId: T,
                isSettingsPreview: P = !1,
                voiceState: L,
                showStreamPreview: M,
                onShowStreamPreview: k,
                onWatchStream: U,
                connectedOn: G,
                ref: B,
            } = e,
            H = (0, l.bG)([I.default], () => I.default.getId() === o.id, [o.id]),
            { ref: Y, width: W } = (0, _.Ay)(),
            { showConnectedAnimation: K } = q(G, P),
            z = null == L ? void 0 : L.sessionId,
            $ = t.id,
            J = o.id,
            [ee] = (0, l.bG)(
                [R.A],
                () => {
                    var e;
                    return [
                        null != (e = R.A.getVoiceStateForChannel($, J)) ? e : R.A.getVoiceStateForSession(J, z),
                        R.A.getVoiceStateVersion(),
                    ];
                },
                [$, J, z],
                w.D,
            ),
            et = P ? L : null != ee ? ee : L,
            [en, er, ei] = (0, l.yK)(
                [C.A],
                () =>
                    H
                        ? [!C.A.isSupported() || C.A.isSelfMute() || C.A.isSelfMutedTemporarily(), C.A.isSelfDeaf(), !1]
                        : [!C.A.isSupported() || C.A.isLocalMute(o.id), !1, C.A.isLocalVideoDisabled(o.id)],
                [H, o.id],
            ),
            ea = (0, l.bG)([S.A], () => {
                let e = S.A.getCurrentUserActiveStream();
                return null != e && e.ownerId !== o.id && S.A.getViewerIds(e).filter((e) => e === o.id).length > 0;
            }, [o.id]),
            es = P && (null == L ? void 0 : L.discoverable),
            eo =
                (0, h.A)({
                    userId: o.id,
                    context: A,
                }) || es,
            el = (0, l.bG)([S.A], () => S.A.getStreamForUser(o.id, T)),
            ec = null != el,
            eu = i.useCallback(() => {
                (M || null != ec) && k(null);
            }, [k, M, ec]),
            ed = i.useCallback(
                () =>
                    (0, r.jsx)(y.A, {
                        user: o,
                        channel: t,
                        onWatch: () => {
                            null != el &&
                                ((0, p.A9)(el, {
                                    forceMultiple: !0,
                                    noFocus: !0,
                                }),
                                eu(),
                                U(null != el ? el : null));
                        },
                        onAction: () => U,
                        previewIsOpen: M,
                        location: x.ThZ.UNLOCKED_OVERLAY,
                        hideTip: !0,
                    }),
                [o, t, el, M, eu, U],
            ),
            ef = i.useCallback(
                (e) => {
                    a || null == b || b(e, o);
                },
                [a, b, o],
            ),
            ep = i.useCallback(() => {
                a || (null != ec && k(o.id));
            }, [a, k, ec, o]),
            e_ = a || P,
            eh = i.useMemo(() => V(m), [m]),
            em = i.useMemo(() => F(eh), [eh]),
            eg = i.useMemo(() => o.getAvatarURL(T, em), [o, T, em]),
            eE = (0, l.bG)([N.A], () => N.A.getVoiceVolume(J));
        return (f === x.f5z.ONLY_WHILE_SPEAKING && e_ && !eo) || null == et
            ? null
            : n
              ? (0, r.jsxs)(c.DUT, {
                    innerRef: B,
                    className: s()(j.q7, {
                        [j.zY]: eo,
                        [j.bG]: !a,
                        [j.zq]: n,
                        [j.cU]: K,
                    }),
                    onClick: a ? void 0 : (e) => (null == g ? void 0 : g(e, o)),
                    onContextMenu: ef,
                    onMouseEnter: ep,
                    onMouseLeave: eu,
                    children: [
                        e_ && (d === x.pwA.NEVER || (!eo && d === x.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.YNO, {
                                  targetElementRef: Y,
                                  position: "left",
                                  renderPopout: ed,
                                  shouldShow: M,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: j.Xh,
                                          ref: Y,
                                          children: [
                                              (0, r.jsx)(v.Kc, {
                                                  guildId: T,
                                                  user: o,
                                                  video: et.selfVideo,
                                                  isStreaming: ec,
                                                  className: j.ZA,
                                                  iconClassName: j.Ow,
                                                  isWatching: ea,
                                                  localMute: en && !H,
                                                  localVideoDisabled: ei,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (er && !H),
                                                  serverMute: et.mute || et.suppress,
                                                  serverDeaf: et.deaf,
                                                  disabled: !1,
                                              }),
                                              !P &&
                                                  (0, r.jsx)(O.Ay, {
                                                      primaryGuild: o.primaryGuild,
                                                      userId: o.id,
                                                      contextGuildId: T,
                                                      className: j.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, D.YX)(x.uss.VOICE_V3, {
                                                              type: D.Z5.VOICE,
                                                              value: D.IP.PROFILE_OPENED,
                                                              userId: o.id,
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
                        !H &&
                            (0, r.jsx)(X, {
                                nick: u,
                                connectedOn: G,
                                isSettingsPreview: P,
                                voiceBackgroundWidth: W,
                                rightAlign: !0,
                            }),
                        (0, r.jsx)(Q, {
                            className: s()(j.my, { [j.yS]: eE === -1 / 0 }),
                            size: eh,
                            src: eg,
                            isSpeaking: eo,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: E.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        (0, r.jsx)(Z, {
                            avatarSize: em,
                            userId: o.id,
                            channelId: t.id,
                            guildId: t.getGuildId(),
                        }),
                    ],
                })
              : (0, r.jsxs)(c.DUT, {
                    innerRef: B,
                    className: s()(j.q7, {
                        [j.zY]: eo,
                        [j.bG]: !a,
                        [j.zq]: n,
                        [j.cU]: K,
                    }),
                    onClick: a ? void 0 : (e) => (null == g ? void 0 : g(e, o)),
                    onContextMenu: ef,
                    onMouseEnter: ep,
                    onMouseLeave: eu,
                    children: [
                        (0, r.jsx)(Q, {
                            className: s()(j.my, { [j.yS]: eE === -1 / 0 }),
                            size: eh,
                            src: eg,
                            isSpeaking: eo,
                            voiceDb: eE,
                            speakingStylesConfig: {
                                spreadDirection: E.O.INSET_ONLY,
                                maxInnerSpreadRadius: 4,
                                hideIfVolumeMissing: !0,
                            },
                            "aria-hidden": !0,
                        }),
                        !H &&
                            (0, r.jsx)(X, {
                                nick: u,
                                connectedOn: G,
                                isSettingsPreview: P,
                                voiceBackgroundWidth: W,
                            }),
                        e_ && (d === x.pwA.NEVER || (!eo && d === x.pwA.ONLY_WHILE_SPEAKING))
                            ? null
                            : (0, r.jsx)(c.YNO, {
                                  targetElementRef: Y,
                                  position: "right",
                                  renderPopout: ed,
                                  shouldShow: M,
                                  onRequestClose: eu,
                                  spacing: 0,
                                  children: () =>
                                      (0, r.jsxs)("div", {
                                          className: s()(j.Xh, { [j.$A]: ec }),
                                          ref: Y,
                                          children: [
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  children: u,
                                              }),
                                              !P &&
                                                  (0, r.jsx)(O.Ay, {
                                                      primaryGuild: o.primaryGuild,
                                                      userId: o.id,
                                                      contextGuildId: T,
                                                      className: j.fc,
                                                      disableGuildProfile: !0,
                                                      onShowProfile: () => {
                                                          (0, D.YX)(x.uss.VOICE_V3, {
                                                              type: D.Z5.VOICE,
                                                              value: D.IP.PROFILE_OPENED,
                                                              userId: o.id,
                                                          });
                                                      },
                                                  }),
                                              (0, r.jsx)(v.Kc, {
                                                  guildId: T,
                                                  user: o,
                                                  video: et.selfVideo,
                                                  isStreaming: ec,
                                                  className: j.ZA,
                                                  iconClassName: j.Ow,
                                                  isWatching: ea,
                                                  localMute: en && !H,
                                                  localVideoDisabled: ei,
                                                  mute: et.isVoiceMuted(),
                                                  deaf: et.isVoiceDeafened() || (er && !H),
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
                channel: a,
                sortedVoiceState: s,
                displayNameMode: o,
                displayUserMode: l,
                locked: c,
                flipped: p,
                size: _,
                isPreviewingInGame: h,
                isSettingsPreview: m,
                context: g,
            } = e,
            E = i.useRef(null),
            { user: b, member: y, voiceState: O, connectedOn: v } = s,
            [S, I] = i.useState(null),
            [C, N] = i.useState(null);
        i.useEffect(() => {
            c && N(null);
        }, [c]),
            i.useEffect(() => {
                null != S &&
                    (0, D.YX)(x.uss.VOICE_V3, {
                        type: D.Z5.GO_LIVE,
                        value: D.IP.STREAM_PREVIEWED,
                    });
            }, [S]);
        let R = (e) => {
                I(e);
            },
            w = (e, t) => {
                m ||
                    (0, u.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("97262"), n.e("87997")]).then(n.bind(n, 180812));
                        return (
                            (0, D.YX)(x.uss.VOICE_V3, {
                                type: D.Z5.VOICE,
                                value: D.IP.SETTINGS_OPENED,
                                userId: t.id,
                            }),
                            (n) =>
                                (0, r.jsx)(
                                    e,
                                    G(k({}, n), {
                                        user: t,
                                        channelId: null == a ? void 0 : a.id,
                                        guildId: null == a ? void 0 : a.guild_id,
                                        mediaEngineContext: g,
                                        onShowProfile: () => N(t.id),
                                        appContext: x.BRT.OVERLAY,
                                        onWatchStream: () => {
                                            (0, D.YX)(x.uss.VOICE_V3, {
                                                type: D.Z5.GO_LIVE,
                                                value: D.IP.ENABLED,
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
                    let i = null == (n = T.A.getWidget(t)) ? void 0 : n.layoutId,
                        s =
                            null != i
                                ? null == (r = T.A.getWidgetsForLayout(i))
                                    ? void 0
                                    : r.find((e) => e.type === x.uss.GO_LIVE)
                                : null;
                    null == s ||
                        s.pinned ||
                        ((0, d.v0)(s.id),
                        f.A.track(x.HAw.OVERLAY_PIN_TOGGLED, {
                            pinned: !0,
                            guild_id: null == a ? void 0 : a.guild_id,
                            channel_id: null == a ? void 0 : a.id,
                            channel_type: null == a ? void 0 : a.type,
                            widget_type: x.uss.GO_LIVE,
                        })),
                        null != e &&
                            null != s &&
                            (0, D.YX)(x.uss.VOICE_V3, {
                                type: D.Z5.GO_LIVE,
                                value: D.IP.ENABLED,
                                userId: e.ownerId,
                            });
                },
                [a, t],
            );
        if (null == b || null == a || null == O) return null;
        let j = c || h;
        return (0, r.jsx)(
            A.A,
            {
                targetElementRef: E,
                user: b,
                guildId: a.guild_id,
                channelId: a.id,
                appContext: x.BRT.OVERLAY,
                shouldShow: C === b.id,
                onRequestClose: () => N(null),
                spacing: 24,
                children: () => {
                    var e;
                    return (0, r.jsx)($, {
                        ref: E,
                        guildId: null == a ? void 0 : a.guild_id,
                        user: b,
                        connectedOn: v,
                        nick: null != (e = null == y ? void 0 : y.nick) ? e : P.Ay.getName(b),
                        flipped: p,
                        voiceState: O,
                        displayNameMode: o,
                        displayUserMode: l,
                        size: _,
                        locked: j,
                        onContextMenu: w,
                        onClick: w,
                        context: g,
                        channel: a,
                        showStreamPreview: b.id === S,
                        onShowStreamPreview: R,
                        onWatchStream: L,
                        isSettingsPreview: m,
                    });
                },
            },
            b.id,
        );
    });
