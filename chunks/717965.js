"use strict";
n.d(t, { A: () => ex });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(342494),
    a = n(397927),
    o = n(956793),
    c = n(517461),
    d = n(935649),
    u = n(847599),
    h = n(793574),
    A = n(688810),
    p = n(313961),
    g = n(385318),
    m = n(750765),
    _ = n(183184),
    f = n(384059),
    x = n(480890),
    C = n(643501),
    E = n(880144),
    I = n(698441),
    b = n(394412),
    N = n(859894),
    S = n(267102),
    T = n(931991),
    v = n(151476),
    y = n(405018),
    j = n(704877),
    R = n(173660),
    O = n(105225),
    L = n(579153),
    M = n(222692),
    D = n(461782),
    G = n(246356),
    U = n(709562),
    P = n(404355),
    w = n(577062),
    k = n(970636),
    V = n(961350),
    B = n(430452),
    H = n(576705),
    F = n(309010),
    K = n(287809),
    W = n(993838),
    Y = n(849736),
    z = n(776781),
    X = n(233993),
    q = n(312006),
    J = n(446600),
    Q = n(96566),
    $ = n(302884),
    Z = n(30108),
    ee = n(39938),
    et = n(106044),
    en = n(370228),
    ei = n(982279),
    es = n(418208),
    el = n(505543),
    er = n(361619),
    ea = n(806931),
    eo = n(985018),
    ec = n(563429),
    ed = n(117816);
