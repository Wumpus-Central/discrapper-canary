n.d(t, { Ay: () => em, Yl: () => eA }), n(321073);
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
    m = n(587895),
    p = n(429913),
    g = n(520698),
    _ = n(659974),
    f = n(164617),
    x = n(66004),
    C = n(958005),
    E = n(609425),
    I = n(73392),
    N = n(529020),
    b = n(401901),
    S = n(612258),
    T = n(551826),
    v = n(87001),
    y = n(574172),
    j = n(665691),
    R = n(209932),
    O = n(253932),
    L = n(461782),
    M = n(614518),
    D = n(706787),
    G = n(961350),
    U = n(760751),
    P = n(111162),
    w = n(430452),
    k = n(290863),
    V = n(485296),
    B = n(977997),
    H = n(712687),
    F = n(790381),
    K = n(266080),
    W = n(723702),
    Y = n(837921),
    z = n(141035),
    q = n(654820),
    X = n(804980),
    J = n(272812),
    Q = n(203355),
    $ = n(83982),
    Z = n(345812),
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
                participant: f,
                popoutType: C,
                onDoubleClick: E,
                onContextMenu: I,
                onClick: v,
                onMouseDown: y,
                onKeyDown: H,
                className: F,
                style: K,
                containerStyle: W,
                channel: Y,
                width: Z,
                onVideoResize: eo,
                inCall: ed = !1,
                selected: ec = !1,
                noBorder: eu = !1,
                noVideoRender: eA = !1,
                focused: em = !1,
                blocked: ep = !1,
                ignored: eg = !1,
                fit: e_ = b.$.CONTAIN,
                paused: ef = !1,
                pulseSpeakingIndicator: ex = !1,
                forceIdle: eC = !1,
                controlsBottom: eE,
            } = e,
            eI = l.useContext(L.vG) || eC,
            [eN, eb] = l.useState(!1),
            eS = O.Q_.useSetting(),
            eT = (0, o.bG)([P.default], () => P.default.isStreamInfoOverlayEnabled),
            [ev, ey] = l.useState(!1),
            ej = (0, o.bG)([G.default], () => G.default.getId()),
            eR = f.type === en.lp.ACTIVITY ? null : f.user,
            eO = eR?.id ?? null,
            [eL] = (0, p.A)(f.type === en.lp.ACTIVITY ? [f.applicationId] : []),
            eM = (0, o.bG)([w.Ay], () => null != eO && w.Ay.isLocalVideoDisabled(eO, (0, g.A)(f.type)), [eO, f.type]),
            eD = (0, o.bG)([w.Ay], () => (null != eO ? w.Ay.getVideoToggleState(eO, (0, g.A)(f.type)) : et.bb8.NONE), [
                eO,
                f.type,
            ]),
            eG = eD === et.bb8.AUTO_PROBING,
            { speaking: eU, latched: eP, ringing: ew, hasVideo: ek } = (0, ee.A)(f, ej),
            eV = (0, o.bG)([R.A], () => null !== eO && R.A.isUserPlayingSounds(eO), [eO]),
            eB =
                ((t = ej),
                (n = f),
                (s = Y.getGuildId()),
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
                (c = (0, o.cf)([w.Ay], () => {
                    let e = (0, g.A)(n.type);
                    return t === r
                        ? { muted: !1, deafened: !1 }
                        : {
                              muted: w.Ay.isLocalMute(r, e),
                              localVideoDisabled: w.Ay.isLocalVideoDisabled(r, e),
                              localVideoAutoDisabled: w.Ay.isLocalVideoAutoDisabled(r, e),
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
            eH = f.type === en.lp.STREAM && eO === ej,
            eF = (0, o.bG)([M.A], () => (f.type === en.lp.USER && null != eO ? M.A.getEffectForUserId(eO) : null)),
            eK = (0, o.bG)([B.A], () => B.A.getVoicePlatformForChannel(Y.id, eO ?? et.dJq)),
            { showGameIcon: eW } = N.Ay.useExperiment({ location: "voice_users" }, { autoTrackExposure: !1 }),
            eY = (0, o.bG)(
                [k.A],
                () =>
                    eW && null != eO
                        ? k.A.findActivity(eO, (e) => null != e.application_id && e.type === et.$pd.PLAYING)
                        : null,
                [eW, eO],
            ),
            ez = (0, o.bG)([U.A], () => (eY?.application_id != null ? U.A.getDetectableGame(eY.application_id) : null)),
            eq = (0, o.bG)([m.A], () =>
                null != ez && eY?.application_id != null ? m.A.getApplication(eY?.application_id) : void 0,
            ),
            eX = (0, j.UF)({ userId: eO, channelId: Y.id }),
            eJ = (0, j.DY)({ streamKey: f.type === en.lp.STREAM ? f.id : null, channelId: Y.id }),
            eQ = l.useMemo(
                () => (f.type === en.lp.STREAM ? (eJ ?? !1) : f.type === en.lp.USER && (eX ?? !1)),
                [eJ, eX, f.type],
            );
        l.useEffect(() => {
            eb(em);
        }, [em]);
        let e$ = l.useCallback(() => {
                null != eO && h.A.toggleLocalMute(eO, el.x.STREAM);
            }, [eO]),
            eZ = l.useCallback(
                (e) => {
                    v?.(f, e);
                },
                [v, f],
            ),
            e0 = l.useCallback(
                (e) => {
                    E?.(f, e);
                },
                [E, f],
            ),
            e1 = l.useCallback(
                (e, t, n) => {
                    I?.(f, e, t, n);
                },
                [I, f],
            ),
            e9 = null,
            e7 = null,
            e6 = "";
        switch (f.type) {
            case en.lp.STREAM:
                (e9 = (0, i.jsx)(Q.A, {
                    participant: f,
                    selected: ec,
                    popoutType: C,
                    width: Z,
                    fit: e_,
                    onVideoResize: eo,
                    paused: ef,
                    focused: em,
                    idle: eI,
                    controlsBottom: eE,
                })),
                    (e7 = (0, i.jsx)(Q.D, {
                        participant: f,
                        selected: ec,
                        width: Z,
                        focused: em,
                        idle: eI,
                        premiumIndicator: !1,
                    })),
                    (e6 = es.intl.formatToPlainString(es.t.gHPz3Q, { streamerName: f.user.username }));
                break;
            case en.lp.USER:
                (e9 = (0, i.jsx)($.A, {
                    channel: Y,
                    inCall: ed,
                    participant: f,
                    popoutType: C,
                    fit: e_,
                    onVideoResize: eo,
                    paused: ef,
                    selected: ec,
                    width: Z,
                    blocked: ep,
                    ignored: eg,
                    noVideoRender: eA || eG,
                    pulseSpeakingIndicator: ex,
                })),
                    (e7 = (0, i.jsx)($.s, { participant: f, channelId: Y.id })),
                    (e6 = es.intl.formatToPlainString(es.t["iC/x/Q"], { username: f.user.username }));
                break;
            case en.lp.ACTIVITY:
                (e9 = (0, i.jsx)(X.Ay, { interactible: em, participant: f, selected: ec, channel: Y, width: Z })),
                    (e6 = es.intl.formatToPlainString(es.t.YCvOsO, { activityName: eL?.name }));
                break;
            case en.lp.HIDDEN_STREAM:
                e9 = (0, i.jsx)(Q.A, {
                    participant: f,
                    selected: ec,
                    width: Z,
                    fit: e_,
                    onVideoResize: eo,
                    paused: ef,
                    popoutType: C,
                    focused: em,
                    idle: eI,
                });
        }
        let e3 = l.useRef(null),
            e2 = (0, o.bG)([V.A], () => (f.type === en.lp.USER ? V.A.getVoiceVolume(f.id) : -1 / 0)),
            e5 = (0, _.v)({ isSpeaking: eU, voiceDb: e2, spreadDirection: _.O.INSET_ONLY, maxInnerSpreadRadius: 4 }),
            e8 = (0, en.Ay)(f) ? u.kN9 : ek ? u.npA : u.EsG;
        return (0, i.jsx)(A.A, {
            section: et.JJy.VOICE_CHANNEL_TILE,
            children: (0, i.jsx)("div", {
                className: a()(ea.iE, { [ea.DF]: ew }, F),
                style: W,
                onMouseEnter: () => {
                    ey(!0);
                },
                onMouseLeave: () => {
                    ey(!1);
                },
                children: (0, i.jsxs)(T.A, {
                    shakeLocation: ei.uD.VOICE_USER,
                    isShaking: eU,
                    className: ea.Vs,
                    children: [
                        (0, i.jsx)(J.A, {
                            ref: e3,
                            className: a()(ea.Vs, { [ea.E7]: eu, [ea.k_]: null == v, [ea.N7]: eI }),
                            noBorder: eu,
                            style: K,
                            participantUserId: eO,
                            children: (0, i.jsxs)(u.sqX, {
                                "aria-label": e6,
                                className: ea.lG,
                                onDoubleClick: e0,
                                onContextMenu: (e) => e1(e, f.type === en.lp.STREAM),
                                onClick: eZ,
                                onMouseDown: y,
                                onKeyDown: H,
                                focusProps: { offset: 1 },
                                children: [
                                    null != eF && null != eO
                                        ? (0, i.jsx)(D.A, {
                                              voiceChannelEffect: eF,
                                              onComplete: () => (0, M.a)(eO),
                                              userId: eO,
                                          })
                                        : null,
                                    f.type === en.lp.USER
                                        ? (0, i.jsx)("div", {
                                              className: ea.nl,
                                              children: (0, i.jsx)(x.A, {
                                                  userId: eO,
                                                  channelId: Y.id,
                                                  guildId: Y.getGuildId(),
                                                  containerDimensions: {
                                                      width: e3?.current?.clientWidth ?? 0,
                                                      height: e3?.current?.clientHeight ?? 0,
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
                                    er.includes(f.type)
                                        ? null
                                        : (0, i.jsx)(eh, {
                                              focused: em,
                                              width: Z,
                                              inCall: ed,
                                              participantId: f.id,
                                              participantType: f.type,
                                              hasVideo: ek ?? !1,
                                              ...eB,
                                              idle: eI,
                                              platform: eK,
                                              title: (0, z.A)(Y, f),
                                              blocked: ep,
                                              ignored: eg,
                                              localVideoDisabled: eM,
                                              videoToggleState: eD,
                                              hideAudioIcon: eH,
                                              onContextMenu: e1,
                                              onToggleMute: e$,
                                              participantUserId: eO,
                                              channel: Y,
                                              application: eq,
                                              secureFramesVerified: eQ,
                                              isHovered: ev,
                                              popoutType: C,
                                          }),
                                    ed && !eu
                                        ? (0, i.jsx)("div", {
                                              className: a()(ea.PQ, {
                                                  [ea.pU]: !em && (eV || null != eF),
                                                  [ea.JB]: eP && !eU && !em && !eV,
                                              }),
                                              style: em || eV ? void 0 : e5,
                                          })
                                        : null,
                                ],
                            }),
                        }),
                        eS && eT && ev && (0, i.jsx)(q.A, { currentUserId: ej, participant: f }),
                        (0, i.jsx)(S.A, { isFiring: eN, callTileRef: e3.current }),
                    ],
                }),
            }),
        });
    });
function ed(e) {
    let { participantType: t, platform: n, className: l } = e;
    if (t === en.lp.STREAM)
        return n === en.J7.XBOX
            ? (0, i.jsx)(K.A, { className: l })
            : (0, i.jsx)(u.kN9, { size: "md", color: "currentColor", className: l });
    switch (n) {
        case en.J7.MOBILE:
            return (0, i.jsx)(u.u6o, { size: "xs", color: "currentColor", className: l });
        case en.J7.XBOX:
            return (0, i.jsx)(K.A, { className: l });
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
        a = l.useMemo(() => (0, C.A)(t, n), [t, n]),
        r = (0, o.bG)([v.A], () => v.A.getIsAlwaysOnTop(a)),
        d = l.useCallback(() => {
            y.setAlwaysOnTop(a, !r);
        }, [a, r]);
    return W.isPlatformEmbedded && Y.Ay.supportsFeature(et.BYE.POPOUT_WINDOWS)
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
            ignored: m,
            participantId: p,
            participantType: _,
            participantUserId: x,
            channel: C,
            platform: N,
            secureFramesVerified: b,
            onContextMenu: S,
            muted: T,
            deafened: v,
            localMuted: y,
            serverMuted: j,
            serverDeafened: R,
            hasVideo: O,
            hideAudioIcon: L,
            onToggleMute: M,
            popoutType: D,
        } = e,
        G = (0, o.bG)([w.Ay], () => null != x && w.Ay.isLocalVideoAutoDisabled(x, (0, g.A)(_)), [x, _]),
        U = (0, E.A)({ userId: x, guildId: C.getGuildId() }),
        P = (0, I.a)({ displayNameStyles: U }),
        k = (0, Z.Y)(s),
        V = (0, Z.V)(s),
        [B, F] = l.useState(!1);
    l.useEffect(() => {
        let e = !1,
            t = () => {
                e !== H.A.isOpen() && ((e = H.A.isOpen()) || F(!1));
            };
        return H.A.addChangeListener(t), () => H.A.removeChangeListener(t);
    }, []);
    let K = !L && _ === en.lp.STREAM && O && (!V || y),
        W = (function (e) {
            let { localMuted: t, serverMuted: n, serverDeafened: i, deafened: l, muted: s } = e;
            return i ? u.TJE : n ? u.O1p : l ? u.cQT : t ? u.O1p : s ? u.z0P : null;
        })({ localMuted: y, serverMuted: j, serverDeafened: R, deafened: v, muted: T }),
        Y = [];
    return (
        r
            ? D === f.N.CALL_TILE &&
              Y.push((0, i.jsx)(eu, { channelId: C.id, participantId: p, hideWhenInactive: !B }, "stay-on-top"))
            : (Y.push(
                  (0, i.jsx)(
                      ec,
                      {
                          onClick: (e) => {
                              e.stopPropagation(), F(!0), S(e, !0, en.GK.THREE_DOT);
                          },
                          tooltipText: es.intl.string(es.t["+1H47t"]),
                          icon: u.jNK,
                          hideWhenInactive: !B,
                      },
                      "options",
                  ),
              ),
              K &&
                  Y.push(
                      (0, i.jsx)(
                          ec,
                          {
                              onClick: M,
                              tooltipText: y ? es.intl.string(es.t.YqAjXy) : es.intl.string(es.t.w4m945),
                              icon: y ? u._RO : u.HKD,
                              hideWhenInactive: !y && !B,
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
                !k &&
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
                                    m
                                        ? (0, i.jsx)("div", {
                                              className: ea.PP,
                                              children: (0, i.jsx)(u.G3N, { size: "lg", className: ea.Q6 }),
                                          })
                                        : null,
                                    t
                                        ? null
                                        : (0, i.jsx)(ed, {
                                              participantType: _,
                                              platform: N,
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
                            Y.length > 0 ? (0, i.jsx)("div", { className: ea._v, children: Y }) : null,
                        ],
                    }),
            ],
        })
    );
});
eh.displayName = "CallTileOverlay";
let eA = b.$,
    em = eo;
