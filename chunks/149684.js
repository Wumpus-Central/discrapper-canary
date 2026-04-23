r.d(t, { A: () => a });
var n = r(355418),
    s = r(996483);
class a extends n.c {
    innerPattern(e) {
        return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[0].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "agora":
                return s.tB(e.reference);
            case "hoje":
                return s.Ec(e.reference);
            case "amanha":
            case "amanh\xe3":
                return s.uf(e.reference);
            case "ontem":
                return s.jI(e.reference);
        }
        return n;
    }
}
