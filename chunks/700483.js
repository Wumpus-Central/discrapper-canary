n.d(t, { Z: () => eb }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(287734),
    u = n(40851),
    d = n(100527),
    p = n(906732),
    h = n(358221),
    f = n(659580),
    m = n(793865),
    g = n(575175),
    b = n(522651),
    _ = n(795318),
    C = n(258609),
    y = n(74299),
    x = n(924301),
    v = n(459502),
    j = n(856691),
    O = n(357156),
    E = n(221241),
    N = n(923973),
    I = n(829750),
    P = n(82965),
    S = n(189771),
    Z = n(294629),
    T = n(793319),
    A = n(987329),
    w = n(560688),
    R = n(390322),
    M = n(871499),
    k = n(88479),
    L = n(386000),
    D = n(25827),
    W = n(314897),
    U = n(131951),
    B = n(496675),
    H = n(944486),
    F = n(594174),
    G = n(881824),
    V = n(471253),
    z = n(922482),
    Y = n(200498),
    q = n(146085),
    K = n(88751),
    X = n(427679),
    Q = n(368442),
    J = n(600518),
    $ = n(485287),
    ee = n(754277),
    et = n(719100),
    en = n(184805),
    er = n(643632),
    ei = n(270295),
    el = n(981631),
    eo = n(354459),
    ea = n(388032),
    es = n(409826);
function ec(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, en.Z)(t.id),
        [l, o] = (0, ei.Z)(t),
        c = (0, a.e7)([B.Z], () => B.Z.can(el.Plq.REQUEST_TO_SPEAK, t)),
        u = (0, P.Z)({ location: 'AudienceRaiseHandButton' }),
        { coloredIconsEnabled: d } = (0, E.Z)({ location: 'AudienceRaiseHandButton' });
    return i
        ? null
        : (0, r.jsx)(M.d, {
              isActive: l,
              label: l ? ea.NW.string(ea.t.GCimTk) : c ? ea.NW.string(ea.t.hLbG5O) : ea.NW.string(ea.t.e4WMv7),
              iconComponent: s.V9,
              onClick: () => {
                  (0, b.v)(n, b.d.REQUEST_TO_SPEAK, !l), o();
              },
              className: u ? void 0 : es.buttonSpacing,
              color: d && l ? 'green' : void 0,
              disabled: !c && !l
          });
}
let eu = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, a.e7)([H.Z], () => H.Z.getVoiceChannelId() === t.id, [t.id]),
        i = (0, P.Z)({ location: 'AudienceControlTray' }),
        { coloredIconsEnabled: l, simplifiedSettingsEnabled: s } = (0, E.Z)({ location: 'AudienceControlTray' });
    return i
        ? (0, r.jsxs)('div', {
              className: es.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: o()(es.buttonSection, { [es.experimentButtonSection]: l }),
                      children: [(0, r.jsx)(ef, { channelId: t.id }), n ? (0, r.jsx)(ec, { channel: t }) : null, s ? (0, r.jsx)(A.Z, { channel: t }) : null]
                  }),
                  (0, r.jsx)(ep, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: es.container,
              children: [(0, r.jsx)(ef, { channelId: t.id }), n ? (0, r.jsx)(ec, { channel: t }) : null, (0, r.jsx)(ep, { channel: t })]
          });
});
function ed(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, P.Z)({ location: 'MakeMeASpeakerButton' }),
        l = () => {
            (0, V.RK)(t, !1), (0, b.v)(n, b.d.SPEAK_ON_STAGE);
        };
    return i
        ? (0, r.jsx)(M.d, {
              onClick: l,
              iconComponent: s.Lrb,
              label: ea.NW.string(ea.t['8Joh+v'])
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: es.primaryButtonColor,
              className: o()(es.buttonSpacing, es.buttonWithTextButton),
              onClick: l,
              children: (0, r.jsxs)('div', {
                  className: es.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Lrb, {
                          size: 'md',
                          color: 'currentColor',
                          className: es.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: ea.NW.string(ea.t['8Joh+v'])
                      })
                  ]
              })
          });
}
function ep(e) {
    let { channel: t, onSelect: n } = e,
        i = (0, u.bp)(),
        { canManageGuildEvent: l } = (0, O.XJ)(t),
        h = (0, a.e7)([X.Z], () => X.Z.getStageInstanceByChannel(t.id), [t.id]),
        f = (0, a.e7)([x.ZP], () => x.ZP.getGuildScheduledEvent(null == h ? void 0 : h.guild_scheduled_event_id)),
        m = (0, a.e7)([H.Z], () => H.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: g } = (0, Z.Z)(t),
        C = W.default.getId(),
        [y] = (0, ei.Z)(t),
        v = K.ZP.isModerator(C, t.id),
        j = (0, Y.B)(t.id),
        E = l(f),
        N = (0, P.Z)({ location: 'ExitStageButton' }),
        { parentAnalyticsLocation: I } = (0, p.ZP)();
    if (!m)
        return (0, r.jsx)(s.zxk, {
            size: s.zxk.Sizes.MEDIUM,
            color: s.zxk.Colors.GREEN,
            className: o()(es.buttonSpacing, es.buttonWithTextButton),
            onClick: () => {
                (0, b.v)(I, b.d.JOIN_STAGE), (0, z.TM)(t);
            },
            children: (0, r.jsxs)('div', {
                className: es.buttonWithTextInnerContainer,
                children: [
                    (0, r.jsx)(s.Csw, {
                        size: 'md',
                        color: 'currentColor',
                        className: es.buttonWithTextIcon
                    }),
                    (0, r.jsx)(s.Text, {
                        color: 'none',
                        variant: 'text-sm/medium',
                        children: ea.NW.string(ea.t['7vb2cX'])
                    })
                ]
            })
        });
    let S = () =>
        (function (e) {
            let { channel: t, appContext: n } = e;
            if (((0, b.v)(d.Z.VOICE_CONTROL_TRAY, b.d.DISCONNECT), (0, et.Z)(t))) return void (0, G.Us)(t, n);
            c.default.disconnect();
        })({
            channel: t,
            appContext: i
        });
    return (v || E) && null != h
        ? (0, r.jsx)(s.yRy, {
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, r.jsx)(R.Z, {
                      children: (0, r.jsx)(s.v2r, {
                          navId: 'exit-options',
                          'aria-label': ea.NW.string(ea.t['3Uj+2t']),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, _.u)('End Stage', I, { entrypoint: eo.A5.CARET }),
                          children: (0, r.jsx)(s.sNh, {
                              id: 'end-stage',
                              color: 'danger',
                              action: () => (0, G.Ev)(t, i),
                              label: ea.NW.string(ea.t.Fmx5y8),
                              icon: s.k$p
                          })
                      })
                  });
              },
              align: 'center',
              position: 'top',
              spacing: N ? 16 : void 0,
              animation: s.yRy.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: i } = t;
                  return (0, r.jsx)(k.Z, {
                      label: ea.NW.string(ea.t.c6qKws),
                      onClick: S,
                      onPopoutClick: n,
                      popoutOpen: i,
                      className: N ? void 0 : es.buttonSpacing
                  });
              }
          })
        : (g && !j) || y
          ? N
              ? (0, r.jsx)(k.Z, {
                    label: ea.NW.string(ea.t.SMKyio),
                    onClick: S,
                    className: es.experimentButtonSpacing
                })
              : (0, r.jsx)(s.zxk, {
                    size: s.zxk.Sizes.MEDIUM,
                    color: s.zxk.Colors.RED,
                    className: o()(es.buttonSpacing, es.buttonWithTextButton),
                    onClick: S,
                    children: (0, r.jsxs)('div', {
                        className: es.buttonWithTextInnerContainer,
                        children: [
                            (0, r.jsx)(s.gkL, {
                                size: 'md',
                                color: 'currentColor',
                                className: es.buttonWithTextIcon
                            }),
                            (0, r.jsx)(s.Text, {
                                color: 'none',
                                variant: 'text-sm/medium',
                                children: ea.NW.string(ea.t.SMKyio)
                            })
                        ]
                    })
                })
          : (0, r.jsx)(k.Z, {
                label: ea.NW.string(ea.t.c6qKws),
                onClick: S,
                className: N ? void 0 : es.buttonSpacing
            });
}
function eh(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, P.Z)({ location: 'MoveToAudienceButton' }),
        l = () => {
            (0, b.v)(n, b.d.MOVE_TO_AUDIENCE), (0, V.yi)(t);
        };
    return i
        ? (0, r.jsx)(M.d, {
              iconComponent: s.zRq,
              label: ea.NW.string(ea.t.ezLpY2),
              onClick: l
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: es.primaryButtonColor,
              className: o()(es.buttonSpacing, es.buttonWithTextButton),
              onClick: l,
              children: (0, r.jsxs)('div', {
                  className: es.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.zRq, {
                          size: 'md',
                          color: 'currentColor',
                          className: es.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: ea.NW.string(ea.t.ezLpY2)
                      })
                  ]
              })
          });
}
function ef(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, a.e7)([ee.Z], () => ee.Z.isMuted()),
        l = (0, $.pp)(t),
        o = (0, a.e7)([ee.Z], () => ee.Z.shouldPlay()),
        { coloredIconsEnabled: c } = (0, E.Z)({ location: 'MusicButton' });
    return l
        ? (0, r.jsx)(M.d, {
              isActive: c ? !i : i,
              label: i ? ea.NW.string(ea.t.ScHlfn) : ea.NW.string(ea.t.zqxfra),
              iconComponent: i ? s.xjP : s.RZG,
              color: c && !i ? 'green' : void 0,
              onClick: () => {
                  (0, b.v)(n, b.d.STAGE_MUSIC, i), (0, J.v)(!i);
              }
          })
        : (0, r.jsx)(M.d, {
              isActive: c ? o : !o,
              label: o ? ea.NW.string(ea.t.zqxfra) : ea.NW.string(ea.t.ScHlfn),
              iconComponent: o ? s.RZG : s.xjP,
              color: c && o ? 'green' : void 0,
              onClick: () => {
                  (0, b.v)(n, b.d.STAGE_MUSIC, !o), (0, J.z)(!o);
              }
          });
}
let em = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        { suppress: i, selfMute: l, mute: c } = (0, Z.Z)(t),
        u = (0, Y.B)(t.id),
        d = (0, a.e7)([C.Z], () => null != C.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: b, enabled: x } = (0, N.Z)(),
        v = (0, S.Z)(t),
        { limit: j, reachedLimit: O } = (0, I.Z)(t),
        M = (0, a.e7)([F.default], () => F.default.getCurrentUser()),
        k = (0, a.e7)([U.Z], () => (0, y.Z)(U.Z)),
        W = (0, a.e7)([H.Z], () => H.Z.getVoiceChannelId() === t.id, [t.id]),
        B = (0, a.e7)([h.Z], () => h.Z.getStreamParticipants(t.id)[0], [t.id]),
        G = (0, Q.PK)(t.id),
        V = j > 0,
        z = (O && !G) || (null != B && B.user.id !== (null == M ? void 0 : M.id)),
        q = (0, P.Z)({ location: 'SpeakerControlTray' }),
        { coloredIconsEnabled: K, simplifiedSettingsEnabled: X } = (0, E.Z)({ location: 'SpeakerControlTray' }),
        J = (0, _.u)('AudioDeviceMenu', n, { entrypoint: eo.A5.CARET });
    if (null == M) return null;
    let $ = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(R.Z, {
                        children: (0, r.jsx)(m.Z, {
                            onClose: t,
                            simplified: X,
                            onInteraction: (0, _.u)('VideoDeviceMenu', n, { entrypoint: eo.A5.CARET })
                        })
                    });
                },
                position: 'top',
                align: q ? 'right' : 'center',
                spacing: q ? 16 : void 0,
                animation: s.yRy.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: i } = t;
                    return (0, r.jsx)(D.C, {
                        centerButton: !0,
                        hasPermission: v,
                        enabled: x,
                        cameraUnavailable: b,
                        onChange: T.r,
                        onCameraUnavailable: w.Z,
                        channelLimitReached: O,
                        channelLimit: j,
                        popoutOpen: i,
                        onPopoutClick: n
                    });
                }
            }),
            q
                ? null
                : (0, r.jsx)(T.NZ, {
                      channel: t,
                      currentUser: M,
                      exitFullScreen: () => null,
                      canGoLive: k,
                      hasPermission: v,
                      disabled: z
                  })
        ]
    });
    return q
        ? (0, r.jsxs)('div', {
              className: es.experimentWrapper,
              children: [
                  W && !i
                      ? (0, r.jsxs)('div', {
                            className: o()(es.buttonSection, { [es.experimentButtonSection]: K }),
                            children: [
                                (0, r.jsx)(s.yRy, {
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(R.Z, {
                                            children: (0, r.jsx)(f.default, {
                                                onClose: t,
                                                renderInputDevices: !0,
                                                renderInputModes: !0,
                                                renderOutputDevices: !0,
                                                renderInputVolume: X,
                                                renderOutputVolume: X,
                                                renderDeafen: X,
                                                simplified: X,
                                                onInteraction: J
                                            })
                                        });
                                    },
                                    align: 'right',
                                    position: 'top',
                                    spacing: 16,
                                    animation: s.yRy.Animation.FADE,
                                    children: (e, t) => {
                                        let { onClick: n } = e,
                                            { isShown: o } = t;
                                        return (0, r.jsx)(L.Z, {
                                            centerButton: !0,
                                            onPopoutClick: n,
                                            selfMute: l,
                                            serverMute: c,
                                            suppress: i,
                                            popoutOpen: o,
                                            onClick: () => (0, g.Z)(c, i, 'Stage Channel Controls'),
                                            awaitingRemote: d
                                        });
                                    }
                                }),
                                V && $
                            ]
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: o()(es.buttonSection, { [es.experimentButtonSection]: K }),
                      children: [
                          W && !i && V
                              ? (0, r.jsx)(T.NZ, {
                                    channel: t,
                                    currentUser: M,
                                    exitFullScreen: () => null,
                                    canGoLive: k,
                                    hasPermission: v,
                                    disabled: z
                                })
                              : null,
                          (0, r.jsx)(ef, { channelId: t.id }),
                          W && (0, r.jsx)(ec, { channel: t }),
                          W && u && i && (0, r.jsx)(ed, { channel: t }),
                          W && !i && (0, r.jsx)(eh, { channel: t }),
                          X ? (0, r.jsx)(A.Z, { channel: t }) : null
                      ]
                  }),
                  (0, r.jsx)(ep, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: es.container,
              children: [
                  (0, r.jsx)(ef, { channelId: t.id }),
                  W && (0, r.jsx)(ec, { channel: t }),
                  W && !i
                      ? (0, r.jsxs)('div', {
                            className: o()(es.avControls, es.buttonSpacing),
                            children: [
                                V && $,
                                (0, r.jsx)(s.yRy, {
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(R.Z, {
                                            children: (0, r.jsx)(f.default, {
                                                onClose: t,
                                                renderInputDevices: !0,
                                                renderOutputDevices: !0,
                                                onInteraction: J
                                            })
                                        });
                                    },
                                    align: 'center',
                                    position: 'top',
                                    animation: s.yRy.Animation.FADE,
                                    children: (e, t) => {
                                        let { onClick: n } = e,
                                            { isShown: o } = t;
                                        return (0, r.jsx)(L.Z, {
                                            centerButton: !0,
                                            onPopoutClick: n,
                                            selfMute: l,
                                            serverMute: c,
                                            suppress: i,
                                            popoutOpen: o,
                                            onClick: () => (0, g.Z)(c, i, 'Stage Channel Controls'),
                                            awaitingRemote: d
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  W && u && i && (0, r.jsx)(ed, { channel: t }),
                  W && !i && (0, r.jsx)(eh, { channel: t }),
                  (0, r.jsx)(ep, { channel: t })
              ]
          });
});
function eg(e) {
    let { channel: t } = e,
        n = (0, P.Z)({ location: 'StartStageControlTray' }),
        { coloredIconsEnabled: i } = (0, E.Z)({ location: 'StartStageControlTray' });
    return n
        ? (0, r.jsxs)('div', {
              className: es.experimentWrapper,
              children: [
                  (0, r.jsx)('div', {
                      className: o()(es.buttonSection, { [es.experimentButtonSection]: i }),
                      children: (0, r.jsx)(ef, { channelId: t.id })
                  }),
                  (0, r.jsx)(ep, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: es.container,
              children: [(0, r.jsx)(ef, { channelId: t.id }), (0, r.jsx)(ep, { channel: t })]
          });
}
let eb = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, en.Z)(t.id),
        l = (0, Y.B)(t.id),
        o = (0, a.e7)([B.Z], () => B.Z.can(q.yP, t), [t]),
        s = (0, er.Z)(t.id),
        c = (0, a.e7)([h.Z], () => (null != t ? h.Z.getSelectedParticipant(t.id) : null)),
        u = !s && null == c;
    return n
        ? (0, r.jsx)(eg, { channel: t })
        : i || l
          ? (0, r.jsxs)('div', {
                className: es.containerColumn,
                children: [
                    (0, r.jsxs)('div', {
                        className: es.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(v.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)('div', { className: es.separator }),
                            u && o
                                ? (0, r.jsx)(j.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, r.jsx)('div', { className: es.separator })
                        ]
                    }),
                    (0, r.jsx)(em, { channel: t })
                ]
            })
          : (0, r.jsx)(eu, { channel: t });
});
