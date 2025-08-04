(n.d(t, { Z: () => b }), n(781311), n(290780));
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(723642);
function l(e, t, n) {
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
let c = s.OA,
    u = 'tokenized',
    d = !1,
    f = {};
function _(e) {
    var t;
    let { searchId: n, query: r } = e;
    if ('string' != typeof r || '' === (r = r.trim())) return;
    let i = (f[n] = null != (t = f[n]) ? t : []),
        o = i.indexOf(r);
    (-1 !== o ? (i.splice(o, 1), i.unshift(r)) : null != i[0] && '' !== i[0] && r.startsWith(i[0]) ? (i[0] = r) : o < 0 && i.unshift(r), i.length > 5 && i.splice(5, i.length), a.K.set(s.OA, { history: f }));
}
function p(e) {
    let { searchId: t } = e;
    null == t ? (a.K.remove(s.OA), (f = {})) : (delete f[t], a.K.set(s.OA, { history: f }));
}
function h(e) {
    let { searchId: t, query: n } = e;
    null != f[t] && ((f[t] = f[t].filter((e) => e !== n)), a.K.set(s.OA, { history: f }));
}
function m(e) {
    return (
        Object.keys(e).forEach((t) => {
            (Array.isArray(e[t]) && (e[t] = e[t].filter((e) => 'string' == typeof e && e.trim())), (Array.isArray(e[t]) && 0 !== e[t].length) || delete e[t]);
        }),
        e
    );
}
function g() {
    (a.K.remove(s.OA), (f = {}));
}
class E extends (r = i.ZP.Store) {
    initialize() {
        let e = a.K.get(c);
        ((null == e ? void 0 : e.history) != null && (f = m(e.history)), (d = !!a.K.get(u)));
    }
    isTokenized() {
        return d;
    }
    getHistory(e) {
        return f[e];
    }
}
l(E, 'displayName', s.zn);
let b = new E(o.Z, {
    SEARCH_HISTORY_WEB_CLEAR_ITEMS: p,
    SEARCH_HISTORY_WEB_REMOVE_ITEM: h,
    SEARCH_HISTORY_WEB_ADD_ITEM: _,
    LOGOUT: g
});
