"use strict";
n.d(t, { K: () => o });
let i = new Map(),
    r = !1;
try {
    r = "exceptZero" === new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay;
} catch {}
let s = !1;
try {
    s = "unit" === new Intl.NumberFormat("de-DE", { style: "unit", unit: "degree" }).resolvedOptions().style;
} catch {}
let a = { degree: { narrow: { default: "\xb0", "ja-JP": " \u5EA6", "zh-TW": "\u5EA6", "sl-SI": " \xb0" } } };
class o {
    format(e) {
        let t = "";
        if (
            ((t =
                r || null == this.options.signDisplay
                    ? this.numberFormatter.format(e)
                    : (function (e, t, n) {
                          if ("auto" === t) return e.format(n);
                          {
                              if ("never" === t) return e.format(Math.abs(n));
                              let i = !1;
                              if (
                                  ("always" === t
                                      ? (i = n > 0 || Object.is(n, 0))
                                      : "exceptZero" === t &&
                                        (Object.is(n, -0) || Object.is(n, 0) ? (n = Math.abs(n)) : (i = n > 0)),
                                  !i)
                              )
                                  return e.format(n);
                              {
                                  let t = e.format(-n),
                                      i = e.format(n),
                                      r = t.replace(i, "").replace(/\u200e|\u061C/, "");
                                  return (
                                      1 != [...r].length &&
                                          console.warn(
                                              "@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case",
                                          ),
                                      t.replace(i, "!!!").replace(r, "+").replace("!!!", i)
                                  );
                              }
                          }
                      })(this.numberFormatter, this.options.signDisplay, e)),
            "unit" === this.options.style && !s)
        ) {
            var n;
            let { unit: e, unitDisplay: i = "short", locale: r } = this.resolvedOptions();
            if (!e) return t;
            let s = null == (n = a[e]) ? void 0 : n[i];
            t += s[r] || s.default;
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
            i = this.numberFormatter.formatToParts(t);
        return [
            ...n.map((e) => ({ ...e, source: "startRange" })),
            { type: "literal", value: " \u2013 ", source: "shared" },
            ...i.map((e) => ({ ...e, source: "endRange" })),
        ];
    }
    resolvedOptions() {
        let e = this.numberFormatter.resolvedOptions();
        return (
            r || null == this.options.signDisplay || (e = { ...e, signDisplay: this.options.signDisplay }),
            s ||
                "unit" !== this.options.style ||
                (e = { ...e, style: "unit", unit: this.options.unit, unitDisplay: this.options.unitDisplay }),
            e
        );
    }
    constructor(e, t = {}) {
        (this.numberFormatter = (function (e, t = {}) {
            let { numberingSystem: n } = t;
            if (
                (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), (e += `-nu-${n}`)),
                "unit" === t.style && !s)
            ) {
                var r;
                let { unit: e, unitDisplay: n = "short" } = t;
                if (!e) throw Error('unit option must be provided with style: "unit"');
                if (!(null == (r = a[e]) ? void 0 : r[n])) throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
                t = { ...t, style: "decimal" };
            }
            let o =
                e +
                (t
                    ? Object.entries(t)
                          .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                          .join()
                    : "");
            if (i.has(o)) return i.get(o);
            let l = new Intl.NumberFormat(e, t);
            return i.set(o, l), l;
        })(e, t)),
            (this.options = t);
    }
}
