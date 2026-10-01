Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(722279),
    a = r(115835),
    i = r(167385);
class s extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return RegExp(`(?:dans|en|pour|pendant|de)\\s*(${n.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return a.ParsingComponents.createRelativeFromReference(e.reference, r);
    }
}
t.default = s;
