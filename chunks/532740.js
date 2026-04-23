r.d(t, { A: () => o });
var n = r(322811),
    s = r(355418),
    a = r(658809),
    i = r(996483);
class o extends s.c {
    innerPattern(e) {
        return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            s = t[0].toLowerCase(),
            o = e.createParsingComponents();
        switch (s) {
            case "maintenant":
                return i.tB(e.reference);
            case "aujourd'hui":
                return i.Ec(e.reference);
            case "hier":
                return i.jI(e.reference);
            case "demain":
                return i.uf(e.reference);
            default:
                if (s.match(/cette\s*nuit/)) (0, a.Pl)(o, r), o.imply("hour", 22), o.imply("meridiem", n.FF.PM);
                else if (s.match(/la\s*veille/)) {
                    let e = new Date(r.getTime());
                    e.setDate(e.getDate() - 1), (0, a.Pl)(o, e), o.imply("hour", 0);
                }
        }
        return o;
    }
}
