n.d(t, {
    CR: () => P,
    DD: () => N,
}),
    n(953529);
var r = n(73800),
    i = n(442837),
    a = n(594174),
    o = n(111361),
    s = n(509212),
    l = n(113434),
    c = n(566078),
    u = n(46140),
    d = n(474936),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return r && !n ? f.intl.format(e, t) : f.intl.formatToPlainString(e, t);
}
function E(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = c.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: u, isSponsoredQuest: d } = r,
        _ = n.config.messages.gameTitle,
        p = (0, s.f$)(n.config),
        h = (0, s._p)(n.config);
    return g(
        (t = d ? f.t.BfgxRk : a && p ? (h ? f.t["eb/SnZ"] : f.t.ziB0HB) : p || null != o ? f.t.AwuMRU : f.t.NIimTk),
        {
            gameTitle: _,
            streamingDurationRequirement: u,
            rewardNameWithArticle: l,
            duration: o,
            targetMinutes: u,
            onClick: () => {},
        },
        i,
        d,
    );
}
function b(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = c.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: u } = r,
        d = n.config.messages.gameTitle,
        _ = (0, s.f$)(n.config),
        p = (0, s._p)(n.config);
    return g(
        (t = a && _ ? (p ? f.t["eb/SnZ"] : f.t.ziB0HB) : _ || null != o ? f.t.AwuMRU : f.t.NIimTk),
        {
            gameTitle: d,
            targetMinutes: u,
            rewardNameWithArticle: l,
            duration: o,
            streamingDurationRequirement: u,
        },
        i,
    );
}
function y(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = c.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: u, isSponsoredQuest: d } = r,
        _ = n.config.messages.gameTitle,
        p = (0, s.f$)(n.config),
        h = (0, s._p)(n.config);
    return g(
        (t = d ? f.t.BfgxRk : a && p ? (h ? f.t["eb/SnZ"] : f.t.ziB0HB) : p || null != o ? f.t.AwuMRU : f.t.FZL5Q0),
        {
            gameTitle: _,
            streamingDurationRequirement: u,
            rewardNameWithArticle: l,
            duration: o,
            questReward: l,
            targetMinutes: u,
            onClick: () => {},
        },
        i,
    );
}
function O(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return g(
        f.t["a/ia7O"],
        {
            gameTitle: a,
            streamingDurationRequirement: i,
        },
        r,
    );
}
function v(e, t, n, r) {
    var i;
    let a,
        o = c.r.build(e.config).defaultWatchVideoTask,
        l = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : "video",
        d = c.r.build(e.config).defaultRewardNameWithArticle,
        _ = (0, s.f$)(e.config),
        p = (0, s._p)(e.config);
    return g(
        (a =
            _ && n
                ? p
                    ? f.t["xqX+r6"]
                    : f.t["vs/xBg"]
                : _ || null != t
                  ? f.t["W/HkLC"]
                  : e.id === u.V6
                    ? f.t.Rsd5bG
                    : f.t["g+InPD"]),
        {
            videoTitle: l,
            rewardNameWithArticle: d,
            duration: t,
        },
        r,
    );
}
function I(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = n.targetMinutes,
        a = c.r.build(t.config).defaultRewardNameWithArticle;
    return g(
        f.t.VYwSSk,
        {
            streamingDurationRequirement: i,
            questReward: a,
        },
        r,
    );
}
function T(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        l = c.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: u } = r,
        d = n.config.messages.gameTitle,
        _ = (0, s.f$)(n.config),
        p = (0, s._p)(n.config);
    return g(
        (t = a && _ ? (p ? f.t["X8Yt//"] : f.t.smG9qq) : _ || null != o ? f.t.BLyDvL : f.t["hkJ+Gh"]),
        {
            gameTitle: d,
            streamingDurationRequirement: u,
            duration: o,
            questReward: l,
        },
        i,
    );
}
function S(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: r, withoutMarkdown: i, currentUser: a } = e,
        l = (0, o.I5)(a, d.p9.TIER_2),
        c = (0, s.Kr)(t.config);
    if ((0, s.$J)(t) && (0, s.$H)(t))
        return E({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: l,
            collectibleRewardDuration: c,
        });
    if ((0, s.$J)(t))
        return b({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: l,
            collectibleRewardDuration: c,
        });
    if ((0, s.$H)(t))
        return y({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: l,
            collectibleRewardDuration: c,
        });
    if ((0, s.oo)({ quest: t }))
        return O({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
        });
    if ((0, s.q8)(t)) return v(t, c, l, i);
    else if ((0, s.pO)(t))
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
        });
    return null != r
        ? r.description
        : T({
              quest: t,
              taskDetails: n,
              withoutMarkdown: i,
              hasNitro: l,
              collectibleRewardDuration: c,
          });
}
function A(e) {
    var t;
    return S(m(p({}, e), { currentUser: null != (t = e.currentUser) ? t : a.default.getCurrentUser() }));
}
function N(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        o = (0, l.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r,
        }),
        s = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        c = (0, l.Jf)(t);
    return A(
        m(p({}, e), {
            connectedConsoleLinkOnClick: o,
            currentUser: s,
            withoutMarkdown: !1,
            thirdPartyTaskDetails: null != c ? c : void 0,
        }),
    );
}
function C(e) {
    return (0, s.$J)(e) || (0, s.pO)(e) ? 0 : (0, s.Dr)({ quest: e }) ? 1 : (0, s.q8)(e) ? 2 : 3 * !!(0, s.Vl)(e);
}
function R(e) {
    return r.useMemo(() => C(e), [e]);
}
function P(e) {
    let { quest: t } = e;
    switch (R(t)) {
        case 0:
        case 1:
            return f.intl.string(f.t.l7E81t);
        case 2:
            return f.intl.string(f.t.umdNio);
        case 3:
            return t.config.features.includes(u.S7.START_QUEST_CTA)
                ? f.intl.string(f.t.ToGcxM)
                : f.intl.string(f.t.l7E81t);
    }
}
