(r.d(t, { Z: () => w }), r(388685), r(539854), r(781311), r(290780));
var n,
    s,
    l,
    a = r(442837),
    i = r(570140),
    o = r(279779),
    c = r(592125),
    u = r(271383),
    h = r(430824),
    d = r(944486),
    p = r(246946),
    f = r(594174),
    g = r(483360),
    m = r(892880),
    S = r(51144),
    _ = r(518944),
    y = r(607802),
    x = r(861262),
    b = r(532428),
    E = r(981631);
let C = {},
    v = {};
function O(e) {
    let { searchId: t, query: r, mode: n, tokens: s, cursorScope: l, autocompletes: a } = e,
        i = v[t];
    return (
        null == i &&
            ((i = {
                results: [],
                context: o.Z.getUserSearchContext(R.bind(null, t))
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
function R(e, t) {
    let { results: r } = t,
        n = v[e],
        s = C[e];
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
                let e = f.default.getUser(n.id);
                if (null == e) continue;
                let s = S.ZP.getUserTag(e);
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
        (C[e] = O({
            searchId: e,
            query: o,
            mode: c,
            tokens: u,
            cursorScope: h,
            autocompletes: d
        })),
        k.emitChange());
}
function I(e) {
    var t, r, n;
    let s,
        { filter: l, token: a, searchId: i, maxResults: o = 10, tokens: c } = e;
    if (null == l) return null;
    let u = (0, x.g)(i),
        h = null != (r = null == a || null == (t = a.getFullMatch()) ? void 0 : t.trim()) ? r : '',
        p = l === E.dCx.FILTER_FROM || l === E.dCx.FILTER_MENTIONS;
    if (u === E.aib.GUILD && p) {
        let e = v[i];
        if (null == e) s = null;
        else {
            if (null == a || 0 === h.length) {
                let t = d.Z.getCurrentlySelectedChannelId(i);
                e.results = g.ZP.getRecentlyTalked(t, 10).map((e) => {
                    let { record: t } = e;
                    return {
                        user: t,
                        text: S.ZP.getUserTag(t)
                    };
                });
            }
            s = e.results;
        }
    } else {
        let e = null == (n = b.ZP[l]) ? void 0 : n.getAutocompletions;
        s =
            null != e
                ? e({
                      query: h,
                      searchId: i,
                      maxResults: null != o ? o : 10,
                      tokens: c
                  })
                : [];
    }
    if (null != s && p && (0, b.co)(h)) {
        let e = f.default.getCurrentUser();
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
function j(e, t) {
    let r = (null != e ? e.getFullMatch() : '').trim(),
        n = (function (e) {
            let t = (0, x.g)(e),
                r = (0, y.R6)(t);
            return new Map([
                [E.dCx.FILTER_FROM, !p.Z.hidePersonalInformation],
                [E.dCx.FILTER_MENTIONS, !p.Z.hidePersonalInformation],
                [E.dCx.FILTER_HAS, !0],
                [E.dCx.FILTER_BEFORE, !0],
                [E.dCx.FILTER_AFTER, !0],
                [E.dCx.FILTER_ON, !0],
                [E.dCx.FILTER_IN, r],
                [E.dCx.FILTER_PINNED, !0]
            ]);
        })(t),
        s = (0, b.nB)(r).filter((e) => null != e.token && !0 === n.get(e.token));
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
                  I({
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
                                let t = (0, x.g)(e),
                                    r = [E.dCx.FILTER_HAS];
                                return (p.Z.hidePersonalInformation || (r.push(E.dCx.FILTER_FROM), r.push(E.dCx.FILTER_MENTIONS)), (0, y.R6)(t) && r.push(E.dCx.FILTER_IN), r);
                            })(t).forEach((n) => {
                                if (null == n) return;
                                let l = I({
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
                                        var n, s, l, a, i, o, c, u, h;
                                        let e =
                                                null == (l = b.ZP[E.dCx.FILTER_BEFORE]) ||
                                                null == (s = l.getAutocompletions) ||
                                                null ==
                                                    (n = s.call(l, {
                                                        query: r,
                                                        searchId: t,
                                                        maxResults: 1
                                                    }))
                                                    ? void 0
                                                    : n[0],
                                            d =
                                                null == (o = b.ZP[E.dCx.FILTER_ON]) ||
                                                null == (i = o.getAutocompletions) ||
                                                null ==
                                                    (a = i.call(o, {
                                                        query: r,
                                                        searchId: t,
                                                        maxResults: 1
                                                    }))
                                                    ? void 0
                                                    : a[0],
                                            p =
                                                null == (h = b.ZP[E.dCx.FILTER_AFTER]) ||
                                                null == (u = h.getAutocompletions) ||
                                                null ==
                                                    (c = u.call(h, {
                                                        query: r,
                                                        searchId: t,
                                                        maxResults: 1
                                                    }))
                                                    ? void 0
                                                    : c[0];
                                        if (null == e) return null;
                                        let f = [e];
                                        return (
                                            null != d && f.push(d),
                                            null != p && f.push(p),
                                            {
                                                group: E.rtL.DATES,
                                                results: f
                                            }
                                        );
                                    }
                                })(e, t)
                            )),
                        5 > (0, y.BU)(s) && s.push(j(e, t)),
                        s
                    );
                })(t.token, e, n))
              : t.type === E.Sap.EMPTY &&
                (s.push(j(t.token, e)),
                s.push(
                    (function (e) {
                        if (p.Z.hidePersonalInformation) return null;
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
    (0, y.WU)();
}
function N(e) {
    let t = C[e];
    if (null == t) return;
    let { query: r, mode: n, tokens: s, cursorScope: l, autocompletes: a } = t;
    C[e] = O({
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
    C[e] = O({
        searchId: e,
        query: t,
        mode: r,
        tokens: n,
        cursorScope: s,
        autocompletes: T(e, r, n)
    });
}
function Z() {
    return A(_.Z.getCurrentSearchId());
}
class M extends (n = a.ZP.Store) {
    initialize() {
        this.waitFor(u.ZP, p.Z, c.Z, h.Z, d.Z);
    }
    getState(e) {
        var t;
        return null != (t = C[e]) ? t : O({ searchId: e });
    }
}
((l = 'SearchAutocompleteStore'),
    (s = 'displayName') in M
        ? Object.defineProperty(M, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (M[s] = l));
let k = new M(i.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
            var t;
            let r,
                { searchId: n, tokens: s, cursorScope: l } = e,
                a = (0, y.cl)(s),
                i = (0, y.qc)(l, s),
                o = null != (t = C[n]) ? t : {},
                c = v[n],
                u = !0;
            if (a === o.query && (null == o.mode || o.mode.filter === i.filter)) ((r = o.autocompletes), (u = !1));
            else if (i.type === E.Sap.EMPTY || (i.type === E.Sap.FILTER && i.filter !== E.dCx.FILTER_FROM && i.filter !== E.dCx.FILTER_MENTIONS)) (null != c && (c.context.clearQuery(), (c.results = [])), (r = T(n, i, s)));
            else if (null != c) {
                let { token: e } = i;
                null != e && e.getFullMatch().trim().length > 0
                    ? (m.Z.requestMembers(n, e.getFullMatch().trim(), 10),
                      c.context.setQuery({
                          query: e.getFullMatch().trim(),
                          filters: { guild: n }
                      }),
                      (r = o.autocompletes),
                      (u = !1))
                    : (c.context.clearQuery(), (r = T(n, i, s)));
            }
            return (
                (C[n] = O({
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
            (null != r && (r.context.destroy(), (r.results = []), delete v[t]), delete C[t]);
        },
        CHANNEL_CREATE: P,
        CHANNEL_DELETE: P,
        STREAMER_MODE_UPDATE: Z,
        SEARCH_SCREEN_OPEN: Z,
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e,
                r = _.Z.getCurrentSearchId();
            if (null == r) return !1;
            if (r === E.aib.DMS && (0, y.R6)(r)) {
                let e = c.Z.getChannel(t);
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
        },
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
            let { searchId: t } = e;
            null != t ? N(t) : Object.keys(C).forEach(N);
        }
    }),
    w = k;
