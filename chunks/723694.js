n.d(t, {
    Xr: () => R,
    UZ: () => S,
    nO: () => g,
    eT: () => O,
    $0: () => f,
    A5: () => c,
    Fj: () => _,
    as: () => h,
    mT: () => N,
    xo: () => I,
    gN: () => C,
    kv: () => u,
    cf: () => m,
    fO: () => A,
});
var i = n(310784),
    r = n.n(i),
    a = n(508425),
    s = n(317097),
    l = n(52133);
function o(e, t) {
    return null != e && 0 !== e.length && !t.some((t) => t.length === e.length && t.every((t, n) => t === e[n]));
}
var d = n(750656);
function c(e, t) {
    if (null == e) return null;
    let { fontId: n, effectId: i, colors: r } = e;
    return { fontId: n, effectId: i, colors: r.length > 0 ? r : t[i] };
}
function u(e, t) {
    return null == e || null == t
        ? null == e && null == t
        : e.fontId === t.fontId && e.effectId === t.effectId && (0, l.v)(e.colors, t.colors);
}
function _(e, t) {
    let n,
        i = (0, d.ii)(e),
        r = o(t, i);
    return ((n = i.slice()), null == t || 0 === n.length || !o(t, i) || (n[0] = t.slice()), n).map((e, t) => ({
        colors: e,
        isCustom: r && 0 === t,
    }));
}
function E(e, t) {
    let n = e.slice();
    return ((n[0] = t), n);
}
function A(e, t, n) {
    if (0 === e.length || null == n || 0 === n.length) return e;
    let i = (0, d.ii)(t),
        r = e[0];
    return o(n, i)
        ? r.isCustom && (0, l.v)(r.colors, n)
            ? e
            : E(e, { colors: n.slice(), isCustom: !0 })
        : r.isCustom && (0, l.v)(i[0], n)
          ? E(e, { colors: i[0].slice(), isCustom: !1 })
          : e;
}
function h(e) {
    switch (e) {
        case a.z.GRADIENT:
            return 2;
        case a.z.GUMMY:
            return 4;
        case a.z.PRISM:
            return 5;
        default:
            return 1;
    }
}
function f(e) {
    let t = r()(e).alpha(1),
        n = t.get("hsl.l"),
        i = Math.min(1, 1.2 * t.get("hsl.s")),
        a = Math.min(0.6, n + 0.1);
    return {
        main: e,
        light1: t.set("hsl.l", Math.min(1, 1.2 * n)).hex(),
        light2: t.set("hsl.l", Math.min(1, 1.6 * n)).hex(),
        dark1: t.set("hsl.l", Math.max(0, 0.6 * n)).hex(),
        dark2: t.set("hsl.l", Math.max(0, 0.2 * n)).hex(),
        toonStroke: t.set("hsl.l", Math.max(0.12, 0.4 * n)).hex(),
        neonStroke: t.set("hsl.s", i).set("hsl.l", a).hex(),
    };
}
function I(e) {
    return ((e % 360) + 360) % 360;
}
(a.z.NEON, a.z.TOON, a.z.POP, a.z.GUMMY);
let p = [
    { hueShift: -18, saturation: 0.54, lightness: 0.72 },
    { hueShift: -5, saturation: 0.66, lightness: 0.6 },
    { hueShift: 9, saturation: 0.56, lightness: 0.68 },
    { hueShift: 22, saturation: 0.6, lightness: 0.63 },
];
function T(e) {
    let [t, n, i] = r()((0, s.Hl)(e)).hsl();
    return [Number.isNaN(t) ? 0 : t, n, i];
}
function m(e) {
    let [t] = T(e);
    return p.map((e) => {
        let { hueShift: n, saturation: i, lightness: a } = e;
        return r()
            .hsl(I(t + n), i, a)
            .num();
    });
}
function g(e) {
    let t = e[0];
    if (null == t) return S(0);
    let [n] = T(t);
    return S(I(n - p[0].hueShift));
}
function S(e) {
    return r().hsl(e, d.kp, d.PS).num();
}
function N(e) {
    return null == e ? null : { fontId: e.font_id, effectId: e.effect_id, colors: e.colors };
}
function C(e, t) {
    let n = t[Math.floor(Math.random() * t.length)],
        i = e.filter((e) => !d.fY.includes(e)),
        r = i.length > 0 ? i : e,
        a = r[Math.floor(Math.random() * r.length)],
        s = (0, d.ii)(n);
    return { fontId: a, effectId: n, colors: [...s[Math.floor(Math.random() * s.length)]] };
}
function O(e, t) {
    return e.effectId === a.z.SOLID && e.colors.length > 0 && e.colors[0] === t ? { ...e, colors: [] } : e;
}
function R(e) {
    if (null == e) return !1;
    let t = e.replace(/[^\p{L}]/gu, "");
    return /\P{Script=Latin}/u.test(t);
}
