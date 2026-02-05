"use strict";
n.d(t, { A: () => Z }), n(321073), n(667532);
var r = n(33851),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
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
    g = n(822382),
    E = n(771650),
    A = n(652215),
    I = n(926140);
let T = null,
    y = new Map(),
    S = new Map(),
    v = 10,
    C = 3;
function b(e) {
    let t = (0, g.Wg)(e);
    return new Map([
        [A.LWr.FILTER_FROM, !_.A.hidePersonalInformation],
        [A.LWr.FILTER_MENTIONS, !_.A.hidePersonalInformation],
        [A.LWr.FILTER_HAS, !0],
        [A.LWr.FILTER_BEFORE, !0],
        [A.LWr.FILTER_AFTER, !0],
        [A.LWr.FILTER_ON, !0],
        [A.LWr.FILTER_IN, t],
        [A.LWr.FILTER_PINNED, !0],
        [A.LWr.FILTER_AUTHOR_TYPE, !0],
    ]);
}
function N(e) {
    let t = [A.LWr.FILTER_HAS];
    return (
        _.A.hidePersonalInformation || (t.push(A.LWr.FILTER_FROM), t.push(A.LWr.FILTER_MENTIONS)),
        (0, g.Wg)(e) && t.push(A.LWr.FILTER_IN),
        t
    );
}
function R(e) {
    let t = (0, g.bS)(e),
        n = S.get(t) ?? { results: [], context: o.A.getUserSearchContext(P.bind(null, e)) };
    return S.set(t, n), n;
}
function O(e) {
    return {
        searchContext: e,
        query: "",
        mode: { type: A.o$q.EMPTY, filter: null, token: null },
        tokens: [],
        cursorScope: null,
        autocompletes: [],
    };
}
function D(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: a, autocompletes: s } = e;
    return R(t), { searchContext: t, query: n, mode: r, tokens: i, cursorScope: a, autocompletes: s };
}
function L(e) {
    let { id: t } = e,
        n = S.get(t);
    null != n && (n.context.destroy(), (n.results = []), S.delete(t)), y.delete(t), (T = null);
}
function w(e) {
    return null != e && (e === A.LWr.FILTER_FROM || e === A.LWr.FILTER_MENTIONS);
}
function x(e) {
    let t = w(e.filter);
    return e.type === A.o$q.FILTER_ALL || (e.type === A.o$q.FILTER && t);
}
function P(e, t) {
    let { results: n } = t,
        r = (0, g.bS)(e),
        i = S.get(r),
        a = y.get(r);
    if (null == i || null == a || !x(a.mode)) return;
    i.results = M(n, a.mode.type === A.o$q.FILTER ? v : C);
    let { query: s, mode: o, tokens: l, cursorScope: u } = a,
        c = H(e, o, l),
        d = D({ searchContext: e, query: s, mode: o, tokens: l, cursorScope: u, autocompletes: c });
    y.set(r, d), q.emitChange();
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
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
    i()(T, e) || ((T = e), (0, g.Pe)());
}
function U(e) {
    let { searchContext: t } = e;
    k(t), W(t);
}
function G(e) {
    let t,
        { searchContext: n, tokens: r, cursorScope: i } = e;
    k(n);
    let a = (0, g.lX)(r),
        s = (0, g.Gk)(i, r),
        o = (0, g.bS)(n),
        l = y.get(o),
        u = !0;
    if (null != l && a === l.query && (null == l.mode || l.mode.filter === s.filter)) (t = l.autocompletes), (u = !1);
    else if (x(s)) {
        let e = R(n),
            i = s.token,
            a = i?.getFullMatch()?.trim();
        if (null != a && a.length > 0) {
            let r = (0, g.mt)(n);
            null != r && h.A.requestMembers(r, a, v),
                e.context.setQuery({ query: a, filters: { guild: r ?? void 0 }, boosters: (0, p.X3)(I.rD.USER) }),
                (t = l?.autocompletes ?? []),
                (u = !1);
        } else e.context.clearQuery(), (t = H(n, s, r));
    } else {
        let e = S.get(o);
        null != e && (e.context.clearQuery(), (e.results = [])), (t = H(n, s, r));
    }
    let c = D({ searchContext: n, query: a, mode: s, tokens: r, cursorScope: i, autocompletes: t });
    return y.set(o, c), u;
}
function V(e) {
    let { filter: t, currentToken: n, searchContext: r, maxResults: i = v, tokens: a } = e;
    if (null == t) return null;
    let s = null,
        o = n?.getFullMatch()?.trim() ?? "",
        l = 0 === o.length;
    if ((0, g._B)(r) && w(t) && !l) s = R(r).results;
    else {
        let e = E.Ay[t]?.getAutocompletions;
        s = null != e ? e({ query: o, searchContext: r, maxResults: i, tokens: a }) : [];
    }
    if (null != s && w(t) && (0, E.WL)(o)) {
        let e = f.default.getCurrentUser();
        null != e &&
            (s = s.filter((t) => {
                let { user: n } = t;
                return n?.id !== e.id;
            })).unshift({ text: A.ME, user: e });
    }
    return null == s || 0 === s.length ? null : { group: t, results: s };
}
function F(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
        r = b(t),
        i = (0, E.gR)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return { group: A.x2k.SEARCH_OPTIONS, results: i };
}
function B(e, t, n) {
    let r = e.token,
        i = r?.getFullMatch()?.trim(),
        a = [];
    if (null != i && "" !== i) {
        N(t).forEach((e) => {
            if (null == e) return;
            let i = V({ filter: e, currentToken: r, searchContext: t, maxResults: C, tokens: n });
            null != i && a.push(i);
        });
        let e = j(r, t);
        null != e && a.push(e);
    }
    return 5 > (0, g.rI)(a) && a.push(F(r, t)), a;
}
function j(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim();
    if (null == n || "" === n) return null;
    let r = E.Ay[A.LWr.FILTER_BEFORE]?.getAutocompletions?.({ query: n, searchContext: t, maxResults: 1 })?.[0],
        i = E.Ay[A.LWr.FILTER_ON]?.getAutocompletions?.({ query: n, searchContext: t, maxResults: 1 })?.[0],
        a = E.Ay[A.LWr.FILTER_AFTER]?.getAutocompletions?.({ query: n, searchContext: t, maxResults: 1 })?.[0];
    if (null == r) return null;
    let s = [r];
    return null != i && s.push(i), null != a && s.push(a), { group: A.x2k.DATES, results: s };
}
function H(e, t, n) {
    switch (t.type) {
        case A.o$q.FILTER:
            let r = V({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: v, tokens: n });
            return null != r ? [r] : [];
        case A.o$q.FILTER_ALL:
            return B(t, e, n);
        case A.o$q.EMPTY:
            let i = [];
            return i.push(F(t.token, e)), i;
    }
}
function Y() {
    (0, g.Pe)();
}
function W(e) {
    let t = (0, g.bS)(e),
        n = y.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: a, cursorScope: s } = n,
        o = D({ searchContext: e, query: r, mode: i, tokens: a, cursorScope: s, autocompletes: H(e, i, a) });
    y.set(t, o);
}
function K() {
    return null != T && W(T);
}
function z() {
    return null != T && W(T);
}
class $ extends a.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(l.A, u.Ay, c.A, d.A, _.A, f.default);
    }
    getState(e) {
        let t = (0, g.bS)(e);
        return y.get(t) ?? O(e);
    }
    getSelectedSearchContext() {
        return T;
    }
}
let q = new $(s.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: U,
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: G,
        SEARCH_EDITOR_STATE_CLEAR: L,
        CHANNEL_CREATE: Y,
        CHANNEL_DELETE: Y,
        STREAMER_MODE_UPDATE: K,
        CHANNEL_SELECT: z,
    }),
    Z = q;
