s.d(t, { A: () => ex });
var l = s(477900),
    n = s(582128),
    r = s(503698),
    i = s.n(r),
    u = s(323889),
    a = s(17928),
    o = s(462887),
    c = s(297264),
    E = s(939249),
    d = s(365199),
    A = s(834730),
    S = s(331322),
    T = s(821609),
    C = s(661531),
    m = s(157559),
    _ = s(507395),
    x = s(144779),
    Q = s(107195),
    f = s(198052),
    v = s(952818),
    h = s(409626),
    p = s(834757),
    L = s(363195),
    I = s(461782),
    N = s(290863),
    g = s(287809),
    R = s(396813),
    U = s(859703),
    j = s(738822),
    M = s(112142),
    y = s(3738),
    b = s(77870),
    F = s(291749),
    q = s(590202),
    D = s(971649),
    V = s(851936),
    G = s(773545),
    O = s(651892),
    P = s(710969),
    w = s(639214),
    k = s(792620),
    H = s(814793),
    z = s(657792),
    W = s(270045),
    B = s(887899),
    $ = s(79545);
(s(134528), s(947204));
var K = s(885574),
    Y = s(939);
let X = function (e) {
    let { isInventory: t, style: s, children: n, ref: r } = e;
    return (0, l.jsxs)("div", {
        ref: r,
        className: Y.Q,
        style: { marginTop: 8 * !!t, ...s },
        children: [
            (0, l.jsx)(K.CircleInformationIcon, {
                size: "custom",
                className: Y.G,
                height: t ? 16 : 12,
                width: t ? 16 : 12,
                color: t ? C.A.colors.TEXT_MUTED.css : C.A.colors.WHITE.css,
            }),
            (0, l.jsx)(A.E, {
                color: t ? "text-muted" : "text-overlay-light",
                variant: t ? "text-xs/normal" : "text-xxs/normal",
                children: n,
            }),
        ],
    });
};
var J = s(367703);
let Z = function (e) {
    let { className: t, color: s = C.A.colors.WHITE, quest: n, isInventory: r } = e,
        u = (0, b.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, b.O9)(n);
    return !r && u.length > 0
        ? (0, l.jsx)(X, { children: u.at(0) })
        : (0, l.jsxs)("div", {
              className: i()(J.iE, t),
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
                  u.length > 0 && (0, l.jsx)(X, { isInventory: r, children: u.at(0) }),
              ],
          });
};
var ee = s(736653),
    et = s(105292),
    es = s(382267);
let el = function (e) {
    let { className: t, color: s = "text-strong", textOpacity: n = 0.9 } = e,
        r = (0, ee.DP)(),
        u = (0, o.M)(r);
    return (0, l.jsxs)(A.E, {
        variant: "text-xxs/medium",
        color: s,
        className: i()(es.P, t),
        children: [
            (0, l.jsx)("span", { className: es.r, style: { backgroundColor: `rgba(0, 0, 0, ${u ? 0.2 : 0.08})` } }),
            (0, l.jsx)("span", { style: { opacity: n }, children: et.intl.string(et.t.o6FLcF) }),
        ],
    });
};
var en = s(62405),
    er = s(646917),
    ei = s(576761),
    eu = s(117634),
    ea = s(442734),
    eo = s(423121);
