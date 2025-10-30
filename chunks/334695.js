n.d(t, { Z: () => d });
var r = n(53851),
    i = n(800911),
    a = n(727916),
    o = n(334633);
let s = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(${(0, i.q3)(r.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)`,
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
            i = r.LN[n],
            a = t[l],
            s = t[u],
            d = a || s;
        d = (d = d || "").toLowerCase();
        let f = null;
        return (
            "ultima" == d || "scorsa" == d
                ? (f = "ultima")
                : "prossima" == d
                  ? (f = "prossima")
                  : "questa" == d && (f = "questa"),
            (0, o.Rv)(e.reference, i, f)
        );
    }
}
