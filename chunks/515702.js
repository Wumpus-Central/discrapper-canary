t.d(a, { p: () => r });
let n = new Map();
class r {
    format(e) {
        return this.formatter.format(e);
    }
    formatToParts(e) {
        return this.formatter.formatToParts(e);
    }
    formatRange(e, a) {
        if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, a);
        if (a < e) throw RangeError("End date must be >= start date");
        return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(a)}`;
    }
    formatRangeToParts(e, a) {
        if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, a);
        if (a < e) throw RangeError("End date must be >= start date");
        let t = this.formatter.formatToParts(e),
            n = this.formatter.formatToParts(a);
        return [
            ...t.map((e) => ({ ...e, source: "startRange" })),
            { type: "literal", value: " \u2013 ", source: "shared" },
            ...n.map((e) => ({ ...e, source: "endRange" })),
        ];
    }
    resolvedOptions() {
        let e = this.formatter.resolvedOptions();
        return (
            null == u &&
                (u =
                    "h12" ===
                    new Intl.DateTimeFormat("fr", { hour: "numeric", hour12: !1 }).resolvedOptions().hourCycle),
            u &&
                (this.resolvedHourCycle ||
                    (this.resolvedHourCycle = (function (e, a) {
                        if (!a.timeStyle && !a.hour) return;
                        e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
                        let t = l((e += (e.includes("-u-") ? "" : "-u") + "-nu-latn"), { ...a, timeZone: void 0 }),
                            n = parseInt(
                                t.formatToParts(new Date(2020, 2, 3, 0)).find((e) => "hour" === e.type).value,
                                10,
                            ),
                            r = parseInt(
                                t.formatToParts(new Date(2020, 2, 3, 23)).find((e) => "hour" === e.type).value,
                                10,
                            );
                        if (0 === n && 23 === r) return "h23";
                        if (24 === n && 23 === r) return "h24";
                        if (0 === n && 11 === r) return "h11";
                        if (12 === n && 11 === r) return "h12";
                        throw Error("Unexpected hour cycle result");
                    })(e.locale, this.options)),
                (e.hourCycle = this.resolvedHourCycle),
                (e.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle)),
            "ethiopic-amete-alem" === e.calendar && (e.calendar = "ethioaa"),
            e
        );
    }
    constructor(e, a = {}) {
        (this.formatter = l(e, a)), (this.options = a);
    }
}
let i = { true: { ja: "h11" }, false: {} };
function l(e, a = {}) {
    if (
        "boolean" == typeof a.hour12 &&
        (null == o &&
            (o =
                "24" ===
                new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: !1 }).format(new Date(2020, 2, 3, 0))),
        o)
    ) {
        let t = i[String((a = { ...a }).hour12)][e.split("-")[0]],
            n = a.hour12 ? "h12" : "h23";
        (a.hourCycle = null != t ? t : n), delete a.hour12;
    }
    let t =
        e +
        (a
            ? Object.entries(a)
                  .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                  .join()
            : "");
    if (n.has(t)) return n.get(t);
    let r = new Intl.DateTimeFormat(e, a);
    return n.set(t, r), r;
}
let o = null,
    u = null;
