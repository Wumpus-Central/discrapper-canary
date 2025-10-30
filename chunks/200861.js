n.d(t, { Z: () => d });
var r = n(894209),
    i = n(800911),
    a = n(727916),
    o = n(334633);
let s = RegExp(
        `(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\xe4|ae)chste[mn])\\s*)?(${(0, i.q3)(r.LN)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:\xe4|ae)chste)\\s*woche)?(?=\\W|$)`,
        "i",
    ),
    l = 1,
    c = 3,
    u = 2;
class d extends a.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[u].toLowerCase(),
            i = r.LN[n],
            a = t[l],
            s = t[c],
            d = a || s;
        d = (d = d || "").toLowerCase();
        let f = null;
        return (
            d.match(/letzte/) ? (f = "last") : d.match(/chste/) ? (f = "next") : d.match(/diese/) && (f = "this"),
            (0, o.Rv)(e.reference, i, f)
        );
    }
}
