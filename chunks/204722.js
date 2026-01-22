n.d(t, {
    W: () => R,
    f: () => D,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(141628),
    o = n(554146),
    c = n(342494),
    u = n(397927),
    d = n(298990),
    f = n(646865),
    p = n(833349),
    h = n(869003),
    b = n(688810),
    g = n(362490),
    m = n(384059),
    A = n(359348),
    y = n(379848),
    O = n(625180),
    j = n(338771),
    v = n(453774),
    x = n(44724),
    E = n(849134),
    _ = n(95701),
    C = n(309010),
    S = n(954571),
    I = n(42473),
    N = n(652215),
    T = n(49999),
    P = n(985018),
    w = n(275540);

function R(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === N.$pd.PLAYING &&
            (0, p.A)(t, N.jUm.JOIN)
        );
    }
    return !1;
}
let D = l.memo(function (e) {
        var t, i;
        let {
                stream: s,
                canGoLive: o,
                isStreaming: p,
                channel: y,
                canStream: x,
                runningGame: E,
                embeddedActivity: T,
                frame: D,
                activity: G,
                application: k,
                analyticsContext: U,
                inviteButtonRef: V,
                accountLinkButtonRef: F,
                startAuthorization: H,
                canStartAuthorization: B,
                hasAlreadyLinked: K,
                connectionApp: W,
            } = e,
            { parentAnalyticsLocation: z, analyticsLocations: Y } = (0, b.Ay)(),
            q = (0, v.A)(k, "rtc-activity-panel"),
            X = R(k, G, T),
            J = l.useCallback(() => {
                var e;
                a()(null != G, "Received null activity"),
                    S.default.track(N.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == E ? void 0 : E.id) ? e : null,
                        application_id: G.application_id,
                    }),
                    (0, m.X)(z, m.O.INVITE),
                    S.default.track(N.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: G.application_id,
                        location: U.location,
                    }),
                    (0, d.qf)(G, !1);
            }, [G, U, z, E]),
            Q = l.useCallback(
                (e, t) => () => {
                    (0, m.X)(z, m.O.LEAVE_ACTIVITY),
                        h.A.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [z],
            ),
            Z = l.useCallback(
                (e) => () => {
                    (0, m.X)(z, m.O.LEAVE_ACTIVITY),
                        O.A.stopFrame({
                            applicationId: e,
                        });
                },
                [z],
            ),
            $ = l.useCallback(() => {
                (0, j.A)(s);
            }, [s]),
            ee = l.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("13337")]).then(n.bind(n, 648230));
                    return (t) => {
                        var n, l;
                        return (0, r.jsx)(
                            e,
                            ((n = (function (e) {
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
                            })({}, t)),
                            (l = l =
                                {
                                    sourcePID: null == E ? void 0 : E.pid,
                                    selectSource: null != C.A.getVoiceChannelId(),
                                    analyticsLocations: Y,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            n),
                        );
                    };
                });
            }, [E, Y]),
            et = l.useRef(null),
            [en, er] = l.useState(!1);
        l.useEffect(
            () => () => {
                null != et.current && clearTimeout(et.current);
            },
            [],
        ),
            l.useEffect(() => {
                K && (er(!1), null != et.current && (clearTimeout(et.current), (et.current = null)));
            }, [K]);
        let el =
                (null == q ? void 0 : q.guildId) == null || null == k
                    ? null
                    : (0, r.jsx)(L, {
                          guildId: q.guildId,
                          applicationId: q.id,
                      }),
            ei = (function () {
                let e, t, n;
                if ((null == E && null != T && !(0, f.f)()) || (!p && !o)) return null;
                let l = null;
                return (
                    p
                        ? ((e = !1),
                          (t = () => {
                              $(), (0, m.X)(z, m.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (l = P.intl.string(P.t.S5anIc)))
                        : x
                          ? ((e = !1),
                            (t = () => {
                                ee(), (0, m.X)(z, m.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (l =
                                null != E
                                    ? P.intl.formatToPlainString(P.t.AB5gTy, {
                                          game: E.name,
                                      })
                                    : P.intl.string(P.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != y && (0, _.gV)(y.type) && (l = P.intl.string(P.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: w.IF,
                        children: (0, r.jsx)(I.A, {
                            tooltipText: l,
                            disabled: e,
                            onClick: t,
                            icon: n,
                        }),
                    })
                );
            })(),
            ea =
                X && null == T
                    ? (0, r.jsx)(I.A, {
                          ref: V,
                          tooltipText: P.intl.string(P.t["hC/Zey"]),
                          onClick: J,
                          icon: u.DpX,
                      })
                    : null,
            es =
                null == T
                    ? null
                    : (0, r.jsx)(I.A, {
                          tooltipText: P.intl.string(P.t["R/FK4A"]),
                          onClick: Q(T.applicationId, T.location),
                          icon: u.oLl,
                      }),
            eo =
                null == D
                    ? null
                    : (0, r.jsx)(I.A, {
                          tooltipText: P.intl.string(P.t["R/FK4A"]),
                          onClick: Z(D.applicationId),
                          icon: u.oLl,
                      }),
            ec = null == s ? null : (0, r.jsx)(A.A, {}),
            eu =
                !B || K
                    ? null
                    : (0, r.jsx)(M, {
                          runningGame: E,
                          startAuthorization: () => {
                              H({
                                  analyticsLocations: Y,
                              }) === g._M.RPC &&
                                  (er(!0),
                                  null != et.current && clearTimeout(et.current),
                                  (et.current = setTimeout(() => {
                                      er(!1);
                                  }, 9e4)));
                          },
                          connectionApp: W,
                          ref: F,
                      }),
            ed =
                !B || K
                    ? null
                    : (0, r.jsx)(c.AM, {
                          title: P.intl.string(P.t.ULvRFd),
                          body: P.intl.string(P.t["HJJDr+"]),
                          targetElementRef: F,
                          position: "top",
                          align: "center",
                          caretConfig: {
                              align: "center",
                          },
                          shouldShow: en,
                          onRequestClose: () => {
                              er(!1), null != et.current && (clearTimeout(et.current), (et.current = null));
                          },
                      });
        return null == ei && null == ea && null == es && null == eo && null == eu && null == el
            ? null
            : (0, r.jsxs)("div", {
                  className: w.o1,
                  children: [
                      null != (t = null != el ? el : eu) ? t : ea,
                      ei,
                      null != (i = null != es ? es : eo) ? i : ec,
                      ed,
                  ],
              });
    }),
    M = l.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: l, connectionApp: i } = e;
        return (0, r.jsx)(I.A, {
            ref: t,
            onClick: () => {
                var e, t;
                S.default.track(N.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == i ? void 0 : i.id) ? t : null,
                }),
                    l();
            },
            icon: s.A,
            tooltipText: P.intl.string(P.t.sbdnpw),
        });
    });

function L(e) {
    let { applicationId: t, guildId: n } = e,
        i = l.useRef(null);
    l.useEffect(() => {
        S.default.track(N.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, {
            application_id: t,
        });
    }, [t]);
    let [a, s] = (0, y.kn)([o.M.GAME_SHOP_RTC_POPOVER], T.m.ACCOUNT_NAME_ZONE, !0),
        c = l.useCallback(() => {
            (0, x.X)({
                guildId: n,
            });
        }, [n]),
        d = l.useCallback(() => {
            (0, x.default)({
                guildId: n,
            }),
                s(T.i.USER_DISMISS);
        }, [n, s]),
        f = l.useCallback(() => {
            S.default.track(N.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, {
                application_id: t,
            }),
                d();
        }, [t, d]),
        p = l.useCallback(() => {
            s(T.i.USER_DISMISS);
        }, [s]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.A, {
                tooltipText: P.intl.string(P.t.vyaWs7),
                onClick: f,
                onMouseDown: c,
                icon: u.U1X,
                ref: i,
            }),
            a === o.M.GAME_SHOP_RTC_POPOVER
                ? (0, r.jsx)(E.A, {
                      onActionClick: d,
                      onRequestClose: p,
                      targetElementRef: i,
                      position: "top",
                      align: "center",
                      caretConfig: {
                          align: "center",
                      },
                  })
                : null,
        ],
    });
}
