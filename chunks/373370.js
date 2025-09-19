n.d(t, {
    CR: () => D,
    DD: () => R,
}),
    n(953529);
var r = n(647438),
    i = n(442837),
    a = n(594174),
    o = n(111361),
    s = n(509212),
    l = n(113434),
    c = n(302914),
    u = n(566078),
    d = n(46140),
    f = n(474936),
    _ = n(388032);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t, n) {
    return n ? _.intl.formatToPlainString(e, t) : _.intl.format(e, t);
}
function b(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = u.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        f = (0, s.f$)(n.config),
        p = (0, s._p)(n.config);
    return E(
        (t = a && f ? (p ? _.t["eb/SnZ"] : _.t.ziB0HB) : f || null != o ? _.t.AwuMRU : _.t.NIimTk),
        {
            gameTitle: d,
            streamingDurationRequirement: c,
            rewardNameWithArticle: l,
            duration: o,
            targetMinutes: c,
        },
        i,
    );
}
function y(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = u.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        f = (0, s.f$)(n.config),
        p = (0, s._p)(n.config);
    return E(
        (t = a && f ? (p ? _.t["eb/SnZ"] : _.t.ziB0HB) : f || null != o ? _.t.AwuMRU : _.t.NIimTk),
        {
            gameTitle: d,
            targetMinutes: c,
            rewardNameWithArticle: l,
            duration: o,
            streamingDurationRequirement: c,
        },
        i,
    );
}
function O(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = u.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        f = (0, s.f$)(n.config),
        p = (0, s._p)(n.config);
    return E(
        (t = a && f ? (p ? _.t["eb/SnZ"] : _.t.ziB0HB) : f || null != o ? _.t.AwuMRU : _.t.FZL5Q0),
        {
            gameTitle: d,
            streamingDurationRequirement: c,
            rewardNameWithArticle: l,
            duration: o,
            questReward: l,
        },
        i,
    );
}
function v(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return E(
        _.t["a/ia7O"],
        {
            gameTitle: a,
            streamingDurationRequirement: i,
        },
        r,
    );
}
function I(e, t, n, r) {
    var i;
    let a,
        o = u.r.build(e.config).defaultWatchVideoTask,
        l = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        c = u.r.build(e.config).defaultRewardNameWithArticle,
        f = (0, s.f$)(e.config),
        p = (0, s._p)(e.config);
    return E(
        (a =
            f && n
                ? p
                    ? _.t["xqX+r6"]
                    : _.t["vs/xBg"]
                : f || null != t
                  ? _.t["W/HkLC"]
                  : e.id === d.V6
                    ? _.t.Rsd5bG
                    : _.t["g+InPD"]),
        {
            videoTitle: l,
            rewardNameWithArticle: c,
            duration: t,
        },
        r,
    );
}
function T(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = n.targetMinutes,
        a = u.r.build(t.config).defaultRewardNameWithArticle;
    return (0, s.KM)(t)
        ? E(
              _.t.VYwSSk,
              {
                  streamingDurationRequirement: i,
                  questReward: a,
              },
              r,
          )
        : E(
              _.t.UuzHh4,
              {
                  activityName: t.config.application.name,
                  streamingDurationRequirement: i,
                  questReward: a,
              },
              r,
          );
}
function S(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = u.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        f = (0, s.f$)(n.config),
        p = (0, s._p)(n.config);
    return E(
        (t = a && f ? (p ? _.t["X8Yt//"] : _.t.smG9qq) : f || null != o ? _.t.BLyDvL : _.t["hkJ+Gh"]),
        {
            gameTitle: d,
            streamingDurationRequirement: c,
            duration: o,
            questReward: l,
        },
        i,
    );
}
function A(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
        } = e,
        l = u.r.build(t.config).defaultRewardNameWithArticle,
        { targetMinutes: d, applications: f } = n;
    if (i)
        return _.intl.formatToPlainString(_.t["1votFx"], {
            rewardNameWithArticle: l,
            targetMinutes: d,
        });
    let p = (0, c.C)({
        quest: t,
        sourceQuestContent: r,
        applications: null != f ? f : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: o,
        onGameSheetClosed: s,
    });
    return _.intl.format(_.t.CDeHur, {
        rewardNameWithArticle: l,
        targetMinutes: d,
        gameSheetHook: p,
    });
}
function C(e) {
    let {
            quest: t,
            taskDetails: n,
            thirdPartyTaskDetails: r,
            sourceQuestContent: i,
            withoutMarkdown: a,
            currentUser: l,
            popoutTargetElementRef: c,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        } = e,
        _ = (0, o.I5)(l, f.p9.TIER_2),
        p = (0, s.Kr)(t.config),
        h = (0, s.$J)(t) && (0, s.$H)(t);
    if ((0, s.Pb)(t))
        return A({
            quest: t,
            taskDetails: n,
            sourceQuestContent: i,
            withoutMarkdown: a,
            popoutTargetElementRef: c,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        });
    if (h)
        return b({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, s.$J)(t))
        return y({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, s.$H)(t))
        return O({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
            hasNitro: _,
            collectibleRewardDuration: p,
        });
    if ((0, s.oo)({ quest: t }))
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
        });
    else if ((0, s.q8)(t)) return I(t, p, _, a);
    else if ((0, s.pO)(t))
        return T({
            quest: t,
            taskDetails: n,
            withoutMarkdown: a,
        });
    return null != r
        ? r.description
        : S({
              quest: t,
              taskDetails: n,
              withoutMarkdown: a,
              hasNitro: _,
              collectibleRewardDuration: p,
          });
}
function N(e) {
    var t;
    return C(
        g(h({}, e), {
            currentUser: null != (t = e.currentUser) ? t : a.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    );
}
function R(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        o = (0, l.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        c = (0, l.Jf)(t);
    return N(
        g(h({}, e), {
            connectedConsoleLinkOnClick: o,
            currentUser: s,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != c ? c : void 0,
        }),
    );
}
function P(e) {
    return (0, s.$J)(e) || (0, s.pO)(e) ? 0 : (0, s.Dr)({ quest: e }) ? 1 : (0, s.q8)(e) ? 2 : 3 * !!(0, s.Vl)(e);
}
function w(e) {
    return r.useMemo(() => P(e), [e]);
}
function D(e) {
    let { quest: t } = e;
    switch (w(t)) {
        case 0:
            return t.config.features.includes(d.S7.START_QUEST_CTA)
                ? _.intl.string(_.t["Ie9++v"])
                : _.intl.string(_.t.l7E81t);
        case 1:
            return _.intl.string(_.t.l7E81t);
        case 2:
            return _.intl.string(_.t.umdNio);
        case 3:
            return t.config.features.includes(d.S7.START_QUEST_CTA)
                ? _.intl.string(_.t.ToGcxM)
                : _.intl.string(_.t.l7E81t);
    }
}
