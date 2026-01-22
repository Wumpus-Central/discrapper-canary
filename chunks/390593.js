n.d(t, { A: () => s });
var r = n(322811),
    i = n(355418),
    a = n(658809);
class s extends i.c {
    innerPattern() {
        return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            i = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "tarde":
                i.imply("meridiem", r.FF.PM), i.imply("hour", 15);
                break;
            case "noche":
                i.imply("meridiem", r.FF.PM), i.imply("hour", 22);
                break;
            case "mañana":
                i.imply("meridiem", r.FF.AM), i.imply("hour", 6);
                break;
            case "medianoche":
                let s = new Date(n.getTime());
                s.setDate(s.getDate() + 1),
                    (0, a.Pl)(i, s),
                    (0, a.A4)(i, s),
                    i.imply("hour", 0),
                    i.imply("minute", 0),
                    i.imply("second", 0);
                break;
            case "mediodia":
            case "mediodía":
                i.imply("meridiem", r.FF.AM), i.imply("hour", 12);
        }
        return i;
    }
}
