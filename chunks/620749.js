n.d(t, {
    A: () => a,
});
var r = n(530560),
    i = n(555558);
class a extends r.X {
    shouldMergeResults(e, t, n) {
        return (
            ((t.start.isOnlyDate() && n.start.isOnlyTime()) || (n.start.isOnlyDate() && t.start.isOnlyTime())) &&
            null != e.match(this.patternBetween())
        );
    }
    mergeResults(e, t, n) {
        let r = t.start.isOnlyDate() ? (0, i.h)(t, n) : (0, i.h)(n, t);
        return (r.index = t.index), (r.text = t.text + e + n.text), r;
    }
}
