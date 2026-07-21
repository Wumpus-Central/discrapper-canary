n.d(t, { A9: () => q, mU: () => U, Jf: () => X, tH: () => b, NA: () => Q, XR: () => F, VX: () => j });
var i = n(64700),
    r = n(731355),
    l = n(17928);
n(166352);
var a = n(409626),
    s = n(692969),
    o = n(773669),
    u = n(287809),
    c = n(975571),
    d = n(252424),
    f = n(474090),
    m = n(24001),
    g = n(627968),
    A = n(939249),
    E = n(834730),
    C = n(862611),
    _ = n(664418),
    I = n(590202),
    p = n(284846),
    S = n(287875),
    T = n(651892),
    h = n(901406),
    N = n(801365),
    R = n(792620),
    L = n(814793),
    v = n(573526),
    G = n(190107),
    x = n(652215),
    O = n(202541),
    P = n(375708);
function M(e, t, n) {
    return n ? P.intl.formatToPlainString(e, t) : P.intl.format(e, t);
}
function D(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? P.t["/4XT0b"] : P.t["0hwcvM"]) : n ? P.t.tQoqXX : P.t["eb/Sna"];
}
function y(e) {
    return e ? P.t.klYWbT : P.t.ziB0HF;
}
function k(e) {
    return e ? P.t["4JS2QJ"] : P.t.AwuMRS;
}
function w(e) {
    return e ? P.t.GFdaUK : P.t.NIimTt;
}
function U(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        r = (0, v.I3)(t),
        o = !1 === (0, p.U)(t).hasAlreadyLinked,
        d = (0, R.I6)(t) ? (0, R.xc)(t) : (0, R._3)(t)?.[0],
        m = (0, s.A)({
            applicationId: d,
            location: G.rE.QUEST_INSTRUCTIONS,
            source: n ?? a.GameProfileSources.QuestHome,
        });
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                thirdPartyTaskDetails: i,
                sourceQuestContent: r,
                withoutMarkdown: l,
                currentUser: a,
                popoutTargetElementRef: s,
                onGameSheetOpened: o,
                onGameSheetClosed: u,
                onGameTitleClick: d,
                needsToConnect: m,
            } = e,
            I = (0, f.ki)(a, O.PremiumTypes.TIER_2),
            p = (0, N.k5)(t.config),
            S = (0, R.g5)(t) && (0, R.xZ)(t),
            T = (0, L.ui)(t),
            h = (0, N.mH)(t.config, a);
        if (T)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        sourceQuestContent: i,
                        withoutMarkdown: r,
                        popoutTargetElementRef: l,
                        onGameSheetOpened: a,
                        onGameSheetClosed: s,
                        rewardNameWithArticle: o,
                    } = e,
                    { targetMinutes: u, applications: c } = n;
                if (r) return P.intl.formatToPlainString(P.t["1votF6"], { rewardNameWithArticle: o, targetMinutes: u });
                let d = (function (e) {
                    let {
                        quest: t,
                        sourceQuestContent: n,
                        applications: i,
                        popoutTargetElementRef: r,
                        onGameSheetOpened: l,
                        onGameSheetClosed: a,
                    } = e;
                    return (e) =>
                        (0, g.jsx)(
                            C.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: r,
                                onGameSheetOpened: l,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, g.jsx)(A.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, g.jsx)(E.E, {
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            className: _.s3,
                                            children: e,
                                        }),
                                    }),
                            },
                            t.id,
                        );
                })({
                    quest: t,
                    sourceQuestContent: i,
                    applications: c ?? [],
                    popoutTargetElementRef: l,
                    onGameSheetOpened: a,
                    onGameSheetClosed: s,
                });
                return (function (e) {
                    let { quest: t, gameSheetHook: n, rewardNameWithArticle: i, targetMinutes: r } = e,
                        l = {
                            [G.Li.PACKAGE_ACTION_ADVENTURE]: P.t.H485IA,
                            [G.Li.PACKAGE_RPG_MMO]: P.t["3XS8Ni"],
                            [G.Li.PACKAGE_RACING_SPORTS]: P.t["X+UCju"],
                            [G.Li.PACKAGE_SANDBOX_CREATIVE]: P.t["6o4n1Q"],
                            [G.Li.PACKAGE_FAMILY_FRIENDLY]: P.t.DUsNmf,
                            [G.Li.PACKAGE_HOLIDAY_SEASON]: P.t["cWP8/Z"],
                            [G.Li.PACKAGE_NEW_YEARS]: P.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in l),
                        s = (null != a ? l[a] : null) ?? P.t.CDeHul;
                    return P.intl.format(s, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: o, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: r,
                withoutMarkdown: l,
                popoutTargetElementRef: s,
                onGameSheetOpened: o,
                onGameSheetClosed: u,
                rewardNameWithArticle: h,
            });
        if (S)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: l,
                        onGameTitleClick: a,
                        rewardNameWithArticle: s,
                    } = e,
                    { targetMinutes: o } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, N.JX)(t.config),
                    d = (0, N.Y7)(t.config),
                    f = t.config.features.includes(G.Li.NON_GAMING_PLAY_QUEST),
                    m = null != a;
                return M(
                    r && c
                        ? d
                            ? f
                                ? null != l
                                    ? P.t.u5QXpw
                                    : P.t.ztXW8V
                                : D({ hasRewardDuration: null != l, shouldShowGameProfileLink: m })
                            : f
                              ? P.t["1AcTqm"]
                              : y(m)
                        : c || null != l
                          ? f
                              ? P.t.enQ3jU
                              : k(m)
                          : f
                            ? P.t["e+K3xJ"]
                            : w(m),
                    {
                        gameTitle: u,
                        streamingDurationRequirement: o,
                        rewardNameWithArticle: s,
                        duration: l,
                        targetMinutes: o,
                        onGameTitleClick: a,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: I,
                collectibleRewardDuration: p,
                onGameTitleClick: d,
                rewardNameWithArticle: h,
            });
        if ((0, R.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: l,
                        onGameTitleClick: a,
                        rewardNameWithArticle: s,
                    } = e,
                    { targetMinutes: o } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, N.JX)(t.config),
                    d = (0, N.Y7)(t.config),
                    f = null != a;
                return M(
                    r && c
                        ? d
                            ? D({ hasRewardDuration: null != l, shouldShowGameProfileLink: f })
                            : y(f)
                        : c || null != l
                          ? k(f)
                          : w(f),
                    {
                        gameTitle: u,
                        targetMinutes: o,
                        rewardNameWithArticle: s,
                        duration: l,
                        streamingDurationRequirement: o,
                        onGameTitleClick: a,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: I,
                collectibleRewardDuration: p,
                onGameTitleClick: d,
                rewardNameWithArticle: h,
            });
        if ((0, R.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: i,
                        withoutMarkdown: r,
                        hasNitro: l,
                        collectibleRewardDuration: a,
                        onGameTitleClick: s,
                        rewardNameWithArticle: o,
                    } = e,
                    { targetMinutes: u } = i,
                    c = n.config.messages.gameTitle,
                    d = (0, N.JX)(n.config),
                    f = (0, N.Y7)(n.config),
                    m = n.config.features.includes(G.Li.NON_GAMING_PLAY_QUEST),
                    g = null != s;
                return M(
                    (t =
                        l && d
                            ? f
                                ? m
                                    ? null != a
                                        ? P.t.u5QXpw
                                        : P.t.ztXW8V
                                    : D({ hasRewardDuration: null != a, shouldShowGameProfileLink: g })
                                : m
                                  ? P.t["1AcTqm"]
                                  : y(g)
                            : d || null != a
                              ? m
                                  ? P.t.enQ3jU
                                  : k(g)
                              : m
                                ? P.t["03VJqu"]
                                : g
                                  ? P.t.NrD2h8
                                  : P.t.FZL5Q5),
                    {
                        gameTitle: c,
                        streamingDurationRequirement: u,
                        rewardNameWithArticle: o,
                        duration: a,
                        questReward: o,
                        onGameTitleClick: s,
                    },
                    r,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: I,
                collectibleRewardDuration: p,
                onGameTitleClick: d,
                rewardNameWithArticle: h,
            });
        if ((0, N.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: l } = n,
                    a = t.config.messages.gameTitle;
                return M(
                    null != r ? P.t.HHVg4i : P.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: l, onGameTitleClick: r },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: l, onGameTitleClick: d });
        else if ((0, R.vv)(t))
            return (function (e) {
                let {
                        quest: t,
                        collectibleRewardDuration: n,
                        hasNitro: i,
                        withoutMarkdown: r,
                        rewardNameWithArticle: l,
                    } = e,
                    a = (0, R.Xi)(t.config),
                    s = a?.messages.videoTitle ?? "video",
                    o = (0, N.JX)(t.config),
                    u = (0, N.Y7)(t.config);
                return M(
                    o && i
                        ? u
                            ? null != n
                                ? P.t.tXwfJT
                                : P.t["xqX+r5"]
                            : P.t["vs/xBu"]
                        : o || null != n
                          ? P.t["W/HkLO"]
                          : t.id === G.Fw
                            ? P.t.Rsd5bL
                            : P.t["g+InPC"],
                    { videoTitle: s, rewardNameWithArticle: l, duration: n },
                    r,
                );
            })({ quest: t, collectibleRewardDuration: p, hasNitro: I, withoutMarkdown: l, rewardNameWithArticle: h });
        else if ((0, R.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, rewardNameWithArticle: r } = e,
                    l = n.targetMinutes;
                return (0, L._e)(t)
                    ? M(P.t.VYwSSu, { streamingDurationRequirement: l, questReward: r }, i)
                    : t.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY) &&
                        t.config.features.includes(G.Li.CLOUD_GAMING_PROVIDER_NVIDIA)
                      ? M(
                            P.t["0NNM3l"],
                            {
                                activityName: t.config.messages.gameTitle,
                                providerName: "NVIDIA GeForce NOW",
                                providerLink: c.A.getArticleURL(x.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                streamingDurationRequirement: l,
                                questReward: r,
                            },
                            i,
                        )
                      : M(
                            P.t.UuzHh8,
                            {
                                activityName: t.config.messages.gameTitle,
                                streamingDurationRequirement: l,
                                questReward: r,
                            },
                            i,
                        );
            })({ quest: t, taskDetails: n, withoutMarkdown: l, rewardNameWithArticle: h });
        else if ((0, R.I6)(t) && null != i)
            return (function (e) {
                let t,
                    {
                        quest: n,
                        thirdPartyTaskDetails: i,
                        withoutMarkdown: r,
                        hasNitro: l,
                        collectibleRewardDuration: a,
                        onGameTitleClick: s,
                        rewardNameWithArticle: o,
                        needsToConnect: u,
                    } = e,
                    c = n.config.messages.gameTitle,
                    d = (0, N.JX)(n.config),
                    f = (0, N.Y7)(n.config),
                    m = null != s;
                t = u
                    ? m
                        ? P.t["0SLl/G"]
                        : P.t.BlfaHK
                    : l && d
                      ? f
                          ? null != a
                              ? m
                                  ? P.t.uLVYG5
                                  : P.t.NdXW5c
                              : m
                                ? P.t["2Ctf1d"]
                                : P.t["8066TK"]
                          : null != a
                            ? m
                                ? P.t.yMEn77
                                : P.t["6FOKAX"]
                            : m
                              ? P.t.bxN0nx
                              : P.t.thO6iA
                      : d || null != a
                        ? m
                            ? P.t.ojhBxZ
                            : P.t["IACEB/"]
                        : m
                          ? P.t.bxN0nx
                          : P.t.thO6iA;
                let g = i.description;
                return M(
                    t,
                    {
                        gameTitle: c,
                        objective: u ? g.charAt(0).toLowerCase() + g.slice(1) : g,
                        duration: a,
                        questReward: o,
                        onGameTitleClick: s,
                    },
                    r,
                );
            })({
                quest: t,
                thirdPartyTaskDetails: i,
                withoutMarkdown: l,
                hasNitro: I,
                collectibleRewardDuration: p,
                onGameTitleClick: d,
                rewardNameWithArticle: h,
                needsToConnect: m,
            });
        return null != i
            ? i.description
            : (function (e) {
                  let {
                          quest: t,
                          taskDetails: n,
                          withoutMarkdown: i,
                          hasNitro: r,
                          collectibleRewardDuration: l,
                          onGameTitleClick: a,
                          rewardNameWithArticle: s,
                      } = e,
                      { targetMinutes: o } = n,
                      u = t.config.messages.gameTitle,
                      c = (0, N.JX)(t.config),
                      d = (0, N.Y7)(t.config),
                      f = null != a;
                  return M(
                      r && c
                          ? d
                              ? null != l
                                  ? f
                                      ? P.t["3RwRv8"]
                                      : P.t.TmKqHw
                                  : f
                                    ? P.t.l9yxDa
                                    : P.t["X8Yt/1"]
                              : f
                                ? P.t.eEuma3
                                : P.t.smG9ql
                          : c || null != l
                            ? f
                                ? P.t.Cko4a4
                                : P.t.BLyDvO
                            : f
                              ? P.t.ER9rII
                              : P.t["hkJ+Gs"],
                      {
                          gameTitle: u,
                          streamingDurationRequirement: o,
                          duration: l,
                          questReward: s,
                          onGameTitleClick: a,
                      },
                      i,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: l,
                  hasNitro: I,
                  collectibleRewardDuration: p,
                  onGameTitleClick: d,
                  rewardNameWithArticle: h,
              });
    })({
        ...e,
        currentUser: i,
        withoutMarkdown: !1,
        thirdPartyTaskDetails: r ?? void 0,
        onGameTitleClick: m,
        needsToConnect: o,
    });
}
function q(e, t, n, i, r) {
    let l = (0, v.fc)(e),
        a = U({
            quest: e,
            taskDetails: l,
            location: n,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: i,
        }),
        s = e.userStatus?.claimedAt != null,
        o = (0, v.S5)(e.userStatus?.claimedAt);
    return s ? P.intl.formatToPlainString(P.t.lOVr0O, { claimDate: o }) : a;
}
function b(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: r,
            popoutTargetElementRef: s,
            onGameSheetOpened: o,
            onGameSheetClosed: c,
            hasAlreadyLinked: d,
            onClickGameTitle: f,
        } = e,
        g = t.config.rewardsConfig.rewardsExpireAt,
        A = (0, v.S5)(g),
        E = (0, v.fc)(t),
        C = (0, v.I3)(t),
        _ = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        I = t.userStatus?.completedAt != null,
        p = t.userStatus?.enrolledAt != null,
        S = E.percentComplete > 0,
        h = (0, v.Vn)(t),
        x = U({
            quest: t,
            location: G.rE.QUESTS_BAR,
            taskDetails: E,
            sourceQuestContent: i,
            popoutTargetElementRef: s,
            onGameSheetOpened: o,
            onGameSheetClosed: c,
            gameProfileSource: a.GameProfileSources.QuestBar,
        }),
        O = null != C ? C.percentComplete : E.percentComplete;
    if (I) return P.intl.formatToPlainString(P.t.APddvF, { expirationDate: A });
    if ((0, R.I6)(t) && !1 === d) return P.intl.string(P.t.mAdqf7);
    if (n) {
        if ((0, R.I6)(t) && !0 === d) {
            let e = t.config.messages.gameTitle;
            return null != f
                ? P.intl.format(P.t.X8hBDz, { gameTitle: e, onClickGameTitle: f })
                : P.intl.format(P.t.u3mdpP, { gameTitle: e });
        }
        if (r !== m.X0.SELECT && (0, L.ui)(t) && p && !S) {
            let e = (0, N.mH)(t.config, _);
            return P.intl.format(P.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: E.targetMinutes });
        }
        return x;
    }
    return (0, R.vv)(t)
        ? P.intl.string(P.t["o+e9yh"])
        : O > 0
          ? (0, R.I6)(t) && !0 === d
              ? P.intl.string(P.t.JkyCIO)
              : h
                ? (0, T.YT)({ quest: t, taskDetails: E, thirdPartyTaskDetails: C ?? void 0 })
                : P.intl.string(P.t.mOrpXG)
          : P.intl.string(P.t.S6UUc5);
}
function j(e, t) {
    let n = (0, l.bG)([o.default], () => o.default.locale),
        i = (0, v.fc)(e),
        [r] = (0, v.Qo)(e, i),
        a = (0, v.I3)(e),
        s = e.userStatus?.completedAt != null,
        u = null != a ? a.percentComplete : i.percentComplete;
    if (s) return P.intl.string(P.t["ij5E/5"]);
    if ((0, R.I6)(e) && !1 === t) return P.intl.string(P.t.s9r2a1);
    if ((0, R.I6)(e) && !0 === t && 0 === u) return P.intl.string(P.t["2+opCy"]);
    if (e.userStatus?.enrolledAt != null && u > 0) {
        let e = (0, d.l9)(n, u, { roundingMode: "floor" });
        return P.intl.formatToPlainString(P.t.lVZaXD, { percent: e });
    }
    return r === m.X0.SELECT
        ? P.intl.string(P.t.EMrUHQ)
        : (0, R.g5)(e)
          ? P.intl.string(P.t.mOrpXG)
          : P.intl.string(P.t["7e5k7L"]);
}
function Q(e) {
    let { quest: t, application: n, shortText: r = !1, showPlayInstantlyLabel: l = !1 } = e,
        a = i.useMemo(
            () =>
                (function (e) {
                    return (0, R.g5)(e) || (0, R.vl)(e)
                        ? 0
                        : (0, R.fE)({ quest: e })
                          ? 1
                          : (0, R.IO)(e)
                            ? 2
                            : 3 * !!(0, R.Cr)(e);
                })(t),
            [t],
        ),
        s = (0, v.fc)(t);
    switch (a) {
        case 0:
            if (t.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY))
                return P.intl.string(l ? P.t.V5Qt9D : P.t["+qoymD"]);
            if ((0, L.vA)(t)) return P.intl.string(r ? P.t.E4kW5O : P.t["Ie9++s"]);
            return P.intl.string(P.t.l7E81v);
        case 1:
            return P.intl.string(P.t.l7E81v);
        case 2:
            return (0, S.WM)(s);
        case 3:
            return (0, L.vA)(t) && 1 ? P.intl.string(r ? P.t.CkUzLd : P.t["hRIVy+"]) : P.intl.string(P.t.l7E81v);
    }
}
function F(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, N.kr)({ quest: t }),
        r = n?.platform ?? m.pY.CROSS_PLATFORM,
        l = i ? (0, N.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, T.xv)(t.config),
        s = l?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? s[r] : void 0;
}
function X(e) {
    let { quest: t, questContent: n, preCtaClick: l, getImpressionId: a, sourceQuestContent: s } = e;
    async function o() {
        await l?.(),
            (0, h.pu)(t, { content: n, ctaContent: I.Cy.OPEN_GAME_LINK, impressionId: a?.(), sourceQuestContent: s });
    }
    let u = i.useMemo(() => {
        let e = t.config.ctaConfig?.subtitle;
        return null != e
            ? e
            : (0, R.I6)(t)
              ? t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle
              : (0, L.pv)(t.config) !== r.Z.GAMEPLAY ||
                  t.config.features.includes(G.Li.NON_GAMING_PLAY_QUEST) ||
                  (0, L.ui)(t)
                ? P.intl.string(P.t.y8Xf3k)
                : P.intl.string(P.t["wirwN+"]);
    }, [t]);
    return {
        ctaText: (0, T.wr)(t),
        ctaVariant: "secondary",
        onClickCta: o,
        title: t.config.messages.gameTitle,
        subtitle: u,
        ctaIconPosition: "end",
    };
}
