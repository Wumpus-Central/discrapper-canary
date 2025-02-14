n.d(t, { Z: () => L }), n(653041), n(724458), n(757143), n(733860);
var i,
    l,
    a,
    r = n(442837),
    s = n(570140),
    o = n(999650),
    c = n(279779),
    d = n(483360),
    u = n(892880),
    m = n(405656),
    _ = n(51144),
    h = n(271383),
    p = n(768119),
    g = n(246946),
    f = n(594174),
    x = n(981631),
    C = n(388032);
let E = {},
    v = {};
function I(e) {
    let { searchId: t, query: n, mode: i, tokens: l, cursorScope: a, autocompletes: r } = e,
        s = v[t];
    return (
        null == s &&
            ((s = {
                results: [],
                context: c.Z.getSearchContext(N.bind(null, t))
            }),
            (v[t] = s)),
        {
            query: null != n ? n : '',
            mode:
                null != i
                    ? i
                    : {
                          type: x.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != l ? l : [],
            cursorScope: null != a ? a : null,
            autocompletes: null != r ? r : []
        }
    );
}
function N(e, t) {
    let { results: n } = t,
        i = v[e],
        l = E[e];
    if (null == i || null == l) return;
    let { type: a, filter: r } = l.mode;
    if (a === x.Sap.EMPTY || (a === x.Sap.FILTER && r !== x.dCx.FILTER_FROM && r !== x.dCx.FILTER_MENTIONS)) return;
    let s = 3;
    l.mode.type === x.Sap.FILTER && (s = 10),
        (i.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = f.default.getUser(t.id);
                    return (
                        null == n ||
                            e.push({
                                id: n.id,
                                text: _.ZP.getUserTag(n),
                                user: n
                            }),
                        e
                    );
                }, [])).length > t && (e.length = t),
                e
            );
        })(n, s));
    let { query: o, mode: c, tokens: d, cursorScope: u } = l,
        { autocompletes: m } = l;
    (m = b(e, c)),
        (E[e] = I({
            searchId: e,
            query: o,
            mode: c,
            tokens: d,
            cursorScope: u,
            autocompletes: m
        })),
        R.emitChange();
}
function S(e, t, n) {
    var i, l, a;
    let r,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    let c = p.Z.getSearchType(n),
        u = null !== (l = null == t ? void 0 : null === (i = t.getFullMatch()) || void 0 === i ? void 0 : i.trim()) && void 0 !== l ? l : '',
        m = e === x.dCx.FILTER_FROM || e === x.dCx.FILTER_MENTIONS;
    if (c === x.aib.GUILD && m) {
        let e = v[n];
        null == e
            ? (r = null)
            : ((null == t || 0 === u.length) &&
                  (e.results = d.ZP.getRecentlyTalked(n, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: _.ZP.getUserTag(t)
                      };
                  })),
              (r = e.results));
    } else {
        let t = null === (a = o.ZP[e]) || void 0 === a ? void 0 : a.getAutocompletions;
        r = null != t ? t(u, n, null != s ? s : 10) : [];
    }
    let h = u.toLowerCase().replace(/^@/, '');
    if (null != r && m && u.length > 0 && (C.intl.string(C.t.Qf3ptr).startsWith(h) || x.ME.substr(1).startsWith(h))) {
        let e = f.default.getCurrentUser();
        null != e &&
            (r = r.filter((t) => {
                let { user: n } = t;
                return n.id !== e.id;
            })).unshift({
                text: x.ME,
                user: e
            });
    }
    return null == r || 0 === r.length
        ? null
        : {
              group: e,
              results: r
          };
}
function T(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(),
        n = {
            [x.dCx.FILTER_FROM]: !g.Z.hidePersonalInformation,
            [x.dCx.FILTER_MENTIONS]: !g.Z.hidePersonalInformation,
            [x.dCx.FILTER_HAS]: !0,
            [x.dCx.FILTER_BEFORE]: !0,
            [x.dCx.FILTER_AFTER]: !0,
            [x.dCx.FILTER_ON]: !0,
            [x.dCx.FILTER_IN]: p.Z.getSearchType() === x.aib.GUILD,
            [x.dCx.FILTER_PINNED]: !0
        },
        i = (0, o.nB)(t).filter((e) => n[e.token]);
    return {
        group: x.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function b(e, t) {
    let n = [];
    return (
        t.type === x.Sap.FILTER
            ? n.push(S(t.filter, t.token, e, 10))
            : t.type === x.Sap.FILTER_ALL
              ? (n = (function (e, t) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        i = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = p.Z.getSearchType(e),
                                    n = [x.dCx.FILTER_HAS];
                                return g.Z.hidePersonalInformation || (n.push(x.dCx.FILTER_FROM), n.push(x.dCx.FILTER_MENTIONS)), t === x.aib.GUILD && n.push(x.dCx.FILTER_IN), n;
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let l = S(n, e, t, 3);
                                null != l && i.push(l);
                            }),
                            i.push(
                                (function (e, t) {
                                    let n = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != n && '' !== n) {
                                        var i, l, a;
                                        let e = null === (i = o.ZP[x.dCx.FILTER_BEFORE]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0],
                                            r = null === (l = o.ZP[x.dCx.FILTER_ON]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0],
                                            s = null === (a = o.ZP[x.dCx.FILTER_AFTER]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0];
                                        return null == e
                                            ? null
                                            : {
                                                  group: x.rtL.DATES,
                                                  results: [e, r, s]
                                              };
                                    }
                                })(e, t)
                            )),
                        5 > (0, m.BU)(i) && i.push(T(e)),
                        i
                    );
                })(t.token, e))
              : t.type === x.Sap.EMPTY &&
                (n.push(T(t.token)),
                n.push(
                    (function (e) {
                        if (g.Z.hidePersonalInformation) return null;
                        let t = p.Z.getHistory(e);
                        return null == t
                            ? null
                            : {
                                  group: x.rtL.HISTORY,
                                  results: t.map((e) => ({ text: e }))
                              };
                    })(e)
                )),
        n
    );
}
function A() {
    (0, m.WU)();
}
function j(e) {
    let t = E[e];
    if (null == t) return;
    let { query: n, mode: i, tokens: l, cursorScope: a, autocompletes: r } = t;
    E[e] = I({
        searchId: e,
        query: n,
        mode: i,
        tokens: l,
        cursorScope: a,
        autocompletes: r.map((e) => ((null == e ? void 0 : e.group) === x.rtL.HISTORY ? null : e))
    });
}
function y() {
    let e = p.Z.getCurrentSearchId();
    if (null == e || null == E[e]) return;
    let { query: t, mode: n, tokens: i, cursorScope: l } = E[e];
    E[e] = I({
        searchId: e,
        query: t,
        mode: n,
        tokens: i,
        cursorScope: l,
        autocompletes: b(e, n)
    });
}
class Z extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, g.Z);
    }
    getState(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : I({ searchId: e });
    }
}
(a = 'SearchAutocompleteStore'),
    (l = 'displayName') in Z
        ? Object.defineProperty(Z, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (Z[l] = a);
let R = new Z(s.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let n,
                { searchId: i, tokens: l, cursorScope: a } = e,
                r = (0, m.cl)(l),
                s = (0, m.qc)(a, l),
                o = null !== (t = E[i]) && void 0 !== t ? t : {},
                c = v[i],
                d = !0;
            if (r === o.query && (null == o.mode || o.mode.filter === s.filter)) (n = o.autocompletes), (d = !1);
            else if (s.type === x.Sap.EMPTY || (s.type === x.Sap.FILTER && s.filter !== x.dCx.FILTER_FROM && s.filter !== x.dCx.FILTER_MENTIONS)) null != c && (c.context.clearQuery(), (c.results = [])), (n = b(i, s));
            else if (null != c) {
                let { token: e } = s;
                null != e && e.getFullMatch().trim().length > 0 ? (u.Z.requestMembers(i, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: i }), (n = o.autocompletes), (d = !1)) : (c.context.clearQuery(), (n = b(i, s)));
            }
            return (
                (E[i] = I({
                    searchId: i,
                    query: r,
                    mode: s,
                    tokens: l,
                    cursorScope: a,
                    autocompletes: n
                })),
                d
            );
        },
        SEARCH_EDITOR_STATE_CLEAR: function (e) {
            let { searchId: t } = e,
                n = v[t];
            null != n && (n.context.destroy(), (n.results = []), delete v[t]), delete E[t];
        },
        CHANNEL_CREATE: A,
        CHANNEL_DELETE: A,
        STREAMER_MODE_UPDATE: y,
        SEARCH_SCREEN_OPEN: y,
        SEARCH_CLEAR_HISTORY: function (e) {
            let { searchId: t } = e;
            null != t ? j(t) : Object.keys(E).forEach(j);
        },
        LOGOUT: function () {
            Object.keys(E).forEach(j);
        }
    }),
    L = R;
