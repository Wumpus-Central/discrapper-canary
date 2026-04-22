"use strict";
n.d(t, { NA: () => D, VX: () => P, XR: () => U, gj: () => k, mU: () => M, tH: () => O, wT: () => L });
var i = n(64700),
    l = n(311907);
n(166352);
var s = n(409626),
    r = n(692969),
    a = n(773669),
    o = n(287809),
    c = n(975571),
    u = n(252424),
    d = n(474090),
    h = n(341915),
    m = n(537928),
    p = n(263362),
    f = n(651892),
    g = n(92246),
    _ = n(792620),
    x = n(814793),
    A = n(890687),
    C = n(654487),
    E = n(652215),
    I = n(788868),
    v = n(985018);
let y = "NVIDIA GeForce NOW";
function S(e, t, n) {
    return n ? v.intl.formatToPlainString(e, t) : v.intl.format(e, t);
}
function b(e, t, n) {
    return e === p.JC.WITH_REWARD_DURATION_NO_GAME_TITLE
        ? t
            ? n.clickableGeneric
            : n.generic
        : t
          ? n.clickable
          : n.base;
}
function N(e, t) {
    return (0, p.Kf)(e) && null != t ? v.t.u5QXpw : v.t.ztXW8V;
}
function T(e, t, n) {
    if (null === t) return n ? v.t.tQoqXX : v.t["eb/Sna"];
    switch (e) {
        case p.JC.WITH_REWARD_DURATION_NO_GAME_TITLE:
            return n ? v.t.t6Z9I2 : v.t.bPGn8F;
        case p.JC.WITH_REWARD_DURATION:
            return n ? v.t["/4XT0b"] : v.t["0hwcvM"];
        default:
            return n ? v.t.tQoqXX : v.t["eb/Sna"];
    }
}
function j(e, t) {
    return b(e, t, { base: v.t.ziB0HF, clickable: v.t.klYWbT, generic: v.t["8MeiQN"], clickableGeneric: v.t.iCwsvr });
}
function R(e, t) {
    return b(e, t, {
        base: v.t.AwuMRS,
        clickable: v.t["4JS2QJ"],
        generic: v.t.QUgT7p,
        clickableGeneric: v.t["1JyLzi"],
    });
}
function w(e, t) {
    return b(e, t, { base: v.t.NIimTt, clickable: v.t.GFdaUK, generic: v.t.N3tNbI, clickableGeneric: v.t.k2srpz });
}
function L(e, t, n, i) {
    let { targetMinutes: l } = (0, A.fc)(e),
        s = (0, A.I3)(e),
        r = (0, A.BL)({ quest: e, questContent: n, sourceQuestContent: i }),
        a = (0, x.ui)(e);
    if ((0, _.g5)(e) && !(0, _.t)({ quest: e }))
        return v.intl.format(v.t["l4S+cQ"], { minutes: l, onClick: r, gameTitle: e.config.messages.gameTitle });
    if ((0, _.g5)(e))
        return a
            ? v.intl.format(v.t.gbtCpW, { onClick: r, minutes: l })
            : v.intl.format(v.t.Ajlcd7, { minutes: l, onClick: r, gameTitle: e.config.messages.gameTitle });
    if (a) return v.intl.format(v.t.Hu8SKW, { targetMinutes: l });
    if ((0, _.vv)(e)) {
        let t = (0, _.Xi)(e.config),
            n = t?.messages.videoTitle;
        return null == n ? v.intl.string(v.t["o+e9yh"]) : v.intl.formatToPlainString(v.t["9m9Mna"], { videoTitle: n });
    }
    if (null != s) return s.title;
    if ((0, _.vl)(e))
        if ((0, x._e)(e)) return v.intl.format(v.t["1NaRSs"], { minutes: l });
        else return v.intl.format(v.t.xHXCyf, { minutes: l, activityName: e.config.messages.gameTitle });
    let o = v.t["6zWtV8"];
    return (
        (0, _.t)({ quest: e }) &&
            (o = e.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST) ? v.t.fe7Xec : v.t["wmOh/q"]),
        v.intl.format(o, { minutes: l, gameTitle: e.config.messages.gameTitle })
    );
}
function M(e) {
    var t;
    let { quest: n, questContent: i, sourceQuestContent: a, gameProfileSource: u, location: f } = e,
        L = (0, A.BL)({ quest: n, questContent: i, sourceQuestContent: a }),
        M = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        k = (0, A.I3)(n),
        O = (0, _._3)(n)?.[0],
        P = (0, r.A)({ applicationId: O, location: C.rE.QUEST_INSTRUCTIONS, source: u ?? s.Ob.QuestHome }),
        { variant: D } = p.au.useConfig({ location: f });
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                questContent: i,
                thirdPartyTaskDetails: l,
                sourceQuestContent: s,
                withoutMarkdown: r,
                currentUser: a,
                popoutTargetElementRef: o,
                onGameSheetOpened: u,
                onGameSheetClosed: f,
                onGameTitleClick: A,
                descriptionExperimentVariant: L,
            } = e,
            M = (0, d.ki)(a, I.PremiumTypes.TIER_2),
            k = (0, g.k5)(t.config),
            O = (0, _.g5)(t) && (0, _.xZ)(t);
        if ((0, x.ui)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        sourceQuestContent: i,
                        withoutMarkdown: l,
                        popoutTargetElementRef: s,
                        onGameSheetOpened: r,
                        onGameSheetClosed: a,
                    } = e,
                    o = (0, g.mH)(t.config),
                    { targetMinutes: c, applications: u } = n;
                if (l) return v.intl.formatToPlainString(v.t["1votF6"], { rewardNameWithArticle: o, targetMinutes: c });
                let d = (0, m.z)({
                    quest: t,
                    sourceQuestContent: i,
                    applications: u ?? [],
                    popoutTargetElementRef: s,
                    onGameSheetOpened: r,
                    onGameSheetClosed: a,
                });
                return (function (e) {
                    let { quest: t, gameSheetHook: n, rewardNameWithArticle: i, targetMinutes: l } = e,
                        s = {
                            [C.Li.PACKAGE_ACTION_ADVENTURE]: v.t.H485IA,
                            [C.Li.PACKAGE_RPG_MMO]: v.t["3XS8Ni"],
                            [C.Li.PACKAGE_RACING_SPORTS]: v.t["X+UCju"],
                            [C.Li.PACKAGE_SANDBOX_CREATIVE]: v.t["6o4n1Q"],
                            [C.Li.PACKAGE_FAMILY_FRIENDLY]: v.t.DUsNmf,
                            [C.Li.PACKAGE_HOLIDAY_SEASON]: v.t["cWP8/Z"],
                            [C.Li.PACKAGE_NEW_YEARS]: v.t["8+sIJz"],
                        },
                        r = t.config.features.find((e) => e in s),
                        a = (null != r ? s[r] : null) ?? v.t.CDeHul;
                    return v.intl.format(a, { rewardNameWithArticle: i, targetMinutes: l, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: o, targetMinutes: c, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: s,
                withoutMarkdown: r,
                popoutTargetElementRef: o,
                onGameSheetOpened: u,
                onGameSheetClosed: f,
            });
        if (O)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: l,
                        collectibleRewardDuration: s,
                        onGameTitleClick: r,
                        descriptionExperimentVariant: a,
                    } = e,
                    o = (0, g.mH)(t.config),
                    { targetMinutes: c } = n,
                    u = t.config.messages.gameTitle,
                    d = (0, g.JX)(t.config),
                    h = (0, g.Y7)(t.config),
                    m = t.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST),
                    p = null != r;
                return S(
                    l && d
                        ? h
                            ? m
                                ? N(a, s)
                                : T(a, s, p)
                            : m
                              ? v.t["1AcTqm"]
                              : j(a, p)
                        : d || null != s
                          ? m
                              ? v.t.enQ3jU
                              : R(a, p)
                          : m
                            ? v.t["e+K3xJ"]
                            : w(a, p),
                    {
                        gameTitle: u,
                        streamingDurationRequirement: c,
                        rewardNameWithArticle: o,
                        duration: s,
                        targetMinutes: c,
                        onGameTitleClick: r,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: M,
                collectibleRewardDuration: k,
                onGameTitleClick: A,
                descriptionExperimentVariant: L,
            });
        if ((0, _.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: l,
                        collectibleRewardDuration: s,
                        onGameTitleClick: r,
                        descriptionExperimentVariant: a,
                    } = e,
                    o = (0, g.mH)(t.config),
                    { targetMinutes: c } = n,
                    u = t.config.messages.gameTitle,
                    d = (0, g.JX)(t.config),
                    h = (0, g.Y7)(t.config),
                    m = null != r;
                return S(
                    l && d ? (h ? T(a, s, m) : j(a, m)) : d || null != s ? R(a, m) : w(a, m),
                    {
                        gameTitle: u,
                        targetMinutes: c,
                        rewardNameWithArticle: o,
                        duration: s,
                        streamingDurationRequirement: c,
                        onGameTitleClick: r,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: M,
                collectibleRewardDuration: k,
                onGameTitleClick: A,
                descriptionExperimentVariant: L,
            });
        if ((0, _.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: i,
                        withoutMarkdown: l,
                        hasNitro: s,
                        collectibleRewardDuration: r,
                        onGameTitleClick: a,
                        descriptionExperimentVariant: o,
                    } = e,
                    c = (0, g.mH)(n.config),
                    { targetMinutes: u } = i,
                    d = n.config.messages.gameTitle,
                    h = (0, g.JX)(n.config),
                    m = (0, g.Y7)(n.config),
                    p = n.config.features.includes(C.Li.NON_GAMING_PLAY_QUEST),
                    f = null != a;
                return S(
                    (t =
                        s && h
                            ? m
                                ? p
                                    ? N(o, r)
                                    : T(o, r, f)
                                : p
                                  ? v.t["1AcTqm"]
                                  : j(o, f)
                            : h || null != r
                              ? p
                                  ? v.t.enQ3jU
                                  : R(o, f)
                              : p
                                ? v.t["03VJqu"]
                                : b(o, f, {
                                      base: v.t.FZL5Q5,
                                      clickable: v.t.NrD2h8,
                                      generic: v.t.z06Gxh,
                                      clickableGeneric: v.t.zLCg2e,
                                  })),
                    {
                        gameTitle: d,
                        streamingDurationRequirement: u,
                        rewardNameWithArticle: c,
                        duration: r,
                        questReward: c,
                        onGameTitleClick: a,
                    },
                    l,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: M,
                collectibleRewardDuration: k,
                onGameTitleClick: A,
                descriptionExperimentVariant: L,
            });
        if ((0, g.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: l } = e,
                    { targetMinutes: s } = n,
                    r = t.config.messages.gameTitle;
                return S(
                    null != l ? v.t.HHVg4i : v.t["a/ia7F"],
                    { gameTitle: r, streamingDurationRequirement: s, onGameTitleClick: l },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: r, onGameTitleClick: A });
        else if ((0, _.vv)(t)) {
            let e, n, i, l, s;
            return (
                (e = (0, _.Xi)(t.config)),
                (n = e?.messages.videoTitle ?? "video"),
                (i = (0, g.mH)(t.config)),
                (l = (0, g.JX)(t.config)),
                (s = (0, g.Y7)(t.config)),
                S(
                    l && M
                        ? s
                            ? (0, p.Kf)(L) && null != k
                                ? v.t.tXwfJT
                                : v.t["xqX+r5"]
                            : v.t["vs/xBu"]
                        : l || null != k
                          ? v.t["W/HkLO"]
                          : t.id === C.Fw
                            ? v.t.Rsd5bL
                            : v.t["g+InPC"],
                    { videoTitle: n, rewardNameWithArticle: i, duration: k },
                    r,
                )
            );
        } else if ((0, _.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, questContent: l } = e,
                    s = n.targetMinutes,
                    r = (0, g.mH)(t.config);
                return (0, x._e)(t)
                    ? S(v.t.VYwSSu, { streamingDurationRequirement: s, questReward: r }, i)
                    : t.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY)
                      ? l === h.uF.QUESTS_EMBED
                          ? S(
                                v.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: y,
                                    providerLink: c.A.getArticleURL(E.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: r,
                                },
                                i,
                            )
                          : S(
                                v.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: y,
                                    providerLink: c.A.getArticleURL(E.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: s,
                                    questReward: r,
                                },
                                i,
                            )
                      : S(
                            v.t.UuzHh8,
                            {
                                activityName: t.config.messages.gameTitle,
                                streamingDurationRequirement: s,
                                questReward: r,
                            },
                            i,
                        );
            })({ quest: t, taskDetails: n, withoutMarkdown: r, questContent: i });
        return null != l
            ? l.description
            : (function (e) {
                  let {
                          quest: t,
                          taskDetails: n,
                          withoutMarkdown: i,
                          hasNitro: l,
                          collectibleRewardDuration: s,
                          onGameTitleClick: r,
                          descriptionExperimentVariant: a,
                      } = e,
                      o = (0, g.mH)(t.config),
                      { targetMinutes: c } = n,
                      u = t.config.messages.gameTitle,
                      d = (0, g.JX)(t.config),
                      h = (0, g.Y7)(t.config),
                      m = null != r;
                  return S(
                      l && d
                          ? h
                              ? (0, p.Kf)(a) && null != s
                                  ? m
                                      ? v.t["3RwRv8"]
                                      : v.t.TmKqHw
                                  : m
                                    ? v.t.l9yxDa
                                    : v.t["X8Yt/1"]
                              : m
                                ? v.t.eEuma3
                                : v.t.smG9ql
                          : d || null != s
                            ? m
                                ? v.t.Cko4a4
                                : v.t.BLyDvO
                            : m
                              ? v.t.ER9rII
                              : v.t["hkJ+Gs"],
                      {
                          gameTitle: u,
                          streamingDurationRequirement: c,
                          duration: s,
                          questReward: o,
                          onGameTitleClick: r,
                      },
                      i,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: r,
                  hasNitro: M,
                  collectibleRewardDuration: k,
                  onGameTitleClick: A,
                  descriptionExperimentVariant: L,
              });
    })({
        ...(t = {
            ...e,
            connectedConsoleLinkOnClick: L,
            currentUser: M,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: k ?? void 0,
            onGameTitleClick: P,
            descriptionExperimentVariant: D,
        }),
        currentUser: t.currentUser ?? o.default.getCurrentUser(),
        popoutTargetElementRef: t.popoutTargetElementRef,
        onGameSheetOpened: t.onGameSheetOpened,
        onGameSheetClosed: t.onGameSheetClosed,
        onGameTitleClick: t.onGameTitleClick,
        descriptionExperimentVariant: t.descriptionExperimentVariant,
    });
}
function k(e, t, n, i) {
    let l = (0, A.fc)(e),
        s = (0, _.JC)(e),
        r = M({
            quest: e,
            taskDetails: l,
            location: C.rE.QUEST_HOME_DESKTOP,
            questContent: h.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: i,
            gameProfileSource: n,
        }),
        a = e.userStatus?.claimedAt != null,
        o = (0, A.S5)(e.userStatus?.claimedAt);
    return a
        ? v.intl.formatToPlainString(v.t.lOVr0O, { claimDate: o })
        : null != s
          ? s.description
          : null != r
            ? r
            : null;
}
function O(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: l,
            popoutTargetElementRef: r,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
        } = e,
        c = t.config.rewardsConfig.rewardsExpireAt,
        u = (0, A.S5)(c),
        d = (0, A.fc)(t),
        m = (0, A.I3)(t),
        p = t.userStatus?.completedAt != null,
        E = t.userStatus?.enrolledAt != null,
        I = d.percentComplete > 0,
        y = (0, A.Vn)(t),
        S = M({
            quest: t,
            location: C.rE.QUESTS_BAR,
            questContent: h.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: i,
            popoutTargetElementRef: r,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
            gameProfileSource: s.Ob.QuestBar,
        }),
        b = null != m ? m.percentComplete : d.percentComplete;
    if (p) return v.intl.formatToPlainString(v.t.APddvF, { expirationDate: u });
    if (n) {
        if (l !== h.X0.SELECT && (0, x.ui)(t) && E && !I) {
            let e = (0, g.mH)(t.config);
            return v.intl.format(v.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
        return S;
    }
    if ((0, _.vv)(t)) return v.intl.string(v.t["o+e9yh"]);
    if (b > 0)
        if (!y) return v.intl.string(v.t.mOrpXG);
        else return (0, f.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: m ?? void 0 });
    return v.intl.string(v.t.S6UUc5);
}
function P(e) {
    let t = (0, l.bG)([a.default], () => a.default.locale),
        n = (0, A.fc)(e),
        [i] = (0, A.Qo)(e, n),
        s = (0, A.I3)(e),
        r = e.userStatus?.completedAt != null,
        o = null != s ? s.percentComplete : n.percentComplete;
    if (r) return v.intl.string(v.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && o > 0) {
        let e = (0, u.l9)(t, o, { roundingMode: "floor" });
        return v.intl.formatToPlainString(v.t.lVZaXD, { percent: e });
    }
    return i === h.X0.SELECT
        ? v.intl.string(v.t.EMrUHQ)
        : (0, _.g5)(e)
          ? v.intl.string(v.t.mOrpXG)
          : v.intl.string(v.t["7e5k7L"]);
}
function D(e) {
    let { quest: t, application: n, shortText: l = !1 } = e,
        s = i.useMemo(
            () =>
                (function (e) {
                    return (0, _.g5)(e) || (0, _.vl)(e)
                        ? 0
                        : (0, _.fE)({ quest: e })
                          ? 1
                          : (0, _.IO)(e)
                            ? 2
                            : 3 * !!(0, _.Cr)(e);
                })(t),
            [t],
        ),
        r = (0, A.fc)(t);
    switch (s) {
        case 0:
            if (t.config.features.includes(C.Li.CLOUD_GAMING_ACTIVITY)) return v.intl.string(v.t["+qoymD"]);
            if ((0, x.vA)(t)) return v.intl.string(l ? v.t.E4kW5O : v.t["Ie9++s"]);
            return v.intl.string(v.t.l7E81v);
        case 1:
            return v.intl.string(v.t.l7E81v);
        case 2:
            return v.intl.formatToPlainString(v.t.GNsKiW, { remainTime: (0, _.xm)(r) });
        case 3:
            return (0, x.vA)(t) && 1 ? v.intl.string(l ? v.t.CkUzLd : v.t["hRIVy+"]) : v.intl.string(v.t.l7E81v);
    }
}
function U(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, g.kr)({ quest: t }),
        l = n?.platform ?? h.pY.CROSS_PLATFORM,
        s = i ? (0, g.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        r = (0, f.xv)(t.config),
        a = s?.messages?.redemptionInstructionsByPlatform ?? r.messages.redemptionInstructionsByPlatform;
    return null != l ? a[l] : void 0;
}
