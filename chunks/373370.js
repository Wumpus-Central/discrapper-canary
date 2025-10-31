n.d(t, {
    CR: () => k,
    DD: () => L,
}),
    n(953529);
var r = n(647438),
    i = n(442837),
    a = n(594174),
    o = n(63063),
    s = n(111361),
    l = n(509212),
    c = n(113434),
    u = n(497505),
    d = n(302914),
    f = n(566078),
    _ = n(46140),
    p = n(981631),
    h = n(474936),
    m = n(388032);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = "NVIDIA GeForce NOW";
function v(e, t, n) {
    return n ? m.intl.formatToPlainString(e, t) : m.intl.format(e, t);
}
function I(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = f.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        p = (0, l._p)(n.config),
        h = n.config.features.includes(_.S7.NON_GAMING_PLAY_QUEST);
    return v(
        (t =
            a && d
                ? p
                    ? h
                        ? m.t.ztXW8V
                        : m.t["eb/Sna"]
                    : h
                      ? m.t["1AcTqm"]
                      : m.t.ziB0HF
                : d || null != o
                  ? h
                      ? m.t.enQ3jU
                      : m.t.AwuMRS
                  : h
                    ? m.t["e+K3xJ"]
                    : m.t.NIimTt),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: o,
            targetMinutes: c,
        },
        i,
    );
}
function T(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = f.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return v(
        (t = a && d ? (_ ? m.t["eb/Sna"] : m.t.ziB0HF) : d || null != o ? m.t.AwuMRS : m.t.NIimTt),
        {
            gameTitle: u,
            targetMinutes: c,
            rewardNameWithArticle: s,
            duration: o,
            streamingDurationRequirement: c,
        },
        i,
    );
}
function S(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = f.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        p = (0, l._p)(n.config),
        h = n.config.features.includes(_.S7.NON_GAMING_PLAY_QUEST);
    return v(
        (t =
            a && d
                ? p
                    ? h
                        ? m.t.ztXW8V
                        : m.t["eb/Sna"]
                    : h
                      ? m.t["1AcTqm"]
                      : m.t.ziB0HF
                : d || null != o
                  ? h
                      ? m.t.enQ3jU
                      : m.t.AwuMRS
                  : h
                    ? m.t["03VJqu"]
                    : m.t.FZL5Q5),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: o,
            questReward: s,
        },
        i,
    );
}
function A(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return v(
        m.t["a/ia7F"],
        {
            gameTitle: a,
            streamingDurationRequirement: i,
        },
        r,
    );
}
function C(e, t, n, r) {
    var i;
    let a,
        o = f.r.build(e.config).defaultWatchVideoTask,
        s = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        c = f.r.build(e.config).defaultRewardNameWithArticle,
        u = (0, l.f$)(e.config),
        d = (0, l._p)(e.config);
    return v(
        (a =
            u && n
                ? d
                    ? m.t["xqX+r5"]
                    : m.t["vs/xBu"]
                : u || null != t
                  ? m.t["W/HkLO"]
                  : e.id === _.V6
                    ? m.t.Rsd5bL
                    : m.t["g+InPC"]),
        {
            videoTitle: s,
            rewardNameWithArticle: c,
            duration: t,
        },
        r,
    );
}
function N(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        s = f.r.build(t.config).defaultRewardNameWithArticle;
    return (0, l.KM)(t)
        ? v(
              m.t.VYwSSu,
              {
                  streamingDurationRequirement: a,
                  questReward: s,
              },
              r,
          )
        : t.config.features.includes(_.S7.CLOUD_GAMING_ACTIVITY)
          ? i === u.jn.QUESTS_EMBED
              ? v(
                    m.t["C+2RxC"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: O,
                        providerLink: o.Z.getArticleURL(p.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        questReward: s,
                    },
                    r,
                )
              : v(
                    m.t["0NNM3l"],
                    {
                        activityName: t.config.messages.gameTitle,
                        providerName: O,
                        providerLink: o.Z.getArticleURL(p.BhN.NVIDIA_GEFORCE_CLOUD_GAMING_QUEST),
                        streamingDurationRequirement: a,
                        questReward: s,
                    },
                    r,
                )
          : v(
                m.t.UuzHh8,
                {
                    activityName: t.config.messages.gameTitle,
                    streamingDurationRequirement: a,
                    questReward: s,
                },
                r,
            );
}
function R(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = f.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return v(
        (t = a && d ? (_ ? m.t["X8Yt/1"] : m.t.smG9ql) : d || null != o ? m.t.BLyDvO : m.t["hkJ+Gs"]),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            duration: o,
            questReward: s,
        },
        i,
    );
}
function P(e) {
    var t;
    let { quest: n, gameSheetHook: r, rewardNameWithArticle: i, targetMinutes: a } = e,
        o = {
            [_.S7.PACKAGE_ACTION_ADVENTURE]: m.t.H485IA,
            [_.S7.PACKAGE_RPG_MMO]: m.t["3XS8Ni"],
            [_.S7.PACKAGE_RACING_SPORTS]: m.t["X+UCju"],
            [_.S7.PACKAGE_SANDBOX_CREATIVE]: m.t["6o4n1Q"],
            [_.S7.PACKAGE_FAMILY_FRIENDLY]: m.t.DUsNmf,
            [_.S7.PACKAGE_HOLIDAY_SEASON]: m.t["cWP8/Z"],
            [_.S7.PACKAGE_NEW_YEARS]: m.t["8+sIJz"],
        },
        s = n.config.features.find((e) => e in o),
        l = null != (t = null != s ? o[s] : null) ? t : m.t.CDeHul;
    return m.intl.format(l, {
        rewardNameWithArticle: i,
        targetMinutes: a,
        gameSheetHook: r,
    });
}
function w(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
        } = e,
        l = f.r.build(t.config).defaultRewardNameWithArticle,
        { targetMinutes: c, applications: u } = n;
    if (i)
        return m.intl.formatToPlainString(m.t["1votF6"], {
            rewardNameWithArticle: l,
            targetMinutes: c,
        });
    let _ = (0, d.C)({
        quest: t,
        sourceQuestContent: r,
        applications: null != u ? u : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: o,
        onGameSheetClosed: s,
    });
    return P({
        quest: t,
        rewardNameWithArticle: l,
        targetMinutes: c,
        gameSheetHook: _,
    });
}
function D(e) {
    let {
            quest: t,
            taskDetails: n,
            questContent: r,
            thirdPartyTaskDetails: i,
            sourceQuestContent: a,
            withoutMarkdown: o,
            currentUser: c,
            popoutTargetElementRef: u,
            onGameSheetOpened: d,
            onGameSheetClosed: f,
        } = e,
        _ = (0, s.I5)(c, h.PremiumTypes.TIER_2),
        p = (0, l.Kr)(t.config),
        m = (0, l.$J)(t) && (0, l.$H)(t);
    if ((0, l.Pb)(t))
        return w({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: o,
            popoutTargetElementRef: u,
            onGameSheetOpened: d,
            onGameSheetClosed: f,
        });
    if (m)
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, l.$J)(t))
        return T({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, l.$H)(t))
        return S({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, l.oo)({ quest: t }))
        return A({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
        });
    else if ((0, l.q8)(t)) return C(t, p, _, o);
    else if ((0, l.pO)(t))
        return N({
            quest: t,
            taskDetails: n,
            withoutMarkdown: o,
            questContent: r,
        });
    return null != i
        ? i.description
        : R({
              quest: t,
              taskDetails: n,
              withoutMarkdown: o,
              hasNitro: _,
              collectibleRewardDuration: p,
          });
}
function x(e) {
    var t;
    return D(
        y(E({}, e), {
            currentUser: null != (t = e.currentUser) ? t : a.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    );
}
function L(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        o = (0, c.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        l = (0, c.Jf)(t);
    return x(
        y(E({}, e), {
            connectedConsoleLinkOnClick: o,
            currentUser: s,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != l ? l : void 0,
        }),
    );
}
function M(e) {
    return (0, l.$J)(e) || (0, l.pO)(e) ? 0 : (0, l.Dr)({ quest: e }) ? 1 : (0, l.q8)(e) ? 2 : 3 * !!(0, l.Vl)(e);
}
function j(e) {
    return r.useMemo(() => M(e), [e]);
}
function k(e) {
    let { quest: t, shortText: n = !1 } = e;
    switch (j(t)) {
        case 0:
            if (t.config.features.includes(_.S7.CLOUD_GAMING_ACTIVITY)) return m.intl.string(m.t["+qoymD"]);
            if (t.config.features.includes(_.S7.START_QUEST_CTA)) return m.intl.string(n ? m.t.E4kW5O : m.t["Ie9++s"]);
            return m.intl.string(m.t.l7E81v);
        case 1:
            return m.intl.string(m.t.l7E81v);
        case 2:
            return m.intl.string(m.t.umdNin);
        case 3:
            return t.config.features.includes(_.S7.START_QUEST_CTA)
                ? m.intl.string(n ? m.t.CkUzLd : m.t["hRIVy+"])
                : m.intl.string(m.t.l7E81v);
    }
}
