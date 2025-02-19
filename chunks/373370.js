n.d(t, {
    CR: () => C,
    DD: () => T,
    mK: () => R
}),
    n(266796),
    n(47120);
var r = n(192379),
    i = n(113434),
    o = n(918701),
    a = n(467628),
    s = n(5881),
    l = n(566078),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = (0, s.T)({});
function h(e, t, n) {
    return n ? c.NW.formatToParts(e, t) : c.NW.formatToPlainString(e, t);
}
function m(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        a = (0, o.Kr)(t.config),
        { targetMinutes: s } = n,
        u = t.config.messages.gameTitle;
    return (0, o.f$)(t.config) && null != a
        ? h(
              c.t.fSYpaW,
              {
                  gameTitle: u,
                  rewardNameWithArticle: i,
                  targetMinutes: s,
                  duration: a
              },
              r
          )
        : h(
              null != a ? c.t.Ta44ur : c.t.NIimTk,
              {
                  gameTitle: u,
                  rewardNameWithArticle: i,
                  targetMinutes: s,
                  duration: a
              },
              r
          );
}
function g(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        a = (0, o.Kr)(t.config),
        { targetMinutes: s } = n,
        u = t.config.messages.gameTitle,
        d = (0, o.f$)(t.config) ? c.t.fSYpaW : c.t.Ta44ur;
    return h(
        null != a ? d : c.t.NIimTk,
        {
            gameTitle: u,
            targetMinutes: s,
            rewardNameWithArticle: i,
            duration: a
        },
        r
    );
}
function E(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = l.r.build(t.config).defaultReward.messages.nameWithArticle,
        a = (0, o.Kr)(t.config),
        { targetMinutes: s } = n,
        u = t.config.messages.gameTitle,
        d = (0, o.f$)(t.config) ? c.t.Lc6EpK : c.t.AwuMRU;
    return h(
        null != a ? d : c.t.FZL5Q0,
        {
            gameTitle: u,
            streamingDurationRequirement: s,
            rewardNameWithArticle: i,
            duration: a,
            questReward: i
        },
        r
    );
}
function v(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        { targetMinutes: i } = n,
        o = t.config.messages.gameTitle;
    return h(
        c.t['a/ia7O'],
        {
            gameTitle: o,
            streamingDurationRequirement: i
        },
        r
    );
}
function b(e, t, n) {
    var r, i;
    let o = null !== (i = null === (r = e.config.videoMetadata) || void 0 === r ? void 0 : r.messages.videoTitle) && void 0 !== i ? i : 'video',
        a = l.r.build(e.config).defaultReward.messages.nameWithArticle;
    return h(
        c.t.yMsQ7e,
        {
            videoTitle: o,
            rewardNameWithArticle: a
        },
        n
    );
}
function y(e) {
    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
        i = n.targetMinutes,
        o = l.r.build(t.config).defaultReward.messages.nameWithArticle;
    return h(
        c.t.VYwSSk,
        {
            streamingDurationRequirement: i,
            questReward: o
        },
        r
    );
}
function O(e) {
    let { quest: t, taskDetails: n, thirdPartyTaskDetails: r, withoutMarkdown: i, withSimplifiedCopy: a } = e;
    if (a)
        switch (N(t)) {
            case 0:
                return h(
                    c.t.goA6o6,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    i
                );
            case 1:
                return h(
                    c.t.NmzoDg,
                    {
                        targetMinutes: n.targetMinutes,
                        gameTitle: t.config.messages.gameTitle
                    },
                    i
                );
            case 2:
                var s, u;
                return h(
                    c.t.zus71N,
                    {
                        targetMinutes: n.targetMinutes,
                        videoTitle: null !== (u = null === (s = t.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoTitle) && void 0 !== u ? u : 'video'
                    },
                    i
                );
        }
    let d = t.config.messages.gameTitle,
        { targetMinutes: f } = n,
        p = (0, o.Kr)(t.config);
    if ((0, o.$J)(t) && (0, o.$H)(t))
        return m({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, o.$J)(t))
        return g({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, o.$H)(t))
        return E({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, o.oo)({ quest: t }))
        return v({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if ((0, o.q8)(t)) return b(t, p, i);
    else if ((0, o.pO)(t))
        return y({
            quest: t,
            taskDetails: n,
            withoutMarkdown: i
        });
    if (null != r) return r.description;
    let _ = (0, o.f$)(t.config) ? c.t.KYP2pa : c.t.BLyDvL;
    return h(
        null != p ? _ : c.t['hkJ+Gh'],
        {
            gameTitle: d,
            streamingDurationRequirement: f,
            questReward: l.r.build(t.config).defaultReward.messages.nameWithArticle,
            duration: p
        },
        i
    );
}
let S = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += S(n.content);
            return t;
        }
        return S(e.content);
    } catch (e) {
        return _.error('Failed to convert ASTNode to string', e), '';
    }
};
function I(e) {
    let t = O(e);
    return e.withoutMarkdown ? S(t) : t;
}
function T(e) {
    let { quest: t, location: n, questContent: r } = e,
        o = (0, i.uA)({
            quest: t,
            questContent: r
        });
    return I(
        p(d({}, e), {
            connectedConsoleLinkOnClick: o,
            withoutMarkdown: !1,
            withSimplifiedCopy: (0, a.j)({ location: n })
        })
    );
}
function N(e) {
    return (0, o.$J)(e) || (0, o.pO)(e) ? 0 : (0, o.Dr)({ quest: e }) ? 1 : 2 * !!(0, o.q8)(e);
}
function A(e) {
    return r.useMemo(() => N(e), [e]);
}
function C(e) {
    let { quest: t, location: n, autoTrackExposure: r = !0 } = e,
        i = A(t),
        o = (0, a.j)({
            location: n,
            autoTrackExposure: r
        });
    switch (i) {
        case 0:
            return o ? c.NW.string(c.t.Y7LIPT) : c.NW.string(c.t.l7E81t);
        case 1:
            return o ? c.NW.string(c.t.hyrGU1) : c.NW.string(c.t.l7E81t);
        case 2:
            return c.NW.string(c.t.umdNio);
    }
}
function R(e) {
    let t = r.useMemo(() => (0, o.f$)(e), [e]),
        n = r.useMemo(() => (0, o._p)(e), [e]);
    return t ? (n ? c.NW.string(c.t.hh7Rb2) : c.NW.string(c.t.GYGb3N)) : null;
}
