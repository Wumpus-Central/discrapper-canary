"use strict";
n.d(t, { W: () => W, f: () => z });
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
    A = n(942857),
    m = n(646865),
    p = n(833349),
    g = n(869003),
    _ = n(521588),
    f = n(688810),
    x = n(362490),
    C = n(384059),
    E = n(359348),
    I = n(932001),
    N = n(625180),
    b = n(338771),
    S = n(212637),
    T = n(397400),
    v = n(488803),
    y = n(44621),
    j = n(823748),
    R = n(997692),
    O = n(201805),
    L = n(453774),
    M = n(44724),
    D = n(849134),
    G = n(95701),
    U = n(153488),
    P = n(309010),
    w = n(954571),
    k = n(42473),
    V = n(652215),
    B = n(49999),
    H = n(654487),
    F = n(985018),
    K = n(294726),
    Y = n(275540);
function W(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === V.$pd.PLAYING &&
              (0, p.A)(t, V.jUm.JOIN))
    );
}
let z = s.memo(function (e) {
        let {
                stream: t,
                canGoLive: l,
                guildId: a,
                isStreaming: c,
                channel: A,
                canStream: p,
                runningGame: _,
                embeddedActivity: I,
                frame: O,
                activity: M,
                application: D,
                analyticsContext: H,
                inviteButtonRef: z,
                accountLinkButtonRef: J,
                startAuthorization: $,
                canStartAuthorization: Z,
                hasAlreadyLinked: ee,
                connectionApp: et,
            } = e,
            { parentAnalyticsLocation: en, analyticsLocations: ei } = (0, f.Ay)(),
            es = (0, L.A)(D),
            el = W(D, M, I),
            { enabled: er } = y._.useConfig({ location: "activity-panel" }),
            ea = (0, j.Bp)("activity-panel"),
            eo = (0, v.C$)(a ?? void 0, "activity-panel"),
            ec = (0, o.bG)([U.A], () => U.A.hasConsented(V.YAq.PERSONALIZATION)),
            ed = (0, j.TF)(_?.id, { shouldFetch: ea || eo }),
            eu = er && ec && ed,
            eh = eu && ea,
            eA = eu && eo,
            em = s.useCallback(() => {
                r()(null != M, "Received null activity"),
                    w.default.track(V.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: _?.id ?? null,
                        application_id: M.application_id,
                    }),
                    (0, C.X)(en, C.O.INVITE),
                    w.default.track(V.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: M.application_id,
                        location: H.location,
                    }),
                    (0, h.qf)(M, !1);
            }, [M, H, en, _]),
            ep = s.useCallback(
                (e, t) => () => {
                    (0, C.X)(en, C.O.LEAVE_ACTIVITY),
                        g.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [en],
            ),
            eg = s.useCallback(
                (e) => () => {
                    (0, C.X)(en, C.O.LEAVE_ACTIVITY), N.A.stopFrame({ applicationId: e });
                },
                [en],
            ),
            e_ = s.useCallback(() => {
                (0, b.A)(t);
            }, [t]),
            ef = s.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("53612")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: _?.pid,
                            selectSource: null != P.A.getVoiceChannelId(),
                            analyticsLocations: ei,
                        });
                });
            }, [_, ei]),
            ex = D?.name ?? _?.name ?? "",
            eC = s.useCallback(() => {
                (0, T.pK)({ gameApplicationId: _?.id, buttonVariant: "admin" }),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                        return (t) => (0, i.jsx)(e, { gameName: ex, gameApplicationId: _?.id, ...t });
                    });
            }, [ex, _?.id]),
            eE = s.useCallback(() => {
                r()(null != a, "Received null guildId"),
                    (0, T.pK)({ gameApplicationId: _?.id, buttonVariant: "member" }),
                    (0, S.A)({ analyticsLocations: ei, analyticsLocation: H.location, guildId: a });
            }, [a, ei, H.location, _?.id]),
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
        let eS = es?.guildId == null || null == D ? null : (0, i.jsx)(Q, { guildId: es.guildId, applicationId: es.id }),
            eT = eh
                ? (0, i.jsx)(X, {
                      tooltipText: F.intl.formatToPlainString(K.default.YhnUVO, { gameName: ex }),
                      onClick: eC,
                      onViewed: () => (0, T.ET)({ gameApplicationId: _?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: s } = e;
                          return (0, i.jsx)(R.C, {
                              gameName: ex,
                              runningGameId: _?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  eC(), n(B.i.TAKE_ACTION), s(B.i.TAKE_ACTION);
                              },
                              onClose: () => n(B.i.USER_DISMISS),
                          });
                      },
                  })
                : eA
                  ? (0, i.jsx)(X, {
                        tooltipText: F.intl.formatToPlainString(K.default.lwwiHE, { gameName: ex }),
                        onClick: eE,
                        onViewed: () => (0, T.ET)({ gameApplicationId: _?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: s } = e;
                            return (0, i.jsx)(R.D, {
                                gameName: ex,
                                runningGameId: _?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    eE(), n(B.i.TAKE_ACTION), s(B.i.TAKE_ACTION);
                                },
                                onClose: () => n(B.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            ev = (function () {
                let e, t, n;
                if ((null == _ && null != I && !(0, m.f)()) || (!c && !l)) return null;
                let s = null;
                return (
                    c
                        ? ((e = !1),
                          (t = () => {
                              e_(), (0, C.X)(en, C.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (s = F.intl.string(F.t.S5anIc)))
                        : p
                          ? ((e = !1),
                            (t = () => {
                                ef(), (0, C.X)(en, C.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (s =
                                null != _
                                    ? F.intl.formatToPlainString(F.t.AB5gTy, { game: _.name })
                                    : F.intl.string(F.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != A && (0, G.gV)(A.type) && (s = F.intl.string(F.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: Y.IF,
                        children: (0, i.jsx)(k.A, { tooltipText: s, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            ey =
                el && null == I
                    ? (0, i.jsx)(k.A, { ref: z, tooltipText: F.intl.string(F.t["hC/Zey"]), onClick: em, icon: u.DpX })
                    : null,
            ej =
                null == I
                    ? null
                    : (0, i.jsx)(k.A, {
                          tooltipText: F.intl.string(F.t["R/FK4A"]),
                          onClick: ep(I.applicationId, I.location),
                          icon: u.oLl,
                      }),
            eR =
                null == O
                    ? null
                    : (0, i.jsx)(k.A, {
                          tooltipText: F.intl.string(F.t["R/FK4A"]),
                          onClick: eg(O.applicationId),
                          icon: u.oLl,
                      }),
            eO = null == t ? null : (0, i.jsx)(E.A, {}),
            eL =
                !Z || ee
                    ? null
                    : (0, i.jsx)(q, {
                          runningGame: _,
                          startAuthorization: () => {
                              $({ analyticsLocations: ei }) === x._M.RPC &&
                                  (eb(!0),
                                  null != eI.current && clearTimeout(eI.current),
                                  (eI.current = setTimeout(() => {
                                      eb(!1);
                                  }, 9e4)));
                          },
                          connectionApp: et,
                          ref: J,
                      }),
            eM =
                !Z || ee
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: F.intl.string(F.t.ULvRFd),
                          body: F.intl.string(F.t["HJJDr+"]),
                          targetElementRef: J,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: eN,
                          onRequestClose: () => {
                              eb(!1), null != eI.current && (clearTimeout(eI.current), (eI.current = null));
                          },
                      });
        return null == ev && null == ey && null == ej && null == eR && null == eL && null == eS && null == eT
            ? null
            : (0, i.jsxs)("div", { className: Y.o1, children: [eS ?? eL ?? ey, eT, ev, ej ?? eR ?? eO, eM] });
    }),
    q = s.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: s, connectionApp: l } = e;
        return (0, i.jsx)(k.A, {
            ref: t,
            onClick: () => {
                w.default.track(V.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: l?.id ?? null,
                }),
                    s();
            },
            icon: a.A,
            tooltipText: F.intl.string(F.t.sbdnpw),
        });
    });
function X(e) {
    let { tooltipText: t, onClick: n, onViewed: l, renderCoachmark: r } = e,
        a = s.useRef(null),
        o = s.useRef(!1);
    s.useEffect(() => {
        o.current || ((o.current = !0), l());
    }, [l]);
    let d = (0, A.A)(),
        { isQuestBarEmpty: h, hasLoadedQuestBar: m } = (0, O.c9)({ location: H.rE.CONFLICT_CHECKS }),
        [p, g] = (0, I.kn)(!d && h && m ? [c.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [f, x] = (0, I.kn)([c.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        C = s.useCallback(() => {
            g(B.i.TAKE_ACTION), x(B.i.TAKE_ACTION), n();
        }, [g, x, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: Y.IF,
                children: [
                    (0, i.jsx)("div", { className: Y.uD, children: (0, i.jsx)("div", { className: Y.Z9 }) }),
                    (0, i.jsx)(k.A, { ref: a, tooltipText: t, onClick: C, icon: u._xR }),
                    f === c.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, i.jsx)(_.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != p && r({ targetElementRef: a, markAsDismissed: g, markBadgeAsDismissed: x }),
        ],
    });
}
function Q(e) {
    let { applicationId: t, guildId: n } = e,
        l = s.useRef(null);
    s.useEffect(() => {
        w.default.track(V.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [r, a] = (0, I.kn)([c.M.GAME_SHOP_RTC_POPOVER], B.m.ACCOUNT_NAME_ZONE, !0),
        o = s.useCallback(() => {
            (0, M.X)({ guildId: n });
        }, [n]),
        d = s.useCallback(() => {
            (0, M.default)({ guildId: n }), a(B.i.USER_DISMISS);
        }, [n, a]),
        h = s.useCallback(() => {
            w.default.track(V.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        A = s.useCallback(() => {
            a(B.i.USER_DISMISS);
        }, [a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(k.A, {
                tooltipText: F.intl.string(F.t.vyaWs7),
                onClick: h,
                onMouseDown: o,
                icon: u.U1X,
                ref: l,
            }),
            r === c.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(D.A, {
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
