n.d(t, { Z: () => eh }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(100527),
    c = n(906732),
    d = n(358221),
    u = n(659580),
    p = n(793865),
    h = n(575175),
    f = n(522651),
    g = n(795318),
    m = n(258609),
    b = n(74299),
    _ = n(924301),
    y = n(459502),
    x = n(856691),
    O = n(728285),
    j = n(357156),
    v = n(923973),
    C = n(829750),
    I = n(189771),
    S = n(294629),
    E = n(793319),
    Z = n(987329),
    P = n(560688),
    T = n(390322),
    N = n(871499),
    R = n(88479),
    w = n(386000),
    A = n(25827),
    D = n(314897),
    L = n(131951),
    M = n(496675),
    k = n(944486),
    U = n(594174),
    G = n(881824),
    H = n(471253),
    F = n(200498),
    B = n(146085),
    V = n(88751),
    z = n(427679),
    W = n(368442),
    Y = n(600518),
    q = n(485287),
    K = n(754277),
    Q = n(719100),
    X = n(923083),
    J = n(184805),
    $ = n(647767),
    ee = n(643632),
    et = n(270295),
    en = n(354459),
    er = n(388032),
    ei = n(769265);
function el(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)(),
        i = (0, J.Z)(t.id),
        [l, s] = (0, et.Z)(t),
        o = (0, X._)(t);
    return i
        ? null
        : (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: l,
              label: l ? er.intl.string(er.t.GCimTk) : o ? er.intl.string(er.t.hLbG5N) : er.intl.string(er.t.e4WMvx),
              iconComponent: a.V9,
              onClick: () => {
                  (0, f.v)(n, f.d.REQUEST_TO_SPEAK, !l), s();
              },
              color: l ? "green" : void 0,
              disabled: !o && !l,
          });
}
let ea = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)("div", {
        className: ei.container,
        children: [
            (0, r.jsxs)("div", {
                className: ei.buttonSection,
                children: [
                    (0, r.jsx)(ed, { channelId: t.id }),
                    n ? (0, r.jsx)(el, { channel: t }) : null,
                    (0, r.jsx)(Z.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(eo, { channel: t }),
        ],
    });
});
function es(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)();
    return (0, r.jsx)(N.d, {
        isTrayButton: !0,
        onClick: () => {
            (0, H.RK)(t, !1), (0, f.v)(n, f.d.SPEAK_ON_STAGE);
        },
        iconComponent: a.Lrb,
        label: er.intl.string(er.t["8Joh+p"]),
    });
}
function eo(e) {
    let { channel: t, onSelect: n } = e,
        d = (0, O.bp)(),
        { canManageGuildEvent: u } = (0, j.XJ)(t),
        p = (0, l.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id), [t.id]),
        h = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(null == p ? void 0 : p.guild_scheduled_event_id)),
        { suppress: m } = (0, S.Z)(t),
        b = D.default.getId(),
        [y] = (0, et.Z)(t),
        x = V.ZP.isModerator(b, t.id),
        v = (0, F.B)(t.id),
        C = u(h),
        { parentAnalyticsLocation: I } = (0, c.ZP)(),
        E = i.useRef(null),
        Z = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                if (((0, f.v)(o.Z.VOICE_CONTROL_TRAY, f.d.DISCONNECT), (0, Q.Z)(t))) return void (0, G.Us)(t, n);
                s.default.disconnect();
            })({
                channel: t,
                appContext: d,
            });
    return (x || C) && null != p
        ? (0, r.jsx)(a.yRy, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(T.Z, {
                      children: (0, r.jsx)(a.v2r, {
                          navId: "exit-options",
                          "aria-label": er.intl.string(er.t["3Uj+2p"]),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, g.u)("End Stage", I, { entrypoint: en.A5.CARET }),
                          children: (0, r.jsx)(a.sNh, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, G.Ev)(t, d),
                              label: er.intl.string(er.t["Fmx5y/"]),
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
                  return (0, r.jsx)(R.Z, {
                      ref: E,
                      label: er.intl.string(er.t.c6qKwr),
                      onClick: Z,
                      onPopoutClick: n,
                      popoutOpen: i,
                  });
              },
          })
        : (m && !v) || y
          ? (0, r.jsx)(R.Z, {
                label: er.intl.string(er.t.SMKyih),
                onClick: Z,
            })
          : (0, r.jsx)(R.Z, {
                label: er.intl.string(er.t.c6qKwr),
                onClick: Z,
            });
}
function ec(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)();
    return (0, r.jsx)(N.d, {
        isTrayButton: !0,
        iconComponent: a.zRq,
        label: er.intl.string(er.t.ezLpY6),
        onClick: () => {
            (0, f.v)(n, f.d.MOVE_TO_AUDIENCE), (0, H.yi)(t);
        },
    });
}
function ed(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)(),
        i = (0, l.e7)([K.Z], () => K.Z.isMuted()),
        s = (0, q.pp)(t),
        o = (0, l.e7)([K.Z], () => K.Z.shouldPlay());
    return s
        ? (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? er.intl.string(er.t.ScHlfl) : er.intl.string(er.t.zqxfrf),
              iconComponent: i ? a.xjP : a.RZG,
              color: i ? void 0 : "green",
              onClick: () => {
                  (0, f.v)(n, f.d.STAGE_MUSIC, i), (0, Y.v)(!i);
              },
          })
        : (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: o,
              label: o ? er.intl.string(er.t.zqxfrf) : er.intl.string(er.t.ScHlfl),
              iconComponent: o ? a.RZG : a.xjP,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, f.v)(n, f.d.STAGE_MUSIC, !o), (0, Y.z)(!o);
              },
          });
}
let eu = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)(),
        { suppress: s, selfMute: o, mute: f } = (0, S.Z)(t),
        _ = (0, F.B)(t.id),
        y = (0, J.Z)(t.id),
        x = (0, l.e7)([m.default], () => null != m.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: O, enabled: j } = (0, v.Z)(),
        N = (0, I.Z)(t),
        { limit: R, reachedLimit: D } = (0, C.Z)(t),
        M = (0, l.e7)([U.default], () => U.default.getCurrentUser()),
        G = (0, l.e7)([L.Z], () => (0, b.Z)(L.Z)),
        H = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]),
        B = (0, l.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        V = (0, W.PK)(t.id),
        z = R > 0,
        Y = (D && !V) || (null != B && B.user.id !== (null == M ? void 0 : M.id)),
        q = (0, g.u)("AudioDeviceMenu", n, { entrypoint: en.A5.CARET }),
        K = i.useRef(null),
        Q = i.useRef(null);
    if (null == M) return null;
    let X = (0, r.jsx)(a.yRy, {
        targetElementRef: K,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(T.Z, {
                children: (0, r.jsx)(p.Z, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, g.u)("VideoDeviceMenu", n, { entrypoint: en.A5.CARET }),
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
            return (0, r.jsx)(A.C, {
                ref: K,
                centerButton: !0,
                hasPermission: N,
                enabled: j,
                cameraUnavailable: O,
                onChange: E.r,
                onCameraUnavailable: P.Z,
                channelLimitReached: D,
                channelLimit: R,
                popoutOpen: i,
                onPopoutClick: n,
            });
        },
    });
    return (0, r.jsxs)("div", {
        className: ei.wrapper,
        children: [
            H && !s
                ? (0, r.jsxs)("div", {
                      className: ei.buttonSection,
                      children: [
                          (0, r.jsx)(a.yRy, {
                              targetElementRef: Q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(T.Z, {
                                      children: (0, r.jsx)(u.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: q,
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
                                  return (0, r.jsx)(w.Z, {
                                      ref: Q,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: f,
                                      suppress: s,
                                      popoutOpen: i,
                                      onClick: () => (0, h.Z)(f, s, "Stage Channel Controls"),
                                      awaitingRemote: x,
                                  });
                              },
                          }),
                          z && X,
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: ei.buttonSection,
                children: [
                    H && !s && z
                        ? (0, r.jsx)(E.NZ, {
                              channel: t,
                              currentUser: M,
                              exitFullScreen: () => null,
                              canGoLive: G,
                              hasPermission: N,
                              disabled: Y,
                          })
                        : null,
                    (0, r.jsx)(ed, { channelId: t.id }),
                    H && (0, r.jsx)(el, { channel: t }),
                    H && _ && s && y && (0, r.jsx)(es, { channel: t }),
                    H && !s && (0, r.jsx)(ec, { channel: t }),
                    (0, r.jsx)(Z.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(eo, { channel: t }),
        ],
    });
});
function ep(e) {
    let { channel: t } = e;
    return (0, r.jsxs)("div", {
        className: ei.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: ei.buttonSection,
                children: (0, r.jsx)(ed, { channelId: t.id }),
            }),
            (0, r.jsx)(eo, { channel: t }),
        ],
    });
}
let eh = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, J.Z)(t.id),
        a = (0, F.B)(t.id),
        s = (0, l.e7)([M.Z], () => M.Z.can(B.yP, t), [t]),
        o = (0, $.s)(),
        c = (0, ee.Z)(t.id),
        u = (0, l.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        p = !c && null == u;
    return n
        ? (0, r.jsx)(ep, { channel: t })
        : i || a
          ? (0, r.jsxs)("div", {
                className: ei.containerColumn,
                children: [
                    (0, r.jsxs)("div", {
                        className: ei.eventPrompts,
                        children: [
                            p ? (0, r.jsx)(y.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)("div", { className: ei.separator }),
                            p && s && !o
                                ? (0, r.jsx)(x.Z, {
                                      highlight: !0,
                                      channel: t,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: ei.separator }),
                        ],
                    }),
                    (0, r.jsx)(eu, { channel: t }),
                ],
            })
          : (0, r.jsx)(ea, { channel: t });
});
