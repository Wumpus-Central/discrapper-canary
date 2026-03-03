"use strict";
n.d(t, { W: () => F, f: () => K });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(141628),
    o = n(311907),
    c = n(554146),
    d = n(342494),
    u = n(397927),
    h = n(298990),
    A = n(646865),
    p = n(833349),
    m = n(869003),
    g = n(521588),
    _ = n(688810),
    f = n(362490),
    x = n(384059),
    C = n(359348),
    E = n(932001),
    I = n(625180),
    N = n(338771),
    S = n(212637),
    b = n(397400),
    T = n(488803),
    v = n(44621),
    y = n(823748),
    j = n(997692),
    R = n(453774),
    O = n(44724),
    L = n(849134),
    M = n(95701),
    D = n(153488),
    G = n(309010),
    U = n(954571),
    P = n(42473),
    w = n(652215),
    k = n(49999),
    V = n(985018),
    B = n(294726),
    H = n(275540);
function F(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === w.$pd.PLAYING &&
              (0, p.A)(t, w.jUm.JOIN))
    );
}
let K = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: l,
                guildId: r,
                isStreaming: c,
                channel: p,
                canStream: g,
                runningGame: E,
                embeddedActivity: O,
                frame: L,
                activity: K,
                application: q,
                analyticsContext: X,
                inviteButtonRef: J,
                accountLinkButtonRef: Q,
                startAuthorization: $,
                canStartAuthorization: Z,
                hasAlreadyLinked: ee,
                connectionApp: et,
            } = e,
            { parentAnalyticsLocation: en, analyticsLocations: ei } = (0, _.Ay)(),
            es = (0, R.A)(q, "rtc-activity-panel"),
            el = F(q, K, O),
            { enabled: ea } = v._.useConfig({ location: "activity-panel" }),
            er = (0, y.Bp)("activity-panel"),
            eo = (0, T.C$)(r ?? void 0, "activity-panel"),
            ec = (0, o.bG)([D.A], () => D.A.hasConsented(w.YAq.PERSONALIZATION)),
            ed = (0, y.TF)(E?.id, { shouldFetch: er || eo }),
            eu = ea && ec && ed,
            eh = eu && er,
            eA = eu && eo,
            ep = s.useCallback(() => {
                a()(null != K, "Received null activity"),
                    U.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: E?.id ?? null,
                        application_id: K.application_id,
                    }),
                    (0, x.X)(en, x.O.INVITE),
                    U.default.track(w.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: K.application_id,
                        location: X.location,
                    }),
                    (0, h.qf)(K, !1);
            }, [K, X, en, E]),
            em = s.useCallback(
                (e, t) => () => {
                    (0, x.X)(en, x.O.LEAVE_ACTIVITY),
                        m.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [en],
            ),
            eg = s.useCallback(
                (e) => () => {
                    (0, x.X)(en, x.O.LEAVE_ACTIVITY), I.A.stopFrame({ applicationId: e });
                },
                [en],
            ),
            e_ = s.useCallback(() => {
                (0, N.A)(t);
            }, [t]),
            ef = s.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("53612")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: E?.pid,
                            selectSource: null != G.A.getVoiceChannelId(),
                            analyticsLocations: ei,
                        });
                });
            }, [E, ei]),
            ex = q?.name ?? E?.name ?? "",
            eC = s.useCallback(() => {
                (0, b.pK)({ gameApplicationId: E?.id, buttonVariant: "admin" }),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                        return (t) => (0, i.jsx)(e, { gameName: ex, gameApplicationId: E?.id, ...t });
                    });
            }, [ex, E?.id]),
            eE = s.useCallback(() => {
                a()(null != r, "Received null guildId"),
                    (0, b.pK)({ gameApplicationId: E?.id, buttonVariant: "member" }),
                    (0, S.A)({ analyticsLocations: ei, analyticsLocation: X.location, guildId: r });
            }, [r, ei, X.location, E?.id]),
            eI = s.useRef(null),
            [eN, eS] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != eI.current && clearTimeout(eI.current);
            },
            [],
        ),
            s.useEffect(() => {
                ee && (eS(!1), null != eI.current && (clearTimeout(eI.current), (eI.current = null)));
            }, [ee]);
        let eb = es?.guildId == null || null == q ? null : (0, i.jsx)(z, { guildId: es.guildId, applicationId: es.id }),
            eT = eh
                ? (0, i.jsx)(Y, {
                      tooltipText: V.intl.formatToPlainString(B.default.YhnUVO, { gameName: ex }),
                      onClick: eC,
                      onViewed: () => (0, b.ET)({ gameApplicationId: E?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: s } = e;
                          return (0, i.jsx)(j.C, {
                              gameName: ex,
                              runningGameId: E?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  eC(), n(k.i.TAKE_ACTION), s(k.i.TAKE_ACTION);
                              },
                              onClose: () => n(k.i.USER_DISMISS),
                          });
                      },
                  })
                : eA
                  ? (0, i.jsx)(Y, {
                        tooltipText: V.intl.formatToPlainString(B.default.lwwiHE, { gameName: ex }),
                        onClick: eE,
                        onViewed: () => (0, b.ET)({ gameApplicationId: E?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: s } = e;
                            return (0, i.jsx)(j.D, {
                                gameName: ex,
                                runningGameId: E?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    eE(), n(k.i.TAKE_ACTION), s(k.i.TAKE_ACTION);
                                },
                                onClose: () => n(k.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            ev = (function () {
                let e, t, n;
                if ((null == E && null != O && !(0, A.f)()) || (!c && !l)) return null;
                let s = null;
                return (
                    c
                        ? ((e = !1),
                          (t = () => {
                              e_(), (0, x.X)(en, x.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (s = V.intl.string(V.t.S5anIc)))
                        : g
                          ? ((e = !1),
                            (t = () => {
                                ef(), (0, x.X)(en, x.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (s =
                                null != E
                                    ? V.intl.formatToPlainString(V.t.AB5gTy, { game: E.name })
                                    : V.intl.string(V.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != p && (0, M.gV)(p.type) && (s = V.intl.string(V.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: H.IF,
                        children: (0, i.jsx)(P.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            ey =
                el && null == O
                    ? (0, i.jsx)(P.A, { ref: J, tooltipText: V.intl.string(V.t["hC/Zey"]), onClick: ep, icon: u.DpX })
                    : null,
            ej =
                null == O
                    ? null
                    : (0, i.jsx)(P.A, {
                          tooltipText: V.intl.string(V.t["R/FK4A"]),
                          onClick: em(O.applicationId, O.location),
                          icon: u.oLl,
                      }),
            eR =
                null == L
                    ? null
                    : (0, i.jsx)(P.A, {
                          tooltipText: V.intl.string(V.t["R/FK4A"]),
                          onClick: eg(L.applicationId),
                          icon: u.oLl,
                      }),
            eO = null == t ? null : (0, i.jsx)(C.A, {}),
            eL =
                !Z || ee
                    ? null
                    : (0, i.jsx)(W, {
                          runningGame: E,
                          startAuthorization: () => {
                              $({ analyticsLocations: ei }) === f._M.RPC &&
                                  (eS(!0),
                                  null != eI.current && clearTimeout(eI.current),
                                  (eI.current = setTimeout(() => {
                                      eS(!1);
                                  }, 9e4)));
                          },
                          connectionApp: et,
                          ref: Q,
                      }),
            eM =
                !Z || ee
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: V.intl.string(V.t.ULvRFd),
                          body: V.intl.string(V.t["HJJDr+"]),
                          targetElementRef: Q,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: eN,
                          onRequestClose: () => {
                              eS(!1), null != eI.current && (clearTimeout(eI.current), (eI.current = null));
                          },
                      });
        return null == ev && null == ey && null == ej && null == eR && null == eL && null == eb && null == eT
            ? null
            : (0, i.jsxs)("div", { className: H.o1, children: [eb ?? eL ?? ey, eT, ev, ej ?? eR ?? eO, eM] });
    }),
    W = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: s, connectionApp: l } = e;
        return (0, i.jsx)(P.A, {
            ref: t,
            onClick: () => {
                U.default.track(w.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: l?.id ?? null,
                }),
                    s();
            },
            icon: r.A,
            tooltipText: V.intl.string(V.t.sbdnpw),
        });
    });
function Y(e) {
    let { tooltipText: t, onClick: n, onViewed: l, renderCoachmark: a } = e,
        r = s.useRef(null),
        o = s.useRef(!1);
    s.useEffect(() => {
        o.current || ((o.current = !0), l());
    }, [l]);
    let [d, h] = (0, E.kn)([c.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK], void 0, !0),
        [A, p] = (0, E.kn)([c.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        m = s.useCallback(() => {
            h(k.i.TAKE_ACTION), p(k.i.TAKE_ACTION), n();
        }, [h, p, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: H.IF,
                children: [
                    (0, i.jsx)("div", { className: H.uD, children: (0, i.jsx)("div", { className: H.Z9 }) }),
                    (0, i.jsx)(P.A, { ref: r, tooltipText: t, onClick: m, icon: u._xR }),
                    A === c.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, i.jsx)(g.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != d && a({ targetElementRef: r, markAsDismissed: h, markBadgeAsDismissed: p }),
        ],
    });
}
function z(e) {
    let { applicationId: t, guildId: n } = e,
        l = s.useRef(null);
    s.useEffect(() => {
        U.default.track(w.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, r] = (0, E.kn)([c.M.GAME_SHOP_RTC_POPOVER], k.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, O.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, O.default)({ guildId: n }), r(k.i.USER_DISMISS);
        }, [n, r]),
        h = s.useCallback(() => {
            U.default.track(w.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        A = s.useCallback(() => {
            r(k.i.USER_DISMISS);
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P.A, {
                tooltipText: V.intl.string(V.t.vyaWs7),
                onClick: h,
                onMouseDown: o,
                icon: u.U1X,
                ref: l,
            }),
            a === c.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(L.A, {
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