let ec = function (e) {
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
        E = (0, y.mU)({ quest: n, taskDetails: u, location: a, sourceQuestContent: o, gameProfileSource: c }),
        d = (0, er.z)(),
        S = (0, b.SD)(n, d),
        T = S && d === ei.MA.NITRO;
    return (0, l.jsxs)("div", {
        className: i()(eo.iE, t),
        children: [
            (0, l.jsx)(eu.A, { visible: T }),
            (0, l.jsx)(en.A, {
                autoplay: s,
                className: eo.Qq,
                quest: n,
                location: a,
                questContent: r,
                sourceQuestContent: o,
            }),
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
    eC = s(405985);
function em(e) {
    let { channelId: t, quest: s, previewQuest: r, isParticipatingOverride: I } = e,
        z = (0, D.wW)(),
        [K, Y] = n.useState(!1),
        X = n.useCallback(() => Y(!0), []),
        J = n.useCallback(() => Y(!1), []),
        ee = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        es = (0, a.bG)([L.A], () => L.A.getState().theme),
        er = (0, o.M)(es) ? eS.NJ8.DARK : eS.NJ8.LIGHT,
        ei = (0, a.bG)([f.A], () => f.A.getParticipants(e.channelId), [e.channelId]),
        eu = (0, G.Dp)(j.p9.DESKTOP_ACCOUNT_PANEL_AREA),
        ea = (0, Q.Yz)(eu?.creative),
        eo = (0, a.bG)([U.A], () => (null != ea ? (U.A.quests.get(ea) ?? null) : null), [ea]),
        { isCurrentUserStreamingQuestApplication: em, isQuestInQuestBar: e_ } = (0, a.cf)(
            [N.A],
            () => {
                var e;
                return {
                    isCurrentUserStreamingQuestApplication:
                        null != s &&
                        null != ee &&
                        ((e = N.A),
                        ei.some((t) => {
                            if (t.type !== eT.lp.STREAM || t.user.id !== ee.id) return !1;
                            let l = (0, p.nr)(t.stream, e);
                            return null != l && (0, w.zS)(l, s);
                        })),
                    isQuestInQuestBar: eo?.id === s?.id,
                };
            },
            [ee, s, ei, eo],
        ),
        ex = (0, k.pU)(s)?.[0],
        eQ = (0, a.bG)(
            [v.Ay, N.A],
            () => {
                let e = v.Ay.getRunningGames().map((e) => e.id);
                if ((0, k.xZ)(s) && null !== ex && e.includes(ex)) return !0;
                let t = null != ee ? N.A.findActivity(ee.id, (e) => e.type !== eS.$pd.CUSTOM_STATUS) : null;
                return !!(null != t && (0, k.g5)(s) && (0, w.zS)(t, s));
            },
            [s, ee, ex],
        ),
        ef = !0 === I || em || eQ,
        ev = (0, a.bG)([U.A], () => null != s && U.A.isEnrolling(s.id), [s]),
        eh = (0, a.bG)([f.A], () => (ee?.id == null ? null : f.A.getParticipant(t, ee.id)) != null, [t, ee]),
        { launchInGameActivity: ep } = (0, b.zW)(s),
        eL = (0, b.S5)(s?.config.expiresAt),
        eI = (0, b.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        eN = n.useCallback(async () => {
            let { type: e } = await (0, R.Oy)(s.id, {
                questContent: j.uF.QUEST_LIVE_STREAM,
                questContentCTA: q.Cy.ACCEPT_QUEST,
                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case R.WM.SUCCESS:
                    (0, H.vA)(s) && ep();
                    break;
                case R.WM.UNKNOWN_ERROR:
                    m.A.show({ title: et.intl.string(et.t.R0RpRX), body: et.intl.string(et.t.OXD41D) });
            }
        }, [s, ep]),
        eg = n.useCallback(() => {
            ((0, _.r)({
                type: x.F.CLICK_INTERNAL,
                adCreativeType: u.p.QUEST,
                adCreativeId: s.id,
                questContentCTA: q.Cy.TRACK_PROGRESS,
                surfaceId: j.uF.QUEST_LIVE_STREAM,
                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                impressionId: z(),
            }),
                (0, eE.mA)({ fromContent: j.uF.QUEST_LIVE_STREAM, questId: s.id }));
        }, [s, z]),
        eR = n.useCallback(() => {
            ((0, _.r)({
                type: x.F.CLICK_INTERNAL,
                adCreativeType: u.p.QUEST,
                adCreativeId: s.id,
                questContentCTA: q.Cy.LEARN_MORE,
                surfaceId: j.uF.QUEST_LIVE_STREAM,
                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                impressionId: z(),
            }),
                (0, eE.mA)({ fromContent: j.uF.QUEST_LIVE_STREAM, questId: s.id }));
        }, [s, z]),
        eU = (0, ed.D)({ quest: s, questContent: j.uF.QUEST_LIVE_STREAM, sourceQuestContent: j.uF.QUEST_LIVE_STREAM }),
        ej = n.useMemo(() => (0, V.L)({ quest: s, location: eA.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        eM = (0, y.NA)({ quest: s }),
        ey = (0, H.vA)(s),
        eb = (0, b.LS)(s),
        eF = s.userStatus?.enrolledAt != null,
        eq = s.userStatus?.completedAt != null,
        eD = null != r && s.userStatus?.claimedAt == null,
        eV = null != s.userStatus && (0, P.gO)(s.userStatus, j.uF.QUEST_LIVE_STREAM),
        eG = null != s.userStatus && (0, P.gO)(s.userStatus, j.uF.QUEST_BAR),
        eO = e_ && !eG,
        eP = M.t.useConfig({ location: eA.rE.QUEST_CHANNEL_CALL_HEADER }),
        ew = (0, $.Pd)(s);
    if (
        (ej.info({
            isQuestCallHeaderDismissed: eV,
            isQuestExpired: eb,
            isQuestBarShowing: eO,
            isCurrentUserCallParticipant: eh,
        }),
        (!eD && (eV || eb || eO)) || (!eD && !eh))
    )
        return null;
    let ek = (0, k.Yh)(s),
        eH = (0, l.jsx)(en.A, {
            className: eC.Qq,
            autoplay: K,
            quest: s,
            location: eA.rE.QUEST_CHANNEL_CALL_HEADER,
            questContent: j.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: i()(eC.iE, { [eC.rH]: eF }),
        onFocus: X,
        onMouseEnter: X,
        onBlur: J,
        onMouseLeave: J,
        children: [
            !eF &&
                (0, l.jsxs)("div", {
                    className: eC.D9,
                    children: [(0, l.jsx)(el, { bgOpacity: 0.32, className: eC.Pu }), eH],
                }),
            (0, l.jsxs)("div", {
                className: eC.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: eC.R_,
                        children: [
                            eF && ef
                                ? eH
                                : (0, l.jsx)("img", {
                                      className: eC.rC,
                                      alt: s.config.messages.gameTitle,
                                      src: (0, F.tW)(s, F.fY.GAME_TILE, er).url,
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
                                                children: ef
                                                    ? (0, O.YT)({ quest: s, taskDetails: ek })
                                                    : et.intl.formatToPlainString(et.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(W.C, {
                                                questContent: j.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                                                quest: s,
                                                preventIdle: !0,
                                                shouldShowDisclosure: s.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(E.D, {
                                                        ...e,
                                                        className: eC.rb,
                                                        "aria-label": et.intl.string(et.t.DEoVWZ),
                                                        children: (0, l.jsx)(d.MoreHorizontalIcon, {
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
                                            ? et.intl.formatToPlainString(et.t.APddvF, { expirationDate: eI })
                                            : et.intl.formatToPlainString(et.t["pX+fmn"], { expirationDate: eL }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eF &&
                        !eq &&
                        !ef &&
                        (0, l.jsx)(ec, {
                            autoplay: K,
                            quest: s,
                            questContent: j.uF.QUEST_LIVE_STREAM,
                            taskDetails: ek,
                            location: eA.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: h.GameProfileSources.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: eC.uz,
                        children: [
                            !eF &&
                                (0, l.jsxs)(S.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(T.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: et.intl.string(et.t.LLLLPD),
                                            onClick: eR,
                                            fullWidth: !ey || s.config.features.includes(eA.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        eP.enabled &&
                                        ew === $.UA.UNENROLLED &&
                                        eP.enabledQuestStates.has($.UA.UNENROLLED) &&
                                        !eb
                                            ? (0, l.jsx)(B.A, {
                                                  quest: s,
                                                  surface: $.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: j.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: j.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(T.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: eM,
                                                  onClick: eN,
                                                  loading: ev,
                                              }),
                                    ],
                                }),
                            eF && !eq && ef && (0, l.jsx)(Z, { color: C.A.colors.BACKGROUND_BRAND, quest: s }),
                            eF &&
                                !eq &&
                                !ef &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: et.intl.string(et.t.VN1Ajl),
                                    onClick: eg,
                                }),
                            eq &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: et.intl.string(et.t.cfY4PE),
                                    onClick: eU,
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let t = n.useContext(I.vG),
        s = (0, a.bG)([U.A], () => null != U.A.questEnrollmentBlockedUntil, []),
        r = (0, a.bG)([U.A], () => U.A.quests),
        i = (0, b.oH)(Array.from(r.values())),
        u = n.useMemo(() => (0, H.$e)(r, eA.Ls), [r]),
        o = (0, a.bG)([f.A], () => f.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, a.bG)(
            [N.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === eT.lp.STREAM) {
                                  let e = (0, p.nr)(l.stream, s) ?? null,
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
                      })(o, u, N.A),
            [o, u, i, e.previewQuest],
        ),
        E = c?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != E && (0, R.yO)([E], j.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let d = (0, a.bG)(
            [U.A],
            () => {
                let e = U.A.earnedQuestForPlacement.get(j.uF.QUEST_LIVE_STREAM);
                if (null == e || null == E) return null;
                let t = e.earnedDecisionByQuestId.get(E);
                return (0, P.Oh)(t) && t.shouldDeliver ? U.A.getQuest(E) : null;
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
        : (0, l.jsx)(z.R, {
              questOrQuests: C,
              overrideVisibility: !t,
              questContent: j.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: j.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(em, { ...e, quest: C }),
          });
}
let ex = function (e) {
    let t = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        s = (0, a.bG)([f.A], () => (t?.id == null ? null : f.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, a.bG)([U.A], () => U.A.getQuestPreviewOverride(j.uF.QUEST_LIVE_STREAM), []);
    if (null == e.previewQuest && !s) return null;
    let r = e.previewQuest ?? n;
    return (0, l.jsx)(e_, { ...e, previewQuest: r });
};
