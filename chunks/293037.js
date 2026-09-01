Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(115004),
    a = r(137472),
    i = r(41943);
class s extends a.AbstractTimeExpressionParser {
    constructor(e) {
        super(e);
    }
    patternFlags() {
        return i.REGEX_PARTS.flags;
    }
    primaryPatternLeftBoundary() {
        return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|\u0434\u043E|\u0456|\u043F\u043E|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:\u0432|\u0443|\u043E|\u043E\u0431|\u0437|\u0456\u0437|\u0432\u0456\u0434)\\s*)??";
    }
    primarySuffix() {
        return `(?:\\s*(?:\u{440}\u{430}\u{43D}\u{43A}\u{443}|\u{432}\u{435}\u{447}\u{43E}\u{440}\u{430}|\u{43F}\u{43E} \u{43E}\u{431}\u{456}\u{434}\u{456}|\u{43F}\u{456}\u{441}\u{43B}\u{44F} \u{43E}\u{431}\u{456}\u{434}\u{443}))?(?!\\/)${i.REGEX_PARTS.rightBoundary}`;
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("\u0432\u0435\u0447\u043E\u0440\u0430")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", n.Meridiem.PM))
                    : e < 6 && r.assign("meridiem", n.Meridiem.AM);
            }
            if (
                t[0].endsWith("\u043F\u043E \u043E\u0431\u0456\u0434\u0456") ||
                t[0].endsWith("\u043F\u0456\u0441\u043B\u044F \u043E\u0431\u0456\u0434\u0443")
            ) {
                r.assign("meridiem", n.Meridiem.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("\u0440\u0430\u043D\u043A\u0443") &&
                (r.assign("meridiem", n.Meridiem.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
t.default = s;
