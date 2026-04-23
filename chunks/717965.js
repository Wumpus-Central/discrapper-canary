n.d(t, { A: () => ey });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(265486),
    r = n(309796),
    o = n(297152),
    c = n(666654),
    d = n(117723),
    u = n(265872),
    _ = n(861672),
    A = n(477782),
    p = n(285796),
    h = n(381844),
    g = n(532676),
    m = n(432017),
    x = n(956793),
    f = n(517461),
    C = n(935649),
    E = n(847599),
    j = n(793574),
    b = n(688810),
    N = n(313961),
    T = n(385318),
    I = n(750765),
    v = n(183184),
    S = n(384059),
    y = n(480890),
    O = n(643501),
    L = n(880144),
    R = n(698441),
    U = n(394412),
    w = n(859894),
    P = n(267102),
    k = n(931991),
    M = n(151476),
    G = n(405018),
    D = n(704877),
    V = n(173660),
    B = n(105225),
    z = n(579153),
    K = n(222692),
    q = n(461782),
    H = n(246356),
    F = n(709562),
    Q = n(404355),
    Y = n(577062),
    W = n(970636),
    X = n(961350),
    Z = n(430452),
    $ = n(576705),
    J = n(309010),
    ee = n(287809),
    et = n(993838),
    en = n(849736),
    ei = n(776781),
    el = n(233993),
    ea = n(312006),
    es = n(446600),
    er = n(96566),
    eo = n(302884),
    ec = n(30108),
    ed = n(39938),
    eu = n(106044),
    e_ = n(370228),
    eA = n(982279),
    ep = n(418208),
    eh = n(505543),
    eg = n(361619),
    em = n(806931),
    ex = n(985018),
    ef = n(515354),
    eC = n(117816);
