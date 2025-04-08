n.d(t, {
    CR: () => x,
    DD: () => w,
    mK: () => M
}),
    n(953529),
    n(388685);
var r = n(192379),
    i = n(442837),
    o = n(594174),
    a = n(111361),
    s = n(113434),
    l = n(918701),
    c = n(467628),
    u = n(5881),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
let b = (0, u.T)({});
function y(e, t, n) {
    return n ? p.NW.formatToParts(e, t) : p.NW.formatToPlainString(e, t);
}
function v(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = d.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return y(
        (t = o && f ? (_ ? p.t['eb/SnZ'] : p.t.ziB0HB) : f || null != a ? p.t.AwuMRU : p.t.NIimTk),
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
function O(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = d.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return y(
        (t = o && f ? (_ ? p.t['eb/SnZ'] : p.t.ziB0HB) : f || null != a ? p.t.AwuMRU : p.t.NIimTk),
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
function I(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = d.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return y(
        (t = o && f ? (_ ? p.t['eb/SnZ'] : p.t.ziB0HB) : f || null != a ? p.t.AwuMRU : p.t.FZL5Q0),
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
function S(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        o = t.config.messages.gameTitle;
    return y(
        p.t['a/ia7O'],
        {
            gameTitle: o,
            streamingDurationRequirement: i
        },
        r
    );
}
function T(e, t, n, r) {
    var i, o;
    let a,
        s = null != (o = null == (i = e.config.videoMetadata) ? void 0 : i.messages.videoTitle) ? o : 'video',
        c = d.r.build(e.config).defaultReward.messages.nameWithArticle,
        u = (0, l.f$)(e.config),
        _ = (0, l._p)(e.config);
    return y(
        (a = u && n ? (_ ? p.t['xqX+r6'] : p.t['vs/xBg']) : u || null != t ? p.t['W/HkLC'] : e.id === f.V6 ? p.t.Rsd5bG : p.t.yMsQ7e),
        {
            videoTitle: s,
            rewardNameWithArticle: c,
            duration: t
        },
        r
    );
}
function N(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = n.targetMinutes,
        o = d.r.build(t.config).defaultReward.messages.nameWithArticle;
    return y(
        p.t.VYwSSk,
        {
            streamingDurationRequirement: i,
            questReward: o
        },
        r
    );
}
function A(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = d.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        f = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return y(
        (t = o && f ? (_ ? p.t['X8Yt//'] : p.t.smG9qq) : f || null != a ? p.t.BLyDvL : p.t['hkJ+Gh']),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            duration: a,
            questReward: s
        },
        i
    );
}
function C(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: r, withoutMarkdown: i, withSimplifiedCopy: o, currentUser: s } = e;
    if (o)
        switch (D(t)) {
            case 0:
                return y(
                    p.t.goA6o6,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    i
                );
            case 1:
                return y(
                    p.t.NmzoDg,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    i
                );
            case 2:
                return p.NW.string(p.t['f/J8v7']);
            case 3:
                let c = d.r.build(t.config).defaultInGameTask;
                if (null != c) return c.description;
        }
    let u = (0, a.I5)(s, _.p9.TIER_2),
        f = (0, l.Kr)(t.config);
    if ((0, l.$J)(t) && (0, l.$H)(t))
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: u,
            collectibleRewardDuration: f
        });
    if ((0, l.$J)(t))
        return O({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: u,
            collectibleRewardDuration: f
        });
    if ((0, l.$H)(t))
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: u,
            collectibleRewardDuration: f
        });
    if ((0, l.oo)({ quest: t }))
        return S({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, l.q8)(t)) return T(t, f, u, i);
    else if ((0, l.pO)(t))
        return N({
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
              hasNitro: u,
              collectibleRewardDuration: f
          });
}
let R = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += R(n.content);
            return t;
        }
        return R(e.content);
    } catch (e) {
        return b.error('Failed to convert ASTNode to string', e), '';
    }
};
function P(e) {
    var t;
    let n = C(E(m({}, e), { currentUser: null != (t = e.currentUser) ? t : o.default.getCurrentUser() }));
    return e.withoutMarkdown ? R(n) : n;
}
function w(e) {
    let { quest: t, location: n, questContent: r } = e,
        a = (0, s.uA)({
            quest: t,
            questContent: r
        }),
        l = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        u = (0, s.Jf)(t);
    return P(
        E(m({}, e), {
            connectedConsoleLinkOnClick: a,
            withoutMarkdown: !1,
            withSimplifiedCopy: (0, c.j)({ location: n }),
            currentUser: l,
            thirdPartyTaskDetails: null != u ? u : void 0
        })
    );
}
function D(e) {
    return (0, l.$J)(e) || (0, l.pO)(e) ? 0 : (0, l.Dr)({ quest: e }) ? 1 : (0, l.q8)(e) ? 2 : 3 * !!(0, l.Vl)(e);
}
function L(e) {
    return r.useMemo(() => D(e), [e]);
}
function x(e) {
    let { quest: t, location: n, autoTrackExposure: r = !0 } = e,
        i = L(t),
        o = (0, c.j)({
            location: n,
            autoTrackExposure: r
        });
    switch (i) {
        case 0:
            return o ? p.NW.string(p.t.Y7LIPT) : p.NW.string(p.t.l7E81t);
        case 1:
            return o ? p.NW.string(p.t.hyrGU1) : p.NW.string(p.t.l7E81t);
        case 2:
            return p.NW.string(p.t.umdNio);
        case 3:
            return t.config.features.includes(f.S7.START_QUEST_CTA) ? p.NW.string(p.t.ToGcxM) : p.NW.string(p.t.l7E81t);
    }
}
function M(e) {
    let t = r.useMemo(() => (0, l.f$)(e), [e]),
        n = r.useMemo(() => (0, l._p)(e), [e]);
    return t ? (n ? p.NW.string(p.t.hh7Rb2) : p.NW.string(p.t.GYGb3N)) : null;
}
