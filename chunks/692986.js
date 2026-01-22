n.d(t, {
    A: () => en,
}),
    n(896048),
    n(321073),
    n(733351),
    n(667532);
var r,
    i = n(33851),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(450827),
    c = n(734057),
    u = n(696451),
    d = n(71393),
    f = n(309010),
    p = n(351906),
    _ = n(287809),
    h = n(248465),
    m = n(695184),
    g = n(427262),
    E = n(822382),
    b = n(771650),
    y = n(652215),
    O = n(926140);

function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let v = null,
    S = new Map(),
    I = new Map(),
    T = 10,
    C = 3;

function N(e) {
    let t = (0, E.Wg)(e);
    return new Map([
        [y.LWr.FILTER_FROM, !p.A.hidePersonalInformation],
        [y.LWr.FILTER_MENTIONS, !p.A.hidePersonalInformation],
        [y.LWr.FILTER_HAS, !0],
        [y.LWr.FILTER_BEFORE, !0],
        [y.LWr.FILTER_AFTER, !0],
        [y.LWr.FILTER_ON, !0],
        [y.LWr.FILTER_IN, t],
        [y.LWr.FILTER_PINNED, !0],
        [y.LWr.FILTER_AUTHOR_TYPE, !0],
    ]);
}

function R(e) {
    let t = [y.LWr.FILTER_HAS];
    return (
        p.A.hidePersonalInformation || (t.push(y.LWr.FILTER_FROM), t.push(y.LWr.FILTER_MENTIONS)),
        (0, E.Wg)(e) && t.push(y.LWr.FILTER_IN),
        t
    );
}

function w(e) {
    var t;
    let n = (0, E.bS)(e),
        r =
            null != (t = I.get(n))
                ? t
                : {
                      results: [],
                      context: l.A.getUserSearchContext(M.bind(null, e)),
                  };
    return I.set(n, r), r;
}

function P(e) {
    return {
        searchContext: e,
        query: "",
        mode: {
            type: y.o$q.EMPTY,
            filter: null,
            token: null,
        },
        tokens: [],
        cursorScope: null,
        autocompletes: [],
    };
}

function D(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: a, autocompletes: s } = e;
    return (
        w(t),
        {
            searchContext: t,
            query: n,
            mode: r,
            tokens: i,
            cursorScope: a,
            autocompletes: s,
        }
    );
}

function x(e) {
    let { id: t } = e,
        n = I.get(t);
    null != n && (n.context.destroy(), (n.results = []), I.delete(t)), S.delete(t), (v = null);
}

function L(e) {
    return null != e && (e === y.LWr.FILTER_FROM || e === y.LWr.FILTER_MENTIONS);
}

function j(e) {
    let t = L(e.filter);
    return e.type === y.o$q.FILTER_ALL || (e.type === y.o$q.FILTER && t);
}

function M(e, t) {
    let { results: n } = t,
        r = (0, E.bS)(e),
        i = I.get(r),
        a = S.get(r);
    if (null == i || null == a || !j(a.mode)) return;
    i.results = k(n, a.mode.type === y.o$q.FILTER ? T : C);
    let { query: s, mode: o, tokens: l, cursorScope: c } = a,
        u = K(e, o, l),
        d = D({
            searchContext: e,
            query: s,
            mode: o,
            tokens: l,
            cursorScope: c,
            autocompletes: u,
        });
    S.set(r, d), et.emitChange();
}

function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T,
        n = [];
    for (let r of e) {
        if (n.length >= t) break;
        let e = _.default.getUser(r.id);
        if (null == e) continue;
        let i = g.Ay.getUserTag(e);
        null != i &&
            n.push({
                text: i,
                user: e,
            });
    }
    return n;
}

function U(e) {
    a()(v, e) || ((v = e), (0, E.Pe)());
}

function G(e) {
    let { searchContext: t } = e;
    U(t), Q(t);
}

function V(e) {
    let t,
        { searchContext: n, tokens: r, cursorScope: i } = e;
    U(n);
    let a = (0, E.lX)(r),
        s = (0, E.Gk)(i, r),
        o = (0, E.bS)(n),
        l = S.get(o),
        c = !0;
    if (null != l && a === l.query && (null == l.mode || l.mode.filter === s.filter)) (t = l.autocompletes), (c = !1);
    else if (j(s)) {
        var u, d;
        let e = w(n),
            i = s.token,
            a = null == i || null == (u = i.getFullMatch()) ? void 0 : u.trim();
        if (null != a && a.length > 0) {
            let r = (0, E.mt)(n);
            null != r && m.A.requestMembers(r, a, T),
                e.context.setQuery({
                    query: a,
                    filters: {
                        guild: null != r ? r : void 0,
                    },
                    boosters: (0, h.X3)(O.rD.USER),
                }),
                (t = null != (d = null == l ? void 0 : l.autocompletes) ? d : []),
                (c = !1);
        } else e.context.clearQuery(), (t = K(n, s, r));
    } else {
        let e = I.get(o);
        null != e && (e.context.clearQuery(), (e.results = [])), (t = K(n, s, r));
    }
    let f = D({
        searchContext: n,
        query: a,
        mode: s,
        tokens: r,
        cursorScope: i,
        autocompletes: t,
    });
    return S.set(o, f), c;
}

