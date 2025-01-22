n(653041), n(724458), n(757143), n(733860);
var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(999650),
    u = n(279779),
    d = n(483360),
    m = n(892880),
    h = n(405656),
    f = n(51144),
    p = n(271383),
    _ = n(768119),
    g = n(246946),
    E = n(594174),
    C = n(981631),
    I = n(388032);
let x = {},
    N = {};
function v(e) {
    let { searchId: t, query: n, mode: i, tokens: r, cursorScope: l, autocompletes: a } = e,
        o = N[t];
    return (
        null == o &&
            ((o = {
                results: [],
                context: u.Z.getSearchContext(T.bind(null, t))
            }),
            (N[t] = o)),
        {
            query: null != n ? n : '',
            mode:
                null != i
                    ? i
                    : {
                          type: C.Sap.EMPTY,
                          filter: null,
                          token: null
                      },
            tokens: null != r ? r : [],
            cursorScope: null != l ? l : null,
            autocompletes: null != a ? a : []
        }
    );
}
function T(e, t) {
    let { results: n } = t,
        i = N[e],
        r = x[e];
    if (null == i || null == r) return;
    let { type: l, filter: a } = r.mode;
    if (l === C.Sap.EMPTY || (l === C.Sap.FILTER && a !== C.dCx.FILTER_FROM && a !== C.dCx.FILTER_MENTIONS)) return;
    let o = 3;
    r.mode.type === C.Sap.FILTER && (o = 10),
        (i.results = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
            return (
                (e = e.reduce((e, t) => {
                    let n = E.default.getUser(t.id);
                    return null == n
                        ? e
                        : (e.push({
                              id: n.id,
                              text: f.ZP.getUserTag(n),
                              user: n
                          }),
                          e);
                }, [])).length > t && (e.length = t),
                e
            );
        })(n, o));
    let { query: s, mode: c, tokens: u, cursorScope: d } = r,
        { autocompletes: m } = r;
    (m = b(e, c)),
        (x[e] = v({
            searchId: e,
            query: s,
            mode: c,
            tokens: u,
            cursorScope: d,
            autocompletes: m
        })),
        L.emitChange();
}
function S(e, t, n) {
    var i, r, l;
    let a,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
    if (null == e || '' === e) return null;
    let s = _.Z.getSearchType(n),
        u = null !== (r = null == t ? void 0 : null === (i = t.getFullMatch()) || void 0 === i ? void 0 : i.trim()) && void 0 !== r ? r : '',
        m = e === C.dCx.FILTER_FROM || e === C.dCx.FILTER_MENTIONS;
    if (s === C.aib.GUILD && m) {
        let e = N[n];
        null == e
            ? (a = null)
            : ((null == t || 0 === u.length) &&
                  (e.results = d.ZP.getRecentlyTalked(n, 10).map((e) => {
                      let { record: t } = e;
                      return {
                          user: t,
                          text: f.ZP.getUserTag(t)
                      };
                  })),
              (a = e.results));
    } else {
        let t = null === (l = c.ZP[e]) || void 0 === l ? void 0 : l.getAutocompletions;
        a = null != t ? t(u, n, null != o ? o : 10) : [];
    }
    let h = u.toLowerCase().replace(/^@/, '');
    if (null != a && m && u.length > 0 && (I.intl.string(I.t.Qf3ptr).startsWith(h) || C.ME.substr(1).startsWith(h))) {
        let e = E.default.getCurrentUser();
        null != e &&
            (a = a.filter((t) => {
                let { user: n } = t;
                return n.id !== e.id;
            })).unshift({
                text: C.ME,
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
function A(e) {
    let t = (null != e ? e.getFullMatch() : '').trim(),
        n = {
            [C.dCx.FILTER_FROM]: !g.Z.hidePersonalInformation,
            [C.dCx.FILTER_MENTIONS]: !g.Z.hidePersonalInformation,
            [C.dCx.FILTER_HAS]: !0,
            [C.dCx.FILTER_BEFORE]: !0,
            [C.dCx.FILTER_AFTER]: !0,
            [C.dCx.FILTER_ON]: !0,
            [C.dCx.FILTER_IN]: _.Z.getSearchType() === C.aib.GUILD,
            [C.dCx.FILTER_PINNED]: !0
        },
        i = (0, c.nB)(t).filter((e) => n[e.token]);
    return {
        group: C.rtL.SEARCH_OPTIONS,
        results: i
    };
}
function b(e, t) {
    let n = [];
    if (t.type === C.Sap.FILTER) n.push(S(t.filter, t.token, e, 10));
    else if (t.type === C.Sap.FILTER_ALL)
        n = (function (e, t) {
            let n = (null != e ? e.getFullMatch() : '').trim(),
                i = [];
            return (
                null != n &&
                    '' !== n &&
                    ((function (e) {
                        let t = _.Z.getSearchType(e),
                            n = [C.dCx.FILTER_HAS];
                        return !g.Z.hidePersonalInformation && (n.push(C.dCx.FILTER_FROM), n.push(C.dCx.FILTER_MENTIONS)), t === C.aib.GUILD && n.push(C.dCx.FILTER_IN), n;
                    })(t).forEach((n) => {
                        if (null == n) return;
                        let r = S(n, e, t, 3);
                        null != r && i.push(r);
                    }),
                    i.push(
                        (function (e, t) {
                            let n = (null != e ? e.getFullMatch() : '').trim();
                            if (null != n && '' !== n) {
                                var i, r, l;
                                let e = null === (i = c.ZP[C.dCx.FILTER_BEFORE]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0],
                                    a = null === (r = c.ZP[C.dCx.FILTER_ON]) || void 0 === r ? void 0 : r.getAutocompletions(n, t, 1)[0],
                                    o = null === (l = c.ZP[C.dCx.FILTER_AFTER]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0];
                                return null == e
                                    ? null
                                    : {
                                          group: C.rtL.DATES,
                                          results: [e, a, o]
                                      };
                            }
                        })(e, t)
                    )),
                5 > (0, h.BU)(i) && i.push(A(e)),
                i
            );
        })(t.token, e);
    else if (t.type === C.Sap.EMPTY) {
        n.push(A(t.token));
        n.push(
            (function (e) {
                if (g.Z.hidePersonalInformation) return null;
                let t = _.Z.getHistory(e);
                return null == t
                    ? null
                    : {
                          group: C.rtL.HISTORY,
                          results: t.map((e) => ({ text: e }))
                      };
            })(e)
        );
    }
    return n;
}
function j() {
    (0, h.WU)();
}
function R(e) {
    let t = x[e];
    if (null == t) return;
    let { query: n, mode: i, tokens: r, cursorScope: l, autocompletes: a } = t;
    x[e] = v({
        searchId: e,
        query: n,
        mode: i,
        tokens: r,
        cursorScope: l,
        autocompletes: a.map((e) => ((null == e ? void 0 : e.group) === C.rtL.HISTORY ? null : e))
    });
}
function Z() {
    let e = _.Z.getCurrentSearchId();
    if (null == e || null == x[e]) return;
    let { query: t, mode: n, tokens: i, cursorScope: r } = x[e];
    x[e] = v({
        searchId: e,
        query: t,
        mode: n,
        tokens: i,
        cursorScope: r,
        autocompletes: b(e, n)
    });
}
class P extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(p.ZP, g.Z);
    }
    getState(e) {
        var t;
        return null !== (t = x[e]) && void 0 !== t ? t : v({ searchId: e });
    }
}
(a = 'SearchAutocompleteStore'),
    (l = 'displayName') in (r = P)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a);
let L = new P(s.Z, {
    SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function (e) {
        var t;
        let n,
            { searchId: i, tokens: r, cursorScope: l } = e,
            a = (0, h.cl)(r),
            o = (0, h.qc)(l, r),
            s = null !== (t = x[i]) && void 0 !== t ? t : {},
            c = N[i],
            u = !0;
        if (a === s.query && (null == s.mode || s.mode.filter === o.filter)) (n = s.autocompletes), (u = !1);
        else if (o.type === C.Sap.EMPTY || (o.type === C.Sap.FILTER && o.filter !== C.dCx.FILTER_FROM && o.filter !== C.dCx.FILTER_MENTIONS)) null != c && (c.context.clearQuery(), (c.results = [])), (n = b(i, o));
        else if (null != c) {
            let { token: e } = o;
            null != e && e.getFullMatch().trim().length > 0 ? (m.Z.requestMembers(i, e.getFullMatch().trim(), 10), c.context.setQuery(e.getFullMatch().trim(), { guild: i }), (n = s.autocompletes), (u = !1)) : (c.context.clearQuery(), (n = b(i, o)));
        }
        return (
            (x[i] = v({
                searchId: i,
                query: a,
                mode: o,
                tokens: r,
                cursorScope: l,
                autocompletes: n
            })),
            u
        );
    },
    SEARCH_EDITOR_STATE_CLEAR: function (e) {
        let { searchId: t } = e,
            n = N[t];
        null != n && (n.context.destroy(), (n.results = []), delete N[t]), delete x[t];
    },
    CHANNEL_CREATE: j,
    CHANNEL_DELETE: j,
    STREAMER_MODE_UPDATE: Z,
    SEARCH_SCREEN_OPEN: Z,
    SEARCH_CLEAR_HISTORY: function (e) {
        let { searchId: t } = e;
        null != t ? R(t) : Object.keys(x).forEach(R);
    },
    LOGOUT: function () {
        Object.keys(x).forEach(R);
    }
});
t.Z = L;
