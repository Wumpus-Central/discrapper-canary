r.d(t, { A: () => a });
var n = r(530560),
    s = r(632434);
class a extends n.X {
    shouldMergeResults(e, t, r) {
        return !t.end && !r.end && null != e.match(this.patternBetween());
    }
    mergeResults(e, t, r) {
        if (
            (t.start.isOnlyWeekdayComponent() ||
                r.start.isOnlyWeekdayComponent() ||
                (r.start.getCertainComponents().forEach((e) => {
                    t.start.isCertain(e) || t.start.imply(e, r.start.get(e));
                }),
                t.start.getCertainComponents().forEach((e) => {
                    r.start.isCertain(e) || r.start.imply(e, t.start.get(e));
                })),
            t.start.date() > r.start.date())
        ) {
            let e = t.start.date(),
                n = r.start.date();
            r.start.isOnlyWeekdayComponent() && (0, s.Gw)(n, { day: 7 }) > e
                ? ((n = (0, s.Gw)(n, { day: 7 })),
                  r.start.imply("day", n.getDate()),
                  r.start.imply("month", n.getMonth() + 1),
                  r.start.imply("year", n.getFullYear()))
                : t.start.isOnlyWeekdayComponent() && (0, s.Gw)(e, { day: -7 }) < n
                  ? ((e = (0, s.Gw)(e, { day: -7 })),
                    t.start.imply("day", e.getDate()),
                    t.start.imply("month", e.getMonth() + 1),
                    t.start.imply("year", e.getFullYear()))
                  : r.start.isDateWithUnknownYear() && (0, s.Gw)(n, { year: 1 }) > e
                    ? ((n = (0, s.Gw)(n, { year: 1 })), r.start.imply("year", n.getFullYear()))
                    : t.start.isDateWithUnknownYear() && (0, s.Gw)(e, { year: -1 }) < n
                      ? ((e = (0, s.Gw)(e, { year: -1 })), t.start.imply("year", e.getFullYear()))
                      : ([r, t] = [t, r]);
        }
        let n = t.clone();
        return (
            (n.start = t.start),
            (n.end = r.start),
            (n.index = Math.min(t.index, r.index)),
            t.index < r.index ? (n.text = t.text + e + r.text) : (n.text = r.text + e + t.text),
            n
        );
    }
}
