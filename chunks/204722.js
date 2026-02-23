"use strict";
n.d(t, { W: () => k, f: () => V });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(141628),
    o = n(311907),
    c = n(554146),
    d = n(342494),
    u = n(397927),
    h = n(298990),
    A = n(646865),
    p = n(833349),
    g = n(869003),
    m = n(688810),
    _ = n(362490),
    f = n(384059),
    x = n(359348),
    C = n(379848),
    E = n(625180),
    I = n(338771),
    b = n(44621),
    N = n(823748),
    S = n(395019),
    T = n(453774),
    y = n(44724),
    v = n(849134),
    j = n(95701),
    R = n(153488),
    O = n(309010),
    L = n(954571),
    M = n(42473),
    D = n(652215),
    G = n(49999),
    U = n(985018),
    P = n(294726),
    w = n(275540);
function k(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === D.$pd.PLAYING &&
              (0, p.A)(t, D.jUm.JOIN))
    );
}
let V = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: l,
                isStreaming: a,
                channel: c,
                canStream: p,
                runningGame: C,
                embeddedActivity: S,
                frame: y,
                activity: v,
                application: G,
                analyticsContext: P,
                inviteButtonRef: V,
                accountLinkButtonRef: K,
                startAuthorization: W,
                canStartAuthorization: Y,
                hasAlreadyLinked: z,
                connectionApp: X,
            } = e,
            { parentAnalyticsLocation: q, analyticsLocations: J } = (0, m.Ay)(),
            Q = (0, T.A)(G, "rtc-activity-panel"),
            $ = k(G, v, S),
            { enabled: Z } = b._.useConfig({ location: "activity-panel" }),
            ee = (0, N.Bp)("activity-panel"),
            et = (0, o.bG)([R.A], () => R.A.hasConsented(D.YAq.PERSONALIZATION)),
            en = (0, N.TF)(C?.id, { shouldFetch: ee }),
            ei = Z && ee && et && en,
            es = s.useCallback(() => {
                r()(null != v, "Received null activity"),
                    L.default.track(D.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: C?.id ?? null,
                        application_id: v.application_id,
                    }),
                    (0, f.X)(q, f.O.INVITE),
                    L.default.track(D.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: v.application_id,
                        location: P.location,
                    }),
                    (0, h.qf)(v, !1);
            }, [v, P, q, C]),
            el = s.useCallback(
                (e, t) => () => {
                    (0, f.X)(q, f.O.LEAVE_ACTIVITY),
                        g.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [q],
            ),
            er = s.useCallback(
                (e) => () => {
                    (0, f.X)(q, f.O.LEAVE_ACTIVITY), E.A.stopFrame({ applicationId: e });
                },
                [q],
            ),
            ea = s.useCallback(() => {
                (0, I.A)(t);
            }, [t]),
            eo = s.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("53612")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: C?.pid,
                            selectSource: null != O.A.getVoiceChannelId(),
                            analyticsLocations: J,
                        });
                });
            }, [C, J]),
            ec = G?.name ?? C?.name ?? "",
            ed = s.useRef(null),
            [eu, eh] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != ed.current && clearTimeout(ed.current);
            },
            [],
        ),
            s.useEffect(() => {
                z && (eh(!1), null != ed.current && (clearTimeout(ed.current), (ed.current = null)));
            }, [z]);
        let eA = Q?.guildId == null || null == G ? null : (0, i.jsx)(F, { guildId: Q.guildId, applicationId: Q.id }),
            ep = ei ? (0, i.jsx)(H, { gameName: ec, runningGameId: C?.id }) : null,
            eg = (function () {
                let e, t, n;
                if ((null == C && null != S && !(0, A.f)()) || (!a && !l)) return null;
                let s = null;
                return (
                    a
                        ? ((e = !1),
                          (t = () => {
                              ea(), (0, f.X)(q, f.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (s = U.intl.string(U.t.S5anIc)))
                        : p
                          ? ((e = !1),
                            (t = () => {
                                eo(), (0, f.X)(q, f.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (s =
                                null != C
                                    ? U.intl.formatToPlainString(U.t.AB5gTy, { game: C.name })
                                    : U.intl.string(U.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != c && (0, j.gV)(c.type) && (s = U.intl.string(U.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: w.IF,
                        children: (0, i.jsx)(M.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            em =
                $ && null == S
                    ? (0, i.jsx)(M.A, { ref: V, tooltipText: U.intl.string(U.t["hC/Zey"]), onClick: es, icon: u.DpX })
                    : null,
            e_ =
                null == S
                    ? null
                    : (0, i.jsx)(M.A, {
                          tooltipText: U.intl.string(U.t["R/FK4A"]),
                          onClick: el(S.applicationId, S.location),
                          icon: u.oLl,
                      }),
            ef =
                null == y
                    ? null
                    : (0, i.jsx)(M.A, {
                          tooltipText: U.intl.string(U.t["R/FK4A"]),
                          onClick: er(y.applicationId),
                          icon: u.oLl,
                      }),
            ex = null == t ? null : (0, i.jsx)(x.A, {}),
            eC =
                !Y || z
                    ? null
                    : (0, i.jsx)(B, {
                          runningGame: C,
                          startAuthorization: () => {
                              W({ analyticsLocations: J }) === _._M.RPC &&
                                  (eh(!0),
                                  null != ed.current && clearTimeout(ed.current),
                                  (ed.current = setTimeout(() => {
                                      eh(!1);
                                  }, 9e4)));
                          },
                          connectionApp: X,
                          ref: K,
                      }),
            eE =
                !Y || z
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: U.intl.string(U.t.ULvRFd),
                          body: U.intl.string(U.t["HJJDr+"]),
                          targetElementRef: K,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: eu,
                          onRequestClose: () => {
                              eh(!1), null != ed.current && (clearTimeout(ed.current), (ed.current = null));
                          },
                      });
        return null == eg && null == em && null == e_ && null == ef && null == eC && null == eA && null == ep
            ? null
            : (0, i.jsxs)("div", { className: w.o1, children: [eA ?? eC ?? em, ep, eg, e_ ?? ef ?? ex, eE] });
    }),
    B = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: s, connectionApp: l } = e;
        return (0, i.jsx)(M.A, {
            ref: t,
            onClick: () => {
                L.default.track(D.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: l?.id ?? null,
                }),
                    s();
            },
            icon: a.A,
            tooltipText: U.intl.string(U.t.sbdnpw),
        });
    });
function H(e) {
    let { gameName: t, runningGameId: l } = e,
        r = s.useRef(null),
        a = s.useCallback(() => {
            (0, u.mMO)(async () => {
                let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                return (n) => (0, i.jsx)(e, { gameName: t, gameApplicationId: l, ...n });
            });
        }, [t, l]);
    return (0, i.jsxs)("div", {
        className: w.IF,
        children: [
            (0, i.jsx)(M.A, {
                ref: r,
                tooltipText: U.intl.formatToPlainString(P.default.YhnUVO, { gameName: t }),
                onClick: a,
                icon: u._xR,
            }),
            (0, i.jsx)(C.Ay, {
                contentTypes: [c.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK],
                children: (e) => {
                    let { visibleContent: n, markAsDismissed: s } = e;
                    return n === c.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK
                        ? (0, i.jsx)(S.A, {
                              gameName: t,
                              runningGameId: l,
                              targetElementRef: r,
                              markAsDismissed: s,
                              onClick: a,
                          })
                        : null;
                },
            }),
        ],
    });
}
function F(e) {
    let { applicationId: t, guildId: n } = e,
        l = s.useRef(null);
    s.useEffect(() => {
        L.default.track(D.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [r, a] = (0, C.kn)([c.M.GAME_SHOP_RTC_POPOVER], G.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, y.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, y.default)({ guildId: n }), a(G.i.USER_DISMISS);
        }, [n, a]),
        h = s.useCallback(() => {
            L.default.track(D.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        A = s.useCallback(() => {
            a(G.i.USER_DISMISS);
        }, [a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(M.A, {
                tooltipText: U.intl.string(U.t.vyaWs7),
                onClick: h,
                onMouseDown: o,
                icon: u.U1X,
                ref: l,
            }),
            r === c.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(v.A, {
                      onActionClick: d,
                      onRequestClose: A,
                      targetElementRef: l,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        ],
    });
}
