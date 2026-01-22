n.d(t, {
    A: () => s,
});
var r = n(6678),
    i = n(374372),
    a = n(355418);
class s extends a.c {
    innerPattern() {
        return RegExp(`(?:dans|en|pour|pendant|de)\\s*(${r.Pl})(?=\\W|$)`, "i");
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]);
        return i.BP.createRelativeFromReference(e.reference, n);
    }
}
