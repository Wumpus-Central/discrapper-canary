n.d(t, { Z: () => em }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(287734),
    u = n(40851),
    d = n(358221),
    p = n(659580),
    h = n(793865),
    f = n(575175),
    m = n(795318),
    g = n(258609),
    b = n(74299),
    _ = n(924301),
    C = n(459502),
    v = n(856691),
    y = n(357156),
    x = n(221241),
    j = n(923973),
    O = n(829750),
    N = n(82965),
    E = n(189771),
    I = n(294629),
    P = n(793319),
    S = n(987329),
    Z = n(560688),
    T = n(390322),
    A = n(871499),
    w = n(88479),
    R = n(386000),
    M = n(25827),
    k = n(314897),
    L = n(131951),
    D = n(496675),
    W = n(944486),
    U = n(594174),
    B = n(881824),
    F = n(471253),
    H = n(922482),
    G = n(200498),
    V = n(146085),
    z = n(88751),
    q = n(427679),
    Y = n(368442),
    K = n(600518),
    X = n(485287),
    Q = n(754277),
    J = n(719100),
    $ = n(184805),
    ee = n(643632),
    et = n(270295),
    en = n(981631),
    er = n(354459),
    ei = n(388032),
    el = n(164762);
function eo(e) {
    let { channel: t, appContext: n } = e;
    if ((0, J.Z)(t)) {
        (0, B.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function ea(e) {
    let { channel: t } = e,
        n = (0, $.Z)(t.id),
        [i, l] = (0, et.Z)(t),
        o = (0, a.e7)([D.Z], () => D.Z.can(en.Plq.REQUEST_TO_SPEAK, t)),
        c = (0, N.Z)({ location: 'AudienceRaiseHandButton' }),
        { coloredIconsEnabled: u } = (0, x.Z)({ location: 'AudienceRaiseHandButton' });
    return n
        ? null
        : (0, r.jsx)(A.d, {
              isActive: i,
              label: i ? ei.NW.string(ei.t.GCimTk) : o ? ei.NW.string(ei.t.hLbG5O) : ei.NW.string(ei.t.e4WMv7),
              iconComponent: s.V9,
              onClick: l,
              className: c ? void 0 : el.buttonSpacing,
              color: u && i ? 'green' : void 0,
              disabled: !o && !i
          });
}
let es = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, a.e7)([W.Z], () => W.Z.getVoiceChannelId() === t.id, [t.id]),
        i = (0, N.Z)({ location: 'AudienceControlTray' }),
        { coloredIconsEnabled: l, simplifiedSettingsEnabled: s } = (0, x.Z)({ location: 'AudienceControlTray' });
    return i
        ? (0, r.jsxs)('div', {
              className: el.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: o()(el.buttonSection, { [el.experimentButtonSection]: l }),
                      children: [(0, r.jsx)(ep, { channelId: t.id }), n ? (0, r.jsx)(ea, { channel: t }) : null, s ? (0, r.jsx)(S.Z, { channel: t }) : null]
                  }),
                  (0, r.jsx)(eu, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: el.container,
              children: [(0, r.jsx)(ep, { channelId: t.id }), n ? (0, r.jsx)(ea, { channel: t }) : null, (0, r.jsx)(eu, { channel: t })]
          });
});
function ec(e) {
    let { onClick: t } = e;
    return (0, N.Z)({ location: 'MakeMeASpeakerButton' })
        ? (0, r.jsx)(A.d, {
              onClick: t,
              iconComponent: s.Lrb,
              label: ei.NW.string(ei.t['8Joh+v'])
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: el.primaryButtonColor,
              className: o()(el.buttonSpacing, el.buttonWithTextButton),
              onClick: t,
              children: (0, r.jsxs)('div', {
                  className: el.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Lrb, {
                          size: 'md',
                          color: 'currentColor',
                          className: el.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: ei.NW.string(ei.t['8Joh+v'])
                      })
                  ]
              })
          });
}
function eu(e) {
    let { channel: t, onSelect: n } = e,
        i = (0, u.bp)(),
        { canManageGuildEvent: l } = (0, y.XJ)(t),
        c = (0, a.e7)([q.Z], () => q.Z.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, a.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        p = (0, a.e7)([W.Z], () => W.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: h } = (0, I.Z)(t),
        f = k.default.getId(),
        [g] = (0, et.Z)(t),
        b = z.ZP.isModerator(f, t.id),
        C = (0, G.B)(t.id),
        v = l(d),
        x = (0, N.Z)({ location: 'ExitStageButton' });
    return p
        ? (b || v) && null != c
            ? (0, r.jsx)(s.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: l } = e;
                      return (0, r.jsx)(T.Z, {
                          children: (0, r.jsx)(s.v2r, {
                              navId: 'exit-options',
                              'aria-label': ei.NW.string(ei.t['3Uj+2t']),
                              onClose: l,
                              onSelect: n,
                              onInteraction: (0, m.u)('End Stage', 'StageChannelControlTray', { entrypoint: er.A5.CARET }),
                              children: (0, r.jsx)(s.sNh, {
                                  id: 'end-stage',
                                  color: 'danger',
                                  action: () => (0, B.Ev)(t, i),
                                  label: ei.NW.string(ei.t.Fmx5y8),
                                  icon: s.k$p
                              })
                          })
                      });
                  },
                  align: 'center',
                  position: 'top',
                  spacing: x ? 16 : void 0,
                  animation: s.yRy.Animation.FADE,
                  children: (e, n) => {
                      let { onClick: l } = e,
                          { isShown: o } = n;
                      return (0, r.jsx)(w.Z, {
                          label: ei.NW.string(ei.t.c6qKws),
                          onClick: () =>
                              eo({
                                  channel: t,
                                  appContext: i
                              }),
                          onPopoutClick: l,
                          popoutOpen: o,
                          className: x ? void 0 : el.buttonSpacing
                      });
                  }
              })
            : (h && !C) || g
              ? x
                  ? (0, r.jsx)(w.Z, {
                        label: ei.NW.string(ei.t.SMKyio),
                        onClick: () =>
                            eo({
                                channel: t,
                                appContext: i
                            }),
                        className: el.experimentButtonSpacing
                    })
                  : (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.MEDIUM,
                        color: s.zxk.Colors.RED,
                        className: o()(el.buttonSpacing, el.buttonWithTextButton),
                        onClick: () =>
                            eo({
                                channel: t,
                                appContext: i
                            }),
                        children: (0, r.jsxs)('div', {
                            className: el.buttonWithTextInnerContainer,
                            children: [
                                (0, r.jsx)(s.gkL, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: el.buttonWithTextIcon
                                }),
                                (0, r.jsx)(s.Text, {
                                    color: 'none',
                                    variant: 'text-sm/medium',
                                    children: ei.NW.string(ei.t.SMKyio)
                                })
                            ]
                        })
                    })
              : (0, r.jsx)(w.Z, {
                    label: ei.NW.string(ei.t.c6qKws),
                    onClick: () =>
                        eo({
                            channel: t,
                            appContext: i
                        }),
                    className: x ? void 0 : el.buttonSpacing
                })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: s.zxk.Colors.GREEN,
              className: o()(el.buttonSpacing, el.buttonWithTextButton),
              onClick: () => {
                  (0, H.TM)(t);
              },
              children: (0, r.jsxs)('div', {
                  className: el.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Csw, {
                          size: 'md',
                          color: 'currentColor',
                          className: el.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: ei.NW.string(ei.t['7vb2cX'])
                      })
                  ]
              })
          });
}
function ed(e) {
    let { onClick: t } = e;
    return (0, N.Z)({ location: 'MoveToAudienceButton' })
        ? (0, r.jsx)(A.d, {
              iconComponent: s.zRq,
              label: ei.NW.string(ei.t.ezLpY2),
              onClick: t
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: el.primaryButtonColor,
              className: o()(el.buttonSpacing, el.buttonWithTextButton),
              onClick: t,
              children: (0, r.jsxs)('div', {
                  className: el.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.zRq, {
                          size: 'md',
                          color: 'currentColor',
                          className: el.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: ei.NW.string(ei.t.ezLpY2)
                      })
                  ]
              })
          });
}
function ep(e) {
    let { channelId: t } = e,
        n = (0, a.e7)([Q.Z], () => Q.Z.isMuted()),
        i = (0, X.pp)(t),
        l = (0, a.e7)([Q.Z], () => Q.Z.shouldPlay()),
        { coloredIconsEnabled: o } = (0, x.Z)({ location: 'MusicButton' });
    return i
        ? (0, r.jsx)(A.d, {
              isActive: o ? !n : n,
              label: n ? ei.NW.string(ei.t.ScHlfn) : ei.NW.string(ei.t.zqxfra),
              iconComponent: n ? s.xjP : s.RZG,
              color: o && !n ? 'green' : void 0,
              onClick: () => (0, K.v)(!n)
          })
        : (0, r.jsx)(A.d, {
              isActive: o ? l : !l,
              label: l ? ei.NW.string(ei.t.zqxfra) : ei.NW.string(ei.t.ScHlfn),
              iconComponent: l ? s.RZG : s.xjP,
              color: o && l ? 'green' : void 0,
              onClick: () => (0, K.z)(!l)
          });
}
let eh = i.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: i, mute: l } = (0, I.Z)(t),
        c = (0, G.B)(t.id),
        u = (0, a.e7)([g.Z], () => null != g.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: _, enabled: C } = (0, j.Z)(),
        v = (0, E.Z)(t),
        { limit: y, reachedLimit: A } = (0, O.Z)(t),
        w = (0, a.e7)([U.default], () => U.default.getCurrentUser()),
        k = (0, a.e7)([L.Z], () => (0, b.Z)(L.Z)),
        D = (0, a.e7)([W.Z], () => W.Z.getVoiceChannelId() === t.id, [t.id]),
        B = (0, a.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        H = (0, Y.PK)(t.id),
        V = y > 0,
        z = (A && !H) || (null != B && B.user.id !== (null == w ? void 0 : w.id)),
        q = (0, N.Z)({ location: 'SpeakerControlTray' }),
        { coloredIconsEnabled: K, simplifiedSettingsEnabled: X } = (0, x.Z)({ location: 'SpeakerControlTray' }),
        Q = (0, m.u)('AudioDeviceMenu', 'StageChannelControlTray', { entrypoint: er.A5.CARET });
    if (null == w) return null;
    let J = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(T.Z, {
                        children: (0, r.jsx)(h.Z, {
                            onClose: t,
                            simplified: X,
                            onInteraction: (0, m.u)('VideoDeviceMenu', 'StageChannelControlTray', { entrypoint: er.A5.CARET })
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
                    return (0, r.jsx)(M.C, {
                        centerButton: !0,
                        hasPermission: v,
                        enabled: C,
                        cameraUnavailable: _,
                        onChange: P.r,
                        onCameraUnavailable: Z.Z,
                        channelLimitReached: A,
                        channelLimit: y,
                        popoutOpen: i,
                        onPopoutClick: n
                    });
                }
            }),
            q
                ? null
                : (0, r.jsx)(P.NZ, {
                      channel: t,
                      currentUser: w,
                      exitFullScreen: () => null,
                      canGoLive: k,
                      hasPermission: v,
                      disabled: z
                  })
        ]
    });
    return q
        ? (0, r.jsxs)('div', {
              className: el.experimentWrapper,
              children: [
                  D && !n
                      ? (0, r.jsx)('div', {
                            className: o()(el.buttonSection, { [el.experimentButtonSection]: K }),
                            children: (0, r.jsxs)('div', {
                                className: o()(el.avControls),
                                children: [
                                    (0, r.jsx)(s.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(T.Z, {
                                                children: (0, r.jsx)(p.default, {
                                                    onClose: t,
                                                    renderInputDevices: !0,
                                                    renderInputModes: !0,
                                                    renderOutputDevices: !0,
                                                    renderInputVolume: X,
                                                    renderOutputVolume: X,
                                                    renderDeafen: X,
                                                    simplified: X,
                                                    onInteraction: Q
                                                })
                                            });
                                        },
                                        align: 'right',
                                        position: 'top',
                                        spacing: 16,
                                        animation: s.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: o } = e,
                                                { isShown: a } = t;
                                            return (0, r.jsx)(R.Z, {
                                                centerButton: !0,
                                                onPopoutClick: o,
                                                selfMute: i,
                                                serverMute: l,
                                                suppress: n,
                                                popoutOpen: a,
                                                onClick: () => (0, f.Z)(l, n, 'Stage Channel Controls'),
                                                awaitingRemote: u
                                            });
                                        }
                                    }),
                                    V &&
                                        (0, r.jsx)('div', {
                                            className: el.avSpacing,
                                            'aria-hidden': 'true',
                                            role: 'presentation'
                                        }),
                                    V && J
                                ]
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: o()(el.buttonSection, { [el.experimentButtonSection]: K }),
                      children: [
                          D && !n && V
                              ? (0, r.jsx)(P.NZ, {
                                    channel: t,
                                    currentUser: w,
                                    exitFullScreen: () => null,
                                    canGoLive: k,
                                    hasPermission: v,
                                    disabled: z
                                })
                              : null,
                          (0, r.jsx)(ep, { channelId: t.id }),
                          D && (0, r.jsx)(ea, { channel: t }),
                          D && c && n && (0, r.jsx)(ec, { onClick: () => (0, F.RK)(t, !1) }),
                          D && !n && (0, r.jsx)(ed, { onClick: () => (0, F.yi)(t) }),
                          X ? (0, r.jsx)(S.Z, { channel: t }) : null
                      ]
                  }),
                  (0, r.jsx)(eu, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: el.container,
              children: [
                  (0, r.jsx)(ep, { channelId: t.id }),
                  D && (0, r.jsx)(ea, { channel: t }),
                  D && !n
                      ? (0, r.jsxs)('div', {
                            className: o()(el.avControls, el.buttonSpacing),
                            children: [
                                V && J,
                                (0, r.jsx)(s.yRy, {
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(T.Z, {
                                            children: (0, r.jsx)(p.default, {
                                                onClose: t,
                                                renderInputDevices: !0,
                                                renderOutputDevices: !0,
                                                onInteraction: Q
                                            })
                                        });
                                    },
                                    align: 'center',
                                    position: 'top',
                                    animation: s.yRy.Animation.FADE,
                                    children: (e, t) => {
                                        let { onClick: o } = e,
                                            { isShown: a } = t;
                                        return (0, r.jsx)(R.Z, {
                                            centerButton: !0,
                                            onPopoutClick: o,
                                            selfMute: i,
                                            serverMute: l,
                                            suppress: n,
                                            popoutOpen: a,
                                            onClick: () => (0, f.Z)(l, n, 'Stage Channel Controls'),
                                            awaitingRemote: u
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  D && c && n && (0, r.jsx)(ec, { onClick: () => (0, F.RK)(t, !1) }),
                  D && !n && (0, r.jsx)(ed, { onClick: () => (0, F.yi)(t) }),
                  (0, r.jsx)(eu, { channel: t })
              ]
          });
});
function ef(e) {
    let { channel: t } = e,
        n = (0, N.Z)({ location: 'StartStageControlTray' }),
        { coloredIconsEnabled: i } = (0, x.Z)({ location: 'StartStageControlTray' });
    return n
        ? (0, r.jsxs)('div', {
              className: el.experimentWrapper,
              children: [
                  (0, r.jsx)('div', {
                      className: o()(el.buttonSection, { [el.experimentButtonSection]: i }),
                      children: (0, r.jsx)(ep, { channelId: t.id })
                  }),
                  (0, r.jsx)(eu, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: el.container,
              children: [(0, r.jsx)(ep, { channelId: t.id }), (0, r.jsx)(eu, { channel: t })]
          });
}
let em = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, $.Z)(t.id),
        l = (0, G.B)(t.id),
        o = (0, a.e7)([D.Z], () => D.Z.can(V.yP, t), [t]),
        s = (0, ee.Z)(t.id),
        c = (0, a.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        u = !s && null == c;
    return n
        ? (0, r.jsx)(ef, { channel: t })
        : i || l
          ? (0, r.jsxs)('div', {
                className: el.containerColumn,
                children: [
                    (0, r.jsxs)('div', {
                        className: el.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(C.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)('div', { className: el.separator }),
                            u && o
                                ? (0, r.jsx)(v.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, r.jsx)('div', { className: el.separator })
                        ]
                    }),
                    (0, r.jsx)(eh, { channel: t })
                ]
            })
          : (0, r.jsx)(es, { channel: t });
});
