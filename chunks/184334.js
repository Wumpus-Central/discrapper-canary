t.d(a, { e: () => o });
let u = new Map(),
    n = !1;
try {
    n = "exceptZero" === new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay;
} catch {}
let r = !1;
try {
    r =
        "unit" ===
        new Intl.NumberFormat("de-DE", {
            style: "unit",
            unit: "degree",
        }).resolvedOptions().style;
} catch {}
let i = {
    degree: {
        narrow: {
            default: "\xB0",
            "ja-JP": " 度",
            "zh-TW": "度",
            "sl-SI": " \xB0",
        },
    },
};
class o {
    format(e) {
        let a = "";
        if (
            ((a =
                n || null == this.options.signDisplay
                    ? this.numberFormatter.format(e)
                    : (function (e, a, t) {
                          if ("auto" === a) return e.format(t);
                          {
                              if ("never" === a) return e.format(Math.abs(t));
                              let u = !1;
                              if (
                                  ("always" === a
                                      ? (u = t > 0 || Object.is(t, 0))
                                      : "exceptZero" === a &&
                                        (Object.is(t, -0) || Object.is(t, 0) ? (t = Math.abs(t)) : (u = t > 0)),
                                  !u)
                              )
                                  return e.format(t);
                              {
                                  let a = e.format(-t),
                                      u = e.format(t),
                                      n = a.replace(u, "").replace(/\u200e|\u061C/, "");
                                  return (
                                      1 != [...n].length &&
                                          console.warn(
                                              "@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case",
                                          ),
                                      a.replace(u, "!!!").replace(n, "+").replace("!!!", u)
                                  );
                              }
                          }
                      })(this.numberFormatter, this.options.signDisplay, e)),
            "unit" === this.options.style && !r)
        ) {
            var t;
            let { unit: e, unitDisplay: u = "short", locale: n } = this.resolvedOptions();
            if (!e) return a;
            let r = null == (t = i[e]) ? void 0 : t[u];
            a += r[n] || r.default;
        }
        return a;
    }
    formatToParts(e) {
        return this.numberFormatter.formatToParts(e);
    }
    formatRange(e, a) {
        if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, a);
        if (a < e) throw RangeError("End date must be >= start date");
        return `${this.format(e)} \u{2013} ${this.format(a)}`;
    }
    formatRangeToParts(e, a) {
        if ("function" == typeof this.numberFormatter.formatRangeToParts)
            return this.numberFormatter.formatRangeToParts(e, a);
        if (a < e) throw RangeError("End date must be >= start date");
        let t = this.numberFormatter.formatToParts(e),
            u = this.numberFormatter.formatToParts(a);
        return [
            ...t.map((e) => ({
                ...e,
                source: "startRange",
            })),
            {
                type: "literal",
                value: " \u2013 ",
                source: "shared",
            },
            ...u.map((e) => ({
                ...e,
                source: "endRange",
            })),
        ];
    }
    resolvedOptions() {
        let e = this.numberFormatter.resolvedOptions();
        return (
            n ||
                null == this.options.signDisplay ||
                (e = {
                    ...e,
                    signDisplay: this.options.signDisplay,
                }),
            r ||
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
    constructor(e, a = {}) {
        (this.numberFormatter = (function (e, a = {}) {
            let { numberingSystem: t } = a;
            if (
                (t && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), (e += `-nu-${t}`)),
                "unit" === a.style && !r)
            ) {
                var n;
                let { unit: e, unitDisplay: t = "short" } = a;
                if (!e) throw Error('unit option must be provided with style: "unit"');
                if (!(null == (n = i[e]) ? void 0 : n[t])) throw Error(`Unsupported unit ${e} with unitDisplay = ${t}`);
                a = {
                    ...a,
                    style: "decimal",
                };
            }
            let o =
                e +
                (a
                    ? Object.entries(a)
                          .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                          .join()
                    : "");
            if (u.has(o)) return u.get(o);
            let l = new Intl.NumberFormat(e, a);
            return u.set(o, l), l;
        })(e, a)),
            (this.options = a);
    }
}
