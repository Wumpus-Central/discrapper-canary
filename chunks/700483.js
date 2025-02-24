n.d(t, { Z: () => ef }), n(47120);
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
    x = n(221241),
    j = n(923973),
    O = n(829750),
    N = n(82965),
    E = n(189771),
    P = n(294629),
    I = n(793319),
    S = n(987329),
    Z = n(560688),
    T = n(390322),
    A = n(871499),
    w = n(88479),
    R = n(386000),
    k = n(25827),
    M = n(314897),
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
    er = n(388032),
    ei = n(164762);
function el(e) {
    let { channel: t, appContext: n } = e;
    if ((0, J.Z)(t)) {
        (0, B.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function eo(e) {
    let { channel: t } = e,
        n = (0, $.Z)(t.id),
        [i, l] = (0, et.Z)(t),
        o = (0, a.e7)([D.Z], () => D.Z.can(en.Plq.REQUEST_TO_SPEAK, t)),
        c = (0, N.Z)({ location: 'AudienceRaiseHandButton' }),
        { coloredIcons: u } = (0, x.Z)({ location: 'AudienceRaiseHandButton' });
    return n
        ? null
        : (0, r.jsx)(A.d, {
              isActive: i,
              label: i ? er.NW.string(er.t.GCimTk) : o ? er.NW.string(er.t.hLbG5O) : er.NW.string(er.t.e4WMv7),
              iconComponent: s.V9,
              onClick: l,
              className: c ? void 0 : ei.buttonSpacing,
              color: u && i ? 'green' : void 0,
              disabled: !o && !i
          });
}
let ea = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, a.e7)([W.Z], () => W.Z.getVoiceChannelId() === t.id, [t.id]),
        i = (0, N.Z)({ location: 'AudienceControlTray' }),
        { enabled: l } = (0, p.Z)({ location: 'AudienceControlTray' }),
        { coloredIcons: s } = (0, x.Z)({ location: 'AudienceControlTray' });
    return i
        ? (0, r.jsxs)('div', {
              className: ei.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: o()(ei.buttonSection, { [ei.experimentButtonSection]: s }),
                      children: [(0, r.jsx)(ed, { channelId: t.id }), n ? (0, r.jsx)(eo, { channel: t }) : null, l ? (0, r.jsx)(S.Z, { channel: t }) : null]
                  }),
                  (0, r.jsx)(ec, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: ei.container,
              children: [(0, r.jsx)(ed, { channelId: t.id }), n ? (0, r.jsx)(eo, { channel: t }) : null, (0, r.jsx)(ec, { channel: t })]
          });
});
function es(e) {
    let { onClick: t } = e;
    return (0, N.Z)({ location: 'MakeMeASpeakerButton' })
        ? (0, r.jsx)(A.d, {
              onClick: t,
              iconComponent: s.Lrb,
              label: er.NW.string(er.t['8Joh+v'])
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: ei.primaryButtonColor,
              className: o()(ei.buttonSpacing, ei.buttonWithTextButton),
              onClick: t,
              children: (0, r.jsxs)('div', {
                  className: ei.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Lrb, {
                          size: 'md',
                          color: 'currentColor',
                          className: ei.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: er.NW.string(er.t['8Joh+v'])
                      })
                  ]
              })
          });
}
function ec(e) {
    let { channel: t, onSelect: n } = e,
        i = (0, u.bp)(),
        { canManageGuildEvent: l } = (0, y.XJ)(t),
        c = (0, a.e7)([q.Z], () => q.Z.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, a.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        p = (0, a.e7)([W.Z], () => W.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: h } = (0, P.Z)(t),
        f = M.default.getId(),
        [m] = (0, et.Z)(t),
        g = z.ZP.isModerator(f, t.id),
        b = (0, G.B)(t.id),
        C = l(d),
        v = (0, N.Z)({ location: 'ExitStageButton' });
    return p
        ? (g || C) && null != c
            ? (0, r.jsx)(s.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: l } = e;
                      return (0, r.jsx)(T.Z, {
                          children: (0, r.jsx)(s.v2r, {
                              navId: 'exit-options',
                              'aria-label': er.NW.string(er.t['3Uj+2t']),
                              onClose: l,
                              onSelect: n,
                              children: (0, r.jsx)(s.sNh, {
                                  id: 'end-stage',
                                  color: 'danger',
                                  action: () => (0, B.Ev)(t, i),
                                  label: er.NW.string(er.t.Fmx5y8),
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
                      return (0, r.jsx)(w.Z, {
                          label: er.NW.string(er.t.c6qKws),
                          onClick: () =>
                              el({
                                  channel: t,
                                  appContext: i
                              }),
                          onPopoutClick: l,
                          popoutOpen: o,
                          className: v ? void 0 : ei.buttonSpacing
                      });
                  }
              })
            : (h && !b) || m
              ? v
                  ? (0, r.jsx)(w.Z, {
                        label: er.NW.string(er.t.SMKyio),
                        onClick: () =>
                            el({
                                channel: t,
                                appContext: i
                            }),
                        className: ei.experimentButtonSpacing
                    })
                  : (0, r.jsx)(s.zxk, {
                        size: s.zxk.Sizes.MEDIUM,
                        color: s.zxk.Colors.RED,
                        className: o()(ei.buttonSpacing, ei.buttonWithTextButton),
                        onClick: () =>
                            el({
                                channel: t,
                                appContext: i
                            }),
                        children: (0, r.jsxs)('div', {
                            className: ei.buttonWithTextInnerContainer,
                            children: [
                                (0, r.jsx)(s.gkL, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: ei.buttonWithTextIcon
                                }),
                                (0, r.jsx)(s.Text, {
                                    color: 'none',
                                    variant: 'text-sm/medium',
                                    children: er.NW.string(er.t.SMKyio)
                                })
                            ]
                        })
                    })
              : (0, r.jsx)(w.Z, {
                    label: er.NW.string(er.t.c6qKws),
                    onClick: () =>
                        el({
                            channel: t,
                            appContext: i
                        }),
                    className: v ? void 0 : ei.buttonSpacing
                })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: s.zxk.Colors.GREEN,
              className: o()(ei.buttonSpacing, ei.buttonWithTextButton),
              onClick: () => {
                  (0, H.TM)(t);
              },
              children: (0, r.jsxs)('div', {
                  className: ei.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.Csw, {
                          size: 'md',
                          color: 'currentColor',
                          className: ei.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: er.NW.string(er.t['7vb2cX'])
                      })
                  ]
              })
          });
}
function eu(e) {
    let { onClick: t } = e;
    return (0, N.Z)({ location: 'MoveToAudienceButton' })
        ? (0, r.jsx)(A.d, {
              iconComponent: s.zRq,
              label: er.NW.string(er.t.ezLpY2),
              onClick: t
          })
        : (0, r.jsx)(s.zxk, {
              size: s.zxk.Sizes.MEDIUM,
              color: ei.primaryButtonColor,
              className: o()(ei.buttonSpacing, ei.buttonWithTextButton),
              onClick: t,
              children: (0, r.jsxs)('div', {
                  className: ei.buttonWithTextInnerContainer,
                  children: [
                      (0, r.jsx)(s.zRq, {
                          size: 'md',
                          color: 'currentColor',
                          className: ei.buttonWithTextIcon
                      }),
                      (0, r.jsx)(s.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: er.NW.string(er.t.ezLpY2)
                      })
                  ]
              })
          });
}
function ed(e) {
    let { channelId: t } = e,
        n = (0, a.e7)([Q.Z], () => Q.Z.isMuted()),
        i = (0, X.pp)(t),
        l = (0, a.e7)([Q.Z], () => Q.Z.shouldPlay()),
        { coloredIcons: o } = (0, x.Z)({ location: 'MusicButton' });
    return i
        ? (0, r.jsx)(A.d, {
              isActive: o ? !n : n,
              label: n ? er.NW.string(er.t.ScHlfn) : er.NW.string(er.t.zqxfra),
              iconComponent: n ? s.xjP : s.RZG,
              color: o && !n ? 'green' : void 0,
              onClick: () => (0, K.v)(!n)
          })
        : (0, r.jsx)(A.d, {
              isActive: o ? l : !l,
              label: l ? er.NW.string(er.t.zqxfra) : er.NW.string(er.t.ScHlfn),
              iconComponent: l ? s.RZG : s.xjP,
              color: o && l ? 'green' : void 0,
              onClick: () => (0, K.z)(!l)
          });
}
let ep = i.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: i, mute: l } = (0, P.Z)(t),
        c = (0, G.B)(t.id),
        u = (0, a.e7)([g.Z], () => null != g.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: _, enabled: C } = (0, j.Z)(),
        v = (0, E.Z)(t),
        { limit: y, reachedLimit: A } = (0, O.Z)(t),
        w = (0, a.e7)([U.default], () => U.default.getCurrentUser()),
        M = (0, a.e7)([L.Z], () => (0, b.Z)(L.Z)),
        D = (0, a.e7)([W.Z], () => W.Z.getVoiceChannelId() === t.id, [t.id]),
        B = (0, a.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
        H = (0, Y.PK)(t.id),
        V = y > 0,
        z = (A && !H) || (null != B && B.user.id !== (null == w ? void 0 : w.id)),
        q = (0, N.Z)({ location: 'SpeakerControlTray' }),
        { enabled: K } = (0, p.Z)({ location: 'SpeakerControlTray' }),
        { coloredIcons: X } = (0, x.Z)({ location: 'SpeakerControlTray' });
    if (null == w) return null;
    let Q = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(T.Z, {
                        children: (0, r.jsx)(f.Z, {
                            onClose: t,
                            simplified: K
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
                    return (0, r.jsx)(k.C, {
                        centerButton: !0,
                        hasPermission: v,
                        enabled: C,
                        cameraUnavailable: _,
                        onChange: I.r,
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
                : (0, r.jsx)(I.NZ, {
                      channel: t,
                      currentUser: w,
                      exitFullScreen: () => null,
                      canGoLive: M,
                      hasPermission: v,
                      disabled: z
                  })
        ]
    });
    return q
        ? (0, r.jsxs)('div', {
              className: ei.experimentWrapper,
              children: [
                  D && !n
                      ? (0, r.jsx)('div', {
                            className: o()(ei.buttonSection, { [ei.experimentButtonSection]: X }),
                            children: (0, r.jsxs)('div', {
                                className: o()(ei.avControls),
                                children: [
                                    (0, r.jsx)(s.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, r.jsx)(T.Z, {
                                                children: K
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
                                            return (0, r.jsx)(R.Z, {
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
                                    V &&
                                        (0, r.jsx)('div', {
                                            className: ei.avSpacing,
                                            'aria-hidden': 'true',
                                            role: 'presentation'
                                        }),
                                    V && Q
                                ]
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: o()(ei.buttonSection, { [ei.experimentButtonSection]: X }),
                      children: [
                          D && !n && V
                              ? (0, r.jsx)(I.NZ, {
                                    channel: t,
                                    currentUser: w,
                                    exitFullScreen: () => null,
                                    canGoLive: M,
                                    hasPermission: v,
                                    disabled: z
                                })
                              : null,
                          (0, r.jsx)(ed, { channelId: t.id }),
                          D && (0, r.jsx)(eo, { channel: t }),
                          D && c && n && (0, r.jsx)(es, { onClick: () => (0, F.RK)(t, !1) }),
                          D && !n && (0, r.jsx)(eu, { onClick: () => (0, F.yi)(t) }),
                          K ? (0, r.jsx)(S.Z, { channel: t }) : null
                      ]
                  }),
                  (0, r.jsx)(ec, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: ei.container,
              children: [
                  (0, r.jsx)(ed, { channelId: t.id }),
                  D && (0, r.jsx)(eo, { channel: t }),
                  D && !n
                      ? (0, r.jsxs)('div', {
                            className: o()(ei.avControls, ei.buttonSpacing),
                            children: [
                                V && Q,
                                (0, r.jsx)(s.yRy, {
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, r.jsx)(T.Z, {
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
                                        return (0, r.jsx)(R.Z, {
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
                  D && c && n && (0, r.jsx)(es, { onClick: () => (0, F.RK)(t, !1) }),
                  D && !n && (0, r.jsx)(eu, { onClick: () => (0, F.yi)(t) }),
                  (0, r.jsx)(ec, { channel: t })
              ]
          });
});
function eh(e) {
    let { channel: t } = e,
        n = (0, N.Z)({ location: 'StartStageControlTray' }),
        { coloredIcons: i } = (0, x.Z)({ location: 'StartStageControlTray' });
    return n
        ? (0, r.jsxs)('div', {
              className: ei.experimentWrapper,
              children: [
                  (0, r.jsx)('div', {
                      className: o()(ei.buttonSection, { [ei.experimentButtonSection]: i }),
                      children: (0, r.jsx)(ed, { channelId: t.id })
                  }),
                  (0, r.jsx)(ec, { channel: t })
              ]
          })
        : (0, r.jsxs)('div', {
              className: ei.container,
              children: [(0, r.jsx)(ed, { channelId: t.id }), (0, r.jsx)(ec, { channel: t })]
          });
}
let ef = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, $.Z)(t.id),
        l = (0, G.B)(t.id),
        o = (0, a.e7)([D.Z], () => D.Z.can(V.yP, t), [t]),
        s = (0, ee.Z)(t.id),
        c = (0, a.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
        u = !s && null == c;
    return n
        ? (0, r.jsx)(eh, { channel: t })
        : i || l
          ? (0, r.jsxs)('div', {
                className: ei.containerColumn,
                children: [
                    (0, r.jsxs)('div', {
                        className: ei.eventPrompts,
                        children: [
                            u ? (0, r.jsx)(C.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)('div', { className: ei.separator }),
                            u && o
                                ? (0, r.jsx)(v.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, r.jsx)('div', { className: ei.separator })
                        ]
                    }),
                    (0, r.jsx)(ep, { channel: t })
                ]
            })
          : (0, r.jsx)(ea, { channel: t });
});
