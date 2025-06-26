n.d(t, { Z: () => R }), n(539854), n(781311), n(290780);
var r,
    i,
    l,
    a = n(442837),
    o = n(570140),
    s = n(999650),
    c = n(279779),
    u = n(861262),
    d = n(483360),
    p = n(892880),
    m = n(405656),
    f = n(51144),
    h = n(592125),
    g = n(271383),
    _ = n(430824),
    b = n(768119),
    x = n(246946),
    E = n(594174),
    y = n(981631);
let v = {},
    C = {};
function O(e) {
    let { searchId: t, query: n, mode: r, tokens: i, cursorScope: l, autocompletes: a } = e,
        o = C[t];
    return (
        null == o &&
            ((o = {
                results: [],
                context: c.Z.getSearchContext(j.bind(null, t))
            }),
            (C[t] = o)),
        {
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: y.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != i ? i : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != a ? a : []
        }
    );
}
function j(e, t) {
    let { results: n } = t,
        r = C[e],
        i = v[e];
    if (null == r || null == i) return;
    let { type: l, filter: a } = i.mode;
    if (l === y.Sap.EMPTY || (l === y.Sap.FILTER && a !== y.dCx.FILTER_FROM && a !== y.dCx.FILTER_MENTIONS)) return;
    let o = 3;
    i.mode.type === y.Sap.FILTER && (o = 10),
        (r.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = E.default.getUser(t.id);
                    return (
                        null == n ||
                            e.push({
                                id: n.id,
                                text: f.ZP.getUserTag(n),
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
    (p = T(e, c)),
        (v[e] = O({
            searchId: e,
            query: s,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: p
        })),
        Z.emitChange();
}
function S(e, t, n) {
    var r, i, l;
    let a,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    let c = (0, u.g)(n),
        p = null != (i = null == t || null == (r = t.getFullMatch()) ? void 0 : r.trim()) ? i : '',
        m = e === y.dCx.FILTER_FROM || e === y.dCx.FILTER_MENTIONS;
    if (c === y.aib.GUILD && m) {
        let e = C[n];
        null == e
            ? (a = null)
            : ((null == t || 0 === p.length) &&
                  (e.results = d.ZP.getRecentlyTalked(n, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: f.ZP.getUserTag(t)
                      };
                  })),
              (a = e.results));
    } else {
        let t = null == (l = s.ZP[e]) ? void 0 : l.getAutocompletions;
        a = null != t ? t(p, n, null != o ? o : 10) : [];
    }
    if (null != a && m && (0, s.co)(p)) {
        let e = E.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n.id !== e.id;
            })).unshift({
                text: y.ME,
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
function I(e, t) {
    let n = (null != e ? e.getFullMatch() : '').trim(),
        r = (function (e) {
            let t = (0, u.g)(e),
                n = (0, m.R6)(t);
            return {
                [y.dCx.FILTER_FROM]: !x.Z.hidePersonalInformation,
                [y.dCx.FILTER_MENTIONS]: !x.Z.hidePersonalInformation,
                [y.dCx.FILTER_HAS]: !0,
                [y.dCx.FILTER_BEFORE]: !0,
                [y.dCx.FILTER_AFTER]: !0,
                [y.dCx.FILTER_ON]: !0,
                [y.dCx.FILTER_IN]: n,
                [y.dCx.FILTER_PINNED]: !0
            };
        })(t),
        i = (0, s.nB)(n).filter((e) => r[e.token]);
    return {
        group: y.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function T(e, t) {
    let n = [];
    return (
        t.type === y.Sap.FILTER
            ? n.push(S(t.filter, t.token, e, 10))
            : t.type === y.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        r = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = (0, u.g)(e),
                                    n = [y.dCx.FILTER_HAS];
                                return x.Z.hidePersonalInformation || (n.push(y.dCx.FILTER_FROM), n.push(y.dCx.FILTER_MENTIONS)), (0, m.R6)(t) && n.push(y.dCx.FILTER_IN), n;
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let i = S(n, e, t, 3);
                                null != i && r.push(i);
                            }),
                            r.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var r, i, l;
                                        let e = null == (r = s.ZP[y.dCx.FILTER_BEFORE]) ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            a = null == (i = s.ZP[y.dCx.FILTER_ON]) ? void 0 : i.getAutocompletions(n, t, 1)[0],
                                            o = null == (l = s.ZP[y.dCx.FILTER_AFTER]) ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: y.rtL.DATES,
                                                  results: [e, a, o]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, m.BU)(r) && r.push(I(e, t)),
                        r
                    );
                })(t.token, e))
              : t.type === y.Sap.EMPTY &&
                (n.push(I(t.token, e)),
                n.push(
                    (function (e) {
                        if (x.Z.hidePersonalInformation) return null;
                        let t = b.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: y.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        n
    );
}
function N() {
    (0, m.WU)();
}
function P(e) {
    let t = v[e];
    if (null == t) return;
    let { query: n, mode: r, tokens: i, cursorScope: l, autocompletes: a } = t;
    v[e] = O({
        searchId: e,
        query: n,
        mode: r,
        tokens: i,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === y.rtL.HISTORY ? null : e))
    });
}
function A() {
    let e = b.Z.getCurrentSearchId();
    if (null == e || null == v[e]) return;
    let { query: t, mode: n, tokens: r, cursorScope: i } = v[e];
    v[e] = O({
        searchId: e,
        query: t,
        mode: n,
        tokens: r,
        cursorScope: i,
        autocompletes: T(e, n)
    });
}
class w extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(g.ZP, x.Z, h.Z, _.Z);
    }
    getState(e) {
        var t;
        return null != (t = v[e]) ? t : O({ searchId: e });
    }
}
(l = 'SearchAutocompleteStore'),
    (i = 'displayName') in w
        ? Object.defineProperty(w, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (w[i] = l);
let Z = new w(o.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let n,
                { searchId: r, tokens: i, cursorScope: l } = e,
                a = (0, m.cl)(i),
                o = (0, m.qc)(l, i),
                s = null != (t = v[r]) ? t : {},
                c = C[r],
                u = !0;
            if (a === s.query && (null == s.mode || s.mode.filter === o.filter)) (n = s.autocompletes), (u = !1);
            else if (o.type === y.Sap.EMPTY || (o.type === y.Sap.FILTER && o.filter !== y.dCx.FILTER_FROM && o.filter !== y.dCx.FILTER_MENTIONS)) null != c && (c.context.clearQuery(), (c.results = [])), (n = T(r, o));
            else if (null != c) {
                let { token: e } = o;
                null != e && e.getFullMatch().trim().length > 0 ? (p.Z.requestMembers(r, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: r }), (n = s.autocompletes), (u = !1)) : (c.context.clearQuery(), (n = T(r, o)));
            }
            return (
                (v[r] = O({
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
                n = C[t];
            null != n && (n.context.destroy(), (n.results = []), delete C[t]), delete v[t];
        },
        CHANNEL_CREATE: N,
        CHANNEL_DELETE: N,
        STREAMER_MODE_UPDATE: A,
        SEARCH_SCREEN_OPEN: A,
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null != t ? P(t) : Object.keys(v).forEach(P);
        },
        LOGOUT: function () {
            Object.keys(v).forEach(P);
        }
    }),
    R = Z;
