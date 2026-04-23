"use strict";
n.d(t, { NA: () => k, VX: () => M, XR: () => O, gj: () => w, mU: () => R, tH: () => L, wT: () => T });
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
    m = n(537928);
n(287875);
var p = n(651892),
    f = n(92246),
    g = n(792620),
    _ = n(814793),
    x = n(890687),
    A = n(654487),
    C = n(652215),
    E = n(788868),
    v = n(985018);
let I = "NVIDIA GeForce NOW";
function y(e, t, n) {
    return n ? v.intl.formatToPlainString(e, t) : v.intl.format(e, t);
}
function S(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? v.t["/4XT0b"] : v.t["0hwcvM"]) : n ? v.t.tQoqXX : v.t["eb/Sna"];
}
function b(e) {
    return e ? v.t.klYWbT : v.t.ziB0HF;
}
function N(e) {
    return e ? v.t["4JS2QJ"] : v.t.AwuMRS;
}
function j(e) {
    return e ? v.t.GFdaUK : v.t.NIimTt;
}
function T(e, t, n, i) {
    let { targetMinutes: l } = (0, x.fc)(e),
        s = (0, x.I3)(e),
        r = (0, x.BL)({ quest: e, questContent: n, sourceQuestContent: i }),
        a = (0, _.ui)(e);
    if ((0, g.g5)(e) && !(0, g.t)({ quest: e }))
        return v.intl.format(v.t["l4S+cQ"], { minutes: l, onClick: r, gameTitle: e.config.messages.gameTitle });
    if ((0, g.g5)(e))
        return a
            ? v.intl.format(v.t.gbtCpW, { onClick: r, minutes: l })
            : v.intl.format(v.t.Ajlcd7, { minutes: l, onClick: r, gameTitle: e.config.messages.gameTitle });
    if (a) return v.intl.format(v.t.Hu8SKW, { targetMinutes: l });
    if ((0, g.vv)(e)) {
        let t = (0, g.Xi)(e.config),
            n = t?.messages.videoTitle;
        return null == n ? v.intl.string(v.t["o+e9yh"]) : v.intl.formatToPlainString(v.t["9m9Mna"], { videoTitle: n });
    }
    if (null != s) return s.title;
    if ((0, g.vl)(e))
        if ((0, _._e)(e)) return v.intl.format(v.t["1NaRSs"], { minutes: l });
        else return v.intl.format(v.t.xHXCyf, { minutes: l, activityName: e.config.messages.gameTitle });
    let o = v.t["6zWtV8"];
    return (
        (0, g.t)({ quest: e }) &&
            (o = e.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST) ? v.t.fe7Xec : v.t["wmOh/q"]),
        v.intl.format(o, { minutes: l, gameTitle: e.config.messages.gameTitle })
    );
}
function R(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        a = (0, x.I3)(t),
        u = (0, g._3)(t)?.[0],
        p = (0, r.A)({ applicationId: u, location: A.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
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
                onGameSheetClosed: p,
                onGameTitleClick: x,
            } = e,
            T = (0, d.ki)(a, E.PremiumTypes.TIER_2),
            R = (0, f.k5)(t.config),
            w = (0, g.g5)(t) && (0, g.xZ)(t);
        if ((0, _.ui)(t))
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
                    o = (0, f.mH)(t.config),
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
                            [A.Li.PACKAGE_ACTION_ADVENTURE]: v.t.H485IA,
                            [A.Li.PACKAGE_RPG_MMO]: v.t["3XS8Ni"],
                            [A.Li.PACKAGE_RACING_SPORTS]: v.t["X+UCju"],
                            [A.Li.PACKAGE_SANDBOX_CREATIVE]: v.t["6o4n1Q"],
                            [A.Li.PACKAGE_FAMILY_FRIENDLY]: v.t.DUsNmf,
                            [A.Li.PACKAGE_HOLIDAY_SEASON]: v.t["cWP8/Z"],
                            [A.Li.PACKAGE_NEW_YEARS]: v.t["8+sIJz"],
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
                onGameSheetClosed: p,
            });
        if (w)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: l,
                        collectibleRewardDuration: s,
                        onGameTitleClick: r,
                    } = e,
                    a = (0, f.mH)(t.config),
                    { targetMinutes: o } = n,
                    c = t.config.messages.gameTitle,
                    u = (0, f.JX)(t.config),
                    d = (0, f.Y7)(t.config),
                    h = t.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    m = null != r;
                return y(
                    l && u
                        ? d
                            ? h
                                ? null != s
                                    ? v.t.u5QXpw
                                    : v.t.ztXW8V
                                : S({ hasRewardDuration: null != s, shouldShowGameProfileLink: m })
                            : h
                              ? v.t["1AcTqm"]
                              : b(m)
                        : u || null != s
                          ? h
                              ? v.t.enQ3jU
                              : N(m)
                          : h
                            ? v.t["e+K3xJ"]
                            : j(m),
                    {
                        gameTitle: c,
                        streamingDurationRequirement: o,
                        rewardNameWithArticle: a,
                        duration: s,
                        targetMinutes: o,
                        onGameTitleClick: r,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: T,
                collectibleRewardDuration: R,
                onGameTitleClick: x,
            });
        if ((0, g.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: l,
                        collectibleRewardDuration: s,
                        onGameTitleClick: r,
                    } = e,
                    a = (0, f.mH)(t.config),
                    { targetMinutes: o } = n,
                    c = t.config.messages.gameTitle,
                    u = (0, f.JX)(t.config),
                    d = (0, f.Y7)(t.config),
                    h = null != r;
                return y(
                    l && u
                        ? d
                            ? S({ hasRewardDuration: null != s, shouldShowGameProfileLink: h })
                            : b(h)
                        : u || null != s
                          ? N(h)
                          : j(h),
                    {
                        gameTitle: c,
                        targetMinutes: o,
                        rewardNameWithArticle: a,
                        duration: s,
                        streamingDurationRequirement: o,
                        onGameTitleClick: r,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: T,
                collectibleRewardDuration: R,
                onGameTitleClick: x,
            });
        if ((0, g.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: i,
                        withoutMarkdown: l,
                        hasNitro: s,
                        collectibleRewardDuration: r,
                        onGameTitleClick: a,
                    } = e,
                    o = (0, f.mH)(n.config),
                    { targetMinutes: c } = i,
                    u = n.config.messages.gameTitle,
                    d = (0, f.JX)(n.config),
                    h = (0, f.Y7)(n.config),
                    m = n.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    p = null != a;
                return y(
                    (t =
                        s && d
                            ? h
                                ? m
                                    ? null != r
                                        ? v.t.u5QXpw
                                        : v.t.ztXW8V
                                    : S({ hasRewardDuration: null != r, shouldShowGameProfileLink: p })
                                : m
                                  ? v.t["1AcTqm"]
                                  : b(p)
                            : d || null != r
                              ? m
                                  ? v.t.enQ3jU
                                  : N(p)
                              : m
                                ? v.t["03VJqu"]
                                : p
                                  ? v.t.NrD2h8
                                  : v.t.FZL5Q5),
                    {
                        gameTitle: u,
                        streamingDurationRequirement: c,
                        rewardNameWithArticle: o,
                        duration: r,
                        questReward: o,
                        onGameTitleClick: a,
                    },
                    l,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: r,
                hasNitro: T,
                collectibleRewardDuration: R,
                onGameTitleClick: x,
            });
        if ((0, f.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: l } = e,
                    { targetMinutes: s } = n,
                    r = t.config.messages.gameTitle;
                return y(
                    null != l ? v.t.HHVg4i : v.t["a/ia7F"],
                    { gameTitle: r, streamingDurationRequirement: s, onGameTitleClick: l },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: r, onGameTitleClick: x });
        else if ((0, g.vv)(t)) {
            let e, n, i, l, s;
            return (
                (e = (0, g.Xi)(t.config)),
                (n = e?.messages.videoTitle ?? "video"),
                (i = (0, f.mH)(t.config)),
                (l = (0, f.JX)(t.config)),
                (s = (0, f.Y7)(t.config)),
                y(
                    l && T
                        ? s
                            ? null != R
                                ? v.t.tXwfJT
                                : v.t["xqX+r5"]
                            : v.t["vs/xBu"]
                        : l || null != R
                          ? v.t["W/HkLO"]
                          : t.id === A.Fw
                            ? v.t.Rsd5bL
                            : v.t["g+InPC"],
                    { videoTitle: n, rewardNameWithArticle: i, duration: R },
                    r,
                )
            );
        } else if ((0, g.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, questContent: l } = e,
                    s = n.targetMinutes,
                    r = (0, f.mH)(t.config);
                return (0, _._e)(t)
                    ? y(v.t.VYwSSu, { streamingDurationRequirement: s, questReward: r }, i)
                    : t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)
                      ? l === h.uF.QUESTS_EMBED
                          ? y(
                                v.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: I,
                                    providerLink: c.A.getArticleURL(C.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: r,
                                },
                                i,
                            )
                          : y(
                                v.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: I,
                                    providerLink: c.A.getArticleURL(C.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: s,
                                    questReward: r,
                                },
                                i,
                            )
                      : y(
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
                      } = e,
                      a = (0, f.mH)(t.config),
                      { targetMinutes: o } = n,
                      c = t.config.messages.gameTitle,
                      u = (0, f.JX)(t.config),
                      d = (0, f.Y7)(t.config),
                      h = null != r;
                  return y(
                      l && u
                          ? d
                              ? null != s
                                  ? h
                                      ? v.t["3RwRv8"]
                                      : v.t.TmKqHw
                                  : h
                                    ? v.t.l9yxDa
                                    : v.t["X8Yt/1"]
                              : h
                                ? v.t.eEuma3
                                : v.t.smG9ql
                          : u || null != s
                            ? h
                                ? v.t.Cko4a4
                                : v.t.BLyDvO
                            : h
                              ? v.t.ER9rII
                              : v.t["hkJ+Gs"],
                      {
                          gameTitle: c,
                          streamingDurationRequirement: o,
                          duration: s,
                          questReward: a,
                          onGameTitleClick: r,
                      },
                      i,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: r,
                  hasNitro: T,
                  collectibleRewardDuration: R,
                  onGameTitleClick: x,
              });
    })({ ...e, currentUser: i, withoutMarkdown: !1, thirdPartyTaskDetails: a ?? void 0, onGameTitleClick: p });
}
function w(e, t, n, i) {
    let l = (0, x.fc)(e),
        s = (0, g.JC)(e),
        r = R({
            quest: e,
            taskDetails: l,
            location: A.rE.QUEST_HOME_DESKTOP,
            questContent: h.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: i,
            gameProfileSource: n,
        }),
        a = e.userStatus?.claimedAt != null,
        o = (0, x.S5)(e.userStatus?.claimedAt);
    return a
        ? v.intl.formatToPlainString(v.t.lOVr0O, { claimDate: o })
        : null != s
          ? s.description
          : null != r
            ? r
            : null;
}
function L(e) {
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
        u = (0, x.S5)(c),
        d = (0, x.fc)(t),
        m = (0, x.I3)(t),
        C = t.userStatus?.completedAt != null,
        E = t.userStatus?.enrolledAt != null,
        I = d.percentComplete > 0,
        y = (0, x.Vn)(t),
        S = R({
            quest: t,
            location: A.rE.QUESTS_BAR,
            questContent: h.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: i,
            popoutTargetElementRef: r,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
            gameProfileSource: s.Ob.QuestBar,
        }),
        b = null != m ? m.percentComplete : d.percentComplete;
    if (C) return v.intl.formatToPlainString(v.t.APddvF, { expirationDate: u });
    if (n) {
        if (l !== h.X0.SELECT && (0, _.ui)(t) && E && !I) {
            let e = (0, f.mH)(t.config);
            return v.intl.format(v.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
        return S;
    }
    if ((0, g.vv)(t)) return v.intl.string(v.t["o+e9yh"]);
    if (b > 0)
        if (!y) return v.intl.string(v.t.mOrpXG);
        else return (0, p.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: m ?? void 0 });
    return v.intl.string(v.t.S6UUc5);
}
function M(e) {
    let t = (0, l.bG)([a.default], () => a.default.locale),
        n = (0, x.fc)(e),
        [i] = (0, x.Qo)(e, n),
        s = (0, x.I3)(e),
        r = e.userStatus?.completedAt != null,
        o = null != s ? s.percentComplete : n.percentComplete;
    if (r) return v.intl.string(v.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && o > 0) {
        let e = (0, u.l9)(t, o, { roundingMode: "floor" });
        return v.intl.formatToPlainString(v.t.lVZaXD, { percent: e });
    }
    return i === h.X0.SELECT
        ? v.intl.string(v.t.EMrUHQ)
        : (0, g.g5)(e)
          ? v.intl.string(v.t.mOrpXG)
          : v.intl.string(v.t["7e5k7L"]);
}
function k(e) {
    let { quest: t, application: n, shortText: l = !1, mobileExternalLinkVariant: s } = e,
        r = i.useMemo(
            () =>
                (function (e) {
                    return (0, g.g5)(e) || (0, g.vl)(e)
                        ? 0
                        : (0, g.fE)({ quest: e })
                          ? 1
                          : (0, g.IO)(e)
                            ? 2
                            : 3 * !!(0, g.Cr)(e);
                })(t),
            [t],
        ),
        a = (0, x.fc)(t);
    switch (r) {
        case 0:
            if (t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)) return v.intl.string(v.t["+qoymD"]);
            if ((0, _.vA)(t)) return v.intl.string(l ? v.t.E4kW5O : v.t["Ie9++s"]);
            return v.intl.string(v.t.l7E81v);
        case 1:
            return v.intl.string(v.t.l7E81v);
        case 2:
            return v.intl.formatToPlainString(v.t.GNsKiW, { remainTime: (0, g.xm)(a) });
        case 3:
            return (0, _.vA)(t) && 1 ? v.intl.string(l ? v.t.CkUzLd : v.t["hRIVy+"]) : v.intl.string(v.t.l7E81v);
    }
}
function O(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, f.kr)({ quest: t }),
        l = n?.platform ?? h.pY.CROSS_PLATFORM,
        s = i ? (0, f.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        r = (0, p.xv)(t.config),
        a = s?.messages?.redemptionInstructionsByPlatform ?? r.messages.redemptionInstructionsByPlatform;
    return null != l ? a[l] : void 0;
}
