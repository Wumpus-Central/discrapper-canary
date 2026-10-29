t.d(n, { A: () => ey });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(43105),
    r = t(309796),
    o = t(297152),
    c = t(666654),
    u = t(117723),
    d = t(265872),
    A = t(980707),
    h = t(477782),
    m = t(285796),
    g = t(381844),
    x = t(532676),
    C = t(432017),
    f = t(730852),
    p = t(517461),
    E = t(379257),
    j = t(306537),
    v = t(793574),
    I = t(688810),
    N = t(198052),
    T = t(385318),
    _ = t(329072),
    b = t(183184),
    S = t(384059),
    y = t(480890),
    O = t(643501),
    R = t(880144),
    L = t(698441),
    D = t(394412),
    M = t(859894),
    G = t(267102),
    P = t(931991),
    k = t(151476),
    U = t(182637),
    V = t(704877),
    B = t(173660),
    w = t(105225),
    H = t(579153),
    Y = t(222692),
    z = t(461782),
    K = t(246356),
    F = t(204651),
    X = t(404355),
    q = t(577062),
    Q = t(970636),
    W = t(280450),
    J = t(999926),
    $ = t(576705),
    Z = t(309010),
    ee = t(287809),
    en = t(993838),
    et = t(849736),
    ei = t(776781),
    el = t(233993),
    es = t(312006),
    ea = t(446600),
    er = t(96566),
    eo = t(302884),
    ec = t(30108),
    eu = t(39938),
    ed = t(106044),
    eA = t(370228),
    eh = t(982279),
    em = t(418208),
    eg = t(505543),
    ex = t(361619),
    eC = t(806931),
    ef = t(105292),
    ep = t(328375),
    eE = t(117816);
