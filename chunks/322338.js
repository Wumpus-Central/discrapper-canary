s.d(t, { A: () => eQ });
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
    I = s(952818),
    L = s(409626),
    h = s(834757),
    R = s(363195),
    f = s(461782),
    v = s(290863),
    g = s(287809),
    N = s(352774),
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
    O = s(158403),
    G = s(651892),
    w = s(710969),
    k = s(639214),
    H = s(792620),
    z = s(814793),
    W = s(73473),
    B = s(270045),
    K = s(657113),
    $ = s(79545);
s(134528), s(947204);
var X = s(885574),
    Y = s(661644);
let J = n.forwardRef(function (e, t) {
    let { isInventory: s, style: n, children: u } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: Y.Q,
        style: { marginTop: 8 * !!s, ...n },
        children: [
            (0, l.jsx)(X.m, {
                size: "custom",
                className: Y.G,
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
var Z = s(590524);
let ee = function (e) {
    let { className: t, color: s = C.A.colors.WHITE, quest: n, isInventory: u } = e,
        i = (0, b.aC)(e.quest),
        { percentComplete: a, completedRatioDisplay: o } = (0, b.O9)(n);
    return !u && i.length > 0
        ? (0, l.jsx)(J, { children: i.at(0) })
        : (0, l.jsxs)("div", {
              className: r()(Z.iE, t),
              style: { color: s.css },
              children: [
                  (0, l.jsxs)("div", {
                      className: Z.O,
                      children: [
                          (0, l.jsx)(A.E, { variant: "text-xs/semibold", className: Z.Df, color: "none", children: o }),
                          (0, l.jsx)("div", { className: Z.Cj, style: { width: `${100 - a}%` } }),
                      ],
                  }),
                  (0, l.jsx)("div", {
                      className: Z.hr,
                      role: "progressbar",
                      "aria-valuenow": a,
                      children: (0, l.jsx)("div", { className: Z.SX, style: { width: `${a}%` } }),
                  }),
                  i.length > 0 && (0, l.jsx)(J, { isInventory: u, children: i.at(0) }),
              ],
          });
};
var et = s(736653),
    es = s(375708),
    el = s(774056);
let en = function (e) {
    let { className: t, color: s = "text-strong", textOpacity: n = 0.9 } = e,
        u = (0, et.DP)(),
        i = (0, o.M)(u);
    return (0, l.jsxs)(A.E, {
        variant: "text-xxs/medium",
        color: s,
        className: r()(el.P, t),
        children: [
            (0, l.jsx)("span", { className: el.r, style: { backgroundColor: `rgba(0, 0, 0, ${i ? 0.2 : 0.08})` } }),
            (0, l.jsx)("span", { style: { opacity: n }, children: es.intl.string(es.t.o6FLcF) }),
        ],
    });
};
var eu = s(646764),
    er = s(646917),
    ei = s(576761),
    ea = s(895253),
    eo = s(442734),
    ec = s(777490);
let eE = function (e) {
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
        d = (0, er.z)(),
        S = (0, b.SD)(n, d),
        T = S && d === ei.MA.NITRO;
    return (0, l.jsxs)("div", {
        className: r()(ec.iE, t),
        children: [
            (0, l.jsx)(ea.A, { visible: T }),
            (0, l.jsx)(eu.A, { autoplay: s, className: ec.Qq, quest: n, questContent: u, sourceQuestContent: o }),
            (0, l.jsx)("div", {
                className: ec.C,
                children: (0, l.jsxs)("div", {
                    className: ec.P2,
                    children: [
                        (0, l.jsx)(A.E, { variant: "text-sm/normal", color: "text-default", children: E }),
                        S && (0, l.jsx)(eo.e, { questId: n.id, orbMultiplierEligibility: d }),
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
    e_ = s(838834);
function em(e) {
    let { channelId: t, quest: s, previewQuest: u, isParticipatingOverride: f } = e,
        W = (0, F.Ut)(),
        X = (0, D.go)(),
        [Y, J] = n.useState(!1),
        Z = n.useCallback(() => J(!0), []),
        et = n.useCallback(() => J(!1), []),
        el = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        er = (0, a.bG)([R.A], () => R.A.getState().theme),
        ei = (0, o.M)(er) ? eT.NJ8.DARK : eT.NJ8.LIGHT,
        ea = (0, a.bG)([Q.A], () => Q.A.getParticipants(e.channelId), [e.channelId]),
        eo = (0, O.Dp)(U.p9.DESKTOP_ACCOUNT_PANEL_AREA),
        ec = (0, a.bG)([p.A], () => (eo?.questId != null ? (p.A.quests.get(eo.questId) ?? null) : null), [eo]),
        { isCurrentUserStreamingQuestApplication: em, isQuestInQuestBar: ex } = (0, a.cf)([v.A], () => {
            var e;
            return {
                isCurrentUserStreamingQuestApplication:
                    null != s &&
                    null != el &&
                    ((e = v.A),
                    ea.some((t) => {
                        if (t.type !== eC.lp.STREAM || t.user.id !== el.id) return !1;
                        let l = (0, h.nr)(t.stream, e);
                        return null != l && (0, k.zS)(l, s);
                    })),
                isQuestInQuestBar: ec?.id === s?.id,
            };
        }, [el, s, ea, ec]),
        eQ = (0, H.pU)(s)?.[0],
        eI = (0, a.bG)([I.Ay, v.A], () => {
            let e = I.Ay.getRunningGames().map((e) => e.id);
            if ((0, H.xZ)(s) && null !== eQ && e.includes(eQ)) return !0;
            let t = null != el ? v.A.findActivity(el.id, (e) => e.type !== eT.$pd.CUSTOM_STATUS) : null;
            return !!(null != t && (0, H.g5)(s) && (0, k.zS)(t, s));
        }, [s, el, eQ]),
        eL = !0 === f || em || eI,
        eh = (0, a.bG)([p.A], () => null != s && p.A.isEnrolling(s.id), [s]),
        eR = (0, a.bG)([Q.A], () => (el?.id == null ? null : Q.A.getParticipant(t, el.id)) != null, [t, el]),
        { launchInGameActivity: ef } = (0, b.zW)(s),
        ev = (0, b.S5)(s?.config.expiresAt),
        eg = (0, b.S5)(s?.config.rewardsConfig.rewardsExpireAt),
        eN = n.useCallback(async () => {
            let { type: e } = await (0, N.Oy)(s.id, {
                questContent: U.uF.QUEST_LIVE_STREAM,
                questContentCTA: V.Cy.ACCEPT_QUEST,
                sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
            });
            switch (e) {
                case N.WM.SUCCESS:
                    (0, z.vA)(s) && ef();
                    break;
                case N.WM.CAPTCHA_FAILED:
                    _.A.show({ title: es.intl.string(es.t["/CidxO"]), body: es.intl.string(es.t.HQdHg6) });
                    break;
                case N.WM.UNKNOWN_ERROR:
                    _.A.show({ title: es.intl.string(es.t.R0RpRX), body: es.intl.string(es.t.OXD41D) });
            }
        }, [s, ef]),
        ep = n.useCallback(() => {
            (0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: x.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      surfaceId: U.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                      impressionId: X,
                  })
                : W({
                      questId: s.id,
                      questContent: U.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.TRACK_PROGRESS,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                  }),
                (0, ed.mA)({ fromContent: U.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, W, X]),
        eU = n.useCallback(() => {
            (0, j.E5)(j.kI.STEP_2_CLICKED_INTERNAL, "quest_channel_call_header")
                ? (0, m.r)({
                      type: x.F.CLICK_INTERNAL,
                      adCreativeType: i.p.QUEST,
                      adCreativeId: s.id,
                      questContentCTA: V.Cy.LEARN_MORE,
                      surfaceId: U.uF.QUEST_LIVE_STREAM,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                      impressionId: X,
                  })
                : W({
                      questId: s.id,
                      questContent: U.uF.QUEST_LIVE_STREAM,
                      questContentCTA: V.Cy.LEARN_MORE,
                      sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                  }),
                (0, ed.mA)({ fromContent: U.uF.QUEST_LIVE_STREAM, questId: s.id });
        }, [s, W, X]),
        ej = (0, eA.D)({ quest: s, questContent: U.uF.QUEST_LIVE_STREAM, sourceQuestContent: U.uF.QUEST_LIVE_STREAM }),
        eM = n.useMemo(() => (0, P.L)({ quest: s, location: eS.rE.QUEST_CHANNEL_CALL_HEADER }), [s]),
        ey = (0, y.NA)({ quest: s }),
        eb = (0, z.vA)(s),
        eq = (0, b.LS)(s),
        eF = s.userStatus?.enrolledAt != null,
        eV = s.userStatus?.completedAt != null,
        eD = null != u && s.userStatus?.claimedAt == null,
        eP = null != s.userStatus && (0, w.gO)(s.userStatus, U.uF.QUEST_LIVE_STREAM),
        eO = null != s.userStatus && (0, w.gO)(s.userStatus, U.uF.QUEST_BAR),
        eG = ex && !eO,
        ew = M.t.useConfig({ location: eS.rE.QUEST_CHANNEL_CALL_HEADER }),
        ek = (0, $.Pd)(s);
    if (
        (eM.info({
            isQuestCallHeaderDismissed: eP,
            isQuestExpired: eq,
            isQuestBarShowing: eG,
            isCurrentUserCallParticipant: eR,
        }),
        (!eD && (eP || eq || eG)) || (!eD && !eR))
    )
        return null;
    let eH = (0, H.Yh)(s),
        ez = (0, l.jsx)(eu.A, {
            className: e_.Qq,
            autoplay: Y,
            quest: s,
            questContent: U.uF.QUEST_LIVE_STREAM,
            sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
        });
    return (0, l.jsxs)("div", {
        className: r()(e_.iE, { [e_.rH]: eF }),
        onFocus: Z,
        onMouseEnter: Z,
        onBlur: et,
        onMouseLeave: et,
        children: [
            !eF &&
                (0, l.jsxs)("div", {
                    className: e_.D9,
                    children: [(0, l.jsx)(en, { bgOpacity: 0.32, className: e_.Pu }), ez],
                }),
            (0, l.jsxs)("div", {
                className: e_.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: e_.R_,
                        children: [
                            eF && eL
                                ? ez
                                : (0, l.jsx)("img", {
                                      className: e_.rC,
                                      alt: s.config.messages.gameTitle,
                                      src: (0, q.tW)(s, q.fY.GAME_TILE, ei).url,
                                  }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: e_.Mg,
                                        children: [
                                            (0, l.jsx)(c.D, {
                                                className: e_.bB,
                                                variant: "heading-md/semibold",
                                                color: "text-strong",
                                                children: eL
                                                    ? (0, G.YT)({ quest: s, taskDetails: eH })
                                                    : es.intl.formatToPlainString(es.t.EQa7os, {
                                                          questName: s.config.messages.questName,
                                                      }),
                                            }),
                                            (0, l.jsx)(B.C, {
                                                questContent: U.uF.QUEST_LIVE_STREAM,
                                                sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                                                quest: s,
                                                preventIdle: !0,
                                                shouldShowDisclosure: s.userStatus?.enrolledAt == null,
                                                children: (e) =>
                                                    (0, l.jsx)(E.D, {
                                                        ...e,
                                                        className: e_.rb,
                                                        "aria-label": es.intl.string(es.t.DEoVWZ),
                                                        children: (0, l.jsx)(d.j, {
                                                            size: "md",
                                                            color: "currentColor",
                                                            className: e_.Bx,
                                                        }),
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(A.E, {
                                        color: "text-default",
                                        variant: "text-xs/medium",
                                        children: eV
                                            ? es.intl.formatToPlainString(es.t.APddvF, { expirationDate: eg })
                                            : es.intl.formatToPlainString(es.t["pX+fmn"], { expirationDate: ev }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    eF &&
                        !eV &&
                        !eL &&
                        (0, l.jsx)(eE, {
                            autoplay: Y,
                            quest: s,
                            questContent: U.uF.QUEST_LIVE_STREAM,
                            taskDetails: eH,
                            location: eS.rE.QUEST_CHANNEL_CALL_HEADER,
                            sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                            gameProfileSource: L.GameProfileSources.QuestLiveStream,
                        }),
                    (0, l.jsxs)("div", {
                        className: e_.uz,
                        children: [
                            !eF &&
                                (0, l.jsxs)(S.B, {
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(T.$, {
                                            size: "sm",
                                            variant: "secondary",
                                            text: es.intl.string(es.t.LLLLPD),
                                            onClick: eU,
                                            fullWidth: !eb || s.config.features.includes(eS.Li.CLOUD_GAMING_ACTIVITY),
                                        }),
                                        ew.enabled &&
                                        ek === $.UA.UNENROLLED &&
                                        ew.enabledQuestStates.has($.UA.UNENROLLED) &&
                                        !eq
                                            ? (0, l.jsx)(K.A, {
                                                  quest: s,
                                                  surface: $.V3.VOICE_CALL_HEADER,
                                                  size: "sm",
                                                  analyticsCtxQuestContent: U.uF.QUEST_LIVE_STREAM,
                                                  analyticsCtxSourceQuestContent: U.uF.QUEST_LIVE_STREAM,
                                              })
                                            : (0, l.jsx)(T.$, {
                                                  size: "sm",
                                                  variant: "primary",
                                                  fullWidth: !0,
                                                  text: ey,
                                                  onClick: eN,
                                                  loading: eh,
                                              }),
                                    ],
                                }),
                            eF && !eV && eL && (0, l.jsx)(ee, { color: C.A.colors.BACKGROUND_BRAND, quest: s }),
                            eF &&
                                !eV &&
                                !eL &&
                                (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    fullWidth: !0,
                                    text: es.intl.string(es.t.VN1Ajl),
                                    onClick: ep,
                                }),
                            eV &&
                                (0, l.jsx)(T.$, {
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
    let t = n.useContext(f.vG),
        s = (0, a.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil, []),
        u = (0, a.bG)([p.A], () => p.A.quests),
        r = (0, b.oH)(Array.from(u.values())),
        i = n.useMemo(() => (0, z.$e)(u, eS.Ls), [u]),
        o = (0, a.bG)([Q.A], () => Q.A.getParticipants(e.channelId), [e.channelId]),
        c = (0, a.bG)(
            [v.A],
            () =>
                null != e.previewQuest
                    ? e.previewQuest
                    : (function (e, t, s) {
                          for (let l of e) {
                              if (l.type === eC.lp.STREAM) {
                                  let e = (0, h.nr)(l.stream, s) ?? null,
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
                      })(o, i, v.A),
            [o, i, r, e.previewQuest],
        ),
        E = c?.id ?? null;
    n.useEffect(() => {
        null == e.previewQuest && null != E && (0, N.yO)([E], U.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader");
    }, [E, e.previewQuest]);
    let d = (0, a.bG)([p.A], () => {
            let e = p.A.earnedQuestForPlacement.get(U.uF.QUEST_LIVE_STREAM);
            if (null == e || null == E) return null;
            let t = e.earnedDecisionByQuestId.get(E);
            return (0, w.Oh)(t) && t.shouldDeliver ? p.A.getQuest(E) : null;
        }, [E]),
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
              questContent: U.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: U.uF.QUEST_LIVE_STREAM,
              children: () => (0, l.jsx)(em, { ...e, quest: C }),
          });
}
let eQ = function (e) {
    let t = (0, a.bG)([g.default], () => g.default.getCurrentUser()),
        s = (0, a.bG)([Q.A], () => (t?.id == null ? null : Q.A.getParticipant(e.channelId, t.id)) != null, [
            e.channelId,
            t,
        ]),
        n = (0, a.bG)([p.A], () => p.A.getQuestPreviewOverride(U.uF.QUEST_LIVE_STREAM), []),
        u = e.previewQuest ?? n;
    return s || null != u ? (0, l.jsx)(ex, { ...e, previewQuest: u }) : null;
};
