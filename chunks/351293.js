n.d(t, { Z: () => o });
var r = n(894186),
    i = n(727916),
    a = n(424046);
class o extends i.Z {
    innerPattern() {
        return /(?:esta\s*)?(manha|manhã|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            i = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "tarde":
                i.imply("meridiem", r.GG.PM), i.imply("hour", 15);
                break;
            case "noite":
                i.imply("meridiem", r.GG.PM), i.imply("hour", 22);
                break;
            case "manha":
            case "manhã":
                i.imply("meridiem", r.GG.AM), i.imply("hour", 6);
                break;
            case "meia-noite":
                let o = new Date(n.getTime());
                o.setDate(o.getDate() + 1),
                    (0, a.cz)(i, o),
                    (0, a.hO)(i, o),
                    i.imply("hour", 0),
                    i.imply("minute", 0),
                    i.imply("second", 0);
                break;
            case "meio-dia":
                i.imply("meridiem", r.GG.AM), i.imply("hour", 12);
        }
        return i;
    }
}
