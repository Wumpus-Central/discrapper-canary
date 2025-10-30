n.d(t, { Z: () => s });
var r = n(894186),
    i = n(715870);
let a = /今日|きょう|本日|ほんじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
function o(e) {
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
class s {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = o(t[0]),
            a = e.createParsingComponents();
        switch (n) {
            case "昨日":
                return i.Cv(e.reference);
            case "明日":
                return i.Ro(e.reference);
            case "本日":
            case "今日":
                return i.Lg(e.reference);
        }
        "今夜" == n || "今夕" == n || "今晩" == n
            ? (a.imply("hour", 22), a.assign("meridiem", r.GG.PM))
            : n.match("今朝") && (a.imply("hour", 6), a.assign("meridiem", r.GG.AM));
        let s = e.refDate;
        return a.assign("day", s.getDate()), a.assign("month", s.getMonth() + 1), a.assign("year", s.getFullYear()), a;
    }
}
