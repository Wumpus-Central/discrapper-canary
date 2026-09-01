Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(88559);
class a extends n.MergingRefiner {
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
            null !== e.match(/^[,\u3001\u306e]?\s*$/)
        );
    }
}
t.default = a;
