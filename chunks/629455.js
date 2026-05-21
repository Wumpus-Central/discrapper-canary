"use strict";
n.d(t, { A9: () => x, mU: () => P, tH: () => U, NA: () => G, XR: () => F, VX: () => k });
var i = n(64700),
    r = n(17928);
n(166352);
var s = n(409626),
    a = n(692969),
    o = n(773669),
    l = n(287809),
    u = n(975571),
    c = n(252424),
    d = n(474090),
    _ = n(507107),
    f = n(627968),
    h = n(939249),
    p = n(834730),
    E = n(862611),
    m = n(420298),
    g = n(287875),
    A = n(651892),
    I = n(801365),
    T = n(792620),
    S = n(814793),
    N = n(31587),
    y = n(190107),
    C = n(652215),
    v = n(788868),
    O = n(375708);
let R = "NVIDIA GeForce NOW";
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
        i = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        o = (0, N.I3)(t),
        c = (0, T._3)(t)?.[0],
        g = (0, a.A)({ applicationId: c, location: y.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                questContent: i,
                thirdPartyTaskDetails: r,
                sourceQuestContent: s,
                withoutMarkdown: a,
                currentUser: o,
                popoutTargetElementRef: l,
                onGameSheetOpened: c,
                onGameSheetClosed: g,
                onGameTitleClick: A,
            } = e,
            N = (0, d.ki)(o, v.PremiumTypes.TIER_2),
            P = (0, I.k5)(t.config),
            x = (0, T.g5)(t) && (0, T.xZ)(t),
            U = (0, S.ui)(t),
            k = (0, I.mH)(t.config, o);
        if (U)
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
                        (0, f.jsx)(
                            E.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: r,
                                onGameSheetOpened: s,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, f.jsx)(h.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, f.jsx)(p.E, {
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
                            [y.Li.PACKAGE_ACTION_ADVENTURE]: O.t.H485IA,
                            [y.Li.PACKAGE_RPG_MMO]: O.t["3XS8Ni"],
                            [y.Li.PACKAGE_RACING_SPORTS]: O.t["X+UCju"],
                            [y.Li.PACKAGE_SANDBOX_CREATIVE]: O.t["6o4n1Q"],
                            [y.Li.PACKAGE_FAMILY_FRIENDLY]: O.t.DUsNmf,
                            [y.Li.PACKAGE_HOLIDAY_SEASON]: O.t["cWP8/Z"],
                            [y.Li.PACKAGE_NEW_YEARS]: O.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        o = (null != a ? s[a] : null) ?? O.t.CDeHul;
                    return O.intl.format(o, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: s,
                withoutMarkdown: a,
                popoutTargetElementRef: l,
                onGameSheetOpened: c,
                onGameSheetClosed: g,
                rewardNameWithArticle: k,
            });
        if (x)
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
                    c = (0, I.JX)(t.config),
                    d = (0, I.Y7)(t.config),
                    _ = t.config.features.includes(y.Li.NON_GAMING_PLAY_QUEST),
                    f = null != a;
                return b(
                    r && c
                        ? d
                            ? _
                                ? null != s
                                    ? O.t.u5QXpw
                                    : O.t.ztXW8V
                                : D({ hasRewardDuration: null != s, shouldShowGameProfileLink: f })
                            : _
                              ? O.t["1AcTqm"]
                              : L(f)
                        : c || null != s
                          ? _
                              ? O.t.enQ3jU
                              : w(f)
                          : _
                            ? O.t["e+K3xJ"]
                            : M(f),
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
                withoutMarkdown: a,
                hasNitro: N,
                collectibleRewardDuration: P,
                onGameTitleClick: A,
                rewardNameWithArticle: k,
            });
        if ((0, T.g5)(t))
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
                    c = (0, I.JX)(t.config),
                    d = (0, I.Y7)(t.config),
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
                withoutMarkdown: a,
                hasNitro: N,
                collectibleRewardDuration: P,
                onGameTitleClick: A,
                rewardNameWithArticle: k,
            });
        if ((0, T.xZ)(t))
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
                    d = (0, I.JX)(n.config),
                    _ = (0, I.Y7)(n.config),
                    f = n.config.features.includes(y.Li.NON_GAMING_PLAY_QUEST),
                    h = null != o;
                return b(
                    (t =
                        s && d
                            ? _
                                ? f
                                    ? null != a
                                        ? O.t.u5QXpw
                                        : O.t.ztXW8V
                                    : D({ hasRewardDuration: null != a, shouldShowGameProfileLink: h })
                                : f
                                  ? O.t["1AcTqm"]
                                  : L(h)
                            : d || null != a
                              ? f
                                  ? O.t.enQ3jU
                                  : w(h)
                              : f
                                ? O.t["03VJqu"]
                                : h
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
                withoutMarkdown: a,
                hasNitro: N,
                collectibleRewardDuration: P,
                onGameTitleClick: A,
                rewardNameWithArticle: k,
            });
        if ((0, I.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return b(
                    null != r ? O.t.HHVg4i : O.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: r },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, onGameTitleClick: A });
        else if ((0, T.vv)(t))
            return (function (e) {
                let {
                        quest: t,
                        collectibleRewardDuration: n,
                        hasNitro: i,
                        withoutMarkdown: r,
                        rewardNameWithArticle: s,
                    } = e,
                    a = (0, T.Xi)(t.config),
                    o = a?.messages.videoTitle ?? "video",
                    l = (0, I.JX)(t.config),
                    u = (0, I.Y7)(t.config);
                return b(
                    l && i
                        ? u
                            ? null != n
                                ? O.t.tXwfJT
                                : O.t["xqX+r5"]
                            : O.t["vs/xBu"]
                        : l || null != n
                          ? O.t["W/HkLO"]
                          : t.id === y.Fw
                            ? O.t.Rsd5bL
                            : O.t["g+InPC"],
                    { videoTitle: o, rewardNameWithArticle: s, duration: n },
                    r,
                );
            })({ quest: t, collectibleRewardDuration: P, hasNitro: N, withoutMarkdown: a, rewardNameWithArticle: k });
        else if ((0, T.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, questContent: r, rewardNameWithArticle: s } = e,
                    a = n.targetMinutes;
                return (0, S._e)(t)
                    ? b(O.t.VYwSSu, { streamingDurationRequirement: a, questReward: s }, i)
                    : t.config.features.includes(y.Li.CLOUD_GAMING_ACTIVITY)
                      ? r === _.uF.QUESTS_EMBED
                          ? b(
                                O.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: R,
                                    providerLink: u.A.getArticleURL(C.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: s,
                                },
                                i,
                            )
                          : b(
                                O.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: R,
                                    providerLink: u.A.getArticleURL(C.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: a,
                                    questReward: s,
                                },
                                i,
                            )
                      : b(
                            O.t.UuzHh8,
                            {
                                activityName: t.config.messages.gameTitle,
                                streamingDurationRequirement: a,
                                questReward: s,
                            },
                            i,
                        );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, questContent: i, rewardNameWithArticle: k });
        else if ((0, T.I6)(t) && null != r)
            return (function (e) {
                let {
                        quest: t,
                        thirdPartyTaskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: s,
                        rewardNameWithArticle: a,
                    } = e,
                    o = (0, I.JX)(t.config),
                    l = (0, I.Y7)(t.config);
                return b(
                    r && o
                        ? l
                            ? null != s
                                ? O.t.NdXW5c
                                : O.t["8066TK"]
                            : O.t["6FOKAX"]
                        : o || null != s
                          ? O.t["IACEB/"]
                          : O.t.thO6iA,
                    { objective: n.description, duration: s, questReward: a },
                    i,
                );
            })({
                quest: t,
                thirdPartyTaskDetails: r,
                withoutMarkdown: a,
                hasNitro: N,
                collectibleRewardDuration: P,
                rewardNameWithArticle: k,
            });
        return null != r
            ? r.description
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
                      c = (0, I.JX)(t.config),
                      d = (0, I.Y7)(t.config),
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
                  withoutMarkdown: a,
                  hasNitro: N,
                  collectibleRewardDuration: P,
                  onGameTitleClick: A,
                  rewardNameWithArticle: k,
              });
    })({ ...e, currentUser: i, withoutMarkdown: !1, thirdPartyTaskDetails: o ?? void 0, onGameTitleClick: g });
}
function x(e, t, n, i, r, s) {
    let a = (0, N.fc)(e),
        o = P({
            quest: e,
            taskDetails: a,
            location: n,
            questContent: i,
            sourceQuestContent: t,
            popoutTargetElementRef: s,
            gameProfileSource: r,
        }),
        l = e.userStatus?.claimedAt != null,
        u = (0, N.S5)(e.userStatus?.claimedAt);
    return l ? O.intl.formatToPlainString(O.t.lOVr0O, { claimDate: u }) : o;
}
function U(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: a,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: d,
            onClickGameTitle: f,
        } = e,
        h = t.config.rewardsConfig.rewardsExpireAt,
        p = (0, N.S5)(h),
        E = (0, N.fc)(t),
        m = (0, N.I3)(t),
        g = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        C = t.userStatus?.completedAt != null,
        v = t.userStatus?.enrolledAt != null,
        R = E.percentComplete > 0,
        b = (0, N.Vn)(t),
        D = P({
            quest: t,
            location: y.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: E,
            sourceQuestContent: i,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: s.Ob.QuestBar,
        }),
        L = null != m ? m.percentComplete : E.percentComplete;
    if (C) return O.intl.formatToPlainString(O.t.APddvF, { expirationDate: p });
    if ((0, T.I6)(t) && !1 === d) return O.intl.string(O.t.mAdqf7);
    if (n) {
        if ((0, T.I6)(t) && !0 === d && null != f)
            return O.intl.format(O.t.X8hBDz, { gameTitle: t.config.messages.gameTitle, onClickGameTitle: f });
        if (a !== _.X0.SELECT && (0, S.ui)(t) && v && !R) {
            let e = (0, I.mH)(t.config, g);
            return O.intl.format(O.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: E.targetMinutes });
        }
        return D;
    }
    return (0, T.vv)(t)
        ? O.intl.string(O.t["o+e9yh"])
        : L > 0
          ? (0, T.I6)(t) && !0 === d
              ? O.intl.string(O.t.JkyCIO)
              : b
                ? (0, A.YT)({ quest: t, taskDetails: E, thirdPartyTaskDetails: m ?? void 0 })
                : O.intl.string(O.t.mOrpXG)
          : O.intl.string(O.t.S6UUc5);
}
function k(e, t) {
    let n = (0, r.bG)([o.default], () => o.default.locale),
        i = (0, N.fc)(e),
        [s] = (0, N.Qo)(e, i),
        a = (0, N.I3)(e),
        l = e.userStatus?.completedAt != null,
        u = null != a ? a.percentComplete : i.percentComplete;
    if (l) return O.intl.string(O.t["ij5E/5"]);
    if ((0, T.I6)(e) && !1 === t) return O.intl.string(O.t.s9r2a1);
    if (e.userStatus?.enrolledAt != null && u > 0) {
        let e = (0, c.l9)(n, u, { roundingMode: "floor" });
        return O.intl.formatToPlainString(O.t.lVZaXD, { percent: e });
    }
    return s === _.X0.SELECT
        ? O.intl.string(O.t.EMrUHQ)
        : (0, T.g5)(e)
          ? O.intl.string(O.t.mOrpXG)
          : O.intl.string(O.t["7e5k7L"]);
}
function G(e) {
    let { quest: t, application: n, shortText: r = !1 } = e,
        s = i.useMemo(
            () =>
                (function (e) {
                    return (0, T.g5)(e) || (0, T.vl)(e)
                        ? 0
                        : (0, T.fE)({ quest: e })
                          ? 1
                          : (0, T.IO)(e)
                            ? 2
                            : 3 * !!(0, T.Cr)(e);
                })(t),
            [t],
        ),
        a = (0, N.fc)(t);
    switch (s) {
        case 0:
            if (t.config.features.includes(y.Li.CLOUD_GAMING_ACTIVITY)) return O.intl.string(O.t["+qoymD"]);
            if ((0, S.vA)(t)) return O.intl.string(r ? O.t.E4kW5O : O.t["Ie9++s"]);
            return O.intl.string(O.t.l7E81v);
        case 1:
            return O.intl.string(O.t.l7E81v);
        case 2:
            return (0, g.WM)(a);
        case 3:
            return (0, S.vA)(t) && 1 ? O.intl.string(r ? O.t.CkUzLd : O.t["hRIVy+"]) : O.intl.string(O.t.l7E81v);
    }
}
function F(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, I.kr)({ quest: t }),
        r = n?.platform ?? _.pY.CROSS_PLATFORM,
        s = i ? (0, I.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, A.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? o[r] : void 0;
}
