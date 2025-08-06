(n.d(t, { Z: () => q }), n(388685), n(539854), n(781311), n(290780), n(35282));
var r,
    i = n(442837),
    o = n(570140),
    a = n(279779),
    s = n(592125),
    l = n(271383),
    c = n(430824),
    u = n(944486),
    d = n(246946),
    f = n(594174),
    _ = n(483360),
    p = n(892880),
    h = n(51144),
    m = n(607802),
    g = n(375123),
    E = n(532428),
    b = n(981631);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = null,
    v = {},
    I = {},
    T = 10,
    S = 3;
function A(e) {
    let t = (0, m.R6)(e),
        n = (0, g.Z)({ location: 'getEmptySearchOptions' });
    return new Map([
        [b.dCx.FILTER_FROM, !d.Z.hidePersonalInformation],
        [b.dCx.FILTER_MENTIONS, !d.Z.hidePersonalInformation],
        [b.dCx.FILTER_HAS, !0],
        [b.dCx.FILTER_BEFORE, !0],
        [b.dCx.FILTER_AFTER, !0],
        [b.dCx.FILTER_ON, !0],
        [b.dCx.FILTER_IN, t],
        [b.dCx.FILTER_PINNED, !0],
        [b.dCx.FILTER_AUTHOR_TYPE, n]
    ]);
}
function N(e) {
    let t = [b.dCx.FILTER_HAS];
    return (d.Z.hidePersonalInformation || (t.push(b.dCx.FILTER_FROM), t.push(b.dCx.FILTER_MENTIONS)), (0, m.R6)(e) && t.push(b.dCx.FILTER_IN), t);
}
function C(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: o, autocompletes: s } = e,
        l = (0, m.WJ)(t),
        c = I[l];
    return (
        null == c &&
            ((c = {
                results: [],
                context: a.Z.getUserSearchContext(P.bind(null, t))
            }),
            (I[l] = c)),
        {
            searchContext: t,
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: b.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != i ? i : [],
            cursorScope: null != o ? o : null,
            autocompletes: null != s ? s : []
        }
    );
}
function R(e) {
    let { searchId: t } = e,
        n = I[t];
    (null != n && (n.context.destroy(), (n.results = []), delete I[t]), delete v[t], (O = null));
}
function P(e, t) {
    let { results: n } = t,
        r = (0, m.WJ)(e),
        i = I[r],
        o = v[r];
    if (null == i || null == o) return;
    let { type: a, filter: s } = o.mode;
    if (a === b.Sap.EMPTY || (a === b.Sap.FILTER && s !== b.dCx.FILTER_FROM && s !== b.dCx.FILTER_MENTIONS)) return;
    let l = S;
    (o.mode.type === b.Sap.FILTER && (l = T), (i.results = w(n, l)));
    let { query: c, mode: u, tokens: d, cursorScope: f } = o,
        { autocompletes: _ } = o;
    ((_ = G(e, u, d)),
        (v[r] = C({
            searchContext: e,
            query: c,
            mode: u,
            tokens: d,
            cursorScope: f,
            autocompletes: _
        })),
        z.emitChange());
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T,
        n = [];
    for (let r of e) {
        if (n.length >= t) break;
        let e = f.default.getUser(r.id);
        if (null == e) continue;
        let i = h.ZP.getUserTag(e);
        null != i &&
            n.push({
                text: i,
                user: e
            });
    }
    return n;
}
function D(e) {
    let { searchContext: t } = e;
    ((O = t), H(t));
}
function L(e) {
    var t;
    let n,
        { searchContext: r, tokens: i, cursorScope: o } = e;
    O = r;
    let a = (0, m.cl)(i),
        s = (0, m.qc)(o, i),
        l = (0, m.WJ)(r),
        c = null != (t = v[l]) ? t : {},
        u = I[l],
        d = !0;
    if (a === c.query && (null == c.mode || c.mode.filter === s.filter)) ((n = c.autocompletes), (d = !1));
    else if (s.type === b.Sap.EMPTY || (s.type === b.Sap.FILTER && s.filter !== b.dCx.FILTER_FROM && s.filter !== b.dCx.FILTER_MENTIONS)) (null != u && (u.context.clearQuery(), (u.results = [])), (n = G(r, s, i)));
    else if (null != u) {
        let { token: e } = s;
        if (null != e && e.getFullMatch().trim().length > 0) {
            let t = (0, m.s5)(r);
            (null != t && p.Z.requestMembers(t, e.getFullMatch().trim(), T),
                u.context.setQuery({
                    query: e.getFullMatch().trim(),
                    filters: { guild: null != t ? t : void 0 }
                }),
                (n = c.autocompletes),
                (d = !1));
        } else (u.context.clearQuery(), (n = G(r, s, i)));
    }
    return (
        (v[l] = C({
            searchContext: r,
            query: a,
            mode: s,
            tokens: i,
            cursorScope: o,
            autocompletes: n
        })),
        d
    );
}
function x(e) {
    var t, n, r;
    let i,
        { filter: o, token: a, searchContext: s, maxResults: l = T, tokens: c } = e;
    if (null == o) return null;
    let d = (0, m.WJ)(s),
        p = null != (n = null == a || null == (t = a.getFullMatch()) ? void 0 : t.trim()) ? n : '',
        g = o === b.dCx.FILTER_FROM || o === b.dCx.FILTER_MENTIONS;
    if ((0, m.b7)(s) && g) {
        let e = I[d];
        if (null == e) i = null;
        else {
            if (null == a || 0 === p.length) {
                let t = u.Z.getCurrentlySelectedChannelId(s.guildId);
                e.results = _.ZP.getRecentlyTalked(t, T).map((e) => {
                    let { record: t } = e;
                    return {
                        user: t,
                        text: h.ZP.getUserTag(t)
                    };
                });
            }
            i = e.results;
        }
    } else {
        let e = null == (r = E.ZP[o]) ? void 0 : r.getAutocompletions;
        i =
            null != e
                ? e({
                      query: p,
                      searchContext: s,
                      maxResults: null != l ? l : T,
                      tokens: c
                  })
                : [];
    }
    if (null != i && g && (0, E.co)(p)) {
        let e = f.default.getCurrentUser();
        null != e &&
            (i = i.filter((t) => {
                let { user: n } = t;
                return (null == n ? void 0 : n.id) !== e.id;
            })).unshift({
                text: b.ME,
                user: e
            });
    }
    return null == i || 0 === i.length
        ? null
        : {
              group: o,
              results: i
          };
}
function M(e, t) {
    let n = (null != e ? e.getFullMatch() : '').trim(),
        r = A(t),
        i = (0, E.nB)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: b.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function k(e, t, n) {
    let r = (null != e ? e.getFullMatch() : '').trim(),
        i = [];
    return (
        null != r &&
            '' !== r &&
            (N(t).forEach((r) => {
                if (null == r) return;
                let o = x({
                    filter: r,
                    token: e,
                    searchContext: t,
                    maxResults: S,
                    tokens: n
                });
                null != o && i.push(o);
            }),
            i.push(j(e, t))),
        5 > (0, m.BU)(i) && i.push(M(e, t)),
        i
    );
}
function j(e, t) {
    let n = (null != e ? e.getFullMatch() : '').trim();
    if (null != n && '' !== n) {
        var r, i, o, a, s, l, c, u, d;
        let e =
                null == (o = E.ZP[b.dCx.FILTER_BEFORE]) ||
                null == (i = o.getAutocompletions) ||
                null ==
                    (r = i.call(o, {
                        query: n,
                        searchContext: t,
                        maxResults: 1
                    }))
                    ? void 0
                    : r[0],
            f =
                null == (l = E.ZP[b.dCx.FILTER_ON]) ||
                null == (s = l.getAutocompletions) ||
                null ==
                    (a = s.call(l, {
                        query: n,
                        searchContext: t,
                        maxResults: 1
                    }))
                    ? void 0
                    : a[0],
            _ =
                null == (d = E.ZP[b.dCx.FILTER_AFTER]) ||
                null == (u = d.getAutocompletions) ||
                null ==
                    (c = u.call(d, {
                        query: n,
                        searchContext: t,
                        maxResults: 1
                    }))
                    ? void 0
                    : c[0];
        if (null == e) return null;
        let p = [e];
        return (
            null != f && p.push(f),
            null != _ && p.push(_),
            {
                group: b.rtL.DATES,
                results: p
            }
        );
    }
}
function U(e) {
    if (d.Z.hidePersonalInformation) return null;
    {
        let t = n(741995).Z,
            r = (0, m.WJ)(e),
            i = t.getHistory(r);
        return null == i
            ? null
            : {
                  group: b.rtL.HISTORY,
                  results: i.map((e) => ({ text: e }))
              };
    }
}
function G(e, t, n) {
    let r = [];
    return (
        t.type === b.Sap.FILTER
            ? r.push(
                  x({
                      filter: t.filter,
                      token: t.token,
                      searchContext: e,
                      maxResults: T,
                      tokens: n
                  })
              )
            : t.type === b.Sap.FILTER_ALL
              ? (r = k(t.token, e, n))
              : t.type === b.Sap.EMPTY && (r.push(M(t.token, e)), r.push(U(e))),
        r
    );
}
function B() {
    (0, m.WU)();
}
function Z(e) {
    let t = v[e];
    if (null == t) return;
    let { searchContext: n, query: r, mode: i, tokens: o, cursorScope: a, autocompletes: s } = t;
    v[e] = C({
        searchContext: n,
        query: r,
        mode: i,
        tokens: o,
        cursorScope: a,
        autocompletes: s.map((e) => ((null == e ? void 0 : e.group) === b.rtL.HISTORY ? null : e))
    });
}
function F(e) {
    let { searchId: t } = e;
    null != t ? Z(t) : Object.keys(v).forEach(Z);
}
function V() {
    Object.keys(v).forEach(Z);
}
function H(e) {
    let t = (0, m.WJ)(e);
    if (null == v[t]) return !1;
    let { query: n, mode: r, tokens: i, cursorScope: o } = v[t];
    v[t] = C({
        searchContext: e,
        query: n,
        mode: r,
        tokens: i,
        cursorScope: o,
        autocompletes: G(e, r, i)
    });
}
function Y() {
    return null != O && H(O);
}
function W(e) {
    let { channelId: t } = e;
    if (null == O) return !1;
    if (O.type === b.aib.DMS && (0, m.R6)(O)) {
        let e = s.Z.getChannel(t);
        if (null == e || !e.isPrivate()) return !1;
        let n = v[(0, m.WJ)(O)];
        if (null == n) return !1;
        let { type: r, filter: i } = n.mode;
        return r === b.Sap.FILTER && i === b.dCx.FILTER_IN && H(O);
    }
    return !1;
}
class K extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.ZP, d.Z, s.Z, c.Z, u.Z);
    }
    getState(e) {
        var t;
        return null != (t = v[(0, m.WJ)(e)]) ? t : C({ searchContext: e });
    }
    getSelectedSearchContext() {
        return O;
    }
    getFilterResults(e, t, n) {
        var r, i, o;
        let { tokens: a } = null != (r = v[(0, m.WJ)(e)]) ? r : {},
            s = [];
        switch (t) {
            case b.dCx.FILTER_FROM:
            case b.dCx.FILTER_MENTIONS:
                if (b.Xyh.test(n) || (0, E.co)(n)) {
                    let e = f.default.getUser(n);
                    null != e &&
                        (s = [
                            {
                                user: e,
                                text: h.ZP.getUserTag(e)
                            }
                        ]);
                }
                if ((0, m.b7)(e)) {
                    let t = u.Z.getCurrentlySelectedChannelId(e.guildId),
                        r = _.ZP.getRecentlyTalked(t, T);
                    if (0 === n.trim().length)
                        return (
                            r.forEach((e) => {
                                let { record: t } = e;
                                s.push({
                                    user: t,
                                    text: h.ZP.getUserTag(t)
                                });
                            }),
                            s
                        );
                }
                let l = null == (i = E.ZP[t]) ? void 0 : i.getAutocompletions;
                return (s =
                    null != l
                        ? l({
                              query: n,
                              searchContext: e,
                              maxResults: T,
                              tokens: a
                          })
                        : []);
            default:
                let c = null == (o = E.ZP[t]) ? void 0 : o.getAutocompletions;
                return (s =
                    null != c
                        ? c({
                              query: n,
                              searchContext: e,
                              maxResults: T,
                              tokens: a
                          })
                        : []);
        }
    }
}
y(K, 'displayName', 'SearchAutocompleteStore');
let z = new K(o.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: L,
        SEARCH_EDITOR_STATE_CLEAR: R,
        CHANNEL_CREATE: B,
        CHANNEL_DELETE: B,
        STREAMER_MODE_UPDATE: Y,
        SEARCH_SCREEN_OPEN: D,
        CHANNEL_SELECT: W,
        LOGOUT: V,
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: F
    }),
    q = z;
