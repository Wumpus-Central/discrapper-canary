r.d(t, { A: () => i });
var n = r(298362),
    s = r(374372),
    a = r(355418);
class i extends a.c {
    innerPattern() {
        return RegExp(`(?:en|por|durante|de|dentro de)\\s*(${n.Pl})(?=\\W|$)`, "i");
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]);
        return s.BP.createRelativeFromReference(e.reference, r);
    }
}
