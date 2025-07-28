(r.d(t, { Z: () => f }), r(781311), r(290780));
var n,
    s,
    l,
    a = r(442837),
    i = r(433517),
    o = r(570140),
    c = r(862825);
let u = c.OA,
    h = !1,
    d = {};
class p extends (n = a.ZP.Store) {
    initialize() {
        var e;
        let t = i.K.get(u);
        ((null == t ? void 0 : t.history) != null &&
            (Object.keys((e = t.history)).forEach((t) => {
                (Array.isArray(e[t]) && (e[t] = e[t].filter((e) => 'string' == typeof e && e.trim())), (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t]);
            }),
            (d = e)),
            (h = !!i.K.get('tokenized')));
    }
    isTokenized() {
        return h;
    }
    getHistory(e) {
        return d[e];
    }
}
((s = 'displayName'),
    (l = c.zn),
    s in p
        ? Object.defineProperty(p, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[s] = l));
let f = new p(o.Z, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: function (e) {
        let { searchId: t } = e;
        null == t ? (i.K.remove(c.OA), (d = {})) : (delete d[t], i.K.set(c.OA, { history: d }));
    },
    SEARCH_HISTORY_WEB_REMOVE_ITEM: function (e) {
        let { searchId: t, query: r } = e;
        null != d[t] && ((d[t] = d[t].filter((e) => e !== r)), i.K.set(c.OA, { history: d }));
    },
    SEARCH_HISTORY_WEB_ADD_ITEM: function (e) {
        var t;
        let { searchId: r, query: n } = e;
        if ('string' != typeof n || '' === (n = n.trim())) return;
        let s = (d[r] = null != (t = d[r]) ? t : []),
            l = s.indexOf(n);
        (-1 !== l ? (s.splice(l, 1), s.unshift(n)) : null != s[0] && '' !== s[0] && n.startsWith(s[0]) ? (s[0] = n) : l < 0 && s.unshift(n), s.length > 5 && s.splice(5, s.length), i.K.set(c.OA, { history: d }));
    },
    LOGOUT: function () {
        (i.K.remove(c.OA), (d = {}));
    }
});
