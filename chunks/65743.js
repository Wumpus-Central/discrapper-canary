Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(40840),
    a = r(115835),
    i = r(389766),
    s = r(628403),
    o = RegExp(`(${n.TIME_UNITS_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i"),
    u = RegExp(`(${n.TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class l extends i.AbstractParserWithWordBoundaryChecking {
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? u : o;
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return r ? a.ParsingComponents.createRelativeFromReference(e.reference, (0, s.reverseDuration)(r)) : null;
    }
}
t.default = l;
