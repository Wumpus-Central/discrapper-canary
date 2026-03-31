n.d(t, { A: () => ex });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(342494),
    r = n(397927),
    o = n(956793),
    c = n(517461),
    d = n(935649),
    u = n(847599),
    h = n(793574),
    A = n(688810),
    _ = n(313961),
    m = n(385318),
    g = n(750765),
    p = n(183184),
    f = n(384059),
    x = n(480890),
    E = n(643501),
    I = n(880144),
    C = n(698441),
    N = n(394412),
    T = n(859894),
    S = n(267102),
    b = n(931991),
    y = n(151476),
    v = n(405018),
    j = n(704877),
    R = n(173660),
    O = n(105225),
    L = n(579153),
    M = n(222692),
    D = n(461782),
    U = n(246356),
    G = n(709562),
    P = n(404355),
    k = n(577062),
    w = n(970636),
    B = n(961350),
    V = n(430452),
    H = n(576705),
    F = n(309010),
    K = n(287809),
    W = n(993838),
    Y = n(849736),
    z = n(776781),
    q = n(233993),
    X = n(312006),
    J = n(446600),
    Q = n(96566),
    $ = n(302884),
    Z = n(30108),
    ee = n(39938),
    et = n(106044),
    en = n(370228),
    ei = n(982279),
    el = n(418208),
    es = n(505543),
    ea = n(361619),
    er = n(806931),
    eo = n(985018),
    ec = n(775786),
    ed = n(117816);
