n.d(t, { Z: () => u }), n(388685);
var i = n(658722),
    r = n.n(i),
    l = n(28682);
function u(e, t, n) {
    let i = new Set(),
        u = function (e) {
            var s;
            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                c = (null == (s = e.usePredicate) ? void 0 : s.call(e)) === !1 || a,
                d =
                    (function (e, t, n, i) {
                        var u, s;
                        if (null != e.legacySearchKey) return t.length < 2 || i.has(e.legacySearchKey);
                        if (e.type === l.Jq.SECTION && e.hoisted) return !0;
                        let a = "useTitle" in e ? (null == (u = e.useTitle) ? void 0 : u.call(e, !1)) : void 0,
                            o = "useSearchTerms" in e ? (null == (s = e.useSearchTerms) ? void 0 : s.call(e)) : void 0;
                        if (n || (null == a && null == o)) return !1;
                        if ("" === t) return !0;
                        let c = t.toLowerCase();
                        for (let e of null != o ? o : []) if (r()(c, e.toLowerCase())) return !0;
                        return "string" == typeof a && r()(c, a.toLowerCase());
                    })(e, t, c, n) || o,
                E = !1;
            if ((0, l.Lk)(e)) for (let t of e.layout) E = u(t, c, d) || E;
            return !c && (d || E) && i.add(e.key), d || E;
        };
    return u(e), i;
}
