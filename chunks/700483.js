n.d(t, { Z: () => eg }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(287734),
    u = n(40851),
    d = n(358221),
    p = n(682901),
    h = n(659580),
    f = n(793865),
    m = n(575175),
    g = n(795318),
    b = n(258609),
    _ = n(74299),
    C = n(924301),
    v = n(459502),
    y = n(856691),
    x = n(357156),
    j = n(221241),
    O = n(923973),
    E = n(829750),
    N = n(82965),
    I = n(189771),
    P = n(294629),
    S = n(793319),
    Z = n(987329),
    T = n(560688),
    A = n(390322),
    w = n(871499),
    R = n(88479),
    M = n(386000),
    k = n(25827),
    L = n(314897),
    D = n(131951),
    W = n(496675),
    U = n(944486),
    B = n(594174),
    F = n(881824),
    H = n(471253),
    G = n(922482),
    V = n(200498),
    z = n(146085),
    q = n(88751),
    Y = n(427679),
    K = n(368442),
    X = n(600518),
    Q = n(485287),
    J = n(754277),
    $ = n(719100),
    ee = n(184805),
    et = n(643632),
    en = n(270295),
    er = n(981631),
    ei = n(354459),
    el = n(388032),
    eo = n(164762);
function ea(e) {
    let { channel: t, appContext: n } = e;
    if ((0, $.Z)(t)) {
        (0, F.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function es(e) {
    let { channel: t } = e,
        n = (0, ee.Z)(t.id),
        [i, l] = (0, en.Z)(t),
        o = (0, a.e7)([W.Z], () => W.Z.can(er.Plq.REQUEST_TO_SPEAK, t)),
        c = (0, N.Z)({ location: 'AudienceRaiseHandButton' }),
        { coloredIcons: u } = (0, j.Z)({ location: 'AudienceRaiseHandButton' });
    return n
        ? null
        : (0, r.jsx)(w.d, {
              isActive: i,
              label: i ? el.NW.string(el.t.GCimTk) : o ? el.NW.string(el.t.hLbG5O) : el.NW.string(el.t.e4WMv7),
              iconComponent: s.V9,
              onClick: l,
              className: c ? void 0 : eo.buttonSpacing,
              color: u && i ? 'green' : void 0,
              disabled: !o && !i
          });
}
let ec = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, a.e7)([U.Z], () => U.Z.getVoiceChannelId() === t.id, [t.id]),
        i = (0, N.Z)({ location: 'AudienceControlTray' }),
        { enabled: l } = (0, p.Z)({ location: 'AudienceControlTray' }),
        { coloredIcons: s } = (0, j.Z)({ location: 'AudienceControlTray' });
    return i
        ? (0, r.jsxs)('div', {
              className: eo.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: o()(eo.buttonSection, { [eo.experimentButtonSection]: s }),
                      children: [(0, r.jsx)(eh, { channelId: t.id }), n ? (0, r.jsx)(es, { channel: t }) : null, l ? (0, r.jsx)(Z.Z, { channel: t }) : null]
                  }),
                  (0, r.jsx)(ed, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: eo.container,
              children: [(0, r.jsx)(eh, { channelId: t.id }), n ? (0, r.jsx)(es, { channel: t }) : null, (0, r.jsx)(ed, { channel: t })]
          });
});
function eu(e) {
    let { onClick: t } = e;
    return (0, N.Z)({ location: 'MakeMeASpeakerButton' })
        ? (0, r.jsx)(w.d, {
              onClick: t,
              iconComponent: s.Lrb,
              label: el.NW.string(el.t['8Joh+v'])
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: eo.primaryButtonColor,
              className: o()(eo.buttonSpacing, eo.buttonWithTextButton),
              onClick: t,
              children: (0, r.jsxs)('div', {
                  className: eo.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Lrb, {
                          size: 'md',
                          color: 'currentColor',
                          className: eo.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: el.NW.string(el.t['8Joh+v'])
                      })
                  ]
              })
          });
}
function ed(e) {
    let { channel: t, onSelect: n } = e,
        i = (0, u.bp)(),
        { canManageGuildEvent: l } = (0, x.XJ)(t),
        c = (0, a.e7)([Y.Z], () => Y.Z.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, a.e7)([C.ZP], () => C.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        p = (0, a.e7)([U.Z], () => U.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: h } = (0, P.Z)(t),
        f = L.default.getId(),
        [m] = (0, en.Z)(t),
        b = q.ZP.isModerator(f, t.id),
        _ = (0, V.B)(t.id),
        v = l(d),
        y = (0, N.Z)({ location: 'ExitStageButton' });
    return p
        ? (b || v) && null != c
            ? (0, r.jsx)(s.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: l } = e;
                      return (0, r.jsx)(A.Z, {
                          children: (0, r.jsx)(s.v2r, {
                              navId: 'exit-options',
                              'aria-label': el.NW.string(el.t['3Uj+2t']),
                              onClose: l,
                              onSelect: n,
                              onInteraction: (0, g.u)('End Stage', 'StageChannelControlTray', { entrypoint: ei.A5.CARET }),
                              children: (0, r.jsx)(s.sNh, {
                                  id: 'end-stage',
                                  color: 'danger',
                                  action: () => (0, F.Ev)(t, i),
                                  label: el.NW.string(el.t.Fmx5y8),
                                  icon: s.k$p
                              })
                          })
                      });
                  },
                  align: 'center',
                  position: 'top',
                  spacing: y ? 16 : void 0,
                  animation: s.yRy.Animation.FADE,
                  children: (e, n) => {
                      let { onClick: l } = e,
                          { isShown: o } = n;
                      return (0, r.jsx)(R.Z, {
                          label: el.NW.string(el.t.c6qKws),
                          onClick: () =>
                              ea({
                                  channel: t,
                                  appContext: i
                              }),
                          onPopoutClick: l,
                          popoutOpen: o,
                          className: y ? void 0 : eo.buttonSpacing
                      });
                  }
              })
            : (h && !_) || m
              ? y
                  ? (0, r.jsx)(R.Z, {
                        label: el.NW.string(el.t.SMKyio),
                        onClick: () =>
                            ea({
                                channel: t,
                                appContext: i
                            }),
                        className: eo.experimentButtonSpacing
                    })
                  : (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.MEDIUM,
                        color: s.zxk.Colors.RED,
                        className: o()(eo.buttonSpacing, eo.buttonWithTextButton),
                        onClick: () =>
                            ea({
                                channel: t,
                                appContext: i
                            }),
                        children: (0, r.jsxs)('div', {
                            className: eo.buttonWithTextInnerContainer,
                            children: [
                                (0, r.jsx)(s.gkL, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: eo.buttonWithTextIcon
                                }),
                                (0, r.jsx)(s.Text, {
                                    color: 'none',
                                    variant: 'text-sm/medium',
                                    children: el.NW.string(el.t.SMKyio)
                                })
                            ]
                        })
                    })
              : (0, r.jsx)(R.Z, {
                    label: el.NW.string(el.t.c6qKws),
                    onClick: () =>
                        ea({
                            channel: t,
                            appContext: i
                        }),
                    className: y ? void 0 : eo.buttonSpacing
                })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: s.zxk.Colors.GREEN,
              className: o()(eo.buttonSpacing, eo.buttonWithTextButton),
              onClick: () => {
                  (0, G.TM)(t);
              },
              children: (0, r.jsxs)('div', {
                  className: eo.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Csw, {
                          size: 'md',
                          color: 'currentColor',
                          className: eo.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: el.NW.string(el.t['7vb2cX'])
                      })
                  ]
              })
          });
}
function ep(e) {
    let { onClick: t } = e;
    return (0, N.Z)({ location: 'MoveToAudienceButton' })
        ? (0, r.jsx)(w.d, {
              iconComponent: s.zRq,
              label: el.NW.string(el.t.ezLpY2),
              onClick: t
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: eo.primaryButtonColor,
              className: o()(eo.buttonSpacing, eo.buttonWithTextButton),
              onClick: t,
              children: (0, r.jsxs)('div', {
                  className: eo.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.zRq, {
                          size: 'md',
                          color: 'currentColor',
                          className: eo.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: el.NW.string(el.t.ezLpY2)
                      })
                  ]
              })
          });
}
function eh(e) {
    let { channelId: t } = e,
        n = (0, a.e7)([J.Z], () => J.Z.isMuted()),
        i = (0, Q.pp)(t),
        l = (0, a.e7)([J.Z], () => J.Z.shouldPlay()),
        { coloredIcons: o } = (0, j.Z)({ location: 'MusicButton' });
    return i
        ? (0, r.jsx)(w.d, {
              isActive: o ? !n : n,
              label: n ? el.NW.string(el.t.ScHlfn) : el.NW.string(el.t.zqxfra),
              iconComponent: n ? s.xjP : s.RZG,
              color: o && !n ? 'green' : void 0,
              onClick: () => (0, X.v)(!n)
          })
        : (0, r.jsx)(w.d, {
              isActive: o ? l : !l,
              label: l ? el.NW.string(el.t.zqxfra) : el.NW.string(el.t.ScHlfn),
              iconComponent: l ? s.RZG : s.xjP,
              color: o && l ? 'green' : void 0,
              onClick: () => (0, X.z)(!l)
          });
}
let ef = i.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: i, mute: l } = (0, P.Z)(t),
        c = (0, V.B)(t.id),
        u = (0, a.e7)([b.Z], () => null != b.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: C, enabled: v } = (0, O.Z)(),
        y = (0, I.Z)(t),
        { limit: x, reachedLimit: w } = (0, E.Z)(t),
        R = (0, a.e7)([B.default], () => B.default.getCurrentUser()),
        L = (0, a.e7)([D.Z], () => (0, _.Z)(D.Z)),
        W = (0, a.e7)([U.Z], () => U.Z.getVoiceChannelId() === t.id, [t.id]),
        F = (0, a.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        G = (0, K.PK)(t.id),
        z = x > 0,
        q = (w && !G) || (null != F && F.user.id !== (null == R ? void 0 : R.id)),
        Y = (0, N.Z)({ location: 'SpeakerControlTray' }),
        { enabled: X } = (0, p.Z)({ location: 'SpeakerControlTray' }),
        { coloredIcons: Q } = (0, j.Z)({ location: 'SpeakerControlTray' }),
        J = (0, g.u)('AudioDeviceMenu', 'StageChannelControlTray', { entrypoint: ei.A5.CARET });
    if (null == R) return null;
    let $ = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(A.Z, {
                        children: (0, r.jsx)(f.Z, {
                            onClose: t,
                            simplified: X,
                            onInteraction: (0, g.u)('VideoDeviceMenu', 'StageChannelControlTray', { entrypoint: ei.A5.CARET })
                        })
                    });
                },
                position: 'top',
                align: Y ? 'right' : 'center',
                spacing: Y ? 16 : void 0,
                animation: s.yRy.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: i } = t;
                    return (0, r.jsx)(k.C, {
                        centerButton: !0,
                        hasPermission: y,
                        enabled: v,
                        cameraUnavailable: C,
                        onChange: S.r,
                        onCameraUnavailable: T.Z,
                        channelLimitReached: w,
                        channelLimit: x,
                        popoutOpen: i,
                        onPopoutClick: n
                    });
                }
            }),
            Y
                ? null
                : (0, r.jsx)(S.NZ, {
                      channel: t,
                      currentUser: R,
                      exitFullScreen: () => null,
                      canGoLive: L,
                      hasPermission: y,
                      disabled: q
                  })
        ]
    });
    return Y
        ? (0, r.jsxs)('div', {
              className: eo.experimentWrapper,
              children: [
                  W && !n
                      ? (0, r.jsx)('div', {
                            className: o()(eo.buttonSection, { [eo.experimentButtonSection]: Q }),
                            children: (0, r.jsxs)('div', {
                                className: o()(eo.avControls),
                                children: [
                                    (0, r.jsx)(s.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(A.Z, {
                                                children: X
                                                    ? (0, r.jsx)(h.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderInputModes: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputVolume: !0,
                                                          renderOutputVolume: !0,
                                                          renderDeafen: !0,
                                                          simplified: !0,
                                                          onInteraction: J
                                                      })
                                                    : (0, r.jsx)(h.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0,
                                                          onInteraction: J
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
                                            return (0, r.jsx)(M.Z, {
                                                centerButton: !0,
                                                onPopoutClick: o,
                                                selfMute: i,
                                                serverMute: l,
                                                suppress: n,
                                                popoutOpen: a,
                                                onClick: () => (0, m.Z)(l, n, 'Stage Channel Controls'),
                                                awaitingRemote: u
                                            });
                                        }
                                    }),
                                    z &&
                                        (0, r.jsx)('div', {
                                            className: eo.avSpacing,
                                            'aria-hidden': 'true',
                                            role: 'presentation'
                                        }),
                                    z && $
                                ]
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: o()(eo.buttonSection, { [eo.experimentButtonSection]: Q }),
                      children: [
                          W && !n && z
                              ? (0, r.jsx)(S.NZ, {
                                    channel: t,
                                    currentUser: R,
                                    exitFullScreen: () => null,
                                    canGoLive: L,
                                    hasPermission: y,
                                    disabled: q
                                })
                              : null,
                          (0, r.jsx)(eh, { channelId: t.id }),
                          W && (0, r.jsx)(es, { channel: t }),
                          W && c && n && (0, r.jsx)(eu, { onClick: () => (0, H.RK)(t, !1) }),
                          W && !n && (0, r.jsx)(ep, { onClick: () => (0, H.yi)(t) }),
                          X ? (0, r.jsx)(Z.Z, { channel: t }) : null
                      ]
                  }),
                  (0, r.jsx)(ed, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: eo.container,
              children: [
                  (0, r.jsx)(eh, { channelId: t.id }),
                  W && (0, r.jsx)(es, { channel: t }),
                  W && !n
                      ? (0, r.jsxs)('div', {
                            className: o()(eo.avControls, eo.buttonSpacing),
                            children: [
                                z && $,
                                (0, r.jsx)(s.yRy, {
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(A.Z, {
                                            children: (0, r.jsx)(h.default, {
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
                                        let { onClick: o } = e,
                                            { isShown: a } = t;
                                        return (0, r.jsx)(M.Z, {
                                            centerButton: !0,
                                            onPopoutClick: o,
                                            selfMute: i,
                                            serverMute: l,
                                            suppress: n,
                                            popoutOpen: a,
                                            onClick: () => (0, m.Z)(l, n, 'Stage Channel Controls'),
                                            awaitingRemote: u
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  W && c && n && (0, r.jsx)(eu, { onClick: () => (0, H.RK)(t, !1) }),
                  W && !n && (0, r.jsx)(ep, { onClick: () => (0, H.yi)(t) }),
                  (0, r.jsx)(ed, { channel: t })
              ]
          });
});
function em(e) {
    let { channel: t } = e,
        n = (0, N.Z)({ location: 'StartStageControlTray' }),
        { coloredIcons: i } = (0, j.Z)({ location: 'StartStageControlTray' });
    return n
        ? (0, r.jsxs)('div', {
              className: eo.experimentWrapper,
              children: [
                  (0, r.jsx)('div', {
                      className: o()(eo.buttonSection, { [eo.experimentButtonSection]: i }),
                      children: (0, r.jsx)(eh, { channelId: t.id })
                  }),
                  (0, r.jsx)(ed, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: eo.container,
              children: [(0, r.jsx)(eh, { channelId: t.id }), (0, r.jsx)(ed, { channel: t })]
          });
}
let eg = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, ee.Z)(t.id),
        l = (0, V.B)(t.id),
        o = (0, a.e7)([W.Z], () => W.Z.can(z.yP, t), [t]),
        s = (0, et.Z)(t.id),
        c = (0, a.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        u = !s && null == c;
    return n
        ? (0, r.jsx)(em, { channel: t })
        : i || l
          ? (0, r.jsxs)('div', {
                className: eo.containerColumn,
                children: [
                    (0, r.jsxs)('div', {
                        className: eo.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(v.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)('div', { className: eo.separator }),
                            u && o
                                ? (0, r.jsx)(y.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, r.jsx)('div', { className: eo.separator })
                        ]
                    }),
                    (0, r.jsx)(ef, { channel: t })
                ]
            })
          : (0, r.jsx)(ec, { channel: t });
});
