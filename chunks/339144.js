n.d(t, {
    J: () => L,
    y: () => D,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    o = n.n(l),
    a = n(144269),
    s = n(704215),
    c = n(907862),
    u = n(481060),
    d = n(24124),
    p = n(636449),
    f = n(620662),
    h = n(513202),
    g = n(906732),
    m = n(535139),
    b = n(522651),
    _ = n(311352),
    y = n(243778),
    O = n(48131),
    v = n(668519),
    j = n(803647),
    x = n(746298),
    C = n(705338),
    E = n(445606),
    S = n(131704),
    I = n(944486),
    P = n(626135),
    N = n(381096),
    Z = n(870569),
    w = n(981631),
    T = n(921944),
    A = n(388032),
    R = n(258628);
function D(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === w.IIU.PLAYING &&
            (0, f.Z)(t, w.xjy.JOIN)
        );
    }
    return !1;
}
let L = i.memo(function (e) {
        var t, l;
        let a,
            s,
            f,
            y,
            {
                stream: C,
                canGoLive: E,
                guildId: T,
                isStreaming: L,
                channel: G,
                canStream: U,
                runningGame: B,
                embeddedActivity: F,
                frame: V,
                activity: H,
                application: z,
                analyticsContext: W,
                inviteButtonRef: K,
                accountLinkButtonRef: Y,
            } = e,
            { showRefreshedGoLiveModal: q } = (0, v.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: X } = (0, g.ZP)(),
            Q = (0, x.Z)(z),
            J = D(z, H, F),
            $ = i.useCallback(() => {
                var e;
                o()(null != H, "Received null activity"),
                    P.default.track(w.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == B ? void 0 : B.id) ? e : null,
                        application_id: H.application_id,
                    }),
                    (0, b.v)(X, b.d.INVITE),
                    P.default.track(w.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: H.application_id,
                        location: W.location,
                    }),
                    (0, d.h7)(H, !1);
            }, [H, W, X, B]),
            ee = i.useCallback(
                (e, t) => () => {
                    (0, b.v)(X, b.d.LEAVE_ACTIVITY),
                        h.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [X],
            ),
            et = i.useCallback(
                (e) => () => {
                    (0, b.v)(X, b.d.LEAVE_ACTIVITY), O.Z.stopFrame({ applicationId: e });
                },
                [X],
            ),
            en = i.useCallback(() => {
                (0, j.Z)(C);
            }, [C]),
            er = i.useCallback(() => {
                let e = null != G && (0, S.vd)(G.type) ? G : null,
                    t = null != e ? e.getGuildId() : T;
                (0, u.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("4093"), n.e("47863"), n.e("33641")]).then(
                        n.bind(n, 60594),
                    );
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
                                    selectSource: !!q && null != I.Z.getVoiceChannelId(),
                                    guildId: t,
                                    analyticsLocation: w.Sbl.ACTIVITY_PANEL,
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
            }, [G, T, B, q]),
            {
                canStartAuthorization: ei,
                startAuthorization: el,
                hasAlreadyLinked: eo,
                connectionApp: ea,
                preferredFlow: es,
            } = (0, m.F)(z, {
                allowedFlows: [m.r.RPC, m.r.WEB],
            }),
            ec = N.Z.useConfig({ location: "ActivityActions" }).enabled,
            eu = i.useRef(null),
            [ed, ep] = i.useState(!1);
        i.useEffect(
            () => () => {
                null != eu.current && clearTimeout(eu.current);
            },
            [],
        ),
            i.useEffect(() => {
                eo && (ep(!1), null != eu.current && (clearTimeout(eu.current), (eu.current = null)));
            }, [eo]);
        let ef = null == Q ? null : (0, r.jsx)(k, { guildId: Q }),
            eh =
                (null != B || null == F || (0, p.R)()) && (L || E)
                    ? (L
                          ? ((a = !1),
                            (s = () => {
                                en(), (0, b.v)(X, b.d.STREAM, !1);
                            }),
                            (f = u.g5r),
                            (y = A.intl.string(A.t.S5anIc)))
                          : U
                            ? ((a = !1),
                              (s = () => {
                                  er(), (0, b.v)(X, b.d.STREAM, !0);
                              }),
                              (f = u.hGI),
                              (y =
                                  null != B
                                      ? A.intl.formatToPlainString(A.t.AB5gTy, { game: B.name })
                                      : A.intl.string(A.t.FeUKeA)))
                            : ((a = !0),
                              (s = null),
                              (f = u.hGI),
                              (y =
                                  null != G && (0, S.vd)(G.type)
                                      ? A.intl.string(A.t.uQn9B8)
                                      : null != T
                                        ? A.intl.string(A.t.fBXEoJ)
                                        : A.intl.string(A.t.n3feNG))),
                      (0, r.jsx)("div", {
                          className: R.panelButtonContainer,
                          children: (0, r.jsx)(Z.Z, {
                              tooltipText: y,
                              disabled: a,
                              onClick: s,
                              icon: f,
                          }),
                      }))
                    : null,
            eg =
                J && null == F
                    ? (0, r.jsx)(Z.Z, {
                          ref: K,
                          tooltipText: A.intl.string(A.t["hC/Zey"]),
                          onClick: $,
                          icon: u.ejJ,
                      })
                    : null,
            em =
                null == F
                    ? null
                    : (0, r.jsx)(Z.Z, {
                          tooltipText: A.intl.string(A.t["R/FK4A"]),
                          onClick: ee(F.applicationId, F.location),
                          icon: u.PBZ,
                      }),
            eb =
                null == V
                    ? null
                    : (0, r.jsx)(Z.Z, {
                          tooltipText: A.intl.string(A.t["R/FK4A"]),
                          onClick: et(V.applicationId),
                          icon: u.PBZ,
                      }),
            e_ = null == C ? null : (0, r.jsx)(_.Z, {}),
            ey =
                ec && ei && !eo
                    ? (0, r.jsx)(M, {
                          runningGame: B,
                          startAuthorization: () => {
                              es !== m.r.WEB &&
                                  (ep(!0),
                                  null != eu.current && clearTimeout(eu.current),
                                  (eu.current = setTimeout(() => {
                                      ep(!1);
                                  }, 90000))),
                                  el();
                          },
                          connectionApp: ea,
                          ref: Y,
                      })
                    : null,
            eO =
                ec && ei && !eo
                    ? (0, r.jsx)(c.J2, {
                          title: A.intl.string(A.t.ULvRFd),
                          body: A.intl.string(A.t["HJJDr+"]),
                          targetElementRef: Y,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: ed,
                          onRequestClose: () => {
                              ep(!1), null != eu.current && (clearTimeout(eu.current), (eu.current = null));
                          },
                      })
                    : null;
        return null == eh && null == eg && null == em && null == eb && null == ey && null == ef
            ? null
            : (0, r.jsxs)("div", {
                  className: R.actions,
                  children: [
                      null != (t = null != ef ? ef : ey) ? t : eg,
                      eh,
                      null != (l = null != em ? em : eb) ? l : e_,
                      eO,
                  ],
              });
    }),
    M = i.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: l } = e;
        return (0, r.jsx)(Z.Z, {
            ref: t,
            onClick: () => {
                var e, t;
                P.default.track(w.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == l ? void 0 : l.id) ? t : null,
                }),
                    i();
            },
            icon: a.u,
            tooltipText: A.intl.string(A.t.sbdnpw),
        });
    });
function k(e) {
    let { guildId: t } = e,
        n = i.useRef(null),
        [l, o] = (0, y.US)([s.z.GAME_SHOP_RTC_POPOVER], T.R.ACCOUNT_NAME_ZONE, !0),
        a = i.useCallback(() => {
            (0, C.Z)({ guildId: t }), o(T.L.USER_DISMISS);
        }, [t, o]),
        c = i.useCallback(() => {
            o(T.L.USER_DISMISS);
        }, [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Z.Z, {
                tooltipText: A.intl.string(A.t.vyaWs7),
                onClick: a,
                icon: u.EOn,
                ref: n,
            }),
            l === s.z.GAME_SHOP_RTC_POPOVER
                ? (0, r.jsx)(E.Z, {
                      onActionClick: a,
                      onRequestClose: c,
                      targetElementRef: n,
                      position: "top",
                      align: "center",
                      caretConfig: {
                          align: "center",
                          position: "top",
                      },
                  })
                : null,
        ],
    });
}
