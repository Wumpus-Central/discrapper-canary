Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(793277),
    a = r(574253),
    i = r(798401),
    s = r(793277),
    o = r(389766),
    u = RegExp(
        `(${(0, i.matchAnyPattern)(n.MONTH_DICTIONARY)})\\s*(?:[,-]?\\s*(${s.YEAR_PATTERN})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`,
        "i",
    );
class l extends o.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return u;
    }
    innerExtract(e, t) {
        let r = e.createParsingComponents();
        r.imply("day", 1);
        let i = t[1],
            o = n.MONTH_DICTIONARY[i.toLowerCase()];
        if ((r.assign("month", o), t[2])) {
            let e = (0, s.parseYear)(t[2]);
            r.assign("year", e);
        } else {
            let t = (0, a.findYearClosestToRef)(e.refDate, 1, o);
            r.imply("year", t);
        }
        return r;
    }
}
t.default = l;
