Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.AbstractParserWithWordBoundaryChecking = void 0),
    (t.AbstractParserWithWordBoundaryChecking = class {
        constructor() {
            (this.cachedInnerPattern = null), (this.cachedPattern = null);
        }
        innerPatternHasChange(e, t) {
            return this.innerPattern(e) !== t;
        }
        patternLeftBoundary() {
            return "(\\W|^)";
        }
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
            var r;
            let n = null != (r = t[1]) ? r : "";
            (t.index = t.index + n.length), (t[0] = t[0].substring(n.length));
            for (let e = 2; e < t.length; e++) t[e - 1] = t[e];
            return this.innerExtract(e, t);
        }
    });
