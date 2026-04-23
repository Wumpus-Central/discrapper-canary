r.d(t, { A: () => s });
var n = r(985971);
class s extends n.B {
    primaryPrefix() {
        return "(?:(?:[\xe0a])\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|[\xe0a]|\\?)\\s*";
    }
    extractPrimaryTimeComponents(e, t) {
        return t[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(e, t);
    }
}
