r.d(t, { A: () => i });
var n = r(322811),
    s = r(996483);
let a = /今日|きょう|本日|ほんじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
class i {
    pattern() {
        return a;
    }
    extract(e, t) {
        let r = (function (e) {
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
            })(t[0]),
            a = e.createParsingComponents();
        switch (r) {
            case "昨日":
                return s.jI(e.reference);
            case "明日":
                return s.uf(e.reference);
            case "本日":
            case "今日":
                return s.Ec(e.reference);
        }
        "今夜" == r || "今夕" == r || "今晩" == r
            ? (a.imply("hour", 22), a.assign("meridiem", n.FF.PM))
            : r.match("今朝") && (a.imply("hour", 6), a.assign("meridiem", n.FF.AM));
        let i = e.refDate;
        return a.assign("day", i.getDate()), a.assign("month", i.getMonth() + 1), a.assign("year", i.getFullYear()), a;
    }
}
