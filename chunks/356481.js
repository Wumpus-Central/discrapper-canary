t.d(e, { B: () => d });
var a = t(653938),
    r = t(570343),
    i = t(691581),
    s = t(86827),
    u = t(596223),
    o = t(839006);
function d(n, e, t, d, l, c) {
    let _, f;
    null == (_ = "lookup" === t.localeMatcher ? (0, s.V)(Array.from(n), e, c) : (0, a.k)(Array.from(n), e, c)) &&
        (_ = { locale: c(), extension: "" });
    let h = _.locale,
        y = l[h],
        m = { locale: "en", dataLocale: h };
    f = _.extension ? (0, u.v)(_.extension).keywords : [];
    let w = [];
    for (let n of d) {
        let e,
            a = y?.[n] ?? [];
        (0, o.V1)(Array.isArray(a), `keyLocaleData for ${n} must be an array`);
        let i = a[0];
        (0, o.V1)(void 0 === i || "string" == typeof i, "value must be a string or undefined");
        let s = f.find((e) => e.key === n);
        if (s) {
            let t = s.value;
            "" !== t
                ? a.indexOf(t) > -1 && (e = { key: n, value: (i = t) })
                : a.indexOf("true") > -1 && (e = { key: n, value: (i = "true") });
        }
        let u = t[n];
        if (
            ((0, o.V1)(null == u || "string" == typeof u, "optionsValue must be a string or undefined"),
            "string" == typeof u)
        ) {
            let e = n.toLowerCase();
            "" === (u = (0, r.t)(e, u)) && (u = "true");
        }
        u !== i && a.indexOf(u) > -1 && ((i = u), (e = void 0)), e && w.push(e), (m[n] = i);
    }
    let g = [];
    return w.length > 0 && ((g = []), (h = (0, i.N)(h, g, w))), (m.locale = h), m;
}
