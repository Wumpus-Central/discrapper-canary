n.d(t, { A: () => l });
var i = n(91871),
    s = n.n(i),
    r = n(397927),
    a = n(963935);
function l(e, t, n) {
    let i = n?.bypassPredicates ?? !1,
        l = new Set(),
        o = function (e) {
            let c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                u = (e.usePredicate?.() === !1 && !i) || c,
                _ =
                    (function (e, t, n, i) {
                        let l = e.getLegacySearchKey?.();
                        if (null != l && null != i) return t.length < 2 || i.has(l);
                        if (e.type === a.Z6.SECTION && e.hoisted) return !0;
                        if (e.type === a.Z6.TAB_ITEM) return !1;
                        let o = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                            c = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                        if (n || (null == o && null == c)) return !1;
                        if ("" === t) return !0;
                        if (e.type === a.Z6.STATIC) return !1;
                        let d = t.toLowerCase();
                        for (let e of c ?? []) if (s()(d, e.toLowerCase())) return !0;
                        let u = !1;
                        if (null != o) {
                            let e = (0, r.Oer)(o)?.toLowerCase();
                            null != e && (u = s()(d, e));
                        }
                        return u;
                    })(e, t, u, n?.legacyMatches) || d,
                m = !1;
            if ((0, a.nW)(e)) for (let t of e.layout) m = o(t, u, _) || m;
            return !u && (_ || m) && l.add(e.key), _ || m;
        };
    return o(e), l;
}
