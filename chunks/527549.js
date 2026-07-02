s.d(t, { A: () => eS });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    u = s.n(i),
    a = s(323889),
    r = s(17928),
    o = s(462887),
    E = s(534514),
    c = s(939249),
    d = s(365199),
    A = s(834730),
    S = s(331322),
    T = s(821609),
    _ = s(661531),
    C = s(157559),
    m = s(274670),
    Q = s(144779),
    x = s(313961),
    h = s(952818),
    L = s(409626),
    R = s(834757),
    I = s(363195),
    g = s(461782),
    v = s(290863),
    N = s(287809),
    f = s(340124),
    U = s(859703),
    j = s(24001),
    M = s(104886);
let p = (0, s(945810).mj)({
    name: "2026-06-livestream-entrypoint-v2",
    kind: "user",
    defaultConfig: { enabled: !1, redirectToQuestHome: !1 },
    variations: { 0: { enabled: !1, redirectToQuestHome: !1 }, 1: { enabled: !0, redirectToQuestHome: !0 } },
});
var b = s(112142),
    F = s(3738),
    y = s(347135),
    q = s(46948),
    V = s(18437),
    D = s(590202),
    O = s(971649),
    P = s(851936),
    k = s(651892),
    w = s(710969),
    H = s(639214),
    G = s(792620),
    W = s(814793),
    z = s(442444),
    K = s(73473),
    $ = s(270045),
    B = s(368715),
    Y = s(79545);
s(134528), s(947204);
var X = s(885574),
    J = s(870788);
