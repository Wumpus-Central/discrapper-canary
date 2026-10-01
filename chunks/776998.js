Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(474726),
    a = r(798401),
    i = r(167385),
    s = r(855616),
    o = RegExp(
        `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(${(0, a.matchAnyPattern)(n.WEEKDAY_DICTIONARY)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)`,
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
            "ultima" == u || "scorsa" == u
                ? (l = "ultima")
                : "prossima" == u
                  ? (l = "prossima")
                  : "questa" == u && (l = "questa"),
            (0, s.createParsingComponentsAtWeekday)(e.reference, a, l)
        );
    }
}
t.default = u;
