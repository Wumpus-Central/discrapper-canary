Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(574253),
    a = r(579782),
    i = r(579782),
    s = r(579782),
    o = r(798401),
    u = r(414533);
class l extends u.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return `(?:\u{441})?\\s*(${s.ORDINAL_NUMBER_PATTERN})(?:\\s{0,3}(?:\u{43F}\u{43E}|-|\u{2013}|\u{434}\u{43E})?\\s{0,3}(${s.ORDINAL_NUMBER_PATTERN}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0, o.matchAnyPattern)(a.MONTH_DICTIONARY)})(?:(?:-|\\/|,?\\s{0,3})(${i.YEAR_PATTERN}(?![^\\s]\\d)))?`;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            o = a.MONTH_DICTIONARY[t[3].toLowerCase()],
            u = (0, s.parseOrdinalNumberPattern)(t[1]);
        if (u > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", o), r.start.assign("day", u), t[4])) {
            let e = (0, i.parseYear)(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, n.findYearClosestToRef)(e.refDate, u, o);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = (0, s.parseOrdinalNumberPattern)(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
t.default = l;
