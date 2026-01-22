n.d(t, {
    A: () => a,
});
var r = n(996483),
    i = n(972409);
class a extends i.w {
    innerPatternString(e) {
        return "(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)";
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            i = e.createParsingComponents();
        switch (n) {
            case "сьогодні":
                return r.Ec(e.reference);
            case "вчора":
                return r.jI(e.reference);
            case "завтра":
                return r.uf(e.reference);
            case "післязавтра":
                return r.AV(e.reference, 2);
            case "післяпіслязавтра":
                return r.AV(e.reference, 3);
            case "позавчора":
                return r.ti(e.reference, 2);
            case "позапозавчора":
                return r.ti(e.reference, 3);
        }
        return i;
    }
}
