n.d(t, { A9: () => w, mU: () => D, Jf: () => Q, tH: () => q, NA: () => U, XR: () => j, VX: () => b });
var i = n(64700),
    r = n(731355),
    l = n(17928);
n(166352);
var a = n(409626),
    s = n(692969),
    o = n(773669),
    u = n(287809),
    c = n(252424),
    d = n(474090),
    f = n(24001),
    m = n(627968),
    g = n(939249),
    E = n(834730),
    A = n(862611),
    C = n(420298),
    _ = n(590202),
    p = n(284846),
    S = n(287875),
    I = n(651892),
    T = n(901406),
    h = n(801365),
    R = n(792620),
    L = n(814793),
    N = n(347135),
    v = n(190107),
    x = n(202541),
    G = n(375708);
function P(e, t, n) {
    return n ? G.intl.formatToPlainString(e, t) : G.intl.format(e, t);
}
function O(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? G.t["/4XT0b"] : G.t["0hwcvM"]) : n ? G.t.tQoqXX : G.t["eb/Sna"];
}
function M(e) {
    return e ? G.t.klYWbT : G.t.ziB0HF;
}
function y(e) {
    return e ? G.t["4JS2QJ"] : G.t.AwuMRS;
}
function k(e) {
    return e ? G.t.GFdaUK : G.t.NIimTt;
}
function D(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        r = (0, N.I3)(t),
        o = !1 === (0, p.U)(t).hasAlreadyLinked,
        c = (0, R.I6)(t) ? (0, R.xc)(t) : (0, R._3)(t)?.[0],
        f = (0, s.A)({
            applicationId: c,
            location: v.rE.QUEST_INSTRUCTIONS,
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
                onGameTitleClick: c,
                needsToConnect: f,
            } = e,
            _ = (0, d.ki)(a, x.PremiumTypes.TIER_2),
            p = (0, h.k5)(t.config),
            S = (0, R.g5)(t) && (0, R.xZ)(t),
            I = (0, L.ui)(t),
            T = (0, h.mH)(t.config, a);
        if (I)
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
                if (r) return G.intl.formatToPlainString(G.t["1votF6"], { rewardNameWithArticle: o, targetMinutes: u });
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
                        (0, m.jsx)(
                            A.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: r,
                                onGameSheetOpened: l,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, m.jsx)(g.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, m.jsx)(E.E, {
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            className: C.s3,
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
                            [v.Li.PACKAGE_ACTION_ADVENTURE]: G.t.H485IA,
                            [v.Li.PACKAGE_RPG_MMO]: G.t["3XS8Ni"],
                            [v.Li.PACKAGE_RACING_SPORTS]: G.t["X+UCju"],
                            [v.Li.PACKAGE_SANDBOX_CREATIVE]: G.t["6o4n1Q"],
                            [v.Li.PACKAGE_FAMILY_FRIENDLY]: G.t.DUsNmf,
                            [v.Li.PACKAGE_HOLIDAY_SEASON]: G.t["cWP8/Z"],
                            [v.Li.PACKAGE_NEW_YEARS]: G.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in l),
                        s = (null != a ? l[a] : null) ?? G.t.CDeHul;
                    return G.intl.format(s, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: o, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: r,
                withoutMarkdown: l,
                popoutTargetElementRef: s,
                onGameSheetOpened: o,
                onGameSheetClosed: u,
                rewardNameWithArticle: T,
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
                    c = (0, h.JX)(t.config),
                    d = (0, h.Y7)(t.config),
                    f = t.config.features.includes(v.Li.NON_GAMING_PLAY_QUEST),
                    m = null != a;
                return P(
                    r && c
                        ? d
                            ? f
                                ? null != l
                                    ? G.t.u5QXpw
                                    : G.t.ztXW8V
                                : O({ hasRewardDuration: null != l, shouldShowGameProfileLink: m })
                            : f
                              ? G.t["1AcTqm"]
                              : M(m)
                        : c || null != l
                          ? f
                              ? G.t.enQ3jU
                              : y(m)
                          : f
                            ? G.t["e+K3xJ"]
                            : k(m),
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
                hasNitro: _,
                collectibleRewardDuration: p,
                onGameTitleClick: c,
                rewardNameWithArticle: T,
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
                    c = (0, h.JX)(t.config),
                    d = (0, h.Y7)(t.config),
                    f = null != a;
                return P(
                    r && c
                        ? d
                            ? O({ hasRewardDuration: null != l, shouldShowGameProfileLink: f })
                            : M(f)
                        : c || null != l
                          ? y(f)
                          : k(f),
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
                hasNitro: _,
                collectibleRewardDuration: p,
                onGameTitleClick: c,
                rewardNameWithArticle: T,
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
                    d = (0, h.JX)(n.config),
                    f = (0, h.Y7)(n.config),
                    m = n.config.features.includes(v.Li.NON_GAMING_PLAY_QUEST),
                    g = null != s;
                return P(
                    (t =
                        l && d
                            ? f
                                ? m
                                    ? null != a
                                        ? G.t.u5QXpw
                                        : G.t.ztXW8V
                                    : O({ hasRewardDuration: null != a, shouldShowGameProfileLink: g })
                                : m
                                  ? G.t["1AcTqm"]
                                  : M(g)
                            : d || null != a
                              ? m
                                  ? G.t.enQ3jU
                                  : y(g)
                              : m
                                ? G.t["03VJqu"]
                                : g
                                  ? G.t.NrD2h8
                                  : G.t.FZL5Q5),
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
                hasNitro: _,
                collectibleRewardDuration: p,
                onGameTitleClick: c,
                rewardNameWithArticle: T,
            });
        if ((0, h.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: l } = n,
                    a = t.config.messages.gameTitle;
                return P(
                    null != r ? G.t.HHVg4i : G.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: l, onGameTitleClick: r },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: l, onGameTitleClick: c });
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
                    o = (0, h.JX)(t.config),
                    u = (0, h.Y7)(t.config);
                return P(
                    o && i
                        ? u
                            ? null != n
                                ? G.t.tXwfJT
                                : G.t["xqX+r5"]
                            : G.t["vs/xBu"]
                        : o || null != n
                          ? G.t["W/HkLO"]
                          : t.id === v.Fw
                            ? G.t.Rsd5bL
                            : G.t["g+InPC"],
                    { videoTitle: s, rewardNameWithArticle: l, duration: n },
                    r,
                );
            })({ quest: t, collectibleRewardDuration: p, hasNitro: _, withoutMarkdown: l, rewardNameWithArticle: T });
        else if ((0, R.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, rewardNameWithArticle: r } = e,
                    l = n.targetMinutes;
                return (0, L._e)(t)
                    ? P(G.t.VYwSSu, { streamingDurationRequirement: l, questReward: r }, i)
                    : P(
                          G.t.UuzHh8,
                          {
                              activityName: t.config.messages.gameTitle,
                              streamingDurationRequirement: l,
                              questReward: r,
                          },
                          i,
                      );
            })({ quest: t, taskDetails: n, withoutMarkdown: l, rewardNameWithArticle: T });
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
                    d = (0, h.JX)(n.config),
                    f = (0, h.Y7)(n.config),
                    m = null != s;
                t = u
                    ? m
                        ? G.t["0SLl/G"]
                        : G.t.BlfaHK
                    : l && d
                      ? f
                          ? null != a
                              ? m
                                  ? G.t.uLVYG5
                                  : G.t.NdXW5c
                              : m
                                ? G.t["2Ctf1d"]
                                : G.t["8066TK"]
                          : null != a
                            ? m
                                ? G.t.yMEn77
                                : G.t["6FOKAX"]
                            : m
                              ? G.t.bxN0nx
                              : G.t.thO6iA
                      : d || null != a
                        ? m
                            ? G.t.ojhBxZ
                            : G.t["IACEB/"]
                        : m
                          ? G.t.bxN0nx
                          : G.t.thO6iA;
                let g = i.description;
                return P(
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
                hasNitro: _,
                collectibleRewardDuration: p,
                onGameTitleClick: c,
                rewardNameWithArticle: T,
                needsToConnect: f,
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
                      c = (0, h.JX)(t.config),
                      d = (0, h.Y7)(t.config),
                      f = null != a;
                  return P(
                      r && c
                          ? d
                              ? null != l
                                  ? f
                                      ? G.t["3RwRv8"]
                                      : G.t.TmKqHw
                                  : f
                                    ? G.t.l9yxDa
                                    : G.t["X8Yt/1"]
                              : f
                                ? G.t.eEuma3
                                : G.t.smG9ql
                          : c || null != l
                            ? f
                                ? G.t.Cko4a4
                                : G.t.BLyDvO
                            : f
                              ? G.t.ER9rII
                              : G.t["hkJ+Gs"],
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
                  hasNitro: _,
                  collectibleRewardDuration: p,
                  onGameTitleClick: c,
                  rewardNameWithArticle: T,
              });
    })({
        ...e,
        currentUser: i,
        withoutMarkdown: !1,
        thirdPartyTaskDetails: r ?? void 0,
        onGameTitleClick: f,
        needsToConnect: o,
    });
}
function w(e, t, n, i, r) {
    let l = (0, N.fc)(e),
        a = D({
            quest: e,
            taskDetails: l,
            location: n,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: i,
        }),
        s = e.userStatus?.claimedAt != null,
        o = (0, N.S5)(e.userStatus?.claimedAt);
    return s ? G.intl.formatToPlainString(G.t.lOVr0O, { claimDate: o }) : a;
}
function q(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: r,
            popoutTargetElementRef: s,
            onGameSheetOpened: o,
            onGameSheetClosed: c,
            hasAlreadyLinked: d,
            onClickGameTitle: m,
        } = e,
        g = t.config.rewardsConfig.rewardsExpireAt,
        E = (0, N.S5)(g),
        A = (0, N.fc)(t),
        C = (0, N.I3)(t),
        _ = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        p = t.userStatus?.completedAt != null,
        S = t.userStatus?.enrolledAt != null,
        T = A.percentComplete > 0,
        x = (0, N.Vn)(t),
        P = D({
            quest: t,
            location: v.rE.QUESTS_BAR,
            taskDetails: A,
            sourceQuestContent: i,
            popoutTargetElementRef: s,
            onGameSheetOpened: o,
            onGameSheetClosed: c,
            gameProfileSource: a.GameProfileSources.QuestBar,
        }),
        O = null != C ? C.percentComplete : A.percentComplete;
    if (p) return G.intl.formatToPlainString(G.t.APddvF, { expirationDate: E });
    if ((0, R.I6)(t) && !1 === d) return G.intl.string(G.t.mAdqf7);
    if (n) {
        if ((0, R.I6)(t) && !0 === d) {
            let e = t.config.messages.gameTitle;
            return null != m
                ? G.intl.format(G.t.X8hBDz, { gameTitle: e, onClickGameTitle: m })
                : G.intl.format(G.t.u3mdpP, { gameTitle: e });
        }
        if (r !== f.X0.SELECT && (0, L.ui)(t) && S && !T) {
            let e = (0, h.mH)(t.config, _);
            return G.intl.format(G.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: A.targetMinutes });
        }
        return P;
    }
    return (0, R.vv)(t)
        ? G.intl.string(G.t["o+e9yh"])
        : O > 0
          ? (0, R.I6)(t) && !0 === d
              ? G.intl.string(G.t.JkyCIO)
              : x
                ? (0, I.YT)({ quest: t, taskDetails: A, thirdPartyTaskDetails: C ?? void 0 })
                : G.intl.string(G.t.mOrpXG)
          : G.intl.string(G.t.S6UUc5);
}
function b(e, t) {
    let n = (0, l.bG)([o.default], () => o.default.locale),
        i = (0, N.fc)(e),
        [r] = (0, N.Qo)(e, i),
        a = (0, N.I3)(e),
        s = e.userStatus?.completedAt != null,
        u = null != a ? a.percentComplete : i.percentComplete;
    if (s) return G.intl.string(G.t["ij5E/5"]);
    if ((0, R.I6)(e) && !1 === t) return G.intl.string(G.t.s9r2a1);
    if ((0, R.I6)(e) && !0 === t && 0 === u) return G.intl.string(G.t["2+opCy"]);
    if (e.userStatus?.enrolledAt != null && u > 0) {
        let e = (0, c.l9)(n, u, { roundingMode: "floor" });
        return G.intl.formatToPlainString(G.t.lVZaXD, { percent: e });
    }
    return r === f.X0.SELECT
        ? G.intl.string(G.t.EMrUHQ)
        : (0, R.g5)(e)
          ? G.intl.string(G.t.mOrpXG)
          : G.intl.string(G.t["7e5k7L"]);
}
function U(e) {
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
        s = (0, N.fc)(t);
    switch (a) {
        case 0:
            if (t.config.features.includes(v.Li.CLOUD_GAMING_ACTIVITY))
                return G.intl.string(l ? G.t.V5Qt9D : G.t["+qoymD"]);
            if ((0, L.vA)(t)) return G.intl.string(r ? G.t.E4kW5O : G.t["Ie9++s"]);
            return G.intl.string(G.t.l7E81v);
        case 1:
            return G.intl.string(G.t.l7E81v);
        case 2:
            return (0, S.WM)(s);
        case 3:
            return (0, L.vA)(t) && 1 ? G.intl.string(r ? G.t.CkUzLd : G.t["hRIVy+"]) : G.intl.string(G.t.l7E81v);
    }
}
function j(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, h.kr)({ quest: t }),
        r = n?.platform ?? f.pY.CROSS_PLATFORM,
        l = i ? (0, h.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, I.xv)(t.config),
        s = l?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? s[r] : void 0;
}
function Q(e) {
    let { quest: t, questContent: n, preCtaClick: l, getImpressionId: a, sourceQuestContent: s } = e;
    async function o() {
        await l?.(),
            (0, T.pu)(t, { content: n, ctaContent: _.Cy.OPEN_GAME_LINK, impressionId: a?.(), sourceQuestContent: s });
    }
    let u = i.useMemo(() => {
        let e = t.config.ctaConfig?.subtitle;
        return null != e
            ? e
            : (0, R.I6)(t)
              ? t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle
              : (0, L.pv)(t.config) !== r.Z.GAMEPLAY ||
                  t.config.features.includes(v.Li.NON_GAMING_PLAY_QUEST) ||
                  (0, L.ui)(t)
                ? G.intl.string(G.t.y8Xf3k)
                : G.intl.string(G.t["wirwN+"]);
    }, [t]);
    return {
        ctaText: (0, I.wr)(t),
        ctaVariant: "secondary",
        onClickCta: o,
        title: t.config.messages.gameTitle,
        subtitle: u,
        ctaIconPosition: "end",
    };
}
