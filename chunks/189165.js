"use strict";
n.d(t, { A: () => u });
var r = n(360345),
    i = n(374372),
    a = n(355418);
let s = RegExp(`(${r.Pl})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i"),
    o = RegExp(`(${r.d2})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i"),
    l = 1;
class u extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? o : s;
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[l]);
        return n ? i.BP.createRelativeFromReference(e.reference, n) : null;
    }
}
