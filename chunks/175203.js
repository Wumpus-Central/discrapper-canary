n(321073);
var s = n(477900),
    i = n(582128),
    t = n(503698),
    a = n.n(t),
    o = n(120692),
    c = n(738678),
    d = n(12470),
    r = n(855986),
    u = n(646514),
    p = n(31300),
    h = n(428689),
    m = n(289020),
    A = n(890856),
    I = n(646270),
    x = n(615675),
    y = n(666654),
    T = n(990836),
    g = n(83107),
    j = n(546861),
    N = n(866665),
    f = n(408278),
    E = n(609731),
    S = n(788120),
    b = n(943812),
    C = n(834730),
    v = n(717421),
    O = n(365199),
    R = n(358618),
    V = n(983851),
    M = n(428678),
    D = n(952270),
    P = n(254138),
    k = n(827343),
    L = n(820284),
    U = n(765671),
    _ = n(672979),
    G = n(793574),
    w = n(429913),
    z = n(520698),
    Y = n(164617),
    W = n(66004),
    H = n(958005),
    X = n(384059),
    B = n(556525),
    J = n(609425),
    Q = n(73392),
    F = n(259264),
    K = n(40056),
    Z = n(117029),
    q = n(612258),
    $ = n(551826),
    ee = n(293432),
    el = n(574172),
    en = n(986491),
    es = n(665691),
    ei = n(635885),
    et = n(421768),
    ea = n(209932),
    eo = n(58303),
    ec = n(253932),
    ed = n(461782),
    er = n(614518),
    eu = n(706787),
    ep = n(46653),
    eh = n(111162),
    em = n(754712),
    eA = n(290863),
    eI = n(485296),
    ex = n(977997),
    ey = n(712687),
    eT = n(790381),
    eg = n(266080),
    ej = n(723702),
    eN = n(253400),
    ef = n(141035),
    eE = n(541157),
    eS = n(654820),
    eb = n(804980),
    eC = n(272812),
    ev = n(304047),
    eO = n(555148),
    eR = n(83982),
    eV = n(345812),
    eM = n(110234),
    eD = n(652215),
    eP = n(806931),
    ek = n(31408),
    eL = n(778712),
    eU = n(731854),
    e_ = n(792996),
    eG = n(584841);
