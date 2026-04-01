"use strict";
n.d(t, { m: () => o });
var r = n(243399),
    i = n(206311),
    s = n(411211),
    a = n(501974);
function o(e, t) {
    let n = [],
        o = !1,
        l = !1,
        u = (0, a.n)(e),
        c = u.dataLocale,
        d = s.Y.localeData[c];
    if (!d) throw TypeError("Invalid locale");
    let _ = u.numberingSystem,
        f = d.digitalFormat[_];
    for (let e = 0; e < i.u.length && !o; e++) {
        let s = i.u[e],
            a = t[s.valueField],
            c = u[s.styleSlot],
            d = u[s.displaySlot],
            { unit: _, numberFormatUnit: p } = s,
            h = Object.create(null);
        if ("seconds" === _ || "milliseconds" === _ || "microseconds" === _) {
            let e;
            "numeric" ===
                (e = "seconds" === _ ? u.milliseconds : "milliseconds" === _ ? u.microseconds : u.nanoseconds) &&
                ("seconds" === _
                    ? (a += t.milliseconds / 1e3 + t.microseconds / 1e6 + t.nanoseconds / 1e9)
                    : "milliseconds" === _
                      ? (a += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                      : (a += t.nanoseconds / 1e3),
                void 0 === u.fractionalDigits
                    ? ((h.maximumFractionDigits = 9), (h.minimumFractionDigits = 0))
                    : ((h.maximumFractionDigits = u.fractionalDigits), (h.minimumFractionDigits = u.fractionalDigits)),
                (h.roundingMode = "trunc"),
                (o = !0));
        }
        if (0 !== a || "auto" !== d) {
            let e;
            (h.numberingSystem = u.numberingSystem),
                "2-digit" === c && (h.minimumIntegerDigits = 2),
                "2-digit" !== c && "numeric" !== c && ((h.style = "unit"), (h.unit = p), (h.unitDisplay = c));
            let t = (0, r.Nt)(u.locale, h);
            l ? (e = n[n.length - 1]).push({ type: "literal", value: f }) : (e = []),
                t.formatToParts(a).forEach(({ type: t, value: n }) => {
                    e.push({ type: t, value: n, unit: p });
                }),
                l || (("2-digit" === c || "numeric" === c) && (l = !0), n.push(e));
        } else l = !1;
    }
    let p = Object.create(null);
    p.type = "unit";
    let h = u.style;
    "digital" === h && (h = "short"), (p.style = h);
    let m = (0, r.A4)(u.locale, p),
        E = [];
    for (let e of n) {
        let t = "";
        for (let { value: n } of e) t += n;
        E.push(t);
    }
    let g = m.formatToParts(E),
        A = 0,
        I = n.length,
        T = [];
    for (let { type: e, value: t } of g)
        if ("element" === e) {
            for (let e of ((0, r.V1)(A < I, "Index out of bounds"), n[A])) T.push(e);
            A++;
        } else (0, r.V1)("literal" === e, "Type must be literal"), T.push({ type: "literal", value: t });
    return T;
}
n(632459);
