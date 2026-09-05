Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(574253),
    a = r(474726),
    i = r(474726),
    s = r(474726),
    o = r(798401),
    u = r(389766),
    l = RegExp(
        `(${(0, o.matchAnyPattern)(a.MONTH_DICTIONARY)})(?:-|/|\\s*,?\\s*)(${i.ORDINAL_NUMBER_PATTERN})(?!\\s*(?:am|pm))\\s*(?:(?:al|\\-|\\alle|\\del|\\s)\\s*(${i.ORDINAL_NUMBER_PATTERN})\\s*)?(?:(?:-|/|\\s*,?\\s*)(${s.YEAR_PATTERN}))?(?=\\W|$)(?!\\:\\d)`,
        "i",
    );
class d extends u.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return l;
    }
    innerExtract(e, t) {
        let r = a.MONTH_DICTIONARY[t[1].toLowerCase()],
            o = (0, i.parseOrdinalNumberPattern)(t[2]);
        if (o > 31) return null;
        let u = e.createParsingComponents({ day: o, month: r });
        if (t[4]) {
            let e = (0, s.parseYear)(t[4]);
            u.assign("year", e);
        } else {
            let t = (0, n.findYearClosestToRef)(e.refDate, o, r);
            u.imply("year", t);
        }
        if (!t[3]) return u;
        let l = (0, i.parseOrdinalNumberPattern)(t[3]),
            d = e.createParsingResult(t.index, t[0]);
        return (d.start = u), (d.end = u.clone()), d.end.assign("day", l), d;
    }
}
t.default = d;
