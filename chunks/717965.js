n.d(t, { A: () => ef });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(342494),
    r = n(397927),
    o = n(956793),
    d = n(517461),
    c = n(935649),
    u = n(847599),
    h = n(793574),
    A = n(688810),
    g = n(313961),
    m = n(385318),
    p = n(750765),
    _ = n(183184),
    x = n(384059),
    f = n(480890),
    E = n(643501),
    C = n(880144),
    I = n(698441),
    S = n(394412),
    b = n(859894),
    N = n(267102),
    T = n(931991),
    j = n(151476),
    v = n(405018),
    y = n(704877),
    R = n(173660),
    O = n(105225),
    L = n(579153),
    D = n(222692),
    M = n(461782),
    G = n(246356),
    U = n(709562),
    P = n(404355),
    k = n(577062),
    w = n(970636),
    V = n(961350),
    B = n(430452),
    H = n(576705),
    F = n(309010),
    Y = n(287809),
    W = n(993838),
    K = n(849736),
    z = n(776781),
    X = n(233993),
    q = n(312006),
    J = n(446600),
    Q = n(96566),
    Z = n(302884),
    $ = n(30108),
    ee = n(39938),
    et = n(106044),
    en = n(370228),
    ei = n(982279),
    el = n(418208),
    es = n(505543),
    ea = n(361619),
    er = n(806931),
    eo = n(985018),
    ed = n(563429),
    ec = n(117816);
