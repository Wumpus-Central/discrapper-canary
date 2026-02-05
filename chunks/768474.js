"use strict";
n.d(t, { A: () => i });
var r = n(985971);
class i extends r.B {
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