function F(e) {
    var t, n, r;
    let { filter: i, currentToken: a, searchContext: s, maxResults: o = T, tokens: l } = e;
    if (null == i) return null;
    let c = null,
        u = null != (t = null == a || null == (n = a.getFullMatch()) ? void 0 : n.trim()) ? t : "",
        d = 0 === u.length;
    if ((0, E._B)(s) && L(i) && !d) c = w(s).results;
    else {
        let e = null == (r = b.Ay[i]) ? void 0 : r.getAutocompletions;
        c =
            null != e
                ? e({
                      query: u,
                      searchContext: s,
                      maxResults: o,
                      tokens: l,
                  })
                : [];
    }
    if (null != c && L(i) && (0, b.WL)(u)) {
        let e = _.default.getCurrentUser();
        null != e &&
            (c = c.filter((t) => {
                let { user: n } = t;
                return (null == n ? void 0 : n.id) !== e.id;
            })).unshift({
                text: y.ME,
                user: e,
            });
    }
    return null == c || 0 === c.length
        ? null
        : {
              group: i,
              results: c,
          };
}

function B(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
        r = N(t),
        i = (0, b.gR)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: y.x2k.SEARCH_OPTIONS,
        results: i,
    };
}

function H(e, t, n) {
    var r;
    let i = e.token,
        a = null == i || null == (r = i.getFullMatch()) ? void 0 : r.trim(),
        s = [];
    if (null != a && "" !== a) {
        R(t).forEach((e) => {
            if (null == e) return;
            let r = F({
                filter: e,
                currentToken: i,
                searchContext: t,
                maxResults: C,
                tokens: n,
            });
            null != r && s.push(r);
        });
        let e = Y(i, t);
        null != e && s.push(e);
    }
    return 5 > (0, E.rI)(s) && s.push(B(i, t)), s;
}

function Y(e, t) {
    var n, r, i, a, s, o, l, c, u;
    let d = (null != e ? e.getFullMatch() : "").trim();
    if (null == d || "" === d) return null;
    let f =
            null == (i = b.Ay[y.LWr.FILTER_BEFORE]) ||
            null == (r = i.getAutocompletions) ||
            null ==
                (n = r.call(i, {
                    query: d,
                    searchContext: t,
                    maxResults: 1,
                }))
                ? void 0
                : n[0],
        p =
            null == (o = b.Ay[y.LWr.FILTER_ON]) ||
            null == (s = o.getAutocompletions) ||
            null ==
                (a = s.call(o, {
                    query: d,
                    searchContext: t,
                    maxResults: 1,
                }))
                ? void 0
                : a[0],
        _ =
            null == (u = b.Ay[y.LWr.FILTER_AFTER]) ||
            null == (c = u.getAutocompletions) ||
            null ==
                (l = c.call(u, {
                    query: d,
                    searchContext: t,
                    maxResults: 1,
                }))
                ? void 0
                : l[0];
    if (null == f) return null;
    let h = [f];
    return (
        null != p && h.push(p),
        null != _ && h.push(_),
        {
            group: y.x2k.DATES,
            results: h,
        }
    );
}

function W(e) {
    if (p.A.hidePersonalInformation) return null;
    {
        let t = n(842716).A,
            r = (0, E.Jl)(e);
        if (null == r) return null;
        let i = t.getHistory(r);
        if (null == i) return null;
        let a = [],
            s = new Set();
        return (
            i.forEach((t) => {
                let n = e.type === y.I4_.CHANNEL ? (0, E.EH)(t) : t;
                "" === n ||
                    s.has(n) ||
                    (s.add(n),
                    a.push({
                        text: n,
                    }));
            }),
            {
                group: y.x2k.HISTORY,
                results: a,
            }
        );
    }
}

function K(e, t, n) {
    switch (t.type) {
        case y.o$q.FILTER:
            let r = F({
                filter: t.filter,
                currentToken: t.token,
                searchContext: e,
                maxResults: T,
                tokens: n,
            });
            return null != r ? [r] : [];
        case y.o$q.FILTER_ALL:
            return H(t, e, n);
        case y.o$q.EMPTY:
            let i = [];
            i.push(B(t.token, e));
            {
                let t = W(e);
                null != t && i.push(t);
            }
            return i;
    }
}

function z() {
    (0, E.Pe)();
}

function q(e) {
    let t = S.get(e);
    if (null == t) return;
    let { searchContext: n, query: r, mode: i, tokens: a, cursorScope: s, autocompletes: o } = t,
        l = [];
    o.forEach((e) => {
        e.group !== y.x2k.HISTORY && l.push(e);
    });
    let c = D({
        searchContext: n,
        query: r,
        mode: i,
        tokens: a,
        cursorScope: s,
        autocompletes: l,
    });
    S.set(e, c);
}

function X(e) {
    let { autocompleteStateId: t } = e;
    q(t);
}

function Z() {
    for (let e of S.keys()) q(e);
}

function Q(e) {
    let t = (0, E.bS)(e),
        n = S.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: a, cursorScope: s } = n,
        o = D({
            searchContext: e,
            query: r,
            mode: i,
            tokens: a,
            cursorScope: s,
            autocompletes: K(e, i, a),
        });
    S.set(t, o);
}

function $() {
    return null != v && Q(v);
}

function J() {
    return null != v && Q(v);
}
class ee extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(c.A, u.Ay, d.A, f.A, p.A, _.default);
    }
    getState(e) {
        var t;
        let n = (0, E.bS)(e);
        return null != (t = S.get(n)) ? t : P(e);
    }
    getSelectedSearchContext() {
        return v;
    }
}
A(ee, "displayName", "SearchAutocompleteStore");
let et = new ee(o.h, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: G,
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: V,
        SEARCH_EDITOR_STATE_CLEAR: x,
        CHANNEL_CREATE: z,
        CHANNEL_DELETE: z,
        STREAMER_MODE_UPDATE: $,
        CHANNEL_SELECT: J,
        LOGOUT: Z,
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: X,
    }),
    en = et;
