l.d(t, { A: () => ea });
var s = l(627968),
    n = l(64700),
    u = l(503698),
    i = l.n(u),
    a = l(17928),
    r = l(462887),
    o = l(534514),
    c = l(939249),
    E = l(365199),
    d = l(834730),
    A = l(331322),
    _ = l(821609),
    S = l(661531),
    T = l(313961),
    m = l(328153),
    C = l(409626),
    x = l(834757),
    f = l(363195),
    Q = l(461782),
    h = l(290863),
    p = l(287809),
    L = l(829219),
    g = l(859703),
    v = l(507107);
let I = (0, l(945810).mj)({
    name: "2025-12-earned-impression-api-call-experiment",
    kind: "user",
    defaultConfig: { use_api_call: !1 },
    variations: {
        0: { use_api_call: !1 },
        1: { use_api_call: !1 },
        2: { use_api_call: !0 },
        3: { use_api_call: !0 },
        4: { use_api_call: !0 },
        5: { use_api_call: !0 },
        6: { use_api_call: !0 },
    },
});
var R = l(112142),
    U = l(838077),
    N = l(890687),
    j = l(859387),
    M = l(18437),
    b = l(590202),
    q = l(851936),
    y = l(651892),
    V = l(710969),
    F = l(639214),
    D = l(792620),
    G = l(814793),
    O = l(73473),
    P = l(270045),
    w = l(201805),
    k = l(212614),
    H = l(79545);
l(134528), l(947204);
var z = l(885574),
    B = l(870788);
