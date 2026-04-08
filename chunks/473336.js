n.d(t, { C2: () => u, EJ: () => m, _D: () => r, b5: () => d, l1: () => o, xb: () => c });
var a = n(306327),
    i = n(827734),
    l = n(151196),
    s = n(297296);
function r(e, t, n) {
    return e.map((e, a) => (a === t ? n : e));
}
function o(e) {
    let t = String(e).match(/^(.+)_\d+$/);
    if (null == t) return null;
    let n = t[1];
    return s.p.includes(n) ? n : null;
}
function d(e) {
    let t = String(e).toLowerCase(),
        n = t.lastIndexOf("_");
    return -1 === n ? t.replace(/_/g, "-") : t.slice(0, n).replace(/_/g, "-") + "." + t.slice(n + 1);
}
function c(e) {
    if (!l.qR.test(e)) return null;
    try {
        return new a.A(e.startsWith("#") ? e : `#${e}`);
    } catch {
        return null;
    }
}
function u(e) {
    let t = l.OT,
        n = l.$Y,
        r = 1 / 0;
    for (let o of s.p)
        for (let s of l.iW[o]) {
            let l = e.deltaE(
                (function (e) {
                    let [t, n, l] = i.A.unsafe_rawColors[e].resolve().rgba();
                    return new a.A("srgb", [t / 255, n / 255, l / 255]);
                })(s.value),
                "2000",
            );
            l < r && ((r = l), (t = s.value), (n = o));
        }
    return { color: t, scale: n, deltaE: Math.round(100 * r) / 100 };
}
function m(e) {
    return i.A.unsafe_rawColors[e].resolve().hex();
}
