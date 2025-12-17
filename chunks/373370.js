n.d(t, {
    Bd: () => F,
    C1: () => K,
    CR: () => W,
    DD: () => Z,
    eQ: () => V,
    t5: () => N,
    vf: () => B,
}),
    n(953529),
    n(388685);
var r = n(473749),
    i = n(442837),
    a = n(706454),
    o = n(594174),
    s = n(63063),
    l = n(930153),
    c = n(111361),
    u = n(49436),
    d = n(302914),
    f = n(304696),
    p = n(115179),
    _ = n(254579),
    m = n(283689),
    h = n(542347),
    g = n(968843),
    E = n(324805),
    b = n(981631),
    y = n(474936),
    O = n(388032);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = "NVIDIA GeForce NOW";
function A(e, t, n) {
    return n ? O.intl.formatToPlainString(e, t) : O.intl.format(e, t);
}
function N(e, t, n, r) {
    let { targetMinutes: i } = (0, g.Rf)(e),
        a = (0, g.Jf)(e),
        o = (0, g.uA)({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, m.Pb)(e);
    if ((0, _.$J)(e) && !(0, _.Nj)({ quest: e }))
        return O.intl.format(O.t["l4S+cQ"], {
            minutes: i,
            onClick: o,
            gameTitle: e.config.messages.gameTitle,
        });
    if ((0, _.$J)(e))
        return s
            ? O.intl.format(O.t.gbtCpW, {
                  onClick: o,
                  minutes: i,
              })
            : O.intl.format(O.t.Ajlcd7, {
                  minutes: i,
                  onClick: o,
                  gameTitle: e.config.messages.gameTitle,
              });
    if (s) return O.intl.format(O.t.Hu8SKW, { targetMinutes: i });
    if ((0, _.q8)(e)) {
        let t = (0, h.z1)(e.config),
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? O.intl.string(O.t["o+e9yh"]) : O.intl.formatToPlainString(O.t["9m9Mna"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, _.pO)(e))
        if ((0, m.KM)(e)) return O.intl.format(O.t["1NaRSs"], { minutes: i });
        else
            return O.intl.format(O.t.xHXCyf, {
                minutes: i,
                activityName: e.config.messages.gameTitle,
            });
    let l = O.t["6zWtV8"];
    return (
        (0, _.Nj)({ quest: e }) &&
            (l = e.config.features.includes(E.S7.NON_GAMING_PLAY_QUEST) ? O.t.fe7Xec : O.t["wmOh/q"]),
        O.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function P(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, p.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, p.f$)(n.config),
        d = (0, p._p)(n.config),
        f = n.config.features.includes(E.S7.NON_GAMING_PLAY_QUEST);
    return A(
        (t =
            a && u
                ? d
                    ? f
                        ? O.t.ztXW8V
                        : O.t["eb/Sna"]
                    : f
                      ? O.t["1AcTqm"]
                      : O.t.ziB0HF
                : u || null != o
                  ? f
                      ? O.t.enQ3jU
                      : O.t.AwuMRS
                  : f
                    ? O.t["e+K3xJ"]
                    : O.t.NIimTt),
        {
            gameTitle: c,
            streamingDurationRequirement: l,
            rewardNameWithArticle: s,
            duration: o,
            targetMinutes: l,
        },
        i,
    );
}
function R(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, p.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, p.f$)(n.config),
        d = (0, p._p)(n.config);
    return A(
        (t = a && u ? (d ? O.t["eb/Sna"] : O.t.ziB0HF) : u || null != o ? O.t.AwuMRS : O.t.NIimTt),
        {
            gameTitle: c,
            targetMinutes: l,
            rewardNameWithArticle: s,
            duration: o,
            streamingDurationRequirement: l,
        },
        i,
    );
}
function w(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, p.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, p.f$)(n.config),
        d = (0, p._p)(n.config),
        f = n.config.features.includes(E.S7.NON_GAMING_PLAY_QUEST);
    return A(
        (t =
            a && u
                ? d
                    ? f
                        ? O.t.ztXW8V
                        : O.t["eb/Sna"]
                    : f
                      ? O.t["1AcTqm"]
                      : O.t.ziB0HF
                : u || null != o
                  ? f
                      ? O.t.enQ3jU
                      : O.t.AwuMRS
                  : f
                    ? O.t["03VJqu"]
                    : O.t.FZL5Q5),
        {
            gameTitle: c,
            streamingDurationRequirement: l,
            rewardNameWithArticle: s,
            duration: o,
            questReward: s,
        },
        i,
    );
}
function D(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return A(
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
        o = (0, h.z1)(e.config),
        s = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        l = (0, p.B3)(e.config),
        c = (0, p.f$)(e.config),
        u = (0, p._p)(e.config);
    return A(
        (a =
            c && n
                ? u
                    ? O.t["xqX+r5"]
                    : O.t["vs/xBu"]
                : c || null != t
                  ? O.t["W/HkLO"]
                  : e.id === E.V6
                    ? O.t.Rsd5bL
                    : O.t["g+InPC"]),
        {
            videoTitle: s,
            rewardNameWithArticle: l,
            duration: t,
        },
        r,
    );
}
function L(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        o = (0, p.B3)(t.config);
    return (0, m.KM)(t)
        ? A(
              O.t.VYwSSu,
              {
                  streamingDurationRequirement: a,
                  questReward: o,
              },
              r,
          )
        : t.config.features.includes(E.S7.CLOUD_GAMING_ACTIVITY)
          ? i === u.jn.QUESTS_EMBED
              ? A(
                    O.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: C,
                        providerLink: s.Z.getArticleURL(b.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: o,
                    },
                    r,
                )
              : A(
                    O.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: C,
                        providerLink: s.Z.getArticleURL(b.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: a,
                        questReward: o,
                    },
                    r,
                )
          : A(
                O.t.UuzHh8,
                {
                    activityName: t.config.messages.gameTitle,
                    streamingDurationRequirement: a,
                    questReward: o,
                },
                r,
            );
}
function j(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, p.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, p.f$)(n.config),
        d = (0, p._p)(n.config);
    return A(
        (t = a && u ? (d ? O.t["X8Yt/1"] : O.t.smG9ql) : u || null != o ? O.t.BLyDvO : O.t["hkJ+Gs"]),
        {
            gameTitle: c,
            streamingDurationRequirement: l,
            duration: o,
            questReward: s,
        },
        i,
    );
}
function M(e) {
    var t;
    let { quest: n, gameSheetHook: r, rewardNameWithArticle: i, targetMinutes: a } = e,
        o = {
            [E.S7.PACKAGE_ACTION_ADVENTURE]: O.t.H485IA,
            [E.S7.PACKAGE_RPG_MMO]: O.t["3XS8Ni"],
            [E.S7.PACKAGE_RACING_SPORTS]: O.t["X+UCju"],
            [E.S7.PACKAGE_SANDBOX_CREATIVE]: O.t["6o4n1Q"],
            [E.S7.PACKAGE_FAMILY_FRIENDLY]: O.t.DUsNmf,
            [E.S7.PACKAGE_HOLIDAY_SEASON]: O.t["cWP8/Z"],
            [E.S7.PACKAGE_NEW_YEARS]: O.t["8+sIJz"],
        },
        s = n.config.features.find((e) => e in o),
        l = null != (t = null != s ? o[s] : null) ? t : O.t.CDeHul;
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
            onGameSheetOpened: o,
            onGameSheetClosed: s,
        } = e,
        l = (0, p.B3)(t.config),
        { targetMinutes: c, applications: u } = n;
    if (i)
        return O.intl.formatToPlainString(O.t["1votF6"], {
            rewardNameWithArticle: l,
            targetMinutes: c,
        });
    let f = (0, d.C)({
        quest: t,
        sourceQuestContent: r,
        applications: null != u ? u : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: o,
        onGameSheetClosed: s,
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
            withoutMarkdown: o,
            currentUser: s,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        } = e,
        f = (0, c.I5)(s, y.PremiumTypes.TIER_2),
        h = (0, p.Kr)(t.config),
        g = (0, _.$J)(t) && (0, _.$H)(t);
    if ((0, m.Pb)(t))
        return k({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        });
    if (g)
        return P({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: f,
            collectibleRewardDuration: h,
        });
    if ((0, _.$J)(t))
        return R({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: f,
            collectibleRewardDuration: h,
        });
    if ((0, _.$H)(t))
        return w({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: f,
            collectibleRewardDuration: h,
        });
    if ((0, p.oo)({ quest: t }))
        return D({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
        });
    else if ((0, _.q8)(t)) return x(t, h, f, o);
    else if ((0, _.pO)(t))
        return L({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            questContent: r,
        });
    return null != i
        ? i.description
        : j({
              quest: t,
              taskDetails: n,
              withoutMarkdown: o,
              hasNitro: f,
              collectibleRewardDuration: h,
          });
}
function G(e) {
    var t;
    return U(
        T(S({}, e), {
            currentUser: null != (t = e.currentUser) ? t : o.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    );
}
function Z(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        a = (0, g.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        l = (0, g.Jf)(t);
    return G(
        T(S({}, e), {
            connectedConsoleLinkOnClick: a,
            currentUser: s,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != l ? l : void 0,
        }),
    );
}
function F(e, t, n) {
    var r, i;
    let a = (0, g.Rf)(e),
        o = (0, _.b7)(e),
        s = Z({
            quest: e,
            taskDetails: a,
            location: E.dr.QUEST_HOME_DESKTOP,
            questContent: u.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = (0, g.B6)(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? O.intl.formatToPlainString(O.t.lOVr0O, { claimDate: c })
        : null != o
          ? o.description
          : null != s
            ? s
            : null;
}
function B(e) {
    var t, n;
    let {
            quest: r,
            isExpanded: i,
            sourceQuestContent: a,
            activeScreen: o,
            popoutTargetElementRef: s,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
        } = e,
        d = r.config.rewardsConfig.rewardsExpireAt,
        h = (0, g.B6)(d),
        b = (0, g.Rf)(r),
        y = (0, g.Jf)(r),
        v = (null == (t = r.userStatus) ? void 0 : t.completedAt) != null,
        S = (null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null,
        I = b.percentComplete > 0,
        T = (0, g.z)(r),
        C = Z({
            quest: r,
            location: E.dr.QUESTS_BAR,
            questContent: u.jn.QUEST_BAR_V2,
            taskDetails: b,
            sourceQuestContent: a,
            popoutTargetElementRef: s,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
        }),
        A = null != y ? y.percentComplete : b.percentComplete;
    if (v) return O.intl.formatToPlainString(O.t.APddvF, { expirationDate: h });
    if (i)
        if (o === u.LI.SELECT) return O.intl.string(O.t.sWUpN8);
        else {
            if (!(0, m.Pb)(r) || !S || I) return C;
            let e = (0, p.B3)(r.config);
            return O.intl.format(O.t["1votF6"], {
                rewardNameWithArticle: e,
                targetMinutes: b.targetMinutes,
            });
        }
    if ((0, _.q8)(r)) return O.intl.string(O.t["o+e9yh"]);
    if (A > 0)
        if (!T) return O.intl.string(O.t.mOrpXG);
        else
            return (0, f.AV)({
                quest: r,
                taskDetails: b,
                thirdPartyTaskDetails: null != y ? y : void 0,
            });
    return O.intl.string(O.t.S6UUc5);
}
function V(e) {
    var t, n;
    let r = (0, i.e7)([a.default], () => a.default.locale),
        o = (0, g.Rf)(e),
        [s] = (0, g.me)(e, o),
        c = (0, g.Jf)(e),
        d = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        f = null != c ? c.percentComplete : o.percentComplete;
    if (d) return O.intl.string(O.t["ij5E/5"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && f > 0) {
        let e = (0, l.T3)(r, f, { roundingMode: "floor" });
        return O.intl.formatToPlainString(O.t.lVZaXD, { percent: e });
    }
    return s === u.LI.SELECT
        ? O.intl.string(O.t.EMrUHQ)
        : (0, _.$J)(e)
          ? O.intl.string(O.t.mOrpXG)
          : O.intl.string(O.t["7e5k7L"]);
}
function H(e) {
    return (0, _.$J)(e) || (0, _.pO)(e) ? 0 : (0, _.Dr)({ quest: e }) ? 1 : (0, _.q8)(e) ? 2 : 3 * !!(0, _.Vl)(e);
}
function Y(e) {
    return r.useMemo(() => H(e), [e]);
}
function W(e) {
    let { quest: t, shortText: n = !1 } = e;
    switch (Y(t)) {
        case 0:
            if (t.config.features.includes(E.S7.CLOUD_GAMING_ACTIVITY)) return O.intl.string(O.t["+qoymD"]);
            if (t.config.features.includes(E.S7.START_QUEST_CTA)) return O.intl.string(n ? O.t.E4kW5O : O.t["Ie9++s"]);
            return O.intl.string(O.t.l7E81v);
        case 1:
            return O.intl.string(O.t.l7E81v);
        case 2:
            return O.intl.string(O.t.umdNin);
        case 3:
            return t.config.features.includes(E.S7.START_QUEST_CTA)
                ? O.intl.string(n ? O.t.CkUzLd : O.t["hRIVy+"])
                : O.intl.string(O.t.l7E81v);
    }
}
function K(e) {
    var t, n, r, i, a;
    let { quest: o, rewardCode: s } = e,
        l = (0, p.oo)({ quest: o }),
        c = null != (r = null == s ? void 0 : s.platform) ? r : u.y$.CROSS_PLATFORM,
        d = l
            ? (0, p.o9)({
                  quest: o,
                  idx:
                      null != (i = null == s ? void 0 : s.tier)
                          ? i
                          : null == (t = o.userStatus)
                            ? void 0
                            : t.claimedTier,
              })
            : null,
        _ = (0, f.M1)(o.config),
        m =
            null != (a = null == d || null == (n = d.messages) ? void 0 : n.redemptionInstructionsByPlatform)
                ? a
                : _.messages.redemptionInstructionsByPlatform;
    return null != c ? m[c] : void 0;
}
