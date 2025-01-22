r.d(n, {
    D: function () {
        return I;
    }
});
var i = r(47120);
var a = r(113434),
    o = r(918701),
    s = r(5881),
    l = r(665430),
    u = r(566078),
    c = r(388032);
let d = (0, s.T)({});
function f(e, n, r) {
    return r ? c.intl.formatToParts(e, n) : c.intl.formatToPlainString(e, n);
}
function p(e) {
    var n;
    let { quest: r, taskDetails: i, connectedConsoleLinkOnClick: a, withoutMarkdown: s, isEligibleForMobileGA: l } = e,
        d = u.r.build(r.config).defaultReward.messages.nameWithArticle,
        p = (null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        h = (0, o.Kr)(r.config),
        { targetMinutes: _ } = i,
        m = r.config.messages.gameTitle;
    return (0, o.f$)(r.config) && null != h
        ? f(
              p && !l ? c.t['34NW5e'] : c.t.fSYpaW,
              {
                  gameTitle: m,
                  reward: d,
                  streamingDurationRequirement: _,
                  rewardNameWithArticle: d,
                  targetMinutes: _,
                  onClick: a,
                  duration: h
              },
              s
          )
        : f(
              null != h ? (p && !l ? c.t.a5ADjY : c.t.Ta44ur) : c.t.NIimTk,
              {
                  gameTitle: m,
                  reward: d,
                  streamingDurationRequirement: _,
                  rewardNameWithArticle: d,
                  targetMinutes: _,
                  onClick: a,
                  duration: h
              },
              s
          );
}
function h(e) {
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        a = u.r.build(n.config).defaultReward.messages.nameWithArticle,
        s = (0, o.Kr)(n.config),
        { targetMinutes: l } = r,
        d = n.config.messages.gameTitle,
        p = (0, o.f$)(n.config) ? c.t.fSYpaW : c.t.Ta44ur;
    return f(
        null != s ? p : c.t.NIimTk,
        {
            gameTitle: d,
            targetMinutes: l,
            rewardNameWithArticle: a,
            duration: s
        },
        i
    );
}
function _(e) {
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        a = u.r.build(n.config).defaultReward.messages.nameWithArticle,
        s = (0, o.Kr)(n.config),
        { targetMinutes: l } = r,
        d = n.config.messages.gameTitle,
        p = (0, o.f$)(n.config) ? c.t.Lc6EpK : c.t.AwuMRU;
    return f(
        null != s ? p : c.t.FZL5Q0,
        {
            gameTitle: d,
            streamingDurationRequirement: l,
            rewardNameWithArticle: a,
            duration: s,
            questReward: a
        },
        i
    );
}
function m(e) {
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        { targetMinutes: a } = r,
        o = n.config.messages.gameTitle;
    return f(
        c.t['a/ia7O'],
        {
            gameTitle: o,
            streamingDurationRequirement: a
        },
        i
    );
}
function g(e, n, r) {
    var i, a;
    let o = null !== (a = null === (i = e.config.videoMetadata) || void 0 === i ? void 0 : i.messages.videoTitle) && void 0 !== a ? a : 'video',
        s = u.r.build(e.config).defaultReward.messages.nameWithArticle;
    return f(
        c.t.yMsQ7e,
        {
            videoTitle: o,
            rewardNameWithArticle: s
        },
        r
    );
}
function E(e) {
    let { quest: n, taskDetails: r, withoutMarkdown: i } = e,
        a = r.targetMinutes,
        o = u.r.build(n.config).defaultReward.messages.nameWithArticle;
    return f(
        c.t.VYwSSk,
        {
            streamingDurationRequirement: a,
            questReward: o
        },
        i
    );
}
function v(e) {
    let { quest: n, taskDetails: r, isEligibleForMobileGA: i, connectedConsoleLinkOnClick: a, thirdPartyTaskDetails: s, withoutMarkdown: l } = e,
        d = n.config.messages.gameTitle,
        v = u.r.build(n.config).defaultReward.messages.nameWithArticle,
        { targetMinutes: y } = r,
        b = (0, o.Kr)(n.config);
    if ((0, o.$J)(n) && (0, o.$H)(n))
        return p({
            quest: n,
            taskDetails: r,
            connectedConsoleLinkOnClick: a,
            withoutMarkdown: l,
            isEligibleForMobileGA: i
        });
    if ((0, o.$J)(n))
        return h({
            quest: n,
            taskDetails: r,
            withoutMarkdown: l
        });
    if ((0, o.$H)(n))
        return _({
            quest: n,
            taskDetails: r,
            withoutMarkdown: l
        });
    else if ((0, o.oo)({ quest: n }))
        return m({
            quest: n,
            taskDetails: r,
            withoutMarkdown: l
        });
    else if ((0, o.q8)(n)) return g(n, b, l);
    else if ((0, o.pO)(n))
        return E({
            quest: n,
            taskDetails: r,
            withoutMarkdown: l
        });
    if (null != s) return s.description;
    let I = (0, o.f$)(n.config) ? c.t.KYP2pa : c.t.BLyDvL;
    return f(
        null != b ? I : c.t['hkJ+Gh'],
        {
            gameTitle: d,
            streamingDurationRequirement: y,
            questReward: v,
            duration: b
        },
        l
    );
}
let y = (e) => {
    try {
        let n = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let r of e) n += y(r.content);
            return n;
        }
        return y(e.content);
    } catch (e) {
        return d.error('Failed to convert ASTNode to string', e), '';
    }
};
function b(e) {
    let n = v(e);
    return e.withoutMarkdown ? y(n) : n;
}
function I(e) {
    let { quest: n, location: r, questContent: i } = e,
        o = (0, l.pF)({ location: r }),
        s = (0, a.uA)({
            quest: n,
            questContent: i
        });
    return b({
        ...e,
        isEligibleForMobileGA: o,
        connectedConsoleLinkOnClick: s,
        withoutMarkdown: !1
    });
}
