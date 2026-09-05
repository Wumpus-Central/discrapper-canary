Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(474726),
    a = r(115835),
    i = r(389766),
    s = r(628403),
    o = RegExp(`(${n.TIME_UNITS_PATTERN})\\s{0,5}(?:fa|prima|precedente)(?=(?:\\W|$))`, "i"),
    u = RegExp(`(${n.TIME_UNITS_PATTERN})\\s{0,5}fa(?=(?:\\W|$))`, "i");
class l extends i.AbstractParserWithWordBoundaryChecking {
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? u : o;
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]),
            i = (0, s.reverseDuration)(r);
        return a.ParsingComponents.createRelativeFromReference(e.reference, i);
    }
}
t.default = l;
