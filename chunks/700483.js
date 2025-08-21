n.d(t, { Z: () => ep }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(287734),
    s = n(40851),
    c = n(100527),
    u = n(906732),
    d = n(358221),
    p = n(659580),
    h = n(793865),
    f = n(575175),
    m = n(522651),
    g = n(795318),
    b = n(258609),
    _ = n(74299),
    y = n(924301),
    C = n(459502),
    x = n(856691),
    v = n(357156),
    O = n(923973),
    j = n(829750),
    E = n(189771),
    S = n(294629),
    I = n(793319),
    P = n(987329),
    Z = n(560688),
    T = n(390322),
    N = n(871499),
    A = n(88479),
    w = n(386000),
    R = n(25827),
    M = n(314897),
    D = n(131951),
    L = n(496675),
    k = n(944486),
    U = n(594174),
    B = n(881824),
    F = n(471253),
    G = n(200498),
    H = n(146085),
    V = n(88751),
    z = n(427679),
    W = n(368442),
    Y = n(600518),
    q = n(485287),
    K = n(754277),
    X = n(719100),
    Q = n(184805),
    J = n(643632),
    $ = n(270295),
    ee = n(981631),
    et = n(354459),
    en = n(388032),
    er = n(769265);
function ei(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)(),
        i = (0, Q.Z)(t.id),
        [o, s] = (0, $.Z)(t),
        c = (0, l.e7)([L.Z], () => L.Z.can(ee.Plq.REQUEST_TO_SPEAK, t));
    return i
        ? null
        : (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: o,
              label: o ? en.intl.string(en.t.GCimTk) : c ? en.intl.string(en.t.hLbG5O) : en.intl.string(en.t.e4WMv7),
              iconComponent: a.V9,
              onClick: () => {
                  (0, m.v)(n, m.d.REQUEST_TO_SPEAK, !o), s();
              },
              color: o ? "green" : void 0,
              disabled: !c && !o,
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
                    (0, r.jsx)(P.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(eo, { channel: t }),
        ],
    });
});
function ea(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)();
    return (0, r.jsx)(N.d, {
        isTrayButton: !0,
        onClick: () => {
            (0, F.RK)(t, !1), (0, m.v)(n, m.d.SPEAK_ON_STAGE);
        },
        iconComponent: a.Lrb,
        label: en.intl.string(en.t["8Joh+v"]),
    });
}
function eo(e) {
    let { channel: t, onSelect: n } = e,
        d = (0, s.bp)(),
        { canManageGuildEvent: p } = (0, v.XJ)(t),
        h = (0, l.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id), [t.id]),
        f = (0, l.e7)([y.ZP], () => y.ZP.getGuildScheduledEvent(null == h ? void 0 : h.guild_scheduled_event_id)),
        { suppress: b } = (0, S.Z)(t),
        _ = M.default.getId(),
        [C] = (0, $.Z)(t),
        x = V.ZP.isModerator(_, t.id),
        O = (0, G.B)(t.id),
        j = p(f),
        { parentAnalyticsLocation: E } = (0, u.ZP)(),
        I = i.useRef(null),
        P = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                if (((0, m.v)(c.Z.VOICE_CONTROL_TRAY, m.d.DISCONNECT), (0, X.Z)(t))) return void (0, B.Us)(t, n);
                o.default.disconnect();
            })({
                channel: t,
                appContext: d,
            });
    return (x || j) && null != h
        ? (0, r.jsx)(a.yRy, {
              targetElementRef: I,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(T.Z, {
                      children: (0, r.jsx)(a.v2r, {
                          navId: "exit-options",
                          "aria-label": en.intl.string(en.t["3Uj+2t"]),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, g.u)("End Stage", E, { entrypoint: et.A5.CARET }),
                          children: (0, r.jsx)(a.sNh, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, B.Ev)(t, d),
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
                  return (0, r.jsx)(A.Z, {
                      ref: I,
                      label: en.intl.string(en.t.c6qKws),
                      onClick: P,
                      onPopoutClick: n,
                      popoutOpen: i,
                  });
              },
          })
        : (b && !O) || C
          ? (0, r.jsx)(A.Z, {
                label: en.intl.string(en.t.SMKyio),
                onClick: P,
            })
          : (0, r.jsx)(A.Z, {
                label: en.intl.string(en.t.c6qKws),
                onClick: P,
            });
}
function es(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)();
    return (0, r.jsx)(N.d, {
        isTrayButton: !0,
        iconComponent: a.zRq,
        label: en.intl.string(en.t.ezLpY2),
        onClick: () => {
            (0, m.v)(n, m.d.MOVE_TO_AUDIENCE), (0, F.yi)(t);
        },
    });
}
function ec(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)(),
        i = (0, l.e7)([K.Z], () => K.Z.isMuted()),
        o = (0, q.pp)(t),
        s = (0, l.e7)([K.Z], () => K.Z.shouldPlay());
    return o
        ? (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? en.intl.string(en.t.ScHlfn) : en.intl.string(en.t.zqxfra),
              iconComponent: i ? a.xjP : a.RZG,
              color: i ? void 0 : "green",
              onClick: () => {
                  (0, m.v)(n, m.d.STAGE_MUSIC, i), (0, Y.v)(!i);
              },
          })
        : (0, r.jsx)(N.d, {
              isTrayButton: !0,
              isActive: s,
              label: s ? en.intl.string(en.t.zqxfra) : en.intl.string(en.t.ScHlfn),
              iconComponent: s ? a.RZG : a.xjP,
              color: s ? "green" : void 0,
              onClick: () => {
                  (0, m.v)(n, m.d.STAGE_MUSIC, !s), (0, Y.z)(!s);
              },
          });
}
let eu = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, u.ZP)(),
        { suppress: o, selfMute: s, mute: c } = (0, S.Z)(t),
        m = (0, G.B)(t.id),
        y = (0, l.e7)([b.Z], () => null != b.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: C, enabled: x } = (0, O.Z)(),
        v = (0, E.Z)(t),
        { limit: N, reachedLimit: A } = (0, j.Z)(t),
        M = (0, l.e7)([U.default], () => U.default.getCurrentUser()),
        L = (0, l.e7)([D.Z], () => (0, _.Z)(D.Z)),
        B = (0, l.e7)([k.Z], () => k.Z.getVoiceChannelId() === t.id, [t.id]),
        F = (0, l.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        H = (0, W.PK)(t.id),
        V = N > 0,
        z = (A && !H) || (null != F && F.user.id !== (null == M ? void 0 : M.id)),
        Y = (0, g.u)("AudioDeviceMenu", n, { entrypoint: et.A5.CARET }),
        q = i.useRef(null),
        K = i.useRef(null);
    if (null == M) return null;
    let X = (0, r.jsx)(a.yRy, {
        targetElementRef: q,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(T.Z, {
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
            return (0, r.jsx)(R.C, {
                ref: q,
                centerButton: !0,
                hasPermission: v,
                enabled: x,
                cameraUnavailable: C,
                onChange: I.r,
                onCameraUnavailable: Z.Z,
                channelLimitReached: A,
                channelLimit: N,
                popoutOpen: i,
                onPopoutClick: n,
            });
        },
    });
    return (0, r.jsxs)("div", {
        className: er.wrapper,
        children: [
            B && !o
                ? (0, r.jsxs)("div", {
                      className: er.buttonSection,
                      children: [
                          (0, r.jsx)(a.yRy, {
                              targetElementRef: K,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(T.Z, {
                                      children: (0, r.jsx)(p.default, {
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
                                      selfMute: s,
                                      serverMute: c,
                                      suppress: o,
                                      popoutOpen: i,
                                      onClick: () => (0, f.Z)(c, o, "Stage Channel Controls"),
                                      awaitingRemote: y,
                                  });
                              },
                          }),
                          V && X,
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: er.buttonSection,
                children: [
                    B && !o && V
                        ? (0, r.jsx)(I.NZ, {
                              channel: t,
                              currentUser: M,
                              exitFullScreen: () => null,
                              canGoLive: L,
                              hasPermission: v,
                              disabled: z,
                          })
                        : null,
                    (0, r.jsx)(ec, { channelId: t.id }),
                    B && (0, r.jsx)(ei, { channel: t }),
                    B && m && o && (0, r.jsx)(ea, { channel: t }),
                    B && !o && (0, r.jsx)(es, { channel: t }),
                    (0, r.jsx)(P.Z, { channel: t }),
                ],
            }),
            (0, r.jsx)(eo, { channel: t }),
        ],
    });
});
function ed(e) {
    let { channel: t } = e;
    return (0, r.jsxs)("div", {
        className: er.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: er.buttonSection,
                children: (0, r.jsx)(ec, { channelId: t.id }),
            }),
            (0, r.jsx)(eo, { channel: t }),
        ],
    });
}
let ep = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, Q.Z)(t.id),
        a = (0, G.B)(t.id),
        o = (0, l.e7)([L.Z], () => L.Z.can(H.yP, t), [t]),
        s = (0, J.Z)(t.id),
        c = (0, l.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        u = !s && null == c;
    return n
        ? (0, r.jsx)(ed, { channel: t })
        : i || a
          ? (0, r.jsxs)("div", {
                className: er.containerColumn,
                children: [
                    (0, r.jsxs)("div", {
                        className: er.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(C.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)("div", { className: er.separator }),
                            u && o
                                ? (0, r.jsx)(x.Z, {
                                      highlight: !0,
                                      channel: t,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: er.separator }),
                        ],
                    }),
                    (0, r.jsx)(eu, { channel: t }),
                ],
            })
          : (0, r.jsx)(el, { channel: t });
});
