Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(474726),
    a = r(798401),
    i = r(167385),
    s = RegExp(
        `([0-9]{4})[\\.\\/\\s](?:(${(0, a.matchAnyPattern)(n.MONTH_DICTIONARY)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`,
        "i",
    );
class o extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let r = t[3] ? parseInt(t[3]) : n.MONTH_DICTIONARY[t[2].toLowerCase()];
        if (r < 1 || r > 12) return null;
        let a = parseInt(t[1]);
        return { day: parseInt(t[4]), month: r, year: a };
    }
}
t.default = o;
