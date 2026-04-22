"use strict";
n.d(t, { A: () => V }), n(321073), n(667532);
var r = n(33851),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(450827),
    l = n(734057),
    u = n(696451),
    d = n(71393),
    c = n(309010),
    _ = n(351906),
    f = n(287809),
    E = n(248465),
    h = n(695184),
    p = n(427262),
    m = n(822382),
    g = n(5990),
    A = n(771650),
    I = n(652215),
    T = n(926140);
let S = null,
    y = [],
    N = new Map(),
    O = new Map(),
    R = new Set([I.LWr.FILTER_FROM, I.LWr.FILTER_IN, I.LWr.FILTER_MENTIONS]);
function v(e) {
    let t = (0, m.bS)(e),
        n = O.get(t) ?? { results: [], context: o.A.getUserSearchContext(L.bind(null, e)) };
    return O.set(t, n), n;
}
function C(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: s, autocompletes: a } = e;
    return v(t), { searchContext: t, query: n, mode: r, tokens: i, cursorScope: s, autocompletes: a };
}
function b(e) {
    return null != e && (e === I.LWr.FILTER_FROM || e === I.LWr.FILTER_MENTIONS);
}
function D(e) {
    let t = e.type === I.o$q.FILTER && b(e.filter);
    return e.type === I.o$q.FILTER_ALL || t;
}
function L(e, t) {
    let { results: n } = t,
        r = (0, m.bS)(e),
        i = O.get(r),
        s = N.get(r);
    if (null == i || null == s || !D(s.mode)) return;
    i.results = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = [];
        for (let r of e) {
            if (n.length >= t) break;
            let e = f.default.getUser(r.id);
            if (null == e) continue;
            let i = p.Ay.getUserTag(e);
            null != i && n.push({ text: i, user: e });
        }
        return n;
    })(n, s.mode.type === I.o$q.FILTER ? 10 : 3);
    let { query: a, mode: o, tokens: l, cursorScope: u } = s,
        d = P(e, o, l),
        c = C({ searchContext: e, query: a, mode: o, tokens: l, cursorScope: u, autocompletes: d });
    N.set(r, c), G.emitChange();
}
function w(e) {
    i()(S, e) || ((S = e), (0, m.Pe)());
}
function M(e) {
    let { filter: t, currentToken: n, searchContext: r, maxResults: i = 10, tokens: s } = e;
    if (null == t) return null;
    let a = null,
        o = n?.getFullMatch()?.trim() ?? "",
        l = 0 === o.length;
    if ((0, m._B)(r) && b(t) && !l) a = v(r).results;
    else {
        let e = A.Ay[t]?.getAutocompletions;
        a = null != e ? e({ query: o, searchContext: r, maxResults: i, tokens: s }) : [];
    }
    if (null != a && b(t) && (0, A.WL)(o)) {
        let e = f.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n?.id !== e.id;
            })).unshift({ text: I.ME, user: e });
    }
    return null == a || 0 === a.length ? null : { group: t, results: a };
}
function P(e, t, n) {
    switch (t.type) {
        case I.o$q.FILTER:
            let r = M({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: 10, tokens: n });
            return null != r ? [r] : y;
        case I.o$q.FILTER_ALL:
            let i = t.token,
                s = i?.getFullMatch()?.trim();
            if (null == s || "" === s) return [];
            let a = [];
            return (
                (0, g.u_)(e, [_.A])
                    .filter((e) => R.has(e))
                    .forEach((t) => {
                        if (null == t) return;
                        let r = M({ filter: t, currentToken: i, searchContext: e, maxResults: 3, tokens: n });
                        null !== r && a.push(r);
                    }),
                a
            );
        case I.o$q.EMPTY:
            return y;
    }
}
function U() {
    (0, m.Pe)();
}
function k(e) {
    let t = (0, m.bS)(e),
        n = N.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: s, cursorScope: a } = n,
        o = C({ searchContext: e, query: r, mode: i, tokens: s, cursorScope: a, autocompletes: P(e, i, s) });
    N.set(t, o);
}
class x extends s.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(l.A, u.Ay, d.A, c.A, _.A, f.default);
    }
    getState(e) {
        let t = (0, m.bS)(e);
        return (
            N.get(t) ?? {
                searchContext: e,
                query: "",
                mode: { type: I.o$q.EMPTY, filter: null, token: null },
                tokens: [],
                cursorScope: null,
                autocompletes: [],
            }
        );
    }
    getSelectedSearchContext() {
        return S;
    }
}
let G = new x(a.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: function (e) {
            let { searchContext: t } = e;
            w(t), k(t);
        },
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            let t,
                { searchContext: n, tokens: r, cursorScope: i } = e;
            w(n);
            let s = (0, m.lX)(r),
                a = (0, m.Gk)(i, r),
                o = (0, m.bS)(n),
                l = N.get(o),
                u = !0;
            if (null != l && s === l.query && (null == l.mode || l.mode.filter === a.filter))
                (t = l.autocompletes), (u = !1);
            else if (D(a)) {
                let e = v(n),
                    i = a.token,
                    s = i?.getFullMatch()?.trim();
                if (null != s && s.length > 0) {
                    let r = (0, m.mt)(n);
                    null != r && h.A.requestMembers(r, s, 10),
                        e.context.setQuery({
                            query: s,
                            filters: { guild: r ?? void 0 },
                            boosters: (0, E.X3)(T.rD.USER),
                        }),
                        (t = l?.autocompletes ?? []),
                        (u = !1);
                } else e.context.clearQuery(), (t = P(n, a, r));
            } else {
                let e = O.get(o);
                null != e && (e.context.clearQuery(), (e.results = [])), (t = P(n, a, r));
            }
            let d = C({ searchContext: n, query: s, mode: a, tokens: r, cursorScope: i, autocompletes: t });
            return N.set(o, d), u;
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { id: t } = e,
                n = O.get(t);
            null != n && (n.context.destroy(), (n.results = []), O.delete(t)), N.delete(t), (S = null);
        },
        CHANNEL_CREATE: U,
        CHANNEL_DELETE: U,
        STREAMER_MODE_UPDATE: function () {
            return null != S && k(S);
        },
        CHANNEL_SELECT: function () {
            return null != S && k(S);
        },
    }),
    V = G;
