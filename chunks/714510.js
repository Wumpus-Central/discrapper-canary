n.d(t, {
    NA: () => X,
    VX: () => K,
    XR: () => J,
    gj: () => Y,
    mU: () => H,
    tH: () => W,
    wT: () => P,
}),
    n(228524),
    n(896048);
var r = n(64700),
    i = n(311907);
n(166352);
var a = n(409626),
    o = n(692969),
    s = n(773669),
    l = n(287809),
    c = n(975571),
    u = n(252424),
    d = n(474090),
    f = n(341915),
    p = n(537928),
    _ = n(245853),
    h = n(868031),
    m = n(651892),
    g = n(92246),
    E = n(792620),
    y = n(814793),
    b = n(890687),
    O = n(654487),
    v = n(652215),
    A = n(788868),
    I = n(985018);

function S(e, t, n) {
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

function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}

function C(e, t) {
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

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = "NVIDIA GeForce NOW";

function R(e, t, n) {
    return n ? I.intl.formatToPlainString(e, t) : I.intl.format(e, t);
}

function P(e, t, n, r) {
    let { targetMinutes: i } = (0, b.fc)(e),
        a = (0, b.I3)(e),
        o = (0, b.BL)({
            quest: e,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, y.ui)(e);
    if (
        (0, E.g5)(e) &&
        !(0, E.t)({
            quest: e,
        })
    )
        return I.intl.format(I.t["l4S+cQ"], {
            minutes: i,
            onClick: o,
            gameTitle: e.config.messages.gameTitle,
        });
    if ((0, E.g5)(e))
        return s
            ? I.intl.format(I.t.gbtCpW, {
                  onClick: o,
                  minutes: i,
              })
            : I.intl.format(I.t.Ajlcd7, {
                  minutes: i,
                  onClick: o,
                  gameTitle: e.config.messages.gameTitle,
              });
    if (s)
        return I.intl.format(I.t.Hu8SKW, {
            targetMinutes: i,
        });
    if ((0, E.vv)(e)) {
        let t = (0, E.Xi)(e.config),
            n = null == t ? void 0 : t.messages.videoTitle;
        return null == n
            ? I.intl.string(I.t["o+e9yh"])
            : I.intl.formatToPlainString(I.t["9m9Mna"], {
                  videoTitle: n,
              });
    }
    if (null != a) return a.title;
    if ((0, E.vl)(e))
        if ((0, y._e)(e))
            return I.intl.format(I.t["1NaRSs"], {
                minutes: i,
            });
        else
            return I.intl.format(I.t.xHXCyf, {
                minutes: i,
                activityName: e.config.messages.gameTitle,
            });
    let l = I.t["6zWtV8"];
    return (
        (0, E.t)({
            quest: e,
        }) && (l = e.config.features.includes(O.Li.NON_GAMING_PLAY_QUEST) ? I.t.fe7Xec : I.t["wmOh/q"]),
        I.intl.format(l, {
            minutes: i,
            gameTitle: e.config.messages.gameTitle,
        })
    );
}

function D(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: a,
            collectibleRewardDuration: o,
            onGameTitleClick: s,
        } = e,
        l = (0, g.mH)(n.config),
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, g.JX)(n.config),
        f = (0, g.Y7)(n.config),
        p = n.config.features.includes(O.Li.NON_GAMING_PLAY_QUEST),
        _ = null != s;
    return R(
        (t =
            a && d
                ? f
                    ? p
                        ? I.t.ztXW8V
                        : _
                          ? I.t.tQoqXX
                          : I.t["eb/Sna"]
                    : p
                      ? I.t["1AcTqm"]
                      : _
                        ? I.t.klYWbT
                        : I.t.ziB0HF
                : d || null != o
                  ? p
                      ? I.t.enQ3jU
                      : _
                        ? I.t["4JS2QJ"]
                        : I.t.AwuMRS
                  : p
                    ? I.t["e+K3xJ"]
                    : _
                      ? I.t.GFdaUK
                      : I.t.NIimTt),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: l,
            duration: o,
            targetMinutes: c,
            onGameTitleClick: s,
        },
        i,
    );
}

function L(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: a,
            collectibleRewardDuration: o,
            onGameTitleClick: s,
        } = e,
        l = (0, g.mH)(n.config),
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, g.JX)(n.config),
        f = (0, g.Y7)(n.config),
        p = null != s;
    return R(
        (t =
            a && d
                ? f
                    ? p
                        ? I.t.tQoqXX
                        : I.t["eb/Sna"]
                    : p
                      ? I.t.klYWbT
                      : I.t.ziB0HF
                : d || null != o
                  ? p
                      ? I.t["4JS2QJ"]
                      : I.t.AwuMRS
                  : p
                    ? I.t.GFdaUK
                    : I.t.NIimTt),
        {
            gameTitle: u,
            targetMinutes: c,
            rewardNameWithArticle: l,
            duration: o,
            streamingDurationRequirement: c,
            onGameTitleClick: s,
        },
        i,
    );
}

