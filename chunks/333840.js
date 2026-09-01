Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(41943),
    a = r(798401),
    i = r(855616),
    s = r(569370);
class o extends s.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return `(?:(?:,|\\(|\u{FF08})\\s*)?(?:\u{432}\\s*?)?(?:\u{443}\\s*?)?(?:(\u{446}\u{435}\u{439}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{43E}\u{433}\u{43E}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{438}\u{439}|\u{43F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{456}\u{439}|\u{43F}\u{43E}\u{43F}\u{435}\u{440}\u{435}\u{434}\u{43D}\u{44C}\u{43E}\u{433}\u{43E}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{433}\u{43E}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{438}\u{439}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{43C}\u{443})\\s*)?(${(0, a.matchAnyPattern)(n.WEEKDAY_DICTIONARY)})(?:\\s*(?:,|\\)|\u{FF09}))?(?:\\s*(\u{43D}\u{430}|\u{443}|\u{432})\\s*(\u{446}\u{44C}\u{43E}\u{43C}\u{443}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{43E}\u{43C}\u{443}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}\u{43C}\u{443})\\s*\u{442}\u{438}\u{436}\u{43D}\u{456})?`;
    }
    innerExtract(e, t) {
        let r = t[2].toLocaleLowerCase(),
            a = n.WEEKDAY_DICTIONARY[r],
            s = t[1],
            o = t[3],
            u = s || o;
        u = (u = u || "").toLocaleLowerCase();
        let l = null;
        return (
            "\u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E" == u ||
            "\u043C\u0438\u043D\u0443\u043B\u0438\u0439" == u ||
            "\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439" == u ||
            "\u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E" == u
                ? (l = "last")
                : "\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u043E\u0433\u043E" == u ||
                    "\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439" == u
                  ? (l = "next")
                  : ("\u0446\u0435\u0439" == u ||
                        "\u0446\u044C\u043E\u0433\u043E" == u ||
                        "\u0446\u044C\u043E\u043C\u0443" == u) &&
                    (l = "this"),
            (0, i.createParsingComponentsAtWeekday)(e.reference, a, l)
        );
    }
}
t.default = o;
