n.d(e, { Z: () => s }), n(388685);
var i = n(658722),
    l = n.n(i),
    r = n(481060),
    u = n(28682);
function s(t, e, n) {
    let i = new Set(),
        s = function (t) {
            var a;
            let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                E = (null == (a = t.usePredicate) ? void 0 : a.call(t)) === !1 || o,
                d =
                    (function (t, e, n, i) {
                        var s, a, o, c, E, d;
                        let S = null == (s = t.getLegacySearchKey) ? void 0 : s.call(t);
                        if (null != S) return e.length < 2 || i.has(S);
                        if (t.type === u.Jq.SECTION && t.hoisted) return !0;
                        let T = "useTitle" in t ? (null == (a = t.useTitle) ? void 0 : a.call(t, !1)) : void 0,
                            O =
                                "useNavigationTitle" in t
                                    ? null == (o = t.useNavigationTitle)
                                        ? void 0
                                        : o.call(t)
                                    : void 0,
                            g = "useSearchTerms" in t ? (null == (c = t.useSearchTerms) ? void 0 : c.call(t)) : void 0;
                        if (n || (null == T && null == O && null == g)) return !1;
                        if ("" === e) return !0;
                        let I = e.toLowerCase();
                        for (let t of null != g ? g : []) if (l()(I, t.toLowerCase())) return !0;
                        let _ = !1;
                        if (null != T) {
                            let t = null == (E = (0, r.qgQ)(T)) ? void 0 : E.toLowerCase();
                            null != t && (_ = l()(I, t));
                        }
                        if (null != O && !_) {
                            let t = null == (d = (0, r.qgQ)(O)) ? void 0 : d.toLowerCase();
                            null != t && (_ = l()(I, t));
                        }
                        return _;
                    })(t, e, E, n) || c,
                S = !1;
            if ((0, u.Lk)(t)) for (let e of t.layout) S = s(e, E, d) || S;
            return !E && (d || S) && i.add(t.key), d || S;
        };
    return s(t), i;
}
