n.d(t, {
    J: () => D,
    y: () => R,
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
    f = n(636449),
    p = n(620662),
    h = n(513202),
    g = n(906732),
    m = n(524995),
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
    N = n(870569),
    Z = n(981631),
    w = n(921944),
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
            t.type === Z.IIU.PLAYING &&
            (0, p.Z)(t, Z.xjy.JOIN)
        );
    }
    return !1;
}
let D = i.memo(function (e) {
        var t, l;
        let a,
            s,
            p,
            y,
            {
                stream: C,
                canGoLive: E,
                guildId: w,
                isStreaming: D,
                channel: k,
                canStream: G,
                runningGame: U,
                embeddedActivity: B,
                frame: F,
                activity: V,
                application: H,
                analyticsContext: W,
                inviteButtonRef: z,
                accountLinkButtonRef: K,
            } = e,
            { showRefreshedGoLiveModal: Y } = (0, v.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: q } = (0, g.ZP)(),
            X = (0, x.Z)(H, "rtc-activity-panel"),
            Q = R(H, V, B),
            J = i.useCallback(() => {
                var e;
                o()(null != V, "Received null activity"),
                    P.default.track(Z.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == U ? void 0 : U.id) ? e : null,
                        application_id: V.application_id,
                    }),
                    (0, b.v)(q, b.d.INVITE),
                    P.default.track(Z.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: V.application_id,
                        location: W.location,
                    }),
                    (0, d.h7)(V, !1);
            }, [V, W, q, U]),
            $ = i.useCallback(
                (e, t) => () => {
                    (0, b.v)(q, b.d.LEAVE_ACTIVITY),
                        h.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [q],
            ),
            ee = i.useCallback(
                (e) => () => {
                    (0, b.v)(q, b.d.LEAVE_ACTIVITY), O.Z.stopFrame({ applicationId: e });
                },
                [q],
            ),
            et = i.useCallback(() => {
                (0, j.Z)(C);
            }, [C]),
            en = i.useCallback(() => {
                let e = null != k && (0, S.vd)(k.type) ? k : null,
                    t = null != e ? e.getGuildId() : w;
                (0, u.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("4093"), n.e("47863"), n.e("50442")]).then(
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
                                    sourcePID: null == U ? void 0 : U.pid,
                                    selectSource: !!Y && null != I.Z.getVoiceChannelId(),
                                    guildId: t,
                                    analyticsLocation: Z.Sbl.ACTIVITY_PANEL,
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
            }, [k, w, U, Y]),
            {
                canStartAuthorization: er,
                startAuthorization: ei,
                hasAlreadyLinked: el,
                connectionApp: eo,
                preferredFlow: ea,
            } = (0, m.F)(H, {
                allowedFlows: [m.r.RPC, m.r.WEB],
            }),
            es = i.useRef(null),
            [ec, eu] = i.useState(!1);
        i.useEffect(
            () => () => {
                null != es.current && clearTimeout(es.current);
            },
            [],
        ),
            i.useEffect(() => {
                el && (eu(!1), null != es.current && (clearTimeout(es.current), (es.current = null)));
            }, [el]);
        let ed =
                null == X || null == H
                    ? null
                    : (0, r.jsx)(M, {
                          guildId: X,
                          applicationId: H.id,
                      }),
            ef =
                (null != U || null == B || (0, f.R)()) && (D || E)
                    ? (D
                          ? ((a = !1),
                            (s = () => {
                                et(), (0, b.v)(q, b.d.STREAM, !1);
                            }),
                            (p = u.g5r),
                            (y = T.intl.string(T.t.S5anIc)))
                          : G
                            ? ((a = !1),
                              (s = () => {
                                  en(), (0, b.v)(q, b.d.STREAM, !0);
                              }),
                              (p = u.hGI),
                              (y =
                                  null != U
                                      ? T.intl.formatToPlainString(T.t.AB5gTy, { game: U.name })
                                      : T.intl.string(T.t.FeUKeA)))
                            : ((a = !0),
                              (s = null),
                              (p = u.hGI),
                              (y =
                                  null != k && (0, S.vd)(k.type)
                                      ? T.intl.string(T.t.uQn9B8)
                                      : null != w
                                        ? T.intl.string(T.t.fBXEoJ)
                                        : T.intl.string(T.t.n3feNG))),
                      (0, r.jsx)("div", {
                          className: A.panelButtonContainer,
                          children: (0, r.jsx)(N.Z, {
                              tooltipText: y,
                              disabled: a,
                              onClick: s,
                              icon: p,
                          }),
                      }))
                    : null,
            ep =
                Q && null == B
                    ? (0, r.jsx)(N.Z, {
                          ref: z,
                          tooltipText: T.intl.string(T.t["hC/Zey"]),
                          onClick: J,
                          icon: u.ejJ,
                      })
                    : null,
            eh =
                null == B
                    ? null
                    : (0, r.jsx)(N.Z, {
                          tooltipText: T.intl.string(T.t["R/FK4A"]),
                          onClick: $(B.applicationId, B.location),
                          icon: u.PBZ,
                      }),
            eg =
                null == F
                    ? null
                    : (0, r.jsx)(N.Z, {
                          tooltipText: T.intl.string(T.t["R/FK4A"]),
                          onClick: ee(F.applicationId),
                          icon: u.PBZ,
                      }),
            em = null == C ? null : (0, r.jsx)(_.Z, {}),
            eb =
                !er || el
                    ? null
                    : (0, r.jsx)(L, {
                          runningGame: U,
                          startAuthorization: () => {
                              ea !== m.r.WEB &&
                                  (eu(!0),
                                  null != es.current && clearTimeout(es.current),
                                  (es.current = setTimeout(() => {
                                      eu(!1);
                                  }, 90000))),
                                  ei();
                          },
                          connectionApp: eo,
                          ref: K,
                      }),
            e_ =
                !er || el
                    ? null
                    : (0, r.jsx)(c.J2, {
                          title: T.intl.string(T.t.ULvRFd),
                          body: T.intl.string(T.t["HJJDr+"]),
                          targetElementRef: K,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: ec,
                          onRequestClose: () => {
                              eu(!1), null != es.current && (clearTimeout(es.current), (es.current = null));
                          },
                      });
        return null == ef && null == ep && null == eh && null == eg && null == eb && null == ed
            ? null
            : (0, r.jsxs)("div", {
                  className: A.actions,
                  children: [
                      null != (t = null != ed ? ed : eb) ? t : ep,
                      ef,
                      null != (l = null != eh ? eh : eg) ? l : em,
                      e_,
                  ],
              });
    }),
    L = i.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: l } = e;
        return (0, r.jsx)(N.Z, {
            ref: t,
            onClick: () => {
                var e, t;
                P.default.track(Z.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == l ? void 0 : l.id) ? t : null,
                }),
                    i();
            },
            icon: a.u,
            tooltipText: T.intl.string(T.t.sbdnpw),
        });
    });
function M(e) {
    let { applicationId: t, guildId: n } = e,
        l = i.useRef(null);
    i.useEffect(() => {
        P.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [o, a] = (0, y.US)([s.z.GAME_SHOP_RTC_POPOVER], w.R.ACCOUNT_NAME_ZONE, !0),
        c = i.useCallback(() => {
            (0, C.Z)({ guildId: n }), a(w.L.USER_DISMISS);
        }, [n, a]),
        d = i.useCallback(() => {
            P.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), c();
        }, [t, c]),
        f = i.useCallback(() => {
            a(w.L.USER_DISMISS);
        }, [a]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.Z, {
                tooltipText: T.intl.string(T.t.vyaWs7),
                onClick: d,
                icon: u.EOn,
                ref: l,
            }),
            o === s.z.GAME_SHOP_RTC_POPOVER
                ? (0, r.jsx)(E.Z, {
                      onActionClick: c,
                      onRequestClose: f,
                      targetElementRef: l,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        ],
    });
}
