"use strict";
n.d(t, { A: () => d });
var r = n(829143),
    i = n(476858),
    a = n(355418),
    s = n(1673);
let o = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:p\xe5\\s*?)?(?:(f\xf6rra|senaste|n\xe4sta|kommande)\\s*)?(${(0, i.uJ)(r.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(f\xf6rra|senaste|n\xe4sta|kommande)\\s*vecka)?(?=\\W|$)`,
        "i",
    ),
    l = 1,
    u = 3,
    c = 2;
class d extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[c].toLowerCase(),
            i = r.CV[n],
            a = t[l],
            o = t[u],
            d = a || o;
        d = (d = d || "").toLowerCase();
        let _ = null;
        return (
            d.match(/förra|senaste/) ? (_ = "last") : d.match(/nästa|kommande/) && (_ = "next"),
            (0, s.Y5)(e.reference, i, _)
        );
    }
}
