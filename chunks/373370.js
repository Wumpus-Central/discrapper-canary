n.d(t, {
    CR: () => k,
    DD: () => D,
    mK: () => M,
    up: () => j
}),
    n(953529),
    n(388685);
var r = n(73800),
    i = n(442837),
    o = n(594174),
    a = n(111361),
    s = n(113434),
    l = n(918701),
    c = n(467628),
    u = n(84298),
    d = n(5881),
    f = n(566078),
    _ = n(46140),
    p = n(474936),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = (0, d.T)({});
function O(e, t, n) {
    return n ? h.intl.formatToParts(e, t) : h.intl.formatToPlainString(e, t);
}
function v(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = f.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return O(
        (t = o && d ? (_ ? h.t['eb/SnZ'] : h.t.ziB0HB) : d || null != a ? h.t.AwuMRU : h.t.NIimTk),
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
function I(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = f.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return O(
        (t = o && d ? (_ ? h.t['eb/SnZ'] : h.t.ziB0HB) : d || null != a ? h.t.AwuMRU : h.t.NIimTk),
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
function S(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = f.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return O(
        (t = o && d ? (_ ? h.t['eb/SnZ'] : h.t.ziB0HB) : d || null != a ? h.t.AwuMRU : h.t.FZL5Q0),
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
function T(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        o = t.config.messages.gameTitle;
    return O(
        h.t['a/ia7O'],
        {
            gameTitle: o,
            streamingDurationRequirement: i
        },
        r
    );
}
function A(e, t, n, r) {
    var i, o;
    let a,
        s = null != (o = null == (i = e.config.videoMetadata) ? void 0 : i.messages.videoTitle) ? o : 'video',
        c = f.r.build(e.config).defaultReward.messages.nameWithArticle,
        u = (0, l.f$)(e.config),
        d = (0, l._p)(e.config);
    return O(
        (a = u && n ? (d ? h.t['xqX+r6'] : h.t['vs/xBg']) : u || null != t ? h.t['W/HkLC'] : e.id === _.V6 ? h.t.Rsd5bG : h.t.yMsQ7e),
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
        o = f.r.build(t.config).defaultReward.messages.nameWithArticle;
    return O(
        h.t.VYwSSk,
        {
            streamingDurationRequirement: i,
            questReward: o
        },
        r
    );
}
function C(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: o, collectibleRewardDuration: a } = e,
        s = f.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return O(
        (t = o && d ? (_ ? h.t['X8Yt//'] : h.t.smG9qq) : d || null != a ? h.t.BLyDvL : h.t['hkJ+Gh']),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            duration: a,
            questReward: s
        },
        i
    );
}
function P(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: r, withoutMarkdown: i, withSimplifiedCopy: o, currentUser: s } = e;
    if (o)
        switch (L(t)) {
            case 0:
                return O(
                    h.t.goA6o6,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    i
                );
            case 1:
                return O(
                    h.t.NmzoDg,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    i
                );
            case 2:
                return h.intl.string(h.t['f/J8v7']);
            case 3:
                let c = f.r.build(t.config).defaultInGameTask;
                if (null != c) return c.messages.taskDescription;
        }
    let u = (0, a.I5)(s, p.p9.TIER_2),
        d = (0, l.Kr)(t.config);
    if ((0, l.$J)(t) && (0, l.$H)(t))
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: u,
            collectibleRewardDuration: d
        });
    if ((0, l.$J)(t))
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: u,
            collectibleRewardDuration: d
        });
    if ((0, l.$H)(t))
        return S({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: u,
            collectibleRewardDuration: d
        });
    if ((0, l.oo)({ quest: t }))
        return T({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, l.q8)(t)) return A(t, d, u, i);
    else if ((0, l.pO)(t))
        return N({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    return null != r
        ? r.description
        : C({
              quest: t,
              taskDetails: n,
              withoutMarkdown: i,
              hasNitro: u,
              collectibleRewardDuration: d
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
        return y.error('Failed to convert ASTNode to string', e), '';
    }
};
function w(e) {
    var t;
    let n = P(b(g({}, e), { currentUser: null != (t = e.currentUser) ? t : o.default.getCurrentUser() }));
    return e.withoutMarkdown ? R(n) : n;
}
function D(e) {
    let { quest: t, location: n, questContent: r } = e,
        a = (0, s.uA)({
            quest: t,
            questContent: r
        }),
        l = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        u = (0, s.Jf)(t);
    return w(
        b(g({}, e), {
            connectedConsoleLinkOnClick: a,
            withoutMarkdown: !1,
            withSimplifiedCopy: (0, c.j)({ location: n }),
            currentUser: l,
            thirdPartyTaskDetails: null != u ? u : void 0
        })
    );
}
function L(e) {
    return (0, l.$J)(e) || (0, l.pO)(e) ? 0 : (0, l.Dr)({ quest: e }) ? 1 : (0, l.q8)(e) ? 2 : 3 * !!(0, l.Vl)(e);
}
function x(e) {
    return r.useMemo(() => L(e), [e]);
}
function k(e) {
    let { quest: t, location: n, autoTrackExposure: r = !0 } = e,
        i = x(t),
        o = (0, c.j)({
            location: n,
            autoTrackExposure: r
        });
    switch (i) {
        case 0:
            return o ? h.intl.string(h.t.Y7LIPT) : h.intl.string(h.t.l7E81t);
        case 1:
            return o ? h.intl.string(h.t.hyrGU1) : h.intl.string(h.t.l7E81t);
        case 2:
            return h.intl.string(h.t.umdNio);
        case 3:
            return t.config.features.includes(_.S7.START_QUEST_CTA) ? h.intl.string(h.t.ToGcxM) : h.intl.string(h.t.l7E81t);
    }
}
function M(e) {
    let t = r.useMemo(() => (0, l.f$)(e), [e]),
        n = r.useMemo(() => (0, l._p)(e), [e]);
    return t ? (n ? h.intl.string(h.t.hh7Rb2) : h.intl.string(h.t.GYGb3N)) : null;
}
function j(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, u.f)({
        location: e,
        autoTrackExposure: t
    })
        ? h.intl.string(h.t.Av9jcX)
        : h.intl.string(h.t.cfY4PD);
}
