Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(793277),
    a = r(115835),
    i = r(389766),
    s = RegExp("(" + n.TIME_UNITS_PATTERN + ")(later|na|vanaf nu|voortaan|vooruit|uit)(?=(?:\\W|$))", "i"),
    o = RegExp("(" + n.TIME_UNITS_PATTERN + ")(later|vanaf nu)(?=(?:\\W|$))", "i");
class u extends i.AbstractParserWithWordBoundaryChecking {
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? o : s;
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return a.ParsingComponents.createRelativeFromReference(e.reference, r);
    }
}
t.default = u;
