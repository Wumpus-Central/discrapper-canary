(n.d(t, { A: () => B }), n(321073), n(667532));
var i = n(811315),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(450827),
    o = n(734057),
    d = n(696451),
    c = n(71393),
    u = n(309010),
    _ = n(351906),
    E = n(287809),
    A = n(802842),
    h = n(695184),
    I = n(427262),
    f = n(822382),
    p = n(902008),
    T = n(5990),
    m = n(304578),
    g = n(652215),
    S = n(926140);
let N = null,
    C = [],
    O = new Map(),
    R = new Map(),
    L = new Set([g.LWr.FILTER_FROM, g.LWr.FILTER_IN, g.LWr.FILTER_MENTIONS]);
function y(e) {
    let t = (0, f.bS)(e),
        n = R.get(t) ?? { results: [], context: l.A.getUserSearchContext(M.bind(null, e)) };
    return (R.set(t, n), n);
}
function D(e) {
    let { searchContext: t, query: n, mode: i, tokens: r, cursorScope: a, autocompletes: s } = e;
    return (y(t), { searchContext: t, query: n, mode: i, tokens: r, cursorScope: a, autocompletes: s });
}
function v(e) {
    return null != e && (e === g.LWr.FILTER_FROM || e === g.LWr.FILTER_MENTIONS);
}
function b(e) {
    let t = e.type === g.o$q.FILTER && v(e.filter);
    return e.type === g.o$q.FILTER_ALL || t;
}
function M(e, t) {
    let { results: n } = t,
        i = (0, f.bS)(e),
        r = R.get(i),
        a = O.get(i);
    if (null == r || null == a || !b(a.mode)) return;
    r.results = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = [];
        for (let i of e) {
            if (n.length >= t) break;
            let e = E.default.getUser(i.id);
            if (null == e || e.isNonUserBot()) continue;
            let r = I.Ay.getUserTag(e);
            null != r && n.push({ text: r, user: e });
        }
        return n;
    })(n, a.mode.type === g.o$q.FILTER ? 10 : 3);
    let { query: s, mode: l, tokens: o, cursorScope: d } = a,
        c = w(e, l, o),
        u = D({ searchContext: e, query: s, mode: l, tokens: o, cursorScope: d, autocompletes: c });
    (O.set(i, u), F.emitChange());
}
function P(e) {
    r()(N, e) || ((N = e), (0, f.Pe)());
}
function U(e) {
    let { filter: t, currentToken: n, searchContext: i, maxResults: r = 10, tokens: a } = e;
    if (null == t) return null;
    let s = null,
        l = n?.getFullMatch()?.trim() ?? "",
        o = 0 === l.length;
    if ((0, p._)(i) && v(t) && !o) s = y(i).results;
    else {
        let e = m.Ay[t]?.getAutocompletions;
        s = null != e ? e({ query: l, searchContext: i, maxResults: r, tokens: a }) : [];
    }
    if (null != s && v(t) && (0, m.WL)(l)) {
        let e = E.default.getCurrentUser();
        null != e &&
            (s = s.filter((t) => {
                let { user: n } = t;
                return n?.id !== e.id;
            })).unshift({ text: g.ME, user: e });
    }
    return null == s || 0 === s.length ? null : { group: t, results: s };
}
function w(e, t, n) {
    switch (t.type) {
        case g.o$q.FILTER:
            let i = U({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: 10, tokens: n });
            return null != i ? [i] : C;
        case g.o$q.FILTER_ALL:
            let r = t.token,
                a = r?.getFullMatch()?.trim();
            if (null == a || "" === a) return [];
            let s = [];
            return (
                (0, T.u_)(e, [_.A])
                    .filter((e) => L.has(e))
                    .forEach((t) => {
                        if (null == t) return;
                        let i = U({ filter: t, currentToken: r, searchContext: e, maxResults: 3, tokens: n });
                        null !== i && s.push(i);
                    }),
                s
            );
        case g.o$q.EMPTY:
            return C;
    }
}
function G() {
    (0, f.Pe)();
}
function x(e) {
    let t = (0, f.bS)(e),
        n = O.get(t);
    if (null == n) return !1;
    let { query: i, mode: r, tokens: a, cursorScope: s } = n,
        l = D({ searchContext: e, query: i, mode: r, tokens: a, cursorScope: s, autocompletes: w(e, r, a) });
    O.set(t, l);
}
class k extends a.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(o.A, d.Ay, c.A, u.Ay, _.A, E.default);
    }
    getState(e) {
        let t = (0, f.bS)(e);
        return (
            O.get(t) ?? {
                searchContext: e,
                query: "",
                mode: { type: g.o$q.EMPTY, filter: null, token: null },
                tokens: [],
                cursorScope: null,
                autocompletes: [],
            }
        );
    }
    getSelectedSearchContext() {
        return N;
    }
}
let F = new k(s.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: function (e) {
            let { searchContext: t } = e;
            (P(t), x(t));
        },
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            let t,
                { searchContext: n, tokens: i, cursorScope: r } = e;
            P(n);
            let a = (0, f.lX)(i),
                s = (0, f.Gk)(r, i),
                l = (0, f.bS)(n),
                o = O.get(l),
                d = !0;
            if (null != o && a === o.query && (null == o.mode || o.mode.filter === s.filter))
                ((t = o.autocompletes), (d = !1));
            else if (b(s)) {
                let e = y(n),
                    r = s.token,
                    a = r?.getFullMatch()?.trim();
                if (null != a && a.length > 0) {
                    let i = (0, f.mt)(n);
                    (null != i && h.A.requestMembers(i, a, 10),
                        e.context.setQuery({
                            query: a,
                            filters: { guild: i ?? void 0 },
                            boosters: (0, A.X3)(S.rD.USER),
                        }),
                        (t = o?.autocompletes ?? []),
                        (d = !1));
                } else (e.context.clearQuery(), (t = w(n, s, i)));
            } else {
                let e = R.get(l);
                (null != e && (e.context.clearQuery(), (e.results = [])), (t = w(n, s, i)));
            }
            let c = D({ searchContext: n, query: a, mode: s, tokens: i, cursorScope: r, autocompletes: t });
            return (O.set(l, c), d);
        },
        SEARCH_QUERY_TEXT_CLEAR: function (e) {
            let { id: t } = e,
                n = R.get(t);
            (null != n && (n.context.destroy(), (n.results = []), R.delete(t)), O.delete(t), (N = null));
        },
        CHANNEL_CREATE: G,
        CHANNEL_DELETE: G,
        STREAMER_MODE_UPDATE: function () {
            return null != N && x(N);
        },
        CHANNEL_SELECT: function () {
            return null != N && x(N);
        },
    }),
    B = F;
