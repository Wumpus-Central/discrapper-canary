t.d(n, { m: () => o });
var i = t(243399),
    r = t(206311),
    a = t(411211),
    s = t(501974);
function o(e, n) {
    let t = [],
        o = !1,
        u = !1,
        l = (0, s.n)(e),
        d = l.dataLocale,
        c = a.Y.localeData[d];
    if (!c) throw TypeError("Invalid locale");
    let f = l.numberingSystem,
        p = c.digitalFormat[f];
    for (let e = 0; e < r.u.length && !o; e++) {
        let a = r.u[e],
            s = n[a.valueField],
            d = l[a.styleSlot],
            c = l[a.displaySlot],
            { unit: f, numberFormatUnit: h } = a,
            _ = Object.create(null);
        ("seconds" === f || "milliseconds" === f || "microseconds" === f) &&
            "numeric" === ("seconds" === f ? l.milliseconds : "milliseconds" === f ? l.microseconds : l.nanoseconds) &&
            ("seconds" === f
                ? (s += n.milliseconds / 1e3 + n.microseconds / 1e6 + n.nanoseconds / 1e9)
                : "milliseconds" === f
                  ? (s += n.microseconds / 1e3 + n.nanoseconds / 1e6)
                  : (s += n.nanoseconds / 1e3),
            void 0 === l.fractionalDigits
                ? ((_.maximumFractionDigits = 9), (_.minimumFractionDigits = 0))
                : ((_.maximumFractionDigits = l.fractionalDigits), (_.minimumFractionDigits = l.fractionalDigits)),
            (_.roundingMode = "trunc"),
            (o = !0));
        if (0 !== s || "auto" !== c) {
            let e;
            ((_.numberingSystem = l.numberingSystem),
                "2-digit" === d && (_.minimumIntegerDigits = 2),
                "2-digit" !== d && "numeric" !== d && ((_.style = "unit"), (_.unit = h), (_.unitDisplay = d)));
            let n = (0, i.Nt)(l.locale, _);
            (u ? (e = t[t.length - 1]).push({ type: "literal", value: p }) : (e = []),
                n.formatToParts(s).forEach(({ type: n, value: t }) => {
                    e.push({ type: n, value: t, unit: h });
                }),
                u || (("2-digit" === d || "numeric" === d) && (u = !0), t.push(e)));
        } else u = !1;
    }
    let h = Object.create(null);
    h.type = "unit";
    let _ = l.style;
    ("digital" === _ && (_ = "short"), (h.style = _));
    let m = (0, i.A4)(l.locale, h),
        y = [];
    for (let e of t) {
        let n = "";
        for (let { value: t } of e) n += t;
        y.push(n);
    }
    let g = m.formatToParts(y),
        w = 0,
        v = t.length,
        b = [];
    for (let { type: e, value: n } of g)
        if ("element" === e) {
            for (let e of ((0, i.V1)(w < v, "Index out of bounds"), t[w])) b.push(e);
            w++;
        } else ((0, i.V1)("literal" === e, "Type must be literal"), b.push({ type: "literal", value: n }));
    return b;
}
t(632459);
