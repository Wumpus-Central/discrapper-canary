t.d(e, { m: () => u });
var a = t(243399),
    r = t(206311),
    i = t(411211),
    s = t(501974);
function u(n, e) {
    let t = [],
        u = !1,
        o = !1,
        d = (0, s.n)(n),
        l = d.dataLocale,
        c = i.Y.localeData[l];
    if (!c) throw TypeError("Invalid locale");
    let _ = d.numberingSystem,
        f = c.digitalFormat[_];
    for (let n = 0; n < r.u.length && !u; n++) {
        let i = r.u[n],
            s = e[i.valueField],
            l = d[i.styleSlot],
            c = d[i.displaySlot],
            { unit: _, numberFormatUnit: h } = i,
            y = Object.create(null);
        ("seconds" === _ || "milliseconds" === _ || "microseconds" === _) &&
            "numeric" === ("seconds" === _ ? d.milliseconds : "milliseconds" === _ ? d.microseconds : d.nanoseconds) &&
            ("seconds" === _
                ? (s += e.milliseconds / 1e3 + e.microseconds / 1e6 + e.nanoseconds / 1e9)
                : "milliseconds" === _
                  ? (s += e.microseconds / 1e3 + e.nanoseconds / 1e6)
                  : (s += e.nanoseconds / 1e3),
            void 0 === d.fractionalDigits
                ? ((y.maximumFractionDigits = 9), (y.minimumFractionDigits = 0))
                : ((y.maximumFractionDigits = d.fractionalDigits), (y.minimumFractionDigits = d.fractionalDigits)),
            (y.roundingMode = "trunc"),
            (u = !0));
        if (0 !== s || "auto" !== c) {
            let n;
            (y.numberingSystem = d.numberingSystem),
                "2-digit" === l && (y.minimumIntegerDigits = 2),
                "2-digit" !== l && "numeric" !== l && ((y.style = "unit"), (y.unit = h), (y.unitDisplay = l));
            let e = (0, a.Nt)(d.locale, y);
            o ? (n = t[t.length - 1]).push({ type: "literal", value: f }) : (n = []),
                e.formatToParts(s).forEach(({ type: e, value: t }) => {
                    n.push({ type: e, value: t, unit: h });
                }),
                o || (("2-digit" === l || "numeric" === l) && (o = !0), t.push(n));
        } else o = !1;
    }
    let h = Object.create(null);
    h.type = "unit";
    let y = d.style;
    "digital" === y && (y = "short"), (h.style = y);
    let m = (0, a.A4)(d.locale, h),
        w = [];
    for (let n of t) {
        let e = "";
        for (let { value: t } of n) e += t;
        w.push(e);
    }
    let g = m.formatToParts(w),
        p = 0,
        v = t.length,
        b = [];
    for (let { type: n, value: e } of g)
        if ("element" === n) {
            for (let n of ((0, a.V1)(p < v, "Index out of bounds"), t[p])) b.push(n);
            p++;
        } else (0, a.V1)("literal" === n, "Type must be literal"), b.push({ type: "literal", value: e });
    return b;
}
t(854840);
