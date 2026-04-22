r.d(t, { A: () => o });
var n = r(322811),
    s = r(355418),
    a = r(881190);
let i = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class o extends s.c {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            s = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "pomeriggio":
                s.imply("meridiem", n.FF.PM), s.imply("hour", 15);
                break;
            case "sera":
            case "notte":
                s.imply("meridiem", n.FF.PM), s.imply("hour", 20);
                break;
            case "mezzanotte":
                let i = new Date(r.getTime());
                i.setDate(i.getDate() + 1),
                    (0, a.Pl)(s, i),
                    (0, a.A4)(s, i),
                    s.imply("hour", 0),
                    s.imply("minute", 0),
                    s.imply("second", 0);
                break;
            case "mattina":
                s.imply("meridiem", n.FF.AM), s.imply("hour", 6);
                break;
            case "mezzogiorno":
                s.imply("meridiem", n.FF.AM), s.imply("hour", 12);
        }
        return s;
    }
}
