n.d(t, { Z: () => d });
var r = n(781308),
    i = n(800911),
    a = n(727916),
    o = n(334633);
let s = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:p\xe5\\s*?)?(?:(f\xf6rra|senaste|n\xe4sta|kommande)\\s*)?(${(0, i.q3)(r.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(f\xf6rra|senaste|n\xe4sta|kommande)\\s*vecka)?(?=\\W|$)`,
        "i",
    ),
    l = 1,
    c = 3,
    u = 2;
class d extends a.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[u].toLowerCase(),
            i = r.LN[n],
            a = t[l],
            s = t[c],
            d = a || s;
        d = (d = d || "").toLowerCase();
        let f = null;
        return (
            d.match(/förra|senaste/) ? (f = "last") : d.match(/nästa|kommande/) && (f = "next"),
            (0, o.Rv)(e.reference, i, f)
        );
    }
}
