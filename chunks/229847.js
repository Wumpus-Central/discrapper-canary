Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(137472);
class a extends n.AbstractTimeExpressionParser {
    primaryPrefix() {
        return "(?:(?:um|von)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|bis)\\s*";
    }
    extractPrimaryTimeComponents(e, t) {
        return t[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(e, t);
    }
}
t.default = a;
