n.d(t, { Z: () => d });
var r = n(773567),
    i = n(800911),
    a = n(727916),
    o = n(334633);
let s = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:(este|esta|pasado|pr[o\xf3]ximo)\\s*)?(${(0, i.q3)(r.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(este|esta|pasado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3;
class d extends a.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[c].toLowerCase(),
            i = r.LN[n];
        if (void 0 === i) return null;
        let a = t[l],
            s = t[u],
            d = a || s || "";
        d = d.toLowerCase();
        let f = null;
        return (
            "pasado" == d
                ? (f = "this")
                : "próximo" == d || "proximo" == d
                  ? (f = "next")
                  : "este" == d && (f = "this"),
            (0, o.Rv)(e.reference, i, f)
        );
    }
}
