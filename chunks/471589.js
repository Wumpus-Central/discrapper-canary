r.d(t, { A: () => i });
var n = r(322811),
    s = r(355418),
    a = r(881190);
class i extends s.c {
    innerPattern() {
        return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            s = e.createParsingComponents();
        switch (
            ("deze" === t[1] &&
                (s.assign("day", e.refDate.getDate()),
                s.assign("month", e.refDate.getMonth() + 1),
                s.assign("year", e.refDate.getFullYear())),
            t[2].toLowerCase())
        ) {
            case "namiddag":
            case "'s namiddags":
                s.imply("meridiem", n.FF.PM), s.imply("hour", 15);
                break;
            case "avond":
            case "'s avonds'":
                s.imply("meridiem", n.FF.PM), s.imply("hour", 20);
                break;
            case "middernacht":
                let i = new Date(r.getTime());
                i.setDate(i.getDate() + 1),
                    (0, a.Pl)(s, i),
                    (0, a.A4)(s, i),
                    s.imply("hour", 0),
                    s.imply("minute", 0),
                    s.imply("second", 0);
                break;
            case "ochtend":
            case "'s ochtends":
                s.imply("meridiem", n.FF.AM), s.imply("hour", 6);
                break;
            case "middag":
            case "'s middags":
                s.imply("meridiem", n.FF.AM), s.imply("hour", 12);
        }
        return s;
    }
}
