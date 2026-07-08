t.d(n, { m: () => s });
var a = t(243399),
    r = t(206311),
    i = t(411211),
    u = t(501974);
function s(e, n) {
    let t = [],
        s = !1,
        o = !1,
        l = (0, u.n)(e),
        d = l.dataLocale,
        c = i.Y.localeData[d];
    if (!c) throw TypeError("Invalid locale");
    let _ = l.numberingSystem,
        f = c.digitalFormat[_];
    for (let e = 0; e < r.u.length && !s; e++) {
        let i = r.u[e],
            u = n[i.valueField],
            d = l[i.styleSlot],
            c = l[i.displaySlot],
            { unit: _, numberFormatUnit: y } = i,
            h = Object.create(null);
        ("seconds" === _ || "milliseconds" === _ || "microseconds" === _) &&
            "numeric" === ("seconds" === _ ? l.milliseconds : "milliseconds" === _ ? l.microseconds : l.nanoseconds) &&
            ("seconds" === _
                ? (u += n.milliseconds / 1e3 + n.microseconds / 1e6 + n.nanoseconds / 1e9)
                : "milliseconds" === _
                  ? (u += n.microseconds / 1e3 + n.nanoseconds / 1e6)
                  : (u += n.nanoseconds / 1e3),
            void 0 === l.fractionalDigits
                ? ((h.maximumFractionDigits = 9), (h.minimumFractionDigits = 0))
                : ((h.maximumFractionDigits = l.fractionalDigits), (h.minimumFractionDigits = l.fractionalDigits)),
            (h.roundingMode = "trunc"),
            (s = !0));
        if (0 !== u || "auto" !== c) {
            let e;
            (h.numberingSystem = l.numberingSystem),
                "2-digit" === d && (h.minimumIntegerDigits = 2),
                "2-digit" !== d && "numeric" !== d && ((h.style = "unit"), (h.unit = y), (h.unitDisplay = d));
            let n = (0, a.Nt)(l.locale, h);
            o ? (e = t[t.length - 1]).push({ type: "literal", value: f }) : (e = []),
                n.formatToParts(u).forEach(({ type: n, value: t }) => {
                    e.push({ type: n, value: t, unit: y });
                }),
                o || (("2-digit" === d || "numeric" === d) && (o = !0), t.push(e));
        } else o = !1;
    }
    let y = Object.create(null);
    y.type = "unit";
    let h = l.style;
    "digital" === h && (h = "short"), (y.style = h);
    let g = (0, a.A4)(l.locale, y),
        m = [];
    for (let e of t) {
        let n = "";
        for (let { value: t } of e) n += t;
        m.push(n);
    }
    let p = g.formatToParts(m),
        w = 0,
        b = t.length,
        v = [];
    for (let { type: e, value: n } of p)
        if ("element" === e) {
            for (let e of ((0, a.V1)(w < b, "Index out of bounds"), t[w])) v.push(e);
            w++;
        } else (0, a.V1)("literal" === e, "Type must be literal"), v.push({ type: "literal", value: n });
    return v;
}
t(632459);
