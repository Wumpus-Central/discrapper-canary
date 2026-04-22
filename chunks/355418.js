r.d(t, { c: () => n });
class n {
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
        let r = t[1] ?? "";
        (t.index = t.index + r.length), (t[0] = t[0].substring(r.length));
        for (let e = 2; e < t.length; e++) t[e - 1] = t[e];
        return this.innerExtract(e, t);
    }
}
