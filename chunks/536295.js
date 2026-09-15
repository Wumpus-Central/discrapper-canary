Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(579782),
    a = r(115835),
    i = r(389766),
    s = `(?:(?:\u{43E}\u{43A}\u{43E}\u{43B}\u{43E}|\u{43F}\u{440}\u{438}\u{43C}\u{435}\u{440}\u{43D}\u{43E})\\s*(?:~\\s*)?)?(${n.TIME_UNITS_PATTERN})${n.REGEX_PARTS.rightBoundary}`;
class o extends i.AbstractParserWithWordBoundaryChecking {
    patternLeftBoundary() {
        return n.REGEX_PARTS.leftBoundary;
    }
    innerPattern(e) {
        return e.option.forwardDate
            ? new RegExp(s, n.REGEX_PARTS.flags)
            : RegExp(
                  `(?:\u{432} \u{442}\u{435}\u{447}\u{435}\u{43D}\u{438}\u{435}|\u{432} \u{442}\u{435}\u{447}\u{435}\u{43D}\u{438}\u{438})\\s*${s}`,
                  n.REGEX_PARTS.flags,
              );
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return a.ParsingComponents.createRelativeFromReference(e.reference, r);
    }
}
t.default = o;
