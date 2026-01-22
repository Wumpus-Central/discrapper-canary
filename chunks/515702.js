n.d(t, {
    p: () => i,
});
let r = new Map();
class i {
    format(e) {
        return this.formatter.format(e);
    }
    formatToParts(e) {
        return this.formatter.formatToParts(e);
    }
    formatRange(e, t) {
        if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
        if (t < e) throw RangeError("End date must be >= start date");
        return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`;
    }
    formatRangeToParts(e, t) {
        if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, t);
        if (t < e) throw RangeError("End date must be >= start date");
        let n = this.formatter.formatToParts(e),
            r = this.formatter.formatToParts(t);
        return [
            ...n.map((e) => ({
                ...e,
                source: "startRange",
            })),
            {
                type: "literal",
                value: " – ",
                source: "shared",
            },
            ...r.map((e) => ({
                ...e,
                source: "endRange",
            })),
        ];
    }
    resolvedOptions() {
        let e = this.formatter.resolvedOptions();
        return (
            u() &&
                (this.resolvedHourCycle || (this.resolvedHourCycle = d(e.locale, this.options)),
                (e.hourCycle = this.resolvedHourCycle),
                (e.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle)),
            "ethiopic-amete-alem" === e.calendar && (e.calendar = "ethioaa"),
            e
        );
    }
    constructor(e, t = {}) {
        (this.formatter = s(e, t)), (this.options = t);
    }
}
let a = {
    true: {
        ja: "h11",
    },
    false: {},
};

function s(e, t = {}) {
    if ("boolean" == typeof t.hour12 && l()) {
        let n =
                a[
                    String(
                        (t = {
                            ...t,
                        }).hour12,
                    )
                ][e.split("-")[0]],
            r = t.hour12 ? "h12" : "h23";
        (t.hourCycle = null != n ? n : r), delete t.hour12;
    }
    let n =
        e +
        (t
            ? Object.entries(t)
                  .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                  .join()
            : "");
    if (r.has(n)) return r.get(n);
    let i = new Intl.DateTimeFormat(e, t);
    return r.set(n, i), i;
}
let o = null;

function l() {
    return (
        null == o &&
            (o =
                "24" ===
                new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    hour12: !1,
                }).format(new Date(2020, 2, 3, 0))),
        o
    );
}
let c = null;

function u() {
    return (
        null == c &&
            (c =
                "h12" ===
                new Intl.DateTimeFormat("fr", {
                    hour: "numeric",
                    hour12: !1,
                }).resolvedOptions().hourCycle),
        c
    );
}

function d(e, t) {
    if (!t.timeStyle && !t.hour) return;
    e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
    let n = s((e += (e.includes("-u-") ? "" : "-u") + "-nu-latn"), {
            ...t,
            timeZone: void 0,
        }),
        r = parseInt(n.formatToParts(new Date(2020, 2, 3, 0)).find((e) => "hour" === e.type).value, 10),
        i = parseInt(n.formatToParts(new Date(2020, 2, 3, 23)).find((e) => "hour" === e.type).value, 10);
    if (0 === r && 23 === i) return "h23";
    if (24 === r && 23 === i) return "h24";
    if (0 === r && 11 === i) return "h11";
    if (12 === r && 11 === i) return "h12";
    throw Error("Unexpected hour cycle result");
}
