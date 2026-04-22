r.d(t, { A: () => l });
var n = r(528352),
    s = r(476858),
    a = r(355418),
    i = r(1673);
let o = RegExp(
    `(?:(?:\\,|\\(|\\（)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(${(0, s.uJ)(n.CV)})(?=\\W|$)`,
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
            "vorige" == l ? (u = "last") : "volgende" == l ? (u = "next") : "deze" == l && (u = "this"),
            (0, i.Y5)(e.reference, s, u)
        );
    }
}
