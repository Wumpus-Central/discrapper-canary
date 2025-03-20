n.d(t, {
    CR: () => L,
    DD: () => P,
    mK: () => x
}),
    n(266796),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(594174),
    a = n(111361),
    s = n(113434),
    l = n(918701),
    c = n(467628),
    u = n(5881),
    d = n(566078),
    f = n(474936),
    _ = n(388032);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let E = (0, u.T)({});
function b(e, t, n) {
    return n ? _.NW.formatToParts(e, t) : _.NW.formatToPlainString(e, t);
}
function v(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = d.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, l.f$)(n.config),
        p = (0, l._p)(n.config);
    return b(
        (t = o && f ? (p ? _.t['eb/SnZ'] : _.t.ziB0HB) : f || null != a ? _.t.AwuMRU : _.t.NIimTk),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: a,
            targetMinutes: c
        },
        i
    );
}
function y(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = d.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, l.f$)(n.config),
        p = (0, l._p)(n.config);
    return b(
        (t = o && f ? (p ? _.t['eb/SnZ'] : _.t.ziB0HB) : f || null != a ? _.t.AwuMRU : _.t.NIimTk),
        {
            gameTitle: u,
            targetMinutes: c,
            rewardNameWithArticle: s,
            duration: a,
            streamingDurationRequirement: c
        },
        i
    );
}
function O(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = d.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, l.f$)(n.config),
        p = (0, l._p)(n.config);
    return b(
        (t = o && f ? (p ? _.t['eb/SnZ'] : _.t.ziB0HB) : f || null != a ? _.t.AwuMRU : _.t.FZL5Q0),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: a,
            questReward: s
        },
        i
    );
}
function I(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        o = t.config.messages.gameTitle;
    return b(
        _.t['a/ia7O'],
        {
            gameTitle: o,
            streamingDurationRequirement: i
        },
        r
    );
}
function S(e, t, n, r) {
    var i, o;
    let a;
    let s = null !== (o = null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.messages.videoTitle) && void 0 !== o ? o : 'video',
        c = d.r.build(e.config).defaultReward.messages.nameWithArticle,
        u = (0, l.f$)(e.config),
        f = (0, l._p)(e.config);
    return b(
        (a = u && n ? (f ? _.t['xqX+r6'] : _.t['vs/xBg']) : u ? _.t['W/HkLC'] : _.t.yMsQ7e),
        {
            videoTitle: s,
            rewardNameWithArticle: c,
            duration: t
        },
        r
    );
}
function T(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = n.targetMinutes,
        o = d.r.build(t.config).defaultReward.messages.nameWithArticle;
    return b(
        _.t.VYwSSk,
        {
            streamingDurationRequirement: i,
            questReward: o
        },
        r
    );
}
function N(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = d.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, l.f$)(n.config),
        p = (0, l._p)(n.config);
    return b(
        (t = o && f ? (p ? _.t['X8Yt//'] : _.t.smG9qq) : f || null != a ? _.t.BLyDvL : _.t['hkJ+Gh']),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            duration: a,
            questReward: s
        },
        i
    );
}
function A(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: r, withoutMarkdown: i, withSimplifiedCopy: o, currentUser: s } = e;
    if (o)
        switch (w(t)) {
            case 0:
                return b(
                    _.t.goA6o6,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    i
                );
            case 1:
                return b(
                    _.t.NmzoDg,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    i
                );
            case 2:
                var c, u;
                return b(
                    _.t.zus71N,
                    {
                        targetMinutes: n.targetMinutes,
                        videoTitle: null !== (u = null === (c = t.config.videoMetadata) || void 0 === c ? void 0 : c.messages.videoTitle) && void 0 !== u ? u : 'video'
                    },
                    i
                );
        }
    let d = (0, a.I5)(s, f.p9.TIER_2),
        p = (0, l.Kr)(t.config);
    if ((0, l.$J)(t) && (0, l.$H)(t))
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: d,
            collectibleRewardDuration: p
        });
    if ((0, l.$J)(t))
        return y({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: d,
            collectibleRewardDuration: p
        });
    if ((0, l.$H)(t))
        return O({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: d,
            collectibleRewardDuration: p
        });
    if ((0, l.oo)({ quest: t }))
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, l.q8)(t)) return S(t, p, d, i);
    else if ((0, l.pO)(t))
        return T({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    return null != r
        ? r.description
        : N({
              quest: t,
              taskDetails: n,
              withoutMarkdown: i,
              hasNitro: d,
              collectibleRewardDuration: p
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
        return E.error('Failed to convert ASTNode to string', e), '';
    }
};
function R(e) {
    var t;
    let n = A(g(h({}, e), { currentUser: null !== (t = e.currentUser) && void 0 !== t ? t : o.default.getCurrentUser() }));
    return e.withoutMarkdown ? C(n) : n;
}
function P(e) {
    let { quest: t, location: n, questContent: r } = e,
        a = (0, s.uA)({
            quest: t,
            questContent: r
        }),
        l = (0, i.e7)([o.default], () => o.default.getCurrentUser());
    return R(
        g(h({}, e), {
            connectedConsoleLinkOnClick: a,
            withoutMarkdown: !1,
            withSimplifiedCopy: (0, c.j)({ location: n }),
            currentUser: l
        })
    );
}
function w(e) {
    return (0, l.$J)(e) || (0, l.pO)(e) ? 0 : (0, l.Dr)({ quest: e }) ? 1 : 2 * !!(0, l.q8)(e);
}
function D(e) {
    return r.useMemo(() => w(e), [e]);
}
function L(e) {
    let { quest: t, location: n, autoTrackExposure: r = !0 } = e,
        i = D(t),
        o = (0, c.j)({
            location: n,
            autoTrackExposure: r
        });
    switch (i) {
        case 0:
            return o ? _.NW.string(_.t.Y7LIPT) : _.NW.string(_.t.l7E81t);
        case 1:
            return o ? _.NW.string(_.t.hyrGU1) : _.NW.string(_.t.l7E81t);
        case 2:
            return _.NW.string(_.t.umdNio);
    }
}
function x(e) {
    let t = r.useMemo(() => (0, l.f$)(e), [e]),
        n = r.useMemo(() => (0, l._p)(e), [e]);
    return t ? (n ? _.NW.string(_.t.hh7Rb2) : _.NW.string(_.t.GYGb3N)) : null;
}
