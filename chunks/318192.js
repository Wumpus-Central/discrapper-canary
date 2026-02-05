"use strict";
n.d(t, { d: () => s });
var r = n(685369);
let i = RegExp("^.*\\(.*\\).*$"),
    a = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class s {
    parse(e) {
        return l(this.locale, this.options, e).parse(e);
    }
    isValidPartialNumber(e, t, n) {
        return l(this.locale, this.options, e).isValidPartialNumber(e, t, n);
    }
    getNumberingSystem(e) {
        return l(this.locale, this.options, e).options.numberingSystem;
    }
    constructor(e, t = {}) {
        (this.locale = e), (this.options = t);
    }
}
let o = new Map();
function l(e, t, n) {
    let r = u(e, t);
    if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
        for (let i of a)
            if (i !== r.options.numberingSystem) {
                let r = u(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
                if (r.isValidPartialNumber(n)) return r;
            }
    }
    return r;
}
function u(e, t) {
    let n =
            e +
            (t
                ? Object.entries(t)
                      .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                      .join()
                : ""),
        r = o.get(n);
    return r || ((r = new c(e, t)), o.set(n, r)), r;
}
class c {
    parse(e) {
        let t = this.sanitize(e);
        if (
            (this.symbols.group && (t = p(t, this.symbols.group, "")),
            this.symbols.decimal && (t = t.replace(this.symbols.decimal, ".")),
            this.symbols.minusSign && (t = t.replace(this.symbols.minusSign, "-")),
            (t = t.replace(this.symbols.numeral, this.symbols.index)),
            "percent" === this.options.style)
        ) {
            let e = t.indexOf("-"),
                n = (t = (t = t.replace("-", "")).replace("+", "")).indexOf(".");
            -1 === n && (n = t.length),
                (t = t.replace(".", "")),
                (t =
                    n - 2 == 0
                        ? `0.${t}`
                        : n - 2 == -1
                          ? `0.0${t}`
                          : n - 2 == -2
                            ? "0.00"
                            : `${t.slice(0, n - 2)}.${t.slice(n - 2)}`),
                e > -1 && (t = `-${t}`);
        }
        let n = t ? +t : NaN;
        if (isNaN(n)) return NaN;
        if ("percent" === this.options.style) {
            var a, o;
            let e = {
                ...this.options,
                style: "decimal",
                minimumFractionDigits: Math.min((null != (a = this.options.minimumFractionDigits) ? a : 0) + 2, 20),
                maximumFractionDigits: Math.min((null != (o = this.options.maximumFractionDigits) ? o : 0) + 2, 20),
            };
            return new s(this.locale, e).parse(new (0, r.K)(this.locale, e).format(n));
        }
        return "accounting" === this.options.currencySign && i.test(e) && (n *= -1), n;
    }
    sanitize(e) {
        return (
            (e = e.replace(this.symbols.literals, "")),
            this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)),
            "arab" === this.options.numberingSystem &&
                (this.symbols.decimal &&
                    (e = (e = e.replace(",", this.symbols.decimal)).replace(
                        String.fromCharCode(1548),
                        this.symbols.decimal,
                    )),
                this.symbols.group && (e = p(e, ".", this.symbols.group))),
            "’" === this.symbols.group && e.includes("'") && (e = p(e, "'", this.symbols.group)),
            "fr-FR" === this.options.locale &&
                this.symbols.group &&
                ((e = p(e, " ", this.symbols.group)), (e = p(e, /\u00A0/g, this.symbols.group))),
            e
        );
    }
    isValidPartialNumber(e, t = -1 / 0, n = 1 / 0) {
        return (
            (e = this.sanitize(e)),
            this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0
                ? (e = e.slice(this.symbols.minusSign.length))
                : this.symbols.plusSign &&
                  e.startsWith(this.symbols.plusSign) &&
                  n > 0 &&
                  (e = e.slice(this.symbols.plusSign.length)),
            !(
                (this.symbols.group && e.startsWith(this.symbols.group)) ||
                (this.symbols.decimal &&
                    e.indexOf(this.symbols.decimal) > -1 &&
                    0 === this.options.maximumFractionDigits)
            ) &&
                (this.symbols.group && (e = p(e, this.symbols.group, "")),
                (e = e.replace(this.symbols.numeral, "")),
                this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")),
                0 === e.length)
        );
    }
    constructor(e, t = {}) {
        var n, r;
        (this.locale = e),
            1 !== t.roundingIncrement &&
                null != t.roundingIncrement &&
                (null == t.maximumFractionDigits && null == t.minimumFractionDigits
                    ? ((t.maximumFractionDigits = 0), (t.minimumFractionDigits = 0))
                    : null == t.maximumFractionDigits
                      ? (t.maximumFractionDigits = t.minimumFractionDigits)
                      : null == t.minimumFractionDigits && (t.minimumFractionDigits = t.maximumFractionDigits)),
            (this.formatter = new Intl.NumberFormat(e, t)),
            (this.options = this.formatter.resolvedOptions()),
            (this.symbols = f(e, this.formatter, this.options, t)),
            "percent" === this.options.style &&
                ((null != (n = this.options.minimumFractionDigits) ? n : 0) > 18 ||
                    (null != (r = this.options.maximumFractionDigits) ? r : 0) > 18) &&
                console.warn(
                    "NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.",
                );
    }
}
let d = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
    _ = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function f(e, t, n, r) {
    var i, a, s, o, l;
    let u = new Intl.NumberFormat(e, {
            ...n,
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 21,
            roundingIncrement: 1,
            roundingPriority: "auto",
            roundingMode: "halfExpand",
        }),
        c = u.formatToParts(-10000.111),
        f = u.formatToParts(10000.111),
        p = _.map((e) => u.formatToParts(e)),
        m = null != (l = null == (i = c.find((e) => "minusSign" === e.type)) ? void 0 : i.value) ? l : "-",
        g = null == (a = f.find((e) => "plusSign" === e.type)) ? void 0 : a.value;
    g ||
        ((null == r ? void 0 : r.signDisplay) !== "exceptZero" && (null == r ? void 0 : r.signDisplay) !== "always") ||
        (g = "+");
    let E =
            null ==
            (s = new Intl.NumberFormat(e, { ...n, minimumFractionDigits: 2, maximumFractionDigits: 2 })
                .formatToParts(0.001)
                .find((e) => "decimal" === e.type))
                ? void 0
                : s.value,
        A = null == (o = c.find((e) => "group" === e.type)) ? void 0 : o.value,
        I = [
            ...new Set([
                ...c.filter((e) => !d.has(e.type)).map((e) => h(e.value)),
                ...p.flatMap((e) => e.filter((e) => !d.has(e.type)).map((e) => h(e.value))),
            ]),
        ].sort((e, t) => t.length - e.length),
        T = 0 === I.length ? RegExp("[\\p{White_Space}]", "gu") : RegExp(`${I.join("|")}|[\\p{White_Space}]`, "gu"),
        y = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(0x24cb016ea)].reverse(),
        S = new Map(y.map((e, t) => [e, t]));
    return {
        minusSign: m,
        plusSign: g,
        decimal: E,
        group: A,
        literals: T,
        numeral: RegExp(`[${y.join("")}]`, "g"),
        index: (e) => String(S.get(e)),
    };
}
function p(e, t, n) {
    return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function h(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
