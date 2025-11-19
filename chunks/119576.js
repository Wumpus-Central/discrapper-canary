n.d(t, {
    Ct: () => a,
    Fp: () => s,
    GW: () => c,
    Go: () => T,
    I4: () => E,
    JB: () => x,
    KX: () => P,
    NM: () => l,
    Qq: () => y,
    Rn: () => g,
    VV: () => o,
    Wh: () => O,
    gy: () => I,
    hp: () => m,
    i8: () => v,
    k3: () => h,
    ku: () => p,
    mA: () => r,
    pw: () => D,
    uZ: () => _,
    yd: () => L,
    ze: () => u,
});
let r = ["top", "right", "bottom", "left"],
    i = ["start", "end"],
    a = r.reduce((e, t) => e.concat(t, t + "-" + i[0], t + "-" + i[1]), []),
    o = Math.min,
    s = Math.max,
    l = Math.round,
    c = Math.floor,
    u = (e) => ({
        x: e,
        y: e,
    }),
    d = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom",
    },
    f = {
        start: "end",
        end: "start",
    };
function _(e, t, n) {
    return s(e, o(t, n));
}
function p(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function h(e) {
    return e.split("-")[0];
}
function m(e) {
    return e.split("-")[1];
}
function g(e) {
    return "x" === e ? "y" : "x";
}
function E(e) {
    return "y" === e ? "height" : "width";
}
let b = new Set(["top", "bottom"]);
function y(e) {
    return b.has(h(e)) ? "y" : "x";
}
function O(e) {
    return g(y(e));
}
function v(e, t, n) {
    void 0 === n && (n = !1);
    let r = m(e),
        i = O(e),
        a = E(i),
        o = "x" === i ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (o = D(o)), [o, D(o)];
}
function I(e) {
    let t = D(e);
    return [T(e), t, T(t)];
}
function T(e) {
    return e.replace(/start|end/g, (e) => f[e]);
}
let S = ["left", "right"],
    A = ["right", "left"],
    C = ["top", "bottom"],
    N = ["bottom", "top"];
function R(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            if (n) return t ? A : S;
            return t ? S : A;
        case "left":
        case "right":
            return t ? C : N;
        default:
            return [];
    }
}
function P(e, t, n, r) {
    let i = m(e),
        a = R(h(e), "start" === n, r);
    return i && ((a = a.map((e) => e + "-" + i)), t && (a = a.concat(a.map(T)))), a;
}
function D(e) {
    return e.replace(/left|right|bottom|top/g, (e) => d[e]);
}
function w(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e,
    };
}
function L(e) {
    return "number" != typeof e
        ? w(e)
        : {
              top: e,
              right: e,
              bottom: e,
              left: e,
          };
}
function x(e) {
    let { x: t, y: n, width: r, height: i } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n,
    };
}
