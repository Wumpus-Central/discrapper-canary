r.d(t, { A: () => a });
var n = r(530560),
    s = r(555558);
class a extends n.X {
    shouldMergeResults(e, t, r) {
        return (
            ((t.start.isOnlyDate() && r.start.isOnlyTime()) || (r.start.isOnlyDate() && t.start.isOnlyTime())) &&
            null != e.match(this.patternBetween())
        );
    }
    mergeResults(e, t, r) {
        let n = t.start.isOnlyDate() ? (0, s.h)(t, r) : (0, s.h)(r, t);
        return (n.index = t.index), (n.text = t.text + e + r.text), n;
    }
}
