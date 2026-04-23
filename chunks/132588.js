r.d(t, { i: () => f });
var n = r(160047);
let s = RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class a {
    timezoneOverrides;
    constructor(e) {
        this.timezoneOverrides = e;
    }
    refine(e, t) {
        let r = e.option.timezones ?? {};
        return (
            t.forEach((t) => {
                let a = e.text.substring(t.index + t.text.length),
                    i = s.exec(a);
                if (!i) return;
                let o = i[1].toUpperCase(),
                    l = t.start.date() ?? t.refDate ?? new Date(),
                    u = { ...this.timezoneOverrides, ...r },
                    m = (0, n.Cm)(o, l, u);
                if (null == m) return;
                e.debug(() => {
                    console.log(`Extracting timezone: '${o}' into: ${m} for: ${t.start}`);
                });
                let d = t.start.get("timezoneOffset");
                !(null !== d && m != d && (t.start.isCertain("timezoneOffset") || o != i[1])) &&
                    (!t.start.isOnlyDate() || o == i[1]) &&
                    ((t.text += i[0]),
                    t.start.isCertain("timezoneOffset") || t.start.assign("timezoneOffset", m),
                    null == t.end || t.end.isCertain("timezoneOffset") || t.end.assign("timezoneOffset", m));
            }),
            t
        );
    }
}
var i = r(321287),
    o = r(83707),
    l = r(658809),
    u = r(632434);
class m {
    refine(e, t) {
        return (
            e.option.forwardDate &&
                t.forEach((t) => {
                    let r = e.reference.getDateWithAdjustedTimezone();
                    if (t.start.isOnlyTime() && e.reference.instant > t.start.date()) {
                        let r = e.reference.getDateWithAdjustedTimezone(),
                            n = new Date(r);
                        n.setDate(n.getDate() + 1),
                            l.Hq(t.start, n),
                            e.debug(() => {
                                console.log(
                                    `${this.constructor.name} adjusted ${t} time from the ref date (${r}) to the following day (${n})`,
                                );
                            }),
                            t.end &&
                                t.end.isOnlyTime() &&
                                (l.Hq(t.end, n),
                                t.start.date() > t.end.date() && (n.setDate(n.getDate() + 1), l.Hq(t.end, n)));
                    }
                    if (t.start.isOnlyWeekdayComponent() && r > t.start.date()) {
                        let n = t.start.get("weekday") - r.getDay();
                        if (
                            (n <= 0 && (n += 7),
                            (r = (0, u.Gw)(r, { day: n })),
                            (0, l.Hq)(t.start, r),
                            e.debug(() => {
                                console.log(`${this.constructor.name} adjusted ${t} weekday (${t.start})`);
                            }),
                            t.end && t.end.isOnlyWeekdayComponent())
                        ) {
                            let n = t.end.get("weekday") - r.getDay();
                            n <= 0 && (n += 7),
                                (r = (0, u.Gw)(r, { day: n })),
                                (0, l.Hq)(t.end, r),
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
var d = r(530560);
class c extends d.d {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    isValid(e, t) {
        return t.text.replace(" ", "").match(/^\d*(\.\d*)?$/)
            ? (e.debug(() => {
                  console.log(`Removing unlikely result '${t.text}'`);
              }),
              !1)
            : t.start.isValidDate()
              ? t.end && !t.end.isValidDate()
                  ? (e.debug(() => {
                        console.log(`Removing invalid result: ${t} (${t.end})`);
                    }),
                    !1)
                  : !this.strictMode || this.isStrictModeValid(e, t)
              : (e.debug(() => {
                    console.log(`Removing invalid result: ${t} (${t.start})`);
                }),
                !1);
    }
    isStrictModeValid(e, t) {
        return (
            !t.start.isOnlyWeekdayComponent() ||
            (e.debug(() => {
                console.log(`(Strict) Removing weekday only component: ${t} (${t.end})`);
            }),
            !1)
        );
    }
}
var g = r(368324),
    h = r(483655);
function f(e, t = !1) {
    return (
        e.parsers.unshift(new g.A()),
        e.refiners.unshift(new h.A()),
        e.refiners.unshift(new i.A()),
        e.refiners.unshift(new o.A()),
        e.refiners.push(new a()),
        e.refiners.push(new o.A()),
        e.refiners.push(new m()),
        e.refiners.push(new c(t)),
        e
    );
}
