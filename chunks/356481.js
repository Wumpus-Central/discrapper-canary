"use strict";
n.d(t, { B: () => u });
var r = n(653938),
    i = n(570343),
    s = n(691581),
    a = n(86827),
    o = n(596223),
    l = n(839006);
function u(e, t, n, u, c, d) {
    let _, f;
    null == (_ = "lookup" === n.localeMatcher ? (0, a.V)(Array.from(e), t, d) : (0, r.k)(Array.from(e), t, d)) &&
        (_ = { locale: d(), extension: "" });
    let p = _.locale,
        h = c[p],
        E = { locale: "en", dataLocale: p };
    f = _.extension ? (0, o.v)(_.extension).keywords : [];
    let m = [];
    for (let e of u) {
        let t,
            r = h?.[e] ?? [];
        (0, l.V1)(Array.isArray(r), `keyLocaleData for ${e} must be an array`);
        let s = r[0];
        (0, l.V1)(void 0 === s || "string" == typeof s, "value must be a string or undefined");
        let a = f.find((t) => t.key === e);
        if (a) {
            let n = a.value;
            "" !== n
                ? r.indexOf(n) > -1 && (t = { key: e, value: (s = n) })
                : r.indexOf("true") > -1 && (t = { key: e, value: (s = "true") });
        }
        let o = n[e];
        if (
            ((0, l.V1)(null == o || "string" == typeof o, "optionsValue must be a string or undefined"),
            "string" == typeof o)
        ) {
            let t = e.toLowerCase();
            "" === (o = (0, i.t)(t, o)) && (o = "true");
        }
        o !== s && r.indexOf(o) > -1 && ((s = o), (t = void 0)), t && m.push(t), (E[e] = s);
    }
    let g = [];
    return m.length > 0 && ((g = []), (p = (0, s.N)(p, g, m))), (E.locale = p), E;
}
