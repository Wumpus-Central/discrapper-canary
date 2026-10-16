Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(687204),
    a = r(798401),
    i = r(167385),
    s = r(855616),
    o = RegExp(
        `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\xe4|ae)chste[mn])\\s*)?(${(0, a.matchAnyPattern)(n.WEEKDAY_DICTIONARY)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(diese|letzte|n(?:\xe4|ae)chste)\\s*woche)?(?=\\W|$)`,
        "i",
    );
class u extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            a = n.WEEKDAY_DICTIONARY[r],
            i = t[1],
            o = t[3],
            u = i || o;
        u = (u = u || "").toLowerCase();
        let l = null;
        return (
            u.match(/letzte/) ? (l = "last") : u.match(/chste/) ? (l = "next") : u.match(/diese/) && (l = "this"),
            (0, s.createParsingComponentsAtWeekday)(e.reference, a, l)
        );
    }
}
t.default = u;
