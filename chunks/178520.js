n.d(e, { Z: () => s }), n(388685);
var i = n(658722),
    r = n.n(i),
    l = n(481060),
    u = n(28682);
function s(t, e, n) {
    let i = new Set(),
        s = function (t) {
            var a;
            let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                d = (null == (a = t.usePredicate) ? void 0 : a.call(t)) === !1 || o,
                E =
                    (function (t, e, n, i) {
                        var s, a, o, c, d, E;
                        let S = null == (s = t.getLegacySearchKey) ? void 0 : s.call(t);
                        if (null != S) return e.length < 2 || i.has(S);
                        if (t.type === u.Jq.SECTION && t.hoisted) return !0;
                        let T = "useTitle" in t ? (null == (a = t.useTitle) ? void 0 : a.call(t, !1)) : void 0,
                            I =
                                "useNavigationTitle" in t
                                    ? null == (o = t.useNavigationTitle)
                                        ? void 0
                                        : o.call(t)
                                    : void 0,
                            g = "useSearchTerms" in t ? (null == (c = t.useSearchTerms) ? void 0 : c.call(t)) : void 0;
                        if (n || (null == T && null == I && null == g)) return !1;
                        if ("" === e) return !0;
                        let O = e.toLowerCase();
                        for (let t of null != g ? g : []) if (r()(O, t.toLowerCase())) return !0;
                        let _ = !1;
                        if (null != T) {
                            let t = null == (d = (0, l.qgQ)(T)) ? void 0 : d.toLowerCase();
                            null != t && (_ = r()(O, t));
                        }
                        if (null != I && !_) {
                            let t = null == (E = (0, l.qgQ)(I)) ? void 0 : E.toLowerCase();
                            null != t && (_ = r()(O, t));
                        }
                        return _;
                    })(t, e, d, n) || c,
                S = !1;
            if ((0, u.Lk)(t)) for (let e of t.layout) S = s(e, d, E) || S;
            return !d && (E || S) && i.add(t.key), E || S;
        };
    return s(t), i;
}
