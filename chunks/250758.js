(n.d(t, { Z: () => M }), n(388685), n(539854), n(781311), n(290780));
var r,
    s,
    l,
    a = n(442837),
    o = n(570140),
    i = n(999650),
    c = n(279779),
    u = n(861262),
    d = n(483360),
    h = n(892880),
    p = n(405656),
    f = n(51144),
    g = n(592125),
    m = n(271383),
    b = n(430824),
    y = n(768119),
    S = n(944486),
    x = n(246946),
    j = n(594174),
    O = n(981631);
let v = {},
    _ = {};
function E(e) {
    let { searchId: t, query: n, mode: r, tokens: s, cursorScope: l, autocompletes: a } = e,
        o = _[t];
    return (
        null == o &&
            ((o = {
                results: [],
                context: c.Z.getSearchContext(C.bind(null, t))
            }),
            (_[t] = o)),
        {
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: O.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != s ? s : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != a ? a : []
        }
    );
}
function C(e, t) {
    let { results: n } = t,
        r = _[e],
        s = v[e];
    if (null == r || null == s) return;
    let { type: l, filter: a } = s.mode;
    if (l === O.Sap.EMPTY || (l === O.Sap.FILTER && a !== O.dCx.FILTER_FROM && a !== O.dCx.FILTER_MENTIONS)) return;
    let o = 3;
    (s.mode.type === O.Sap.FILTER && (o = 10),
        (r.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = j.default.getUser(t.id);
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
        })(n, o)));
    let { query: i, mode: c, tokens: u, cursorScope: d } = s,
        { autocompletes: h } = s;
    ((h = P(e, c)),
        (v[e] = E({
            searchId: e,
            query: i,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: h
        })),
        A.emitChange());
}
function I(e, t, n) {
    var r, s, l;
    let a,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e) return null;
    let c = (0, u.g)(n),
        h = null != (s = null == t || null == (r = t.getFullMatch()) ? void 0 : r.trim()) ? s : '',
        p = e === O.dCx.FILTER_FROM || e === O.dCx.FILTER_MENTIONS;
    if (c === O.aib.GUILD && p) {
        let e = _[n];
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
        let t = null == (l = i.ZP[e]) ? void 0 : l.getAutocompletions;
        a = null != t ? t(h, n, null != o ? o : 10) : [];
    }
    if (null != a && p && (0, i.co)(h)) {
        let e = j.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n.id !== e.id;
            })).unshift({
                text: O.ME,
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
    let n = (null != e ? e.getFullMatch() : '').trim(),
        r = (function (e) {
            let t = (0, u.g)(e),
                n = (0, p.R6)(t);
            return new Map([
                [O.dCx.FILTER_FROM, !x.Z.hidePersonalInformation],
                [O.dCx.FILTER_MENTIONS, !x.Z.hidePersonalInformation],
                [O.dCx.FILTER_HAS, !0],
                [O.dCx.FILTER_BEFORE, !0],
                [O.dCx.FILTER_AFTER, !0],
                [O.dCx.FILTER_ON, !0],
                [O.dCx.FILTER_IN, n],
                [O.dCx.FILTER_PINNED, !0]
            ]);
        })(t),
        s = (0, i.nB)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: O.rtL.SEARCH_OPTIONS,
        results: s
    };
}
function P(e, t) {
    let n = [];
    return (
        t.type === O.Sap.FILTER
            ? n.push(I(t.filter, t.token, e, 10))
            : t.type === O.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        r = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = (0, u.g)(e),
                                    n = [O.dCx.FILTER_HAS];
                                return (x.Z.hidePersonalInformation || (n.push(O.dCx.FILTER_FROM), n.push(O.dCx.FILTER_MENTIONS)), (0, p.R6)(t) && n.push(O.dCx.FILTER_IN), n);
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let s = I(n, e, t, 3);
                                null != s && r.push(s);
                            }),
                            r.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var r, s, l;
                                        let e = null == (r = i.ZP[O.dCx.FILTER_BEFORE]) ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            a = null == (s = i.ZP[O.dCx.FILTER_ON]) ? void 0 : s.getAutocompletions(n, t, 1)[0],
                                            o = null == (l = i.ZP[O.dCx.FILTER_AFTER]) ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: O.rtL.DATES,
                                                  results: [e, a, o]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, p.BU)(r) && r.push(R(e, t)),
                        r
                    );
                })(t.token, e))
              : t.type === O.Sap.EMPTY &&
                (n.push(R(t.token, e)),
                n.push(
                    (function (e) {
                        if (x.Z.hidePersonalInformation) return null;
                        let t = y.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: O.rtL.HISTORY,
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
    let t = v[e];
    if (null == t) return;
    let { query: n, mode: r, tokens: s, cursorScope: l, autocompletes: a } = t;
    v[e] = E({
        searchId: e,
        query: n,
        mode: r,
        tokens: s,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === O.rtL.HISTORY ? null : e))
    });
}
function k(e) {
    if (null == e || null == v[e]) return !1;
    let { query: t, mode: n, tokens: r, cursorScope: s } = v[e];
    v[e] = E({
        searchId: e,
        query: t,
        mode: n,
        tokens: r,
        cursorScope: s,
        autocompletes: P(e, n)
    });
}
function w() {
    return k(y.Z.getCurrentSearchId());
}
class Z extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP, x.Z, g.Z, b.Z, S.Z);
    }
    getState(e) {
        var t;
        return null != (t = v[e]) ? t : E({ searchId: e });
    }
}
((l = 'SearchAutocompleteStore'),
    (s = 'displayName') in Z
        ? Object.defineProperty(Z, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (Z[s] = l));
let A = new Z(o.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let n,
                { searchId: r, tokens: s, cursorScope: l } = e,
                a = (0, p.cl)(s),
                o = (0, p.qc)(l, s),
                i = null != (t = v[r]) ? t : {},
                c = _[r],
                u = !0;
            if (a === i.query && (null == i.mode || i.mode.filter === o.filter)) ((n = i.autocompletes), (u = !1));
            else if (o.type === O.Sap.EMPTY || (o.type === O.Sap.FILTER && o.filter !== O.dCx.FILTER_FROM && o.filter !== O.dCx.FILTER_MENTIONS)) (null != c && (c.context.clearQuery(), (c.results = [])), (n = P(r, o)));
            else if (null != c) {
                let { token: e } = o;
                null != e && e.getFullMatch().trim().length > 0
                    ? (h.Z.requestMembers(r, e.getFullMatch().trim(), 10),
                      c.context.setQuery({
                          query: e.getFullMatch().trim(),
                          filters: { guild: r }
                      }),
                      (n = i.autocompletes),
                      (u = !1))
                    : (c.context.clearQuery(), (n = P(r, o)));
            }
            return (
                (v[r] = E({
                    searchId: r,
                    query: a,
                    mode: o,
                    tokens: s,
                    cursorScope: l,
                    autocompletes: n
                })),
                u
            );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { searchId: t } = e,
                n = _[t];
            (null != n && (n.context.destroy(), (n.results = []), delete _[t]), delete v[t]);
        },
        CHANNEL_CREATE: T,
        CHANNEL_DELETE: T,
        STREAMER_MODE_UPDATE: w,
        SEARCH_SCREEN_OPEN: w,
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null != t ? N(t) : Object.keys(v).forEach(N);
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                n = y.Z.getCurrentSearchId();
            if (null == n) return !1;
            if (n === O.aib.DMS && (0, p.R6)(n)) {
                let e = g.Z.getChannel(t);
                if (null == e || !e.isPrivate()) return !1;
                let r = v[n];
                if (null == r) return !1;
                let { type: s, filter: l } = r.mode;
                return s === O.Sap.FILTER && l === O.dCx.FILTER_IN && k(n);
            }
            return !1;
        },
        LOGOUT: function () {
            Object.keys(v).forEach(N);
        }
    }),
    M = A;
