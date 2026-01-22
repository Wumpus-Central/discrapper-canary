n.d(t, { A: () => o });
var r = n(322811),
    i = n(996483);
let a = /今日|きょう|本日|ほんじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
function s(e) {
    switch (e) {
        case "きょう":
            return "今日";
        case "ほんじつ":
            return "本日";
        case "きのう":
            return "昨日";
        case "あした":
            return "明日";
        case "こんや":
            return "今夜";
        case "こんゆう":
            return "今夕";
        case "こんばん":
            return "今晩";
        case "けさ":
            return "今朝";
        default:
            return e;
    }
}
class o {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = s(t[0]),
            a = e.createParsingComponents();
        switch (n) {
            case "昨日":
                return i.jI(e.reference);
            case "明日":
                return i.uf(e.reference);
            case "本日":
            case "今日":
                return i.Ec(e.reference);
        }
        "今夜" == n || "今夕" == n || "今晩" == n
            ? (a.imply("hour", 22), a.assign("meridiem", r.FF.PM))
            : n.match("今朝") && (a.imply("hour", 6), a.assign("meridiem", r.FF.AM));
        let o = e.refDate;
        return a.assign("day", o.getDate()), a.assign("month", o.getMonth() + 1), a.assign("year", o.getFullYear()), a;
    }
}
