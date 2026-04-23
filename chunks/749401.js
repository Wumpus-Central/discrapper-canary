"use strict";
n.d(t, { a: () => l });
var r = n(64700),
    i = n(310784),
    s = n.n(i),
    a = n(417597),
    o = n(775602);
function l(e) {
    let t = (0, a.bG)([o.A], () => o.A.saturation);
    return r.useMemo(() => {
        if (null == e) return null;
        if ("currentColor" === e || e.startsWith("var(")) return e;
        let n = s()(e);
        return n.set("hsl.s", n.get("hsl.s") * t).hex();
    }, [e, t]);
}
