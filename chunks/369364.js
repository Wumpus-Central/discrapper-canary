"use strict";
r.d(t, { m: () => s });
var n = r(243399),
    i = r(206311),
    o = r(411211),
    a = r(501974);
function s(e, t) {
    let r = [],
        s = !1,
        l = !1,
        u = (0, a.n)(e),
        c = u.dataLocale,
        d = o.Y.localeData[c];
    if (!d) throw TypeError("Invalid locale");
    let f = u.numberingSystem,
        p = d.digitalFormat[f];
    for (let e = 0; e < i.u.length && !s; e++) {
        let o = i.u[e],
            a = t[o.valueField],
            c = u[o.styleSlot],
            d = u[o.displaySlot],
            { unit: f, numberFormatUnit: h } = o,
            m = Object.create(null);
        ("seconds" === f || "milliseconds" === f || "microseconds" === f) &&
            "numeric" === ("seconds" === f ? u.milliseconds : "milliseconds" === f ? u.microseconds : u.nanoseconds) &&
            ("seconds" === f
                ? (a += t.milliseconds / 1e3 + t.microseconds / 1e6 + t.nanoseconds / 1e9)
                : "milliseconds" === f
                  ? (a += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                  : (a += t.nanoseconds / 1e3),
            void 0 === u.fractionalDigits
                ? ((m.maximumFractionDigits = 9), (m.minimumFractionDigits = 0))
                : ((m.maximumFractionDigits = u.fractionalDigits), (m.minimumFractionDigits = u.fractionalDigits)),
            (m.roundingMode = "trunc"),
            (s = !0));
        if (0 !== a || "auto" !== d) {
            let e;
            (m.numberingSystem = u.numberingSystem),
                "2-digit" === c && (m.minimumIntegerDigits = 2),
                "2-digit" !== c && "numeric" !== c && ((m.style = "unit"), (m.unit = h), (m.unitDisplay = c));
            let t = (0, n.Nt)(u.locale, m);
            l ? (e = r[r.length - 1]).push({ type: "literal", value: p }) : (e = []),
                t.formatToParts(a).forEach(({ type: t, value: r }) => {
                    e.push({ type: t, value: r, unit: h });
                }),
                l || (("2-digit" === c || "numeric" === c) && (l = !0), r.push(e));
        } else l = !1;
    }
    let h = Object.create(null);
    h.type = "unit";
    let m = u.style;
    "digital" === m && (m = "short"), (h.style = m);
    let g = (0, n.A4)(u.locale, h),
        v = [];
    for (let e of r) {
        let t = "";
        for (let { value: r } of e) t += r;
        v.push(t);
    }
    let y = g.formatToParts(v),
        b = 0,
        _ = r.length,
        w = [];
    for (let { type: e, value: t } of y)
        if ("element" === e) {
            for (let e of ((0, n.V1)(b < _, "Index out of bounds"), r[b])) w.push(e);
            b++;
        } else (0, n.V1)("literal" === e, "Type must be literal"), w.push({ type: "literal", value: t });
    return w;
}
r(632459);
