"use strict";
n.d(t, { NA: () => z, VX: () => j, XR: () => $, gj: () => F, mU: () => V, tH: () => B, wT: () => N });
var r = n(64700),
    i = n(311907);
n(166352);
var a = n(409626),
    s = n(692969),
    o = n(773669),
    l = n(287809),
    u = n(975571),
    c = n(252424),
    d = n(474090),
    _ = n(341915),
    f = n(537928),
    p = n(245853),
    h = n(868031),
    m = n(651892),
    g = n(92246),
    E = n(792620),
    A = n(814793),
    I = n(890687),
    T = n(654487),
    y = n(652215),
    S = n(788868),
    v = n(985018);
let C = "NVIDIA GeForce NOW";
function b(e, t, n) {
    return n ? v.intl.formatToPlainString(e, t) : v.intl.format(e, t);
}
function N(e, t, n, r) {
    let { targetMinutes: i } = (0, I.fc)(e),
        a = (0, I.I3)(e),
        s = (0, I.BL)({ quest: e, questContent: n, sourceQuestContent: r }),
        o = (0, A.ui)(e);
    if ((0, E.g5)(e) && !(0, E.t)({ quest: e }))
        return v.intl.format(v.t["l4S+cQ"], { minutes: i, onClick: s, gameTitle: e.config.messages.gameTitle });
    if ((0, E.g5)(e))
        return o
            ? v.intl.format(v.t.gbtCpW, { onClick: s, minutes: i })
            : v.intl.format(v.t.Ajlcd7, { minutes: i, onClick: s, gameTitle: e.config.messages.gameTitle });
    if (o) return v.intl.format(v.t.Hu8SKW, { targetMinutes: i });
    if ((0, E.vv)(e)) {
        let t = (0, E.Xi)(e.config),
            n = t?.messages.videoTitle;
        return null == n ? v.intl.string(v.t["o+e9yh"]) : v.intl.formatToPlainString(v.t["9m9Mna"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, E.vl)(e))
        if ((0, A._e)(e)) return v.intl.format(v.t["1NaRSs"], { minutes: i });
        else return v.intl.format(v.t.xHXCyf, { minutes: i, activityName: e.config.messages.gameTitle });
    let l = v.t["6zWtV8"];
    return (
        (0, E.t)({ quest: e }) &&
            (l = e.config.features.includes(T.Li.NON_GAMING_PLAY_QUEST) ? v.t.fe7Xec : v.t["wmOh/q"]),
        v.intl.format(l, { minutes: i, gameTitle: e.config.messages.gameTitle })
    );
}
function R(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: a,
            collectibleRewardDuration: s,
            onGameTitleClick: o,
        } = e,
        l = (0, g.mH)(n.config),
        { targetMinutes: u } = r,
        c = n.config.messages.gameTitle,
        d = (0, g.JX)(n.config),
        _ = (0, g.Y7)(n.config),
        f = n.config.features.includes(T.Li.NON_GAMING_PLAY_QUEST),
        p = null != o;
    return b(
        (t =
            a && d
                ? _
                    ? f
                        ? v.t.ztXW8V
                        : p
                          ? v.t.tQoqXX
                          : v.t["eb/Sna"]
                    : f
                      ? v.t["1AcTqm"]
                      : p
                        ? v.t.klYWbT
                        : v.t.ziB0HF
                : d || null != s
                  ? f
                      ? v.t.enQ3jU
                      : p
                        ? v.t["4JS2QJ"]
                        : v.t.AwuMRS
                  : f
                    ? v.t["e+K3xJ"]
                    : p
                      ? v.t.GFdaUK
                      : v.t.NIimTt),
        {
            gameTitle: c,
            streamingDurationRequirement: u,
            rewardNameWithArticle: l,
            duration: s,
            targetMinutes: u,
            onGameTitleClick: o,
        },
        i,
    );
}
function O(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: a,
            collectibleRewardDuration: s,
            onGameTitleClick: o,
        } = e,
        l = (0, g.mH)(n.config),
        { targetMinutes: u } = r,
        c = n.config.messages.gameTitle,
        d = (0, g.JX)(n.config),
        _ = (0, g.Y7)(n.config),
        f = null != o;
    return b(
        (t =
            a && d
                ? _
                    ? f
                        ? v.t.tQoqXX
                        : v.t["eb/Sna"]
                    : f
                      ? v.t.klYWbT
                      : v.t.ziB0HF
                : d || null != s
                  ? f
                      ? v.t["4JS2QJ"]
                      : v.t.AwuMRS
                  : f
                    ? v.t.GFdaUK
                    : v.t.NIimTt),
        {
            gameTitle: c,
            targetMinutes: u,
            rewardNameWithArticle: l,
            duration: s,
            streamingDurationRequirement: u,
            onGameTitleClick: o,
        },
        i,
    );
}
function D(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: a,
            collectibleRewardDuration: s,
            onGameTitleClick: o,
        } = e,
        l = (0, g.mH)(n.config),
        { targetMinutes: u } = r,
        c = n.config.messages.gameTitle,
        d = (0, g.JX)(n.config),
        _ = (0, g.Y7)(n.config),
        f = n.config.features.includes(T.Li.NON_GAMING_PLAY_QUEST),
        p = null != o;
    return b(
        (t =
            a && d
                ? _
                    ? f
                        ? v.t.ztXW8V
                        : p
                          ? v.t.tQoqXX
                          : v.t["eb/Sna"]
                    : f
                      ? v.t["1AcTqm"]
                      : p
                        ? v.t.klYWbT
                        : v.t.ziB0HF
                : d || null != s
                  ? f
                      ? v.t.enQ3jU
                      : p
                        ? v.t["4JS2QJ"]
                        : v.t.AwuMRS
                  : f
                    ? v.t["03VJqu"]
                    : p
                      ? v.t.NrD2h8
                      : v.t.FZL5Q5),
        {
            gameTitle: c,
            streamingDurationRequirement: u,
            rewardNameWithArticle: l,
            duration: s,
            questReward: l,
            onGameTitleClick: o,
        },
        i,
    );
}
function L(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, onGameTitleClick: i } = e,
        { targetMinutes: a } = n,
        s = t.config.messages.gameTitle;
    return b(
        null != i ? v.t.HHVg4i : v.t["a/ia7F"],
        { gameTitle: s, streamingDurationRequirement: a, onGameTitleClick: i },
        r,
    );
}
function w(e, t, n, r) {
    let i,
        a = (0, E.Xi)(e.config),
        s = a?.messages.videoTitle ?? "video",
        o = (0, g.mH)(e.config),
        l = (0, g.JX)(e.config),
        u = (0, g.Y7)(e.config);
    return b(
        (i =
            l && n
                ? u
                    ? v.t["xqX+r5"]
                    : v.t["vs/xBu"]
                : l || null != t
                  ? v.t["W/HkLO"]
                  : e.id === T.Fw
                    ? v.t.Rsd5bL
                    : v.t["g+InPC"]),
        { videoTitle: s, rewardNameWithArticle: o, duration: t },
        r,
    );
}
function x(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        s = (0, g.mH)(t.config);
    return (0, A._e)(t)
        ? b(v.t.VYwSSu, { streamingDurationRequirement: a, questReward: s }, r)
        : t.config.features.includes(T.Li.CLOUD_GAMING_ACTIVITY)
          ? i === _.uF.QUESTS_EMBED
              ? b(
                    v.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: C,
                        providerLink: u.A.getArticleURL(y.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: s,
                    },
                    r,
                )
              : b(
                    v.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: C,
                        providerLink: u.A.getArticleURL(y.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: a,
                        questReward: s,
                    },
                    r,
                )
          : b(
                v.t.UuzHh8,
                { activityName: t.config.messages.gameTitle, streamingDurationRequirement: a, questReward: s },
                r,
            );
}
function P(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: a,
            collectibleRewardDuration: s,
            onGameTitleClick: o,
        } = e,
        l = (0, g.mH)(n.config),
        { targetMinutes: u } = r,
        c = n.config.messages.gameTitle,
        d = (0, g.JX)(n.config),
        _ = (0, g.Y7)(n.config),
        f = null != o;
    return b(
        (t =
            a && d
                ? _
                    ? f
                        ? v.t.l9yxDa
                        : v.t["X8Yt/1"]
                    : f
                      ? v.t.eEuma3
                      : v.t.smG9ql
                : d || null != s
                  ? f
                      ? v.t.Cko4a4
                      : v.t.BLyDvO
                  : f
                    ? v.t.ER9rII
                    : v.t["hkJ+Gs"]),
        { gameTitle: c, streamingDurationRequirement: u, duration: s, questReward: l, onGameTitleClick: o },
        i,
    );
}
function M(e) {
    let { quest: t, gameSheetHook: n, rewardNameWithArticle: r, targetMinutes: i } = e,
        a = {
            [T.Li.PACKAGE_ACTION_ADVENTURE]: v.t.H485IA,
            [T.Li.PACKAGE_RPG_MMO]: v.t["3XS8Ni"],
            [T.Li.PACKAGE_RACING_SPORTS]: v.t["X+UCju"],
            [T.Li.PACKAGE_SANDBOX_CREATIVE]: v.t["6o4n1Q"],
            [T.Li.PACKAGE_FAMILY_FRIENDLY]: v.t.DUsNmf,
            [T.Li.PACKAGE_HOLIDAY_SEASON]: v.t["cWP8/Z"],
            [T.Li.PACKAGE_NEW_YEARS]: v.t["8+sIJz"],
        },
        s = t.config.features.find((e) => e in a),
        o = (null != s ? a[s] : null) ?? v.t.CDeHul;
    return v.intl.format(o, { rewardNameWithArticle: r, targetMinutes: i, gameSheetHook: n });
}
function k(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: s,
            onGameSheetClosed: o,
        } = e,
        l = (0, g.mH)(t.config),
        { targetMinutes: u, applications: c } = n;
    if (i) return v.intl.formatToPlainString(v.t["1votF6"], { rewardNameWithArticle: l, targetMinutes: u });
    let d = (0, f.z)({
        quest: t,
        sourceQuestContent: r,
        applications: c ?? [],
        popoutTargetElementRef: a,
        onGameSheetOpened: s,
        onGameSheetClosed: o,
    });
    return M({ quest: t, rewardNameWithArticle: l, targetMinutes: u, gameSheetHook: d });
}
function U(e) {
    let {
            quest: t,
            taskDetails: n,
            questContent: r,
            thirdPartyTaskDetails: i,
            sourceQuestContent: a,
            withoutMarkdown: s,
            currentUser: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            onGameTitleClick: _,
        } = e,
        f = (0, d.ki)(o, S.PremiumTypes.TIER_2),
        p = (0, g.k5)(t.config),
        h = (0, E.g5)(t) && (0, E.xZ)(t);
    if ((0, A.ui)(t))
        return k({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: s,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
        });
    if (h)
        return R({
            quest: t,
            taskDetails: n,
            withoutMarkdown: s,
            hasNitro: f,
            collectibleRewardDuration: p,
            onGameTitleClick: _,
        });
    if ((0, E.g5)(t))
        return O({
            quest: t,
            taskDetails: n,
            withoutMarkdown: s,
            hasNitro: f,
            collectibleRewardDuration: p,
            onGameTitleClick: _,
        });
    if ((0, E.xZ)(t))
        return D({
            quest: t,
            taskDetails: n,
            withoutMarkdown: s,
            hasNitro: f,
            collectibleRewardDuration: p,
            onGameTitleClick: _,
        });
    if ((0, g.kr)({ quest: t })) return L({ quest: t, taskDetails: n, withoutMarkdown: s, onGameTitleClick: _ });
    else if ((0, E.vv)(t)) return w(t, p, f, s);
    else if ((0, E.vl)(t)) return x({ quest: t, taskDetails: n, withoutMarkdown: s, questContent: r });
    return null != i
        ? i.description
        : P({
              quest: t,
              taskDetails: n,
              withoutMarkdown: s,
              hasNitro: f,
              collectibleRewardDuration: p,
              onGameTitleClick: _,
          });
}
function G(e) {
    return U({
        ...e,
        currentUser: e.currentUser ?? l.default.getCurrentUser(),
        popoutTargetElementRef: e.popoutTargetElementRef,
        onGameSheetOpened: e.onGameSheetOpened,
        onGameSheetClosed: e.onGameSheetClosed,
        onGameTitleClick: e.onGameTitleClick,
    });
}
function V(e) {
    let { quest: t, questContent: n, sourceQuestContent: r, gameProfileSource: o } = e,
        u = (0, I.BL)({ quest: t, questContent: n, sourceQuestContent: r }),
        c = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        d = (0, I.I3)(t),
        _ = (0, E._3)(t)?.[0],
        f = (0, s.A)({ applicationId: _, location: T.rE.QUEST_INSTRUCTIONS, source: o ?? a.Ob.QuestHome }),
        { enabled: h } = p.RJ.getConfig({ location: T.rE.QUEST_INSTRUCTIONS }),
        m = h;
    return G({
        ...e,
        connectedConsoleLinkOnClick: u,
        currentUser: c,
        withoutMarkdown: !1,
        thirdPartyTaskDetails: d ?? void 0,
        onGameTitleClick: m ? f : void 0,
    });
}
function F(e, t, n, r) {
    let i = (0, I.fc)(e),
        a = (0, E.JC)(e),
        s = V({
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
        : null != a
          ? a.description
          : null != s
            ? s
            : null;
}
function B(e) {
    let {
            quest: t,
            isExpanded: n,
            sourceQuestContent: r,
            activeScreen: i,
            popoutTargetElementRef: s,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
        } = e,
        u = t.config.rewardsConfig.rewardsExpireAt,
        c = (0, I.S5)(u),
        d = (0, I.fc)(t),
        f = (0, I.I3)(t),
        p = t.userStatus?.completedAt != null,
        h = t.userStatus?.enrolledAt != null,
        y = d.percentComplete > 0,
        S = (0, I.Vn)(t),
        C = V({
            quest: t,
            location: T.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: d,
            sourceQuestContent: r,
            popoutTargetElementRef: s,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
            gameProfileSource: a.Ob.QuestBar,
        }),
        b = null != f ? f.percentComplete : d.percentComplete;
    if (p) return v.intl.formatToPlainString(v.t.APddvF, { expirationDate: c });
    if (n)
        if (i === _.X0.SELECT) return v.intl.string(v.t.sWUpN8);
        else {
            if (!(0, A.ui)(t) || !h || y) return C;
            let e = (0, g.mH)(t.config);
            return v.intl.format(v.t["1votF6"], { rewardNameWithArticle: e, targetMinutes: d.targetMinutes });
        }
    if ((0, E.vv)(t)) return v.intl.string(v.t["o+e9yh"]);
    if (b > 0)
        if (!S) return v.intl.string(v.t.mOrpXG);
        else return (0, m.YT)({ quest: t, taskDetails: d, thirdPartyTaskDetails: f ?? void 0 });
    return v.intl.string(v.t.S6UUc5);
}
function j(e) {
    let t = (0, i.bG)([o.default], () => o.default.locale),
        n = (0, I.fc)(e),
        [r] = (0, I.Qo)(e, n),
        a = (0, I.I3)(e),
        s = e.userStatus?.completedAt != null,
        l = null != a ? a.percentComplete : n.percentComplete;
    if (s) return v.intl.string(v.t["ij5E/5"]);
    if (e.userStatus?.enrolledAt != null && l > 0) {
        let e = (0, c.l9)(t, l, { roundingMode: "floor" });
        return v.intl.formatToPlainString(v.t.lVZaXD, { percent: e });
    }
    return r === _.X0.SELECT
        ? v.intl.string(v.t.EMrUHQ)
        : (0, E.g5)(e)
          ? v.intl.string(v.t.mOrpXG)
          : v.intl.string(v.t["7e5k7L"]);
}
function H(e) {
    return (0, E.IO)(e);
}
function Y(e) {
    return (0, E.g5)(e) || (0, E.vl)(e) ? 0 : (0, E.fE)({ quest: e }) ? 1 : H(e) ? 2 : 3 * !!(0, E.Cr)(e);
}
function W(e) {
    return r.useMemo(() => Y(e), [e]);
}
function K(e, t) {
    return !0;
}
function z(e) {
    let { quest: t, application: n, shortText: r = !1 } = e;
    switch (W(t)) {
        case 0:
            if (K(t, n)) {
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
            return t.config.features.includes(T.Li.START_QUEST_CTA) && K(t, n)
                ? v.intl.string(r ? v.t.CkUzLd : v.t["hRIVy+"])
                : v.intl.string(v.t.l7E81v);
    }
}
function $(e) {
    let { quest: t, rewardCode: n } = e,
        r = (0, g.kr)({ quest: t }),
        i = n?.platform ?? _.pY.CROSS_PLATFORM,
        a = r ? (0, g.cg)({ quest: t, idx: n?.tier ?? t.userStatus?.claimedTier }) : null,
        s = (0, m.xv)(t.config),
        o = a?.messages?.redemptionInstructionsByPlatform ?? s.messages.redemptionInstructionsByPlatform;
    return null != i ? o[i] : void 0;
}
