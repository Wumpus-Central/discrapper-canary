(n.d(t, {
    CR: () => L,
    DD: () => P
}),
    n(953529),
    n(388685));
var r = n(73800),
    i = n(442837),
    a = n(594174),
    o = n(111361),
    s = n(113434),
    l = n(918701),
    c = n(5881),
    u = n(566078),
    d = n(46140),
    _ = n(474936),
    f = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let E = (0, c.T)({});
function b(e, t, n) {
    return n ? f.intl.formatToParts(e, t) : f.intl.formatToPlainString(e, t);
}
function y(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = u.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, l.f$)(n.config),
        p = (0, l._p)(n.config);
    return b(
        (t = a && _ ? (p ? f.t['eb/SnZ'] : f.t.ziB0HB) : _ || null != o ? f.t.AwuMRU : f.t.NIimTk),
        {
            gameTitle: d,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: o,
            targetMinutes: c
        },
        i
    );
}
function O(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = u.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, l.f$)(n.config),
        p = (0, l._p)(n.config);
    return b(
        (t = a && _ ? (p ? f.t['eb/SnZ'] : f.t.ziB0HB) : _ || null != o ? f.t.AwuMRU : f.t.NIimTk),
        {
            gameTitle: d,
            targetMinutes: c,
            rewardNameWithArticle: s,
            duration: o,
            streamingDurationRequirement: c
        },
        i
    );
}
function v(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = u.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, l.f$)(n.config),
        p = (0, l._p)(n.config);
    return b(
        (t = a && _ ? (p ? f.t['eb/SnZ'] : f.t.ziB0HB) : _ || null != o ? f.t.AwuMRU : f.t.FZL5Q0),
        {
            gameTitle: d,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: o,
            questReward: s
        },
        i
    );
}
function I(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return b(
        f.t['a/ia7O'],
        {
            gameTitle: a,
            streamingDurationRequirement: i
        },
        r
    );
}
function T(e, t, n, r) {
    var i;
    let a,
        o = u.r.build(e.config).defaultWatchVideoTask,
        s = null != (i = null == o ? void 0 : o.messages.videoTitle) ? i : 'video',
        c = u.r.build(e.config).defaultRewardNameWithArticle,
        _ = (0, l.f$)(e.config),
        p = (0, l._p)(e.config);
    return b(
        (a = _ && n ? (p ? f.t['xqX+r6'] : f.t['vs/xBg']) : _ || null != t ? f.t['W/HkLC'] : e.id === d.V6 ? f.t.Rsd5bG : f.t['g+InPD']),
        {
            videoTitle: s,
            rewardNameWithArticle: c,
            duration: t
        },
        r
    );
}
function S(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = n.targetMinutes,
        a = u.r.build(t.config).defaultRewardNameWithArticle;
    return b(
        f.t.VYwSSk,
        {
            streamingDurationRequirement: i,
            questReward: a
        },
        r
    );
}
function A(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = u.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        d = n.config.messages.gameTitle,
        _ = (0, l.f$)(n.config),
        p = (0, l._p)(n.config);
    return b(
        (t = a && _ ? (p ? f.t['X8Yt//'] : f.t.smG9qq) : _ || null != o ? f.t.BLyDvL : f.t['hkJ+Gh']),
        {
            gameTitle: d,
            streamingDurationRequirement: c,
            duration: o,
            questReward: s
        },
        i
    );
}
function N(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: r, withoutMarkdown: i, currentUser: a } = e,
        s = (0, o.I5)(a, _.p9.TIER_2),
        c = (0, l.Kr)(t.config);
    if ((0, l.$J)(t) && (0, l.$H)(t))
        return y({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: s,
            collectibleRewardDuration: c
        });
    if ((0, l.$J)(t))
        return O({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: s,
            collectibleRewardDuration: c
        });
    if ((0, l.$H)(t))
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: s,
            collectibleRewardDuration: c
        });
    if ((0, l.oo)({ quest: t }))
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, l.q8)(t)) return T(t, c, s, i);
    else if ((0, l.pO)(t))
        return S({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    return null != r
        ? r.description
        : A({
              quest: t,
              taskDetails: n,
              withoutMarkdown: i,
              hasNitro: s,
              collectibleRewardDuration: c
          });
}
let C = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += C(n.content);
            return t;
        }
        return C(e.content);
    } catch (e) {
        return (E.error('Failed to convert ASTNode to string', e), '');
    }
};
function R(e) {
    var t;
    let n = N(g(h({}, e), { currentUser: null != (t = e.currentUser) ? t : a.default.getCurrentUser() }));
    return e.withoutMarkdown ? C(n) : n;
}
function P(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        o = (0, s.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r
        }),
        l = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        c = (0, s.Jf)(t);
    return R(
        g(h({}, e), {
            connectedConsoleLinkOnClick: o,
            withoutMarkdown: !1,
            currentUser: l,
            thirdPartyTaskDetails: null != c ? c : void 0
        })
    );
}
function w(e) {
    return (0, l.$J)(e) || (0, l.pO)(e) ? 0 : (0, l.Dr)({ quest: e }) ? 1 : (0, l.q8)(e) ? 2 : 3 * !!(0, l.Vl)(e);
}
function D(e) {
    return r.useMemo(() => w(e), [e]);
}
function L(e) {
    let { quest: t } = e;
    switch (D(t)) {
        case 0:
        case 1:
            return f.intl.string(f.t.l7E81t);
        case 2:
            return f.intl.string(f.t.umdNio);
        case 3:
            return t.config.features.includes(d.S7.START_QUEST_CTA) ? f.intl.string(f.t.ToGcxM) : f.intl.string(f.t.l7E81t);
    }
}
