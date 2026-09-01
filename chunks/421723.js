Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(115004),
    a = r(137472),
    i = r(579782);
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
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|\u0434\u043E|\u0438|\u043F\u043E|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:\u0432|\u0441)\\s*)??";
    }
    primarySuffix() {
        return `(?:\\s*(?:\u{443}\u{442}\u{440}\u{430}|\u{432}\u{435}\u{447}\u{435}\u{440}\u{430}|\u{43F}\u{43E}\u{441}\u{43B}\u{435} \u{43F}\u{43E}\u{43B}\u{443}\u{434}\u{43D}\u{44F}))?(?!\\/)${i.REGEX_PARTS.rightBoundary}`;
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("\u0432\u0435\u0447\u0435\u0440\u0430")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", n.Meridiem.PM))
                    : e < 6 && r.assign("meridiem", n.Meridiem.AM);
            }
            if (t[0].endsWith("\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F")) {
                r.assign("meridiem", n.Meridiem.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("\u0443\u0442\u0440\u0430") &&
                (r.assign("meridiem", n.Meridiem.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
t.default = s;
