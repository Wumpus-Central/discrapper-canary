n.d(t, {
    A: () => u,
});
var r = n(364242);
let i = RegExp(
        "([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)",
        "i",
    ),
    a = 1,
    s = 5,
    o = 2,
    l = 3,
    c = 4;
class u {
    groupNumberMonth;
    groupNumberDay;
    constructor(e) {
        (this.groupNumberMonth = e ? l : o), (this.groupNumberDay = e ? o : l);
    }
    pattern() {
        return i;
    }
    extract(e, t) {
        let n = t.index + t[a].length,
            i = t.index + t[0].length - t[s].length;
        if (
            (n > 0 && e.text.substring(0, n).match("\\d/?$")) ||
            (i < e.text.length && e.text.substring(i).match("^/?\\d"))
        )
            return;
        let o = e.text.substring(n, i);
        if (o.match(/^\d\.\d$/) || o.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/) || (!t[c] && 0 > o.indexOf("/"))) return;
        let l = e.createParsingResult(n, o),
            u = parseInt(t[this.groupNumberMonth]),
            d = parseInt(t[this.groupNumberDay]);
        if ((u < 1 || u > 12) && u > 12)
            if (!(d >= 1) || !(d <= 12) || !(u <= 31)) return null;
            else [d, u] = [u, d];
        if (d < 1 || d > 31) return null;
        if ((l.start.assign("day", d), l.start.assign("month", u), t[c])) {
            let e = parseInt(t[c]),
                n = (0, r.D)(e);
            l.start.assign("year", n);
        } else {
            let t = (0, r.Y)(e.refDate, d, u);
            l.start.imply("year", t);
        }
        return l.addTag("parser/SlashDateFormatParser");
    }
}