function eE(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, b.Ay)(),
        a = (0, eA.A)(t.id),
        [c, d] = (0, eg.A)(t),
        u = (0, e_.L)(t),
        _ = (0, ep.Vv)(),
        A = (0, ep.tp)(),
        p = l.useRef(null),
        [h, g] = (0, f.V)("age-verification-stage-popover-dismissed", !1),
        m = l.useContext(q.vG);
    if (a) return null;
    let x = A && !h;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(F.l, {
                ref: p,
                isTrayButton: !0,
                isActive: c,
                label: (function (e, t, n, i) {
                    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !l && i
                        ? null
                        : n
                          ? ex.intl.string(ex.t.NzITVo)
                          : e
                            ? ex.intl.string(ex.t.GCimTk)
                            : t
                              ? ex.intl.string(ex.t.hLbG5N)
                              : ex.intl.string(ex.t.e4WMvx);
                })(c, u, _, A, h),
                iconComponent: _ ? r._ : o.E,
                onClick: () => {
                    (0, S.X)(n, S.O.REQUEST_TO_SPEAK, !c),
                        g(!0),
                        _ ? C.A.showAgeVerificationGetStartedModal({ entryPoint: E.q1.STAGE_CHANNEL_RAISE_HAND }) : d();
                },
                color: c ? "green" : void 0,
                disabled: !u && !c,
            }),
            x &&
                (0, i.jsx)(s.A, {
                    targetElementRef: p,
                    graphic: { type: "image", src: eC.A },
                    gradientColor: "blue",
                    title: ex.intl.string(ex.t.zvubnM),
                    body: ex.intl.string(ex.t["/wx+J2"]),
                    shouldShow: !m,
                    actions: [
                        {
                            text: ex.intl.string(ex.t.KXVgjt),
                            onClick: () => {
                                C.A.showAgeVerificationGetStartedModal({
                                    entryPoint: E.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    g(!0);
                            },
                        },
                    ],
                    onRequestClose: () => g(!0),
                }),
        ],
    });
}
let ej = l.memo(function (e) {
    let { channel: t } = e,
        n = (0, a.bG)([J.A], () => J.A.getVoiceChannelId() === t.id, [t.id]);
    return (0, i.jsxs)("div", {
        className: ef.kL,
        children: [
            (0, i.jsxs)("div", {
                className: ef.qi,
                children: [
                    (0, i.jsx)(eI, { channelId: t.id }),
                    n ? (0, i.jsx)(eE, { channel: t }) : null,
                    (0, i.jsx)(z.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(eN, { channel: t }),
        ],
    });
});
function eb(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, b.Ay)(),
        l = (0, ep.Vv)();
    return (0, i.jsx)(F.l, {
        isTrayButton: !0,
        onClick: () => {
            ((0, S.X)(n, S.O.SPEAK_ON_STAGE), l)
                ? C.A.showAgeVerificationGetStartedModal({ entryPoint: E.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, en.e7)(t, !1);
        },
        iconComponent: l ? c.O : d.L,
        label: ex.intl.string(l ? ex.t.NzITVo : ex.t["8Joh+p"]),
    });
}
function eN(e) {
    let { channel: t, onSelect: n } = e,
        s = (0, P.Us)(),
        { canManageGuildEvent: r } = (0, k.nr)(t),
        o = (0, a.bG)([es.A], () => es.A.getStageInstanceByChannel(t.id), [t.id]),
        c = (0, a.bG)([R.Ay], () => R.Ay.getGuildScheduledEvent(o?.guild_scheduled_event_id)),
        { suppress: d } = (0, V.A)(t),
        h = X.default.getId(),
        [g] = (0, eg.A)(t),
        m = ea.Ay.isModerator(h, t.id),
        f = (0, ei.Ni)(t.id),
        C = r(c),
        { parentAnalyticsLocation: E } = (0, b.Ay)(),
        N = l.useRef(null),
        T = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                ((0, S.X)(j.A.VOICE_CONTROL_TRAY, S.O.DISCONNECT), (0, eu.A)(t))
                    ? (0, et.j3)(t, n)
                    : x.default.disconnect();
            })({ channel: t, appContext: s });
    return (m || C) && null != o
        ? (0, i.jsx)(u.Y, {
              targetElementRef: N,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(H.A, {
                      children: (0, i.jsx)(_.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": ex.intl.string(ex.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, y.s)("End Stage", E, { entrypoint: em.GK.CARET }),
                          children: (0, i.jsx)(A.Dr, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, et.$q)(t, s),
                              label: ex.intl.string(ex.t["Fmx5y/"]),
                              icon: p.a,
                              leadingAccessory: { type: "icon", icon: p.a },
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: u.Y.Animation.FADE,
              children: (e, t) => {
                  let { onClick: n } = e,
                      { isShown: l } = t;
                  return (0, i.jsx)(Q.A, {
                      ref: N,
                      label: ex.intl.string(ex.t.c6qKwr),
                      onClick: T,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (d && !f) || g
          ? (0, i.jsx)(Q.A, { label: ex.intl.string(ex.t.SMKyih), onClick: T })
          : (0, i.jsx)(Q.A, { label: ex.intl.string(ex.t.c6qKwr), onClick: T });
}
function eT(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, b.Ay)();
    return (0, i.jsx)(F.l, {
        isTrayButton: !0,
        iconComponent: h.U,
        label: ex.intl.string(ex.t.ezLpY6),
        onClick: () => {
            (0, S.X)(n, S.O.MOVE_TO_AUDIENCE), (0, en.Tf)(t);
        },
    });
}
function eI(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, b.Ay)(),
        l = (0, a.bG)([ed.A], () => ed.A.isMuted()),
        s = (0, ec.bF)(t),
        r = (0, a.bG)([ed.A], () => ed.A.shouldPlay());
    return s
        ? (0, i.jsx)(F.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? ex.intl.string(ex.t.ScHlfl) : ex.intl.string(ex.t.zqxfrf),
              iconComponent: l ? g.C : m.T,
              color: l ? void 0 : "green",
              onClick: () => {
                  (0, S.X)(n, S.O.STAGE_MUSIC, l), (0, eo.k)(!l);
              },
          })
        : (0, i.jsx)(F.l, {
              isTrayButton: !0,
              isActive: r,
              label: r ? ex.intl.string(ex.t.zqxfrf) : ex.intl.string(ex.t.ScHlfl),
              iconComponent: r ? m.T : g.C,
              color: r ? "green" : void 0,
              onClick: () => {
                  (0, S.X)(n, S.O.STAGE_MUSIC, !r), (0, eo.C)(!r);
              },
          });
}
let ev = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, b.Ay)(),
        { suppress: s, selfMute: r, mute: o } = (0, V.A)(t),
        c = (0, ei.Ni)(t.id),
        d = (0, a.bG)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: _, enabled: A } = (0, M.A)(),
        p = (0, D.A)(t),
        { limit: h, reachedLimit: g } = (0, G.A)(t),
        m = (0, a.bG)([ee.default], () => ee.default.getCurrentUser()),
        x = (0, a.bG)([Z.Ay], () => (0, L.A)(Z.Ay)),
        f = (0, a.bG)([J.A], () => J.A.getVoiceChannelId() === t.id, [t.id]),
        C = (0, a.bG)([N.A], () => N.A.getStreamParticipants(t.id)[0], [t.id]),
        E = (0, er.qT)(t.id),
        j = h > 0,
        S = (g && !E) || (null != C && C.user.id !== m?.id),
        R = (0, y.s)("AudioDeviceMenu", n, { entrypoint: em.GK.CARET }),
        U = l.useRef(null),
        w = l.useRef(null);
    if (null == m) return null;
    let P = (0, i.jsx)(u.Y, {
        targetElementRef: U,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(H.A, {
                children: (0, i.jsx)(I.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, y.s)("VideoDeviceMenu", n, { entrypoint: em.GK.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: u.Y.Animation.FADE,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, i.jsx)(W.A, {
                ref: U,
                centerButton: !0,
                hasPermission: p,
                enabled: A,
                cameraUnavailable: _,
                onChange: B.SZ,
                onCameraUnavailable: K.A,
                channelLimitReached: g,
                channelLimit: h,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: ef.iE,
        children: [
            f && !s
                ? (0, i.jsxs)("div", {
                      className: ef.qi,
                      children: [
                          (0, i.jsx)(u.Y, {
                              targetElementRef: w,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(H.A, {
                                      children: (0, i.jsx)(T.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: R,
                                      }),
                                  });
                              },
                              align: "right",
                              position: "top",
                              spacing: 16,
                              animation: u.Y.Animation.FADE,
                              children: (e, t) => {
                                  let { onClick: n } = e,
                                      { isShown: l } = t;
                                  return (0, i.jsx)(Y.A, {
                                      ref: w,
                                      centerButton: !0,
                                      onPopoutClick: n,
                                      selfMute: r,
                                      serverMute: o,
                                      suppress: s,
                                      popoutOpen: l,
                                      onClick: () => (0, v.A)(o, s, "Stage Channel Controls"),
                                      awaitingRemote: d,
                                  });
                              },
                          }),
                          j && P,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: ef.qi,
                children: [
                    f && !s && j
                        ? (0, i.jsx)(B.rP, {
                              channel: t,
                              currentUser: m,
                              exitFullScreen: () => null,
                              canGoLive: x,
                              hasPermission: p,
                              disabled: S,
                          })
                        : null,
                    (0, i.jsx)(eI, { channelId: t.id }),
                    f && (0, i.jsx)(eE, { channel: t }),
                    f && c && s && (0, i.jsx)(eb, { channel: t }),
                    f && !s && (0, i.jsx)(eT, { channel: t }),
                    (0, i.jsx)(z.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(eN, { channel: t }),
        ],
    });
});
function eS(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: ef.iE,
        children: [
            (0, i.jsx)("div", { className: ef.qi, children: (0, i.jsx)(eI, { channelId: t.id }) }),
            (0, i.jsx)(eN, { channel: t }),
        ],
    });
}
let ey = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, eA.A)(t.id),
        s = (0, ei.Ni)(t.id),
        r = (0, a.bG)([$.A], () => $.A.can(el.QY, t), [t]),
        o = (0, ep.zU)(),
        c = (0, eh.A)(t.id),
        d = (0, a.bG)([N.A], () => (null != t ? N.A.getSelectedParticipant(t.id) : null)),
        u = !c && null == d;
    return n
        ? (0, i.jsx)(eS, { channel: t })
        : l || s
          ? (0, i.jsxs)("div", {
                className: ef.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: ef.Ac,
                        children: [
                            u ? (0, i.jsx)(U.A, { channelId: t?.id }) : null,
                            (0, i.jsx)("div", { className: ef.me }),
                            u && r && !o ? (0, i.jsx)(w.A, { highlight: !0, channel: t }) : null,
                            (0, i.jsx)("div", { className: ef.me }),
                        ],
                    }),
                    (0, i.jsx)(ev, { channel: t }),
                ],
            })
          : (0, i.jsx)(ej, { channel: t });
});
