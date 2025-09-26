n.d(t, {
    J: () => D,
    y: () => R,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(144269),
    s = n(907862),
    c = n(481060),
    u = n(24124),
    d = n(239091),
    p = n(636449),
    f = n(620662),
    h = n(833664),
    g = n(513202),
    m = n(906732),
    b = n(20471),
    _ = n(522651),
    O = n(311352),
    y = n(48131),
    v = n(220410),
    j = n(668519),
    x = n(803647),
    C = n(131704),
    E = n(944486),
    S = n(626135),
    P = n(381096),
    I = n(870569),
    N = n(981631),
    w = n(388032),
    Z = n(258628);
function T(e) {
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
function A(e, t) {
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
function R(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === N.IIU.PLAYING &&
            (0, f.Z)(t, N.xjy.JOIN)
        );
    }
    return !1;
}
let D = i.memo(function (e) {
        var t;
        let l,
            a,
            f,
            D,
            {
                stream: L,
                canGoLive: k,
                guildId: U,
                isStreaming: G,
                channel: B,
                canStream: F,
                runningGame: V,
                embeddedActivity: H,
                frame: z,
                activity: W,
                application: K,
                analyticsContext: Y,
                inviteButtonRef: q,
                accountLinkButtonRef: X,
            } = e,
            { showRefreshedGoLiveModal: Q } = (0, j.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: J } = (0, m.ZP)(),
            $ = (0, v.P6)("ActivityPanelGameCard"),
            ee = R(K, W, H),
            et = i.useCallback(() => {
                var e;
                o()(null != W, "Received null activity"),
                    S.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == V ? void 0 : V.id) ? e : null,
                        application_id: W.application_id,
                    }),
                    (0, _.v)(J, _.d.INVITE),
                    S.default.track(N.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: W.application_id,
                        location: Y.location,
                    }),
                    (0, u.h7)(W, !1);
            }, [W, Y, J, V]),
            en = i.useCallback(
                (e, t) => () => {
                    (0, _.v)(J, _.d.LEAVE_ACTIVITY),
                        g.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [J],
            ),
            er = i.useCallback(
                (e) => () => {
                    (0, _.v)(J, _.d.LEAVE_ACTIVITY), y.Z.stopFrame({ applicationId: e });
                },
                [J],
            ),
            ei = i.useCallback(() => {
                (0, x.Z)(L);
            }, [L]),
            el = i.useCallback(() => {
                let e = null != B && (0, C.vd)(B.type) ? B : null,
                    t = null != e ? e.getGuildId() : U;
                (0, c.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            A(T({}, n), {
                                sourcePID: null == V ? void 0 : V.pid,
                                selectSource: !!Q && null != E.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: N.Sbl.ACTIVITY_PANEL,
                            }),
                        );
                });
            }, [B, U, V, Q]),
            eo = i.useCallback(
                (e) => {
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e("58173").then(n.bind(n, 239120));
                            return (t) => (0, r.jsx)(e, A(T({}, t), { activity: W }));
                        },
                        { position: "right" },
                    );
                },
                [W],
            ),
            {
                canStartAuthorization: ea,
                startAuthorization: es,
                hasAlreadyLinked: ec,
                connectionApp: eu,
            } = (0, b.FG)(K, { allowedFlows: [b.ro.RPC] }),
            ed = P.Z.useConfig({ location: "ActivityActions" }).enabled,
            ep = i.useRef(null),
            [ef, eh] = i.useState(!1);
        i.useEffect(
            () => () => {
                null != ep.current && clearTimeout(ep.current);
            },
            [],
        ),
            i.useEffect(() => {
                ec && (eh(!1), null != ep.current && (clearTimeout(ep.current), (ep.current = null)));
            }, [ec]);
        let eg =
                (null != V || null == H || (0, p.R)()) && (G || k)
                    ? (G
                          ? ((l = !1),
                            (a = () => {
                                ei(), (0, _.v)(J, _.d.STREAM, !1);
                            }),
                            (f = c.g5r),
                            (D = w.intl.string(w.t.S5anIS)))
                          : F
                            ? ((l = !1),
                              (a = () => {
                                  el(), (0, _.v)(J, _.d.STREAM, !0);
                              }),
                              (f = c.hGI),
                              (D =
                                  null != V
                                      ? w.intl.formatToPlainString(w.t.AB5gT0, { game: V.name })
                                      : w.intl.string(w.t.FeUKeH)))
                            : ((l = !0),
                              (a = null),
                              (f = c.hGI),
                              (D =
                                  null != B && (0, C.vd)(B.type)
                                      ? w.intl.string(w.t.uQn9Bw)
                                      : null != U
                                        ? w.intl.string(w.t.fBXEoK)
                                        : w.intl.string(w.t.n3feND))),
                      (0, r.jsx)("div", {
                          className: Z.panelButtonContainer,
                          children: (0, r.jsx)(I.Z, {
                              tooltipText: D,
                              disabled: l,
                              onClick: a,
                              icon: f,
                          }),
                      }))
                    : null,
            em =
                ee && null == H
                    ? (0, r.jsx)(I.Z, {
                          ref: q,
                          tooltipText: w.intl.string(w.t["hC/Ze3"]),
                          onClick: et,
                          icon: c.ejJ,
                      })
                    : null,
            eb =
                null == H
                    ? null
                    : (0, r.jsx)(I.Z, {
                          tooltipText: w.intl.string(w.t["R/FK4O"]),
                          onClick: en(H.applicationId, H.location),
                          icon: c.PBZ,
                      }),
            e_ =
                null == z
                    ? null
                    : (0, r.jsx)(I.Z, {
                          tooltipText: w.intl.string(w.t["R/FK4O"]),
                          onClick: er(z.applicationId),
                          icon: c.PBZ,
                      }),
            eO = null == L ? null : (0, r.jsx)(O.Z, {}),
            ey =
                ed && ea && !ec
                    ? (0, r.jsx)(M, {
                          runningGame: V,
                          startAuthorization: () => {
                              eh(!0),
                                  null != ep.current && clearTimeout(ep.current),
                                  (ep.current = setTimeout(() => {
                                      eh(!1);
                                  }, 90000)),
                                  es();
                          },
                          connectionApp: eu,
                          ref: X,
                      })
                    : null,
            ev =
                $ && null != W && (0, h.Z)(W)
                    ? (0, r.jsx)(I.Z, {
                          tooltipText: "Report Issue",
                          onClick: eo,
                          icon: c.xhG,
                      })
                    : null,
            ej =
                ed && ea && !ec
                    ? (0, r.jsx)(s.J2, {
                          title: w.intl.string(w.t.ULvRFR),
                          body: w.intl.string(w.t.HJJDr6),
                          targetElementRef: X,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: ef,
                          onRequestClose: () => {
                              eh(!1), null != ep.current && (clearTimeout(ep.current), (ep.current = null));
                          },
                      })
                    : null;
        return null == eg && null == em && null == eb && null == e_ && null == ey && null == ev
            ? null
            : (0, r.jsxs)("div", {
                  className: Z.actions,
                  children: [null != ey ? ey : em, eg, null != (t = null != eb ? eb : e_) ? t : eO, ev, ej],
              });
    }),
    M = i.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: l } = e;
        return (0, r.jsx)(I.Z, {
            ref: t,
            onClick: () => {
                var e, t;
                S.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == l ? void 0 : l.id) ? t : null,
                }),
                    i();
            },
            icon: a.u,
            tooltipText: w.intl.string(w.t.sbdnp6),
        });
    });
