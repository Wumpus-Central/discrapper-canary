n.d(t, {
    A: () => a,
});
var r = n(355418),
    i = n(996483);
class a extends r.c {
    innerPattern(e) {
        return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = t[0].toLowerCase(),
            r = e.createParsingComponents();
        switch (n) {
            case "nu":
                return i.tB(e.reference);
            case "vandaag":
                return i.Ec(e.reference);
            case "morgen":
            case "morgend":
                return i.uf(e.reference);
            case "gisteren":
                return i.jI(e.reference);
        }
        return r;
    }
}
