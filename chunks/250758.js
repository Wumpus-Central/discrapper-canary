(n.d(t, { Z: () => w }), n(539854), n(781311), n(290780));
var r,
    s,
    l,
    a = n(442837),
    i = n(570140),
    o = n(999650),
    c = n(279779),
    u = n(861262),
    d = n(483360),
    h = n(892880),
    p = n(405656),
    f = n(51144),
    g = n(592125),
    m = n(271383),
    S = n(430824),
    y = n(768119),
    b = n(246946),
    x = n(594174),
    _ = n(981631);
let E = {},
    v = {};
function O(e) {
    let { searchId: t, query: n, mode: r, tokens: s, cursorScope: l, autocompletes: a } = e,
        i = v[t];
    return (
        null == i &&
            ((i = {
                results: [],
                context: c.Z.getSearchContext(j.bind(null, t))
            }),
            (v[t] = i)),
        {
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: _.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != s ? s : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != a ? a : []
        }
    );
}
function j(e, t) {
    let { results: n } = t,
        r = v[e],
        s = E[e];
    if (null == r || null == s) return;
    let { type: l, filter: a } = s.mode;
    if (l === _.Sap.EMPTY || (l === _.Sap.FILTER && a !== _.dCx.FILTER_FROM && a !== _.dCx.FILTER_MENTIONS)) return;
    let i = 3;
    (s.mode.type === _.Sap.FILTER && (i = 10),
        (r.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = x.default.getUser(t.id);
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
        })(n, i)));
    let { query: o, mode: c, tokens: u, cursorScope: d } = s,
        { autocompletes: h } = s;
    ((h = R(e, c)),
        (E[e] = O({
            searchId: e,
            query: o,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: h
        })),
        k.emitChange());
}
function C(e, t, n) {
    var r, s, l;
    let a,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    let c = (0, u.g)(n),
        h = null != (s = null == t || null == (r = t.getFullMatch()) ? void 0 : r.trim()) ? s : '',
        p = e === _.dCx.FILTER_FROM || e === _.dCx.FILTER_MENTIONS;
    if (c === _.aib.GUILD && p) {
        let e = v[n];
        null == e
            ? (a = null)
            : ((null == t || 0 === h.length) &&
                  (e.results = d.ZP.getRecentlyTalked(n, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: f.ZP.getUserTag(t)
                      };
                  })),
              (a = e.results));
    } else {
        let t = null == (l = o.ZP[e]) ? void 0 : l.getAutocompletions;
        a = null != t ? t(h, n, null != i ? i : 10) : [];
    }
    if (null != a && p && (0, o.co)(h)) {
        let e = x.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n.id !== e.id;
            })).unshift({
                text: _.ME,
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
                n = (0, p.R6)(t);
            return {
                [_.dCx.FILTER_FROM]: !b.Z.hidePersonalInformation,
                [_.dCx.FILTER_MENTIONS]: !b.Z.hidePersonalInformation,
                [_.dCx.FILTER_HAS]: !0,
                [_.dCx.FILTER_BEFORE]: !0,
                [_.dCx.FILTER_AFTER]: !0,
                [_.dCx.FILTER_ON]: !0,
                [_.dCx.FILTER_IN]: n,
                [_.dCx.FILTER_PINNED]: !0
            };
        })(t),
        s = (0, o.nB)(n).filter((e) => r[e.token]);
    return {
        group: _.rtL.SEARCH_OPTIONS,
        results: s
    };
}
function R(e, t) {
    let n = [];
    return (
        t.type === _.Sap.FILTER
            ? n.push(C(t.filter, t.token, e, 10))
            : t.type === _.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        r = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = (0, u.g)(e),
                                    n = [_.dCx.FILTER_HAS];
                                return (b.Z.hidePersonalInformation || (n.push(_.dCx.FILTER_FROM), n.push(_.dCx.FILTER_MENTIONS)), (0, p.R6)(t) && n.push(_.dCx.FILTER_IN), n);
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let s = C(n, e, t, 3);
                                null != s && r.push(s);
                            }),
                            r.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var r, s, l;
                                        let e = null == (r = o.ZP[_.dCx.FILTER_BEFORE]) ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            a = null == (s = o.ZP[_.dCx.FILTER_ON]) ? void 0 : s.getAutocompletions(n, t, 1)[0],
                                            i = null == (l = o.ZP[_.dCx.FILTER_AFTER]) ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: _.rtL.DATES,
                                                  results: [e, a, i]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, p.BU)(r) && r.push(I(e, t)),
                        r
                    );
                })(t.token, e))
              : t.type === _.Sap.EMPTY &&
                (n.push(I(t.token, e)),
                n.push(
                    (function (e) {
                        if (b.Z.hidePersonalInformation) return null;
                        let t = y.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: _.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        n
    );
}
function P() {
    (0, p.WU)();
}
function T(e) {
    let t = E[e];
    if (null == t) return;
    let { query: n, mode: r, tokens: s, cursorScope: l, autocompletes: a } = t;
    E[e] = O({
        searchId: e,
        query: n,
        mode: r,
        tokens: s,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === _.rtL.HISTORY ? null : e))
    });
}
function N() {
    let e = y.Z.getCurrentSearchId();
    if (null == e || null == E[e]) return;
    let { query: t, mode: n, tokens: r, cursorScope: s } = E[e];
    E[e] = O({
        searchId: e,
        query: t,
        mode: n,
        tokens: r,
        cursorScope: s,
        autocompletes: R(e, n)
    });
}
class A extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP, b.Z, g.Z, S.Z);
    }
    getState(e) {
        var t;
        return null != (t = E[e]) ? t : O({ searchId: e });
    }
}
((l = 'SearchAutocompleteStore'),
    (s = 'displayName') in A
        ? Object.defineProperty(A, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (A[s] = l));
let k = new A(i.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let n,
                { searchId: r, tokens: s, cursorScope: l } = e,
                a = (0, p.cl)(s),
                i = (0, p.qc)(l, s),
                o = null != (t = E[r]) ? t : {},
                c = v[r],
                u = !0;
            if (a === o.query && (null == o.mode || o.mode.filter === i.filter)) ((n = o.autocompletes), (u = !1));
            else if (i.type === _.Sap.EMPTY || (i.type === _.Sap.FILTER && i.filter !== _.dCx.FILTER_FROM && i.filter !== _.dCx.FILTER_MENTIONS)) (null != c && (c.context.clearQuery(), (c.results = [])), (n = R(r, i)));
            else if (null != c) {
                let { token: e } = i;
                null != e && e.getFullMatch().trim().length > 0 ? (h.Z.requestMembers(r, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: r }), (n = o.autocompletes), (u = !1)) : (c.context.clearQuery(), (n = R(r, i)));
            }
            return (
                (E[r] = O({
                    searchId: r,
                    query: a,
                    mode: i,
                    tokens: s,
                    cursorScope: l,
                    autocompletes: n
                })),
                u
            );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { searchId: t } = e,
                n = v[t];
            (null != n && (n.context.destroy(), (n.results = []), delete v[t]), delete E[t]);
        },
        CHANNEL_CREATE: P,
        CHANNEL_DELETE: P,
        STREAMER_MODE_UPDATE: N,
        SEARCH_SCREEN_OPEN: N,
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null != t ? T(t) : Object.keys(E).forEach(T);
        },
        LOGOUT: function () {
            Object.keys(E).forEach(T);
        }
    }),
    w = k;
