"use strict";
n.d(t, { A: () => a });
var r = n(530560),
    i = n(632434);
class a extends r.X {
    shouldMergeResults(e, t, n) {
        return !t.end && !n.end && null != e.match(this.patternBetween());
    }
    mergeResults(e, t, n) {
        if (
            (t.start.isOnlyWeekdayComponent() ||
                n.start.isOnlyWeekdayComponent() ||
                (n.start.getCertainComponents().forEach((e) => {
                    t.start.isCertain(e) || t.start.imply(e, n.start.get(e));
                }),
                t.start.getCertainComponents().forEach((e) => {
                    n.start.isCertain(e) || n.start.imply(e, t.start.get(e));
                })),
            t.start.date() > n.start.date())
        ) {
            let e = t.start.date(),
                r = n.start.date();
            n.start.isOnlyWeekdayComponent() && (0, i.Gw)(r, { day: 7 }) > e
                ? ((r = (0, i.Gw)(r, { day: 7 })),
                  n.start.imply("day", r.getDate()),
                  n.start.imply("month", r.getMonth() + 1),
                  n.start.imply("year", r.getFullYear()))
                : t.start.isOnlyWeekdayComponent() && (0, i.Gw)(e, { day: -7 }) < r
                  ? ((e = (0, i.Gw)(e, { day: -7 })),
                    t.start.imply("day", e.getDate()),
                    t.start.imply("month", e.getMonth() + 1),
                    t.start.imply("year", e.getFullYear()))
                  : n.start.isDateWithUnknownYear() && (0, i.Gw)(r, { year: 1 }) > e
                    ? ((r = (0, i.Gw)(r, { year: 1 })), n.start.imply("year", r.getFullYear()))
                    : t.start.isDateWithUnknownYear() && (0, i.Gw)(e, { year: -1 }) < r
                      ? ((e = (0, i.Gw)(e, { year: -1 })), t.start.imply("year", e.getFullYear()))
                      : ([n, t] = [t, n]);
        }
        let r = t.clone();
        return (
            (r.start = t.start),
            (r.end = n.start),
            (r.index = Math.min(t.index, n.index)),
            t.index < n.index ? (r.text = t.text + e + n.text) : (r.text = n.text + e + t.text),
            r
        );
    }
}
