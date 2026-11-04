Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(115004),
    a = RegExp(
        "(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)",
        "i",
    ),
    i = RegExp(
        "^\\s*(\\-|\\\u2013|\\~|\\\u301C|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)",
        "i",
    );
t.default = class e {
    pattern(e) {
        return a;
    }
    extract(t, r) {
        let n = t.createParsingResult(r.index + r[1].length, r[0].substring(r[1].length));
        if (n.text.match(/^\d{4}$/) || ((n.start = e.extractTimeComponent(n.start.clone(), r)), !n.start))
            return ((r.index += r[0].length), null);
        let a = t.text.substring(r.index + r[0].length),
            s = i.exec(a);
        return (s && ((n.end = e.extractTimeComponent(n.start.clone(), s)), n.end && (n.text += s[0])), n);
    }
    static extractTimeComponent(e, t) {
        let r = 0,
            a = 0,
            i = null;
        if (((r = parseInt(t[2])), null != t[3] && (a = parseInt(t[3])), a >= 60 || r > 24)) return null;
        if ((r >= 12 && (i = n.Meridiem.PM), null != t[5])) {
            if (r > 12) return null;
            let e = t[5].toLowerCase();
            (e.match(/morgen|vormittag/) && ((i = n.Meridiem.AM), 12 == r && (r = 0)),
                e.match(/nachmittag|abend/) && ((i = n.Meridiem.PM), 12 != r && (r += 12)),
                e.match(/nacht/) &&
                    (12 == r
                        ? ((i = n.Meridiem.AM), (r = 0))
                        : r < 6
                          ? (i = n.Meridiem.AM)
                          : ((i = n.Meridiem.PM), (r += 12))));
        }
        if (
            (e.assign("hour", r),
            e.assign("minute", a),
            null !== i
                ? e.assign("meridiem", i)
                : r < 12
                  ? e.imply("meridiem", n.Meridiem.AM)
                  : e.imply("meridiem", n.Meridiem.PM),
            null != t[4])
        ) {
            let r = parseInt(t[4]);
            if (r >= 60) return null;
            e.assign("second", r);
        }
        return e;
    }
};
