(n.d(t, { Z: () => em }), n(388685));
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
    y = n(258609),
    C = n(74299),
    x = n(924301),
    v = n(459502),
    j = n(856691),
    O = n(357156),
    E = n(923973),
    S = n(829750),
    I = n(189771),
    P = n(294629),
    Z = n(793319),
    N = n(987329),
    T = n(560688),
    A = n(390322),
    w = n(871499),
    R = n(88479),
    k = n(386000),
    M = n(25827),
    L = n(314897),
    D = n(131951),
    U = n(496675),
    B = n(944486),
    F = n(594174),
    H = n(881824),
    G = n(471253),
    V = n(922482),
    z = n(200498),
    W = n(146085),
    Y = n(88751),
    q = n(427679),
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
    eo = n(409826);
function ea(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, ee.Z)(t.id),
        [l, o] = (0, en.Z)(t),
        c = (0, a.e7)([U.Z], () => U.Z.can(er.Plq.REQUEST_TO_SPEAK, t));
    return i
        ? null
        : (0, r.jsx)(w.d, {
              isTrayButton: !0,
              isActive: l,
              label: l ? el.intl.string(el.t.GCimTk) : c ? el.intl.string(el.t.hLbG5O) : el.intl.string(el.t.e4WMv7),
              iconComponent: s.V9,
              onClick: () => {
                  ((0, b.v)(n, b.d.REQUEST_TO_SPEAK, !l), o());
              },
              color: l ? 'green' : void 0,
              disabled: !c && !l
          });
}
let es = i.memo(function (e) {
    let { channel: t } = e,
        n = (0, a.e7)([B.Z], () => B.Z.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)('div', {
        className: eo.container,
        children: [
            (0, r.jsxs)('div', {
                className: eo.buttonSection,
                children: [(0, r.jsx)(ep, { channelId: t.id }), n ? (0, r.jsx)(ea, { channel: t }) : null, (0, r.jsx)(N.Z, { channel: t })]
            }),
            (0, r.jsx)(eu, { channel: t })
        ]
    });
});
function ec(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)();
    return (0, r.jsx)(w.d, {
        isTrayButton: !0,
        onClick: () => {
            ((0, G.RK)(t, !1), (0, b.v)(n, b.d.SPEAK_ON_STAGE));
        },
        iconComponent: s.Lrb,
        label: el.intl.string(el.t['8Joh+v'])
    });
}
function eu(e) {
    let { channel: t, onSelect: n } = e,
        l = (0, u.bp)(),
        { canManageGuildEvent: h } = (0, O.XJ)(t),
        f = (0, a.e7)([q.Z], () => q.Z.getStageInstanceByChannel(t.id), [t.id]),
        m = (0, a.e7)([x.ZP], () => x.ZP.getGuildScheduledEvent(null == f ? void 0 : f.guild_scheduled_event_id)),
        g = (0, a.e7)([B.Z], () => B.Z.getVoiceChannelId() === t.id, [t.id]),
        { suppress: y } = (0, P.Z)(t),
        C = L.default.getId(),
        [v] = (0, en.Z)(t),
        j = Y.ZP.isModerator(C, t.id),
        E = (0, z.B)(t.id),
        S = h(m),
        { parentAnalyticsLocation: I } = (0, p.ZP)(),
        Z = i.useRef(null);
    if (!g)
        return (0, r.jsx)(s.zxk, {
            size: s.zxk.Sizes.MEDIUM,
            color: s.zxk.Colors.GREEN,
            className: o()(eo.buttonSpacing, eo.buttonWithTextButton),
            onClick: () => {
                ((0, b.v)(I, b.d.JOIN_STAGE), (0, V.TM)(t));
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
                        children: el.intl.string(el.t['7vb2cX'])
                    })
                ]
            })
        });
    let N = () =>
        (function (e) {
            let { channel: t, appContext: n } = e;
            if (((0, b.v)(d.Z.VOICE_CONTROL_TRAY, b.d.DISCONNECT), (0, $.Z)(t))) return void (0, H.Us)(t, n);
            c.default.disconnect();
        })({
            channel: t,
            appContext: l
        });
    return (j || S) && null != f
        ? (0, r.jsx)(s.yRy, {
              targetElementRef: Z,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(A.Z, {
                      children: (0, r.jsx)(s.v2r, {
                          navId: 'exit-options',
                          'aria-label': el.intl.string(el.t['3Uj+2t']),
                          onClose: i,
                          onSelect: n,
                          onInteraction: (0, _.u)('End Stage', I, { entrypoint: ei.A5.CARET }),
                          children: (0, r.jsx)(s.sNh, {
                              id: 'end-stage',
                              color: 'danger',
                              action: () => (0, H.Ev)(t, l),
                              label: el.intl.string(el.t.Fmx5y8),
                              icon: s.k$p
                          })
                      })
                  });
              },
              align: 'center',
              position: 'top',
              spacing: 16,
              animation: s.yRy.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: i } = t;
                  return (0, r.jsx)(R.Z, {
                      ref: Z,
                      label: el.intl.string(el.t.c6qKws),
                      onClick: N,
                      onPopoutClick: n,
                      popoutOpen: i
                  });
              }
          })
        : (y && !E) || v
          ? (0, r.jsx)(R.Z, {
                label: el.intl.string(el.t.SMKyio),
                onClick: N
            })
          : (0, r.jsx)(R.Z, {
                label: el.intl.string(el.t.c6qKws),
                onClick: N
            });
}
function ed(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)();
    return (0, r.jsx)(w.d, {
        isTrayButton: !0,
        iconComponent: s.zRq,
        label: el.intl.string(el.t.ezLpY2),
        onClick: () => {
            ((0, b.v)(n, b.d.MOVE_TO_AUDIENCE), (0, G.yi)(t));
        }
    });
}
function ep(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        i = (0, a.e7)([J.Z], () => J.Z.isMuted()),
        l = (0, Q.pp)(t),
        o = (0, a.e7)([J.Z], () => J.Z.shouldPlay());
    return l
        ? (0, r.jsx)(w.d, {
              isTrayButton: !0,
              isActive: !i,
              label: i ? el.intl.string(el.t.ScHlfn) : el.intl.string(el.t.zqxfra),
              iconComponent: i ? s.xjP : s.RZG,
              color: i ? void 0 : 'green',
              onClick: () => {
                  ((0, b.v)(n, b.d.STAGE_MUSIC, i), (0, X.v)(!i));
              }
          })
        : (0, r.jsx)(w.d, {
              isTrayButton: !0,
              isActive: o,
              label: o ? el.intl.string(el.t.zqxfra) : el.intl.string(el.t.ScHlfn),
              iconComponent: o ? s.RZG : s.xjP,
              color: o ? 'green' : void 0,
              onClick: () => {
                  ((0, b.v)(n, b.d.STAGE_MUSIC, !o), (0, X.z)(!o));
              }
          });
}
let eh = i.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.ZP)(),
        { suppress: l, selfMute: o, mute: c } = (0, P.Z)(t),
        u = (0, z.B)(t.id),
        d = (0, a.e7)([y.Z], () => null != y.Z.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: b, enabled: x } = (0, E.Z)(),
        v = (0, I.Z)(t),
        { limit: j, reachedLimit: O } = (0, S.Z)(t),
        w = (0, a.e7)([F.default], () => F.default.getCurrentUser()),
        R = (0, a.e7)([D.Z], () => (0, C.Z)(D.Z)),
        L = (0, a.e7)([B.Z], () => B.Z.getVoiceChannelId() === t.id, [t.id]),
        U = (0, a.e7)([h.Z], () => h.Z.getStreamParticipants(t.id)[0], [t.id]),
        H = (0, K.PK)(t.id),
        G = j > 0,
        V = (O && !H) || (null != U && U.user.id !== (null == w ? void 0 : w.id)),
        W = (0, _.u)('AudioDeviceMenu', n, { entrypoint: ei.A5.CARET }),
        Y = i.useRef(null),
        q = i.useRef(null);
    if (null == w) return null;
    let X = (0, r.jsx)(s.yRy, {
        targetElementRef: Y,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(A.Z, {
                children: (0, r.jsx)(m.Z, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, _.u)('VideoDeviceMenu', n, { entrypoint: ei.A5.CARET })
                })
            });
        },
        position: 'top',
        align: 'right',
        spacing: 16,
        animation: s.yRy.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(M.C, {
                ref: Y,
                centerButton: !0,
                hasPermission: v,
                enabled: x,
                cameraUnavailable: b,
                onChange: Z.r,
                onCameraUnavailable: T.Z,
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
            L && !l
                ? (0, r.jsxs)('div', {
                      className: eo.buttonSection,
                      children: [
                          (0, r.jsx)(s.yRy, {
                              targetElementRef: q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(A.Z, {
                                      children: (0, r.jsx)(f.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: W
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
                                  return (0, r.jsx)(k.Z, {
                                      ref: q,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: c,
                                      suppress: l,
                                      popoutOpen: i,
                                      onClick: () => (0, g.Z)(c, l, 'Stage Channel Controls'),
                                      awaitingRemote: d
                                  });
                              }
                          }),
                          G && X
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: eo.buttonSection,
                children: [
                    L && !l && G
                        ? (0, r.jsx)(Z.NZ, {
                              channel: t,
                              currentUser: w,
                              exitFullScreen: () => null,
                              canGoLive: R,
                              hasPermission: v,
                              disabled: V
                          })
                        : null,
                    (0, r.jsx)(ep, { channelId: t.id }),
                    L && (0, r.jsx)(ea, { channel: t }),
                    L && u && l && (0, r.jsx)(ec, { channel: t }),
                    L && !l && (0, r.jsx)(ed, { channel: t }),
                    (0, r.jsx)(N.Z, { channel: t })
                ]
            }),
            (0, r.jsx)(eu, { channel: t })
        ]
    });
});
function ef(e) {
    let { channel: t } = e;
    return (0, r.jsxs)('div', {
        className: eo.wrapper,
        children: [
            (0, r.jsx)('div', {
                className: eo.buttonSection,
                children: (0, r.jsx)(ep, { channelId: t.id })
            }),
            (0, r.jsx)(eu, { channel: t })
        ]
    });
}
let em = i.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        i = (0, ee.Z)(t.id),
        l = (0, z.B)(t.id),
        o = (0, a.e7)([U.Z], () => U.Z.can(W.yP, t), [t]),
        s = (0, et.Z)(t.id),
        c = (0, a.e7)([h.Z], () => (null != t ? h.Z.getSelectedParticipant(t.id) : null)),
        u = !s && null == c;
    return n
        ? (0, r.jsx)(ef, { channel: t })
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
                                ? (0, r.jsx)(j.Z, {
                                      highlight: !0,
                                      channel: t
                                  })
                                : null,
                            (0, r.jsx)('div', { className: eo.separator })
                        ]
                    }),
                    (0, r.jsx)(eh, { channel: t })
                ]
            })
          : (0, r.jsx)(es, { channel: t });
});
