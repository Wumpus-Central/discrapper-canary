n.d(t, { Z: () => s }), n(388685);
var r = n(658722),
    i = n.n(r),
    a = n(481060),
    o = n(28682);
function s(e, t, n) {
    var r;
    let i = null != (r = null == n ? void 0 : n.bypassPredicates) && r,
        a = new Set(),
        s = function (e) {
            var r;
            let c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                d = ((null == (r = e.usePredicate) ? void 0 : r.call(e)) === !1 && !i) || c,
                f = l(e, t, d, null == n ? void 0 : n.legacyMatches) || u,
                p = !1;
            if ((0, o.Lk)(e)) for (let t of e.layout) p = s(t, d, f) || p;
            return !d && (f || p) && a.add(e.key), f || p;
        };
    return s(e), a;
}
function l(e, t, n, r) {
    var s, l, c, u, d, f;
    let p = null == (s = e.getLegacySearchKey) ? void 0 : s.call(e);
    if (null != p && null != r) return t.length < 2 || r.has(p);
    if (e.type === o.Jq.SECTION && e.hoisted) return !0;
    let _ = "useTitle" in e ? (null == (l = e.useTitle) ? void 0 : l.call(e, !1)) : void 0,
        m = "useNavigationTitle" in e ? (null == (c = e.useNavigationTitle) ? void 0 : c.call(e)) : void 0,
        h = "useSearchTerms" in e ? (null == (u = e.useSearchTerms) ? void 0 : u.call(e)) : void 0;
    if (n || (null == _ && null == m && null == h)) return !1;
    if ("" === t) return !0;
    let g = t.toLowerCase();
    for (let e of null != h ? h : []) if (i()(g, e.toLowerCase())) return !0;
    let E = !1;
    if (null != _) {
        let e = null == (d = (0, a.qgQ)(_)) ? void 0 : d.toLowerCase();
        null != e && (E = i()(g, e));
    }
    if (null != m && !E) {
        let e = null == (f = (0, a.qgQ)(m)) ? void 0 : f.toLowerCase();
        null != e && (E = i()(g, e));
    }
    return E;
}
