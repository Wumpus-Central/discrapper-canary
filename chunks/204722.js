n.d(t, { W: () => w, f: () => k });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(141628),
    o = n(311907),
    d = n(554146),
    c = n(342494),
    u = n(397927),
    h = n(298990),
    A = n(646865),
    p = n(833349),
    m = n(869003),
    g = n(688810),
    _ = n(362490),
    f = n(384059),
    x = n(359348),
    C = n(379848),
    E = n(625180),
    I = n(338771),
    b = n(44621),
    N = n(823748),
    S = n(453774),
    T = n(44724),
    v = n(849134),
    y = n(95701),
    j = n(153488),
    R = n(309010),
    O = n(954571),
    L = n(42473),
    M = n(652215),
    D = n(49999),
    G = n(985018),
    U = n(294726),
    P = n(275540);
function w(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === M.$pd.PLAYING &&
              (0, p.A)(t, M.jUm.JOIN))
    );
}
let k = l.memo(function (e) {
        let {
                stream: t,
                canGoLive: s,
                isStreaming: r,
                channel: d,
                canStream: p,
                runningGame: C,
                embeddedActivity: T,
                frame: v,
                activity: D,
                application: k,
                analyticsContext: H,
                inviteButtonRef: F,
                accountLinkButtonRef: K,
                startAuthorization: W,
                canStartAuthorization: Y,
                hasAlreadyLinked: z,
                connectionApp: X,
            } = e,
            { parentAnalyticsLocation: q, analyticsLocations: J } = (0, g.Ay)(),
            Q = (0, S.A)(k, "rtc-activity-panel"),
            $ = w(k, D, T),
            { enabled: Z } = b._.useConfig({ location: "activity-panel" }),
            ee = (0, N.Bp)("activity-panel"),
            et = (0, o.bG)([j.A], () => j.A.hasConsented(M.YAq.PERSONALIZATION)),
            en = (0, N.TF)(C?.id, { shouldFetch: ee }),
            ei = Z && ee && et && en,
            el = l.useCallback(() => {
                a()(null != D, "Received null activity"),
                    O.default.track(M.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: C?.id ?? null,
                        application_id: D.application_id,
                    }),
                    (0, f.X)(q, f.O.INVITE),
                    O.default.track(M.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: D.application_id,
                        location: H.location,
                    }),
                    (0, h.qf)(D, !1);
            }, [D, H, q, C]),
            es = l.useCallback(
                (e, t) => () => {
                    (0, f.X)(q, f.O.LEAVE_ACTIVITY),
                        m.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [q],
            ),
            ea = l.useCallback(
                (e) => () => {
                    (0, f.X)(q, f.O.LEAVE_ACTIVITY), E.A.stopFrame({ applicationId: e });
                },
                [q],
            ),
            er = l.useCallback(() => {
                (0, I.A)(t);
            }, [t]),
            eo = l.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("53612")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: C?.pid,
                            selectSource: null != R.A.getVoiceChannelId(),
                            analyticsLocations: J,
                        });
                });
            }, [C, J]),
            ed = l.useRef(null),
            [ec, eu] = l.useState(!1);
        l.useEffect(
            () => () => {
                null != ed.current && clearTimeout(ed.current);
            },
            [],
        ),
            l.useEffect(() => {
                z && (eu(!1), null != ed.current && (clearTimeout(ed.current), (ed.current = null)));
            }, [z]);
        let eh = Q?.guildId == null || null == k ? null : (0, i.jsx)(B, { guildId: Q.guildId, applicationId: Q.id }),
            eA = (function () {
                if (!ei) return null;
                let e = k?.name ?? C?.name ?? "";
                return (0, i.jsx)("div", {
                    className: P.IF,
                    children: (0, i.jsx)(L.A, {
                        tooltipText: G.intl.formatToPlainString(U.default.YhnUVO, { gameName: e }),
                        onClick: () => {},
                        icon: u._xR,
                    }),
                });
            })(),
            ep = (function () {
                let e, t, n;
                if ((null == C && null != T && !(0, A.f)()) || (!r && !s)) return null;
                let l = null;
                return (
                    r
                        ? ((e = !1),
                          (t = () => {
                              er(), (0, f.X)(q, f.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (l = G.intl.string(G.t.S5anIc)))
                        : p
                          ? ((e = !1),
                            (t = () => {
                                eo(), (0, f.X)(q, f.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (l =
                                null != C
                                    ? G.intl.formatToPlainString(G.t.AB5gTy, { game: C.name })
                                    : G.intl.string(G.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != d && (0, y.gV)(d.type) && (l = G.intl.string(G.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: P.IF,
                        children: (0, i.jsx)(L.A, { tooltipText: l, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            em =
                $ && null == T
                    ? (0, i.jsx)(L.A, { ref: F, tooltipText: G.intl.string(G.t["hC/Zey"]), onClick: el, icon: u.DpX })
                    : null,
            eg =
                null == T
                    ? null
                    : (0, i.jsx)(L.A, {
                          tooltipText: G.intl.string(G.t["R/FK4A"]),
                          onClick: es(T.applicationId, T.location),
                          icon: u.oLl,
                      }),
            e_ =
                null == v
                    ? null
                    : (0, i.jsx)(L.A, {
                          tooltipText: G.intl.string(G.t["R/FK4A"]),
                          onClick: ea(v.applicationId),
                          icon: u.oLl,
                      }),
            ef = null == t ? null : (0, i.jsx)(x.A, {}),
            ex =
                !Y || z
                    ? null
                    : (0, i.jsx)(V, {
                          runningGame: C,
                          startAuthorization: () => {
                              W({ analyticsLocations: J }) === _._M.RPC &&
                                  (eu(!0),
                                  null != ed.current && clearTimeout(ed.current),
                                  (ed.current = setTimeout(() => {
                                      eu(!1);
                                  }, 9e4)));
                          },
                          connectionApp: X,
                          ref: K,
                      }),
            eC =
                !Y || z
                    ? null
                    : (0, i.jsx)(c.AM, {
                          title: G.intl.string(G.t.ULvRFd),
                          body: G.intl.string(G.t["HJJDr+"]),
                          targetElementRef: K,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: ec,
                          onRequestClose: () => {
                              eu(!1), null != ed.current && (clearTimeout(ed.current), (ed.current = null));
                          },
                      });
        return null == ep && null == em && null == eg && null == e_ && null == ex && null == eh && null == eA
            ? null
            : (0, i.jsxs)("div", { className: P.o1, children: [eh ?? ex ?? em, eA, ep, eg ?? e_ ?? ef, eC] });
    }),
    V = l.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: l, connectionApp: s } = e;
        return (0, i.jsx)(L.A, {
            ref: t,
            onClick: () => {
                O.default.track(M.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    l();
            },
            icon: r.A,
            tooltipText: G.intl.string(G.t.sbdnpw),
        });
    });
function B(e) {
    let { applicationId: t, guildId: n } = e,
        s = l.useRef(null);
    l.useEffect(() => {
        O.default.track(M.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, r] = (0, C.kn)([d.M.GAME_SHOP_RTC_POPOVER], D.m.ACCOUNT_NAME_ZONE, !0),
        o = l.useCallback(() => {
            (0, T.X)({ guildId: n });
        }, [n]),
        c = l.useCallback(() => {
            (0, T.default)({ guildId: n }), r(D.i.USER_DISMISS);
        }, [n, r]),
        h = l.useCallback(() => {
            O.default.track(M.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), c();
        }, [t, c]),
        A = l.useCallback(() => {
            r(D.i.USER_DISMISS);
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(L.A, {
                tooltipText: G.intl.string(G.t.vyaWs7),
                onClick: h,
                onMouseDown: o,
                icon: u.U1X,
                ref: s,
            }),
            a === d.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(v.A, {
                      onActionClick: c,
                      onRequestClose: A,
                      targetElementRef: s,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        ],
    });
}
