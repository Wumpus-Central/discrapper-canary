n.d(t, {
    A: () => d,
});
var r = n(298362),
    i = n(476858),
    a = n(355418),
    s = n(1673);
let o = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:(este|esta|pasado|pr[o\xf3]ximo)\\s*)?(${(0, i.uJ)(r.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(este|esta|pasado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3;
class d extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[c].toLowerCase(),
            i = r.CV[n];
        if (void 0 === i) return null;
        let a = t[l],
            o = t[u],
            d = a || o || "";
        d = d.toLowerCase();
        let f = null;
        return (
            "pasado" == d
                ? (f = "this")
                : "pr\xf3ximo" == d || "proximo" == d
                  ? (f = "next")
                  : "este" == d && (f = "this"),
            (0, s.Y5)(e.reference, i, f)
        );
    }
}
