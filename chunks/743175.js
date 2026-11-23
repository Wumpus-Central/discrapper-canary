n(321073);
var r = n(635377),
    s = n.n(r),
    u = n(855986),
    l = n(73153),
    i = n(994500),
    a = n(287809),
    c = n(160963);
n(163839);
let d = new (s())({ max: 10 });
function g(e) {
    let t = d.get(e);
    if (null != t) return t;
    let n = new (s())({ max: 5 });
    return (d.set(e, n), n);
}
function S(e, t) {
    return d.peek(e)?.peek(t) ?? null;
}
function h() {
    d.reset();
}
class o extends u.Ay.Store {
    static displayName = "SmartSearchResultsStore";
    initialize() {
        this.waitFor(i.A, a.default);
    }
    getAnswer(e, t) {
        return S(e, t)?.smartSearchResult ?? null;
    }
    getStatus(e, t) {
        return this.getAnswer(e, t)?.status ?? null;
    }
    hasAnswer(e, t) {
        return null != S(e, t);
    }
    getResultFeedback(e, t) {
        return S(e, t)?.hasPositiveFeedback ?? null;
    }
}
let E = new o(l.h, {
    SMART_SEARCH_FETCH_START: function (e) {
        let { smartSearchQuery: t } = e,
            { requestKey: n, guildId: r, queryText: s, channelIds: u } = t;
        g(r).set(n, {
            smartSearchResult: { status: c.o.LOADING, queryText: s, answerText: "", citations: [], channelIds: u },
            hasPositiveFeedback: null,
        });
    },
    SMART_SEARCH_FETCH_SUCCESS: function (e) {
        let { smartSearchQuery: t, smartSearchStatus: n, answerText: r, citations: s } = e,
            { requestKey: u, guildId: l, queryText: i, channelIds: a } = t;
        g(l).set(u, {
            smartSearchResult: { status: n, queryText: i, answerText: r, citations: s, channelIds: a },
            hasPositiveFeedback: null,
        });
    },
    SMART_SEARCH_FETCH_FAILURE: function (e) {
        let { smartSearchQuery: t, status: n } = e,
            { requestKey: r, guildId: s, queryText: u, channelIds: l } = t;
        g(s).set(r, {
            smartSearchResult: { status: n, queryText: u, answerText: "", citations: [], channelIds: l },
            hasPositiveFeedback: null,
        });
    },
    SMART_SEARCH_SET_RESULT_FEEDBACK: function (e) {
        let { smartSearchQuery: t, hasPositiveFeedback: n } = e,
            { requestKey: r, guildId: s } = t,
            u = S(s, r);
        if (null == u || u.hasPositiveFeedback === n) return !1;
        u.hasPositiveFeedback = n;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (!d.has(t.id)) return !1;
        d.del(t.id);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (null == t.guild_id) return !1;
        let n = d.peek(t.guild_id);
        if (null == n) return !1;
        let r = [];
        if (
            (n.forEach((e, n) => {
                (e.smartSearchResult.channelIds.includes(t.id) ||
                    e.smartSearchResult.citations.some((e) => e.channelId === t.id)) &&
                    r.push(n);
            }),
            0 === r.length)
        )
            return !1;
        r.forEach((e) => {
            n.del(e);
        });
    },
    CONNECTION_OPEN: h,
    LOGOUT: h,
});
n.d(t, {}, { A: E });
