Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.AbstractParserWithLeftRightBoundaryChecking = t.AbstractParserWithLeftBoundaryChecking = void 0);
let n = r(389766),
    a = r(41943);
class i extends n.AbstractParserWithWordBoundaryChecking {
    patternLeftBoundary() {
        return a.REGEX_PARTS.leftBoundary;
    }
    innerPattern(e) {
        return new RegExp(this.innerPatternString(e), a.REGEX_PARTS.flags);
    }
    innerPatternHasChange(e, t) {
        return !1;
    }
}
(t.AbstractParserWithLeftBoundaryChecking = i),
    (t.AbstractParserWithLeftRightBoundaryChecking = class extends i {
        innerPattern(e) {
            return RegExp(`${this.innerPatternString(e)}${a.REGEX_PARTS.rightBoundary}`, a.REGEX_PARTS.flags);
        }
    });
