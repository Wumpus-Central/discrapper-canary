"use strict";
n.d(t, { W: () => H, f: () => F });
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
    g = n(688810),
    _ = n(362490),
    f = n(384059),
    x = n(359348),
    C = n(932001),
    E = n(625180),
    I = n(338771),
    N = n(212637),
    b = n(397400),
    S = n(488803),
    T = n(44621),
    y = n(823748),
    v = n(997692),
    j = n(453774),
    R = n(44724),
    O = n(849134),
    L = n(95701),
    M = n(153488),
    D = n(309010),
    G = n(954571),
    U = n(42473),
    P = n(652215),
    w = n(49999),
    k = n(985018),
    V = n(294726),
    B = n(275540);
function H(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === P.$pd.PLAYING &&
              (0, p.A)(t, P.jUm.JOIN))
    );
}
let F = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: l,
                guildId: r,
                isStreaming: c,
                channel: p,
                canStream: C,
                runningGame: R,
                embeddedActivity: O,
                frame: F,
                activity: z,
                application: X,
                analyticsContext: q,
                inviteButtonRef: J,
                accountLinkButtonRef: Q,
                startAuthorization: $,
                canStartAuthorization: Z,
                hasAlreadyLinked: ee,
                connectionApp: et,
            } = e,
            { parentAnalyticsLocation: en, analyticsLocations: ei } = (0, g.Ay)(),
            es = (0, j.A)(X, "rtc-activity-panel"),
            el = H(X, z, O),
            { enabled: ea } = T._.useConfig({ location: "activity-panel" }),
            er = (0, y.Bp)("activity-panel"),
            eo = (0, S.C$)(r ?? void 0, "activity-panel"),
            ec = (0, o.bG)([M.A], () => M.A.hasConsented(P.YAq.PERSONALIZATION)),
            ed = (0, y.TF)(R?.id, { shouldFetch: er || eo }),
            eu = ea && ec && ed,
            eh = eu && er,
            eA = eu && eo,
            ep = s.useCallback(() => {
                a()(null != z, "Received null activity"),
                    G.default.track(P.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: R?.id ?? null,
                        application_id: z.application_id,
                    }),
                    (0, f.X)(en, f.O.INVITE),
                    G.default.track(P.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: z.application_id,
                        location: q.location,
                    }),
                    (0, h.qf)(z, !1);
            }, [z, q, en, R]),
            em = s.useCallback(
                (e, t) => () => {
                    (0, f.X)(en, f.O.LEAVE_ACTIVITY),
                        m.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [en],
            ),
            eg = s.useCallback(
                (e) => () => {
                    (0, f.X)(en, f.O.LEAVE_ACTIVITY), E.A.stopFrame({ applicationId: e });
                },
                [en],
            ),
            e_ = s.useCallback(() => {
                (0, I.A)(t);
            }, [t]),
            ef = s.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("53612")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: R?.pid,
                            selectSource: null != D.A.getVoiceChannelId(),
                            analyticsLocations: ei,
                        });
                });
            }, [R, ei]),
            ex = X?.name ?? R?.name ?? "",
            eC = s.useCallback(() => {
                (0, b.pK)({ gameApplicationId: R?.id, buttonVariant: "admin" }),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                        return (t) => (0, i.jsx)(e, { gameName: ex, gameApplicationId: R?.id, ...t });
                    });
            }, [ex, R?.id]),
            eE = s.useCallback(() => {
                a()(null != r, "Received null guildId"),
                    (0, b.pK)({ gameApplicationId: R?.id, buttonVariant: "member" }),
                    (0, N.A)({ analyticsLocations: ei, analyticsLocation: q.location, guildId: r });
            }, [r, ei, q.location, R?.id]),
            eI = s.useRef(null),
            [eN, eb] = s.useState(!1);
        s.useEffect(
            () => () => {
                null != eI.current && clearTimeout(eI.current);
            },
            [],
        ),
            s.useEffect(() => {
                ee && (eb(!1), null != eI.current && (clearTimeout(eI.current), (eI.current = null)));
            }, [ee]);
        let eS = es?.guildId == null || null == X ? null : (0, i.jsx)(Y, { guildId: es.guildId, applicationId: es.id }),
            eT = eh
                ? (0, i.jsx)(W, {
                      tooltipText: k.intl.formatToPlainString(V.default.YhnUVO, { gameName: ex }),
                      onClick: eC,
                      onViewed: () => (0, b.ET)({ gameApplicationId: R?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n } = e;
                          return (0, i.jsx)(v.C, {
                              gameName: ex,
                              runningGameId: R?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  eC(), n(w.i.TAKE_ACTION);
                              },
                              onClose: () => n(w.i.USER_DISMISS),
                          });
                      },
                  })
                : eA
                  ? (0, i.jsx)(W, {
                        tooltipText: k.intl.formatToPlainString(V.default.lwwiHE, { gameName: ex }),
                        onClick: eE,
                        onViewed: () => (0, b.ET)({ gameApplicationId: R?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n } = e;
                            return (0, i.jsx)(v.D, {
                                gameName: ex,
                                runningGameId: R?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    eE(), n(w.i.TAKE_ACTION);
                                },
                                onClose: () => n(w.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            ey = (function () {
                let e, t, n;
                if ((null == R && null != O && !(0, A.f)()) || (!c && !l)) return null;
                let s = null;
                return (
                    c
                        ? ((e = !1),
                          (t = () => {
                              e_(), (0, f.X)(en, f.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (s = k.intl.string(k.t.S5anIc)))
                        : C
                          ? ((e = !1),
                            (t = () => {
                                ef(), (0, f.X)(en, f.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (s =
                                null != R
                                    ? k.intl.formatToPlainString(k.t.AB5gTy, { game: R.name })
                                    : k.intl.string(k.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != p && (0, L.gV)(p.type) && (s = k.intl.string(k.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: B.IF,
                        children: (0, i.jsx)(U.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            ev =
                el && null == O
                    ? (0, i.jsx)(U.A, { ref: J, tooltipText: k.intl.string(k.t["hC/Zey"]), onClick: ep, icon: u.DpX })
                    : null,
            ej =
                null == O
                    ? null
                    : (0, i.jsx)(U.A, {
                          tooltipText: k.intl.string(k.t["R/FK4A"]),
                          onClick: em(O.applicationId, O.location),
                          icon: u.oLl,
                      }),
            eR =
                null == F
                    ? null
                    : (0, i.jsx)(U.A, {
                          tooltipText: k.intl.string(k.t["R/FK4A"]),
                          onClick: eg(F.applicationId),
                          icon: u.oLl,
                      }),
            eO = null == t ? null : (0, i.jsx)(x.A, {}),
            eL =
                !Z || ee
                    ? null
                    : (0, i.jsx)(K, {
                          runningGame: R,
                          startAuthorization: () => {
                              $({ analyticsLocations: ei }) === _._M.RPC &&
                                  (eb(!0),
                                  null != eI.current && clearTimeout(eI.current),
                                  (eI.current = setTimeout(() => {
                                      eb(!1);
                                  }, 9e4)));
                          },
                          connectionApp: et,
                          ref: Q,
                      }),
            eM =
                !Z || ee
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: k.intl.string(k.t.ULvRFd),
                          body: k.intl.string(k.t["HJJDr+"]),
                          targetElementRef: Q,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: eN,
                          onRequestClose: () => {
                              eb(!1), null != eI.current && (clearTimeout(eI.current), (eI.current = null));
                          },
                      });
        return null == ey && null == ev && null == ej && null == eR && null == eL && null == eS && null == eT
            ? null
            : (0, i.jsxs)("div", { className: B.o1, children: [eS ?? eL ?? ev, eT, ey, ej ?? eR ?? eO, eM] });
    }),
    K = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: s, connectionApp: l } = e;
        return (0, i.jsx)(U.A, {
            ref: t,
            onClick: () => {
                G.default.track(P.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: l?.id ?? null,
                }),
                    s();
            },
            icon: r.A,
            tooltipText: k.intl.string(k.t.sbdnpw),
        });
    });
function W(e) {
    let { tooltipText: t, onClick: n, onViewed: l, renderCoachmark: a } = e,
        r = s.useRef(null),
        o = s.useRef(!1);
    s.useEffect(() => {
        o.current || ((o.current = !0), l());
    }, [l]);
    let [d, h] = (0, C.kn)([c.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK], void 0, !0),
        A = s.useCallback(() => {
            h(w.i.TAKE_ACTION), n();
        }, [h, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: B.IF,
                children: [
                    (0, i.jsx)("div", { className: B.uD, children: (0, i.jsx)("div", { className: B.Z9 }) }),
                    (0, i.jsx)(U.A, { ref: r, tooltipText: t, onClick: A, icon: u._xR }),
                ],
            }),
            null != d && a({ targetElementRef: r, markAsDismissed: h }),
        ],
    });
}
function Y(e) {
    let { applicationId: t, guildId: n } = e,
        l = s.useRef(null);
    s.useEffect(() => {
        G.default.track(P.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, r] = (0, C.kn)([c.M.GAME_SHOP_RTC_POPOVER], w.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, R.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, R.default)({ guildId: n }), r(w.i.USER_DISMISS);
        }, [n, r]),
        h = s.useCallback(() => {
            G.default.track(P.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        A = s.useCallback(() => {
            r(w.i.USER_DISMISS);
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(U.A, {
                tooltipText: k.intl.string(k.t.vyaWs7),
                onClick: h,
                onMouseDown: o,
                icon: u.U1X,
                ref: l,
            }),
            a === c.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(O.A, {
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
