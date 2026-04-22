r.d(t, { A: () => a });
var n = r(996483),
    s = r(241738);
class a extends s.w {
    innerPatternString(e) {
        return "(?:с|со)?\\s*(сегодня|вчера|завтра|послезавтра|послепослезавтра|позапозавчера|позавчера)";
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            s = e.createParsingComponents();
        switch (r) {
            case "сегодня":
                return n.Ec(e.reference);
            case "вчера":
                return n.jI(e.reference);
            case "завтра":
                return n.uf(e.reference);
            case "послезавтра":
                return n.AV(e.reference, 2);
            case "послепослезавтра":
                return n.AV(e.reference, 3);
            case "позавчера":
                return n.ti(e.reference, 2);
            case "позапозавчера":
                return n.ti(e.reference, 3);
        }
        return s;
    }
}
