"use strict";
n.d(t, { m: () => u });
var r = n(243399),
    i = n(206311),
    a = n(411211),
    o = n(501974);
function u(e, t) {
    let n = [],
        u = !1,
        s = !1,
        l = (0, o.n)(e),
        d = l.dataLocale,
        c = a.Y.localeData[d];
    if (!c) throw TypeError("Invalid locale");
    let f = l.numberingSystem,
        h = c.digitalFormat[f];
    for (let e = 0; e < i.u.length && !u; e++) {
        let a = i.u[e],
            o = t[a.valueField],
            d = l[a.styleSlot],
            c = l[a.displaySlot],
            { unit: f, numberFormatUnit: p } = a,
            m = Object.create(null);
        ("seconds" === f || "milliseconds" === f || "microseconds" === f) &&
            "numeric" === ("seconds" === f ? l.milliseconds : "milliseconds" === f ? l.microseconds : l.nanoseconds) &&
            ("seconds" === f
                ? (o += t.milliseconds / 1e3 + t.microseconds / 1e6 + t.nanoseconds / 1e9)
                : "milliseconds" === f
                  ? (o += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                  : (o += t.nanoseconds / 1e3),
            void 0 === l.fractionalDigits
                ? ((m.maximumFractionDigits = 9), (m.minimumFractionDigits = 0))
                : ((m.maximumFractionDigits = l.fractionalDigits), (m.minimumFractionDigits = l.fractionalDigits)),
            (m.roundingMode = "trunc"),
            (u = !0));
        if (0 !== o || "auto" !== c) {
            let e;
            (m.numberingSystem = l.numberingSystem),
                "2-digit" === d && (m.minimumIntegerDigits = 2),
                "2-digit" !== d && "numeric" !== d && ((m.style = "unit"), (m.unit = p), (m.unitDisplay = d));
            let t = (0, r.Nt)(l.locale, m);
            s ? (e = n[n.length - 1]).push({ type: "literal", value: h }) : (e = []),
                t.formatToParts(o).forEach(({ type: t, value: n }) => {
                    e.push({ type: t, value: n, unit: p });
                }),
                s || (("2-digit" === d || "numeric" === d) && (s = !0), n.push(e));
        } else s = !1;
    }
    let p = Object.create(null);
    p.type = "unit";
    let m = l.style;
    "digital" === m && (m = "short"), (p.style = m);
    let v = (0, r.A4)(l.locale, p),
        _ = [];
    for (let e of n) {
        let t = "";
        for (let { value: n } of e) t += n;
        _.push(t);
    }
    let g = v.formatToParts(_),
        y = 0,
        D = n.length,
        b = [];
    for (let { type: e, value: t } of g)
        if ("element" === e) {
            for (let e of ((0, r.V1)(y < D, "Index out of bounds"), n[y])) b.push(e);
            y++;
        } else (0, r.V1)("literal" === e, "Type must be literal"), b.push({ type: "literal", value: t });
    return b;
}
n(632459);