function x(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: a,
            collectibleRewardDuration: o,
            onGameTitleClick: s,
        } = e,
        l = (0, g.mH)(n.config),
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, g.JX)(n.config),
        f = (0, g.Y7)(n.config),
        p = n.config.features.includes(O.Li.NON_GAMING_PLAY_QUEST),
        _ = null != s;
    return R(
        (t =
            a && d
                ? f
                    ? p
                        ? I.t.ztXW8V
                        : _
                          ? I.t.tQoqXX
                          : I.t["eb/Sna"]
                    : p
                      ? I.t["1AcTqm"]
                      : _
                        ? I.t.klYWbT
                        : I.t.ziB0HF
                : d || null != o
                  ? p
                      ? I.t.enQ3jU
                      : _
                        ? I.t["4JS2QJ"]
                        : I.t.AwuMRS
                  : p
                    ? I.t["03VJqu"]
                    : _
                      ? I.t.NrD2h8
                      : I.t.FZL5Q5),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: l,
            duration: o,
            questReward: l,
            onGameTitleClick: s,
        },
        i,
    );
}

function M(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, onGameTitleClick: i } = e,
        { targetMinutes: a } = n,
        o = t.config.messages.gameTitle;
    return R(
        null != i ? I.t.HHVg4i : I.t["a/ia7F"],
        {
            gameTitle: o,
            streamingDurationRequirement: a,
            onGameTitleClick: i,
        },
        r,
    );
}

function j(e, t, n, r) {
    var i;
    let a,
        o = (0, E.Xi)(e.config),
        s = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        l = (0, g.mH)(e.config),
        c = (0, g.JX)(e.config),
        u = (0, g.Y7)(e.config);
    return R(
        (a =
            c && n
                ? u
                    ? I.t["xqX+r5"]
                    : I.t["vs/xBu"]
                : c || null != t
                  ? I.t["W/HkLO"]
                  : e.id === O.Fw
                    ? I.t.Rsd5bL
                    : I.t["g+InPC"]),
        {
            videoTitle: s,
            rewardNameWithArticle: l,
            duration: t,
        },
        r,
    );
}

function k(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        o = (0, g.mH)(t.config);
    return (0, y._e)(t)
        ? R(
              I.t.VYwSSu,
              {
                  streamingDurationRequirement: a,
                  questReward: o,
              },
              r,
          )
        : t.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY)
          ? i === f.uF.QUESTS_EMBED
              ? R(
                    I.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: w,
                        providerLink: c.A.getArticleURL(v.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: o,
                    },
                    r,
                )
              : R(
                    I.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: w,
                        providerLink: c.A.getArticleURL(v.MVz.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: a,
                        questReward: o,
                    },
                    r,
                )
          : R(
                I.t.UuzHh8,
                {
                    activityName: t.config.messages.gameTitle,
                    streamingDurationRequirement: a,
                    questReward: o,
                },
                r,
            );
}

function U(e) {
    let t,
        {
            quest: n,
            taskDetails: r,
            withoutMarkdown: i,
            hasNitro: a,
            collectibleRewardDuration: o,
            onGameTitleClick: s,
        } = e,
        l = (0, g.mH)(n.config),
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, g.JX)(n.config),
        f = (0, g.Y7)(n.config),
        p = null != s;
    return R(
        (t =
            a && d
                ? f
                    ? p
                        ? I.t.l9yxDa
                        : I.t["X8Yt/1"]
                    : p
                      ? I.t.eEuma3
                      : I.t.smG9ql
                : d || null != o
                  ? p
                      ? I.t.Cko4a4
                      : I.t.BLyDvO
                  : p
                    ? I.t.ER9rII
                    : I.t["hkJ+Gs"]),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            duration: o,
            questReward: l,
            onGameTitleClick: s,
        },
        i,
    );
}

function G(e) {
    var t;
    let { quest: n, gameSheetHook: r, rewardNameWithArticle: i, targetMinutes: a } = e,
        o = {
            [O.Li.PACKAGE_ACTION_ADVENTURE]: I.t.H485IA,
            [O.Li.PACKAGE_RPG_MMO]: I.t["3XS8Ni"],
            [O.Li.PACKAGE_RACING_SPORTS]: I.t["X+UCju"],
            [O.Li.PACKAGE_SANDBOX_CREATIVE]: I.t["6o4n1Q"],
            [O.Li.PACKAGE_FAMILY_FRIENDLY]: I.t.DUsNmf,
            [O.Li.PACKAGE_HOLIDAY_SEASON]: I.t["cWP8/Z"],
            [O.Li.PACKAGE_NEW_YEARS]: I.t["8+sIJz"],
        },
        s = n.config.features.find((e) => e in o),
        l = null != (t = null != s ? o[s] : null) ? t : I.t.CDeHul;
    return I.intl.format(l, {
        rewardNameWithArticle: i,
        targetMinutes: a,
        gameSheetHook: r,
    });
}

