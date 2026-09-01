Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(88559);
class a extends n.MergingRefiner {
    mergeResults(e, t, r) {
        let n = r.clone();
        return (
            (n.index = t.index),
            (n.text = t.text + e + n.text),
            n.start.assign("weekday", t.start.get("weekday")),
            n.end && n.end.assign("weekday", t.start.get("weekday")),
            n
        );
    }
    shouldMergeResults(e, t, r) {
        return (
            t.start.isOnlyWeekdayComponent() &&
            !t.start.isCertain("hour") &&
            r.start.isCertain("day") &&
            null != e.match(/^,?\s*$/)
        );
    }
}
t.default = a;
