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
    var s, l, c, u;
    let d = null == (s = e.getLegacySearchKey) ? void 0 : s.call(e);
    if (null != d && null != r) return t.length < 2 || r.has(d);
    if (e.type === o.Jq.SECTION && e.hoisted) return !0;
    if (e.type === o.Jq.TAB_ITEM) return !1;
    let f = "useTitle" in e ? (null == (l = e.useTitle) ? void 0 : l.call(e, !1)) : void 0,
        p = "useSearchTerms" in e ? (null == (c = e.useSearchTerms) ? void 0 : c.call(e)) : void 0;
    if (n || (null == f && null == p)) return !1;
    if ("" === t) return !0;
    if (e.type === o.Jq.STATIC) return !1;
    let _ = t.toLowerCase();
    for (let e of null != p ? p : []) if (i()(_, e.toLowerCase())) return !0;
    let m = !1;
    if (null != f) {
        let e = null == (u = (0, a.qgQ)(f)) ? void 0 : u.toLowerCase();
        null != e && (m = i()(_, e));
    }
    return m;
}
