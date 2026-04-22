r.d(t, { A: () => l });
var n = r(998493),
    s = r(476858),
    a = r(355418),
    i = r(1673);
let o = RegExp(
    `(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\xe4|ae)chste[mn])\\s*)?(${(0, s.uJ)(n.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:\xe4|ae)chste)\\s*woche)?(?=\\W|$)`,
    "i",
);
class l extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            s = n.CV[r],
            a = t[1],
            o = t[3],
            l = a || o;
        l = (l = l || "").toLowerCase();
        let u = null;
        return (
            l.match(/letzte/) ? (u = "last") : l.match(/chste/) ? (u = "next") : l.match(/diese/) && (u = "this"),
            (0, i.Y5)(e.reference, s, u)
        );
    }
}
