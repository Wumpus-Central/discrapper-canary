n.d(t, { A: () => u });
var r = n(322811);
let i = RegExp(
        "(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)",
        "i",
    ),
    a = RegExp(
        "^\\s*(\\-|\\\u2013|\\~|\\\u301C|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)",
        "i",
    ),
    s = 2,
    o = 3,
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
        if (((n = parseInt(t[s])), null != t[o] && (i = parseInt(t[o])), i >= 60 || n > 24)) return null;
        if ((n >= 12 && (a = r.FF.PM), null != t[c])) {
            if (n > 12) return null;
            let e = t[c].toLowerCase();
            e.match(/morgen|vormittag/) && ((a = r.FF.AM), 12 == n && (n = 0)),
                e.match(/nachmittag|abend/) && ((a = r.FF.PM), 12 != n && (n += 12)),
                e.match(/nacht/) &&
                    (12 == n ? ((a = r.FF.AM), (n = 0)) : n < 6 ? (a = r.FF.AM) : ((a = r.FF.PM), (n += 12)));
        }
        if (
            (e.assign("hour", n),
            e.assign("minute", i),
            null !== a ? e.assign("meridiem", a) : n < 12 ? e.imply("meridiem", r.FF.AM) : e.imply("meridiem", r.FF.PM),
            null != t[l])
        ) {
            let n = parseInt(t[l]);
            if (n >= 60) return null;
            e.assign("second", n);
        }
        return e;
    }
}
