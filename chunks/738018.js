n.d(t, { Z: () => et }), n(388685), n(539854), n(781311), n(290780);
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
    _ = n(246946),
    p = n(594174),
    h = n(892880),
    m = n(51144),
    g = n(607802),
    E = n(375123),
    b = n(532428),
    y = n(981631);
function O(e, t, n) {
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
    I = new Map(),
    T = new Map(),
    S = 10,
    A = 3;
function C(e) {
    let t = (0, g.R6)(e),
        n = (0, E.Z)({ location: "getEmptySearchOptions" });
    return new Map([
        [y.dCx.FILTER_FROM, !_.Z.hidePersonalInformation],
        [y.dCx.FILTER_MENTIONS, !_.Z.hidePersonalInformation],
        [y.dCx.FILTER_HAS, !0],
        [y.dCx.FILTER_BEFORE, !0],
        [y.dCx.FILTER_AFTER, !0],
        [y.dCx.FILTER_ON, !0],
        [y.dCx.FILTER_IN, t],
        [y.dCx.FILTER_PINNED, !0],
        [y.dCx.FILTER_AUTHOR_TYPE, n],
    ]);
}
function N(e) {
    let t = [y.dCx.FILTER_HAS];
    return (
        _.Z.hidePersonalInformation || (t.push(y.dCx.FILTER_FROM), t.push(y.dCx.FILTER_MENTIONS)),
        (0, g.R6)(e) && t.push(y.dCx.FILTER_IN),
        t
    );
}
function R(e) {
    var t;
    let n = (0, g.Tm)(e),
        r =
            null != (t = T.get(n))
                ? t
                : {
                      results: [],
                      context: l.Z.getUserSearchContext(j.bind(null, e)),
                  };
    return T.set(n, r), r;
}
function P(e) {
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
function w(e) {
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
function D(e) {
    let { id: t } = e,
        n = T.get(t);
    null != n && (n.context.destroy(), (n.results = []), T.delete(t)), I.delete(t), (v = null);
}
function x(e) {
    return null != e && (e === y.dCx.FILTER_FROM || e === y.dCx.FILTER_MENTIONS);
}
function L(e) {
    let t = x(e.filter);
    return e.type === y.Sap.FILTER_ALL || (e.type === y.Sap.FILTER && t);
}
function j(e, t) {
    let { results: n } = t,
        r = (0, g.Tm)(e),
        i = T.get(r),
        o = I.get(r);
    if (null == i || null == o || !L(o.mode)) return;
    i.results = M(n, o.mode.type === y.Sap.FILTER ? S : A);
    let { query: a, mode: s, tokens: l, cursorScope: c } = o,
        u = Y(e, s, l),
        d = w({
            searchContext: e,
            query: a,
            mode: s,
            tokens: l,
            cursorScope: c,
            autocompletes: u,
        });
    I.set(r, d), ee.emitChange();
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S,
        n = [];
    for (let r of e) {
        if (n.length >= t) break;
        let e = p.default.getUser(r.id);
        if (null == e) continue;
        let i = m.ZP.getUserTag(e);
        null != i &&
            n.push({
                text: i,
                user: e,
            });
    }
    return n;
}
function k(e) {
    o()(v, e) || ((v = e), (0, g.WU)());
}
function U(e) {
    let { searchContext: t } = e;
    k(t), X(t);
}
function G(e) {
    let t,
        { searchContext: n, tokens: r, cursorScope: i } = e;
    k(n);
    let o = (0, g.cl)(r),
        a = (0, g.qc)(i, r),
        s = (0, g.Tm)(n),
        l = I.get(s),
        c = !0;
    if (null != l && o === l.query && (null == l.mode || l.mode.filter === a.filter)) (t = l.autocompletes), (c = !1);
    else if (L(a)) {
        var u, d;
        let e = R(n),
            i = a.token,
            o = null == i || null == (u = i.getFullMatch()) ? void 0 : u.trim();
        if (null != o && o.length > 0) {
            let r = (0, g.s5)(n);
            null != r && h.Z.requestMembers(r, o, S),
                e.context.setQuery({
                    query: o,
                    filters: { guild: null != r ? r : void 0 },
                }),
                (t = null != (d = null == l ? void 0 : l.autocompletes) ? d : []),
                (c = !1);
        } else e.context.clearQuery(), (t = Y(n, a, r));
    } else {
        let e = T.get(s);
        null != e && (e.context.clearQuery(), (e.results = [])), (t = Y(n, a, r));
    }
    let f = w({
        searchContext: n,
        query: o,
        mode: a,
        tokens: r,
        cursorScope: i,
        autocompletes: t,
    });
    return I.set(s, f), c;
}
function B(e) {
    var t, n, r;
    let { filter: i, currentToken: o, searchContext: a, maxResults: s = S, tokens: l } = e;
    if (null == i) return null;
    let c = null,
        u = null != (n = null == o || null == (t = o.getFullMatch()) ? void 0 : t.trim()) ? n : "",
        d = 0 === u.length;
    if ((0, g.b7)(a) && x(i) && !d) c = R(a).results;
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
    if (null != c && x(i) && (0, b.co)(u)) {
        let e = p.default.getCurrentUser();
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
function Z(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
        r = C(t),
        i = (0, b.Ej)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: y.rtL.SEARCH_OPTIONS,
        results: i,
    };
}
function F(e, t, n) {
    var r;
    let i = e.token,
        o = null == i || null == (r = i.getFullMatch()) ? void 0 : r.trim(),
        a = [];
    if (null != o && "" !== o) {
        N(t).forEach((e) => {
            if (null == e) return;
            let r = B({
                filter: e,
                currentToken: i,
                searchContext: t,
                maxResults: A,
                tokens: n,
            });
            null != r && a.push(r);
        });
        let e = V(i, t);
        null != e && a.push(e);
    }
    return 5 > (0, g.BU)(a) && a.push(Z(i, t)), a;
}
function V(e, t) {
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
        _ =
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
        p =
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
    let h = [f];
    return (
        null != _ && h.push(_),
        null != p && h.push(p),
        {
            group: y.rtL.DATES,
            results: h,
        }
    );
}
function H(e) {
    if (_.Z.hidePersonalInformation) return null;
    {
        let t = n(741995).Z,
            r = (0, g.Tm)(e),
            i = t.getHistory(r);
        return null == i
            ? null
            : {
                  group: y.rtL.HISTORY,
                  results: i.map((e) => ({ text: e })),
              };
    }
}
function Y(e, t, n) {
    switch (t.type) {
        case y.Sap.FILTER:
            let r = B({
                filter: t.filter,
                currentToken: t.token,
                searchContext: e,
                maxResults: S,
                tokens: n,
            });
            return null != r ? [r] : [];
        case y.Sap.FILTER_ALL:
            return F(t, e, n);
        case y.Sap.EMPTY:
            let i = [];
            i.push(Z(t.token, e));
            {
                let t = H(e);
                null != t && i.push(t);
            }
            return i;
    }
}
function W() {
    (0, g.WU)();
}
function K(e) {
    let t = I.get(e);
    if (null == t) return;
    let { searchContext: n, query: r, mode: i, tokens: o, cursorScope: a, autocompletes: s } = t,
        l = [];
    s.forEach((e) => {
        e.group !== y.rtL.HISTORY && l.push(e);
    });
    let c = w({
        searchContext: n,
        query: r,
        mode: i,
        tokens: o,
        cursorScope: a,
        autocompletes: l,
    });
    I.set(e, c);
}
function z(e) {
    let { id: t } = e;
    K(t);
}
function q() {
    for (let e of I.keys()) K(e);
}
function X(e) {
    let t = (0, g.Tm)(e),
        n = I.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: o, cursorScope: a } = n,
        s = w({
            searchContext: e,
            query: r,
            mode: i,
            tokens: o,
            cursorScope: a,
            autocompletes: Y(e, i, o),
        });
    I.set(t, s);
}
function Q() {
    return null != v && X(v);
}
function J() {
    if (null == v) return !1;
    if ((0, g.R6)(v)) {
        var e;
        let t = (0, g.Tm)(v),
            n = I.get(t);
        if (null == n) return !1;
        let { type: r, filter: i, token: o } = n.mode,
            a = null == o || null == (e = o.getFullMatch()) ? void 0 : e.trim(),
            s = null == a || 0 === a.length;
        if (r === y.Sap.FILTER && i === y.dCx.FILTER_IN && s) return X(v);
    }
    return !1;
}
class $ extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.ZP, _.Z, c.Z, d.Z, f.Z);
    }
    getState(e) {
        var t;
        let n = (0, g.Tm)(e);
        return null != (t = I.get(n)) ? t : P(e);
    }
    getSelectedSearchContext() {
        return v;
    }
}
O($, "displayName", "SearchAutocompleteStore");
let ee = new $(s.Z, {
        SEARCH_AUTOCOMPLETE_INITIALIZE: U,
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: G,
        SEARCH_EDITOR_STATE_CLEAR: D,
        CHANNEL_CREATE: W,
        CHANNEL_DELETE: W,
        STREAMER_MODE_UPDATE: Q,
        CHANNEL_SELECT: J,
        LOGOUT: q,
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: z,
    }),
    et = ee;
