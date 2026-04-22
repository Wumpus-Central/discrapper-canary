r.d(t, { A: () => s });
var n = r(208352);
class s extends n.B {
    primaryPrefix() {
        return "(?:(?:ao?|\xe0s?|das|da|de|do)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:o)?|\\?)\\s*";
    }
}