let W = n.forwardRef(function (e, t) {
    let { isInventory: l, style: n, children: u } = e;
    return (0, s.jsxs)("div", {
        ref: t,
        className: B.Q,
        style: { marginTop: 8 * !!l, ...n },
        children: [
            (0, s.jsx)(z.m, {
                size: "custom",
                className: B.G,
                height: l ? 16 : 12,
                width: l ? 16 : 12,
                color: l ? S.A.colors.TEXT_MUTED.css : S.A.colors.WHITE.css,
            }),
            (0, s.jsx)(d.E, {
                color: l ? "text-muted" : "always-white",
                variant: l ? "text-xs/normal" : "text-xxs/normal",
                children: u,
            }),
        ],
    });
});
var $ = l(431540);
let Y = function (e) {
    let { className: t, color: l = S.A.colors.WHITE, quest: n, isInventory: u } = e,
        a = (0, N.aC)(e.quest),
        { percentComplete: r, completedRatioDisplay: o } = (0, N.O9)(n);
    return !u && a.length > 0
        ? (0, s.jsx)(W, { children: a.at(0) })
        : (0, s.jsxs)("div", {
              className: i()($.iE, t),
              style: { color: l.css },
              children: [
                  (0, s.jsxs)("div", {
                      className: $.O,
                      children: [
                          (0, s.jsx)(d.E, { variant: "text-xs/semibold", className: $.Df, color: "none", children: o }),
                          (0, s.jsx)("div", { className: $.Cj, style: { width: `${100 - r}%` } }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: $.hr,
                      role: "progressbar",
                      "aria-valuenow": r,
                      children: (0, s.jsx)("div", { className: $.SX, style: { width: `${r}%` } }),
                  }),
                  a.length > 0 && (0, s.jsx)(W, { isInventory: u, children: a.at(0) }),
              ],
          });
};
var K = l(847641),
    J = l(646764),
    X = l(311243),
    Z = l(545986),
    ee = l(654487),
    et = l(652215),
    el = l(806931),
    es = l(985018),
    en = l(347562);
function eu(e) {
    let { channelId: t, quest: l, previewQuest: u, isParticipatingOverride: Q } = e,
        I = (0, M.Ut)(),
        [O, z] = n.useState(!1),
        B = n.useCallback(() => z(!0), []),
        W = n.useCallback(() => z(!1), []),
        $ = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        eu = (0, a.bG)([f.A], () => f.A.getState().theme),
        ei = (0, r.M)(eu) ? et.NJ8.DARK : et.NJ8.LIGHT,
        ea = (0, a.bG)([T.A], () => T.A.getParticipants(e.channelId), [e.channelId]),
        er = (0, a.bG)(
            [g.A],
            () => (0, V.t6)(g.A.quests, g.A.questToDeliverForPlacement, v.yW.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eo, isQuestInQuestBar: ec } = (0, a.cf)([h.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != l &&
                    null != $ &&
                    ((e = h.A),
                    ea.some((t) => {
                        if (t.type !== el.lp.STREAM || t.user.id !== $.id) return !1;
                        let s = (0, x.nr)(t.stream, e);
                        return null != s && (0, F.zS)(s, l);
                    })),
                isQuestInQuestBar: er?.id === l?.id,
            };
        }, [$, l, ea, er]),
        eE = (0, D.pU)(l)?.[0],
        ed = (0, a.bG)([m.Ay, h.A], () => {
            let e = m.Ay.getRunningGames().map((e) => e.id);
            if ((0, D.xZ)(l) && null !== eE && e.includes(eE)) return !0;
            let t = null != $ ? h.A.findActivity($.id, (e) => e.type !== et.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, D.g5)(l) && (0, F.zS)(t, l));
        }, [l, $, eE]),
        eA = !0 === Q || eo || ed,
        e_ = (0, a.bG)([g.A], () => null != l && g.A.isEnrolling(l.id), [l]),
        eS = (0, a.bG)([T.A], () => ($?.id == null ? null : T.A.getParticipant(t, $.id)) != null, [t, $]),
        { launchInGameActivity: eT } = (0, N.zW)(l),
        em = (0, N.S5)(l?.config.expiresAt),
        eC = (0, N.S5)(l?.config.rewardsConfig.rewardsExpireAt),
        ex = n.useCallback(() => {
            (0, L.Oy)(l.id, {
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: b.Cy.ACCEPT_QUEST,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, G.vA)(l) && eT();
        }, [l, eT]),
        ef = n.useCallback(() => {
            I({
                questId: l.id,
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: b.Cy.TRACK_PROGRESS,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, Z.navigateToQuestHome)({ fromContent: v.uF.QUEST_LIVE_STREAM, questId: l.id });
        }, [l, I]),
        eQ = n.useCallback(() => {
            I({
                questId: l.id,
                questContent: v.uF.QUEST_LIVE_STREAM,
                questContentCTA: b.Cy.LEARN_MORE,
                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
            }),
                (0, Z.navigateToQuestHome)({ fromContent: v.uF.QUEST_LIVE_STREAM, questId: l.id });
        }, [l, I]),
        eh = (0, w.ix)({ quest: l, questContent: v.uF.QUEST_LIVE_STREAM, sourceQuestContent: v.uF.QUEST_LIVE_STREAM }),
        ep = n.useMemo(() => (0, q.L)({ quest: l, location: ee.rE.QUEST_CHANNEL_CALL_HEADER }), [l]),
        eL = (0, U.NA)({ quest: l }),
        eg = (0, G.vA)(l),
        ev = (0, N.LS)(l),
        eI = l.userStatus?.enrolledAt != null,
        eR = l.userStatus?.completedAt != null,
        eU = null != l.userStatus && (0, V.gO)(l.userStatus, v.uF.QUEST_LIVE_STREAM),
        eN = null != l.userStatus && (0, V.gO)(l.userStatus, v.uF.QUEST_BAR),
        ej = ec && !eN,
        eM = R.t.useConfig({ location: ee.rE.QUEST_CHANNEL_CALL_HEADER }),
        eb = (0, H.Pd)(l);
    ep.info({
        isQuestCallHeaderDismissed: eU,
        isQuestExpired: ev,
        isQuestBarShowing: ej,
        isCurrentUserCallParticipant: eS,
    });
    let eq = null != u && l.userStatus?.claimedAt == null;
    if ((!eq && (eU || ev || ej)) || (!eq && !eS)) return null;
    let ey = (0, D.Yh)(l),
        eV = (0, s.jsx)(J.A, {
            className: en.Qq,
            autoplay: O,
            quest: l,
            questContent: v.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
        });
    return (0, s.jsxs)("div", {
        className: i()(en.iE, { [en.rH]: eI }),
        onFocus: B,
        onMouseEnter: B,
        onBlur: W,
        onMouseLeave: W,
        children: [
            !eI &&
                (0, s.jsxs)("div", {
                    className: en.D9,
                    children: [(0, s.jsx)(K.A, { bgOpacity: 0.32, className: en.Pu }), eV],
                }),
            (0, s.jsxs)("div", {
                className: en.Qs,
                children: [
                    (0, s.jsxs)("div", {
                        className: en.R_,
                        children: [
                            eI && eA
                                ? eV
                                : (0, s.jsx)("img", {
                                      className: en.rC,
                                      alt: l.config.messages.gameTitle,
                                      src: (0, j.tW)(l, j.fY.GAME_TILE, ei).url,
                                  }),
                            (0, s.jsxs)("div", {
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: en.Mg,
                                        children: [
                                            (0, s.jsx)(o.D, {
                                                className: en.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eA
                                                    ? (0, y.YT)({ quest: l, taskDetails: ey })
                                                    : es.intl.formatToPlainString(es.t.EQa7os, {
                                                          questName: l.config.messages.questName,
                                                      }),
                                            }),
                                            (0, s.jsx)(P.C, {
                                                questContent: v.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                                                quest: l,
                                                preventIdle: !0,
                                                shouldShowDisclosure: l.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, s.jsx)(c.D, {
                                                        ...e,
                                                        className: en.rb,
                                                        "aria-label": es.intl.string(es.t.DEoVWZ),
                                                        children: (0, s.jsx)(E.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: en.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(d.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eR
                                            ? es.intl.formatToPlainString(es.t.APddvF, { expirationDate: eC })
                                            : es.intl.formatToPlainString(es.t["pX+fmn"], { expirationDate: em }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eI &&
                        !eR &&
                        !eA &&
                        (0, s.jsx)(X.A, {
                            autoplay: O,
                            quest: l,
                            questContent: v.uF.QUEST_LIVE_STREAM,
                            taskDetails: ey,
                            location: ee.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: C.Ob.QuestLiveStream,
                        }),
                    (0, s.jsxs)("div", {
                        className: en.uz,
                        children: [
                            !eI &&
                                (0, s.jsxs)(A.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, s.jsx)(_.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: es.intl.string(es.t.LLLLPD),
                                            onClick: eQ,
                                            fullWidth: !eg || l.config.features.includes(ee.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eM.enabled &&
                                        eb === H.UA.UNENROLLED &&
                                        eM.enabledQuestStates.has(H.UA.UNENROLLED) &&
                                        !ev
                                            ? (0, s.jsx)(k.A, {
                                                  quest: l,
                                                  surface: H.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: v.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: v.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, s.jsx)(_.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eL,
                                                  onClick: ex,
                                                  loading: e_,
                                              }),
                                    ],
                                }),
                            eI && !eR && eA && (0, s.jsx)(Y, { color: S.A.colors.BACKGROUND_BRAND, quest: l }),
                            eI &&
                                !eR &&
                                !eA &&
                                (0, s.jsx)(_.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.VN1Ajl),
                                    onClick: ef,
                                }),
                            eR &&
                                (0, s.jsx)(_.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.cfY4PE),
                                    onClick: eh,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ei(e) {
    let t = n.useContext(Q.vG),
        l = (0, a.bG)([g.A], () => null != g.A.questEnrollmentBlockedUntil, []),
        { use_api_call: u } = I.getConfig({ location: "QuestChannelCallHeader" }),
        i = (0, a.bG)([g.A], () => g.A.quests),
        r = (0, N.oH)(Array.from(i.values())),
        o = n.useMemo(() => (0, G.$e)(i, ee.Ls), [i]),
        c = (0, a.bG)([T.A], () => T.A.getParticipants(e.channelId), [e.channelId]),
        E = (0, a.bG)(
            [h.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, l) {
                          for (let s of e) {
                              if (s.type === el.lp.STREAM) {
                                  let e = (0, x.nr)(s.stream, l) ?? null,
                                      n = (0, F.nq)(t, e);
                                  if (null != n && n.userStatus?.claimedAt == null) return n;
                              }
                              for (let s of e)
                                  if (!(0, el.PJ)(s))
                                      for (let e of l.getActivities(s.user.id)) {
                                          let l = (0, F.nq)(t, e);
                                          if (null != l && l.userStatus?.claimedAt == null) return l;
                                      }
                          }
                          return null;
                      })(c, o, h.A),
            [c, o, r, e.previewQuest],
        ),
        d = n.useMemo(() => (u ? (E?.id ?? null) : null), [E, u]);
    n.useEffect(() => {
        null == e.previewQuest && null != d && (0, L.yO)([d], v.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [d, e.previewQuest]);
    let A = (0, a.bG)([g.A], () => {
            let e = g.A.earnedQuestForPlacement.get(v.uF.QUEST_LIVE_STREAM);
            if (null == e || null == d) return null;
            let t = e.earnedDecisionByQuestId.get(d);
            return (0, V.Oh)(t) && t.shouldDeliver ? g.A.getQuest(d) : null;
        }, [d]),
        [_, S] = n.useState(null);
    n.useEffect(() => {
        null != A ? S(A) : null === d && S(null);
    }, [A, d]);
    let m = A ?? (null !== d ? _ : null),
        C = e.previewQuest ?? (u ? m : E);
    return null == C || l
        ? null
        : (0, s.jsx)(O.R, {
              questOrQuests: C,
              overrideVisibility: !t,
              questContent: v.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
              children: () => (0, s.jsx)(eu, { ...e, quest: C }),
          });
}
let ea = function (e) {
    let t = (0, a.bG)([p.default], () => p.default.getCurrentUser());
    return (0, a.bG)([T.A], () => (t?.id == null ? null : T.A.getParticipant(e.channelId, t.id)) != null, [
        e.channelId,
        t,
    ]) || null != e.previewQuest
        ? (0, s.jsx)(ei, { ...e })
        : null;
};
