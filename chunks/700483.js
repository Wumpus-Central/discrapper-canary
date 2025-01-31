n.d(t, { Z: () => eu }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(287734),
    d = n(40851),
    u = n(358221),
    h = n(659580),
    p = n(793865),
    m = n(575175),
    f = n(258609),
    g = n(74299),
    _ = n(924301),
    C = n(459502),
    x = n(856691),
    v = n(357156),
    E = n(861254),
    I = n(923973),
    b = n(829750),
    Z = n(189771),
    N = n(294629),
    T = n(793319),
    S = n(560688),
    j = n(390322),
    A = n(871499),
    y = n(88479),
    P = n(386000),
    R = n(25827),
    M = n(314897),
    L = n(131951),
    k = n(496675),
    O = n(944486),
    D = n(594174),
    w = n(881824),
    U = n(471253),
    B = n(922482),
    F = n(200498),
    H = n(146085),
    G = n(88751),
    V = n(427679),
    z = n(368442),
    W = n(600518),
    Y = n(485287),
    q = n(754277),
    K = n(719100),
    X = n(184805),
    J = n(643632),
    Q = n(270295),
    $ = n(981631),
    ee = n(388032),
    et = n(614826);
function en(e) {
    let { channel: t, appContext: n } = e;
    if ((0, K.Z)(t)) {
        (0, w.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function ei(e) {
    let { channel: t } = e,
        n = (0, X.Z)(t.id),
        [l, a] = (0, Q.Z)(t),
        r = (0, s.e7)([k.Z], () => k.Z.can($.Plq.REQUEST_TO_SPEAK, t)),
        { groupedButtons: c } = (0, E.ZP)({ location: 'AudienceRaiseHandButton' });
    return n
        ? null
        : (0, i.jsx)(A.d, {
              isActive: l,
              label: l ? ee.intl.string(ee.t.GCimTk) : r ? ee.intl.string(ee.t.hLbG5O) : ee.intl.string(ee.t.e4WMv7),
              iconComponent: o.V9,
              onClick: a,
              className: c ? void 0 : et.buttonSpacing,
              disabled: !r && !l
          });
}
let el = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, s.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
        { groupedButtons: l } = (0, E.ZP)({ location: 'AudienceControlTray' });
    return l
        ? (0, i.jsxs)('div', {
              className: et.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: et.buttonSection,
                      children: [(0, i.jsx)(eo, { channelId: t.id }), n ? (0, i.jsx)(ei, { channel: t }) : null]
                  }),
                  (0, i.jsx)(er, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: et.container,
              children: [(0, i.jsx)(eo, { channelId: t.id }), n ? (0, i.jsx)(ei, { channel: t }) : null, (0, i.jsx)(er, { channel: t })]
          });
});
function ea(e) {
    let { onClick: t } = e,
        { groupedButtons: n } = (0, E.ZP)({ location: 'MakeMeASpeakerButton' });
    return n
        ? (0, i.jsx)(A.d, {
              onClick: t,
              iconComponent: o.Lrb,
              label: ee.intl.string(ee.t['8Joh+v'])
          })
        : (0, i.jsx)(o.zxk, {
              size: o.zxk.Sizes.MEDIUM,
              color: et.primaryButtonColor,
              className: r()(et.buttonSpacing, et.buttonWithTextButton),
              onClick: t,
              children: (0, i.jsxs)('div', {
                  className: et.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.Lrb, {
                          size: 'md',
                          color: 'currentColor',
                          className: et.buttonWithTextIcon
                      }),
                      (0, i.jsx)(o.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: ee.intl.string(ee.t['8Joh+v'])
                      })
                  ]
              })
          });
}
function er(e) {
    let { channel: t, onSelect: n } = e,
        l = (0, d.bp)(),
        { canManageGuildEvent: a } = (0, v.XJ)(t),
        c = (0, s.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id), [t.id]),
        u = (0, s.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        h = (0, s.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: p } = (0, N.Z)(t),
        m = M.default.getId(),
        [f] = (0, Q.Z)(t),
        g = G.ZP.isModerator(m, t.id),
        C = (0, F.B)(t.id),
        x = a(u),
        { groupedButtons: I } = (0, E.ZP)({ location: 'ExitStageButton' });
    return h
        ? (g || x) && null != c
            ? (0, i.jsx)(o.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: a } = e;
                      return (0, i.jsx)(j.Z, {
                          children: (0, i.jsx)(o.v2r, {
                              navId: 'exit-options',
                              'aria-label': ee.intl.string(ee.t['3Uj+2t']),
                              onClose: a,
                              onSelect: n,
                              children: (0, i.jsx)(o.sNh, {
                                  id: 'end-stage',
                                  color: 'danger',
                                  action: () => (0, w.Ev)(t, l),
                                  label: ee.intl.string(ee.t.Fmx5y8),
                                  icon: o.k$p
                              })
                          })
                      });
                  },
                  align: 'center',
                  position: 'top',
                  spacing: I ? 16 : void 0,
                  animation: o.yRy.Animation.FADE,
                  children: (e, n) => {
                      let { onClick: a } = e,
                          { isShown: r } = n;
                      return (0, i.jsx)(y.Z, {
                          label: ee.intl.string(ee.t.c6qKws),
                          onClick: () =>
                              en({
                                  channel: t,
                                  appContext: l
                              }),
                          onPopoutClick: a,
                          popoutOpen: r,
                          className: I ? void 0 : et.buttonSpacing
                      });
                  }
              })
            : (p && !C) || f
              ? I
                  ? (0, i.jsx)(y.Z, {
                        label: ee.intl.string(ee.t.SMKyio),
                        onClick: () =>
                            en({
                                channel: t,
                                appContext: l
                            }),
                        className: et.experimentButtonSpacing
                    })
                  : (0, i.jsx)(o.zxk, {
                        size: o.zxk.Sizes.MEDIUM,
                        color: o.zxk.Colors.RED,
                        className: r()(et.buttonSpacing, et.buttonWithTextButton),
                        onClick: () =>
                            en({
                                channel: t,
                                appContext: l
                            }),
                        children: (0, i.jsxs)('div', {
                            className: et.buttonWithTextInnerContainer,
                            children: [
                                (0, i.jsx)(o.gkL, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: et.buttonWithTextIcon
                                }),
                                (0, i.jsx)(o.Text, {
                                    color: 'none',
                                    variant: 'text-sm/medium',
                                    children: ee.intl.string(ee.t.SMKyio)
                                })
                            ]
                        })
                    })
              : (0, i.jsx)(y.Z, {
                    label: ee.intl.string(ee.t.c6qKws),
                    onClick: () =>
                        en({
                            channel: t,
                            appContext: l
                        }),
                    className: I ? void 0 : et.buttonSpacing
                })
        : (0, i.jsx)(o.zxk, {
              size: o.zxk.Sizes.MEDIUM,
              color: o.zxk.Colors.GREEN,
              className: r()(et.buttonSpacing, et.buttonWithTextButton),
              onClick: () => {
                  (0, B.TM)(t);
              },
              children: (0, i.jsxs)('div', {
                  className: et.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.Csw, {
                          size: 'md',
                          color: 'currentColor',
                          className: et.buttonWithTextIcon
                      }),
                      (0, i.jsx)(o.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: ee.intl.string(ee.t['7vb2cX'])
                      })
                  ]
              })
          });
}
function es(e) {
    let { onClick: t } = e,
        { groupedButtons: n } = (0, E.ZP)({ location: 'MoveToAudienceButton' });
    return n
        ? (0, i.jsx)(A.d, {
              iconComponent: o.zRq,
              label: ee.intl.string(ee.t.ezLpY2),
              onClick: t
          })
        : (0, i.jsx)(o.zxk, {
              size: o.zxk.Sizes.MEDIUM,
              color: et.primaryButtonColor,
              className: r()(et.buttonSpacing, et.buttonWithTextButton),
              onClick: t,
              children: (0, i.jsxs)('div', {
                  className: et.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.zRq, {
                          size: 'md',
                          color: 'currentColor',
                          className: et.buttonWithTextIcon
                      }),
                      (0, i.jsx)(o.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: ee.intl.string(ee.t.ezLpY2)
                      })
                  ]
              })
          });
}
function eo(e) {
    let { channelId: t } = e,
        n = (0, s.e7)([q.Z], () => q.Z.isMuted()),
        l = (0, Y.pp)(t),
        a = (0, s.e7)([q.Z], () => q.Z.shouldPlay());
    return l
        ? (0, i.jsx)(A.d, {
              isActive: n,
              label: n ? ee.intl.string(ee.t.ScHlfn) : ee.intl.string(ee.t.zqxfra),
              iconComponent: n ? o.xjP : o.RZG,
              onClick: () => (0, W.v)(!n)
          })
        : (0, i.jsx)(A.d, {
              isActive: a,
              label: a ? ee.intl.string(ee.t.zqxfra) : ee.intl.string(ee.t.ScHlfn),
              iconComponent: a ? o.RZG : o.xjP,
              onClick: () => (0, W.z)(!a)
          });
}
let ec = l.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: l, mute: a } = (0, N.Z)(t),
        c = (0, F.B)(t.id),
        d = (0, s.e7)([f.Z], () => null != f.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: _, enabled: C } = (0, I.Z)(),
        x = (0, Z.Z)(t),
        { limit: v, reachedLimit: A } = (0, b.Z)(t),
        y = (0, s.e7)([D.default], () => D.default.getCurrentUser()),
        M = (0, s.e7)([L.Z], () => (0, g.Z)(L.Z)),
        k = (0, s.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
        w = (0, s.e7)([u.Z], () => u.Z.getStreamParticipants(t.id)[0], [t.id]),
        B = (0, z.PK)(t.id),
        H = v > 0,
        G = (A && !B) || (null != w && w.user.id !== (null == y ? void 0 : y.id)),
        { groupedButtons: V } = (0, E.ZP)({ location: 'SpeakerControlTray' });
    if (null == y) return null;
    let W = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(j.Z, { children: (0, i.jsx)(p.Z, { onClose: t }) });
                },
                position: 'top',
                align: V ? 'right' : 'center',
                spacing: V ? 16 : void 0,
                animation: o.yRy.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: l } = t;
                    return (0, i.jsx)(R.C, {
                        centerButton: !0,
                        hasPermission: x,
                        enabled: C,
                        cameraUnavailable: _,
                        onChange: T.r,
                        onCameraUnavailable: S.Z,
                        channelLimitReached: A,
                        channelLimit: v,
                        popoutOpen: l,
                        onPopoutClick: n
                    });
                }
            }),
            V
                ? null
                : (0, i.jsx)(T.NZ, {
                      channel: t,
                      currentUser: y,
                      exitFullScreen: () => null,
                      canGoLive: M,
                      hasPermission: x,
                      disabled: G
                  })
        ]
    });
    return V
        ? (0, i.jsxs)('div', {
              className: et.experimentWrapper,
              children: [
                  k && !n
                      ? (0, i.jsx)('div', {
                            className: et.buttonSection,
                            children: (0, i.jsxs)('div', {
                                className: r()(et.avControls),
                                children: [
                                    (0, i.jsx)(o.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, i.jsx)(j.Z, {
                                                children: (0, i.jsx)(h.default, {
                                                    onClose: t,
                                                    renderInputDevices: !0,
                                                    renderOutputDevices: !0
                                                })
                                            });
                                        },
                                        align: 'right',
                                        position: 'top',
                                        spacing: 16,
                                        animation: o.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: r } = e,
                                                { isShown: s } = t;
                                            return (0, i.jsx)(P.Z, {
                                                centerButton: !0,
                                                onPopoutClick: r,
                                                selfMute: l,
                                                serverMute: a,
                                                suppress: n,
                                                popoutOpen: s,
                                                onClick: () => (0, m.Z)(a, n, 'Stage Channel Controls'),
                                                awaitingRemote: d
                                            });
                                        }
                                    }),
                                    H &&
                                        (0, i.jsx)('div', {
                                            className: et.avSpacing,
                                            'aria-hidden': 'true',
                                            role: 'presentation'
                                        }),
                                    H && W
                                ]
                            })
                        })
                      : null,
                  (0, i.jsxs)('div', {
                      className: et.buttonSection,
                      children: [
                          k && !n && H
                              ? (0, i.jsx)(T.NZ, {
                                    channel: t,
                                    currentUser: y,
                                    exitFullScreen: () => null,
                                    canGoLive: M,
                                    hasPermission: x,
                                    disabled: G
                                })
                              : null,
                          (0, i.jsx)(eo, { channelId: t.id }),
                          k && (0, i.jsx)(ei, { channel: t }),
                          k && c && n && (0, i.jsx)(ea, { onClick: () => (0, U.RK)(t, !1) }),
                          k && !n && (0, i.jsx)(es, { onClick: () => (0, U.yi)(t) })
                      ]
                  }),
                  (0, i.jsx)(er, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: et.container,
              children: [
                  (0, i.jsx)(eo, { channelId: t.id }),
                  k && (0, i.jsx)(ei, { channel: t }),
                  k && !n
                      ? (0, i.jsxs)('div', {
                            className: r()(et.avControls, et.buttonSpacing),
                            children: [
                                H && W,
                                (0, i.jsx)(o.yRy, {
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, i.jsx)(j.Z, {
                                            children: (0, i.jsx)(h.default, {
                                                onClose: t,
                                                renderInputDevices: !0,
                                                renderOutputDevices: !0
                                            })
                                        });
                                    },
                                    align: 'center',
                                    position: 'top',
                                    animation: o.yRy.Animation.FADE,
                                    children: (e, t) => {
                                        let { onClick: r } = e,
                                            { isShown: s } = t;
                                        return (0, i.jsx)(P.Z, {
                                            centerButton: !0,
                                            onPopoutClick: r,
                                            selfMute: l,
                                            serverMute: a,
                                            suppress: n,
                                            popoutOpen: s,
                                            onClick: () => (0, m.Z)(a, n, 'Stage Channel Controls'),
                                            awaitingRemote: d
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  k && c && n && (0, i.jsx)(ea, { onClick: () => (0, U.RK)(t, !1) }),
                  k && !n && (0, i.jsx)(es, { onClick: () => (0, U.yi)(t) }),
                  (0, i.jsx)(er, { channel: t })
              ]
          });
});
function ed(e) {
    let { channel: t } = e,
        { groupedButtons: n } = (0, E.ZP)({ location: 'StartStageControlTray' });
    return n
        ? (0, i.jsxs)('div', {
              className: et.experimentWrapper,
              children: [
                  (0, i.jsx)('div', {
                      className: n ? et.buttonSection : void 0,
                      children: (0, i.jsx)(eo, { channelId: t.id })
                  }),
                  (0, i.jsx)(er, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: et.container,
              children: [(0, i.jsx)(eo, { channelId: t.id }), (0, i.jsx)(er, { channel: t })]
          });
}
let eu = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, X.Z)(t.id),
        a = (0, F.B)(t.id),
        r = (0, s.e7)([k.Z], () => k.Z.can(H.yP, t), [t]),
        o = (0, J.Z)(t.id),
        c = (0, s.e7)([u.Z], () => (null != t ? u.Z.getSelectedParticipant(t.id) : null)),
        d = !o && null == c;
    return n
        ? (0, i.jsx)(ed, { channel: t })
        : l || a
          ? (0, i.jsxs)('div', {
                className: et.containerColumn,
                children: [
                    (0, i.jsxs)('div', {
                        className: et.eventPrompts,
                        children: [
                            d ? (0, i.jsx)(C.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, i.jsx)('div', { className: et.separator }),
                            d && r
                                ? (0, i.jsx)(x.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, i.jsx)('div', { className: et.separator })
                        ]
                    }),
                    (0, i.jsx)(ec, { channel: t })
                ]
            })
          : (0, i.jsx)(el, { channel: t });
});
