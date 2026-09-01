Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(137472);
class a extends n.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:ao?|\xe0s?|das|da|de|do)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:o)?|\\?)\\s*";
    }
}
t.default = a;
