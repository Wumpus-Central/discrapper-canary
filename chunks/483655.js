n.d(t, { A: () => i });
var r = n(530560);
class i extends r.X {
    mergeResults(e, t, n) {
        let r = n.clone();
        return (
            (r.index = t.index),
            (r.text = t.text + e + r.text),
            r.start.assign("weekday", t.start.get("weekday")),
            r.end && r.end.assign("weekday", t.start.get("weekday")),
            r
        );
    }
    shouldMergeResults(e, t, n) {
        return (
            t.start.isOnlyWeekdayComponent() &&
            !t.start.isCertain("hour") &&
            n.start.isCertain("day") &&
            null != e.match(/^,?\s*$/)
        );
    }
}
