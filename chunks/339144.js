n.d(t, {
    J: () => R,
    y: () => A,
});
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(144269),
    s = n(481060),
    c = n(24124),
    u = n(239091),
    d = n(636449),
    p = n(620662),
    f = n(833664),
    h = n(513202),
    g = n(906732),
    m = n(20471),
    b = n(522651),
    O = n(311352),
    y = n(48131),
    _ = n(220410),
    v = n(668519),
    j = n(803647),
    x = n(131704),
    C = n(944486),
    E = n(626135),
    S = n(381096),
    P = n(870569),
    I = n(981631),
    N = n(388032),
    Z = n(258628);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === I.IIU.PLAYING &&
            (0, p.Z)(t, I.xjy.JOIN)
        );
    }
    return !1;
}
let R = i.memo(function (e) {
        var t;
        let l,
            a,
            p,
            R,
            {
                stream: L,
                canGoLive: M,
                guildId: k,
                isStreaming: U,
                channel: G,
                canStream: B,
                runningGame: V,
                embeddedActivity: F,
                frame: H,
                activity: z,
                application: W,
                analyticsContext: K,
                inviteButtonRef: Y,
                accountLinkButtonRef: q,
            } = e,
            { showRefreshedGoLiveModal: X } = (0, v.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: Q } = (0, g.ZP)(),
            J = (0, _.P6)("ActivityPanelGameCard"),
            $ = A(W, z, F),
            ee = i.useCallback(() => {
                var e;
                o()(null != z, "Received null activity"),
                    E.default.track(I.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == V ? void 0 : V.id) ? e : null,
                        application_id: z.application_id,
                    }),
                    (0, b.v)(Q, b.d.INVITE),
                    E.default.track(I.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: z.application_id,
                        location: K.location,
                    }),
                    (0, c.h7)(z, !1);
            }, [z, K, Q, V]),
            et = i.useCallback(
                (e, t) => () => {
                    (0, b.v)(Q, b.d.LEAVE_ACTIVITY),
                        h.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [Q],
            ),
            en = i.useCallback(
                (e) => () => {
                    (0, b.v)(Q, b.d.LEAVE_ACTIVITY), y.Z.stopFrame({ applicationId: e });
                },
                [Q],
            ),
            er = i.useCallback(() => {
                (0, j.Z)(L);
            }, [L]),
            ei = i.useCallback(() => {
                let e = null != G && (0, x.vd)(G.type) ? G : null,
                    t = null != e ? e.getGuildId() : k;
                (0, s.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            T(w({}, n), {
                                sourcePID: null == V ? void 0 : V.pid,
                                selectSource: !!X && null != C.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: I.Sbl.ACTIVITY_PANEL,
                            }),
                        );
                });
            }, [G, k, V, X]),
            el = i.useCallback(
                (e) => {
                    (0, u.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e("58173").then(n.bind(n, 239120));
                            return (t) => (0, r.jsx)(e, T(w({}, t), { activity: z }));
                        },
                        { position: "right" },
                    );
                },
                [z],
            ),
            {
                canStartAuthorization: eo,
                startAuthorization: ea,
                hasAlreadyLinked: es,
                connectionApp: ec,
            } = (0, m.F)(W),
            eu = S.Z.useConfig({ location: "ActivityActions" }).enabled,
            ed =
                (null != V || null == F || (0, d.R)()) && (U || M)
                    ? (U
                          ? ((l = !1),
                            (a = () => {
                                er(), (0, b.v)(Q, b.d.STREAM, !1);
                            }),
                            (p = s.g5r),
                            (R = N.intl.string(N.t.S5anIS)))
                          : B
                            ? ((l = !1),
                              (a = () => {
                                  ei(), (0, b.v)(Q, b.d.STREAM, !0);
                              }),
                              (p = s.hGI),
                              (R =
                                  null != V
                                      ? N.intl.formatToPlainString(N.t.AB5gT0, { game: V.name })
                                      : N.intl.string(N.t.FeUKeH)))
                            : ((l = !0),
                              (a = null),
                              (p = s.hGI),
                              (R =
                                  null != G && (0, x.vd)(G.type)
                                      ? N.intl.string(N.t.uQn9Bw)
                                      : null != k
                                        ? N.intl.string(N.t.fBXEoK)
                                        : N.intl.string(N.t.n3feND))),
                      (0, r.jsx)("div", {
                          className: Z.panelButtonContainer,
                          children: (0, r.jsx)(P.Z, {
                              tooltipText: R,
                              disabled: l,
                              onClick: a,
                              icon: p,
                          }),
                      }))
                    : null,
            ep =
                $ && null == F
                    ? (0, r.jsx)(P.Z, {
                          ref: Y,
                          tooltipText: N.intl.string(N.t["hC/Ze3"]),
                          onClick: ee,
                          icon: s.ejJ,
                      })
                    : null,
            ef =
                null == F
                    ? null
                    : (0, r.jsx)(P.Z, {
                          tooltipText: N.intl.string(N.t["R/FK4O"]),
                          onClick: et(F.applicationId, F.location),
                          icon: s.PBZ,
                      }),
            eh =
                null == H
                    ? null
                    : (0, r.jsx)(P.Z, {
                          tooltipText: N.intl.string(N.t["R/FK4O"]),
                          onClick: en(H.applicationId),
                          icon: s.PBZ,
                      }),
            eg = null == L ? null : (0, r.jsx)(O.Z, {}),
            em =
                eu && eo && !es
                    ? (0, r.jsx)(D, {
                          runningGame: V,
                          startAuthorization: ea,
                          connectionApp: ec,
                          ref: q,
                      })
                    : null,
            eb =
                J && null != z && (0, f.Z)(z)
                    ? (0, r.jsx)(P.Z, {
                          tooltipText: "Report Issue",
                          onClick: el,
                          icon: s.xhG,
                      })
                    : null;
        return null == ed && null == ep && null == ef && null == eh && null == em && null == eb
            ? null
            : (0, r.jsxs)("div", {
                  className: Z.actions,
                  children: [null != em ? em : ep, ed, null != (t = null != ef ? ef : eh) ? t : eg, eb],
              });
    }),
    D = i.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: l } = e;
        return (0, r.jsx)(P.Z, {
            ref: t,
            onClick: () => {
                var e, t;
                E.default.track(I.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == l ? void 0 : l.id) ? t : null,
                }),
                    i();
            },
            icon: a.u,
            tooltipText: N.intl.string(N.t.sbdnp6),
        });
    });
