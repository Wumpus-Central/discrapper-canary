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
    c = 3,
    u = 2;
class d extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[u].toLowerCase(),
            i = r.CV[n],
            a = t[l],
            o = t[c],
            d = a || o;
        d = (d = d || "").toLowerCase();
        let f = null;
        return (
            d.match(/letzte/) ? (f = "last") : d.match(/chste/) ? (f = "next") : d.match(/diese/) && (f = "this"),
            (0, s.Y5)(e.reference, i, f)
        );
    }
}
