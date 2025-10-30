n.d(t, { Z: () => h });
var r = n(727916);
let i = RegExp(
        "([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)",
        "i",
    ),
    a = 1,
    o = 2,
    s = 3,
    l = 4,
    c = 5,
    u = 6,
    d = 7,
    f = 8,
    _ = 9,
    p = 10;
class h extends r.Z {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let n = e.createParsingComponents({
            year: parseInt(t[a]),
            month: parseInt(t[o]),
            day: parseInt(t[s]),
        });
        if (
            null != t[l] &&
            (n.assign("hour", parseInt(t[l])),
            n.assign("minute", parseInt(t[c])),
            null != t[u] && n.assign("second", parseInt(t[u])),
            null != t[d] && n.assign("millisecond", parseInt(t[d])),
            null != t[f])
        ) {
            let e = 0;
            if (t[_]) {
                let n = parseInt(t[_]),
                    r = 0;
                null != t[p] && (r = parseInt(t[p])), (e = 60 * n) < 0 ? (e -= r) : (e += r);
            }
            n.assign("timezoneOffset", e);
        }
        return n.addTag("parser/ISOFormatParser");
    }
}
