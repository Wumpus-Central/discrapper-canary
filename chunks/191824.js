r.d(t, { A: () => l });
var n = r(615339),
    s = r(374372),
    a = r(355418);
let i = RegExp(
        `(?:within|in|for)\\s*(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${n.Pl})(?=\\W|$)`,
        "i",
    ),
    o = RegExp(
        `(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${n.Pl})(?=\\W|$)`,
        "i",
    );
class l extends a.c {
    innerPattern(e) {
        return e.option.forwardDate ? o : i;
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]);
        return s.BP.createRelativeFromReference(e.reference, r);
    }
}
