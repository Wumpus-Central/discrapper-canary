n.d(t, {
    J: () => N,
    y: () => I,
});
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(144269),
    s = n(481060),
    c = n(24124),
    u = n(434650),
    d = n(636449),
    p = n(620662),
    f = n(513202),
    h = n(906732),
    g = n(20471),
    m = n(522651),
    b = n(311352),
    O = n(668519),
    y = n(803647),
    _ = n(131704),
    v = n(944486),
    j = n(626135),
    x = n(381096),
    C = n(870569),
    E = n(981631),
    S = n(388032),
    P = n(258628);
function I(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === E.IIU.PLAYING &&
            (0, p.Z)(t, E.xjy.JOIN)
        );
    }
    return !1;
}
let N = i.memo(function (e) {
        let t,
            l,
            a,
            u,
            {
                stream: p,
                canGoLive: g,
                guildId: x,
                isStreaming: N,
                channel: w,
                canStream: T,
                runningGame: A,
                embeddedActivity: R,
                activity: D,
                application: M,
                analyticsContext: L,
            } = e,
            { showRefreshedGoLiveModal: k } = (0, O.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: U } = (0, h.ZP)(),
            G = I(M, D, R),
            B = i.useCallback(() => {
                var e;
                o()(null != D, "Received null activity"),
                    j.default.track(E.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == A ? void 0 : A.id) ? e : null,
                        application_id: D.application_id,
                    }),
                    (0, m.v)(U, m.d.INVITE),
                    j.default.track(E.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: D.application_id,
                        location: L.location,
                    }),
                    (0, c.h7)(D, !1);
            }, [D, L, U, A]),
            V = i.useCallback(
                (e, t) => () => {
                    (0, m.v)(U, m.d.LEAVE_ACTIVITY),
                        f.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [U],
            ),
            F = i.useCallback(() => {
                (0, y.Z)(p);
            }, [p]),
            H = i.useCallback(() => {
                let e = null != w && (0, _.vd)(w.type) ? w : null,
                    t = null != e ? e.getGuildId() : x;
                (0, s.ZDy)(async () => {
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
                                    sourcePID: null == A ? void 0 : A.pid,
                                    selectSource: !!k && null != v.Z.getVoiceChannelId(),
                                    guildId: t,
                                    analyticsLocation: E.Sbl.ACTIVITY_PANEL,
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
            }, [w, x, A, k]),
            z =
                (null != A || null == R || (0, d.R)()) && (N || g)
                    ? (N
                          ? ((t = !1),
                            (l = () => {
                                F(), (0, m.v)(U, m.d.STREAM, !1);
                            }),
                            (a = s.g5r),
                            (u = S.intl.string(S.t.S5anIS)))
                          : T
                            ? ((t = !1),
                              (l = () => {
                                  H(), (0, m.v)(U, m.d.STREAM, !0);
                              }),
                              (a = s.hGI),
                              (u =
                                  null != A
                                      ? S.intl.formatToPlainString(S.t.AB5gT0, { game: A.name })
                                      : S.intl.string(S.t.FeUKeH)))
                            : ((t = !0),
                              (l = null),
                              (a = s.hGI),
                              (u =
                                  null != w && (0, _.vd)(w.type)
                                      ? S.intl.string(S.t.uQn9Bw)
                                      : null != x
                                        ? S.intl.string(S.t.fBXEoK)
                                        : S.intl.string(S.t.n3feND))),
                      (0, r.jsx)("div", {
                          className: P.panelButtonContainer,
                          children: (0, r.jsx)(C.Z, {
                              tooltipText: u,
                              disabled: t,
                              onClick: l,
                              icon: a,
                          }),
                      }))
                    : null,
            W =
                G && null == R
                    ? (0, r.jsx)(C.Z, {
                          tooltipText: S.intl.string(S.t["hC/Ze3"]),
                          onClick: B,
                          icon: s.ejJ,
                      })
                    : null,
            K =
                null == R
                    ? null
                    : (0, r.jsx)(C.Z, {
                          tooltipText: S.intl.string(S.t["R/FK4O"]),
                          onClick: V(R.applicationId, R.location),
                          icon: s.PBZ,
                      }),
            Y = null == p ? null : (0, r.jsx)(b.Z, {}),
            q = (0, r.jsx)(Z, {
                runningGame: A,
                application: M,
            });
        return null == z && null == W && null == K
            ? null
            : (0, r.jsxs)("div", {
                  className: P.actions,
                  children: [q, z, W, null != K ? K : Y],
              });
    }),
    Z = (e) => {
        let { runningGame: t, application: n } = e,
            { canStartAuthorization: i, startAuthorization: l, hasAlreadyLinked: o, connectionApp: s } = (0, g.F)(n),
            c = x.Z.useConfig({ location: "ActivityActions" }).enabled,
            d = (0, u.O)((e) => {
                if (e && null != s) {
                    var n;
                    j.default.track(E.rMx.ACTIVITY_PANEL_SDK_LINK_VIEWED, {
                        game_id: null != (n = null == t ? void 0 : t.id) ? n : null,
                        application_id: s.id,
                    });
                }
            });
        return c && i && !o
            ? (0, r.jsx)(C.Z, {
                  ref: d,
                  onClick: () => {
                      var e, n;
                      j.default.track(E.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                          action_type: "link_account",
                          game_id: null != (e = null == t ? void 0 : t.id) ? e : null,
                          application_id: null != (n = null == s ? void 0 : s.id) ? n : null,
                      }),
                          l();
                  },
                  icon: a.u,
                  tooltipText: S.intl.string(S.t.sbdnp6),
              })
            : null;
    };
