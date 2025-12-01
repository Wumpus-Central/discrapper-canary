n.d(t, {
    Bd: () => j,
    C1: () => V,
    CR: () => F,
    DD: () => k,
    eQ: () => G,
    t5: () => T,
    vf: () => U,
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
    _ = n(302914),
    p = n(324805),
    h = n(981631),
    m = n(474936),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = "NVIDIA GeForce NOW";
function I(e, t, n) {
    return n ? g.intl.formatToPlainString(e, t) : g.intl.format(e, t);
}
function T(e, t, n, r) {
    let { targetMinutes: i } = (0, u.Rf)(e),
        a = (0, u.Jf)(e),
        o = (0, u.uA)({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, f.Pb)(e);
    if ((0, f.$J)(e) && !(0, f.Nj)({ quest: e }))
        return g.intl.format(g.t["l4S+cQ"], {
            minutes: i,
            onClick: o,
            gameTitle: e.config.messages.gameTitle,
        });
    if ((0, f.$J)(e))
        return s
            ? g.intl.format(g.t.gbtCpW, {
                  onClick: o,
                  minutes: i,
              })
            : g.intl.format(g.t.Ajlcd7, {
                  minutes: i,
                  onClick: o,
                  gameTitle: e.config.messages.gameTitle,
              });
    if (s) return g.intl.format(g.t.Hu8SKW, { targetMinutes: i });
    if ((0, f.q8)(e)) {
        let t = (0, f.z1)(e.config),
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n ? g.intl.string(g.t["o+e9yh"]) : g.intl.formatToPlainString(g.t["9m9Mna"], { videoTitle: n });
    }
    if (null != a) return a.title;
    if ((0, f.pO)(e))
        if ((0, f.KM)(e)) return g.intl.format(g.t["1NaRSs"], { minutes: i });
        else
            return g.intl.format(g.t.xHXCyf, {
                minutes: i,
                activityName: e.config.messages.gameTitle,
            });
    let l = g.t["6zWtV8"];
    return (
        (0, f.Nj)({ quest: e }) &&
            (l = e.config.features.includes(p.S7.NON_GAMING_PLAY_QUEST) ? g.t.fe7Xec : g.t["wmOh/q"]),
        g.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}
function S(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, f.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, f.f$)(n.config),
        d = (0, f._p)(n.config),
        _ = n.config.features.includes(p.S7.NON_GAMING_PLAY_QUEST);
    return I(
        (t =
            a && u
                ? d
                    ? _
                        ? g.t.ztXW8V
                        : g.t["eb/Sna"]
                    : _
                      ? g.t["1AcTqm"]
                      : g.t.ziB0HF
                : u || null != o
                  ? _
                      ? g.t.enQ3jU
                      : g.t.AwuMRS
                  : _
                    ? g.t["e+K3xJ"]
                    : g.t.NIimTt),
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
function A(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, f.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, f.f$)(n.config),
        d = (0, f._p)(n.config);
    return I(
        (t = a && u ? (d ? g.t["eb/Sna"] : g.t.ziB0HF) : u || null != o ? g.t.AwuMRS : g.t.NIimTt),
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
function C(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, f.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, f.f$)(n.config),
        d = (0, f._p)(n.config),
        _ = n.config.features.includes(p.S7.NON_GAMING_PLAY_QUEST);
    return I(
        (t =
            a && u
                ? d
                    ? _
                        ? g.t.ztXW8V
                        : g.t["eb/Sna"]
                    : _
                      ? g.t["1AcTqm"]
                      : g.t.ziB0HF
                : u || null != o
                  ? _
                      ? g.t.enQ3jU
                      : g.t.AwuMRS
                  : _
                    ? g.t["03VJqu"]
                    : g.t.FZL5Q5),
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
function N(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return I(
        g.t["a/ia7F"],
        {
            gameTitle: a,
            streamingDurationRequirement: i,
        },
        r,
    );
}
function R(e, t, n, r) {
    var i;
    let a,
        o = (0, f.z1)(e.config),
        s = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        l = (0, f.B3)(e.config),
        c = (0, f.f$)(e.config),
        u = (0, f._p)(e.config);
    return I(
        (a =
            c && n
                ? u
                    ? g.t["xqX+r5"]
                    : g.t["vs/xBu"]
                : c || null != t
                  ? g.t["W/HkLO"]
                  : e.id === p.V6
                    ? g.t.Rsd5bL
                    : g.t["g+InPC"]),
        {
            videoTitle: s,
            rewardNameWithArticle: l,
            duration: t,
        },
        r,
    );
}
function P(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        o = (0, f.B3)(t.config);
    return (0, f.KM)(t)
        ? I(
              g.t.VYwSSu,
              {
                  streamingDurationRequirement: a,
                  questReward: o,
              },
              r,
          )
        : t.config.features.includes(p.S7.CLOUD_GAMING_ACTIVITY)
          ? i === d.jn.QUESTS_EMBED
              ? I(
                    g.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: v,
                        providerLink: s.Z.getArticleURL(h.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: o,
                    },
                    r,
                )
              : I(
                    g.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: v,
                        providerLink: s.Z.getArticleURL(h.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: a,
                        questReward: o,
                    },
                    r,
                )
          : I(
                g.t.UuzHh8,
                {
                    activityName: t.config.messages.gameTitle,
                    streamingDurationRequirement: a,
                    questReward: o,
                },
                r,
            );
}
function D(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = (0, f.B3)(n.config),
        { targetMinutes: l } = r,
        c = n.config.messages.gameTitle,
        u = (0, f.f$)(n.config),
        d = (0, f._p)(n.config);
    return I(
        (t = a && u ? (d ? g.t["X8Yt/1"] : g.t.smG9ql) : u || null != o ? g.t.BLyDvO : g.t["hkJ+Gs"]),
        {
            gameTitle: c,
            streamingDurationRequirement: l,
            duration: o,
            questReward: s,
        },
        i,
    );
}
function w(e) {
    var t;
    let { quest: n, gameSheetHook: r, rewardNameWithArticle: i, targetMinutes: a } = e,
        o = {
            [p.S7.PACKAGE_ACTION_ADVENTURE]: g.t.H485IA,
            [p.S7.PACKAGE_RPG_MMO]: g.t["3XS8Ni"],
            [p.S7.PACKAGE_RACING_SPORTS]: g.t["X+UCju"],
            [p.S7.PACKAGE_SANDBOX_CREATIVE]: g.t["6o4n1Q"],
            [p.S7.PACKAGE_FAMILY_FRIENDLY]: g.t.DUsNmf,
            [p.S7.PACKAGE_HOLIDAY_SEASON]: g.t["cWP8/Z"],
            [p.S7.PACKAGE_NEW_YEARS]: g.t["8+sIJz"],
        },
        s = n.config.features.find((e) => e in o),
        l = null != (t = null != s ? o[s] : null) ? t : g.t.CDeHul;
    return g.intl.format(l, {
        rewardNameWithArticle: i,
        targetMinutes: a,
        gameSheetHook: r,
    });
}
function L(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
        } = e,
        l = (0, f.B3)(t.config),
        { targetMinutes: c, applications: u } = n;
    if (i)
        return g.intl.formatToPlainString(g.t["1votF6"], {
            rewardNameWithArticle: l,
            targetMinutes: c,
        });
    let d = (0, _.C)({
        quest: t,
        sourceQuestContent: r,
        applications: null != u ? u : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: o,
        onGameSheetClosed: s,
    });
    return w({
        quest: t,
        rewardNameWithArticle: l,
        targetMinutes: c,
        gameSheetHook: d,
    });
}
function x(e) {
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
        _ = (0, c.I5)(s, m.PremiumTypes.TIER_2),
        p = (0, f.Kr)(t.config),
        h = (0, f.$J)(t) && (0, f.$H)(t);
    if ((0, f.Pb)(t))
        return L({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        });
    if (h)
        return S({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, f.$J)(t))
        return A({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, f.$H)(t))
        return C({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, f.oo)({ quest: t }))
        return N({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
        });
    else if ((0, f.q8)(t)) return R(t, p, _, o);
    else if ((0, f.pO)(t))
        return P({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            questContent: r,
        });
    return null != i
        ? i.description
        : D({
              quest: t,
              taskDetails: n,
              withoutMarkdown: o,
              hasNitro: _,
              collectibleRewardDuration: p,
          });
}
function M(e) {
    var t;
    return x(
        O(b({}, e), {
            currentUser: null != (t = e.currentUser) ? t : o.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    );
}
function k(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        a = (0, u.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        l = (0, u.Jf)(t);
    return M(
        O(b({}, e), {
            connectedConsoleLinkOnClick: a,
            currentUser: s,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != l ? l : void 0,
        }),
    );
}
function j(e, t, n) {
    var r, i;
    let a = (0, u.Rf)(e),
        o = (0, f.b7)(e),
        s = k({
            quest: e,
            taskDetails: a,
            location: p.dr.QUEST_HOME_DESKTOP,
            questContent: d.jn.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: n,
        }),
        l = (null == (r = e.userStatus) ? void 0 : r.claimedAt) != null,
        c = (0, u.B6)(null == (i = e.userStatus) ? void 0 : i.claimedAt);
    return l
        ? g.intl.formatToPlainString(g.t.lOVr0O, { claimDate: c })
        : null != o
          ? o.description
          : null != s
            ? s
            : null;
}
function U(e) {
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
        _ = r.config.rewardsConfig.rewardsExpireAt,
        h = (0, u.B6)(_),
        m = (0, u.Rf)(r),
        E = (0, u.Jf)(r),
        b = (null == (t = r.userStatus) ? void 0 : t.completedAt) != null,
        y = (null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null,
        O = m.percentComplete > 0,
        v = (0, u.z)(r),
        I = k({
            quest: r,
            location: p.dr.QUESTS_BAR,
            questContent: d.jn.QUEST_BAR_V2,
            taskDetails: m,
            sourceQuestContent: a,
            popoutTargetElementRef: s,
            onGameSheetOpened: l,
            onGameSheetClosed: c,
        }),
        T = null != E ? E.percentComplete : m.percentComplete;
    if (b) return g.intl.formatToPlainString(g.t.APddvF, { expirationDate: h });
    if (i)
        if (o === d.LI.SELECT) return g.intl.string(g.t.sWUpN8);
        else {
            if (!(0, f.Pb)(r) || !y || O) return I;
            let e = (0, f.B3)(r.config);
            return g.intl.format(g.t["1votF6"], {
                rewardNameWithArticle: e,
                targetMinutes: m.targetMinutes,
            });
        }
    if ((0, f.q8)(r)) return g.intl.string(g.t["o+e9yh"]);
    if (T > 0)
        if (!v) return g.intl.string(g.t.mOrpXG);
        else
            return (0, f.AV)({
                quest: r,
                taskDetails: m,
                thirdPartyTaskDetails: null != E ? E : void 0,
            });
    return g.intl.string(g.t.S6UUc5);
}
function G(e) {
    var t, n;
    let r = (0, i.e7)([a.default], () => a.default.locale),
        o = (0, u.Rf)(e),
        [s] = (0, u.me)(e, o),
        c = (0, u.Jf)(e),
        _ = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        p = null != c ? c.percentComplete : o.percentComplete;
    if (_) return g.intl.string(g.t["ij5E/5"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && p > 0) {
        let e = (0, l.T3)(r, p, { roundingMode: "floor" });
        return g.intl.formatToPlainString(g.t.lVZaXD, { percent: e });
    }
    return s === d.LI.SELECT
        ? g.intl.string(g.t.EMrUHQ)
        : (0, f.$J)(e)
          ? g.intl.string(g.t.mOrpXG)
          : g.intl.string(g.t["7e5k7L"]);
}
function B(e) {
    return (0, f.$J)(e) || (0, f.pO)(e) ? 0 : (0, f.Dr)({ quest: e }) ? 1 : (0, f.q8)(e) ? 2 : 3 * !!(0, f.Vl)(e);
}
function Z(e) {
    return r.useMemo(() => B(e), [e]);
}
function F(e) {
    let { quest: t, shortText: n = !1 } = e;
    switch (Z(t)) {
        case 0:
            if (t.config.features.includes(p.S7.CLOUD_GAMING_ACTIVITY)) return g.intl.string(g.t["+qoymD"]);
            if (t.config.features.includes(p.S7.START_QUEST_CTA)) return g.intl.string(n ? g.t.E4kW5O : g.t["Ie9++s"]);
            return g.intl.string(g.t.l7E81v);
        case 1:
            return g.intl.string(g.t.l7E81v);
        case 2:
            return g.intl.string(g.t.umdNin);
        case 3:
            return t.config.features.includes(p.S7.START_QUEST_CTA)
                ? g.intl.string(n ? g.t.CkUzLd : g.t["hRIVy+"])
                : g.intl.string(g.t.l7E81v);
    }
}
function V(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: o, selectedPlatformType: s } = e,
        l = (0, f.oo)({ quest: a }),
        c = null != s ? s : null == o ? void 0 : o.platform,
        u = l
            ? (0, f.o9)({
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
        _ =
            null != (i = null == u || null == (n = u.messages) ? void 0 : n.redemptionInstructionsByPlatform)
                ? i
                : d.messages.redemptionInstructionsByPlatform;
    return null != c ? _[c] : void 0;
}
