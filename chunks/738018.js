n.d(t, { Z: () => en }), n(388685), n(539854), n(781311), n(290780);
var r,
    i = n(498607),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(279779),
    c = n(592125),
    u = n(271383),
    d = n(430824),
    f = n(944486),
    p = n(246946),
    _ = n(594174),
    m = n(483360),
    h = n(892880),
    g = n(51144),
    E = n(607802),
    b = n(532428),
    y = n(981631),
    O = n(727785);
function v(e, t, n) {
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
let S = null,
    I = new Map(),
    T = new Map(),
    C = 10,
    A = 3;
function N(e) {
    let t = (0, E.R6)(e);
    return new Map([
        [y.dCx.FILTER_FROM, !p.Z.hidePersonalInformation],
        [y.dCx.FILTER_MENTIONS, !p.Z.hidePersonalInformation],
        [y.dCx.FILTER_HAS, !0],
        [y.dCx.FILTER_BEFORE, !0],
        [y.dCx.FILTER_AFTER, !0],
        [y.dCx.FILTER_ON, !0],
        [y.dCx.FILTER_IN, t],
        [y.dCx.FILTER_PINNED, !0],
        [y.dCx.FILTER_AUTHOR_TYPE, !0],
    ]);
}
function P(e) {
    let t = [y.dCx.FILTER_HAS];
    return (
        p.Z.hidePersonalInformation || (t.push(y.dCx.FILTER_FROM), t.push(y.dCx.FILTER_MENTIONS)),
        (0, E.R6)(e) && t.push(y.dCx.FILTER_IN),
        t
    );
}
function R(e) {
    var t;
    let n = (0, E.Tm)(e),
        r =
            null != (t = T.get(n))
                ? t
                : {
                      results: [],
                      context: l.Z.getUserSearchContext(M.bind(null, e)),
                  };
    return T.set(n, r), r;
}
function w(e) {
    return {
        searchContext: e,
        query: "",
        mode: {
            type: y.Sap.EMPTY,
            filter: null,
            token: null,
        },
        tokens: [],
        cursorScope: null,
        autocompletes: [],
    };
}
function D(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: o, autocompletes: a } = e;
    return (
        R(t),
        {
            searchContext: t,
            query: n,
            mode: r,
            tokens: i,
            cursorScope: o,
            autocompletes: a,
        }
    );
}
function x(e) {
    let { id: t } = e,
        n = T.get(t);
    null != n && (n.context.destroy(), (n.results = []), T.delete(t)), I.delete(t), (S = null);
}
function L(e) {
    return null != e && (e === y.dCx.FILTER_FROM || e === y.dCx.FILTER_MENTIONS);
}
function j(e) {
    let t = L(e.filter);
    return e.type === y.Sap.FILTER_ALL || (e.type === y.Sap.FILTER && t);
}
function M(e, t) {
    let { results: n } = t,
        r = (0, E.Tm)(e),
        i = T.get(r),
        o = I.get(r);
    if (null == i || null == o || !j(o.mode)) return;
    i.results = k(n, o.mode.type === y.Sap.FILTER ? C : A);
    let { query: a, mode: s, tokens: l, cursorScope: c } = o,
        u = W(e, s, l),
        d = D({
            searchContext: e,
            query: a,
            mode: s,
            tokens: l,
            cursorScope: c,
            autocompletes: u,
        });
    I.set(r, d), et.emitChange();
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
        n = [];
    for (let r of e) {
        if (n.length >= t) break;
        let e = _.default.getUser(r.id);
        if (null == e) continue;
        let i = g.ZP.getUserTag(e);
        null != i &&
            n.push({
                text: i,
                user: e,
            });
    }
    return n;
}
function U(e) {
    o()(S, e) || ((S = e), (0, E.WU)());
}
function G(e) {
    let { searchContext: t } = e;
    U(t), X(t);
}
function Z(e) {
    let t,
        { searchContext: n, tokens: r, cursorScope: i } = e;
    U(n);
    let o = (0, E.cl)(r),
        a = (0, E.qc)(i, r),
        s = (0, E.Tm)(n),
        l = I.get(s),
        c = !0;
    if (null != l && o === l.query && (null == l.mode || l.mode.filter === a.filter)) (t = l.autocompletes), (c = !1);
    else if (j(a)) {
        var u, d;
        let e = R(n),
            i = a.token,
            o = null == i || null == (u = i.getFullMatch()) ? void 0 : u.trim();
        if (null != o && o.length > 0) {
            let r = (0, E.s5)(n);
            null != r && h.Z.requestMembers(r, o, C),
                e.context.setQuery({
                    query: o,
                    filters: { guild: null != r ? r : void 0 },
                    boosters: (0, m.Cq)(O.h8.USER),
                }),
                (t = null != (d = null == l ? void 0 : l.autocompletes) ? d : []),
                (c = !1);
        } else e.context.clearQuery(), (t = W(n, a, r));
    } else {
        let e = T.get(s);
        null != e && (e.context.clearQuery(), (e.results = [])), (t = W(n, a, r));
    }
    let f = D({
        searchContext: n,
        query: o,
        mode: a,
        tokens: r,
        cursorScope: i,
        autocompletes: t,
    });
    return I.set(s, f), c;
}
function F(e) {
    var t, n, r;
    let { filter: i, currentToken: o, searchContext: a, maxResults: s = C, tokens: l } = e;
    if (null == i) return null;
    let c = null,
        u = null != (n = null == o || null == (t = o.getFullMatch()) ? void 0 : t.trim()) ? n : "",
        d = 0 === u.length;
    if ((0, E.b7)(a) && L(i) && !d) c = R(a).results;
    else {
        let e = null == (r = b.ZP[i]) ? void 0 : r.getAutocompletions;
        c =
            null != e
                ? e({
                      query: u,
                      searchContext: a,
                      maxResults: s,
                      tokens: l,
                  })
                : [];
    }
    if (null != c && L(i) && (0, b.co)(u)) {
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
        i = (0, b.Ej)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: y.rtL.SEARCH_OPTIONS,
        results: i,
    };
}
function V(e, t, n) {
    var r;
    let i = e.token,
        o = null == i || null == (r = i.getFullMatch()) ? void 0 : r.trim(),
        a = [];
    if (null != o && "" !== o) {
        P(t).forEach((e) => {
            if (null == e) return;
            let r = F({
                filter: e,
                currentToken: i,
                searchContext: t,
                maxResults: A,
                tokens: n,
            });
            null != r && a.push(r);
        });
        let e = H(i, t);
        null != e && a.push(e);
    }
    return 5 > (0, E.BU)(a) && a.push(B(i, t)), a;
}
function H(e, t) {
    var n, r, i, o, a, s, l, c, u;
    let d = (null != e ? e.getFullMatch() : "").trim();
    if (null == d || "" === d) return null;
    let f =
            null == (i = b.ZP[y.dCx.FILTER_BEFORE]) ||
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
            null == (s = b.ZP[y.dCx.FILTER_ON]) ||
            null == (a = s.getAutocompletions) ||
            null ==
                (o = a.call(s, {
                    query: d,
                    searchContext: t,
                    maxResults: 1,
                }))
                ? void 0
                : o[0],
        _ =
            null == (u = b.ZP[y.dCx.FILTER_AFTER]) ||
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
    let m = [f];
    return (
        null != p && m.push(p),
        null != _ && m.push(_),
        {
            group: y.rtL.DATES,
            results: m,
        }
    );
}
function Y(e) {
    if (p.Z.hidePersonalInformation) return null;
    {
        let t = n(741995).Z,
            r = (0, E.BX)(e);
        if (null == r) return null;
        let i = t.getHistory(r);
        if (null == i) return null;
        let o = [],
            a = new Set();
        return (
            i.forEach((t) => {
                let n = e.type === y.aib.CHANNEL ? (0, E.EX)(t) : t;
                "" === n || a.has(n) || (a.add(n), o.push({ text: n }));
            }),
            {
                group: y.rtL.HISTORY,
                results: o,
            }
        );
    }
}
function W(e, t, n) {
    switch (t.type) {
        case y.Sap.FILTER:
            let r = F({
                filter: t.filter,
                currentToken: t.token,
                searchContext: e,
                maxResults: C,
                tokens: n,
            });
            return null != r ? [r] : [];
        case y.Sap.FILTER_ALL:
            return V(t, e, n);
        case y.Sap.EMPTY:
            let i = [];
            i.push(B(t.token, e));
            {
                let t = Y(e);
                null != t && i.push(t);
            }
            return i;
    }
}
function K() {
    (0, E.WU)();
}
function z(e) {
    let t = I.get(e);
    if (null == t) return;
    let { searchContext: n, query: r, mode: i, tokens: o, cursorScope: a, autocompletes: s } = t,
        l = [];
    s.forEach((e) => {
        e.group !== y.rtL.HISTORY && l.push(e);
    });
    let c = D({
        searchContext: n,
        query: r,
        mode: i,
        tokens: o,
        cursorScope: a,
        autocompletes: l,
    });
    I.set(e, c);
}
function q(e) {
    let { autocompleteStateId: t } = e;
    z(t);
}
function Q() {
    for (let e of I.keys()) z(e);
}
function X(e) {
    let t = (0, E.Tm)(e),
        n = I.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: o, cursorScope: a } = n,
        s = D({
            searchContext: e,
            query: r,
            mode: i,
            tokens: o,
            cursorScope: a,
            autocompletes: W(e, i, o),
        });
    I.set(t, s);
}
function J() {
    return null != S && X(S);
}
function $() {
    return null != S && X(S);
}
class ee extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, u.ZP, d.Z, f.Z, p.Z, _.default);
    }
    getState(e) {
        var t;
        let n = (0, E.Tm)(e);
        return null != (t = I.get(n)) ? t : w(e);
    }
    getSelectedSearchContext() {
        return S;
    }
}
v(ee, "displayName", "SearchAutocompleteStore");
let et = new ee(s.Z, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: G,
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: Z,
        SEARCH_EDITOR_STATE_CLEAR: x,
        CHANNEL_CREATE: K,
        CHANNEL_DELETE: K,
        STREAMER_MODE_UPDATE: J,
        CHANNEL_SELECT: $,
        LOGOUT: Q,
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: q,
    }),
    en = et;
