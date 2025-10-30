n.d(t, { Z: () => a });
var r = n(727916),
    i = n(715870);
class a extends r.Z {
    innerPattern(e) {
        return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = t[0].toLowerCase(),
            r = e.createParsingComponents();
        switch (n) {
            case "nu":
                return i.zO(e.reference);
            case "vandaag":
                return i.Lg(e.reference);
            case "morgen":
            case "morgend":
                return i.Ro(e.reference);
            case "gisteren":
                return i.Cv(e.reference);
        }
        return r;
    }
}
