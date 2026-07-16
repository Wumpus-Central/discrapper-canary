"use strict";
n.d(t, { A: () => F }), n(321073), n(667532);
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
    A = n(768038),
    h = n(695184),
    I = n(427262),
    f = n(822382),
    p = n(5990),
    T = n(304578),
    m = n(652215),
    g = n(926140);
let S = null,
    N = [],
    C = new Map(),
    R = new Map(),
    O = new Set([m.LWr.FILTER_FROM, m.LWr.FILTER_IN, m.LWr.FILTER_MENTIONS]);
function L(e) {
    let t = (0, f.bS)(e),
        n = R.get(t) ?? { results: [], context: l.A.getUserSearchContext(b.bind(null, e)) };
    return R.set(t, n), n;
}
function y(e) {
    let { searchContext: t, query: n, mode: i, tokens: r, cursorScope: a, autocompletes: s } = e;
    return L(t), { searchContext: t, query: n, mode: i, tokens: r, cursorScope: a, autocompletes: s };
}
function D(e) {
    return null != e && (e === m.LWr.FILTER_FROM || e === m.LWr.FILTER_MENTIONS);
}
function v(e) {
    let t = e.type === m.o$q.FILTER && D(e.filter);
    return e.type === m.o$q.FILTER_ALL || t;
}
function b(e, t) {
    let { results: n } = t,
        i = (0, f.bS)(e),
        r = R.get(i),
        a = C.get(i);
    if (null == r || null == a || !v(a.mode)) return;
    r.results = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            n = [];
        for (let i of e) {
            if (n.length >= t) break;
            let e = E.default.getUser(i.id);
            if (null == e) continue;
            let r = I.Ay.getUserTag(e);
            null != r && n.push({ text: r, user: e });
        }
        return n;
    })(n, a.mode.type === m.o$q.FILTER ? 10 : 3);
    let { query: s, mode: l, tokens: o, cursorScope: d } = a,
        c = U(e, l, o),
        u = y({ searchContext: e, query: s, mode: l, tokens: o, cursorScope: d, autocompletes: c });
    C.set(i, u), k.emitChange();
}
function M(e) {
    r()(S, e) || ((S = e), (0, f.Pe)());
}
function P(e) {
    let { filter: t, currentToken: n, searchContext: i, maxResults: r = 10, tokens: a } = e;
    if (null == t) return null;
    let s = null,
        l = n?.getFullMatch()?.trim() ?? "",
        o = 0 === l.length;
    if ((0, f._B)(i) && D(t) && !o) s = L(i).results;
    else {
        let e = T.Ay[t]?.getAutocompletions;
        s = null != e ? e({ query: l, searchContext: i, maxResults: r, tokens: a }) : [];
    }
    if (null != s && D(t) && (0, T.WL)(l)) {
        let e = E.default.getCurrentUser();
        null != e &&
            (s = s.filter((t) => {
                let { user: n } = t;
                return n?.id !== e.id;
            })).unshift({ text: m.ME, user: e });
    }
    return null == s || 0 === s.length ? null : { group: t, results: s };
}
function U(e, t, n) {
    switch (t.type) {
        case m.o$q.FILTER:
            let i = P({ filter: t.filter, currentToken: t.token, searchContext: e, maxResults: 10, tokens: n });
            return null != i ? [i] : N;
        case m.o$q.FILTER_ALL:
            let r = t.token,
                a = r?.getFullMatch()?.trim();
            if (null == a || "" === a) return [];
            let s = [];
            return (
                (0, p.u_)(e, [_.A])
                    .filter((e) => O.has(e))
                    .forEach((t) => {
                        if (null == t) return;
                        let i = P({ filter: t, currentToken: r, searchContext: e, maxResults: 3, tokens: n });
                        null !== i && s.push(i);
                    }),
                s
            );
        case m.o$q.EMPTY:
            return N;
    }
}
function w() {
    (0, f.Pe)();
}
function G(e) {
    let t = (0, f.bS)(e),
        n = C.get(t);
    if (null == n) return !1;
    let { query: i, mode: r, tokens: a, cursorScope: s } = n,
        l = y({ searchContext: e, query: i, mode: r, tokens: a, cursorScope: s, autocompletes: U(e, r, a) });
    C.set(t, l);
}
class x extends a.Ay.Store {
    static displayName = "SearchAutocompleteStore";
    initialize() {
        this.waitFor(o.A, d.Ay, c.A, u.Ay, _.A, E.default);
    }
    getState(e) {
        let t = (0, f.bS)(e);
        return (
            C.get(t) ?? {
                searchContext: e,
                query: "",
                mode: { type: m.o$q.EMPTY, filter: null, token: null },
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
let k = new x(s.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: function (e) {
            let { searchContext: t } = e;
            M(t), G(t);
        },
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            let t,
                { searchContext: n, tokens: i, cursorScope: r } = e;
            M(n);
            let a = (0, f.lX)(i),
                s = (0, f.Gk)(r, i),
                l = (0, f.bS)(n),
                o = C.get(l),
                d = !0;
            if (null != o && a === o.query && (null == o.mode || o.mode.filter === s.filter))
                (t = o.autocompletes), (d = !1);
            else if (v(s)) {
                let e = L(n),
                    r = s.token,
                    a = r?.getFullMatch()?.trim();
                if (null != a && a.length > 0) {
                    let i = (0, f.mt)(n);
                    null != i && h.A.requestMembers(i, a, 10),
                        e.context.setQuery({
                            query: a,
                            filters: { guild: i ?? void 0 },
                            boosters: (0, A.X3)(g.rD.USER),
                        }),
                        (t = o?.autocompletes ?? []),
                        (d = !1);
                } else e.context.clearQuery(), (t = U(n, s, i));
            } else {
                let e = R.get(l);
                null != e && (e.context.clearQuery(), (e.results = [])), (t = U(n, s, i));
            }
            let c = y({ searchContext: n, query: a, mode: s, tokens: i, cursorScope: r, autocompletes: t });
            return C.set(l, c), d;
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { id: t } = e,
                n = R.get(t);
            null != n && (n.context.destroy(), (n.results = []), R.delete(t)), C.delete(t), (S = null);
        },
        CHANNEL_CREATE: w,
        CHANNEL_DELETE: w,
        STREAMER_MODE_UPDATE: function () {
            return null != S && G(S);
        },
        CHANNEL_SELECT: function () {
            return null != S && G(S);
        },
    }),
    F = k;
