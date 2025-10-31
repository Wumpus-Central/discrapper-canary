n.d(t, {
    J: () => Z,
    y: () => N,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(144269),
    s = n(907862),
    c = n(481060),
    u = n(24124),
    d = n(636449),
    p = n(620662),
    h = n(513202),
    f = n(906732),
    g = n(535139),
    m = n(522651),
    b = n(311352),
    _ = n(48131),
    y = n(668519),
    O = n(803647),
    v = n(131704),
    j = n(944486),
    C = n(626135),
    x = n(381096),
    E = n(870569),
    S = n(981631),
    I = n(388032),
    P = n(258628);
function N(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === S.IIU.PLAYING &&
            (0, p.Z)(t, S.xjy.JOIN)
        );
    }
    return !1;
}
let Z = i.memo(function (e) {
        var t;
        let l,
            a,
            p,
            Z,
            {
                stream: T,
                canGoLive: A,
                guildId: R,
                isStreaming: D,
                channel: L,
                canStream: M,
                runningGame: k,
                embeddedActivity: G,
                frame: U,
                activity: B,
                application: F,
                analyticsContext: V,
                inviteButtonRef: H,
                accountLinkButtonRef: z,
            } = e,
            { showRefreshedGoLiveModal: W } = (0, y.a)({
                location: "Activity Panel",
                autoTrackExposure: !1,
            }),
            { parentAnalyticsLocation: K } = (0, f.ZP)(),
            Y = N(F, B, G),
            q = i.useCallback(() => {
                var e;
                o()(null != B, "Received null activity"),
                    C.default.track(S.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: null != (e = null == k ? void 0 : k.id) ? e : null,
                        application_id: B.application_id,
                    }),
                    (0, m.v)(K, m.d.INVITE),
                    C.default.track(S.rMx.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: B.application_id,
                        location: V.location,
                    }),
                    (0, u.h7)(B, !1);
            }, [B, V, K, k]),
            X = i.useCallback(
                (e, t) => () => {
                    (0, m.v)(K, m.d.LEAVE_ACTIVITY),
                        h.Z.leaveActivity({
                            location: t,
                            applicationId: e,
                            showFeedback: !0,
                        });
                },
                [K],
            ),
            Q = i.useCallback(
                (e) => () => {
                    (0, m.v)(K, m.d.LEAVE_ACTIVITY), _.Z.stopFrame({ applicationId: e });
                },
                [K],
            ),
            J = i.useCallback(() => {
                (0, O.Z)(T);
            }, [T]),
            $ = i.useCallback(() => {
                let e = null != L && (0, v.vd)(L.type) ? L : null,
                    t = null != e ? e.getGuildId() : R;
                (0, c.ZDy)(async () => {
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
                                    sourcePID: null == k ? void 0 : k.pid,
                                    selectSource: !!W && null != j.Z.getVoiceChannelId(),
                                    guildId: t,
                                    analyticsLocation: S.Sbl.ACTIVITY_PANEL,
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
            }, [L, R, k, W]),
            {
                canStartAuthorization: ee,
                startAuthorization: et,
                hasAlreadyLinked: en,
                connectionApp: er,
            } = (0, g.F)(F, {
                allowedFlows: [g.r.RPC, g.r.WEB],
            }),
            ei = x.Z.useConfig({ location: "ActivityActions" }).enabled,
            el = i.useRef(null),
            [eo, ea] = i.useState(!1);
        i.useEffect(
            () => () => {
                null != el.current && clearTimeout(el.current);
            },
            [],
        ),
            i.useEffect(() => {
                en && (ea(!1), null != el.current && (clearTimeout(el.current), (el.current = null)));
            }, [en]);
        let es =
                (null != k || null == G || (0, d.R)()) && (D || A)
                    ? (D
                          ? ((l = !1),
                            (a = () => {
                                J(), (0, m.v)(K, m.d.STREAM, !1);
                            }),
                            (p = c.g5r),
                            (Z = I.intl.string(I.t.S5anIc)))
                          : M
                            ? ((l = !1),
                              (a = () => {
                                  $(), (0, m.v)(K, m.d.STREAM, !0);
                              }),
                              (p = c.hGI),
                              (Z =
                                  null != k
                                      ? I.intl.formatToPlainString(I.t.AB5gTy, { game: k.name })
                                      : I.intl.string(I.t.FeUKeA)))
                            : ((l = !0),
                              (a = null),
                              (p = c.hGI),
                              (Z =
                                  null != L && (0, v.vd)(L.type)
                                      ? I.intl.string(I.t.uQn9B8)
                                      : null != R
                                        ? I.intl.string(I.t.fBXEoJ)
                                        : I.intl.string(I.t.n3feNG))),
                      (0, r.jsx)("div", {
                          className: P.panelButtonContainer,
                          children: (0, r.jsx)(E.Z, {
                              tooltipText: Z,
                              disabled: l,
                              onClick: a,
                              icon: p,
                          }),
                      }))
                    : null,
            ec =
                Y && null == G
                    ? (0, r.jsx)(E.Z, {
                          ref: H,
                          tooltipText: I.intl.string(I.t["hC/Zey"]),
                          onClick: q,
                          icon: c.ejJ,
                      })
                    : null,
            eu =
                null == G
                    ? null
                    : (0, r.jsx)(E.Z, {
                          tooltipText: I.intl.string(I.t["R/FK4A"]),
                          onClick: X(G.applicationId, G.location),
                          icon: c.PBZ,
                      }),
            ed =
                null == U
                    ? null
                    : (0, r.jsx)(E.Z, {
                          tooltipText: I.intl.string(I.t["R/FK4A"]),
                          onClick: Q(U.applicationId),
                          icon: c.PBZ,
                      }),
            ep = null == T ? null : (0, r.jsx)(b.Z, {}),
            eh =
                ei && ee && !en
                    ? (0, r.jsx)(w, {
                          runningGame: k,
                          startAuthorization: () => {
                              ea(!0),
                                  null != el.current && clearTimeout(el.current),
                                  (el.current = setTimeout(() => {
                                      ea(!1);
                                  }, 90000)),
                                  et();
                          },
                          connectionApp: er,
                          ref: z,
                      })
                    : null,
            ef =
                ei && ee && !en
                    ? (0, r.jsx)(s.J2, {
                          title: I.intl.string(I.t.ULvRFd),
                          body: I.intl.string(I.t["HJJDr+"]),
                          targetElementRef: z,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: eo,
                          onRequestClose: () => {
                              ea(!1), null != el.current && (clearTimeout(el.current), (el.current = null));
                          },
                      })
                    : null;
        return null == es && null == ec && null == eu && null == ed && null == eh
            ? null
            : (0, r.jsxs)("div", {
                  className: P.actions,
                  children: [null != eh ? eh : ec, es, null != (t = null != eu ? eu : ed) ? t : ep, ef],
              });
    }),
    w = i.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: i, connectionApp: l } = e;
        return (0, r.jsx)(E.Z, {
            ref: t,
            onClick: () => {
                var e, t;
                C.default.track(S.rMx.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: null != (e = null == n ? void 0 : n.id) ? e : null,
                    application_id: null != (t = null == l ? void 0 : l.id) ? t : null,
                }),
                    i();
            },
            icon: a.u,
            tooltipText: I.intl.string(I.t.sbdnpw),
        });
    });
