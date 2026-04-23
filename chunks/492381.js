r.d(t, { A: () => l });
var n = r(683958),
    s = r(476858),
    a = r(355418),
    i = r(1673);
let o = RegExp(
    `(?:(?:\\,|\\(|\\（)\\s*)?(?:(este|esta|passado|pr[o\xf3]ximo)\\s*)?(${(0, s.uJ)(n.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(este|esta|passado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`,
    "i",
);
class l extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            s = n.CV[r];
        if (void 0 === s) return null;
        let a = t[1],
            o = t[3],
            l = a || o || "";
        l = l.toLowerCase();
        let u = null;
        return (
            "passado" == l
                ? (u = "this")
                : "pr\xf3ximo" == l || "proximo" == l
                  ? (u = "next")
                  : "este" == l && (u = "this"),
            (0, i.Y5)(e.reference, s, u)
        );
    }
}
