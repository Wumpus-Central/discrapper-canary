n.d(t, { Ay: () => A, KA: () => m, jL: () => _ });
var i = n(64700),
    s = n(839214),
    r = n(360619),
    a = n(987281),
    l = n(419954),
    o = n(236077),
    c = n(478686),
    d = n(124059);
let u = (0, s.D)(() => ({ enabled: !1 }));
function _(e) {
    u.setState({ enabled: e });
}
function m() {
    return u.useField("enabled");
}
function A(e, t) {
    let n = i.useMemo(() => (0, l.hl)(e), [e]),
        s = (0, r.PH)(),
        { searchResults: d } = (0, a.V)(),
        u = new Set();
    for (let e of d) {
        let t = e;
        for (; null != t; ) {
            let e = s[t]?.parent;
            if (null == e) {
                u.add(t);
                break;
            }
            t = e;
        }
    }
    let _ = g(n, t ?? "", u),
        m = g(n, "", u);
    return i.useMemo(() => {
        let e = new o.A(),
            t = new o.A();
        return (
            (0, c.A)(n, m, t),
            { node: (0, c.A)(n, _, e) ?? { ...n, layout: [] }, visibleDirectory: e, accessibleDirectory: t }
        );
    }, [_, m, n]);
}
function g(e, t, n) {
    let s = m(),
        r = (0, d.A)(e, t, { legacyMatches: n, bypassPredicates: s }),
        [a, l] = i.useState(r),
        o = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e) if (!t.has(n)) return !0;
            return !1;
        })(a, r);
    return (
        i.useEffect(() => {
            o && l(r);
        }, [o, r]),
        a
    );
}
