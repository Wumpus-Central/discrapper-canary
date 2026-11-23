n(321073);
var r = n(635377),
    s = n.n(r),
    u = n(855986),
    l = n(73153),
    i = n(583231);
n(163839);
let a = [],
    c = new (s())({ max: 5 }),
    d = new (s())({ max: 5 });
function g(e, t, n) {
    let r = e.get(t);
    if (null != r) return r;
    let s = { guildId: n, currentIndex: 0, suggestedSearches: a, isLoading: !1, requestId: null };
    return (e.set(t, s), s);
}
function S(e) {
    let { guildId: t, channelIds: n } = e;
    return 0 === n.length ? (c.peek(t) ?? null) : (d.peek((0, i.Ty)(n)) ?? null);
}
function h(e) {
    let { guildId: t, channelIds: n } = e;
    return 0 === n.length ? g(c, t, t) : g(d, (0, i.Ty)(n), t);
}
function o(e, t) {
    if (0 === e.suggestedSearches.length) return a;
    if (e.suggestedSearches.length < t) return e.suggestedSearches;
    let n = e.suggestedSearches.slice(e.currentIndex, e.currentIndex + t),
        r = (e.currentIndex + t) % e.suggestedSearches.length;
    return (r < t && n.push(...e.suggestedSearches.slice(0, r)), n);
}
function E(e, t) {
    e.currentIndex = (e.currentIndex + t) % e.suggestedSearches.length;
}
function f() {
    (c.reset(), d.reset());
}
class _ extends u.Ay.Store {
    static displayName = "SuggestedSearchStore";
    getNextSuggestions(e, t) {
        let n = S(e);
        return null == n ? a : o(n, t);
    }
    hasSuggestions(e) {
        return this.getNextSuggestions(e, 1).length > 0;
    }
    isLoadingSuggestedSearches(e) {
        return S(e)?.isLoading ?? !1;
    }
    willExhaustSuggestedSearches(e, t) {
        let n = S(e);
        return (
            null != n &&
            0 !== n.suggestedSearches.length &&
            !(n.suggestedSearches.length < t) &&
            n.currentIndex + t >= n.suggestedSearches.length
        );
    }
    getStateForScope(e) {
        return S(e);
    }
}
let A = new _(l.h, {
    SUGGESTED_SEARCHES_FETCH_START: function (e) {
        let { scope: t } = e;
        h(t).isLoading = !0;
    },
    SUGGESTED_SEARCHES_FETCH_SUCCESS: function (e) {
        let { scope: t, requestId: n, suggestedSearches: r, windowSize: s } = e,
            u = h(t);
        if (((u.isLoading = !1), (u.requestId = n), null == s || 0 === u.suggestedSearches.length)) {
            ((u.currentIndex = 0), (u.suggestedSearches = r));
            return;
        }
        let l = o(u, s),
            i = r.filter((e) => !l.some((t) => t.suggestionId === e.suggestionId));
        0 === i.length ? E(u, s) : ((u.suggestedSearches = [...l, ...i]), (u.currentIndex = 0));
    },
    SUGGESTED_SEARCHES_FETCH_FAILURE: function (e) {
        let { scope: t, windowSize: n } = e,
            r = S(t);
        if (null == r) return !1;
        ((r.isLoading = !1), null != n && r.suggestedSearches.length > 0 && E(r, n));
    },
    SUGGESTED_SEARCH_ADVANCE: function (e) {
        let { scope: t, windowSize: n } = e,
            r = S(t);
        if (null == r || 0 === r.suggestedSearches.length) return !1;
        E(r, n);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = d.keys().filter((e) => d.peek(e)?.guildId === t.id);
        if (!c.has(t.id) && 0 === n.length) return !1;
        (c.del(t.id), n.forEach((e) => d.del(e)));
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = d.keys().filter((e) => (0, i.Ij)(e).includes(t.id));
        if (0 === n.length) return !1;
        n.forEach((e) => d.del(e));
    },
    CONNECTION_OPEN: f,
    LOGOUT: f,
});
n.d(t, {}, { A: A, v: a });
