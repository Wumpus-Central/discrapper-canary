n.d(t, { Z: () => ep }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(287734),
    d = n(40851),
    u = n(358221),
    h = n(682901),
    p = n(659580),
    m = n(793865),
    f = n(575175),
    g = n(258609),
    _ = n(74299),
    C = n(924301),
    x = n(459502),
    v = n(856691),
    E = n(357156),
    I = n(923973),
    b = n(829750),
    Z = n(82965),
    N = n(189771),
    T = n(294629),
    S = n(793319),
    j = n(987329),
    y = n(560688),
    A = n(390322),
    P = n(871499),
    R = n(88479),
    M = n(386000),
    L = n(25827),
    k = n(314897),
    O = n(131951),
    D = n(496675),
    w = n(944486),
    U = n(594174),
    B = n(881824),
    F = n(471253),
    H = n(922482),
    G = n(200498),
    V = n(146085),
    z = n(88751),
    W = n(427679),
    Y = n(368442),
    q = n(600518),
    K = n(485287),
    X = n(754277),
    J = n(719100),
    Q = n(184805),
    $ = n(643632),
    ee = n(270295),
    et = n(981631),
    en = n(388032),
    ei = n(201011);
function el(e) {
    let { channel: t, appContext: n } = e;
    if ((0, J.Z)(t)) {
        (0, B.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function ea(e) {
    let { channel: t } = e,
        n = (0, Q.Z)(t.id),
        [l, a] = (0, ee.Z)(t),
        r = (0, s.e7)([D.Z], () => D.Z.can(et.Plq.REQUEST_TO_SPEAK, t)),
        c = (0, Z.Z)({ location: 'AudienceRaiseHandButton' });
    return n
        ? null
        : (0, i.jsx)(P.d, {
              isActive: l,
              label: l ? en.intl.string(en.t.GCimTk) : r ? en.intl.string(en.t.hLbG5O) : en.intl.string(en.t.e4WMv7),
              iconComponent: o.V9,
              onClick: a,
              className: c ? void 0 : ei.buttonSpacing,
              disabled: !r && !l
          });
}
let er = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, s.e7)([w.Z], () => w.Z.getVoiceChannelId() === t.id, [t.id]),
        l = (0, Z.Z)({ location: 'AudienceControlTray' }),
        { enabled: a } = (0, h.Z)({ location: 'AudienceControlTray' });
    return l
        ? (0, i.jsxs)('div', {
              className: ei.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: ei.buttonSection,
                      children: [(0, i.jsx)(ed, { channelId: t.id }), n ? (0, i.jsx)(ea, { channel: t }) : null, a ? (0, i.jsx)(j.Z, { channel: t }) : null]
                  }),
                  (0, i.jsx)(eo, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: ei.container,
              children: [(0, i.jsx)(ed, { channelId: t.id }), n ? (0, i.jsx)(ea, { channel: t }) : null, (0, i.jsx)(eo, { channel: t })]
          });
});
function es(e) {
    let { onClick: t } = e;
    return (0, Z.Z)({ location: 'MakeMeASpeakerButton' })
        ? (0, i.jsx)(P.d, {
              onClick: t,
              iconComponent: o.Lrb,
              label: en.intl.string(en.t['8Joh+v'])
          })
        : (0, i.jsx)(o.zxk, {
              size: o.zxk.Sizes.MEDIUM,
              color: ei.primaryButtonColor,
              className: r()(ei.buttonSpacing, ei.buttonWithTextButton),
              onClick: t,
              children: (0, i.jsxs)('div', {
                  className: ei.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.Lrb, {
                          size: 'md',
                          color: 'currentColor',
                          className: ei.buttonWithTextIcon
                      }),
                      (0, i.jsx)(o.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: en.intl.string(en.t['8Joh+v'])
                      })
                  ]
              })
          });
}
function eo(e) {
    let { channel: t, onSelect: n } = e,
        l = (0, d.bp)(),
        { canManageGuildEvent: a } = (0, E.XJ)(t),
        c = (0, s.e7)([W.Z], () => W.Z.getStageInstanceByChannel(t.id), [t.id]),
        u = (0, s.e7)([C.ZP], () => C.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        h = (0, s.e7)([w.Z], () => w.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: p } = (0, T.Z)(t),
        m = k.default.getId(),
        [f] = (0, ee.Z)(t),
        g = z.ZP.isModerator(m, t.id),
        _ = (0, G.B)(t.id),
        x = a(u),
        v = (0, Z.Z)({ location: 'ExitStageButton' });
    return h
        ? (g || x) && null != c
            ? (0, i.jsx)(o.yRy, {
                  renderPopout: (e) => {
                      let { closePopout: a } = e;
                      return (0, i.jsx)(A.Z, {
                          children: (0, i.jsx)(o.v2r, {
                              navId: 'exit-options',
                              'aria-label': en.intl.string(en.t['3Uj+2t']),
                              onClose: a,
                              onSelect: n,
                              children: (0, i.jsx)(o.sNh, {
                                  id: 'end-stage',
                                  color: 'danger',
                                  action: () => (0, B.Ev)(t, l),
                                  label: en.intl.string(en.t.Fmx5y8),
                                  icon: o.k$p
                              })
                          })
                      });
                  },
                  align: 'center',
                  position: 'top',
                  spacing: v ? 16 : void 0,
                  animation: o.yRy.Animation.FADE,
                  children: (e, n) => {
                      let { onClick: a } = e,
                          { isShown: r } = n;
                      return (0, i.jsx)(R.Z, {
                          label: en.intl.string(en.t.c6qKws),
                          onClick: () =>
                              el({
                                  channel: t,
                                  appContext: l
                              }),
                          onPopoutClick: a,
                          popoutOpen: r,
                          className: v ? void 0 : ei.buttonSpacing
                      });
                  }
              })
            : (p && !_) || f
              ? v
                  ? (0, i.jsx)(R.Z, {
                        label: en.intl.string(en.t.SMKyio),
                        onClick: () =>
                            el({
                                channel: t,
                                appContext: l
                            }),
                        className: ei.experimentButtonSpacing
                    })
                  : (0, i.jsx)(o.zxk, {
                        size: o.zxk.Sizes.MEDIUM,
                        color: o.zxk.Colors.RED,
                        className: r()(ei.buttonSpacing, ei.buttonWithTextButton),
                        onClick: () =>
                            el({
                                channel: t,
                                appContext: l
                            }),
                        children: (0, i.jsxs)('div', {
                            className: ei.buttonWithTextInnerContainer,
                            children: [
                                (0, i.jsx)(o.gkL, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: ei.buttonWithTextIcon
                                }),
                                (0, i.jsx)(o.Text, {
                                    color: 'none',
                                    variant: 'text-sm/medium',
                                    children: en.intl.string(en.t.SMKyio)
                                })
                            ]
                        })
                    })
              : (0, i.jsx)(R.Z, {
                    label: en.intl.string(en.t.c6qKws),
                    onClick: () =>
                        el({
                            channel: t,
                            appContext: l
                        }),
                    className: v ? void 0 : ei.buttonSpacing
                })
        : (0, i.jsx)(o.zxk, {
              size: o.zxk.Sizes.MEDIUM,
              color: o.zxk.Colors.GREEN,
              className: r()(ei.buttonSpacing, ei.buttonWithTextButton),
              onClick: () => {
                  (0, H.TM)(t);
              },
              children: (0, i.jsxs)('div', {
                  className: ei.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.Csw, {
                          size: 'md',
                          color: 'currentColor',
                          className: ei.buttonWithTextIcon
                      }),
                      (0, i.jsx)(o.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: en.intl.string(en.t['7vb2cX'])
                      })
                  ]
              })
          });
}
function ec(e) {
    let { onClick: t } = e;
    return (0, Z.Z)({ location: 'MoveToAudienceButton' })
        ? (0, i.jsx)(P.d, {
              iconComponent: o.zRq,
              label: en.intl.string(en.t.ezLpY2),
              onClick: t
          })
        : (0, i.jsx)(o.zxk, {
              size: o.zxk.Sizes.MEDIUM,
              color: ei.primaryButtonColor,
              className: r()(ei.buttonSpacing, ei.buttonWithTextButton),
              onClick: t,
              children: (0, i.jsxs)('div', {
                  className: ei.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.zRq, {
                          size: 'md',
                          color: 'currentColor',
                          className: ei.buttonWithTextIcon
                      }),
                      (0, i.jsx)(o.Text, {
                          color: 'none',
                          variant: 'text-sm/medium',
                          children: en.intl.string(en.t.ezLpY2)
                      })
                  ]
              })
          });
}
function ed(e) {
    let { channelId: t } = e,
        n = (0, s.e7)([X.Z], () => X.Z.isMuted()),
        l = (0, K.pp)(t),
        a = (0, s.e7)([X.Z], () => X.Z.shouldPlay());
    return l
        ? (0, i.jsx)(P.d, {
              isActive: n,
              label: n ? en.intl.string(en.t.ScHlfn) : en.intl.string(en.t.zqxfra),
              iconComponent: n ? o.xjP : o.RZG,
              onClick: () => (0, q.v)(!n)
          })
        : (0, i.jsx)(P.d, {
              isActive: a,
              label: a ? en.intl.string(en.t.zqxfra) : en.intl.string(en.t.ScHlfn),
              iconComponent: a ? o.RZG : o.xjP,
              onClick: () => (0, q.z)(!a)
          });
}
let eu = l.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: l, mute: a } = (0, T.Z)(t),
        c = (0, G.B)(t.id),
        d = (0, s.e7)([g.Z], () => null != g.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: C, enabled: x } = (0, I.Z)(),
        v = (0, N.Z)(t),
        { limit: E, reachedLimit: P } = (0, b.Z)(t),
        R = (0, s.e7)([U.default], () => U.default.getCurrentUser()),
        k = (0, s.e7)([O.Z], () => (0, _.Z)(O.Z)),
        D = (0, s.e7)([w.Z], () => w.Z.getVoiceChannelId() === t.id, [t.id]),
        B = (0, s.e7)([u.Z], () => u.Z.getStreamParticipants(t.id)[0], [t.id]),
        H = (0, Y.PK)(t.id),
        V = E > 0,
        z = (P && !H) || (null != B && B.user.id !== (null == R ? void 0 : R.id)),
        W = (0, Z.Z)({ location: 'SpeakerControlTray' }),
        { enabled: q } = (0, h.Z)({ location: 'SpeakerControlTray' });
    if (null == R) return null;
    let K = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(A.Z, {
                        children: (0, i.jsx)(m.Z, {
                            onClose: t,
                            simplified: q
                        })
                    });
                },
                position: 'top',
                align: W ? 'right' : 'center',
                spacing: W ? 16 : void 0,
                animation: o.yRy.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: l } = t;
                    return (0, i.jsx)(L.C, {
                        centerButton: !0,
                        hasPermission: v,
                        enabled: x,
                        cameraUnavailable: C,
                        onChange: S.r,
                        onCameraUnavailable: y.Z,
                        channelLimitReached: P,
                        channelLimit: E,
                        popoutOpen: l,
                        onPopoutClick: n
                    });
                }
            }),
            W
                ? null
                : (0, i.jsx)(S.NZ, {
                      channel: t,
                      currentUser: R,
                      exitFullScreen: () => null,
                      canGoLive: k,
                      hasPermission: v,
                      disabled: z
                  })
        ]
    });
    return W
        ? (0, i.jsxs)('div', {
              className: ei.experimentWrapper,
              children: [
                  D && !n
                      ? (0, i.jsx)('div', {
                            className: ei.buttonSection,
                            children: (0, i.jsxs)('div', {
                                className: r()(ei.avControls),
                                children: [
                                    (0, i.jsx)(o.yRy, {
                                        renderPopout: (e) => {
                                            let { closePopout: t } = e;
                                            return (0, i.jsx)(A.Z, {
                                                children: q
                                                    ? (0, i.jsx)(p.default, {
                                                          onClose: t,
                                                          renderInputDevices: !0,
                                                          renderInputModes: !0,
                                                          renderOutputDevices: !0,
                                                          renderInputVolume: !0,
                                                          renderOutputVolume: !0,
                                                          renderDeafen: !0,
                                                          simplified: !0
                                                      })
                                                    : (0, i.jsx)(p.default, {
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
                                        animation: o.yRy.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: r } = e,
                                                { isShown: s } = t;
                                            return (0, i.jsx)(M.Z, {
                                                centerButton: !0,
                                                onPopoutClick: r,
                                                selfMute: l,
                                                serverMute: a,
                                                suppress: n,
                                                popoutOpen: s,
                                                onClick: () => (0, f.Z)(a, n, 'Stage Channel Controls'),
                                                awaitingRemote: d
                                            });
                                        }
                                    }),
                                    V &&
                                        (0, i.jsx)('div', {
                                            className: ei.avSpacing,
                                            'aria-hidden': 'true',
                                            role: 'presentation'
                                        }),
                                    V && K
                                ]
                            })
                        })
                      : null,
                  (0, i.jsxs)('div', {
                      className: ei.buttonSection,
                      children: [
                          D && !n && V
                              ? (0, i.jsx)(S.NZ, {
                                    channel: t,
                                    currentUser: R,
                                    exitFullScreen: () => null,
                                    canGoLive: k,
                                    hasPermission: v,
                                    disabled: z
                                })
                              : null,
                          (0, i.jsx)(ed, { channelId: t.id }),
                          D && (0, i.jsx)(ea, { channel: t }),
                          D && c && n && (0, i.jsx)(es, { onClick: () => (0, F.RK)(t, !1) }),
                          D && !n && (0, i.jsx)(ec, { onClick: () => (0, F.yi)(t) }),
                          q ? (0, i.jsx)(j.Z, { channel: t }) : null
                      ]
                  }),
                  (0, i.jsx)(eo, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: ei.container,
              children: [
                  (0, i.jsx)(ed, { channelId: t.id }),
                  D && (0, i.jsx)(ea, { channel: t }),
                  D && !n
                      ? (0, i.jsxs)('div', {
                            className: r()(ei.avControls, ei.buttonSpacing),
                            children: [
                                V && K,
                                (0, i.jsx)(o.yRy, {
                                    renderPopout: (e) => {
                                        let { closePopout: t } = e;
                                        return (0, i.jsx)(A.Z, {
                                            children: (0, i.jsx)(p.default, {
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
                                        return (0, i.jsx)(M.Z, {
                                            centerButton: !0,
                                            onPopoutClick: r,
                                            selfMute: l,
                                            serverMute: a,
                                            suppress: n,
                                            popoutOpen: s,
                                            onClick: () => (0, f.Z)(a, n, 'Stage Channel Controls'),
                                            awaitingRemote: d
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  D && c && n && (0, i.jsx)(es, { onClick: () => (0, F.RK)(t, !1) }),
                  D && !n && (0, i.jsx)(ec, { onClick: () => (0, F.yi)(t) }),
                  (0, i.jsx)(eo, { channel: t })
              ]
          });
});
function eh(e) {
    let { channel: t } = e,
        n = (0, Z.Z)({ location: 'StartStageControlTray' });
    return n
        ? (0, i.jsxs)('div', {
              className: ei.experimentWrapper,
              children: [
                  (0, i.jsx)('div', {
                      className: n ? ei.buttonSection : void 0,
                      children: (0, i.jsx)(ed, { channelId: t.id })
                  }),
                  (0, i.jsx)(eo, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: ei.container,
              children: [(0, i.jsx)(ed, { channelId: t.id }), (0, i.jsx)(eo, { channel: t })]
          });
}
let ep = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, Q.Z)(t.id),
        a = (0, G.B)(t.id),
        r = (0, s.e7)([D.Z], () => D.Z.can(V.yP, t), [t]),
        o = (0, $.Z)(t.id),
        c = (0, s.e7)([u.Z], () => (null != t ? u.Z.getSelectedParticipant(t.id) : null)),
        d = !o && null == c;
    return n
        ? (0, i.jsx)(eh, { channel: t })
        : l || a
          ? (0, i.jsxs)('div', {
                className: ei.containerColumn,
                children: [
                    (0, i.jsxs)('div', {
                        className: ei.eventPrompts,
                        children: [
                            d ? (0, i.jsx)(x.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, i.jsx)('div', { className: ei.separator }),
                            d && r
                                ? (0, i.jsx)(v.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, i.jsx)('div', { className: ei.separator })
                        ]
                    }),
                    (0, i.jsx)(eu, { channel: t })
                ]
            })
          : (0, i.jsx)(er, { channel: t });
});
