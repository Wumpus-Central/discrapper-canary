Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(40840),
    a = r(115835),
    i = r(389766),
    s = RegExp(`(${n.TIME_UNITS_PATTERN})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"),
    o = RegExp(`(${n.TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
class u extends i.AbstractParserWithWordBoundaryChecking {
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? o : s;
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return r ? a.ParsingComponents.createRelativeFromReference(e.reference, r) : null;
    }
}
t.default = u;
