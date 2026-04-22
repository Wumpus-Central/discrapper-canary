r.d(t, { A: () => i });
var n = r(322811),
    s = r(208352),
    a = r(989479);
class i extends s.B {
    constructor(e) {
        super(e);
    }
    patternFlags() {
        return a.pW.flags;
    }
    primaryPatternLeftBoundary() {
        return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|до|и|по|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:в|с)\\s*)??";
    }
    primarySuffix() {
        return `(?:\\s*(?:утра|вечера|после полудня))?(?!\\/)${a.pW.rightBoundary}`;
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("вечера")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", n.FF.PM))
                    : e < 6 && r.assign("meridiem", n.FF.AM);
            }
            if (t[0].endsWith("после полудня")) {
                r.assign("meridiem", n.FF.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("утра") &&
                (r.assign("meridiem", n.FF.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
