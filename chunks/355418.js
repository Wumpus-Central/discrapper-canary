"use strict";
n.d(t, { c: () => r });
class r {
    innerPatternHasChange(e, t) {
        return this.innerPattern(e) !== t;
    }
    patternLeftBoundary() {
        return "(\\W|^)";
    }
    cachedInnerPattern = null;
    cachedPattern = null;
    pattern(e) {
        return (
            (this.cachedInnerPattern && !this.innerPatternHasChange(e, this.cachedInnerPattern)) ||
                ((this.cachedInnerPattern = this.innerPattern(e)),
                (this.cachedPattern = RegExp(
                    `${this.patternLeftBoundary()}${this.cachedInnerPattern.source}`,
                    this.cachedInnerPattern.flags,
                ))),
            this.cachedPattern
        );
    }
    extract(e, t) {
        let n = t[1] ?? "";
        (t.index = t.index + n.length), (t[0] = t[0].substring(n.length));
        for (let e = 2; e < t.length; e++) t[e - 1] = t[e];
        return this.innerExtract(e, t);
    }
}
