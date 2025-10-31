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
                d = (null == (a = t.usePredicate) ? void 0 : a.call(t)) === !1 || o,
                E =
                    (function (t, e, n, i) {
                        var s, a, o, c, d;
                        if (null != t.legacySearchKey) return e.length < 2 || i.has(t.legacySearchKey);
                        if (t.type === u.Jq.SECTION && t.hoisted) return !0;
                        let E = "useTitle" in t ? (null == (s = t.useTitle) ? void 0 : s.call(t, !1)) : void 0,
                            O =
                                "useNavigationTitle" in t
                                    ? null == (a = t.useNavigationTitle)
                                        ? void 0
                                        : a.call(t)
                                    : void 0,
                            T = "useSearchTerms" in t ? (null == (o = t.useSearchTerms) ? void 0 : o.call(t)) : void 0;
                        if (n || (null == E && null == O && null == T)) return !1;
                        if ("" === e) return !0;
                        let S = e.toLowerCase();
                        for (let t of null != T ? T : []) if (l()(S, t.toLowerCase())) return !0;
                        let g = !1;
                        if (null != E) {
                            let t = null == (c = (0, r.qgQ)(E)) ? void 0 : c.toLowerCase();
                            null != t && (g = l()(S, t));
                        }
                        if (null != O && !g) {
                            let t = null == (d = (0, r.qgQ)(O)) ? void 0 : d.toLowerCase();
                            null != t && (g = l()(S, t));
                        }
                        return g;
                    })(t, e, d, n) || c,
                O = !1;
            if ((0, u.Lk)(t)) for (let e of t.layout) O = s(e, d, E) || O;
            return !d && (E || O) && i.add(t.key), E || O;
        };
    return s(t), i;
}
