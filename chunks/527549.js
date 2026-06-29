s.d(t, { A: () => eS });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    r = s.n(i),
    u = s(323889),
    a = s(17928),
    o = s(462887),
    c = s(577473),
    E = s(834730),
    d = s(821609),
    A = s(534514),
    T = s(939249),
    S = s(365199),
    C = s(331322),
    _ = s(661531),
    m = s(157559),
    x = s(274670),
    Q = s(144779),
    h = s(313961),
    R = s(952818),
    L = s(409626),
    f = s(834757),
    I = s(363195),
    g = s(461782),
    v = s(290863),
    N = s(287809),
    j = s(340124),
    U = s(859703),
    p = s(24001),
    M = s(104886);
let b = (0, s(945810).mj)({
    name: "2026-06-livestream-entrypoint-v2",
    kind: "user",
    defaultConfig: { enabled: !1, redirectToQuestHome: !1 },
    variations: {
        0: { enabled: !1, redirectToQuestHome: !1 },
        1: { enabled: !0, redirectToQuestHome: !1 },
        2: { enabled: !0, redirectToQuestHome: !0 },
    },
});
var y = s(112142),
    F = s(3738),
    q = s(347135),
    V = s(46948),
    H = s(18437),
    D = s(590202),
    k = s(971649),
    O = s(851936),
    w = s(651892),
    P = s(710969),
    G = s(639214),
    W = s(792620),
    z = s(814793),
    K = s(442444),
    $ = s(73473),
    B = s(270045),
    X = s(368715),
    Y = s(79545);
s(134528), s(947204);
var J = s(885574),
    Z = s(870788);
