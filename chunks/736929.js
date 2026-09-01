Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(40840),
    a = r(798401),
    i = r(167385),
    s = RegExp(
        `([0-9]{4})[-\\.\\/\\s](?:(${(0, a.matchAnyPattern)(n.MONTH_DICTIONARY)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`,
        "i",
    );
class o extends i.AbstractParserWithWordBoundaryChecking {
    constructor(e) {
        super(), (this.strictMonthDateOrder = e);
    }
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let r = parseInt(t[1]),
            a = parseInt(t[4]),
            i = t[3] ? parseInt(t[3]) : n.MONTH_DICTIONARY[t[2].toLowerCase()];
        if (i < 1 || i > 12) {
            if (this.strictMonthDateOrder) return null;
            a >= 1 && a <= 12 && ([i, a] = [a, i]);
        }
        return a < 1 || a > 31 ? null : { day: a, month: i, year: r };
    }
}
t.default = o;
