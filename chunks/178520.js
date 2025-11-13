n.d(e, { Z: () => s }), n(388685);
var i = n(658722),
    l = n.n(i),
    u = n(481060),
    r = n(28682);
function s(t, e, n) {
    let i = new Set(),
        s = function (t) {
            var a;
            let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                E = (null == (a = t.usePredicate) ? void 0 : a.call(t)) === !1 || o,
                S =
                    (function (t, e, n, i) {
                        var s, a, o, c, E, S;
                        let d = null == (s = t.getLegacySearchKey) ? void 0 : s.call(t);
                        if (null != d) return e.length < 2 || i.has(d);
                        if (t.type === r.Jq.SECTION && t.hoisted) return !0;
                        let T = "useTitle" in t ? (null == (a = t.useTitle) ? void 0 : a.call(t, !1)) : void 0,
                            I =
                                "useNavigationTitle" in t
                                    ? null == (o = t.useNavigationTitle)
                                        ? void 0
                                        : o.call(t)
                                    : void 0,
                            O = "useSearchTerms" in t ? (null == (c = t.useSearchTerms) ? void 0 : c.call(t)) : void 0;
                        if (n || (null == T && null == I && null == O)) return !1;
                        if ("" === e) return !0;
                        let g = e.toLowerCase();
                        for (let t of null != O ? O : []) if (l()(g, t.toLowerCase())) return !0;
                        let _ = !1;
                        if (null != T) {
                            let t = null == (E = (0, u.qgQ)(T)) ? void 0 : E.toLowerCase();
                            null != t && (_ = l()(g, t));
                        }
                        if (null != I && !_) {
                            let t = null == (S = (0, u.qgQ)(I)) ? void 0 : S.toLowerCase();
                            null != t && (_ = l()(g, t));
                        }
                        return _;
                    })(t, e, E, n) || c,
                d = !1;
            if ((0, r.Lk)(t)) for (let e of t.layout) d = s(e, E, S) || d;
            return !E && (S || d) && i.add(t.key), S || d;
        };
    return s(t), i;
}
