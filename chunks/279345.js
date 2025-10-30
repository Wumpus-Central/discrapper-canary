n.d(t, { Z: () => i });
var r = n(629821);
class i extends r._ {
    primaryPrefix() {
        return "(?:(?:[àa])\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|[àa]|\\?)\\s*";
    }
    extractPrimaryTimeComponents(e, t) {
        return t[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(e, t);
    }
}
