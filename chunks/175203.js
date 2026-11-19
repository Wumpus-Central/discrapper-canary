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
    f = n(866665),
    N = n(821609),
    E = n(408278),
    S = n(609731),
    b = n(788120),
    v = n(687966),
    C = n(943812),
    R = n(834730),
    M = n(717421),
    O = n(365199),
    V = n(358618),
    D = n(983851),
    k = n(428678),
    P = n(952270),
    L = n(254138),
    U = n(827343),
    G = n(820284),
    _ = n(765671),
    w = n(672979),
    z = n(793574),
    Y = n(429913),
    W = n(520698),
    H = n(164617),
    X = n(66004),
    B = n(958005),
    J = n(384059),
    Q = n(556525),
    F = n(609425),
    K = n(73392),
    Z = n(259264),
    $ = n(40056),
    q = n(117029),
    ee = n(16833),
    el = n(881780),
    en = n(208603),
    es = n(612258),
    ei = n(551826),
    et = n(293432),
    ea = n(574172),
    eo = n(986491),
    ec = n(665691),
    ed = n(635885),
    er = n(209932),
    eu = n(58303),
    ep = n(123630),
    eh = n(698547),
    em = n(253932),
    eA = n(461782),
    eI = n(614518),
    ex = n(706787),
    ey = n(46653),
    eT = n(111162),
    eg = n(988468),
    ej = n(290863),
    ef = n(485296),
    eN = n(977997),
    eE = n(712687),
    eS = n(790381),
    eb = n(266080),
    ev = n(723702),
    eC = n(253400),
    eR = n(141035),
    eM = n(541157),
    eO = n(654820),
    eV = n(804980),
    eD = n(272812),
    ek = n(304047),
    eP = n(440545),
    eL = n(83982),
    eU = n(345812),
    eG = n(110234),
    e_ = n(652215),
    ew = n(806931),
    ez = n(31408),
    eY = n(778712),
    eW = n(731854),
    eH = n(792996),
    eX = n(584841);
