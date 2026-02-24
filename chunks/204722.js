"use strict";
n.d(t, { W: () => B, f: () => H });
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
    b = n(212637),
    N = n(488803),
    S = n(44621),
    T = n(823748),
    y = n(997692),
    v = n(453774),
    j = n(44724),
    R = n(849134),
    O = n(95701),
    L = n(153488),
    M = n(309010),
    D = n(954571),
    G = n(42473),
    U = n(652215),
    P = n(49999),
    w = n(985018),
    k = n(294726),
    V = n(275540);
function B(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === U.$pd.PLAYING &&
              (0, p.A)(t, U.jUm.JOIN))
    );
}
let H = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: l,
                guildId: a,
                isStreaming: c,
                channel: p,
                canStream: C,
                runningGame: j,
                embeddedActivity: R,
                frame: H,
                activity: Y,
                application: z,
                analyticsContext: X,
                inviteButtonRef: q,
                accountLinkButtonRef: J,
                startAuthorization: Q,
                canStartAuthorization: $,
                hasAlreadyLinked: Z,
                connectionApp: ee,
            } = e,
            { parentAnalyticsLocation: et, analyticsLocations: en } = (0, m.Ay)(),
            ei = (0, v.A)(z, "rtc-activity-panel"),
            es = B(z, Y, R),
            { enabled: el } = S._.useConfig({ location: "activity-panel" }),
            er = (0, T.Bp)("activity-panel"),
            ea = (0, N.C$)(a ?? void 0, "activity-panel"),
            eo = (0, o.bG)([L.A], () => L.A.hasConsented(U.YAq.PERSONALIZATION)),
            ec = (0, T.TF)(j?.id, { shouldFetch: er || ea }),
            ed = el && eo && ec,
            eu = ed && er,
            eh = ed && ea,
            eA = s.useCallback(() => {
                r()(null != Y, "Received null activity"),
                    D.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: j?.id ?? null,
                        application_id: Y.application_id,
                    }),
                    (0, f.X)(et, f.O.INVITE),
                    D.default.track(U.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: Y.application_id,
                        location: X.location,
                    }),
                    (0, h.qf)(Y, !1);
            }, [Y, X, et, j]),
            ep = s.useCallback(
                (e, t) => () => {
                    (0, f.X)(et, f.O.LEAVE_ACTIVITY),
                        g.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [et],
            ),
            eg = s.useCallback(
                (e) => () => {
                    (0, f.X)(et, f.O.LEAVE_ACTIVITY), E.A.stopFrame({ applicationId: e });
                },
                [et],
            ),
            em = s.useCallback(() => {
                (0, I.A)(t);
            }, [t]),
            e_ = s.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("53612")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: j?.pid,
                            selectSource: null != M.A.getVoiceChannelId(),
                            analyticsLocations: en,
                        });
                });
            }, [j, en]),
            ef = z?.name ?? j?.name ?? "",
            ex = s.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                    return (t) => (0, i.jsx)(e, { gameName: ef, gameApplicationId: j?.id, ...t });
                });
            }, [ef, j?.id]),
            eC = s.useCallback(() => {
                r()(null != a, "Received null guildId"),
                    (0, b.A)({ analyticsLocations: en, analyticsLocation: X.location, guildId: a });
            }, [a, en, X.location]),
            eE = s.useRef(null),
            [eI, eb] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != eE.current && clearTimeout(eE.current);
            },
            [],
        ),
            s.useEffect(() => {
                Z && (eb(!1), null != eE.current && (clearTimeout(eE.current), (eE.current = null)));
            }, [Z]);
        let eN = ei?.guildId == null || null == z ? null : (0, i.jsx)(W, { guildId: ei.guildId, applicationId: ei.id }),
            eS = eu
                ? (0, i.jsx)(K, {
                      tooltipText: w.intl.formatToPlainString(k.default.YhnUVO, { gameName: ef }),
                      onClick: ex,
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n } = e;
                          return (0, i.jsx)(y.C, {
                              gameName: ef,
                              runningGameId: j?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  ex(), n(P.i.TAKE_ACTION);
                              },
                              onClose: () => n(P.i.USER_DISMISS),
                          });
                      },
                  })
                : eh
                  ? (0, i.jsx)(K, {
                        tooltipText: w.intl.formatToPlainString(k.default.lwwiHE, { gameName: ef }),
                        onClick: eC,
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n } = e;
                            return (0, i.jsx)(y.D, {
                                gameName: ef,
                                runningGameId: j?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    eC(), n(P.i.TAKE_ACTION);
                                },
                                onClose: () => n(P.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            eT = (function () {
                let e, t, n;
                if ((null == j && null != R && !(0, A.f)()) || (!c && !l)) return null;
                let s = null;
                return (
                    c
                        ? ((e = !1),
                          (t = () => {
                              em(), (0, f.X)(et, f.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (s = w.intl.string(w.t.S5anIc)))
                        : C
                          ? ((e = !1),
                            (t = () => {
                                e_(), (0, f.X)(et, f.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (s =
                                null != j
                                    ? w.intl.formatToPlainString(w.t.AB5gTy, { game: j.name })
                                    : w.intl.string(w.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != p && (0, O.gV)(p.type) && (s = w.intl.string(w.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: V.IF,
                        children: (0, i.jsx)(G.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            ey =
                es && null == R
                    ? (0, i.jsx)(G.A, { ref: q, tooltipText: w.intl.string(w.t["hC/Zey"]), onClick: eA, icon: u.DpX })
                    : null,
            ev =
                null == R
                    ? null
                    : (0, i.jsx)(G.A, {
                          tooltipText: w.intl.string(w.t["R/FK4A"]),
                          onClick: ep(R.applicationId, R.location),
                          icon: u.oLl,
                      }),
            ej =
                null == H
                    ? null
                    : (0, i.jsx)(G.A, {
                          tooltipText: w.intl.string(w.t["R/FK4A"]),
                          onClick: eg(H.applicationId),
                          icon: u.oLl,
                      }),
            eR = null == t ? null : (0, i.jsx)(x.A, {}),
            eO =
                !$ || Z
                    ? null
                    : (0, i.jsx)(F, {
                          runningGame: j,
                          startAuthorization: () => {
                              Q({ analyticsLocations: en }) === _._M.RPC &&
                                  (eb(!0),
                                  null != eE.current && clearTimeout(eE.current),
                                  (eE.current = setTimeout(() => {
                                      eb(!1);
                                  }, 9e4)));
                          },
                          connectionApp: ee,
                          ref: J,
                      }),
            eL =
                !$ || Z
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: w.intl.string(w.t.ULvRFd),
                          body: w.intl.string(w.t["HJJDr+"]),
                          targetElementRef: J,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: eI,
                          onRequestClose: () => {
                              eb(!1), null != eE.current && (clearTimeout(eE.current), (eE.current = null));
                          },
                      });
        return null == eT && null == ey && null == ev && null == ej && null == eO && null == eN && null == eS
            ? null
            : (0, i.jsxs)("div", { className: V.o1, children: [eN ?? eO ?? ey, eS, eT, ev ?? ej ?? eR, eL] });
    }),
    F = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: s, connectionApp: l } = e;
        return (0, i.jsx)(G.A, {
            ref: t,
            onClick: () => {
                D.default.track(U.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: l?.id ?? null,
                }),
                    s();
            },
            icon: a.A,
            tooltipText: w.intl.string(w.t.sbdnpw),
        });
    });
function K(e) {
    let { tooltipText: t, onClick: n, renderCoachmark: l } = e,
        r = s.useRef(null),
        [a, o] = (0, C.kn)([c.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK], void 0, !0),
        d = s.useCallback(() => {
            o(P.i.TAKE_ACTION), n();
        }, [o, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: V.IF,
                children: (0, i.jsx)(G.A, { ref: r, tooltipText: t, onClick: d, icon: u._xR }),
            }),
            null != a && l({ targetElementRef: r, markAsDismissed: o }),
        ],
    });
}
function W(e) {
    let { applicationId: t, guildId: n } = e,
        l = s.useRef(null);
    s.useEffect(() => {
        D.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [r, a] = (0, C.kn)([c.M.GAME_SHOP_RTC_POPOVER], P.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, j.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, j.default)({ guildId: n }), a(P.i.USER_DISMISS);
        }, [n, a]),
        h = s.useCallback(() => {
            D.default.track(U.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        A = s.useCallback(() => {
            a(P.i.USER_DISMISS);
        }, [a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(G.A, {
                tooltipText: w.intl.string(w.t.vyaWs7),
                onClick: h,
                onMouseDown: o,
                icon: u.U1X,
                ref: l,
            }),
            r === c.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(R.A, {
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
