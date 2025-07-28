(r.d(t, { Z: () => w }), r(388685), r(539854), r(781311), r(290780));
var n,
    s,
    l,
    a = r(442837),
    i = r(570140),
    o = r(999650),
    c = r(279779),
    u = r(861262),
    h = r(483360),
    d = r(892880),
    p = r(405656),
    f = r(51144),
    g = r(592125),
    m = r(271383),
    S = r(430824),
    _ = r(768119),
    y = r(944486),
    b = r(246946),
    x = r(594174),
    E = r(981631);
let O = {},
    v = {};
function C(e) {
    let { searchId: t, query: r, mode: n, tokens: s, cursorScope: l, autocompletes: a } = e,
        i = v[t];
    return (
        null == i &&
            ((i = {
                results: [],
                context: c.Z.getUserSearchContext(j.bind(null, t))
            }),
            (v[t] = i)),
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
function j(e, t) {
    let { results: r } = t,
        n = v[e],
        s = O[e];
    if (null == n || null == s) return;
    let { type: l, filter: a } = s.mode;
    if (l === E.Sap.EMPTY || (l === E.Sap.FILTER && a !== E.dCx.FILTER_FROM && a !== E.dCx.FILTER_MENTIONS)) return;
    let i = 3;
    (s.mode.type === E.Sap.FILTER && (i = 10),
        (n.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                r = [];
            for (let n of e) {
                if (r.length >= t) break;
                let e = x.default.getUser(n.id);
                if (null == e) continue;
                let s = f.ZP.getUserTag(e);
                null != s &&
                    r.push({
                        text: s,
                        user: e
                    });
            }
            return r;
        })(r, i)));
    let { query: o, mode: c, tokens: u, cursorScope: h } = s,
        { autocompletes: d } = s;
    ((d = T(e, c, u)),
        (O[e] = C({
            searchId: e,
            query: o,
            mode: c,
            tokens: u,
            cursorScope: h,
            autocompletes: d
        })),
        Z.emitChange());
}
function R(e) {
    var t, r, n;
    let s,
        { filter: l, token: a, searchId: i, maxResults: c = 10, tokens: d } = e;
    if (null == l) return null;
    let p = (0, u.g)(i),
        g = null != (r = null == a || null == (t = a.getFullMatch()) ? void 0 : t.trim()) ? r : '',
        m = l === E.dCx.FILTER_FROM || l === E.dCx.FILTER_MENTIONS;
    if (p === E.aib.GUILD && m) {
        let e = v[i];
        if (null == e) s = null;
        else {
            if (null == a || 0 === g.length) {
                let t = y.Z.getCurrentlySelectedChannelId(i);
                e.results = h.ZP.getRecentlyTalked(t, 10).map((e) => {
                    let { record: t } = e;
                    return {
                        user: t,
                        text: f.ZP.getUserTag(t)
                    };
                });
            }
            s = e.results;
        }
    } else {
        let e = null == (n = o.ZP[l]) ? void 0 : n.getAutocompletions;
        s =
            null != e
                ? e({
                      query: g,
                      searchId: i,
                      maxResults: null != c ? c : 10,
                      tokens: d
                  })
                : [];
    }
    if (null != s && m && (0, o.co)(g)) {
        let e = x.default.getCurrentUser();
        null != e &&
            (s = s.filter((t) => {
                let { user: r } = t;
                return (null == r ? void 0 : r.id) !== e.id;
            })).unshift({
                text: E.ME,
                user: e
            });
    }
    return null == s || 0 === s.length
        ? null
        : {
              group: l,
              results: s
          };
}
function I(e, t) {
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
function T(e, t, n) {
    let s = [];
    return (
        t.type === E.Sap.FILTER
            ? s.push(
                  R({
                      filter: t.filter,
                      token: t.token,
                      searchId: e,
                      maxResults: 10,
                      tokens: n
                  })
              )
            : t.type === E.Sap.FILTER_ALL
              ? (s = (function (e, t, r) {
                    let n = (null != e ? e.getFullMatch() : '').trim(),
                        s = [];
                    return (
                        null != n &&
                            '' !== n &&
                            ((function (e) {
                                let t = (0, u.g)(e),
                                    r = [E.dCx.FILTER_HAS];
                                return (b.Z.hidePersonalInformation || (r.push(E.dCx.FILTER_FROM), r.push(E.dCx.FILTER_MENTIONS)), (0, p.R6)(t) && r.push(E.dCx.FILTER_IN), r);
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let l = R({
                                    filter: n,
                                    token: e,
                                    searchId: t,
                                    maxResults: 3,
                                    tokens: r
                                });
                                null != l && s.push(l);
                            }),
                            s.push(
                                (function (e, t) {
                                    let r = (null != e ? e.getFullMatch() : '').trim();
                                    if (null != r && '' !== r) {
                                        var n, s, l, a, i, c, u, h, d;
                                        let e =
                                                null == (l = o.ZP[E.dCx.FILTER_BEFORE]) ||
                                                null == (s = l.getAutocompletions) ||
                                                null ==
                                                    (n = s.call(l, {
                                                        query: r,
                                                        searchId: t,
                                                        maxResults: 1
                                                    }))
                                                    ? void 0
                                                    : n[0],
                                            p =
                                                null == (c = o.ZP[E.dCx.FILTER_ON]) ||
                                                null == (i = c.getAutocompletions) ||
                                                null ==
                                                    (a = i.call(c, {
                                                        query: r,
                                                        searchId: t,
                                                        maxResults: 1
                                                    }))
                                                    ? void 0
                                                    : a[0],
                                            f =
                                                null == (d = o.ZP[E.dCx.FILTER_AFTER]) ||
                                                null == (h = d.getAutocompletions) ||
                                                null ==
                                                    (u = h.call(d, {
                                                        query: r,
                                                        searchId: t,
                                                        maxResults: 1
                                                    }))
                                                    ? void 0
                                                    : u[0];
                                        if (null == e) return null;
                                        let g = [e];
                                        return (
                                            null != p && g.push(p),
                                            null != f && g.push(f),
                                            {
                                                group: E.rtL.DATES,
                                                results: g
                                            }
                                        );
                                    }
                                })(e, t)
                            )),
                        5 > (0, p.BU)(s) && s.push(I(e, t)),
                        s
                    );
                })(t.token, e, n))
              : t.type === E.Sap.EMPTY &&
                (s.push(I(t.token, e)),
                s.push(
                    (function (e) {
                        if (b.Z.hidePersonalInformation) return null;
                        {
                            let t = r(741995).Z.getHistory(e);
                            return null == t
                                ? null
                                : {
                                      group: E.rtL.HISTORY,
                                      results: t.map((e) => ({ text: e }))
                                  };
                        }
                    })(e)
                )),
        s
    );
}
function P() {
    (0, p.WU)();
}
function N(e) {
    let t = O[e];
    if (null == t) return;
    let { query: r, mode: n, tokens: s, cursorScope: l, autocompletes: a } = t;
    O[e] = C({
        searchId: e,
        query: r,
        mode: n,
        tokens: s,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === E.rtL.HISTORY ? null : e))
    });
}
function A(e) {
    if (null == e || null == O[e]) return !1;
    let { query: t, mode: r, tokens: n, cursorScope: s } = O[e];
    O[e] = C({
        searchId: e,
        query: t,
        mode: r,
        tokens: n,
        cursorScope: s,
        autocompletes: T(e, r, n)
    });
}
function M() {
    return A(_.Z.getCurrentSearchId());
}
class k extends (n = a.ZP.Store) {
    initialize() {
        this.waitFor(m.ZP, b.Z, g.Z, S.Z, y.Z);
    }
    getState(e) {
        var t;
        return null != (t = O[e]) ? t : C({ searchId: e });
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
let Z = new k(i.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let r,
                { searchId: n, tokens: s, cursorScope: l } = e,
                a = (0, p.cl)(s),
                i = (0, p.qc)(l, s),
                o = null != (t = O[n]) ? t : {},
                c = v[n],
                u = !0;
            if (a === o.query && (null == o.mode || o.mode.filter === i.filter)) ((r = o.autocompletes), (u = !1));
            else if (i.type === E.Sap.EMPTY || (i.type === E.Sap.FILTER && i.filter !== E.dCx.FILTER_FROM && i.filter !== E.dCx.FILTER_MENTIONS)) (null != c && (c.context.clearQuery(), (c.results = [])), (r = T(n, i, s)));
            else if (null != c) {
                let { token: e } = i;
                null != e && e.getFullMatch().trim().length > 0
                    ? (d.Z.requestMembers(n, e.getFullMatch().trim(), 10),
                      c.context.setQuery({
                          query: e.getFullMatch().trim(),
                          filters: { guild: n }
                      }),
                      (r = o.autocompletes),
                      (u = !1))
                    : (c.context.clearQuery(), (r = T(n, i, s)));
            }
            return (
                (O[n] = C({
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
                r = v[t];
            (null != r && (r.context.destroy(), (r.results = []), delete v[t]), delete O[t]);
        },
        CHANNEL_CREATE: P,
        CHANNEL_DELETE: P,
        STREAMER_MODE_UPDATE: M,
        SEARCH_SCREEN_OPEN: M,
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                r = _.Z.getCurrentSearchId();
            if (null == r) return !1;
            if (r === E.aib.DMS && (0, p.R6)(r)) {
                let e = g.Z.getChannel(t);
                if (null == e || !e.isPrivate()) return !1;
                let n = O[r];
                if (null == n) return !1;
                let { type: s, filter: l } = n.mode;
                return s === E.Sap.FILTER && l === E.dCx.FILTER_IN && A(r);
            }
            return !1;
        },
        LOGOUT: function () {
            Object.keys(O).forEach(N);
        },
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
            let { searchId: t } = e;
            null != t ? N(t) : Object.keys(O).forEach(N);
        }
    }),
    w = Z;
