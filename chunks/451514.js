Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(722279),
    a = r(115835),
    i = r(389766),
    s = r(798401),
    o = r(628403);
class u extends i.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(
            `(?:les?|la|l'|du|des?)\\s*(${n.NUMBER_PATTERN})?(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?\\s*(${(0, s.matchAnyPattern)(n.TIME_UNIT_DICTIONARY)})(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?`,
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t[1] ? (0, n.parseNumberPattern)(t[1]) : 1,
            i = n.TIME_UNIT_DICTIONARY[t[3].toLowerCase()],
            s = {};
        s[i] = r;
        let u = t[2] || t[4] || "";
        if ((u = u.toLowerCase()))
            return (
                (/derni[e\xe8]re?s?/.test(u) || /pass[\xe9e]e?s?/.test(u) || /pr[\xe9e]c[\xe9e]dents?/.test(u)) &&
                    (s = (0, o.reverseDuration)(s)),
                a.ParsingComponents.createRelativeFromReference(e.reference, s)
            );
    }
}
t.default = u;
