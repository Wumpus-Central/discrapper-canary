n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(91871),
    i = n.n(r),
    l = n(397927),
    s = n(963935);

function a(e, t, n) {
    var r;
    let a = null != (r = null == n ? void 0 : n.bypassPredicates) && r,
        o = new Set(),
        c = function (e) {
            var r;
            let d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                _ = ((null == (r = e.usePredicate) ? void 0 : r.call(e)) === !1 && !a) || d,
                p =
                    (function (e, t, n, r) {
                        var a, o, c, d;
                        let u = null == (a = e.getLegacySearchKey) ? void 0 : a.call(e);
                        if (null != u && null != r) return t.length < 2 || r.has(u);
                        if (e.type === s.Z6.SECTION && e.hoisted) return !0;
                        if (e.type === s.Z6.TAB_ITEM) return !1;
                        let _ = "useTitle" in e ? (null == (o = e.useTitle) ? void 0 : o.call(e, !1)) : void 0,
                            p = "useSearchTerms" in e ? (null == (c = e.useSearchTerms) ? void 0 : c.call(e)) : void 0;
                        if (n || (null == _ && null == p)) return !1;
                        if ("" === t) return !0;
                        if (e.type === s.Z6.STATIC) return !1;
                        let m = t.toLowerCase();
                        for (let e of null != p ? p : []) if (i()(m, e.toLowerCase())) return !0;
                        let g = !1;
                        if (null != _) {
                            let e = null == (d = (0, l.Oer)(_)) ? void 0 : d.toLowerCase();
                            null != e && (g = i()(m, e));
                        }
                        return g;
                    })(e, t, _, null == n ? void 0 : n.legacyMatches) || u,
                m = !1;
            if ((0, s.nW)(e)) for (let t of e.layout) m = c(t, _, p) || m;
            return !_ && (p || m) && o.add(e.key), p || m;
        };
    return c(e), o;
}
