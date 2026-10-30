s.d(t, { A: () => eQ });
var l = s(477900),
    n = s(582128),
    r = s(503698),
    i = s.n(r),
    u = s(350835),
    a = s(323889),
    o = s(17928),
    c = s(462887),
    E = s(297264),
    d = s(939249),
    A = s(365199),
    S = s(834730),
    T = s(331322),
    C = s(821609),
    m = s(661531),
    _ = s(157559),
    x = s(507395),
    Q = s(144779),
    f = s(107195),
    v = s(198052),
    h = s(952818),
    L = s(409626),
    p = s(834757),
    I = s(363195),
    N = s(461782),
    g = s(290863),
    R = s(287809),
    U = s(427495),
    j = s(859703),
    M = s(738822),
    y = s(112142),
    b = s(3738),
    F = s(77870),
    q = s(291749),
    D = s(590202),
    V = s(971649),
    G = s(851936),
    O = s(773545),
    P = s(651892),
    w = s(710969),
    k = s(639214),
    H = s(792620),
    z = s(814793),
    W = s(657792),
    B = s(270045),
    $ = s(887899),
    K = s(79545);
(s(134528), s(947204));
var Y = s(885574),
    X = s(939);
let J = function (e) {
    let { isInventory: t, style: s, children: n, ref: r } = e;
    return (0, l.jsxs)("div", {
        ref: r,
        className: X.Q,
        style: { marginTop: 8 * !!t, ...s },
        children: [
            (0, l.jsx)(Y.CircleInformationIcon, {
                size: "custom",
                className: X.G,
                height: t ? 16 : 12,
                width: t ? 16 : 12,
                color: t ? m.A.colors.TEXT_MUTED.css : m.A.colors.WHITE.css,
            }),
            (0, l.jsx)(S.E, {
                color: t ? "text-muted" : "text-overlay-light",
                variant: t ? "text-xs/normal" : "text-xxs/normal",
                children: n,
            }),
        ],
    });
};
var Z = s(367703);
let ee = function (e) {
    let { className: t, color: s = m.A.colors.WHITE, quest: n, isInventory: r } = e,
        u = (0, F.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, F.O9)(n);
    return !r && u.length > 0
        ? (0, l.jsx)(J, { children: u.at(0) })
        : (0, l.jsxs)("div", {
              className: i()(Z.iE, t),
              style: { color: s.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: Z.O,
                      children: [
                          (0, l.jsx)(S.E, { variant: "text-xs/semibold", className: Z.Df, color: "none", children: o }),
                          (0, l.jsx)("div", { className: Z.Cj, style: { width: `${100 - a}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: Z.hr,
                      role: "progressbar",
                      "aria-valuenow": a,
                      children: (0, l.jsx)("div", { className: Z.SX, style: { width: `${a}%` } }),
                  }),
                  u.length > 0 && (0, l.jsx)(J, { isInventory: r, children: u.at(0) }),
              ],
          });
};
var et = s(736653),
    es = s(105292),
    el = s(382267);
let en = function (e) {
    let { className: t, color: s = "text-strong", textOpacity: n = 0.9 } = e,
        r = (0, et.DP)(),
        u = (0, c.M)(r);
    return (0, l.jsxs)(S.E, {
        variant: "text-xxs/medium",
        color: s,
        className: i()(el.P, t),
        children: [
            (0, l.jsx)("span", { className: el.r, style: { backgroundColor: `rgba(0, 0, 0, ${u ? 0.2 : 0.08})` } }),
            (0, l.jsx)("span", { style: { opacity: n }, children: es.intl.string(es.t.o6FLcF) }),
        ],
    });
};
var er = s(62405),
    ei = s(646917),
    eu = s(576761),
    ea = s(117634),
    eo = s(442734),
    ec = s(423121);
let eE = function (e) {
    let {
            className: t,
            autoplay: s,
            quest: n,
            questContent: r,
            taskDetails: u,
            location: a,
            sourceQuestContent: o,
            gameProfileSource: c,
        } = e,
        E = (0, b.mU)({ quest: n, taskDetails: u, location: a, sourceQuestContent: o, gameProfileSource: c }),
        d = (0, ei.z)(),
        A = (0, F.SD)(n, d),
        T = A && d === eu.MA.NITRO;
    return (0, l.jsxs)("div", {
        className: i()(ec.iE, t),
        children: [
            (0, l.jsx)(ea.A, { visible: T }),
            (0, l.jsx)(er.A, {
                autoplay: s,
                className: ec.Qq,
                quest: n,
                location: a,
                questContent: r,
                sourceQuestContent: o,
            }),
            (0, l.jsx)("div", {
                className: ec.C,
                children: (0, l.jsxs)("div", {
                    className: ec.P2,
                    children: [
                        (0, l.jsx)(S.E, { variant: "text-sm/normal", color: "text-default", children: E }),
                        A && (0, l.jsx)(eo.e, { questId: n.id, orbMultiplierEligibility: d }),
                    ],
                }),
            }),
        ],
    });
};
var ed = s(617986),
    eA = s(630037),
    eS = s(190107),
    eT = s(652215),
    eC = s(806931),
    em = s(405985);
function e_(e) {
    let { channelId: t, quest: s, previewQuest: r, isParticipatingOverride: N } = e,
        W = (0, V.wW)(),
        [Y, X] = n.useState(!1),
        J = n.useCallback(() => X(!0), []),
        Z = n.useCallback(() => X(!1), []),
        et = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        el = (0, o.bG)([I.A], () => I.A.getState().theme),
        ei = (0, c.M)(el) ? eT.NJ8.DARK : eT.NJ8.LIGHT,
        eu = (0, o.bG)([v.A], () => v.A.getParticipants(e.channelId), [e.channelId]),
        ea = (0, O.Dp)(M.p9.DESKTOP_ACCOUNT_PANEL_AREA),
        eo = (0, f.Yz)(ea?.creative),
        ec = (0, o.bG)([j.A], () => (null != eo ? (j.A.quests.get(eo) ?? null) : null), [eo]),
        { isCurrentUserStreamingQuestApplication: e_, isQuestInQuestBar: ex } = (0, o.cf)(
            [g.A],
            () => {
                var e;
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != s &&
                        null != et &&
                        ((e = g.A),
                        eu.some((t) => {
                            if (t.type !== eC.lp.STREAM || t.user.id !== et.id) return !1;
                            let l = (0, p.nr)(t.stream, e);
                            return null != l && (0, k.zS)(l, s);
                        })),
                    isQuestInQuestBar: ec?.id === s?.id,
                };
            },
            [et, s, eu, ec],
        ),
        eQ = (0, H.pU)(s)?.[0],
        ef = (0, o.bG)(
            [h.Ay, g.A],
            () => {
                let e = h.Ay.getRunningGames().map((e) => e.id);
                if ((0, H.xZ)(s) && null !== eQ && e.includes(eQ)) return !0;
                let t = null != et ? g.A.findActivity(et.id, (e) => e.type !== u.$.CUSTOM_STATUS) : null;
                return !!(null != t && (0, H.g5)(s) && (0, k.zS)(t, s));
            },
            [s, et, eQ],
        ),
        ev = !0 === N || e_ || ef,
        eh = (0, o.bG)([j.A], () => null != s && j.A.isEnrolling(s.id), [s]),
        eL = (0, o.bG)([v.A], () => (et?.id == null ? null : v.A.getParticipant(t, et.id)) != null, [t, et]),
        { launchInGameActivity: ep } = (0, F.zW)(s),
        eI = (0, F.S5)(s?.config.expiresAt),
        eN = (0, F.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        eg = n.useCallback(async () => {
            let { type: e } = await (0, U.Oy)(s.id, {
                questContent: M.uF.QUEST_LIVE_STREAM,
                questContentCTA: D.Cy.ACCEPT_QUEST,
                sourceQuestContent: M.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case U.WM.SUCCESS:
                    (0, z.vA)(s) && ep();
                    break;
                case U.WM.UNKNOWN_ERROR:
                    _.A.show({ title: es.intl.string(es.t.R0RpRX), body: es.intl.string(es.t.OXD41D) });
            }
        }, [s, ep]),
        eR = n.useCallback(() => {
            ((0, x.r)({
                type: Q.F.CLICK_INTERNAL,
                adCreativeType: a.p.QUEST,
                adCreativeId: s.id,
                questContentCTA: D.Cy.TRACK_PROGRESS,
                surfaceId: M.uF.QUEST_LIVE_STREAM,
                sourceQuestContent: M.uF.QUEST_LIVE_STREAM,
                impressionId: W(),
            }),
                (0, ed.mA)({ fromContent: M.uF.QUEST_LIVE_STREAM, questId: s.id }));
        }, [s, W]),
        eU = n.useCallback(() => {
            ((0, x.r)({
                type: Q.F.CLICK_INTERNAL,
                adCreativeType: a.p.QUEST,
                adCreativeId: s.id,
                questContentCTA: D.Cy.LEARN_MORE,
                surfaceId: M.uF.QUEST_LIVE_STREAM,
                sourceQuestContent: M.uF.QUEST_LIVE_STREAM,
                impressionId: W(),
            }),
                (0, ed.mA)({ fromContent: M.uF.QUEST_LIVE_STREAM, questId: s.id }));
        }, [s, W]),
        ej = (0, eA.D)({ quest: s, questContent: M.uF.QUEST_LIVE_STREAM, sourceQuestContent: M.uF.QUEST_LIVE_STREAM }),
        eM = n.useMemo(() => (0, G.L)({ quest: s, location: eS.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        ey = (0, b.NA)({ quest: s }),
        eb = (0, z.vA)(s),
        eF = (0, F.LS)(s),
        eq = s.userStatus?.enrolledAt != null,
        eD = s.userStatus?.completedAt != null,
        eV = null != r && s.userStatus?.claimedAt == null,
        eG = null != s.userStatus && (0, w.gO)(s.userStatus, M.uF.QUEST_LIVE_STREAM),
        eO = null != s.userStatus && (0, w.gO)(s.userStatus, M.uF.QUEST_BAR),
        eP = ex && !eO,
        ew = y.t.useConfig({ location: eS.rE.QUEST_CHANNEL_CALL_HEADER }),
        ek = (0, K.Pd)(s);
    if (
        (eM.info({
            isQuestCallHeaderDismissed: eG,
            isQuestExpired: eF,
            isQuestBarShowing: eP,
            isCurrentUserCallParticipant: eL,
        }),
        (!eV && (eG || eF || eP)) || (!eV && !eL))
    )
        return null;
    let eH = (0, H.Yh)(s),
        ez = (0, l.jsx)(er.A, {
            className: em.Qq,
            autoplay: Y,
            quest: s,
            location: eS.rE.QUEST_CHANNEL_CALL_HEADER,
            questContent: M.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: M.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: i()(em.iE, { [em.rH]: eq }),
        onFocus: J,
        onMouseEnter: J,
        onBlur: Z,
        onMouseLeave: Z,
        children: [
            !eq &&
                (0, l.jsxs)("div", {
                    className: em.D9,
                    children: [(0, l.jsx)(en, { bgOpacity: 0.32, className: em.Pu }), ez],
                }),
            (0, l.jsxs)("div", {
                className: em.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: em.R_,
                        children: [
                            eq && ev
                                ? ez
                                : (0, l.jsx)("img", {
                                      className: em.rC,
                                      alt: s.config.messages.gameTitle,
                                      src: (0, q.tW)(s, q.fY.GAME_TILE, ei).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: em.Mg,
                                        children: [
                                            (0, l.jsx)(E.D, {
                                                className: em.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: ev
                                                    ? (0, P.YT)({ quest: s, taskDetails: eH })
                                                    : es.intl.formatToPlainString(es.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(B.C, {
                                                questContent: M.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: M.uF.QUEST_LIVE_STREAM,
                                                quest: s,
                                                preventIdle: !0,
                                                shouldShowDisclosure: s.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(d.D, {
                                                        ...e,
                                                        className: em.rb,
                                                        "aria-label": es.intl.string(es.t.DEoVWZ),
                                                        children: (0, l.jsx)(A.MoreHorizontalIcon, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: em.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(S.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eD
                                            ? es.intl.formatToPlainString(es.t.APddvF, { expirationDate: eN })
                                            : es.intl.formatToPlainString(es.t["pX+fmn"], { expirationDate: eI }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eq &&
                        !eD &&
                        !ev &&
                        (0, l.jsx)(eE, {
                            autoplay: Y,
                            quest: s,
                            questContent: M.uF.QUEST_LIVE_STREAM,
                            taskDetails: eH,
                            location: eS.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: M.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: L.GameProfileSources.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: em.uz,
                        children: [
                            !eq &&
                                (0, l.jsxs)(T.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(C.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: es.intl.string(es.t.LLLLPD),
                                            onClick: eU,
                                            fullWidth: !eb || s.config.features.includes(eS.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        ew.enabled &&
                                        ek === K.UA.UNENROLLED &&
                                        ew.enabledQuestStates.has(K.UA.UNENROLLED) &&
                                        !eF
                                            ? (0, l.jsx)($.A, {
                                                  quest: s,
                                                  surface: K.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: M.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: M.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(C.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: ey,
                                                  onClick: eg,
                                                  loading: eh,
                                              }),
                                    ],
                                }),
                            eq && !eD && ev && (0, l.jsx)(ee, { color: m.A.colors.BACKGROUND_BRAND, quest: s }),
                            eq &&
                                !eD &&
                                !ev &&
                                (0, l.jsx)(C.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.VN1Ajl),
                                    onClick: eR,
                                }),
                            eD &&
                                (0, l.jsx)(C.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.cfY4PE),
                                    onClick: ej,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ex(e) {
    let t = n.useContext(N.vG),
        s = (0, o.bG)([j.A], () => null != j.A.questEnrollmentBlockedUntil, []),
        r = (0, o.bG)([j.A], () => j.A.quests),
        i = (0, F.oH)(Array.from(r.values())),
        u = n.useMemo(() => (0, z.$e)(r, eS.Ls), [r]),
        a = (0, o.bG)([v.A], () => v.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, o.bG)(
            [g.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === eC.lp.STREAM) {
                                  let e = (0, p.nr)(l.stream, s) ?? null,
                                      n = (0, k.nq)(t, e);
                                  if (null != n && n.userStatus?.claimedAt == null) return n;
                              }
                              for (let l of e)
                                  if (!(0, eC.PJ)(l))
                                      for (let e of s.getActivities(l.user.id)) {
                                          let s = (0, k.nq)(t, e);
                                          if (null != s && s.userStatus?.claimedAt == null) return s;
                                      }
                          }
                          return null;
                      })(a, u, g.A),
            [a, u, i, e.previewQuest],
        ),
        E = c?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != E && (0, U.yO)([E], M.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let d = (0, o.bG)(
            [j.A],
            () => {
                let e = j.A.earnedQuestForPlacement.get(M.uF.QUEST_LIVE_STREAM);
                if (null == e || null == E) return null;
                let t = e.earnedDecisionByQuestId.get(E);
                return (0, w.Oh)(t) && t.shouldDeliver ? j.A.getQuest(E) : null;
            },
            [E],
        ),
        [A, S] = n.useState(null);
    n.useEffect(() => {
        null != d ? S(d) : null === E && S(null);
    }, [d, E]);
    let T = d ?? (null !== E ? A : null),
        C = e.previewQuest ?? T;
    return null == C || s
        ? null
        : (0, l.jsx)(W.R, {
              questOrQuests: C,
              overrideVisibility: !t,
              questContent: M.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: M.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(e_, { ...e, quest: C }),
          });
}
let eQ = function (e) {
    let t = (0, o.bG)([R.default], () => R.default.getCurrentUser()),
        s = (0, o.bG)([v.A], () => (t?.id == null ? null : v.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, o.bG)([j.A], () => j.A.getQuestPreviewOverride(M.uF.QUEST_LIVE_STREAM), []);
    if (null == e.previewQuest && !s) return null;
    let r = e.previewQuest ?? n;
    return (0, l.jsx)(ex, { ...e, previewQuest: r });
};