let Z = l.forwardRef(function (e, t) {
    let { isInventory: s, style: l, children: i } = e;
    return (0, n.jsxs)("div", {
        ref: t,
        className: J.Q,
        style: { marginTop: 8 * !!s, ...l },
        children: [
            (0, n.jsx)(X.m, {
                size: "custom",
                className: J.G,
                height: s ? 16 : 12,
                width: s ? 16 : 12,
                color: s ? _.A.colors.TEXT_MUTED.css : _.A.colors.WHITE.css,
            }),
            (0, n.jsx)(A.E, {
                color: s ? "text-muted" : "always-white",
                variant: s ? "text-xs/normal" : "text-xxs/normal",
                children: i,
            }),
        ],
    });
});
var ee = s(431540);
let et = function (e) {
    let { className: t, color: s = _.A.colors.WHITE, quest: l, isInventory: i } = e,
        a = (0, y.aC)(e.quest),
        { percentComplete: r, completedRatioDisplay: o } = (0, y.O9)(l);
    return !i && a.length > 0
        ? (0, n.jsx)(Z, { children: a.at(0) })
        : (0, n.jsxs)("div", {
              className: u()(ee.iE, t),
              style: { color: s.css },
              children: [
                  (0, n.jsxs)("div", {
                      className: ee.O,
                      children: [
                          (0, n.jsx)(A.E, {
                              variant: "text-xs/semibold",
                              className: ee.Df,
                              color: "none",
                              children: o,
                          }),
                          (0, n.jsx)("div", { className: ee.Cj, style: { width: `${100 - r}%` } }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: ee.hr,
                      role: "progressbar",
                      "aria-valuenow": r,
                      children: (0, n.jsx)("div", { className: ee.SX, style: { width: `${r}%` } }),
                  }),
                  a.length > 0 && (0, n.jsx)(Z, { isInventory: i, children: a.at(0) }),
              ],
          });
};
var es = s(847641),
    en = s(646764),
    el = s(311243),
    ei = s(617986),
    eu = s(795965),
    ea = s(190107),
    er = s(652215),
    eo = s(806931),
    eE = s(375708),
    ec = s(347562);
function ed(e) {
    var t;
    let { channelId: s, quest: i, previewQuest: g, isParticipatingOverride: K } = e,
        X = (0, V.Ut)(),
        J = (0, O.go)(),
        [Z, ee] = l.useState(!1),
        ed = l.useCallback(() => ee(!0), []),
        eA = l.useCallback(() => ee(!1), []),
        eS = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
        eT = (0, r.bG)([I.A], () => I.A.getState().theme),
        e_ = (0, o.M)(eT) ? er.NJ8.DARK : er.NJ8.LIGHT,
        eC = (0, r.bG)([x.A], () => x.A.getParticipants(e.channelId), [e.channelId]),
        em = (0, r.bG)(
            [U.A],
            () => (0, w.t6)(U.A.quests, U.A.questToDeliverForPlacement, j.p9.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eQ, isQuestInQuestBar: ex } = (0, r.cf)([v.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != i &&
                    null != eS &&
                    ((e = v.A),
                    eC.some((t) => {
                        if (t.type !== eo.lp.STREAM || t.user.id !== eS.id) return !1;
                        let s = (0, R.nr)(t.stream, e);
                        return null != s && (0, H.zS)(s, i);
                    })),
                isQuestInQuestBar: em?.id === i?.id,
            };
        }, [eS, i, eC, em]),
        eh = (0, G.pU)(i)?.[0],
        eL = (0, r.bG)([h.Ay, v.A], () => {
            let e = h.Ay.getRunningGames().map((e) => e.id);
            if ((0, G.xZ)(i) && null !== eh && e.includes(eh)) return !0;
            let t = null != eS ? v.A.findActivity(eS.id, (e) => e.type !== er.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, G.g5)(i) && (0, H.zS)(t, i));
        }, [i, eS, eh]),
        eR = !0 === K || eQ || eL,
        eI = (0, r.bG)([U.A], () => null != i && U.A.isEnrolling(i.id), [i]),
        eg = (0, r.bG)([x.A], () => (eS?.id == null ? null : x.A.getParticipant(s, eS.id)) != null, [s, eS]),
        { launchInGameActivity: ev } = (0, y.zW)(i),
        eN = (0, y.S5)(i?.config.expiresAt),
        ef = (0, y.S5)(i?.config.rewardsConfig.rewardsExpireAt),
        eU = ((t = ea.rE.QUEST_CHANNEL_CALL_HEADER), p.useConfig({ location: t })),
        [ej, eM] = l.useState(!1),
        ep = l.useCallback(async () => {
            let { type: e } = await (0, f.Oy)(i.id, {
                questContent: j.uF.QUEST_LIVE_STREAM,
                questContentCTA: D.Cy.ACCEPT_QUEST,
                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case f.WM.SUCCESS:
                    (0, W.vA)(i) && ev();
                    break;
                case f.WM.CAPTCHA_FAILED:
                    C.A.show({ title: eE.intl.string(eE.t["/CidxO"]), body: eE.intl.string(eE.t.HQdHg6) });
                    break;
                case f.WM.UNKNOWN_ERROR:
                    C.A.show({ title: eE.intl.string(eE.t.R0RpRX), body: eE.intl.string(eE.t.OXD41D) });
            }
        }, [i, ev]),
        eb = l.useCallback(async () => {
            eM(!0);
            let { type: e } = await (0, f.Oy)(i.id, {
                questContent: j.uF.QUEST_LIVE_STREAM,
                questContentCTA: D.Cy.ACCEPT_QUEST,
                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case f.WM.SUCCESS:
                    (0, ei.navigateToQuestHome)({ fromContent: j.uF.QUEST_LIVE_STREAM, questId: i.id });
                    break;
                case f.WM.PREVIOUS_IN_FLIGHT_REQUEST:
                    break;
                case f.WM.CAPTCHA_FAILED:
                    eM(!1), C.A.show({ title: eE.intl.string(eE.t["/CidxO"]), body: eE.intl.string(eE.t.HQdHg6) });
                    break;
                case f.WM.UNKNOWN_ERROR:
                    eM(!1), C.A.show({ title: eE.intl.string(eE.t.R0RpRX), body: eE.intl.string(eE.t.OXD41D) });
            }
        }, [i]),
        eF = l.useCallback(() => {
            (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: Q.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: i.id,
                      questContentCTA: D.Cy.TRACK_PROGRESS,
                      surfaceId: j.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                      impressionId: J,
                  })
                : X({
                      questId: i.id,
                      questContent: j.uF.QUEST_LIVE_STREAM,
                      questContentCTA: D.Cy.TRACK_PROGRESS,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                  }),
                (0, ei.navigateToQuestHome)({ fromContent: j.uF.QUEST_LIVE_STREAM, questId: i.id });
        }, [i, X, J]),
        ey = l.useCallback(() => {
            (0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: Q.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: i.id,
                      questContentCTA: D.Cy.LEARN_MORE,
                      surfaceId: j.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                      impressionId: J,
                  })
                : X({
                      questId: i.id,
                      questContent: j.uF.QUEST_LIVE_STREAM,
                      questContentCTA: D.Cy.LEARN_MORE,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                  }),
                (0, ei.navigateToQuestHome)({ fromContent: j.uF.QUEST_LIVE_STREAM, questId: i.id });
        }, [i, X, J]),
        eq = (0, eu.D)({
            quest: i,
            questContent: j.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
            experimentLocation: ea.rE.QUEST_CHANNEL_CALL_HEADER,
        }),
        eV = l.useMemo(() => (0, P.L)({ quest: i, location: ea.rE.QUEST_CHANNEL_CALL_HEADER }), [i]),
        eD = (0, F.NA)({ quest: i }),
        eO = (0, W.vA)(i),
        eP = (0, y.LS)(i),
        ek = i.userStatus?.enrolledAt != null,
        ew = i.userStatus?.completedAt != null,
        eH = null != g && i.userStatus?.claimedAt == null,
        eG = ej && (ek || eH);
    l.useEffect(() => {
        eM(!1);
    }, [i.id]);
    let eW = null != i.userStatus && (0, w.gO)(i.userStatus, j.uF.QUEST_LIVE_STREAM),
        ez = null != i.userStatus && (0, w.gO)(i.userStatus, j.uF.QUEST_BAR),
        eK = ex && !ez,
        e$ = b.t.useConfig({ location: ea.rE.QUEST_CHANNEL_CALL_HEADER }),
        eB = (0, Y.Pd)(i);
    if (
        (eV.info({
            isQuestCallHeaderDismissed: eW,
            isQuestExpired: eP,
            isQuestBarShowing: eK,
            isCurrentUserCallParticipant: eg,
        }),
        (!eH && !eU.enabled && (eW || eP || eK)) || (!eH && eU.enabled && (eW || eP)) || (!eH && !eg))
    )
        return null;
    if (eU.enabled)
        return !eH && (eG || ek)
            ? null
            : (0, n.jsx)("div", {
                  className: ec.W2,
                  onFocus: ed,
                  onMouseEnter: ed,
                  onBlur: eA,
                  onMouseLeave: eA,
                  children: (0, n.jsx)(z.A, { quest: i, isFocused: Z, onAcceptQuest: eb, isEnrolling: eI }),
              });
    let eY = (0, G.Yh)(i),
        eX = (0, n.jsx)(en.A, {
            className: ec.Qq,
            autoplay: Z,
            quest: i,
            questContent: j.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
        });
    return (0, n.jsxs)("div", {
        className: u()(ec.iE, { [ec.rH]: ek }),
        onFocus: ed,
        onMouseEnter: ed,
        onBlur: eA,
        onMouseLeave: eA,
        children: [
            !ek &&
                (0, n.jsxs)("div", {
                    className: ec.D9,
                    children: [(0, n.jsx)(es.A, { bgOpacity: 0.32, className: ec.Pu }), eX],
                }),
            (0, n.jsxs)("div", {
                className: ec.Qs,
                children: [
                    (0, n.jsxs)("div", {
                        className: ec.R_,
                        children: [
                            ek && eR
                                ? eX
                                : (0, n.jsx)("img", {
                                      className: ec.rC,
                                      alt: i.config.messages.gameTitle,
                                      src: (0, q.tW)(i, q.fY.GAME_TILE, e_).url,
                                  }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ec.Mg,
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                className: ec.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eR
                                                    ? (0, k.YT)({ quest: i, taskDetails: eY })
                                                    : eE.intl.formatToPlainString(eE.t.EQa7os, {
                                                          questName: i.config.messages.questName,
                                                      }),
                                            }),
                                            (0, n.jsx)($.C, {
                                                questContent: j.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                                                quest: i,
                                                preventIdle: !0,
                                                shouldShowDisclosure: i.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, n.jsx)(c.D, {
                                                        ...e,
                                                        className: ec.rb,
                                                        "aria-label": eE.intl.string(eE.t.DEoVWZ),
                                                        children: (0, n.jsx)(d.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: ec.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(A.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: ew
                                            ? eE.intl.formatToPlainString(eE.t.APddvF, { expirationDate: ef })
                                            : eE.intl.formatToPlainString(eE.t["pX+fmn"], { expirationDate: eN }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    ek &&
                        !ew &&
                        !eR &&
                        (0, n.jsx)(el.A, {
                            autoplay: Z,
                            quest: i,
                            questContent: j.uF.QUEST_LIVE_STREAM,
                            taskDetails: eY,
                            location: ea.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: L.GameProfileSources.QuestLiveStream,
                        }),
                    (0, n.jsxs)("div", {
                        className: ec.uz,
                        children: [
                            !ek &&
                                (0, n.jsxs)(S.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(T.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: eE.intl.string(eE.t.LLLLPD),
                                            onClick: ey,
                                            fullWidth: !eO || i.config.features.includes(ea.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        e$.enabled &&
                                        eB === Y.UA.UNENROLLED &&
                                        e$.enabledQuestStates.has(Y.UA.UNENROLLED) &&
                                        !eP
                                            ? (0, n.jsx)(B.A, {
                                                  quest: i,
                                                  surface: Y.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: j.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, n.jsx)(T.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eD,
                                                  onClick: ep,
                                                  loading: eI,
                                              }),
                                    ],
                                }),
                            ek && !ew && eR && (0, n.jsx)(et, { color: _.A.colors.BACKGROUND_BRAND, quest: i }),
                            ek &&
                                !ew &&
                                !eR &&
                                (0, n.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: eE.intl.string(eE.t.VN1Ajl),
                                    onClick: eF,
                                }),
                            ew &&
                                (0, n.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: eE.intl.string(eE.t.cfY4PE),
                                    onClick: eq,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eA(e) {
    let t = l.useContext(g.vG),
        s = (0, r.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []),
        i = (0, r.bG)([U.A], () => U.A.quests),
        u = (0, y.oH)(Array.from(i.values())),
        a = l.useMemo(() => (0, W.$e)(i, ea.Ls), [i]),
        o = (0, r.bG)([x.A], () => x.A.getParticipants(e.channelId), [e.channelId]),
        E = (0, r.bG)(
            [v.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let n of e) {
                              if (n.type === eo.lp.STREAM) {
                                  let e = (0, R.nr)(n.stream, s) ?? null,
                                      l = (0, H.nq)(t, e);
                                  if (null != l && l.userStatus?.claimedAt == null) return l;
                              }
                              for (let n of e)
                                  if (!(0, eo.PJ)(n))
                                      for (let e of s.getActivities(n.user.id)) {
                                          let s = (0, H.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(o, a, v.A),
            [o, a, u, e.previewQuest],
        ),
        c = E?.id ?? null;
    l.useEffect(() => {
        null == e.previewQuest && null != c && (0, f.yO)([c], j.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [c, e.previewQuest]);
    let d = (0, r.bG)([U.A], () => {
            let e = U.A.earnedQuestForPlacement.get(j.uF.QUEST_LIVE_STREAM);
            if (null == e || null == c) return null;
            let t = e.earnedDecisionByQuestId.get(c);
            return (0, w.Oh)(t) && t.shouldDeliver ? U.A.getQuest(c) : null;
        }, [c]),
        [A, S] = l.useState(null);
    l.useEffect(() => {
        null != d ? S(d) : null === c && S(null);
    }, [d, c]);
    let T = d ?? (null !== c ? A : null),
        _ = e.previewQuest ?? T;
    return null == _ || s
        ? null
        : (0, n.jsx)(K.R, {
              questOrQuests: _,
              overrideVisibility: !t,
              questContent: j.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
              children: () => (0, n.jsx)(ed, { ...e, quest: _ }),
          });
}
let eS = function (e) {
    let t = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
        s = (0, r.bG)([x.A], () => (t?.id == null ? null : x.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        l = (0, r.bG)([U.A], () => U.A.getQuestPreviewOverride(j.uF.QUEST_LIVE_STREAM), []),
        i = e.previewQuest ?? l;
    return s || null != i ? (0, n.jsx)(eA, { ...e, previewQuest: i }) : null;
};
