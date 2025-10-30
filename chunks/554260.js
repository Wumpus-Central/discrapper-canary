n.d(t, { Z: () => i });
var r = n(629821);
class i extends r._ {
    primaryPrefix() {
        return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|a(?:l)?|\\?)\\s*";
    }
}
