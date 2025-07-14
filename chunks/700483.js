(n.d(t, { Z: () => eg }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(287734),
    d = n(40851),
    p = n(100527),
    h = n(906732),
    f = n(358221),
    m = n(659580),
    g = n(793865),
    b = n(575175),
    _ = n(522651),
    y = n(795318),
    C = n(258609),
    x = n(74299),
    v = n(924301),
    j = n(459502),
    O = n(856691),
    E = n(357156),
    S = n(923973),
    I = n(829750),
    P = n(189771),
    Z = n(294629),
    N = n(793319),
    T = n(987329),
    A = n(560688),
    w = n(390322),
    R = n(871499),
    M = n(88479),
    D = n(386000),
    k = n(25827),
    L = n(314897),
    U = n(131951),
    B = n(496675),
    F = n(944486),
    H = n(594174),
    G = n(881824),
    V = n(471253),
    z = n(922482),
    W = n(200498),
    Y = n(146085),
    q = n(88751),
    K = n(427679),
    X = n(368442),
    Q = n(600518),
    J = n(485287),
    $ = n(754277),
    ee = n(719100),
    et = n(184805),
    en = n(643632),
    er = n(270295),
    ei = n(981631),
    el = n(354459),
    ea = n(388032),
    eo = n(409826);
function es(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)(),
        i = (0, et.Z)(t.id),
        [l, a] = (0, er.Z)(t),
        s = (0, o.e7)([B.Z], () => B.Z.can(ei.Plq.REQUEST_TO_SPEAK, t));
    return i
        ? null
        : (0, r.jsx)(R.d, {
              isTrayButton: !0,
              isActive: l,
              label: l ? ea.intl.string(ea.t.GCimTk) : s ? ea.intl.string(ea.t.hLbG5O) : ea.intl.string(ea.t.e4WMv7),
              iconComponent: c.V9,
              onClick: () => {
                  ((0, _.v)(n, _.d.REQUEST_TO_SPEAK, !l), a());
              },
              color: l ? 'green' : void 0,
              disabled: !s && !l
          });
}
let ec = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, o.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)('div', {
        className: eo.container,
        children: [
            (0, r.jsxs)('div', {
                className: eo.buttonSection,
                children: [(0, r.jsx)(eh, { channelId: t.id }), n ? (0, r.jsx)(es, { channel: t }) : null, (0, r.jsx)(T.Z, { channel: t })]
            }),
            (0, r.jsx)(ed, { channel: t })
        ]
    });
});
function eu(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)();
    return (0, r.jsx)(R.d, {
        isTrayButton: !0,
        onClick: () => {
            ((0, V.RK)(t, !1), (0, _.v)(n, _.d.SPEAK_ON_STAGE));
        },
        iconComponent: c.Lrb,
        label: ea.intl.string(ea.t['8Joh+v'])
    });
}
function ed(e) {
    let { channel: t, onSelect: n } = e,
        l = (0, d.bp)(),
        { canManageGuildEvent: f } = (0, E.XJ)(t),
        m = (0, o.e7)([K.Z], () => K.Z.getStageInstanceByChannel(t.id), [t.id]),
        g = (0, o.e7)([v.ZP], () => v.ZP.getGuildScheduledEvent(null == m ? void 0 : m.guild_scheduled_event_id)),
        b = (0, o.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: C } = (0, Z.Z)(t),
        x = L.default.getId(),
        [j] = (0, er.Z)(t),
        O = q.ZP.isModerator(x, t.id),
        S = (0, W.B)(t.id),
        I = f(g),
        { parentAnalyticsLocation: P } = (0, h.ZP)(),
        N = i.useRef(null);
    if (!b)
        return (0, r.jsx)(s.zx, {
            size: s.zx.Sizes.MEDIUM,
            color: s.zx.Colors.GREEN,
            className: a()(eo.buttonSpacing, eo.buttonWithTextButton),
            onClick: () => {
                ((0, _.v)(P, _.d.JOIN_STAGE), (0, z.TM)(t));
            },
            children: (0, r.jsxs)('div', {
                className: eo.buttonWithTextInnerContainer,
                children: [
                    (0, r.jsx)(c.Csw, {
                        size: 'md',
                        color: 'currentColor',
                        className: eo.buttonWithTextIcon
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'none',
                        variant: 'text-sm/medium',
                        children: ea.intl.string(ea.t['7vb2cX'])
                    })
                ]
            })
        });
    let T = () =>
        (function (e) {
            let { channel: t, appContext: n } = e;
            if (((0, _.v)(p.Z.VOICE_CONTROL_TRAY, _.d.DISCONNECT), (0, ee.Z)(t))) return void (0, G.Us)(t, n);
            u.default.disconnect();
        })({
            channel: t,
            appContext: l
        });
    return (O || I) && null != m
        ? (0, r.jsx)(c.yRy, {
              targetElementRef: N,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(w.Z, {
                      children: (0, r.jsx)(c.v2r, {
                          navId: 'exit-options',
                          'aria-label': ea.intl.string(ea.t['3Uj+2t']),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, y.u)('End Stage', P, { entrypoint: el.A5.CARET }),
                          children: (0, r.jsx)(c.sNh, {
                              id: 'end-stage',
                              color: 'danger',
                              action: () => (0, G.Ev)(t, l),
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
                  return (0, r.jsx)(M.Z, {
                      ref: N,
                      label: ea.intl.string(ea.t.c6qKws),
                      onClick: T,
                      onPopoutClick: n,
                      popoutOpen: i
                  });
              }
          })
        : (C && !S) || j
          ? (0, r.jsx)(M.Z, {
                label: ea.intl.string(ea.t.SMKyio),
                onClick: T
            })
          : (0, r.jsx)(M.Z, {
                label: ea.intl.string(ea.t.c6qKws),
                onClick: T
            });
}
function ep(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)();
    return (0, r.jsx)(R.d, {
        isTrayButton: !0,
        iconComponent: c.zRq,
        label: ea.intl.string(ea.t.ezLpY2),
        onClick: () => {
            ((0, _.v)(n, _.d.MOVE_TO_AUDIENCE), (0, V.yi)(t));
        }
    });
}
function eh(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)(),
        i = (0, o.e7)([$.Z], () => $.Z.isMuted()),
        l = (0, J.pp)(t),
        a = (0, o.e7)([$.Z], () => $.Z.shouldPlay());
    return l
        ? (0, r.jsx)(R.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? ea.intl.string(ea.t.ScHlfn) : ea.intl.string(ea.t.zqxfra),
              iconComponent: i ? c.xjP : c.RZG,
              color: i ? void 0 : 'green',
              onClick: () => {
                  ((0, _.v)(n, _.d.STAGE_MUSIC, i), (0, Q.v)(!i));
              }
          })
        : (0, r.jsx)(R.d, {
              isTrayButton: !0,
              isActive: a,
              label: a ? ea.intl.string(ea.t.zqxfra) : ea.intl.string(ea.t.ScHlfn),
              iconComponent: a ? c.RZG : c.xjP,
              color: a ? 'green' : void 0,
              onClick: () => {
                  ((0, _.v)(n, _.d.STAGE_MUSIC, !a), (0, Q.z)(!a));
              }
          });
}
let ef = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.ZP)(),
        { suppress: l, selfMute: a, mute: s } = (0, Z.Z)(t),
        u = (0, W.B)(t.id),
        d = (0, o.e7)([C.Z], () => null != C.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: p, enabled: _ } = (0, S.Z)(),
        v = (0, P.Z)(t),
        { limit: j, reachedLimit: O } = (0, I.Z)(t),
        E = (0, o.e7)([H.default], () => H.default.getCurrentUser()),
        R = (0, o.e7)([U.Z], () => (0, x.Z)(U.Z)),
        M = (0, o.e7)([F.Z], () => F.Z.getVoiceChannelId() === t.id, [t.id]),
        L = (0, o.e7)([f.Z], () => f.Z.getStreamParticipants(t.id)[0], [t.id]),
        B = (0, X.PK)(t.id),
        G = j > 0,
        V = (O && !B) || (null != L && L.user.id !== (null == E ? void 0 : E.id)),
        z = (0, y.u)('AudioDeviceMenu', n, { entrypoint: el.A5.CARET }),
        Y = i.useRef(null),
        q = i.useRef(null);
    if (null == E) return null;
    let K = (0, r.jsx)(c.yRy, {
        targetElementRef: Y,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(w.Z, {
                children: (0, r.jsx)(g.Z, {
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
            return (0, r.jsx)(k.C, {
                ref: Y,
                centerButton: !0,
                hasPermission: v,
                enabled: _,
                cameraUnavailable: p,
                onChange: N.r,
                onCameraUnavailable: A.Z,
                channelLimitReached: O,
                channelLimit: j,
                popoutOpen: i,
                onPopoutClick: n
            });
        }
    });
    return (0, r.jsxs)('div', {
        className: eo.wrapper,
        children: [
            M && !l
                ? (0, r.jsxs)('div', {
                      className: eo.buttonSection,
                      children: [
                          (0, r.jsx)(c.yRy, {
                              targetElementRef: q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(w.Z, {
                                      children: (0, r.jsx)(m.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: z
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
                                  return (0, r.jsx)(D.Z, {
                                      ref: q,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: a,
                                      serverMute: s,
                                      suppress: l,
                                      popoutOpen: i,
                                      onClick: () => (0, b.Z)(s, l, 'Stage Channel Controls'),
                                      awaitingRemote: d
                                  });
                              }
                          }),
                          G && K
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: eo.buttonSection,
                children: [
                    M && !l && G
                        ? (0, r.jsx)(N.NZ, {
                              channel: t,
                              currentUser: E,
                              exitFullScreen: () => null,
                              canGoLive: R,
                              hasPermission: v,
                              disabled: V
                          })
                        : null,
                    (0, r.jsx)(eh, { channelId: t.id }),
                    M && (0, r.jsx)(es, { channel: t }),
                    M && u && l && (0, r.jsx)(eu, { channel: t }),
                    M && !l && (0, r.jsx)(ep, { channel: t }),
                    (0, r.jsx)(T.Z, { channel: t })
                ]
            }),
            (0, r.jsx)(ed, { channel: t })
        ]
    });
});
function em(e) {
    let { channel: t } = e;
    return (0, r.jsxs)('div', {
        className: eo.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: eo.buttonSection,
                children: (0, r.jsx)(eh, { channelId: t.id })
            }),
            (0, r.jsx)(ed, { channel: t })
        ]
    });
}
let eg = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, et.Z)(t.id),
        l = (0, W.B)(t.id),
        a = (0, o.e7)([B.Z], () => B.Z.can(Y.yP, t), [t]),
        s = (0, en.Z)(t.id),
        c = (0, o.e7)([f.Z], () => (null != t ? f.Z.getSelectedParticipant(t.id) : null)),
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
                            u ? (0, r.jsx)(j.Z, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)('div', { className: eo.separator }),
                            u && a
                                ? (0, r.jsx)(O.Z, {
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
