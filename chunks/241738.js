"use strict";
n.d(t, { d: () => a, w: () => s });
var r = n(355418),
    i = n(989479);
class a extends r.c {
    patternLeftBoundary() {
        return i.pW.leftBoundary;
    }
    innerPattern(e) {
        return new RegExp(this.innerPatternString(e), i.pW.flags);
    }
    innerPatternHasChange(e, t) {
        return !1;
    }
}
class s extends a {
    innerPattern(e) {
        return RegExp(`${this.innerPatternString(e)}${i.pW.rightBoundary}`, i.pW.flags);
    }
}
