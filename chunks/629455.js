"use strict";
n.d(t, { A9: () => w, mU: () => L, tH: () => M, NA: () => x, XR: () => k, VX: () => P });
var i = n(64700),
    r = n(17928);
n(166352);
var s = n(409626),
    a = n(692969),
    o = n(773669),
    l = n(287809),
    u = n(252424),
    c = n(474090),
    d = n(507107),
    _ = n(627968),
    h = n(939249),
    f = n(834730),
    p = n(862611),
    E = n(420298),
    m = n(287875),
    g = n(651892),
    A = n(801365),
    I = n(792620),
    T = n(814793),
    S = n(31587),
    y = n(190107),
    N = n(788868),
    v = n(375708);
function C(e, t, n) {
    return n ? v.intl.formatToPlainString(e, t) : v.intl.format(e, t);
}
function R(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? v.t["/4XT0b"] : v.t["0hwcvM"]) : n ? v.t.tQoqXX : v.t["eb/Sna"];
}
function O(e) {
    return e ? v.t.klYWbT : v.t.ziB0HF;
}
function b(e) {
    return e ? v.t["4JS2QJ"] : v.t.AwuMRS;
}
function D(e) {
    return e ? v.t.GFdaUK : v.t.NIimTt;
}
function L(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        o = (0, S.I3)(t),
        u = (0, I._3)(t)?.[0],
        d = (0, a.A)({ applicationId: u, location: y.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
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
                onGameTitleClick: d,
            } = e,
            m = (0, c.ki)(a, N.PremiumTypes.TIER_2),
            g = (0, A.k5)(t.config),
            S = (0, I.g5)(t) && (0, I.xZ)(t),
            L = (0, T.ui)(t),
            w = (0, A.mH)(t.config, a);
        if (L)
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
                if (r) return v.intl.formatToPlainString(v.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
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
                        (0, _.jsx)(
                            p.A,
                            {
                                quest: t,
                                sourceQuestContent: n,
                                applications: i ?? [],
                                targetElementRef: r,
                                onGameSheetOpened: s,
                                onGameSheetClosed: a,
                                children: (t, n) =>
                                    (0, _.jsx)(h.D, {
                                        ...t,
                                        style: { display: "inline-block", cursor: "pointer" },
                                        innerRef: n,
                                        children: (0, _.jsx)(f.E, {
                                            variant: "text-xs/normal",
                                            color: "text-link",
                                            className: E.s3,
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
                            [y.Li.PACKAGE_ACTION_ADVENTURE]: v.t.H485IA,
                            [y.Li.PACKAGE_RPG_MMO]: v.t["3XS8Ni"],
                            [y.Li.PACKAGE_RACING_SPORTS]: v.t["X+UCju"],
                            [y.Li.PACKAGE_SANDBOX_CREATIVE]: v.t["6o4n1Q"],
                            [y.Li.PACKAGE_FAMILY_FRIENDLY]: v.t.DUsNmf,
                            [y.Li.PACKAGE_HOLIDAY_SEASON]: v.t["cWP8/Z"],
                            [y.Li.PACKAGE_NEW_YEARS]: v.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        o = (null != a ? s[a] : null) ?? v.t.CDeHul;
                    return v.intl.format(o, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: r,
                withoutMarkdown: s,
                popoutTargetElementRef: o,
                onGameSheetOpened: l,
                onGameSheetClosed: u,
                rewardNameWithArticle: w,
            });
        if (S)
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
                    c = (0, A.JX)(t.config),
                    d = (0, A.Y7)(t.config),
                    _ = t.config.features.includes(y.Li.NON_GAMING_PLAY_QUEST),
                    h = null != a;
                return C(
                    r && c
                        ? d
                            ? _
                                ? null != s
                                    ? v.t.u5QXpw
                                    : v.t.ztXW8V
                                : R({ hasRewardDuration: null != s, shouldShowGameProfileLink: h })
                            : _
                              ? v.t["1AcTqm"]
                              : O(h)
                        : c || null != s
                          ? _
                              ? v.t.enQ3jU
                              : b(h)
                          : _
                            ? v.t["e+K3xJ"]
                            : D(h),
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
                hasNitro: m,
                collectibleRewardDuration: g,
                onGameTitleClick: d,
                rewardNameWithArticle: w,
            });
        if ((0, I.g5)(t))
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
                    c = (0, A.JX)(t.config),
                    d = (0, A.Y7)(t.config),
                    _ = null != a;
                return C(
                    r && c
                        ? d
                            ? R({ hasRewardDuration: null != s, shouldShowGameProfileLink: _ })
                            : O(_)
                        : c || null != s
                          ? b(_)
                          : D(_),
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
                hasNitro: m,
                collectibleRewardDuration: g,
                onGameTitleClick: d,
                rewardNameWithArticle: w,
            });
        if ((0, I.xZ)(t))
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
                    d = (0, A.JX)(n.config),
                    _ = (0, A.Y7)(n.config),
                    h = n.config.features.includes(y.Li.NON_GAMING_PLAY_QUEST),
                    f = null != o;
                return C(
                    (t =
                        s && d
                            ? _
                                ? h
                                    ? null != a
                                        ? v.t.u5QXpw
                                        : v.t.ztXW8V
                                    : R({ hasRewardDuration: null != a, shouldShowGameProfileLink: f })
                                : h
                                  ? v.t["1AcTqm"]
                                  : O(f)
                            : d || null != a
                              ? h
                                  ? v.t.enQ3jU
                                  : b(f)
                              : h
                                ? v.t["03VJqu"]
                                : f
                                  ? v.t.NrD2h8
                                  : v.t.FZL5Q5),
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
                hasNitro: m,
                collectibleRewardDuration: g,
                onGameTitleClick: d,
                rewardNameWithArticle: w,
            });
        if ((0, A.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return C(
                    null != r ? v.t.HHVg4i : v.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: r },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: s, onGameTitleClick: d });
        else if ((0, I.vv)(t))
            return (function (e) {
                let {
                        quest: t,
                        collectibleRewardDuration: n,
                        hasNitro: i,
                        withoutMarkdown: r,
                        rewardNameWithArticle: s,
                    } = e,
                    a = (0, I.Xi)(t.config),
                    o = a?.messages.videoTitle ?? "video",
                    l = (0, A.JX)(t.config),
                    u = (0, A.Y7)(t.config);
                return C(
                    l && i
                        ? u
                            ? null != n
                                ? v.t.tXwfJT
                                : v.t["xqX+r5"]
                            : v.t["vs/xBu"]
                        : l || null != n
                          ? v.t["W/HkLO"]
                          : t.id === y.Fw
                            ? v.t.Rsd5bL
                            : v.t["g+InPC"],
                    { videoTitle: o, rewardNameWithArticle: s, duration: n },
                    r,
                );
            })({ quest: t, collectibleRewardDuration: g, hasNitro: m, withoutMarkdown: s, rewardNameWithArticle: w });
        else if ((0, I.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, rewardNameWithArticle: r } = e,
                    s = n.targetMinutes;
                return (0, T._e)(t)
                    ? C(v.t.VYwSSu, { streamingDurationRequirement: s, questReward: r }, i)
                    : C(
                          v.t.UuzHh8,
                          {
                              activityName: t.config.messages.gameTitle,
                              streamingDurationRequirement: s,
                              questReward: r,
                          },
                          i,
                      );
            })({ quest: t, taskDetails: n, withoutMarkdown: s, rewardNameWithArticle: w });
        else if ((0, I.I6)(t) && null != i)
            return (function (e) {
                let {
                        quest: t,
                        thirdPartyTaskDetails: n,
                        withoutMarkdown: i,
                        hasNitro: r,
                        collectibleRewardDuration: s,
                        rewardNameWithArticle: a,
                    } = e,
                    o = (0, A.JX)(t.config),
                    l = (0, A.Y7)(t.config);
                return C(
                    r && o
                        ? l
                            ? null != s
                                ? v.t.NdXW5c
                                : v.t["8066TK"]
                            : null != s
                              ? v.t["6FOKAX"]
                              : v.t.thO6iA
                        : o || null != s
                          ? v.t["IACEB/"]
                          : v.t.thO6iA,
                    { objective: n.description, duration: s, questReward: a },
                    i,
                );
            })({
                quest: t,
                thirdPartyTaskDetails: i,
                withoutMarkdown: s,
                hasNitro: m,
                collectibleRewardDuration: g,
                rewardNameWithArticle: w,
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
                      c = (0, A.JX)(t.config),
                      d = (0, A.Y7)(t.config),
                      _ = null != a;
                  return C(
                      r && c
                          ? d
                              ? null != s
                                  ? _
                                      ? v.t["3RwRv8"]
                                      : v.t.TmKqHw
                                  : _
                                    ? v.t.l9yxDa
                                    : v.t["X8Yt/1"]
                              : _
                                ? v.t.eEuma3
                                : v.t.smG9ql
                          : c || null != s
                            ? _
                                ? v.t.Cko4a4
                                : v.t.BLyDvO
                            : _
                              ? v.t.ER9rII
                              : v.t["hkJ+Gs"],
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
                  hasNitro: m,
                  collectibleRewardDuration: g,
                  onGameTitleClick: d,
                  rewardNameWithArticle: w,
              });
    })({ ...e, currentUser: i, withoutMarkdown: !1, thirdPartyTaskDetails: o ?? void 0, onGameTitleClick: d });
}
function w(e, t, n, i, r) {
    let s = (0, S.fc)(e),
        a = L({
            quest: e,
            taskDetails: s,
            location: n,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: i,
        }),
        o = e.userStatus?.claimedAt != null,
        l = (0, S.S5)(e.userStatus?.claimedAt);
    return o ? v.intl.formatToPlainString(v.t.lOVr0O, { claimDate: l }) : a;
}
function M(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: i,
            activeScreen: a,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: _,
            onClickGameTitle: h,
        } = e,
        f = t.config.rewardsConfig.rewardsExpireAt,
        p = (0, S.S5)(f),
        E = (0, S.fc)(t),
        m = (0, S.I3)(t),
        N = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        C = t.userStatus?.completedAt != null,
        R = t.userStatus?.enrolledAt != null,
        O = E.percentComplete > 0,
        b = (0, S.Vn)(t),
        D = L({
            quest: t,
            location: y.rE.QUESTS_BAR,
            taskDetails: E,
            sourceQuestContent: i,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: s.Ob.QuestBar,
        }),
        w = null != m ? m.percentComplete : E.percentComplete;
    if (C) return v.intl.formatToPlainString(v.t.APddvF, { expirationDate: p });
    if ((0, I.I6)(t) && !1 === _) return v.intl.string(v.t.mAdqf7);
    if (n) {
        if ((0, I.I6)(t) && !0 === _ && null != h)
            return v.intl.format(v.t.X8hBDz, { gameTitle: t.config.messages.gameTitle, onClickGameTitle: h });
        if (a !== d.X0.SELECT && (0, T.ui)(t) && R && !O) {
            let e = (0, A.mH)(t.config, N);
            return v.intl.format(v.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: E.targetMinutes });
        }
        return D;
    }
    return (0, I.vv)(t)
        ? v.intl.string(v.t["o+e9yh"])
        : w > 0
          ? (0, I.I6)(t) && !0 === _
              ? v.intl.string(v.t.JkyCIO)
              : b
                ? (0, g.YT)({ quest: t, taskDetails: E, thirdPartyTaskDetails: m ?? void 0 })
                : v.intl.string(v.t.mOrpXG)
          : v.intl.string(v.t.S6UUc5);
}
function P(e, t) {
    let n = (0, r.bG)([o.default], () => o.default.locale),
        i = (0, S.fc)(e),
        [s] = (0, S.Qo)(e, i),
        a = (0, S.I3)(e),
        l = e.userStatus?.completedAt != null,
        c = null != a ? a.percentComplete : i.percentComplete;
    if (l) return v.intl.string(v.t["ij5E/5"]);
    if ((0, I.I6)(e) && !1 === t) return v.intl.string(v.t.s9r2a1);
    if (e.userStatus?.enrolledAt != null && c > 0) {
        let e = (0, u.l9)(n, c, { roundingMode: "floor" });
        return v.intl.formatToPlainString(v.t.lVZaXD, { percent: e });
    }
    return s === d.X0.SELECT
        ? v.intl.string(v.t.EMrUHQ)
        : (0, I.g5)(e)
          ? v.intl.string(v.t.mOrpXG)
          : v.intl.string(v.t["7e5k7L"]);
}
function x(e) {
    let { quest: t, application: n, shortText: r = !1 } = e,
        s = i.useMemo(
            () =>
                (function (e) {
                    return (0, I.g5)(e) || (0, I.vl)(e)
                        ? 0
                        : (0, I.fE)({ quest: e })
                          ? 1
                          : (0, I.IO)(e)
                            ? 2
                            : 3 * !!(0, I.Cr)(e);
                })(t),
            [t],
        ),
        a = (0, S.fc)(t);
    switch (s) {
        case 0:
            if (t.config.features.includes(y.Li.CLOUD_GAMING_ACTIVITY)) return v.intl.string(v.t["+qoymD"]);
            if ((0, T.vA)(t)) return v.intl.string(r ? v.t.E4kW5O : v.t["Ie9++s"]);
            return v.intl.string(v.t.l7E81v);
        case 1:
            return v.intl.string(v.t.l7E81v);
        case 2:
            return (0, m.WM)(a);
        case 3:
            return (0, T.vA)(t) && 1 ? v.intl.string(r ? v.t.CkUzLd : v.t["hRIVy+"]) : v.intl.string(v.t.l7E81v);
    }
}
function k(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, A.kr)({ quest: t }),
        r = n?.platform ?? d.pY.CROSS_PLATFORM,
        s = i ? (0, A.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, g.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? o[r] : void 0;
}
