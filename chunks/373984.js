Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(722279),
    a = r(798401),
    i = r(167385),
    s = r(855616),
    o = RegExp(
        `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:(?:ce)\\s*)?(${(0, a.matchAnyPattern)(n.WEEKDAY_DICTIONARY)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)`,
        "i",
    );
class u extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            a = n.WEEKDAY_DICTIONARY[r];
        if (void 0 === a) return null;
        let i = t[2];
        i = (i = i || "").toLowerCase();
        let o = null;
        return (
            "dernier" == i ? (o = "last") : "prochain" == i && (o = "next"),
            (0, s.createParsingComponentsAtWeekday)(e.reference, a, o)
        );
    }
}
t.default = u;
