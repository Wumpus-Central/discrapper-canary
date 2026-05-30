"use strict";
n.d(t, { A9: () => k, mU: () => x, tH: () => U, NA: () => F, XR: () => V, VX: () => G });
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
    h = n(627968),
    f = n(939249),
    p = n(834730),
    E = n(862611),
    m = n(420298),
    g = n(287875),
    A = n(651892),
    I = n(801365),
    T = n(792620),
    S = n(814793),
    y = n(31587),
    N = n(190107),
    v = n(652215),
    C = n(788868),
    R = n(375708);
let O = "NVIDIA GeForce NOW";
function b(e, t, n) {
    return n ? R.intl.formatToPlainString(e, t) : R.intl.format(e, t);
}
function D(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? R.t["/4XT0b"] : R.t["0hwcvM"]) : n ? R.t.tQoqXX : R.t["eb/Sna"];
}
function L(e) {
    return e ? R.t.klYWbT : R.t.ziB0HF;
}
function w(e) {
    return e ? R.t["4JS2QJ"] : R.t.AwuMRS;
}
function M(e) {
    return e ? R.t.GFdaUK : R.t.NIimTt;
}
let P = new Date("2026-01-01T00:00:00Z");
function x(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        o = (0, y.I3)(t),
        c = (0, T._3)(t)?.[0],
        g = (0, a.A)({ applicationId: c, location: N.rE.QUEST_INSTRUCTIONS, source: n ?? s.Ob.QuestHome });
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
            y = (0, d.ki)(o, C.PremiumTypes.TIER_2),
            x = (0, I.k5)(t.config),
            k = (0, T.g5)(t) && (0, T.xZ)(t),
            U = (0, S.ui)(t),
            G = (0, I.mH)(t.config, o);
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
                if (r) return R.intl.formatToPlainString(R.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
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
                            [N.Li.PACKAGE_ACTION_ADVENTURE]: R.t.H485IA,
                            [N.Li.PACKAGE_RPG_MMO]: R.t["3XS8Ni"],
                            [N.Li.PACKAGE_RACING_SPORTS]: R.t["X+UCju"],
                            [N.Li.PACKAGE_SANDBOX_CREATIVE]: R.t["6o4n1Q"],
                            [N.Li.PACKAGE_FAMILY_FRIENDLY]: R.t.DUsNmf,
                            [N.Li.PACKAGE_HOLIDAY_SEASON]: R.t["cWP8/Z"],
                            [N.Li.PACKAGE_NEW_YEARS]: R.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        o = (null != a ? s[a] : null) ?? R.t.CDeHul;
                    return R.intl.format(o, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: s,
                withoutMarkdown: a,
                popoutTargetElementRef: l,
                onGameSheetOpened: c,
                onGameSheetClosed: g,
                rewardNameWithArticle: G,
            });
        if (k)
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
                    _ = t.config.features.includes(N.Li.NON_GAMING_PLAY_QUEST),
                    h = null != a;
                return b(
                    r && c
                        ? d
                            ? _
                                ? null != s
                                    ? R.t.u5QXpw
                                    : R.t.ztXW8V
                                : D({ hasRewardDuration: null != s, shouldShowGameProfileLink: h })
                            : _
                              ? R.t["1AcTqm"]
                              : L(h)
                        : c || null != s
                          ? _
                              ? R.t.enQ3jU
                              : w(h)
                          : _
                            ? R.t["e+K3xJ"]
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
                withoutMarkdown: a,
                hasNitro: y,
                collectibleRewardDuration: x,
                onGameTitleClick: A,
                rewardNameWithArticle: G,
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
                hasNitro: y,
                collectibleRewardDuration: x,
                onGameTitleClick: A,
                rewardNameWithArticle: G,
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
                    h = n.config.features.includes(N.Li.NON_GAMING_PLAY_QUEST),
                    f = null != o;
                return b(
                    (t =
                        s && d
                            ? _
                                ? h
                                    ? null != a
                                        ? R.t.u5QXpw
                                        : R.t.ztXW8V
                                    : D({ hasRewardDuration: null != a, shouldShowGameProfileLink: f })
                                : h
                                  ? R.t["1AcTqm"]
                                  : L(f)
                            : d || null != a
                              ? h
                                  ? R.t.enQ3jU
                                  : w(f)
                              : h
                                ? R.t["03VJqu"]
                                : f
                                  ? R.t.NrD2h8
                                  : R.t.FZL5Q5),
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
                hasNitro: y,
                collectibleRewardDuration: x,
                onGameTitleClick: A,
                rewardNameWithArticle: G,
            });
        if ((0, I.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return b(
                    null != r ? R.t.HHVg4i : R.t["a/ia7F"],
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
                                ? R.t.tXwfJT
                                : R.t["xqX+r5"]
                            : R.t["vs/xBu"]
                        : l || null != n
                          ? R.t["W/HkLO"]
                          : t.id === N.Fw
                            ? R.t.Rsd5bL
                            : R.t["g+InPC"],
                    { videoTitle: o, rewardNameWithArticle: s, duration: n },
                    r,
                );
            })({ quest: t, collectibleRewardDuration: x, hasNitro: y, withoutMarkdown: a, rewardNameWithArticle: G });
        else if ((0, T.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, questContent: r, rewardNameWithArticle: s } = e,
                    a = n.targetMinutes;
                return (0, S._e)(t)
                    ? b(R.t.VYwSSu, { streamingDurationRequirement: a, questReward: s }, i)
                    : t.config.features.includes(N.Li.CLOUD_GAMING_ACTIVITY) && new Date(t.config.startsAt) < P
                      ? r === _.uF.QUESTS_EMBED
                          ? b(
                                R.t["C+2RxC"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: O,
                                    providerLink: u.A.getArticleURL(v.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    questReward: s,
                                },
                                i,
                            )
                          : b(
                                R.t["0NNM3l"],
                                {
                                    activityName: t.config.messages.gameTitle,
                                    providerName: O,
                                    providerLink: u.A.getArticleURL(v.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                                    streamingDurationRequirement: a,
                                    questReward: s,
                                },
                                i,
                            )
                      : b(
                            R.t.UuzHh8,
                            {
                                activityName: t.config.messages.gameTitle,
                                streamingDurationRequirement: a,
                                questReward: s,
                            },
                            i,
                        );
            })({ quest: t, taskDetails: n, withoutMarkdown: a, questContent: i, rewardNameWithArticle: G });
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
                                ? R.t.NdXW5c
                                : R.t["8066TK"]
                            : null != s
                              ? R.t["6FOKAX"]
                              : R.t.thO6iA
                        : o || null != s
                          ? R.t["IACEB/"]
                          : R.t.thO6iA,
                    { objective: n.description, duration: s, questReward: a },
                    i,
                );
            })({
                quest: t,
                thirdPartyTaskDetails: r,
                withoutMarkdown: a,
                hasNitro: y,
                collectibleRewardDuration: x,
                rewardNameWithArticle: G,
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
                                      ? R.t["3RwRv8"]
                                      : R.t.TmKqHw
                                  : _
                                    ? R.t.l9yxDa
                                    : R.t["X8Yt/1"]
                              : _
                                ? R.t.eEuma3
                                : R.t.smG9ql
                          : c || null != s
                            ? _
                                ? R.t.Cko4a4
                                : R.t.BLyDvO
                            : _
                              ? R.t.ER9rII
                              : R.t["hkJ+Gs"],
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
                  hasNitro: y,
                  collectibleRewardDuration: x,
                  onGameTitleClick: A,
                  rewardNameWithArticle: G,
              });
    })({ ...e, currentUser: i, withoutMarkdown: !1, thirdPartyTaskDetails: o ?? void 0, onGameTitleClick: g });
}
function k(e, t, n, i, r, s) {
    let a = (0, y.fc)(e),
        o = x({
            quest: e,
            taskDetails: a,
            location: n,
            questContent: i,
            sourceQuestContent: t,
            popoutTargetElementRef: s,
            gameProfileSource: r,
        }),
        l = e.userStatus?.claimedAt != null,
        u = (0, y.S5)(e.userStatus?.claimedAt);
    return l ? R.intl.formatToPlainString(R.t.lOVr0O, { claimDate: u }) : o;
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
            onClickGameTitle: h,
        } = e,
        f = t.config.rewardsConfig.rewardsExpireAt,
        p = (0, y.S5)(f),
        E = (0, y.fc)(t),
        m = (0, y.I3)(t),
        g = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        v = t.userStatus?.completedAt != null,
        C = t.userStatus?.enrolledAt != null,
        O = E.percentComplete > 0,
        b = (0, y.Vn)(t),
        D = x({
            quest: t,
            location: N.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: E,
            sourceQuestContent: i,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: s.Ob.QuestBar,
        }),
        L = null != m ? m.percentComplete : E.percentComplete;
    if (v) return R.intl.formatToPlainString(R.t.APddvF, { expirationDate: p });
    if ((0, T.I6)(t) && !1 === d) return R.intl.string(R.t.mAdqf7);
    if (n) {
        if ((0, T.I6)(t) && !0 === d && null != h)
            return R.intl.format(R.t.X8hBDz, { gameTitle: t.config.messages.gameTitle, onClickGameTitle: h });
        if (a !== _.X0.SELECT && (0, S.ui)(t) && C && !O) {
            let e = (0, I.mH)(t.config, g);
            return R.intl.format(R.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: E.targetMinutes });
        }
        return D;
    }
    return (0, T.vv)(t)
        ? R.intl.string(R.t["o+e9yh"])
        : L > 0
          ? (0, T.I6)(t) && !0 === d
              ? R.intl.string(R.t.JkyCIO)
              : b
                ? (0, A.YT)({ quest: t, taskDetails: E, thirdPartyTaskDetails: m ?? void 0 })
                : R.intl.string(R.t.mOrpXG)
          : R.intl.string(R.t.S6UUc5);
}
function G(e, t) {
    let n = (0, r.bG)([o.default], () => o.default.locale),
        i = (0, y.fc)(e),
        [s] = (0, y.Qo)(e, i),
        a = (0, y.I3)(e),
        l = e.userStatus?.completedAt != null,
        u = null != a ? a.percentComplete : i.percentComplete;
    if (l) return R.intl.string(R.t["ij5E/5"]);
    if ((0, T.I6)(e) && !1 === t) return R.intl.string(R.t.s9r2a1);
    if (e.userStatus?.enrolledAt != null && u > 0) {
        let e = (0, c.l9)(n, u, { roundingMode: "floor" });
        return R.intl.formatToPlainString(R.t.lVZaXD, { percent: e });
    }
    return s === _.X0.SELECT
        ? R.intl.string(R.t.EMrUHQ)
        : (0, T.g5)(e)
          ? R.intl.string(R.t.mOrpXG)
          : R.intl.string(R.t["7e5k7L"]);
}
function F(e) {
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
        a = (0, y.fc)(t);
    switch (s) {
        case 0:
            if (t.config.features.includes(N.Li.CLOUD_GAMING_ACTIVITY)) return R.intl.string(R.t["+qoymD"]);
            if ((0, S.vA)(t)) return R.intl.string(r ? R.t.E4kW5O : R.t["Ie9++s"]);
            return R.intl.string(R.t.l7E81v);
        case 1:
            return R.intl.string(R.t.l7E81v);
        case 2:
            return (0, g.WM)(a);
        case 3:
            return (0, S.vA)(t) && 1 ? R.intl.string(r ? R.t.CkUzLd : R.t["hRIVy+"]) : R.intl.string(R.t.l7E81v);
    }
}
function V(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, I.kr)({ quest: t }),
        r = n?.platform ?? _.pY.CROSS_PLATFORM,
        s = i ? (0, I.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, A.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? o[r] : void 0;
}
