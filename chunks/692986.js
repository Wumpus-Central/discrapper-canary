n.d(t, { A: () => V }), n(321073), n(667532);
var i = n(33851),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    _ = n(450827),
    l = n(734057),
    o = n(696451),
    E = n(71393),
    d = n(309010),
    c = n(351906),
    u = n(287809),
    I = n(768038),
    A = n(695184),
    T = n(427262),
    S = n(822382),
    N = n(5990),
    O = n(304578),
    R = n(652215),
    f = n(926140);
let C = null,
    p = [],
    m = new Map(),
    L = new Map(),
    D = new Set([R.LWr.FILTER_FROM, R.LWr.FILTER_IN, R.LWr.FILTER_MENTIONS]);
function h(e) {
    let t = (0, S.bS)(e),
        n = L.get(t) ?? { results: [], context: _.A.getUserSearchContext(P.bind(null, e)) };
    return L.set(t, n), n;
}
function g(e) {
    let { searchContext: t, query: n, mode: i, tokens: r, cursorScope: a, autocompletes: s } = e;
    return h(t), { searchContext: t, query: n, mode: i, tokens: r, cursorScope: a, autocompletes: s };
}
function b(e) {
    return null != e && (e === R.LWr.FILTER_FROM || e === R.LWr.FILTER_MENTIONS);
}
function U(e) {
    let t = e.type === R.o$q.FILTER && b(e.filter);
    return e.type === R.o$q.FILTER_ALL || t;
}
function P(e, t) {
    let { results: n } = t,
        i = (0, S.bS)(e),
        r = L.get(i),
        a = m.get(i);
    if (null == r || null == a || !U(a.mode)) return;
    r.results = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = [];
        for (let i of e) {
            if (n.length >= t) break;
            let e = u.default.getUser(i.id);
            if (null == e) continue;
            let r = T.Ay.getUserTag(e);
            null != r && n.push({ text: r, user: e });
        }
        return n;
    })(n, a.mode.type === R.o$q.FILTER ? 10 : 3);
    let { query: s, mode: _, tokens: l, cursorScope: o } = a,
        E = G(e, _, l),
        d = g({ searchContext: e, query: s, mode: _, tokens: l, cursorScope: o, autocompletes: E });
    m.set(i, d), F.emitChange();
}
function M(e) {
    r()(C, e) || ((C = e), (0, S.Pe)());
}
function y(e) {
    let { filter: t, currentToken: n, searchContext: i, maxResults: r = 10, tokens: a } = e;
    if (null == t) return null;
    let s = null,
        _ = n?.getFullMatch()?.trim() ?? "",
        l = 0 === _.length;
    if ((0, S._B)(i) && b(t) && !l) s = h(i).results;
    else {
        let e = O.Ay[t]?.getAutocompletions;
        s = null != e ? e({ query: _, searchContext: i, maxResults: r, tokens: a }) : [];
    }
    if (null != s && b(t) && (0, O.WL)(_)) {
        let e = u.default.getCurrentUser();
        null != e &&
            (s = s.filter((t) => {
                let { user: n } = t;
                return n?.id !== e.id;
            })).unshift({ text: R.ME, user: e });
    }
    return null == s || 0 === s.length ? null : { group: t, results: s };
}
function G(e, t, n) {
    switch (t.type) {
        case R.o$q.FILTER:
            let i = y({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: 10, tokens: n });
            return null != i ? [i] : p;
        case R.o$q.FILTER_ALL:
            let r = t.token,
                a = r?.getFullMatch()?.trim();
            if (null == a || "" === a) return [];
            let s = [];
            return (
                (0, N.u_)(e, [c.A])
                    .filter((e) => D.has(e))
                    .forEach((t) => {
                        if (null == t) return;
                        let i = y({ filter: t, currentToken: r, searchContext: e, maxResults: 3, tokens: n });
                        null !== i && s.push(i);
                    }),
                s
            );
        case R.o$q.EMPTY:
            return p;
    }
}
function v() {
    (0, S.Pe)();
}
function B(e) {
    let t = (0, S.bS)(e),
        n = m.get(t);
    if (null == n) return !1;
    let { query: i, mode: r, tokens: a, cursorScope: s } = n,
        _ = g({ searchContext: e, query: i, mode: r, tokens: a, cursorScope: s, autocompletes: G(e, r, a) });
    m.set(t, _);
}
class w extends a.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(l.A, o.Ay, E.A, d.A, c.A, u.default);
    }
    getState(e) {
        let t = (0, S.bS)(e);
        return (
            m.get(t) ?? {
                searchContext: e,
                query: "",
                mode: { type: R.o$q.EMPTY, filter: null, token: null },
                tokens: [],
                cursorScope: null,
                autocompletes: [],
            }
        );
    }
    getSelectedSearchContext() {
        return C;
    }
}
let F = new w(s.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: function (e) {
            let { searchContext: t } = e;
            M(t), B(t);
        },
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            let t,
                { searchContext: n, tokens: i, cursorScope: r } = e;
            M(n);
            let a = (0, S.lX)(i),
                s = (0, S.Gk)(r, i),
                _ = (0, S.bS)(n),
                l = m.get(_),
                o = !0;
            if (null != l && a === l.query && (null == l.mode || l.mode.filter === s.filter))
                (t = l.autocompletes), (o = !1);
            else if (U(s)) {
                let e = h(n),
                    r = s.token,
                    a = r?.getFullMatch()?.trim();
                if (null != a && a.length > 0) {
                    let i = (0, S.mt)(n);
                    null != i && A.A.requestMembers(i, a, 10),
                        e.context.setQuery({
                            query: a,
                            filters: { guild: i ?? void 0 },
                            boosters: (0, I.X3)(f.rD.USER),
                        }),
                        (t = l?.autocompletes ?? []),
                        (o = !1);
                } else e.context.clearQuery(), (t = G(n, s, i));
            } else {
                let e = L.get(_);
                null != e && (e.context.clearQuery(), (e.results = [])), (t = G(n, s, i));
            }
            let E = g({ searchContext: n, query: a, mode: s, tokens: i, cursorScope: r, autocompletes: t });
            return m.set(_, E), o;
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { id: t } = e,
                n = L.get(t);
            null != n && (n.context.destroy(), (n.results = []), L.delete(t)), m.delete(t), (C = null);
        },
        CHANNEL_CREATE: v,
        CHANNEL_DELETE: v,
        STREAMER_MODE_UPDATE: function () {
            return null != C && B(C);
        },
        CHANNEL_SELECT: function () {
            return null != C && B(C);
        },
    }),
    V = F;
