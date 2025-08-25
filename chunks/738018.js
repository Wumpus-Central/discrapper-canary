n.d(t, { Z: () => en }), n(388685), n(539854), n(781311), n(290780);
var r,
    i = n(498607),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(279779),
    c = n(592125),
    u = n(271383),
    d = n(430824),
    f = n(944486),
    _ = n(246946),
    p = n(594174),
    h = n(483360),
    m = n(892880),
    g = n(51144),
    E = n(607802),
    b = n(375123),
    y = n(532428),
    O = n(981631);
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
let I = null,
    T = new Map(),
    S = new Map(),
    A = 10,
    C = 3;
function N(e) {
    let t = (0, E.R6)(e),
        n = (0, b.Z)({ location: "getEmptySearchOptions" });
    return new Map([
        [O.dCx.FILTER_FROM, !_.Z.hidePersonalInformation],
        [O.dCx.FILTER_MENTIONS, !_.Z.hidePersonalInformation],
        [O.dCx.FILTER_HAS, !0],
        [O.dCx.FILTER_BEFORE, !0],
        [O.dCx.FILTER_AFTER, !0],
        [O.dCx.FILTER_ON, !0],
        [O.dCx.FILTER_IN, t],
        [O.dCx.FILTER_PINNED, !0],
        [O.dCx.FILTER_AUTHOR_TYPE, n],
    ]);
}
function R(e) {
    let t = [O.dCx.FILTER_HAS];
    return (
        _.Z.hidePersonalInformation || (t.push(O.dCx.FILTER_FROM), t.push(O.dCx.FILTER_MENTIONS)),
        (0, E.R6)(e) && t.push(O.dCx.FILTER_IN),
        t
    );
}
function P(e) {
    var t;
    let n = (0, E.Tm)(e),
        r =
            null != (t = S.get(n))
                ? t
                : {
                      results: [],
                      context: l.Z.getUserSearchContext(M.bind(null, e)),
                  };
    return S.set(n, r), r;
}
function w(e) {
    return {
        searchContext: e,
        query: "",
        mode: {
            type: O.Sap.EMPTY,
            filter: null,
            token: null,
        },
        tokens: [],
        cursorScope: null,
        autocompletes: [],
    };
}
function D(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: a, autocompletes: o } = e;
    return (
        P(t),
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
function x(e) {
    let { id: t } = e,
        n = S.get(t);
    null != n && (n.context.destroy(), (n.results = []), S.delete(t)), T.delete(t), (I = null);
}
function L(e) {
    return null != e && (e === O.dCx.FILTER_FROM || e === O.dCx.FILTER_MENTIONS);
}
function j(e) {
    let t = L(e.filter);
    return e.type === O.Sap.FILTER_ALL || (e.type === O.Sap.FILTER && t);
}
function M(e, t) {
    let { results: n } = t,
        r = (0, E.Tm)(e),
        i = S.get(r),
        a = T.get(r);
    if (null == i || null == a || !j(a.mode)) return;
    i.results = k(n, a.mode.type === O.Sap.FILTER ? A : C);
    let { query: o, mode: s, tokens: l, cursorScope: c } = a,
        u = W(e, s, l),
        d = D({
            searchContext: e,
            query: o,
            mode: s,
            tokens: l,
            cursorScope: c,
            autocompletes: u,
        });
    T.set(r, d), et.emitChange();
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A,
        n = [];
    for (let r of e) {
        if (n.length >= t) break;
        let e = p.default.getUser(r.id);
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
    a()(I, e) || ((I = e), (0, E.WU)());
}
function G(e) {
    let { searchContext: t } = e;
    U(t), Q(t);
}
function B(e) {
    let t,
        { searchContext: n, tokens: r, cursorScope: i } = e;
    U(n);
    let a = (0, E.cl)(r),
        o = (0, E.qc)(i, r),
        s = (0, E.Tm)(n),
        l = T.get(s),
        c = !0;
    if (null != l && a === l.query && (null == l.mode || l.mode.filter === o.filter)) (t = l.autocompletes), (c = !1);
    else if (j(o)) {
        var u, d;
        let e = P(n),
            i = o.token,
            a = null == i || null == (u = i.getFullMatch()) ? void 0 : u.trim();
        if (null != a && a.length > 0) {
            let r = (0, E.s5)(n);
            null != r && m.Z.requestMembers(r, a, A),
                e.context.setQuery({
                    query: a,
                    filters: { guild: null != r ? r : void 0 },
                }),
                (t = null != (d = null == l ? void 0 : l.autocompletes) ? d : []),
                (c = !1);
        } else e.context.clearQuery(), (t = W(n, o, r));
    } else {
        let e = S.get(s);
        null != e && (e.context.clearQuery(), (e.results = [])), (t = W(n, o, r));
    }
    let f = D({
        searchContext: n,
        query: a,
        mode: o,
        tokens: r,
        cursorScope: i,
        autocompletes: t,
    });
    return T.set(s, f), c;
}
function Z(e) {
    var t, n, r;
    let { filter: i, currentToken: a, searchContext: o, maxResults: s = A, tokens: l } = e;
    if (null == i) return null;
    let c = null,
        u = null != (n = null == a || null == (t = a.getFullMatch()) ? void 0 : t.trim()) ? n : "";
    if ((0, E.b7)(o) && L(i)) {
        let e = P(o);
        if (0 === u.length) {
            let t = f.Z.getCurrentlySelectedChannelId(o.guildId);
            e.results = h.ZP.getRecentlyTalked(t, A).map((e) => {
                let { record: t } = e;
                return {
                    user: t,
                    text: g.ZP.getUserTag(t),
                };
            });
        }
        c = e.results;
    } else {
        let e = null == (r = y.ZP[i]) ? void 0 : r.getAutocompletions;
        c =
            null != e
                ? e({
                      query: u,
                      searchContext: o,
                      maxResults: s,
                      tokens: l,
                  })
                : [];
    }
    if (null != c && L(i) && (0, y.co)(u)) {
        let e = p.default.getCurrentUser();
        null != e &&
            (c = c.filter((t) => {
                let { user: n } = t;
                return (null == n ? void 0 : n.id) !== e.id;
            })).unshift({
                text: O.ME,
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
function V(e, t) {
    let n = (null != e ? e.getFullMatch() : "").trim(),
        r = N(t),
        i = (0, y.Ej)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: O.rtL.SEARCH_OPTIONS,
        results: i,
    };
}
function F(e, t, n) {
    var r;
    let i = e.token,
        a = null == i || null == (r = i.getFullMatch()) ? void 0 : r.trim(),
        o = [];
    if (null != a && "" !== a) {
        R(t).forEach((e) => {
            if (null == e) return;
            let r = Z({
                filter: e,
                currentToken: i,
                searchContext: t,
                maxResults: C,
                tokens: n,
            });
            null != r && o.push(r);
        });
        let e = H(i, t);
        null != e && o.push(e);
    }
    return 5 > (0, E.BU)(o) && o.push(V(i, t)), o;
}
function H(e, t) {
    var n, r, i, a, o, s, l, c, u;
    let d = (null != e ? e.getFullMatch() : "").trim();
    if (null == d || "" === d) return null;
    let f =
            null == (i = y.ZP[O.dCx.FILTER_BEFORE]) ||
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
            null == (s = y.ZP[O.dCx.FILTER_ON]) ||
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
            null == (u = y.ZP[O.dCx.FILTER_AFTER]) ||
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
            group: O.rtL.DATES,
            results: h,
        }
    );
}
function Y(e) {
    if (_.Z.hidePersonalInformation) return null;
    {
        let t = n(741995).Z,
            r = (0, E.Tm)(e),
            i = t.getHistory(r);
        return null == i
            ? null
            : {
                  group: O.rtL.HISTORY,
                  results: i.map((e) => ({ text: e })),
              };
    }
}
function W(e, t, n) {
    switch (t.type) {
        case O.Sap.FILTER:
            let r = Z({
                filter: t.filter,
                currentToken: t.token,
                searchContext: e,
                maxResults: A,
                tokens: n,
            });
            return null != r ? [r] : [];
        case O.Sap.FILTER_ALL:
            return F(t, e, n);
        case O.Sap.EMPTY:
            let i = [];
            i.push(V(t.token, e));
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
    let t = T.get(e);
    if (null == t) return;
    let { searchContext: n, query: r, mode: i, tokens: a, cursorScope: o, autocompletes: s } = t,
        l = [];
    s.forEach((e) => {
        e.group !== O.rtL.HISTORY && l.push(e);
    });
    let c = D({
        searchContext: n,
        query: r,
        mode: i,
        tokens: a,
        cursorScope: o,
        autocompletes: l,
    });
    T.set(e, c);
}
function q(e) {
    let { id: t } = e;
    z(t);
}
function X() {
    for (let e of T.keys()) z(e);
}
function Q(e) {
    let t = (0, E.Tm)(e),
        n = T.get(t);
    if (null == n) return !1;
    let { query: r, mode: i, tokens: a, cursorScope: o } = n,
        s = D({
            searchContext: e,
            query: r,
            mode: i,
            tokens: a,
            cursorScope: o,
            autocompletes: W(e, i, a),
        });
    T.set(t, s);
}
function J() {
    return null != I && Q(I);
}
function $(e) {
    let { channelId: t } = e;
    if (null == I) return !1;
    if (I.type === O.aib.DMS && (0, E.R6)(I)) {
        let e = c.Z.getChannel(t);
        if (null == e || !e.isPrivate()) return !1;
        let n = (0, E.Tm)(I),
            r = T.get(n);
        if (null == r) return !1;
        let { type: i, filter: a } = r.mode;
        return i === O.Sap.FILTER && a === O.dCx.FILTER_IN && Q(I);
    }
    return !1;
}
class ee extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(u.ZP, _.Z, c.Z, d.Z, f.Z);
    }
    getState(e) {
        var t;
        let n = (0, E.Tm)(e);
        return null != (t = T.get(n)) ? t : w(e);
    }
    getSelectedSearchContext() {
        return I;
    }
}
v(ee, "displayName", "SearchAutocompleteStore");
let et = new ee(s.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: B,
        SEARCH_EDITOR_STATE_CLEAR: x,
        CHANNEL_CREATE: K,
        CHANNEL_DELETE: K,
        STREAMER_MODE_UPDATE: J,
        SEARCH_SCREEN_OPEN: G,
        CHANNEL_SELECT: $,
        LOGOUT: X,
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: q,
    }),
    en = et;
