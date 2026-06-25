"use strict";
n.d(t, { A9: () => k, mU: () => x, Jf: () => B, tH: () => U, NA: () => F, XR: () => V, VX: () => G });
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
    m = n(362058),
    g = n(590202),
    A = n(284846),
    I = n(287875),
    T = n(651892),
    S = n(901406),
    y = n(801365),
    C = n(792620),
    N = n(814793),
    v = n(347135),
    R = n(190107),
    O = n(788868),
    b = n(375708);
function D(e, t, n) {
    return n ? b.intl.formatToPlainString(e, t) : b.intl.format(e, t);
}
function L(e) {
    let { hasRewardDuration: t, shouldShowGameProfileLink: n } = e;
    return t ? (n ? b.t["/4XT0b"] : b.t["0hwcvM"]) : n ? b.t.tQoqXX : b.t["eb/Sna"];
}
function w(e) {
    return e ? b.t.klYWbT : b.t.ziB0HF;
}
function M(e) {
    return e ? b.t["4JS2QJ"] : b.t.AwuMRS;
}
function P(e) {
    return e ? b.t.GFdaUK : b.t.NIimTt;
}
function x(e) {
    let { quest: t, gameProfileSource: n } = e,
        i = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        r = (0, v.I3)(t),
        l = !1 === (0, A.U)(t).hasAlreadyLinked,
        c = (0, C.I6)(t) ? (0, C.xc)(t) : (0, C._3)(t)?.[0],
        _ = (0, o.A)({ applicationId: c, location: R.rE.QUEST_INSTRUCTIONS, source: n ?? a.Ob.QuestHome });
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
                needsToConnect: _,
            } = e,
            g = (0, d.ki)(a, O.PremiumTypes.TIER_2),
            A = (0, y.k5)(t.config),
            I = (0, C.g5)(t) && (0, C.xZ)(t),
            T = (0, N.ui)(t),
            S = (0, y.mH)(t.config, a);
        if (T)
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
                if (r) return b.intl.formatToPlainString(b.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
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
                            [R.Li.PACKAGE_ACTION_ADVENTURE]: b.t.H485IA,
                            [R.Li.PACKAGE_RPG_MMO]: b.t["3XS8Ni"],
                            [R.Li.PACKAGE_RACING_SPORTS]: b.t["X+UCju"],
                            [R.Li.PACKAGE_SANDBOX_CREATIVE]: b.t["6o4n1Q"],
                            [R.Li.PACKAGE_FAMILY_FRIENDLY]: b.t.DUsNmf,
                            [R.Li.PACKAGE_HOLIDAY_SEASON]: b.t["cWP8/Z"],
                            [R.Li.PACKAGE_NEW_YEARS]: b.t["8+sIJz"],
                        },
                        a = t.config.features.find((e) => e in s),
                        o = (null != a ? s[a] : null) ?? b.t.CDeHul;
                    return b.intl.format(o, { rewardNameWithArticle: i, targetMinutes: r, gameSheetHook: n });
                })({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
            })({
                quest: t,
                taskDetails: n,
                sourceQuestContent: r,
                withoutMarkdown: s,
                popoutTargetElementRef: o,
                onGameSheetOpened: l,
                onGameSheetClosed: u,
                rewardNameWithArticle: S,
            });
        if (I)
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
                    c = (0, y.JX)(t.config),
                    d = (0, y.Y7)(t.config),
                    _ = t.config.features.includes(R.Li.NON_GAMING_PLAY_QUEST),
                    h = null != a;
                return D(
                    r && c
                        ? d
                            ? _
                                ? null != s
                                    ? b.t.u5QXpw
                                    : b.t.ztXW8V
                                : L({ hasRewardDuration: null != s, shouldShowGameProfileLink: h })
                            : _
                              ? b.t["1AcTqm"]
                              : w(h)
                        : c || null != s
                          ? _
                              ? b.t.enQ3jU
                              : M(h)
                          : _
                            ? b.t["e+K3xJ"]
                            : P(h),
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
                hasNitro: g,
                collectibleRewardDuration: A,
                onGameTitleClick: c,
                rewardNameWithArticle: S,
            });
        if ((0, C.g5)(t))
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
                    c = (0, y.JX)(t.config),
                    d = (0, y.Y7)(t.config),
                    _ = null != a;
                return D(
                    r && c
                        ? d
                            ? L({ hasRewardDuration: null != s, shouldShowGameProfileLink: _ })
                            : w(_)
                        : c || null != s
                          ? M(_)
                          : P(_),
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
                hasNitro: g,
                collectibleRewardDuration: A,
                onGameTitleClick: c,
                rewardNameWithArticle: S,
            });
        if ((0, C.xZ)(t))
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
                    d = (0, y.JX)(n.config),
                    _ = (0, y.Y7)(n.config),
                    h = n.config.features.includes(R.Li.NON_GAMING_PLAY_QUEST),
                    f = null != o;
                return D(
                    (t =
                        s && d
                            ? _
                                ? h
                                    ? null != a
                                        ? b.t.u5QXpw
                                        : b.t.ztXW8V
                                    : L({ hasRewardDuration: null != a, shouldShowGameProfileLink: f })
                                : h
                                  ? b.t["1AcTqm"]
                                  : w(f)
                            : d || null != a
                              ? h
                                  ? b.t.enQ3jU
                                  : M(f)
                              : h
                                ? b.t["03VJqu"]
                                : f
                                  ? b.t.NrD2h8
                                  : b.t.FZL5Q5),
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
                hasNitro: g,
                collectibleRewardDuration: A,
                onGameTitleClick: c,
                rewardNameWithArticle: S,
            });
        if ((0, y.kr)({ quest: t }))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, onGameTitleClick: r } = e,
                    { targetMinutes: s } = n,
                    a = t.config.messages.gameTitle;
                return D(
                    null != r ? b.t.HHVg4i : b.t["a/ia7F"],
                    { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: r },
                    i,
                );
            })({ quest: t, taskDetails: n, withoutMarkdown: s, onGameTitleClick: c });
        else if ((0, C.vv)(t))
            return (function (e) {
                let {
                        quest: t,
                        collectibleRewardDuration: n,
                        hasNitro: i,
                        withoutMarkdown: r,
                        rewardNameWithArticle: s,
                    } = e,
                    a = (0, C.Xi)(t.config),
                    o = a?.messages.videoTitle ?? "video",
                    l = (0, y.JX)(t.config),
                    u = (0, y.Y7)(t.config);
                return D(
                    l && i
                        ? u
                            ? null != n
                                ? b.t.tXwfJT
                                : b.t["xqX+r5"]
                            : b.t["vs/xBu"]
                        : l || null != n
                          ? b.t["W/HkLO"]
                          : t.id === R.Fw
                            ? b.t.Rsd5bL
                            : b.t["g+InPC"],
                    { videoTitle: o, rewardNameWithArticle: s, duration: n },
                    r,
                );
            })({ quest: t, collectibleRewardDuration: A, hasNitro: g, withoutMarkdown: s, rewardNameWithArticle: S });
        else if ((0, C.vl)(t))
            return (function (e) {
                let { quest: t, taskDetails: n, withoutMarkdown: i, rewardNameWithArticle: r } = e,
                    s = n.targetMinutes;
                return (0, N._e)(t)
                    ? D(b.t.VYwSSu, { streamingDurationRequirement: s, questReward: r }, i)
                    : D(
                          b.t.UuzHh8,
                          {
                              activityName: t.config.messages.gameTitle,
                              streamingDurationRequirement: s,
                              questReward: r,
                          },
                          i,
                      );
            })({ quest: t, taskDetails: n, withoutMarkdown: s, rewardNameWithArticle: S });
        else if ((0, C.I6)(t) && null != i)
            return (function (e) {
                let t,
                    {
                        quest: n,
                        thirdPartyTaskDetails: i,
                        withoutMarkdown: r,
                        hasNitro: s,
                        collectibleRewardDuration: a,
                        onGameTitleClick: o,
                        rewardNameWithArticle: l,
                        needsToConnect: u,
                    } = e,
                    c = n.config.messages.gameTitle,
                    d = (0, y.JX)(n.config),
                    _ = (0, y.Y7)(n.config),
                    h = null != o;
                t = u
                    ? h
                        ? b.t["0SLl/G"]
                        : b.t.BlfaHK
                    : s && d
                      ? _
                          ? null != a
                              ? h
                                  ? b.t.uLVYG5
                                  : b.t.NdXW5c
                              : h
                                ? b.t["2Ctf1d"]
                                : b.t["8066TK"]
                          : null != a
                            ? h
                                ? b.t.yMEn77
                                : b.t["6FOKAX"]
                            : h
                              ? b.t.bxN0nx
                              : b.t.thO6iA
                      : d || null != a
                        ? h
                            ? b.t.ojhBxZ
                            : b.t["IACEB/"]
                        : h
                          ? b.t.bxN0nx
                          : b.t.thO6iA;
                let f = i.description;
                return D(
                    t,
                    {
                        gameTitle: c,
                        objective: u ? f.charAt(0).toLowerCase() + f.slice(1) : f,
                        duration: a,
                        questReward: l,
                        onGameTitleClick: o,
                    },
                    r,
                );
            })({
                quest: t,
                thirdPartyTaskDetails: i,
                withoutMarkdown: s,
                hasNitro: g,
                collectibleRewardDuration: A,
                onGameTitleClick: c,
                rewardNameWithArticle: S,
                needsToConnect: _,
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
                      c = (0, y.JX)(t.config),
                      d = (0, y.Y7)(t.config),
                      _ = null != a;
                  return D(
                      r && c
                          ? d
                              ? null != s
                                  ? _
                                      ? b.t["3RwRv8"]
                                      : b.t.TmKqHw
                                  : _
                                    ? b.t.l9yxDa
                                    : b.t["X8Yt/1"]
                              : _
                                ? b.t.eEuma3
                                : b.t.smG9ql
                          : c || null != s
                            ? _
                                ? b.t.Cko4a4
                                : b.t.BLyDvO
                            : _
                              ? b.t.ER9rII
                              : b.t["hkJ+Gs"],
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
                  hasNitro: g,
                  collectibleRewardDuration: A,
                  onGameTitleClick: c,
                  rewardNameWithArticle: S,
              });
    })({
        ...e,
        currentUser: i,
        withoutMarkdown: !1,
        thirdPartyTaskDetails: r ?? void 0,
        onGameTitleClick: _,
        needsToConnect: l,
    });
}
function k(e, t, n, i, r) {
    let s = (0, v.fc)(e),
        a = x({
            quest: e,
            taskDetails: s,
            location: n,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: i,
        }),
        o = e.userStatus?.claimedAt != null,
        l = (0, v.S5)(e.userStatus?.claimedAt);
    return o ? b.intl.formatToPlainString(b.t.lOVr0O, { claimDate: l }) : a;
}
function U(e) {
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
        I = t.userStatus?.enrolledAt != null,
        S = E.percentComplete > 0,
        O = (0, v.Vn)(t),
        D = x({
            quest: t,
            location: R.rE.QUESTS_BAR,
            taskDetails: E,
            sourceQuestContent: i,
            popoutTargetElementRef: o,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
            gameProfileSource: a.Ob.QuestBar,
        }),
        L = null != m ? m.percentComplete : E.percentComplete;
    if (A) return b.intl.formatToPlainString(b.t.APddvF, { expirationDate: p });
    if ((0, C.I6)(t) && !1 === d) return b.intl.string(b.t.mAdqf7);
    if (n) {
        if ((0, C.I6)(t) && !0 === d) {
            let e = t.config.messages.gameTitle;
            return null != h
                ? b.intl.format(b.t.X8hBDz, { gameTitle: e, onClickGameTitle: h })
                : b.intl.format(b.t.u3mdpP, { gameTitle: e });
        }
        if (r !== _.X0.SELECT && (0, N.ui)(t) && I && !S) {
            let e = (0, y.mH)(t.config, g);
            return b.intl.format(b.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: E.targetMinutes });
        }
        return D;
    }
    return (0, C.vv)(t)
        ? b.intl.string(b.t["o+e9yh"])
        : L > 0
          ? (0, C.I6)(t) && !0 === d
              ? b.intl.string(b.t.JkyCIO)
              : O
                ? (0, T.YT)({ quest: t, taskDetails: E, thirdPartyTaskDetails: m ?? void 0 })
                : b.intl.string(b.t.mOrpXG)
          : b.intl.string(b.t.S6UUc5);
}
function G(e, t) {
    let n = (0, s.bG)([l.default], () => l.default.locale),
        i = (0, v.fc)(e),
        [r] = (0, v.Qo)(e, i),
        a = (0, v.I3)(e),
        o = e.userStatus?.completedAt != null,
        u = null != a ? a.percentComplete : i.percentComplete;
    if (o) return b.intl.string(b.t["ij5E/5"]);
    if ((0, C.I6)(e) && !1 === t) return b.intl.string(b.t.s9r2a1);
    if ((0, C.I6)(e) && !0 === t && 0 === u) return b.intl.string(b.t["2+opCy"]);
    if (e.userStatus?.enrolledAt != null && u > 0) {
        let e = (0, c.l9)(n, u, { roundingMode: "floor" });
        return b.intl.formatToPlainString(b.t.lVZaXD, { percent: e });
    }
    return r === _.X0.SELECT
        ? b.intl.string(b.t.EMrUHQ)
        : (0, C.g5)(e)
          ? b.intl.string(b.t.mOrpXG)
          : b.intl.string(b.t["7e5k7L"]);
}
function F(e) {
    let { quest: t, application: n, shortText: r = !1 } = e,
        s = i.useMemo(
            () =>
                (function (e) {
                    return (0, C.g5)(e) || (0, C.vl)(e)
                        ? 0
                        : (0, C.fE)({ quest: e })
                          ? 1
                          : (0, C.IO)(e)
                            ? 2
                            : 3 * !!(0, C.Cr)(e);
                })(t),
            [t],
        ),
        a = (0, v.fc)(t);
    switch (s) {
        case 0:
            if (t.config.features.includes(R.Li.CLOUD_GAMING_ACTIVITY)) return b.intl.string(b.t["+qoymD"]);
            if ((0, N.vA)(t)) return b.intl.string(r ? b.t.E4kW5O : b.t["Ie9++s"]);
            return b.intl.string(b.t.l7E81v);
        case 1:
            return b.intl.string(b.t.l7E81v);
        case 2:
            return (0, I.WM)(a);
        case 3:
            return (0, N.vA)(t) && 1 ? b.intl.string(r ? b.t.CkUzLd : b.t["hRIVy+"]) : b.intl.string(b.t.l7E81v);
    }
}
function V(e) {
    let { quest: t, rewardCode: n } = e,
        i = (0, y.kr)({ quest: t }),
        r = n?.platform ?? _.pY.CROSS_PLATFORM,
        s = i ? (0, y.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, T.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != r ? o[r] : void 0;
}
function B(e) {
    let { quest: t, questContent: n, preCtaClick: s, impressionId: a, sourceQuestContent: o } = e;
    async function l() {
        await s?.(),
            (0, S.pu)(t, { content: n, ctaContent: g.Cy.OPEN_GAME_LINK, impressionId: a, sourceQuestContent: o });
    }
    let u = i.useMemo(() => {
        let e = t.config.ctaConfig?.subtitle;
        return null != e
            ? e
            : (0, C.I6)(t)
              ? t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME.messages.taskTitle
              : (0, N.pv)(t.config) !== r.Z.GAMEPLAY ||
                  t.config.features.includes(R.Li.NON_GAMING_PLAY_QUEST) ||
                  (0, N.ui)(t)
                ? b.intl.string(b.t.y8Xf3k)
                : b.intl.string(b.t["wirwN+"]);
    }, [t]);
    return {
        ctaText: (0, T.wr)(t),
        ctaVariant: "secondary",
        onClickCta: l,
        title: t.config.messages.gameTitle,
        subtitle: u,
        ctaIconPosition: "end",
    };
}
