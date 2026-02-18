t.d(a, { p: () => n });
let r = new Map();
class n {
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
            r = this.formatter.formatToParts(a);
        return [
            ...t.map((e) => ({ ...e, source: "startRange" })),
            { type: "literal", value: " – ", source: "shared" },
            ...r.map((e) => ({ ...e, source: "endRange" })),
        ];
    }
    resolvedOptions() {
        let e = this.formatter.resolvedOptions();
        return (
            null == l &&
                (l =
                    "h12" ===
                    new Intl.DateTimeFormat("fr", { hour: "numeric", hour12: !1 }).resolvedOptions().hourCycle),
            l &&
                (this.resolvedHourCycle ||
                    (this.resolvedHourCycle = (function (e, a) {
                        if (!a.timeStyle && !a.hour) return;
                        e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
                        let t = o((e += (e.includes("-u-") ? "" : "-u") + "-nu-latn"), { ...a, timeZone: void 0 }),
                            r = parseInt(
                                t.formatToParts(new Date(2020, 2, 3, 0)).find((e) => "hour" === e.type).value,
                                10,
                            ),
                            n = parseInt(
                                t.formatToParts(new Date(2020, 2, 3, 23)).find((e) => "hour" === e.type).value,
                                10,
                            );
                        if (0 === r && 23 === n) return "h23";
                        if (24 === r && 23 === n) return "h24";
                        if (0 === r && 11 === n) return "h11";
                        if (12 === r && 11 === n) return "h12";
                        throw Error("Unexpected hour cycle result");
                    })(e.locale, this.options)),
                (e.hourCycle = this.resolvedHourCycle),
                (e.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle)),
            "ethiopic-amete-alem" === e.calendar && (e.calendar = "ethioaa"),
            e
        );
    }
    constructor(e, a = {}) {
        (this.formatter = o(e, a)), (this.options = a);
    }
}
let i = { true: { ja: "h11" }, false: {} };
function o(e, a = {}) {
    if (
        "boolean" == typeof a.hour12 &&
        (null == u &&
            (u =
                "24" ===
                new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: !1 }).format(new Date(2020, 2, 3, 0))),
        u)
    ) {
        let t = i[String((a = { ...a }).hour12)][e.split("-")[0]],
            r = a.hour12 ? "h12" : "h23";
        (a.hourCycle = null != t ? t : r), delete a.hour12;
    }
    let t =
        e +
        (a
            ? Object.entries(a)
                  .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                  .join()
            : "");
    if (r.has(t)) return r.get(t);
    let n = new Intl.DateTimeFormat(e, a);
    return r.set(t, n), n;
}
let u = null,
    l = null;
