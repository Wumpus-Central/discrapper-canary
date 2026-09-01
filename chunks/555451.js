Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(579782),
    a = r(115835),
    i = r(798401),
    s = r(414533);
class o extends s.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return `(\u{432} \u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{43E}\u{43C}|\u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{43E}\u{439}|\u{43D}\u{430} \u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{435}\u{439}|\u{432} \u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{435}\u{43C}|\u{43D}\u{430} \u{44D}\u{442}\u{43E}\u{439}|\u{432} \u{44D}\u{442}\u{43E}\u{43C})\\s*(${(0, i.matchAnyPattern)(n.TIME_UNIT_DICTIONARY)})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            i = t[2].toLowerCase(),
            s = n.TIME_UNIT_DICTIONARY[i];
        if (
            "\u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439" == r ||
            "\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C" == r
        ) {
            let t = {};
            return (t[s] = 1), a.ParsingComponents.createRelativeFromReference(e.reference, t);
        }
        if (
            "\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u043C" == r ||
            "\u043D\u0430 \u043F\u0440\u043E\u0448\u043B\u043E\u0439" == r
        ) {
            let t = {};
            return (t[s] = -1), a.ParsingComponents.createRelativeFromReference(e.reference, t);
        }
        let o = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return (
            s.match(/week/i)
                ? (u.setDate(u.getDate() - u.getDay()),
                  o.imply("day", u.getDate()),
                  o.imply("month", u.getMonth() + 1),
                  o.imply("year", u.getFullYear()))
                : s.match(/month/i)
                  ? (u.setDate(1),
                    o.imply("day", u.getDate()),
                    o.assign("year", u.getFullYear()),
                    o.assign("month", u.getMonth() + 1))
                  : s.match(/year/i) &&
                    (u.setDate(1),
                    u.setMonth(0),
                    o.imply("day", u.getDate()),
                    o.imply("month", u.getMonth() + 1),
                    o.assign("year", u.getFullYear())),
            o
        );
    }
}
t.default = o;
