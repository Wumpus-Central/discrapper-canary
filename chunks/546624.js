Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(687204),
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
            `(?:\\s*((?:n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${n.NUMBER_PATTERN})?(?:\\s*(n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${(0, s.matchAnyPattern)(n.TIME_UNIT_DICTIONARY)})`,
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t[2] ? (0, n.parseNumberPattern)(t[2]) : 1,
            i = n.TIME_UNIT_DICTIONARY[t[4].toLowerCase()],
            s = {};
        s[i] = r;
        let u = t[1] || t[3] || "";
        if ((u = u.toLowerCase()))
            return (
                (/vor/.test(u) || /letzte/.test(u) || /vergangen/.test(u)) && (s = (0, o.reverseDuration)(s)),
                a.ParsingComponents.createRelativeFromReference(e.reference, s)
            );
    }
}
t.default = u;
