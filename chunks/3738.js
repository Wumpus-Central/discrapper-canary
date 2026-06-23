n.d(t, { A9: () => D, mU: () => w, Jf: () => Q, tH: () => j, NA: () => q, XR: () => U, VX: () => b });
var i = n(64700),
    l = n(731355),
    r = n(17928);
n(166352);
var a = n(409626),
    s = n(692969),
    o = n(773669),
    u = n(287809),
    c = n(252424),
    d = n(474090),
    f = n(507107),
    m = n(627968),
    g = n(939249),
    A = n(834730),
    E = n(862611),
    C = n(420298),
    p = n(590202),
    _ = n(284846),
    h = n(287875),
    S = n(651892),
    I = n(901406),
    T = n(801365),
    v = n(792620),
    L = n(814793),
    R = n(347135),
    x = n(190107),
    N = n(788868),
    G = n(375708);
function O(e, t, n) {
    return n ? G.intl.formatToPlainString(e, t) : G.intl.format(e, t);
}
function P(e) {
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
function w(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        l = (0, R.I3)(t),
        o = !1 === (0, _.U)(t).hasAlreadyLinked,
        c = (0, v.I6)(t) ? (0, v.xc)(t) : (0, v._3)(t)?.[0],
        f = (0, s.A)({ applicationId: c, location: x.rE.QUEST_INSTRUCTIONS, source: n ?? a.Ob.QuestHome });
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                thirdPartyTaskDetails: i,
                sourceQuestContent: l,
                withoutMarkdown: r,
                currentUser: a,
                popoutTargetElementRef: s,
                onGameSheetOpened: o,
                onGameSheetClosed: u,
                onGameTitleClick: c,
                needsToConnect: f,
            } = e,
            p = (0, d.ki)(a, N.PremiumTypes.TIER_2),
            _ = (0, T.k5)(t.config),
            h = (0, v.g5)(t) && (0, v.xZ)(t),
            S = (0, L.ui)(t),
            I = (0, T.mH)(t.config, a);
        if (S)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        sourceQuestContent: i,
                        withoutMarkdown: l,
                        popoutTargetElementRef: r,
                        onGameSheetOpened: a,
                        onGameSheetClosed: s,
                        rewardNameWithArticle: o,
                    } = e,
                    { targetMinutes: u, applications: c } = n;
                if (l) return G.intl.formatToPlainString(G.t["1votF6"], { rewardNameWithArticle: o, targetMinutes: u });
                let d = (function (e) {
                    let {
                        quest: t,
                        sourceQuestContent: n,
                        applications: i,
                        popoutTargetElementRef: l,
                        onGameSheetOpened: r,
                        onGameSheetClosed: a,
                    } = e;
                    return (e) =>
                        (0, m.jsx)(
                            E.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: l,
                                onGameSheetOpened: r,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, m.jsx)(g.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, m.jsx)(A.E, {
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
                    popoutTargetElementRef: r,
                    onGameSheetOpened: a,
                    onGameSheetClosed: s,
                });
                return (function (e) {
                    let { quest: t, gameSheetHook: n, rewardNameWithArticle: i, targetMinutes: l } = e,
                        r = {
                            [x.Li.PACKAGE_ACTION_ADVENTURE]: G.t.H485IA,
                            [x.Li.PACKAGE_RPG_MMO]: G.t["3XS8Ni"],
                            [x.Li.PACKAGE_RACING_SPORTS]: G.t["X+UCju"],
                            [x.Li.PACKAGE_SANDBOX_CREATIVE]: G.t["6o4n1Q"],
                            [x.Li.PACKAGE_FAMILY_FRIENDLY]: G.t.DUsNmf,
                            [x.Li.PACKAGE_HOLIDAY_SEASON]: G.t["cWP8/Z"],
                            [x.Li.PACKAGE_NEW_YEARS]: G.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in r),
                        s = (null != a ? r[a] : null) ?? G.t.CDeHul;
                    return G.intl.format(s, { rewardNameWithArticle: i, targetMinutes: l, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: o, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: l,
                withoutMarkdown: r,
                popoutTargetElementRef: s,
                onGameSheetOpened: o,
                onGameSheetClosed: u,
                rewardNameWithArticle: I,
            });
        if (h)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: l,
                        collectibleRewardDuration: r,
                        onGameTitleClick: a,
                        rewardNameWithArticle: s,
                    } = e,
                    { targetMinutes: o } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, T.JX)(t.config),
                    d = (0, T.Y7)(t.config),
                    f = t.config.features.includes(x.Li.NON_GAMING_PLAY_QUEST),
                    m = null != a;
                return O(
                    l && c
                        ? d
                            ? f
                                ? null != r
                                    ? G.t.u5QXpw
                                    : G.t.ztXW8V
                                : P({ hasRewardDuration: null != r, shouldShowGameProfileLink: m })
                            : f
                              ? G.t["1AcTqm"]
                              : M(m)
                        : c || null != r
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
                        duration: r,
                        targetMinutes: o,
                        onGameTitleClick: a,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: p,
                collectibleRewardDuration: _,
                onGameTitleClick: c,
                rewardNameWithArticle: I,
            });
        if ((0, v.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: l,
                        collectibleRewardDuration: r,
                        onGameTitleClick: a,
                        rewardNameWithArticle: s,
                    } = e,
                    { targetMinutes: o } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, T.JX)(t.config),
                    d = (0, T.Y7)(t.config),
                    f = null != a;
                return O(
                    l && c
                        ? d
                            ? P({ hasRewardDuration: null != r, shouldShowGameProfileLink: f })
                            : M(f)
                        : c || null != r
                          ? y(f)
                          : k(f),
                    {
                        gameTitle: u,
                        targetMinutes: o,
                        rewardNameWithArticle: s,
                        duration: r,
                        streamingDurationRequirement: o,
                        onGameTitleClick: a,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: p,
                collectibleRewardDuration: _,
                onGameTitleClick: c,
                rewardNameWithArticle: I,
            });
        if ((0, v.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: i,
                        withoutMarkdown: l,
                        hasNitro: r,
                        collectibleRewardDuration: a,
                        onGameTitleClick: s,
                        rewardNameWithArticle: o,
                    } = e,
                    { targetMinutes: u } = i,
                    c = n.config.messages.gameTitle,
                    d = (0, T.JX)(n.config),
                    f = (0, T.Y7)(n.config),
                    m = n.config.features.includes(x.Li.NON_GAMING_PLAY_QUEST),
                    g = null != s;
                return O(
                    (t =
                        r && d
                            ? f
                                ? m
                                    ? null != a
                                        ? G.t.u5QXpw
                                        : G.t.ztXW8V
                                    : P({ hasRewardDuration: null != a, shouldShowGameProfileLink: g })
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
                    l,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: p,
                collectibleRewardDuration: _,
                onGameTitleClick: c,
                rewardNameWithArticle: I,
            });
        if ((0, T.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: l } = e,
                    { targetMinutes: r } = n,
                    a = t.config.messages.gameTitle;
                return O(
                    null != l ? G.t.HHVg4i : G.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: r, onGameTitleClick: l },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: r, onGameTitleClick: c });
        else if ((0, v.vv)(t))
            return (function (e) {
                let {
                        quest: t,
                        collectibleRewardDuration: n,
                        hasNitro: i,
                        withoutMarkdown: l,
                        rewardNameWithArticle: r,
                    } = e,
                    a = (0, v.Xi)(t.config),
                    s = a?.messages.videoTitle ?? "video",
                    o = (0, T.JX)(t.config),
                    u = (0, T.Y7)(t.config);
                return O(
                    o && i
                        ? u
                            ? null != n
                                ? G.t.tXwfJT
                                : G.t["xqX+r5"]
                            : G.t["vs/xBu"]
                        : o || null != n
                          ? G.t["W/HkLO"]
                          : t.id === x.Fw
                            ? G.t.Rsd5bL
                            : G.t["g+InPC"],
                    { videoTitle: s, rewardNameWithArticle: r, duration: n },
                    l,
                );
            })({ quest: t, collectibleRewardDuration: _, hasNitro: p, withoutMarkdown: r, rewardNameWithArticle: I });
        else if ((0, v.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, rewardNameWithArticle: l } = e,
                    r = n.targetMinutes;
                return (0, L._e)(t)
                    ? O(G.t.VYwSSu, { streamingDurationRequirement: r, questReward: l }, i)
                    : O(
                          G.t.UuzHh8,
                          {
                              activityName: t.config.messages.gameTitle,
                              streamingDurationRequirement: r,
                              questReward: l,
                          },
                          i,
                      );
            })({ quest: t, taskDetails: n, withoutMarkdown: r, rewardNameWithArticle: I });
        else if ((0, v.I6)(t) && null != i)
            return (function (e) {
                let t,
                    {
                        quest: n,
                        thirdPartyTaskDetails: i,
                        withoutMarkdown: l,
                        hasNitro: r,
                        collectibleRewardDuration: a,
                        onGameTitleClick: s,
                        rewardNameWithArticle: o,
                        needsToConnect: u,
                    } = e,
                    c = n.config.messages.gameTitle,
                    d = (0, T.JX)(n.config),
                    f = (0, T.Y7)(n.config),
                    m = null != s;
                t = u
                    ? m
                        ? G.t["0SLl/G"]
                        : G.t.BlfaHK
                    : r && d
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
                return O(
                    t,
                    {
                        gameTitle: c,
                        objective: u ? g.charAt(0).toLowerCase() + g.slice(1) : g,
                        duration: a,
                        questReward: o,
                        onGameTitleClick: s,
                    },
                    l,
                );
            })({
                quest: t,
                thirdPartyTaskDetails: i,
                withoutMarkdown: r,
                hasNitro: p,
                collectibleRewardDuration: _,
                onGameTitleClick: c,
                rewardNameWithArticle: I,
                needsToConnect: f,
            });
        return null != i
            ? i.description
            : (function (e) {
                  let {
                          quest: t,
                          taskDetails: n,
                          withoutMarkdown: i,
                          hasNitro: l,
                          collectibleRewardDuration: r,
                          onGameTitleClick: a,
                          rewardNameWithArticle: s,
                      } = e,
                      { targetMinutes: o } = n,
                      u = t.config.messages.gameTitle,
                      c = (0, T.JX)(t.config),
                      d = (0, T.Y7)(t.config),
                      f = null != a;
                  return O(
                      l && c
                          ? d
                              ? null != r
                                  ? f
                                      ? G.t["3RwRv8"]
                                      : G.t.TmKqHw
                                  : f
                                    ? G.t.l9yxDa
                                    : G.t["X8Yt/1"]
                              : f
                                ? G.t.eEuma3
                                : G.t.smG9ql
                          : c || null != r
                            ? f
                                ? G.t.Cko4a4
                                : G.t.BLyDvO
                            : f
                              ? G.t.ER9rII
                              : G.t["hkJ+Gs"],
                      {
                          gameTitle: u,
                          streamingDurationRequirement: o,
                          duration: r,
                          questReward: s,
                          onGameTitleClick: a,
                      },
                      i,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: r,
                  hasNitro: p,
                  collectibleRewardDuration: _,
                  onGameTitleClick: c,
                  rewardNameWithArticle: I,
              });
    })({
        ...e,
        currentUser: i,
        withoutMarkdown: !1,
        thirdPartyTaskDetails: l ?? void 0,
        onGameTitleClick: f,
        needsToConnect: o,
    });
}
function D(e, t, n, i, l) {
    let r = (0, R.fc)(e),
        a = w({
            quest: e,
            taskDetails: r,
            location: n,
            sourceQuestContent: t,
            popoutTargetElementRef: l,
            gameProfileSource: i,
        }),
        s = e.userStatus?.claimedAt != null,
        o = (0, R.S5)(e.userStatus?.claimedAt);
    return s ? G.intl.formatToPlainString(G.t.lOVr0O, { claimDate: o }) : a;
}
function j(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: l,
            popoutTargetElementRef: s,
            onGameSheetOpened: o,
            onGameSheetClosed: c,
            hasAlreadyLinked: d,
            onClickGameTitle: m,
        } = e,
        g = t.config.rewardsConfig.rewardsExpireAt,
        A = (0, R.S5)(g),
        E = (0, R.fc)(t),
        C = (0, R.I3)(t),
        p = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        _ = t.userStatus?.completedAt != null,
        h = t.userStatus?.enrolledAt != null,
        I = E.percentComplete > 0,
        N = (0, R.Vn)(t),
        O = w({
            quest: t,
            location: x.rE.QUESTS_BAR,
            taskDetails: E,
            sourceQuestContent: i,
            popoutTargetElementRef: s,
            onGameSheetOpened: o,
            onGameSheetClosed: c,
            gameProfileSource: a.Ob.QuestBar,
        }),
        P = null != C ? C.percentComplete : E.percentComplete;
    if (_) return G.intl.formatToPlainString(G.t.APddvF, { expirationDate: A });
    if ((0, v.I6)(t) && !1 === d) return G.intl.string(G.t.mAdqf7);
    if (n) {
        if ((0, v.I6)(t) && !0 === d) {
            let e = t.config.messages.gameTitle;
            return null != m
                ? G.intl.format(G.t.X8hBDz, { gameTitle: e, onClickGameTitle: m })
                : G.intl.format(G.t.u3mdpP, { gameTitle: e });
        }
        if (l !== f.X0.SELECT && (0, L.ui)(t) && h && !I) {
            let e = (0, T.mH)(t.config, p);
            return G.intl.format(G.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: E.targetMinutes });
        }
        return O;
    }
    return (0, v.vv)(t)
        ? G.intl.string(G.t["o+e9yh"])
        : P > 0
          ? (0, v.I6)(t) && !0 === d
              ? G.intl.string(G.t.JkyCIO)
              : N
                ? (0, S.YT)({ quest: t, taskDetails: E, thirdPartyTaskDetails: C ?? void 0 })
                : G.intl.string(G.t.mOrpXG)
          : G.intl.string(G.t.S6UUc5);
}
function b(e, t) {
    let n = (0, r.bG)([o.default], () => o.default.locale),
        i = (0, R.fc)(e),
        [l] = (0, R.Qo)(e, i),
        a = (0, R.I3)(e),
        s = e.userStatus?.completedAt != null,
        u = null != a ? a.percentComplete : i.percentComplete;
    if (s) return G.intl.string(G.t["ij5E/5"]);
    if ((0, v.I6)(e) && !1 === t) return G.intl.string(G.t.s9r2a1);
    if ((0, v.I6)(e) && !0 === t && 0 === u) return G.intl.string(G.t["2+opCy"]);
    if (e.userStatus?.enrolledAt != null && u > 0) {
        let e = (0, c.l9)(n, u, { roundingMode: "floor" });
        return G.intl.formatToPlainString(G.t.lVZaXD, { percent: e });
    }
    return l === f.X0.SELECT
        ? G.intl.string(G.t.EMrUHQ)
        : (0, v.g5)(e)
          ? G.intl.string(G.t.mOrpXG)
          : G.intl.string(G.t["7e5k7L"]);
}
function q(e) {
    let { quest: t, application: n, shortText: l = !1 } = e,
        r = i.useMemo(
            () =>
                (function (e) {
                    return (0, v.g5)(e) || (0, v.vl)(e)
                        ? 0
                        : (0, v.fE)({ quest: e })
                          ? 1
                          : (0, v.IO)(e)
                            ? 2
                            : 3 * !!(0, v.Cr)(e);
                })(t),
            [t],
        ),
        a = (0, R.fc)(t);
    switch (r) {
        case 0:
            if (t.config.features.includes(x.Li.CLOUD_GAMING_ACTIVITY)) return G.intl.string(G.t["+qoymD"]);
            if ((0, L.vA)(t)) return G.intl.string(l ? G.t.E4kW5O : G.t["Ie9++s"]);
            return G.intl.string(G.t.l7E81v);
        case 1:
            return G.intl.string(G.t.l7E81v);
        case 2:
            return (0, h.WM)(a);
        case 3:
            return (0, L.vA)(t) && 1 ? G.intl.string(l ? G.t.CkUzLd : G.t["hRIVy+"]) : G.intl.string(G.t.l7E81v);
    }
}
function U(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, T.kr)({ quest: t }),
        l = n?.platform ?? f.pY.CROSS_PLATFORM,
        r = i ? (0, T.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, S.xv)(t.config),
        s = r?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != l ? s[l] : void 0;
}
function Q(e) {
    let { quest: t, questContent: n, preCtaClick: r, impressionId: a, sourceQuestContent: s } = e;
    async function o() {
        await r?.(),
            (0, I.pu)(t, { content: n, ctaContent: p.Cy.OPEN_GAME_LINK, impressionId: a, sourceQuestContent: s });
    }
    let u = i.useMemo(() => {
        let e = t.config.ctaConfig?.subtitle;
        return null != e
            ? e
            : (0, v.I6)(t)
              ? t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle
              : (0, L.pv)(t.config) !== l.Z.GAMEPLAY ||
                  t.config.features.includes(x.Li.NON_GAMING_PLAY_QUEST) ||
                  (0, L.ui)(t)
                ? G.intl.string(G.t.y8Xf3k)
                : G.intl.string(G.t["wirwN+"]);
    }, [t]);
    return {
        ctaText: (0, S.wr)(t),
        ctaVariant: "secondary",
        onClickCta: o,
        title: t.config.messages.gameTitle,
        subtitle: u,
        ctaIconPosition: "end",
    };
}
