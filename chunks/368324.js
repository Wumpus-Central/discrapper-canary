r.d(t, { A: () => a });
var n = r(355418);
let s = RegExp(
    "([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)",
    "i",
);
class a extends n.c {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let r = e.createParsingComponents({ year: parseInt(t[1]), month: parseInt(t[2]), day: parseInt(t[3]) });
        if (
            null != t[4] &&
            (r.assign("hour", parseInt(t[4])),
            r.assign("minute", parseInt(t[5])),
            null != t[6] && r.assign("second", parseInt(t[6])),
            null != t[7] && r.assign("millisecond", parseInt(t[7])),
            null != t[8])
        ) {
            let e = 0;
            if (t[9]) {
                let r = parseInt(t[9]),
                    n = 0;
                null != t[10] && (n = parseInt(t[10])), (e = 60 * r) < 0 ? (e -= n) : (e += n);
            }
            r.assign("timezoneOffset", e);
        }
        return r.addTag("parser/ISOFormatParser");
    }
}
