s.d(t, { A: () => eI });
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
    _ = s(661531),
    C = s(157559),
    m = s(274670),
    x = s(144779),
    Q = s(107195),
    I = s(198052),
    L = s(952818),
    h = s(409626),
    R = s(834757),
    f = s(363195),
    v = s(461782),
    N = s(290863),
    p = s(287809),
    g = s(396813),
    U = s(859703),
    j = s(738822),
    M = s(104886),
    y = s(112142),
    b = s(3738),
    q = s(77870),
    F = s(291749),
    V = s(18437),
    D = s(590202),
    P = s(971649),
    G = s(851936),
    O = s(773545),
    w = s(651892),
    k = s(710969),
    H = s(639214),
    z = s(792620),
    W = s(814793),
    B = s(657792),
    K = s(270045),
    $ = s(887899),
    Y = s(79545);
(s(134528), s(947204));
var X = s(885574),
    J = s(939);
let Z = function (e) {
    let { isInventory: t, style: s, children: n, ref: u } = e;
    return (0, l.jsxs)("div", {
        ref: u,
        className: J.Q,
        style: { marginTop: 8 * !!t, ...s },
        children: [
            (0, l.jsx)(X.CircleInformationIcon, {
                size: "custom",
                className: J.G,
                height: t ? 16 : 12,
                width: t ? 16 : 12,
                color: t ? _.A.colors.TEXT_MUTED.css : _.A.colors.WHITE.css,
            }),
            (0, l.jsx)(A.E, {
                color: t ? "text-muted" : "text-overlay-light",
                variant: t ? "text-xs/normal" : "text-xxs/normal",
                children: n,
            }),
        ],
    });
};
var ee = s(367703);
let et = function (e) {
    let { className: t, color: s = _.A.colors.WHITE, quest: n, isInventory: u } = e,
        i = (0, q.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, q.O9)(n);
    return !u && i.length > 0
        ? (0, l.jsx)(Z, { children: i.at(0) })
        : (0, l.jsxs)("div", {
              className: r()(ee.iE, t),
              style: { color: s.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: ee.O,
                      children: [
                          (0, l.jsx)(A.E, {
                              variant: "text-xs/semibold",
                              className: ee.Df,
                              color: "none",
                              children: o,
                          }),
                          (0, l.jsx)("div", { className: ee.Cj, style: { width: `${100 - a}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: ee.hr,
                      role: "progressbar",
                      "aria-valuenow": a,
                      children: (0, l.jsx)("div", { className: ee.SX, style: { width: `${a}%` } }),
                  }),
                  i.length > 0 && (0, l.jsx)(Z, { isInventory: u, children: i.at(0) }),
              ],
          });
};
var es = s(736653),
    el = s(105292),
    en = s(382267);
let eu = function (e) {
    let { className: t, color: s = "text-strong", textOpacity: n = 0.9 } = e,
        u = (0, es.DP)(),
        i = (0, o.M)(u);
    return (0, l.jsxs)(A.E, {
        variant: "text-xxs/medium",
        color: s,
        className: r()(en.P, t),
        children: [
            (0, l.jsx)("span", { className: en.r, style: { backgroundColor: `rgba(0, 0, 0, ${i ? 0.2 : 0.08})` } }),
            (0, l.jsx)("span", { style: { opacity: n }, children: el.intl.string(el.t.o6FLcF) }),
        ],
    });
};
var er = s(62405),
    ei = s(646917),
    ea = s(576761),
    eo = s(895253),
    ec = s(442734),
    eE = s(423121);
let ed = function (e) {
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
        E = (0, b.mU)({ quest: n, taskDetails: i, location: a, sourceQuestContent: o, gameProfileSource: c }),
        d = (0, ei.z)(),
        S = (0, q.SD)(n, d),
        T = S && d === ea.MA.NITRO;
    return (0, l.jsxs)("div", {
        className: r()(eE.iE, t),
        children: [
            (0, l.jsx)(eo.A, { visible: T }),
            (0, l.jsx)(er.A, {
                autoplay: s,
                className: eE.Qq,
                quest: n,
                location: a,
                questContent: u,
                sourceQuestContent: o,
            }),
            (0, l.jsx)("div", {
                className: eE.C,
                children: (0, l.jsxs)("div", {
                    className: eE.P2,
                    children: [
                        (0, l.jsx)(A.E, { variant: "text-sm/normal", color: "text-default", children: E }),
                        S && (0, l.jsx)(ec.e, { questId: n.id, orbMultiplierEligibility: d }),
                    ],
                }),
            }),
        ],
    });
};
var eA = s(617986),
    eS = s(630037),
    eT = s(190107),
    e_ = s(652215),
    eC = s(806931),
    em = s(405985);
function ex(e) {
    let { channelId: t, quest: s, previewQuest: u, isParticipatingOverride: v } = e,
        B = (0, V.Ut)(),
        X = (0, P.wW)(),
        [J, Z] = n.useState(!1),
        ee = n.useCallback(() => Z(!0), []),
        es = n.useCallback(() => Z(!1), []),
        en = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        ei = (0, a.bG)([f.A], () => f.A.getState().theme),
        ea = (0, o.M)(ei) ? e_.NJ8.DARK : e_.NJ8.LIGHT,
        eo = (0, a.bG)([I.A], () => I.A.getParticipants(e.channelId), [e.channelId]),
        ec = (0, O.Dp)(j.p9.DESKTOP_ACCOUNT_PANEL_AREA),
        eE = (0, Q.Yz)(ec?.creative),
        ex = (0, a.bG)([U.A], () => (null != eE ? (U.A.quests.get(eE) ?? null) : null), [eE]),
        { isCurrentUserStreamingQuestApplication: eQ, isQuestInQuestBar: eI } = (0, a.cf)(
            [N.A],
            () => {
                var e;
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != s &&
                        null != en &&
                        ((e = N.A),
                        eo.some((t) => {
                            if (t.type !== eC.lp.STREAM || t.user.id !== en.id) return !1;
                            let l = (0, R.nr)(t.stream, e);
                            return null != l && (0, H.zS)(l, s);
                        })),
                    isQuestInQuestBar: ex?.id === s?.id,
                };
            },
            [en, s, eo, ex],
        ),
        eL = (0, z.pU)(s)?.[0],
        eh = (0, a.bG)(
            [L.Ay, N.A],
            () => {
                let e = L.Ay.getRunningGames().map((e) => e.id);
                if ((0, z.xZ)(s) && null !== eL && e.includes(eL)) return !0;
                let t = null != en ? N.A.findActivity(en.id, (e) => e.type !== e_.$pd.CUSTOM_STATUS) : null;
                return !!(null != t && (0, z.g5)(s) && (0, H.zS)(t, s));
            },
            [s, en, eL],
        ),
        eR = !0 === v || eQ || eh,
        ef = (0, a.bG)([U.A], () => null != s && U.A.isEnrolling(s.id), [s]),
        ev = (0, a.bG)([I.A], () => (en?.id == null ? null : I.A.getParticipant(t, en.id)) != null, [t, en]),
        { launchInGameActivity: eN } = (0, q.zW)(s),
        ep = (0, q.S5)(s?.config.expiresAt),
        eg = (0, q.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        eU = n.useCallback(async () => {
            let { type: e } = await (0, g.Oy)(s.id, {
                questContent: j.uF.QUEST_LIVE_STREAM,
                questContentCTA: D.Cy.ACCEPT_QUEST,
                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case g.WM.SUCCESS:
                    (0, W.vA)(s) && eN();
                    break;
                case g.WM.UNKNOWN_ERROR:
                    C.A.show({ title: el.intl.string(el.t.R0RpRX), body: el.intl.string(el.t.OXD41D) });
            }
        }, [s, eN]),
        ej = n.useCallback(() => {
            ((0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: x.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: D.Cy.TRACK_PROGRESS,
                      surfaceId: j.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                      impressionId: X(),
                  })
                : B({
                      questId: s.id,
                      questContent: j.uF.QUEST_LIVE_STREAM,
                      questContentCTA: D.Cy.TRACK_PROGRESS,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                  }),
                (0, eA.mA)({ fromContent: j.uF.QUEST_LIVE_STREAM, questId: s.id }));
        }, [s, B, X]),
        eM = n.useCallback(() => {
            ((0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: x.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: D.Cy.LEARN_MORE,
                      surfaceId: j.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                      impressionId: X(),
                  })
                : B({
                      questId: s.id,
                      questContent: j.uF.QUEST_LIVE_STREAM,
                      questContentCTA: D.Cy.LEARN_MORE,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                  }),
                (0, eA.mA)({ fromContent: j.uF.QUEST_LIVE_STREAM, questId: s.id }));
        }, [s, B, X]),
        ey = (0, eS.D)({ quest: s, questContent: j.uF.QUEST_LIVE_STREAM, sourceQuestContent: j.uF.QUEST_LIVE_STREAM }),
        eb = n.useMemo(() => (0, G.L)({ quest: s, location: eT.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        eq = (0, b.NA)({ quest: s }),
        eF = (0, W.vA)(s),
        eV = (0, q.LS)(s),
        eD = s.userStatus?.enrolledAt != null,
        eP = s.userStatus?.completedAt != null,
        eG = null != u && s.userStatus?.claimedAt == null,
        eO = null != s.userStatus && (0, k.gO)(s.userStatus, j.uF.QUEST_LIVE_STREAM),
        ew = null != s.userStatus && (0, k.gO)(s.userStatus, j.uF.QUEST_BAR),
        ek = eI && !ew,
        eH = y.t.useConfig({ location: eT.rE.QUEST_CHANNEL_CALL_HEADER }),
        ez = (0, Y.Pd)(s);
    if (
        (eb.info({
            isQuestCallHeaderDismissed: eO,
            isQuestExpired: eV,
            isQuestBarShowing: ek,
            isCurrentUserCallParticipant: ev,
        }),
        (!eG && (eO || eV || ek)) || (!eG && !ev))
    )
        return null;
    let eW = (0, z.Yh)(s),
        eB = (0, l.jsx)(er.A, {
            className: em.Qq,
            autoplay: J,
            quest: s,
            location: eT.rE.QUEST_CHANNEL_CALL_HEADER,
            questContent: j.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(em.iE, { [em.rH]: eD }),
        onFocus: ee,
        onMouseEnter: ee,
        onBlur: es,
        onMouseLeave: es,
        children: [
            !eD &&
                (0, l.jsxs)("div", {
                    className: em.D9,
                    children: [(0, l.jsx)(eu, { bgOpacity: 0.32, className: em.Pu }), eB],
                }),
            (0, l.jsxs)("div", {
                className: em.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: em.R_,
                        children: [
                            eD && eR
                                ? eB
                                : (0, l.jsx)("img", {
                                      className: em.rC,
                                      alt: s.config.messages.gameTitle,
                                      src: (0, F.tW)(s, F.fY.GAME_TILE, ea).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: em.Mg,
                                        children: [
                                            (0, l.jsx)(c.D, {
                                                className: em.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eR
                                                    ? (0, w.YT)({ quest: s, taskDetails: eW })
                                                    : el.intl.formatToPlainString(el.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(K.C, {
                                                questContent: j.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                                                quest: s,
                                                preventIdle: !0,
                                                shouldShowDisclosure: s.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(E.D, {
                                                        ...e,
                                                        className: em.rb,
                                                        "aria-label": el.intl.string(el.t.DEoVWZ),
                                                        children: (0, l.jsx)(d.MoreHorizontalIcon, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: em.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(A.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eP
                                            ? el.intl.formatToPlainString(el.t.APddvF, { expirationDate: eg })
                                            : el.intl.formatToPlainString(el.t["pX+fmn"], { expirationDate: ep }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eD &&
                        !eP &&
                        !eR &&
                        (0, l.jsx)(ed, {
                            autoplay: J,
                            quest: s,
                            questContent: j.uF.QUEST_LIVE_STREAM,
                            taskDetails: eW,
                            location: eT.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: h.GameProfileSources.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: em.uz,
                        children: [
                            !eD &&
                                (0, l.jsxs)(S.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(T.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: el.intl.string(el.t.LLLLPD),
                                            onClick: eM,
                                            fullWidth: !eF || s.config.features.includes(eT.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eH.enabled &&
                                        ez === Y.UA.UNENROLLED &&
                                        eH.enabledQuestStates.has(Y.UA.UNENROLLED) &&
                                        !eV
                                            ? (0, l.jsx)($.A, {
                                                  quest: s,
                                                  surface: Y.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: j.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(T.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eq,
                                                  onClick: eU,
                                                  loading: ef,
                                              }),
                                    ],
                                }),
                            eD && !eP && eR && (0, l.jsx)(et, { color: _.A.colors.BACKGROUND_BRAND, quest: s }),
                            eD &&
                                !eP &&
                                !eR &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: el.intl.string(el.t.VN1Ajl),
                                    onClick: ej,
                                }),
                            eP &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: el.intl.string(el.t.cfY4PE),
                                    onClick: ey,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eQ(e) {
    let t = n.useContext(v.vG),
        s = (0, a.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []),
        u = (0, a.bG)([U.A], () => U.A.quests),
        r = (0, q.oH)(Array.from(u.values())),
        i = n.useMemo(() => (0, W.$e)(u, eT.Ls), [u]),
        o = (0, a.bG)([I.A], () => I.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, a.bG)(
            [N.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === eC.lp.STREAM) {
                                  let e = (0, R.nr)(l.stream, s) ?? null,
                                      n = (0, H.nq)(t, e);
                                  if (null != n && n.userStatus?.claimedAt == null) return n;
                              }
                              for (let l of e)
                                  if (!(0, eC.PJ)(l))
                                      for (let e of s.getActivities(l.user.id)) {
                                          let s = (0, H.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(o, i, N.A),
            [o, i, r, e.previewQuest],
        ),
        E = c?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != E && (0, g.yO)([E], j.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let d = (0, a.bG)(
            [U.A],
            () => {
                let e = U.A.earnedQuestForPlacement.get(j.uF.QUEST_LIVE_STREAM);
                if (null == e || null == E) return null;
                let t = e.earnedDecisionByQuestId.get(E);
                return (0, k.Oh)(t) && t.shouldDeliver ? U.A.getQuest(E) : null;
            },
            [E],
        ),
        [A, S] = n.useState(null);
    n.useEffect(() => {
        null != d ? S(d) : null === E && S(null);
    }, [d, E]);
    let T = d ?? (null !== E ? A : null),
        _ = e.previewQuest ?? T;
    return null == _ || s
        ? null
        : (0, l.jsx)(B.R, {
              questOrQuests: _,
              overrideVisibility: !t,
              questContent: j.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(ex, { ...e, quest: _ }),
          });
}
let eI = function (e) {
    let t = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
        s = (0, a.bG)([I.A], () => (t?.id == null ? null : I.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, a.bG)([U.A], () => U.A.getQuestPreviewOverride(j.uF.QUEST_LIVE_STREAM), []),
        u = e.previewQuest ?? n;
    return s || null != u ? (0, l.jsx)(eQ, { ...e, previewQuest: u }) : null;
};
