s.d(t, { A: () => eL });
var l = s(477900),
    n = s(582128),
    r = s(503698),
    u = s.n(r),
    i = s(323889),
    a = s(17928),
    o = s(462887),
    c = s(297264),
    E = s(939249),
    d = s(365199),
    A = s(834730),
    S = s(331322),
    C = s(821609),
    T = s(661531),
    _ = s(157559),
    m = s(274670),
    x = s(144779),
    Q = s(107195),
    L = s(198052),
    I = s(952818),
    h = s(409626),
    R = s(834757),
    f = s(363195),
    v = s(461782),
    N = s(290863),
    g = s(287809),
    p = s(396813),
    U = s(859703),
    j = s(738822),
    M = s(104886),
    y = s(112142),
    b = s(3738),
    q = s(866157),
    F = s(291749),
    D = s(18437),
    V = s(590202),
    P = s(971649),
    O = s(851936),
    G = s(158403),
    w = s(651892),
    k = s(710969),
    H = s(639214),
    z = s(792620),
    W = s(814793),
    B = s(73473),
    K = s(270045),
    $ = s(657113),
    Y = s(79545);
(s(134528), s(947204));
var X = s(885574),
    J = s(939);
let Z = n.forwardRef(function (e, t) {
    let { isInventory: s, style: n, children: r } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: J.Q,
        style: { marginTop: 8 * !!s, ...n },
        children: [
            (0, l.jsx)(X.CircleInformationIcon, {
                size: "custom",
                className: J.G,
                height: s ? 16 : 12,
                width: s ? 16 : 12,
                color: s ? T.A.colors.TEXT_MUTED.css : T.A.colors.WHITE.css,
            }),
            (0, l.jsx)(A.E, {
                color: s ? "text-muted" : "text-overlay-light",
                variant: s ? "text-xs/normal" : "text-xxs/normal",
                children: r,
            }),
        ],
    });
});
var ee = s(367703);
let et = function (e) {
    let { className: t, color: s = T.A.colors.WHITE, quest: n, isInventory: r } = e,
        i = (0, q.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, q.O9)(n);
    return !r && i.length > 0
        ? (0, l.jsx)(Z, { children: i.at(0) })
        : (0, l.jsxs)("div", {
              className: u()(ee.iE, t),
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
                  i.length > 0 && (0, l.jsx)(Z, { isInventory: r, children: i.at(0) }),
              ],
          });
};
var es = s(736653),
    el = s(375708),
    en = s(382267);
