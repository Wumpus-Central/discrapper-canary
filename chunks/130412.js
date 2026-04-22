r.d(t, { A: () => a });
var n = r(881190),
    s = r(632434);
class a {
    refine(e, t) {
        return (
            e.option.forwardDate &&
                t.forEach((t) => {
                    let r = e.reference.getDateWithAdjustedTimezone();
                    if (t.start.isOnlyTime() && e.reference.instant > t.start.date()) {
                        let r = e.reference.getDateWithAdjustedTimezone(),
                            s = new Date(r);
                        s.setDate(s.getDate() + 1),
                            n.Hq(t.start, s),
                            e.debug(() => {
                                console.log(
                                    `${this.constructor.name} adjusted ${t} time from the ref date (${r}) to the following day (${s})`,
                                );
                            }),
                            t.end &&
                                t.end.isOnlyTime() &&
                                (n.Hq(t.end, s),
                                t.start.date() > t.end.date() && (s.setDate(s.getDate() + 1), n.Hq(t.end, s)));
                    }
                    if (t.start.isOnlyWeekdayComponent() && r > t.start.date()) {
                        let a = t.start.get("weekday") - r.getDay();
                        if (
                            (a <= 0 && (a += 7),
                            (r = (0, s.Gw)(r, { day: a })),
                            (0, n.Hq)(t.start, r),
                            e.debug(() => {
                                console.log(`${this.constructor.name} adjusted ${t} weekday (${t.start})`);
                            }),
                            t.end && t.end.isOnlyWeekdayComponent())
                        ) {
                            let a = t.end.get("weekday") - r.getDay();
                            a <= 0 && (a += 7),
                                (r = (0, s.Gw)(r, { day: a })),
                                (0, n.Hq)(t.end, r),
                                e.debug(() => {
                                    console.log(`${this.constructor.name} adjusted ${t} weekday (${t.end})`);
                                });
                        }
                    }
                    if (t.start.isDateWithUnknownYear() && r > t.start.date())
                        for (let n = 0; n < 3 && r > t.start.date(); n++)
                            t.start.imply("year", t.start.get("year") + 1),
                                e.debug(() => {
                                    console.log(`${this.constructor.name} adjusted ${t} year (${t.start})`);
                                }),
                                t.end &&
                                    !t.end.isCertain("year") &&
                                    (t.end.imply("year", t.end.get("year") + 1),
                                    e.debug(() => {
                                        console.log(`${this.constructor.name} adjusted ${t} month (${t.start})`);
                                    }));
                }),
            t
        );
    }
}
