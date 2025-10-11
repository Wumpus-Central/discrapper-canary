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
    h = n(793865),
    p = n(575175),
    f = n(522651),
    g = n(795318),
    m = n(258609),
    b = n(74299),
    y = n(924301),
    _ = n(459502),
    j = n(856691),
    O = n(728285),
    x = n(357156),
    v = n(923973),
    C = n(829750),
    I = n(189771),
    S = n(294629),
    E = n(793319),
    Z = n(987329),
    T = n(560688),
    P = n(390322),
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
    X = n(184805),
    J = n(643632),
    $ = n(270295),
    ee = n(981631),
    et = n(354459),
    en = n(388032),
    er = n(769265);
function ei(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)(),
        i = (0, X.Z)(t.id),
        [s, o] = (0, $.Z)(t),
        d = (0, l.e7)([M.Z], () => M.Z.can(ee.Plq.REQUEST_TO_SPEAK, t));
    return i
        ? null
        : (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: s,
              label: s ? en.intl.string(en.t.GCimTk) : d ? en.intl.string(en.t.hLbG5O) : en.intl.string(en.t.e4WMv7),
              iconComponent: a.V9,
              onClick: () => {
                  (0, f.v)(n, f.d.REQUEST_TO_SPEAK, !s), o();
              },
              color: s ? "green" : void 0,
              disabled: !d && !s,
          });
}
let el = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)("div", {
        className: er.container,
        children: [
            (0, r.jsxs)("div", {
                className: er.buttonSection,
                children: [
                    (0, r.jsx)(ec, { channelId: t.id }),
                    n ? (0, r.jsx)(ei, { channel: t }) : null,
                    (0, r.jsx)(Z.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(es, { channel: t }),
        ],
    });
});
function ea(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)();
    return (0, r.jsx)(N.d, {
        isTrayButton: !0,
        onClick: () => {
            (0, H.RK)(t, !1), (0, f.v)(n, f.d.SPEAK_ON_STAGE);
        },
        iconComponent: a.Lrb,
        label: en.intl.string(en.t["8Joh+v"]),
    });
}
function es(e) {
    let { channel: t, onSelect: n } = e,
        d = (0, O.bp)(),
        { canManageGuildEvent: u } = (0, x.XJ)(t),
        h = (0, l.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id), [t.id]),
        p = (0, l.e7)([y.ZP], () => y.ZP.getGuildScheduledEvent(null == h ? void 0 : h.guild_scheduled_event_id)),
        { suppress: m } = (0, S.Z)(t),
        b = D.default.getId(),
        [_] = (0, $.Z)(t),
        j = V.ZP.isModerator(b, t.id),
        v = (0, F.B)(t.id),
        C = u(p),
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
    return (j || C) && null != h
        ? (0, r.jsx)(a.yRy, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(P.Z, {
                      children: (0, r.jsx)(a.v2r, {
                          navId: "exit-options",
                          "aria-label": en.intl.string(en.t["3Uj+2t"]),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, g.u)("End Stage", I, { entrypoint: et.A5.CARET }),
                          children: (0, r.jsx)(a.sNh, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, G.Ev)(t, d),
                              label: en.intl.string(en.t.Fmx5y8),
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
                      label: en.intl.string(en.t.c6qKws),
                      onClick: Z,
                      onPopoutClick: n,
                      popoutOpen: i,
                  });
              },
          })
        : (m && !v) || _
          ? (0, r.jsx)(R.Z, {
                label: en.intl.string(en.t.SMKyio),
                onClick: Z,
            })
          : (0, r.jsx)(R.Z, {
                label: en.intl.string(en.t.c6qKws),
                onClick: Z,
            });
}
function eo(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)();
    return (0, r.jsx)(N.d, {
        isTrayButton: !0,
        iconComponent: a.zRq,
        label: en.intl.string(en.t.ezLpY2),
        onClick: () => {
            (0, f.v)(n, f.d.MOVE_TO_AUDIENCE), (0, H.yi)(t);
        },
    });
}
function ec(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)(),
        i = (0, l.e7)([K.Z], () => K.Z.isMuted()),
        s = (0, q.pp)(t),
        o = (0, l.e7)([K.Z], () => K.Z.shouldPlay());
    return s
        ? (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? en.intl.string(en.t.ScHlfn) : en.intl.string(en.t.zqxfra),
              iconComponent: i ? a.xjP : a.RZG,
              color: i ? void 0 : "green",
              onClick: () => {
                  (0, f.v)(n, f.d.STAGE_MUSIC, i), (0, Y.v)(!i);
              },
          })
        : (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: o,
              label: o ? en.intl.string(en.t.zqxfra) : en.intl.string(en.t.ScHlfn),
              iconComponent: o ? a.RZG : a.xjP,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, f.v)(n, f.d.STAGE_MUSIC, !o), (0, Y.z)(!o);
              },
          });
}
let ed = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, c.ZP)(),
        { suppress: s, selfMute: o, mute: f } = (0, S.Z)(t),
        y = (0, F.B)(t.id),
        _ = (0, l.e7)([m.default], () => null != m.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: j, enabled: O } = (0, v.Z)(),
        x = (0, I.Z)(t),
        { limit: N, reachedLimit: R } = (0, C.Z)(t),
        D = (0, l.e7)([U.default], () => U.default.getCurrentUser()),
        M = (0, l.e7)([L.Z], () => (0, b.Z)(L.Z)),
        G = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]),
        H = (0, l.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        B = (0, W.PK)(t.id),
        V = N > 0,
        z = (R && !B) || (null != H && H.user.id !== (null == D ? void 0 : D.id)),
        Y = (0, g.u)("AudioDeviceMenu", n, { entrypoint: et.A5.CARET }),
        q = i.useRef(null),
        K = i.useRef(null);
    if (null == D) return null;
    let Q = (0, r.jsx)(a.yRy, {
        targetElementRef: q,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(P.Z, {
                children: (0, r.jsx)(h.Z, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, g.u)("VideoDeviceMenu", n, { entrypoint: et.A5.CARET }),
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
                ref: q,
                centerButton: !0,
                hasPermission: x,
                enabled: O,
                cameraUnavailable: j,
                onChange: E.r,
                onCameraUnavailable: T.Z,
                channelLimitReached: R,
                channelLimit: N,
                popoutOpen: i,
                onPopoutClick: n,
            });
        },
    });
    return (0, r.jsxs)("div", {
        className: er.wrapper,
        children: [
            G && !s
                ? (0, r.jsxs)("div", {
                      className: er.buttonSection,
                      children: [
                          (0, r.jsx)(a.yRy, {
                              targetElementRef: K,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(P.Z, {
                                      children: (0, r.jsx)(u.default, {
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
                                  return (0, r.jsx)(w.Z, {
                                      ref: K,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: f,
                                      suppress: s,
                                      popoutOpen: i,
                                      onClick: () => (0, p.Z)(f, s, "Stage Channel Controls"),
                                      awaitingRemote: _,
                                  });
                              },
                          }),
                          V && Q,
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: er.buttonSection,
                children: [
                    G && !s && V
                        ? (0, r.jsx)(E.NZ, {
                              channel: t,
                              currentUser: D,
                              exitFullScreen: () => null,
                              canGoLive: M,
                              hasPermission: x,
                              disabled: z,
                          })
                        : null,
                    (0, r.jsx)(ec, { channelId: t.id }),
                    G && (0, r.jsx)(ei, { channel: t }),
                    G && y && s && (0, r.jsx)(ea, { channel: t }),
                    G && !s && (0, r.jsx)(eo, { channel: t }),
                    (0, r.jsx)(Z.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(es, { channel: t }),
        ],
    });
});
function eu(e) {
    let { channel: t } = e;
    return (0, r.jsxs)("div", {
        className: er.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: er.buttonSection,
                children: (0, r.jsx)(ec, { channelId: t.id }),
            }),
            (0, r.jsx)(es, { channel: t }),
        ],
    });
}
let eh = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, X.Z)(t.id),
        a = (0, F.B)(t.id),
        s = (0, l.e7)([M.Z], () => M.Z.can(B.yP, t), [t]),
        o = (0, J.Z)(t.id),
        c = (0, l.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        u = !o && null == c;
    return n
        ? (0, r.jsx)(eu, { channel: t })
        : i || a
          ? (0, r.jsxs)("div", {
                className: er.containerColumn,
                children: [
                    (0, r.jsxs)("div", {
                        className: er.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(_.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)("div", { className: er.separator }),
                            u && s
                                ? (0, r.jsx)(j.Z, {
                                      highlight: !0,
                                      channel: t,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: er.separator }),
                        ],
                    }),
                    (0, r.jsx)(ed, { channel: t }),
                ],
            })
          : (0, r.jsx)(el, { channel: t });
});
