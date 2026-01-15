n.d(t, { Z: () => ev }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(907862),
    o = n(481060),
    s = n(287734),
    c = n(918222),
    u = n(168107),
    d = n(480916),
    p = n(100527),
    f = n(906732),
    h = n(358221),
    g = n(659580),
    m = n(793865),
    b = n(575175),
    y = n(522651),
    v = n(795318),
    O = n(258609),
    j = n(74299),
    x = n(924301),
    C = n(459502),
    E = n(856691),
    S = n(728285),
    _ = n(357156),
    I = n(923973),
    P = n(829750),
    Z = n(189771),
    N = n(294629),
    T = n(793319),
    A = n(987329),
    w = n(560688),
    R = n(937995),
    D = n(390322),
    M = n(871499),
    k = n(88479),
    L = n(386000),
    U = n(25827),
    G = n(314897),
    B = n(131951),
    F = n(496675),
    H = n(944486),
    V = n(594174),
    z = n(881824),
    W = n(471253),
    K = n(200498),
    Y = n(146085),
    q = n(88751),
    X = n(427679),
    Q = n(368442),
    J = n(255726),
    $ = n(485287),
    ee = n(754277),
    et = n(719100),
    en = n(923083),
    er = n(184805),
    ei = n(430104),
    el = n(643632),
    ea = n(270295),
    eo = n(354459),
    es = n(388032),
    ec = n(547565),
    eu = n(73377);
function ed(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.ZP)(),
        l = (0, er.Z)(t.id),
        [s, p] = (0, ea.Z)(t),
        h = (0, en._)(t),
        g = (0, ei.to)(),
        m = (0, ei.$s)(),
        b = i.useRef(null),
        [v, O] = (0, c.R)("age-verification-stage-popover-dismissed", !1),
        j = i.useContext(R.h9);
    if (l) return null;
    let x = m && !v;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(M.d, {
                ref: b,
                isTrayButton: !0,
                isActive: s,
                label: (function (e, t, n, r) {
                    let i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !i && r
                        ? null
                        : n
                          ? es.intl.string(es.t.NzITVo)
                          : e
                            ? es.intl.string(es.t.GCimTk)
                            : t
                              ? es.intl.string(es.t.hLbG5N)
                              : es.intl.string(es.t.e4WMvx);
                })(s, h, g, m, v),
                iconComponent: g ? o.XuQ : o.V9,
                onClick: () => {
                    (0, y.v)(n, y.d.REQUEST_TO_SPEAK, !s),
                        O(!0),
                        g ? u.Z.showAgeVerificationGetStartedModal({ entryPoint: d.cU.STAGE_CHANNEL_RAISE_HAND }) : p();
                },
                color: s ? "green" : void 0,
                disabled: !h && !s,
            }),
            x &&
                (0, r.jsx)(a.J2, {
                    targetElementRef: b,
                    graphic: {
                        type: "image",
                        src: eu.Z,
                    },
                    gradientColor: "blue",
                    title: es.intl.string(es.t.zvubnM),
                    body: es.intl.string(es.t["/wx+J2"]),
                    shouldShow: !j,
                    actions: [
                        {
                            text: es.intl.string(es.t.KXVgjt),
                            onClick: () => {
                                u.Z.showAgeVerificationGetStartedModal({
                                    entryPoint: d.cU.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
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
        n = (0, l.e7)([H.Z], () => H.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)("div", {
        className: ec.container,
        children: [
            (0, r.jsxs)("div", {
                className: ec.buttonSection,
                children: [
                    (0, r.jsx)(em, { channelId: t.id }),
                    n ? (0, r.jsx)(ed, { channel: t }) : null,
                    (0, r.jsx)(A.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(eh, { channel: t }),
        ],
    });
});
function ef(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.ZP)();
    return (0, r.jsx)(M.d, {
        isTrayButton: !0,
        onClick: () => {
            if (((0, y.v)(n, y.d.SPEAK_ON_STAGE), (0, ei.u1)(t.id)))
                return void u.Z.showAgeVerificationGetStartedModal({ entryPoint: d.cU.STAGE_CHANNEL_RAISE_HAND });
            (0, W.RK)(t, !1);
        },
        iconComponent: o.Lrb,
        label: es.intl.string(es.t["8Joh+p"]),
    });
}
function eh(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, S.bp)(),
        { canManageGuildEvent: c } = (0, _.XJ)(t),
        u = (0, l.e7)([X.Z], () => X.Z.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, l.e7)([x.ZP], () => x.ZP.getGuildScheduledEvent(null == u ? void 0 : u.guild_scheduled_event_id)),
        { suppress: h } = (0, N.Z)(t),
        g = G.default.getId(),
        [m] = (0, ea.Z)(t),
        b = q.ZP.isModerator(g, t.id),
        O = (0, K.B)(t.id),
        j = c(d),
        { parentAnalyticsLocation: C } = (0, f.ZP)(),
        E = i.useRef(null),
        I = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                if (((0, y.v)(p.Z.VOICE_CONTROL_TRAY, y.d.DISCONNECT), (0, et.Z)(t))) return void (0, z.Us)(t, n);
                s.default.disconnect();
            })({
                channel: t,
                appContext: a,
            });
    return (b || j) && null != u
        ? (0, r.jsx)(o.yRy, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(D.Z, {
                      children: (0, r.jsx)(o.v2r, {
                          navId: "exit-options",
                          "aria-label": es.intl.string(es.t["3Uj+2p"]),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, v.u)("End Stage", C, { entrypoint: eo.A5.CARET }),
                          children: (0, r.jsx)(o.sNh, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, z.Ev)(t, a),
                              label: es.intl.string(es.t["Fmx5y/"]),
                              icon: o.k$p,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: o.yRy.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: i } = t;
                  return (0, r.jsx)(k.Z, {
                      ref: E,
                      label: es.intl.string(es.t.c6qKwr),
                      onClick: I,
                      onPopoutClick: n,
                      popoutOpen: i,
                  });
              },
          })
        : (h && !O) || m
          ? (0, r.jsx)(k.Z, {
                label: es.intl.string(es.t.SMKyih),
                onClick: I,
            })
          : (0, r.jsx)(k.Z, {
                label: es.intl.string(es.t.c6qKwr),
                onClick: I,
            });
}
function eg(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.ZP)();
    return (0, r.jsx)(M.d, {
        isTrayButton: !0,
        iconComponent: o.zRq,
        label: es.intl.string(es.t.ezLpY6),
        onClick: () => {
            (0, y.v)(n, y.d.MOVE_TO_AUDIENCE), (0, W.yi)(t);
        },
    });
}
function em(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, f.ZP)(),
        i = (0, l.e7)([ee.Z], () => ee.Z.isMuted()),
        a = (0, $.pp)(t),
        s = (0, l.e7)([ee.Z], () => ee.Z.shouldPlay());
    return a
        ? (0, r.jsx)(M.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? es.intl.string(es.t.ScHlfl) : es.intl.string(es.t.zqxfrf),
              iconComponent: i ? o.xjP : o.RZG,
              color: i ? void 0 : "green",
              onClick: () => {
                  (0, y.v)(n, y.d.STAGE_MUSIC, i), (0, J.v)(!i);
              },
          })
        : (0, r.jsx)(M.d, {
              isTrayButton: !0,
              isActive: s,
              label: s ? es.intl.string(es.t.zqxfrf) : es.intl.string(es.t.ScHlfl),
              iconComponent: s ? o.RZG : o.xjP,
              color: s ? "green" : void 0,
              onClick: () => {
                  (0, y.v)(n, y.d.STAGE_MUSIC, !s), (0, J.z)(!s);
              },
          });
}
let eb = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, f.ZP)(),
        { suppress: a, selfMute: s, mute: c } = (0, N.Z)(t),
        u = (0, K.B)(t.id),
        d = (0, er.Z)(t.id),
        p = (0, l.e7)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: y, enabled: x } = (0, I.Z)(),
        C = (0, Z.Z)(t),
        { limit: E, reachedLimit: S } = (0, P.Z)(t),
        _ = (0, l.e7)([V.default], () => V.default.getCurrentUser()),
        R = (0, l.e7)([B.Z], () => (0, j.Z)(B.Z)),
        M = (0, l.e7)([H.Z], () => H.Z.getVoiceChannelId() === t.id, [t.id]),
        k = (0, l.e7)([h.Z], () => h.Z.getStreamParticipants(t.id)[0], [t.id]),
        G = (0, Q.PK)(t.id),
        F = E > 0,
        z = (S && !G) || (null != k && k.user.id !== (null == _ ? void 0 : _.id)),
        W = (0, v.u)("AudioDeviceMenu", n, { entrypoint: eo.A5.CARET }),
        Y = i.useRef(null),
        q = i.useRef(null);
    if (null == _) return null;
    let X = (0, r.jsx)(o.yRy, {
        targetElementRef: Y,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(D.Z, {
                children: (0, r.jsx)(m.Z, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, v.u)("VideoDeviceMenu", n, { entrypoint: eo.A5.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: o.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(U.C, {
                ref: Y,
                centerButton: !0,
                hasPermission: C,
                enabled: x,
                cameraUnavailable: y,
                onChange: T.r,
                onCameraUnavailable: w.Z,
                channelLimitReached: S,
                channelLimit: E,
                popoutOpen: i,
                onPopoutClick: n,
            });
        },
    });
    return (0, r.jsxs)("div", {
        className: ec.wrapper,
        children: [
            M && !a
                ? (0, r.jsxs)("div", {
                      className: ec.buttonSection,
                      children: [
                          (0, r.jsx)(o.yRy, {
                              targetElementRef: q,
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
                              animation: o.yRy.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: i } = t;
                                  return (0, r.jsx)(L.Z, {
                                      ref: q,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: s,
                                      serverMute: c,
                                      suppress: a,
                                      popoutOpen: i,
                                      onClick: () => (0, b.Z)(c, a, "Stage Channel Controls"),
                                      awaitingRemote: p,
                                  });
                              },
                          }),
                          F && X,
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: ec.buttonSection,
                children: [
                    M && !a && F
                        ? (0, r.jsx)(T.NZ, {
                              channel: t,
                              currentUser: _,
                              exitFullScreen: () => null,
                              canGoLive: R,
                              hasPermission: C,
                              disabled: z,
                          })
                        : null,
                    (0, r.jsx)(em, { channelId: t.id }),
                    M && (0, r.jsx)(ed, { channel: t }),
                    M && u && a && d && (0, r.jsx)(ef, { channel: t }),
                    M && !a && (0, r.jsx)(eg, { channel: t }),
                    (0, r.jsx)(A.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(eh, { channel: t }),
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
            (0, r.jsx)(eh, { channel: t }),
        ],
    });
}
let ev = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, er.Z)(t.id),
        a = (0, K.B)(t.id),
        o = (0, l.e7)([F.Z], () => F.Z.can(Y.yP, t), [t]),
        s = (0, ei.sP)(),
        c = (0, el.Z)(t.id),
        u = (0, l.e7)([h.Z], () => (null != t ? h.Z.getSelectedParticipant(t.id) : null)),
        d = !c && null == u;
    return n
        ? (0, r.jsx)(ey, { channel: t })
        : i || a
          ? (0, r.jsxs)("div", {
                className: ec.containerColumn,
                children: [
                    (0, r.jsxs)("div", {
                        className: ec.eventPrompts,
                        children: [
                            d ? (0, r.jsx)(C.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)("div", { className: ec.separator }),
                            d && o && !s
                                ? (0, r.jsx)(E.Z, {
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