function ej(e) {
    let { channel: n } = e,
        { parentAnalyticsLocation: t } = (0, I.Ay)(),
        s = (0, eh.A)(n.id),
        [c, u] = (0, ex.A)(n),
        d = (0, eA.L)(n),
        A = (0, em.Vv)(),
        h = (0, em.tp)(),
        m = l.useRef(null),
        [g, x] = (0, p.V)("age-verification-stage-popover-dismissed", !1),
        C = l.useContext(z.vG);
    if (s) return null;
    let f = h && !g;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(F.l, {
                ref: m,
                isTrayButton: !0,
                isActive: c,
                label: (function (e, n, t, i) {
                    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    return !l && i
                        ? null
                        : t
                          ? ef.intl.string(ef.t.NzITVo)
                          : e
                            ? ef.intl.string(ef.t.GCimTk)
                            : n
                              ? ef.intl.string(ef.t.hLbG5N)
                              : ef.intl.string(ef.t.e4WMvx);
                })(c, d, A, h, g),
                iconComponent: A ? r._ : o.E,
                onClick: () => {
                    ((0, S.X)(t, S.O.REQUEST_TO_SPEAK, !c),
                        x(!0),
                        A
                            ? E.A.showAgeVerificationGetStartedModal({ entryPoint: j.q1.STAGE_CHANNEL_RAISE_HAND })
                            : u());
                },
                color: c ? "green" : void 0,
                disabled: !d && !c,
            }),
            f &&
                (0, i.jsx)(a.A, {
                    targetElementRef: m,
                    graphic: { type: "image", src: eE.A },
                    gradientColor: "blue",
                    title: ef.intl.string(ef.t.zvubnM),
                    body: void 0,
                    shouldShow: !C,
                    actions: [
                        {
                            text: ef.intl.string(ef.t.KXVgjt),
                            onClick: () => {
                                (E.A.showAgeVerificationGetStartedModal({
                                    entryPoint: j.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT,
                                }),
                                    x(!0));
                            },
                        },
                    ],
                    onRequestClose: () => x(!0),
                }),
        ],
    });
}
let ev = l.memo(function (e) {
    let { channel: n } = e,
        t = (0, s.bG)([Z.Ay], () => Z.Ay.getVoiceChannelId() === n.id, [n.id]);
    return (0, i.jsxs)("div", {
        className: ep.kL,
        children: [
            (0, i.jsxs)("div", {
                className: ep.qi,
                children: [
                    (0, i.jsx)(e_, { channelId: n.id }),
                    t ? (0, i.jsx)(ej, { channel: n }) : null,
                    (0, i.jsx)(H.A, { channel: n }),
                ],
            }),
            (0, i.jsx)(eN, { channel: n }),
        ],
    });
});
function eI(e) {
    let { channel: n } = e,
        { parentAnalyticsLocation: t } = (0, I.Ay)(),
        l = (0, em.Vv)();
    return (0, i.jsx)(F.l, {
        isTrayButton: !0,
        onClick: function () {
            ((0, S.X)(t, S.O.SPEAK_ON_STAGE), l)
                ? E.A.showAgeVerificationGetStartedModal({ entryPoint: j.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, et.e7)(n, !1);
        },
        iconComponent: l ? c.O : u.L,
        label: ef.intl.string(l ? ef.t.NzITVo : ef.t["8Joh+p"]),
    });
}
function eN(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, G.Us)(),
        { canManageGuildEvent: r } = (0, P.nr)(n),
        o = (0, s.bG)([ea.A], () => ea.A.getStageInstanceByChannel(n.id), [n.id]),
        c = (0, s.bG)([L.Ay], () => L.Ay.getGuildScheduledEvent(o?.guild_scheduled_event_id)),
        { suppress: u } = (0, B.A)(n),
        g = W.default.getId(),
        [x] = (0, ex.A)(n),
        C = es.Ay.isModerator(g, n.id),
        p = (0, ei.Ni)(n.id),
        E = r(c),
        { parentAnalyticsLocation: j } = (0, I.Ay)(),
        N = l.useRef(null);
    function T() {
        return (function (e) {
            let { channel: n, appContext: t } = e;
            ((0, S.X)(v.A.VOICE_CONTROL_TRAY, S.O.DISCONNECT), (0, ed.A)(n))
                ? (0, en.j3)(n, t)
                : f.default.disconnect();
        })({ channel: n, appContext: a });
    }
    return (C || E) && null != o
        ? (0, i.jsx)(d.Y, {
              targetElementRef: N,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(K.A, {
                      children: (0, i.jsx)(A.W, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": ef.intl.string(ef.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: t,
                          onInteraction: (0, y.s)("End Stage", j, { entrypoint: eC.GK.CARET }),
                          children: (0, i.jsx)(h.Dr, {
                              id: "end-stage",
                              color: "danger",
                              action: () => (0, en.$q)(n, a),
                              label: ef.intl.string(ef.t["Fmx5y/"]),
                              icon: m.a,
                              leadingAccessory: { type: "icon", icon: m.a },
                          }),
                      }),
                  });
              },
              align: "center",
              position: "top",
              spacing: 16,
              animation: d.Y.Animation.FADE,
              children: (e, n) => {
                  let { onClick: t } = e,
                      { isShown: l } = n;
                  return (0, i.jsx)(X.A, {
                      ref: N,
                      label: ef.intl.string(ef.t.c6qKwr),
                      onClick: T,
                      onPopoutClick: t,
                      popoutOpen: l,
                  });
              },
          })
        : (u && !p) || x
          ? (0, i.jsx)(X.A, { label: ef.intl.string(ef.t.SMKyih), onClick: T })
          : (0, i.jsx)(X.A, { label: ef.intl.string(ef.t.c6qKwr), onClick: T });
}
function eT(e) {
    let { channel: n } = e,
        { parentAnalyticsLocation: t } = (0, I.Ay)();
    return (0, i.jsx)(F.l, {
        isTrayButton: !0,
        iconComponent: g.U,
        label: ef.intl.string(ef.t.ezLpY6),
        onClick: function () {
            ((0, S.X)(t, S.O.MOVE_TO_AUDIENCE), (0, et.Tf)(n));
        },
    });
}
function e_(e) {
    let { channelId: n } = e,
        { parentAnalyticsLocation: t } = (0, I.Ay)(),
        l = (0, s.bG)([eu.A], () => eu.A.isMuted()),
        a = (0, ec.bF)(n),
        r = (0, s.bG)([eu.A], () => eu.A.shouldPlay());
    return a
        ? (0, i.jsx)(F.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? ef.intl.string(ef.t.ScHlfl) : ef.intl.string(ef.t.zqxfrf),
              iconComponent: l ? x.C : C.T,
              color: l ? void 0 : "green",
              onClick: () => {
                  ((0, S.X)(t, S.O.STAGE_MUSIC, l), (0, eo.k)(!l));
              },
          })
        : (0, i.jsx)(F.l, {
              isTrayButton: !0,
              isActive: r,
              label: r ? ef.intl.string(ef.t.zqxfrf) : ef.intl.string(ef.t.ScHlfl),
              iconComponent: r ? C.T : x.C,
              color: r ? "green" : void 0,
              onClick: () => {
                  ((0, S.X)(t, S.O.STAGE_MUSIC, !r), (0, eo.C)(!r));
              },
          });
}
let eb = l.memo(function (e) {
    let { channel: n } = e,
        { parentAnalyticsLocation: t } = (0, I.Ay)(),
        { suppress: a, selfMute: r, mute: o } = (0, B.A)(n),
        c = (0, ei.Ni)(n.id),
        u = (0, s.bG)([O.default], () => null != O.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: A, enabled: h } = (0, k.A)(),
        m = (0, V.A)(n),
        { limit: g, reachedLimit: x } = (0, U.A)(n),
        C = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()),
        f = (0, s.bG)([J.Ay], () => (0, R.A)(J.Ay)),
        p = (0, s.bG)([Z.Ay], () => Z.Ay.getVoiceChannelId() === n.id, [n.id]),
        E = (0, s.bG)([N.A], () => N.A.getStreamParticipants(n.id)[0], [n.id]),
        j = (0, er.qT)(n.id),
        v = g > 0,
        S = (x && !j) || (null != E && E.user.id !== C?.id),
        L = (0, y.s)("AudioDeviceMenu", t, { entrypoint: eC.GK.CARET }),
        D = l.useRef(null),
        M = l.useRef(null);
    if (null == C) return null;
    let G = (0, i.jsx)(d.Y, {
        targetElementRef: D,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(K.A, {
                children: (0, i.jsx)(_.A, {
                    onClose: n,
                    minimal: !0,
                    onInteraction: (0, y.s)("VideoDeviceMenu", t, { entrypoint: eC.GK.CARET }),
                }),
            });
        },
        position: "top",
        align: "right",
        spacing: 16,
        animation: d.Y.Animation.FADE,
        children: (e, n) => {
            let { onClick: t } = e,
                { isShown: l } = n;
            return (0, i.jsx)(Q.A, {
                ref: D,
                centerButton: !0,
                hasPermission: m,
                enabled: h,
                cameraUnavailable: A,
                onChange: w.SZ,
                onCameraUnavailable: Y.A,
                channelLimitReached: x,
                channelLimit: g,
                popoutOpen: l,
                onPopoutClick: t,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: ep.iE,
        children: [
            p && !a
                ? (0, i.jsxs)("div", {
                      className: ep.qi,
                      children: [
                          (0, i.jsx)(d.Y, {
                              targetElementRef: M,
                              renderPopout: (e) => {
                                  let { closePopout: n } = e;
                                  return (0, i.jsx)(K.A, {
                                      children: (0, i.jsx)(T.default, {
                                          onClose: n,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: L,
                                      }),
                                  });
                              },
                              align: "right",
                              position: "top",
                              spacing: 16,
                              animation: d.Y.Animation.FADE,
                              children: (e, n) => {
                                  let { onClick: t } = e,
                                      { isShown: l } = n;
                                  return (0, i.jsx)(q.A, {
                                      ref: M,
                                      centerButton: !0,
                                      onPopoutClick: t,
                                      selfMute: r,
                                      serverMute: o,
                                      suppress: a,
                                      popoutOpen: l,
                                      onClick: () => (0, b.A)(o, a, "Stage Channel Controls"),
                                      awaitingRemote: u,
                                  });
                              },
                          }),
                          v && G,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: ep.qi,
                children: [
                    p && !a && v
                        ? (0, i.jsx)(w.rP, {
                              channel: n,
                              currentUser: C,
                              exitFullScreen: () => null,
                              canGoLive: f,
                              hasPermission: m,
                              disabled: S,
                          })
                        : null,
                    (0, i.jsx)(e_, { channelId: n.id }),
                    p && (0, i.jsx)(ej, { channel: n }),
                    p && c && a && (0, i.jsx)(eI, { channel: n }),
                    p && !a && (0, i.jsx)(eT, { channel: n }),
                    (0, i.jsx)(H.A, { channel: n }),
                ],
            }),
            (0, i.jsx)(eN, { channel: n }),
        ],
    });
});
function eS(e) {
    let { channel: n } = e;
    return (0, i.jsxs)("div", {
        className: ep.iE,
        children: [
            (0, i.jsx)("div", { className: ep.qi, children: (0, i.jsx)(e_, { channelId: n.id }) }),
            (0, i.jsx)(eN, { channel: n }),
        ],
    });
}
let ey = l.memo(function (e) {
    let { channel: n, isOnStartStageScreen: t } = e,
        l = (0, eh.A)(n.id),
        a = (0, ei.Ni)(n.id),
        r = (0, s.bG)([$.A], () => $.A.can(el.QY, n), [n]),
        o = (0, em.zU)(),
        c = (0, eg.A)(n.id),
        u = (0, s.bG)([N.A], () => (null != n ? N.A.getSelectedParticipant(n.id) : null)),
        d = !c && null == u;
    return t
        ? (0, i.jsx)(eS, { channel: n })
        : l || a
          ? (0, i.jsxs)("div", {
                className: ep.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: ep.Ac,
                        children: [
                            d ? (0, i.jsx)(D.A, { channelId: n?.id }) : null,
                            (0, i.jsx)("div", { className: ep.me }),
                            d && r && !o ? (0, i.jsx)(M.A, { highlight: !0, channel: n }) : null,
                            (0, i.jsx)("div", { className: ep.me }),
                        ],
                    }),
                    (0, i.jsx)(eb, { channel: n }),
                ],
            })
          : (0, i.jsx)(ev, { channel: n });
});
