n.d(t, {
    J: () => D,
    y: () => R,
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
    p = n(434650),
    f = n(636449),
    h = n(620662),
    g = n(513202),
    m = n(906732),
    b = n(20471),
    O = n(522651),
    y = n(311352),
    _ = n(243778),
    v = n(668519),
    j = n(803647),
    x = n(667105),
    C = n(131704),
    E = n(944486),
    S = n(626135),
    P = n(381096),
    I = n(870569),
    N = n(981631),
    Z = n(921944),
    w = n(46140),
    T = n(388032),
    A = n(258628);
function R(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === N.IIU.PLAYING &&
            (0, h.Z)(t, N.xjy.JOIN)
        );
    }
    return !1;
}
let D = i.memo(function (e) {
        let t,
            l,
            a,
            p,
            {
                stream: h,
                canGoLive: D,
                guildId: L,
                isStreaming: k,
                channel: U,
                canStream: G,
                runningGame: B,
                embeddedActivity: V,
                activity: F,
                application: H,
                analyticsContext: z,
            } = e,
            { showRefreshedGoLiveModal: W } = (0, v.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: K } = (0, m.ZP)(),
            Y = R(H, F, V),
            q = i.useCallback(() => {
                var e;
                o()(null != F, "Received null activity"),
                    S.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == B ? void 0 : B.id) ? e : null,
                        application_id: F.application_id,
                    }),
                    (0, O.v)(K, O.d.INVITE),
                    S.default.track(N.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: F.application_id,
                        location: z.location,
                    }),
                    (0, d.h7)(F, !1);
            }, [F, z, K, B]),
            X = i.useCallback(
                (e, t) => () => {
                    (0, O.v)(K, O.d.LEAVE_ACTIVITY),
                        g.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [K],
            ),
            Q = i.useCallback(() => {
                (0, j.Z)(h);
            }, [h]),
            J = i.useCallback(() => {
                let e = null != U && (0, C.vd)(U.type) ? U : null,
                    t = null != e ? e.getGuildId() : L;
                (0, u.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (l = l =
                                {
                                    sourcePID: null == B ? void 0 : B.pid,
                                    selectSource: !!W && null != E.Z.getVoiceChannelId(),
                                    guildId: t,
                                    analyticsLocation: N.Sbl.ACTIVITY_PANEL,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i),
                        );
                    };
                });
            }, [U, L, B, W]),
            $ = i.useRef(null),
            {
                canStartAuthorization: ee,
                startAuthorization: et,
                hasAlreadyLinked: en,
                connectionApp: er,
            } = (0, b.F)(H),
            ei = P.Z.useConfig({ location: "ActivityActions" }).enabled,
            el =
                (null != B || null == V || (0, f.R)()) && (k || D)
                    ? (k
                          ? ((t = !1),
                            (l = () => {
                                Q(), (0, O.v)(K, O.d.STREAM, !1);
                            }),
                            (a = u.g5r),
                            (p = T.intl.string(T.t.S5anIS)))
                          : G
                            ? ((t = !1),
                              (l = () => {
                                  J(), (0, O.v)(K, O.d.STREAM, !0);
                              }),
                              (a = u.hGI),
                              (p =
                                  null != B
                                      ? T.intl.formatToPlainString(T.t.AB5gT0, { game: B.name })
                                      : T.intl.string(T.t.FeUKeH)))
                            : ((t = !0),
                              (l = null),
                              (a = u.hGI),
                              (p =
                                  null != U && (0, C.vd)(U.type)
                                      ? T.intl.string(T.t.uQn9Bw)
                                      : null != L
                                        ? T.intl.string(T.t.fBXEoK)
                                        : T.intl.string(T.t.n3feND))),
                      (0, r.jsx)("div", {
                          className: A.panelButtonContainer,
                          children: (0, r.jsx)(I.Z, {
                              tooltipText: p,
                              disabled: t,
                              onClick: l,
                              icon: a,
                          }),
                      }))
                    : null,
            eo =
                Y && null == V
                    ? (0, r.jsx)(I.Z, {
                          ref: $,
                          tooltipText: T.intl.string(T.t["hC/Ze3"]),
                          onClick: q,
                          icon: u.ejJ,
                      })
                    : null,
            ea =
                null == V
                    ? null
                    : (0, r.jsx)(I.Z, {
                          tooltipText: T.intl.string(T.t["R/FK4O"]),
                          onClick: X(V.applicationId, V.location),
                          icon: u.PBZ,
                      }),
            es = null == h ? null : (0, r.jsx)(y.Z, {}),
            ec =
                ei && ee && !en
                    ? (0, r.jsx)(M, {
                          runningGame: B,
                          startAuthorization: et,
                          connectionApp: er,
                      })
                    : null,
            { isQuestBarEmpty: eu, hasLoadedQuestBar: ed } = (0, x.Ws)({ location: w.dr.CONFLICT_CHECKS }),
            ep = (() => {
                let e = [];
                return (
                    Y && en && !(!ed || !eu) && e.push(s.z.ACCOUNT_LINK_INVITE_FRIENDS),
                    (0, r.jsx)(_.ZP, {
                        contentTypes: e,
                        groupName: Z.R.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === s.z.ACCOUNT_LINK_INVITE_FRIENDS)
                                return (0, r.jsx)(c.J2, {
                                    title: T.intl.string(T.t["0l2pEh"]),
                                    body: T.intl.string(T.t.DSZUKy),
                                    targetElementRef: $,
                                    align: "right",
                                    shouldShow: !0,
                                    onRequestClose: () => n(Z.L.USER_DISMISS),
                                    caretConfig: { align: "end" },
                                    actions: [
                                        {
                                            text: T.intl.string(T.t.YdkBCA),
                                            onClick: () => {
                                                n(Z.L.TAKE_ACTION), q();
                                            },
                                        },
                                    ],
                                });
                        },
                    })
                );
            })();
        return null == el && null == eo && null == ea && null == ec
            ? null
            : (0, r.jsxs)("div", {
                  className: A.actions,
                  children: [null != ec ? ec : eo, el, null != ea ? ea : es, ep],
              });
    }),
    M = (e) => {
        let { runningGame: t, startAuthorization: n, connectionApp: i } = e,
            l = (0, p.O)((e) => {
                if (e && null != i) {
                    var n;
                    S.default.track(N.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                        game_id: null != (n = null == t ? void 0 : t.id) ? n : null,
                        application_id: i.id,
                    });
                }
            });
        return (0, r.jsx)(I.Z, {
            ref: l,
            onClick: () => {
                var e, r;
                S.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == t ? void 0 : t.id) ? e : null,
                    application_id: null != (r = null == i ? void 0 : i.id) ? r : null,
                }),
                    n();
            },
            icon: a.u,
            tooltipText: T.intl.string(T.t.sbdnp6),
        });
    };
