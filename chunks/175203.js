n.d(t, { Ay: () => eg, Yl: () => eA }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(934551),
    o = n(311907),
    d = n(827734),
    c = n(990078),
    u = n(397927),
    h = n(827343),
    A = n(820284),
    g = n(587895),
    m = n(429913),
    p = n(520698),
    _ = n(659974),
    x = n(164617),
    f = n(66004),
    E = n(958005),
    C = n(609425),
    I = n(73392),
    S = n(529020),
    b = n(401901),
    N = n(612258),
    T = n(551826),
    j = n(87001),
    v = n(574172),
    y = n(665691),
    R = n(209932),
    O = n(253932),
    L = n(461782),
    D = n(614518),
    M = n(706787),
    G = n(961350),
    U = n(760751),
    P = n(111162),
    k = n(430452),
    w = n(290863),
    V = n(485296),
    B = n(977997),
    H = n(712687),
    F = n(790381),
    Y = n(266080),
    W = n(723702),
    K = n(837921),
    z = n(141035),
    X = n(654820),
    q = n(804980),
    J = n(272812),
    Q = n(203355),
    Z = n(83982),
    $ = n(345812),
    ee = n(110234),
    et = n(652215),
    en = n(806931),
    ei = n(31408),
    el = n(731854),
    es = n(985018),
    ea = n(707511);
let er = [en.lp.ACTIVITY],
    eo = l.memo((e) => {
        var t, n, s;
        let r,
            d,
            c,
            {
                participant: x,
                popoutType: E,
                onDoubleClick: C,
                onContextMenu: I,
                onClick: j,
                onMouseDown: v,
                onKeyDown: H,
                className: F,
                style: Y,
                containerStyle: W,
                channel: K,
                width: $,
                onVideoResize: eo,
                inCall: ed = !1,
                selected: ec = !1,
                noBorder: eu = !1,
                noVideoRender: eA = !1,
                focused: eg = !1,
                blocked: em = !1,
                ignored: ep = !1,
                fit: e_ = b.$.CONTAIN,
                paused: ex = !1,
                pulseSpeakingIndicator: ef = !1,
                forceIdle: eE = !1,
                controlsBottom: eC,
            } = e,
            eI = l.useContext(L.vG) || eE,
            [eS, eb] = l.useState(!1),
            eN = O.Q_.useSetting(),
            eT = (0, o.bG)([P.default], () => P.default.isStreamInfoOverlayEnabled),
            [ej, ev] = l.useState(!1),
            ey = (0, o.bG)([G.default], () => G.default.getId()),
            eR = x.type === en.lp.ACTIVITY ? null : x.user,
            eO = eR?.id ?? null,
            [eL] = (0, m.A)(x.type === en.lp.ACTIVITY ? [x.applicationId] : []),
            eD = (0, o.bG)([k.A], () => null != eO && k.A.isLocalVideoDisabled(eO, (0, p.A)(x.type)), [eO, x.type]),
            eM = (0, o.bG)([k.A], () => (null != eO ? k.A.getVideoToggleState(eO, (0, p.A)(x.type)) : et.bb8.NONE), [
                eO,
                x.type,
            ]),
            eG = eM === et.bb8.AUTO_PROBING,
            { speaking: eU, latched: eP, ringing: ek, hasVideo: ew } = (0, ee.A)(x, ey),
            eV = (0, o.bG)([R.A], () => null !== eO && R.A.isUserPlayingSounds(eO), [eO]),
            eB =
                ((t = ey),
                (n = x),
                (s = K.getGuildId()),
                (r = n.type !== en.lp.ACTIVITY ? n.user.id : n.applicationId),
                (d = (0, o.cf)([B.A], () => {
                    let e = B.A.getVoiceState(s, r);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (c = (0, o.cf)([k.A], () => {
                    let e = (0, p.A)(n.type);
                    return t === r
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: k.A.isLocalMute(r, e),
                              localVideoDisabled: k.A.isLocalVideoDisabled(r, e),
                              localVideoAutoDisabled: k.A.isLocalVideoAutoDisabled(r, e),
                          };
                }, [t, n.type, r])),
                {
                    serverMuted: d.muted,
                    serverDeafened: d.deafened,
                    suppressed: d.suppressed,
                    localMuted: c.muted,
                    muted: (n.type === en.lp.USER && n.voiceState?.isVoiceMuted()) ?? !1,
                    deafened: (n.type === en.lp.USER && n.voiceState?.isVoiceDeafened()) ?? !1,
                }),
            eH = x.type === en.lp.STREAM && eO === ey,
            eF = (0, o.bG)([D.A], () => (x.type === en.lp.USER && null != eO ? D.A.getEffectForUserId(eO) : null)),
            eY = (0, o.bG)([B.A], () => B.A.getVoicePlatformForChannel(K.id, eO ?? et.dJq)),
            { showGameIcon: eW } = S.Ay.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eK = (0, o.bG)(
                [w.A],
                () =>
                    eW && null != eO
                        ? w.A.findActivity(eO, (e) => null != e.application_id && e.type === et.$pd.PLAYING)
                        : null,
                [eW, eO],
            ),
            ez = (0, o.bG)([U.A], () => (eK?.application_id != null ? U.A.getDetectableGame(eK.application_id) : null)),
            eX = (0, o.bG)([g.A], () =>
                null != ez && eK?.application_id != null ? g.A.getApplication(eK?.application_id) : void 0,
            ),
            eq = (0, y.UF)({ userId: eO, channelId: K.id }),
            eJ = (0, y.DY)({ streamKey: x.type === en.lp.STREAM ? x.id : null, channelId: K.id }),
            eQ = l.useMemo(
                () => (x.type === en.lp.STREAM ? (eJ ?? !1) : x.type === en.lp.USER && (eq ?? !1)),
                [eJ, eq, x.type],
            );
        l.useEffect(() => {
            eb(eg);
        }, [eg]);
        let eZ = l.useCallback(() => {
                null != eO && h.A.toggleLocalMute(eO, el.x.STREAM);
            }, [eO]),
            e$ = l.useCallback(
                (e) => {
                    j?.(x, e);
                },
                [j, x],
            ),
            e0 = l.useCallback(
                (e) => {
                    C?.(x, e);
                },
                [C, x],
            ),
            e1 = l.useCallback(
                (e, t, n) => {
                    I?.(x, e, t, n);
                },
                [I, x],
            ),
            e9 = null,
            e7 = null,
            e6 = "";
        switch (x.type) {
            case en.lp.STREAM:
                (e9 = (0, i.jsx)(Q.A, {
                    participant: x,
                    selected: ec,
                    popoutType: E,
                    width: $,
                    fit: e_,
                    onVideoResize: eo,
                    paused: ex,
                    focused: eg,
                    idle: eI,
                    controlsBottom: eC,
                })),
                    (e7 = (0, i.jsx)(Q.D, {
                        participant: x,
                        selected: ec,
                        width: $,
                        focused: eg,
                        idle: eI,
                        premiumIndicator: !1,
                    })),
                    (e6 = es.intl.formatToPlainString(es.t.gHPz3Q, { streamerName: x.user.username }));
                break;
            case en.lp.USER:
                (e9 = (0, i.jsx)(Z.A, {
                    channel: K,
                    inCall: ed,
                    participant: x,
                    popoutType: E,
                    fit: e_,
                    onVideoResize: eo,
                    paused: ex,
                    selected: ec,
                    width: $,
                    blocked: em,
                    ignored: ep,
                    noVideoRender: eA || eG,
                    pulseSpeakingIndicator: ef,
                })),
                    (e7 = (0, i.jsx)(Z.s, { participant: x, channelId: K.id })),
                    (e6 = es.intl.formatToPlainString(es.t["iC/x/Q"], { username: x.user.username }));
                break;
            case en.lp.ACTIVITY:
                (e9 = (0, i.jsx)(q.Ay, { interactible: eg, participant: x, selected: ec, channel: K, width: $ })),
                    (e6 = es.intl.formatToPlainString(es.t.YCvOsO, { activityName: eL?.name }));
                break;
            case en.lp.HIDDEN_STREAM:
                e9 = (0, i.jsx)(Q.A, {
                    participant: x,
                    selected: ec,
                    width: $,
                    fit: e_,
                    onVideoResize: eo,
                    paused: ex,
                    popoutType: E,
                    focused: eg,
                    idle: eI,
                });
        }
        let e2 = l.useRef(null),
            e3 = (0, o.bG)([V.A], () => (x.type === en.lp.USER ? V.A.getVoiceVolume(x.id) : -1 / 0)),
            e5 = (0, _.v)({ isSpeaking: eU, voiceDb: e3, spreadDirection: _.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e8 = (0, en.Ay)(x) ? u.kN9 : ew ? u.npA : u.EsG;
        return (0, i.jsx)(A.A, {
            section: et.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)("div", {
                className: a()(ea.iE, { [ea.DF]: ek }, F),
                style: W,
                onMouseEnter: () => {
                    ev(!0);
                },
                onMouseLeave: () => {
                    ev(!1);
                },
                children: (0, i.jsxs)(T.A, {
                    shakeLocation: ei.uD.VOICE_USER,
                    isShaking: eU,
                    className: ea.Vs,
                    children: [
                        (0, i.jsx)(J.A, {
                            ref: e2,
                            className: a()(ea.Vs, { [ea.E7]: eu, [ea.k_]: null == j, [ea.N7]: eI }),
                            noBorder: eu,
                            style: Y,
                            participantUserId: eO,
                            children: (0, i.jsxs)(u.sqX, {
                                "aria-label": e6,
                                className: ea.lG,
                                onDoubleClick: e0,
                                onContextMenu: (e) => e1(e, x.type === en.lp.STREAM),
                                onClick: e$,
                                onMouseDown: v,
                                onKeyDown: H,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eF && null != eO
                                        ? (0, i.jsx)(M.A, {
                                              voiceChannelEffect: eF,
                                              onComplete: () => (0, D.a)(eO),
                                              userId: eO,
                                          })
                                        : null,
                                    x.type === en.lp.USER
                                        ? (0, i.jsx)("div", {
                                              className: ea.nl,
                                              children: (0, i.jsx)(f.A, {
                                                  userId: eO,
                                                  channelId: K.id,
                                                  guildId: K.getGuildId(),
                                                  containerDimensions: {
                                                      width: e2?.current?.clientWidth ?? 0,
                                                      height: e2?.current?.clientHeight ?? 0,
                                                  },
                                              }),
                                          })
                                        : null,
                                    e9,
                                    eu ? null : (0, i.jsx)("div", { className: ea.hD, children: e7 }),
                                    ec
                                        ? (0, i.jsx)("div", {
                                              className: ea._Q,
                                              children: (0, i.jsx)(e8, {
                                                  size: "md",
                                                  color: "currentColor",
                                                  className: ea.Dt,
                                              }),
                                          })
                                        : null,
                                    er.includes(x.type)
                                        ? null
                                        : (0, i.jsx)(eh, {
                                              focused: eg,
                                              width: $,
                                              inCall: ed,
                                              participantId: x.id,
                                              participantType: x.type,
                                              hasVideo: ew ?? !1,
                                              ...eB,
                                              idle: eI,
                                              platform: eY,
                                              title: (0, z.A)(K, x),
                                              blocked: em,
                                              ignored: ep,
                                              localVideoDisabled: eD,
                                              videoToggleState: eM,
                                              hideAudioIcon: eH,
                                              onContextMenu: e1,
                                              onToggleMute: eZ,
                                              participantUserId: eO,
                                              channel: K,
                                              application: eX,
                                              secureFramesVerified: eQ,
                                              isHovered: ej,
                                              popoutType: E,
                                          }),
                                    ed && !eu
                                        ? (0, i.jsx)("div", {
                                              className: a()(ea.PQ, {
                                                  [ea.pU]: !eg && (eV || null != eF),
                                                  [ea.JB]: eP && !eU && !eg && !eV,
                                              }),
                                              style: eg || eV ? void 0 : e5,
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eN && eT && ej && (0, i.jsx)(X.A, { currentUserId: ey, participant: x }),
                        (0, i.jsx)(N.A, { isFiring: eS, callTileRef: e2.current }),
                    ],
                }),
            }),
        });
    });
function ed(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === en.lp.STREAM)
        return n === en.J7.XBOX
            ? (0, i.jsx)(Y.A, { className: l })
            : (0, i.jsx)(u.kN9, { size: "md", color: "currentColor", className: l });
    switch (n) {
        case en.J7.MOBILE:
            return (0, i.jsx)(u.u6o, { size: "xs", color: "currentColor", className: l });
        case en.J7.XBOX:
            return (0, i.jsx)(Y.A, { className: l });
        case en.J7.PLAYSTATION:
            return (0, i.jsx)(F.A, { className: l });
        case en.J7.QUEST:
            return (0, i.jsx)(r.VrHeadsetIcon, { size: "xs", color: "currentColor", className: l });
        default:
            return null;
    }
}
function ec(e) {
    let { icon: t, tooltipText: n, hideWhenInactive: l, onClick: s } = e;
    return (0, i.jsx)(c.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: a()(ea.V7, { [ea.kl]: l }),
            children: (0, i.jsx)(u.K0, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    e.stopPropagation(), s(e);
                },
                "aria-label": n,
                icon: t,
            }),
        }),
    });
}
function eu(e) {
    let { channelId: t, participantId: n, hideWhenInactive: s } = e,
        a = l.useMemo(() => (0, E.A)(t, n), [t, n]),
        r = (0, o.bG)([j.A], () => j.A.getIsAlwaysOnTop(a)),
        d = l.useCallback(() => {
            v.setAlwaysOnTop(a, !r);
        }, [a, r]);
    return W.isPlatformEmbedded && K.Ay.supportsFeature(et.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(ec, {
              onClick: d,
              tooltipText: r ? es.intl.string(es.t.YdyDM9) : es.intl.string(es.t.ZVGHwP),
              icon: r ? u.hl9 : u.qgw,
              hideWhenInactive: s,
          })
        : null;
}
eo.displayName = "CallTile";
let eh = l.memo((e) => {
    let {
            idle: t,
            title: n,
            width: s,
            focused: r,
            videoToggleState: h,
            blocked: A,
            ignored: g,
            participantId: m,
            participantType: _,
            participantUserId: f,
            channel: E,
            platform: S,
            secureFramesVerified: b,
            onContextMenu: N,
            muted: T,
            deafened: j,
            localMuted: v,
            serverMuted: y,
            serverDeafened: R,
            hasVideo: O,
            hideAudioIcon: L,
            onToggleMute: D,
            popoutType: M,
        } = e,
        G = (0, o.bG)([k.A], () => null != f && k.A.isLocalVideoAutoDisabled(f, (0, p.A)(_)), [f, _]),
        U = (0, C.A)({ userId: f, guildId: E.getGuildId() }),
        P = (0, I.a)({ displayNameStyles: U }),
        w = (0, $.Y)(s),
        V = (0, $.V)(s),
        [B, F] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== H.A.isOpen() && ((e = H.A.isOpen()) || F(!1));
            };
        return H.A.addChangeListener(t), () => H.A.removeChangeListener(t);
    }, []);
    let Y = !L && _ === en.lp.STREAM && O && (!V || v),
        W = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? u.TJE : n ? u.O1p : l ? u.cQT : t ? u.O1p : s ? u.z0P : null;
        })({ localMuted: v, serverMuted: y, serverDeafened: R, deafened: j, muted: T }),
        K = [];
    return (
        r
            ? M === x.N.CALL_TILE &&
              K.push((0, i.jsx)(eu, { channelId: E.id, participantId: m, hideWhenInactive: !B }, "stay-on-top"))
            : (K.push(
                  (0, i.jsx)(
                      ec,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), F(!0), N(e, !0, en.GK.THREE_DOT);
                          },
                          tooltipText: es.intl.string(es.t["+1H47t"]),
                          icon: u.jNK,
                          hideWhenInactive: !B,
                      },
                      "options",
                  ),
              ),
              Y &&
                  K.push(
                      (0, i.jsx)(
                          ec,
                          {
                              onClick: D,
                              tooltipText: v ? es.intl.string(es.t.YqAjXy) : es.intl.string(es.t.w4m945),
                              icon: v ? u._RO : u.HKD,
                              hideWhenInactive: !v && !B,
                          },
                          "mute",
                      ),
                  )),
        (0, i.jsxs)("div", {
            className: a()(ea.MU, { [ea.oE]: V, [ea.Ol]: r }),
            children: [
                (0, i.jsx)("div", {
                    className: a()(ea.Ik, { [ea.EX]: s < 195 }),
                    children:
                        G || h === et.bb8.AUTO_PROBING
                            ? t
                                ? (0, i.jsx)("div", {
                                      className: ea.h5,
                                      children: (0, i.jsx)(u.OCo, { size: "md", color: "currentColor" }),
                                  })
                                : (0, i.jsxs)("div", {
                                      className: a()(ea.ns, ea.WP),
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: ea.h5,
                                              children: (0, i.jsx)(u.OCo, { size: "md", color: "currentColor" }),
                                          }),
                                          (0, i.jsx)(u.Text, {
                                              variant: "text-sm/normal",
                                              className: ea.Wk,
                                              children: es.intl.string(es.t.m2Hyj0),
                                          }),
                                      ],
                                  })
                            : null,
                }),
                !w &&
                    (0, i.jsxs)("div", {
                        className: a()(ea.Qp, { [ea.EX]: s < 195 }),
                        children: [
                            (0, i.jsxs)(u.Text, {
                                className: ea.ac,
                                color: "none",
                                variant: V ? "text-sm/normal" : "text-md/normal",
                                children: [
                                    null != W &&
                                        _ === en.lp.USER &&
                                        (0, i.jsx)(W, {
                                            className: a()(ea.fh, { [ea.oE]: V }),
                                            size: "xs",
                                            color: "currentColor",
                                        }),
                                    A
                                        ? (0, i.jsx)("div", {
                                              className: ea.Z5,
                                              children: (0, i.jsx)(u.KTN, {
                                                  size: "lg",
                                                  className: ea.Q6,
                                                  color: d.A.unsafe_rawColors.RED_400.css,
                                              }),
                                          })
                                        : null,
                                    g
                                        ? (0, i.jsx)("div", {
                                              className: ea.PP,
                                              children: (0, i.jsx)(u.G3N, { size: "lg", className: ea.Q6 }),
                                          })
                                        : null,
                                    t
                                        ? null
                                        : (0, i.jsx)(ed, {
                                              participantType: _,
                                              platform: S,
                                              className: a()(ea.fh, { [ea.oE]: V }),
                                          }),
                                    null == n || "" === n || t
                                        ? null
                                        : (0, i.jsx)("span", { className: a()(ea.Wk, P), children: n }),
                                    b &&
                                        (0, i.jsx)(c.m, {
                                            text: es.intl.string(es.t.ZEem6O),
                                            children: (0, i.jsx)(u.m5V, {
                                                className: ea.vW,
                                                size: "xs",
                                                color: d.A.colors.TEXT_STRONG,
                                                "aria-label": es.intl.string(es.t.mR9cf3),
                                            }),
                                        }),
                                ],
                            }),
                            K.length > 0 ? (0, i.jsx)("div", { className: ea._v, children: K }) : null,
                        ],
                    }),
            ],
        })
    );
});
eh.displayName = "CallTileOverlay";
let eA = b.$,
    eg = eo;
