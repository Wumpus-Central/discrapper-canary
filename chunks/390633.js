n.d(t, { Z: () => a });
var r = n(727916),
    i = n(715870);
class a extends r.Z {
    innerPattern(e) {
        return /(ahora|hoy|mañana|ayer)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = t[0].toLowerCase(),
            r = e.createParsingComponents();
        switch (n) {
            case "ahora":
                return i.zO(e.reference);
            case "hoy":
                return i.Lg(e.reference);
            case "mañana":
                return i.Ro(e.reference);
            case "ayer":
                return i.Cv(e.reference);
        }
        return r;
    }
}
