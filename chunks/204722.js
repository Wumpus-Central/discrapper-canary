n.d(t, { W: () => J, f: () => Z });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(141628),
    o = n(311907),
    d = n(554146),
    c = n(265486),
    u = n(192308),
    h = n(959988),
    A = n(183623),
    _ = n(241541),
    m = n(70688),
    g = n(687966),
    p = n(34188),
    f = n(298990),
    E = n(942857),
    x = n(646865),
    I = n(833349),
    C = n(869003),
    b = n(521588),
    N = n(688810),
    S = n(362490),
    v = n(384059),
    T = n(359348),
    y = n(932001),
    j = n(625180),
    R = n(338771),
    L = n(212637),
    O = n(397400),
    G = n(488803),
    D = n(44621),
    M = n(823748),
    U = n(997692),
    P = n(201805),
    w = n(453774),
    k = n(44724),
    V = n(849134),
    B = n(95701),
    H = n(153488),
    F = n(309010),
    W = n(954571),
    Y = n(42473),
    K = n(652215),
    z = n(49999),
    q = n(985018),
    X = n(576709),
    Q = n(610861);
function J(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t &&
              (t.application_id === e.id || e.linkedGames?.some((e) => e.id === t.application_id)) &&
              t.type === K.$pd.PLAYING &&
              (0, I.A)(t, K.jUm.JOIN))
    );
}
let Z = l.memo(function (e) {
        let {
                stream: t,
                canGoLive: s,
                guildId: r,
                isStreaming: d,
                channel: g,
                canStream: p,
                runningGame: E,
                embeddedActivity: I,
                frame: b,
                activity: y,
                application: P,
                analyticsContext: k,
                inviteButtonRef: V,
                accountLinkButtonRef: Z,
                startAuthorization: en,
                canStartAuthorization: ei,
                hasAlreadyLinked: el,
                connectionApp: es,
            } = e,
            { parentAnalyticsLocation: ea, analyticsLocations: er } = (0, N.Ay)(),
            eo = (0, w.A)(P?.id),
            ed = J(P, y, I),
            { enabled: ec } = D._.useConfig({ location: "activity-panel" }),
            eu = (0, M.Bp)("activity-panel"),
            eh = (0, G.C$)(r ?? void 0, "activity-panel"),
            eA = (0, o.bG)([H.A], () => H.A.hasConsented(K.YAq.PERSONALIZATION)),
            e_ = (0, M.TF)(E?.id, { shouldFetch: eu || eh }),
            em = ec && eA && e_,
            eg = em && eu,
            ep = em && eh,
            ef = l.useCallback(() => {
                a()(null != y, "Received null activity"),
                    W.default.track(K.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                        action_type: "invite_to_game",
                        game_id: E?.id ?? null,
                        application_id: y.application_id,
                    }),
                    (0, v.X)(ea, v.O.INVITE),
                    W.default.track(K.HAw.OPEN_MODAL, {
                        type: "Send Join Invite",
                        application_id: y.application_id,
                        location: k.location,
                    }),
                    (0, f.qf)(y, !1);
            }, [y, k, ea, E]),
            eE = l.useCallback(
                (e, t) => () => {
                    (0, v.X)(ea, v.O.LEAVE_ACTIVITY),
                        C.A.leaveActivity({ location: t, applicationId: e, showFeedback: !0 });
                },
                [ea],
            ),
            ex = l.useCallback(
                (e) => () => {
                    (0, v.X)(ea, v.O.LEAVE_ACTIVITY), j.A.stopFrame({ applicationId: e });
                },
                [ea],
            ),
            eI = l.useCallback(() => {
                (0, R.A)(t);
            }, [t]),
            eC = l.useCallback(() => {
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("45150")]).then(n.bind(n, 648230));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            sourcePID: E?.pid,
                            selectSource: null != F.A.getVoiceChannelId(),
                            analyticsLocations: er,
                        });
                });
            }, [E, er]),
            eb = P?.name ?? E?.name ?? "",
            eN = l.useCallback(() => {
                (0, O.pK)({ gameApplicationId: E?.id, buttonVariant: "admin" }),
                    (0, u.openModalLazy)(async () => {
                        let { default: e } = await n.e("74132").then(n.bind(n, 279871));
                        return (t) => (0, i.jsx)(e, { gameName: eb, gameApplicationId: E?.id, ...t });
                    });
            }, [eb, E?.id]),
            eS = l.useCallback(() => {
                a()(null != r, "Received null guildId"),
                    (0, O.pK)({ gameApplicationId: E?.id, buttonVariant: "member" }),
                    (0, L.A)({ analyticsLocations: er, analyticsLocation: k.location, guildId: r });
            }, [r, er, k.location, E?.id]),
            ev = l.useRef(null),
            [eT, ey] = l.useState(!1);
        l.useEffect(
            () => () => {
                null != ev.current && clearTimeout(ev.current);
            },
            [],
        ),
            l.useEffect(() => {
                el && (ey(!1), null != ev.current && (clearTimeout(ev.current), (ev.current = null)));
            }, [el]);
        let ej =
                eo?.guildId == null || null == P ? null : (0, i.jsx)(et, { guildId: eo.guildId, applicationId: eo.id }),
            eR = eg
                ? (0, i.jsx)(ee, {
                      tooltipText: q.intl.formatToPlainString(X.default.YhnUVO, { gameName: eb }),
                      onClick: eN,
                      onViewed: () => (0, O.ET)({ gameApplicationId: E?.id, buttonVariant: "admin" }),
                      renderCoachmark: (e) => {
                          let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: l } = e;
                          return (0, i.jsx)(U.C, {
                              gameName: eb,
                              runningGameId: E?.id,
                              targetElementRef: t,
                              onClick: () => {
                                  eN(), n(z.i.TAKE_ACTION), l(z.i.TAKE_ACTION);
                              },
                              onClose: () => n(z.i.USER_DISMISS),
                          });
                      },
                  })
                : ep
                  ? (0, i.jsx)(ee, {
                        tooltipText: q.intl.formatToPlainString(X.default.lwwiHE, { gameName: eb }),
                        onClick: eS,
                        onViewed: () => (0, O.ET)({ gameApplicationId: E?.id, buttonVariant: "member" }),
                        renderCoachmark: (e) => {
                            let { targetElementRef: t, markAsDismissed: n, markBadgeAsDismissed: l } = e;
                            return (0, i.jsx)(U.D, {
                                gameName: eb,
                                runningGameId: E?.id,
                                targetElementRef: t,
                                onClick: () => {
                                    eS(), n(z.i.TAKE_ACTION), l(z.i.TAKE_ACTION);
                                },
                                onClose: () => n(z.i.USER_DISMISS),
                            });
                        },
                    })
                  : null,
            eL = (function () {
                let e, t, n;
                if ((null == E && null != I && !(0, x.f)()) || (!d && !s)) return null;
                let l = null;
                return (
                    d
                        ? ((e = !1),
                          (t = () => {
                              eI(), (0, v.X)(ea, v.O.STREAM, !1);
                          }),
                          (n = h.G),
                          (l = q.intl.string(q.t.S5anIc)))
                        : p
                          ? ((e = !1),
                            (t = () => {
                                eC(), (0, v.X)(ea, v.O.STREAM, !0);
                            }),
                            (n = A.F),
                            (l =
                                null != E
                                    ? q.intl.formatToPlainString(q.t.AB5gTy, { game: E.name })
                                    : q.intl.string(q.t.FeUKeA)))
                          : ((e = !0),
                            (t = null),
                            (n = A.F),
                            null != g && (0, B.gV)(g.type) && (l = q.intl.string(q.t.uQn9B8))),
                    (0, i.jsx)("div", {
                        className: Q.IF,
                        children: (0, i.jsx)(Y.A, { tooltipText: l, disabled: e, onClick: t, icon: n }),
                    })
                );
            })(),
            eO =
                ed && null == I
                    ? (0, i.jsx)(Y.A, { ref: V, tooltipText: q.intl.string(q.t["hC/Zey"]), onClick: ef, icon: _.D })
                    : null,
            eG =
                null == I
                    ? null
                    : (0, i.jsx)(Y.A, {
                          tooltipText: q.intl.string(q.t["R/FK4A"]),
                          onClick: eE(I.applicationId, I.location),
                          icon: m.o,
                      }),
            eD =
                null == b
                    ? null
                    : (0, i.jsx)(Y.A, {
                          tooltipText: q.intl.string(q.t["R/FK4A"]),
                          onClick: ex(b.applicationId),
                          icon: m.o,
                      }),
            eM = null == t ? null : (0, i.jsx)(T.A, {}),
            eU =
                !ei || el
                    ? null
                    : (0, i.jsx)($, {
                          runningGame: E,
                          startAuthorization: () => {
                              en({ analyticsLocations: er }) === S._M.RPC &&
                                  (ey(!0),
                                  null != ev.current && clearTimeout(ev.current),
                                  (ev.current = setTimeout(() => {
                                      ey(!1);
                                  }, 9e4)));
                          },
                          connectionApp: es,
                          ref: Z,
                      }),
            eP =
                !ei || el
                    ? null
                    : (0, i.jsx)(c.A, {
                          title: q.intl.string(q.t.ULvRFd),
                          body: q.intl.string(q.t["HJJDr+"]),
                          targetElementRef: Z,
                          position: "top",
                          align: "center",
                          caretConfig: { align: "center" },
                          shouldShow: eT,
                          onRequestClose: () => {
                              ey(!1), null != ev.current && (clearTimeout(ev.current), (ev.current = null));
                          },
                      });
        return null == eL && null == eO && null == eG && null == eD && null == eU && null == ej && null == eR
            ? null
            : (0, i.jsxs)("div", { className: Q.o1, children: [ej ?? eU ?? eO, eR, eL, eG ?? eD ?? eM, eP] });
    }),
    $ = l.forwardRef(function (e, t) {
        let { runningGame: n, startAuthorization: l, connectionApp: s } = e;
        return (0, i.jsx)(Y.A, {
            ref: t,
            onClick: () => {
                W.default.track(K.HAw.ACTIVITY_PANEL_BUTTON_CLICKED, {
                    action_type: "link_account",
                    game_id: n?.id ?? null,
                    application_id: s?.id ?? null,
                }),
                    l();
            },
            icon: r.A,
            tooltipText: q.intl.string(q.t.sbdnpw),
        });
    });
