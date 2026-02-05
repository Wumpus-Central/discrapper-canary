"use strict";
n.d(t, { A: () => _ });
var r = n(501459),
    i = n(364242);
let a = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i,
    s = 1,
    o = 2,
    l = 3,
    u = 4,
    c = 5,
    d = 6;
class _ {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = parseInt((0, r.Zp)(t[c])),
            a = parseInt((0, r.Zp)(t[d])),
            _ = e.createParsingComponents({ day: a, month: n });
        if (
            (t[s] &&
                t[s].match("同|今|本") &&
                _.assign("year", e.reference.getDateWithAdjustedTimezone().getFullYear()),
            t[o])
        ) {
            let e = t[u],
                n = "元" == e ? 1 : parseInt((0, r.Zp)(e));
            "令和" == t[l] ? (n += 2018) : "平成" == t[l] ? (n += 1988) : "昭和" == t[l] && (n += 1925),
                _.assign("year", n);
        } else {
            let t = (0, i.Y)(e.refDate, a, n);
            _.imply("year", t);
        }
        return _;
    }
}
