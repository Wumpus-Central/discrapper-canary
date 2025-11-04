n.d(t, { Z: () => eg }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(168107),
    c = n(480916),
    d = n(100527),
    u = n(906732),
    p = n(358221),
    h = n(659580),
    f = n(793865),
    g = n(575175),
    m = n(522651),
    b = n(795318),
    _ = n(258609),
    y = n(74299),
    x = n(924301),
    v = n(459502),
    j = n(856691),
    O = n(728285),
    C = n(357156),
    I = n(923973),
    S = n(829750),
    E = n(189771),
    Z = n(294629),
    P = n(793319),
    T = n(987329),
    N = n(560688),
    R = n(390322),
    w = n(871499),
    A = n(88479),
    D = n(386000),
    L = n(25827),
    M = n(314897),
    k = n(131951),
    U = n(496675),
    G = n(944486),
    H = n(594174),
    F = n(881824),
    B = n(471253),
    V = n(200498),
    z = n(146085),
    W = n(88751),
    Y = n(427679),
    q = n(368442),
    K = n(600518),
    Q = n(485287),
    X = n(754277),
    J = n(719100),
    $ = n(923083),
    ee = n(184805),
    et = n(430104),
    en = n(643632),
    er = n(270295),
    ei = n(354459),
    el = n(388032),
    ea = n(769265);
function es(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)(),
        i = (0, ee.Z)(t.id),
        [l, s] = (0, er.Z)(t),
        d = (0, $._)(t);
    return i
        ? null
        : (0, r.jsx)(w.d, {
              isTrayButton: !0,
              isActive: l,
              label: l ? el.intl.string(el.t.GCimTk) : d ? el.intl.string(el.t.hLbG5N) : el.intl.string(el.t.e4WMvx),
              iconComponent: a.V9,
              onClick: () => {
                  if (((0, m.v)(n, m.d.REQUEST_TO_SPEAK, !l), (0, et.u1)()))
                      return void o.Z.showAgeVerificationGetStartedModal({ entryPoint: c.cU.STAGE_CHANNEL_RAISE_HAND });
                  s();
              },
              color: l ? "green" : void 0,
              disabled: !d && !l,
          });
}
let eo = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, l.e7)([G.Z], () => G.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)("div", {
        className: ea.container,
        children: [
            (0, r.jsxs)("div", {
                className: ea.buttonSection,
                children: [
                    (0, r.jsx)(ep, { channelId: t.id }),
                    n ? (0, r.jsx)(es, { channel: t }) : null,
                    (0, r.jsx)(T.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(ed, { channel: t }),
        ],
    });
});
function ec(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)();
    return (0, r.jsx)(w.d, {
        isTrayButton: !0,
        onClick: () => {
            if (((0, m.v)(n, m.d.SPEAK_ON_STAGE), (0, et.u1)()))
                return void o.Z.showAgeVerificationGetStartedModal({ entryPoint: c.cU.STAGE_CHANNEL_RAISE_HAND });
            (0, B.RK)(t, !1);
        },
        iconComponent: a.Lrb,
        label: el.intl.string(el.t["8Joh+p"]),
    });
}
function ed(e) {
    let { channel: t, onSelect: n } = e,
        o = (0, O.bp)(),
        { canManageGuildEvent: c } = (0, C.XJ)(t),
        p = (0, l.e7)([Y.Z], () => Y.Z.getStageInstanceByChannel(t.id), [t.id]),
        h = (0, l.e7)([x.ZP], () => x.ZP.getGuildScheduledEvent(null == p ? void 0 : p.guild_scheduled_event_id)),
        { suppress: f } = (0, Z.Z)(t),
        g = M.default.getId(),
        [_] = (0, er.Z)(t),
        y = W.ZP.isModerator(g, t.id),
        v = (0, V.B)(t.id),
        j = c(h),
        { parentAnalyticsLocation: I } = (0, u.ZP)(),
        S = i.useRef(null),
        E = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                if (((0, m.v)(d.Z.VOICE_CONTROL_TRAY, m.d.DISCONNECT), (0, J.Z)(t))) return void (0, F.Us)(t, n);
                s.default.disconnect();
            })({
                channel: t,
                appContext: o,
            });
    return (y || j) && null != p
        ? (0, r.jsx)(a.yRy, {
              targetElementRef: S,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(R.Z, {
                      children: (0, r.jsx)(a.v2r, {
                          navId: "exit-options",
                          "aria-label": el.intl.string(el.t["3Uj+2p"]),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, b.u)("End Stage", I, { entrypoint: ei.A5.CARET }),
                          children: (0, r.jsx)(a.sNh, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, F.Ev)(t, o),
                              label: el.intl.string(el.t["Fmx5y/"]),
                              icon: a.k$p,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: a.yRy.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: i } = t;
                  return (0, r.jsx)(A.Z, {
                      ref: S,
                      label: el.intl.string(el.t.c6qKwr),
                      onClick: E,
                      onPopoutClick: n,
                      popoutOpen: i,
                  });
              },
          })
        : (f && !v) || _
          ? (0, r.jsx)(A.Z, {
                label: el.intl.string(el.t.SMKyih),
                onClick: E,
            })
          : (0, r.jsx)(A.Z, {
                label: el.intl.string(el.t.c6qKwr),
                onClick: E,
            });
}
function eu(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)();
    return (0, r.jsx)(w.d, {
        isTrayButton: !0,
        iconComponent: a.zRq,
        label: el.intl.string(el.t.ezLpY6),
        onClick: () => {
            (0, m.v)(n, m.d.MOVE_TO_AUDIENCE), (0, B.yi)(t);
        },
    });
}
function ep(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)(),
        i = (0, l.e7)([X.Z], () => X.Z.isMuted()),
        s = (0, Q.pp)(t),
        o = (0, l.e7)([X.Z], () => X.Z.shouldPlay());
    return s
        ? (0, r.jsx)(w.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? el.intl.string(el.t.ScHlfl) : el.intl.string(el.t.zqxfrf),
              iconComponent: i ? a.xjP : a.RZG,
              color: i ? void 0 : "green",
              onClick: () => {
                  (0, m.v)(n, m.d.STAGE_MUSIC, i), (0, K.v)(!i);
              },
          })
        : (0, r.jsx)(w.d, {
              isTrayButton: !0,
              isActive: o,
              label: o ? el.intl.string(el.t.zqxfrf) : el.intl.string(el.t.ScHlfl),
              iconComponent: o ? a.RZG : a.xjP,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, m.v)(n, m.d.STAGE_MUSIC, !o), (0, K.z)(!o);
              },
          });
}
let eh = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)(),
        { suppress: s, selfMute: o, mute: c } = (0, Z.Z)(t),
        d = (0, V.B)(t.id),
        m = (0, ee.Z)(t.id),
        x = (0, l.e7)([_.default], () => null != _.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: v, enabled: j } = (0, I.Z)(),
        O = (0, E.Z)(t),
        { limit: C, reachedLimit: w } = (0, S.Z)(t),
        A = (0, l.e7)([H.default], () => H.default.getCurrentUser()),
        M = (0, l.e7)([k.Z], () => (0, y.Z)(k.Z)),
        U = (0, l.e7)([G.Z], () => G.Z.getVoiceChannelId() === t.id, [t.id]),
        F = (0, l.e7)([p.Z], () => p.Z.getStreamParticipants(t.id)[0], [t.id]),
        B = (0, q.PK)(t.id),
        z = C > 0,
        W = (w && !B) || (null != F && F.user.id !== (null == A ? void 0 : A.id)),
        Y = (0, b.u)("AudioDeviceMenu", n, { entrypoint: ei.A5.CARET }),
        K = i.useRef(null),
        Q = i.useRef(null);
    if (null == A) return null;
    let X = (0, r.jsx)(a.yRy, {
        targetElementRef: K,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(R.Z, {
                children: (0, r.jsx)(f.Z, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, b.u)("VideoDeviceMenu", n, { entrypoint: ei.A5.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: a.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(L.C, {
                ref: K,
                centerButton: !0,
                hasPermission: O,
                enabled: j,
                cameraUnavailable: v,
                onChange: P.r,
                onCameraUnavailable: N.Z,
                channelLimitReached: w,
                channelLimit: C,
                popoutOpen: i,
                onPopoutClick: n,
            });
        },
    });
    return (0, r.jsxs)("div", {
        className: ea.wrapper,
        children: [
            U && !s
                ? (0, r.jsxs)("div", {
                      className: ea.buttonSection,
                      children: [
                          (0, r.jsx)(a.yRy, {
                              targetElementRef: Q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(R.Z, {
                                      children: (0, r.jsx)(h.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: Y,
                                      }),
                                  });
                              },
                              align: "right",
                              position: "top",
                              spacing: 16,
                              animation: a.yRy.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: i } = t;
                                  return (0, r.jsx)(D.Z, {
                                      ref: Q,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: c,
                                      suppress: s,
                                      popoutOpen: i,
                                      onClick: () => (0, g.Z)(c, s, "Stage Channel Controls"),
                                      awaitingRemote: x,
                                  });
                              },
                          }),
                          z && X,
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: ea.buttonSection,
                children: [
                    U && !s && z
                        ? (0, r.jsx)(P.NZ, {
                              channel: t,
                              currentUser: A,
                              exitFullScreen: () => null,
                              canGoLive: M,
                              hasPermission: O,
                              disabled: W,
                          })
                        : null,
                    (0, r.jsx)(ep, { channelId: t.id }),
                    U && (0, r.jsx)(es, { channel: t }),
                    U && d && s && m && (0, r.jsx)(ec, { channel: t }),
                    U && !s && (0, r.jsx)(eu, { channel: t }),
                    (0, r.jsx)(T.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(ed, { channel: t }),
        ],
    });
});
function ef(e) {
    let { channel: t } = e;
    return (0, r.jsxs)("div", {
        className: ea.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: ea.buttonSection,
                children: (0, r.jsx)(ep, { channelId: t.id }),
            }),
            (0, r.jsx)(ed, { channel: t }),
        ],
    });
}
let eg = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, ee.Z)(t.id),
        a = (0, V.B)(t.id),
        s = (0, l.e7)([U.Z], () => U.Z.can(z.yP, t), [t]),
        o = (0, et.sP)(),
        c = (0, en.Z)(t.id),
        d = (0, l.e7)([p.Z], () => (null != t ? p.Z.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, r.jsx)(ef, { channel: t })
        : i || a
          ? (0, r.jsxs)("div", {
                className: ea.containerColumn,
                children: [
                    (0, r.jsxs)("div", {
                        className: ea.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(v.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)("div", { className: ea.separator }),
                            u && s && !o
                                ? (0, r.jsx)(j.Z, {
                                      highlight: !0,
                                      channel: t,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: ea.separator }),
                        ],
                    }),
                    (0, r.jsx)(eh, { channel: t }),
                ],
            })
          : (0, r.jsx)(eo, { channel: t });
});
