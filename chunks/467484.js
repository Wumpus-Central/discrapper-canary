n.d(t, { Z: () => s });
var r = n(894186),
    i = n(727916),
    a = n(424046);
let o = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class s extends i.Z {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            i = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "pomeriggio":
                i.imply("meridiem", r.GG.PM), i.imply("hour", 15);
                break;
            case "sera":
            case "notte":
                i.imply("meridiem", r.GG.PM), i.imply("hour", 20);
                break;
            case "mezzanotte":
                let o = new Date(n.getTime());
                o.setDate(o.getDate() + 1),
                    (0, a.cz)(i, o),
                    (0, a.hO)(i, o),
                    i.imply("hour", 0),
                    i.imply("minute", 0),
                    i.imply("second", 0);
                break;
            case "mattina":
                i.imply("meridiem", r.GG.AM), i.imply("hour", 6);
                break;
            case "mezzogiorno":
                i.imply("meridiem", r.GG.AM), i.imply("hour", 12);
        }
        return i;
    }
}
