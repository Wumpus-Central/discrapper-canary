Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(176891),
    a = r(798401),
    i = r(389766),
    s = r(855616),
    o = RegExp(
        `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:(este|esta|passado|pr[o\xf3]ximo)\\s*)?(${(0, a.matchAnyPattern)(n.WEEKDAY_DICTIONARY)})(?:\\s*(?:\\,|\\)|\\\u{FF09}))?(?:\\s*(este|esta|passado|pr[\xf3o]ximo)\\s*semana)?(?=\\W|\\d|$)`,
        "i",
    );
class u extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            a = n.WEEKDAY_DICTIONARY[r];
        if (void 0 === a) return null;
        let i = t[1],
            o = t[3],
            u = i || o || "";
        u = u.toLowerCase();
        let l = null;
        return (
            "passado" == u
                ? (l = "this")
                : "pr\xf3ximo" == u || "proximo" == u
                  ? (l = "next")
                  : "este" == u && (l = "this"),
            (0, s.createParsingComponentsAtWeekday)(e.reference, a, l)
        );
    }
}
t.default = u;
