"use strict";
n.d(t, { A: () => d });
var r = n(998493),
    i = n(476858),
    a = n(355418),
    s = n(1673);
let o = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\xe4|ae)chste[mn])\\s*)?(${(0, i.uJ)(r.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:\xe4|ae)chste)\\s*woche)?(?=\\W|$)`,
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
            d.match(/letzte/) ? (_ = "last") : d.match(/chste/) ? (_ = "next") : d.match(/diese/) && (_ = "this"),
            (0, s.Y5)(e.reference, i, _)
        );
    }
}
