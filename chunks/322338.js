s.d(t, { A: () => ex });
var l = s(477900),
    n = s(582128),
    u = s(503698),
    r = s.n(u),
    i = s(323889),
    a = s(17928),
    o = s(462887),
    c = s(297264),
    E = s(939249),
    d = s(365199),
    A = s(834730),
    S = s(331322),
    T = s(821609),
    C = s(661531),
    _ = s(157559),
    m = s(274670),
    x = s(144779),
    Q = s(198052),
    L = s(952818),
    h = s(409626),
    I = s(834757),
    R = s(363195),
    f = s(461782),
    v = s(290863),
    N = s(287809),
    g = s(352774),
    p = s(859703),
    U = s(24001),
    j = s(104886),
    M = s(112142),
    y = s(3738),
    b = s(514547),
    q = s(291749),
    F = s(18437),
    V = s(590202),
    D = s(971649),
    P = s(851936),
    O = s(651892),
    G = s(710969),
    w = s(639214),
    k = s(792620),
    H = s(814793),
    z = s(73473),
    W = s(270045),
    B = s(657113),
    K = s(79545);
s(134528), s(947204);
var $ = s(885574),
    X = s(661644);
let Y = n.forwardRef(function (e, t) {
    let { isInventory: s, style: n, children: u } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: X.Q,
        style: { marginTop: 8 * !!s, ...n },
        children: [
            (0, l.jsx)($.m, {
                size: "custom",
                className: X.G,
                height: s ? 16 : 12,
                width: s ? 16 : 12,
                color: s ? C.A.colors.TEXT_MUTED.css : C.A.colors.WHITE.css,
            }),
            (0, l.jsx)(A.E, {
                color: s ? "text-muted" : "text-overlay-light",
                variant: s ? "text-xs/normal" : "text-xxs/normal",
                children: u,
            }),
        ],
    });
});
var J = s(590524);
let Z = function (e) {
    let { className: t, color: s = C.A.colors.WHITE, quest: n, isInventory: u } = e,
        i = (0, b.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, b.O9)(n);
    return !u && i.length > 0
        ? (0, l.jsx)(Y, { children: i.at(0) })
        : (0, l.jsxs)("div", {
              className: r()(J.iE, t),
              style: { color: s.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: J.O,
                      children: [
                          (0, l.jsx)(A.E, { variant: "text-xs/semibold", className: J.Df, color: "none", children: o }),
                          (0, l.jsx)("div", { className: J.Cj, style: { width: `${100 - a}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: J.hr,
                      role: "progressbar",
                      "aria-valuenow": a,
                      children: (0, l.jsx)("div", { className: J.SX, style: { width: `${a}%` } }),
                  }),
                  i.length > 0 && (0, l.jsx)(Y, { isInventory: u, children: i.at(0) }),
              ],
          });
};
var ee = s(736653),
    et = s(375708),
    es = s(774056);
let el = function (e) {
    let { className: t, color: s = "text-strong", textOpacity: n = 0.9 } = e,
        u = (0, ee.DP)(),
        i = (0, o.M)(u);
    return (0, l.jsxs)(A.E, {
        variant: "text-xxs/medium",
        color: s,
        className: r()(es.P, t),
        children: [
            (0, l.jsx)("span", { className: es.r, style: { backgroundColor: `rgba(0, 0, 0, ${i ? 0.2 : 0.08})` } }),
            (0, l.jsx)("span", { style: { opacity: n }, children: et.intl.string(et.t.o6FLcF) }),
        ],
    });
};
var en = s(646764),
    eu = s(646917),
    er = s(576761),
    ei = s(895253),
    ea = s(442734),
    eo = s(777490);
let ec = function (e) {
    let {
            className: t,
            autoplay: s,
            quest: n,
            questContent: u,
            taskDetails: i,
            location: a,
            sourceQuestContent: o,
            gameProfileSource: c,
        } = e,
        E = (0, y.mU)({ quest: n, taskDetails: i, location: a, sourceQuestContent: o, gameProfileSource: c }),
        d = (0, eu.z)(),
        S = (0, b.SD)(n, d),
        T = S && d === er.MA.NITRO;
    return (0, l.jsxs)("div", {
        className: r()(eo.iE, t),
        children: [
            (0, l.jsx)(ei.A, { visible: T }),
            (0, l.jsx)(en.A, { autoplay: s, className: eo.Qq, quest: n, questContent: u, sourceQuestContent: o }),
            (0, l.jsx)("div", {
                className: eo.C,
                children: (0, l.jsxs)("div", {
                    className: eo.P2,
                    children: [
                        (0, l.jsx)(A.E, { variant: "text-sm/normal", color: "text-default", children: E }),
                        S && (0, l.jsx)(ea.e, { questId: n.id, orbMultiplierEligibility: d }),
                    ],
                }),
            }),
        ],
    });
};
var eE = s(617986),
    ed = s(630037),
    eA = s(190107),
    eS = s(652215),
    eT = s(806931),
    eC = s(838834);
function e_(e) {
    let { channelId: t, quest: s, previewQuest: u, isParticipatingOverride: f } = e,
        z = (0, F.Ut)(),
        $ = (0, D.go)(),
        [X, Y] = n.useState(!1),
        J = n.useCallback(() => Y(!0), []),
        ee = n.useCallback(() => Y(!1), []),
        es = (0, a.bG)([N.default], () => N.default.getCurrentUser()),
        eu = (0, a.bG)([R.A], () => R.A.getState().theme),
        er = (0, o.M)(eu) ? eS.NJ8.DARK : eS.NJ8.LIGHT,
        ei = (0, a.bG)([Q.A], () => Q.A.getParticipants(e.channelId), [e.channelId]),
        ea = (0, a.bG)(
            [p.A],
            () => (0, G.t6)(p.A.quests, p.A.questToDeliverForPlacement, U.p9.DESKTOP_ACCOUNT_PANEL_AREA),
            [],
        ),
        { isCurrentUserStreamingQuestApplication: eo, isQuestInQuestBar: e_ } = (0, a.cf)([v.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != s &&
                    null != es &&
                    ((e = v.A),
                    ei.some((t) => {
                        if (t.type !== eT.lp.STREAM || t.user.id !== es.id) return !1;
                        let l = (0, I.nr)(t.stream, e);
                        return null != l && (0, w.zS)(l, s);
                    })),
                isQuestInQuestBar: ea?.id === s?.id,
            };
        }, [es, s, ei, ea]),
        em = (0, k.pU)(s)?.[0],
        ex = (0, a.bG)([L.Ay, v.A], () => {
            let e = L.Ay.getRunningGames().map((e) => e.id);
            if ((0, k.xZ)(s) && null !== em && e.includes(em)) return !0;
            let t = null != es ? v.A.findActivity(es.id, (e) => e.type !== eS.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, k.g5)(s) && (0, w.zS)(t, s));
        }, [s, es, em]),
        eQ = !0 === f || eo || ex,
        eL = (0, a.bG)([p.A], () => null != s && p.A.isEnrolling(s.id), [s]),
        eh = (0, a.bG)([Q.A], () => (es?.id == null ? null : Q.A.getParticipant(t, es.id)) != null, [t, es]),
        { launchInGameActivity: eI } = (0, b.zW)(s),
        eR = (0, b.S5)(s?.config.expiresAt),
        ef = (0, b.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        ev = n.useCallback(async () => {
            let { type: e } = await (0, g.Oy)(s.id, {
                questContent: U.uF.QUEST_LIVE_STREAM,
                questContentCTA: V.Cy.ACCEPT_QUEST,
                sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case g.WM.SUCCESS:
                    (0, H.vA)(s) && eI();
                    break;
                case g.WM.CAPTCHA_FAILED:
                    _.A.show({ title: et.intl.string(et.t["/CidxO"]), body: et.intl.string(et.t.HQdHg6) });
                    break;
                case g.WM.UNKNOWN_ERROR:
                    _.A.show({ title: et.intl.string(et.t.R0RpRX), body: et.intl.string(et.t.OXD41D) });
            }
        }, [s, eI]),
        eN = n.useCallback(() => {
            (0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: x.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      surfaceId: U.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                      impressionId: $,
                  })
                : z({
                      questId: s.id,
                      questContent: U.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                  }),
                (0, eE.mA)({ fromContent: U.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, z, $]),
        eg = n.useCallback(() => {
            (0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: x.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.LEARN_MORE,
                      surfaceId: U.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                      impressionId: $,
                  })
                : z({
                      questId: s.id,
                      questContent: U.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.LEARN_MORE,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                  }),
                (0, eE.mA)({ fromContent: U.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, z, $]),
        ep = (0, ed.D)({ quest: s, questContent: U.uF.QUEST_LIVE_STREAM, sourceQuestContent: U.uF.QUEST_LIVE_STREAM }),
        eU = n.useMemo(() => (0, P.L)({ quest: s, location: eA.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        ej = (0, y.NA)({ quest: s }),
        eM = (0, H.vA)(s),
        ey = (0, b.LS)(s),
        eb = s.userStatus?.enrolledAt != null,
        eq = s.userStatus?.completedAt != null,
        eF = null != u && s.userStatus?.claimedAt == null,
        eV = null != s.userStatus && (0, G.gO)(s.userStatus, U.uF.QUEST_LIVE_STREAM),
        eD = null != s.userStatus && (0, G.gO)(s.userStatus, U.uF.QUEST_BAR),
        eP = e_ && !eD,
        eO = M.t.useConfig({ location: eA.rE.QUEST_CHANNEL_CALL_HEADER }),
        eG = (0, K.Pd)(s);
    if (
        (eU.info({
            isQuestCallHeaderDismissed: eV,
            isQuestExpired: ey,
            isQuestBarShowing: eP,
            isCurrentUserCallParticipant: eh,
        }),
        (!eF && (eV || ey || eP)) || (!eF && !eh))
    )
        return null;
    let ew = (0, k.Yh)(s),
        ek = (0, l.jsx)(en.A, {
            className: eC.Qq,
            autoplay: X,
            quest: s,
            questContent: U.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(eC.iE, { [eC.rH]: eb }),
        onFocus: J,
        onMouseEnter: J,
        onBlur: ee,
        onMouseLeave: ee,
        children: [
            !eb &&
                (0, l.jsxs)("div", {
                    className: eC.D9,
                    children: [(0, l.jsx)(el, { bgOpacity: 0.32, className: eC.Pu }), ek],
                }),
            (0, l.jsxs)("div", {
                className: eC.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eC.R_,
                        children: [
                            eb && eQ
                                ? ek
                                : (0, l.jsx)("img", {
                                      className: eC.rC,
                                      alt: s.config.messages.gameTitle,
                                      src: (0, q.tW)(s, q.fY.GAME_TILE, er).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eC.Mg,
                                        children: [
                                            (0, l.jsx)(c.D, {
                                                className: eC.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eQ
                                                    ? (0, O.YT)({ quest: s, taskDetails: ew })
                                                    : et.intl.formatToPlainString(et.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(W.C, {
                                                questContent: U.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                                                quest: s,
                                                preventIdle: !0,
                                                shouldShowDisclosure: s.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(E.D, {
                                                        ...e,
                                                        className: eC.rb,
                                                        "aria-label": et.intl.string(et.t.DEoVWZ),
                                                        children: (0, l.jsx)(d.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: eC.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(A.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eq
                                            ? et.intl.formatToPlainString(et.t.APddvF, { expirationDate: ef })
                                            : et.intl.formatToPlainString(et.t["pX+fmn"], { expirationDate: eR }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eb &&
                        !eq &&
                        !eQ &&
                        (0, l.jsx)(ec, {
                            autoplay: X,
                            quest: s,
                            questContent: U.uF.QUEST_LIVE_STREAM,
                            taskDetails: ew,
                            location: eA.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: h.GameProfileSources.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: eC.uz,
                        children: [
                            !eb &&
                                (0, l.jsxs)(S.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(T.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: et.intl.string(et.t.LLLLPD),
                                            onClick: eg,
                                            fullWidth: !eM || s.config.features.includes(eA.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eO.enabled &&
                                        eG === K.UA.UNENROLLED &&
                                        eO.enabledQuestStates.has(K.UA.UNENROLLED) &&
                                        !ey
                                            ? (0, l.jsx)(B.A, {
                                                  quest: s,
                                                  surface: K.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: U.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(T.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: ej,
                                                  onClick: ev,
                                                  loading: eL,
                                              }),
                                    ],
                                }),
                            eb && !eq && eQ && (0, l.jsx)(Z, { color: C.A.colors.BACKGROUND_BRAND, quest: s }),
                            eb &&
                                !eq &&
                                !eQ &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: et.intl.string(et.t.VN1Ajl),
                                    onClick: eN,
                                }),
                            eq &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: et.intl.string(et.t.cfY4PE),
                                    onClick: ep,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function em(e) {
    let t = n.useContext(f.vG),
        s = (0, a.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil, []),
        u = (0, a.bG)([p.A], () => p.A.quests),
        r = (0, b.oH)(Array.from(u.values())),
        i = n.useMemo(() => (0, H.$e)(u, eA.Ls), [u]),
        o = (0, a.bG)([Q.A], () => Q.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, a.bG)(
            [v.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === eT.lp.STREAM) {
                                  let e = (0, I.nr)(l.stream, s) ?? null,
                                      n = (0, w.nq)(t, e);
                                  if (null != n && n.userStatus?.claimedAt == null) return n;
                              }
                              for (let l of e)
                                  if (!(0, eT.PJ)(l))
                                      for (let e of s.getActivities(l.user.id)) {
                                          let s = (0, w.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(o, i, v.A),
            [o, i, r, e.previewQuest],
        ),
        E = c?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != E && (0, g.yO)([E], U.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let d = (0, a.bG)([p.A], () => {
            let e = p.A.earnedQuestForPlacement.get(U.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.earnedDecisionByQuestId.get(E);
            return (0, G.Oh)(t) && t.shouldDeliver ? p.A.getQuest(E) : null;
        }, [E]),
        [A, S] = n.useState(null);
    n.useEffect(() => {
        null != d ? S(d) : null === E && S(null);
    }, [d, E]);
    let T = d ?? (null !== E ? A : null),
        C = e.previewQuest ?? T;
    return null == C || s
        ? null
        : (0, l.jsx)(z.R, {
              questOrQuests: C,
              overrideVisibility: !t,
              questContent: U.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(e_, { ...e, quest: C }),
          });
}
let ex = function (e) {
    let t = (0, a.bG)([N.default], () => N.default.getCurrentUser()),
        s = (0, a.bG)([Q.A], () => (t?.id == null ? null : Q.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, a.bG)([p.A], () => p.A.getQuestPreviewOverride(U.uF.QUEST_LIVE_STREAM), []),
        u = e.previewQuest ?? n;
    return s || null != u ? (0, l.jsx)(em, { ...e, previewQuest: u }) : null;
};
