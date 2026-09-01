Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(137472);
class a extends n.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:l)?|\\?)\\s*";
    }
}
t.default = a;
