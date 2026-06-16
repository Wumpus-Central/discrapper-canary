r.d(t, { BP: () => o, b5: () => i, s4: () => l });
var n = r(881190),
    s = r(160047),
    a = r(632434);
class i {
    instant;
    timezoneOffset;
    constructor(e, t) {
        (this.instant = e ?? new Date()), (this.timezoneOffset = t ?? null);
    }
    static fromDate(e) {
        return new i(e);
    }
    static fromInput(e, t) {
        if (e instanceof Date) return i.fromDate(e);
        let r = e?.instant ?? new Date(),
            n = (0, s.Cm)(e?.timezone, r, t);
        return new i(r, n);
    }
    getDateWithAdjustedTimezone() {
        let e = new Date(this.instant);
        return (
            null !== this.timezoneOffset &&
                e.setMinutes(e.getMinutes() - this.getSystemTimezoneAdjustmentMinute(this.instant)),
            e
        );
    }
    getSystemTimezoneAdjustmentMinute(e, t) {
        (!e || 0 > e.getTime()) && (e = new Date());
        let r = -e.getTimezoneOffset(),
            n = t ?? this.timezoneOffset ?? r;
        return r - n;
    }
    getTimezoneOffset() {
        return this.timezoneOffset ?? -this.instant.getTimezoneOffset();
    }
}
class o {
    knownValues;
    impliedValues;
    reference;
    _tags = new Set();
    constructor(e, t) {
        if (((this.reference = e), (this.knownValues = {}), (this.impliedValues = {}), t))
            for (const e in t) this.knownValues[e] = t[e];
        const r = e.getDateWithAdjustedTimezone();
        this.imply("day", r.getDate()),
            this.imply("month", r.getMonth() + 1),
            this.imply("year", r.getFullYear()),
            this.imply("hour", 12),
            this.imply("minute", 0),
            this.imply("second", 0),
            this.imply("millisecond", 0);
    }
    static createRelativeFromReference(e, t = a.ks) {
        let r = (0, a.Gw)(e.getDateWithAdjustedTimezone(), t),
            s = new o(e);
        return (
            s.addTag("result/relativeDate"),
            "hour" in t || "minute" in t || "second" in t || "millisecond" in t
                ? (s.addTag("result/relativeDateAndTime"),
                  (0, n.i2)(s, r),
                  (0, n.Pl)(s, r),
                  s.assign("timezoneOffset", e.getTimezoneOffset()))
                : ((0, n.A4)(s, r),
                  s.imply("timezoneOffset", e.getTimezoneOffset()),
                  "day" in t
                      ? (s.assign("day", r.getDate()),
                        s.assign("month", r.getMonth() + 1),
                        s.assign("year", r.getFullYear()),
                        s.assign("weekday", r.getDay()))
                      : "week" in t
                        ? (s.assign("day", r.getDate()),
                          s.assign("month", r.getMonth() + 1),
                          s.assign("year", r.getFullYear()),
                          s.imply("weekday", r.getDay()))
                        : (s.imply("day", r.getDate()),
                          "month" in t
                              ? (s.assign("month", r.getMonth() + 1), s.assign("year", r.getFullYear()))
                              : (s.imply("month", r.getMonth() + 1),
                                "year" in t ? s.assign("year", r.getFullYear()) : s.imply("year", r.getFullYear())))),
            s
        );
    }
    get(e) {
        return e in this.knownValues ? this.knownValues[e] : e in this.impliedValues ? this.impliedValues[e] : null;
    }
    isCertain(e) {
        return e in this.knownValues;
    }
    getCertainComponents() {
        return Object.keys(this.knownValues);
    }
    imply(e, t) {
        return e in this.knownValues || (this.impliedValues[e] = t), this;
    }
    assign(e, t) {
        return (this.knownValues[e] = t), delete this.impliedValues[e], this;
    }
    addDurationAsImplied(e) {
        let t = this.dateWithoutTimezoneAdjustment(),
            r = (0, a.Gw)(t, e);
        return (
            ("day" in e || "week" in e || "month" in e || "year" in e) &&
                (this.delete(["day", "weekday", "month", "year"]),
                this.imply("day", r.getDate()),
                this.imply("weekday", r.getDay()),
                this.imply("month", r.getMonth() + 1),
                this.imply("year", r.getFullYear())),
            ("second" in e || "minute" in e || "hour" in e) &&
                (this.delete(["second", "minute", "hour"]),
                this.imply("second", r.getSeconds()),
                this.imply("minute", r.getMinutes()),
                this.imply("hour", r.getHours())),
            this
        );
    }
    delete(e) {
        for (let t of ("string" == typeof e && (e = [e]), e)) delete this.knownValues[t], delete this.impliedValues[t];
    }
    clone() {
        let e = new o(this.reference);
        for (let t in ((e.knownValues = {}), (e.impliedValues = {}), this.knownValues))
            e.knownValues[t] = this.knownValues[t];
        for (let t in this.impliedValues) e.impliedValues[t] = this.impliedValues[t];
        return e;
    }
    isOnlyDate() {
        return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
    }
    isOnlyTime() {
        return (
            !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month") && !this.isCertain("year")
        );
    }
    isOnlyWeekdayComponent() {
        return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
    }
    isDateWithUnknownYear() {
        return this.isCertain("month") && !this.isCertain("year");
    }
    isValidDate() {
        let e = this.dateWithoutTimezoneAdjustment();
        return (
            e.getFullYear() === this.get("year") &&
            e.getMonth() === this.get("month") - 1 &&
            e.getDate() === this.get("day") &&
            (null == this.get("hour") || e.getHours() == this.get("hour")) &&
            (null == this.get("minute") || e.getMinutes() == this.get("minute"))
        );
    }
    toString() {
        return `[ParsingComponents {
            tags: ${JSON.stringify(Array.from(this._tags).sort())}, 
            knownValues: ${JSON.stringify(this.knownValues)}, 
            impliedValues: ${JSON.stringify(this.impliedValues)}}, 
            reference: ${JSON.stringify(this.reference)}]`;
    }
    date() {
        let e = this.dateWithoutTimezoneAdjustment(),
            t = this.reference.getSystemTimezoneAdjustmentMinute(e, this.get("timezoneOffset"));
        return new Date(e.getTime() + 6e4 * t);
    }
    addTag(e) {
        return this._tags.add(e), this;
    }
    addTags(e) {
        for (let t of e) this._tags.add(t);
        return this;
    }
    tags() {
        return new Set(this._tags);
    }
    dateWithoutTimezoneAdjustment() {
        let e = new Date(
            this.get("year"),
            this.get("month") - 1,
            this.get("day"),
            this.get("hour"),
            this.get("minute"),
            this.get("second"),
            this.get("millisecond"),
        );
        return e.setFullYear(this.get("year")), e;
    }
}
class l {
    refDate;
    index;
    text;
    reference;
    start;
    end;
    constructor(e, t, r, n, s) {
        (this.reference = e),
            (this.refDate = e.instant),
            (this.index = t),
            (this.text = r),
            (this.start = n || new o(e)),
            (this.end = s);
    }
    clone() {
        let e = new l(this.reference, this.index, this.text);
        return (e.start = this.start ? this.start.clone() : null), (e.end = this.end ? this.end.clone() : null), e;
    }
    date() {
        return this.start.date();
    }
    addTag(e) {
        return this.start.addTag(e), this.end && this.end.addTag(e), this;
    }
    addTags(e) {
        return this.start.addTags(e), this.end && this.end.addTags(e), this;
    }
    tags() {
        let e = new Set(this.start.tags());
        if (this.end) for (let t of this.end.tags()) e.add(t);
        return e;
    }
    toString() {
        let e = Array.from(this.tags()).sort();
        return `[ParsingResult {index: ${this.index}, text: '${this.text}', tags: ${JSON.stringify(e)} ...}]`;
    }
}
