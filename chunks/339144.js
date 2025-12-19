n.d(t, {
    J: () => D,
    y: () => R,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(144269),
    s = n(704215),
    c = n(907862),
    u = n(481060),
    d = n(24124),
    f = n(636449),
    h = n(620662),
    p = n(513202),
    g = n(906732),
    b = n(524995),
    m = n(522651),
    y = n(311352),
    O = n(243778),
    v = n(48131),
    j = n(668519),
    C = n(803647),
    x = n(631863),
    E = n(705338),
    S = n(445606),
    I = n(131704),
    _ = n(944486),
    P = n(626135),
    N = n(870569),
    Z = n(981631),
    w = n(921944),
    T = n(388032),
    A = n(538700);
function R(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === Z.IIU.PLAYING &&
            (0, h.Z)(t, Z.xjy.JOIN)
        );
    }
    return !1;
}
let D = i.memo(function (e) {
        var t, l;
        let o,
            s,
            h,
            O,
            {
                stream: E,
                canGoLive: S,
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
                startAuthorization: Y,
                canStartAuthorization: q,
                hasAlreadyLinked: Q,
                connectionApp: X,
            } = e,
            { showRefreshedGoLiveModal: J } = (0, j.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: $, analyticsLocations: ee } = (0, g.ZP)(),
            et = (0, x.Z)(H, "rtc-activity-panel"),
            en = R(H, V, B),
            er = i.useCallback(() => {
                var e;
                a()(null != V, "Received null activity"),
                    P.default.track(Z.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == U ? void 0 : U.id) ? e : null,
                        application_id: V.application_id,
                    }),
                    (0, m.v)($, m.d.INVITE),
                    P.default.track(Z.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: V.application_id,
                        location: W.location,
                    }),
                    (0, d.h7)(V, !1);
            }, [V, W, $, U]),
            ei = i.useCallback(
                (e, t) => () => {
                    (0, m.v)($, m.d.LEAVE_ACTIVITY),
                        p.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [$],
            ),
            el = i.useCallback(
                (e) => () => {
                    (0, m.v)($, m.d.LEAVE_ACTIVITY), v.Z.stopFrame({ applicationId: e });
                },
                [$],
            ),
            ea = i.useCallback(() => {
                (0, C.Z)(E);
            }, [E]),
            eo = i.useCallback(() => {
                let e = null != k && (0, I.vd)(k.type) ? k : null,
                    t = null != e ? e.getGuildId() : w;
                (0, u.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("4093"), n.e("44183"), n.e("50442")]).then(
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
                                    selectSource: !!J && null != _.Z.getVoiceChannelId(),
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
            }, [k, w, U, J]),
            es = i.useRef(null),
            [ec, eu] = i.useState(!1);
        i.useEffect(
            () => () => {
                null != es.current && clearTimeout(es.current);
            },
            [],
        ),
            i.useEffect(() => {
                Q && (eu(!1), null != es.current && (clearTimeout(es.current), (es.current = null)));
            }, [Q]);
        let ed =
                (null == et ? void 0 : et.guildId) == null || null == H
                    ? null
                    : (0, r.jsx)(L, {
                          guildId: et.guildId,
                          applicationId: et.id,
                      }),
            ef =
                (null != U || null == B || (0, f.R)()) && (D || S)
                    ? (D
                          ? ((o = !1),
                            (s = () => {
                                ea(), (0, m.v)($, m.d.STREAM, !1);
                            }),
                            (h = u.g5r),
                            (O = T.intl.string(T.t.S5anIc)))
                          : G
                            ? ((o = !1),
                              (s = () => {
                                  eo(), (0, m.v)($, m.d.STREAM, !0);
                              }),
                              (h = u.hGI),
                              (O =
                                  null != U
                                      ? T.intl.formatToPlainString(T.t.AB5gTy, { game: U.name })
                                      : T.intl.string(T.t.FeUKeA)))
                            : ((o = !0),
                              (s = null),
                              (h = u.hGI),
                              (O =
                                  null != k && (0, I.vd)(k.type)
                                      ? T.intl.string(T.t.uQn9B8)
                                      : null != w
                                        ? T.intl.string(T.t.fBXEoJ)
                                        : T.intl.string(T.t.n3feNG))),
                      (0, r.jsx)("div", {
                          className: A.panelButtonContainer,
                          children: (0, r.jsx)(N.Z, {
                              tooltipText: O,
                              disabled: o,
                              onClick: s,
                              icon: h,
                          }),
                      }))
                    : null,
            eh =
                en && null == B
                    ? (0, r.jsx)(N.Z, {
                          ref: z,
                          tooltipText: T.intl.string(T.t["hC/Zey"]),
                          onClick: er,
                          icon: u.ejJ,
                      })
                    : null,
            ep =
                null == B
                    ? null
                    : (0, r.jsx)(N.Z, {
                          tooltipText: T.intl.string(T.t["R/FK4A"]),
                          onClick: ei(B.applicationId, B.location),
                          icon: u.PBZ,
                      }),
            eg =
                null == F
                    ? null
                    : (0, r.jsx)(N.Z, {
                          tooltipText: T.intl.string(T.t["R/FK4A"]),
                          onClick: el(F.applicationId),
                          icon: u.PBZ,
                      }),
            eb = null == E ? null : (0, r.jsx)(y.Z, {}),
            em =
                !q || Q
                    ? null
                    : (0, r.jsx)(M, {
                          runningGame: U,
                          startAuthorization: () => {
                              Y({ analyticsLocations: ee }) === b.ro.RPC &&
                                  (eu(!0),
                                  null != es.current && clearTimeout(es.current),
                                  (es.current = setTimeout(() => {
                                      eu(!1);
                                  }, 90000)));
                          },
                          connectionApp: X,
                          ref: K,
                      }),
            ey =
                !q || Q
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
        return null == ef && null == eh && null == ep && null == eg && null == em && null == ed
            ? null
            : (0, r.jsxs)("div", {
                  className: A.actions,
                  children: [
                      null != (t = null != ed ? ed : em) ? t : eh,
                      ef,
                      null != (l = null != ep ? ep : eg) ? l : eb,
                      ey,
                  ],
              });
    }),
    M = i.forwardRef(function (e, t) {
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
            icon: o.u,
            tooltipText: T.intl.string(T.t.sbdnpw),
        });
    });
function L(e) {
    let { applicationId: t, guildId: n } = e,
        l = i.useRef(null);
    i.useEffect(() => {
        P.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, o] = (0, O.US)([s.z.GAME_SHOP_RTC_POPOVER], w.R.ACCOUNT_NAME_ZONE, !0),
        c = i.useCallback(() => {
            (0, E.eagerNavigateToSocialLayerStorefront)({ guildId: n });
        }, [n]),
        d = i.useCallback(() => {
            (0, E.default)({ guildId: n }), o(w.L.USER_DISMISS);
        }, [n, o]),
        f = i.useCallback(() => {
            P.default.track(Z.rMx.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        h = i.useCallback(() => {
            o(w.L.USER_DISMISS);
        }, [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.Z, {
                tooltipText: T.intl.string(T.t.vyaWs7),
                onClick: f,
                onMouseDown: c,
                icon: u.EOn,
                ref: l,
            }),
            a === s.z.GAME_SHOP_RTC_POPOVER
                ? (0, r.jsx)(S.Z, {
                      onActionClick: d,
                      onRequestClose: h,
                      targetElementRef: l,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        ],
    });
}
