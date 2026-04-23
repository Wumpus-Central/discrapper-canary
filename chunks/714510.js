"use strict";
n.d(t, { NA: () => P, VX: () => M, XR: () => x, gj: () => L, mU: () => D, tH: () => w, wT: () => b });
var r = n(64700),
    i = n(311907);
n(166352);
var s = n(409626),
    a = n(692969),
    o = n(773669),
    l = n(287809),
    u = n(975571),
    c = n(252424),
    d = n(474090),
    _ = n(341915),
    f = n(537928);
n(287875);
var p = n(651892),
    h = n(92246),
    E = n(792620),
    m = n(814793),
    g = n(890687),
    A = n(654487),
    I = n(652215),
    T = n(788868),
    S = n(985018);
let y = "NVIDIA GeForce NOW";
function N(e, t, n) {
    return n ? S.intl.formatToPlainString(e, t) : S.intl.format(e, t);
}
function v(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? S.t["/4XT0b"] : S.t["0hwcvM"]) : n ? S.t.tQoqXX : S.t["eb/Sna"];
}
function C(e) {
    return e ? S.t.klYWbT : S.t.ziB0HF;
}
function O(e) {
    return e ? S.t["4JS2QJ"] : S.t.AwuMRS;
}
function R(e) {
    return e ? S.t.GFdaUK : S.t.NIimTt;
}
function b(e, t, n, r) {
    let { targetMinutes: i } = (0, g.fc)(e),
        s = (0, g.I3)(e),
        a = (0, g.BL)({ quest: e, questContent: n, sourceQuestContent: r }),
        o = (0, m.ui)(e);
    if ((0, E.g5)(e) && !(0, E.t)({ quest: e }))
        return S.intl.format(S.t["l4S+cQ"], { minutes: i, onClick: a, gameTitle: e.config.messages.gameTitle });
    if ((0, E.g5)(e))
        return o
            ? S.intl.format(S.t.gbtCpW, { onClick: a, minutes: i })
            : S.intl.format(S.t.Ajlcd7, { minutes: i, onClick: a, gameTitle: e.config.messages.gameTitle });
    if (o) return S.intl.format(S.t.Hu8SKW, { targetMinutes: i });
    if ((0, E.vv)(e)) {
        let t = (0, E.Xi)(e.config),
            n = t?.messages.videoTitle;
        return null == n ? S.intl.string(S.t["o+e9yh"]) : S.intl.formatToPlainString(S.t["9m9Mna"], { videoTitle: n });
    }
    if (null != s) return s.title;
    if ((0, E.vl)(e))
        if ((0, m._e)(e)) return S.intl.format(S.t["1NaRSs"], { minutes: i });
        else return S.intl.format(S.t.xHXCyf, { minutes: i, activityName: e.config.messages.gameTitle });
    let l = S.t["6zWtV8"];
    return (
        (0, E.t)({ quest: e }) &&
            (l = e.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST) ? S.t.fe7Xec : S.t["wmOh/q"]),
        S.intl.format(l, { minutes: i, gameTitle: e.config.messages.gameTitle })
    );
}
function D(e) {
    let { quest: t, gameProfileSource: n } = e,
        r = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        o = (0, g.I3)(t),
        c = (0, E._3)(t)?.[0],
        p = (0, a.A)({ applicationId: c, location: A.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
    return (function (e) {
        let {
                quest: t,
                taskDetails: n,
                questContent: r,
                thirdPartyTaskDetails: i,
                sourceQuestContent: s,
                withoutMarkdown: a,
                currentUser: o,
                popoutTargetElementRef: l,
                onGameSheetOpened: c,
                onGameSheetClosed: p,
                onGameTitleClick: g,
            } = e,
            b = (0, d.ki)(o, T.PremiumTypes.TIER_2),
            D = (0, h.k5)(t.config),
            L = (0, E.g5)(t) && (0, E.xZ)(t);
        if ((0, m.ui)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        sourceQuestContent: r,
                        withoutMarkdown: i,
                        popoutTargetElementRef: s,
                        onGameSheetOpened: a,
                        onGameSheetClosed: o,
                    } = e,
                    l = (0, h.mH)(t.config),
                    { targetMinutes: u, applications: c } = n;
                if (i) return S.intl.formatToPlainString(S.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
                let d = (0, f.z)({
                    quest: t,
                    sourceQuestContent: r,
                    applications: c ?? [],
                    popoutTargetElementRef: s,
                    onGameSheetOpened: a,
                    onGameSheetClosed: o,
                });
                return (function (e) {
                    let { quest: t, gameSheetHook: n, rewardNameWithArticle: r, targetMinutes: i } = e,
                        s = {
                            [A.Li.PACKAGE_ACTION_ADVENTURE]: S.t.H485IA,
                            [A.Li.PACKAGE_RPG_MMO]: S.t["3XS8Ni"],
                            [A.Li.PACKAGE_RACING_SPORTS]: S.t["X+UCju"],
                            [A.Li.PACKAGE_SANDBOX_CREATIVE]: S.t["6o4n1Q"],
                            [A.Li.PACKAGE_FAMILY_FRIENDLY]: S.t.DUsNmf,
                            [A.Li.PACKAGE_HOLIDAY_SEASON]: S.t["cWP8/Z"],
                            [A.Li.PACKAGE_NEW_YEARS]: S.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        o = (null != a ? s[a] : null) ?? S.t.CDeHul;
                    return S.intl.format(o, { rewardNameWithArticle: r, targetMinutes: i, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: s,
                withoutMarkdown: a,
                popoutTargetElementRef: l,
                onGameSheetOpened: c,
                onGameSheetClosed: p,
            });
        if (L)
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: r,
                        hasNitro: i,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                    } = e,
                    o = (0, h.mH)(t.config),
                    { targetMinutes: l } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, h.JX)(t.config),
                    d = (0, h.Y7)(t.config),
                    _ = t.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    f = null != a;
                return N(
                    i && c
                        ? d
                            ? _
                                ? null != s
                                    ? S.t.u5QXpw
                                    : S.t.ztXW8V
                                : v({ hasRewardDuration: null != s, shouldShowGameProfileLink: f })
                            : _
                              ? S.t["1AcTqm"]
                              : C(f)
                        : c || null != s
                          ? _
                              ? S.t.enQ3jU
                              : O(f)
                          : _
                            ? S.t["e+K3xJ"]
                            : R(f),
                    {
                        gameTitle: u,
                        streamingDurationRequirement: l,
                        rewardNameWithArticle: o,
                        duration: s,
                        targetMinutes: l,
                        onGameTitleClick: a,
                    },
                    r,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: b,
                collectibleRewardDuration: D,
                onGameTitleClick: g,
            });
        if ((0, E.g5)(t))
            return (function (e) {
                let {
                        quest: t,
                        taskDetails: n,
                        withoutMarkdown: r,
                        hasNitro: i,
                        collectibleRewardDuration: s,
                        onGameTitleClick: a,
                    } = e,
                    o = (0, h.mH)(t.config),
                    { targetMinutes: l } = n,
                    u = t.config.messages.gameTitle,
                    c = (0, h.JX)(t.config),
                    d = (0, h.Y7)(t.config),
                    _ = null != a;
                return N(
                    i && c
                        ? d
                            ? v({ hasRewardDuration: null != s, shouldShowGameProfileLink: _ })
                            : C(_)
                        : c || null != s
                          ? O(_)
                          : R(_),
                    {
                        gameTitle: u,
                        targetMinutes: l,
                        rewardNameWithArticle: o,
                        duration: s,
                        streamingDurationRequirement: l,
                        onGameTitleClick: a,
                    },
                    r,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: b,
                collectibleRewardDuration: D,
                onGameTitleClick: g,
            });
        if ((0, E.xZ)(t))
            return (function (e) {
                let t,
                    {
                        quest: n,
                        taskDetails: r,
                        withoutMarkdown: i,
                        hasNitro: s,
                        collectibleRewardDuration: a,
                        onGameTitleClick: o,
                    } = e,
                    l = (0, h.mH)(n.config),
                    { targetMinutes: u } = r,
                    c = n.config.messages.gameTitle,
                    d = (0, h.JX)(n.config),
                    _ = (0, h.Y7)(n.config),
                    f = n.config.features.includes(A.Li.NON_GAMING_PLAY_QUEST),
                    p = null != o;
                return N(
                    (t =
                        s && d
                            ? _
                                ? f
                                    ? null != a
                                        ? S.t.u5QXpw
                                        : S.t.ztXW8V
                                    : v({ hasRewardDuration: null != a, shouldShowGameProfileLink: p })
                                : f
                                  ? S.t["1AcTqm"]
                                  : C(p)
                            : d || null != a
                              ? f
                                  ? S.t.enQ3jU
                                  : O(p)
                              : f
                                ? S.t["03VJqu"]
                                : p
                                  ? S.t.NrD2h8
                                  : S.t.FZL5Q5),
                    {
                        gameTitle: c,
                        streamingDurationRequirement: u,
                        rewardNameWithArticle: l,
                        duration: a,
                        questReward: l,
                        onGameTitleClick: o,
                    },
                    i,
                );
            })({
                quest: t,
                taskDetails: n,
                withoutMarkdown: a,
                hasNitro: b,
                collectibleRewardDuration: D,
                onGameTitleClick: g,
            });
        if ((0, h.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: r, onGameTitleClick: i } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return N(
                    null != i ? S.t.HHVg4i : S.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: i },
                    r,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, onGameTitleClick: g });
        else if ((0, E.vv)(t)) {
            let e, n, r, i, s;
            return (
                (e = (0, E.Xi)(t.config)),
                (n = e?.messages.videoTitle ?? "video"),
                (r = (0, h.mH)(t.config)),
                (i = (0, h.JX)(t.config)),
                (s = (0, h.Y7)(t.config)),
                N(
                    i && b
                        ? s
                            ? null != D
                                ? S.t.tXwfJT
                                : S.t["xqX+r5"]
                            : S.t["vs/xBu"]
                        : i || null != D
                          ? S.t["W/HkLO"]
                          : t.id === A.Fw
                            ? S.t.Rsd5bL
                            : S.t["g+InPC"],
                    { videoTitle: n, rewardNameWithArticle: r, duration: D },
                    a,
                )
            );
        } else if ((0, E.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
                    s = n.targetMinutes,
                    a = (0, h.mH)(t.config);
                return (0, m._e)(t)
                    ? N(S.t.VYwSSu, { streamingDurationRequirement: s, questReward: a }, r)
                    : t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)
                      ? i === _.uF.QUESTS_EMBED
                          ? N(
                                S.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: y,
                                    providerLink: u.A.getArticleURL(I.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: a,
                                },
                                r,
                            )
                          : N(
                                S.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: y,
                                    providerLink: u.A.getArticleURL(I.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: s,
                                    questReward: a,
                                },
                                r,
                            )
                      : N(
                            S.t.UuzHh8,
                            {
                                activityName: t.config.messages.gameTitle,
                                streamingDurationRequirement: s,
                                questReward: a,
                            },
                            r,
                        );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, questContent: r });
        return null != i
            ? i.description
            : (function (e) {
                  let {
                          quest: t,
                          taskDetails: n,
                          withoutMarkdown: r,
                          hasNitro: i,
                          collectibleRewardDuration: s,
                          onGameTitleClick: a,
                      } = e,
                      o = (0, h.mH)(t.config),
                      { targetMinutes: l } = n,
                      u = t.config.messages.gameTitle,
                      c = (0, h.JX)(t.config),
                      d = (0, h.Y7)(t.config),
                      _ = null != a;
                  return N(
                      i && c
                          ? d
                              ? null != s
                                  ? _
                                      ? S.t["3RwRv8"]
                                      : S.t.TmKqHw
                                  : _
                                    ? S.t.l9yxDa
                                    : S.t["X8Yt/1"]
                              : _
                                ? S.t.eEuma3
                                : S.t.smG9ql
                          : c || null != s
                            ? _
                                ? S.t.Cko4a4
                                : S.t.BLyDvO
                            : _
                              ? S.t.ER9rII
                              : S.t["hkJ+Gs"],
                      {
                          gameTitle: u,
                          streamingDurationRequirement: l,
                          duration: s,
                          questReward: o,
                          onGameTitleClick: a,
                      },
                      r,
                  );
              })({
                  quest: t,
                  taskDetails: n,
                  withoutMarkdown: a,
                  hasNitro: b,
                  collectibleRewardDuration: D,
                  onGameTitleClick: g,
              });
    })({ ...e, currentUser: r, withoutMarkdown: !1, thirdPartyTaskDetails: o ?? void 0, onGameTitleClick: p });
}
function L(e, t, n, r) {
    let i = (0, g.fc)(e),
        s = (0, E.JC)(e),
        a = D({
            quest: e,
            taskDetails: i,
            location: A.rE.QUEST_HOME_DESKTOP,
            questContent: _.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: n,
        }),
        o = e.userStatus?.claimedAt != null,
        l = (0, g.S5)(e.userStatus?.claimedAt);
    return o
        ? S.intl.formatToPlainString(S.t.lOVr0O, { claimDate: l })
        : null != s
          ? s.description
          : null != a
            ? a
            : null;
}
function w(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: r,
            activeScreen: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
        } = e,
        u = t.config.rewardsConfig.rewardsExpireAt,
        c = (0, g.S5)(u),
        d = (0, g.fc)(t),
        f = (0, g.I3)(t),
        I = t.userStatus?.completedAt != null,
        T = t.userStatus?.enrolledAt != null,
        y = d.percentComplete > 0,
        N = (0, g.Vn)(t),
        v = D({
            quest: t,
            location: A.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: r,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            gameProfileSource: s.Ob.QuestBar,
        }),
        C = null != f ? f.percentComplete : d.percentComplete;
    if (I) return S.intl.formatToPlainString(S.t.APddvF, { expirationDate: c });
    if (n) {
        if (i !== _.X0.SELECT && (0, m.ui)(t) && T && !y) {
            let e = (0, h.mH)(t.config);
            return S.intl.format(S.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
        return v;
    }
    if ((0, E.vv)(t)) return S.intl.string(S.t["o+e9yh"]);
    if (C > 0)
        if (!N) return S.intl.string(S.t.mOrpXG);
        else return (0, p.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: f ?? void 0 });
    return S.intl.string(S.t.S6UUc5);
}
function M(e) {
    let t = (0, i.bG)([o.default], () => o.default.locale),
        n = (0, g.fc)(e),
        [r] = (0, g.Qo)(e, n),
        s = (0, g.I3)(e),
        a = e.userStatus?.completedAt != null,
        l = null != s ? s.percentComplete : n.percentComplete;
    if (a) return S.intl.string(S.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && l > 0) {
        let e = (0, c.l9)(t, l, { roundingMode: "floor" });
        return S.intl.formatToPlainString(S.t.lVZaXD, { percent: e });
    }
    return r === _.X0.SELECT
        ? S.intl.string(S.t.EMrUHQ)
        : (0, E.g5)(e)
          ? S.intl.string(S.t.mOrpXG)
          : S.intl.string(S.t["7e5k7L"]);
}
function P(e) {
    let { quest: t, application: n, shortText: i = !1, mobileExternalLinkVariant: s } = e,
        a = r.useMemo(
            () =>
                (function (e) {
                    return (0, E.g5)(e) || (0, E.vl)(e)
                        ? 0
                        : (0, E.fE)({ quest: e })
                          ? 1
                          : (0, E.IO)(e)
                            ? 2
                            : 3 * !!(0, E.Cr)(e);
                })(t),
            [t],
        ),
        o = (0, g.fc)(t);
    switch (a) {
        case 0:
            if (t.config.features.includes(A.Li.CLOUD_GAMING_ACTIVITY)) return S.intl.string(S.t["+qoymD"]);
            if ((0, m.vA)(t)) return S.intl.string(i ? S.t.E4kW5O : S.t["Ie9++s"]);
            return S.intl.string(S.t.l7E81v);
        case 1:
            return S.intl.string(S.t.l7E81v);
        case 2:
            return S.intl.formatToPlainString(S.t.GNsKiW, { remainTime: (0, E.xm)(o) });
        case 3:
            return (0, m.vA)(t) && 1 ? S.intl.string(i ? S.t.CkUzLd : S.t["hRIVy+"]) : S.intl.string(S.t.l7E81v);
    }
}
function x(e) {
    let { quest: t, rewardCode: n } = e,
        r = (0, h.kr)({ quest: t }),
        i = n?.platform ?? _.pY.CROSS_PLATFORM,
        s = r ? (0, h.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, p.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != i ? o[i] : void 0;
}
