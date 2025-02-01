n.d(t, {
    CR: () => S,
    DD: () => I,
    mK: () => A
}),
    n(47120);
var i = n(192379),
    r = n(113434),
    a = n(918701),
    s = n(467628),
    o = n(5881),
    l = n(566078),
    u = n(388032);
let c = (0, o.T)({});
function d(e, t, n) {
    return n ? u.intl.formatToParts(e, t) : u.intl.formatToPlainString(e, t);
}
function f(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: i } = e,
        r = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        s = (0, a.Kr)(t.config),
        { targetMinutes: o } = n,
        c = t.config.messages.gameTitle;
    return (0, a.f$)(t.config) && null != s
        ? d(
              u.t.fSYpaW,
              {
                  gameTitle: c,
                  rewardNameWithArticle: r,
                  targetMinutes: o,
                  duration: s
              },
              i
          )
        : d(
              null != s ? u.t.Ta44ur : u.t.NIimTk,
              {
                  gameTitle: c,
                  rewardNameWithArticle: r,
                  targetMinutes: o,
                  duration: s
              },
              i
          );
}
function _(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: i } = e,
        r = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        s = (0, a.Kr)(t.config),
        { targetMinutes: o } = n,
        c = t.config.messages.gameTitle,
        f = (0, a.f$)(t.config) ? u.t.fSYpaW : u.t.Ta44ur;
    return d(
        null != s ? f : u.t.NIimTk,
        {
            gameTitle: c,
            targetMinutes: o,
            rewardNameWithArticle: r,
            duration: s
        },
        i
    );
}
function p(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: i } = e,
        r = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        s = (0, a.Kr)(t.config),
        { targetMinutes: o } = n,
        c = t.config.messages.gameTitle,
        f = (0, a.f$)(t.config) ? u.t.Lc6EpK : u.t.AwuMRU;
    return d(
        null != s ? f : u.t.FZL5Q0,
        {
            gameTitle: c,
            streamingDurationRequirement: o,
            rewardNameWithArticle: r,
            duration: s,
            questReward: r
        },
        i
    );
}
function h(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: i } = e,
        { targetMinutes: r } = n,
        a = t.config.messages.gameTitle;
    return d(
        u.t['a/ia7O'],
        {
            gameTitle: a,
            streamingDurationRequirement: r
        },
        i
    );
}
function m(e, t, n) {
    var i, r;
    let a = null !== (r = null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.messages.videoTitle) && void 0 !== r ? r : 'video',
        s = l.r.build(e.config).defaultReward.messages.nameWithArticle;
    return d(
        u.t.yMsQ7e,
        {
            videoTitle: a,
            rewardNameWithArticle: s
        },
        n
    );
}
function g(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: i } = e,
        r = n.targetMinutes,
        a = l.r.build(t.config).defaultReward.messages.nameWithArticle;
    return d(
        u.t.VYwSSk,
        {
            streamingDurationRequirement: r,
            questReward: a
        },
        i
    );
}
function E(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: i, withoutMarkdown: r, withSimplifiedCopy: s } = e;
    if (s)
        switch (T(t)) {
            case 0:
                return d(
                    u.t.goA6o6,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    r
                );
            case 1:
                return d(
                    u.t.NmzoDg,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    r
                );
            case 2:
                var o, c;
                return d(
                    u.t.zus71N,
                    {
                        targetMinutes: n.targetMinutes,
                        videoTitle: null !== (c = null === (o = t.config.videoMetadata) || void 0 === o ? void 0 : o.messages.videoTitle) && void 0 !== c ? c : 'video'
                    },
                    r
                );
        }
    let E = t.config.messages.gameTitle,
        { targetMinutes: v } = n,
        y = (0, a.Kr)(t.config);
    if ((0, a.$J)(t) && (0, a.$H)(t))
        return f({
            quest: t,
            taskDetails: n,
            withoutMarkdown: r
        });
    if ((0, a.$J)(t))
        return _({
            quest: t,
            taskDetails: n,
            withoutMarkdown: r
        });
    if ((0, a.$H)(t))
        return p({
            quest: t,
            taskDetails: n,
            withoutMarkdown: r
        });
    if ((0, a.oo)({ quest: t }))
        return h({
            quest: t,
            taskDetails: n,
            withoutMarkdown: r
        });
    if ((0, a.q8)(t)) return m(t, y, r);
    else if ((0, a.pO)(t))
        return g({
            quest: t,
            taskDetails: n,
            withoutMarkdown: r
        });
    if (null != i) return i.description;
    let I = (0, a.f$)(t.config) ? u.t.KYP2pa : u.t.BLyDvL;
    return d(
        null != y ? I : u.t['hkJ+Gh'],
        {
            gameTitle: E,
            streamingDurationRequirement: v,
            questReward: l.r.build(t.config).defaultReward.messages.nameWithArticle,
            duration: y
        },
        r
    );
}
let v = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += v(n.content);
            return t;
        }
        return v(e.content);
    } catch (e) {
        return c.error('Failed to convert ASTNode to string', e), '';
    }
};
function y(e) {
    let t = E(e);
    return e.withoutMarkdown ? v(t) : t;
}
function I(e) {
    let { quest: t, location: n, questContent: i } = e,
        a = (0, r.uA)({
            quest: t,
            questContent: i
        });
    return y({
        ...e,
        connectedConsoleLinkOnClick: a,
        withoutMarkdown: !1,
        withSimplifiedCopy: (0, s.j)({ location: n })
    });
}
function T(e) {
    return (0, a.$J)(e) || (0, a.pO)(e) ? 0 : (0, a.Dr)({ quest: e }) ? 1 : (0, a.q8)(e) ? 2 : 0;
}
function b(e) {
    return i.useMemo(() => T(e), [e]);
}
function S(e) {
    let { quest: t, location: n, autoTrackExposure: i = !0 } = e,
        r = b(t),
        a = (0, s.j)({
            location: n,
            autoTrackExposure: i
        });
    switch (r) {
        case 0:
            return a ? u.intl.string(u.t.Y7LIPT) : u.intl.string(u.t.l7E81t);
        case 1:
            return a ? u.intl.string(u.t.hyrGU1) : u.intl.string(u.t.l7E81t);
        case 2:
            return u.intl.string(u.t.umdNio);
    }
}
function A(e) {
    let t = i.useMemo(() => (0, a.f$)(e), [e]),
        n = i.useMemo(() => (0, a._p)(e), [e]);
    return t ? (n ? u.intl.string(u.t.hh7Rb2) : u.intl.string(u.t.GYGb3N)) : null;
}
