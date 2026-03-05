"use strict";
n.d(t, { A: () => Z }), n(321073), n(667532);
var r = n(33851),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(450827),
    l = n(734057),
    u = n(696451),
    c = n(71393),
    d = n(309010),
    _ = n(351906),
    f = n(287809),
    p = n(248465),
    h = n(695184),
    m = n(427262),
    E = n(822382),
    g = n(739422),
    A = n(771650),
    I = n(652215),
    T = n(926140);
let S = null,
    y = new Map(),
    v = new Map(),
    N = 10,
    C = 3;
function R(e) {
    let t = (0, g.nn)(e, [_.A]);
    return [I.LWr.FILTER_HAS, I.LWr.FILTER_FROM, I.LWr.FILTER_MENTIONS, I.LWr.FILTER_IN].filter((e) => t.has(e));
}
function O(e) {
    let t = (0, E.bS)(e),
        n = v.get(t) ?? { results: [], context: o.A.getUserSearchContext(x.bind(null, e)) };
    return v.set(t, n), n;
}
function b(e) {
    return {
        searchContext: e,
        query: "",
        mode: { type: I.o$q.EMPTY, filter: null, token: null },
        tokens: [],
        cursorScope: null,
        autocompletes: [],
    };
}
function D(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: s, autocompletes: a } = e;
    return O(t), { searchContext: t, query: n, mode: r, tokens: i, cursorScope: s, autocompletes: a };
}
function L(e) {
    let { id: t } = e,
        n = v.get(t);
    null != n && (n.context.destroy(), (n.results = []), v.delete(t)), y.delete(t), (S = null);
}
function w(e) {
    return null != e && (e === I.LWr.FILTER_FROM || e === I.LWr.FILTER_MENTIONS);
}
function M(e) {
    let t = w(e.filter);
    return e.type === I.o$q.FILTER_ALL || (e.type === I.o$q.FILTER && t);
}
function x(e, t) {
    let { results: n } = t,
        r = (0, E.bS)(e),
        i = v.get(r),
        s = y.get(r);
    if (null == i || null == s || !M(s.mode)) return;
    i.results = P(n, s.mode.type === I.o$q.FILTER ? N : C);
    let { query: a, mode: o, tokens: l, cursorScope: u } = s,
        c = j(e, o, l),
        d = D({ searchContext: e, query: a, mode: o, tokens: l, cursorScope: u, autocompletes: c });
    y.set(r, d), q.emitChange();
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N,
        n = [];
    for (let r of e) {
        if (n.length >= t) break;
        let e = f.default.getUser(r.id);
        if (null == e) continue;
        let i = m.Ay.getUserTag(e);
        null != i && n.push({ text: i, user: e });
    }
    return n;
}
function k(e) {
    i()(S, e) || ((S = e), (0, E.Pe)());
}
function U(e) {
    let { searchContext: t } = e;
    k(t), W(t);
}
function G(e) {
    let t,
        { searchContext: n, tokens: r, cursorScope: i } = e;
    k(n);
    let s = (0, E.lX)(r),
        a = (0, E.Gk)(i, r),
        o = (0, E.bS)(n),
        l = y.get(o),
        u = !0;
    if (null != l && s === l.query && (null == l.mode || l.mode.filter === a.filter)) (t = l.autocompletes), (u = !1);
    else if (M(a)) {
        let e = O(n),
            i = a.token,
            s = i?.getFullMatch()?.trim();
        if (null != s && s.length > 0) {
            let r = (0, E.mt)(n);
            null != r && h.A.requestMembers(r, s, N),
                e.context.setQuery({ query: s, filters: { guild: r ?? void 0 }, boosters: (0, p.X3)(T.rD.USER) }),
                (t = l?.autocompletes ?? []),
                (u = !1);
        } else e.context.clearQuery(), (t = j(n, a, r));
    } else {
        let e = v.get(o);
        null != e && (e.context.clearQuery(), (e.results = [])), (t = j(n, a, r));
    }
    let c = D({ searchContext: n, query: s, mode: a, tokens: r, cursorScope: i, autocompletes: t });
    return y.set(o, c), u;
}
function F(e) {
    let { filter: t, currentToken: n, searchContext: r, maxResults: i = N, tokens: s } = e;
    if (null == t) return null;
    let a = null,
        o = n?.getFullMatch()?.trim() ?? "",
        l = 0 === o.length;
    if ((0, E._B)(r) && w(t) && !l) a = O(r).results;
    else {
        let e = A.Ay[t]?.getAutocompletions;
        a = null != e ? e({ query: o, searchContext: r, maxResults: i, tokens: s }) : [];
    }
    if (null != a && w(t) && (0, A.WL)(o)) {
        let e = f.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n?.id !== e.id;
            })).unshift({ text: I.ME, user: e });
    }
    return null == a || 0 === a.length ? null : { group: t, results: a };
}
function V(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
        r = (0, g.nn)(t, [_.A]),
        i = (0, A.gR)(n),
        s = [];
    return (
        i.forEach((e) => {
            null != e.token && r.has(e.token) && s.push(e);
        }),
        { group: I.x2k.SEARCH_OPTIONS, results: s }
    );
}
function B(e, t, n) {
    let r = e.token,
        i = r?.getFullMatch()?.trim(),
        s = [];
    if (null != i && "" !== i) {
        R(t).forEach((e) => {
            if (null == e) return;
            let i = F({ filter: e, currentToken: r, searchContext: t, maxResults: C, tokens: n });
            null != i && s.push(i);
        });
        let e = H(r, t);
        null != e && s.push(e);
    }
    return 5 > (0, E.rI)(s) && s.push(V(r, t)), s;
}
function H(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim();
    if (null == n || "" === n) return null;
    let r = A.Ay[I.LWr.FILTER_BEFORE]?.getAutocompletions?.({ query: n, searchContext: t, maxResults: 1 })?.[0],
        i = A.Ay[I.LWr.FILTER_ON]?.getAutocompletions?.({ query: n, searchContext: t, maxResults: 1 })?.[0],
        s = A.Ay[I.LWr.FILTER_AFTER]?.getAutocompletions?.({ query: n, searchContext: t, maxResults: 1 })?.[0];
    if (null == r) return null;
    let a = [r];
    return null != i && a.push(i), null != s && a.push(s), { group: I.x2k.DATES, results: a };
}
function j(e, t, n) {
    switch (t.type) {
        case I.o$q.FILTER:
            let r = F({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: N, tokens: n });
            return null != r ? [r] : [];
        case I.o$q.FILTER_ALL:
            return B(t, e, n);
        case I.o$q.EMPTY:
            let i = [];
            return i.push(V(t.token, e)), i;
    }
}
function Y() {
    (0, E.Pe)();
}
function W(e) {
    let t = (0, E.bS)(e),
        n = y.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: s, cursorScope: a } = n,
        o = D({ searchContext: e, query: r, mode: i, tokens: s, cursorScope: a, autocompletes: j(e, i, s) });
    y.set(t, o);
}
function K() {
    return null != S && W(S);
}
function $() {
    return null != S && W(S);
}
class z extends s.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(l.A, u.Ay, c.A, d.A, _.A, f.default);
    }
    getState(e) {
        let t = (0, E.bS)(e);
        return y.get(t) ?? b(e);
    }
    getSelectedSearchContext() {
        return S;
    }
}
let q = new z(a.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: U,
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: G,
        SEARCH_EDITOR_STATE_CLEAR: L,
        CHANNEL_CREATE: Y,
        CHANNEL_DELETE: Y,
        STREAMER_MODE_UPDATE: K,
        CHANNEL_SELECT: $,
    }),
    Z = q;
