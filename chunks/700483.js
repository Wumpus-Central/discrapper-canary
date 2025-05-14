n.d(t, { Z: () => eb }), n(388685);
var r = n(255367),
    i = n(73800),
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
    x = n(258609),
    y = n(74299),
    C = n(924301),
    v = n(459502),
    j = n(856691),
    O = n(357156),
    E = n(221241),
    I = n(923973),
    S = n(829750),
    P = n(82965),
    Z = n(189771),
    N = n(294629),
    T = n(793319),
    A = n(987329),
    w = n(560688),
    R = n(390322),
    k = n(871499),
    M = n(88479),
    L = n(386000),
    D = n(25827),
    U = n(314897),
    B = n(131951),
    G = n(496675),
    F = n(944486),
    H = n(594174),
    V = n(881824),
    z = n(471253),
    W = n(922482),
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
        c = (0, a.e7)([G.Z], () => G.Z.can(el.Plq.REQUEST_TO_SPEAK, t)),
        u = (0, P.Z)({ location: 'AudienceRaiseHandButton' }),
        { coloredIconsEnabled: d } = (0, E.Z)({ location: 'AudienceRaiseHandButton' });
    return i
        ? null
        : (0, r.jsx)(k.d, {
              isActive: l,
              label: l ? ea.intl.string(ea.t.GCimTk) : c ? ea.intl.string(ea.t.hLbG5O) : ea.intl.string(ea.t.e4WMv7),
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
        n = (0, a.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]),
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
            (0, z.RK)(t, !1), (0, b.v)(n, b.d.SPEAK_ON_STAGE);
        };
    return i
        ? (0, r.jsx)(k.d, {
              onClick: l,
              iconComponent: s.Lrb,
              label: ea.intl.string(ea.t['8Joh+v'])
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
                          children: ea.intl.string(ea.t['8Joh+v'])
                      })
                  ]
              })
          });
}
function ep(e) {
    let { channel: t, onSelect: n } = e,
        l = (0, u.bp)(),
        { canManageGuildEvent: h } = (0, O.XJ)(t),
        f = (0, a.e7)([X.Z], () => X.Z.getStageInstanceByChannel(t.id), [t.id]),
        m = (0, a.e7)([C.ZP], () => C.ZP.getGuildScheduledEvent(null == f ? void 0 : f.guild_scheduled_event_id)),
        g = (0, a.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: x } = (0, N.Z)(t),
        y = U.default.getId(),
        [v] = (0, ei.Z)(t),
        j = K.ZP.isModerator(y, t.id),
        E = (0, Y.B)(t.id),
        I = h(m),
        S = (0, P.Z)({ location: 'ExitStageButton' }),
        { parentAnalyticsLocation: Z } = (0, p.ZP)(),
        T = i.useRef(null);
    if (!g)
        return (0, r.jsx)(s.zxk, {
            size: s.zxk.Sizes.MEDIUM,
            color: s.zxk.Colors.GREEN,
            className: o()(es.buttonSpacing, es.buttonWithTextButton),
            onClick: () => {
                (0, b.v)(Z, b.d.JOIN_STAGE), (0, W.TM)(t);
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
                        children: ea.intl.string(ea.t['7vb2cX'])
                    })
                ]
            })
        });
    let A = () =>
        (function (e) {
            let { channel: t, appContext: n } = e;
            if (((0, b.v)(d.Z.VOICE_CONTROL_TRAY, b.d.DISCONNECT), (0, et.Z)(t))) return void (0, V.Us)(t, n);
            c.default.disconnect();
        })({
            channel: t,
            appContext: l
        });
    return (j || I) && null != f
        ? (0, r.jsx)(s.yRy, {
              targetElementRef: T,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(R.Z, {
                      children: (0, r.jsx)(s.v2r, {
                          navId: 'exit-options',
                          'aria-label': ea.intl.string(ea.t['3Uj+2t']),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, _.u)('End Stage', Z, { entrypoint: eo.A5.CARET }),
                          children: (0, r.jsx)(s.sNh, {
                              id: 'end-stage',
                              color: 'danger',
                              action: () => (0, V.Ev)(t, l),
                              label: ea.intl.string(ea.t.Fmx5y8),
                              icon: s.k$p
                          })
                      })
                  });
              },
              align: 'center',
              position: 'top',
              spacing: S ? 16 : void 0,
              animation: s.yRy.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: i } = t;
                  return (0, r.jsx)(M.Z, {
                      ref: T,
                      label: ea.intl.string(ea.t.c6qKws),
                      onClick: A,
                      onPopoutClick: n,
                      popoutOpen: i,
                      className: S ? void 0 : es.buttonSpacing
                  });
              }
          })
        : (x && !E) || v
          ? S
              ? (0, r.jsx)(M.Z, {
                    label: ea.intl.string(ea.t.SMKyio),
                    onClick: A,
                    className: es.experimentButtonSpacing
                })
              : (0, r.jsx)(s.zxk, {
                    size: s.zxk.Sizes.MEDIUM,
                    color: s.zxk.Colors.RED,
                    className: o()(es.buttonSpacing, es.buttonWithTextButton),
                    onClick: A,
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
                                children: ea.intl.string(ea.t.SMKyio)
                            })
                        ]
                    })
                })
          : (0, r.jsx)(M.Z, {
                label: ea.intl.string(ea.t.c6qKws),
                onClick: A,
                className: S ? void 0 : es.buttonSpacing
            });
}
function eh(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, P.Z)({ location: 'MoveToAudienceButton' }),
        l = () => {
            (0, b.v)(n, b.d.MOVE_TO_AUDIENCE), (0, z.yi)(t);
        };
    return i
        ? (0, r.jsx)(k.d, {
              iconComponent: s.zRq,
              label: ea.intl.string(ea.t.ezLpY2),
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
                          children: ea.intl.string(ea.t.ezLpY2)
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
        ? (0, r.jsx)(k.d, {
              isActive: c ? !i : i,
              label: i ? ea.intl.string(ea.t.ScHlfn) : ea.intl.string(ea.t.zqxfra),
              iconComponent: i ? s.xjP : s.RZG,
              color: c && !i ? 'green' : void 0,
              onClick: () => {
                  (0, b.v)(n, b.d.STAGE_MUSIC, i), (0, J.v)(!i);
              }
          })
        : (0, r.jsx)(k.d, {
              isActive: c ? o : !o,
              label: o ? ea.intl.string(ea.t.zqxfra) : ea.intl.string(ea.t.ScHlfn),
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
        { suppress: l, selfMute: c, mute: u } = (0, N.Z)(t),
        d = (0, Y.B)(t.id),
        b = (0, a.e7)([x.Z], () => null != x.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: C, enabled: v } = (0, I.Z)(),
        j = (0, Z.Z)(t),
        { limit: O, reachedLimit: k } = (0, S.Z)(t),
        M = (0, a.e7)([H.default], () => H.default.getCurrentUser()),
        U = (0, a.e7)([B.Z], () => (0, y.Z)(B.Z)),
        G = (0, a.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]),
        V = (0, a.e7)([h.Z], () => h.Z.getStreamParticipants(t.id)[0], [t.id]),
        z = (0, Q.PK)(t.id),
        W = O > 0,
        q = (k && !z) || (null != V && V.user.id !== (null == M ? void 0 : M.id)),
        K = (0, P.Z)({ location: 'SpeakerControlTray' }),
        { coloredIconsEnabled: X, simplifiedSettingsEnabled: J } = (0, E.Z)({ location: 'SpeakerControlTray' }),
        $ = (0, _.u)('AudioDeviceMenu', n, { entrypoint: eo.A5.CARET }),
        ee = i.useRef(null),
        et = i.useRef(null);
    if (null == M) return null;
    let en = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.yRy, {
                targetElementRef: ee,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(R.Z, {
                        children: (0, r.jsx)(m.Z, {
                            onClose: t,
                            simplified: J,
                            onInteraction: (0, _.u)('VideoDeviceMenu', n, { entrypoint: eo.A5.CARET })
                        })
                    });
                },
                position: 'top',
                align: K ? 'right' : 'center',
                spacing: K ? 16 : void 0,
                animation: s.yRy.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: i } = t;
                    return (0, r.jsx)(D.C, {
                        ref: ee,
                        centerButton: !0,
                        hasPermission: j,
                        enabled: v,
                        cameraUnavailable: C,
                        onChange: T.r,
                        onCameraUnavailable: w.Z,
                        channelLimitReached: k,
                        channelLimit: O,
                        popoutOpen: i,
                        onPopoutClick: n
                    });
                }
            }),
            K
                ? null
                : (0, r.jsx)(T.NZ, {
                      channel: t,
                      currentUser: M,
                      exitFullScreen: () => null,
                      canGoLive: U,
                      hasPermission: j,
                      disabled: q
                  })
        ]
    });
    return K
        ? (0, r.jsxs)('div', {
              className: es.experimentWrapper,
              children: [
                  G && !l
                      ? (0, r.jsxs)('div', {
                            className: o()(es.buttonSection, { [es.experimentButtonSection]: X }),
                            children: [
                                (0, r.jsx)(s.yRy, {
                                    targetElementRef: et,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(R.Z, {
                                            children: (0, r.jsx)(f.default, {
                                                onClose: t,
                                                renderInputDevices: !0,
                                                renderInputModes: !0,
                                                renderOutputDevices: !0,
                                                renderInputVolume: J,
                                                renderOutputVolume: J,
                                                renderDeafen: J,
                                                simplified: J,
                                                onInteraction: $
                                            })
                                        });
                                    },
                                    align: 'right',
                                    position: 'top',
                                    spacing: 16,
                                    animation: s.yRy.Animation.FADE,
                                    children: (e, t) => {
                                        let { onClick: n } = e,
                                            { isShown: i } = t;
                                        return (0, r.jsx)(L.Z, {
                                            ref: et,
                                            centerButton: !0,
                                            onPopoutClick: n,
                                            selfMute: c,
                                            serverMute: u,
                                            suppress: l,
                                            popoutOpen: i,
                                            onClick: () => (0, g.Z)(u, l, 'Stage Channel Controls'),
                                            awaitingRemote: b
                                        });
                                    }
                                }),
                                W && en
                            ]
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: o()(es.buttonSection, { [es.experimentButtonSection]: X }),
                      children: [
                          G && !l && W
                              ? (0, r.jsx)(T.NZ, {
                                    channel: t,
                                    currentUser: M,
                                    exitFullScreen: () => null,
                                    canGoLive: U,
                                    hasPermission: j,
                                    disabled: q
                                })
                              : null,
                          (0, r.jsx)(ef, { channelId: t.id }),
                          G && (0, r.jsx)(ec, { channel: t }),
                          G && d && l && (0, r.jsx)(ed, { channel: t }),
                          G && !l && (0, r.jsx)(eh, { channel: t }),
                          J ? (0, r.jsx)(A.Z, { channel: t }) : null
                      ]
                  }),
                  (0, r.jsx)(ep, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: es.container,
              children: [
                  (0, r.jsx)(ef, { channelId: t.id }),
                  G && (0, r.jsx)(ec, { channel: t }),
                  G && !l
                      ? (0, r.jsxs)('div', {
                            className: o()(es.avControls, es.buttonSpacing),
                            children: [
                                W && en,
                                (0, r.jsx)(s.yRy, {
                                    targetElementRef: et,
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(R.Z, {
                                            children: (0, r.jsx)(f.default, {
                                                onClose: t,
                                                renderInputDevices: !0,
                                                renderOutputDevices: !0,
                                                onInteraction: $
                                            })
                                        });
                                    },
                                    align: 'center',
                                    position: 'top',
                                    animation: s.yRy.Animation.FADE,
                                    children: (e, t) => {
                                        let { onClick: n } = e,
                                            { isShown: i } = t;
                                        return (0, r.jsx)(L.Z, {
                                            ref: et,
                                            centerButton: !0,
                                            onPopoutClick: n,
                                            selfMute: c,
                                            serverMute: u,
                                            suppress: l,
                                            popoutOpen: i,
                                            onClick: () => (0, g.Z)(u, l, 'Stage Channel Controls'),
                                            awaitingRemote: b
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  G && d && l && (0, r.jsx)(ed, { channel: t }),
                  G && !l && (0, r.jsx)(eh, { channel: t }),
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
        o = (0, a.e7)([G.Z], () => G.Z.can(q.yP, t), [t]),
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