function ee(e) {
    let { tooltipText: t, onClick: n, onViewed: s, renderCoachmark: a } = e,
        r = l.useRef(null),
        o = l.useRef(!1);
    l.useEffect(() => {
        o.current || ((o.current = !0), s());
    }, [s]);
    let c = (0, E.A)(),
        { isQuestBarEmpty: u, hasLoadedQuestBar: h } = (0, P.c9)(),
        [A, _] = (0, y.kn)(!c && u && h ? [d.M.GAME_DETECTION_CREATE_GAME_SERVER_COACHMARK] : [], void 0, !0),
        [m, p] = (0, y.kn)([d.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE], void 0, !0),
        f = l.useCallback(() => {
            _(z.i.TAKE_ACTION), p(z.i.TAKE_ACTION), n();
        }, [_, p, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: Q.IF,
                children: [
                    (0, i.jsx)("div", { className: Q.uD, children: (0, i.jsx)("div", { className: Q.Z9 }) }),
                    (0, i.jsx)(Y.A, { ref: r, tooltipText: t, onClick: f, icon: g._ }),
                    m === d.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE &&
                        (0, i.jsx)(b.a, { top: 2, right: 2, alert: !0 }),
                ],
            }),
            null != A && a({ targetElementRef: r, markAsDismissed: _, markBadgeAsDismissed: p }),
        ],
    });
}
function et(e) {
    let { applicationId: t, guildId: n } = e,
        s = l.useRef(null);
    l.useEffect(() => {
        W.default.track(K.HAw.RTC_GAME_SHOP_BUTTON_VIEWED, { application_id: t });
    }, [t]);
    let [a, r] = (0, y.kn)([d.M.GAME_SHOP_RTC_POPOVER], z.m.ACCOUNT_NAME_ZONE, !0),
        o = l.useCallback(() => {
            (0, k.X)({ guildId: n });
        }, [n]),
        c = l.useCallback(() => {
            (0, k.default)({ guildId: n }), r(z.i.USER_DISMISS);
        }, [n, r]),
        u = l.useCallback(() => {
            W.default.track(K.HAw.RTC_GAME_SHOP_BUTTON_CLICKED, { application_id: t }), c();
        }, [t, c]),
        h = l.useCallback(() => {
            r(z.i.USER_DISMISS);
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Y.A, { tooltipText: q.intl.string(q.t.vyaWs7), onClick: u, onMouseDown: o, icon: p.U, ref: s }),
            a === d.M.GAME_SHOP_RTC_POPOVER
                ? (0, i.jsx)(V.A, {
                      onActionClick: c,
                      onRequestClose: h,
                      targetElementRef: s,
                      position: "top",
                      align: "center",
                      caretConfig: { align: "center" },
                  })
                : null,
        ],
    });
}
