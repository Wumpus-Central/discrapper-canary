(r.d(t, { Z: () => L }), r(388685), r(539854), r(781311), r(290780));
var n,
    s,
    l,
    a = r(442837),
    i = r(570140),
    o = r(999650),
    c = r(279779),
    u = r(861262),
    d = r(483360),
    h = r(892880),
    p = r(405656),
    f = r(51144),
    g = r(592125),
    m = r(271383),
    _ = r(430824),
    S = r(768119),
    y = r(944486),
    b = r(246946),
    x = r(594174),
    E = r(981631);
let C = {},
    O = {};
function I(e) {
    let { searchId: t, query: r, mode: n, tokens: s, cursorScope: l, autocompletes: a } = e,
        i = O[t];
    return (
        null == i &&
            ((i = {
                results: [],
                context: c.Z.getSearchContext(v.bind(null, t))
            }),
            (O[t] = i)),
        {
            query: null != r ? r : '',
            mode:
                null != n
                    ? n
                    : {
                          type: E.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != s ? s : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != a ? a : []
        }
    );
}
function v(e, t) {
    let { results: r } = t,
        n = O[e],
        s = C[e];
    if (null == n || null == s) return;
    let { type: l, filter: a } = s.mode;
    if (l === E.Sap.EMPTY || (l === E.Sap.FILTER && a !== E.dCx.FILTER_FROM && a !== E.dCx.FILTER_MENTIONS)) return;
    let i = 3;
    (s.mode.type === E.Sap.FILTER && (i = 10),
        (n.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let r = x.default.getUser(t.id);
                    return (
                        null == r ||
                            e.push({
                                id: r.id,
                                text: f.ZP.getUserTag(r),
                                user: r
                            }),
                        e
                    );
                }, [])).length > t && (e.length = t),
                e
            );
        })(r, i)));
    let { query: o, mode: c, tokens: u, cursorScope: d } = s,
        { autocompletes: h } = s;
    ((h = T(e, c)),
        (C[e] = I({
            searchId: e,
            query: o,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: h
        })),
        M.emitChange());
}
function j(e, t, r) {
    var n, s, l;
    let a,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e) return null;
    let c = (0, u.g)(r),
        h = null != (s = null == t || null == (n = t.getFullMatch()) ? void 0 : n.trim()) ? s : '',
        p = e === E.dCx.FILTER_FROM || e === E.dCx.FILTER_MENTIONS;
    if (c === E.aib.GUILD && p) {
        let e = O[r];
        null == e
            ? (a = null)
            : ((null == t || 0 === h.length) &&
                  (e.results = d.ZP.getRecentlyTalked(r, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: f.ZP.getUserTag(t)
                      };
                  })),
              (a = e.results));
    } else {
        let t = null == (l = o.ZP[e]) ? void 0 : l.getAutocompletions;
        a = null != t ? t(h, r, null != i ? i : 10) : [];
    }
    if (null != a && p && (0, o.co)(h)) {
        let e = x.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: r } = t;
                return r.id !== e.id;
            })).unshift({
                text: E.ME,
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
function R(e, t) {
    let r = (null != e ? e.getFullMatch() : '').trim(),
        n = (function (e) {
            let t = (0, u.g)(e),
                r = (0, p.R6)(t);
            return new Map([
                [E.dCx.FILTER_FROM, !b.Z.hidePersonalInformation],
                [E.dCx.FILTER_MENTIONS, !b.Z.hidePersonalInformation],
                [E.dCx.FILTER_HAS, !0],
                [E.dCx.FILTER_BEFORE, !0],
                [E.dCx.FILTER_AFTER, !0],
                [E.dCx.FILTER_ON, !0],
                [E.dCx.FILTER_IN, r],
                [E.dCx.FILTER_PINNED, !0]
            ]);
        })(t),
        s = (0, o.nB)(r).filter((e) => null != e.token && !0 === n.get(e.token));
    return {
        group: E.rtL.SEARCH_OPTIONS,
        results: s
    };
}
function T(e, t) {
    let r = [];
    return (
        t.type === E.Sap.FILTER
            ? r.push(j(t.filter, t.token, e, 10))
            : t.type === E.Sap.FILTER_ALL
              ? (r = (function (e, t) {
                    let r = (null != e ? e.getFullMatch() : '').trim(),
                        n = [];
                    return (
                        null != r &&
                            '' !== r &&
                            ((function (e) {
                                let t = (0, u.g)(e),
                                    r = [E.dCx.FILTER_HAS];
                                return (b.Z.hidePersonalInformation || (r.push(E.dCx.FILTER_FROM), r.push(E.dCx.FILTER_MENTIONS)), (0, p.R6)(t) && r.push(E.dCx.FILTER_IN), r);
                            })(t).forEach((r) => {
                                if (null == r) return;
                                let s = j(r, e, t, 3);
                                null != s && n.push(s);
                            }),
                            n.push(
                                (function (e, t) {
                                    let r = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != r && '' !== r) {
                                        var n, s, l;
                                        let e = null == (n = o.ZP[E.dCx.FILTER_BEFORE]) ? void 0 : n.getAutocompletions(r, t, 1)[0],
                                            a = null == (s = o.ZP[E.dCx.FILTER_ON]) ? void 0 : s.getAutocompletions(r, t, 1)[0],
                                            i = null == (l = o.ZP[E.dCx.FILTER_AFTER]) ? void 0 : l.getAutocompletions(r, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: E.rtL.DATES,
                                                  results: [e, a, i]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, p.BU)(n) && n.push(R(e, t)),
                        n
                    );
                })(t.token, e))
              : t.type === E.Sap.EMPTY &&
                (r.push(R(t.token, e)),
                r.push(
                    (function (e) {
                        if (b.Z.hidePersonalInformation) return null;
                        let t = S.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: E.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        r
    );
}
function P() {
    (0, p.WU)();
}
function N(e) {
    let t = C[e];
    if (null == t) return;
    let { query: r, mode: n, tokens: s, cursorScope: l, autocompletes: a } = t;
    C[e] = I({
        searchId: e,
        query: r,
        mode: n,
        tokens: s,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === E.rtL.HISTORY ? null : e))
    });
}
function A(e) {
    if (null == e || null == C[e]) return !1;
    let { query: t, mode: r, tokens: n, cursorScope: s } = C[e];
    C[e] = I({
        searchId: e,
        query: t,
        mode: r,
        tokens: n,
        cursorScope: s,
        autocompletes: T(e, r)
    });
}
function Z() {
    return A(S.Z.getCurrentSearchId());
}
class k extends (n = a.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP, b.Z, g.Z, _.Z, y.Z);
    }
    getState(e) {
        var t;
        return null != (t = C[e]) ? t : I({ searchId: e });
    }
}
((l = 'SearchAutocompleteStore'),
    (s = 'displayName') in k
        ? Object.defineProperty(k, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (k[s] = l));
let M = new k(i.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let r,
                { searchId: n, tokens: s, cursorScope: l } = e,
                a = (0, p.cl)(s),
                i = (0, p.qc)(l, s),
                o = null != (t = C[n]) ? t : {},
                c = O[n],
                u = !0;
            if (a === o.query && (null == o.mode || o.mode.filter === i.filter)) ((r = o.autocompletes), (u = !1));
            else if (i.type === E.Sap.EMPTY || (i.type === E.Sap.FILTER && i.filter !== E.dCx.FILTER_FROM && i.filter !== E.dCx.FILTER_MENTIONS)) (null != c && (c.context.clearQuery(), (c.results = [])), (r = T(n, i)));
            else if (null != c) {
                let { token: e } = i;
                null != e && e.getFullMatch().trim().length > 0
                    ? (h.Z.requestMembers(n, e.getFullMatch().trim(), 10),
                      c.context.setQuery({
                          query: e.getFullMatch().trim(),
                          filters: { guild: n }
                      }),
                      (r = o.autocompletes),
                      (u = !1))
                    : (c.context.clearQuery(), (r = T(n, i)));
            }
            return (
                (C[n] = I({
                    searchId: n,
                    query: a,
                    mode: i,
                    tokens: s,
                    cursorScope: l,
                    autocompletes: r
                })),
                u
            );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { searchId: t } = e,
                r = O[t];
            (null != r && (r.context.destroy(), (r.results = []), delete O[t]), delete C[t]);
        },
        CHANNEL_CREATE: P,
        CHANNEL_DELETE: P,
        STREAMER_MODE_UPDATE: Z,
        SEARCH_SCREEN_OPEN: Z,
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null != t ? N(t) : Object.keys(C).forEach(N);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                r = S.Z.getCurrentSearchId();
            if (null == r) return !1;
            if (r === E.aib.DMS && (0, p.R6)(r)) {
                let e = g.Z.getChannel(t);
                if (null == e || !e.isPrivate()) return !1;
                let n = C[r];
                if (null == n) return !1;
                let { type: s, filter: l } = n.mode;
                return s === E.Sap.FILTER && l === E.dCx.FILTER_IN && A(r);
            }
            return !1;
        },
        LOGOUT: function () {
            Object.keys(C).forEach(N);
        }
    }),
    L = M;