let er = function (e) {
    let { className: t, color: s = "text-strong", textOpacity: n = 0.9 } = e,
        r = (0, es.DP)(),
        i = (0, o.M)(r);
    return (0, l.jsxs)(A.E, {
        variant: "text-xxs/medium",
        color: s,
        className: u()(en.P, t),
        children: [
            (0, l.jsx)("span", { className: en.r, style: { backgroundColor: `rgba(0, 0, 0, ${i ? 0.2 : 0.08})` } }),
            (0, l.jsx)("span", { style: { opacity: n }, children: el.intl.string(el.t.o6FLcF) }),
        ],
    });
};
var eu = s(62405),
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
            questContent: r,
            taskDetails: i,
            location: a,
            sourceQuestContent: o,
            gameProfileSource: c,
        } = e,
        E = (0, b.mU)({ quest: n, taskDetails: i, location: a, sourceQuestContent: o, gameProfileSource: c }),
        d = (0, ei.z)(),
        S = (0, q.SD)(n, d),
        C = S && d === ea.MA.NITRO;
    return (0, l.jsxs)("div", {
        className: u()(eE.iE, t),
        children: [
            (0, l.jsx)(eo.A, { visible: C }),
            (0, l.jsx)(eu.A, {
                autoplay: s,
                className: eE.Qq,
                quest: n,
                location: a,
                questContent: r,
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
    eC = s(190107),
    eT = s(652215),
    e_ = s(806931),
    em = s(405985);
function ex(e) {
    let { channelId: t, quest: s, previewQuest: r, isParticipatingOverride: v } = e,
        B = (0, D.Ut)(),
        X = (0, P.go)(),
        [J, Z] = n.useState(!1),
        ee = n.useCallback(() => Z(!0), []),
        es = n.useCallback(() => Z(!1), []),
        en = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        ei = (0, a.bG)([f.A], () => f.A.getState().theme),
        ea = (0, o.M)(ei) ? eT.NJ8.DARK : eT.NJ8.LIGHT,
        eo = (0, a.bG)([L.A], () => L.A.getParticipants(e.channelId), [e.channelId]),
        ec = (0, G.Dp)(j.p9.DESKTOP_ACCOUNT_PANEL_AREA),
        eE = (0, Q.Yz)(ec?.creative),
        ex = (0, a.bG)([U.A], () => (null != eE ? (U.A.quests.get(eE) ?? null) : null), [eE]),
        { isCurrentUserStreamingQuestApplication: eQ, isQuestInQuestBar: eL } = (0, a.cf)(
            [N.A],
            () => {
                var e;
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != s &&
                        null != en &&
                        ((e = N.A),
                        eo.some((t) => {
                            if (t.type !== e_.lp.STREAM || t.user.id !== en.id) return !1;
                            let l = (0, R.nr)(t.stream, e);
                            return null != l && (0, H.zS)(l, s);
                        })),
                    isQuestInQuestBar: ex?.id === s?.id,
                };
            },
            [en, s, eo, ex],
        ),
        eI = (0, z.pU)(s)?.[0],
        eh = (0, a.bG)(
            [I.Ay, N.A],
            () => {
                let e = I.Ay.getRunningGames().map((e) => e.id);
                if ((0, z.xZ)(s) && null !== eI && e.includes(eI)) return !0;
                let t = null != en ? N.A.findActivity(en.id, (e) => e.type !== eT.$pd.CUSTOM_STATUS) : null;
                return !!(null != t && (0, z.g5)(s) && (0, H.zS)(t, s));
            },
            [s, en, eI],
        ),
        eR = !0 === v || eQ || eh,
        ef = (0, a.bG)([U.A], () => null != s && U.A.isEnrolling(s.id), [s]),
        ev = (0, a.bG)([L.A], () => (en?.id == null ? null : L.A.getParticipant(t, en.id)) != null, [t, en]),
        { launchInGameActivity: eN } = (0, q.zW)(s),
        eg = (0, q.S5)(s?.config.expiresAt),
        ep = (0, q.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        eU = n.useCallback(async () => {
            let { type: e } = await (0, p.Oy)(s.id, {
                questContent: j.uF.QUEST_LIVE_STREAM,
                questContentCTA: V.Cy.ACCEPT_QUEST,
                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case p.WM.SUCCESS:
                    (0, W.vA)(s) && eN();
                    break;
                case p.WM.CAPTCHA_FAILED:
                    _.A.show({ title: el.intl.string(el.t["/CidxO"]), body: el.intl.string(el.t.HQdHg6) });
                    break;
                case p.WM.UNKNOWN_ERROR:
                    _.A.show({ title: el.intl.string(el.t.R0RpRX), body: el.intl.string(el.t.OXD41D) });
            }
        }, [s, eN]),
        ej = n.useCallback(() => {
            ((0, M.E5)(M.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: x.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      surfaceId: j.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                      impressionId: X,
                  })
                : B({
                      questId: s.id,
                      questContent: j.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
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
                      questContentCTA: V.Cy.LEARN_MORE,
                      surfaceId: j.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                      impressionId: X,
                  })
                : B({
                      questId: s.id,
                      questContent: j.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.LEARN_MORE,
                      sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                  }),
                (0, eA.mA)({ fromContent: j.uF.QUEST_LIVE_STREAM, questId: s.id }));
        }, [s, B, X]),
        ey = (0, eS.D)({ quest: s, questContent: j.uF.QUEST_LIVE_STREAM, sourceQuestContent: j.uF.QUEST_LIVE_STREAM }),
        eb = n.useMemo(() => (0, O.L)({ quest: s, location: eC.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        eq = (0, b.NA)({ quest: s }),
        eF = (0, W.vA)(s),
        eD = (0, q.LS)(s),
        eV = s.userStatus?.enrolledAt != null,
        eP = s.userStatus?.completedAt != null,
        eO = null != r && s.userStatus?.claimedAt == null,
        eG = null != s.userStatus && (0, k.gO)(s.userStatus, j.uF.QUEST_LIVE_STREAM),
        ew = null != s.userStatus && (0, k.gO)(s.userStatus, j.uF.QUEST_BAR),
        ek = eL && !ew,
        eH = y.t.useConfig({ location: eC.rE.QUEST_CHANNEL_CALL_HEADER }),
        ez = (0, Y.Pd)(s);
    if (
        (eb.info({
            isQuestCallHeaderDismissed: eG,
            isQuestExpired: eD,
            isQuestBarShowing: ek,
            isCurrentUserCallParticipant: ev,
        }),
        (!eO && (eG || eD || ek)) || (!eO && !ev))
    )
        return null;
    let eW = (0, z.Yh)(s),
        eB = (0, l.jsx)(eu.A, {
            className: em.Qq,
            autoplay: J,
            quest: s,
            location: eC.rE.QUEST_CHANNEL_CALL_HEADER,
            questContent: j.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: u()(em.iE, { [em.rH]: eV }),
        onFocus: ee,
        onMouseEnter: ee,
        onBlur: es,
        onMouseLeave: es,
        children: [
            !eV &&
                (0, l.jsxs)("div", {
                    className: em.D9,
                    children: [(0, l.jsx)(er, { bgOpacity: 0.32, className: em.Pu }), eB],
                }),
            (0, l.jsxs)("div", {
                className: em.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: em.R_,
                        children: [
                            eV && eR
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
                                            ? el.intl.formatToPlainString(el.t.APddvF, { expirationDate: ep })
                                            : el.intl.formatToPlainString(el.t["pX+fmn"], { expirationDate: eg }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eV &&
                        !eP &&
                        !eR &&
                        (0, l.jsx)(ed, {
                            autoplay: J,
                            quest: s,
                            questContent: j.uF.QUEST_LIVE_STREAM,
                            taskDetails: eW,
                            location: eC.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: h.GameProfileSources.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: em.uz,
                        children: [
                            !eV &&
                                (0, l.jsxs)(S.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(C.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: el.intl.string(el.t.LLLLPD),
                                            onClick: eM,
                                            fullWidth: !eF || s.config.features.includes(eC.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eH.enabled &&
                                        ez === Y.UA.UNENROLLED &&
                                        eH.enabledQuestStates.has(Y.UA.UNENROLLED) &&
                                        !eD
                                            ? (0, l.jsx)($.A, {
                                                  quest: s,
                                                  surface: Y.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: j.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(C.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eq,
                                                  onClick: eU,
                                                  loading: ef,
                                              }),
                                    ],
                                }),
                            eV && !eP && eR && (0, l.jsx)(et, { color: T.A.colors.BACKGROUND_BRAND, quest: s }),
                            eV &&
                                !eP &&
                                !eR &&
                                (0, l.jsx)(C.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: el.intl.string(el.t.VN1Ajl),
                                    onClick: ej,
                                }),
                            eP &&
                                (0, l.jsx)(C.$, {
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
        r = (0, a.bG)([U.A], () => U.A.quests),
        u = (0, q.oH)(Array.from(r.values())),
        i = n.useMemo(() => (0, W.$e)(r, eC.Ls), [r]),
        o = (0, a.bG)([L.A], () => L.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, a.bG)(
            [N.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === e_.lp.STREAM) {
                                  let e = (0, R.nr)(l.stream, s) ?? null,
                                      n = (0, H.nq)(t, e);
                                  if (null != n && n.userStatus?.claimedAt == null) return n;
                              }
                              for (let l of e)
                                  if (!(0, e_.PJ)(l))
                                      for (let e of s.getActivities(l.user.id)) {
                                          let s = (0, H.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(o, i, N.A),
            [o, i, u, e.previewQuest],
        ),
        E = c?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != E && (0, p.yO)([E], j.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
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
    let C = d ?? (null !== E ? A : null),
        T = e.previewQuest ?? C;
    return null == T || s
        ? null
        : (0, l.jsx)(B.R, {
              questOrQuests: T,
              overrideVisibility: !t,
              questContent: j.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(ex, { ...e, quest: T }),
          });
}
let eL = function (e) {
    let t = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        s = (0, a.bG)([L.A], () => (t?.id == null ? null : L.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, a.bG)([U.A], () => U.A.getQuestPreviewOverride(j.uF.QUEST_LIVE_STREAM), []),
        r = e.previewQuest ?? n;
    return s || null != r ? (0, l.jsx)(eQ, { ...e, previewQuest: r }) : null;
};
