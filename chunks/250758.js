(n.d(t, { Z: () => F }), n(388685), n(539854), n(781311), n(290780));
var r,
    l,
    s,
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
    b = n(944486),
    x = n(246946),
    _ = n(594174),
    v = n(981631);
let O = {},
    E = {};
function j(e) {
    let { searchId: t, query: n, mode: r, tokens: l, cursorScope: s, autocompletes: a } = e,
        i = E[t];
    return (
        null == i &&
            ((i = {
                results: [],
                context: c.Z.getSearchContext(C.bind(null, t))
            }),
            (E[t] = i)),
        {
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: v.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != l ? l : [],
            cursorScope: null != s ? s : null,
            autocompletes: null != a ? a : []
        }
    );
}
function C(e, t) {
    let { results: n } = t,
        r = E[e],
        l = O[e];
    if (null == r || null == l) return;
    let { type: s, filter: a } = l.mode;
    if (s === v.Sap.EMPTY || (s === v.Sap.FILTER && a !== v.dCx.FILTER_FROM && a !== v.dCx.FILTER_MENTIONS)) return;
    let i = 3;
    (l.mode.type === v.Sap.FILTER && (i = 10),
        (r.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = _.default.getUser(t.id);
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
    let { query: o, mode: c, tokens: u, cursorScope: d } = l,
        { autocompletes: h } = l;
    ((h = R(e, c)),
        (O[e] = j({
            searchId: e,
            query: o,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: h
        })),
        Z.emitChange());
}
function I(e, t, n) {
    var r, l, s;
    let a,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e) return null;
    let c = (0, u.g)(n),
        h = null != (l = null == t || null == (r = t.getFullMatch()) ? void 0 : r.trim()) ? l : '',
        p = e === v.dCx.FILTER_FROM || e === v.dCx.FILTER_MENTIONS;
    if (c === v.aib.GUILD && p) {
        let e = E[n];
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
        let t = null == (s = o.ZP[e]) ? void 0 : s.getAutocompletions;
        a = null != t ? t(h, n, null != i ? i : 10) : [];
    }
    if (null != a && p && (0, o.co)(h)) {
        let e = _.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n.id !== e.id;
            })).unshift({
                text: v.ME,
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
function P(e, t) {
    let n = (null != e ? e.getFullMatch() : '').trim(),
        r = (function (e) {
            let t = (0, u.g)(e),
                n = (0, p.R6)(t);
            return new Map([
                [v.dCx.FILTER_FROM, !x.Z.hidePersonalInformation],
                [v.dCx.FILTER_MENTIONS, !x.Z.hidePersonalInformation],
                [v.dCx.FILTER_HAS, !0],
                [v.dCx.FILTER_BEFORE, !0],
                [v.dCx.FILTER_AFTER, !0],
                [v.dCx.FILTER_ON, !0],
                [v.dCx.FILTER_IN, n],
                [v.dCx.FILTER_PINNED, !0]
            ]);
        })(t),
        l = (0, o.nB)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: v.rtL.SEARCH_OPTIONS,
        results: l
    };
}
function R(e, t) {
    let n = [];
    return (
        t.type === v.Sap.FILTER
            ? n.push(I(t.filter, t.token, e, 10))
            : t.type === v.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        r = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = (0, u.g)(e),
                                    n = [v.dCx.FILTER_HAS];
                                return (x.Z.hidePersonalInformation || (n.push(v.dCx.FILTER_FROM), n.push(v.dCx.FILTER_MENTIONS)), (0, p.R6)(t) && n.push(v.dCx.FILTER_IN), n);
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let l = I(n, e, t, 3);
                                null != l && r.push(l);
                            }),
                            r.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var r, l, s;
                                        let e = null == (r = o.ZP[v.dCx.FILTER_BEFORE]) ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            a = null == (l = o.ZP[v.dCx.FILTER_ON]) ? void 0 : l.getAutocompletions(n, t, 1)[0],
                                            i = null == (s = o.ZP[v.dCx.FILTER_AFTER]) ? void 0 : s.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: v.rtL.DATES,
                                                  results: [e, a, i]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, p.BU)(r) && r.push(P(e, t)),
                        r
                    );
                })(t.token, e))
              : t.type === v.Sap.EMPTY &&
                (n.push(P(t.token, e)),
                n.push(
                    (function (e) {
                        if (x.Z.hidePersonalInformation) return null;
                        let t = y.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: v.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        n
    );
}
function T() {
    (0, p.WU)();
}
function N(e) {
    let t = O[e];
    if (null == t) return;
    let { query: n, mode: r, tokens: l, cursorScope: s, autocompletes: a } = t;
    O[e] = j({
        searchId: e,
        query: n,
        mode: r,
        tokens: l,
        cursorScope: s,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === v.rtL.HISTORY ? null : e))
    });
}
function w(e) {
    if (null == e || null == O[e]) return !1;
    let { query: t, mode: n, tokens: r, cursorScope: l } = O[e];
    O[e] = j({
        searchId: e,
        query: t,
        mode: n,
        tokens: r,
        cursorScope: l,
        autocompletes: R(e, n)
    });
}
function k() {
    return w(y.Z.getCurrentSearchId());
}
class A extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP, x.Z, g.Z, S.Z, b.Z);
    }
    getState(e) {
        var t;
        return null != (t = O[e]) ? t : j({ searchId: e });
    }
}
((s = 'SearchAutocompleteStore'),
    (l = 'displayName') in A
        ? Object.defineProperty(A, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (A[l] = s));
let Z = new A(i.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let n,
                { searchId: r, tokens: l, cursorScope: s } = e,
                a = (0, p.cl)(l),
                i = (0, p.qc)(s, l),
                o = null != (t = O[r]) ? t : {},
                c = E[r],
                u = !0;
            if (a === o.query && (null == o.mode || o.mode.filter === i.filter)) ((n = o.autocompletes), (u = !1));
            else if (i.type === v.Sap.EMPTY || (i.type === v.Sap.FILTER && i.filter !== v.dCx.FILTER_FROM && i.filter !== v.dCx.FILTER_MENTIONS)) (null != c && (c.context.clearQuery(), (c.results = [])), (n = R(r, i)));
            else if (null != c) {
                let { token: e } = i;
                null != e && e.getFullMatch().trim().length > 0
                    ? (h.Z.requestMembers(r, e.getFullMatch().trim(), 10),
                      c.context.setQuery({
                          query: e.getFullMatch().trim(),
                          filters: { guild: r }
                      }),
                      (n = o.autocompletes),
                      (u = !1))
                    : (c.context.clearQuery(), (n = R(r, i)));
            }
            return (
                (O[r] = j({
                    searchId: r,
                    query: a,
                    mode: i,
                    tokens: l,
                    cursorScope: s,
                    autocompletes: n
                })),
                u
            );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { searchId: t } = e,
                n = E[t];
            (null != n && (n.context.destroy(), (n.results = []), delete E[t]), delete O[t]);
        },
        CHANNEL_CREATE: T,
        CHANNEL_DELETE: T,
        STREAMER_MODE_UPDATE: k,
        SEARCH_SCREEN_OPEN: k,
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null != t ? N(t) : Object.keys(O).forEach(N);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = y.Z.getCurrentSearchId();
            if (null == n) return !1;
            if (n === v.aib.DMS && (0, p.R6)(n)) {
                let e = g.Z.getChannel(t);
                if (null == e || !e.isPrivate()) return !1;
                let r = O[n];
                if (null == r) return !1;
                let { type: l, filter: s } = r.mode;
                return l === v.Sap.FILTER && s === v.dCx.FILTER_IN && w(n);
            }
            return !1;
        },
        LOGOUT: function () {
            Object.keys(O).forEach(N);
        }
    }),
    F = Z;
