"use strict";
r.d(t, { K: () => s });
let n = new Map(),
    o = !1;
try {
    o = "exceptZero" === new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay;
} catch {}
let i = !1;
try {
    i = "unit" === new Intl.NumberFormat("de-DE", { style: "unit", unit: "degree" }).resolvedOptions().style;
} catch {}
let a = { degree: { narrow: { default: "\xb0", "ja-JP": " \u5EA6", "zh-TW": "\u5EA6", "sl-SI": " \xb0" } } };
class s {
    format(e) {
        let t = "";
        if (
            ((t =
                o || null == this.options.signDisplay
                    ? this.numberFormatter.format(e)
                    : (function (e, t, r) {
                          if ("auto" === t) return e.format(r);
                          {
                              if ("never" === t) return e.format(Math.abs(r));
                              let n = !1;
                              if (
                                  ("always" === t
                                      ? (n = r > 0 || Object.is(r, 0))
                                      : "exceptZero" === t &&
                                        (Object.is(r, -0) || Object.is(r, 0) ? (r = Math.abs(r)) : (n = r > 0)),
                                  !n)
                              )
                                  return e.format(r);
                              {
                                  let t = e.format(-r),
                                      n = e.format(r),
                                      o = t.replace(n, "").replace(/\u200e|\u061C/, "");
                                  return (
                                      1 != [...o].length &&
                                          console.warn(
                                              "@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case",
                                          ),
                                      t.replace(n, "!!!").replace(o, "+").replace("!!!", n)
                                  );
                              }
                          }
                      })(this.numberFormatter, this.options.signDisplay, e)),
            "unit" === this.options.style && !i)
        ) {
            var r;
            let { unit: e, unitDisplay: n = "short", locale: o } = this.resolvedOptions();
            if (!e) return t;
            let i = null == (r = a[e]) ? void 0 : r[n];
            t += i[o] || i.default;
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
        let r = this.numberFormatter.formatToParts(e),
            n = this.numberFormatter.formatToParts(t);
        return [
            ...r.map((e) => ({ ...e, source: "startRange" })),
            { type: "literal", value: " \u2013 ", source: "shared" },
            ...n.map((e) => ({ ...e, source: "endRange" })),
        ];
    }
    resolvedOptions() {
        let e = this.numberFormatter.resolvedOptions();
        return (
            o || null == this.options.signDisplay || (e = { ...e, signDisplay: this.options.signDisplay }),
            i ||
                "unit" !== this.options.style ||
                (e = { ...e, style: "unit", unit: this.options.unit, unitDisplay: this.options.unitDisplay }),
            e
        );
    }
    constructor(e, t = {}) {
        (this.numberFormatter = (function (e, t = {}) {
            let { numberingSystem: r } = t;
            if (
                (r && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), (e += `-nu-${r}`)),
                "unit" === t.style && !i)
            ) {
                var o;
                let { unit: e, unitDisplay: r = "short" } = t;
                if (!e) throw Error('unit option must be provided with style: "unit"');
                if (!(null == (o = a[e]) ? void 0 : o[r])) throw Error(`Unsupported unit ${e} with unitDisplay = ${r}`);
                t = { ...t, style: "decimal" };
            }
            let s =
                e +
                (t
                    ? Object.entries(t)
                          .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                          .join()
                    : "");
            if (n.has(s)) return n.get(s);
            let l = new Intl.NumberFormat(e, t);
            return n.set(s, l), l;
        })(e, t)),
            (this.options = t);
    }
}
