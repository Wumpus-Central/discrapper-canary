n.d(t, { C2: () => u, H9: () => m, _D: () => r, b5: () => d, l1: () => o, xb: () => c });
var a = n(306327),
    i = n(827734),
    s = n(151196),
    l = n(297296);
function r(e, t, n) {
    return e.map((e, a) => (a === t ? n : e));
}
function o(e) {
    let t = String(e).match(/^(.+)_\d+$/);
    if (null == t) return null;
    let n = t[1];
    return l.p.includes(n) ? n : null;
}
function d(e) {
    let t = String(e).toLowerCase(),
        n = t.lastIndexOf("_");
    return -1 === n ? t.replace(/_/g, "-") : t.slice(0, n).replace(/_/g, "-") + "." + t.slice(n + 1);
}
function c(e) {
    if (!s.qR.test(e)) return null;
    try {
        return new a.A(e.startsWith("#") ? e : `#${e}`);
    } catch {
        return null;
    }
}
function u(e) {
    let t = s.OT,
        n = s.$Y,
        r = 1 / 0;
    for (let o of l.p)
        for (let l of s.iW[o]) {
            let s = e.deltaE(
                (function (e) {
                    let [t, n, s] = i.A.unsafe_rawColors[e].resolve().rgba();
                    return new a.A("srgb", [t / 255, n / 255, s / 255]);
                })(l.value),
                "2000",
            );
            s < r && ((r = s), (t = l.value), (n = o));
        }
    return { color: t, scale: n, deltaE: Math.round(100 * r) / 100 };
}
function m(e, t) {
    let [n, a, s, l] = i.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: n, g: a, b: s, a: l };
}
