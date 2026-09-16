Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(474726),
    a = r(115835),
    i = r(167385),
    s = RegExp(
        `(?:within|in|for)\\s*(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${n.TIME_UNITS_PATTERN})(?=\\W|$)`,
        "i",
    ),
    o = RegExp(
        `(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${n.TIME_UNITS_PATTERN})(?=\\W|$)`,
        "i",
    );
class u extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern(e) {
        return e.option.forwardDate ? o : s;
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return a.ParsingComponents.createRelativeFromReference(e.reference, r);
    }
}
t.default = u;
