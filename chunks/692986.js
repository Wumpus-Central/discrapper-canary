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
    g = n(5990),
    A = n(771650),
    I = n(652215),
    T = n(926140);
let S = null,
    y = [],
    v = new Map(),
    N = new Map(),
    C = 10,
    R = 3,
    O = new Set([I.LWr.FILTER_FROM, I.LWr.FILTER_IN, I.LWr.FILTER_MENTIONS]);
function b(e) {
    return (0, g.u_)(e, [_.A]).filter((e) => O.has(e));
}
function D(e) {
    let t = (0, E.bS)(e),
        n = N.get(t) ?? { results: [], context: o.A.getUserSearchContext(k.bind(null, e)) };
    return N.set(t, n), n;
}
function L(e) {
    return {
        searchContext: e,
        query: "",
        mode: { type: I.o$q.EMPTY, filter: null, token: null },
        tokens: [],
        cursorScope: null,
        autocompletes: [],
    };
}
function w(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: s, autocompletes: a } = e;
    return D(t), { searchContext: t, query: n, mode: r, tokens: i, cursorScope: s, autocompletes: a };
}
function M(e) {
    let { id: t } = e,
        n = N.get(t);
    null != n && (n.context.destroy(), (n.results = []), N.delete(t)), v.delete(t), (S = null);
}
function x(e) {
    return null != e && (e === I.LWr.FILTER_FROM || e === I.LWr.FILTER_MENTIONS);
}
function P(e) {
    let t = e.type === I.o$q.FILTER && x(e.filter);
    return e.type === I.o$q.FILTER_ALL || t;
}
function k(e, t) {
    let { results: n } = t,
        r = (0, E.bS)(e),
        i = N.get(r),
        s = v.get(r);
    if (null == i || null == s || !P(s.mode)) return;
    i.results = U(n, s.mode.type === I.o$q.FILTER ? C : R);
    let { query: a, mode: o, tokens: l, cursorScope: u } = s,
        c = j(e, o, l),
        d = w({ searchContext: e, query: a, mode: o, tokens: l, cursorScope: u, autocompletes: c });
    v.set(r, d), q.emitChange();
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
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
function G(e) {
    i()(S, e) || ((S = e), (0, E.Pe)());
}
function F(e) {
    let { searchContext: t } = e;
    G(t), W(t);
}
function V(e) {
    let t,
        { searchContext: n, tokens: r, cursorScope: i } = e;
    G(n);
    let s = (0, E.lX)(r),
        a = (0, E.Gk)(i, r),
        o = (0, E.bS)(n),
        l = v.get(o),
        u = !0;
    if (null != l && s === l.query && (null == l.mode || l.mode.filter === a.filter)) (t = l.autocompletes), (u = !1);
    else if (P(a)) {
        let e = D(n),
            i = a.token,
            s = i?.getFullMatch()?.trim();
        if (null != s && s.length > 0) {
            let r = (0, E.mt)(n);
            null != r && h.A.requestMembers(r, s, C),
                e.context.setQuery({ query: s, filters: { guild: r ?? void 0 }, boosters: (0, p.X3)(T.rD.USER) }),
                (t = l?.autocompletes ?? []),
                (u = !1);
        } else e.context.clearQuery(), (t = j(n, a, r));
    } else {
        let e = N.get(o);
        null != e && (e.context.clearQuery(), (e.results = [])), (t = j(n, a, r));
    }
    let c = w({ searchContext: n, query: s, mode: a, tokens: r, cursorScope: i, autocompletes: t });
    return v.set(o, c), u;
}
function B(e) {
    let { filter: t, currentToken: n, searchContext: r, maxResults: i = C, tokens: s } = e;
    if (null == t) return null;
    let a = null,
        o = n?.getFullMatch()?.trim() ?? "",
        l = 0 === o.length;
    if ((0, E._B)(r) && x(t) && !l) a = D(r).results;
    else {
        let e = A.Ay[t]?.getAutocompletions;
        a = null != e ? e({ query: o, searchContext: r, maxResults: i, tokens: s }) : [];
    }
    if (null != a && x(t) && (0, A.WL)(o)) {
        let e = f.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n?.id !== e.id;
            })).unshift({ text: I.ME, user: e });
    }
    return null == a || 0 === a.length ? null : { group: t, results: a };
}
function H(e, t, n) {
    let r = e.token,
        i = r?.getFullMatch()?.trim();
    if (null == i || "" === i) return [];
    let s = [];
    return (
        b(t).forEach((e) => {
            if (null == e) return;
            let i = B({ filter: e, currentToken: r, searchContext: t, maxResults: R, tokens: n });
            null !== i && s.push(i);
        }),
        s
    );
}
function j(e, t, n) {
    switch (t.type) {
        case I.o$q.FILTER:
            let r = B({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: C, tokens: n });
            return null != r ? [r] : y;
        case I.o$q.FILTER_ALL:
            return H(t, e, n);
        case I.o$q.EMPTY:
            return y;
    }
}
function Y() {
    (0, E.Pe)();
}
function W(e) {
    let t = (0, E.bS)(e),
        n = v.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: s, cursorScope: a } = n,
        o = w({ searchContext: e, query: r, mode: i, tokens: s, cursorScope: a, autocompletes: j(e, i, s) });
    v.set(t, o);
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
        return v.get(t) ?? L(e);
    }
    getSelectedSearchContext() {
        return S;
    }
}
let q = new z(a.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: F,
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: V,
        SEARCH_EDITOR_STATE_CLEAR: M,
        CHANNEL_CREATE: Y,
        CHANNEL_DELETE: Y,
        STREAMER_MODE_UPDATE: K,
        CHANNEL_SELECT: $,
    }),
    Z = q;
