Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(574253),
    a = r(793277),
    i = r(793277),
    s = r(793277),
    o = r(798401),
    u = r(167385),
    l = RegExp(
        `(?:on\\s*?)?(${i.ORDINAL_NUMBER_PATTERN})(?:\\s*(?:tot|\\-|\\\u{2013}|until|through|till|\\s)\\s*(${i.ORDINAL_NUMBER_PATTERN}))?(?:-|/|\\s*(?:of)?\\s*)(` +
            (0, o.matchAnyPattern)(a.MONTH_DICTIONARY) +
            ")(?:(?:-|/|,?\\s*)" +
            `(${s.YEAR_PATTERN}(?![^\\s]\\d))` +
            ")?(?=\\W|$)",
        "i",
    );
class d extends u.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return l;
    }
    innerExtract(e, t) {
        let r = a.MONTH_DICTIONARY[t[3].toLowerCase()],
            o = (0, i.parseOrdinalNumberPattern)(t[1]);
        if (o > 31) return (t.index = t.index + t[1].length), null;
        let u = e.createParsingComponents({ day: o, month: r });
        if (t[4]) {
            let e = (0, s.parseYear)(t[4]);
            u.assign("year", e);
        } else {
            let t = (0, n.findYearClosestToRef)(e.refDate, o, r);
            u.imply("year", t);
        }
        if (!t[2]) return u;
        let l = (0, i.parseOrdinalNumberPattern)(t[2]),
            d = e.createParsingResult(t.index, t[0]);
        return (d.start = u), (d.end = u.clone()), d.end.assign("day", l), d;
    }
}
t.default = d;
