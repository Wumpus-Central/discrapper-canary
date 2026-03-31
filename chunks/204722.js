n.d(t, { W: () => W, f: () => Y });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(141628),
    o = n(311907),
    c = n(554146),
    d = n(342494),
    u = n(397927),
    h = n(298990),
    A = n(942857),
    _ = n(646865),
    m = n(833349),
    g = n(869003),
    p = n(521588),
    f = n(688810),
    x = n(362490),
    E = n(384059),
    I = n(359348),
    C = n(932001),
    N = n(625180),
    T = n(338771),
    S = n(212637),
    b = n(397400),
    y = n(488803),
    v = n(44621),
    j = n(823748),
    R = n(997692),
    O = n(201805),
    L = n(453774),
    M = n(44724),
    D = n(849134),
    U = n(95701),
    G = n(153488),
    P = n(309010),
    k = n(954571),
    w = n(42473),
    B = n(652215),
    V = n(49999),
    H = n(985018),
    F = n(294726),
    K = n(868509);
function W(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === B.$pd.PLAYING &&
              (0, m.A)(t, B.jUm.JOIN))
    );
}
let Y = l.memo(function (e) {
        let {
                stream: t,
                canGoLive: s,
                guildId: r,
                isStreaming: c,
                channel: A,
                canStream: m,
                runningGame: p,
                embeddedActivity: C,
                frame: O,
                activity: M,
                application: D,
                analyticsContext: Y,
                inviteButtonRef: J,
                accountLinkButtonRef: Q,
                startAuthorization: $,
                canStartAuthorization: Z,
                hasAlreadyLinked: ee,
                connectionApp: et,
            } = e,
            { parentAnalyticsLocation: en, analyticsLocations: ei } = (0, f.Ay)(),
            el = (0, L.A)(D?.id),
            es = W(D, M, C),
            { enabled: ea } = v._.useConfig({ location: "activity-panel" }),
            er = (0, j.Bp)("activity-panel"),
            eo = (0, y.C$)(r ?? void 0, "activity-panel"),
            ec = (0, o.bG)([G.A], () => G.A.hasConsented(B.YAq.PERSONALIZATION)),
            ed = (0, j.TF)(p?.id, { shouldFetch: er || eo }),
            eu = ea && ec && ed,
            eh = eu && er,
            eA = eu && eo,
            e_ = l.useCallback(() => {
                a()(null != M, "Received null activity"),
                    k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: p?.id ?? null,
                        application_id: M.application_id,
                    }),
                    (0, E.X)(en, E.O.INVITE),
                    k.default.track(B.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: M.application_id,
                        location: Y.location,
                    }),
                    (0, h.qf)(M, !1);
            }, [M, Y, en, p]),
            em = l.useCallback(
                (e, t) => () => {
                    (0, E.X)(en, E.O.LEAVE_ACTIVITY),
                        g.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [en],
            ),
            eg = l.useCallback(
                (e) => () => {
                    (0, E.X)(en, E.O.LEAVE_ACTIVITY), N.A.stopFrame({ applicationId: e });
                },
                [en],
            ),
            ep = l.useCallback(() => {
                (0, T.A)(t);
            }, [t]),
            ef = l.useCallback(() => {
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("53612")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: p?.pid,
                            selectSource: null != P.A.getVoiceChannelId(),
                            analyticsLocations: ei,
                        });
                });
            }, [p, ei]),
            ex = D?.name ?? p?.name ?? "",
            eE = l.useCallback(() => {
                (0, b.pK)({ gameApplicationId: p?.id, buttonVariant: "admin" }),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                        return (t) => (0, i.jsx)(e, { gameName: ex, gameApplicationId: p?.id, ...t });
                    });
            }, [ex, p?.id]),
            eI = l.useCallback(() => {
                a()(null != r, "Received null guildId"),
                    (0, b.pK)({ gameApplicationId: p?.id, buttonVariant: "member" }),
                    (0, S.A)({ analyticsLocations: ei, analyticsLocation: Y.location, guildId: r });
            }, [r, ei, Y.location, p?.id]),
            eC = l.useRef(null),
            [eN, eT] = l.useState(!1);
        l.useEffect(
            () => () => {
                null != eC.current && clearTimeout(eC.current);
            },
            [],
        ),
            l.useEffect(() => {
                ee && (eT(!1), null != eC.current && (clearTimeout(eC.current), (eC.current = null)));
            }, [ee]);
        let eS = el?.guildId == null || null == D ? null : (0, i.jsx)(X, { guildId: el.guildId, applicationId: el.id }),
            eb = eh
                ? (0, i.jsx)(q, {
                      tooltipText: H.intl.formatToPlainString(F.default.YhnUVO, { gameName: ex }),
                      onClick: eE,
                      onViewed: () => (0, b.ET)({ gameApplicationId: p?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: l } = e;
                          return (0, i.jsx)(R.C, {
                              gameName: ex,
                              runningGameId: p?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  eE(), n(V.i.TAKE_ACTION), l(V.i.TAKE_ACTION);
                              },
                              onClose: () => n(V.i.USER_DISMISS),
                          });
                      },
                  })
                : eA
                  ? (0, i.jsx)(q, {
                        tooltipText: H.intl.formatToPlainString(F.default.lwwiHE, { gameName: ex }),
                        onClick: eI,
                        onViewed: () => (0, b.ET)({ gameApplicationId: p?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: l } = e;
                            return (0, i.jsx)(R.D, {
                                gameName: ex,
                                runningGameId: p?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    eI(), n(V.i.TAKE_ACTION), l(V.i.TAKE_ACTION);
                                },
                                onClose: () => n(V.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            ey = (function () {
                let e, t, n;
                if ((null == p && null != C && !(0, _.f)()) || (!c && !s)) return null;
                let l = null;
                return (
                    c
                        ? ((e = !1),
                          (t = () => {
                              ep(), (0, E.X)(en, E.O.STREAM, !1);
                          }),
                          (n = u.GT3),
                          (l = H.intl.string(H.t.S5anIc)))
                        : m
                          ? ((e = !1),
                            (t = () => {
                                ef(), (0, E.X)(en, E.O.STREAM, !0);
                            }),
                            (n = u.Fzq),
                            (l =
                                null != p
                                    ? H.intl.formatToPlainString(H.t.AB5gTy, { game: p.name })
                                    : H.intl.string(H.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = u.Fzq),
                            null != A && (0, U.gV)(A.type) && (l = H.intl.string(H.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: K.IF,
                        children: (0, i.jsx)(w.A, { tooltipText: l, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            ev =
                es && null == C
                    ? (0, i.jsx)(w.A, { ref: J, tooltipText: H.intl.string(H.t["hC/Zey"]), onClick: e_, icon: u.DpX })
                    : null,
            ej =
                null == C
                    ? null
                    : (0, i.jsx)(w.A, {
                          tooltipText: H.intl.string(H.t["R/FK4A"]),
                          onClick: em(C.applicationId, C.location),
                          icon: u.oLl,
                      }),
            eR =
                null == O
                    ? null
                    : (0, i.jsx)(w.A, {
                          tooltipText: H.intl.string(H.t["R/FK4A"]),
                          onClick: eg(O.applicationId),
                          icon: u.oLl,
                      }),
            eO = null == t ? null : (0, i.jsx)(I.A, {}),
            eL =
                !Z || ee
                    ? null
                    : (0, i.jsx)(z, {
                          runningGame: p,
                          startAuthorization: () => {
                              $({ analyticsLocations: ei }) === x._M.RPC &&
                                  (eT(!0),
                                  null != eC.current && clearTimeout(eC.current),
                                  (eC.current = setTimeout(() => {
                                      eT(!1);
                                  }, 9e4)));
                          },
                          connectionApp: et,
                          ref: Q,
                      }),
            eM =
                !Z || ee
                    ? null
                    : (0, i.jsx)(d.AM, {
                          title: H.intl.string(H.t.ULvRFd),
                          body: H.intl.string(H.t["HJJDr+"]),
                          targetElementRef: Q,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: eN,
                          onRequestClose: () => {
                              eT(!1), null != eC.current && (clearTimeout(eC.current), (eC.current = null));
                          },
                      });
        return null == ey && null == ev && null == ej && null == eR && null == eL && null == eS && null == eb
            ? null
            : (0, i.jsxs)("div", { className: K.o1, children: [eS ?? eL ?? ev, eb, ey, ej ?? eR ?? eO, eM] });
    }),
    z = l.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: l, connectionApp: s } = e;
        return (0, i.jsx)(w.A, {
            ref: t,
            onClick: () => {
                k.default.track(B.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    l();
            },
            icon: r.A,
            tooltipText: H.intl.string(H.t.sbdnpw),
        });
    });
function q(e) {
    let { tooltipText: t, onClick: n, onViewed: s, renderCoachmark: a } = e,
        r = l.useRef(null),
        o = l.useRef(!1);
    l.useEffect(() => {
        o.current || ((o.current = !0), s());
    }, [s]);
    let d = (0, A.A)(),
        { isQuestBarEmpty: h, hasLoadedQuestBar: _ } = (0, O.c9)(),
        [m, g] = (0, C.kn)(!d && h && _ ? [c.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [f, x] = (0, C.kn)([c.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        E = l.useCallback(() => {
            g(V.i.TAKE_ACTION), x(V.i.TAKE_ACTION), n();
        }, [g, x, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: K.IF,
                children: [
                    (0, i.jsx)("div", { className: K.uD, children: (0, i.jsx)("div", { className: K.Z9 }) }),
                    (0, i.jsx)(w.A, { ref: r, tooltipText: t, onClick: E, icon: u._xR }),
                    f === c.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, i.jsx)(p.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != m && a({ targetElementRef: r, markAsDismissed: g, markBadgeAsDismissed: x }),
        ],
    });
}
function X(e) {
    let { applicationId: t, guildId: n } = e,
        s = l.useRef(null);
    l.useEffect(() => {
        k.default.track(B.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, r] = (0, C.kn)([c.M.GAME_SHOP_RTC_POPOVER], V.m.ACCOUNT_NAME_ZONE, !0),
        o = l.useCallback(() => {
            (0, M.X)({ guildId: n });
        }, [n]),
        d = l.useCallback(() => {
            (0, M.default)({ guildId: n }), r(V.i.USER_DISMISS);
        }, [n, r]),
        h = l.useCallback(() => {
            k.default.track(B.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), d();
        }, [t, d]),
        A = l.useCallback(() => {
            r(V.i.USER_DISMISS);
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(w.A, {
                tooltipText: H.intl.string(H.t.vyaWs7),
                onClick: h,
                onMouseDown: o,
                icon: u.U1X,
                ref: s,
            }),
            a === c.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(D.A, {
                      onActionClick: d,
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
