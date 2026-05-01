"use strict";
n.d(t, { A: () => F }), n(321073), n(667532);
var i = n(33851),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(450827),
    l = n(734057),
    u = n(696451),
    c = n(71393),
    d = n(309010),
    _ = n(351906),
    f = n(287809),
    h = n(768038),
    p = n(695184),
    E = n(427262),
    m = n(822382),
    g = n(5990),
    A = n(304578),
    I = n(652215),
    T = n(926140);
let S = null,
    N = [],
    y = new Map(),
    C = new Map(),
    v = new Set([I.LWr.FILTER_FROM, I.LWr.FILTER_IN, I.LWr.FILTER_MENTIONS]);
function O(e) {
    let t = (0, m.bS)(e),
        n = C.get(t) ?? { results: [], context: o.A.getUserSearchContext(L.bind(null, e)) };
    return C.set(t, n), n;
}
function R(e) {
    let { searchContext: t, query: n, mode: i, tokens: r, cursorScope: s, autocompletes: a } = e;
    return O(t), { searchContext: t, query: n, mode: i, tokens: r, cursorScope: s, autocompletes: a };
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
        i = (0, m.bS)(e),
        r = C.get(i),
        s = y.get(i);
    if (null == r || null == s || !D(s.mode)) return;
    r.results = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = [];
        for (let i of e) {
            if (n.length >= t) break;
            let e = f.default.getUser(i.id);
            if (null == e) continue;
            let r = E.Ay.getUserTag(e);
            null != r && n.push({ text: r, user: e });
        }
        return n;
    })(n, s.mode.type === I.o$q.FILTER ? 10 : 3);
    let { query: a, mode: o, tokens: l, cursorScope: u } = s,
        c = P(e, o, l),
        d = R({ searchContext: e, query: a, mode: o, tokens: l, cursorScope: u, autocompletes: c });
    y.set(i, d), G.emitChange();
}
function w(e) {
    r()(S, e) || ((S = e), (0, m.Pe)());
}
function M(e) {
    let { filter: t, currentToken: n, searchContext: i, maxResults: r = 10, tokens: s } = e;
    if (null == t) return null;
    let a = null,
        o = n?.getFullMatch()?.trim() ?? "",
        l = 0 === o.length;
    if ((0, m._B)(i) && b(t) && !l) a = O(i).results;
    else {
        let e = A.Ay[t]?.getAutocompletions;
        a = null != e ? e({ query: o, searchContext: i, maxResults: r, tokens: s }) : [];
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
            let i = M({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: 10, tokens: n });
            return null != i ? [i] : N;
        case I.o$q.FILTER_ALL:
            let r = t.token,
                s = r?.getFullMatch()?.trim();
            if (null == s || "" === s) return [];
            let a = [];
            return (
                (0, g.u_)(e, [_.A])
                    .filter((e) => v.has(e))
                    .forEach((t) => {
                        if (null == t) return;
                        let i = M({ filter: t, currentToken: r, searchContext: e, maxResults: 3, tokens: n });
                        null !== i && a.push(i);
                    }),
                a
            );
        case I.o$q.EMPTY:
            return N;
    }
}
function x() {
    (0, m.Pe)();
}
function U(e) {
    let t = (0, m.bS)(e),
        n = y.get(t);
    if (null == n) return !1;
    let { query: i, mode: r, tokens: s, cursorScope: a } = n,
        o = R({ searchContext: e, query: i, mode: r, tokens: s, cursorScope: a, autocompletes: P(e, r, s) });
    y.set(t, o);
}
class k extends s.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(l.A, u.Ay, c.A, d.A, _.A, f.default);
    }
    getState(e) {
        let t = (0, m.bS)(e);
        return (
            y.get(t) ?? {
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
let G = new k(a.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: function (e) {
            let { searchContext: t } = e;
            w(t), U(t);
        },
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            let t,
                { searchContext: n, tokens: i, cursorScope: r } = e;
            w(n);
            let s = (0, m.lX)(i),
                a = (0, m.Gk)(r, i),
                o = (0, m.bS)(n),
                l = y.get(o),
                u = !0;
            if (null != l && s === l.query && (null == l.mode || l.mode.filter === a.filter))
                (t = l.autocompletes), (u = !1);
            else if (D(a)) {
                let e = O(n),
                    r = a.token,
                    s = r?.getFullMatch()?.trim();
                if (null != s && s.length > 0) {
                    let i = (0, m.mt)(n);
                    null != i && p.A.requestMembers(i, s, 10),
                        e.context.setQuery({
                            query: s,
                            filters: { guild: i ?? void 0 },
                            boosters: (0, h.X3)(T.rD.USER),
                        }),
                        (t = l?.autocompletes ?? []),
                        (u = !1);
                } else e.context.clearQuery(), (t = P(n, a, i));
            } else {
                let e = C.get(o);
                null != e && (e.context.clearQuery(), (e.results = [])), (t = P(n, a, i));
            }
            let c = R({ searchContext: n, query: s, mode: a, tokens: i, cursorScope: r, autocompletes: t });
            return y.set(o, c), u;
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { id: t } = e,
                n = C.get(t);
            null != n && (n.context.destroy(), (n.results = []), C.delete(t)), y.delete(t), (S = null);
        },
        CHANNEL_CREATE: x,
        CHANNEL_DELETE: x,
        STREAMER_MODE_UPDATE: function () {
            return null != S && U(S);
        },
        CHANNEL_SELECT: function () {
            return null != S && U(S);
        },
    }),
    F = G;
