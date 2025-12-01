n.d(t, { K: () => l });
var r = n(473749),
    i = n(688619),
    a = n.n(i),
    o = n(399606),
    s = n(607070);
function l(e) {
    let t = (0, o.e7)([s.Z], () => s.Z.saturation);
    return r.useMemo(() => {
        if (null == e) return null;
        if ("currentColor" === e || e.startsWith("var(")) return e;
        let n = a()(e);
        return n.set("hsl.s", n.get("hsl.s") * t).hex();
    }, [e, t]);
}
