n.d(t, { Z: () => A }), n(539854), n(781311), n(290780);
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(999650),
    c = n(279779),
    u = n(483360),
    d = n(892880),
    p = n(405656),
    m = n(51144),
    f = n(271383),
    h = n(768119),
    g = n(246946),
    _ = n(594174),
    b = n(981631);
let x = {},
    y = {};
function v(e) {
    let { searchId: t, query: n, mode: r, tokens: i, cursorScope: l, autocompletes: a } = e,
        o = y[t];
    return (
        null == o &&
            ((o = {
                results: [],
                context: c.Z.getSearchContext(E.bind(null, t))
            }),
            (y[t] = o)),
        {
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: b.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != i ? i : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != a ? a : []
        }
    );
}
function E(e, t) {
    let { results: n } = t,
        r = y[e],
        i = x[e];
    if (null == r || null == i) return;
    let { type: l, filter: a } = i.mode;
    if (l === b.Sap.EMPTY || (l === b.Sap.FILTER && a !== b.dCx.FILTER_FROM && a !== b.dCx.FILTER_MENTIONS)) return;
    let o = 3;
    i.mode.type === b.Sap.FILTER && (o = 10),
        (r.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = _.default.getUser(t.id);
                    return (
                        null == n ||
                            e.push({
                                id: n.id,
                                text: m.ZP.getUserTag(n),
                                user: n
                            }),
                        e
                    );
                }, [])).length > t && (e.length = t),
                e
            );
        })(n, o));
    let { query: s, mode: c, tokens: u, cursorScope: d } = i,
        { autocompletes: p } = i;
    (p = C(e, c)),
        (x[e] = v({
            searchId: e,
            query: s,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: p
        })),
        P.emitChange();
}
function O(e, t, n) {
    var r, i, l;
    let a,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    let c = h.Z.getSearchType(n),
        d = null != (i = null == t || null == (r = t.getFullMatch()) ? void 0 : r.trim()) ? i : '',
        p = e === b.dCx.FILTER_FROM || e === b.dCx.FILTER_MENTIONS;
    if (c === b.aib.GUILD && p) {
        let e = y[n];
        null == e
            ? (a = null)
            : ((null == t || 0 === d.length) &&
                  (e.results = u.ZP.getRecentlyTalked(n, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: m.ZP.getUserTag(t)
                      };
                  })),
              (a = e.results));
    } else {
        let t = null == (l = s.ZP[e]) ? void 0 : l.getAutocompletions;
        a = null != t ? t(d, n, null != o ? o : 10) : [];
    }
    if (null != a && p && (0, s.co)(d)) {
        let e = _.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n.id !== e.id;
            })).unshift({
                text: b.ME,
                user: e
            });
    }
    return null == a || 0 === a.length
        ? null
        : {
              group: e,
              results: a
          };
}
function j(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(),
        n = {
            [b.dCx.FILTER_FROM]: !g.Z.hidePersonalInformation,
            [b.dCx.FILTER_MENTIONS]: !g.Z.hidePersonalInformation,
            [b.dCx.FILTER_HAS]: !0,
            [b.dCx.FILTER_BEFORE]: !0,
            [b.dCx.FILTER_AFTER]: !0,
            [b.dCx.FILTER_ON]: !0,
            [b.dCx.FILTER_IN]: h.Z.getSearchType() === b.aib.GUILD,
            [b.dCx.FILTER_PINNED]: !0
        },
        r = (0, s.nB)(t).filter((e) => n[e.token]);
    return {
        group: b.rtL.SEARCH_OPTIONS,
        results: r
    };
}
function C(e, t) {
    let n = [];
    return (
        t.type === b.Sap.FILTER
            ? n.push(O(t.filter, t.token, e, 10))
            : t.type === b.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        r = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = h.Z.getSearchType(e),
                                    n = [b.dCx.FILTER_HAS];
                                return g.Z.hidePersonalInformation || (n.push(b.dCx.FILTER_FROM), n.push(b.dCx.FILTER_MENTIONS)), t === b.aib.GUILD && n.push(b.dCx.FILTER_IN), n;
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let i = O(n, e, t, 3);
                                null != i && r.push(i);
                            }),
                            r.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var r, i, l;
                                        let e = null == (r = s.ZP[b.dCx.FILTER_BEFORE]) ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            a = null == (i = s.ZP[b.dCx.FILTER_ON]) ? void 0 : i.getAutocompletions(n, t, 1)[0],
                                            o = null == (l = s.ZP[b.dCx.FILTER_AFTER]) ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: b.rtL.DATES,
                                                  results: [e, a, o]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, p.BU)(r) && r.push(j(e)),
                        r
                    );
                })(t.token, e))
              : t.type === b.Sap.EMPTY &&
                (n.push(j(t.token)),
                n.push(
                    (function (e) {
                        if (g.Z.hidePersonalInformation) return null;
                        let t = h.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: b.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        n
    );
}
function S() {
    (0, p.WU)();
}
function I(e) {
    let t = x[e];
    if (null == t) return;
    let { query: n, mode: r, tokens: i, cursorScope: l, autocompletes: a } = t;
    x[e] = v({
        searchId: e,
        query: n,
        mode: r,
        tokens: i,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === b.rtL.HISTORY ? null : e))
    });
}
function N() {
    let e = h.Z.getCurrentSearchId();
    if (null == e || null == x[e]) return;
    let { query: t, mode: n, tokens: r, cursorScope: i } = x[e];
    x[e] = v({
        searchId: e,
        query: t,
        mode: n,
        tokens: r,
        cursorScope: i,
        autocompletes: C(e, n)
    });
}
class T extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(f.ZP, g.Z);
    }
    getState(e) {
        var t;
        return null != (t = x[e]) ? t : v({ searchId: e });
    }
}
(l = 'SearchAutocompleteStore'),
    (i = 'displayName') in T
        ? Object.defineProperty(T, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[i] = l);
let P = new T(o.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let n,
                { searchId: r, tokens: i, cursorScope: l } = e,
                a = (0, p.cl)(i),
                o = (0, p.qc)(l, i),
                s = null != (t = x[r]) ? t : {},
                c = y[r],
                u = !0;
            if (a === s.query && (null == s.mode || s.mode.filter === o.filter)) (n = s.autocompletes), (u = !1);
            else if (o.type === b.Sap.EMPTY || (o.type === b.Sap.FILTER && o.filter !== b.dCx.FILTER_FROM && o.filter !== b.dCx.FILTER_MENTIONS)) null != c && (c.context.clearQuery(), (c.results = [])), (n = C(r, o));
            else if (null != c) {
                let { token: e } = o;
                null != e && e.getFullMatch().trim().length > 0 ? (d.Z.requestMembers(r, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: r }), (n = s.autocompletes), (u = !1)) : (c.context.clearQuery(), (n = C(r, o)));
            }
            return (
                (x[r] = v({
                    searchId: r,
                    query: a,
                    mode: o,
                    tokens: i,
                    cursorScope: l,
                    autocompletes: n
                })),
                u
            );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { searchId: t } = e,
                n = y[t];
            null != n && (n.context.destroy(), (n.results = []), delete y[t]), delete x[t];
        },
        CHANNEL_CREATE: S,
        CHANNEL_DELETE: S,
        STREAMER_MODE_UPDATE: N,
        SEARCH_SCREEN_OPEN: N,
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null != t ? I(t) : Object.keys(x).forEach(I);
        },
        LOGOUT: function () {
            Object.keys(x).forEach(I);
        }
    }),
    A = P;