let eB = [ew.lp.ACTIVITY],
    eJ = i.memo((e) => {
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
                onKeyDown: f,
                className: N,
                style: E,
                containerStyle: S,
                channel: b,
                width: v,
                onVideoResize: C,
                inCall: R = !1,
                selected: M = !1,
                noBorder: O = !1,
                noVideoRender: V = !1,
                focused: D = !1,
                blocked: k = !1,
                ignored: P = !1,
                fit: L = Z.$.CONTAIN,
                paused: w = !1,
                pulseSpeakingIndicator: z = !1,
                forceIdle: H = !1,
                controlsBottom: B,
            } = e,
            J = i.useContext(eA.vG) || H,
            [F, K] = i.useState(!1),
            q = em.Q_.useSetting(),
            ee = (0, r.bG)([eT.default], () => eT.default.isStreamInfoOverlayEnabled),
            [el, en] = i.useState(!1),
            et = (0, r.bG)([ey.default], () => ey.default.getId()),
            ea = I.type === ew.lp.ACTIVITY ? null : I.user,
            eo = ea?.id ?? null,
            [ed] = (0, Y.A)(I.type === ew.lp.ACTIVITY ? [I.applicationId] : []),
            ep = (0, r.bG)([er.A], () => null != eo && er.A.isLocalSoundboardMuted(eo)),
            ej = (0, r.bG)([eg.Ay], () => null != eo && eg.Ay.isLocalVideoDisabled(eo, (0, W.A)(I.type)), [eo, I.type]),
            eE = (0, r.bG)(
                [eg.Ay],
                () => (null != eo ? eg.Ay.getVideoToggleState(eo, (0, W.A)(I.type)) : e_.bb8.NONE),
                [eo, I.type],
            ),
            eS = eE === e_.bb8.AUTO_PROBING,
            { speaking: eb, ringing: ev, hasVideo: eC } = (0, eG.A)(I, et),
            ek = (0, r.bG)([er.A], () => null !== eo && er.A.isUserPlayingSounds(eo), [eo]),
            eU =
                ((l = et),
                (n = I),
                (t = b.getGuildId()),
                (o = n.type !== ew.lp.ACTIVITY ? n.user.id : n.applicationId),
                (c = (0, r.cf)([eN.A], () => {
                    let e = eN.A.getVoiceState(t, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, r.cf)(
                    [eg.Ay],
                    () => {
                        let e = (0, W.A)(n.type);
                        return l === o
                            ? { muted: !1, deafened: !1 }
                            : {
                                  muted: eg.Ay.isLocalMute(o, e),
                                  localVideoDisabled: eg.Ay.isLocalVideoDisabled(o, e),
                                  localVideoAutoDisabled: eg.Ay.isLocalVideoAutoDisabled(o, e),
                              };
                    },
                    [l, n.type, o],
                )),
                (u = (0, eM.Nd)(n.type === ew.lp.USER ? n.voiceState : null, (0, eM.oN)())),
                {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: u?.isVoiceMuted() ?? !1,
                    deafened: u?.isVoiceDeafened() ?? !1,
                }),
            eJ = I.type === ew.lp.STREAM && eo === et,
            eQ = (0, r.bG)([eI.A], () => (I.type === ew.lp.USER && null != eo ? eI.A.getEffectForUserId(eo) : null)),
            eF = (0, r.bG)([eN.A], () => eN.A.getVoicePlatformForChannel(b.id, eo ?? "")),
            eK = (0, ec.UF)({ userId: eo, channelId: b.id }),
            eZ = (0, ec.DY)({ streamKey: I.type === ew.lp.STREAM ? I.id : null, channelId: b.id }),
            eq = i.useMemo(
                () => (I.type === ew.lp.STREAM ? (eZ ?? !1) : I.type === ew.lp.USER && (eK ?? !1)),
                [eZ, eK, I.type],
            );
        i.useEffect(() => {
            K(D);
        }, [D]);
        let e0 = i.useCallback(() => {
                null != eo && U.default.toggleLocalMute(eo, eW.x.STREAM);
            }, [eo]),
            e1 = i.useCallback(
                (e) => {
                    g?.(I, e);
                },
                [g, I],
            ),
            e8 = i.useCallback(
                (e) => {
                    y?.(I, e);
                },
                [y, I],
            ),
            e6 = (0, eh.A)(I.type === ew.lp.STREAM ? I.id : null, { onClick: e1, onDoubleClick: e8, onMouseDown: j }),
            e2 = i.useCallback(
                (e, l, n) => {
                    T?.(I, e, l, n);
                },
                [T, I],
            ),
            e7 = null,
            e5 = null,
            e4 = "";
        switch (I.type) {
            case ew.lp.STREAM:
                ((e7 = (0, s.jsx)(eP.A, {
                    participant: I,
                    selected: M,
                    popoutType: x,
                    width: v,
                    fit: L,
                    onVideoResize: C,
                    paused: w,
                })),
                    (e5 = (0, s.jsx)(eP.D, {
                        participant: I,
                        selected: M,
                        width: v,
                        focused: D,
                        idle: J,
                        premiumIndicator: !1,
                    })),
                    (e4 = eH.intl.formatToPlainString(eH.t.gHPz3Q, { streamerName: I.user.username })));
                break;
            case ew.lp.USER:
                ((e7 = (0, s.jsx)(eL.A, {
                    channel: b,
                    inCall: R,
                    participant: I,
                    popoutType: x,
                    fit: L,
                    onVideoResize: C,
                    paused: w,
                    selected: M,
                    width: v,
                    blocked: k,
                    ignored: P,
                    noVideoRender: V || eS,
                    pulseSpeakingIndicator: z,
                })),
                    (e5 = (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(eL.s, { participant: I, channelId: b.id }),
                            b.isGuildStageVoice() && !V ? (0, s.jsx)(eu.A, { channel: b, userId: I.user.id }) : null,
                        ],
                    })),
                    (e4 = eH.intl.formatToPlainString(eH.t["iC/x/Q"], { username: I.user.username })));
                break;
            case ew.lp.ACTIVITY:
                ((e7 = (0, s.jsx)(eV.Ay, { interactible: D, participant: I, selected: M, channel: b, width: v })),
                    (e4 = eH.intl.formatToPlainString(eH.t.YCvOsO, { activityName: ed?.name })));
                break;
            case ew.lp.HIDDEN_STREAM:
                e7 = (0, s.jsx)(eP.A, {
                    participant: I,
                    selected: M,
                    width: v,
                    fit: L,
                    onVideoResize: C,
                    paused: w,
                    popoutType: x,
                });
        }
        let { ref: e9, width: e3, height: le } = (0, _.Ay)(),
            ll = (0, r.bG)([ef.A], () => (I.type === ew.lp.USER ? ef.A.getVoiceVolume(I.id) : -1 / 0)),
            ln = (0, Q.v)({
                voiceStatus: ek ? eY.T2.PLAYING_SOUNDBOARD : eb ? eY.T2.SPEAKING : null,
                voiceDb: ll,
                spreadDirection: Q.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            ls = (0, ew.Ay)(I) ? p.ScreenIcon : eC ? h.VideoIcon : m.PhoneIcon,
            li = I.type === ew.lp.STREAM && D;
        return (0, s.jsx)(G.A, {
            section: e_.JJy.VOICE_CHANNEL_TILE,
            children: (0, s.jsx)($.Ay, {
                streamKey: I.id,
                enableZoom: li,
                children: (0, s.jsx)("div", {
                    className: a()(eX.iE, { [eX.DF]: ev }, N),
                    style: S,
                    onMouseEnter: function () {
                        en(!0);
                    },
                    onMouseLeave: function () {
                        en(!1);
                    },
                    children: (0, s.jsxs)(ei.A, {
                        shakeLocation: ez.uD.VOICE_USER,
                        isShaking: eb,
                        className: eX.Vs,
                        children: [
                            (0, s.jsx)(eD.A, {
                                ref: e9,
                                className: a()(eX.Vs, { [eX.E7]: O, [eX.k_]: null == g, [eX.N7]: J }),
                                noBorder: O,
                                style: E,
                                participantUserId: eo,
                                children: (0, s.jsxs)(A.s, {
                                    "aria-label": e4,
                                    className: eX.lG,
                                    onDoubleClick: e6.onDoubleClick,
                                    onContextMenu: (e) => e2(e, I.type === ew.lp.STREAM),
                                    onClick: e6.onClick,
                                    onMouseDown: e6.onMouseDown,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eQ && null != eo
                                            ? (0, s.jsx)(ex.A, {
                                                  voiceChannelEffect: eQ,
                                                  onComplete: () => (0, eI.a)(eo),
                                                  userId: eo,
                                              })
                                            : null,
                                        I.type === ew.lp.USER
                                            ? (0, s.jsx)("div", {
                                                  className: eX.nl,
                                                  children: (0, s.jsx)(X.A, {
                                                      userId: eo,
                                                      channelId: b.id,
                                                      guildId: b.getGuildId(),
                                                      containerDimensions: { width: e3 ?? 0, height: le ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e7,
                                        O ? null : (0, s.jsx)("div", { className: eX.hD, children: e5 }),
                                        M
                                            ? (0, s.jsx)("div", {
                                                  className: eX._Q,
                                                  children: (0, s.jsx)(ls, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eX.Dt,
                                                  }),
                                              })
                                            : null,
                                        eB.includes(I.type)
                                            ? null
                                            : (0, s.jsx)(e$, {
                                                  focused: D,
                                                  width: v,
                                                  inCall: R,
                                                  participantId: I.id,
                                                  participantType: I.type,
                                                  hasVideo: eC ?? !1,
                                                  ...eU,
                                                  idle: J,
                                                  platform: eF,
                                                  title: (0, eR.A)(b, I),
                                                  blocked: k,
                                                  ignored: P,
                                                  localVideoDisabled: ej,
                                                  videoToggleState: eE,
                                                  hideAudioIcon: eJ,
                                                  onContextMenu: e2,
                                                  onToggleMute: e0,
                                                  participantUserId: eo,
                                                  channel: b,
                                                  secureFramesVerified: eq,
                                                  isHovered: el,
                                                  popoutType: x,
                                                  paused: w,
                                                  controlsBottom: B,
                                                  streamId: I.type === ew.lp.STREAM ? I.streamId : null,
                                                  soundboardMuted: ep,
                                                  stream: I.type === ew.lp.STREAM ? I.stream : null,
                                              }),
                                        R && !O
                                            ? (0, s.jsx)("div", {
                                                  className: a()(eX.PQ, { [eX.pU]: !D && (ek || null != eQ) }),
                                                  style: D || ek ? void 0 : ln,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            q && ee && el && (0, s.jsx)(eO.A, { currentUserId: et, participant: I }),
                            (0, s.jsx)(es.A, { isFiring: F, callTileRef: e9 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eQ(e) {
    let { participantType: l, platform: n, className: i } = e;
    if (l === ew.lp.STREAM)
        return n === ew.J7.XBOX
            ? (0, s.jsx)(eb.A, { className: i })
            : (0, s.jsx)(p.ScreenIcon, { size: "md", color: "currentColor", className: i });
    switch (n) {
        case ew.J7.MOBILE:
            return (0, s.jsx)(I.MobilePhoneIcon, { size: "xs", color: "currentColor", className: i });
        case ew.J7.XBOX:
            return (0, s.jsx)(eb.A, { className: i });
        case ew.J7.PLAYSTATION:
            return (0, s.jsx)(eS.A, { className: i });
        case ew.J7.QUEST:
            return (0, s.jsx)(c.VrHeadsetIcon, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eF(e) {
    let { icon: l, tooltipText: n, hideWhenInactive: i, idle: t, onClick: o, highlighted: c = !1, text: d = null } = e;
    function r(e) {
        (e.stopPropagation(), o(e));
    }
    return (0, s.jsx)(f.m, {
        text: n,
        children: (0, s.jsx)("div", {
            className: a()(eX.V7, { [eX.kl]: i, [eX.N7]: t, [eX.Ym]: c }),
            children:
                null != d
                    ? (0, s.jsx)(N.$, { size: "sm", variant: "overlay-secondary", onClick: r, icon: l, text: d })
                    : (0, s.jsx)(E.K, {
                          size: "sm",
                          variant: "overlay-secondary",
                          onClick: r,
                          "aria-label": n,
                          icon: l,
                      }),
        }),
    });
}
function eK(e) {
    let { channelId: l, participantId: n, hideWhenInactive: t, idle: a } = e,
        o = i.useMemo(() => (0, B.A)(l, n), [l, n]),
        c = (0, r.bG)([et.A], () => et.A.getIsAlwaysOnTop(o)),
        d = i.useCallback(() => {
            ((0, J.XJ)(z.A.CALL_TILE_POPOUT, J.OP.STAY_ON_TOP, !c), ea.uR(o, !c));
        }, [o, c]);
    return ev.isPlatformEmbedded && eC.Ay.supportsFeature(e_.BYE.POPOUT_WINDOWS)
        ? (0, s.jsx)(eF, {
              onClick: d,
              tooltipText: c ? eH.intl.string(eH.t.YdyDM9) : eH.intl.string(eH.t.ZVGHwP),
              icon: c ? S.PinUprightSlashIcon : b.PinUprightIcon,
              hideWhenInactive: t,
              idle: a,
          })
        : null;
}
function eZ(e) {
    let { stream: l, hideWhenInactive: n, idle: i } = e,
        t = (0, r.bG)([ey.default], () => ey.default.getId()),
        a = (0, en.A)(l.ownerId === t ? l : null),
        o = (0, ee.A)(l),
        c = (0, el.A)(l),
        d = a ?? o;
    if (null == d) return null;
    let u = null == a && o?.isActive === !0;
    return (0, s.jsx)(eF, {
        onClick: d.toggle,
        tooltipText: d.label,
        icon: v.GameControllerIcon,
        hideWhenInactive: n && !d.isActive,
        highlighted: a?.isActive === !0 || u,
        idle: i,
        text: c,
    });
}
eJ.displayName = "CallTile";
let e$ = i.memo((e) => {
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
            participantUserId: N,
            channel: E,
            platform: S,
            secureFramesVerified: b,
            onContextMenu: v,
            muted: U,
            deafened: G,
            localMuted: _,
            serverMuted: Y,
            serverDeafened: X,
            hasVideo: Q,
            hideAudioIcon: Z,
            onToggleMute: $,
            popoutType: ee,
            paused: el,
            controlsBottom: en,
            streamId: es,
            inCall: ei,
            soundboardMuted: et,
            stream: ec,
        } = e,
        er = (0, r.bG)([ey.default], () => ey.default.getId()),
        eu = (0, r.bG)([ej.A], () =>
            I === ew.lp.USER && null != N ? ej.A.getActivities(N).find(w.A)?.application_id : null,
        ),
        eh = ei && I === ew.lp.STREAM && null != N && null != er && N !== er,
        em = (0, ed.V)(N),
        eA = (0, r.bG)([eg.Ay], () => null != N && eg.Ay.isLocalVideoAutoDisabled(N, (0, W.A)(I)), [N, I]),
        eI = (0, F.A)({ userId: N, guildId: E.getGuildId() }),
        ex = (0, K.a)({ displayNameStyles: eI }),
        eT = (0, eU.Yb)(t),
        ef = (0, eU.VE)(t),
        eN = (0, eU.DO)(t),
        [eS, eb] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== eE.A.isOpen() && ((e = eE.A.isOpen()) || eb(!1));
        }
        return (eE.A.addChangeListener(l), () => eE.A.removeChangeListener(l));
    }, []);
    let ev = !Z && I === ew.lp.STREAM && Q && (!ef || _),
        eC = (function (e) {
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
        })({ localMuted: _, serverMuted: Y, serverDeafened: X, deafened: G, muted: U, soundboardMuted: et }),
        eR = (0, M.z)({ value: null != en ? en : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eM = [];
    (c &&
        I === ew.lp.STREAM &&
        (eM.push((0, s.jsx)(ep.A, { streamKey: A }, "stream-drawing")),
        null != ec && eM.push((0, s.jsx)(eZ, { stream: ec, hideWhenInactive: !1, idle: l }, "pass-the-controller")),
        eM.push((0, s.jsx)(q.A, { streamId: es, paused: el }, "zoom-controls"))),
        c
            ? ee === H.N.CALL_TILE &&
              (eM.push(
                  (0, s.jsx)(eK, { channelId: E.id, participantId: A, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eM.push(
                  (0, s.jsx)(
                      eF,
                      {
                          onClick: () => {
                              ((0, J.XJ)(z.A.CALL_TILE_POPOUT, J.OP.POPOUT_RETURN), ea.close((0, B.A)(E.id, A)));
                          },
                          tooltipText: eH.intl.string(eH.t["7Dwcnj"]),
                          icon: d.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (eN ||
                  I !== ew.lp.USER ||
                  null == N ||
                  N === er ||
                  null == em ||
                  eM.push(
                      (0, s.jsx)(
                          ek.M,
                          { userId: N, channel: E, applicationId: em, hideWhenInactive: !eS, idle: l },
                          "gift",
                      ),
                  ),
              I === ew.lp.STREAM &&
                  null != ec &&
                  eM.push((0, s.jsx)(eZ, { stream: ec, hideWhenInactive: !eS, idle: l }, "pass-the-controller")),
              eM.push(
                  (0, s.jsx)(
                      eF,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eb(!0), v(e, !0, ew.GK.THREE_DOT));
                          },
                          tooltipText: eH.intl.string(eH.t["+1H47t"]),
                          icon: O.MoreHorizontalIcon,
                          hideWhenInactive: !eS,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              ev &&
                  eM.push(
                      (0, s.jsx)(
                          eF,
                          {
                              onClick: $,
                              tooltipText: _ ? eH.intl.string(eH.t.YqAjXy) : eH.intl.string(eH.t.w4m945),
                              icon: _ ? V.VoiceXIcon : D.VoiceNormalIcon,
                              hideWhenInactive: !_ && !eS,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let eO = [];
    (null != eC &&
        I === ew.lp.USER &&
        eO.push((0, s.jsx)(eC, { className: eX.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        h &&
            eO.push(
                (0, s.jsx)(
                    "div",
                    {
                        className: eX.Z5,
                        children: (0, s.jsx)(k.DenyIcon, {
                            size: "lg",
                            className: eX.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        m &&
            eO.push(
                (0, s.jsx)(
                    "div",
                    { className: eX.PP, children: (0, s.jsx)(P.EyeSlashIcon, { size: "lg", className: eX.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eO.push((0, s.jsx)(eQ, { participantType: I, platform: S, className: eX.gr }, "title-icon")),
        null == n ||
            "" === n ||
            l ||
            eO.push((0, s.jsx)("span", { className: a()(eX.Wk, ex), children: n }, "title-text")),
        b &&
            eO.push(
                (0, s.jsx)(
                    f.m,
                    {
                        text: eH.intl.string(eH.t.ZEem6O),
                        children: (0, s.jsx)(L.ShieldLockIcon, {
                            className: eX.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eH.intl.string(eH.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let eV = em ?? eu,
        eD =
            (c && ee !== H.N.CALL_TILE) || l || eN || I !== ew.lp.USER || null == N || null == eV
                ? null
                : (0, s.jsx)(ek.X, { applicationId: eV, hideApplicationName: ef });
    return (0, s.jsxs)("div", {
        className: a()(eX.MU, { [eX.oE]: ef, [eX.Ol]: c }),
        children: [
            (0, s.jsx)("div", {
                className: a()(eX.Ik, { [eX.EX]: t < 195 }),
                children:
                    eA || p === e_.bb8.AUTO_PROBING
                        ? l
                            ? (0, s.jsx)("div", {
                                  className: eX.h5,
                                  children: (0, s.jsx)(C.VideoSlashIcon, { size: "md", color: "currentColor" }),
                              })
                            : (0, s.jsxs)("div", {
                                  className: a()(eX.ns, eX.WP),
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eX.h5,
                                          children: (0, s.jsx)(C.VideoSlashIcon, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, s.jsx)(R.E, {
                                          variant: "body-sm/normal",
                                          className: eX.Wk,
                                          children: eH.intl.string(eH.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eT &&
                (0, s.jsxs)("div", {
                    className: a()(eX.Qp, { [eX.EX]: t < 195 }),
                    children: [
                        (0, s.jsxs)("div", {
                            className: eX.qV,
                            children: [
                                eO.length > 0 &&
                                    (0, s.jsx)(R.E, {
                                        className: eX.ac,
                                        color: "none",
                                        variant: ef ? "body-sm/normal" : "body-md/normal",
                                        children: eO,
                                    }),
                                eh && null != N && !ef
                                    ? (0, s.jsx)(eo.A, { streamerId: N, guildId: E.getGuildId(), idle: l })
                                    : null,
                                eD,
                            ],
                        }),
                        eM.length > 0
                            ? (0, s.jsx)(o.animated.div, {
                                  className: a()(eX._v, { [eX.N7]: l }),
                                  style: { marginBottom: eR.value },
                                  children: eM,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
e$.displayName = "CallTileOverlay";
let eq = Z.$;
n.d(l, {}, { Ay: eJ, Yl: eq });
