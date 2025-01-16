n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(924301),
    x = n(459502),
    v = n(856691),
    _ = n(357156),
    I = n(861254),
    E = n(923973),
    b = n(829750),
    Z = n(189771),
    N = n(294629),
    S = n(793319),
    T = n(560688),
    j = n(390322),
    A = n(871499),
    y = n(88479),
    P = n(386000),
    M = n(25827),
    R = n(314897),
    L = n(131951),
    k = n(496675),
    O = n(944486),
    D = n(594174),
    w = n(881824),
    B = n(471253),
    U = n(922482),
    H = n(200498),
    G = n(146085),
    F = n(88751),
    V = n(427679),
    z = n(368442),
    W = n(600518),
    K = n(485287),
    Y = n(754277),
    q = n(719100),
    X = n(184805),
    J = n(643632),
    Q = n(270295),
    $ = n(981631),
    ee = n(388032),
    et = n(614826);
function en(e) {
    let { channel: t, appContext: n } = e;
    if ((0, q.Z)(t)) {
        (0, w.Us)(t, n);
        return;
    }
    c.default.disconnect();
}
function ei(e) {
    var t, n;
    let { channel: l } = e,
        r = (0, X.Z)(l.id),
        [a, c] = (0, Q.Z)(l),
        d = (0, s.e7)([k.Z], () => k.Z.can($.Plq.REQUEST_TO_SPEAK, l)),
        { groupedButtons: u } = (0, I.ZP)({ location: 'AudienceRaiseHandButton' });
    if (r) return null;
    return (0, i.jsx)(A.d, {
        isActive: a,
        label: ((t = a), (n = d), t ? ee.intl.string(ee.t.GCimTk) : n ? ee.intl.string(ee.t.hLbG5O) : ee.intl.string(ee.t.e4WMv7)),
        iconComponent: o.HandRequestSpeakIcon,
        onClick: c,
        className: u ? void 0 : et.buttonSpacing,
        disabled: !d && !a
    });
}
let el = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, s.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
        { groupedButtons: l } = (0, I.ZP)({ location: 'AudienceControlTray' });
    return l
        ? (0, i.jsxs)('div', {
              className: et.container,
              children: [
                  (0, i.jsxs)('div', {
                      className: et.buttonSection,
                      children: [(0, i.jsx)(eo, { channelId: t.id }), n ? (0, i.jsx)(ei, { channel: t }) : null]
                  }),
                  (0, i.jsx)(ea, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: et.container,
              children: [(0, i.jsx)(eo, { channelId: t.id }), n ? (0, i.jsx)(ei, { channel: t }) : null, (0, i.jsx)(ea, { channel: t })]
          });
});
function er(e) {
    let { onClick: t } = e,
        { groupedButtons: n } = (0, I.ZP)({ location: 'MakeMeASpeakerButton' });
    return n
        ? (0, i.jsx)(A.d, {
              onClick: t,
              iconComponent: o.MicrophoneArrowRightIcon,
              label: ee.intl.string(ee.t['8Joh+v'])
          })
        : (0, i.jsx)(o.Button, {
              size: o.Button.Sizes.MEDIUM,
              color: et.primaryButtonColor,
              className: a()(et.buttonSpacing, et.buttonWithTextButton),
              onClick: t,
              children: (0, i.jsxs)('div', {
                  className: et.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.MicrophoneArrowRightIcon, {
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
function ea(e) {
    let { channel: t, onSelect: n } = e,
        l = (0, d.bp)(),
        { canManageGuildEvent: r } = (0, _.XJ)(t),
        c = (0, s.e7)([V.Z], () => V.Z.getStageInstanceByChannel(t.id), [t.id]),
        u = (0, s.e7)([C.ZP], () => C.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
        h = (0, s.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: p } = (0, N.Z)(t),
        m = R.default.getId(),
        [f] = (0, Q.Z)(t),
        g = F.ZP.isModerator(m, t.id),
        x = (0, H.B)(t.id),
        v = r(u),
        { groupedButtons: E } = (0, I.ZP)({ location: 'ExitStageButton' });
    if (!h)
        return (0, i.jsx)(o.Button, {
            size: o.Button.Sizes.MEDIUM,
            color: o.Button.Colors.GREEN,
            className: a()(et.buttonSpacing, et.buttonWithTextButton),
            onClick: () => {
                var e;
                return (e = t), void (0, U.TM)(e);
            },
            children: (0, i.jsxs)('div', {
                className: et.buttonWithTextInnerContainer,
                children: [
                    (0, i.jsx)(o.PhoneCallIcon, {
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
    if ((g || v) && null != c)
        return (0, i.jsx)(o.Popout, {
            renderPopout: (e) => {
                let { closePopout: r } = e;
                return (0, i.jsx)(j.Z, {
                    children: (0, i.jsx)(o.Menu, {
                        navId: 'exit-options',
                        'aria-label': ee.intl.string(ee.t['3Uj+2t']),
                        onClose: r,
                        onSelect: n,
                        children: (0, i.jsx)(o.MenuItem, {
                            id: 'end-stage',
                            color: 'danger',
                            action: () => (0, w.Ev)(t, l),
                            label: ee.intl.string(ee.t.Fmx5y8),
                            icon: o.CircleXIcon
                        })
                    })
                });
            },
            align: 'center',
            position: 'top',
            spacing: E ? 16 : void 0,
            animation: o.Popout.Animation.FADE,
            children: (e, n) => {
                let { onClick: r } = e,
                    { isShown: a } = n;
                return (0, i.jsx)(y.Z, {
                    label: ee.intl.string(ee.t.c6qKws),
                    onClick: () =>
                        en({
                            channel: t,
                            appContext: l
                        }),
                    onPopoutClick: r,
                    popoutOpen: a,
                    className: E ? void 0 : et.buttonSpacing
                });
            }
        });
    if ((!p || x) && !f)
        return (0, i.jsx)(y.Z, {
            label: ee.intl.string(ee.t.c6qKws),
            onClick: () =>
                en({
                    channel: t,
                    appContext: l
                }),
            className: E ? void 0 : et.buttonSpacing
        });
    if (E)
        return (0, i.jsx)(y.Z, {
            label: ee.intl.string(ee.t.SMKyio),
            onClick: () =>
                en({
                    channel: t,
                    appContext: l
                }),
            className: et.experimentButtonSpacing
        });
    return (0, i.jsx)(o.Button, {
        size: o.Button.Sizes.MEDIUM,
        color: o.Button.Colors.RED,
        className: a()(et.buttonSpacing, et.buttonWithTextButton),
        onClick: () =>
            en({
                channel: t,
                appContext: l
            }),
        children: (0, i.jsxs)('div', {
            className: et.buttonWithTextInnerContainer,
            children: [
                (0, i.jsx)(o.PhoneHangUpIcon, {
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
    });
}
function es(e) {
    let { onClick: t } = e,
        { groupedButtons: n } = (0, I.ZP)({ location: 'MoveToAudienceButton' });
    return n
        ? (0, i.jsx)(A.d, {
              iconComponent: o.GroupArrowDownIcon,
              label: ee.intl.string(ee.t.ezLpY2),
              onClick: t
          })
        : (0, i.jsx)(o.Button, {
              size: o.Button.Sizes.MEDIUM,
              color: et.primaryButtonColor,
              className: a()(et.buttonSpacing, et.buttonWithTextButton),
              onClick: t,
              children: (0, i.jsxs)('div', {
                  className: et.buttonWithTextInnerContainer,
                  children: [
                      (0, i.jsx)(o.GroupArrowDownIcon, {
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
        n = (0, s.e7)([Y.Z], () => Y.Z.isMuted()),
        l = (0, K.pp)(t),
        r = (0, s.e7)([Y.Z], () => Y.Z.shouldPlay());
    return l
        ? (0, i.jsx)(A.d, {
              isActive: n,
              label: n ? ee.intl.string(ee.t.ScHlfn) : ee.intl.string(ee.t.zqxfra),
              iconComponent: n ? o.MusicSlashIcon : o.MusicIcon,
              onClick: () => (0, W.v)(!n)
          })
        : (0, i.jsx)(A.d, {
              isActive: r,
              label: r ? ee.intl.string(ee.t.zqxfra) : ee.intl.string(ee.t.ScHlfn),
              iconComponent: r ? o.MusicIcon : o.MusicSlashIcon,
              onClick: () => (0, W.z)(!r)
          });
}
let ec = l.memo(function (e) {
    let { channel: t } = e,
        { suppress: n, selfMute: l, mute: r } = (0, N.Z)(t),
        c = (0, H.B)(t.id),
        d = (0, s.e7)([f.Z], () => null != f.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: C, enabled: x } = (0, E.Z)(),
        v = (0, Z.Z)(t),
        { limit: _, reachedLimit: A } = (0, b.Z)(t),
        y = (0, s.e7)([D.default], () => D.default.getCurrentUser()),
        R = (0, s.e7)([L.Z], () => (0, g.Z)(L.Z)),
        k = (0, s.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
        w = (0, s.e7)([u.Z], () => u.Z.getStreamParticipants(t.id)[0], [t.id]),
        U = (0, z.PK)(t.id),
        G = _ > 0,
        F = (A && !U) || (null != w && w.user.id !== (null == y ? void 0 : y.id)),
        { groupedButtons: V } = (0, I.ZP)({ location: 'SpeakerControlTray' });
    if (null == y) return null;
    let W = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(j.Z, { children: (0, i.jsx)(p.Z, { onClose: t }) });
                },
                position: 'top',
                align: V ? 'right' : 'center',
                spacing: V ? 16 : void 0,
                animation: o.Popout.Animation.FADE,
                children: (e, t) => {
                    let { onClick: n } = e,
                        { isShown: l } = t;
                    return (0, i.jsx)(M.C, {
                        centerButton: !0,
                        hasPermission: v,
                        enabled: x,
                        cameraUnavailable: C,
                        onChange: S.r,
                        onCameraUnavailable: T.Z,
                        channelLimitReached: A,
                        channelLimit: _,
                        popoutOpen: l,
                        onPopoutClick: n
                    });
                }
            }),
            V
                ? null
                : (0, i.jsx)(S.NZ, {
                      channel: t,
                      currentUser: y,
                      exitFullScreen: () => null,
                      canGoLive: R,
                      hasPermission: v,
                      disabled: F
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
                                className: a()(et.avControls),
                                children: [
                                    (0, i.jsx)(o.Popout, {
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
                                        animation: o.Popout.Animation.FADE,
                                        children: (e, t) => {
                                            let { onClick: a } = e,
                                                { isShown: s } = t;
                                            return (0, i.jsx)(P.Z, {
                                                centerButton: !0,
                                                onPopoutClick: a,
                                                selfMute: l,
                                                serverMute: r,
                                                suppress: n,
                                                popoutOpen: s,
                                                onClick: () => (0, m.Z)(r, n, 'Stage Channel Controls'),
                                                awaitingRemote: d
                                            });
                                        }
                                    }),
                                    G &&
                                        (0, i.jsx)('div', {
                                            className: et.avSpacing,
                                            'aria-hidden': 'true',
                                            role: 'presentation'
                                        }),
                                    G && W
                                ]
                            })
                        })
                      : null,
                  (0, i.jsxs)('div', {
                      className: et.buttonSection,
                      children: [
                          k && !n && G
                              ? (0, i.jsx)(S.NZ, {
                                    channel: t,
                                    currentUser: y,
                                    exitFullScreen: () => null,
                                    canGoLive: R,
                                    hasPermission: v,
                                    disabled: F
                                })
                              : null,
                          (0, i.jsx)(eo, { channelId: t.id }),
                          k && (0, i.jsx)(ei, { channel: t }),
                          k && c && n && (0, i.jsx)(er, { onClick: () => (0, B.RK)(t, !1) }),
                          k && !n && (0, i.jsx)(es, { onClick: () => (0, B.yi)(t) })
                      ]
                  }),
                  (0, i.jsx)(ea, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: et.container,
              children: [
                  (0, i.jsx)(eo, { channelId: t.id }),
                  k && (0, i.jsx)(ei, { channel: t }),
                  k && !n
                      ? (0, i.jsxs)('div', {
                            className: a()(et.avControls, et.buttonSpacing),
                            children: [
                                G && W,
                                (0, i.jsx)(o.Popout, {
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
                                    animation: o.Popout.Animation.FADE,
                                    children: (e, t) => {
                                        let { onClick: a } = e,
                                            { isShown: s } = t;
                                        return (0, i.jsx)(P.Z, {
                                            centerButton: !0,
                                            onPopoutClick: a,
                                            selfMute: l,
                                            serverMute: r,
                                            suppress: n,
                                            popoutOpen: s,
                                            onClick: () => (0, m.Z)(r, n, 'Stage Channel Controls'),
                                            awaitingRemote: d
                                        });
                                    }
                                })
                            ]
                        })
                      : null,
                  k && c && n && (0, i.jsx)(er, { onClick: () => (0, B.RK)(t, !1) }),
                  k && !n && (0, i.jsx)(es, { onClick: () => (0, B.yi)(t) }),
                  (0, i.jsx)(ea, { channel: t })
              ]
          });
});
function ed(e) {
    let { channel: t } = e,
        { groupedButtons: n } = (0, I.ZP)({ location: 'StartStageControlTray' });
    return n
        ? (0, i.jsxs)('div', {
              className: et.experimentWrapper,
              children: [
                  (0, i.jsx)('div', {
                      className: n ? et.buttonSection : void 0,
                      children: (0, i.jsx)(eo, { channelId: t.id })
                  }),
                  (0, i.jsx)(ea, { channel: t })
              ]
          })
        : (0, i.jsxs)('div', {
              className: et.container,
              children: [(0, i.jsx)(eo, { channelId: t.id }), (0, i.jsx)(ea, { channel: t })]
          });
}
t.Z = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, X.Z)(t.id),
        r = (0, H.B)(t.id),
        a = (0, s.e7)([k.Z], () => k.Z.can(G.yP, t), [t]),
        o = (0, J.Z)(t.id),
        c = (0, s.e7)([u.Z], () => (null != t ? u.Z.getSelectedParticipant(t.id) : null)),
        d = !o && null == c;
    return n
        ? (0, i.jsx)(ed, { channel: t })
        : l || r
          ? (0, i.jsxs)('div', {
                className: et.containerColumn,
                children: [
                    (0, i.jsxs)('div', {
                        className: et.eventPrompts,
                        children: [
                            d ? (0, i.jsx)(x.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, i.jsx)('div', { className: et.separator }),
                            d && a
                                ? (0, i.jsx)(v.Z, {
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
