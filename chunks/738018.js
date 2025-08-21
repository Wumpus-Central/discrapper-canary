n.d(t, { Z: () => $ }), n(388685), n(539854), n(781311), n(290780);
var r,
    i = n(442837),
    a = n(570140),
    o = n(279779),
    s = n(592125),
    l = n(271383),
    c = n(430824),
    u = n(944486),
    d = n(246946),
    f = n(594174),
    _ = n(483360),
    p = n(892880),
    h = n(51144),
    m = n(607802),
    g = n(375123),
    E = n(532428),
    b = n(981631);
function y(e, t, n) {
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
let O = null,
    v = new Map(),
    I = new Map(),
    T = 10,
    S = 3;
function A(e) {
    let t = (0, m.R6)(e),
        n = (0, g.Z)({ location: "getEmptySearchOptions" });
    return new Map([
        [b.dCx.FILTER_FROM, !d.Z.hidePersonalInformation],
        [b.dCx.FILTER_MENTIONS, !d.Z.hidePersonalInformation],
        [b.dCx.FILTER_HAS, !0],
        [b.dCx.FILTER_BEFORE, !0],
        [b.dCx.FILTER_AFTER, !0],
        [b.dCx.FILTER_ON, !0],
        [b.dCx.FILTER_IN, t],
        [b.dCx.FILTER_PINNED, !0],
        [b.dCx.FILTER_AUTHOR_TYPE, n],
    ]);
}
function C(e) {
    let t = [b.dCx.FILTER_HAS];
    return (
        d.Z.hidePersonalInformation || (t.push(b.dCx.FILTER_FROM), t.push(b.dCx.FILTER_MENTIONS)),
        (0, m.R6)(e) && t.push(b.dCx.FILTER_IN),
        t
    );
}
function N(e) {
    var t;
    let n = (0, m.Tm)(e),
        r =
            null != (t = I.get(n))
                ? t
                : {
                      results: [],
                      context: o.Z.getUserSearchContext(L.bind(null, e)),
                  };
    return I.set(n, r), r;
}
function R(e) {
    return {
        searchContext: e,
        query: "",
        mode: {
            type: b.Sap.EMPTY,
            filter: null,
            token: null,
        },
        tokens: [],
        cursorScope: null,
        autocompletes: [],
    };
}
function P(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: a, autocompletes: o } = e;
    return (
        N(t),
        {
            searchContext: t,
            query: n,
            mode: r,
            tokens: i,
            cursorScope: a,
            autocompletes: o,
        }
    );
}
function w(e) {
    let { id: t } = e,
        n = I.get(t);
    null != n && (n.context.destroy(), (n.results = []), I.delete(t)), v.delete(t), (O = null);
}
function D(e) {
    return null != e && (e === b.dCx.FILTER_FROM || e === b.dCx.FILTER_MENTIONS);
}
function x(e) {
    let t = D(e.filter);
    return e.type === b.Sap.FILTER_ALL || (e.type === b.Sap.FILTER && t);
}
function L(e, t) {
    let { results: n } = t,
        r = (0, m.Tm)(e),
        i = I.get(r),
        a = v.get(r);
    if (null == i || null == a || !x(a.mode)) return;
    i.results = j(n, a.mode.type === b.Sap.FILTER ? T : S);
    let { query: o, mode: s, tokens: l, cursorScope: c } = a,
        u = F(e, s, l),
        d = P({
            searchContext: e,
            query: o,
            mode: s,
            tokens: l,
            cursorScope: c,
            autocompletes: u,
        });
    v.set(r, d), J.emitChange();
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T,
        n = [];
    for (let r of e) {
        if (n.length >= t) break;
        let e = f.default.getUser(r.id);
        if (null == e) continue;
        let i = h.ZP.getUserTag(e);
        null != i &&
            n.push({
                text: i,
                user: e,
            });
    }
    return n;
}
function M(e) {
    let { searchContext: t } = e;
    (O = t), z(t);
}
function k(e) {
    let t,
        { searchContext: n, tokens: r, cursorScope: i } = e;
    O = n;
    let a = (0, m.cl)(r),
        o = (0, m.qc)(i, r),
        s = (0, m.Tm)(n),
        l = v.get(s),
        c = !0;
    if (null != l && a === l.query && (null == l.mode || l.mode.filter === o.filter)) (t = l.autocompletes), (c = !1);
    else if (x(o)) {
        var u, d;
        let e = N(n),
            i = o.token,
            a = null == i || null == (u = i.getFullMatch()) ? void 0 : u.trim();
        if (null != a && a.length > 0) {
            let r = (0, m.s5)(n);
            null != r && p.Z.requestMembers(r, a, T),
                e.context.setQuery({
                    query: a,
                    filters: { guild: null != r ? r : void 0 },
                }),
                (t = null != (d = null == l ? void 0 : l.autocompletes) ? d : []),
                (c = !1);
        } else e.context.clearQuery(), (t = F(n, o, r));
    } else {
        let e = I.get(s);
        null != e && (e.context.clearQuery(), (e.results = [])), (t = F(n, o, r));
    }
    let f = P({
        searchContext: n,
        query: a,
        mode: o,
        tokens: r,
        cursorScope: i,
        autocompletes: t,
    });
    return v.set(s, f), c;
}
function U(e) {
    var t, n, r;
    let { filter: i, currentToken: a, searchContext: o, maxResults: s = T, tokens: l } = e;
    if (null == i) return null;
    let c = null,
        d = null != (n = null == a || null == (t = a.getFullMatch()) ? void 0 : t.trim()) ? n : "";
    if ((0, m.b7)(o) && D(i)) {
        let e = N(o);
        if (0 === d.length) {
            let t = u.Z.getCurrentlySelectedChannelId(o.guildId);
            e.results = _.ZP.getRecentlyTalked(t, T).map((e) => {
                let { record: t } = e;
                return {
                    user: t,
                    text: h.ZP.getUserTag(t),
                };
            });
        }
        c = e.results;
    } else {
        let e = null == (r = E.ZP[i]) ? void 0 : r.getAutocompletions;
        c =
            null != e
                ? e({
                      query: d,
                      searchContext: o,
                      maxResults: s,
                      tokens: l,
                  })
                : [];
    }
    if (null != c && D(i) && (0, E.co)(d)) {
        let e = f.default.getCurrentUser();
        null != e &&
            (c = c.filter((t) => {
                let { user: n } = t;
                return (null == n ? void 0 : n.id) !== e.id;
            })).unshift({
                text: b.ME,
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
function G(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
        r = A(t),
        i = (0, E.Ej)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: b.rtL.SEARCH_OPTIONS,
        results: i,
    };
}
function B(e, t, n) {
    var r;
    let i = e.token,
        a = null == i || null == (r = i.getFullMatch()) ? void 0 : r.trim(),
        o = [];
    if (null != a && "" !== a) {
        C(t).forEach((e) => {
            if (null == e) return;
            let r = U({
                filter: e,
                currentToken: i,
                searchContext: t,
                maxResults: S,
                tokens: n,
            });
            null != r && o.push(r);
        });
        let e = Z(i, t);
        null != e && o.push(e);
    }
    return 5 > (0, m.BU)(o) && o.push(G(i, t)), o;
}
function Z(e, t) {
    var n, r, i, a, o, s, l, c, u;
    let d = (null != e ? e.getFullMatch() : "").trim();
    if (null == d || "" === d) return null;
    let f =
            null == (i = E.ZP[b.dCx.FILTER_BEFORE]) ||
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
            null == (s = E.ZP[b.dCx.FILTER_ON]) ||
            null == (o = s.getAutocompletions) ||
            null ==
                (a = o.call(s, {
                    query: d,
                    searchContext: t,
                    maxResults: 1,
                }))
                ? void 0
                : a[0],
        p =
            null == (u = E.ZP[b.dCx.FILTER_AFTER]) ||
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
            group: b.rtL.DATES,
            results: h,
        }
    );
}
function V(e) {
    if (d.Z.hidePersonalInformation) return null;
    {
        let t = n(741995).Z,
            r = (0, m.Tm)(e),
            i = t.getHistory(r);
        return null == i
            ? null
            : {
                  group: b.rtL.HISTORY,
                  results: i.map((e) => ({ text: e })),
              };
    }
}
function F(e, t, n) {
    switch (t.type) {
        case b.Sap.FILTER:
            let r = U({
                filter: t.filter,
                currentToken: t.token,
                searchContext: e,
                maxResults: T,
                tokens: n,
            });
            return null != r ? [r] : [];
        case b.Sap.FILTER_ALL:
            return B(t, e, n);
        case b.Sap.EMPTY:
            let i = [];
            i.push(G(t.token, e));
            {
                let t = V(e);
                null != t && i.push(t);
            }
            return i;
    }
}
function H() {
    (0, m.WU)();
}
function Y(e) {
    let t = v.get(e);
    if (null == t) return;
    let { searchContext: n, query: r, mode: i, tokens: a, cursorScope: o, autocompletes: s } = t,
        l = [];
    s.forEach((e) => {
        e.group !== b.rtL.HISTORY && l.push(e);
    });
    let c = P({
        searchContext: n,
        query: r,
        mode: i,
        tokens: a,
        cursorScope: o,
        autocompletes: l,
    });
    v.set(e, c);
}
function W(e) {
    let { id: t } = e;
    Y(t);
}
function K() {
    for (let e of v.keys()) Y(e);
}
function z(e) {
    let t = (0, m.Tm)(e),
        n = v.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: a, cursorScope: o } = n,
        s = P({
            searchContext: e,
            query: r,
            mode: i,
            tokens: a,
            cursorScope: o,
            autocompletes: F(e, i, a),
        });
    v.set(t, s);
}
function q() {
    return null != O && z(O);
}
function X(e) {
    let { channelId: t } = e;
    if (null == O) return !1;
    if (O.type === b.aib.DMS && (0, m.R6)(O)) {
        let e = s.Z.getChannel(t);
        if (null == e || !e.isPrivate()) return !1;
        let n = (0, m.Tm)(O),
            r = v.get(n);
        if (null == r) return !1;
        let { type: i, filter: a } = r.mode;
        return i === b.Sap.FILTER && a === b.dCx.FILTER_IN && z(O);
    }
    return !1;
}
class Q extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.ZP, d.Z, s.Z, c.Z, u.Z);
    }
    getState(e) {
        var t;
        let n = (0, m.Tm)(e);
        return null != (t = v.get(n)) ? t : R(e);
    }
    getSelectedSearchContext() {
        return O;
    }
}
y(Q, "displayName", "SearchAutocompleteStore");
let J = new Q(a.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: k,
        SEARCH_EDITOR_STATE_CLEAR: w,
        CHANNEL_CREATE: H,
        CHANNEL_DELETE: H,
        STREAMER_MODE_UPDATE: q,
        SEARCH_SCREEN_OPEN: M,
        CHANNEL_SELECT: X,
        LOGOUT: K,
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: W,
    }),
    $ = J;
