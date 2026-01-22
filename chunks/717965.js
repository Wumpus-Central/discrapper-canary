n.d(t, { A: () => ey }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(342494),
    s = n(397927),
    o = n(956793),
    c = n(517461),
    u = n(935649),
    d = n(847599),
    f = n(793574),
    p = n(688810),
    h = n(313961),
    b = n(385318),
    g = n(750765),
    m = n(183184),
    A = n(384059),
    y = n(480890),
    O = n(643501),
    j = n(880144),
    v = n(698441),
    x = n(394412),
    E = n(859894),
    _ = n(267102),
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
    G = n(404355),
    k = n(577062),
    U = n(970636),
    V = n(961350),
    F = n(430452),
    H = n(576705),
    B = n(309010),
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
    ea = n(361619),
    es = n(806931),
    eo = n(985018),
    ec = n(563429),
    eu = n(117816);
function ed(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.Ay)(),
        i = (0, er.A)(t.id),
        [o, f] = (0, ea.A)(t),
        h = (0, en.L)(t),
        b = (0, el.Vv)(),
        g = (0, el.tp)(),
        m = l.useRef(null),
        [y, O] = (0, c.V)("age-verification-stage-popover-dismissed", !1),
        j = l.useContext(D.vG);
    if (i) return null;
    let v = g && !y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L.l, {
                ref: m,
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
                })(o, h, b, g, y),
                iconComponent: b ? s._xi : s.E7M,
                onClick: () => {
                    (0, A.X)(n, A.O.REQUEST_TO_SPEAK, !o),
                        O(!0),
                        b ? u.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND }) : f();
                },
                color: o ? "green" : void 0,
                disabled: !h && !o,
            }),
            v &&
                (0, r.jsx)(a.AM, {
                    targetElementRef: m,
                    graphic: {
                        type: "image",
                        src: eu.A,
                    },
                    gradientColor: "blue",
                    title: eo.intl.string(eo.t.zvubnM),
                    body: eo.intl.string(eo.t["/wx+J2"]),
                    shouldShow: !j,
                    actions: [
                        {
                            text: eo.intl.string(eo.t.KXVgjt),
                            onClick: () => {
                                u.A.showAgeVerificationGetStartedModal({
                                    entryPoint: d.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    O(!0);
                            },
                        },
                    ],
                    onRequestClose: () => O(!0),
                }),
        ],
    });
}
let ef = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, i.bG)([B.A], () => B.A.getVoiceChannelId() === t.id, [t.id]);
    return (0, r.jsxs)("div", {
        className: ec.kL,
        children: [
            (0, r.jsxs)("div", {
                className: ec.qi,
                children: [
                    (0, r.jsx)(eg, { channelId: t.id }),
                    n ? (0, r.jsx)(ed, { channel: t }) : null,
                    (0, r.jsx)(w.A, { channel: t }),
                ],
            }),
            (0, r.jsx)(eh, { channel: t }),
        ],
    });
});
function ep(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.Ay)();
    return (0, r.jsx)(L.l, {
        isTrayButton: !0,
        onClick: () => {
            ((0, A.X)(n, A.O.SPEAK_ON_STAGE), (0, el.Cf)(t.id))
                ? u.A.showAgeVerificationGetStartedModal({ entryPoint: d.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, z.e7)(t, !1);
        },
        iconComponent: s.LvC,
        label: eo.intl.string(eo.t["8Joh+p"]),
    });
}
function eh(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, _.Us)(),
        { canManageGuildEvent: c } = (0, C.nr)(t),
        u = (0, i.bG)([J.A], () => J.A.getStageInstanceByChannel(t.id), [t.id]),
        d = (0, i.bG)([v.Ay], () => v.Ay.getGuildScheduledEvent(null == u ? void 0 : u.guild_scheduled_event_id)),
        { suppress: h } = (0, T.A)(t),
        b = V.default.getId(),
        [g] = (0, ea.A)(t),
        m = X.Ay.isModerator(b, t.id),
        O = (0, Y.Ni)(t.id),
        j = c(d),
        { parentAnalyticsLocation: x } = (0, p.Ay)(),
        E = l.useRef(null),
        S = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                ((0, A.X)(f.A.VOICE_CONTROL_TRAY, A.O.DISCONNECT), (0, et.A)(t))
                    ? (0, W.j3)(t, n)
                    : o.default.disconnect();
            })({
                channel: t,
                appContext: a,
            });
    return (m || j) && null != u
        ? (0, r.jsx)(s.YNO, {
              targetElementRef: E,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, r.jsx)(M.A, {
                      children: (0, r.jsx)(s.W1t, {
                          navId: "exit-options",
                          "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, y.s)("End Stage", x, { entrypoint: es.GK.CARET }),
                          children: (0, r.jsx)(s.Drp, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, W.$q)(t, a),
                              label: eo.intl.string(eo.t["Fmx5y/"]),
                              icon: s.aXh,
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: s.YNO.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: l } = t;
                  return (0, r.jsx)(G.A, {
                      ref: E,
                      label: eo.intl.string(eo.t.c6qKwr),
                      onClick: S,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (h && !O) || g
          ? (0, r.jsx)(G.A, {
                label: eo.intl.string(eo.t.SMKyih),
                onClick: S,
            })
          : (0, r.jsx)(G.A, {
                label: eo.intl.string(eo.t.c6qKwr),
                onClick: S,
            });
}
function eb(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.Ay)();
    return (0, r.jsx)(L.l, {
        isTrayButton: !0,
        iconComponent: s.U$V,
        label: eo.intl.string(eo.t.ezLpY6),
        onClick: () => {
            (0, A.X)(n, A.O.MOVE_TO_AUDIENCE), (0, z.Tf)(t);
        },
    });
}
function eg(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, p.Ay)(),
        l = (0, i.bG)([ee.A], () => ee.A.isMuted()),
        a = (0, $.bF)(t),
        o = (0, i.bG)([ee.A], () => ee.A.shouldPlay());
    return a
        ? (0, r.jsx)(L.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
              iconComponent: l ? s.CIB : s.T7G,
              color: l ? void 0 : "green",
              onClick: () => {
                  (0, A.X)(n, A.O.STAGE_MUSIC, l), (0, Z.k)(!l);
              },
          })
        : (0, r.jsx)(L.l, {
              isTrayButton: !0,
              isActive: o,
              label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
              iconComponent: o ? s.T7G : s.CIB,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, A.X)(n, A.O.STAGE_MUSIC, !o), (0, Z.C)(!o);
              },
          });
}
let em = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, p.Ay)(),
        { suppress: a, selfMute: o, mute: c } = (0, T.A)(t),
        u = (0, Y.Ni)(t.id),
        d = (0, er.A)(t.id),
        f = (0, i.bG)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: A, enabled: v } = (0, S.A)(),
        x = (0, N.A)(t),
        { limit: E, reachedLimit: _ } = (0, I.A)(t),
        C = (0, i.bG)([K.default], () => K.default.getCurrentUser()),
        D = (0, i.bG)([F.A], () => (0, j.A)(F.A)),
        L = (0, i.bG)([B.A], () => B.A.getVoiceChannelId() === t.id, [t.id]),
        G = (0, i.bG)([h.A], () => h.A.getStreamParticipants(t.id)[0], [t.id]),
        V = (0, Q.qT)(t.id),
        H = E > 0,
        W = (_ && !V) || (null != G && G.user.id !== (null == C ? void 0 : C.id)),
        z = (0, y.s)("AudioDeviceMenu", n, { entrypoint: es.GK.CARET }),
        q = l.useRef(null),
        X = l.useRef(null);
    if (null == C) return null;
    let J = (0, r.jsx)(s.YNO, {
        targetElementRef: q,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(M.A, {
                children: (0, r.jsx)(g.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, y.s)("VideoDeviceMenu", n, { entrypoint: es.GK.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: s.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(U.A, {
                ref: q,
                centerButton: !0,
                hasPermission: x,
                enabled: v,
                cameraUnavailable: A,
                onChange: P.SZ,
                onCameraUnavailable: R.A,
                channelLimitReached: _,
                channelLimit: E,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, r.jsxs)("div", {
        className: ec.iE,
        children: [
            L && !a
                ? (0, r.jsxs)("div", {
                      className: ec.qi,
                      children: [
                          (0, r.jsx)(s.YNO, {
                              targetElementRef: X,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(M.A, {
                                      children: (0, r.jsx)(b.default, {
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
                              animation: s.YNO.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: l } = t;
                                  return (0, r.jsx)(k.A, {
                                      ref: X,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: c,
                                      suppress: a,
                                      popoutOpen: l,
                                      onClick: () => (0, m.A)(c, a, "Stage Channel Controls"),
                                      awaitingRemote: f,
                                  });
                              },
                          }),
                          H && J,
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: ec.qi,
                children: [
                    L && !a && H
                        ? (0, r.jsx)(P.rP, {
                              channel: t,
                              currentUser: C,
                              exitFullScreen: () => null,
                              canGoLive: D,
                              hasPermission: x,
                              disabled: W,
                          })
                        : null,
                    (0, r.jsx)(eg, { channelId: t.id }),
                    L && (0, r.jsx)(ed, { channel: t }),
                    L && u && a && d && (0, r.jsx)(ep, { channel: t }),
                    L && !a && (0, r.jsx)(eb, { channel: t }),
                    (0, r.jsx)(w.A, { channel: t }),
                ],
            }),
            (0, r.jsx)(eh, { channel: t }),
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
                children: (0, r.jsx)(eg, { channelId: t.id }),
            }),
            (0, r.jsx)(eh, { channel: t }),
        ],
    });
}
let ey = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, er.A)(t.id),
        a = (0, Y.Ni)(t.id),
        s = (0, i.bG)([H.A], () => H.A.can(q.QY, t), [t]),
        o = (0, el.zU)(),
        c = (0, ei.A)(t.id),
        u = (0, i.bG)([h.A], () => (null != t ? h.A.getSelectedParticipant(t.id) : null)),
        d = !c && null == u;
    return n
        ? (0, r.jsx)(eA, { channel: t })
        : l || a
          ? (0, r.jsxs)("div", {
                className: ec.My,
                children: [
                    (0, r.jsxs)("div", {
                        className: ec.Ac,
                        children: [
                            d ? (0, r.jsx)(x.A, { channelId: null == t ? void 0 : t.id }) : null,
                            (0, r.jsx)("div", { className: ec.me }),
                            d && s && !o
                                ? (0, r.jsx)(E.A, {
                                      highlight: !0,
                                      channel: t,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: ec.me }),
                        ],
                    }),
                    (0, r.jsx)(em, { channel: t }),
                ],
            })
          : (0, r.jsx)(ef, { channel: t });
});
