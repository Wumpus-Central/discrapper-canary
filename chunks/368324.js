"use strict";
n.d(t, { A: () => h });
var r = n(355418);
let i = RegExp(
        "([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)",
        "i",
    ),
    a = 1,
    s = 2,
    o = 3,
    l = 4,
    u = 5,
    c = 6,
    d = 7,
    _ = 8,
    f = 9,
    p = 10;
class h extends r.c {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let n = e.createParsingComponents({ year: parseInt(t[a]), month: parseInt(t[s]), day: parseInt(t[o]) });
        if (
            null != t[l] &&
            (n.assign("hour", parseInt(t[l])),
            n.assign("minute", parseInt(t[u])),
            null != t[c] && n.assign("second", parseInt(t[c])),
            null != t[d] && n.assign("millisecond", parseInt(t[d])),
            null != t[_])
        ) {
            let e = 0;
            if (t[f]) {
                let n = parseInt(t[f]),
                    r = 0;
                null != t[p] && (r = parseInt(t[p])), (e = 60 * n) < 0 ? (e -= r) : (e += r);
            }
            n.assign("timezoneOffset", e);
        }
        return n.addTag("parser/ISOFormatParser");
    }
}
