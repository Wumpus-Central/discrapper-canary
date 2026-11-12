n(321073);
var i = n(477900),
    s = n(582128),
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
    ei = n(612258),
    es = n(551826),
    et = n(293432),
    ea = n(574172),
    eo = n(986491),
    ec = n(665691),
    ed = n(635885),
    er = n(421768),
    eu = n(209932),
    ep = n(58303),
    eh = n(253932),
    em = n(461782),
    eA = n(614518),
    eI = n(706787),
    ex = n(46653),
    ey = n(111162),
    eT = n(754712),
    eg = n(290863),
    ej = n(485296),
    ef = n(977997),
    eN = n(712687),
    eE = n(790381),
    eS = n(266080),
    ev = n(723702),
    eb = n(253400),
    eC = n(141035),
    eR = n(541157),
    eO = n(654820),
    eV = n(804980),
    eM = n(272812),
    eD = n(304047),
    eP = n(555148),
    ek = n(83982),
    eL = n(345812),
    eU = n(110234),
    eG = n(652215),
    e_ = n(806931),
    ew = n(31408),
    ez = n(778712),
    eY = n(731854),
    eW = n(792996),
    eH = n(584841);
let eX = [e_.lp.ACTIVITY],
    eB = s.memo((e) => {
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
            J = s.useContext(em.vG) || H,
            [F, K] = s.useState(!1),
            q = eh.Q_.useSetting(),
            ee = (0, r.bG)([ey.default], () => ey.default.isStreamInfoOverlayEnabled),
            [el, en] = s.useState(!1),
            et = (0, r.bG)([ex.default], () => ex.default.getId()),
            ea = I.type === e_.lp.ACTIVITY ? null : I.user,
            eo = ea?.id ?? null,
            [ed] = (0, Y.A)(I.type === e_.lp.ACTIVITY ? [I.applicationId] : []),
            eg = (0, r.bG)([eu.A], () => null != eo && eu.A.isLocalSoundboardMuted(eo)),
            eN = (0, er.g)(eg ? "CallTile" : "Invalid - CallTile"),
            eE = (0, r.bG)([eT.Ay], () => null != eo && eT.Ay.isLocalVideoDisabled(eo, (0, W.A)(I.type)), [eo, I.type]),
            eS = (0, r.bG)(
                [eT.Ay],
                () => (null != eo ? eT.Ay.getVideoToggleState(eo, (0, W.A)(I.type)) : eG.bb8.NONE),
                [eo, I.type],
            ),
            ev = eS === eG.bb8.AUTO_PROBING,
            { speaking: eb, ringing: eD, hasVideo: eL } = (0, eU.A)(I, et),
            eB = (0, r.bG)([eu.A], () => null !== eo && eu.A.isUserPlayingSounds(eo), [eo]),
            eJ =
                ((l = et),
                (n = I),
                (t = v.getGuildId()),
                (o = n.type !== e_.lp.ACTIVITY ? n.user.id : n.applicationId),
                (c = (0, r.cf)([ef.A], () => {
                    let e = ef.A.getVoiceState(t, o);
                    return {
                        muted: e?.mute ?? !1,
                        deafened: e?.deaf ?? !1,
                        suppressed: e?.suppress ?? !1,
                        voiceChannelId: e?.channelId,
                    };
                })),
                (d = (0, r.cf)(
                    [eT.Ay],
                    () => {
                        let e = (0, W.A)(n.type);
                        return l === o
                            ? { muted: !1, deafened: !1 }
                            : {
                                  muted: eT.Ay.isLocalMute(o, e),
                                  localVideoDisabled: eT.Ay.isLocalVideoDisabled(o, e),
                                  localVideoAutoDisabled: eT.Ay.isLocalVideoAutoDisabled(o, e),
                              };
                    },
                    [l, n.type, o],
                )),
                (u = (0, eR.Nd)(n.type === e_.lp.USER ? n.voiceState : null, (0, eR.oN)())),
                {
                    serverMuted: c.muted,
                    serverDeafened: c.deafened,
                    suppressed: c.suppressed,
                    localMuted: d.muted,
                    muted: u?.isVoiceMuted() ?? !1,
                    deafened: u?.isVoiceDeafened() ?? !1,
                }),
            eQ = I.type === e_.lp.STREAM && eo === et,
            eF = (0, r.bG)([eA.A], () => (I.type === e_.lp.USER && null != eo ? eA.A.getEffectForUserId(eo) : null)),
            eK = (0, r.bG)([ef.A], () => ef.A.getVoicePlatformForChannel(v.id, eo ?? "")),
            e$ = (0, ec.UF)({ userId: eo, channelId: v.id }),
            eq = (0, ec.DY)({ streamKey: I.type === e_.lp.STREAM ? I.id : null, channelId: v.id }),
            e0 = s.useMemo(
                () => (I.type === e_.lp.STREAM ? (eq ?? !1) : I.type === e_.lp.USER && (e$ ?? !1)),
                [eq, e$, I.type],
            );
        s.useEffect(() => {
            K(D);
        }, [D]);
        let e1 = s.useCallback(() => {
                null != eo && U.default.toggleLocalMute(eo, eY.x.STREAM);
            }, [eo]),
            e8 = s.useCallback(
                (e) => {
                    g?.(I, e);
                },
                [g, I],
            ),
            e6 = s.useCallback(
                (e) => {
                    y?.(I, e);
                },
                [y, I],
            ),
            e2 = s.useCallback(
                (e, l, n) => {
                    T?.(I, e, l, n);
                },
                [T, I],
            ),
            e7 = null,
            e5 = null,
            e4 = "";
        switch (I.type) {
            case e_.lp.STREAM:
                ((e7 = (0, i.jsx)(eP.A, {
                    participant: I,
                    selected: O,
                    popoutType: x,
                    width: b,
                    fit: L,
                    onVideoResize: C,
                    paused: w,
                })),
                    (e5 = (0, i.jsx)(eP.D, {
                        participant: I,
                        selected: O,
                        width: b,
                        focused: D,
                        idle: J,
                        premiumIndicator: !1,
                    })),
                    (e4 = eW.intl.formatToPlainString(eW.t.gHPz3Q, { streamerName: I.user.username })));
                break;
            case e_.lp.USER:
                ((e7 = (0, i.jsx)(ek.A, {
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
                    noVideoRender: M || ev,
                    pulseSpeakingIndicator: z,
                })),
                    (e5 = (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(ek.s, { participant: I, channelId: v.id }),
                            v.isGuildStageVoice() && !M ? (0, i.jsx)(ep.A, { channel: v, userId: I.user.id }) : null,
                        ],
                    })),
                    (e4 = eW.intl.formatToPlainString(eW.t["iC/x/Q"], { username: I.user.username })));
                break;
            case e_.lp.ACTIVITY:
                ((e7 = (0, i.jsx)(eV.Ay, { interactible: D, participant: I, selected: O, channel: v, width: b })),
                    (e4 = eW.intl.formatToPlainString(eW.t.YCvOsO, { activityName: ed?.name })));
                break;
            case e_.lp.HIDDEN_STREAM:
                e7 = (0, i.jsx)(eP.A, {
                    participant: I,
                    selected: O,
                    width: b,
                    fit: L,
                    onVideoResize: C,
                    paused: w,
                    popoutType: x,
                });
        }
        let { ref: e9, width: e3, height: le } = (0, _.Ay)(),
            ll = (0, r.bG)([ej.A], () => (I.type === e_.lp.USER ? ej.A.getVoiceVolume(I.id) : -1 / 0)),
            ln = (0, Q.v)({
                voiceStatus: eB ? ez.T2.PLAYING_SOUNDBOARD : eb ? ez.T2.SPEAKING : null,
                voiceDb: ll,
                spreadDirection: Q.O.INSET_ONLY,
                maxInnerSpreadRadius: 4,
            }),
            li = (0, e_.Ay)(I) ? p.ScreenIcon : eL ? h.VideoIcon : m.PhoneIcon,
            ls = I.type === e_.lp.STREAM && D;
        return (0, i.jsx)(G.A, {
            section: eG.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)($.Ay, {
                streamKey: I.id,
                enableZoom: ls,
                children: (0, i.jsx)("div", {
                    className: a()(eH.iE, { [eH.DF]: eD }, N),
                    style: S,
                    onMouseEnter: function () {
                        en(!0);
                    },
                    onMouseLeave: function () {
                        en(!1);
                    },
                    children: (0, i.jsxs)(es.A, {
                        shakeLocation: ew.uD.VOICE_USER,
                        isShaking: eb,
                        className: eH.Vs,
                        children: [
                            (0, i.jsx)(eM.A, {
                                ref: e9,
                                className: a()(eH.Vs, { [eH.E7]: V, [eH.k_]: null == g, [eH.N7]: J }),
                                noBorder: V,
                                style: E,
                                participantUserId: eo,
                                children: (0, i.jsxs)(A.s, {
                                    "aria-label": e4,
                                    className: eH.lG,
                                    onDoubleClick: e6,
                                    onContextMenu: (e) => e2(e, I.type === e_.lp.STREAM),
                                    onClick: e8,
                                    onMouseDown: j,
                                    onKeyDown: f,
                                    focusProps: { offset: 1 },
                                    children: [
                                        null != eF && null != eo
                                            ? (0, i.jsx)(eI.A, {
                                                  voiceChannelEffect: eF,
                                                  onComplete: () => (0, eA.a)(eo),
                                                  userId: eo,
                                              })
                                            : null,
                                        I.type === e_.lp.USER
                                            ? (0, i.jsx)("div", {
                                                  className: eH.nl,
                                                  children: (0, i.jsx)(X.A, {
                                                      userId: eo,
                                                      channelId: v.id,
                                                      guildId: v.getGuildId(),
                                                      containerDimensions: { width: e3 ?? 0, height: le ?? 0 },
                                                  }),
                                              })
                                            : null,
                                        e7,
                                        V ? null : (0, i.jsx)("div", { className: eH.hD, children: e5 }),
                                        O
                                            ? (0, i.jsx)("div", {
                                                  className: eH._Q,
                                                  children: (0, i.jsx)(li, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: eH.Dt,
                                                  }),
                                              })
                                            : null,
                                        eX.includes(I.type)
                                            ? null
                                            : (0, i.jsx)(eZ, {
                                                  focused: D,
                                                  width: b,
                                                  inCall: R,
                                                  participantId: I.id,
                                                  participantType: I.type,
                                                  hasVideo: eL ?? !1,
                                                  ...eJ,
                                                  idle: J,
                                                  platform: eK,
                                                  title: (0, eC.A)(v, I),
                                                  blocked: P,
                                                  ignored: k,
                                                  localVideoDisabled: eE,
                                                  videoToggleState: eS,
                                                  hideAudioIcon: eQ,
                                                  onContextMenu: e2,
                                                  onToggleMute: e1,
                                                  participantUserId: eo,
                                                  channel: v,
                                                  secureFramesVerified: e0,
                                                  isHovered: el,
                                                  popoutType: x,
                                                  paused: w,
                                                  controlsBottom: B,
                                                  streamId: I.type === e_.lp.STREAM ? I.streamId : null,
                                                  soundboardMuted: eN && eg,
                                                  stream: I.type === e_.lp.STREAM ? I.stream : null,
                                              }),
                                        R && !V
                                            ? (0, i.jsx)("div", {
                                                  className: a()(eH.PQ, { [eH.pU]: !D && (eB || null != eF) }),
                                                  style: D || eB ? void 0 : ln,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            q && ee && el && (0, i.jsx)(eO.A, { currentUserId: et, participant: I }),
                            (0, i.jsx)(ei.A, { isFiring: F, callTileRef: e9 }),
                        ],
                    }),
                }),
            }),
        });
    });
function eJ(e) {
    let { participantType: l, platform: n, className: s } = e;
    if (l === e_.lp.STREAM)
        return n === e_.J7.XBOX
            ? (0, i.jsx)(eS.A, { className: s })
            : (0, i.jsx)(p.ScreenIcon, { size: "md", color: "currentColor", className: s });
    switch (n) {
        case e_.J7.MOBILE:
            return (0, i.jsx)(I.MobilePhoneIcon, { size: "xs", color: "currentColor", className: s });
        case e_.J7.XBOX:
            return (0, i.jsx)(eS.A, { className: s });
        case e_.J7.PLAYSTATION:
            return (0, i.jsx)(eE.A, { className: s });
        case e_.J7.QUEST:
            return (0, i.jsx)(c.VrHeadsetIcon, { size: "xs", color: "currentColor", className: s });
        default:
            return null;
    }
}
function eQ(e) {
    let { icon: l, tooltipText: n, hideWhenInactive: s, idle: t, onClick: o, highlighted: c = !1, text: d = null } = e;
    function r(e) {
        (e.stopPropagation(), o(e));
    }
    return (0, i.jsx)(f.m, {
        text: n,
        children: (0, i.jsx)("div", {
            className: a()(eH.V7, { [eH.kl]: s, [eH.N7]: t, [eH.Ym]: c }),
            children:
                null != d
                    ? (0, i.jsx)(N.$, { size: "sm", variant: "overlay-secondary", onClick: r, icon: l, text: d })
                    : (0, i.jsx)(E.K, {
                          size: "sm",
                          variant: "overlay-secondary",
                          onClick: r,
                          "aria-label": n,
                          icon: l,
                      }),
        }),
    });
}
function eF(e) {
    let { channelId: l, participantId: n, hideWhenInactive: t, idle: a } = e,
        o = s.useMemo(() => (0, B.A)(l, n), [l, n]),
        c = (0, r.bG)([et.A], () => et.A.getIsAlwaysOnTop(o)),
        d = s.useCallback(() => {
            ((0, J.XJ)(z.A.CALL_TILE_POPOUT, J.OP.STAY_ON_TOP, !c), ea.uR(o, !c));
        }, [o, c]);
    return ev.isPlatformEmbedded && eb.Ay.supportsFeature(eG.BYE.POPOUT_WINDOWS)
        ? (0, i.jsx)(eQ, {
              onClick: d,
              tooltipText: c ? eW.intl.string(eW.t.YdyDM9) : eW.intl.string(eW.t.ZVGHwP),
              icon: c ? S.PinUprightSlashIcon : v.PinUprightIcon,
              hideWhenInactive: t,
              idle: a,
          })
        : null;
}
function eK(e) {
    let { stream: l, hideWhenInactive: n, idle: s } = e,
        t = (0, r.bG)([ex.default], () => ex.default.getId()),
        a = (0, en.A)(l.ownerId === t ? l : null),
        o = (0, ee.A)(l),
        c = (0, el.A)(l),
        d = a ?? o;
    if (null == d) return null;
    let u = null == a && o?.isActive === !0;
    return (0, i.jsx)(eQ, {
        onClick: d.toggle,
        tooltipText: d.label,
        icon: b.GameControllerIcon,
        hideWhenInactive: n && !d.isActive,
        highlighted: a?.isActive === !0 || u,
        idle: s,
        text: c,
    });
}
eB.displayName = "CallTile";
let eZ = s.memo((e) => {
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
            streamId: ei,
            inCall: es,
            soundboardMuted: et,
            stream: ec,
        } = e,
        er = (0, r.bG)([ex.default], () => ex.default.getId()),
        eu = (0, r.bG)([eg.A], () =>
            I === e_.lp.USER && null != N ? eg.A.getActivities(N).find(w.A)?.application_id : null,
        ),
        ep = es && I === e_.lp.STREAM && null != N && null != er && N !== er,
        eh = (0, ed.V)(N),
        em = (0, r.bG)([eT.Ay], () => null != N && eT.Ay.isLocalVideoAutoDisabled(N, (0, W.A)(I)), [N, I]),
        eA = (0, F.A)({ userId: N, guildId: E.getGuildId() }),
        eI = (0, K.a)({ displayNameStyles: eA }),
        ey = (0, eL.Yb)(t),
        ej = (0, eL.VE)(t),
        ef = (0, eL.DO)(t),
        [eE, eS] = s.useState(!1);
    s.useEffect(() => {
        let e = !1;
        function l() {
            e !== eN.A.isOpen() && ((e = eN.A.isOpen()) || eS(!1));
        }
        return (eN.A.addChangeListener(l), () => eN.A.removeChangeListener(l));
    }, []);
    let ev = !Z && I === e_.lp.STREAM && Q && (!ej || _),
        eb = (function (e) {
            let { localMuted: l, serverMuted: n, serverDeafened: i, deafened: s, muted: t, soundboardMuted: a } = e;
            return i
                ? x.HeadphonesDenyIcon
                : n
                  ? y.MicrophoneDenyIcon
                  : s
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
        I === e_.lp.STREAM &&
        (null != ec && eR.push((0, i.jsx)(eK, { stream: ec, hideWhenInactive: !1, idle: l }, "pass-the-controller")),
        eR.push((0, i.jsx)(q.A, { streamId: ei, paused: el }, "zoom-controls"))),
        c
            ? ee === H.N.CALL_TILE &&
              (eR.push(
                  (0, i.jsx)(eF, { channelId: E.id, participantId: A, hideWhenInactive: !1, idle: l }, "stay-on-top"),
              ),
              eR.push(
                  (0, i.jsx)(
                      eQ,
                      {
                          onClick: () => {
                              ((0, J.XJ)(z.A.CALL_TILE_POPOUT, J.OP.POPOUT_RETURN), ea.close((0, B.A)(E.id, A)));
                          },
                          tooltipText: eW.intl.string(eW.t["7Dwcnj"]),
                          icon: d.WindowReturnIcon,
                          hideWhenInactive: !1,
                          idle: l,
                      },
                      "close",
                  ),
              ))
            : (ef ||
                  I !== e_.lp.USER ||
                  null == N ||
                  N === er ||
                  null == eh ||
                  eR.push(
                      (0, i.jsx)(
                          eD.M,
                          { userId: N, channel: E, applicationId: eh, hideWhenInactive: !eE, idle: l },
                          "gift",
                      ),
                  ),
              I === e_.lp.STREAM &&
                  null != ec &&
                  eR.push((0, i.jsx)(eK, { stream: ec, hideWhenInactive: !eE, idle: l }, "pass-the-controller")),
              eR.push(
                  (0, i.jsx)(
                      eQ,
                      {
                          onClick: function (e) {
                              (e.stopPropagation(), eS(!0), b(e, !0, e_.GK.THREE_DOT));
                          },
                          tooltipText: eW.intl.string(eW.t["+1H47t"]),
                          icon: V.MoreHorizontalIcon,
                          hideWhenInactive: !eE,
                          idle: l,
                      },
                      "options",
                  ),
              ),
              ev &&
                  eR.push(
                      (0, i.jsx)(
                          eQ,
                          {
                              onClick: $,
                              tooltipText: _ ? eW.intl.string(eW.t.YqAjXy) : eW.intl.string(eW.t.w4m945),
                              icon: _ ? M.VoiceXIcon : D.VoiceNormalIcon,
                              hideWhenInactive: !_ && !eE,
                              idle: l,
                          },
                          "mute",
                      ),
                  )));
    let eO = [];
    (null != eb &&
        I === e_.lp.USER &&
        eO.push((0, i.jsx)(eb, { className: eH.gr, size: "xs", color: "currentColor" }, "sound-icon")),
        h &&
            eO.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: eH.Z5,
                        children: (0, i.jsx)(P.DenyIcon, {
                            size: "lg",
                            className: eH.Q6,
                            color: u.A.unsafe_rawColors.RED_400.css,
                        }),
                    },
                    "blocked-icon",
                ),
            ),
        m &&
            eO.push(
                (0, i.jsx)(
                    "div",
                    { className: eH.PP, children: (0, i.jsx)(k.EyeSlashIcon, { size: "lg", className: eH.Q6 }) },
                    "ignored-icon",
                ),
            ),
        l || eO.push((0, i.jsx)(eJ, { participantType: I, platform: S, className: eH.gr }, "title-icon")),
        null == n ||
            "" === n ||
            l ||
            eO.push((0, i.jsx)("span", { className: a()(eH.Wk, eI), children: n }, "title-text")),
        v &&
            eO.push(
                (0, i.jsx)(
                    f.m,
                    {
                        text: eW.intl.string(eW.t.ZEem6O),
                        children: (0, i.jsx)(L.ShieldLockIcon, {
                            className: eH.vW,
                            size: "xs",
                            color: u.A.colors.TEXT_STRONG,
                            "aria-label": eW.intl.string(eW.t.mR9cf3),
                        }),
                    },
                    "secure-frames-icon",
                ),
            ));
    let eV = eh ?? eu,
        eM =
            (c && ee !== H.N.CALL_TILE) || l || ef || I !== e_.lp.USER || null == N || null == eV
                ? null
                : (0, i.jsx)(eD.X, { applicationId: eV, hideApplicationName: ej });
    return (0, i.jsxs)("div", {
        className: a()(eH.MU, { [eH.oE]: ej, [eH.Ol]: c }),
        children: [
            (0, i.jsx)("div", {
                className: a()(eH.Ik, { [eH.EX]: t < 195 }),
                children:
                    em || p === eG.bb8.AUTO_PROBING
                        ? l
                            ? (0, i.jsx)("div", {
                                  className: eH.h5,
                                  children: (0, i.jsx)(C.VideoSlashIcon, { size: "md", color: "currentColor" }),
                              })
                            : (0, i.jsxs)("div", {
                                  className: a()(eH.ns, eH.WP),
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: eH.h5,
                                          children: (0, i.jsx)(C.VideoSlashIcon, { size: "md", color: "currentColor" }),
                                      }),
                                      (0, i.jsx)(R.E, {
                                          variant: "body-sm/normal",
                                          className: eH.Wk,
                                          children: eW.intl.string(eW.t.m2Hyj0),
                                      }),
                                  ],
                              })
                        : null,
            }),
            !ey &&
                (0, i.jsxs)("div", {
                    className: a()(eH.Qp, { [eH.EX]: t < 195 }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: eH.qV,
                            children: [
                                eO.length > 0 &&
                                    (0, i.jsx)(R.E, {
                                        className: eH.ac,
                                        color: "none",
                                        variant: ej ? "body-sm/normal" : "body-md/normal",
                                        children: eO,
                                    }),
                                ep && null != N && !ej
                                    ? (0, i.jsx)(eo.A, { streamerId: N, guildId: E.getGuildId(), idle: l })
                                    : null,
                                eM,
                            ],
                        }),
                        eR.length > 0
                            ? (0, i.jsx)(o.animated.div, {
                                  className: a()(eH._v, { [eH.N7]: l }),
                                  style: { marginBottom: eC.value },
                                  children: eR,
                              })
                            : null,
                    ],
                }),
        ],
    });
});
eZ.displayName = "CallTileOverlay";
let e$ = Z.$;
n.d(l, {}, { Ay: eB, Yl: e$ });