function F(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
        } = e,
        l = (0, g.mH)(t.config),
        { targetMinutes: c, applications: u } = n;
    if (i)
        return I.intl.formatToPlainString(I.t["1votF6"], {
            rewardNameWithArticle: l,
            targetMinutes: c,
        });
    let d = (0, p.z)({
        quest: t,
        sourceQuestContent: r,
        applications: null != u ? u : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: o,
        onGameSheetClosed: s,
    });
    return G({
        quest: t,
        rewardNameWithArticle: l,
        targetMinutes: c,
        gameSheetHook: d,
    });
}

function V(e) {
    let {
            quest: t,
            taskDetails: n,
            questContent: r,
            thirdPartyTaskDetails: i,
            sourceQuestContent: a,
            withoutMarkdown: o,
            currentUser: s,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
            onGameTitleClick: f,
        } = e,
        p = (0, d.ki)(s, A.PremiumTypes.TIER_2),
        _ = (0, g.k5)(t.config),
        h = (0, E.g5)(t) && (0, E.xZ)(t);
    if ((0, y.ui)(t))
        return F({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
        });
    if (h)
        return D({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: p,
            collectibleRewardDuration: _,
            onGameTitleClick: f,
        });
    if ((0, E.g5)(t))
        return L({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: p,
            collectibleRewardDuration: _,
            onGameTitleClick: f,
        });
    if ((0, E.xZ)(t))
        return x({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: p,
            collectibleRewardDuration: _,
            onGameTitleClick: f,
        });
    if (
        (0, g.kr)({
            quest: t,
        })
    )
        return M({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            onGameTitleClick: f,
        });
    else if ((0, E.vv)(t)) return j(t, _, p, o);
    else if ((0, E.vl)(t))
        return k({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            questContent: r,
        });
    return null != i
        ? i.description
        : U({
              quest: t,
              taskDetails: n,
              withoutMarkdown: o,
              hasNitro: p,
              collectibleRewardDuration: _,
              onGameTitleClick: f,
          });
}

function B(e) {
    var t;
    return V(
        N(T({}, e), {
            currentUser: null != (t = e.currentUser) ? t : l.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
            onGameTitleClick: e.onGameTitleClick,
        }),
    );
}

function H(e) {
    var t;
    let { quest: n, questContent: r, sourceQuestContent: s, gameProfileSource: c } = e,
        u = (0, b.BL)({
            quest: n,
            questContent: r,
            sourceQuestContent: s,
        }),
        d = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        f = (0, b.I3)(n),
        p = null == (t = (0, E._3)(n)) ? void 0 : t[0],
        h = (0, o.A)({
            applicationId: p,
            location: O.rE.QUEST_INSTRUCTIONS,
            source: null != c ? c : a.Ob.QuestHome,
        }),
        { enabled: m } = _.RJ.getConfig({
            location: O.rE.QUEST_INSTRUCTIONS,
        }),
        g = m;
    return B(
        N(T({}, e), {
            connectedConsoleLinkOnClick: u,
            currentUser: d,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != f ? f : void 0,
            onGameTitleClick: g ? h : void 0,
        }),
    );
}

function Y(e, t, n, r) {
    var i, a;
    let o = (0, b.fc)(e),
        s = (0, E.JC)(e),
        l = H({
            quest: e,
            taskDetails: o,
            location: O.rE.QUEST_HOME_DESKTOP,
            questContent: f.uF.QUEST_HOME_DESKTOP,
            sourceQuestContent: t,
            popoutTargetElementRef: r,
            gameProfileSource: n,
        }),
        c = (null == (i = e.userStatus) ? void 0 : i.claimedAt) != null,
        u = (0, b.S5)(null == (a = e.userStatus) ? void 0 : a.claimedAt);
    return c
        ? I.intl.formatToPlainString(I.t.lOVr0O, {
              claimDate: u,
          })
        : null != s
          ? s.description
          : null != l
            ? l
            : null;
}

