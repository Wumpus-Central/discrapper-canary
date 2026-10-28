n.d(e, { A9: () => x, mU: () => U, Jf: () => Q, tH: () => q, NA: () => V, XR: () => Y, VX: () => b });
var i = n(582128),
    r = n(731355),
    l = n(118751),
    u = n(17928);
n(166352);
var a = n(409626),
    o = n(692969),
    s = n(773669),
    c = n(287809),
    f = n(975571),
    g = n(474090),
    m = n(738822),
    d = n(477900),
    A = n(939249),
    I = n(834730),
    E = n(194267),
    T = n(398889),
    C = n(590202),
    S = n(284846),
    v = n(546121),
    p = n(651892),
    _ = n(620954),
    G = n(801365),
    N = n(792620),
    R = n(814793),
    L = n(77870),
    h = n(190107),
    D = n(652215),
    P = n(202541),
    O = n(105292);
function w(t, e, n) {
    return n ? O.intl.formatToPlainString(t, e) : O.intl.format(t, e);
}
function y(t) {
    let { hasRewardDuration: e, shouldShowGameProfileLink: n } = t;
    return e ? (n ? O.t["/4XT0b"] : O.t["0hwcvM"]) : n ? O.t.tQoqXX : O.t["eb/Sna"];
}
function k(t) {
    return t ? O.t.klYWbT : O.t.ziB0HF;
}
function M(t) {
    return t ? O.t["4JS2QJ"] : O.t.AwuMRS;
}
function X(t) {
    return t ? O.t.GFdaUK : O.t.NIimTt;
}
function U(t) {
    let { quest: e, gameProfileSource: n, withoutMarkdown: i = !1 } = t,
        r = (0, u.bG)([c.default], () => c.default.getCurrentUser()),
        l = (0, L.I3)(e),
        s = !1 === (0, S.U)(e).hasAlreadyLinked,
        m = (0, N.I6)(e) ? (0, N.xc)(e) : (0, N._3)(e)?.[0],
        C = (0, o.A)({
            applicationId: m,
            location: h.rE.QUEST_INSTRUCTIONS,
            source: n ?? a.GameProfileSources.QuestHome,
        }),
        v = !i;
    return (function (t) {
        let {
                quest: e,
                taskDetails: n,
                thirdPartyTaskDetails: i,
                sourceQuestContent: r,
                withoutMarkdown: l,
                currentUser: u,
                popoutTargetElementRef: a,
                onGameSheetOpened: o,
                onGameSheetClosed: s,
                onGameTitleClick: c,
                needsToConnect: m,
            } = t,
            C = (0, g.ki)(u, P.PremiumTypes.TIER_2),
            S = (0, G.k5)(e.config),
            v = (0, N.g5)(e) && (0, N.xZ)(e),
            p = (0, R.ui)(e),
            _ = (0, G.mH)(e.config, u);
        if (p)
            return (function (t) {
                let {
                        quest: e,
                        taskDetails: n,
                        sourceQuestContent: i,
                        withoutMarkdown: r,
                        popoutTargetElementRef: l,
                        onGameSheetOpened: u,
                        onGameSheetClosed: a,
                        rewardNameWithArticle: o,
                    } = t,
                    { targetMinutes: s, applications: c } = n;
                if (r) return O.intl.formatToPlainString(O.t["1votF6"], { rewardNameWithArticle: o, targetMinutes: s });
                let f = (function (t) {
                    let {
                        quest: e,
                        sourceQuestContent: n,
                        applications: i,
                        popoutTargetElementRef: r,
                        onGameSheetOpened: l,
                        onGameSheetClosed: u,
                    } = t;
                    return (t) =>
                        (0, d.jsx)(
                            E.A,
                            {
                                quest: e,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: r,
                                onGameSheetOpened: l,
                                onGameSheetClosed: u,
                                children: (e, n) =>
                                    (0, d.jsx)(A.D, {
                                        ...e,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, d.jsx)(I.E, {
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            className: T.s3,
                                            children: t,
                                        }),
                                    }),
                            },
                            e.id,
                        );
                })({
                    quest: e,
                    sourceQuestContent: i,
                    applications: c ?? [],
                    popoutTargetElementRef: l,
                    onGameSheetOpened: u,
                    onGameSheetClosed: a,
                });
                return (function (t) {
                    let { quest: e, gameSheetHook: n, rewardNameWithArticle: i, targetMinutes: r } = t,
                        l = {
                            [h.Li.PACKAGE_ACTION_ADVENTURE]: O.t.H485IA,
                            [h.Li.PACKAGE_RPG_MMO]: O.t["3XS8Ni"],
                            [h.Li.PACKAGE_RACING_SPORTS]: O.t["X+UCju"],
                            [h.Li.PACKAGE_SANDBOX_CREATIVE]: O.t["6o4n1Q"],
                            [h.Li.PACKAGE_FAMILY_FRIENDLY]: O.t.DUsNmf,
                            [h.Li.PACKAGE_HOLIDAY_SEASON]: O.t["cWP8/Z"],
                            [h.Li.PACKAGE_NEW_YEARS]: O.t["8+sIJz"],
                        },
                        u = e.config.features.find((t) => t in l),
                        a = (null != u ? l[u] : null) ?? O.t.CDeHul;
                    return O.intl.format(a, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: e, rewardNameWithArticle: o, targetMinutes: s, gameSheetHook: f });
            })({
                quest: e,
                taskDetails: n,
                sourceQuestContent: r,
                withoutMarkdown: l,
                popoutTargetElementRef: a,
                onGameSheetOpened: o,
                onGameSheetClosed: s,
                rewardNameWithArticle: _,
            });
        if (v)
            return (function (t) {
                let {
                        quest: e,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: l,
                        onGameTitleClick: u,
                        rewardNameWithArticle: a,
                    } = t,
                    { targetMinutes: o } = n,
                    s = e.config.messages.gameTitle,
                    c = (0, G.JX)(e.config),
                    f = (0, G.Y7)(e.config),
                    g = e.config.features.includes(h.Li.NON_GAMING_PLAY_QUEST),
                    m = null != u;
                return w(
                    r && c
                        ? f
                            ? g
                                ? null != l
                                    ? O.t.u5QXpw
                                    : O.t.ztXW8V
                                : y({ hasRewardDuration: null != l, shouldShowGameProfileLink: m })
                            : g
                              ? O.t["1AcTqm"]
                              : k(m)
                        : c || null != l
                          ? g
                              ? O.t.enQ3jU
                              : M(m)
                          : g
                            ? O.t["e+K3xJ"]
                            : X(m),
                    {
                        gameTitle: s,
                        streamingDurationRequirement: o,
                        rewardNameWithArticle: a,
                        duration: l,
                        targetMinutes: o,
                        onGameTitleClick: u,
                    },
                    i,
                );
            })({
                quest: e,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: C,
                collectibleRewardDuration: S,
                onGameTitleClick: c,
                rewardNameWithArticle: _,
            });
        if ((0, N.g5)(e))
            return (function (t) {
                let {
                        quest: e,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: l,
                        onGameTitleClick: u,
                        rewardNameWithArticle: a,
                    } = t,
                    { targetMinutes: o } = n,
                    s = e.config.messages.gameTitle,
                    c = (0, G.JX)(e.config),
                    f = (0, G.Y7)(e.config),
                    g = null != u;
                return w(
                    r && c
                        ? f
                            ? y({ hasRewardDuration: null != l, shouldShowGameProfileLink: g })
                            : k(g)
                        : c || null != l
                          ? M(g)
                          : X(g),
                    {
                        gameTitle: s,
                        targetMinutes: o,
                        rewardNameWithArticle: a,
                        duration: l,
                        streamingDurationRequirement: o,
                        onGameTitleClick: u,
                    },
                    i,
                );
            })({
                quest: e,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: C,
                collectibleRewardDuration: S,
                onGameTitleClick: c,
                rewardNameWithArticle: _,
            });
        if ((0, N.xZ)(e))
            return (function (t) {
                let e,
                    {
                        quest: n,
                        taskDetails: i,
                        withoutMarkdown: r,
                        hasNitro: l,
                        collectibleRewardDuration: u,
                        onGameTitleClick: a,
                        rewardNameWithArticle: o,
                    } = t,
                    { targetMinutes: s } = i,
                    c = n.config.messages.gameTitle,
                    f = (0, G.JX)(n.config),
                    g = (0, G.Y7)(n.config),
                    m = n.config.features.includes(h.Li.NON_GAMING_PLAY_QUEST),
                    d = null != a;
                return w(
                    (e =
                        l && f
                            ? g
                                ? m
                                    ? null != u
                                        ? O.t.u5QXpw
                                        : O.t.ztXW8V
                                    : y({ hasRewardDuration: null != u, shouldShowGameProfileLink: d })
                                : m
                                  ? O.t["1AcTqm"]
                                  : k(d)
                            : f || null != u
                              ? m
                                  ? O.t.enQ3jU
                                  : M(d)
                              : m
                                ? O.t["03VJqu"]
                                : d
                                  ? O.t.NrD2h8
                                  : O.t.FZL5Q5),
                    {
                        gameTitle: c,
                        streamingDurationRequirement: s,
                        rewardNameWithArticle: o,
                        duration: u,
                        questReward: o,
                        onGameTitleClick: a,
                    },
                    r,
                );
            })({
                quest: e,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: C,
                collectibleRewardDuration: S,
                onGameTitleClick: c,
                rewardNameWithArticle: _,
            });
        if ((0, G.kr)({ quest: e }))
            return (function (t) {
                let { quest: e, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = t,
                    { targetMinutes: l } = n,
                    u = e.config.messages.gameTitle;
                return w(
                    null != r ? O.t.HHVg4i : O.t["a/ia7F"],
                    { gameTitle: u, streamingDurationRequirement: l, onGameTitleClick: r },
                    i,
                );
            })({ quest: e, taskDetails: n, withoutMarkdown: l, onGameTitleClick: c });
        else if ((0, N.vv)(e))
            return (function (t) {
                let {
                        quest: e,
                        collectibleRewardDuration: n,
                        hasNitro: i,
                        withoutMarkdown: r,
                        rewardNameWithArticle: l,
                    } = t,
                    u = (0, N.Xi)(e.config),
                    a = u?.messages.videoTitle ?? "video",
                    o = (0, G.JX)(e.config),
                    s = (0, G.Y7)(e.config);
                return w(
                    o && i
                        ? s
                            ? null != n
                                ? O.t.tXwfJT
                                : O.t["xqX+r5"]
                            : O.t["vs/xBu"]
                        : o || null != n
                          ? O.t["W/HkLO"]
                          : e.id === h.Fw
                            ? O.t.Rsd5bL
                            : O.t["g+InPC"],
                    { videoTitle: a, rewardNameWithArticle: l, duration: n },
                    r,
                );
            })({ quest: e, collectibleRewardDuration: S, hasNitro: C, withoutMarkdown: l, rewardNameWithArticle: _ });
        else if ((0, N.vl)(e))
            return (function (t) {
                let { quest: e, taskDetails: n, withoutMarkdown: i, rewardNameWithArticle: r } = t,
                    l = n.targetMinutes;
                return (0, R._e)(e)
                    ? w(O.t.VYwSSu, { streamingDurationRequirement: l, questReward: r }, i)
                    : e.config.features.includes(h.Li.CLOUD_GAMING_ACTIVITY) &&
                        e.config.features.includes(h.Li.CLOUD_GAMING_PROVIDER_NVIDIA)
                      ? w(
                            O.t["0NNM3l"],
                            {
                                activityName: e.config.messages.gameTitle,
                                providerName: "NVIDIA GeForce NOW",
                                providerLink: f.A.getArticleURL(D.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                streamingDurationRequirement: l,
                                questReward: r,
                            },
                            i,
                        )
                      : w(
                            O.t.UuzHh8,
                            {
                                activityName: e.config.messages.gameTitle,
                                streamingDurationRequirement: l,
                                questReward: r,
                            },
                            i,
                        );
            })({ quest: e, taskDetails: n, withoutMarkdown: l, rewardNameWithArticle: _ });
        else if ((0, N.I6)(e) && null != i)
            return (function (t) {
                let {
                        quest: e,
                        thirdPartyTaskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: l,
                        onGameTitleClick: u,
                        rewardNameWithArticle: a,
                        needsToConnect: o,
                    } = t,
                    s = e.config.messages.gameTitle,
                    c = (0, G.JX)(e.config),
                    f = (0, G.Y7)(e.config),
                    g = null != u;
                return w(
                    o
                        ? g
                            ? O.t["0SLl/G"]
                            : O.t.BlfaHK
                        : r && c
                          ? f
                              ? null != l
                                  ? g
                                      ? O.t.uLVYG5
                                      : O.t.NdXW5c
                                  : g
                                    ? O.t["2Ctf1d"]
                                    : O.t["8066TK"]
                              : null != l
                                ? g
                                    ? O.t.yMEn77
                                    : O.t["6FOKAX"]
                                : g
                                  ? O.t.bxN0nx
                                  : O.t.thO6iA
                          : c || null != l
                            ? g
                                ? O.t.ojhBxZ
                                : O.t["IACEB/"]
                            : g
                              ? O.t.bxN0nx
                              : O.t.thO6iA,
                    { gameTitle: s, objective: n.description, duration: l, questReward: a, onGameTitleClick: u },
                    i,
                );
            })({
                quest: e,
                thirdPartyTaskDetails: i,
                withoutMarkdown: l,
                hasNitro: C,
                collectibleRewardDuration: S,
                onGameTitleClick: c,
                rewardNameWithArticle: _,
                needsToConnect: m,
            });
        return null != i
            ? i.description
            : (function (t) {
                  let {
                          quest: e,
                          taskDetails: n,
                          withoutMarkdown: i,
                          hasNitro: r,
                          collectibleRewardDuration: l,
                          onGameTitleClick: u,
                          rewardNameWithArticle: a,
                      } = t,
                      { targetMinutes: o } = n,
                      s = e.config.messages.gameTitle,
                      c = (0, G.JX)(e.config),
                      f = (0, G.Y7)(e.config),
                      g = null != u;
                  return w(
                      r && c
                          ? f
                              ? null != l
                                  ? g
                                      ? O.t["3RwRv8"]
                                      : O.t.TmKqHw
                                  : g
                                    ? O.t.l9yxDa
                                    : O.t["X8Yt/1"]
                              : g
                                ? O.t.eEuma3
                                : O.t.smG9ql
                          : c || null != l
                            ? g
                                ? O.t.Cko4a4
                                : O.t.BLyDvO
                            : g
                              ? O.t.ER9rII
                              : O.t["hkJ+Gs"],
                      {
                          gameTitle: s,
                          streamingDurationRequirement: o,
                          duration: l,
                          questReward: a,
                          onGameTitleClick: u,
                      },
                      i,
                  );
              })({
                  quest: e,
                  taskDetails: n,
                  withoutMarkdown: l,
                  hasNitro: C,
                  collectibleRewardDuration: S,
                  onGameTitleClick: c,
                  rewardNameWithArticle: _,
              });
    })({
        ...t,
        currentUser: r,
        withoutMarkdown: i,
        thirdPartyTaskDetails: l ?? void 0,
        onGameTitleClick: v ? C : void 0,
        needsToConnect: s,
    });
}
function x(t, e, n, i, r) {
    let l = (0, L.fc)(t),
        u = U({
            quest: t,
            taskDetails: l,
            location: n,
            sourceQuestContent: e,
            popoutTargetElementRef: r,
            gameProfileSource: i,
        }),
        a = t.userStatus?.claimedAt != null,
        o = (0, L.S5)(t.userStatus?.claimedAt);
    return a ? O.intl.formatToPlainString(O.t.lOVr0O, { claimDate: o }) : u;
}
function q(t) {
    let {
            quest: e,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: r,
            popoutTargetElementRef: l,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
            hasAlreadyLinked: f,
            onClickGameTitle: g,
        } = t,
        d = e.config.rewardsConfig.rewardsExpireAt,
        A = (0, L.S5)(d),
        I = (0, L.fc)(e),
        E = (0, L.I3)(e),
        T = (0, u.bG)([c.default], () => c.default.getCurrentUser()),
        C = e.userStatus?.completedAt != null,
        S = e.userStatus?.enrolledAt != null,
        v = I.percentComplete > 0,
        _ = (0, L.Vn)(e),
        D = U({
            quest: e,
            location: h.rE.QUESTS_BAR,
            taskDetails: I,
            sourceQuestContent: i,
            popoutTargetElementRef: l,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
            gameProfileSource: a.GameProfileSources.QuestBar,
        }),
        P = null != E ? E.percentComplete : I.percentComplete;
    if (C) return O.intl.formatToPlainString(O.t.APddvF, { expirationDate: A });
    if ((0, N.I6)(e) && !1 === f) return O.intl.string(O.t.mAdqf7);
    if (n) {
        if ((0, N.I6)(e) && !0 === f) {
            let t = e.config.messages.gameTitle;
            return null != g
                ? O.intl.format(O.t.X8hBDz, { gameTitle: t, onClickGameTitle: g })
                : O.intl.format(O.t.u3mdpP, { gameTitle: t });
        }
        if (r !== m.X0.SELECT && (0, R.ui)(e) && S && !v) {
            let t = (0, G.mH)(e.config, T);
            return O.intl.format(O.t["1votF6"], { rewardNameWithArticle: t, targetMinutes: I.targetMinutes });
        }
        return D;
    }
    return (0, N.vv)(e)
        ? O.intl.string(O.t["o+e9yh"])
        : P > 0
          ? (0, N.I6)(e) && !0 === f
              ? O.intl.string(O.t.JkyCIO)
              : _
                ? (0, p.YT)({ quest: e, taskDetails: I, thirdPartyTaskDetails: E ?? void 0 })
                : O.intl.string(O.t.mOrpXG)
          : O.intl.string(O.t.S6UUc5);
}
function b(t, e) {
    let n = (0, u.bG)([s.default], () => s.default.locale),
        i = (0, L.fc)(t),
        [r] = (0, L.Qo)(t, i),
        a = (0, L.I3)(t),
        o = t.userStatus?.completedAt != null,
        c = null != a ? a.percentComplete : i.percentComplete;
    if (o) return O.intl.string(O.t["ij5E/5"]);
    if ((0, N.I6)(t) && !1 === e) return O.intl.string(O.t.s9r2a1);
    if ((0, N.I6)(t) && !0 === e && 0 === c) return O.intl.string(O.t["2+opCy"]);
    if (t.userStatus?.enrolledAt != null && c > 0) {
        let t = (0, l.l9)(n, c, { roundingMode: "floor" });
        return O.intl.formatToPlainString(O.t.lVZaXD, { percent: t });
    }
    return r === m.X0.SELECT
        ? O.intl.string(O.t.EMrUHQ)
        : (0, N.g5)(t)
          ? O.intl.string(O.t.mOrpXG)
          : O.intl.string(O.t["7e5k7L"]);
}
function V(t) {
    let { quest: e, application: n, shortText: r = !1 } = t,
        l = i.useMemo(
            () =>
                (function (t) {
                    return (0, N.g5)(t) || (0, N.vl)(t)
                        ? 0
                        : (0, N.fE)({ quest: t })
                          ? 1
                          : (0, N.IO)(t)
                            ? 2
                            : 3 * !!(0, N.Cr)(t);
                })(e),
            [e],
        ),
        u = (0, L.fc)(e);
    switch (l) {
        case 0:
            if (e.config.features.includes(h.Li.CLOUD_GAMING_ACTIVITY)) return O.intl.string(O.t["+qoymD"]);
            if ((0, R.vA)(e)) return O.intl.string(r ? O.t.E4kW5O : O.t["Ie9++s"]);
            return O.intl.string(O.t.l7E81v);
        case 1:
            return O.intl.string(O.t.l7E81v);
        case 2:
            return (0, v.WM)(u);
        case 3:
            return (0, R.vA)(e) && 1 ? O.intl.string(r ? O.t.CkUzLd : O.t["hRIVy+"]) : O.intl.string(O.t.l7E81v);
    }
}
function Y(t) {
    let { quest: e, rewardCode: n } = t,
        i = (0, G.kr)({ quest: e }),
        r = n?.platform ?? m.pY.CROSS_PLATFORM,
        l = i ? (0, G.cg)({ quest: e, idx: n?.tier ?? e.userStatus?.claimedTier }) : null,
        u = (0, p.xv)(e.config),
        a = l?.messages?.redemptionInstructionsByPlatform ?? u.messages.redemptionInstructionsByPlatform;
    return null != r ? a[r] : void 0;
}
function Q(t) {
    let { quest: e, questContent: n, preCtaClick: l, getImpressionId: u, sourceQuestContent: a } = t;
    async function o() {
        (await l?.(),
            (0, _.pu)(e, { content: n, ctaContent: C.Cy.OPEN_GAME_LINK, impressionId: u?.(), sourceQuestContent: a }));
    }
    let s = i.useMemo(() => {
        let t = e.config.ctaConfig?.subtitle;
        return null != t
            ? t
            : (0, N.I6)(e)
              ? e.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle
              : (0, R.pv)(e.config) !== r.Z.GAMEPLAY ||
                  e.config.features.includes(h.Li.NON_GAMING_PLAY_QUEST) ||
                  (0, R.ui)(e)
                ? O.intl.string(O.t.y8Xf3k)
                : O.intl.string(O.t["wirwN+"]);
    }, [e]);
    return {
        ctaText: (0, p.wr)(e),
        ctaVariant: "secondary",
        onClickCta: o,
        title: e.config.messages.gameTitle,
        subtitle: s,
        ctaIconPosition: "end",
    };
}
