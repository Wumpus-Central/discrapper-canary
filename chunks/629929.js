Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(574253),
    a = RegExp(
        "([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)",
        "i",
    );
t.default = class {
    constructor(e) {
        (this.groupNumberMonth = e ? 3 : 2), (this.groupNumberDay = e ? 2 : 3);
    }
    pattern() {
        return a;
    }
    extract(e, t) {
        let r = t.index + t[1].length,
            a = t.index + t[0].length - t[5].length;
        if (
            (r > 0 && e.text.substring(0, r).match("\\d/?$")) ||
            (a < e.text.length && e.text.substring(a).match("^/?\\d"))
        )
            return;
        let i = e.text.substring(r, a);
        if (i.match(/^\d\.\d$/) || i.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/) || (!t[4] && 0 > i.indexOf("/"))) return;
        let s = e.createParsingResult(r, i),
            o = parseInt(t[this.groupNumberMonth]),
            u = parseInt(t[this.groupNumberDay]);
        if ((o < 1 || o > 12) && o > 12)
            if (!(u >= 1) || !(u <= 12) || !(o <= 31)) return null;
            else [u, o] = [o, u];
        if (u < 1 || u > 31) return null;
        if ((s.start.assign("day", u), s.start.assign("month", o), t[4])) {
            let e = parseInt(t[4]),
                r = (0, n.findMostLikelyADYear)(e);
            s.start.assign("year", r);
        } else {
            let t = (0, n.findYearClosestToRef)(e.refDate, u, o);
            s.start.imply("year", t);
        }
        return s.addTag("parser/SlashDateFormatParser");
    }
};