function eu(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        l = (0, ei.A)(t.id),
        [o, h] = (0, er.A)(t),
        p = (0, en.L)(t),
        g = (0, es.Vv)(),
        m = (0, es.tp)(),
        _ = s.useRef(null),
        [x, C] = (0, c.V)("age-verification-stage-popover-dismissed", !1),
        E = s.useContext(D.vG);
    if (l) return null;
    let I = m && !x;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(U.l, {
                ref: _,
                isTrayButton: !0,
                isActive: o,
                label: (function (e, t, n, i) {
                    let s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !s && i
                        ? null
                        : n
                          ? eo.intl.string(eo.t.NzITVo)
                          : e
                            ? eo.intl.string(eo.t.GCimTk)
                            : t
                              ? eo.intl.string(eo.t.hLbG5N)
                              : eo.intl.string(eo.t.e4WMvx);
                })(o, p, g, m, x),
                iconComponent: g ? a._xi : a.E7M,
                onClick: () => {
                    (0, f.X)(n, f.O.REQUEST_TO_SPEAK, !o),
                        C(!0),
                        g ? d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.STAGE_CHANNEL_RAISE_HAND }) : h();
                },
                color: o ? "green" : void 0,
                disabled: !p && !o,
            }),
            I &&
                (0, i.jsx)(r.AM, {
                    targetElementRef: _,
                    graphic: { type: "image", src: ed.A },
                    gradientColor: "blue",
                    title: eo.intl.string(eo.t.zvubnM),
                    body: eo.intl.string(eo.t["/wx+J2"]),
                    shouldShow: !E,
                    actions: [
                        {
                            text: eo.intl.string(eo.t.KXVgjt),
                            onClick: () => {
                                d.A.showAgeVerificationGetStartedModal({
                                    entryPoint: u.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    C(!0);
                            },
                        },
                    ],
                    onRequestClose: () => C(!0),
                }),
        ],
    });
}
let eh = s.memo(function (e) {
    let { channel: t } = e,
        n = (0, l.bG)([F.A], () => F.A.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)("div", {
        className: ec.kL,
        children: [
            (0, i.jsxs)("div", {
                className: ec.qi,
                children: [
                    (0, i.jsx)(em, { channelId: t.id }),
                    n ? (0, i.jsx)(eu, { channel: t }) : null,
                    (0, i.jsx)(L.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(ep, { channel: t }),
        ],
    });
});
function eA(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        s = (0, es.Vv)();
    return (0, i.jsx)(U.l, {
        isTrayButton: !0,
        onClick: () => {
            ((0, f.X)(n, f.O.SPEAK_ON_STAGE), s)
                ? d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, Y.e7)(t, !1);
        },
        iconComponent: s ? a.O1p : a.LvC,
        label: eo.intl.string(s ? eo.t.NzITVo : eo.t["8Joh+p"]),
    });
}
function ep(e) {
    let { channel: t, onSelect: n } = e,
        r = (0, S.Us)(),
        { canManageGuildEvent: c } = (0, T.nr)(t),
        d = (0, l.bG)([J.A], () => J.A.getStageInstanceByChannel(t.id), [t.id]),
        u = (0, l.bG)([I.Ay], () => I.Ay.getGuildScheduledEvent(d?.guild_scheduled_event_id)),
        { suppress: p } = (0, R.A)(t),
        g = V.default.getId(),
        [m] = (0, er.A)(t),
        _ = q.Ay.isModerator(g, t.id),
        C = (0, z.Ni)(t.id),
        E = c(u),
        { parentAnalyticsLocation: b } = (0, A.Ay)(),
        N = s.useRef(null),
        v = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                ((0, f.X)(h.A.VOICE_CONTROL_TRAY, f.O.DISCONNECT), (0, et.A)(t))
                    ? (0, W.j3)(t, n)
                    : o.default.disconnect();
            })({ channel: t, appContext: r });
    return (_ || E) && null != d
        ? (0, i.jsx)(a.YNO, {
              targetElementRef: N,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, i.jsx)(G.A, {
                      children: (0, i.jsx)(a.W1t, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
                          onClose: s,
                          onSelect: n,
                          onInteraction: (0, x.s)("End Stage", b, { entrypoint: ea.GK.CARET }),
                          children: (0, i.jsx)(a.Drp, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, W.$q)(t, r),
                              label: eo.intl.string(eo.t["Fmx5y/"]),
                              icon: a.aXh,
                              leadingAccessory: { type: "icon", icon: a.aXh },
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
                      { isShown: s } = t;
                  return (0, i.jsx)(P.A, {
                      ref: N,
                      label: eo.intl.string(eo.t.c6qKwr),
                      onClick: v,
                      onPopoutClick: n,
                      popoutOpen: s,
                  });
              },
          })
        : (p && !C) || m
          ? (0, i.jsx)(P.A, { label: eo.intl.string(eo.t.SMKyih), onClick: v })
          : (0, i.jsx)(P.A, { label: eo.intl.string(eo.t.c6qKwr), onClick: v });
}
function eg(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)();
    return (0, i.jsx)(U.l, {
        isTrayButton: !0,
        iconComponent: a.U$V,
        label: eo.intl.string(eo.t.ezLpY6),
        onClick: () => {
            (0, f.X)(n, f.O.MOVE_TO_AUDIENCE), (0, Y.Tf)(t);
        },
    });
}
function em(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        s = (0, l.bG)([ee.A], () => ee.A.isMuted()),
        r = (0, Z.bF)(t),
        o = (0, l.bG)([ee.A], () => ee.A.shouldPlay());
    return r
        ? (0, i.jsx)(U.l, {
              isTrayButton: !0,
              isActive: !s,
              label: s ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
              iconComponent: s ? a.CIB : a.T7G,
              color: s ? void 0 : "green",
              onClick: () => {
                  (0, f.X)(n, f.O.STAGE_MUSIC, s), (0, $.k)(!s);
              },
          })
        : (0, i.jsx)(U.l, {
              isTrayButton: !0,
              isActive: o,
              label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
              iconComponent: o ? a.T7G : a.CIB,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, f.X)(n, f.O.STAGE_MUSIC, !o), (0, $.C)(!o);
              },
          });
}
let e_ = s.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        { suppress: r, selfMute: o, mute: c } = (0, R.A)(t),
        d = (0, z.Ni)(t.id),
        u = (0, l.bG)([C.default], () => null != C.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: h, enabled: f } = (0, v.A)(),
        I = (0, j.A)(t),
        { limit: b, reachedLimit: N } = (0, y.A)(t),
        S = (0, l.bG)([K.default], () => K.default.getCurrentUser()),
        T = (0, l.bG)([B.Ay], () => (0, E.A)(B.Ay)),
        D = (0, l.bG)([F.A], () => F.A.getVoiceChannelId() === t.id, [t.id]),
        U = (0, l.bG)([p.A], () => p.A.getStreamParticipants(t.id)[0], [t.id]),
        P = (0, Q.qT)(t.id),
        V = b > 0,
        H = (N && !P) || (null != U && U.user.id !== S?.id),
        W = (0, x.s)("AudioDeviceMenu", n, { entrypoint: ea.GK.CARET }),
        Y = s.useRef(null),
        X = s.useRef(null);
    if (null == S) return null;
    let q = (0, i.jsx)(a.YNO, {
        targetElementRef: Y,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(G.A, {
                children: (0, i.jsx)(m.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, x.s)("VideoDeviceMenu", n, { entrypoint: ea.GK.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: a.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: s } = t;
            return (0, i.jsx)(k.A, {
                ref: Y,
                centerButton: !0,
                hasPermission: I,
                enabled: f,
                cameraUnavailable: h,
                onChange: O.SZ,
                onCameraUnavailable: M.A,
                channelLimitReached: N,
                channelLimit: b,
                popoutOpen: s,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: ec.iE,
        children: [
            D && !r
                ? (0, i.jsxs)("div", {
                      className: ec.qi,
                      children: [
                          (0, i.jsx)(a.YNO, {
                              targetElementRef: X,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(G.A, {
                                      children: (0, i.jsx)(g.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: W,
                                      }),
                                  });
                              },
                              align: "right",
                              position: "top",
                              spacing: 16,
                              animation: a.YNO.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: s } = t;
                                  return (0, i.jsx)(w.A, {
                                      ref: X,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: c,
                                      suppress: r,
                                      popoutOpen: s,
                                      onClick: () => (0, _.A)(c, r, "Stage Channel Controls"),
                                      awaitingRemote: u,
                                  });
                              },
                          }),
                          V && q,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: ec.qi,
                children: [
                    D && !r && V
                        ? (0, i.jsx)(O.rP, {
                              channel: t,
                              currentUser: S,
                              exitFullScreen: () => null,
                              canGoLive: T,
                              hasPermission: I,
                              disabled: H,
                          })
                        : null,
                    (0, i.jsx)(em, { channelId: t.id }),
                    D && (0, i.jsx)(eu, { channel: t }),
                    D && d && r && (0, i.jsx)(eA, { channel: t }),
                    D && !r && (0, i.jsx)(eg, { channel: t }),
                    (0, i.jsx)(L.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(ep, { channel: t }),
        ],
    });
});
function ef(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: ec.iE,
        children: [
            (0, i.jsx)("div", { className: ec.qi, children: (0, i.jsx)(em, { channelId: t.id }) }),
            (0, i.jsx)(ep, { channel: t }),
        ],
    });
}
let ex = s.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        s = (0, ei.A)(t.id),
        r = (0, z.Ni)(t.id),
        a = (0, l.bG)([H.A], () => H.A.can(X.QY, t), [t]),
        o = (0, es.zU)(),
        c = (0, el.A)(t.id),
        d = (0, l.bG)([p.A], () => (null != t ? p.A.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, i.jsx)(ef, { channel: t })
        : s || r
          ? (0, i.jsxs)("div", {
                className: ec.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: ec.Ac,
                        children: [
                            u ? (0, i.jsx)(b.A, { channelId: t?.id }) : null,
                            (0, i.jsx)("div", { className: ec.me }),
                            u && a && !o ? (0, i.jsx)(N.A, { highlight: !0, channel: t }) : null,
                            (0, i.jsx)("div", { className: ec.me }),
                        ],
                    }),
                    (0, i.jsx)(e_, { channel: t }),
                ],
            })
          : (0, i.jsx)(eh, { channel: t });
});
