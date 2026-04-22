r.d(t, { A: () => l });
var n = r(829143),
    s = r(476858),
    a = r(355418),
    i = r(1673);
let o = RegExp(
    `(?:(?:\\,|\\(|\\（)\\s*)?(?:p\xe5\\s*?)?(?:(f\xf6rra|senaste|n\xe4sta|kommande)\\s*)?(${(0, s.uJ)(n.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(f\xf6rra|senaste|n\xe4sta|kommande)\\s*vecka)?(?=\\W|$)`,
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
            l.match(/förra|senaste/) ? (u = "last") : l.match(/nästa|kommande/) && (u = "next"),
            (0, i.Y5)(e.reference, s, u)
        );
    }
}
