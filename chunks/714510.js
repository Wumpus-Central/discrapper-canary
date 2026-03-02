"use strict";
n.d(t, { NA: () => J, VX: () => z, XR: () => ee, gj: () => K, mU: () => W, tH: () => $, wT: () => x });
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
    h = n(651892),
    m = n(92246),
    E = n(792620),
    g = n(814793),
    A = n(890687),
    I = n(654487),
    T = n(652215),
    S = n(788868),
    y = n(985018);
let v = "NVIDIA GeForce NOW";
function N(e, t, n) {
    return n ? y.intl.formatToPlainString(e, t) : y.intl.format(e, t);
}
function C(e, t, n) {
    return e === p.JC.WITH_REWARD_DURATION_NO_GAME_TITLE
        ? t
            ? n.clickableGeneric
            : n.generic
        : t
          ? n.clickable
          : n.base;
}
function R(e, t) {
    return (0, p.Kf)(e) && null != t ? y.t.u5QXpw : y.t.ztXW8V;
}
function O(e, t, n) {
    if (null === t) return n ? y.t.tQoqXX : y.t["eb/Sna"];
    switch (e) {
        case p.JC.WITH_REWARD_DURATION_NO_GAME_TITLE:
            return n ? y.t.t6Z9I2 : y.t.bPGn8F;
        case p.JC.WITH_REWARD_DURATION:
            return n ? y.t["/4XT0b"] : y.t["0hwcvM"];
        default:
            return n ? y.t.tQoqXX : y.t["eb/Sna"];
    }
}
function b(e, t) {
    return C(e, t, { base: y.t.ziB0HF, clickable: y.t.klYWbT, generic: y.t["8MeiQN"], clickableGeneric: y.t.iCwsvr });
}
function D(e, t) {
    return C(e, t, {
        base: y.t.AwuMRS,
        clickable: y.t["4JS2QJ"],
        generic: y.t.QUgT7p,
        clickableGeneric: y.t["1JyLzi"],
    });
}
function L(e, t) {
    return C(e, t, { base: y.t.FZL5Q5, clickable: y.t.NrD2h8, generic: y.t.z06Gxh, clickableGeneric: y.t.zLCg2e });
}
function w(e, t) {
    return C(e, t, { base: y.t.NIimTt, clickable: y.t.GFdaUK, generic: y.t.N3tNbI, clickableGeneric: y.t.k2srpz });
}
function x(e, t, n, r) {
    let { targetMinutes: i } = (0, A.fc)(e),
        s = (0, A.I3)(e),
        a = (0, A.BL)({ quest: e, questContent: n, sourceQuestContent: r }),
        o = (0, g.ui)(e);
    if ((0, E.g5)(e) && !(0, E.t)({ quest: e }))
        return y.intl.format(y.t["l4S+cQ"], { minutes: i, onClick: a, gameTitle: e.config.messages.gameTitle });
    if ((0, E.g5)(e))
        return o
            ? y.intl.format(y.t.gbtCpW, { onClick: a, minutes: i })
            : y.intl.format(y.t.Ajlcd7, { minutes: i, onClick: a, gameTitle: e.config.messages.gameTitle });
    if (o) return y.intl.format(y.t.Hu8SKW, { targetMinutes: i });
    if ((0, E.vv)(e)) {
        let t = (0, E.Xi)(e.config),
            n = t?.messages.videoTitle;
        return null == n ? y.intl.string(y.t["o+e9yh"]) : y.intl.formatToPlainString(y.t["9m9Mna"], { videoTitle: n });
    }
    if (null != s) return s.title;
    if ((0, E.vl)(e))
        if ((0, g._e)(e)) return y.intl.format(y.t["1NaRSs"], { minutes: i });
        else return y.intl.format(y.t.xHXCyf, { minutes: i, activityName: e.config.messages.gameTitle });
    let l = y.t["6zWtV8"];
    return (
        (0, E.t)({ quest: e }) &&
            (l = e.config.features.includes(I.Li.NON_GAMING_PLAY_QUEST) ? y.t.fe7Xec : y.t["wmOh/q"]),
        y.intl.format(l, { minutes: i, gameTitle: e.config.messages.gameTitle })
    );
}
function M(e) {
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
        u = (0, m.mH)(n.config),
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, m.JX)(n.config),
        f = (0, m.Y7)(n.config),
        p = n.config.features.includes(I.Li.NON_GAMING_PLAY_QUEST),
        h = null != o;
    return N(
        (t =
            s && _
                ? f
                    ? p
                        ? R(l, a)
                        : O(l, a, h)
                    : p
                      ? y.t["1AcTqm"]
                      : b(l, h)
                : _ || null != a
                  ? p
                      ? y.t.enQ3jU
                      : D(l, h)
                  : p
                    ? y.t["e+K3xJ"]
                    : w(l, h)),
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
        u = (0, m.mH)(n.config),
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, m.JX)(n.config),
        f = (0, m.Y7)(n.config),
        p = null != o;
    return N(
        (t = s && _ ? (f ? O(l, a, p) : b(l, p)) : _ || null != a ? D(l, p) : w(l, p)),
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
        u = (0, m.mH)(n.config),
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, m.JX)(n.config),
        f = (0, m.Y7)(n.config),
        p = n.config.features.includes(I.Li.NON_GAMING_PLAY_QUEST),
        h = null != o;
    return N(
        (t =
            s && _
                ? f
                    ? p
                        ? R(l, a)
                        : O(l, a, h)
                    : p
                      ? y.t["1AcTqm"]
                      : b(l, h)
                : _ || null != a
                  ? p
                      ? y.t.enQ3jU
                      : D(l, h)
                  : p
                    ? y.t["03VJqu"]
                    : L(l, h)),
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
function U(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, onGameTitleClick: i } = e,
        { targetMinutes: s } = n,
        a = t.config.messages.gameTitle;
    return N(
        null != i ? y.t.HHVg4i : y.t["a/ia7F"],
        { gameTitle: a, streamingDurationRequirement: s, onGameTitleClick: i },
        r,
    );
}
function G(e, t, n, r, i) {
    let s,
        a = (0, E.Xi)(e.config),
        o = a?.messages.videoTitle ?? "video",
        l = (0, m.mH)(e.config),
        u = (0, m.JX)(e.config),
        c = (0, m.Y7)(e.config);
    return N(
        (s =
            u && n
                ? c
                    ? (0, p.Kf)(i) && null != t
                        ? y.t.tXwfJT
                        : y.t["xqX+r5"]
                    : y.t["vs/xBu"]
                : u || null != t
                  ? y.t["W/HkLO"]
                  : e.id === I.Fw
                    ? y.t.Rsd5bL
                    : y.t["g+InPC"]),
        { videoTitle: o, rewardNameWithArticle: l, duration: t },
        r,
    );
}
function F(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        s = n.targetMinutes,
        a = (0, m.mH)(t.config);
    return (0, g._e)(t)
        ? N(y.t.VYwSSu, { streamingDurationRequirement: s, questReward: a }, r)
        : t.config.features.includes(I.Li.CLOUD_GAMING_ACTIVITY)
          ? i === _.uF.QUESTS_EMBED
              ? N(
                    y.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: v,
                        providerLink: u.A.getArticleURL(T.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: a,
                    },
                    r,
                )
              : N(
                    y.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: v,
                        providerLink: u.A.getArticleURL(T.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: s,
                        questReward: a,
                    },
                    r,
                )
          : N(
                y.t.UuzHh8,
                { activityName: t.config.messages.gameTitle, streamingDurationRequirement: s, questReward: a },
                r,
            );
}
function V(e) {
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
        u = (0, m.mH)(n.config),
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, m.JX)(n.config),
        f = (0, m.Y7)(n.config),
        h = null != o;
    return N(
        (t =
            s && _
                ? f
                    ? (0, p.Kf)(l) && null != a
                        ? h
                            ? y.t["3RwRv8"]
                            : y.t.TmKqHw
                        : h
                          ? y.t.l9yxDa
                          : y.t["X8Yt/1"]
                    : h
                      ? y.t.eEuma3
                      : y.t.smG9ql
                : _ || null != a
                  ? h
                      ? y.t.Cko4a4
                      : y.t.BLyDvO
                  : h
                    ? y.t.ER9rII
                    : y.t["hkJ+Gs"]),
        { gameTitle: d, streamingDurationRequirement: c, duration: a, questReward: u, onGameTitleClick: o },
        i,
    );
}
function B(e) {
    let { quest: t, gameSheetHook: n, rewardNameWithArticle: r, targetMinutes: i } = e,
        s = {
            [I.Li.PACKAGE_ACTION_ADVENTURE]: y.t.H485IA,
            [I.Li.PACKAGE_RPG_MMO]: y.t["3XS8Ni"],
            [I.Li.PACKAGE_RACING_SPORTS]: y.t["X+UCju"],
            [I.Li.PACKAGE_SANDBOX_CREATIVE]: y.t["6o4n1Q"],
            [I.Li.PACKAGE_FAMILY_FRIENDLY]: y.t.DUsNmf,
            [I.Li.PACKAGE_HOLIDAY_SEASON]: y.t["cWP8/Z"],
            [I.Li.PACKAGE_NEW_YEARS]: y.t["8+sIJz"],
        },
        a = t.config.features.find((e) => e in s),
        o = (null != a ? s[a] : null) ?? y.t.CDeHul;
    return y.intl.format(o, { rewardNameWithArticle: r, targetMinutes: i, gameSheetHook: n });
}
function H(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: s,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
        } = e,
        l = (0, m.mH)(t.config),
        { targetMinutes: u, applications: c } = n;
    if (i) return y.intl.formatToPlainString(y.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
    let d = (0, f.z)({
        quest: t,
        sourceQuestContent: r,
        applications: c ?? [],
        popoutTargetElementRef: s,
        onGameSheetOpened: a,
        onGameSheetClosed: o,
    });
    return B({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
}
function j(e) {
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
        p = (0, d.ki)(o, S.PremiumTypes.TIER_2),
        h = (0, m.k5)(t.config),
        A = (0, E.g5)(t) && (0, E.xZ)(t);
    if ((0, g.ui)(t))
        return H({
            quest: t,
            taskDetails: n,
            sourceQuestContent: s,
            withoutMarkdown: a,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
        });
    if (A)
        return M({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: p,
            collectibleRewardDuration: h,
            onGameTitleClick: _,
            descriptionExperimentVariant: f,
        });
    if ((0, E.g5)(t))
        return P({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: p,
            collectibleRewardDuration: h,
            onGameTitleClick: _,
            descriptionExperimentVariant: f,
        });
    if ((0, E.xZ)(t))
        return k({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: p,
            collectibleRewardDuration: h,
            onGameTitleClick: _,
            descriptionExperimentVariant: f,
        });
    if ((0, m.kr)({ quest: t })) return U({ quest: t, taskDetails: n, withoutMarkdown: a, onGameTitleClick: _ });
    else if ((0, E.vv)(t)) return G(t, h, p, a, f);
    else if ((0, E.vl)(t)) return F({ quest: t, taskDetails: n, withoutMarkdown: a, questContent: r });
    return null != i
        ? i.description
        : V({
              quest: t,
              taskDetails: n,
              withoutMarkdown: a,
              hasNitro: p,
              collectibleRewardDuration: h,
              onGameTitleClick: _,
              descriptionExperimentVariant: f,
          });
}
function Y(e) {
    return j({
        ...e,
        currentUser: e.currentUser ?? l.default.getCurrentUser(),
        popoutTargetElementRef: e.popoutTargetElementRef,
        onGameSheetOpened: e.onGameSheetOpened,
        onGameSheetClosed: e.onGameSheetClosed,
        onGameTitleClick: e.onGameTitleClick,
        descriptionExperimentVariant: e.descriptionExperimentVariant,
    });
}
function W(e) {
    let { quest: t, questContent: n, sourceQuestContent: r, gameProfileSource: o, location: u } = e,
        c = (0, A.BL)({ quest: t, questContent: n, sourceQuestContent: r }),
        d = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        _ = (0, A.I3)(t),
        f = (0, E._3)(t)?.[0],
        h = (0, a.A)({ applicationId: f, location: I.rE.QUEST_INSTRUCTIONS, source: o ?? s.Ob.QuestHome }),
        m = !0,
        { variant: g } = p.au.useConfig({ location: u });
    return Y({
        ...e,
        connectedConsoleLinkOnClick: c,
        currentUser: d,
        withoutMarkdown: !1,
        thirdPartyTaskDetails: _ ?? void 0,
        onGameTitleClick: m ? h : void 0,
        descriptionExperimentVariant: g,
    });
}
function K(e, t, n, r) {
    let i = (0, A.fc)(e),
        s = (0, E.JC)(e),
        a = W({
            quest: e,
            taskDetails: i,
            location: I.rE.QUEST_HOME_DESKTOP,
            questContent: _.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: n,
        }),
        o = e.userStatus?.claimedAt != null,
        l = (0, A.S5)(e.userStatus?.claimedAt);
    return o
        ? y.intl.formatToPlainString(y.t.lOVr0O, { claimDate: l })
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
        c = (0, A.S5)(u),
        d = (0, A.fc)(t),
        f = (0, A.I3)(t),
        p = t.userStatus?.completedAt != null,
        T = t.userStatus?.enrolledAt != null,
        S = d.percentComplete > 0,
        v = (0, A.Vn)(t),
        N = W({
            quest: t,
            location: I.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: r,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            gameProfileSource: s.Ob.QuestBar,
        }),
        C = null != f ? f.percentComplete : d.percentComplete;
    if (p) return y.intl.formatToPlainString(y.t.APddvF, { expirationDate: c });
    if (n)
        if (i === _.X0.SELECT) return y.intl.string(y.t.sWUpN8);
        else {
            if (!(0, g.ui)(t) || !T || S) return N;
            let e = (0, m.mH)(t.config);
            return y.intl.format(y.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
    if ((0, E.vv)(t)) return y.intl.string(y.t["o+e9yh"]);
    if (C > 0)
        if (!v) return y.intl.string(y.t.mOrpXG);
        else return (0, h.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: f ?? void 0 });
    return y.intl.string(y.t.S6UUc5);
}
function z(e) {
    let t = (0, i.bG)([o.default], () => o.default.locale),
        n = (0, A.fc)(e),
        [r] = (0, A.Qo)(e, n),
        s = (0, A.I3)(e),
        a = e.userStatus?.completedAt != null,
        l = null != s ? s.percentComplete : n.percentComplete;
    if (a) return y.intl.string(y.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && l > 0) {
        let e = (0, c.l9)(t, l, { roundingMode: "floor" });
        return y.intl.formatToPlainString(y.t.lVZaXD, { percent: e });
    }
    return r === _.X0.SELECT
        ? y.intl.string(y.t.EMrUHQ)
        : (0, E.g5)(e)
          ? y.intl.string(y.t.mOrpXG)
          : y.intl.string(y.t["7e5k7L"]);
}
function q(e) {
    return (0, E.IO)(e);
}
function Z(e) {
    return (0, E.g5)(e) || (0, E.vl)(e) ? 0 : (0, E.fE)({ quest: e }) ? 1 : q(e) ? 2 : 3 * !!(0, E.Cr)(e);
}
function X(e) {
    return r.useMemo(() => Z(e), [e]);
}
function Q(e, t) {
    return !0;
}
function J(e) {
    let { quest: t, application: n, shortText: r = !1 } = e,
        i = X(t),
        s = (0, A.fc)(t);
    switch (i) {
        case 0:
            if (Q(t, n)) {
                if (t.config.features.includes(I.Li.CLOUD_GAMING_ACTIVITY)) return y.intl.string(y.t["+qoymD"]);
                if (t.config.features.includes(I.Li.START_QUEST_CTA))
                    return y.intl.string(r ? y.t.E4kW5O : y.t["Ie9++s"]);
            }
            return y.intl.string(y.t.l7E81v);
        case 1:
            return y.intl.string(y.t.l7E81v);
        case 2:
            return y.intl.formatToPlainString(y.t.GNsKiW, { remainTime: (0, E.xm)(s) });
        case 3:
            return t.config.features.includes(I.Li.START_QUEST_CTA) && Q(t, n)
                ? y.intl.string(r ? y.t.CkUzLd : y.t["hRIVy+"])
                : y.intl.string(y.t.l7E81v);
    }
}
function ee(e) {
    let { quest: t, rewardCode: n } = e,
        r = (0, m.kr)({ quest: t }),
        i = n?.platform ?? _.pY.CROSS_PLATFORM,
        s = r ? (0, m.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        a = (0, h.xv)(t.config),
        o = s?.messages?.redemptionInstructionsByPlatform ?? a.messages.redemptionInstructionsByPlatform;
    return null != i ? o[i] : void 0;
}
