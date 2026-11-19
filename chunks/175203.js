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
    v = n(788120),
    b = n(687966),
    C = n(943812),
    R = n(834730),
    O = n(717421),
    V = n(365199),
    M = n(358618),
    D = n(983851),
    P = n(428678),
    k = n(952270),
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
    ep = n(253932),
    eh = n(461782),
    em = n(614518),
    eA = n(706787),
    eI = n(46653),
    ex = n(111162),
    ey = n(988468),
    eT = n(290863),
    eg = n(485296),
    ej = n(977997),
    ef = n(712687),
    eN = n(790381),
    eE = n(266080),
    eS = n(723702),
    ev = n(253400),
    eb = n(141035),
    eC = n(541157),
    eR = n(654820),
    eO = n(804980),
    eV = n(272812),
    eM = n(304047),
    eD = n(555148),
    eP = n(83982),
    ek = n(345812),
    eL = n(110234),
    eU = n(652215),
    eG = n(806931),
    e_ = n(31408),
    ew = n(778712),
    ez = n(731854),
    eY = n(792996),
    eW = n(584841);
let eH = [eG.lp.ACTIVITY],
    eX = i.memo((e) => {
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
                channel: v,
                width: b,
                onVideoResize: C,
                inCall: R = !1,
                selected: O = !1,
                noBorder: V = !1,
                noVideoRender: M = !1,
                focused: D = !1,
                blocked: P = !1,
                ignored: k = !1,
                fit: L = Z.$.CONTAIN,
                paused: w = !1,
                pulseSpeakingIndicator: z = !1,
                forceIdle: H = !1,
                controlsBottom: B,
            } = e,
            J = i.useContext(eh.vG) || H,
            [F, K] = i.useState(!1),
            q = ep.Q_.useSetting(),
            ee = (0, r.bG)([ex.default], () => ex.default.isStreamInfoOverlayEnabled),
            [el, en] = i.useState(!1),
            et = (0, r.bG)([eI.default], () => eI.default.getId()),
            ea = I.type === eG.lp.ACTIVITY ? null : I.user,
            eo = ea?.id ?? null,
            [ed] = (0, Y.A)(I.type === eG.lp.ACTIVITY ? [I.applicationId] : []),
            eT = (0, r.bG)([er.A], () => null != eo && er.A.isLocalSoundboardMuted(eo)),
            ef = (0, r.bG)([ey.Ay], () => null != eo && ey.Ay.isLocalVideoDisabled(eo, (0, W.A)(I.type)), [eo, I.type]),
            eN = (0, r.bG)(
                [ey.Ay],
                () => (null != eo ? ey.Ay.getVideoToggleState(eo, (0, W.A)(I.type)) : eU.bb8.NONE),
                [eo, I.type],
            ),
            eE = eN === eU.bb8.AUTO_PROBING,
            { speaking: eS, ringing: ev, hasVideo: eM } = (0, eL.A)(I, et),
            ek = (0, r.bG)([er.A], () => null !== eo && er.A.isUserPlayingSounds(eo), [eo]),
            eX =
                ((l = et),
                (n = I),
                (t = v.getGuildId()),
                (o = n.type !== eG.lp.ACTIVITY ? n.user.id : n.applicationId),
                (c = (0, r.cf)([ej.A], () => {
                    let e = ej.A.getVoiceState(t, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, r.cf)(
                    [ey.Ay],
                    () => {
                        let e = (0, W.A)(n.type);
                        return l === o
                            ? { muted: !1, deafened: !1 }
                            : {
                                  muted: ey.Ay.isLocalMute(o, e),
                                  localVideoDisabled: ey.Ay.isLocalVideoDisabled(o, e),
                                  localVideoAutoDisabled: ey.Ay.isLocalVideoAutoDisabled(o, e),
                              };
                    },
                    [l, n.type, o],
                )),
                (u = (0, eC.Nd)(n.type === eG.lp.USER ? n.voiceState : null, (0, eC.oN)())),
                {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: u?.isVoiceMuted() ?? !1,
                    deafened: u?.isVoiceDeafened() ?? !1,
                }),
            eB = I.type === eG.lp.STREAM && eo === et,
            eJ = (0, r.bG)([em.A], () => (I.type === eG.lp.USER && null != eo ? em.A.getEffectForUserId(eo) : null)),
            eQ = (0, r.bG)([ej.A], () => ej.A.getVoicePlatformForChannel(v.id, eo ?? "")),
            eF = (0, ec.UF)({ userId: eo, channelId: v.id }),
            eZ = (0, ec.DY)({ streamKey: I.type === eG.lp.STREAM ? I.id : null, channelId: v.id }),
            e$ = i.useMemo(
                () => (I.type === eG.lp.STREAM ? (eZ ?? !1) : I.type === eG.lp.USER && (eF ?? !1)),
                [eZ, eF, I.type],
            );
        i.useEffect(() => {
            K(D);
        }, [D]);
        let eq = i.useCallback(() => {
                null != eo && U.default.toggleLocalMute(eo, ez.x.STREAM);
            }, [eo]),
            e0 = i.useCallback(
                (e) => {
                    g?.(I, e);
                },
                [g, I],
            ),
            e1 = i.useCallback(
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
            e6 = null,
            e2 = null,
            e7 = "";
        switch (I.type) {
            case eG.lp.STREAM:
                ((e6 = (0, s.jsx)(eD.A, {
                    participant: I,
                    selected: O,
                    popoutType: x,
                    width: b,
                    fit: L,
                    onVideoResize: C,
                    paused: w,
                })),
                    (e2 = (0, s.jsx)(eD.D, {
                        participant: I,
                        selected: O,
                        width: b,
                        focused: D,
                        idle: J,
                        premiumIndicator: !1,
                    })),
                    (e7 = eY.intl.formatToPlainString(eY.t.gHPz3Q, { streamerName: I.user.username })));
                break;
            case eG.lp.USER:
                ((e6 = (0, s.jsx)(eP.A, {
                    channel: v,
                    inCall: R,
                    participant: I,
                    popoutType: x,
                    fit: L,
                    onVideoResize: C,
                    paused: w,
                    selected: O,
                    width: b,
                    blocked: P,
                    ignored: k,
                    noVideoRender: M || eE,
                    pulseSpeakingIndicator: z,
                })),
                    (e2 = (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(eP.s, { participant: I, channelId: v.id }),
                            v.isGuildStageVoice() && !M ? (0, s.jsx)(eu.A, { channel: v, userId: I.user.id }) : null,
                        ],
                    })),
                    (e7 = eY.intl.formatToPlainString(eY.t["iC/x/Q"], { username: I.user.username })));
                break;
            case eG.lp.ACTIVITY:
                ((e6 = (0, s.jsx)(eO.Ay, { interactible: D, participant: I, selected: O, channel: v, width: b })),
                    (e7 = eY.intl.formatToPlainString(eY.t.YCvOsO, { activityName: ed?.name })));
                break;
            case eG.lp.HIDDEN_STREAM:
                e6 = (0, s.jsx)(eD.A, {
                    participant: I,
                    selected: O,
                    width: b,
                    fit: L,
                    onVideoResize: C,
                    paused: w,
                    popoutType: x,
                });
        }
        let { ref: e5, width: e9, height: e4 } = (0, _.Ay)(),
            e3 = (0, r.bG)([eg.A], () => (I.type === eG.lp.USER ? eg.A.getVoiceVolume(I.id) : -1 / 0)),
            le = (0, Q.v)({
                voiceStatus: ek ? ew.T2.PLAYING_SOUNDBOARD : eS ? ew.T2.SPEAKING : null,
                voiceDb: e3,
                spreadDirection: Q.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            ll = (0, eG.Ay)(I) ? p.ScreenIcon : eM ? h.VideoIcon : m.PhoneIcon,
            ln = I.type === eG.lp.STREAM && D;
        return (0, s.jsx)(G.A, {
            section: eU.JJy.VOICE_CHANNEL_TILE,
            children: (0, s.jsx)($.Ay, {
                streamKey: I.id,
                enableZoom: ln,
                children: (0, s.jsx)("div", {
                    className: a()(eW.iE, { [eW.DF]: ev }, N),
                    style: S,
                    onMouseEnter: function () {
                        en(!0);
                    },
                    onMouseLeave: function () {
                        en(!1);
                    },
                    children: (0, s.jsxs)(ei.A, {
                        shakeLocation: e_.uD.VOICE_USER,
                        isShaking: eS,
                        className: eW.Vs,
                        children: [
                            (0, s.jsx)(eV.A, {
                                ref: e5,
                                className: a()(eW.Vs, { [eW.E7]: V, [eW.k_]: null == g, [eW.N7]: J }),
                                noBorder: V,
                                style: E,
                                participantUserId: eo,
                                children: (0, s.jsxs)(A.s, {
                                    "aria-label": e7,
                                    className: eW.lG,
                                    onDoubleClick: e1,
                                    onContextMenu: (e) => e8(e, I.type === eG.lp.STREAM),
                                    onClick: e0,
                                    onMouseDown: j,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eJ && null != eo
                                            ? (0, s.jsx)(eA.A, {
                                                  voiceChannelEffect: eJ,
                                                  onComplete: () => (0, em.a)(eo),
                                                  userId: eo,
                                              })
                                            : null,
                                        I.type === eG.lp.USER
                                            ? (0, s.jsx)("div", {
                                                  className: eW.nl,
                                                  children: (0, s.jsx)(X.A, {
                                                      userId: eo,
                                                      channelId: v.id,
                                                      guildId: v.getGuildId(),
                                                      containerDimensions: { width: e9 ?? 0, height: e4 ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e6,
                                        V ? null : (0, s.jsx)("div", { className: eW.hD, children: e2 }),
                                        O
                                            ? (0, s.jsx)("div", {
                                                  className: eW._Q,
                                                  children: (0, s.jsx)(ll, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eW.Dt,
                                                  }),
                                              })
                                            : null,
                                        eH.includes(I.type)
                                            ? null
                                            : (0, s.jsx)(eK, {
                                                  focused: D,
                                                  width: b,
                                                  inCall: R,
                                                  participantId: I.id,
                                                  participantType: I.type,
                                                  hasVideo: eM ?? !1,
                                                  ...eX,
                                                  idle: J,
                                                  platform: eQ,
                                                  title: (0, eb.A)(v, I),
                                                  blocked: P,
                                                  ignored: k,
                                                  localVideoDisabled: ef,
                                                  videoToggleState: eN,
                                                  hideAudioIcon: eB,
                                                  onContextMenu: e8,
                                                  onToggleMute: eq,
                                                  participantUserId: eo,
                                                  channel: v,
                                                  secureFramesVerified: e$,
                                                  isHovered: el,
                                                  popoutType: x,
                                                  paused: w,
                                                  controlsBottom: B,
                                                  streamId: I.type === eG.lp.STREAM ? I.streamId : null,
                                                  soundboardMuted: eT,
                                                  stream: I.type === eG.lp.STREAM ? I.stream : null,
                                              }),
                                        R && !V
                                            ? (0, s.jsx)("div", {
                                                  className: a()(eW.PQ, { [eW.pU]: !D && (ek || null != eJ) }),
                                                  style: D || ek ? void 0 : le,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            q && ee && el && (0, s.jsx)(eR.A, { currentUserId: et, participant: I }),
                            (0, s.jsx)(es.A, { isFiring: F, callTileRef: e5 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eB(e) {
    let { participantType: l, platform: n, className: i } = e;
    if (l === eG.lp.STREAM)
        return n === eG.J7.XBOX
            ? (0, s.jsx)(eE.A, { className: i })
            : (0, s.jsx)(p.ScreenIcon, { size: "md", color: "currentColor", className: i });
    switch (n) {
        case eG.J7.MOBILE:
            return (0, s.jsx)(I.MobilePhoneIcon, { size: "xs", color: "currentColor", className: i });
        case eG.J7.XBOX:
            return (0, s.jsx)(eE.A, { className: i });
        case eG.J7.PLAYSTATION:
            return (0, s.jsx)(eN.A, { className: i });
        case eG.J7.QUEST:
            return (0, s.jsx)(c.VrHeadsetIcon, { size: "xs", color: "currentColor", className: i });
        default:
            return null;
    }
}
function eJ(e) {
    let { icon: l, tooltipText: n, hideWhenInactive: i, idle: t, onClick: o, highlighted: c = !1, text: d = null } = e;
    function r(e) {
        (e.stopPropagation(), o(e));
    }
    return (0, s.jsx)(f.m, {
        text: n,
        children: (0, s.jsx)("div", {
            className: a()(eW.V7, { [eW.kl]: i, [eW.N7]: t, [eW.Ym]: c }),
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
function eQ(e) {
    let { channelId: l, participantId: n, hideWhenInactive: t, idle: a } = e,
        o = i.useMemo(() => (0, B.A)(l, n), [l, n]),
        c = (0, r.bG)([et.A], () => et.A.getIsAlwaysOnTop(o)),
        d = i.useCallback(() => {
            ((0, J.XJ)(z.A.CALL_TILE_POPOUT, J.OP.STAY_ON_TOP, !c), ea.uR(o, !c));
        }, [o, c]);
    return eS.isPlatformEmbedded && ev.Ay.supportsFeature(eU.BYE.POPOUT_WINDOWS)
        ? (0, s.jsx)(eJ, {
              onClick: d,
              tooltipText: c ? eY.intl.string(eY.t.YdyDM9) : eY.intl.string(eY.t.ZVGHwP),
              icon: c ? S.PinUprightSlashIcon : v.PinUprightIcon,
              hideWhenInactive: t,
              idle: a,
          })
        : null;
}
function eF(e) {
    let { stream: l, hideWhenInactive: n, idle: i } = e,
        t = (0, r.bG)([eI.default], () => eI.default.getId()),
        a = (0, en.A)(l.ownerId === t ? l : null),
        o = (0, ee.A)(l),
        c = (0, el.A)(l),
        d = a ?? o;
    if (null == d) return null;
    let u = null == a && o?.isActive === !0;
    return (0, s.jsx)(eJ, {
        onClick: d.toggle,
        tooltipText: d.label,
        icon: b.GameControllerIcon,
        hideWhenInactive: n && !d.isActive,
        highlighted: a?.isActive === !0 || u,
        idle: i,
        text: c,
    });
}
eX.displayName = "CallTile";
let eK = i.memo((e) => {
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
            secureFramesVerified: v,
            onContextMenu: b,
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
        er = (0, r.bG)([eI.default], () => eI.default.getId()),
        eu = (0, r.bG)([eT.A], () =>
            I === eG.lp.USER && null != N ? eT.A.getActivities(N).find(w.A)?.application_id : null,
        ),
        ep = ei && I === eG.lp.STREAM && null != N && null != er && N !== er,
        eh = (0, ed.V)(N),
        em = (0, r.bG)([ey.Ay], () => null != N && ey.Ay.isLocalVideoAutoDisabled(N, (0, W.A)(I)), [N, I]),
        eA = (0, F.A)({ userId: N, guildId: E.getGuildId() }),
        ex = (0, K.a)({ displayNameStyles: eA }),
        eg = (0, ek.Yb)(t),
        ej = (0, ek.VE)(t),
        eN = (0, ek.DO)(t),
        [eE, eS] = i.useState(!1);
    i.useEffect(() => {
        let e = !1;
        function l() {
            e !== ef.A.isOpen() && ((e = ef.A.isOpen()) || eS(!1));
        }
        return (ef.A.addChangeListener(l), () => ef.A.removeChangeListener(l));
    }, []);
    let ev = !Z && I === eG.lp.STREAM && Q && (!ej || _),
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
        })({ localMuted: _, serverMuted: Y, serverDeafened: X, deafened: G, muted: U, soundboardMuted: et }),
        eC = (0, O.z)({ value: null != en ? en : 0, config: { ...o.config.stiff, clamp: !0 } }, "animate-always"),
        eR = [];
    (c &&
        I === eG.lp.STREAM &&
        (null != ec && eR.push((0, s.jsx)(eF, { stream: ec, hideWhenInactive: !1, idle: l }, "pass-the-controller")),
        eR.push((0, s.jsx)(q.A, { streamId: es, paused: el }, "zoom-controls"))),
        c
            ? ee === H.N.CALL_TILE &&
              (eR.push(
                  (0, s.jsx)(eQ, { channelId: E.id, participantId: A, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eR.push(
                  (0, s.jsx)(
                      eJ,
                      {
                          onClick: () => {
                              ((0, J.XJ)(z.A.CALL_TILE_POPOUT, J.OP.POPOUT_RETURN), ea.close((0, B.A)(E.id, A)));
                          },
                          tooltipText: eY.intl.string(eY.t["7Dwcnj"]),
                          icon: d.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (eN ||
                  I !== eG.lp.USER ||
                  null == N ||
                  N === er ||
                  null == eh ||
                  eR.push(
                      (0, s.jsx)(
                          eM.M,
                          { userId: N, channel: E, applicationId: eh, hideWhenInactive: !eE, idle: l },
                          "gift",
                      ),
                  ),
              I === eG.lp.STREAM &&
                  null != ec &&
                  eR.push((0, s.jsx)(eF, { stream: ec, hideWhenInactive: !eE, idle: l }, "pass-the-controller")),
              eR.push(
                  (0, s.jsx)(
                      eJ,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eS(!0), b(e, !0, eG.GK.THREE_DOT));
                          },
                          tooltipText: eY.intl.string(eY.t["+1H47t"]),
                          icon: V.MoreHorizontalIcon,
                          hideWhenInactive: !eE,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              ev &&
                  eR.push(
                      (0, s.jsx)(
                          eJ,
                          {
                              onClick: $,
                              tooltipText: _ ? eY.intl.string(eY.t.YqAjXy) : eY.intl.string(eY.t.w4m945),
                              icon: _ ? M.VoiceXIcon : D.VoiceNormalIcon,
                              hideWhenInactive: !_ && !eE,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let eO = [];
    (null != eb &&
        I === eG.lp.USER &&
        eO.push((0, s.jsx)(eb, { className: eW.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        h &&
            eO.push(
                (0, s.jsx)(
                    "div",
                    {
                        className: eW.Z5,
                        children: (0, s.jsx)(P.DenyIcon, {
                            size: "lg",
                            className: eW.Q6,
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
                    { className: eW.PP, children: (0, s.jsx)(k.EyeSlashIcon, { size: "lg", className: eW.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eO.push((0, s.jsx)(eB, { participantType: I, platform: S, className: eW.gr }, "title-icon")),
        null == n ||
            "" === n ||
            l ||
            eO.push((0, s.jsx)("span", { className: a()(eW.Wk, ex), children: n }, "title-text")),
        v &&
            eO.push(
                (0, s.jsx)(
                    f.m,
                    {
                        text: eY.intl.string(eY.t.ZEem6O),
                        children: (0, s.jsx)(L.ShieldLockIcon, {
                            className: eW.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eY.intl.string(eY.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let eV = eh ?? eu,
        eD =
            (c && ee !== H.N.CALL_TILE) || l || eN || I !== eG.lp.USER || null == N || null == eV
                ? null
                : (0, s.jsx)(eM.X, { applicationId: eV, hideApplicationName: ej });
    return (0, s.jsxs)("div", {
        className: a()(eW.MU, { [eW.oE]: ej, [eW.Ol]: c }),
        children: [
            (0, s.jsx)("div", {
                className: a()(eW.Ik, { [eW.EX]: t < 195 }),
                children:
                    em || p === eU.bb8.AUTO_PROBING
                        ? l
                            ? (0, s.jsx)("div", {
                                  className: eW.h5,
                                  children: (0, s.jsx)(C.VideoSlashIcon, { size: "md", color: "currentColor" }),
                              })
                            : (0, s.jsxs)("div", {
                                  className: a()(eW.ns, eW.WP),
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eW.h5,
                                          children: (0, s.jsx)(C.VideoSlashIcon, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, s.jsx)(R.E, {
                                          variant: "body-sm/normal",
                                          className: eW.Wk,
                                          children: eY.intl.string(eY.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !eg &&
                (0, s.jsxs)("div", {
                    className: a()(eW.Qp, { [eW.EX]: t < 195 }),
                    children: [
                        (0, s.jsxs)("div", {
                            className: eW.qV,
                            children: [
                                eO.length > 0 &&
                                    (0, s.jsx)(R.E, {
                                        className: eW.ac,
                                        color: "none",
                                        variant: ej ? "body-sm/normal" : "body-md/normal",
                                        children: eO,
                                    }),
                                ep && null != N && !ej
                                    ? (0, s.jsx)(eo.A, { streamerId: N, guildId: E.getGuildId(), idle: l })
                                    : null,
                                eD,
                            ],
                        }),
                        eR.length > 0
                            ? (0, s.jsx)(o.animated.div, {
                                  className: a()(eW._v, { [eW.N7]: l }),
                                  style: { marginBottom: eC.value },
                                  children: eR,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eK.displayName = "CallTileOverlay";
let eZ = Z.$;
n.d(l, {}, { Ay: eX, Yl: eZ });
