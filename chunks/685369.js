t.d(a, { K: () => o });
let r = new Map(),
    n = !1;
try {
    n = "exceptZero" === new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay;
} catch {}
let i = !1;
try {
    i = "unit" === new Intl.NumberFormat("de-DE", { style: "unit", unit: "degree" }).resolvedOptions().style;
} catch {}
let l = { degree: { narrow: { default: "\xb0", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " \xb0" } } };
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
                              let r = !1;
                              if (
                                  ("always" === a
                                      ? (r = t > 0 || Object.is(t, 0))
                                      : "exceptZero" === a &&
                                        (Object.is(t, -0) || Object.is(t, 0) ? (t = Math.abs(t)) : (r = t > 0)),
                                  !r)
                              )
                                  return e.format(t);
                              {
                                  let a = e.format(-t),
                                      r = e.format(t),
                                      n = a.replace(r, "").replace(/\u200e|\u061C/, "");
                                  return (
                                      1 != [...n].length &&
                                          console.warn(
                                              "@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case",
                                          ),
                                      a.replace(r, "!!!").replace(n, "+").replace("!!!", r)
                                  );
                              }
                          }
                      })(this.numberFormatter, this.options.signDisplay, e)),
            "unit" === this.options.style && !i)
        ) {
            var t;
            let { unit: e, unitDisplay: r = "short", locale: n } = this.resolvedOptions();
            if (!e) return a;
            let i = null == (t = l[e]) ? void 0 : t[r];
            a += i[n] || i.default;
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
            r = this.numberFormatter.formatToParts(a);
        return [
            ...t.map((e) => ({ ...e, source: "startRange" })),
            { type: "literal", value: " – ", source: "shared" },
            ...r.map((e) => ({ ...e, source: "endRange" })),
        ];
    }
    resolvedOptions() {
        let e = this.numberFormatter.resolvedOptions();
        return (
            n || null == this.options.signDisplay || (e = { ...e, signDisplay: this.options.signDisplay }),
            i ||
                "unit" !== this.options.style ||
                (e = { ...e, style: "unit", unit: this.options.unit, unitDisplay: this.options.unitDisplay }),
            e
        );
    }
    constructor(e, a = {}) {
        (this.numberFormatter = (function (e, a = {}) {
            let { numberingSystem: t } = a;
            if (
                (t && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), (e += `-nu-${t}`)),
                "unit" === a.style && !i)
            ) {
                var n;
                let { unit: e, unitDisplay: t = "short" } = a;
                if (!e) throw Error('unit option must be provided with style: "unit"');
                if (!(null == (n = l[e]) ? void 0 : n[t])) throw Error(`Unsupported unit ${e} with unitDisplay = ${t}`);
                a = { ...a, style: "decimal" };
            }
            let o =
                e +
                (a
                    ? Object.entries(a)
                          .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                          .join()
                    : "");
            if (r.has(o)) return r.get(o);
            let u = new Intl.NumberFormat(e, a);
            return r.set(o, u), u;
        })(e, a)),
            (this.options = a);
    }
}
