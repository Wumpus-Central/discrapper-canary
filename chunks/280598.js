n.d(t, {
    A: () => a,
});
var r = n(996483),
    i = n(241738);
class a extends i.w {
    innerPatternString(e) {
        return "(?:с|со)?\\s*(сегодня|вчера|завтра|послезавтра|послепослезавтра|позапозавчера|позавчера)";
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "сегодня":
                return r.Ec(e.reference);
            case "вчера":
                return r.jI(e.reference);
            case "завтра":
                return r.uf(e.reference);
            case "послезавтра":
                return r.AV(e.reference, 2);
            case "послепослезавтра":
                return r.AV(e.reference, 3);
            case "позавчера":
                return r.ti(e.reference, 2);
            case "позапозавчера":
                return r.ti(e.reference, 3);
        }
        return i;
    }
}
