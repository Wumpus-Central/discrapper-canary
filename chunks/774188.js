r.d(t, { A: () => a });
var n = r(364242);
let s = RegExp(
    "([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)",
    "i",
);
class a {
    groupNumberMonth;
    groupNumberDay;
    constructor(e) {
        (this.groupNumberMonth = e ? 3 : 2), (this.groupNumberDay = e ? 2 : 3);
    }
    pattern() {
        return s;
    }
    extract(e, t) {
        let r = t.index + t[1].length,
            s = t.index + t[0].length - t[5].length;
        if (
            (r > 0 && e.text.substring(0, r).match("\\d/?$")) ||
            (s < e.text.length && e.text.substring(s).match("^/?\\d"))
        )
            return;
        let a = e.text.substring(r, s);
        if (a.match(/^\d\.\d$/) || a.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/) || (!t[4] && 0 > a.indexOf("/"))) return;
        let i = e.createParsingResult(r, a),
            o = parseInt(t[this.groupNumberMonth]),
            l = parseInt(t[this.groupNumberDay]);
        if ((o < 1 || o > 12) && o > 12)
            if (!(l >= 1) || !(l <= 12) || !(o <= 31)) return null;
            else [l, o] = [o, l];
        if (l < 1 || l > 31) return null;
        if ((i.start.assign("day", l), i.start.assign("month", o), t[4])) {
            let e = parseInt(t[4]),
                r = (0, n.D)(e);
            i.start.assign("year", r);
        } else {
            let t = (0, n.Y)(e.refDate, l, o);
            i.start.imply("year", t);
        }
        return i.addTag("parser/SlashDateFormatParser");
    }
}
