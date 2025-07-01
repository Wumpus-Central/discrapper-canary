(n.d(t, {
    CR: () => k,
    DD: () => D,
    up: () => M
}),
    n(953529),
    n(388685));
var r = n(73800),
    i = n(442837),
    a = n(594174),
    o = n(111361),
    s = n(113434),
    l = n(918701),
    c = n(84298),
    u = n(5881),
    d = n(142590),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
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
let y = (0, u.T)({});
function O(e, t, n) {
    return n ? h.intl.formatToParts(e, t) : h.intl.formatToPlainString(e, t);
}
function v(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = f.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return O(
        (t = a && d ? (_ ? h.t['eb/SnZ'] : h.t.ziB0HB) : d || null != o ? h.t.AwuMRU : h.t.NIimTk),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: o,
            targetMinutes: c
        },
        i
    );
}
function I(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = f.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return O(
        (t = a && d ? (_ ? h.t['eb/SnZ'] : h.t.ziB0HB) : d || null != o ? h.t.AwuMRU : h.t.NIimTk),
        {
            gameTitle: u,
            targetMinutes: c,
            rewardNameWithArticle: s,
            duration: o,
            streamingDurationRequirement: c
        },
        i
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
    return O(
        (t = a && d ? (_ ? h.t['eb/SnZ'] : h.t.ziB0HB) : d || null != o ? h.t.AwuMRU : h.t.FZL5Q0),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            rewardNameWithArticle: s,
            duration: o,
            questReward: s
        },
        i
    );
}
function S(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        a = t.config.messages.gameTitle;
    return O(
        h.t['a/ia7O'],
        {
            gameTitle: a,
            streamingDurationRequirement: i
        },
        r
    );
}
function A(e, t, n, r, i) {
    var a;
    let o,
        s = f.r.build(e.config).defaultWatchVideoTask,
        c = null != (a = null == s ? void 0 : s.messages.videoTitle) ? a : 'video',
        u = f.r.build(e.config).defaultRewardNameWithArticle,
        d = (0, l.f$)(e.config),
        p = (0, l._p)(e.config);
    return O(
        (o = d && n ? (p ? h.t['xqX+r6'] : h.t['vs/xBg']) : d || null != t ? h.t['W/HkLC'] : e.id === _.V6 ? h.t.Rsd5bG : i ? h.t['g+InPD'] : h.t.yMsQ7e),
        {
            videoTitle: c,
            rewardNameWithArticle: u,
            duration: t
        },
        r
    );
}
function N(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = n.targetMinutes,
        a = f.r.build(t.config).defaultRewardNameWithArticle;
    return O(
        h.t.VYwSSk,
        {
            streamingDurationRequirement: i,
            questReward: a
        },
        r
    );
}
function C(e) {
    let t,
        { quest: n, taskDetails: r, withoutMarkdown: i, hasNitro: a, collectibleRewardDuration: o } = e,
        s = f.r.build(n.config).defaultRewardNameWithArticle,
        { targetMinutes: c } = r,
        u = n.config.messages.gameTitle,
        d = (0, l.f$)(n.config),
        _ = (0, l._p)(n.config);
    return O(
        (t = a && d ? (_ ? h.t['X8Yt//'] : h.t.smG9qq) : d || null != o ? h.t.BLyDvL : h.t['hkJ+Gh']),
        {
            gameTitle: u,
            streamingDurationRequirement: c,
            duration: o,
            questReward: s
        },
        i
    );
}
function R(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: r, withoutMarkdown: i, currentUser: a, withVideoQuestShortDescription: s = !1 } = e,
        c = (0, o.I5)(a, p.p9.TIER_2),
        u = (0, l.Kr)(t.config);
    if ((0, l.$J)(t) && (0, l.$H)(t))
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: c,
            collectibleRewardDuration: u
        });
    if ((0, l.$J)(t))
        return I({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: c,
            collectibleRewardDuration: u
        });
    if ((0, l.$H)(t))
        return T({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i,
            hasNitro: c,
            collectibleRewardDuration: u
        });
    if ((0, l.oo)({ quest: t }))
        return S({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, l.q8)(t)) return A(t, u, c, i, s);
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
              hasNitro: c,
              collectibleRewardDuration: u
          });
}
let P = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += P(n.content);
            return t;
        }
        return P(e.content);
    } catch (e) {
        return (y.error('Failed to convert ASTNode to string', e), '');
    }
};
function w(e) {
    var t, n;
    let r = R(
        b(g({}, e), {
            currentUser: null != (t = e.currentUser) ? t : a.default.getCurrentUser(),
            withVideoQuestShortDescription: null != (n = e.withVideoQuestShortDescription) && n
        })
    );
    return e.withoutMarkdown ? P(r) : r;
}
function D(e) {
    let { quest: t, questContent: n, sourceQuestContent: r } = e,
        o = (0, s.uA)({
            quest: t,
            questContent: n,
            sourceQuestContent: r
        }),
        l = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        c = (0, s.Jf)(t);
    return w(
        b(g({}, e), {
            connectedConsoleLinkOnClick: o,
            withoutMarkdown: !1,
            currentUser: l,
            thirdPartyTaskDetails: null != c ? c : void 0,
            withVideoQuestShortDescription: (0, d.z)({ location: e.location })
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
    let { quest: t } = e;
    switch (x(t)) {
        case 0:
        case 1:
            return h.intl.string(h.t.l7E81t);
        case 2:
            return h.intl.string(h.t.umdNio);
        case 3:
            return t.config.features.includes(_.S7.START_QUEST_CTA) ? h.intl.string(h.t.ToGcxM) : h.intl.string(h.t.l7E81t);
    }
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, c.f)({
        location: e,
        autoTrackExposure: t
    })
        ? h.intl.string(h.t.Av9jcX)
        : h.intl.string(h.t.cfY4PD);
}
