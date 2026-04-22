r.d(t, { A: () => a });
var n = r(996483),
    s = r(972409);
class a extends s.w {
    innerPatternString(e) {
        return "(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)";
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            s = e.createParsingComponents();
        switch (r) {
            case "сьогодні":
                return n.Ec(e.reference);
            case "вчора":
                return n.jI(e.reference);
            case "завтра":
                return n.uf(e.reference);
            case "післязавтра":
                return n.AV(e.reference, 2);
            case "післяпіслязавтра":
                return n.AV(e.reference, 3);
            case "позавчора":
                return n.ti(e.reference, 2);
            case "позапозавчора":
                return n.ti(e.reference, 3);
        }
        return s;
    }
}
