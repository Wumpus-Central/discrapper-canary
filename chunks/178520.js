n.d(t, { Z: () => s }), n(388685);
var r = n(658722),
    i = n.n(r),
    a = n(481060),
    o = n(28682);
function s(e, t, n) {
    let r = new Set(),
        i = function (e) {
            var a;
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                u = (null == (a = e.usePredicate) ? void 0 : a.call(e)) === !1 || s,
                d = l(e, t, u, n) || c,
                f = !1;
            if ((0, o.Lk)(e)) for (let t of e.layout) f = i(t, u, d) || f;
            return !u && (d || f) && r.add(e.key), d || f;
        };
    return i(e), r;
}
function l(e, t, n, r) {
    var s, l, c, u, d, f;
    let p = null == (s = e.getLegacySearchKey) ? void 0 : s.call(e);
    if (null != p) return t.length < 2 || r.has(p);
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
