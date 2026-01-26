n.d(t, {
    A: () => ey,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(342494),
    a = n(397927),
    o = n(956793),
    c = n(517461),
    u = n(935649),
    d = n(847599),
    p = n(793574),
    h = n(688810),
    f = n(313961),
    g = n(385318),
    m = n(750765),
    b = n(183184),
    A = n(384059),
    y = n(480890),
    _ = n(643501),
    O = n(880144),
    j = n(698441),
    v = n(394412),
    x = n(859894),
    E = n(267102),
    C = n(931991),
    S = n(151476),
    I = n(405018),
    N = n(927258),
    T = n(173660),
    P = n(105225),
    w = n(579153),
    R = n(222692),
    D = n(461782),
    M = n(246356),
    L = n(709562),
    k = n(404355),
    G = n(577062),
    U = n(970636),
    B = n(961350),
    V = n(430452),
    F = n(576705),
    H = n(309010),
    K = n(287809),
    W = n(993838),
    z = n(849736),
    Y = n(776781),
    q = n(233993),
    X = n(312006),
    J = n(446600),
    Q = n(96566),
    Z = n(302884),
    $ = n(30108),
    ee = n(39938),
    et = n(106044),
    en = n(370228),
    er = n(982279),
    el = n(418208),
    ei = n(505543),
    es = n(361619),
    ea = n(806931),
    eo = n(985018),
    ec = n(563429),
    eu = n(117816);

function ed(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.Ay)(),
        i = (0, er.A)(t.id),
        [o, p] = (0, es.A)(t),
        f = (0, en.L)(t),
        g = (0, el.Vv)(),
        m = (0, el.tp)(),
        b = l.useRef(null),
        [y, _] = (0, c.V)("age-verification-stage-popover-dismissed", !1),
        O = l.useContext(D.vG);
    if (i) return null;
    let j = m && !y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.l, {
                ref: b,
                isTrayButton: !0,
                isActive: o,
                label: (function (e, t, n, r) {
                    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !l && r
                        ? null
                        : n
                          ? eo.intl.string(eo.t.NzITVo)
                          : e
                            ? eo.intl.string(eo.t.GCimTk)
                            : t
                              ? eo.intl.string(eo.t.hLbG5N)
                              : eo.intl.string(eo.t.e4WMvx);
                })(o, f, g, m, y),
                iconComponent: g ? a._xi : a.E7M,
                onClick: () => {
                    (0, A.X)(n, A.O.REQUEST_TO_SPEAK, !o),
                        _(!0),
                        g
                            ? u.A.showAgeVerificationGetStartedModal({
                                  entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND,
                              })
                            : p();
                },
                color: o ? "green" : void 0,
                disabled: !f && !o,
            }),
            j &&
                (0, r.jsx)(s.AM, {
                    targetElementRef: b,
                    graphic: {
                        type: "image",
                        src: eu.A,
                    },
                    gradientColor: "blue",
                    title: eo.intl.string(eo.t.zvubnM),
                    body: eo.intl.string(eo.t["/wx+J2"]),
                    shouldShow: !O,
                    actions: [
                        {
                            text: eo.intl.string(eo.t.KXVgjt),
                            onClick: () => {
                                u.A.showAgeVerificationGetStartedModal({
                                    entryPoint: d.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    _(!0);
                            },
                        },
                    ],
                    onRequestClose: () => _(!0),
                }),
        ],
    });
}
let ep = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, i.bG)([H.A], () => H.A.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)("div", {
        className: ec.kL,
        children: [
            (0, r.jsxs)("div", {
                className: ec.qi,
                children: [
                    (0, r.jsx)(em, {
                        channelId: t.id,
                    }),
                    n
                        ? (0, r.jsx)(ed, {
                              channel: t,
                          })
                        : null,
                    (0, r.jsx)(w.A, {
                        channel: t,
                    }),
                ],
            }),
            (0, r.jsx)(ef, {
                channel: t,
            }),
        ],
    });
});

function eh(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.Ay)();
    return (0, r.jsx)(L.l, {
        isTrayButton: !0,
        onClick: () => {
            ((0, A.X)(n, A.O.SPEAK_ON_STAGE), (0, el.Cf)(t.id))
                ? u.A.showAgeVerificationGetStartedModal({
                      entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND,
                  })
                : (0, z.e7)(t, !1);
        },
        iconComponent: a.LvC,
        label: eo.intl.string(eo.t["8Joh+p"]),
    });
}

