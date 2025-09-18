n.d(t, {
    J: () => A,
    y: () => T,
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
    y = n(220410),
    _ = n(668519),
    v = n(803647),
    j = n(131704),
    x = n(944486),
    C = n(626135),
    E = n(381096),
    S = n(870569),
    P = n(981631),
    I = n(388032),
    N = n(258628);
function Z(e) {
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
function w(e, t) {
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
function T(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === P.IIU.PLAYING &&
            (0, p.Z)(t, P.xjy.JOIN)
        );
    }
    return !1;
}
let A = i.memo(function (e) {
        let t,
            l,
            a,
            p,
            {
                stream: A,
                canGoLive: D,
                guildId: L,
                isStreaming: M,
                channel: k,
                canStream: U,
                runningGame: G,
                embeddedActivity: B,
                activity: V,
                application: F,
                analyticsContext: H,
                inviteButtonRef: z,
                accountLinkButtonRef: W,
            } = e,
            { showRefreshedGoLiveModal: K } = (0, _.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: Y } = (0, g.ZP)(),
            q = (0, y.P6)("ActivityPanelGameCard"),
            X = T(F, V, B),
            Q = i.useCallback(() => {
                var e;
                o()(null != V, "Received null activity"),
                    C.default.track(P.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == G ? void 0 : G.id) ? e : null,
                        application_id: V.application_id,
                    }),
                    (0, b.v)(Y, b.d.INVITE),
                    C.default.track(P.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: V.application_id,
                        location: H.location,
                    }),
                    (0, c.h7)(V, !1);
            }, [V, H, Y, G]),
            J = i.useCallback(
                (e, t) => () => {
                    (0, b.v)(Y, b.d.LEAVE_ACTIVITY),
                        h.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [Y],
            ),
            $ = i.useCallback(() => {
                (0, v.Z)(A);
            }, [A]),
            ee = i.useCallback(() => {
                let e = null != k && (0, j.vd)(k.type) ? k : null,
                    t = null != e ? e.getGuildId() : L;
                (0, s.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            w(Z({}, n), {
                                sourcePID: null == G ? void 0 : G.pid,
                                selectSource: !!K && null != x.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: P.Sbl.ACTIVITY_PANEL,
                            }),
                        );
                });
            }, [k, L, G, K]),
            et = i.useCallback(
                (e) => {
                    (0, u.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e("58173").then(n.bind(n, 239120));
                            return (t) => (0, r.jsx)(e, w(Z({}, t), { activity: V }));
                        },
                        { position: "right" },
                    );
                },
                [V],
            ),
            {
                canStartAuthorization: en,
                startAuthorization: er,
                hasAlreadyLinked: ei,
                connectionApp: el,
            } = (0, m.F)(F),
            eo = E.Z.useConfig({ location: "ActivityActions" }).enabled,
            ea =
                (null != G || null == B || (0, d.R)()) && (M || D)
                    ? (M
                          ? ((t = !1),
                            (l = () => {
                                $(), (0, b.v)(Y, b.d.STREAM, !1);
                            }),
                            (a = s.g5r),
                            (p = I.intl.string(I.t.S5anIS)))
                          : U
                            ? ((t = !1),
                              (l = () => {
                                  ee(), (0, b.v)(Y, b.d.STREAM, !0);
                              }),
                              (a = s.hGI),
                              (p =
                                  null != G
                                      ? I.intl.formatToPlainString(I.t.AB5gT0, { game: G.name })
                                      : I.intl.string(I.t.FeUKeH)))
                            : ((t = !0),
                              (l = null),
                              (a = s.hGI),
                              (p =
                                  null != k && (0, j.vd)(k.type)
                                      ? I.intl.string(I.t.uQn9Bw)
                                      : null != L
                                        ? I.intl.string(I.t.fBXEoK)
                                        : I.intl.string(I.t.n3feND))),
                      (0, r.jsx)("div", {
                          className: N.panelButtonContainer,
                          children: (0, r.jsx)(S.Z, {
                              tooltipText: p,
                              disabled: t,
                              onClick: l,
                              icon: a,
                          }),
                      }))
                    : null,
            es =
                X && null == B
                    ? (0, r.jsx)(S.Z, {
                          ref: z,
                          tooltipText: I.intl.string(I.t["hC/Ze3"]),
                          onClick: Q,
                          icon: s.ejJ,
                      })
                    : null,
            ec =
                null == B
                    ? null
                    : (0, r.jsx)(S.Z, {
                          tooltipText: I.intl.string(I.t["R/FK4O"]),
                          onClick: J(B.applicationId, B.location),
                          icon: s.PBZ,
                      }),
            eu = null == A ? null : (0, r.jsx)(O.Z, {}),
            ed =
                eo && en && !ei
                    ? (0, r.jsx)(R, {
                          runningGame: G,
                          startAuthorization: er,
                          connectionApp: el,
                          ref: W,
                      })
                    : null,
            ep =
                q && null != V && (0, f.Z)(V)
                    ? (0, r.jsx)(S.Z, {
                          tooltipText: "Report Issue",
                          onClick: et,
                          icon: s.xhG,
                      })
                    : null;
        return null == ea && null == es && null == ec && null == ed && null == ep
            ? null
            : (0, r.jsxs)("div", {
                  className: N.actions,
                  children: [null != ed ? ed : es, ea, null != ec ? ec : eu, ep],
              });
    }),
    R = i.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: l } = e;
        return (0, r.jsx)(S.Z, {
            ref: t,
            onClick: () => {
                var e, t;
                C.default.track(P.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == l ? void 0 : l.id) ? t : null,
                }),
                    i();
            },
            icon: a.u,
            tooltipText: I.intl.string(I.t.sbdnp6),
        });
    });