function eu(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        s = (0, ei.A)(t.id),
        [o, h] = (0, ea.A)(t),
        g = (0, en.L)(t),
        m = (0, el.Vv)(),
        p = (0, el.tp)(),
        _ = l.useRef(null),
        [f, E] = (0, d.V)("age-verification-stage-popover-dismissed", !1),
        C = l.useContext(M.vG);
    if (s) return null;
    let I = p && !f;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(U.l, {
                ref: _,
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
                })(o, g, m, p, f),
                iconComponent: m ? r._xi : r.E7M,
                onClick: () => {
                    (0, x.X)(n, x.O.REQUEST_TO_SPEAK, !o),
                        E(!0),
                        m ? c.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.STAGE_CHANNEL_RAISE_HAND }) : h();
                },
                color: o ? "green" : void 0,
                disabled: !g && !o,
            }),
            I &&
                (0, i.jsx)(a.AM, {
                    targetElementRef: _,
                    graphic: { type: "image", src: ec.A },
                    gradientColor: "blue",
                    title: eo.intl.string(eo.t.zvubnM),
                    body: eo.intl.string(eo.t["/wx+J2"]),
                    shouldShow: !C,
                    actions: [
                        {
                            text: eo.intl.string(eo.t.KXVgjt),
                            onClick: () => {
                                c.A.showAgeVerificationGetStartedModal({
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
        className: ed.kL,
        children: [
            (0, i.jsxs)("div", {
                className: ed.qi,
                children: [
                    (0, i.jsx)(ep, { channelId: t.id }),
                    n ? (0, i.jsx)(eu, { channel: t }) : null,
                    (0, i.jsx)(L.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(eg, { channel: t }),
        ],
    });
});
function eA(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)();
    return (0, i.jsx)(U.l, {
        isTrayButton: !0,
        onClick: () => {
            ((0, x.X)(n, x.O.SPEAK_ON_STAGE), (0, el.Cf)(t.id))
                ? c.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.STAGE_CHANNEL_RAISE_HAND })
                : (0, K.e7)(t, !1);
        },
        iconComponent: r.LvC,
        label: eo.intl.string(eo.t["8Joh+p"]),
    });
}
function eg(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, N.Us)(),
        { canManageGuildEvent: d } = (0, T.nr)(t),
        c = (0, s.bG)([J.A], () => J.A.getStageInstanceByChannel(t.id), [t.id]),
        u = (0, s.bG)([I.Ay], () => I.Ay.getGuildScheduledEvent(c?.guild_scheduled_event_id)),
        { suppress: g } = (0, R.A)(t),
        m = V.default.getId(),
        [p] = (0, ea.A)(t),
        _ = q.Ay.isModerator(m, t.id),
        E = (0, z.Ni)(t.id),
        C = d(u),
        { parentAnalyticsLocation: S } = (0, A.Ay)(),
        b = l.useRef(null),
        j = () =>
            (function (e) {
                let { channel: t, appContext: n } = e;
                ((0, x.X)(h.A.VOICE_CONTROL_TRAY, x.O.DISCONNECT), (0, et.A)(t))
                    ? (0, W.j3)(t, n)
                    : o.default.disconnect();
            })({ channel: t, appContext: a });
    return (_ || C) && null != c
        ? (0, i.jsx)(r.YNO, {
              targetElementRef: b,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(G.A, {
                      children: (0, i.jsx)(r.W1t, {
                          "data-menu-migrated": !0,
                          navId: "exit-options",
                          "aria-label": eo.intl.string(eo.t["3Uj+2p"]),
                          onClose: l,
                          onSelect: n,
                          onInteraction: (0, f.s)("End Stage", S, { entrypoint: er.GK.CARET }),
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
                      ref: b,
                      label: eo.intl.string(eo.t.c6qKwr),
                      onClick: j,
                      onPopoutClick: n,
                      popoutOpen: l,
                  });
              },
          })
        : (g && !E) || p
          ? (0, i.jsx)(P.A, { label: eo.intl.string(eo.t.SMKyih), onClick: j })
          : (0, i.jsx)(P.A, { label: eo.intl.string(eo.t.c6qKwr), onClick: j });
}
function em(e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)();
    return (0, i.jsx)(U.l, {
        isTrayButton: !0,
        iconComponent: r.U$V,
        label: eo.intl.string(eo.t.ezLpY6),
        onClick: () => {
            (0, x.X)(n, x.O.MOVE_TO_AUDIENCE), (0, K.Tf)(t);
        },
    });
}
function ep(e) {
    let { channelId: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        l = (0, s.bG)([ee.A], () => ee.A.isMuted()),
        a = (0, $.bF)(t),
        o = (0, s.bG)([ee.A], () => ee.A.shouldPlay());
    return a
        ? (0, i.jsx)(U.l, {
              isTrayButton: !0,
              isActive: !l,
              label: l ? eo.intl.string(eo.t.ScHlfl) : eo.intl.string(eo.t.zqxfrf),
              iconComponent: l ? r.CIB : r.T7G,
              color: l ? void 0 : "green",
              onClick: () => {
                  (0, x.X)(n, x.O.STAGE_MUSIC, l), (0, Z.k)(!l);
              },
          })
        : (0, i.jsx)(U.l, {
              isTrayButton: !0,
              isActive: o,
              label: o ? eo.intl.string(eo.t.zqxfrf) : eo.intl.string(eo.t.ScHlfl),
              iconComponent: o ? r.T7G : r.CIB,
              color: o ? "green" : void 0,
              onClick: () => {
                  (0, x.X)(n, x.O.STAGE_MUSIC, !o), (0, Z.C)(!o);
              },
          });
}
let e_ = l.memo(function (e) {
    let { channel: t } = e,
        { parentAnalyticsLocation: n } = (0, A.Ay)(),
        { suppress: a, selfMute: o, mute: d } = (0, R.A)(t),
        c = (0, z.Ni)(t.id),
        u = (0, ei.A)(t.id),
        h = (0, s.bG)([E.default], () => null != E.default.getAwaitingRemoteSessionInfo()),
        { cameraUnavailable: x, enabled: I } = (0, j.A)(),
        S = (0, y.A)(t),
        { limit: b, reachedLimit: N } = (0, v.A)(t),
        T = (0, s.bG)([Y.default], () => Y.default.getCurrentUser()),
        M = (0, s.bG)([B.A], () => (0, C.A)(B.A)),
        U = (0, s.bG)([F.A], () => F.A.getVoiceChannelId() === t.id, [t.id]),
        P = (0, s.bG)([g.A], () => g.A.getStreamParticipants(t.id)[0], [t.id]),
        V = (0, Q.qT)(t.id),
        H = b > 0,
        W = (N && !V) || (null != P && P.user.id !== T?.id),
        K = (0, f.s)("AudioDeviceMenu", n, { entrypoint: er.GK.CARET }),
        X = l.useRef(null),
        q = l.useRef(null);
    if (null == T) return null;
    let J = (0, i.jsx)(r.YNO, {
        targetElementRef: X,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(G.A, {
                children: (0, i.jsx)(p.A, {
                    onClose: t,
                    minimal: !0,
                    onInteraction: (0, f.s)("VideoDeviceMenu", n, { entrypoint: er.GK.CARET }),
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
                ref: X,
                centerButton: !0,
                hasPermission: S,
                enabled: I,
                cameraUnavailable: x,
                onChange: O.SZ,
                onCameraUnavailable: D.A,
                channelLimitReached: N,
                channelLimit: b,
                popoutOpen: l,
                onPopoutClick: n,
            });
        },
    });
    return (0, i.jsxs)("div", {
        className: ed.iE,
        children: [
            U && !a
                ? (0, i.jsxs)("div", {
                      className: ed.qi,
                      children: [
                          (0, i.jsx)(r.YNO, {
                              targetElementRef: q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, i.jsx)(G.A, {
                                      children: (0, i.jsx)(m.default, {
                                          onClose: t,
                                          renderInputDevices: !0,
                                          renderInputModes: !0,
                                          renderOutputDevices: !0,
                                          renderInputVolume: !0,
                                          renderOutputVolume: !0,
                                          renderDeafen: !0,
                                          minimal: !0,
                                          onInteraction: K,
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
                                      serverMute: d,
                                      suppress: a,
                                      popoutOpen: l,
                                      onClick: () => (0, _.A)(d, a, "Stage Channel Controls"),
                                      awaitingRemote: h,
                                  });
                              },
                          }),
                          H && J,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: ed.qi,
                children: [
                    U && !a && H
                        ? (0, i.jsx)(O.rP, {
                              channel: t,
                              currentUser: T,
                              exitFullScreen: () => null,
                              canGoLive: M,
                              hasPermission: S,
                              disabled: W,
                          })
                        : null,
                    (0, i.jsx)(ep, { channelId: t.id }),
                    U && (0, i.jsx)(eu, { channel: t }),
                    U && c && a && u && (0, i.jsx)(eA, { channel: t }),
                    U && !a && (0, i.jsx)(em, { channel: t }),
                    (0, i.jsx)(L.A, { channel: t }),
                ],
            }),
            (0, i.jsx)(eg, { channel: t }),
        ],
    });
});
function ex(e) {
    let { channel: t } = e;
    return (0, i.jsxs)("div", {
        className: ed.iE,
        children: [
            (0, i.jsx)("div", { className: ed.qi, children: (0, i.jsx)(ep, { channelId: t.id }) }),
            (0, i.jsx)(eg, { channel: t }),
        ],
    });
}
let ef = l.memo(function (e) {
    let { channel: t, isOnStartStageScreen: n } = e,
        l = (0, ei.A)(t.id),
        a = (0, z.Ni)(t.id),
        r = (0, s.bG)([H.A], () => H.A.can(X.QY, t), [t]),
        o = (0, el.zU)(),
        d = (0, es.A)(t.id),
        c = (0, s.bG)([g.A], () => (null != t ? g.A.getSelectedParticipant(t.id) : null)),
        u = !d && null == c;
    return n
        ? (0, i.jsx)(ex, { channel: t })
        : l || a
          ? (0, i.jsxs)("div", {
                className: ed.My,
                children: [
                    (0, i.jsxs)("div", {
                        className: ed.Ac,
                        children: [
                            u ? (0, i.jsx)(S.A, { channelId: t?.id }) : null,
                            (0, i.jsx)("div", { className: ed.me }),
                            u && r && !o ? (0, i.jsx)(b.A, { highlight: !0, channel: t }) : null,
                            (0, i.jsx)("div", { className: ed.me }),
                        ],
                    }),
                    (0, i.jsx)(e_, { channel: t }),
                ],
            })
          : (0, i.jsx)(eh, { channel: t });
});
