n.d(t, {
    J: () => G,
    y: () => U,
}),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(144269),
    s = n(704215),
    c = n(907862),
    u = n(481060),
    d = n(24124),
    p = n(239091),
    f = n(434650),
    h = n(636449),
    g = n(620662),
    m = n(833664),
    b = n(513202),
    O = n(906732),
    y = n(20471),
    _ = n(522651),
    v = n(311352),
    j = n(243778),
    x = n(220410),
    C = n(668519),
    E = n(803647),
    S = n(667105),
    P = n(131704),
    I = n(944486),
    N = n(626135),
    Z = n(381096),
    w = n(870569),
    T = n(981631),
    A = n(921944),
    R = n(46140),
    D = n(388032),
    M = n(258628);
function L(e) {
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
function k(e, t) {
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
function U(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === T.IIU.PLAYING &&
            (0, g.Z)(t, T.xjy.JOIN)
        );
    }
    return !1;
}
let G = i.memo(function (e) {
        let t,
            l,
            a,
            f,
            {
                stream: g,
                canGoLive: G,
                guildId: V,
                isStreaming: F,
                channel: H,
                canStream: z,
                runningGame: W,
                embeddedActivity: K,
                activity: Y,
                application: q,
                analyticsContext: X,
            } = e,
            { showRefreshedGoLiveModal: Q } = (0, C.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: J } = (0, O.ZP)(),
            $ = (0, x.P6)("ActivityPanelGameCard"),
            ee = U(q, Y, K),
            et = i.useCallback(() => {
                var e;
                o()(null != Y, "Received null activity"),
                    N.default.track(T.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == W ? void 0 : W.id) ? e : null,
                        application_id: Y.application_id,
                    }),
                    (0, _.v)(J, _.d.INVITE),
                    N.default.track(T.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: Y.application_id,
                        location: X.location,
                    }),
                    (0, d.h7)(Y, !1);
            }, [Y, X, J, W]),
            en = i.useCallback(
                (e, t) => () => {
                    (0, _.v)(J, _.d.LEAVE_ACTIVITY),
                        b.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [J],
            ),
            er = i.useCallback(() => {
                (0, E.Z)(g);
            }, [g]),
            ei = i.useCallback(() => {
                let e = null != H && (0, P.vd)(H.type) ? H : null,
                    t = null != e ? e.getGuildId() : V;
                (0, u.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            k(L({}, n), {
                                sourcePID: null == W ? void 0 : W.pid,
                                selectSource: !!Q && null != I.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: T.Sbl.ACTIVITY_PANEL,
                            }),
                        );
                });
            }, [H, V, W, Q]),
            el = i.useCallback(
                (e) => {
                    (0, p.jW)(
                        e,
                        async () => {
                            let { default: e } = await n.e("58173").then(n.bind(n, 239120));
                            return (t) => (0, r.jsx)(e, k(L({}, t), { activity: Y }));
                        },
                        { position: "right" },
                    );
                },
                [Y],
            ),
            eo = i.useRef(null),
            {
                canStartAuthorization: ea,
                startAuthorization: es,
                hasAlreadyLinked: ec,
                connectionApp: eu,
            } = (0, y.F)(q),
            ed = Z.Z.useConfig({ location: "ActivityActions" }).enabled,
            ep =
                (null != W || null == K || (0, h.R)()) && (F || G)
                    ? (F
                          ? ((t = !1),
                            (l = () => {
                                er(), (0, _.v)(J, _.d.STREAM, !1);
                            }),
                            (a = u.g5r),
                            (f = D.intl.string(D.t.S5anIS)))
                          : z
                            ? ((t = !1),
                              (l = () => {
                                  ei(), (0, _.v)(J, _.d.STREAM, !0);
                              }),
                              (a = u.hGI),
                              (f =
                                  null != W
                                      ? D.intl.formatToPlainString(D.t.AB5gT0, { game: W.name })
                                      : D.intl.string(D.t.FeUKeH)))
                            : ((t = !0),
                              (l = null),
                              (a = u.hGI),
                              (f =
                                  null != H && (0, P.vd)(H.type)
                                      ? D.intl.string(D.t.uQn9Bw)
                                      : null != V
                                        ? D.intl.string(D.t.fBXEoK)
                                        : D.intl.string(D.t.n3feND))),
                      (0, r.jsx)("div", {
                          className: M.panelButtonContainer,
                          children: (0, r.jsx)(w.Z, {
                              tooltipText: f,
                              disabled: t,
                              onClick: l,
                              icon: a,
                          }),
                      }))
                    : null,
            ef =
                ee && null == K
                    ? (0, r.jsx)(w.Z, {
                          ref: eo,
                          tooltipText: D.intl.string(D.t["hC/Ze3"]),
                          onClick: et,
                          icon: u.ejJ,
                      })
                    : null,
            eh =
                null == K
                    ? null
                    : (0, r.jsx)(w.Z, {
                          tooltipText: D.intl.string(D.t["R/FK4O"]),
                          onClick: en(K.applicationId, K.location),
                          icon: u.PBZ,
                      }),
            eg = null == g ? null : (0, r.jsx)(v.Z, {}),
            em =
                ed && ea && !ec
                    ? (0, r.jsx)(B, {
                          runningGame: W,
                          startAuthorization: es,
                          connectionApp: eu,
                      })
                    : null,
            eb =
                $ && null != Y && (0, m.Z)(Y)
                    ? (0, r.jsx)(w.Z, {
                          tooltipText: "Report Issue",
                          onClick: el,
                          icon: u.xhG,
                      })
                    : null,
            { isQuestBarEmpty: eO, hasLoadedQuestBar: ey } = (0, S.Ws)({ location: R.dr.CONFLICT_CHECKS }),
            e_ = (() => {
                let e = [];
                return (
                    ee && ec && !(!ey || !eO) && e.push(s.z.ACCOUNT_LINK_INVITE_FRIENDS),
                    (0, r.jsx)(j.ZP, {
                        contentTypes: e,
                        groupName: A.R.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === s.z.ACCOUNT_LINK_INVITE_FRIENDS)
                                return (0, r.jsx)(c.J2, {
                                    title: D.intl.string(D.t["0l2pEh"]),
                                    body: D.intl.string(D.t.DSZUKy),
                                    targetElementRef: eo,
                                    align: "right",
                                    shouldShow: !0,
                                    onRequestClose: () => n(A.L.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: D.intl.string(D.t.YdkBCA),
                                            onClick: () => {
                                                n(A.L.TAKE_ACTION), et();
                                            },
                                        },
                                    ],
                                });
                        },
                    })
                );
            })();
        return null == ep && null == ef && null == eh && null == em && null == eb
            ? null
            : (0, r.jsxs)("div", {
                  className: M.actions,
                  children: [null != em ? em : ef, ep, null != eh ? eh : eg, e_, eb],
              });
    }),
    B = (e) => {
        let { runningGame: t, startAuthorization: n, connectionApp: i } = e,
            l = (0, f.O)((e) => {
                if (e && null != i) {
                    var n;
                    N.default.track(T.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                        game_id: null != (n = null == t ? void 0 : t.id) ? n : null,
                        application_id: i.id,
                    });
                }
            });
        return (0, r.jsx)(w.Z, {
            ref: l,
            onClick: () => {
                var e, r;
                N.default.track(T.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == t ? void 0 : t.id) ? e : null,
                    application_id: null != (r = null == i ? void 0 : i.id) ? r : null,
                }),
                    n();
            },
            icon: a.u,
            tooltipText: D.intl.string(D.t.sbdnp6),
        });
    };
