n.d(t, {
    J: () => B,
    y: () => G,
}),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(144269),
    s = n(704215),
    c = n(198168),
    u = n(907862),
    d = n(481060),
    p = n(24124),
    f = n(239091),
    h = n(434650),
    g = n(636449),
    m = n(620662),
    b = n(833664),
    O = n(513202),
    y = n(906732),
    _ = n(20471),
    j = n(522651),
    v = n(311352),
    x = n(243778),
    C = n(220410),
    E = n(668519),
    S = n(803647),
    P = n(667105),
    I = n(131704),
    N = n(944486),
    Z = n(626135),
    w = n(381096),
    T = n(870569),
    A = n(981631),
    R = n(921944),
    D = n(46140),
    M = n(388032),
    L = n(258628);
function k(e) {
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
function U(e, t) {
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
function G(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === A.IIU.PLAYING &&
            (0, m.Z)(t, A.xjy.JOIN)
        );
    }
    return !1;
}
let B = i.memo(function (e) {
        let t,
            l,
            a,
            m,
            {
                stream: B,
                canGoLive: F,
                guildId: H,
                isStreaming: z,
                channel: W,
                canStream: K,
                runningGame: Y,
                embeddedActivity: q,
                activity: X,
                application: Q,
                analyticsContext: J,
            } = e,
            { showRefreshedGoLiveModal: $ } = (0, E.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: ee } = (0, y.ZP)(),
            et = (0, C.P6)("ActivityPanelGameCard"),
            en = G(Q, X, q),
            er = i.useCallback(() => {
                var e;
                o()(null != X, "Received null activity"),
                    Z.default.track(A.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == Y ? void 0 : Y.id) ? e : null,
                        application_id: X.application_id,
                    }),
                    (0, j.v)(ee, j.d.INVITE),
                    Z.default.track(A.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: X.application_id,
                        location: J.location,
                    }),
                    (0, p.h7)(X, !1);
            }, [X, J, ee, Y]),
            ei = i.useCallback(
                (e, t) => () => {
                    (0, j.v)(ee, j.d.LEAVE_ACTIVITY),
                        O.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [ee],
            ),
            el = i.useCallback(() => {
                (0, S.Z)(B);
            }, [B]),
            eo = i.useCallback(() => {
                let e = null != W && (0, I.vd)(W.type) ? W : null,
                    t = null != e ? e.getGuildId() : H;
                (0, d.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            U(k({}, n), {
                                sourcePID: null == Y ? void 0 : Y.pid,
                                selectSource: !!$ && null != N.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: A.Sbl.ACTIVITY_PANEL,
                            }),
                        );
                });
            }, [W, H, Y, $]),
            ea = i.useCallback(
                (e) => {
                    (0, f.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e("58173").then(n.bind(n, 239120));
                            return (t) => (0, r.jsx)(e, U(k({}, t), { activity: X }));
                        },
                        { position: "right" },
                    );
                },
                [X],
            ),
            es = i.useRef(null),
            {
                canStartAuthorization: ec,
                startAuthorization: eu,
                hasAlreadyLinked: ed,
                connectionApp: ep,
            } = (0, _.F)(Q),
            ef = w.Z.useConfig({ location: "ActivityActions" }).enabled,
            eh = (0, h.O)((e) => {
                if (e && null != ep) {
                    var t;
                    Z.default.track(A.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                        game_id: null != (t = null == Y ? void 0 : Y.id) ? t : null,
                        application_id: ep.id,
                    });
                }
            }),
            eg =
                (null != Y || null == q || (0, g.R)()) && (z || F)
                    ? (z
                          ? ((t = !1),
                            (l = () => {
                                el(), (0, j.v)(ee, j.d.STREAM, !1);
                            }),
                            (a = d.g5r),
                            (m = M.intl.string(M.t.S5anIS)))
                          : K
                            ? ((t = !1),
                              (l = () => {
                                  eo(), (0, j.v)(ee, j.d.STREAM, !0);
                              }),
                              (a = d.hGI),
                              (m =
                                  null != Y
                                      ? M.intl.formatToPlainString(M.t.AB5gT0, { game: Y.name })
                                      : M.intl.string(M.t.FeUKeH)))
                            : ((t = !0),
                              (l = null),
                              (a = d.hGI),
                              (m =
                                  null != W && (0, I.vd)(W.type)
                                      ? M.intl.string(M.t.uQn9Bw)
                                      : null != H
                                        ? M.intl.string(M.t.fBXEoK)
                                        : M.intl.string(M.t.n3feND))),
                      (0, r.jsx)("div", {
                          className: L.panelButtonContainer,
                          children: (0, r.jsx)(T.Z, {
                              tooltipText: m,
                              disabled: t,
                              onClick: l,
                              icon: a,
                          }),
                      }))
                    : null,
            em =
                en && null == q
                    ? (0, r.jsx)(T.Z, {
                          ref: es,
                          tooltipText: M.intl.string(M.t["hC/Ze3"]),
                          onClick: er,
                          icon: d.ejJ,
                      })
                    : null,
            eb =
                null == q
                    ? null
                    : (0, r.jsx)(T.Z, {
                          tooltipText: M.intl.string(M.t["R/FK4O"]),
                          onClick: ei(q.applicationId, q.location),
                          icon: d.PBZ,
                      }),
            eO = null == B ? null : (0, r.jsx)(v.Z, {}),
            ey =
                ef && ec && !ed
                    ? (0, r.jsx)(V, {
                          runningGame: Y,
                          startAuthorization: eu,
                          connectionApp: ep,
                          ref: eh,
                      })
                    : null,
            e_ =
                et && null != X && (0, b.Z)(X)
                    ? (0, r.jsx)(T.Z, {
                          tooltipText: "Report Issue",
                          onClick: ea,
                          icon: d.xhG,
                      })
                    : null,
            { isQuestBarEmpty: ej, hasLoadedQuestBar: ev } = (0, P.Ws)({ location: D.dr.CONFLICT_CHECKS }),
            ex = (() => {
                let e = [],
                    t = !ev || !ej;
                return (
                    en && ed && ef && !t && e.push(s.z.ACCOUNT_LINK_INVITE_FRIENDS),
                    ef && ec && !ed && !t && null != Q && e.push(s.z.ACCOUNT_LINK_PROMPT),
                    (0, r.jsx)(x.ZP, {
                        contentTypes: e,
                        groupName: R.R.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            return t === s.z.ACCOUNT_LINK_INVITE_FRIENDS
                                ? (0, r.jsx)(u.J2, {
                                      title: M.intl.string(M.t["0l2pEh"]),
                                      body: M.intl.string(M.t.DSZUKy),
                                      targetElementRef: es,
                                      align: "right",
                                      shouldShow: !0,
                                      onRequestClose: () => n(R.L.USER_DISMISS),
                                      caretConfig: { align: "end" },
                                      actions: [
                                          {
                                              text: M.intl.string(M.t.YdkBCA),
                                              onClick: () => {
                                                  n(R.L.TAKE_ACTION), er();
                                              },
                                          },
                                      ],
                                  })
                                : t === s.z.ACCOUNT_LINK_PROMPT
                                  ? (0, r.jsx)(u.J2, {
                                        graphic: {
                                            type: "dynamic",
                                            component: c.P3.ACCOUNT_LINK_DISPLAY,
                                            props: { application: Q },
                                        },
                                        title: M.intl.formatToPlainString(M.t["lo6H6+"], { gameName: Q.name }),
                                        body: M.intl.string(M.t.qYAzOj),
                                        targetElementRef: eh,
                                        align: "right",
                                        shouldShow: !0,
                                        gradientColor: "purple",
                                        onRequestClose: () => n(R.L.USER_DISMISS),
                                        caretConfig: { align: "end" },
                                        actions: [
                                            {
                                                text: M.intl.string(M.t.lw71NT),
                                                onClick: () => {
                                                    n(R.L.TAKE_ACTION), eu();
                                                },
                                            },
                                        ],
                                    })
                                  : void 0;
                        },
                    })
                );
            })();
        return null == eg && null == em && null == eb && null == ey && null == e_
            ? null
            : (0, r.jsxs)("div", {
                  className: L.actions,
                  children: [null != ey ? ey : em, eg, null != eb ? eb : eO, ex, e_],
              });
    }),
    V = i.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: l } = e;
        return (0, r.jsx)(T.Z, {
            ref: t,
            onClick: () => {
                var e, t;
                Z.default.track(A.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == l ? void 0 : l.id) ? t : null,
                }),
                    i();
            },
            icon: a.u,
            tooltipText: M.intl.string(M.t.sbdnp6),
        });
    });
