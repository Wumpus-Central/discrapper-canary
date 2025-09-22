n.d(t, {
    CR: () => j,
    DD: () => D,
}),
    n(953529);
var r = n(647438),
    i = n(442837),
    a = n(594174),
    o = n(111361),
    s = n(509212),
    l = n(113434),
    c = n(497505),
    u = n(302914),
    d = n(566078),
    f = n(46140),
    _ = n(474936),
    p = n(388032);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = "NVIDIA GeForce NOW",
    y = "https://discord.com";
function O(e, t, n) {
    return n ? p.intl.formatToPlainString(e, t) : p.intl.format(e, t);
}
function v(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = d.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        _ = (0, s.f$)(n.config),
        h = (0, s._p)(n.config),
        m = n.config.features.includes(f.S7.NON_GAMING_PLAY_QUEST);
    return O(
        (t =
            a && _
                ? h
                    ? m
                        ? p.t.ztXW8f
                        : p.t["eb/SnZ"]
                    : m
                      ? p.t["1AcTqq"]
                      : p.t.ziB0HB
                : _ || null != o
                  ? m
                      ? p.t.enQ3jY
                      : p.t.AwuMRU
                  : m
                    ? p.t["e+K3xM"]
                    : p.t.NIimTk),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: l,
            duration: o,
            targetMinutes: c,
        },
        i,
    );
}
function I(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = d.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, s.f$)(n.config),
        _ = (0, s._p)(n.config);
    return O(
        (t = a && f ? (_ ? p.t["eb/SnZ"] : p.t.ziB0HB) : f || null != o ? p.t.AwuMRU : p.t.NIimTk),
        {
            gameTitle: u,
            targetMinutes: c,
            rewardNameWithArticle: l,
            duration: o,
            streamingDurationRequirement: c,
        },
        i,
    );
}
function T(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = d.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        _ = (0, s.f$)(n.config),
        h = (0, s._p)(n.config),
        m = n.config.features.includes(f.S7.NON_GAMING_PLAY_QUEST);
    return O(
        (t =
            a && _
                ? h
                    ? m
                        ? p.t.ztXW8f
                        : p.t["eb/SnZ"]
                    : m
                      ? p.t["1AcTqq"]
                      : p.t.ziB0HB
                : _ || null != o
                  ? m
                      ? p.t.enQ3jY
                      : p.t.AwuMRU
                  : m
                    ? p.t["03VJqq"]
                    : p.t.FZL5Q0),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: l,
            duration: o,
            questReward: l,
        },
        i,
    );
}
function S(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return O(
        p.t["a/ia7O"],
        {
            gameTitle: a,
            streamingDurationRequirement: i,
        },
        r,
    );
}
function A(e, t, n, r) {
    var i;
    let a,
        o = d.r.build(e.config).defaultWatchVideoTask,
        l = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        c = d.r.build(e.config).defaultRewardNameWithArticle,
        u = (0, s.f$)(e.config),
        _ = (0, s._p)(e.config);
    return O(
        (a =
            u && n
                ? _
                    ? p.t["xqX+r6"]
                    : p.t["vs/xBg"]
                : u || null != t
                  ? p.t["W/HkLC"]
                  : e.id === f.V6
                    ? p.t.Rsd5bG
                    : p.t["g+InPD"]),
        {
            videoTitle: l,
            rewardNameWithArticle: c,
            duration: t,
        },
        r,
    );
}
function C(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r, questContent: i } = e,
        a = n.targetMinutes,
        o = d.r.build(t.config).defaultRewardNameWithArticle;
    return (0, s.KM)(t)
        ? O(
              p.t.VYwSSk,
              {
                  streamingDurationRequirement: a,
                  questReward: o,
              },
              r,
          )
        : t.config.features.includes(f.S7.CLOUD_GAMING_ACTIVITY)
          ? i === c.jn.QUESTS_EMBED
              ? O(
                    p.t["C+2RxM"],
                    {
                        activityName: t.config.application.name,
                        providerName: b,
                        providerLink: y,
                        questReward: o,
                    },
                    r,
                )
              : O(
                    p.t["0NNM3t"],
                    {
                        activityName: t.config.application.name,
                        providerName: b,
                        providerLink: y,
                        streamingDurationRequirement: a,
                        questReward: o,
                    },
                    r,
                )
          : O(
                p.t.UuzHh4,
                {
                    activityName: t.config.application.name,
                    streamingDurationRequirement: a,
                    questReward: o,
                },
                r,
            );
}
function N(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = d.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, s.f$)(n.config),
        _ = (0, s._p)(n.config);
    return O(
        (t = a && f ? (_ ? p.t["X8Yt//"] : p.t.smG9qq) : f || null != o ? p.t.BLyDvL : p.t["hkJ+Gh"]),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            duration: o,
            questReward: l,
        },
        i,
    );
}
function R(e) {
    let {
            quest: t,
            taskDetails: n,
            sourceQuestContent: r,
            withoutMarkdown: i,
            popoutTargetElementRef: a,
            onGameSheetOpened: o,
            onGameSheetClosed: s,
        } = e,
        l = d.r.build(t.config).defaultRewardNameWithArticle,
        { targetMinutes: c, applications: f } = n;
    if (i)
        return p.intl.formatToPlainString(p.t["1votFx"], {
            rewardNameWithArticle: l,
            targetMinutes: c,
        });
    let _ = (0, u.C)({
        quest: t,
        sourceQuestContent: r,
        applications: null != f ? f : [],
        popoutTargetElementRef: a,
        onGameSheetOpened: o,
        onGameSheetClosed: s,
    });
    return p.intl.format(p.t.CDeHur, {
        rewardNameWithArticle: l,
        targetMinutes: c,
        gameSheetHook: _,
    });
}
function P(e) {
    let {
            quest: t,
            taskDetails: n,
            questContent: r,
            thirdPartyTaskDetails: i,
            sourceQuestContent: a,
            withoutMarkdown: l,
            currentUser: c,
            popoutTargetElementRef: u,
            onGameSheetOpened: d,
            onGameSheetClosed: f,
        } = e,
        p = (0, o.I5)(c, _.p9.TIER_2),
        h = (0, s.Kr)(t.config),
        m = (0, s.$J)(t) && (0, s.$H)(t);
    if ((0, s.Pb)(t))
        return R({
            quest: t,
            taskDetails: n,
            sourceQuestContent: a,
            withoutMarkdown: l,
            popoutTargetElementRef: u,
            onGameSheetOpened: d,
            onGameSheetClosed: f,
        });
    if (m)
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: l,
            hasNitro: p,
            collectibleRewardDuration: h,
        });
    if ((0, s.$J)(t))
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: l,
            hasNitro: p,
            collectibleRewardDuration: h,
        });
    if ((0, s.$H)(t))
        return T({
            quest: t,
            taskDetails: n,
            withoutMarkdown: l,
            hasNitro: p,
            collectibleRewardDuration: h,
        });
    if ((0, s.oo)({ quest: t }))
        return S({
            quest: t,
            taskDetails: n,
            withoutMarkdown: l,
        });
    else if ((0, s.q8)(t)) return A(t, h, p, l);
    else if ((0, s.pO)(t))
        return C({
            quest: t,
            taskDetails: n,
            withoutMarkdown: l,
            questContent: r,
        });
    return null != i
        ? i.description
        : N({
              quest: t,
              taskDetails: n,
              withoutMarkdown: l,
              hasNitro: p,
              collectibleRewardDuration: h,
          });
}
function w(e) {
    var t;
    return P(
        E(m({}, e), {
            currentUser: null != (t = e.currentUser) ? t : a.default.getCurrentUser(),
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    );
}
function D(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        o = (0, l.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        c = (0, l.Jf)(t);
    return w(
        E(m({}, e), {
            connectedConsoleLinkOnClick: o,
            currentUser: s,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != c ? c : void 0,
        }),
    );
}
function x(e) {
    return (0, s.$J)(e) || (0, s.pO)(e) ? 0 : (0, s.Dr)({ quest: e }) ? 1 : (0, s.q8)(e) ? 2 : 3 * !!(0, s.Vl)(e);
}
function L(e) {
    return r.useMemo(() => x(e), [e]);
}
function j(e) {
    let { quest: t } = e;
    switch (L(t)) {
        case 0:
            if (t.config.features.includes(f.S7.CLOUD_GAMING_ACTIVITY)) return p.intl.string(p.t["+qoymJ"]);
            if (t.config.features.includes(f.S7.START_QUEST_CTA)) return p.intl.string(p.t["Ie9++v"]);
            return p.intl.string(p.t.l7E81t);
        case 1:
            return p.intl.string(p.t.l7E81t);
        case 2:
            return p.intl.string(p.t.umdNio);
        case 3:
            return t.config.features.includes(f.S7.START_QUEST_CTA)
                ? p.intl.string(p.t.hRIVy8)
                : p.intl.string(p.t.l7E81t);
    }
}
