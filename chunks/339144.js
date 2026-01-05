n.d(t, {
    J: () => R,
    y: () => A,
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
    j = n(803647),
    C = n(631863),
    x = n(705338),
    E = n(445606),
    S = n(131704),
    _ = n(944486),
    I = n(626135),
    P = n(870569),
    N = n(981631),
    Z = n(921944),
    w = n(388032),
    T = n(538700);
function A(e, t, n) {
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
let R = i.memo(function (e) {
        var t, l;
        let {
                stream: o,
                canGoLive: s,
                isStreaming: h,
                channel: O,
                canStream: x,
                runningGame: E,
                embeddedActivity: Z,
                frame: R,
                activity: L,
                application: k,
                analyticsContext: G,
                inviteButtonRef: U,
                accountLinkButtonRef: B,
                startAuthorization: F,
                canStartAuthorization: V,
                hasAlreadyLinked: H,
                connectionApp: W,
            } = e,
            { parentAnalyticsLocation: z, analyticsLocations: K } = (0, g.ZP)(),
            Y = (0, C.Z)(k, "rtc-activity-panel"),
            q = A(k, L, Z),
            Q = i.useCallback(() => {
                var e;
                a()(null != L, "Received null activity"),
                    I.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == E ? void 0 : E.id) ? e : null,
                        application_id: L.application_id,
                    }),
                    (0, m.v)(z, m.d.INVITE),
                    I.default.track(N.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: L.application_id,
                        location: G.location,
                    }),
                    (0, d.h7)(L, !1);
            }, [L, G, z, E]),
            X = i.useCallback(
                (e, t) => () => {
                    (0, m.v)(z, m.d.LEAVE_ACTIVITY),
                        p.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [z],
            ),
            J = i.useCallback(
                (e) => () => {
                    (0, m.v)(z, m.d.LEAVE_ACTIVITY), v.Z.stopFrame({ applicationId: e });
                },
                [z],
            ),
            $ = i.useCallback(() => {
                (0, j.Z)(o);
            }, [o]),
            ee = i.useCallback(() => {
                (0, u.ZDy)(async () => {
                    let { default: e } = await Promise.all([n.e("46746"), n.e("95200")]).then(n.bind(n, 60594));
                    return (t) => {
                        var n, i;
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
                            (i = i =
                                {
                                    sourcePID: null == E ? void 0 : E.pid,
                                    selectSource: null != _.Z.getVoiceChannelId(),
                                    analyticsLocations: K,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            n),
                        );
                    };
                });
            }, [E, K]),
            et = i.useRef(null),
            [en, er] = i.useState(!1);
        i.useEffect(
            () => () => {
                null != et.current && clearTimeout(et.current);
            },
            [],
        ),
            i.useEffect(() => {
                H && (er(!1), null != et.current && (clearTimeout(et.current), (et.current = null)));
            }, [H]);
        let ei =
                (null == Y ? void 0 : Y.guildId) == null || null == k
                    ? null
                    : (0, r.jsx)(M, {
                          guildId: Y.guildId,
                          applicationId: Y.id,
                      }),
            el = (function () {
                let e, t, n;
                if ((null == E && null != Z && !(0, f.R)()) || (!h && !s)) return null;
                let i = null;
                return (
                    h
                        ? ((e = !1),
                          (t = () => {
                              $(), (0, m.v)(z, m.d.STREAM, !1);
                          }),
                          (n = u.g5r),
                          (i = w.intl.string(w.t.S5anIc)))
                        : x
                          ? ((e = !1),
                            (t = () => {
                                ee(), (0, m.v)(z, m.d.STREAM, !0);
                            }),
                            (n = u.hGI),
                            (i =
                                null != E
                                    ? w.intl.formatToPlainString(w.t.AB5gTy, { game: E.name })
                                    : w.intl.string(w.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.hGI),
                            null != O && (0, S.vd)(O.type) && (i = w.intl.string(w.t.uQn9B8))),
                    (0, r.jsx)("div", {
                        className: T.panelButtonContainer,
                        children: (0, r.jsx)(P.Z, {
                            tooltipText: i,
                            disabled: e,
                            onClick: t,
                            icon: n,
                        }),
                    })
                );
            })(),
            ea =
                q && null == Z
                    ? (0, r.jsx)(P.Z, {
                          ref: U,
                          tooltipText: w.intl.string(w.t["hC/Zey"]),
                          onClick: Q,
                          icon: u.ejJ,
                      })
                    : null,
            eo =
                null == Z
                    ? null
                    : (0, r.jsx)(P.Z, {
                          tooltipText: w.intl.string(w.t["R/FK4A"]),
                          onClick: X(Z.applicationId, Z.location),
                          icon: u.PBZ,
                      }),
            es =
                null == R
                    ? null
                    : (0, r.jsx)(P.Z, {
                          tooltipText: w.intl.string(w.t["R/FK4A"]),
                          onClick: J(R.applicationId),
                          icon: u.PBZ,
                      }),
            ec = null == o ? null : (0, r.jsx)(y.Z, {}),
            eu =
                !V || H
                    ? null
                    : (0, r.jsx)(D, {
                          runningGame: E,
                          startAuthorization: () => {
                              F({ analyticsLocations: K }) === b.ro.RPC &&
                                  (er(!0),
                                  null != et.current && clearTimeout(et.current),
                                  (et.current = setTimeout(() => {
                                      er(!1);
                                  }, 90000)));
                          },
                          connectionApp: W,
                          ref: B,
                      }),
            ed =
                !V || H
                    ? null
                    : (0, r.jsx)(c.J2, {
                          title: w.intl.string(w.t.ULvRFd),
                          body: w.intl.string(w.t["HJJDr+"]),
                          targetElementRef: B,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: en,
                          onRequestClose: () => {
                              er(!1), null != et.current && (clearTimeout(et.current), (et.current = null));
                          },
                      });
        return null == el && null == ea && null == eo && null == es && null == eu && null == ei
            ? null
            : (0, r.jsxs)("div", {
                  className: T.actions,
                  children: [
                      null != (t = null != ei ? ei : eu) ? t : ea,
                      el,
                      null != (l = null != eo ? eo : es) ? l : ec,
                      ed,
                  ],
              });
    }),
    D = i.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: l } = e;
        return (0, r.jsx)(P.Z, {
            ref: t,
            onClick: () => {
                var e, t;
                I.default.track(N.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == l ? void 0 : l.id) ? t : null,
                }),
                    i();
            },
            icon: o.u,
            tooltipText: w.intl.string(w.t.sbdnpw),
        });
    });
function M(e) {
    let { applicationId: t, guildId: n } = e,
        l = i.useRef(null);
    i.useEffect(() => {
        I.default.track(N.rMx.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, o] = (0, O.US)([s.z.GAME_SHOP_RTC_POPOVER], Z.R.ACCOUNT_NAME_ZONE, !0),
        c = i.useCallback(() => {
            (0, x.eagerNavigateToSocialLayerStorefront)({ guildId: n });
        }, [n]),
        d = i.useCallback(() => {
            (0, x.default)({ guildId: n }), o(Z.L.USER_DISMISS);
        }, [n, o]),
        f = i.useCallback(() => {
            I.default.track(N.rMx.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        h = i.useCallback(() => {
            o(Z.L.USER_DISMISS);
        }, [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(P.Z, {
                tooltipText: w.intl.string(w.t.vyaWs7),
                onClick: f,
                onMouseDown: c,
                icon: u.EOn,
                ref: l,
            }),
            a === s.z.GAME_SHOP_RTC_POPOVER
                ? (0, r.jsx)(E.Z, {
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