function eu(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        s = (0, ei.A)(t.id),
        [o, h] = (0, ea.A)(t),
        _ = (0, en.L)(t),
        m = (0, el.Vv)(),
        g = (0, el.tp)(),
        p = l.useRef(null),
        [x, E] = (0, c.V)("age-verification-stage-popover-dismissed", !1),
        I = l.useContext(D.vG);
    if (s) return null;
    let C = g && !x;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(G.l, {
                ref: p,
                isTrayButton: !0,
                isActive: o,
                label: (function (e, t, n, i) {
                    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !l && i
                        ? null
                        : n
                          ? eo.intl.string(eo.t.NzITVo)
                          : e
                            ? eo.intl.string(eo.t.GCimTk)
                            : t
                              ? eo.intl.string(eo.t.hLbG5N)
                              : eo.intl.string(eo.t.e4WMvx);
                })(o, _, m, g, x),
                iconComponent: m ? r._xi : r.E7M,
                onClick: () => {
                    (0, f.X)(n, f.O.REQUEST_TO_SPEAK, !o),
                        E(!0),
                        m ? d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.STAGE_CHANNEL_RAISE_HAND }) : h();
                },
                color: o ? "green" : void 0,
                disabled: !_ && !o,
            }),
            C &&
                (0, i.jsx)(a.AM, {
                    targetElementRef: p,
                    graphic: { type: "image", src: ed.A },
                    gradientColor: "blue",
                    title: eo.intl.string(eo.t.zvubnM),
                    body: eo.intl.string(eo.t["/wx+J2"]),
                    shouldShow: !I,
                    actions: [
                        {
                            text: eo.intl.string(eo.t.KXVgjt),
                            onClick: () => {
                                d.A.showAgeVerificationGetStartedModal({
                                    entryPoint: u.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    E(!0);
                            },
                        },
                    ],
                    onRequestClose: () => E(!0),
                }),
        ],
    });
}
let eh = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, s.bG)([F.A], () => F.A.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)("div", {
        className: ec.kL,
        children: [
            (0, i.jsxs)("div", {
                className: ec.qi,
                children: [
                    (0, i.jsx)(eg, { channelId: t.id }),
                    n ? (0, i.jsx)(eu, { channel: t }) : null,
                    (0, i.jsx)(L.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(e_, { channel: t }),
        ],
    });
});
function eA(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        l = (0, el.Vv)();
    return (0, i.jsx)(G.l, {
        isTrayButton: !0,
        onClick: () => {
            ((0, f.X)(n, f.O.SPEAK_ON_STAGE), l)
                ? d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, Y.e7)(t, !1);
        },
        iconComponent: l ? r.O1p : r.LvC,
        label: eo.intl.string(l ? eo.t.NzITVo : eo.t["8Joh+p"]),
    });
}
function e_(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, S.Us)(),
        { canManageGuildEvent: c } = (0, b.nr)(t),
        d = (0, s.bG)([J.A], () => J.A.getStageInstanceByChannel(t.id), [t.id]),
        u = (0, s.bG)([C.Ay], () => C.Ay.getGuildScheduledEvent(d?.guild_scheduled_event_id)),
        { suppress: _ } = (0, R.A)(t),
        m = B.default.getId(),
        [g] = (0, ea.A)(t),
        p = X.Ay.isModerator(m, t.id),
        E = (0, z.Ni)(t.id),
        I = c(u),
        { parentAnalyticsLocation: N } = (0, A.Ay)(),
        T = l.useRef(null),
        y = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                ((0, f.X)(h.A.VOICE_CONTROL_TRAY, f.O.DISCONNECT), (0, et.A)(t))
                    ? (0, W.j3)(t, n)
                    : o.default.disconnect();
            })({ channel: t, appContext: a });
    return (p || I) && null != d
        ? (0, i.jsx)(r.YNO, {
              targetElementRef: T,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(U.A, {
                      children: (0, i.jsx)(r.W1t, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, x.s)("End Stage", N, { entrypoint: er.GK.CARET }),
                          children: (0, i.jsx)(r.Drp, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, W.$q)(t, a),
                              label: eo.intl.string(eo.t["Fmx5y/"]),
                              icon: r.aXh,
                              leadingAccessory: { type: "icon", icon: r.aXh },
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: r.YNO.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: l } = t;
                  return (0, i.jsx)(P.A, {
                      ref: T,
                      label: eo.intl.string(eo.t.c6qKwr),
                      onClick: y,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (_ && !E) || g
          ? (0, i.jsx)(P.A, { label: eo.intl.string(eo.t.SMKyih), onClick: y })
          : (0, i.jsx)(P.A, { label: eo.intl.string(eo.t.c6qKwr), onClick: y });
}
function em(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)();
    return (0, i.jsx)(G.l, {
        isTrayButton: !0,
        iconComponent: r.U$V,
        label: eo.intl.string(eo.t.ezLpY6),
        onClick: () => {
            (0, f.X)(n, f.O.MOVE_TO_AUDIENCE), (0, Y.Tf)(t);
        },
    });
}
function eg(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        l = (0, s.bG)([ee.A], () => ee.A.isMuted()),
        a = (0, Z.bF)(t),
        o = (0, s.bG)([ee.A], () => ee.A.shouldPlay());
    return a
        ? (0, i.jsx)(G.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
              iconComponent: l ? r.CIB : r.T7G,
              color: l ? void 0 : "green",
              onClick: () => {
                  (0, f.X)(n, f.O.STAGE_MUSIC, l), (0, $.k)(!l);
              },
          })
        : (0, i.jsx)(G.l, {
              isTrayButton: !0,
              isActive: o,
              label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
              iconComponent: o ? r.T7G : r.CIB,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, f.X)(n, f.O.STAGE_MUSIC, !o), (0, $.C)(!o);
              },
          });
}
let ep = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        { suppress: a, selfMute: o, mute: c } = (0, R.A)(t),
        d = (0, z.Ni)(t.id),
        u = (0, s.bG)([E.default], () => null != E.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: h, enabled: f } = (0, y.A)(),
        C = (0, j.A)(t),
        { limit: N, reachedLimit: T } = (0, v.A)(t),
        S = (0, s.bG)([K.default], () => K.default.getCurrentUser()),
        b = (0, s.bG)([V.Ay], () => (0, I.A)(V.Ay)),
        D = (0, s.bG)([F.A], () => F.A.getVoiceChannelId() === t.id, [t.id]),
        G = (0, s.bG)([_.A], () => _.A.getStreamParticipants(t.id)[0], [t.id]),
        P = (0, Q.qT)(t.id),
        B = N > 0,
        H = (T && !P) || (null != G && G.user.id !== S?.id),
        W = (0, x.s)("AudioDeviceMenu", n, { entrypoint: er.GK.CARET }),
        Y = l.useRef(null),
        q = l.useRef(null);
    if (null == S) return null;
    let X = (0, i.jsx)(r.YNO, {
        targetElementRef: Y,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(U.A, {
                children: (0, i.jsx)(g.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, x.s)("VideoDeviceMenu", n, { entrypoint: er.GK.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: r.YNO.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(w.A, {
                ref: Y,
                centerButton: !0,
                hasPermission: C,
                enabled: f,
                cameraUnavailable: h,
                onChange: O.SZ,
                onCameraUnavailable: M.A,
                channelLimitReached: T,
                channelLimit: N,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: ec.iE,
        children: [
            D && !a
                ? (0, i.jsxs)("div", {
                      className: ec.qi,
                      children: [
                          (0, i.jsx)(r.YNO, {
                              targetElementRef: q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(U.A, {
                                      children: (0, i.jsx)(m.default, {
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
                              animation: r.YNO.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: l } = t;
                                  return (0, i.jsx)(k.A, {
                                      ref: q,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: o,
                                      serverMute: c,
                                      suppress: a,
                                      popoutOpen: l,
                                      onClick: () => (0, p.A)(c, a, "Stage Channel Controls"),
                                      awaitingRemote: u,
                                  });
                              },
                          }),
                          B && X,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: ec.qi,
                children: [
                    D && !a && B
                        ? (0, i.jsx)(O.rP, {
                              channel: t,
                              currentUser: S,
                              exitFullScreen: () => null,
                              canGoLive: b,
                              hasPermission: C,
                              disabled: H,
                          })
                        : null,
                    (0, i.jsx)(eg, { channelId: t.id }),
                    D && (0, i.jsx)(eu, { channel: t }),
                    D && d && a && (0, i.jsx)(eA, { channel: t }),
                    D && !a && (0, i.jsx)(em, { channel: t }),
                    (0, i.jsx)(L.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(e_, { channel: t }),
        ],
    });
});
function ef(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: ec.iE,
        children: [
            (0, i.jsx)("div", { className: ec.qi, children: (0, i.jsx)(eg, { channelId: t.id }) }),
            (0, i.jsx)(e_, { channel: t }),
        ],
    });
}
let ex = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, ei.A)(t.id),
        a = (0, z.Ni)(t.id),
        r = (0, s.bG)([H.A], () => H.A.can(q.QY, t), [t]),
        o = (0, el.zU)(),
        c = (0, es.A)(t.id),
        d = (0, s.bG)([_.A], () => (null != t ? _.A.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, i.jsx)(ef, { channel: t })
        : l || a
          ? (0, i.jsxs)("div", {
                className: ec.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: ec.Ac,
                        children: [
                            u ? (0, i.jsx)(N.A, { channelId: t?.id }) : null,
                            (0, i.jsx)("div", { className: ec.me }),
                            u && r && !o ? (0, i.jsx)(T.A, { highlight: !0, channel: t }) : null,
                            (0, i.jsx)("div", { className: ec.me }),
                        ],
                    }),
                    (0, i.jsx)(ep, { channel: t }),
                ],
            })
          : (0, i.jsx)(eh, { channel: t });
});
