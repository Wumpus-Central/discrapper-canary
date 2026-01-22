n.d(t, { A: () => l });
var r = n(615339),
    i = n(374372),
    a = n(355418);
let s = RegExp(
        `(?:within|in|for)\\s*(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${r.Pl})(?=\\W|$)`,
        "i",
    ),
    o = RegExp(
        `(?:(?:pi\xf9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(${r.Pl})(?=\\W|$)`,
        "i",
    );
class l extends a.c {
    innerPattern(e) {
        return e.option.forwardDate ? o : s;
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]);
        return i.BP.createRelativeFromReference(e.reference, n);
    }
}
