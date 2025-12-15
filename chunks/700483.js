n.d(t, { Z: () => eO }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(907862),
    s = n(481060),
    o = n(287734),
    c = n(918222),
    d = n(168107),
    u = n(480916),
    p = n(100527),
    h = n(906732),
    f = n(358221),
    g = n(659580),
    m = n(793865),
    b = n(575175),
    y = n(522651),
    O = n(795318),
    x = n(258609),
    j = n(74299),
    v = n(924301),
    C = n(459502),
    I = n(856691),
    _ = n(728285),
    S = n(357156),
    E = n(923973),
    Z = n(829750),
    P = n(189771),
    T = n(294629),
    N = n(793319),
    R = n(987329),
    w = n(560688),
    A = n(937995),
    D = n(390322),
    L = n(871499),
    M = n(88479),
    k = n(386000),
    U = n(25827),
    G = n(314897),
    H = n(131951),
    F = n(496675),
    B = n(944486),
    V = n(594174),
    z = n(881824),
    W = n(471253),
    Y = n(200498),
    q = n(146085),
    K = n(88751),
    Q = n(427679),
    X = n(368442),
    J = n(255726),
    $ = n(485287),
    ee = n(754277),
    et = n(719100),
    en = n(923083),
    er = n(184805),
    ei = n(430104),
    el = n(643632),
    ea = n(270295),
    es = n(354459),
    eo = n(388032),
    ec = n(547565),
    ed = n(73377);
function eu(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)(),
        l = (0, er.Z)(t.id),
        [o, p] = (0, ea.Z)(t),
        f = (0, en._)(t),
        g = (0, ei.to)(),
        m = i.useRef(null),
        [b, O] = (0, c.R)("age-verification-stage-popover-dismissed", !1),
        x = i.useContext(A.h9);
    if (l) return null;
    let j = g && !b;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.d, {
                ref: m,
                isTrayButton: !0,
                isActive: o,
                label: (function (e, t, n) {
                    let r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    return !r && n
                        ? null
                        : n
                          ? eo.intl.string(eo.t.NzITVo)
                          : e
                            ? eo.intl.string(eo.t.GCimTk)
                            : t
                              ? eo.intl.string(eo.t.hLbG5N)
                              : eo.intl.string(eo.t.e4WMvx);
                })(o, f, g, b),
                iconComponent: g ? s.XuQ : s.V9,
                iconColor: g ? "var(--icon-feedback-critical)" : void 0,
                onClick: () => {
                    (0, y.v)(n, y.d.REQUEST_TO_SPEAK, !o),
                        O(!0),
                        g ? d.Z.showAgeVerificationGetStartedModal({ entryPoint: u.cU.STAGE_CHANNEL_RAISE_HAND }) : p();
                },
                color: o ? "green" : void 0,
                disabled: !f && !o,
            }),
            j &&
                (0, r.jsx)(a.J2, {
                    targetElementRef: m,
                    graphic: {
                        type: "image",
                        src: ed.Z,
                    },
                    gradientColor: "blue",
                    title: eo.intl.string(eo.t.zvubnM),
                    body: eo.intl.string(eo.t["/wx+J2"]),
                    shouldShow: !x,
                    actions: [
                        {
                            text: eo.intl.string(eo.t.KXVgjt),
                            onClick: () => {
                                d.Z.showAgeVerificationGetStartedModal({
                                    entryPoint: u.cU.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    O(!0);
                            },
                        },
                    ],
                    onRequestClose: () => O(!0),
                }),
        ],
    });
}
let ep = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, l.e7)([B.Z], () => B.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)("div", {
        className: ec.container,
        children: [
            (0, r.jsxs)("div", {
                className: ec.buttonSection,
                children: [
                    (0, r.jsx)(em, { channelId: t.id }),
                    n ? (0, r.jsx)(eu, { channel: t }) : null,
                    (0, r.jsx)(R.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(ef, { channel: t }),
        ],
    });
});
function eh(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)();
    return (0, r.jsx)(L.d, {
        isTrayButton: !0,
        onClick: () => {
            if (((0, y.v)(n, y.d.SPEAK_ON_STAGE), (0, ei.u1)()))
                return void d.Z.showAgeVerificationGetStartedModal({ entryPoint: u.cU.STAGE_CHANNEL_RAISE_HAND });
            (0, W.RK)(t, !1);
        },
        iconComponent: s.Lrb,
        label: eo.intl.string(eo.t["8Joh+p"]),
    });
}
function ef(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, _.bp)(),
        { canManageGuildEvent: c } = (0, S.XJ)(t),
        d = (0, l.e7)([Q.Z], () => Q.Z.getStageInstanceByChannel(t.id), [t.id]),
        u = (0, l.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(null == d ? void 0 : d.guild_scheduled_event_id)),
        { suppress: f } = (0, T.Z)(t),
        g = G.default.getId(),
        [m] = (0, ea.Z)(t),
        b = K.ZP.isModerator(g, t.id),
        x = (0, Y.B)(t.id),
        j = c(u),
        { parentAnalyticsLocation: C } = (0, h.ZP)(),
        I = i.useRef(null),
        E = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                if (((0, y.v)(p.Z.VOICE_CONTROL_TRAY, y.d.DISCONNECT), (0, et.Z)(t))) return void (0, z.Us)(t, n);
                o.default.disconnect();
            })({
                channel: t,
                appContext: a,
            });
    return (b || j) && null != d
        ? (0, r.jsx)(s.yRy, {
              targetElementRef: I,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(D.Z, {
                      children: (0, r.jsx)(s.v2r, {
                          navId: "exit-options",
                          "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, O.u)("End Stage", C, { entrypoint: es.A5.CARET }),
                          children: (0, r.jsx)(s.sNh, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, z.Ev)(t, a),
                              label: eo.intl.string(eo.t["Fmx5y/"]),
                              icon: s.k$p,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: s.yRy.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: i } = t;
                  return (0, r.jsx)(M.Z, {
                      ref: I,
                      label: eo.intl.string(eo.t.c6qKwr),
                      onClick: E,
                      onPopoutClick: n,
                      popoutOpen: i,
                  });
              },
          })
        : (f && !x) || m
          ? (0, r.jsx)(M.Z, {
                label: eo.intl.string(eo.t.SMKyih),
                onClick: E,
            })
          : (0, r.jsx)(M.Z, {
                label: eo.intl.string(eo.t.c6qKwr),
                onClick: E,
            });
}
function eg(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)();
    return (0, r.jsx)(L.d, {
        isTrayButton: !0,
        iconComponent: s.zRq,
        label: eo.intl.string(eo.t.ezLpY6),
        onClick: () => {
            (0, y.v)(n, y.d.MOVE_TO_AUDIENCE), (0, W.yi)(t);
        },
    });
}
function em(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)(),
        i = (0, l.e7)([ee.Z], () => ee.Z.isMuted()),
        a = (0, $.pp)(t),
        o = (0, l.e7)([ee.Z], () => ee.Z.shouldPlay());
    return a
        ? (0, r.jsx)(L.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
              iconComponent: i ? s.xjP : s.RZG,
              color: i ? void 0 : "green",
              onClick: () => {
                  (0, y.v)(n, y.d.STAGE_MUSIC, i), (0, J.v)(!i);
              },
          })
        : (0, r.jsx)(L.d, {
              isTrayButton: !0,
              isActive: o,
              label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
              iconComponent: o ? s.RZG : s.xjP,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, y.v)(n, y.d.STAGE_MUSIC, !o), (0, J.z)(!o);
              },
          });
}
let eb = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)(),
        { suppress: a, selfMute: o, mute: c } = (0, T.Z)(t),
        d = (0, Y.B)(t.id),
        u = (0, er.Z)(t.id),
        p = (0, l.e7)([x.default], () => null != x.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: y, enabled: v } = (0, E.Z)(),
        C = (0, P.Z)(t),
        { limit: I, reachedLimit: _ } = (0, Z.Z)(t),
        S = (0, l.e7)([V.default], () => V.default.getCurrentUser()),
        A = (0, l.e7)([H.Z], () => (0, j.Z)(H.Z)),
        L = (0, l.e7)([B.Z], () => B.Z.getVoiceChannelId() === t.id, [t.id]),
        M = (0, l.e7)([f.Z], () => f.Z.getStreamParticipants(t.id)[0], [t.id]),
        G = (0, X.PK)(t.id),
        F = I > 0,
        z = (_ && !G) || (null != M && M.user.id !== (null == S ? void 0 : S.id)),
        W = (0, O.u)("AudioDeviceMenu", n, { entrypoint: es.A5.CARET }),
        q = i.useRef(null),
        K = i.useRef(null);
    if (null == S) return null;
    let Q = (0, r.jsx)(s.yRy, {
        targetElementRef: q,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(D.Z, {
                children: (0, r.jsx)(m.Z, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, O.u)("VideoDeviceMenu", n, { entrypoint: es.A5.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: s.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(U.C, {
                ref: q,
                centerButton: !0,
                hasPermission: C,
                enabled: v,
                cameraUnavailable: y,
                onChange: N.r,
                onCameraUnavailable: w.Z,
                channelLimitReached: _,
                channelLimit: I,
                popoutOpen: i,
                onPopoutClick: n,
            });
        },
    });
    return (0, r.jsxs)("div", {
        className: ec.wrapper,
        children: [
            L && !a
                ? (0, r.jsxs)("div", {
                      className: ec.buttonSection,
                      children: [
                          (0, r.jsx)(s.yRy, {
                              targetElementRef: K,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(D.Z, {
                                      children: (0, r.jsx)(g.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: W,
                                      }),
                                  });
                              },
                              align: "right",
                              position: "top",
                              spacing: 16,
                              animation: s.yRy.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: i } = t;
                                  return (0, r.jsx)(k.Z, {
                                      ref: K,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: c,
                                      suppress: a,
                                      popoutOpen: i,
                                      onClick: () => (0, b.Z)(c, a, "Stage Channel Controls"),
                                      awaitingRemote: p,
                                  });
                              },
                          }),
                          F && Q,
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: ec.buttonSection,
                children: [
                    L && !a && F
                        ? (0, r.jsx)(N.NZ, {
                              channel: t,
                              currentUser: S,
                              exitFullScreen: () => null,
                              canGoLive: A,
                              hasPermission: C,
                              disabled: z,
                          })
                        : null,
                    (0, r.jsx)(em, { channelId: t.id }),
                    L && (0, r.jsx)(eu, { channel: t }),
                    L && d && a && u && (0, r.jsx)(eh, { channel: t }),
                    L && !a && (0, r.jsx)(eg, { channel: t }),
                    (0, r.jsx)(R.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(ef, { channel: t }),
        ],
    });
});
function ey(e) {
    let { channel: t } = e;
    return (0, r.jsxs)("div", {
        className: ec.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: ec.buttonSection,
                children: (0, r.jsx)(em, { channelId: t.id }),
            }),
            (0, r.jsx)(ef, { channel: t }),
        ],
    });
}
let eO = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, er.Z)(t.id),
        a = (0, Y.B)(t.id),
        s = (0, l.e7)([F.Z], () => F.Z.can(q.yP, t), [t]),
        o = (0, ei.sP)(),
        c = (0, el.Z)(t.id),
        d = (0, l.e7)([f.Z], () => (null != t ? f.Z.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, r.jsx)(ey, { channel: t })
        : i || a
          ? (0, r.jsxs)("div", {
                className: ec.containerColumn,
                children: [
                    (0, r.jsxs)("div", {
                        className: ec.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(C.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)("div", { className: ec.separator }),
                            u && s && !o
                                ? (0, r.jsx)(I.Z, {
                                      highlight: !0,
                                      channel: t,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: ec.separator }),
                        ],
                    }),
                    (0, r.jsx)(eb, { channel: t }),
                ],
            })
          : (0, r.jsx)(ep, { channel: t });
});
