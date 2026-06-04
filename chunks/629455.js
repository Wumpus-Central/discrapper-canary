"use strict";
n.d(t, { A9: () => x, mU: () => P, Jf: () => V, tH: () => k, NA: () => G, XR: () => F, VX: () => U });
var i = n(64700),
    r = n(731355),
    s = n(17928);
n(166352);
var a = n(409626),
    o = n(692969),
    l = n(773669),
    u = n(287809),
    c = n(252424),
    d = n(474090),
    _ = n(507107),
    h = n(627968),
    f = n(939249),
    p = n(834730),
    E = n(862611),
    m = n(420298),
    g = n(590202),
    A = n(287875),
    I = n(651892),
    T = n(901406),
    S = n(801365),
    y = n(792620),
    N = n(814793),
    v = n(31587),
    C = n(190107),
    R = n(788868),
    O = n(375708);
function b(e, t, n) {
    return n ? O.intl.formatToPlainString(e, t) : O.intl.format(e, t);
}
function D(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? O.t["/4XT0b"] : O.t["0hwcvM"]) : n ? O.t.tQoqXX : O.t["eb/Sna"];
}
function L(e) {
    return e ? O.t.klYWbT : O.t.ziB0HF;
}
function w(e) {
    return e ? O.t["4JS2QJ"] : O.t.AwuMRS;
}
function M(e) {
    return e ? O.t.GFdaUK : O.t.NIimTt;
}
function P(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        r = (0, v.I3)(t),
        l = (0, y._3)(t)?.[0],
        c = (0, o.A)({ applicationId: l, location: C.rE.QUEST_INSTRUCTIONS, source: n ?? a.Ob.QuestHome });
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                thirdPartyTaskDetails: i,
                sourceQuestContent: r,
                withoutMarkdown: s,
                currentUser: a,
                popoutTargetElementRef: o,
                onGameSheetOpened: l,
                onGameSheetClosed: u,
                onGameTitleClick: c,
            } = e,
            _ = (0, d.ki)(a, R.PremiumTypes.TIER_2),
            g = (0, S.k5)(t.config),
            A = (0, y.g5)(t) && (0, y.xZ)(t),
            I = (0, N.ui)(t),
            T = (0, S.mH)(t.config, a);
        if (I)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        sourceQuestContent: i,
                        withoutMarkdown: r,
                        popoutTargetElementRef: s,
                        onGameSheetOpened: a,
                        onGameSheetClosed: o,
                        rewardNameWithArticle: l,
                    } = e,
                    { targetMinutes: u, applications: c } = n;
                if (r) return O.intl.formatToPlainString(O.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
                let d = (function (e) {
                    let {
                        quest: t,
                        sourceQuestContent: n,
                        applications: i,
                        popoutTargetElementRef: r,
                        onGameSheetOpened: s,
                        onGameSheetClosed: a,
                    } = e;
                    return (e) =>
                        (0, h.jsx)(
                            E.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: r,
                                onGameSheetOpened: s,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, h.jsx)(f.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, h.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            className: m.s3,
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
                    popoutTargetElementRef: s,
                    onGameSheetOpened: a,
                    onGameSheetClosed: o,
                });
                return (function (e) {
                    let { quest: t, gameSheetHook: n, rewardNameWithArticle: i, targetMinutes: r } = e,
                        s = {
                            [C.Li.PACKAGE_ACTION_ADVENTURE]: O.t.H485IA,
                            [C.Li.PACKAGE_RPG_MMO]: O.t["3XS8Ni"],
                            [C.Li.PACKAGE_RACING_SPORTS]: O.t["X+UCju"],
                            [C.Li.PACKAGE_SANDBOX_CREATIVE]: O.t["6o4n1Q"],
                            [C.Li.PACKAGE_FAMILY_FRIENDLY]: O.t.DUsNmf,
                            [C.Li.PACKAGE_HOLIDAY_SEASON]: O.t["cWP8/Z"],
                            [C.Li.PACKAGE_NEW_YEARS]: O.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        o = (null != a ? s[a] : null) ?? O.t.CDeHul;
                    return O.intl.format(o, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: r,
                withoutMarkdown: s,
                popoutTargetElementRef: o,
                onGameSheetOpened: l,
                onGameSheetClosed: u,
                rewardNameWithArticle: T,
            });
        if (A)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                        rewardNameWithArticle: o,
                    } = e,
                    { targetMinutes: l } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, S.JX)(t.config),
                    d = (0, S.Y7)(t.config),
                    _ = t.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST),
                    h = null != a;
                return b(
                    r && c
                        ? d
                            ? _
                                ? null != s
                                    ? O.t.u5QXpw
                                    : O.t.ztXW8V
                                : D({ hasRewardDuration: null != s, shouldShowGameProfileLink: h })
                            : _
                              ? O.t["1AcTqm"]
                              : L(h)
                        : c || null != s
                          ? _
                              ? O.t.enQ3jU
                              : w(h)
                          : _
                            ? O.t["e+K3xJ"]
                            : M(h),
                    {
                        gameTitle: u,
                        streamingDurationRequirement: l,
                        rewardNameWithArticle: o,
                        duration: s,
                        targetMinutes: l,
                        onGameTitleClick: a,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: s,
                hasNitro: _,
                collectibleRewardDuration: g,
                onGameTitleClick: c,
                rewardNameWithArticle: T,
            });
        if ((0, y.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                        rewardNameWithArticle: o,
                    } = e,
                    { targetMinutes: l } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, S.JX)(t.config),
                    d = (0, S.Y7)(t.config),
                    _ = null != a;
                return b(
                    r && c
                        ? d
                            ? D({ hasRewardDuration: null != s, shouldShowGameProfileLink: _ })
                            : L(_)
                        : c || null != s
                          ? w(_)
                          : M(_),
                    {
                        gameTitle: u,
                        targetMinutes: l,
                        rewardNameWithArticle: o,
                        duration: s,
                        streamingDurationRequirement: l,
                        onGameTitleClick: a,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: s,
                hasNitro: _,
                collectibleRewardDuration: g,
                onGameTitleClick: c,
                rewardNameWithArticle: T,
            });
        if ((0, y.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: i,
                        withoutMarkdown: r,
                        hasNitro: s,
                        collectibleRewardDuration: a,
                        onGameTitleClick: o,
                        rewardNameWithArticle: l,
                    } = e,
                    { targetMinutes: u } = i,
                    c = n.config.messages.gameTitle,
                    d = (0, S.JX)(n.config),
                    _ = (0, S.Y7)(n.config),
                    h = n.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST),
                    f = null != o;
                return b(
                    (t =
                        s && d
                            ? _
                                ? h
                                    ? null != a
                                        ? O.t.u5QXpw
                                        : O.t.ztXW8V
                                    : D({ hasRewardDuration: null != a, shouldShowGameProfileLink: f })
                                : h
                                  ? O.t["1AcTqm"]
                                  : L(f)
                            : d || null != a
                              ? h
                                  ? O.t.enQ3jU
                                  : w(f)
                              : h
                                ? O.t["03VJqu"]
                                : f
                                  ? O.t.NrD2h8
                                  : O.t.FZL5Q5),
                    {
                        gameTitle: c,
                        streamingDurationRequirement: u,
                        rewardNameWithArticle: l,
                        duration: a,
                        questReward: l,
                        onGameTitleClick: o,
                    },
                    r,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: s,
                hasNitro: _,
                collectibleRewardDuration: g,
                onGameTitleClick: c,
                rewardNameWithArticle: T,
            });
        if ((0, S.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return b(
                    null != r ? O.t.HHVg4i : O.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: r },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: s, onGameTitleClick: c });
        else if ((0, y.vv)(t))
            return (function (e) {
                let {
                        quest: t,
                        collectibleRewardDuration: n,
                        hasNitro: i,
                        withoutMarkdown: r,
                        rewardNameWithArticle: s,
                    } = e,
                    a = (0, y.Xi)(t.config),
                    o = a?.messages.videoTitle ?? "video",
                    l = (0, S.JX)(t.config),
                    u = (0, S.Y7)(t.config);
                return b(
                    l && i
                        ? u
                            ? null != n
                                ? O.t.tXwfJT
                                : O.t["xqX+r5"]
                            : O.t["vs/xBu"]
                        : l || null != n
                          ? O.t["W/HkLO"]
                          : t.id === C.Fw
                            ? O.t.Rsd5bL
                            : O.t["g+InPC"],
                    { videoTitle: o, rewardNameWithArticle: s, duration: n },
                    r,
                );
            })({ quest: t, collectibleRewardDuration: g, hasNitro: _, withoutMarkdown: s, rewardNameWithArticle: T });
        else if ((0, y.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, rewardNameWithArticle: r } = e,
                    s = n.targetMinutes;
                return (0, N._e)(t)
                    ? b(O.t.VYwSSu, { streamingDurationRequirement: s, questReward: r }, i)
                    : b(
                          O.t.UuzHh8,
                          {
                              activityName: t.config.messages.gameTitle,
                              streamingDurationRequirement: s,
                              questReward: r,
                          },
                          i,
                      );
            })({ quest: t, taskDetails: n, withoutMarkdown: s, rewardNameWithArticle: T });
        else if ((0, y.I6)(t) && null != i)
            return (function (e) {
                let {
                        quest: t,
                        thirdPartyTaskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: s,
                        rewardNameWithArticle: a,
                    } = e,
                    o = (0, S.JX)(t.config),
                    l = (0, S.Y7)(t.config);
                return b(
                    r && o
                        ? l
                            ? null != s
                                ? O.t.NdXW5c
                                : O.t["8066TK"]
                            : null != s
                              ? O.t["6FOKAX"]
                              : O.t.thO6iA
                        : o || null != s
                          ? O.t["IACEB/"]
                          : O.t.thO6iA,
                    { objective: n.description, duration: s, questReward: a },
                    i,
                );
            })({
                quest: t,
                thirdPartyTaskDetails: i,
                withoutMarkdown: s,
                hasNitro: _,
                collectibleRewardDuration: g,
                rewardNameWithArticle: T,
            });
        return null != i
            ? i.description
            : (function (e) {
                  let {
                          quest: t,
                          taskDetails: n,
                          withoutMarkdown: i,
                          hasNitro: r,
                          collectibleRewardDuration: s,
                          onGameTitleClick: a,
                          rewardNameWithArticle: o,
                      } = e,
                      { targetMinutes: l } = n,
                      u = t.config.messages.gameTitle,
                      c = (0, S.JX)(t.config),
                      d = (0, S.Y7)(t.config),
                      _ = null != a;
                  return b(
                      r && c
                          ? d
                              ? null != s
                                  ? _
                                      ? O.t["3RwRv8"]
                                      : O.t.TmKqHw
                                  : _
                                    ? O.t.l9yxDa
                                    : O.t["X8Yt/1"]
                              : _
                                ? O.t.eEuma3
                                : O.t.smG9ql
                          : c || null != s
                            ? _
                                ? O.t.Cko4a4
                                : O.t.BLyDvO
                            : _
                              ? O.t.ER9rII
                              : O.t["hkJ+Gs"],
                      {
                          gameTitle: u,
                          streamingDurationRequirement: l,
                          duration: s,
                          questReward: o,
                          onGameTitleClick: a,
                      },
                      i,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: s,
                  hasNitro: _,
                  collectibleRewardDuration: g,
                  onGameTitleClick: c,
                  rewardNameWithArticle: T,
              });
    })({ ...e, currentUser: i, withoutMarkdown: !1, thirdPartyTaskDetails: r ?? void 0, onGameTitleClick: c });
}
function x(e, t, n, i, r) {
    let s = (0, v.fc)(e),
        a = P({
            quest: e,
            taskDetails: s,
            location: n,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: i,
        }),
        o = e.userStatus?.claimedAt != null,
        l = (0, v.S5)(e.userStatus?.claimedAt);
    return o ? O.intl.formatToPlainString(O.t.lOVr0O, { claimDate: l }) : a;
}
function k(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: r,
            popoutTargetElementRef: o,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
            hasAlreadyLinked: d,
            onClickGameTitle: h,
        } = e,
        f = t.config.rewardsConfig.rewardsExpireAt,
        p = (0, v.S5)(f),
        E = (0, v.fc)(t),
        m = (0, v.I3)(t),
        g = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        A = t.userStatus?.completedAt != null,
        T = t.userStatus?.enrolledAt != null,
        R = E.percentComplete > 0,
        b = (0, v.Vn)(t),
        D = P({
            quest: t,
            location: C.rE.QUESTS_BAR,
            taskDetails: E,
            sourceQuestContent: i,
            popoutTargetElementRef: o,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
            gameProfileSource: a.Ob.QuestBar,
        }),
        L = null != m ? m.percentComplete : E.percentComplete;
    if (A) return O.intl.formatToPlainString(O.t.APddvF, { expirationDate: p });
    if ((0, y.I6)(t) && !1 === d) return O.intl.string(O.t.mAdqf7);
    if (n) {
        if ((0, y.I6)(t) && !0 === d && null != h)
            return O.intl.format(O.t.X8hBDz, { gameTitle: t.config.messages.gameTitle, onClickGameTitle: h });
        if (r !== _.X0.SELECT && (0, N.ui)(t) && T && !R) {
            let e = (0, S.mH)(t.config, g);
            return O.intl.format(O.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: E.targetMinutes });
        }
        return D;
    }
    return (0, y.vv)(t)
        ? O.intl.string(O.t["o+e9yh"])
        : L > 0
          ? (0, y.I6)(t) && !0 === d
              ? O.intl.string(O.t.JkyCIO)
              : b
                ? (0, I.YT)({ quest: t, taskDetails: E, thirdPartyTaskDetails: m ?? void 0 })
                : O.intl.string(O.t.mOrpXG)
          : O.intl.string(O.t.S6UUc5);
}
function U(e, t) {
    let n = (0, s.bG)([l.default], () => l.default.locale),
        i = (0, v.fc)(e),
        [r] = (0, v.Qo)(e, i),
        a = (0, v.I3)(e),
        o = e.userStatus?.completedAt != null,
        u = null != a ? a.percentComplete : i.percentComplete;
    if (o) return O.intl.string(O.t["ij5E/5"]);
    if ((0, y.I6)(e) && !1 === t) return O.intl.string(O.t.s9r2a1);
    if (e.userStatus?.enrolledAt != null && u > 0) {
        let e = (0, c.l9)(n, u, { roundingMode: "floor" });
        return O.intl.formatToPlainString(O.t.lVZaXD, { percent: e });
    }
    return r === _.X0.SELECT
        ? O.intl.string(O.t.EMrUHQ)
        : (0, y.g5)(e)
          ? O.intl.string(O.t.mOrpXG)
          : O.intl.string(O.t["7e5k7L"]);
}
function G(e) {
    let { quest: t, application: n, shortText: r = !1 } = e,
        s = i.useMemo(
            () =>
                (function (e) {
                    return (0, y.g5)(e) || (0, y.vl)(e)
                        ? 0
                        : (0, y.fE)({ quest: e })
                          ? 1
                          : (0, y.IO)(e)
                            ? 2
                            : 3 * !!(0, y.Cr)(e);
                })(t),
            [t],
        ),
        a = (0, v.fc)(t);
    switch (s) {
        case 0:
            if (t.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY)) return O.intl.string(O.t["+qoymD"]);
            if ((0, N.vA)(t)) return O.intl.string(r ? O.t.E4kW5O : O.t["Ie9++s"]);
            return O.intl.string(O.t.l7E81v);
        case 1:
            return O.intl.string(O.t.l7E81v);
        case 2:
            return (0, A.WM)(a);
        case 3:
            return (0, N.vA)(t) && 1 ? O.intl.string(r ? O.t.CkUzLd : O.t["hRIVy+"]) : O.intl.string(O.t.l7E81v);
    }
}
function F(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, S.kr)({ quest: t }),
        r = n?.platform ?? _.pY.CROSS_PLATFORM,
        s = i ? (0, S.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, I.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? o[r] : void 0;
}
function V(e) {
    let { quest: t, questContent: n, preCtaClick: s, impressionId: a, sourceQuestContent: o } = e,
        l = async () => {
            await s?.(),
                (0, T.pu)(t, { content: n, ctaContent: g.Cy.OPEN_GAME_LINK, impressionId: a, sourceQuestContent: o });
        },
        u = i.useMemo(() => {
            let e = t.config.ctaConfig?.subtitle;
            return null != e
                ? e
                : (0, y.I6)(t)
                  ? t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle
                  : (0, N.pv)(t.config) !== r.Z.GAMEPLAY ||
                      t.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST) ||
                      (0, N.ui)(t)
                    ? O.intl.string(O.t.y8Xf3k)
                    : O.intl.string(O.t["wirwN+"]);
        }, [t]);
    return {
        ctaText: (0, I.wr)(t),
        ctaVariant: "secondary",
        onClickCta: l,
        title: t.config.messages.gameTitle,
        subtitle: u,
        ctaIconPosition: "end",
    };
}
