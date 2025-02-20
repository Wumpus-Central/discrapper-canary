n.d(t, { Z: () => eh }), n(47120);
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
    g = n(258609),
    b = n(74299),
    _ = n(924301),
    C = n(459502),
    v = n(856691),
    y = n(357156),
    x = n(923973),
    j = n(829750),
    O = n(82965),
    N = n(189771),
    E = n(294629),
    P = n(793319),
    I = n(987329),
    S = n(560688),
    Z = n(390322),
    T = n(871499),
    A = n(88479),
    w = n(386000),
    R = n(25827),
    k = n(314897),
    M = n(131951),
    L = n(496675),
    D = n(944486),
    W = n(594174),
    U = n(881824),
    B = n(471253),
    F = n(922482),
    H = n(200498),
    G = n(146085),
    V = n(88751),
    z = n(427679),
    q = n(368442),
    Y = n(600518),
    K = n(485287),
    X = n(754277),
    J = n(719100),
    Q = n(184805),
    $ = n(643632),
    ee = n(270295),
    et = n(981631),
    en = n(388032),
    er = n(164762);
function ei(e) {
    let { channel: t, appContext: n } = e;
    if ((0, J.Z)(t)) {
        (0, U.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function el(e) {
    let { channel: t } = e,
        n = (0, Q.Z)(t.id),
        [i, l] = (0, ee.Z)(t),
        o = (0, a.e7)([L.Z], () => L.Z.can(et.Plq.REQUEST_TO_SPEAK, t)),
        c = (0, O.Z)({ location: 'AudienceRaiseHandButton' });
    return n
        ? null
        : (0, r.jsx)(T.d, {
              isActive: i,
              label: i ? en.NW.string(en.t.GCimTk) : o ? en.NW.string(en.t.hLbG5O) : en.NW.string(en.t.e4WMv7),
              iconComponent: s.V9,
              onClick: l,
              className: c ? void 0 : er.buttonSpacing,
              disabled: !o && !i
          });
}
let eo = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, a.e7)([D.Z], () => D.Z.getVoiceChannelId() === t.id, [t.id]),
        i = (0, O.Z)({ location: 'AudienceControlTray' }),
        { enabled: l } = (0, p.Z)({ location: 'AudienceControlTray' });
    return i
        ? (0, r.jsxs)('div', {
              className: er.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: er.buttonSection,
                      children: [(0, r.jsx)(eu, { channelId: t.id }), n ? (0, r.jsx)(el, { channel: t }) : null, l ? (0, r.jsx)(I.Z, { channel: t }) : null]
                  }),
                  (0, r.jsx)(es, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: er.container,
              children: [(0, r.jsx)(eu, { channelId: t.id }), n ? (0, r.jsx)(el, { channel: t }) : null, (0, r.jsx)(es, { channel: t })]
          });
});
function ea(e) {
    let { onClick: t } = e;
    return (0, O.Z)({ location: 'MakeMeASpeakerButton' })
        ? (0, r.jsx)(T.d, {
              onClick: t,
              iconComponent: s.Lrb,
              label: en.NW.string(en.t['8Joh+v'])
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: er.primaryButtonColor,
              className: o()(er.buttonSpacing, er.buttonWithTextButton),
              onClick: t,
              children: (0, r.jsxs)('div', {
                  className: er.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Lrb, {
                          size: 'md',
                          color: 'currentColor',
                          className: er.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: en.NW.string(en.t['8Joh+v'])
                      })
                  ]
              })
          });
}
function es(e) {
    let { channel: t, onSelect: n } = e,
        i = (0, u.bp)(),
        { canManageGuildEvent: l } = (0, y.XJ)(t),
        c = (0, a.e7)([z.Z], () => z.Z.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, a.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        p = (0, a.e7)([D.Z], () => D.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: h } = (0, E.Z)(t),
        f = k.default.getId(),
        [m] = (0, ee.Z)(t),
        g = V.ZP.isModerator(f, t.id),
        b = (0, H.B)(t.id),
        C = l(d),
        v = (0, O.Z)({ location: 'ExitStageButton' });
    return p
        ? (g || C) && null != c
            ? (0, r.jsx)(s.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: l } = e;
                      return (0, r.jsx)(Z.Z, {
                          children: (0, r.jsx)(s.v2r, {
                              navId: 'exit-options',
                              'aria-label': en.NW.string(en.t['3Uj+2t']),
                              onClose: l,
                              onSelect: n,
                              children: (0, r.jsx)(s.sNh, {
                                  id: 'end-stage',
                                  color: 'danger',
                                  action: () => (0, U.Ev)(t, i),
                                  label: en.NW.string(en.t.Fmx5y8),
                                  icon: s.k$p
                              })
                          })
                      });
                  },
                  align: 'center',
                  position: 'top',
                  spacing: v ? 16 : void 0,
                  animation: s.yRy.Animation.FADE,
                  children: (e, n) => {
                      let { onClick: l } = e,
                          { isShown: o } = n;
                      return (0, r.jsx)(A.Z, {
                          label: en.NW.string(en.t.c6qKws),
                          onClick: () =>
                              ei({
                                  channel: t,
                                  appContext: i
                              }),
                          onPopoutClick: l,
                          popoutOpen: o,
                          className: v ? void 0 : er.buttonSpacing
                      });
                  }
              })
            : (h && !b) || m
              ? v
                  ? (0, r.jsx)(A.Z, {
                        label: en.NW.string(en.t.SMKyio),
                        onClick: () =>
                            ei({
                                channel: t,
                                appContext: i
                            }),
                        className: er.experimentButtonSpacing
                    })
                  : (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.MEDIUM,
                        color: s.zxk.Colors.RED,
                        className: o()(er.buttonSpacing, er.buttonWithTextButton),
                        onClick: () =>
                            ei({
                                channel: t,
                                appContext: i
                            }),
                        children: (0, r.jsxs)('div', {
                            className: er.buttonWithTextInnerContainer,
                            children: [
                                (0, r.jsx)(s.gkL, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: er.buttonWithTextIcon
                                }),
                                (0, r.jsx)(s.Text, {
                                    color: 'none',
                                    variant: 'text-sm/medium',
                                    children: en.NW.string(en.t.SMKyio)
                                })
                            ]
                        })
                    })
              : (0, r.jsx)(A.Z, {
                    label: en.NW.string(en.t.c6qKws),
                    onClick: () =>
                        ei({
                            channel: t,
                            appContext: i
                        }),
                    className: v ? void 0 : er.buttonSpacing
                })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: s.zxk.Colors.GREEN,
              className: o()(er.buttonSpacing, er.buttonWithTextButton),
              onClick: () => {
                  (0, F.TM)(t);
              },
              children: (0, r.jsxs)('div', {
                  className: er.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Csw, {
                          size: 'md',
                          color: 'currentColor',
                          className: er.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: en.NW.string(en.t['7vb2cX'])
                      })
                  ]
              })
          });
}
function ec(e) {
    let { onClick: t } = e;
    return (0, O.Z)({ location: 'MoveToAudienceButton' })
        ? (0, r.jsx)(T.d, {
              iconComponent: s.zRq,
              label: en.NW.string(en.t.ezLpY2),
              onClick: t
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: er.primaryButtonColor,
              className: o()(er.buttonSpacing, er.buttonWithTextButton),
              onClick: t,
              children: (0, r.jsxs)('div', {
                  className: er.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.zRq, {
                          size: 'md',
                          color: 'currentColor',
                          className: er.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: en.NW.string(en.t.ezLpY2)
                      })
                  ]
              })
          });
}
function eu(e) {
    let { channelId: t } = e,
        n = (0, a.e7)([X.Z], () => X.Z.isMuted()),
        i = (0, K.pp)(t),
        l = (0, a.e7)([X.Z], () => X.Z.shouldPlay());
    return i
        ? (0, r.jsx)(T.d, {
              isActive: n,
              label: n ? en.NW.string(en.t.ScHlfn) : en.NW.string(en.t.zqxfra),
              iconComponent: n ? s.xjP : s.RZG,
              onClick: () => (0, Y.v)(!n)
          })
        : (0, r.jsx)(T.d, {
              isActive: l,
              label: l ? en.NW.string(en.t.zqxfra) : en.NW.string(en.t.ScHlfn),
              iconComponent: l ? s.RZG : s.xjP,
              onClick: () => (0, Y.z)(!l)
          });
}
let ed = i.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: i, mute: l } = (0, E.Z)(t),
        c = (0, H.B)(t.id),
        u = (0, a.e7)([g.Z], () => null != g.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: _, enabled: C } = (0, x.Z)(),
        v = (0, N.Z)(t),
        { limit: y, reachedLimit: T } = (0, j.Z)(t),
        A = (0, a.e7)([W.default], () => W.default.getCurrentUser()),
        k = (0, a.e7)([M.Z], () => (0, b.Z)(M.Z)),
        L = (0, a.e7)([D.Z], () => D.Z.getVoiceChannelId() === t.id, [t.id]),
        U = (0, a.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        F = (0, q.PK)(t.id),
        G = y > 0,
        V = (T && !F) || (null != U && U.user.id !== (null == A ? void 0 : A.id)),
        z = (0, O.Z)({ location: 'SpeakerControlTray' }),
        { enabled: Y } = (0, p.Z)({ location: 'SpeakerControlTray' });
    if (null == A) return null;
    let K = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(Z.Z, {
                        children: (0, r.jsx)(f.Z, {
                            onClose: t,
                            simplified: Y
                        })
                    });
                },
                position: 'top',
                align: z ? 'right' : 'center',
                spacing: z ? 16 : void 0,
                animation: s.yRy.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: i } = t;
                    return (0, r.jsx)(R.C, {
                        centerButton: !0,
                        hasPermission: v,
                        enabled: C,
                        cameraUnavailable: _,
                        onChange: P.r,
                        onCameraUnavailable: S.Z,
                        channelLimitReached: T,
                        channelLimit: y,
                        popoutOpen: i,
                        onPopoutClick: n
                    });
                }
            }),
            z
                ? null
                : (0, r.jsx)(P.NZ, {
                      channel: t,
                      currentUser: A,
                      exitFullScreen: () => null,
                      canGoLive: k,
                      hasPermission: v,
                      disabled: V
                  })
        ]
    });
    return z
        ? (0, r.jsxs)('div', {
              className: er.experimentWrapper,
              children: [
                  L && !n
                      ? (0, r.jsx)('div', {
                            className: er.buttonSection,
                            children: (0, r.jsxs)('div', {
                                className: o()(er.avControls),
                                children: [
                                    (0, r.jsx)(s.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(Z.Z, {
                                                children: Y
                                                    ? (0, r.jsx)(h.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderInputModes: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputVolume: !0,
                                                          renderOutputVolume: !0,
                                                          renderDeafen: !0,
                                                          simplified: !0
                                                      })
                                                    : (0, r.jsx)(h.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputModes: !0
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
                                            return (0, r.jsx)(w.Z, {
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
                                    G &&
                                        (0, r.jsx)('div', {
                                            className: er.avSpacing,
                                            'aria-hidden': 'true',
                                            role: 'presentation'
                                        }),
                                    G && K
                                ]
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: er.buttonSection,
                      children: [
                          L && !n && G
                              ? (0, r.jsx)(P.NZ, {
                                    channel: t,
                                    currentUser: A,
                                    exitFullScreen: () => null,
                                    canGoLive: k,
                                    hasPermission: v,
                                    disabled: V
                                })
                              : null,
                          (0, r.jsx)(eu, { channelId: t.id }),
                          L && (0, r.jsx)(el, { channel: t }),
                          L && c && n && (0, r.jsx)(ea, { onClick: () => (0, B.RK)(t, !1) }),
                          L && !n && (0, r.jsx)(ec, { onClick: () => (0, B.yi)(t) }),
                          Y ? (0, r.jsx)(I.Z, { channel: t }) : null
                      ]
                  }),
                  (0, r.jsx)(es, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: er.container,
              children: [
                  (0, r.jsx)(eu, { channelId: t.id }),
                  L && (0, r.jsx)(el, { channel: t }),
                  L && !n
                      ? (0, r.jsxs)('div', {
                            className: o()(er.avControls, er.buttonSpacing),
                            children: [
                                G && K,
                                (0, r.jsx)(s.yRy, {
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(Z.Z, {
                                            children: (0, r.jsx)(h.default, {
                                                onClose: t,
                                                renderInputDevices: !0,
                                                renderOutputDevices: !0
                                            })
                                        });
                                    },
                                    align: 'center',
                                    position: 'top',
                                    animation: s.yRy.Animation.FADE,
                                    children: (e, t) => {
                                        let { onClick: o } = e,
                                            { isShown: a } = t;
                                        return (0, r.jsx)(w.Z, {
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
                  L && c && n && (0, r.jsx)(ea, { onClick: () => (0, B.RK)(t, !1) }),
                  L && !n && (0, r.jsx)(ec, { onClick: () => (0, B.yi)(t) }),
                  (0, r.jsx)(es, { channel: t })
              ]
          });
});
function ep(e) {
    let { channel: t } = e,
        n = (0, O.Z)({ location: 'StartStageControlTray' });
    return n
        ? (0, r.jsxs)('div', {
              className: er.experimentWrapper,
              children: [
                  (0, r.jsx)('div', {
                      className: n ? er.buttonSection : void 0,
                      children: (0, r.jsx)(eu, { channelId: t.id })
                  }),
                  (0, r.jsx)(es, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: er.container,
              children: [(0, r.jsx)(eu, { channelId: t.id }), (0, r.jsx)(es, { channel: t })]
          });
}
let eh = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, Q.Z)(t.id),
        l = (0, H.B)(t.id),
        o = (0, a.e7)([L.Z], () => L.Z.can(G.yP, t), [t]),
        s = (0, $.Z)(t.id),
        c = (0, a.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        u = !s && null == c;
    return n
        ? (0, r.jsx)(ep, { channel: t })
        : i || l
          ? (0, r.jsxs)('div', {
                className: er.containerColumn,
                children: [
                    (0, r.jsxs)('div', {
                        className: er.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(C.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)('div', { className: er.separator }),
                            u && o
                                ? (0, r.jsx)(v.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, r.jsx)('div', { className: er.separator })
                        ]
                    }),
                    (0, r.jsx)(ed, { channel: t })
                ]
            })
          : (0, r.jsx)(eo, { channel: t });
});
