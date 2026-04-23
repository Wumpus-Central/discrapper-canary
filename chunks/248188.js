r.d(t, { A: () => a });
var n = r(355418),
    s = r(996483);
class a extends n.c {
    innerPattern(e) {
        return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[0].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "nu":
                return s.tB(e.reference);
            case "vandaag":
                return s.Ec(e.reference);
            case "morgen":
            case "morgend":
                return s.uf(e.reference);
            case "gisteren":
                return s.jI(e.reference);
        }
        return n;
    }
}
