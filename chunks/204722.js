"use strict";
n.d(t, { W: () => w, f: () => k });
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
let k = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: l,
                isStreaming: a,
                channel: c,
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
            { parentAnalyticsLocation: q, analyticsLocations: J } = (0, m.Ay)(),
            Q = (0, S.A)(k, "rtc-activity-panel"),
            $ = w(k, D, T),
            { enabled: Z } = b._.useConfig({ location: "activity-panel" }),
            ee = (0, N.Bp)("activity-panel"),
            et = (0, o.bG)([j.A], () => j.A.hasConsented(M.YAq.PERSONALIZATION)),
            en = (0, N.TF)(C?.id, { shouldFetch: ee }),
            ei = Z && ee && et && en,
            es = s.useCallback(() => {
                r()(null != D, "Received null activity"),
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
                            selectSource: null != R.A.getVoiceChannelId(),
                            analyticsLocations: J,
                        });
                });
            }, [C, J]),
            ec = s.useRef(null),
            [ed, eu] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != ec.current && clearTimeout(ec.current);
            },
            [],
        ),
            s.useEffect(() => {
                z && (eu(!1), null != ec.current && (clearTimeout(ec.current), (ec.current = null)));
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
                if ((null == C && null != T && !(0, A.f)()) || (!a && !l)) return null;
                let s = null;
                return (
                    a
                        ? ((e = !1),
                          (t = () => {
                              ea(), (0, f.X)(q, f.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (s = G.intl.string(G.t.S5anIc)))
                        : p
                          ? ((e = !1),
                            (t = () => {
                                eo(), (0, f.X)(q, f.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (s =
                                null != C
                                    ? G.intl.formatToPlainString(G.t.AB5gTy, { game: C.name })
                                    : G.intl.string(G.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != c && (0, y.gV)(c.type) && (s = G.intl.string(G.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: P.IF,
                        children: (0, i.jsx)(L.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            eg =
                $ && null == T
                    ? (0, i.jsx)(L.A, { ref: F, tooltipText: G.intl.string(G.t["hC/Zey"]), onClick: es, icon: u.DpX })
                    : null,
            em =
                null == T
                    ? null
                    : (0, i.jsx)(L.A, {
                          tooltipText: G.intl.string(G.t["R/FK4A"]),
                          onClick: el(T.applicationId, T.location),
                          icon: u.oLl,
                      }),
            e_ =
                null == v
                    ? null
                    : (0, i.jsx)(L.A, {
                          tooltipText: G.intl.string(G.t["R/FK4A"]),
                          onClick: er(v.applicationId),
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
                                  null != ec.current && clearTimeout(ec.current),
                                  (ec.current = setTimeout(() => {
                                      eu(!1);
                                  }, 9e4)));
                          },
                          connectionApp: X,
                          ref: K,
                      }),
            eC =
                !Y || z
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: G.intl.string(G.t.ULvRFd),
                          body: G.intl.string(G.t["HJJDr+"]),
                          targetElementRef: K,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: ed,
                          onRequestClose: () => {
                              eu(!1), null != ec.current && (clearTimeout(ec.current), (ec.current = null));
                          },
                      });
        return null == ep && null == eg && null == em && null == e_ && null == ex && null == eh && null == eA
            ? null
            : (0, i.jsxs)("div", { className: P.o1, children: [eh ?? ex ?? eg, eA, ep, em ?? e_ ?? ef, eC] });
    }),
    V = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: s, connectionApp: l } = e;
        return (0, i.jsx)(L.A, {
            ref: t,
            onClick: () => {
                O.default.track(M.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: l?.id ?? null,
                }),
                    s();
            },
            icon: a.A,
            tooltipText: G.intl.string(G.t.sbdnpw),
        });
    });
function B(e) {
    let { applicationId: t, guildId: n } = e,
        l = s.useRef(null);
    s.useEffect(() => {
        O.default.track(M.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [r, a] = (0, C.kn)([c.M.GAME_SHOP_RTC_POPOVER], D.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, T.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, T.default)({ guildId: n }), a(D.i.USER_DISMISS);
        }, [n, a]),
        h = s.useCallback(() => {
            O.default.track(M.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        A = s.useCallback(() => {
            a(D.i.USER_DISMISS);
        }, [a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(L.A, {
                tooltipText: G.intl.string(G.t.vyaWs7),
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
