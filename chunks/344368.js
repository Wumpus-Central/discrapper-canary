n.d(t, {
    F: () => o,
    M: () => a,
});
var r = n(727916),
    i = n(325854);
class a extends r.Z {
    patternLeftBoundary() {
        return i.f.leftBoundary;
    }
    innerPattern(e) {
        return new RegExp(this.innerPatternString(e), i.f.flags);
    }
    innerPatternHasChange(e, t) {
        return !1;
    }
}
class o extends a {
    innerPattern(e) {
        return RegExp(`${this.innerPatternString(e)}${i.f.rightBoundary}`, i.f.flags);
    }
}
