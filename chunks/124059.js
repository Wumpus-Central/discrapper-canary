n.d(t, { A: () => r });
var i = n(91871),
    s = n.n(i),
    l = n(397927),
    a = n(963935);
function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = new Set(),
        r = function (e) {
            let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                c = (e.usePredicate?.() === !1 && !n) || o,
                u =
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
                            let e = (0, l.Oer)(i)?.toLowerCase();
                            null != e && (d = s()(o, e));
                        }
                        return d;
                    })(e, t, c) || d,
                _ = !1;
            if ((0, a.nW)(e)) for (let t of e.layout) _ = r(t, c, u) || _;
            return !c && (u || _) && i.add(e.key), u || _;
        };
    return r(e), i;
}
