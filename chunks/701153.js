r.d(t, { A: () => i });
var n = r(501459),
    s = r(364242);
let a = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
class i {
    pattern() {
        return a;
    }
    extract(e, t) {
        let r = parseInt((0, n.Zp)(t[5])),
            a = parseInt((0, n.Zp)(t[6])),
            i = e.createParsingComponents({ day: a, month: r });
        if (
            (t[1] &&
                t[1].match("同|今|本") &&
                i.assign("year", e.reference.getDateWithAdjustedTimezone().getFullYear()),
            t[2])
        ) {
            let e = t[4],
                r = "元" == e ? 1 : parseInt((0, n.Zp)(e));
            "令和" == t[3] ? (r += 2018) : "平成" == t[3] ? (r += 1988) : "昭和" == t[3] && (r += 1925),
                i.assign("year", r);
        } else {
            let t = (0, s.Y)(e.refDate, a, r);
            i.imply("year", t);
        }
        return i;
    }
}
