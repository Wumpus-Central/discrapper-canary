r.d(t, { A: () => s });
var n = r(530560);
class s extends n.X {
    mergeResults(e, t, r) {
        let n = t.clone();
        return (
            (n.text = t.text + e + r.text),
            n.start.assign("weekday", r.start.get("weekday")),
            n.end && n.end.assign("weekday", r.start.get("weekday")),
            n
        );
    }
    shouldMergeResults(e, t, r) {
        return (
            t.start.isCertain("day") &&
            r.start.isOnlyWeekdayComponent() &&
            !r.start.isCertain("hour") &&
            null !== e.match(/^[,、の]?\s*$/)
        );
    }
}
