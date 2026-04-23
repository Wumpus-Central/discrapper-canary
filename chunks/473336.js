a.d(t, { C2: () => u, EJ: () => h, H9: () => m, _D: () => r, b5: () => d, l1: () => o, xb: () => c });
var n = a(306327),
    l = a(827734),
    i = a(151196),
    s = a(297296);
function r(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function o(e) {
    let t = String(e).match(/^(.+)_\d+$/);
    if (null == t) return null;
    let a = t[1];
    return s.p.includes(a) ? a : null;
}
function d(e) {
    let t = String(e).toLowerCase(),
        a = t.lastIndexOf("_");
    return -1 === a ? t.replace(/_/g, "-") : t.slice(0, a).replace(/_/g, "-") + "." + t.slice(a + 1);
}
function c(e) {
    if (!i.qR.test(e)) return null;
    try {
        return new n.A(e.startsWith("#") ? e : `#${e}`);
    } catch {
        return null;
    }
}
function u(e) {
    let t = i.OT,
        a = i.$Y,
        r = 1 / 0;
    for (let o of s.p)
        for (let s of i.iW[o]) {
            let i = e.deltaE(
                (function (e) {
                    let [t, a, i] = l.A.unsafe_rawColors[e].resolve().rgba();
                    return new n.A("srgb", [t / 255, a / 255, i / 255]);
                })(s.value),
                "2000",
            );
            i < r && ((r = i), (t = s.value), (a = o));
        }
    return { color: t, scale: a, deltaE: Math.round(100 * r) / 100 };
}
function m(e, t) {
    let [a, n, i, s] = l.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: i, a: s };
}
function h(e, t) {
    let a = l.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
