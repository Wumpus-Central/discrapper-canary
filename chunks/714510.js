n.d(t, {
    NA: () => q,
    VX: () => H,
    XR: () => X,
    gj: () => F,
    mU: () => V,
    tH: () => B,
    wT: () => N,
}),
    n(228524),
    n(896048);
var r = n(64700),
    i = n(311907);
n(166352);
var a = n(773669),
    s = n(287809),
    o = n(975571),
    l = n(252424),
    c = n(474090),
    u = n(341915),
    d = n(537928),
    f = n(651892),
    p = n(92246),
    _ = n(792620),
    h = n(814793),
    m = n(753386),
    g = n(890687),
    E = n(654487),
    b = n(652215),
    y = n(788868),
    O = n(985018);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = "NVIDIA GeForce NOW";
function C(e, t, n) {
    return n ? O.intl.formatToPlainString(e, t) : O.intl.format(e, t);
}
function N(e, t, n, r) {
    let { targetMinutes: i } = (0, g.fc)(e),
        a = (0, g.I3)(e),
        s = (0, g.BL)({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        o = (0, h.ui)(e);
    if ((0, _.g5)(e) && !(0, _.t)({ quest: e }))
        return O.intl.format(O.t["l4S+cQ"], {
            minutes: i,
            onClick: s,
            gameTitle: e.config.messages.gameTitle,
        });
    if ((0, _.g5)(e))
        return o
            ? O.intl.format(O.t.gbtCpW, {
                  onClick: s,
                  minutes: i,
              })
            : O.intl.format(O.t.Ajlcd7, {
                  minutes: i,
                  onClick: s,
                  gameTitle: e.config.messages.gameTitle,
              });
    if (o) return O.intl.format(O.t.Hu8SKW, { targetMinutes: i });
    if ((0, _.vv)(e)) {
        let t = (0, m.Xi)(e.config),
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? O.intl.string(O.t["o+e9yh"]) : O.intl.formatToPlainString(O.t["9m9Mna"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, _.vl)(e))
        if ((0, h._e)(e)) return O.intl.format(O.t["1NaRSs"], { minutes: i });
        else
            return O.intl.format(O.t.xHXCyf, {
                minutes: i,
                activityName: e.config.messages.gameTitle,
            });
    let l = O.t["6zWtV8"];
    return (
        (0, _.t)({ quest: e }) &&
            (l = e.config.features.includes(E.Li.NON_GAMING_PLAY_QUEST) ? O.t.fe7Xec : O.t["wmOh/q"]),
        O.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function R(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: s } = e,
        o = (0, p.mH)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, p.JX)(n.config),
        d = (0, p.Y7)(n.config),
        f = n.config.features.includes(E.Li.NON_GAMING_PLAY_QUEST);
    return C(
        (t =
            a && u
                ? d
                    ? f
                        ? O.t.ztXW8V
                        : O.t["eb/Sna"]
                    : f
                      ? O.t["1AcTqm"]
                      : O.t.ziB0HF
                : u || null != s
                  ? f
                      ? O.t.enQ3jU
                      : O.t.AwuMRS
                  : f
                    ? O.t["e+K3xJ"]
                    : O.t.NIimTt),
        {
            gameTitle: c,
            streamingDurationRequirement: l,
            rewardNameWithArticle: o,
            duration: s,
            targetMinutes: l,
        },
        i,
    );
}
function w(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: s } = e,
        o = (0, p.mH)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, p.JX)(n.config),
        d = (0, p.Y7)(n.config);
    return C(
        (t = a && u ? (d ? O.t["eb/Sna"] : O.t.ziB0HF) : u || null != s ? O.t.AwuMRS : O.t.NIimTt),
        {
            gameTitle: c,
            targetMinutes: l,
            rewardNameWithArticle: o,
            duration: s,
            streamingDurationRequirement: l,
        },
        i,
    );
}
function P(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: s } = e,
        o = (0, p.mH)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, p.JX)(n.config),
        d = (0, p.Y7)(n.config),
        f = n.config.features.includes(E.Li.NON_GAMING_PLAY_QUEST);
    return C(
        (t =
            a && u
                ? d
                    ? f
                        ? O.t.ztXW8V
                        : O.t["eb/Sna"]
                    : f
                      ? O.t["1AcTqm"]
                      : O.t.ziB0HF
                : u || null != s
                  ? f
                      ? O.t.enQ3jU
                      : O.t.AwuMRS
                  : f
                    ? O.t["03VJqu"]
                    : O.t.FZL5Q5),
        {
            gameTitle: c,
            streamingDurationRequirement: l,
            rewardNameWithArticle: o,
            duration: s,
            questReward: o,
        },
        i,
    );
}
function D(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return C(
        O.t["a/ia7F"],
        {
            gameTitle: a,
            streamingDurationRequirement: i,
        },
        r,
    );
}
function x(e, t, n, r) {
    var i;
    let a,
        s = (0, m.Xi)(e.config),
        o = null != (i = null == s ? void 0 : s.messages.videoTitle) ? i : "video",
        l = (0, p.mH)(e.config),
        c = (0, p.JX)(e.config),
        u = (0, p.Y7)(e.config);
    return C(
        (a =
            c && n
                ? u
                    ? O.t["xqX+r5"]
                    : O.t["vs/xBu"]
                : c || null != t
                  ? O.t["W/HkLO"]
                  : e.id === E.Fw
                    ? O.t.Rsd5bL
                    : O.t["g+InPC"]),
        {
            videoTitle: o,
            rewardNameWithArticle: l,
            duration: t,
        },
        r,
    );
}
function L(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        s = (0, p.mH)(t.config);
    return (0, h._e)(t)
        ? C(
              O.t.VYwSSu,
              {
                  streamingDurationRequirement: a,
                  questReward: s,
              },
              r,
          )
        : t.config.features.includes(E.Li.CLOUD_GAMING_ACTIVITY)
          ? i === u.uF.QUESTS_EMBED
              ? C(
                    O.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: T,
                        providerLink: o.A.getArticleURL(b.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: s,
                    },
                    r,
                )
              : C(
                    O.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: T,
                        providerLink: o.A.getArticleURL(b.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: a,
                        questReward: s,
                    },
                    r,
                )
          : C(
                O.t.UuzHh8,
                {
                    activityName: t.config.messages.gameTitle,
                    streamingDurationRequirement: a,
                    questReward: s,
                },
                r,
            );
}
function j(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: s } = e,
        o = (0, p.mH)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, p.JX)(n.config),
        d = (0, p.Y7)(n.config);
    return C(
        (t = a && u ? (d ? O.t["X8Yt/1"] : O.t.smG9ql) : u || null != s ? O.t.BLyDvO : O.t["hkJ+Gs"]),
        {
            gameTitle: c,
            streamingDurationRequirement: l,
            duration: s,
            questReward: o,
        },
        i,
    );
}
function M(e) {
    var t;
    let { quest: n, gameSheetHook: r, rewardNameWithArticle: i, targetMinutes: a } = e,
        s = {
            [E.Li.PACKAGE_ACTION_ADVENTURE]: O.t.H485IA,
            [E.Li.PACKAGE_RPG_MMO]: O.t["3XS8Ni"],
            [E.Li.PACKAGE_RACING_SPORTS]: O.t["X+UCju"],
            [E.Li.PACKAGE_SANDBOX_CREATIVE]: O.t["6o4n1Q"],
            [E.Li.PACKAGE_FAMILY_FRIENDLY]: O.t.DUsNmf,
            [E.Li.PACKAGE_HOLIDAY_SEASON]: O.t["cWP8/Z"],
            [E.Li.PACKAGE_NEW_YEARS]: O.t["8+sIJz"],
        },
        o = n.config.features.find((e) => e in s),
        l = null != (t = null != o ? s[o] : null) ? t : O.t.CDeHul;
    return O.intl.format(l, {
        rewardNameWithArticle: i,
        targetMinutes: a,
        gameSheetHook: r,
    });
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
        l = (0, p.mH)(t.config),
        { targetMinutes: c, applications: u } = n;
    if (i)
        return O.intl.formatToPlainString(O.t["1votF6"], {
            rewardNameWithArticle: l,
            targetMinutes: c,
        });
    let f = (0, d.z)({
        quest: t,
        sourceQuestContent: r,
        applications: null != u ? u : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: s,
        onGameSheetClosed: o,
    });
    return M({
        quest: t,
        rewardNameWithArticle: l,
        targetMinutes: c,
        gameSheetHook: f,
    });
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
            onGameSheetClosed: d,
        } = e,
        f = (0, c.ki)(o, y.PremiumTypes.TIER_2),
        m = (0, p.k5)(t.config),
        g = (0, _.g5)(t) && (0, _.xZ)(t);
    if ((0, h.ui)(t))
        return k({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: s,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        });
    if (g)
        return R({
            quest: t,
            taskDetails: n,
            withoutMarkdown: s,
            hasNitro: f,
            collectibleRewardDuration: m,
        });
    if ((0, _.g5)(t))
        return w({
            quest: t,
            taskDetails: n,
            withoutMarkdown: s,
            hasNitro: f,
            collectibleRewardDuration: m,
        });
    if ((0, _.xZ)(t))
        return P({
            quest: t,
            taskDetails: n,
            withoutMarkdown: s,
            hasNitro: f,
            collectibleRewardDuration: m,
        });
    if ((0, p.kr)({ quest: t }))
        return D({
            quest: t,
            taskDetails: n,
            withoutMarkdown: s,
        });
    else if ((0, _.vv)(t)) return x(t, m, f, s);
    else if ((0, _.vl)(t))
        return L({
            quest: t,
            taskDetails: n,
            withoutMarkdown: s,
            questContent: r,
        });
    return null != i
        ? i.description
        : j({
              quest: t,
              taskDetails: n,
              withoutMarkdown: s,
              hasNitro: f,
              collectibleRewardDuration: m,
          });
}
function G(e) {
    var t;
    return U(
        I(v({}, e), {
            currentUser: null != (t = e.currentUser) ? t : s.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    );
}
function V(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        a = (0, g.BL)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        o = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        l = (0, g.I3)(t);
    return G(
        I(v({}, e), {
            connectedConsoleLinkOnClick: a,
            currentUser: o,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != l ? l : void 0,
        }),
    );
}
function F(e, t, n) {
    var r, i;
    let a = (0, g.fc)(e),
        s = (0, _.JC)(e),
        o = V({
            quest: e,
            taskDetails: a,
            location: E.rE.QUEST_HOME_DESKTOP,
            questContent: u.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = (0, g.S5)(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? O.intl.formatToPlainString(O.t.lOVr0O, { claimDate: c })
        : null != s
          ? s.description
          : null != o
            ? o
            : null;
}
function B(e) {
    var t, n;
    let {
            quest: r,
            isExpanded: i,
            sourceQuestContent: a,
            activeScreen: s,
            popoutTargetElementRef: o,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
        } = e,
        d = r.config.rewardsConfig.rewardsExpireAt,
        m = (0, g.S5)(d),
        b = (0, g.fc)(r),
        y = (0, g.I3)(r),
        A = (null == (t = r.userStatus) ? void 0 : t.completedAt) != null,
        v = (null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null,
        S = b.percentComplete > 0,
        I = (0, g.Vn)(r),
        T = V({
            quest: r,
            location: E.rE.QUESTS_BAR,
            questContent: u.uF.QUEST_BAR_V2,
            taskDetails: b,
            sourceQuestContent: a,
            popoutTargetElementRef: o,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
        }),
        C = null != y ? y.percentComplete : b.percentComplete;
    if (A) return O.intl.formatToPlainString(O.t.APddvF, { expirationDate: m });
    if (i)
        if (s === u.X0.SELECT) return O.intl.string(O.t.sWUpN8);
        else {
            if (!(0, h.ui)(r) || !v || S) return T;
            let e = (0, p.mH)(r.config);
            return O.intl.format(O.t["1votF6"], {
                rewardNameWithArticle: e,
                targetMinutes: b.targetMinutes,
            });
        }
    if ((0, _.vv)(r)) return O.intl.string(O.t["o+e9yh"]);
    if (C > 0)
        if (!I) return O.intl.string(O.t.mOrpXG);
        else
            return (0, f.YT)({
                quest: r,
                taskDetails: b,
                thirdPartyTaskDetails: null != y ? y : void 0,
            });
    return O.intl.string(O.t.S6UUc5);
}
function H(e) {
    var t, n;
    let r = (0, i.bG)([a.default], () => a.default.locale),
        s = (0, g.fc)(e),
        [o] = (0, g.Qo)(e, s),
        c = (0, g.I3)(e),
        d = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        f = null != c ? c.percentComplete : s.percentComplete;
    if (d) return O.intl.string(O.t["ij5E/5"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && f > 0) {
        let e = (0, l.l9)(r, f, { roundingMode: "floor" });
        return O.intl.formatToPlainString(O.t.lVZaXD, { percent: e });
    }
    return o === u.X0.SELECT
        ? O.intl.string(O.t.EMrUHQ)
        : (0, _.g5)(e)
          ? O.intl.string(O.t.mOrpXG)
          : O.intl.string(O.t["7e5k7L"]);
}
function Y(e) {
    return (0, _.IO)(e);
}
function W(e) {
    return (0, _.g5)(e) || (0, _.vl)(e) ? 0 : (0, _.fE)({ quest: e }) ? 1 : Y(e) ? 2 : 3 * !!(0, _.Cr)(e);
}
function K(e) {
    return r.useMemo(() => W(e), [e]);
}
function z(e, t) {
    return !0;
}
function q(e) {
    let { quest: t, application: n, shortText: r = !1 } = e;
    switch (K(t)) {
        case 0:
            if (z(t, n)) {
                if (t.config.features.includes(E.Li.CLOUD_GAMING_ACTIVITY)) return O.intl.string(O.t["+qoymD"]);
                if (t.config.features.includes(E.Li.START_QUEST_CTA))
                    return O.intl.string(r ? O.t.E4kW5O : O.t["Ie9++s"]);
            }
            return O.intl.string(O.t.l7E81v);
        case 1:
            return O.intl.string(O.t.l7E81v);
        case 2:
            return O.intl.string(O.t.umdNin);
        case 3:
            return t.config.features.includes(E.Li.START_QUEST_CTA) && z(t, n)
                ? O.intl.string(r ? O.t.CkUzLd : O.t["hRIVy+"])
                : O.intl.string(O.t.l7E81v);
    }
}
function X(e) {
    var t, n, r, i, a;
    let { quest: s, rewardCode: o } = e,
        l = (0, p.kr)({ quest: s }),
        c = null != (t = null == o ? void 0 : o.platform) ? t : u.pY.CROSS_PLATFORM,
        d = l
            ? (0, p.cg)({
                  quest: s,
                  idx:
                      null != (n = null == o ? void 0 : o.tier)
                          ? n
                          : null == (i = s.userStatus)
                            ? void 0
                            : i.claimedTier,
              })
            : null,
        _ = (0, f.xv)(s.config),
        h =
            null != (r = null == d || null == (a = d.messages) ? void 0 : a.redemptionInstructionsByPlatform)
                ? r
                : _.messages.redemptionInstructionsByPlatform;
    return null != c ? h[c] : void 0;
}
