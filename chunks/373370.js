n.d(t, {
    Bd: () => G,
    C1: () => Y,
    CR: () => H,
    DD: () => U,
    eQ: () => B,
    t5: () => A,
    vf: () => Z,
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
    u = n(313481),
    d = n(49436),
    f = n(509212),
    p = n(302914),
    _ = n(115179),
    m = n(542347),
    h = n(324805),
    g = n(981631),
    E = n(474936),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = "NVIDIA GeForce NOW";
function T(e, t, n) {
    return n ? b.intl.formatToPlainString(e, t) : b.intl.format(e, t);
}
function A(e, t, n, r) {
    let { targetMinutes: i } = (0, u.Rf)(e),
        a = (0, u.Jf)(e),
        o = (0, u.uA)({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, f.Pb)(e);
    if ((0, f.$J)(e) && !(0, f.Nj)({ quest: e }))
        return b.intl.format(b.t["l4S+cQ"], {
            minutes: i,
            onClick: o,
            gameTitle: e.config.messages.gameTitle,
        });
    if ((0, f.$J)(e))
        return s
            ? b.intl.format(b.t.gbtCpW, {
                  onClick: o,
                  minutes: i,
              })
            : b.intl.format(b.t.Ajlcd7, {
                  minutes: i,
                  onClick: o,
                  gameTitle: e.config.messages.gameTitle,
              });
    if (s) return b.intl.format(b.t.Hu8SKW, { targetMinutes: i });
    if ((0, f.q8)(e)) {
        let t = (0, m.z1)(e.config),
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? b.intl.string(b.t["o+e9yh"]) : b.intl.formatToPlainString(b.t["9m9Mna"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, f.pO)(e))
        if ((0, f.KM)(e)) return b.intl.format(b.t["1NaRSs"], { minutes: i });
        else
            return b.intl.format(b.t.xHXCyf, {
                minutes: i,
                activityName: e.config.messages.gameTitle,
            });
    let l = b.t["6zWtV8"];
    return (
        (0, f.Nj)({ quest: e }) &&
            (l = e.config.features.includes(h.S7.NON_GAMING_PLAY_QUEST) ? b.t.fe7Xec : b.t["wmOh/q"]),
        b.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function C(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, _.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, _.f$)(n.config),
        d = (0, _._p)(n.config),
        f = n.config.features.includes(h.S7.NON_GAMING_PLAY_QUEST);
    return T(
        (t =
            a && u
                ? d
                    ? f
                        ? b.t.ztXW8V
                        : b.t["eb/Sna"]
                    : f
                      ? b.t["1AcTqm"]
                      : b.t.ziB0HF
                : u || null != o
                  ? f
                      ? b.t.enQ3jU
                      : b.t.AwuMRS
                  : f
                    ? b.t["e+K3xJ"]
                    : b.t.NIimTt),
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
function N(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, _.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, _.f$)(n.config),
        d = (0, _._p)(n.config);
    return T(
        (t = a && u ? (d ? b.t["eb/Sna"] : b.t.ziB0HF) : u || null != o ? b.t.AwuMRS : b.t.NIimTt),
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
function P(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, _.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, _.f$)(n.config),
        d = (0, _._p)(n.config),
        f = n.config.features.includes(h.S7.NON_GAMING_PLAY_QUEST);
    return T(
        (t =
            a && u
                ? d
                    ? f
                        ? b.t.ztXW8V
                        : b.t["eb/Sna"]
                    : f
                      ? b.t["1AcTqm"]
                      : b.t.ziB0HF
                : u || null != o
                  ? f
                      ? b.t.enQ3jU
                      : b.t.AwuMRS
                  : f
                    ? b.t["03VJqu"]
                    : b.t.FZL5Q5),
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
function R(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return T(
        b.t["a/ia7F"],
        {
            gameTitle: a,
            streamingDurationRequirement: i,
        },
        r,
    );
}
function w(e, t, n, r) {
    var i;
    let a,
        o = (0, m.z1)(e.config),
        s = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        l = (0, _.B3)(e.config),
        c = (0, _.f$)(e.config),
        u = (0, _._p)(e.config);
    return T(
        (a =
            c && n
                ? u
                    ? b.t["xqX+r5"]
                    : b.t["vs/xBu"]
                : c || null != t
                  ? b.t["W/HkLO"]
                  : e.id === h.V6
                    ? b.t.Rsd5bL
                    : b.t["g+InPC"]),
        {
            videoTitle: s,
            rewardNameWithArticle: l,
            duration: t,
        },
        r,
    );
}
function D(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        o = (0, _.B3)(t.config);
    return (0, f.KM)(t)
        ? T(
              b.t.VYwSSu,
              {
                  streamingDurationRequirement: a,
                  questReward: o,
              },
              r,
          )
        : t.config.features.includes(h.S7.CLOUD_GAMING_ACTIVITY)
          ? i === d.jn.QUESTS_EMBED
              ? T(
                    b.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: I,
                        providerLink: s.Z.getArticleURL(g.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: o,
                    },
                    r,
                )
              : T(
                    b.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: I,
                        providerLink: s.Z.getArticleURL(g.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: a,
                        questReward: o,
                    },
                    r,
                )
          : T(
                b.t.UuzHh8,
                {
                    activityName: t.config.messages.gameTitle,
                    streamingDurationRequirement: a,
                    questReward: o,
                },
                r,
            );
}
function x(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, _.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, _.f$)(n.config),
        d = (0, _._p)(n.config);
    return T(
        (t = a && u ? (d ? b.t["X8Yt/1"] : b.t.smG9ql) : u || null != o ? b.t.BLyDvO : b.t["hkJ+Gs"]),
        {
            gameTitle: c,
            streamingDurationRequirement: l,
            duration: o,
            questReward: s,
        },
        i,
    );
}
function L(e) {
    var t;
    let { quest: n, gameSheetHook: r, rewardNameWithArticle: i, targetMinutes: a } = e,
        o = {
            [h.S7.PACKAGE_ACTION_ADVENTURE]: b.t.H485IA,
            [h.S7.PACKAGE_RPG_MMO]: b.t["3XS8Ni"],
            [h.S7.PACKAGE_RACING_SPORTS]: b.t["X+UCju"],
            [h.S7.PACKAGE_SANDBOX_CREATIVE]: b.t["6o4n1Q"],
            [h.S7.PACKAGE_FAMILY_FRIENDLY]: b.t.DUsNmf,
            [h.S7.PACKAGE_HOLIDAY_SEASON]: b.t["cWP8/Z"],
            [h.S7.PACKAGE_NEW_YEARS]: b.t["8+sIJz"],
        },
        s = n.config.features.find((e) => e in o),
        l = null != (t = null != s ? o[s] : null) ? t : b.t.CDeHul;
    return b.intl.format(l, {
        rewardNameWithArticle: i,
        targetMinutes: a,
        gameSheetHook: r,
    });
}
function j(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
        } = e,
        l = (0, _.B3)(t.config),
        { targetMinutes: c, applications: u } = n;
    if (i)
        return b.intl.formatToPlainString(b.t["1votF6"], {
            rewardNameWithArticle: l,
            targetMinutes: c,
        });
    let d = (0, p.C)({
        quest: t,
        sourceQuestContent: r,
        applications: null != u ? u : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: o,
        onGameSheetClosed: s,
    });
    return L({
        quest: t,
        rewardNameWithArticle: l,
        targetMinutes: c,
        gameSheetHook: d,
    });
}
function M(e) {
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
        p = (0, c.I5)(s, E.PremiumTypes.TIER_2),
        m = (0, _.Kr)(t.config),
        h = (0, f.$J)(t) && (0, f.$H)(t);
    if ((0, f.Pb)(t))
        return j({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        });
    if (h)
        return C({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: p,
            collectibleRewardDuration: m,
        });
    if ((0, f.$J)(t))
        return N({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: p,
            collectibleRewardDuration: m,
        });
    if ((0, f.$H)(t))
        return P({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: p,
            collectibleRewardDuration: m,
        });
    if ((0, _.oo)({ quest: t }))
        return R({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
        });
    else if ((0, f.q8)(t)) return w(t, m, p, o);
    else if ((0, f.pO)(t))
        return D({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            questContent: r,
        });
    return null != i
        ? i.description
        : x({
              quest: t,
              taskDetails: n,
              withoutMarkdown: o,
              hasNitro: p,
              collectibleRewardDuration: m,
          });
}
function k(e) {
    var t;
    return M(
        S(O({}, e), {
            currentUser: null != (t = e.currentUser) ? t : o.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    );
}
function U(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        a = (0, u.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        l = (0, u.Jf)(t);
    return k(
        S(O({}, e), {
            connectedConsoleLinkOnClick: a,
            currentUser: s,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != l ? l : void 0,
        }),
    );
}
function G(e, t, n) {
    var r, i;
    let a = (0, u.Rf)(e),
        o = (0, f.b7)(e),
        s = U({
            quest: e,
            taskDetails: a,
            location: h.dr.QUEST_HOME_DESKTOP,
            questContent: d.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = (0, u.B6)(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? b.intl.formatToPlainString(b.t.lOVr0O, { claimDate: c })
        : null != o
          ? o.description
          : null != s
            ? s
            : null;
}
function Z(e) {
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
        p = r.config.rewardsConfig.rewardsExpireAt,
        m = (0, u.B6)(p),
        g = (0, u.Rf)(r),
        E = (0, u.Jf)(r),
        y = (null == (t = r.userStatus) ? void 0 : t.completedAt) != null,
        O = (null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null,
        v = g.percentComplete > 0,
        S = (0, u.z)(r),
        I = U({
            quest: r,
            location: h.dr.QUESTS_BAR,
            questContent: d.jn.QUEST_BAR_V2,
            taskDetails: g,
            sourceQuestContent: a,
            popoutTargetElementRef: s,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
        }),
        T = null != E ? E.percentComplete : g.percentComplete;
    if (y) return b.intl.formatToPlainString(b.t.APddvF, { expirationDate: m });
    if (i)
        if (o === d.LI.SELECT) return b.intl.string(b.t.sWUpN8);
        else {
            if (!(0, f.Pb)(r) || !O || v) return I;
            let e = (0, _.B3)(r.config);
            return b.intl.format(b.t["1votF6"], {
                rewardNameWithArticle: e,
                targetMinutes: g.targetMinutes,
            });
        }
    if ((0, f.q8)(r)) return b.intl.string(b.t["o+e9yh"]);
    if (T > 0)
        if (!S) return b.intl.string(b.t.mOrpXG);
        else
            return (0, f.AV)({
                quest: r,
                taskDetails: g,
                thirdPartyTaskDetails: null != E ? E : void 0,
            });
    return b.intl.string(b.t.S6UUc5);
}
function B(e) {
    var t, n;
    let r = (0, i.e7)([a.default], () => a.default.locale),
        o = (0, u.Rf)(e),
        [s] = (0, u.me)(e, o),
        c = (0, u.Jf)(e),
        p = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        _ = null != c ? c.percentComplete : o.percentComplete;
    if (p) return b.intl.string(b.t["ij5E/5"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && _ > 0) {
        let e = (0, l.T3)(r, _, { roundingMode: "floor" });
        return b.intl.formatToPlainString(b.t.lVZaXD, { percent: e });
    }
    return s === d.LI.SELECT
        ? b.intl.string(b.t.EMrUHQ)
        : (0, f.$J)(e)
          ? b.intl.string(b.t.mOrpXG)
          : b.intl.string(b.t["7e5k7L"]);
}
function F(e) {
    return (0, f.$J)(e) || (0, f.pO)(e) ? 0 : (0, f.Dr)({ quest: e }) ? 1 : (0, f.q8)(e) ? 2 : 3 * !!(0, f.Vl)(e);
}
function V(e) {
    return r.useMemo(() => F(e), [e]);
}
function H(e) {
    let { quest: t, shortText: n = !1 } = e;
    switch (V(t)) {
        case 0:
            if (t.config.features.includes(h.S7.CLOUD_GAMING_ACTIVITY)) return b.intl.string(b.t["+qoymD"]);
            if (t.config.features.includes(h.S7.START_QUEST_CTA)) return b.intl.string(n ? b.t.E4kW5O : b.t["Ie9++s"]);
            return b.intl.string(b.t.l7E81v);
        case 1:
            return b.intl.string(b.t.l7E81v);
        case 2:
            return b.intl.string(b.t.umdNin);
        case 3:
            return t.config.features.includes(h.S7.START_QUEST_CTA)
                ? b.intl.string(n ? b.t.CkUzLd : b.t["hRIVy+"])
                : b.intl.string(b.t.l7E81v);
    }
}
function Y(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s } = e,
        l = (0, _.oo)({ quest: a }),
        c = null != s ? s : null == o ? void 0 : o.platform,
        u = l
            ? (0, _.o9)({
                  quest: a,
                  idx:
                      null != (r = null == o ? void 0 : o.tier)
                          ? r
                          : null == (t = a.userStatus)
                            ? void 0
                            : t.claimedTier,
              })
            : null,
        d = (0, f.M1)(a.config),
        p =
            null != (i = null == u || null == (n = u.messages) ? void 0 : n.redemptionInstructionsByPlatform)
                ? i
                : d.messages.redemptionInstructionsByPlatform;
    return null != c ? p[c] : void 0;
}
