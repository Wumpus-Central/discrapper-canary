(n.d(t, { Z: () => L }), n(388685), n(539854), n(781311), n(290780));
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
    _ = n(430824),
    S = n(768119),
    y = n(944486),
    b = n(246946),
    x = n(594174),
    E = n(981631);
let C = {},
    O = {};
function v(e) {
    let { searchId: t, query: n, mode: r, tokens: s, cursorScope: l, autocompletes: a } = e,
        i = O[t];
    return (
        null == i &&
            ((i = {
                results: [],
                context: c.Z.getSearchContext(I.bind(null, t))
            }),
            (O[t] = i)),
        {
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
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
function I(e, t) {
    let { results: n } = t,
        r = O[e],
        s = C[e];
    if (null == r || null == s) return;
    let { type: l, filter: a } = s.mode;
    if (l === E.Sap.EMPTY || (l === E.Sap.FILTER && a !== E.dCx.FILTER_FROM && a !== E.dCx.FILTER_MENTIONS)) return;
    let i = 3;
    (s.mode.type === E.Sap.FILTER && (i = 10),
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
    ((h = T(e, c)),
        (C[e] = v({
            searchId: e,
            query: o,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: h
        })),
        M.emitChange());
}
function j(e, t, n) {
    var r, s, l;
    let a,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e) return null;
    let c = (0, u.g)(n),
        h = null != (s = null == t || null == (r = t.getFullMatch()) ? void 0 : r.trim()) ? s : '',
        p = e === E.dCx.FILTER_FROM || e === E.dCx.FILTER_MENTIONS;
    if (c === E.aib.GUILD && p) {
        let e = O[n];
        if (null == e) a = null;
        else {
            if (null == t || 0 === h.length) {
                let t = y.Z.getCurrentlySelectedChannelId(n);
                e.results = d.ZP.getRecentlyTalked(t, 10).map((e) => {
                    let { record: t } = e;
                    return {
                        user: t,
                        text: f.ZP.getUserTag(t)
                    };
                });
            }
            a = e.results;
        }
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
    let n = (null != e ? e.getFullMatch() : '').trim(),
        r = (function (e) {
            let t = (0, u.g)(e),
                n = (0, p.R6)(t);
            return new Map([
                [E.dCx.FILTER_FROM, !b.Z.hidePersonalInformation],
                [E.dCx.FILTER_MENTIONS, !b.Z.hidePersonalInformation],
                [E.dCx.FILTER_HAS, !0],
                [E.dCx.FILTER_BEFORE, !0],
                [E.dCx.FILTER_AFTER, !0],
                [E.dCx.FILTER_ON, !0],
                [E.dCx.FILTER_IN, n],
                [E.dCx.FILTER_PINNED, !0]
            ]);
        })(t),
        s = (0, o.nB)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: E.rtL.SEARCH_OPTIONS,
        results: s
    };
}
function T(e, t) {
    let n = [];
    return (
        t.type === E.Sap.FILTER
            ? n.push(j(t.filter, t.token, e, 10))
            : t.type === E.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        r = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = (0, u.g)(e),
                                    n = [E.dCx.FILTER_HAS];
                                return (b.Z.hidePersonalInformation || (n.push(E.dCx.FILTER_FROM), n.push(E.dCx.FILTER_MENTIONS)), (0, p.R6)(t) && n.push(E.dCx.FILTER_IN), n);
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let s = j(n, e, t, 3);
                                null != s && r.push(s);
                            }),
                            r.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var r, s, l;
                                        let e = null == (r = o.ZP[E.dCx.FILTER_BEFORE]) ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                            a = null == (s = o.ZP[E.dCx.FILTER_ON]) ? void 0 : s.getAutocompletions(n, t, 1)[0],
                                            i = null == (l = o.ZP[E.dCx.FILTER_AFTER]) ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: E.rtL.DATES,
                                                  results: [e, a, i]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, p.BU)(r) && r.push(R(e, t)),
                        r
                    );
                })(t.token, e))
              : t.type === E.Sap.EMPTY &&
                (n.push(R(t.token, e)),
                n.push(
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
        n
    );
}
function P() {
    (0, p.WU)();
}
function N(e) {
    let t = C[e];
    if (null == t) return;
    let { query: n, mode: r, tokens: s, cursorScope: l, autocompletes: a } = t;
    C[e] = v({
        searchId: e,
        query: n,
        mode: r,
        tokens: s,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === E.rtL.HISTORY ? null : e))
    });
}
function A(e) {
    if (null == e || null == C[e]) return !1;
    let { query: t, mode: n, tokens: r, cursorScope: s } = C[e];
    C[e] = v({
        searchId: e,
        query: t,
        mode: n,
        tokens: r,
        cursorScope: s,
        autocompletes: T(e, n)
    });
}
function Z() {
    return A(S.Z.getCurrentSearchId());
}
class k extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP, b.Z, g.Z, _.Z, y.Z);
    }
    getState(e) {
        var t;
        return null != (t = C[e]) ? t : v({ searchId: e });
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
            let n,
                { searchId: r, tokens: s, cursorScope: l } = e,
                a = (0, p.cl)(s),
                i = (0, p.qc)(l, s),
                o = null != (t = C[r]) ? t : {},
                c = O[r],
                u = !0;
            if (a === o.query && (null == o.mode || o.mode.filter === i.filter)) ((n = o.autocompletes), (u = !1));
            else if (i.type === E.Sap.EMPTY || (i.type === E.Sap.FILTER && i.filter !== E.dCx.FILTER_FROM && i.filter !== E.dCx.FILTER_MENTIONS)) (null != c && (c.context.clearQuery(), (c.results = [])), (n = T(r, i)));
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
                    : (c.context.clearQuery(), (n = T(r, i)));
            }
            return (
                (C[r] = v({
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
                n = O[t];
            (null != n && (n.context.destroy(), (n.results = []), delete O[t]), delete C[t]);
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
                n = S.Z.getCurrentSearchId();
            if (null == n) return !1;
            if (n === E.aib.DMS && (0, p.R6)(n)) {
                let e = g.Z.getChannel(t);
                if (null == e || !e.isPrivate()) return !1;
                let r = C[n];
                if (null == r) return !1;
                let { type: s, filter: l } = r.mode;
                return s === E.Sap.FILTER && l === E.dCx.FILTER_IN && A(n);
            }
            return !1;
        },
        LOGOUT: function () {
            Object.keys(C).forEach(N);
        }
    }),
    L = M;
