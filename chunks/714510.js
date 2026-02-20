"use strict";
n.d(t, { NA: () => ee, VX: () => q, XR: () => et, gj: () => z, mU: () => K, tH: () => $, wT: () => M });
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
    f = n(537928),
    p = n(263362),
    h = n(868031),
    m = n(651892),
    E = n(92246),
    g = n(792620),
    A = n(814793),
    I = n(890687),
    T = n(654487),
    S = n(652215),
    y = n(788868),
    v = n(985018);
let N = "NVIDIA GeForce NOW";
function C(e, t, n) {
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
function R(e, t) {
    return (0, p.Kf)(e) && null != t ? v.t.u5QXpw : v.t.ztXW8V;
}
function O(e, t, n) {
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
function D(e, t) {
    return b(e, t, { base: v.t.ziB0HF, clickable: v.t.klYWbT, generic: v.t["8MeiQN"], clickableGeneric: v.t.iCwsvr });
}
function L(e, t) {
    return b(e, t, {
        base: v.t.AwuMRS,
        clickable: v.t["4JS2QJ"],
        generic: v.t.QUgT7p,
        clickableGeneric: v.t["1JyLzi"],
    });
}
function w(e, t) {
    return b(e, t, { base: v.t.FZL5Q5, clickable: v.t.NrD2h8, generic: v.t.z06Gxh, clickableGeneric: v.t.zLCg2e });
}
function x(e, t) {
    return b(e, t, { base: v.t.NIimTt, clickable: v.t.GFdaUK, generic: v.t.N3tNbI, clickableGeneric: v.t.k2srpz });
}
function M(e, t, n, r) {
    let { targetMinutes: i } = (0, I.fc)(e),
        s = (0, I.I3)(e),
        a = (0, I.BL)({ quest: e, questContent: n, sourceQuestContent: r }),
        o = (0, A.ui)(e);
    if ((0, g.g5)(e) && !(0, g.t)({ quest: e }))
        return v.intl.format(v.t["l4S+cQ"], { minutes: i, onClick: a, gameTitle: e.config.messages.gameTitle });
    if ((0, g.g5)(e))
        return o
            ? v.intl.format(v.t.gbtCpW, { onClick: a, minutes: i })
            : v.intl.format(v.t.Ajlcd7, { minutes: i, onClick: a, gameTitle: e.config.messages.gameTitle });
    if (o) return v.intl.format(v.t.Hu8SKW, { targetMinutes: i });
    if ((0, g.vv)(e)) {
        let t = (0, g.Xi)(e.config),
            n = t?.messages.videoTitle;
        return null == n ? v.intl.string(v.t["o+e9yh"]) : v.intl.formatToPlainString(v.t["9m9Mna"], { videoTitle: n });
    }
    if (null != s) return s.title;
    if ((0, g.vl)(e))
        if ((0, A._e)(e)) return v.intl.format(v.t["1NaRSs"], { minutes: i });
        else return v.intl.format(v.t.xHXCyf, { minutes: i, activityName: e.config.messages.gameTitle });
    let l = v.t["6zWtV8"];
    return (
        (0, g.t)({ quest: e }) &&
            (l = e.config.features.includes(T.Li.NON_GAMING_PLAY_QUEST) ? v.t.fe7Xec : v.t["wmOh/q"]),
        v.intl.format(l, { minutes: i, gameTitle: e.config.messages.gameTitle })
    );
}
function P(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: s,
            collectibleRewardDuration: a,
            onGameTitleClick: o,
            descriptionExperimentVariant: l,
        } = e,
        u = (0, E.mH)(n.config),
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, E.JX)(n.config),
        f = (0, E.Y7)(n.config),
        p = n.config.features.includes(T.Li.NON_GAMING_PLAY_QUEST),
        h = null != o;
    return C(
        (t =
            s && _
                ? f
                    ? p
                        ? R(l, a)
                        : O(l, a, h)
                    : p
                      ? v.t["1AcTqm"]
                      : D(l, h)
                : _ || null != a
                  ? p
                      ? v.t.enQ3jU
                      : L(l, h)
                  : p
                    ? v.t["e+K3xJ"]
                    : x(l, h)),
        {
            gameTitle: d,
            streamingDurationRequirement: c,
            rewardNameWithArticle: u,
            duration: a,
            targetMinutes: c,
            onGameTitleClick: o,
        },
        i,
    );
}
function k(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: s,
            collectibleRewardDuration: a,
            onGameTitleClick: o,
            descriptionExperimentVariant: l,
        } = e,
        u = (0, E.mH)(n.config),
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, E.JX)(n.config),
        f = (0, E.Y7)(n.config),
        p = null != o;
    return C(
        (t = s && _ ? (f ? O(l, a, p) : D(l, p)) : _ || null != a ? L(l, p) : x(l, p)),
        {
            gameTitle: d,
            targetMinutes: c,
            rewardNameWithArticle: u,
            duration: a,
            streamingDurationRequirement: c,
            onGameTitleClick: o,
        },
        i,
    );
}
function U(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: s,
            collectibleRewardDuration: a,
            onGameTitleClick: o,
            descriptionExperimentVariant: l,
        } = e,
        u = (0, E.mH)(n.config),
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, E.JX)(n.config),
        f = (0, E.Y7)(n.config),
        p = n.config.features.includes(T.Li.NON_GAMING_PLAY_QUEST),
        h = null != o;
    return C(
        (t =
            s && _
                ? f
                    ? p
                        ? R(l, a)
                        : O(l, a, h)
                    : p
                      ? v.t["1AcTqm"]
                      : D(l, h)
                : _ || null != a
                  ? p
                      ? v.t.enQ3jU
                      : L(l, h)
                  : p
                    ? v.t["03VJqu"]
                    : w(l, h)),
        {
            gameTitle: d,
            streamingDurationRequirement: c,
            rewardNameWithArticle: u,
            duration: a,
            questReward: u,
            onGameTitleClick: o,
        },
        i,
    );
}
function G(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, onGameTitleClick: i } = e,
        { targetMinutes: s } = n,
        a = t.config.messages.gameTitle;
    return C(
        null != i ? v.t.HHVg4i : v.t["a/ia7F"],
        { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: i },
        r,
    );
}
function F(e, t, n, r, i) {
    let s,
        a = (0, g.Xi)(e.config),
        o = a?.messages.videoTitle ?? "video",
        l = (0, E.mH)(e.config),
        u = (0, E.JX)(e.config),
        c = (0, E.Y7)(e.config);
    return C(
        (s =
            u && n
                ? c
                    ? (0, p.Kf)(i) && null != t
                        ? v.t.tXwfJT
                        : v.t["xqX+r5"]
                    : v.t["vs/xBu"]
                : u || null != t
                  ? v.t["W/HkLO"]
                  : e.id === T.Fw
                    ? v.t.Rsd5bL
                    : v.t["g+InPC"]),
        { videoTitle: o, rewardNameWithArticle: l, duration: t },
        r,
    );
}
function V(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        s = n.targetMinutes,
        a = (0, E.mH)(t.config);
    return (0, A._e)(t)
        ? C(v.t.VYwSSu, { streamingDurationRequirement: s, questReward: a }, r)
        : t.config.features.includes(T.Li.CLOUD_GAMING_ACTIVITY)
          ? i === _.uF.QUESTS_EMBED
              ? C(
                    v.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: N,
                        providerLink: u.A.getArticleURL(S.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: a,
                    },
                    r,
                )
              : C(
                    v.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: N,
                        providerLink: u.A.getArticleURL(S.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: s,
                        questReward: a,
                    },
                    r,
                )
          : C(
                v.t.UuzHh8,
                { activityName: t.config.messages.gameTitle, streamingDurationRequirement: s, questReward: a },
                r,
            );
}
function B(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: s,
            collectibleRewardDuration: a,
            onGameTitleClick: o,
            descriptionExperimentVariant: l,
        } = e,
        u = (0, E.mH)(n.config),
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, E.JX)(n.config),
        f = (0, E.Y7)(n.config),
        h = null != o;
    return C(
        (t =
            s && _
                ? f
                    ? (0, p.Kf)(l) && null != a
                        ? h
                            ? v.t["3RwRv8"]
                            : v.t.TmKqHw
                        : h
                          ? v.t.l9yxDa
                          : v.t["X8Yt/1"]
                    : h
                      ? v.t.eEuma3
                      : v.t.smG9ql
                : _ || null != a
                  ? h
                      ? v.t.Cko4a4
                      : v.t.BLyDvO
                  : h
                    ? v.t.ER9rII
                    : v.t["hkJ+Gs"]),
        { gameTitle: d, streamingDurationRequirement: c, duration: a, questReward: u, onGameTitleClick: o },
        i,
    );
}
function H(e) {
    let { quest: t, gameSheetHook: n, rewardNameWithArticle: r, targetMinutes: i } = e,
        s = {
            [T.Li.PACKAGE_ACTION_ADVENTURE]: v.t.H485IA,
            [T.Li.PACKAGE_RPG_MMO]: v.t["3XS8Ni"],
            [T.Li.PACKAGE_RACING_SPORTS]: v.t["X+UCju"],
            [T.Li.PACKAGE_SANDBOX_CREATIVE]: v.t["6o4n1Q"],
            [T.Li.PACKAGE_FAMILY_FRIENDLY]: v.t.DUsNmf,
            [T.Li.PACKAGE_HOLIDAY_SEASON]: v.t["cWP8/Z"],
            [T.Li.PACKAGE_NEW_YEARS]: v.t["8+sIJz"],
        },
        a = t.config.features.find((e) => e in s),
        o = (null != a ? s[a] : null) ?? v.t.CDeHul;
    return v.intl.format(o, { rewardNameWithArticle: r, targetMinutes: i, gameSheetHook: n });
}
function j(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: s,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
        } = e,
        l = (0, E.mH)(t.config),
        { targetMinutes: u, applications: c } = n;
    if (i) return v.intl.formatToPlainString(v.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
    let d = (0, f.z)({
        quest: t,
        sourceQuestContent: r,
        applications: c ?? [],
        popoutTargetElementRef: s,
        onGameSheetOpened: a,
        onGameSheetClosed: o,
    });
    return H({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
}
function Y(e) {
    let {
            quest: t,
            taskDetails: n,
            questContent: r,
            thirdPartyTaskDetails: i,
            sourceQuestContent: s,
            withoutMarkdown: a,
            currentUser: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            onGameTitleClick: _,
            descriptionExperimentVariant: f,
        } = e,
        p = (0, d.ki)(o, y.PremiumTypes.TIER_2),
        h = (0, E.k5)(t.config),
        m = (0, g.g5)(t) && (0, g.xZ)(t);
    if ((0, A.ui)(t))
        return j({
            quest: t,
            taskDetails: n,
            sourceQuestContent: s,
            withoutMarkdown: a,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
        });
    if (m)
        return P({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: p,
            collectibleRewardDuration: h,
            onGameTitleClick: _,
            descriptionExperimentVariant: f,
        });
    if ((0, g.g5)(t))
        return k({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: p,
            collectibleRewardDuration: h,
            onGameTitleClick: _,
            descriptionExperimentVariant: f,
        });
    if ((0, g.xZ)(t))
        return U({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: p,
            collectibleRewardDuration: h,
            onGameTitleClick: _,
            descriptionExperimentVariant: f,
        });
    if ((0, E.kr)({ quest: t })) return G({ quest: t, taskDetails: n, withoutMarkdown: a, onGameTitleClick: _ });
    else if ((0, g.vv)(t)) return F(t, h, p, a, f);
    else if ((0, g.vl)(t)) return V({ quest: t, taskDetails: n, withoutMarkdown: a, questContent: r });
    return null != i
        ? i.description
        : B({
              quest: t,
              taskDetails: n,
              withoutMarkdown: a,
              hasNitro: p,
              collectibleRewardDuration: h,
              onGameTitleClick: _,
              descriptionExperimentVariant: f,
          });
}
function W(e) {
    return Y({
        ...e,
        currentUser: e.currentUser ?? l.default.getCurrentUser(),
        popoutTargetElementRef: e.popoutTargetElementRef,
        onGameSheetOpened: e.onGameSheetOpened,
        onGameSheetClosed: e.onGameSheetClosed,
        onGameTitleClick: e.onGameTitleClick,
        descriptionExperimentVariant: e.descriptionExperimentVariant,
    });
}
function K(e) {
    let { quest: t, questContent: n, sourceQuestContent: r, gameProfileSource: o, location: u } = e,
        c = (0, I.BL)({ quest: t, questContent: n, sourceQuestContent: r }),
        d = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        _ = (0, I.I3)(t),
        f = (0, g._3)(t)?.[0],
        h = (0, a.A)({ applicationId: f, location: T.rE.QUEST_INSTRUCTIONS, source: o ?? s.Ob.QuestHome }),
        m = !0,
        { variant: E } = p.au.useConfig({ location: u });
    return W({
        ...e,
        connectedConsoleLinkOnClick: c,
        currentUser: d,
        withoutMarkdown: !1,
        thirdPartyTaskDetails: _ ?? void 0,
        onGameTitleClick: m ? h : void 0,
        descriptionExperimentVariant: E,
    });
}
function z(e, t, n, r) {
    let i = (0, I.fc)(e),
        s = (0, g.JC)(e),
        a = K({
            quest: e,
            taskDetails: i,
            location: T.rE.QUEST_HOME_DESKTOP,
            questContent: _.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: n,
        }),
        o = e.userStatus?.claimedAt != null,
        l = (0, I.S5)(e.userStatus?.claimedAt);
    return o
        ? v.intl.formatToPlainString(v.t.lOVr0O, { claimDate: l })
        : null != s
          ? s.description
          : null != a
            ? a
            : null;
}
function $(e) {
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
        c = (0, I.S5)(u),
        d = (0, I.fc)(t),
        f = (0, I.I3)(t),
        p = t.userStatus?.completedAt != null,
        h = t.userStatus?.enrolledAt != null,
        S = d.percentComplete > 0,
        y = (0, I.Vn)(t),
        N = K({
            quest: t,
            location: T.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: r,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            gameProfileSource: s.Ob.QuestBar,
        }),
        C = null != f ? f.percentComplete : d.percentComplete;
    if (p) return v.intl.formatToPlainString(v.t.APddvF, { expirationDate: c });
    if (n)
        if (i === _.X0.SELECT) return v.intl.string(v.t.sWUpN8);
        else {
            if (!(0, A.ui)(t) || !h || S) return N;
            let e = (0, E.mH)(t.config);
            return v.intl.format(v.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
    if ((0, g.vv)(t)) return v.intl.string(v.t["o+e9yh"]);
    if (C > 0)
        if (!y) return v.intl.string(v.t.mOrpXG);
        else return (0, m.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: f ?? void 0 });
    return v.intl.string(v.t.S6UUc5);
}
function q(e) {
    let t = (0, i.bG)([o.default], () => o.default.locale),
        n = (0, I.fc)(e),
        [r] = (0, I.Qo)(e, n),
        s = (0, I.I3)(e),
        a = e.userStatus?.completedAt != null,
        l = null != s ? s.percentComplete : n.percentComplete;
    if (a) return v.intl.string(v.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && l > 0) {
        let e = (0, c.l9)(t, l, { roundingMode: "floor" });
        return v.intl.formatToPlainString(v.t.lVZaXD, { percent: e });
    }
    return r === _.X0.SELECT
        ? v.intl.string(v.t.EMrUHQ)
        : (0, g.g5)(e)
          ? v.intl.string(v.t.mOrpXG)
          : v.intl.string(v.t["7e5k7L"]);
}
function Z(e) {
    return (0, g.IO)(e);
}
function X(e) {
    return (0, g.g5)(e) || (0, g.vl)(e) ? 0 : (0, g.fE)({ quest: e }) ? 1 : Z(e) ? 2 : 3 * !!(0, g.Cr)(e);
}
function Q(e) {
    return r.useMemo(() => X(e), [e]);
}
function J(e, t) {
    return !0;
}
function ee(e) {
    let { quest: t, application: n, shortText: r = !1 } = e;
    switch (Q(t)) {
        case 0:
            if (J(t, n)) {
                if (t.config.features.includes(T.Li.CLOUD_GAMING_ACTIVITY)) return v.intl.string(v.t["+qoymD"]);
                if (t.config.features.includes(T.Li.START_QUEST_CTA))
                    return v.intl.string(r ? v.t.E4kW5O : v.t["Ie9++s"]);
            }
            return v.intl.string(v.t.l7E81v);
        case 1:
            return v.intl.string(v.t.l7E81v);
        case 2:
            return (0, h.WB)(t);
        case 3:
            return t.config.features.includes(T.Li.START_QUEST_CTA) && J(t, n)
                ? v.intl.string(r ? v.t.CkUzLd : v.t["hRIVy+"])
                : v.intl.string(v.t.l7E81v);
    }
}
function et(e) {
    let { quest: t, rewardCode: n } = e,
        r = (0, E.kr)({ quest: t }),
        i = n?.platform ?? _.pY.CROSS_PLATFORM,
        s = r ? (0, E.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, m.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != i ? o[i] : void 0;
}
