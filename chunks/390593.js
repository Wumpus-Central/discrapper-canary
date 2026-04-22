r.d(t, { A: () => i });
var n = r(322811),
    s = r(355418),
    a = r(881190);
class i extends s.c {
    innerPattern() {
        return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            s = e.createParsingComponents();
        switch (t[1].toLowerCase()) {
            case "tarde":
                s.imply("meridiem", n.FF.PM), s.imply("hour", 15);
                break;
            case "noche":
                s.imply("meridiem", n.FF.PM), s.imply("hour", 22);
                break;
            case "ma\xf1ana":
                s.imply("meridiem", n.FF.AM), s.imply("hour", 6);
                break;
            case "medianoche":
                let i = new Date(r.getTime());
                i.setDate(i.getDate() + 1),
                    (0, a.Pl)(s, i),
                    (0, a.A4)(s, i),
                    s.imply("hour", 0),
                    s.imply("minute", 0),
                    s.imply("second", 0);
                break;
            case "mediodia":
            case "mediod\xeda":
                s.imply("meridiem", n.FF.AM), s.imply("hour", 12);
        }
        return s;
    }
}
