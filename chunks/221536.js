n.d(t, { Z: () => u });
var r = n(894186);
let i = RegExp(
        "(^|\\s|T)(?:(?:[àa])\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)",
        "i",
    ),
    a = RegExp(
        "^\\s*(\\-|\\\u2013|\\~|\\\u301C|[àa]|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)",
        "i",
    ),
    o = 2,
    s = 3,
    l = 4,
    c = 5;
class u {
    pattern(e) {
        return i;
    }
    extract(e, t) {
        let n = e.createParsingResult(t.index + t[1].length, t[0].substring(t[1].length));
        if (n.text.match(/^\d{4}$/) || ((n.start = u.extractTimeComponent(n.start.clone(), t)), !n.start))
            return (t.index += t[0].length), null;
        let r = e.text.substring(t.index + t[0].length),
            i = a.exec(r);
        return i && ((n.end = u.extractTimeComponent(n.start.clone(), i)), n.end && (n.text += i[0])), n;
    }
    static extractTimeComponent(e, t) {
        let n = 0,
            i = 0,
            a = null;
        if (((n = parseInt(t[o])), null != t[s] && (i = parseInt(t[s])), i >= 60 || n > 24)) return null;
        if ((n >= 12 && (a = r.GG.PM), null != t[c])) {
            if (n > 12) return null;
            let e = t[c][0].toLowerCase();
            "a" == e && ((a = r.GG.AM), 12 == n && (n = 0)), "p" == e && ((a = r.GG.PM), 12 != n && (n += 12));
        }
        if (
            (e.assign("hour", n),
            e.assign("minute", i),
            null !== a ? e.assign("meridiem", a) : n < 12 ? e.imply("meridiem", r.GG.AM) : e.imply("meridiem", r.GG.PM),
            null != t[l])
        ) {
            let n = parseInt(t[l]);
            if (n >= 60) return null;
            e.assign("second", n);
        }
        return e;
    }
}