let ee = l.forwardRef(function (e, t) {
    let { isInventory: s, style: l, children: i } = e;
    return (0, n.jsxs)("div", {
        ref: t,
        className: Z.Q,
        style: { marginTop: 8 * !!s, ...l },
        children: [
            (0, n.jsx)(J.m, {
                size: "custom",
                className: Z.G,
                height: s ? 16 : 12,
                width: s ? 16 : 12,
                color: s ? _.A.colors.TEXT_MUTED.css : _.A.colors.WHITE.css,
            }),
            (0, n.jsx)(E.E, {
                color: s ? "text-muted" : "always-white",
                variant: s ? "text-xs/normal" : "text-xxs/normal",
                children: i,
            }),
        ],
    });
});
var et = s(431540);
let es = function (e) {
    let { className: t, color: s = _.A.colors.WHITE, quest: l, isInventory: i } = e,
        u = (0, q.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, q.O9)(l);
    return !i && u.length > 0
        ? (0, n.jsx)(ee, { children: u.at(0) })
        : (0, n.jsxs)("div", {
              className: r()(et.iE, t),
              style: { color: s.css },
              children: [
                  (0, n.jsxs)("div", {
                      className: et.O,
                      children: [
                          (0, n.jsx)(E.E, {
                              variant: "text-xs/semibold",
                              className: et.Df,
                              color: "none",
                              children: o,
                          }),
                          (0, n.jsx)("div", { className: et.Cj, style: { width: `${100 - a}%` } }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: et.hr,
                      role: "progressbar",
                      "aria-valuenow": a,
                      children: (0, n.jsx)("div", { className: et.SX, style: { width: `${a}%` } }),
                  }),
                  u.length > 0 && (0, n.jsx)(ee, { isInventory: i, children: u.at(0) }),
              ],
          });
};
var en = s(847641),
    el = s(646764),
    ei = s(311243),
    er = s(617986),
    eu = s(795965),
    ea = s(190107),
    eo = s(652215),
    ec = s(806931),
    eE = s(375708),
    ed = s(347562);
function eA(e) {
    var t;
    let { channelId: s, quest: i, previewQuest: g, isParticipatingOverride: $ } = e,
        J = (0, H.Ut)(),
        Z = (0, k.go)(),
        [ee, et] = l.useState(!1),
        eA = l.useCallback(() => et(!0), []),
        eT = l.useCallback(() => et(!1), []),
        eS = (0, a.bG)([N.default], () => N.default.getCurrentUser()),
        eC = (0, a.bG)([I.A], () => I.A.getState().theme),
        e_ = (0, o.M)(eC) ? eo.NJ8.DARK : eo.NJ8.LIGHT,
        em = (0, a.bG)([h.A], () => h.A.getParticipants(e.channelId), [e.channelId]),
        ex = (0, a.bG)(
            [U.A],
            () => (0, P.t6)(U.A.quests, U.A.questToDeliverForPlacement, p.p9.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eQ, isQuestInQuestBar: eh } = (0, a.cf)([v.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != i &&
                    null != eS &&
                    ((e = v.A),
                    em.some((t) => {
                        if (t.type !== ec.lp.STREAM || t.user.id !== eS.id) return !1;
                        let s = (0, f.nr)(t.stream, e);
                        return null != s && (0, G.zS)(s, i);
                    })),
                isQuestInQuestBar: ex?.id === i?.id,
            };
        }, [eS, i, em, ex]),
        eR = (0, W.pU)(i)?.[0],
        eL = (0, a.bG)([R.Ay, v.A], () => {
            let e = R.Ay.getRunningGames().map((e) => e.id);
            if ((0, W.xZ)(i) && null !== eR && e.includes(eR)) return !0;
            let t = null != eS ? v.A.findActivity(eS.id, (e) => e.type !== eo.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, W.g5)(i) && (0, G.zS)(t, i));
        }, [i, eS, eR]),
        ef = !0 === $ || eQ || eL,
        eI = (0, a.bG)([U.A], () => null != i && U.A.isEnrolling(i.id), [i]),
        eg = (0, a.bG)([h.A], () => (eS?.id == null ? null : h.A.getParticipant(s, eS.id)) != null, [s, eS]),
        { launchInGameActivity: ev } = (0, q.zW)(i),
        eN = (0, q.S5)(i?.config.expiresAt),
        ej = (0, q.S5)(i?.config.rewardsConfig.rewardsExpireAt),
        eU = ((t = ea.rE.QUEST_CHANNEL_CALL_HEADER), b.useConfig({ location: t })),
        [ep, eM] = l.useState(!1),
        [eb, ey] = l.useState(!1),
        eF = l.useRef(null),
        [eq, eV] = l.useState(null),
        eH = l.useCallback(() => {
            if (null != eF.current) {
                let e = eF.current.getBoundingClientRect();
                eV(e.left + e.width / 2);
            }
        }, []),
        eD = l.useCallback(async () => {
            eH(), ey(!0);
            let { type: e } = await (0, j.Oy)(i.id, {
                questContent: p.uF.QUEST_LIVE_STREAM,
                questContentCTA: D.Cy.ACCEPT_QUEST,
                sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case j.WM.SUCCESS:
                    eM(!0), ey(!1), (0, z.vA)(i) && ev();
                    break;
                case j.WM.CAPTCHA_FAILED:
                    ey(!1), m.A.show({ title: eE.intl.string(eE.t["/CidxO"]), body: eE.intl.string(eE.t.HQdHg6) });
                    break;
                case j.WM.UNKNOWN_ERROR:
                    ey(!1), m.A.show({ title: eE.intl.string(eE.t.R0RpRX), body: eE.intl.string(eE.t.OXD41D) });
                    break;
                case j.WM.PREVIOUS_IN_FLIGHT_REQUEST:
                    break;
                default:
                    ey(!1);
            }
        }, [i, ev, eH]),
        ek = l.useCallback(async () => {
            eH(), eM(!0);
            let { type: e } = await (0, j.Oy)(i.id, {
                questContent: p.uF.QUEST_LIVE_STREAM,
                questContentCTA: D.Cy.ACCEPT_QUEST,
                sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case j.WM.SUCCESS:
                    (0, er.navigateToQuestHome)({ fromContent: p.uF.QUEST_LIVE_STREAM, questId: i.id });
                    break;
                case j.WM.PREVIOUS_IN_FLIGHT_REQUEST:
                    break;
                case j.WM.CAPTCHA_FAILED:
                    eM(!1), m.A.show({ title: eE.intl.string(eE.t["/CidxO"]), body: eE.intl.string(eE.t.HQdHg6) });
                    break;
                case j.WM.UNKNOWN_ERROR:
                    eM(!1), m.A.show({ title: eE.intl.string(eE.t.R0RpRX), body: eE.intl.string(eE.t.OXD41D) });
            }
        }, [i, eH]),
        eO = l.useCallback(() => {
            (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, x.r)({
                      type: Q.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: i.id,
                      questContentCTA: D.Cy.TRACK_PROGRESS,
                      surfaceId: p.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
                      impressionId: Z,
                  })
                : J({
                      questId: i.id,
                      questContent: p.uF.QUEST_LIVE_STREAM,
                      questContentCTA: D.Cy.TRACK_PROGRESS,
                      sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
                  }),
                (0, er.navigateToQuestHome)({ fromContent: p.uF.QUEST_LIVE_STREAM, questId: i.id });
        }, [i, J, Z]),
        ew = l.useCallback(() => {
            (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, x.r)({
                      type: Q.F.CLICK_INTERNAL,
                      adCreativeType: u.p.QUEST,
                      adCreativeId: i.id,
                      questContentCTA: D.Cy.LEARN_MORE,
                      surfaceId: p.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
                      impressionId: Z,
                  })
                : J({
                      questId: i.id,
                      questContent: p.uF.QUEST_LIVE_STREAM,
                      questContentCTA: D.Cy.LEARN_MORE,
                      sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
                  }),
                (0, er.navigateToQuestHome)({ fromContent: p.uF.QUEST_LIVE_STREAM, questId: i.id });
        }, [i, J, Z]),
        eP = (0, eu.D)({
            quest: i,
            questContent: p.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
            experimentLocation: ea.rE.QUEST_CHANNEL_CALL_HEADER,
        }),
        eG = l.useMemo(() => (0, O.L)({ quest: i, location: ea.rE.QUEST_CHANNEL_CALL_HEADER }), [i]),
        eW = (0, F.NA)({ quest: i }),
        ez = (0, z.vA)(i),
        eK = (0, q.LS)(i),
        e$ = i.userStatus?.enrolledAt != null,
        eB = i.userStatus?.completedAt != null,
        eX = null != g && i.userStatus?.claimedAt == null,
        eY = ep && (e$ || eX);
    l.useEffect(() => {
        eM(!1), ey(!1), eZ(!1), eV(null);
    }, [i.id]);
    let [eJ, eZ] = l.useState(!1);
    l.useEffect(() => {
        if (!eU.enabled || eU.redirectToQuestHome || !eY) return;
        let e = setTimeout(() => eZ(!0), 5e3);
        return () => clearTimeout(e);
    }, [eU.enabled, eU.redirectToQuestHome, eY]);
    let e0 = null != i.userStatus && (0, P.gO)(i.userStatus, p.uF.QUEST_LIVE_STREAM),
        e1 = null != i.userStatus && (0, P.gO)(i.userStatus, p.uF.QUEST_BAR),
        e4 = eh && !e1,
        e6 = y.t.useConfig({ location: ea.rE.QUEST_CHANNEL_CALL_HEADER }),
        e7 = (0, Y.Pd)(i);
    if (
        (eG.info({
            isQuestCallHeaderDismissed: e0,
            isQuestExpired: eK,
            isQuestBarShowing: e4,
            isCurrentUserCallParticipant: eg,
        }),
        (!eX && !eU.enabled && (e0 || eK || e4)) || (!eX && eU.enabled && (e0 || eK)) || (!eX && !eg))
    )
        return null;
    if (eU.enabled)
        return (eX || !eU.redirectToQuestHome || (!eY && !e$)) && (eX || eU.redirectToQuestHome || !e$ || eY || eb)
            ? !eU.redirectToQuestHome && eY
                ? eJ
                    ? null
                    : (0, n.jsx)("div", {
                          className: ed.uE,
                          style: null != eq ? { left: eq, transform: "translateX(-50%)" } : void 0,
                          children: (0, n.jsxs)("div", {
                              className: ed.iW,
                              children: [
                                  (0, n.jsx)(c.r, { size: "md", color: "currentColor", className: ed.Rx }),
                                  (0, n.jsx)(E.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: ed.V9,
                                      children: eE.intl.string(eE.t.KEupiH),
                                  }),
                                  (0, n.jsx)(d.$, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: eE.intl.string(eE.t["th2+0j"]),
                                      onClick: eO,
                                  }),
                              ],
                          }),
                      })
                : (0, n.jsx)("div", {
                      ref: eF,
                      className: ed.W2,
                      onFocus: eA,
                      onMouseEnter: eA,
                      onBlur: eT,
                      onMouseLeave: eT,
                      children: (0, n.jsx)(K.A, {
                          quest: i,
                          isFocused: ee,
                          onAcceptQuest: eU.redirectToQuestHome ? ek : eD,
                          isEnrolling: eI,
                      }),
                  })
            : null;
    let e2 = (0, W.Yh)(i),
        e3 = (0, n.jsx)(el.A, {
            className: ed.Qq,
            autoplay: ee,
            quest: i,
            questContent: p.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
        });
    return (0, n.jsxs)("div", {
        className: r()(ed.iE, { [ed.rH]: e$ }),
        onFocus: eA,
        onMouseEnter: eA,
        onBlur: eT,
        onMouseLeave: eT,
        children: [
            !e$ &&
                (0, n.jsxs)("div", {
                    className: ed.D9,
                    children: [(0, n.jsx)(en.A, { bgOpacity: 0.32, className: ed.Pu }), e3],
                }),
            (0, n.jsxs)("div", {
                className: ed.Qs,
                children: [
                    (0, n.jsxs)("div", {
                        className: ed.R_,
                        children: [
                            e$ && ef
                                ? e3
                                : (0, n.jsx)("img", {
                                      className: ed.rC,
                                      alt: i.config.messages.gameTitle,
                                      src: (0, V.tW)(i, V.fY.GAME_TILE, e_).url,
                                  }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ed.Mg,
                                        children: [
                                            (0, n.jsx)(A.D, {
                                                className: ed.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: ef
                                                    ? (0, w.YT)({ quest: i, taskDetails: e2 })
                                                    : eE.intl.formatToPlainString(eE.t.EQa7os, {
                                                          questName: i.config.messages.questName,
                                                      }),
                                            }),
                                            (0, n.jsx)(B.C, {
                                                questContent: p.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
                                                quest: i,
                                                preventIdle: !0,
                                                shouldShowDisclosure: i.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, n.jsx)(T.D, {
                                                        ...e,
                                                        className: ed.rb,
                                                        "aria-label": eE.intl.string(eE.t.DEoVWZ),
                                                        children: (0, n.jsx)(S.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: ed.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(E.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eB
                                            ? eE.intl.formatToPlainString(eE.t.APddvF, { expirationDate: ej })
                                            : eE.intl.formatToPlainString(eE.t["pX+fmn"], { expirationDate: eN }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e$ &&
                        !eB &&
                        !ef &&
                        (0, n.jsx)(ei.A, {
                            autoplay: ee,
                            quest: i,
                            questContent: p.uF.QUEST_LIVE_STREAM,
                            taskDetails: e2,
                            location: ea.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: L.Ob.QuestLiveStream,
                        }),
                    (0, n.jsxs)("div", {
                        className: ed.uz,
                        children: [
                            !e$ &&
                                (0, n.jsxs)(C.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(d.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: eE.intl.string(eE.t.LLLLPD),
                                            onClick: ew,
                                            fullWidth: !ez || i.config.features.includes(ea.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        e6.enabled &&
                                        e7 === Y.UA.UNENROLLED &&
                                        e6.enabledQuestStates.has(Y.UA.UNENROLLED) &&
                                        !eK
                                            ? (0, n.jsx)(X.A, {
                                                  quest: i,
                                                  surface: Y.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: p.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: p.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, n.jsx)(d.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eW,
                                                  onClick: eD,
                                                  loading: eI,
                                              }),
                                    ],
                                }),
                            e$ && !eB && ef && (0, n.jsx)(es, { color: _.A.colors.BACKGROUND_BRAND, quest: i }),
                            e$ &&
                                !eB &&
                                !ef &&
                                (0, n.jsx)(d.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: eE.intl.string(eE.t.VN1Ajl),
                                    onClick: eO,
                                }),
                            eB &&
                                (0, n.jsx)(d.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: eE.intl.string(eE.t.cfY4PE),
                                    onClick: eP,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eT(e) {
    let t = l.useContext(g.vG),
        s = (0, a.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []),
        i = (0, a.bG)([U.A], () => U.A.quests),
        r = (0, q.oH)(Array.from(i.values())),
        u = l.useMemo(() => (0, z.$e)(i, ea.Ls), [i]),
        o = (0, a.bG)([h.A], () => h.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, a.bG)(
            [v.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let n of e) {
                              if (n.type === ec.lp.STREAM) {
                                  let e = (0, f.nr)(n.stream, s) ?? null,
                                      l = (0, G.nq)(t, e);
                                  if (null != l && l.userStatus?.claimedAt == null) return l;
                              }
                              for (let n of e)
                                  if (!(0, ec.PJ)(n))
                                      for (let e of s.getActivities(n.user.id)) {
                                          let s = (0, G.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(o, u, v.A),
            [o, u, r, e.previewQuest],
        ),
        E = c?.id ?? null;
    l.useEffect(() => {
        null == e.previewQuest && null != E && (0, j.yO)([E], p.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let d = (0, a.bG)([U.A], () => {
            let e = U.A.earnedQuestForPlacement.get(p.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.earnedDecisionByQuestId.get(E);
            return (0, P.Oh)(t) && t.shouldDeliver ? U.A.getQuest(E) : null;
        }, [E]),
        [A, T] = l.useState(null);
    l.useEffect(() => {
        null != d ? T(d) : null === E && T(null);
    }, [d, E]);
    let S = d ?? (null !== E ? A : null),
        C = e.previewQuest ?? S;
    return null == C || s
        ? null
        : (0, n.jsx)($.R, {
              questOrQuests: C,
              overrideVisibility: !t,
              questContent: p.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: p.uF.QUEST_LIVE_STREAM,
              children: () => (0, n.jsx)(eA, { ...e, quest: C }),
          });
}
let eS = function (e) {
    let t = (0, a.bG)([N.default], () => N.default.getCurrentUser()),
        s = (0, a.bG)([h.A], () => (t?.id == null ? null : h.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        l = (0, a.bG)([U.A], () => U.A.getQuestPreviewOverride(p.uF.QUEST_LIVE_STREAM), []),
        i = e.previewQuest ?? l;
    return s || null != i ? (0, n.jsx)(eT, { ...e, previewQuest: i }) : null;
};
