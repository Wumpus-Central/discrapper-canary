(n.d(t, { Z: () => em }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(287734),
    u = n(40851),
    h = n(100527),
    p = n(906732),
    f = n(358221),
    g = n(659580),
    m = n(793865),
    b = n(575175),
    _ = n(522651),
    y = n(795318),
    j = n(258609),
    O = n(74299),
    x = n(924301),
    v = n(459502),
    C = n(856691),
    E = n(357156),
    Z = n(923973),
    I = n(829750),
    S = n(189771),
    P = n(294629),
    T = n(793319),
    N = n(987329),
    w = n(560688),
    R = n(390322),
    A = n(871499),
    D = n(88479),
    L = n(386000),
    M = n(25827),
    k = n(314897),
    U = n(131951),
    G = n(496675),
    F = n(944486),
    B = n(594174),
    H = n(881824),
    z = n(471253),
    V = n(922482),
    W = n(200498),
    Y = n(146085),
    K = n(88751),
    q = n(427679),
    Q = n(368442),
    X = n(600518),
    J = n(485287),
    $ = n(754277),
    ee = n(719100),
    et = n(184805),
    en = n(643632),
    er = n(270295),
    ei = n(981631),
    el = n(354459),
    ea = n(388032),
    es = n(409826);
function eo(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, et.Z)(t.id),
        [l, a] = (0, er.Z)(t),
        o = (0, s.e7)([G.Z], () => G.Z.can(ei.Plq.REQUEST_TO_SPEAK, t));
    return i
        ? null
        : (0, r.jsx)(A.d, {
              isTrayButton: !0,
              isActive: l,
              label: l ? ea.intl.string(ea.t.GCimTk) : o ? ea.intl.string(ea.t.hLbG5O) : ea.intl.string(ea.t.e4WMv7),
              iconComponent: c.V9,
              onClick: () => {
                  ((0, _.v)(n, _.d.REQUEST_TO_SPEAK, !l), a());
              },
              color: l ? 'green' : void 0,
              disabled: !o && !l
          });
}
let ec = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, s.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)('div', {
        className: es.container,
        children: [
            (0, r.jsxs)('div', {
                className: es.buttonSection,
                children: [(0, r.jsx)(ep, { channelId: t.id }), n ? (0, r.jsx)(eo, { channel: t }) : null, (0, r.jsx)(N.Z, { channel: t })]
            }),
            (0, r.jsx)(eu, { channel: t })
        ]
    });
});
function ed(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)();
    return (0, r.jsx)(A.d, {
        isTrayButton: !0,
        onClick: () => {
            ((0, z.RK)(t, !1), (0, _.v)(n, _.d.SPEAK_ON_STAGE));
        },
        iconComponent: c.Lrb,
        label: ea.intl.string(ea.t['8Joh+v'])
    });
}
function eu(e) {
    let { channel: t, onSelect: n } = e,
        l = (0, u.bp)(),
        { canManageGuildEvent: f } = (0, E.XJ)(t),
        g = (0, s.e7)([q.Z], () => q.Z.getStageInstanceByChannel(t.id), [t.id]),
        m = (0, s.e7)([x.ZP], () => x.ZP.getGuildScheduledEvent(null == g ? void 0 : g.guild_scheduled_event_id)),
        b = (0, s.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: j } = (0, P.Z)(t),
        O = k.default.getId(),
        [v] = (0, er.Z)(t),
        C = K.ZP.isModerator(O, t.id),
        Z = (0, W.B)(t.id),
        I = f(m),
        { parentAnalyticsLocation: S } = (0, p.ZP)(),
        T = i.useRef(null);
    if (!b)
        return (0, r.jsx)(o.zx, {
            size: o.zx.Sizes.MEDIUM,
            color: o.zx.Colors.GREEN,
            className: a()(es.buttonSpacing, es.buttonWithTextButton),
            onClick: () => {
                ((0, _.v)(S, _.d.JOIN_STAGE), (0, V.TM)(t));
            },
            children: (0, r.jsxs)('div', {
                className: es.buttonWithTextInnerContainer,
                children: [
                    (0, r.jsx)(c.Csw, {
                        size: 'md',
                        color: 'currentColor',
                        className: es.buttonWithTextIcon
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'none',
                        variant: 'text-sm/medium',
                        children: ea.intl.string(ea.t['7vb2cX'])
                    })
                ]
            })
        });
    let N = () =>
        (function (e) {
            let { channel: t, appContext: n } = e;
            if (((0, _.v)(h.Z.VOICE_CONTROL_TRAY, _.d.DISCONNECT), (0, ee.Z)(t))) return void (0, H.Us)(t, n);
            d.default.disconnect();
        })({
            channel: t,
            appContext: l
        });
    return (C || I) && null != g
        ? (0, r.jsx)(c.yRy, {
              targetElementRef: T,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(R.Z, {
                      children: (0, r.jsx)(c.v2r, {
                          navId: 'exit-options',
                          'aria-label': ea.intl.string(ea.t['3Uj+2t']),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, y.u)('End Stage', S, { entrypoint: el.A5.CARET }),
                          children: (0, r.jsx)(c.sNh, {
                              id: 'end-stage',
                              color: 'danger',
                              action: () => (0, H.Ev)(t, l),
                              label: ea.intl.string(ea.t.Fmx5y8),
                              icon: c.k$p
                          })
                      })
                  });
              },
              align: 'center',
              position: 'top',
              spacing: 16,
              animation: c.yRy.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: i } = t;
                  return (0, r.jsx)(D.Z, {
                      ref: T,
                      label: ea.intl.string(ea.t.c6qKws),
                      onClick: N,
                      onPopoutClick: n,
                      popoutOpen: i
                  });
              }
          })
        : (j && !Z) || v
          ? (0, r.jsx)(D.Z, {
                label: ea.intl.string(ea.t.SMKyio),
                onClick: N
            })
          : (0, r.jsx)(D.Z, {
                label: ea.intl.string(ea.t.c6qKws),
                onClick: N
            });
}
function eh(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)();
    return (0, r.jsx)(A.d, {
        isTrayButton: !0,
        iconComponent: c.zRq,
        label: ea.intl.string(ea.t.ezLpY2),
        onClick: () => {
            ((0, _.v)(n, _.d.MOVE_TO_AUDIENCE), (0, z.yi)(t));
        }
    });
}
function ep(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, s.e7)([$.Z], () => $.Z.isMuted()),
        l = (0, J.pp)(t),
        a = (0, s.e7)([$.Z], () => $.Z.shouldPlay());
    return l
        ? (0, r.jsx)(A.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? ea.intl.string(ea.t.ScHlfn) : ea.intl.string(ea.t.zqxfra),
              iconComponent: i ? c.xjP : c.RZG,
              color: i ? void 0 : 'green',
              onClick: () => {
                  ((0, _.v)(n, _.d.STAGE_MUSIC, i), (0, X.v)(!i));
              }
          })
        : (0, r.jsx)(A.d, {
              isTrayButton: !0,
              isActive: a,
              label: a ? ea.intl.string(ea.t.zqxfra) : ea.intl.string(ea.t.ScHlfn),
              iconComponent: a ? c.RZG : c.xjP,
              color: a ? 'green' : void 0,
              onClick: () => {
                  ((0, _.v)(n, _.d.STAGE_MUSIC, !a), (0, X.z)(!a));
              }
          });
}
let ef = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        { suppress: l, selfMute: a, mute: o } = (0, P.Z)(t),
        d = (0, W.B)(t.id),
        u = (0, s.e7)([j.Z], () => null != j.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: h, enabled: _ } = (0, Z.Z)(),
        x = (0, S.Z)(t),
        { limit: v, reachedLimit: C } = (0, I.Z)(t),
        E = (0, s.e7)([B.default], () => B.default.getCurrentUser()),
        A = (0, s.e7)([U.Z], () => (0, O.Z)(U.Z)),
        D = (0, s.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]),
        k = (0, s.e7)([f.Z], () => f.Z.getStreamParticipants(t.id)[0], [t.id]),
        G = (0, Q.PK)(t.id),
        H = v > 0,
        z = (C && !G) || (null != k && k.user.id !== (null == E ? void 0 : E.id)),
        V = (0, y.u)('AudioDeviceMenu', n, { entrypoint: el.A5.CARET }),
        Y = i.useRef(null),
        K = i.useRef(null);
    if (null == E) return null;
    let q = (0, r.jsx)(c.yRy, {
        targetElementRef: Y,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(R.Z, {
                children: (0, r.jsx)(m.Z, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, y.u)('VideoDeviceMenu', n, { entrypoint: el.A5.CARET })
                })
            });
        },
        position: 'top',
        align: 'right',
        spacing: 16,
        animation: c.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(M.C, {
                ref: Y,
                centerButton: !0,
                hasPermission: x,
                enabled: _,
                cameraUnavailable: h,
                onChange: T.r,
                onCameraUnavailable: w.Z,
                channelLimitReached: C,
                channelLimit: v,
                popoutOpen: i,
                onPopoutClick: n
            });
        }
    });
    return (0, r.jsxs)('div', {
        className: es.wrapper,
        children: [
            D && !l
                ? (0, r.jsxs)('div', {
                      className: es.buttonSection,
                      children: [
                          (0, r.jsx)(c.yRy, {
                              targetElementRef: K,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(R.Z, {
                                      children: (0, r.jsx)(g.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: V
                                      })
                                  });
                              },
                              align: 'right',
                              position: 'top',
                              spacing: 16,
                              animation: c.yRy.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: i } = t;
                                  return (0, r.jsx)(L.Z, {
                                      ref: K,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: a,
                                      serverMute: o,
                                      suppress: l,
                                      popoutOpen: i,
                                      onClick: () => (0, b.Z)(o, l, 'Stage Channel Controls'),
                                      awaitingRemote: u
                                  });
                              }
                          }),
                          H && q
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: es.buttonSection,
                children: [
                    D && !l && H
                        ? (0, r.jsx)(T.NZ, {
                              channel: t,
                              currentUser: E,
                              exitFullScreen: () => null,
                              canGoLive: A,
                              hasPermission: x,
                              disabled: z
                          })
                        : null,
                    (0, r.jsx)(ep, { channelId: t.id }),
                    D && (0, r.jsx)(eo, { channel: t }),
                    D && d && l && (0, r.jsx)(ed, { channel: t }),
                    D && !l && (0, r.jsx)(eh, { channel: t }),
                    (0, r.jsx)(N.Z, { channel: t })
                ]
            }),
            (0, r.jsx)(eu, { channel: t })
        ]
    });
});
function eg(e) {
    let { channel: t } = e;
    return (0, r.jsxs)('div', {
        className: es.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: es.buttonSection,
                children: (0, r.jsx)(ep, { channelId: t.id })
            }),
            (0, r.jsx)(eu, { channel: t })
        ]
    });
}
let em = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, et.Z)(t.id),
        l = (0, W.B)(t.id),
        a = (0, s.e7)([G.Z], () => G.Z.can(Y.yP, t), [t]),
        o = (0, en.Z)(t.id),
        c = (0, s.e7)([f.Z], () => (null != t ? f.Z.getSelectedParticipant(t.id) : null)),
        d = !o && null == c;
    return n
        ? (0, r.jsx)(eg, { channel: t })
        : i || l
          ? (0, r.jsxs)('div', {
                className: es.containerColumn,
                children: [
                    (0, r.jsxs)('div', {
                        className: es.eventPrompts,
                        children: [
                            d ? (0, r.jsx)(v.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)('div', { className: es.separator }),
                            d && a
                                ? (0, r.jsx)(C.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, r.jsx)('div', { className: es.separator })
                        ]
                    }),
                    (0, r.jsx)(ef, { channel: t })
                ]
            })
          : (0, r.jsx)(ec, { channel: t });
});
