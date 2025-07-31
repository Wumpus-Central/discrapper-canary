(n.d(t, { Z: () => z }), n(388685), n(539854), n(781311), n(290780));
var r,
    i = n(442837),
    a = n(570140),
    o = n(279779),
    s = n(592125),
    l = n(271383),
    c = n(430824),
    u = n(944486),
    d = n(246946),
    _ = n(594174),
    f = n(483360),
    p = n(892880),
    h = n(51144),
    m = n(607802),
    g = n(532428),
    E = n(981631);
function b(e, t, n) {
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
let y = null,
    O = {},
    v = {},
    I = 10,
    T = 3;
function S(e) {
    let t = (0, m.R6)(e);
    return new Map([
        [E.dCx.FILTER_FROM, !d.Z.hidePersonalInformation],
        [E.dCx.FILTER_MENTIONS, !d.Z.hidePersonalInformation],
        [E.dCx.FILTER_HAS, !0],
        [E.dCx.FILTER_BEFORE, !0],
        [E.dCx.FILTER_AFTER, !0],
        [E.dCx.FILTER_ON, !0],
        [E.dCx.FILTER_IN, t],
        [E.dCx.FILTER_PINNED, !0]
    ]);
}
function A(e) {
    let t = [E.dCx.FILTER_HAS];
    return (d.Z.hidePersonalInformation || (t.push(E.dCx.FILTER_FROM), t.push(E.dCx.FILTER_MENTIONS)), (0, m.R6)(e) && t.push(E.dCx.FILTER_IN), t);
}
function N(e) {
    let { searchContext: t, query: n, mode: r, tokens: i, cursorScope: a, autocompletes: s } = e,
        l = (0, m.WJ)(t),
        c = v[l];
    return (
        null == c &&
            ((c = {
                results: [],
                context: o.Z.getUserSearchContext(R.bind(null, t))
            }),
            (v[l] = c)),
        {
            searchContext: t,
            query: null != n ? n : '',
            mode:
                null != r
                    ? r
                    : {
                          type: E.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != i ? i : [],
            cursorScope: null != a ? a : null,
            autocompletes: null != s ? s : []
        }
    );
}
function C(e) {
    let { searchId: t } = e,
        n = v[t];
    (null != n && (n.context.destroy(), (n.results = []), delete v[t]), delete O[t], (y = null));
}
function R(e, t) {
    let { results: n } = t,
        r = (0, m.WJ)(e),
        i = v[r],
        a = O[r];
    if (null == i || null == a) return;
    let { type: o, filter: s } = a.mode;
    if (o === E.Sap.EMPTY || (o === E.Sap.FILTER && s !== E.dCx.FILTER_FROM && s !== E.dCx.FILTER_MENTIONS)) return;
    let l = T;
    (a.mode.type === E.Sap.FILTER && (l = I), (i.results = P(n, l)));
    let { query: c, mode: u, tokens: d, cursorScope: _ } = a,
        { autocompletes: f } = a;
    ((f = U(e, u, d)),
        (O[r] = N({
            searchContext: e,
            query: c,
            mode: u,
            tokens: d,
            cursorScope: _,
            autocompletes: f
        })),
        K.emitChange());
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I,
        n = [];
    for (let r of e) {
        if (n.length >= t) break;
        let e = _.default.getUser(r.id);
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
function w(e) {
    let { searchContext: t } = e;
    ((y = t), Z(t));
}
function D(e) {
    var t;
    let n,
        { searchContext: r, tokens: i, cursorScope: a } = e;
    y = r;
    let o = (0, m.cl)(i),
        s = (0, m.qc)(a, i),
        l = (0, m.WJ)(r),
        c = null != (t = O[l]) ? t : {},
        u = v[l],
        d = !0;
    if (o === c.query && (null == c.mode || c.mode.filter === s.filter)) ((n = c.autocompletes), (d = !1));
    else if (s.type === E.Sap.EMPTY || (s.type === E.Sap.FILTER && s.filter !== E.dCx.FILTER_FROM && s.filter !== E.dCx.FILTER_MENTIONS)) (null != u && (u.context.clearQuery(), (u.results = [])), (n = U(r, s, i)));
    else if (null != u) {
        let { token: e } = s;
        if (null != e && e.getFullMatch().trim().length > 0) {
            let t = (0, m.s5)(r);
            (null != t && p.Z.requestMembers(t, e.getFullMatch().trim(), I),
                u.context.setQuery({
                    query: e.getFullMatch().trim(),
                    filters: { guild: null != t ? t : void 0 }
                }),
                (n = c.autocompletes),
                (d = !1));
        } else (u.context.clearQuery(), (n = U(r, s, i)));
    }
    return (
        (O[l] = N({
            searchContext: r,
            query: o,
            mode: s,
            tokens: i,
            cursorScope: a,
            autocompletes: n
        })),
        d
    );
}
function L(e) {
    var t, n, r;
    let i,
        { filter: a, token: o, searchContext: s, maxResults: l = I, tokens: c } = e;
    if (null == a) return null;
    let d = (0, m.WJ)(s),
        p = null != (n = null == o || null == (t = o.getFullMatch()) ? void 0 : t.trim()) ? n : '',
        b = a === E.dCx.FILTER_FROM || a === E.dCx.FILTER_MENTIONS;
    if ((0, m.b7)(s) && b) {
        let e = v[d];
        if (null == e) i = null;
        else {
            if (null == o || 0 === p.length) {
                let t = u.Z.getCurrentlySelectedChannelId(s.guildId);
                e.results = f.ZP.getRecentlyTalked(t, I).map((e) => {
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
        let e = null == (r = g.ZP[a]) ? void 0 : r.getAutocompletions;
        i =
            null != e
                ? e({
                      query: p,
                      searchContext: s,
                      maxResults: null != l ? l : I,
                      tokens: c
                  })
                : [];
    }
    if (null != i && b && (0, g.co)(p)) {
        let e = _.default.getCurrentUser();
        null != e &&
            (i = i.filter((t) => {
                let { user: n } = t;
                return (null == n ? void 0 : n.id) !== e.id;
            })).unshift({
                text: E.ME,
                user: e
            });
    }
    return null == i || 0 === i.length
        ? null
        : {
              group: a,
              results: i
          };
}
function x(e, t) {
    let n = (null != e ? e.getFullMatch() : '').trim(),
        r = S(t),
        i = (0, g.nB)(n).filter((e) => null != e.token && !0 === r.get(e.token));
    return {
        group: E.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function M(e, t, n) {
    let r = (null != e ? e.getFullMatch() : '').trim(),
        i = [];
    return (
        null != r &&
            '' !== r &&
            (A(t).forEach((r) => {
                if (null == r) return;
                let a = L({
                    filter: r,
                    token: e,
                    searchContext: t,
                    maxResults: T,
                    tokens: n
                });
                null != a && i.push(a);
            }),
            i.push(k(e, t))),
        5 > (0, m.BU)(i) && i.push(x(e, t)),
        i
    );
}
function k(e, t) {
    let n = (null != e ? e.getFullMatch() : '').trim();
    if (null != n && '' !== n) {
        var r, i, a, o, s, l, c, u, d;
        let e =
                null == (a = g.ZP[E.dCx.FILTER_BEFORE]) ||
                null == (i = a.getAutocompletions) ||
                null ==
                    (r = i.call(a, {
                        query: n,
                        searchContext: t,
                        maxResults: 1
                    }))
                    ? void 0
                    : r[0],
            _ =
                null == (l = g.ZP[E.dCx.FILTER_ON]) ||
                null == (s = l.getAutocompletions) ||
                null ==
                    (o = s.call(l, {
                        query: n,
                        searchContext: t,
                        maxResults: 1
                    }))
                    ? void 0
                    : o[0],
            f =
                null == (d = g.ZP[E.dCx.FILTER_AFTER]) ||
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
            null != _ && p.push(_),
            null != f && p.push(f),
            {
                group: E.rtL.DATES,
                results: p
            }
        );
    }
}
function j(e) {
    if (d.Z.hidePersonalInformation) return null;
    {
        let t = n(741995).Z,
            r = (0, m.WJ)(e),
            i = t.getHistory(r);
        return null == i
            ? null
            : {
                  group: E.rtL.HISTORY,
                  results: i.map((e) => ({ text: e }))
              };
    }
}
function U(e, t, n) {
    let r = [];
    return (
        t.type === E.Sap.FILTER
            ? r.push(
                  L({
                      filter: t.filter,
                      token: t.token,
                      searchContext: e,
                      maxResults: I,
                      tokens: n
                  })
              )
            : t.type === E.Sap.FILTER_ALL
              ? (r = M(t.token, e, n))
              : t.type === E.Sap.EMPTY && (r.push(x(t.token, e)), r.push(j(e))),
        r
    );
}
function G() {
    (0, m.WU)();
}
function B(e) {
    let t = O[e];
    if (null == t) return;
    let { searchContext: n, query: r, mode: i, tokens: a, cursorScope: o, autocompletes: s } = t;
    O[e] = N({
        searchContext: n,
        query: r,
        mode: i,
        tokens: a,
        cursorScope: o,
        autocompletes: s.map((e) => ((null == e ? void 0 : e.group) === E.rtL.HISTORY ? null : e))
    });
}
function V(e) {
    let { searchId: t } = e;
    null != t ? B(t) : Object.keys(O).forEach(B);
}
function F() {
    Object.keys(O).forEach(B);
}
function Z(e) {
    let t = (0, m.WJ)(e);
    if (null == O[t]) return !1;
    let { query: n, mode: r, tokens: i, cursorScope: a } = O[t];
    O[t] = N({
        searchContext: e,
        query: n,
        mode: r,
        tokens: i,
        cursorScope: a,
        autocompletes: U(e, r, i)
    });
}
function H() {
    return null != y && Z(y);
}
function Y(e) {
    let { channelId: t } = e;
    if (null == y) return !1;
    if (y.type === E.aib.DMS && (0, m.R6)(y)) {
        let e = s.Z.getChannel(t);
        if (null == e || !e.isPrivate()) return !1;
        let n = O[(0, m.WJ)(y)];
        if (null == n) return !1;
        let { type: r, filter: i } = n.mode;
        return r === E.Sap.FILTER && i === E.dCx.FILTER_IN && Z(y);
    }
    return !1;
}
class W extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.ZP, d.Z, s.Z, c.Z, u.Z);
    }
    getState(e) {
        var t;
        return null != (t = O[(0, m.WJ)(e)]) ? t : N({ searchContext: e });
    }
    getSelectedSearchContext() {
        return y;
    }
}
b(W, 'displayName', 'SearchAutocompleteStore');
let K = new W(a.Z, {
        SEARCH_AUTOCOMPLETE_QUERY_UPDATE: D,
        SEARCH_EDITOR_STATE_CLEAR: C,
        CHANNEL_CREATE: G,
        CHANNEL_DELETE: G,
        STREAMER_MODE_UPDATE: H,
        SEARCH_SCREEN_OPEN: w,
        CHANNEL_SELECT: Y,
        LOGOUT: F,
        SEARCH_HISTORY_WEB_CLEAR_ITEMS: V
    }),
    z = K;
