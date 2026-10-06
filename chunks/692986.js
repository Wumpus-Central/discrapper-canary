(l.d(t, { A: () => w }), l(321073), l(667532));
var r = l(811315),
    n = l.n(r),
    u = l(17928),
    a = l(73153),
    s = l(450827),
    i = l(734057),
    o = l(696451),
    c = l(71393),
    E = l(309010),
    L = l(351906),
    f = l(287809),
    g = l(802842),
    h = l(695184),
    d = l(427262),
    R = l(822382),
    T = l(801146),
    I = l(902008),
    _ = l(5990),
    A = l(304578),
    F = l(652215),
    p = l(926140);
let N = null,
    S = [],
    W = new Map(),
    k = new Map(),
    y = new Set([F.LWr.FILTER_FROM, F.LWr.FILTER_IN, F.LWr.FILTER_MENTIONS]);
function b(e) {
    let t = (0, R.bS)(e),
        l = k.get(t) ?? { results: [], context: s.A.getUserSearchContext(O.bind(null, e)) };
    return (k.set(t, l), l);
}
function m(e) {
    let { searchContext: t, query: l, mode: r, tokens: n, cursorScope: u, autocompletes: a } = e;
    return (b(t), { searchContext: t, query: l, mode: r, tokens: n, cursorScope: u, autocompletes: a });
}
function M(e) {
    return null != e && (e === F.LWr.FILTER_FROM || e === F.LWr.FILTER_MENTIONS);
}
function C(e) {
    let t = e.type === F.o$q.FILTER && M(e.filter);
    return e.type === F.o$q.FILTER_ALL || t;
}
function O(e, t) {
    let { results: l } = t,
        r = (0, R.bS)(e),
        n = k.get(r),
        u = W.get(r);
    if (null == n || null == u || !C(u.mode)) return;
    n.results = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            l = [];
        for (let r of e) {
            if (l.length >= t) break;
            let e = f.default.getUser(r.id);
            if (null == e || e.isNonUserBot()) continue;
            let n = d.Ay.getUserTag(e);
            null != n && l.push({ text: n, user: e });
        }
        return l;
    })(l, u.mode.type === F.o$q.FILTER ? 10 : 3);
    let { query: a, mode: s, tokens: i, cursorScope: o } = u,
        c = D(e, s, i),
        E = m({ searchContext: e, query: a, mode: s, tokens: i, cursorScope: o, autocompletes: c });
    (W.set(r, E), H.emitChange());
}
function v(e) {
    n()(N, e) || ((N = e), (0, R.Pe)());
}
function U(e) {
    let { filter: t, currentToken: l, searchContext: r, maxResults: n = 10, tokens: u } = e;
    if (null == t) return null;
    let a = null,
        s = l?.getFullMatch()?.trim() ?? "",
        i = 0 === s.length;
    if ((0, I._)(r) && M(t) && !i) a = b(r).results;
    else {
        let e = A.Ay[t]?.getAutocompletions;
        a = null != e ? e({ query: s, searchContext: r, maxResults: n, tokens: u }) : [];
    }
    if (null != a && M(t) && (0, A.WL)(s)) {
        let e = f.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: l } = t;
                return l?.id !== e.id;
            })).unshift({ text: F.ME, user: e });
    }
    return null == a || 0 === a.length ? null : { group: t, results: a };
}
function D(e, t, l) {
    switch (t.type) {
        case F.o$q.FILTER:
            let r = U({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: 10, tokens: l });
            return null != r ? [r] : S;
        case F.o$q.FILTER_ALL:
            let n = t.token,
                u = n?.getFullMatch()?.trim();
            if (null == u || "" === u) return [];
            let a = [];
            return (
                (0, _.u_)(e, [L.A])
                    .filter((e) => y.has(e))
                    .forEach((t) => {
                        if (null == t) return;
                        let r = U({ filter: t, currentToken: n, searchContext: e, maxResults: 3, tokens: l });
                        null !== r && a.push(r);
                    }),
                a
            );
        case F.o$q.EMPTY:
            return S;
    }
}
function $() {
    (0, R.Pe)();
}
function q(e) {
    let t = (0, R.bS)(e),
        l = W.get(t);
    if (null == l) return !1;
    let { query: r, mode: n, tokens: u, cursorScope: a } = l,
        s = m({ searchContext: e, query: r, mode: n, tokens: u, cursorScope: a, autocompletes: D(e, n, u) });
    W.set(t, s);
}
class P extends u.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(i.A, o.Ay, c.A, E.Ay, T.A, L.A, f.default);
    }
    getState(e) {
        let t = (0, R.bS)(e);
        return (
            W.get(t) ?? {
                searchContext: e,
                query: "",
                mode: { type: F.o$q.EMPTY, filter: null, token: null },
                tokens: [],
                cursorScope: null,
                autocompletes: [],
            }
        );
    }
}
let H = new P(a.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: function (e) {
            let { searchContext: t } = e;
            (v(t), q(t));
        },
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            let t,
                { searchContext: l, tokens: r, cursorScope: n } = e;
            v(l);
            let u = (0, R.lX)(r),
                a = (0, R.Gk)(n, r),
                s = (0, R.bS)(l),
                i = W.get(s),
                o = !0;
            if (null != i && u === i.query && (null == i.mode || i.mode.filter === a.filter))
                ((t = i.autocompletes), (o = !1));
            else if (C(a)) {
                let e = b(l),
                    n = a.token,
                    u = n?.getFullMatch()?.trim();
                if (null != u && u.length > 0) {
                    let r = (0, R.mt)(l);
                    (null != r && h.A.requestMembers(r, u, 10),
                        e.context.setQuery({
                            query: u,
                            filters: { guild: r ?? void 0 },
                            boosters: (0, g.X3)(p.rD.USER),
                        }),
                        (t = i?.autocompletes ?? []),
                        (o = !1));
                } else (e.context.clearQuery(), (t = D(l, a, r)));
            } else {
                let e = k.get(s);
                (null != e && (e.context.clearQuery(), (e.results = [])), (t = D(l, a, r)));
            }
            let c = m({ searchContext: l, query: u, mode: a, tokens: r, cursorScope: n, autocompletes: t });
            return (W.set(s, c), o);
        },
        SEARCH_QUERY_TEXT_CLEAR: function (e) {
            let { id: t } = e,
                l = k.get(t);
            (null != l && (l.context.destroy(), (l.results = []), k.delete(t)), W.delete(t), (N = null));
        },
        CHANNEL_CREATE: $,
        CHANNEL_DELETE: $,
        STREAMER_MODE_UPDATE: function () {
            return null != N && q(N);
        },
        CHANNEL_SELECT: function () {
            return null != N && q(N);
        },
    }),
    w = H;
