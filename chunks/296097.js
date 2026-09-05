Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(40840),
    a = r(115835),
    i = r(389766),
    s = r(628403),
    o = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${n.TIME_UNITS_PATTERN})(?=\\W|$)`, "i"),
    u = RegExp(`(this|last|past|next|after|\\+|-)\\s*(${n.TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class l extends i.AbstractParserWithWordBoundaryChecking {
    constructor(e = !0) {
        super(), (this.allowAbbreviations = e);
    }
    innerPattern() {
        return this.allowAbbreviations ? o : u;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            i = (0, n.parseDuration)(t[2]);
        if (!i) return null;
        switch (r) {
            case "last":
            case "past":
            case "-":
                i = (0, s.reverseDuration)(i);
        }
        return a.ParsingComponents.createRelativeFromReference(e.reference, i);
    }
}
t.default = l;
