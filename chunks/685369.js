n.d(t, {
    K: () => o,
});
let r = new Map(),
    i = !1;
try {
    i =
        "exceptZero" ===
        new Intl.NumberFormat("de-DE", {
            signDisplay: "exceptZero",
        }).resolvedOptions().signDisplay;
} catch {}
let a = !1;
try {
    a =
        "unit" ===
        new Intl.NumberFormat("de-DE", {
            style: "unit",
            unit: "degree",
        }).resolvedOptions().style;
} catch {}
let s = {
    degree: {
        narrow: {
            default: "\xb0",
            "ja-JP": " 度",
            "zh-TW": "度",
            "sl-SI": " \xb0",
        },
    },
};
class o {
    format(e) {
        let t = "";
        if (
            ((t =
                i || null == this.options.signDisplay
                    ? this.numberFormatter.format(e)
                    : c(this.numberFormatter, this.options.signDisplay, e)),
            "unit" === this.options.style && !a)
        ) {
            var n;
            let { unit: e, unitDisplay: r = "short", locale: i } = this.resolvedOptions();
            if (!e) return t;
            let a = null == (n = s[e]) ? void 0 : n[r];
            t += a[i] || a.default;
        }
        return t;
    }
    formatToParts(e) {
        return this.numberFormatter.formatToParts(e);
    }
    formatRange(e, t) {
        if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, t);
        if (t < e) throw RangeError("End date must be >= start date");
        return `${this.format(e)} \u{2013} ${this.format(t)}`;
    }
    formatRangeToParts(e, t) {
        if ("function" == typeof this.numberFormatter.formatRangeToParts)
            return this.numberFormatter.formatRangeToParts(e, t);
        if (t < e) throw RangeError("End date must be >= start date");
        let n = this.numberFormatter.formatToParts(e),
            r = this.numberFormatter.formatToParts(t);
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
        let e = this.numberFormatter.resolvedOptions();
        return (
            i ||
                null == this.options.signDisplay ||
                (e = {
                    ...e,
                    signDisplay: this.options.signDisplay,
                }),
            a ||
                "unit" !== this.options.style ||
                (e = {
                    ...e,
                    style: "unit",
                    unit: this.options.unit,
                    unitDisplay: this.options.unitDisplay,
                }),
            e
        );
    }
    constructor(e, t = {}) {
        (this.numberFormatter = l(e, t)), (this.options = t);
    }
}

function l(e, t = {}) {
    let { numberingSystem: n } = t;
    if ((n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), (e += `-nu-${n}`)), "unit" === t.style && !a)) {
        var i;
        let { unit: e, unitDisplay: n = "short" } = t;
        if (!e) throw Error('unit option must be provided with style: "unit"');
        if (!(null == (i = s[e]) ? void 0 : i[n])) throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
        t = {
            ...t,
            style: "decimal",
        };
    }
    let o =
        e +
        (t
            ? Object.entries(t)
                  .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                  .join()
            : "");
    if (r.has(o)) return r.get(o);
    let c = new Intl.NumberFormat(e, t);
    return r.set(o, c), c;
}

function c(e, t, n) {
    if ("auto" === t) return e.format(n);
    {
        if ("never" === t) return e.format(Math.abs(n));
        let r = !1;
        if (
            ("always" === t
                ? (r = n > 0 || Object.is(n, 0))
                : "exceptZero" === t && (Object.is(n, -0) || Object.is(n, 0) ? (n = Math.abs(n)) : (r = n > 0)),
            !r)
        )
            return e.format(n);
        {
            let t = e.format(-n),
                r = e.format(n),
                i = t.replace(r, "").replace(/\u200e|\u061C/, "");
            return (
                1 != [...i].length &&
                    console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),
                t.replace(r, "!!!").replace(i, "+").replace("!!!", r)
            );
        }
    }
}
