n.d(t, {
    Ct: () => i,
    Fp: () => o,
    GW: () => l,
    Go: () => I,
    I4: () => g,
    JB: () => x,
    KX: () => R,
    NM: () => s,
    Qq: () => b,
    Rn: () => m,
    VV: () => a,
    Wh: () => y,
    gy: () => v,
    hp: () => h,
    i8: () => O,
    k3: () => p,
    ku: () => _,
    pw: () => P,
    uZ: () => f,
    yd: () => D,
    ze: () => c,
});
let r = ["start", "end"],
    i = ["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-" + r[0], t + "-" + r[1]), []),
    a = Math.min,
    o = Math.max,
    s = Math.round,
    l = Math.floor,
    c = (e) => ({
        x: e,
        y: e,
    }),
    u = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom",
    },
    d = {
        start: "end",
        end: "start",
    };
function f(e, t, n) {
    return o(e, a(t, n));
}
function _(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function p(e) {
    return e.split("-")[0];
}
function h(e) {
    return e.split("-")[1];
}
function m(e) {
    return "x" === e ? "y" : "x";
}
function g(e) {
    return "y" === e ? "height" : "width";
}
let E = new Set(["top", "bottom"]);
function b(e) {
    return E.has(p(e)) ? "y" : "x";
}
function y(e) {
    return m(b(e));
}
function O(e, t, n) {
    void 0 === n && (n = !1);
    let r = h(e),
        i = y(e),
        a = g(i),
        o = "x" === i ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (o = P(o)), [o, P(o)];
}
function v(e) {
    let t = P(e);
    return [I(e), t, I(t)];
}
function I(e) {
    return e.replace(/start|end/g, (e) => d[e]);
}
let T = ["left", "right"],
    S = ["right", "left"],
    A = ["top", "bottom"],
    C = ["bottom", "top"];
function N(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            if (n) return t ? S : T;
            return t ? T : S;
        case "left":
        case "right":
            return t ? A : C;
        default:
            return [];
    }
}
function R(e, t, n, r) {
    let i = h(e),
        a = N(p(e), "start" === n, r);
    return i && ((a = a.map((e) => e + "-" + i)), t && (a = a.concat(a.map(I)))), a;
}
function P(e) {
    return e.replace(/left|right|bottom|top/g, (e) => u[e]);
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
function D(e) {
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
