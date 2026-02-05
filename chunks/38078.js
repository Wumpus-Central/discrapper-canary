"use strict";
n.d(t, { A: () => o });
var r = n(147426),
    i = n(374372),
    a = n(355418);
let s = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${r.Pl})${r.pW.rightBoundary}`;
class o extends a.c {
    patternLeftBoundary() {
        return r.pW.leftBoundary;
    }
    innerPattern(e) {
        return e.option.forwardDate
            ? RegExp(s, "i")
            : RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${s}`, r.pW.flags);
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]);
        return i.BP.createRelativeFromReference(e.reference, n);
    }
}
