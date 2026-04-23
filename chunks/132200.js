r.d(t, { A: () => a });
var n = r(355418),
    s = r(996483);
class a extends n.c {
    innerPattern(e) {
        return /(ahora|hoy|mañana|ayer)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[0].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "ahora":
                return s.tB(e.reference);
            case "hoy":
                return s.Ec(e.reference);
            case "ma\xf1ana":
                return s.uf(e.reference);
            case "ayer":
                return s.jI(e.reference);
        }
        return n;
    }
}
