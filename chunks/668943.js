n.d(t, { Z: () => a });
var r = n(727916),
    i = n(715870);
class a extends r.Z {
    innerPattern(e) {
        return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = t[0].toLowerCase(),
            r = e.createParsingComponents();
        switch (n) {
            case "agora":
                return i.zO(e.reference);
            case "hoje":
                return i.Lg(e.reference);
            case "amanha":
            case "amanhã":
                return i.Ro(e.reference);
            case "ontem":
                return i.Cv(e.reference);
        }
        return r;
    }
}