function W(e) {
    var t, n;
    let {
            quest: r,
            isExpanded: i,
            sourceQuestContent: o,
            activeScreen: s,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
        } = e,
        d = r.config.rewardsConfig.rewardsExpireAt,
        p = (0, b.S5)(d),
        _ = (0, b.fc)(r),
        h = (0, b.I3)(r),
        v = (null == (t = r.userStatus) ? void 0 : t.completedAt) != null,
        A = (null == (n = r.userStatus) ? void 0 : n.enrolledAt) != null,
        S = _.percentComplete > 0,
        T = (0, b.Vn)(r),
        C = H({
            quest: r,
            location: O.rE.QUESTS_BAR,
            questContent: f.uF.QUEST_BAR_V2,
            taskDetails: _,
            sourceQuestContent: o,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
            gameProfileSource: a.Ob.QuestBar,
        }),
        N = null != h ? h.percentComplete : _.percentComplete;
    if (v)
        return I.intl.formatToPlainString(I.t.APddvF, {
            expirationDate: p,
        });
    if (i)
        if (s === f.X0.SELECT) return I.intl.string(I.t.sWUpN8);
        else {
            if (!(0, y.ui)(r) || !A || S) return C;
            let e = (0, g.mH)(r.config);
            return I.intl.format(I.t["1votF6"], {
                rewardNameWithArticle: e,
                targetMinutes: _.targetMinutes,
            });
        }
    if ((0, E.vv)(r)) return I.intl.string(I.t["o+e9yh"]);
    if (N > 0)
        if (!T) return I.intl.string(I.t.mOrpXG);
        else
            return (0, m.YT)({
                quest: r,
                taskDetails: _,
                thirdPartyTaskDetails: null != h ? h : void 0,
            });
    return I.intl.string(I.t.S6UUc5);
}

function K(e) {
    var t, n;
    let r = (0, i.bG)([s.default], () => s.default.locale),
        a = (0, b.fc)(e),
        [o] = (0, b.Qo)(e, a),
        l = (0, b.I3)(e),
        c = (null == (t = e.userStatus) ? void 0 : t.completedAt) != null,
        d = null != l ? l.percentComplete : a.percentComplete;
    if (c) return I.intl.string(I.t["ij5E/5"]);
    if ((null == (n = e.userStatus) ? void 0 : n.enrolledAt) != null && d > 0) {
        let e = (0, u.l9)(r, d, {
            roundingMode: "floor",
        });
        return I.intl.formatToPlainString(I.t.lVZaXD, {
            percent: e,
        });
    }
    return o === f.X0.SELECT
        ? I.intl.string(I.t.EMrUHQ)
        : (0, E.g5)(e)
          ? I.intl.string(I.t.mOrpXG)
          : I.intl.string(I.t["7e5k7L"]);
}

function z(e) {
    return (0, E.IO)(e);
}

function q(e) {
    return (0, E.g5)(e) || (0, E.vl)(e)
        ? 0
        : (0, E.fE)({
                quest: e,
            })
          ? 1
          : z(e)
            ? 2
            : 3 * !!(0, E.Cr)(e);
}

function Z(e) {
    return r.useMemo(() => q(e), [e]);
}

function Q(e, t) {
    return !0;
}

function X(e) {
    let { quest: t, application: n, shortText: r = !1 } = e;
    switch (Z(t)) {
        case 0:
            if (Q(t, n)) {
                if (t.config.features.includes(O.Li.CLOUD_GAMING_ACTIVITY)) return I.intl.string(I.t["+qoymD"]);
                if (t.config.features.includes(O.Li.START_QUEST_CTA))
                    return I.intl.string(r ? I.t.E4kW5O : I.t["Ie9++s"]);
            }
            return I.intl.string(I.t.l7E81v);
        case 1:
            return I.intl.string(I.t.l7E81v);
        case 2:
            return (0, h.WB)(t);
        case 3:
            return t.config.features.includes(O.Li.START_QUEST_CTA) && Q(t, n)
                ? I.intl.string(r ? I.t.CkUzLd : I.t["hRIVy+"])
                : I.intl.string(I.t.l7E81v);
    }
}

function J(e) {
    var t, n, r, i, a;
    let { quest: o, rewardCode: s } = e,
        l = (0, g.kr)({
            quest: o,
        }),
        c = null != (t = null == s ? void 0 : s.platform) ? t : f.pY.CROSS_PLATFORM,
        u = l
            ? (0, g.cg)({
                  quest: o,
                  idx:
                      null != (n = null == s ? void 0 : s.tier)
                          ? n
                          : null == (i = o.userStatus)
                            ? void 0
                            : i.claimedTier,
              })
            : null,
        d = (0, m.xv)(o.config),
        p =
            null != (r = null == u || null == (a = u.messages) ? void 0 : a.redemptionInstructionsByPlatform)
                ? r
                : d.messages.redemptionInstructionsByPlatform;
    return null != c ? p[c] : void 0;
}
