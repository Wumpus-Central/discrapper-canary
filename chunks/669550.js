n.d(t, { Ay: () => g, KA: () => c, jL: () => u });
var i = n(64700),
    s = n(839214),
    l = n(419954),
    a = n(236077),
    r = n(478686),
    o = n(124059);
let d = (0, s.D)(() => ({ enabled: !1 }));
function u(e) {
    d.setState({ enabled: e });
}
function c() {
    return d.useField("enabled");
}
function g(e, t) {
    let n = i.useMemo(() => (0, l.hl)(e), [e]),
        s = m(n, t ?? ""),
        o = m(n, "");
    return i.useMemo(() => {
        let e = new a.A(),
            t = new a.A();
        return (
            (0, r.A)(n, o, t),
            { node: (0, r.A)(n, s, e) ?? { ...n, layout: [] }, visibleDirectory: e, accessibleDirectory: t }
        );
    }, [s, o, n]);
}
function m(e, t) {
    let n = c(),
        s = (0, o.A)(e, t, n),
        [l, a] = i.useState(s),
        r = (function (e, t) {
            if (e.size !== t.size) return !0;
            for (let n of e) if (!t.has(n)) return !0;
            return !1;
        })(l, s);
    return (
        i.useEffect(() => {
            r && a(s);
        }, [r, s]),
        l
    );
}
