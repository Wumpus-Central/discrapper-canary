(r.d(t, { Z: () => M }), r(388685), r(539854), r(781311), r(290780));
var n,
    s,
    l,
    a = r(442837),
    o = r(570140),
    i = r(999650),
    c = r(279779),
    u = r(861262),
    d = r(483360),
    h = r(892880),
    p = r(405656),
    f = r(51144),
    g = r(592125),
    m = r(271383),
    b = r(430824),
    y = r(768119),
    S = r(944486),
    x = r(246946),
    O = r(594174),
    j = r(981631);
let v = {},
    _ = {};
function E(e) {
    let { searchId: t, query: r, mode: n, tokens: s, cursorScope: l, autocompletes: a } = e,
        o = _[t];
    return (
        null == o &&
            ((o = {
                results: [],
                context: c.Z.getSearchContext(C.bind(null, t))
            }),
            (_[t] = o)),
        {
            query: null != r ? r : '',
            mode:
                null != n
                    ? n
                    : {
                          type: j.Sap.EMPTY,
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
    let { results: r } = t,
        n = _[e],
        s = v[e];
    if (null == n || null == s) return;
    let { type: l, filter: a } = s.mode;
    if (l === j.Sap.EMPTY || (l === j.Sap.FILTER && a !== j.dCx.FILTER_FROM && a !== j.dCx.FILTER_MENTIONS)) return;
    let o = 3;
    (s.mode.type === j.Sap.FILTER && (o = 10),
        (n.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let r = O.default.getUser(t.id);
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
        })(r, o)));
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
function I(e, t, r) {
    var n, s, l;
    let a,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e) return null;
    let c = (0, u.g)(r),
        h = null != (s = null == t || null == (n = t.getFullMatch()) ? void 0 : n.trim()) ? s : '',
        p = e === j.dCx.FILTER_FROM || e === j.dCx.FILTER_MENTIONS;
    if (c === j.aib.GUILD && p) {
        let e = _[r];
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
        let t = null == (l = i.ZP[e]) ? void 0 : l.getAutocompletions;
        a = null != t ? t(h, r, null != o ? o : 10) : [];
    }
    if (null != a && p && (0, i.co)(h)) {
        let e = O.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: r } = t;
                return r.id !== e.id;
            })).unshift({
                text: j.ME,
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
                [j.dCx.FILTER_FROM, !x.Z.hidePersonalInformation],
                [j.dCx.FILTER_MENTIONS, !x.Z.hidePersonalInformation],
                [j.dCx.FILTER_HAS, !0],
                [j.dCx.FILTER_BEFORE, !0],
                [j.dCx.FILTER_AFTER, !0],
                [j.dCx.FILTER_ON, !0],
                [j.dCx.FILTER_IN, r],
                [j.dCx.FILTER_PINNED, !0]
            ]);
        })(t),
        s = (0, i.nB)(r).filter((e) => null != e.token && !0 === n.get(e.token));
    return {
        group: j.rtL.SEARCH_OPTIONS,
        results: s
    };
}
function P(e, t) {
    let r = [];
    return (
        t.type === j.Sap.FILTER
            ? r.push(I(t.filter, t.token, e, 10))
            : t.type === j.Sap.FILTER_ALL
              ? (r = (function (e, t) {
                    let r = (null != e ? e.getFullMatch() : '').trim(),
                        n = [];
                    return (
                        null != r &&
                            '' !== r &&
                            ((function (e) {
                                let t = (0, u.g)(e),
                                    r = [j.dCx.FILTER_HAS];
                                return (x.Z.hidePersonalInformation || (r.push(j.dCx.FILTER_FROM), r.push(j.dCx.FILTER_MENTIONS)), (0, p.R6)(t) && r.push(j.dCx.FILTER_IN), r);
                            })(t).forEach((r) => {
                                if (null == r) return;
                                let s = I(r, e, t, 3);
                                null != s && n.push(s);
                            }),
                            n.push(
                                (function (e, t) {
                                    let r = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != r && '' !== r) {
                                        var n, s, l;
                                        let e = null == (n = i.ZP[j.dCx.FILTER_BEFORE]) ? void 0 : n.getAutocompletions(r, t, 1)[0],
                                            a = null == (s = i.ZP[j.dCx.FILTER_ON]) ? void 0 : s.getAutocompletions(r, t, 1)[0],
                                            o = null == (l = i.ZP[j.dCx.FILTER_AFTER]) ? void 0 : l.getAutocompletions(r, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: j.rtL.DATES,
                                                  results: [e, a, o]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, p.BU)(n) && n.push(R(e, t)),
                        n
                    );
                })(t.token, e))
              : t.type === j.Sap.EMPTY &&
                (r.push(R(t.token, e)),
                r.push(
                    (function (e) {
                        if (x.Z.hidePersonalInformation) return null;
                        let t = y.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: j.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        r
    );
}
function T() {
    (0, p.WU)();
}
function N(e) {
    let t = v[e];
    if (null == t) return;
    let { query: r, mode: n, tokens: s, cursorScope: l, autocompletes: a } = t;
    v[e] = E({
        searchId: e,
        query: r,
        mode: n,
        tokens: s,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === j.rtL.HISTORY ? null : e))
    });
}
function k(e) {
    if (null == e || null == v[e]) return !1;
    let { query: t, mode: r, tokens: n, cursorScope: s } = v[e];
    v[e] = E({
        searchId: e,
        query: t,
        mode: r,
        tokens: n,
        cursorScope: s,
        autocompletes: P(e, r)
    });
}
function w() {
    return k(y.Z.getCurrentSearchId());
}
class Z extends (n = a.ZP.Store) {
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
            let r,
                { searchId: n, tokens: s, cursorScope: l } = e,
                a = (0, p.cl)(s),
                o = (0, p.qc)(l, s),
                i = null != (t = v[n]) ? t : {},
                c = _[n],
                u = !0;
            if (a === i.query && (null == i.mode || i.mode.filter === o.filter)) ((r = i.autocompletes), (u = !1));
            else if (o.type === j.Sap.EMPTY || (o.type === j.Sap.FILTER && o.filter !== j.dCx.FILTER_FROM && o.filter !== j.dCx.FILTER_MENTIONS)) (null != c && (c.context.clearQuery(), (c.results = [])), (r = P(n, o)));
            else if (null != c) {
                let { token: e } = o;
                null != e && e.getFullMatch().trim().length > 0
                    ? (h.Z.requestMembers(n, e.getFullMatch().trim(), 10),
                      c.context.setQuery({
                          query: e.getFullMatch().trim(),
                          filters: { guild: n }
                      }),
                      (r = i.autocompletes),
                      (u = !1))
                    : (c.context.clearQuery(), (r = P(n, o)));
            }
            return (
                (v[n] = E({
                    searchId: n,
                    query: a,
                    mode: o,
                    tokens: s,
                    cursorScope: l,
                    autocompletes: r
                })),
                u
            );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { searchId: t } = e,
                r = _[t];
            (null != r && (r.context.destroy(), (r.results = []), delete _[t]), delete v[t]);
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
                r = y.Z.getCurrentSearchId();
            if (null == r) return !1;
            if (r === j.aib.DMS && (0, p.R6)(r)) {
                let e = g.Z.getChannel(t);
                if (null == e || !e.isPrivate()) return !1;
                let n = v[r];
                if (null == n) return !1;
                let { type: s, filter: l } = n.mode;
                return s === j.Sap.FILTER && l === j.dCx.FILTER_IN && k(r);
            }
            return !1;
        },
        LOGOUT: function () {
            Object.keys(v).forEach(N);
        }
    }),
    M = A;