let ew = [eP.lp.ACTIVITY],
    ez = i.memo((e) => {
        var l, n, t;
        let o,
            c,
            d,
            u,
            {
                participant: I,
                popoutType: x,
                onDoubleClick: y,
                onContextMenu: T,
                onClick: g,
                onMouseDown: j,
                onKeyDown: N,
                className: f,
                style: E,
                containerStyle: S,
                channel: b,
                width: C,
                onVideoResize: v,
                inCall: O = !1,
                selected: R = !1,
                noBorder: V = !1,
                noVideoRender: M = !1,
                focused: D = !1,
                blocked: P = !1,
                ignored: _ = !1,
                fit: G = F.$.CONTAIN,
                paused: Y = !1,
                pulseSpeakingIndicator: H = !1,
                forceIdle: X = !1,
                controlsBottom: J,
            } = e,
            Q = i.useContext(ed.vG) || X,
            [Z, ee] = i.useState(!1),
            el = ec.Q_.useSetting(),
            en = (0, r.bG)([eh.default], () => eh.default.isStreamInfoOverlayEnabled),
            [ei, eA] = i.useState(!1),
            ey = (0, r.bG)([ep.default], () => ep.default.getId()),
            eT = I.type === eP.lp.ACTIVITY ? null : I.user,
            eg = eT?.id ?? null,
            [ej] = (0, w.A)(I.type === eP.lp.ACTIVITY ? [I.applicationId] : []),
            eN = (0, r.bG)([ea.A], () => null != eg && ea.A.isLocalSoundboardMuted(eg)),
            ev = (0, et.g)(eN ? "CallTile" : "Invalid - CallTile"),
            eV = (0, r.bG)([em.Ay], () => null != eg && em.Ay.isLocalVideoDisabled(eg, (0, z.A)(I.type)), [eg, I.type]),
            ez = (0, r.bG)(
                [em.Ay],
                () => (null != eg ? em.Ay.getVideoToggleState(eg, (0, z.A)(I.type)) : eD.bb8.NONE),
                [eg, I.type],
            ),
            eY = ez === eD.bb8.AUTO_PROBING,
            { speaking: eW, ringing: eH, hasVideo: eB } = (0, eM.A)(I, ey),
            eJ = (0, r.bG)([ea.A], () => null !== eg && ea.A.isUserPlayingSounds(eg), [eg]),
            eQ =
                ((l = ey),
                (n = I),
                (t = b.getGuildId()),
                (o = n.type !== eP.lp.ACTIVITY ? n.user.id : n.applicationId),
                (c = (0, r.cf)([ex.A], () => {
                    let e = ex.A.getVoiceState(t, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, r.cf)(
                    [em.Ay],
                    () => {
                        let e = (0, z.A)(n.type);
                        return l === o
                            ? { muted: !1, deafened: !1 }
                            : {
                                  muted: em.Ay.isLocalMute(o, e),
                                  localVideoDisabled: em.Ay.isLocalVideoDisabled(o, e),
                                  localVideoAutoDisabled: em.Ay.isLocalVideoAutoDisabled(o, e),
                              };
                    },
                    [l, n.type, o],
                )),
                (u = (0, eE.Nd)(n.type === eP.lp.USER ? n.voiceState : null, (0, eE.oN)())),
                {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: u?.isVoiceMuted() ?? !1,
                    deafened: u?.isVoiceDeafened() ?? !1,
                }),
            eF = I.type === eP.lp.STREAM && eg === ey,
            eK = (0, r.bG)([er.A], () => (I.type === eP.lp.USER && null != eg ? er.A.getEffectForUserId(eg) : null)),
            eZ = (0, r.bG)([ex.A], () => ex.A.getVoicePlatformForChannel(b.id, eg ?? "")),
            eq = (0, es.UF)({ userId: eg, channelId: b.id }),
            e$ = (0, es.DY)({ streamKey: I.type === eP.lp.STREAM ? I.id : null, channelId: b.id }),
            e0 = i.useMemo(
                () => (I.type === eP.lp.STREAM ? (e$ ?? !1) : I.type === eP.lp.USER && (eq ?? !1)),
                [e$, eq, I.type],
            );
        i.useEffect(() => {
            ee(D);
        }, [D]);
        let e1 = i.useCallback(() => {
                null != eg && k.default.toggleLocalMute(eg, eU.x.STREAM);
            }, [eg]),
            e2 = i.useCallback(
                (e) => {
                    g?.(I, e);
                },
                [g, I],
            ),
            e6 = i.useCallback(
                (e) => {
                    y?.(I, e);
                },
                [y, I],
            ),
            e8 = i.useCallback(
                (e, l, n) => {
                    T?.(I, e, l, n);
                },
                [T, I],
            ),
            e7 = null,
            e5 = null,
            e4 = "";
        switch (I.type) {
            case eP.lp.STREAM:
                ((e7 = (0, s.jsx)(eO.A, {
                    participant: I,
                    selected: R,
                    popoutType: x,
                    width: C,
                    fit: G,
                    onVideoResize: v,
                    paused: Y,
                })),
                    (e5 = (0, s.jsx)(eO.D, {
                        participant: I,
                        selected: R,
                        width: C,
                        focused: D,
                        idle: Q,
                        premiumIndicator: !1,
                    })),
                    (e4 = e_.intl.formatToPlainString(e_.t.gHPz3Q, { streamerName: I.user.username })));
                break;
            case eP.lp.USER:
                ((e7 = (0, s.jsx)(eR.A, {
                    channel: b,
                    inCall: O,
                    participant: I,
                    popoutType: x,
                    fit: G,
                    onVideoResize: v,
                    paused: Y,
                    selected: R,
                    width: C,
                    blocked: P,
                    ignored: _,
                    noVideoRender: M || eY,
                    pulseSpeakingIndicator: H,
                })),
                    (e5 = (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(eR.s, { participant: I, channelId: b.id }),
                            b.isGuildStageVoice() && !M ? (0, s.jsx)(eo.A, { channel: b, userId: I.user.id }) : null,
                        ],
                    })),
                    (e4 = e_.intl.formatToPlainString(e_.t["iC/x/Q"], { username: I.user.username })));
                break;
            case eP.lp.ACTIVITY:
                ((e7 = (0, s.jsx)(eb.Ay, { interactible: D, participant: I, selected: R, channel: b, width: C })),
                    (e4 = e_.intl.formatToPlainString(e_.t.YCvOsO, { activityName: ej?.name })));
                break;
            case eP.lp.HIDDEN_STREAM:
                e7 = (0, s.jsx)(eO.A, {
                    participant: I,
                    selected: R,
                    width: C,
                    fit: G,
                    onVideoResize: v,
                    paused: Y,
                    popoutType: x,
                });
        }
        let { ref: e9, width: e3, height: le } = (0, U.Ay)(),
            ll = (0, r.bG)([eI.A], () => (I.type === eP.lp.USER ? eI.A.getVoiceVolume(I.id) : -1 / 0)),
            ln = (0, B.v)({
                voiceStatus: eJ ? eL.T2.PLAYING_SOUNDBOARD : eW ? eL.T2.SPEAKING : null,
                voiceDb: ll,
                spreadDirection: B.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            ls = (0, eP.Ay)(I) ? p.ScreenIcon : eB ? h.VideoIcon : m.PhoneIcon,
            li = I.type === eP.lp.STREAM && D;
        return (0, s.jsx)(L.A, {
            section: eD.JJy.VOICE_CHANNEL_TILE,
            children: (0, s.jsx)(K.Ay, {
                streamKey: I.id,
                enableZoom: li,
                children: (0, s.jsx)("div", {
                    className: a()(eG.iE, { [eG.DF]: eH }, f),
                    style: S,
                    onMouseEnter: function () {
                        eA(!0);
                    },
                    onMouseLeave: function () {
                        eA(!1);
                    },
                    children: (0, s.jsxs)($.A, {
                        shakeLocation: ek.uD.VOICE_USER,
                        isShaking: eW,
                        className: eG.Vs,
                        children: [
                            (0, s.jsx)(eC.A, {
                                ref: e9,
                                className: a()(eG.Vs, { [eG.E7]: V, [eG.k_]: null == g, [eG.N7]: Q }),
                                noBorder: V,
                                style: E,
                                participantUserId: eg,
                                children: (0, s.jsxs)(A.s, {
                                    "aria-label": e4,
                                    className: eG.lG,
                                    onDoubleClick: e6,
                                    onContextMenu: (e) => e8(e, I.type === eP.lp.STREAM),
                                    onClick: e2,
                                    onMouseDown: j,
                                    onKeyDown: N,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eK && null != eg
                                            ? (0, s.jsx)(eu.A, {
                                                  voiceChannelEffect: eK,
                                                  onComplete: () => (0, er.a)(eg),
                                                  userId: eg,
                                              })
                                            : null,
                                        I.type === eP.lp.USER
                                            ? (0, s.jsx)("div", {
                                                  className: eG.nl,
                                                  children: (0, s.jsx)(W.A, {
                                                      userId: eg,
                                                      channelId: b.id,
                                                      guildId: b.getGuildId(),
                                                      containerDimensions: { width: e3 ?? 0, height: le ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e7,
                                        V ? null : (0, s.jsx)("div", { className: eG.hD, children: e5 }),
                                        R
                                            ? (0, s.jsx)("div", {
                                                  className: eG._Q,
                                                  children: (0, s.jsx)(ls, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eG.Dt,
                                                  }),
                                              })
                                            : null,
                                        ew.includes(I.type)
                                            ? null
                                            : (0, s.jsx)(eX, {
                                                  focused: D,
                                                  width: C,
                                                  inCall: O,
                                                  participantId: I.id,
                                                  participantType: I.type,
                                                  hasVideo: eB ?? !1,
                                                  ...eQ,
                                                  idle: Q,
                                                  platform: eZ,
                                                  title: (0, ef.A)(b, I),
                                                  blocked: P,
                                                  ignored: _,
                                                  localVideoDisabled: eV,
                                                  videoToggleState: ez,
                                                  hideAudioIcon: eF,
                                                  onContextMenu: e8,
                                                  onToggleMute: e1,
                                                  participantUserId: eg,
                                                  channel: b,
                                                  secureFramesVerified: e0,
                                                  isHovered: ei,
                                                  popoutType: x,
                                                  paused: Y,
                                                  controlsBottom: J,
                                                  streamId: I.type === eP.lp.STREAM ? I.streamId : null,
                                                  soundboardMuted: ev && eN,
                                              }),
                                        O && !V
                                            ? (0, s.jsx)("div", {
                                                  className: a()(eG.PQ, { [eG.pU]: !D && (eJ || null != eK) }),
                                                  style: D || eJ ? void 0 : ln,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            el && en && ei && (0, s.jsx)(eS.A, { currentUserId: ey, participant: I }),
                            (0, s.jsx)(q.A, { isFiring: Z, callTileRef: e9 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eY(e) {
    let { participantType: l, platform: n, className: i } = e;
    if (l === eP.lp.STREAM)
        return n === eP.J7.XBOX
            ? (0, s.jsx)(eg.A, { className: i })
            : (0, s.jsx)(p.ScreenIcon, { size: "md", color: "currentColor", className: i });
    switch (n) {
        case eP.J7.MOBILE:
            return (0, s.jsx)(I.MobilePhoneIcon, { size: "xs", color: "currentColor", className: i });
        case eP.J7.XBOX:
            return (0, s.jsx)(eg.A, { className: i });
        case eP.J7.PLAYSTATION:
            return (0, s.jsx)(eT.A, { className: i });
        case eP.J7.QUEST:
            return (0, s.jsx)(c.VrHeadsetIcon, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eW(e) {
    let { icon: l, tooltipText: n, hideWhenInactive: i, idle: t, onClick: o } = e;
    return (0, s.jsx)(N.m, {
        text: n,
        children: (0, s.jsx)("div", {
            className: a()(eG.V7, { [eG.kl]: i, [eG.N7]: t }),
            children: (0, s.jsx)(f.K, {
                size: "sm",
                variant: "overlay-secondary",
                onClick: (e) => {
                    (e.stopPropagation(), o(e));
                },
                "aria-label": n,
                icon: l,
            }),
        }),
    });
}
function eH(e) {
    let { channelId: l, participantId: n, hideWhenInactive: t, idle: a } = e,
        o = i.useMemo(() => (0, H.A)(l, n), [l, n]),
        c = (0, r.bG)([ee.A], () => ee.A.getIsAlwaysOnTop(o)),
        d = i.useCallback(() => {
            ((0, X.XJ)(G.A.CALL_TILE_POPOUT, X.OP.STAY_ON_TOP, !c), el.uR(o, !c));
        }, [o, c]);
    return ej.isPlatformEmbedded && eN.Ay.supportsFeature(eD.BYE.POPOUT_WINDOWS)
        ? (0, s.jsx)(eW, {
              onClick: d,
              tooltipText: c ? e_.intl.string(e_.t.YdyDM9) : e_.intl.string(e_.t.ZVGHwP),
              icon: c ? E.PinUprightSlashIcon : S.PinUprightIcon,
              hideWhenInactive: t,
              idle: a,
          })
        : null;
}
ez.displayName = "CallTile";
let eX = i.memo((e) => {
    let {
            idle: l,
            title: n,
            width: t,
            focused: c,
            videoToggleState: p,
            blocked: h,
            ignored: m,
            participantId: A,
            participantType: I,
            participantUserId: f,
            channel: E,
            platform: S,
            secureFramesVerified: k,
            onContextMenu: L,
            muted: U,
            deafened: w,
            localMuted: W,
            serverMuted: B,
            serverDeafened: F,
            hasVideo: K,
            hideAudioIcon: q,
            onToggleMute: $,
            popoutType: ee,
            paused: es,
            controlsBottom: et,
            streamId: ea,
            inCall: eo,
            soundboardMuted: ec,
        } = e,
        ed = (0, r.bG)([ep.default], () => ep.default.getId()),
        er = (0, r.bG)([eA.A], () =>
            I === eP.lp.USER && null != f ? eA.A.getActivities(f).find(_.A)?.application_id : null,
        ),
        eu = eo && I === eP.lp.STREAM && null != f && null != ed && f !== ed,
        eh = (0, ei.V)(f),
        eI = (0, r.bG)([em.Ay], () => null != f && em.Ay.isLocalVideoAutoDisabled(f, (0, z.A)(I)), [f, I]),
        ex = (0, J.A)({ userId: f, guildId: E.getGuildId() }),
        eT = (0, Q.a)({ displayNameStyles: ex }),
        eg = (0, eV.Yb)(t),
        ej = (0, eV.VE)(t),
        eN = (0, eV.DO)(t),
        [ef, eE] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== ey.A.isOpen() && ((e = ey.A.isOpen()) || eE(!1));
        }
        return (ey.A.addChangeListener(l), () => ey.A.removeChangeListener(l));
    }, []);
    let eS = !q && I === eP.lp.STREAM && K && (!ej || W),
        eb = (function (e) {
            let { localMuted: l, serverMuted: n, serverDeafened: s, deafened: i, muted: t, soundboardMuted: a } = e;
            return s
                ? x.HeadphonesDenyIcon
                : n
                  ? y.MicrophoneDenyIcon
                  : i
                    ? T.HeadphonesSlashIcon
                    : l
                      ? y.MicrophoneDenyIcon
                      : t
                        ? g.MicrophoneSlashIcon
                        : a
                          ? j.SoundboardDenyIcon
                          : null;
        })({ localMuted: W, serverMuted: B, serverDeafened: F, deafened: w, muted: U, soundboardMuted: ec }),
        eC = (0, v.z)({ value: null != et ? et : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eO = [];
    (c && I === eP.lp.STREAM && eO.push((0, s.jsx)(Z.A, { streamId: ea, paused: es }, "zoom-controls")),
        c
            ? ee === Y.N.CALL_TILE &&
              (eO.push(
                  (0, s.jsx)(eH, { channelId: E.id, participantId: A, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eO.push(
                  (0, s.jsx)(
                      eW,
                      {
                          onClick: () => {
                              ((0, X.XJ)(G.A.CALL_TILE_POPOUT, X.OP.POPOUT_RETURN), el.close((0, H.A)(E.id, A)));
                          },
                          tooltipText: e_.intl.string(e_.t["7Dwcnj"]),
                          icon: d.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (eN ||
                  I !== eP.lp.USER ||
                  null == f ||
                  f === ed ||
                  null == eh ||
                  eO.push(
                      (0, s.jsx)(
                          ev.M,
                          { userId: f, channel: E, applicationId: eh, hideWhenInactive: !ef, idle: l },
                          "gift",
                      ),
                  ),
              eO.push(
                  (0, s.jsx)(
                      eW,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eE(!0), L(e, !0, eP.GK.THREE_DOT));
                          },
                          tooltipText: e_.intl.string(e_.t["+1H47t"]),
                          icon: O.MoreHorizontalIcon,
                          hideWhenInactive: !ef,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              eS &&
                  eO.push(
                      (0, s.jsx)(
                          eW,
                          {
                              onClick: $,
                              tooltipText: W ? e_.intl.string(e_.t.YqAjXy) : e_.intl.string(e_.t.w4m945),
                              icon: W ? R.VoiceXIcon : V.VoiceNormalIcon,
                              hideWhenInactive: !W && !ef,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let eR = [];
    (null != eb &&
        I === eP.lp.USER &&
        eR.push((0, s.jsx)(eb, { className: eG.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        h &&
            eR.push(
                (0, s.jsx)(
                    "div",
                    {
                        className: eG.Z5,
                        children: (0, s.jsx)(M.DenyIcon, {
                            size: "lg",
                            className: eG.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        m &&
            eR.push(
                (0, s.jsx)(
                    "div",
                    { className: eG.PP, children: (0, s.jsx)(D.EyeSlashIcon, { size: "lg", className: eG.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eR.push((0, s.jsx)(eY, { participantType: I, platform: S, className: eG.gr }, "title-icon")),
        null == n ||
            "" === n ||
            l ||
            eR.push((0, s.jsx)("span", { className: a()(eG.Wk, eT), children: n }, "title-text")),
        k &&
            eR.push(
                (0, s.jsx)(
                    N.m,
                    {
                        text: e_.intl.string(e_.t.ZEem6O),
                        children: (0, s.jsx)(P.ShieldLockIcon, {
                            className: eG.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": e_.intl.string(e_.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let eM = eh ?? er,
        ek =
            (c && ee !== Y.N.CALL_TILE) || l || eN || I !== eP.lp.USER || null == f || null == eM
                ? null
                : (0, s.jsx)(ev.X, { applicationId: eM, hideApplicationName: ej });
    return (0, s.jsxs)("div", {
        className: a()(eG.MU, { [eG.oE]: ej, [eG.Ol]: c }),
        children: [
            (0, s.jsx)("div", {
                className: a()(eG.Ik, { [eG.EX]: t < 195 }),
                children:
                    eI || p === eD.bb8.AUTO_PROBING
                        ? l
                            ? (0, s.jsx)("div", {
                                  className: eG.h5,
                                  children: (0, s.jsx)(b.VideoSlashIcon, { size: "md", color: "currentColor" }),
                              })
                            : (0, s.jsxs)("div", {
                                  className: a()(eG.ns, eG.WP),
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eG.h5,
                                          children: (0, s.jsx)(b.VideoSlashIcon, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, s.jsx)(C.E, {
                                          variant: "body-sm/normal",
                                          className: eG.Wk,
                                          children: e_.intl.string(e_.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eg &&
                (0, s.jsxs)("div", {
                    className: a()(eG.Qp, { [eG.EX]: t < 195 }),
                    children: [
                        (0, s.jsxs)("div", {
                            className: eG.qV,
                            children: [
                                eR.length > 0 &&
                                    (0, s.jsx)(C.E, {
                                        className: eG.ac,
                                        color: "none",
                                        variant: ej ? "body-sm/normal" : "body-md/normal",
                                        children: eR,
                                    }),
                                eu && null != f && !ej
                                    ? (0, s.jsx)(en.A, { streamerId: f, guildId: E.getGuildId(), idle: l })
                                    : null,
                                ek,
                            ],
                        }),
                        eO.length > 0
                            ? (0, s.jsx)(o.animated.div, {
                                  className: a()(eG._v, { [eG.N7]: l }),
                                  style: { marginBottom: eC.value },
                                  children: eO,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eX.displayName = "CallTileOverlay";
let eB = F.$;
n.d(l, {}, { Ay: ez, Yl: eB });
