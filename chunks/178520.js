n.d(e, { Z: () => s }), n(388685);
var i = n(658722),
    l = n.n(i),
    u = n(481060),
    r = n(28682);
function s(t, e, n) {
    let i = new Set(),
        s = function (t) {
            var o;
            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                E = (null == (o = t.usePredicate) ? void 0 : o.call(t)) === !1 || a,
                d =
                    (function (t, e, n, i) {
                        var s, o, a, c, E;
                        if (null != t.legacySearchKey) return e.length < 2 || i.has(t.legacySearchKey);
                        if (t.type === r.Jq.SECTION && t.hoisted) return !0;
                        let d = "useTitle" in t ? (null == (s = t.useTitle) ? void 0 : s.call(t, !1)) : void 0,
                            T =
                                "useNavigationTitle" in t
                                    ? null == (o = t.useNavigationTitle)
                                        ? void 0
                                        : o.call(t)
                                    : void 0,
                            I = "useSearchTerms" in t ? (null == (a = t.useSearchTerms) ? void 0 : a.call(t)) : void 0;
                        if (n || (null == d && null == T && null == I)) return !1;
                        if ("" === e) return !0;
                        let O = e.toLowerCase();
                        for (let t of null != I ? I : []) if (l()(O, t.toLowerCase())) return !0;
                        let y = !1;
                        if (null != d) {
                            let t = null == (c = (0, u.qgQ)(d)) ? void 0 : c.toLowerCase();
                            null != t && (y = l()(O, t));
                        }
                        if (null != T && !y) {
                            let t = null == (E = (0, u.qgQ)(T)) ? void 0 : E.toLowerCase();
                            null != t && (y = l()(O, t));
                        }
                        return y;
                    })(t, e, E, n) || c,
                T = !1;
            if ((0, r.Lk)(t)) for (let e of t.layout) T = s(e, E, d) || T;
            return !E && (d || T) && i.add(t.key), d || T;
        };
    return s(t), i;
}
