n.d(t, {
    Ct: () => a,
    Fp: () => s,
    GW: () => c,
    Go: () => I,
    I4: () => E,
    JB: () => L,
    KX: () => R,
    NM: () => l,
    Qq: () => y,
    Rn: () => g,
    VV: () => o,
    Wh: () => O,
    gy: () => S,
    hp: () => h,
    i8: () => v,
    k3: () => m,
    ku: () => _,
    mA: () => r,
    pw: () => w,
    uZ: () => p,
    yd: () => x,
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
function p(e, t, n) {
    return s(e, o(t, n));
}
function _(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function m(e) {
    return e.split("-")[0];
}
function h(e) {
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
    return b.has(m(e)) ? "y" : "x";
}
function O(e) {
    return g(y(e));
}
function v(e, t, n) {
    void 0 === n && (n = !1);
    let r = h(e),
        i = O(e),
        a = E(i),
        o = "x" === i ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (o = w(o)), [o, w(o)];
}
function S(e) {
    let t = w(e);
    return [I(e), t, I(t)];
}
function I(e) {
    return e.replace(/start|end/g, (e) => f[e]);
}
let T = ["left", "right"],
    C = ["right", "left"],
    A = ["top", "bottom"],
    N = ["bottom", "top"];
function P(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            if (n) return t ? C : T;
            return t ? T : C;
        case "left":
        case "right":
            return t ? A : N;
        default:
            return [];
    }
}
function R(e, t, n, r) {
    let i = h(e),
        a = P(m(e), "start" === n, r);
    return i && ((a = a.map((e) => e + "-" + i)), t && (a = a.concat(a.map(I)))), a;
}
function w(e) {
    return e.replace(/left|right|bottom|top/g, (e) => d[e]);
}
function D(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e,
    };
}
function x(e) {
    return "number" != typeof e
        ? D(e)
        : {
              top: e,
              right: e,
              bottom: e,
              left: e,
          };
}
function L(e) {
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
