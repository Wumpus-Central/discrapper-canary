n.d(t, {
    B1: () => L,
    C0: () => h,
    DD: () => a,
    Dz: () => O,
    Jx: () => u,
    LI: () => l,
    PG: () => g,
    RI: () => c,
    Sg: () => m,
    T9: () => o,
    TV: () => y,
    WJ: () => v,
    _3: () => _,
    aD: () => S,
    bV: () => P,
    jk: () => s,
    lP: () => w,
    nI: () => x,
    qE: () => p,
    r_: () => r,
    sq: () => E,
    w7: () => A,
});
let r = ["top", "right", "bottom", "left"],
    i = ["start", "end"],
    a = r.reduce((e, t) => e.concat(t, t + "-" + i[0], t + "-" + i[1]), []),
    s = Math.min,
    o = Math.max,
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
    return o(e, s(t, n));
}

function _(e, t) {
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

function A(e, t, n) {
    void 0 === n && (n = !1);
    let r = m(e),
        i = O(e),
        a = E(i),
        s = "x" === i ? (r === (n ? "end" : "start") ? "right" : "left") : "start" === r ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (s = P(s)), [s, P(s)];
}

function v(e) {
    let t = P(e);
    return [S(e), t, S(t)];
}

function S(e) {
    return e.replace(/start|end/g, (e) => f[e]);
}
let I = ["left", "right"],
    T = ["right", "left"],
    C = ["top", "bottom"],
    N = ["bottom", "top"];

function R(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            if (n) return t ? T : I;
            return t ? I : T;
        case "left":
        case "right":
            return t ? C : N;
        default:
            return [];
    }
}

function w(e, t, n, r) {
    let i = m(e),
        a = R(h(e), "start" === n, r);
    return i && ((a = a.map((e) => e + "-" + i)), t && (a = a.concat(a.map(S)))), a;
}

function P(e) {
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
