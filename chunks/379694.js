Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(389766),
    a = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
class i extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let r = parseInt(t[2]),
            n = parseInt(t[1]);
        return e.createParsingComponents().imply("day", 1).assign("month", n).assign("year", r);
    }
}
t.default = i;
