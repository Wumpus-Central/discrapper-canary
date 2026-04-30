n.d(t, { A: () => B }), n(321073), n(667532);
var i = n(33851),
    a = n.n(i),
    r = n(17928),
    s = n(228366),
    l = n(450827),
    o = n(734057),
    d = n(696451),
    c = n(71393),
    _ = n(309010),
    E = n(351906),
    u = n(287809),
    A = n(768038),
    I = n(695184),
    T = n(427262),
    h = n(822382),
    S = n(5990),
    N = n(304578),
    f = n(652215),
    p = n(926140);
let m = null,
    O = [],
    C = new Map(),
    R = new Map(),
    g = new Set([f.LWr.FILTER_FROM, f.LWr.FILTER_IN, f.LWr.FILTER_MENTIONS]);
function L(e) {
    let t = (0, h.bS)(e),
        n = R.get(t) ?? { results: [], context: l.A.getUserSearchContext(P.bind(null, e)) };
    return R.set(t, n), n;
}
function D(e) {
    let { searchContext: t, query: n, mode: i, tokens: a, cursorScope: r, autocompletes: s } = e;
    return L(t), { searchContext: t, query: n, mode: i, tokens: a, cursorScope: r, autocompletes: s };
}
function b(e) {
    return null != e && (e === f.LWr.FILTER_FROM || e === f.LWr.FILTER_MENTIONS);
}
function M(e) {
    let t = e.type === f.o$q.FILTER && b(e.filter);
    return e.type === f.o$q.FILTER_ALL || t;
}
function P(e, t) {
    let { results: n } = t,
        i = (0, h.bS)(e),
        a = R.get(i),
        r = C.get(i);
    if (null == a || null == r || !M(r.mode)) return;
    a.results = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = [];
        for (let i of e) {
            if (n.length >= t) break;
            let e = u.default.getUser(i.id);
            if (null == e) continue;
            let a = T.Ay.getUserTag(e);
            null != a && n.push({ text: a, user: e });
        }
        return n;
    })(n, r.mode.type === f.o$q.FILTER ? 10 : 3);
    let { query: s, mode: l, tokens: o, cursorScope: d } = r,
        c = y(e, l, o),
        _ = D({ searchContext: e, query: s, mode: l, tokens: o, cursorScope: d, autocompletes: c });
    C.set(i, _), V.emitChange();
}
function U(e) {
    a()(m, e) || ((m = e), (0, h.Pe)());
}
function v(e) {
    let { filter: t, currentToken: n, searchContext: i, maxResults: a = 10, tokens: r } = e;
    if (null == t) return null;
    let s = null,
        l = n?.getFullMatch()?.trim() ?? "",
        o = 0 === l.length;
    if ((0, h._B)(i) && b(t) && !o) s = L(i).results;
    else {
        let e = N.Ay[t]?.getAutocompletions;
        s = null != e ? e({ query: l, searchContext: i, maxResults: a, tokens: r }) : [];
    }
    if (null != s && b(t) && (0, N.WL)(l)) {
        let e = u.default.getCurrentUser();
        null != e &&
            (s = s.filter((t) => {
                let { user: n } = t;
                return n?.id !== e.id;
            })).unshift({ text: f.ME, user: e });
    }
    return null == s || 0 === s.length ? null : { group: t, results: s };
}
function y(e, t, n) {
    switch (t.type) {
        case f.o$q.FILTER:
            let i = v({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: 10, tokens: n });
            return null != i ? [i] : O;
        case f.o$q.FILTER_ALL:
            let a = t.token,
                r = a?.getFullMatch()?.trim();
            if (null == r || "" === r) return [];
            let s = [];
            return (
                (0, S.u_)(e, [E.A])
                    .filter((e) => g.has(e))
                    .forEach((t) => {
                        if (null == t) return;
                        let i = v({ filter: t, currentToken: a, searchContext: e, maxResults: 3, tokens: n });
                        null !== i && s.push(i);
                    }),
                s
            );
        case f.o$q.EMPTY:
            return O;
    }
}
function G() {
    (0, h.Pe)();
}
function w(e) {
    let t = (0, h.bS)(e),
        n = C.get(t);
    if (null == n) return !1;
    let { query: i, mode: a, tokens: r, cursorScope: s } = n,
        l = D({ searchContext: e, query: i, mode: a, tokens: r, cursorScope: s, autocompletes: y(e, a, r) });
    C.set(t, l);
}
class x extends r.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(o.A, d.Ay, c.A, _.A, E.A, u.default);
    }
    getState(e) {
        let t = (0, h.bS)(e);
        return (
            C.get(t) ?? {
                searchContext: e,
                query: "",
                mode: { type: f.o$q.EMPTY, filter: null, token: null },
                tokens: [],
                cursorScope: null,
                autocompletes: [],
            }
        );
    }
    getSelectedSearchContext() {
        return m;
    }
}
let V = new x(s.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: function (e) {
            let { searchContext: t } = e;
            U(t), w(t);
        },
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            let t,
                { searchContext: n, tokens: i, cursorScope: a } = e;
            U(n);
            let r = (0, h.lX)(i),
                s = (0, h.Gk)(a, i),
                l = (0, h.bS)(n),
                o = C.get(l),
                d = !0;
            if (null != o && r === o.query && (null == o.mode || o.mode.filter === s.filter))
                (t = o.autocompletes), (d = !1);
            else if (M(s)) {
                let e = L(n),
                    a = s.token,
                    r = a?.getFullMatch()?.trim();
                if (null != r && r.length > 0) {
                    let i = (0, h.mt)(n);
                    null != i && I.A.requestMembers(i, r, 10),
                        e.context.setQuery({
                            query: r,
                            filters: { guild: i ?? void 0 },
                            boosters: (0, A.X3)(p.rD.USER),
                        }),
                        (t = o?.autocompletes ?? []),
                        (d = !1);
                } else e.context.clearQuery(), (t = y(n, s, i));
            } else {
                let e = R.get(l);
                null != e && (e.context.clearQuery(), (e.results = [])), (t = y(n, s, i));
            }
            let c = D({ searchContext: n, query: r, mode: s, tokens: i, cursorScope: a, autocompletes: t });
            return C.set(l, c), d;
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { id: t } = e,
                n = R.get(t);
            null != n && (n.context.destroy(), (n.results = []), R.delete(t)), C.delete(t), (m = null);
        },
        CHANNEL_CREATE: G,
        CHANNEL_DELETE: G,
        STREAMER_MODE_UPDATE: function () {
            return null != m && w(m);
        },
        CHANNEL_SELECT: function () {
            return null != m && w(m);
        },
    }),
    B = V;
