n.d(t, { A9: () => U, mU: () => w, Jf: () => X, tH: () => j, NA: () => b, XR: () => F, VX: () => Q });
var i = n(582128),
    r = n(731355),
    l = n(17928);
n(166352);
var s = n(409626),
    a = n(692969),
    u = n(773669),
    o = n(287809),
    c = n(975571),
    d = n(252424),
    f = n(474090),
    m = n(738822),
    g = n(477900),
    E = n(939249),
    A = n(834730),
    C = n(862611),
    _ = n(398889),
    S = n(590202),
    T = n(284846),
    I = n(546121),
    N = n(651892),
    h = n(901406),
    p = n(801365),
    L = n(792620),
    R = n(814793),
    v = n(309593),
    G = n(190107),
    O = n(652215),
    x = n(202541),
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
function q(e) {
    return e ? P.t.GFdaUK : P.t.NIimTt;
}
function w(e) {
    let { quest: t, gameProfileSource: n, withoutMarkdown: i = !1 } = e,
        r = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        u = (0, v.I3)(t),
        d = !1 === (0, T.U)(t).hasAlreadyLinked,
        m = (0, L.I6)(t) ? (0, L.xc)(t) : (0, L._3)(t)?.[0],
        S = (0, a.A)({
            applicationId: m,
            location: G.rE.QUEST_INSTRUCTIONS,
            source: n ?? s.GameProfileSources.QuestHome,
        }),
        I = !i;
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                thirdPartyTaskDetails: i,
                sourceQuestContent: r,
                withoutMarkdown: l,
                currentUser: s,
                popoutTargetElementRef: a,
                onGameSheetOpened: u,
                onGameSheetClosed: o,
                onGameTitleClick: d,
                needsToConnect: m,
            } = e,
            S = (0, f.ki)(s, x.PremiumTypes.TIER_2),
            T = (0, p.k5)(t.config),
            I = (0, L.g5)(t) && (0, L.xZ)(t),
            N = (0, R.ui)(t),
            h = (0, p.mH)(t.config, s);
        if (N)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        sourceQuestContent: i,
                        withoutMarkdown: r,
                        popoutTargetElementRef: l,
                        onGameSheetOpened: s,
                        onGameSheetClosed: a,
                        rewardNameWithArticle: u,
                    } = e,
                    { targetMinutes: o, applications: c } = n;
                if (r) return P.intl.formatToPlainString(P.t["1votF6"], { rewardNameWithArticle: u, targetMinutes: o });
                let d = (function (e) {
                    let {
                        quest: t,
                        sourceQuestContent: n,
                        applications: i,
                        popoutTargetElementRef: r,
                        onGameSheetOpened: l,
                        onGameSheetClosed: s,
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
                                onGameSheetClosed: s,
                                children: (t, n) =>
                                    (0, g.jsx)(E.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, g.jsx)(A.E, {
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
                    onGameSheetOpened: s,
                    onGameSheetClosed: a,
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
                        s = t.config.features.find((e) => e in l),
                        a = (null != s ? l[s] : null) ?? P.t.CDeHul;
                    return P.intl.format(a, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: u, targetMinutes: o, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: r,
                withoutMarkdown: l,
                popoutTargetElementRef: a,
                onGameSheetOpened: u,
                onGameSheetClosed: o,
                rewardNameWithArticle: h,
            });
        if (I)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: l,
                        onGameTitleClick: s,
                        rewardNameWithArticle: a,
                    } = e,
                    { targetMinutes: u } = n,
                    o = t.config.messages.gameTitle,
                    c = (0, p.JX)(t.config),
                    d = (0, p.Y7)(t.config),
                    f = t.config.features.includes(G.Li.NON_GAMING_PLAY_QUEST),
                    m = null != s;
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
                            : q(m),
                    {
                        gameTitle: o,
                        streamingDurationRequirement: u,
                        rewardNameWithArticle: a,
                        duration: l,
                        targetMinutes: u,
                        onGameTitleClick: s,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: S,
                collectibleRewardDuration: T,
                onGameTitleClick: d,
                rewardNameWithArticle: h,
            });
        if ((0, L.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: l,
                        onGameTitleClick: s,
                        rewardNameWithArticle: a,
                    } = e,
                    { targetMinutes: u } = n,
                    o = t.config.messages.gameTitle,
                    c = (0, p.JX)(t.config),
                    d = (0, p.Y7)(t.config),
                    f = null != s;
                return M(
                    r && c
                        ? d
                            ? D({ hasRewardDuration: null != l, shouldShowGameProfileLink: f })
                            : y(f)
                        : c || null != l
                          ? k(f)
                          : q(f),
                    {
                        gameTitle: o,
                        targetMinutes: u,
                        rewardNameWithArticle: a,
                        duration: l,
                        streamingDurationRequirement: u,
                        onGameTitleClick: s,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: S,
                collectibleRewardDuration: T,
                onGameTitleClick: d,
                rewardNameWithArticle: h,
            });
        if ((0, L.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: i,
                        withoutMarkdown: r,
                        hasNitro: l,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                        rewardNameWithArticle: u,
                    } = e,
                    { targetMinutes: o } = i,
                    c = n.config.messages.gameTitle,
                    d = (0, p.JX)(n.config),
                    f = (0, p.Y7)(n.config),
                    m = n.config.features.includes(G.Li.NON_GAMING_PLAY_QUEST),
                    g = null != a;
                return M(
                    (t =
                        l && d
                            ? f
                                ? m
                                    ? null != s
                                        ? P.t.u5QXpw
                                        : P.t.ztXW8V
                                    : D({ hasRewardDuration: null != s, shouldShowGameProfileLink: g })
                                : m
                                  ? P.t["1AcTqm"]
                                  : y(g)
                            : d || null != s
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
                        streamingDurationRequirement: o,
                        rewardNameWithArticle: u,
                        duration: s,
                        questReward: u,
                        onGameTitleClick: a,
                    },
                    r,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: l,
                hasNitro: S,
                collectibleRewardDuration: T,
                onGameTitleClick: d,
                rewardNameWithArticle: h,
            });
        if ((0, p.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: l } = n,
                    s = t.config.messages.gameTitle;
                return M(
                    null != r ? P.t.HHVg4i : P.t["a/ia7F"],
                    { gameTitle: s, streamingDurationRequirement: l, onGameTitleClick: r },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: l, onGameTitleClick: d });
        else if ((0, L.vv)(t))
            return (function (e) {
                let {
                        quest: t,
                        collectibleRewardDuration: n,
                        hasNitro: i,
                        withoutMarkdown: r,
                        rewardNameWithArticle: l,
                    } = e,
                    s = (0, L.Xi)(t.config),
                    a = s?.messages.videoTitle ?? "video",
                    u = (0, p.JX)(t.config),
                    o = (0, p.Y7)(t.config);
                return M(
                    u && i
                        ? o
                            ? null != n
                                ? P.t.tXwfJT
                                : P.t["xqX+r5"]
                            : P.t["vs/xBu"]
                        : u || null != n
                          ? P.t["W/HkLO"]
                          : t.id === G.Fw
                            ? P.t.Rsd5bL
                            : P.t["g+InPC"],
                    { videoTitle: a, rewardNameWithArticle: l, duration: n },
                    r,
                );
            })({ quest: t, collectibleRewardDuration: T, hasNitro: S, withoutMarkdown: l, rewardNameWithArticle: h });
        else if ((0, L.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, rewardNameWithArticle: r } = e,
                    l = n.targetMinutes;
                return (0, R._e)(t)
                    ? M(P.t.VYwSSu, { streamingDurationRequirement: l, questReward: r }, i)
                    : t.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY) &&
                        t.config.features.includes(G.Li.CLOUD_GAMING_PROVIDER_NVIDIA)
                      ? M(
                            P.t["0NNM3l"],
                            {
                                activityName: t.config.messages.gameTitle,
                                providerName: "NVIDIA GeForce NOW",
                                providerLink: c.A.getArticleURL(O.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
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
        else if ((0, L.I6)(t) && null != i)
            return (function (e) {
                let {
                        quest: t,
                        thirdPartyTaskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: l,
                        onGameTitleClick: s,
                        rewardNameWithArticle: a,
                        needsToConnect: u,
                    } = e,
                    o = t.config.messages.gameTitle,
                    c = (0, p.JX)(t.config),
                    d = (0, p.Y7)(t.config),
                    f = null != s;
                return M(
                    u
                        ? f
                            ? P.t["0SLl/G"]
                            : P.t.BlfaHK
                        : r && c
                          ? d
                              ? null != l
                                  ? f
                                      ? P.t.uLVYG5
                                      : P.t.NdXW5c
                                  : f
                                    ? P.t["2Ctf1d"]
                                    : P.t["8066TK"]
                              : null != l
                                ? f
                                    ? P.t.yMEn77
                                    : P.t["6FOKAX"]
                                : f
                                  ? P.t.bxN0nx
                                  : P.t.thO6iA
                          : c || null != l
                            ? f
                                ? P.t.ojhBxZ
                                : P.t["IACEB/"]
                            : f
                              ? P.t.bxN0nx
                              : P.t.thO6iA,
                    { gameTitle: o, objective: n.description, duration: l, questReward: a, onGameTitleClick: s },
                    i,
                );
            })({
                quest: t,
                thirdPartyTaskDetails: i,
                withoutMarkdown: l,
                hasNitro: S,
                collectibleRewardDuration: T,
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
                          onGameTitleClick: s,
                          rewardNameWithArticle: a,
                      } = e,
                      { targetMinutes: u } = n,
                      o = t.config.messages.gameTitle,
                      c = (0, p.JX)(t.config),
                      d = (0, p.Y7)(t.config),
                      f = null != s;
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
                          gameTitle: o,
                          streamingDurationRequirement: u,
                          duration: l,
                          questReward: a,
                          onGameTitleClick: s,
                      },
                      i,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: l,
                  hasNitro: S,
                  collectibleRewardDuration: T,
                  onGameTitleClick: d,
                  rewardNameWithArticle: h,
              });
    })({
        ...e,
        currentUser: r,
        withoutMarkdown: i,
        thirdPartyTaskDetails: u ?? void 0,
        onGameTitleClick: I ? S : void 0,
        needsToConnect: d,
    });
}
function U(e, t, n, i, r) {
    let l = (0, v.fc)(e),
        s = w({
            quest: e,
            taskDetails: l,
            location: n,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: i,
        }),
        a = e.userStatus?.claimedAt != null,
        u = (0, v.S5)(e.userStatus?.claimedAt);
    return a ? P.intl.formatToPlainString(P.t.lOVr0O, { claimDate: u }) : s;
}
function j(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: r,
            popoutTargetElementRef: a,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: d,
            onClickGameTitle: f,
        } = e,
        g = t.config.rewardsConfig.rewardsExpireAt,
        E = (0, v.S5)(g),
        A = (0, v.fc)(t),
        C = (0, v.I3)(t),
        _ = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        S = t.userStatus?.completedAt != null,
        T = t.userStatus?.enrolledAt != null,
        I = A.percentComplete > 0,
        h = (0, v.Vn)(t),
        O = w({
            quest: t,
            location: G.rE.QUESTS_BAR,
            taskDetails: A,
            sourceQuestContent: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: s.GameProfileSources.QuestBar,
        }),
        x = null != C ? C.percentComplete : A.percentComplete;
    if (S) return P.intl.formatToPlainString(P.t.APddvF, { expirationDate: E });
    if ((0, L.I6)(t) && !1 === d) return P.intl.string(P.t.mAdqf7);
    if (n) {
        if ((0, L.I6)(t) && !0 === d) {
            let e = t.config.messages.gameTitle;
            return null != f
                ? P.intl.format(P.t.X8hBDz, { gameTitle: e, onClickGameTitle: f })
                : P.intl.format(P.t.u3mdpP, { gameTitle: e });
        }
        if (r !== m.X0.SELECT && (0, R.ui)(t) && T && !I) {
            let e = (0, p.mH)(t.config, _);
            return P.intl.format(P.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: A.targetMinutes });
        }
        return O;
    }
    return (0, L.vv)(t)
        ? P.intl.string(P.t["o+e9yh"])
        : x > 0
          ? (0, L.I6)(t) && !0 === d
              ? P.intl.string(P.t.JkyCIO)
              : h
                ? (0, N.YT)({ quest: t, taskDetails: A, thirdPartyTaskDetails: C ?? void 0 })
                : P.intl.string(P.t.mOrpXG)
          : P.intl.string(P.t.S6UUc5);
}
function Q(e, t) {
    let n = (0, l.bG)([u.default], () => u.default.locale),
        i = (0, v.fc)(e),
        [r] = (0, v.Qo)(e, i),
        s = (0, v.I3)(e),
        a = e.userStatus?.completedAt != null,
        o = null != s ? s.percentComplete : i.percentComplete;
    if (a) return P.intl.string(P.t["ij5E/5"]);
    if ((0, L.I6)(e) && !1 === t) return P.intl.string(P.t.s9r2a1);
    if ((0, L.I6)(e) && !0 === t && 0 === o) return P.intl.string(P.t["2+opCy"]);
    if (e.userStatus?.enrolledAt != null && o > 0) {
        let e = (0, d.l9)(n, o, { roundingMode: "floor" });
        return P.intl.formatToPlainString(P.t.lVZaXD, { percent: e });
    }
    return r === m.X0.SELECT
        ? P.intl.string(P.t.EMrUHQ)
        : (0, L.g5)(e)
          ? P.intl.string(P.t.mOrpXG)
          : P.intl.string(P.t["7e5k7L"]);
}
function b(e) {
    let { quest: t, application: n, shortText: r = !1, showPlayInstantlyLabel: l = !1 } = e,
        s = i.useMemo(
            () =>
                (function (e) {
                    return (0, L.g5)(e) || (0, L.vl)(e)
                        ? 0
                        : (0, L.fE)({ quest: e })
                          ? 1
                          : (0, L.IO)(e)
                            ? 2
                            : 3 * !!(0, L.Cr)(e);
                })(t),
            [t],
        ),
        a = (0, v.fc)(t);
    switch (s) {
        case 0:
            if (t.config.features.includes(G.Li.CLOUD_GAMING_ACTIVITY))
                return P.intl.string(l ? P.t.V5Qt9D : P.t["+qoymD"]);
            if ((0, R.vA)(t)) return P.intl.string(r ? P.t.E4kW5O : P.t["Ie9++s"]);
            return P.intl.string(P.t.l7E81v);
        case 1:
            return P.intl.string(P.t.l7E81v);
        case 2:
            return (0, I.WM)(a);
        case 3:
            return (0, R.vA)(t) && 1 ? P.intl.string(r ? P.t.CkUzLd : P.t["hRIVy+"]) : P.intl.string(P.t.l7E81v);
    }
}
function F(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, p.kr)({ quest: t }),
        r = n?.platform ?? m.pY.CROSS_PLATFORM,
        l = i ? (0, p.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        s = (0, N.xv)(t.config),
        a = l?.messages?.redemptionInstructionsByPlatform ?? s.messages.redemptionInstructionsByPlatform;
    return null != r ? a[r] : void 0;
}
function X(e) {
    let { quest: t, questContent: n, preCtaClick: l, getImpressionId: s, sourceQuestContent: a } = e;
    async function u() {
        await l?.(),
            (0, h.pu)(t, { content: n, ctaContent: S.Cy.OPEN_GAME_LINK, impressionId: s?.(), sourceQuestContent: a });
    }
    let o = i.useMemo(() => {
        let e = t.config.ctaConfig?.subtitle;
        return null != e
            ? e
            : (0, L.I6)(t)
              ? t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle
              : (0, R.pv)(t.config) !== r.Z.GAMEPLAY ||
                  t.config.features.includes(G.Li.NON_GAMING_PLAY_QUEST) ||
                  (0, R.ui)(t)
                ? P.intl.string(P.t.y8Xf3k)
                : P.intl.string(P.t["wirwN+"]);
    }, [t]);
    return {
        ctaText: (0, N.wr)(t),
        ctaVariant: "secondary",
        onClickCta: u,
        title: t.config.messages.gameTitle,
        subtitle: o,
        ctaIconPosition: "end",
    };
}
