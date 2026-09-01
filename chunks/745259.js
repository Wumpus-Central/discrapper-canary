Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(858197),
    a = r(137472);
class i extends a.AbstractTimeExpressionParser {
    constructor(e) {
        super(e);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:alle|dalle)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*in punto|alle\\s*sera|in\\s*del\\s*(?:mattina|pomeriggio)))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("sera")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", n.Meridiem.PM))
                    : e < 6 && r.assign("meridiem", n.Meridiem.AM);
            }
            if (t[0].endsWith("pomeriggio")) {
                r.assign("meridiem", n.Meridiem.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("mattina") &&
                (r.assign("meridiem", n.Meridiem.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
t.default = i;
