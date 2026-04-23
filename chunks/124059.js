n.d(t, { A: () => r });
var i = n(91871),
    s = n.n(i),
    l = n(614820),
    a = n(963935);
function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = new Set(),
        r = function (e) {
            let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                u = (e.usePredicate?.() === !1 && !n) || o,
                c =
                    (function (e, t, n) {
                        if (e.type === a.Z6.SECTION && e.hoisted) return !0;
                        if (e.type === a.Z6.TAB_ITEM) return !1;
                        let i = "useTitle" in e ? e.useTitle?.(!1) : void 0,
                            r = "useSearchTerms" in e ? e.useSearchTerms?.() : void 0;
                        if (n || (null == i && null == r)) return !1;
                        if ("" === t) return !0;
                        if (e.type === a.Z6.STATIC) return !1;
                        let o = t.toLowerCase();
                        for (let e of r ?? []) if (s()(o, e.toLowerCase())) return !0;
                        let d = !1;
                        if (null != i) {
                            let e = (0, l.O)(i)?.toLowerCase();
                            null != e && (d = s()(o, e));
                        }
                        return d;
                    })(e, t, u) || d,
                g = !1;
            if ((0, a.nW)(e)) for (let t of e.layout) g = r(t, u, c) || g;
            return !u && (c || g) && i.add(e.key), c || g;
        };
    return r(e), i;
}
