t.d(a, { d: () => l });
var r = t(685369);
let n = RegExp("^.*\\(.*\\).*$"),
    i = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class l {
    parse(e) {
        return u(this.locale, this.options, e).parse(e);
    }
    isValidPartialNumber(e, a, t) {
        return u(this.locale, this.options, e).isValidPartialNumber(e, a, t);
    }
    getNumberingSystem(e) {
        return u(this.locale, this.options, e).options.numberingSystem;
    }
    constructor(e, a = {}) {
        (this.locale = e), (this.options = a);
    }
}
let o = new Map();
function u(e, a, t) {
    let r = s(e, a);
    if (!e.includes("-nu-") && !r.isValidPartialNumber(t)) {
        for (let n of i)
            if (n !== r.options.numberingSystem) {
                let r = s(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + n, a);
                if (r.isValidPartialNumber(t)) return r;
            }
    }
    return r;
}
function s(e, a) {
    let t =
            e +
            (a
                ? Object.entries(a)
                      .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                      .join()
                : ""),
        r = o.get(t);
    return r || ((r = new d(e, a)), o.set(t, r)), r;
}
class d {
    parse(e) {
        let a = this.sanitize(e);
        if (
            (this.symbols.group && (a = h(a, this.symbols.group, "")),
            this.symbols.decimal && (a = a.replace(this.symbols.decimal, ".")),
            this.symbols.minusSign && (a = a.replace(this.symbols.minusSign, "-")),
            (a = a.replace(this.symbols.numeral, this.symbols.index)),
            "percent" === this.options.style)
        ) {
            let e = a.indexOf("-"),
                t = (a = (a = a.replace("-", "")).replace("+", "")).indexOf(".");
            -1 === t && (t = a.length),
                (a = a.replace(".", "")),
                (a =
                    t - 2 == 0
                        ? `0.${a}`
                        : t - 2 == -1
                          ? `0.0${a}`
                          : t - 2 == -2
                            ? "0.00"
                            : `${a.slice(0, t - 2)}.${a.slice(t - 2)}`),
                e > -1 && (a = `-${a}`);
        }
        let t = a ? +a : NaN;
        if (isNaN(t)) return NaN;
        if ("percent" === this.options.style) {
            var i, o;
            let e = {
                ...this.options,
                style: "decimal",
                minimumFractionDigits: Math.min((null != (i = this.options.minimumFractionDigits) ? i : 0) + 2, 20),
                maximumFractionDigits: Math.min((null != (o = this.options.maximumFractionDigits) ? o : 0) + 2, 20),
            };
            return new l(this.locale, e).parse(new (0, r.K)(this.locale, e).format(t));
        }
        return "accounting" === this.options.currencySign && n.test(e) && (t *= -1), t;
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
                this.symbols.group && (e = h(e, ".", this.symbols.group))),
            "’" === this.symbols.group && e.includes("'") && (e = h(e, "'", this.symbols.group)),
            "fr-FR" === this.options.locale &&
                this.symbols.group &&
                ((e = h(e, " ", this.symbols.group)), (e = h(e, /\u00A0/g, this.symbols.group))),
            e
        );
    }
    isValidPartialNumber(e, a = -1 / 0, t = 1 / 0) {
        return (
            (e = this.sanitize(e)),
            this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && a < 0
                ? (e = e.slice(this.symbols.minusSign.length))
                : this.symbols.plusSign &&
                  e.startsWith(this.symbols.plusSign) &&
                  t > 0 &&
                  (e = e.slice(this.symbols.plusSign.length)),
            !(
                (this.symbols.group && e.startsWith(this.symbols.group)) ||
                (this.symbols.decimal &&
                    e.indexOf(this.symbols.decimal) > -1 &&
                    0 === this.options.maximumFractionDigits)
            ) &&
                (this.symbols.group && (e = h(e, this.symbols.group, "")),
                (e = e.replace(this.symbols.numeral, "")),
                this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")),
                0 === e.length)
        );
    }
    constructor(e, a = {}) {
        var t, r;
        (this.locale = e),
            1 !== a.roundingIncrement &&
                null != a.roundingIncrement &&
                (null == a.maximumFractionDigits && null == a.minimumFractionDigits
                    ? ((a.maximumFractionDigits = 0), (a.minimumFractionDigits = 0))
                    : null == a.maximumFractionDigits
                      ? (a.maximumFractionDigits = a.minimumFractionDigits)
                      : null == a.minimumFractionDigits && (a.minimumFractionDigits = a.maximumFractionDigits)),
            (this.formatter = new Intl.NumberFormat(e, a)),
            (this.options = this.formatter.resolvedOptions()),
            (this.symbols = (function (e, a, t, r) {
                var n, i, l, o, u;
                let s = new Intl.NumberFormat(e, {
                        ...t,
                        minimumSignificantDigits: 1,
                        maximumSignificantDigits: 21,
                        roundingIncrement: 1,
                        roundingPriority: "auto",
                        roundingMode: "halfExpand",
                    }),
                    d = s.formatToParts(-10000.111),
                    h = s.formatToParts(10000.111),
                    D = m.map((e) => s.formatToParts(e)),
                    p = null != (u = null == (n = d.find((e) => "minusSign" === e.type)) ? void 0 : n.value) ? u : "-",
                    g = null == (i = h.find((e) => "plusSign" === e.type)) ? void 0 : i.value;
                g ||
                    ((null == r ? void 0 : r.signDisplay) !== "exceptZero" &&
                        (null == r ? void 0 : r.signDisplay) !== "always") ||
                    (g = "+");
                let v =
                        null ==
                        (l = new Intl.NumberFormat(e, { ...t, minimumFractionDigits: 2, maximumFractionDigits: 2 })
                            .formatToParts(0.001)
                            .find((e) => "decimal" === e.type))
                            ? void 0
                            : l.value,
                    f = null == (o = d.find((e) => "group" === e.type)) ? void 0 : o.value,
                    b = [
                        ...new Set([
                            ...d.filter((e) => !c.has(e.type)).map((e) => y(e.value)),
                            ...D.flatMap((e) => e.filter((e) => !c.has(e.type)).map((e) => y(e.value))),
                        ]),
                    ].sort((e, a) => a.length - e.length),
                    A =
                        0 === b.length
                            ? RegExp("[\\p{White_Space}]", "gu")
                            : RegExp(`${b.join("|")}|[\\p{White_Space}]`, "gu"),
                    R = [...new Intl.NumberFormat(t.locale, { useGrouping: !1 }).format(0x24cb016ea)].reverse(),
                    $ = new Map(R.map((e, a) => [e, a]));
                return {
                    minusSign: p,
                    plusSign: g,
                    decimal: v,
                    group: f,
                    literals: A,
                    numeral: RegExp(`[${R.join("")}]`, "g"),
                    index: (e) => String($.get(e)),
                };
            })(e, this.formatter, this.options, a)),
            "percent" === this.options.style &&
                ((null != (t = this.options.minimumFractionDigits) ? t : 0) > 18 ||
                    (null != (r = this.options.maximumFractionDigits) ? r : 0) > 18) &&
                console.warn(
                    "NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.",
                );
    }
}
let c = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
    m = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function h(e, a, t) {
    return e.replaceAll ? e.replaceAll(a, t) : e.split(a).join(t);
}
function y(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
