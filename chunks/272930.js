Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(574253),
    a = r(687204),
    i = r(687204),
    s = r(798401),
    o = r(389766),
    u = RegExp(
        `(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\\u{2013}|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${(0, s.matchAnyPattern)(a.MONTH_DICTIONARY)})(?:(?:-|/|,?\\s*)(${i.YEAR_PATTERN}(?![^\\s]\\d)))?(?=\\W|$)`,
        "i",
    );
class l extends o.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return u;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            s = a.MONTH_DICTIONARY[t[3].toLowerCase()],
            o = parseInt(t[1]);
        if (o > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", s), r.start.assign("day", o), t[4])) {
            let e = (0, i.parseYear)(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, n.findYearClosestToRef)(e.refDate, o, s);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = parseInt(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
t.default = l;
