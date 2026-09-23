Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(793277),
    a = r(798401),
    i = r(167385),
    s = r(855616),
    o = RegExp(
        `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(${(0, a.matchAnyPattern)(n.WEEKDAY_DICTIONARY)})(?=\\W|$)`,
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
            "vorige" == u ? (l = "last") : "volgende" == u ? (l = "next") : "deze" == u && (l = "this"),
            (0, s.createParsingComponentsAtWeekday)(e.reference, a, l)
        );
    }
}
t.default = u;
