Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(41943),
    a = r(115835),
    i = r(569370),
    s = r(628403);
class o extends i.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return `(\u{446}\u{456}|\u{43E}\u{441}\u{442}\u{430}\u{43D}\u{43D}\u{456}|\u{43C}\u{438}\u{43D}\u{443}\u{43B}\u{456}|\u{43C}\u{430}\u{439}\u{431}\u{443}\u{442}\u{43D}\u{456}|\u{43D}\u{430}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{456}|\u{43F}\u{456}\u{441}\u{43B}\u{44F}|\u{447}\u{435}\u{440}\u{435}\u{437}|\\+|-)\\s*(${n.TIME_UNITS_PATTERN})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            i = (0, n.parseDuration)(t[3]);
        switch (r) {
            case "\u043E\u0441\u0442\u0430\u043D\u043D\u0456":
            case "\u043C\u0438\u043D\u0443\u043B\u0456":
            case "-":
                i = (0, s.reverseDuration)(i);
        }
        return a.ParsingComponents.createRelativeFromReference(e.reference, i);
    }
}
t.default = o;
