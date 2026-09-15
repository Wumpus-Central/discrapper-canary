Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(793277),
    a = r(115835),
    i = r(389766),
    s = r(628403),
    o = RegExp(`(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(${n.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
class u extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            i = (0, n.parseDuration)(t[2]);
        switch (r) {
            case "vorig":
            case "afgelopen":
            case "-":
                i = (0, s.reverseDuration)(i);
        }
        return a.ParsingComponents.createRelativeFromReference(e.reference, i);
    }
}
t.default = u;