function ef(e) {
    let { channel: t, onSelect: n } = e,
        s = (0, E.Us)(),
        { canManageGuildEvent: c } = (0, C.nr)(t),
        u = (0, i.bG)([J.A], () => J.A.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, i.bG)([j.Ay], () => j.Ay.getGuildScheduledEvent(null == u ? void 0 : u.guild_scheduled_event_id)),
        { suppress: f } = (0, T.A)(t),
        g = B.default.getId(),
        [m] = (0, es.A)(t),
        b = X.Ay.isModerator(g, t.id),
        _ = (0, Y.Ni)(t.id),
        O = c(d),
        { parentAnalyticsLocation: v } = (0, h.Ay)(),
        x = l.useRef(null),
        S = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                ((0, A.X)(p.A.VOICE_CONTROL_TRAY, A.O.DISCONNECT), (0, et.A)(t))
                    ? (0, W.j3)(t, n)
                    : o.default.disconnect();
            })({
                channel: t,
                appContext: s,
            });
    return (b || O) && null != u
        ? (0, r.jsx)(a.YNO, {
              targetElementRef: x,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, r.jsx)(M.A, {
                      children: (0, r.jsx)(a.W1t, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, y.s)("End Stage", v, {
                              entrypoint: ea.GK.CARET,
                          }),
                          children: (0, r.jsx)(a.Drp, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, W.$q)(t, s),
                              label: eo.intl.string(eo.t["Fmx5y/"]),
                              icon: a.aXh,
                              leadingAccessory: {
                                  type: "icon",
                                  icon: a.aXh,
                              },
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: a.YNO.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: l } = t;
                  return (0, r.jsx)(k.A, {
                      ref: x,
                      label: eo.intl.string(eo.t.c6qKwr),
                      onClick: S,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (f && !_) || m
          ? (0, r.jsx)(k.A, {
                label: eo.intl.string(eo.t.SMKyih),
                onClick: S,
            })
          : (0, r.jsx)(k.A, {
                label: eo.intl.string(eo.t.c6qKwr),
                onClick: S,
            });
}

function eg(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.Ay)();
    return (0, r.jsx)(L.l, {
        isTrayButton: !0,
        iconComponent: a.U$V,
        label: eo.intl.string(eo.t.ezLpY6),
        onClick: () => {
            (0, A.X)(n, A.O.MOVE_TO_AUDIENCE), (0, z.Tf)(t);
        },
    });
}

function em(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, h.Ay)(),
        l = (0, i.bG)([ee.A], () => ee.A.isMuted()),
        s = (0, $.bF)(t),
        o = (0, i.bG)([ee.A], () => ee.A.shouldPlay());
    return s
        ? (0, r.jsx)(L.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
              iconComponent: l ? a.CIB : a.T7G,
              color: l ? void 0 : "green",
              onClick: () => {
                  (0, A.X)(n, A.O.STAGE_MUSIC, l), (0, Z.k)(!l);
              },
          })
        : (0, r.jsx)(L.l, {
              isTrayButton: !0,
              isActive: o,
              label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
              iconComponent: o ? a.T7G : a.CIB,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, A.X)(n, A.O.STAGE_MUSIC, !o), (0, Z.C)(!o);
              },
          });
}
let eb = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, h.Ay)(),
        { suppress: s, selfMute: o, mute: c } = (0, T.A)(t),
        u = (0, Y.Ni)(t.id),
        d = (0, er.A)(t.id),
        p = (0, i.bG)([_.default], () => null != _.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: A, enabled: j } = (0, S.A)(),
        v = (0, N.A)(t),
        { limit: x, reachedLimit: E } = (0, I.A)(t),
        C = (0, i.bG)([K.default], () => K.default.getCurrentUser()),
        D = (0, i.bG)([V.A], () => (0, O.A)(V.A)),
        L = (0, i.bG)([H.A], () => H.A.getVoiceChannelId() === t.id, [t.id]),
        k = (0, i.bG)([f.A], () => f.A.getStreamParticipants(t.id)[0], [t.id]),
        B = (0, Q.qT)(t.id),
        F = x > 0,
        W = (E && !B) || (null != k && k.user.id !== (null == C ? void 0 : C.id)),
        z = (0, y.s)("AudioDeviceMenu", n, {
            entrypoint: ea.GK.CARET,
        }),
        q = l.useRef(null),
        X = l.useRef(null);
    if (null == C) return null;
    let J = (0, r.jsx)(a.YNO, {
        targetElementRef: q,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(M.A, {
                children: (0, r.jsx)(m.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, y.s)("VideoDeviceMenu", n, {
                        entrypoint: ea.GK.CARET,
                    }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: a.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(U.A, {
                ref: q,
                centerButton: !0,
                hasPermission: v,
                enabled: j,
                cameraUnavailable: A,
                onChange: P.SZ,
                onCameraUnavailable: R.A,
                channelLimitReached: E,
                channelLimit: x,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, r.jsxs)("div", {
        className: ec.iE,
        children: [
            L && !s
                ? (0, r.jsxs)("div", {
                      className: ec.qi,
                      children: [
                          (0, r.jsx)(a.YNO, {
                              targetElementRef: X,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(M.A, {
                                      children: (0, r.jsx)(g.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: z,
                                      }),
                                  });
                              },
                              align: "right",
                              position: "top",
                              spacing: 16,
                              animation: a.YNO.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: l } = t;
                                  return (0, r.jsx)(G.A, {
                                      ref: X,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: c,
                                      suppress: s,
                                      popoutOpen: l,
                                      onClick: () => (0, b.A)(c, s, "Stage Channel Controls"),
                                      awaitingRemote: p,
                                  });
                              },
                          }),
                          F && J,
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: ec.qi,
                children: [
                    L && !s && F
                        ? (0, r.jsx)(P.rP, {
                              channel: t,
                              currentUser: C,
                              exitFullScreen: () => null,
                              canGoLive: D,
                              hasPermission: v,
                              disabled: W,
                          })
                        : null,
                    (0, r.jsx)(em, {
                        channelId: t.id,
                    }),
                    L &&
                        (0, r.jsx)(ed, {
                            channel: t,
                        }),
                    L &&
                        u &&
                        s &&
                        d &&
                        (0, r.jsx)(eh, {
                            channel: t,
                        }),
                    L &&
                        !s &&
                        (0, r.jsx)(eg, {
                            channel: t,
                        }),
                    (0, r.jsx)(w.A, {
                        channel: t,
                    }),
                ],
            }),
            (0, r.jsx)(ef, {
                channel: t,
            }),
        ],
    });
});

function eA(e) {
    let { channel: t } = e;
    return (0, r.jsxs)("div", {
        className: ec.iE,
        children: [
            (0, r.jsx)("div", {
                className: ec.qi,
                children: (0, r.jsx)(em, {
                    channelId: t.id,
                }),
            }),
            (0, r.jsx)(ef, {
                channel: t,
            }),
        ],
    });
}
let ey = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, er.A)(t.id),
        s = (0, Y.Ni)(t.id),
        a = (0, i.bG)([F.A], () => F.A.can(q.QY, t), [t]),
        o = (0, el.zU)(),
        c = (0, ei.A)(t.id),
        u = (0, i.bG)([f.A], () => (null != t ? f.A.getSelectedParticipant(t.id) : null)),
        d = !c && null == u;
    return n
        ? (0, r.jsx)(eA, {
              channel: t,
          })
        : l || s
          ? (0, r.jsxs)("div", {
                className: ec.My,
                children: [
                    (0, r.jsxs)("div", {
                        className: ec.Ac,
                        children: [
                            d
                                ? (0, r.jsx)(v.A, {
                                      channelId: null == t ? void 0 : t.id,
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: ec.me,
                            }),
                            d && a && !o
                                ? (0, r.jsx)(x.A, {
                                      highlight: !0,
                                      channel: t,
                                  })
                                : null,
                            (0, r.jsx)("div", {
                                className: ec.me,
                            }),
                        ],
                    }),
                    (0, r.jsx)(eb, {
                        channel: t,
                    }),
                ],
            })
          : (0, r.jsx)(ep, {
                channel: t,
            });
});
