Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(793277),
    a = r(115835),
    i = r(167385),
    s = r(798401),
    o = RegExp(
        `(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(${(0, s.matchAnyPattern)(n.TIME_UNIT_DICTIONARY)})(?=\\s*)(?=\\W|$)`,
        "i",
    );
class u extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            i = t[2].toLowerCase(),
            s = n.TIME_UNIT_DICTIONARY[i];
        if ("volgend" == r || "komend" == r || "aankomend" == r) {
            let t = {};
            return (t[s] = 1), a.ParsingComponents.createRelativeFromReference(e.reference, t);
        }
        if ("afgelopen" == r || "vorig" == r) {
            let t = {};
            return (t[s] = -1), a.ParsingComponents.createRelativeFromReference(e.reference, t);
        }
        let o = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return (
            i.match(/week/i)
                ? (u.setDate(u.getDate() - u.getDay()),
                  o.imply("day", u.getDate()),
                  o.imply("month", u.getMonth() + 1),
                  o.imply("year", u.getFullYear()))
                : i.match(/maand/i)
                  ? (u.setDate(1),
                    o.imply("day", u.getDate()),
                    o.assign("year", u.getFullYear()),
                    o.assign("month", u.getMonth() + 1))
                  : i.match(/jaar/i) &&
                    (u.setDate(1),
                    u.setMonth(0),
                    o.imply("day", u.getDate()),
                    o.imply("month", u.getMonth() + 1),
                    o.assign("year", u.getFullYear())),
            o
        );
    }
}
t.default = u;
