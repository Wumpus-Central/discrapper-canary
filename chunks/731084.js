e.d(n, {
    Db: () => g,
    Dy: () => x,
    E4: () => d,
    E8: () => o,
    FZ: () => u,
    Ov: () => s,
    kx: () => f,
    uc: () => p,
    vg: () => a,
    xu: () => m,
});
var l = e(242779),
    i = e(809526),
    r = e(105292);
let a = 1e3,
    u = 1800,
    f = [i.default["AX+5lk"], i.default.VAU6A7, i.default["1emysd"], i.default.EXHX3L, i.default.ChslmX];
function c(t) {
    return t === r.intl.string(i.default.xCdlEF) || t === r.intl.string(i.default.Rhx0rn);
}
function d(t, n) {
    return c(t) !== c(n);
}
function s(t) {
    return r.intl.string(f[t % f.length]);
}
function o(t) {
    return f.some((n) => r.intl.string(n) === t);
}
function g(t) {
    switch (t) {
        case "connecting":
            return r.intl.string(i.default["ECl+Dx"]);
        case "closed":
            return r.intl.string(i.default.mQZSp1);
        case "failed":
            return r.intl.string(i.default.xzJSZ6);
    }
}
function m(t) {
    let {
            activity: n,
            compacting: e = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: a = !1,
            recalling: u = !1,
            controlling: c = !1,
            publishPending: d = !1,
            publishing: s = !1,
        } = t,
        o = null != n && "end" !== n.phase;
    return c
        ? i.default["1jqaAc"]
        : d
          ? i.default.xCdlEF
          : s
            ? i.default.Rhx0rn
            : r
              ? i.default.M4KI5F
              : a
                ? i.default.j8tmjK
                : u
                  ? f[0]
                  : l
                    ? i.default.mKK6wB
                    : e
                      ? i.default.xnCAaP
                      : o
                        ? i.default.izrt52
                        : i.default.L9EDub;
}
function x(t) {
    return r.intl.string(m(t));
}
function p(t) {
    let n = (0, l.a7)(t.cost_usd);
    return {
        text: r.intl.formatToPlainString(i.default.gMuw5d, { runes: n.toLocaleString() }),
        aria: r.intl.formatToPlainString(i.default.Z4LvGa, { runes: n, turns: t.turns }),
    };
}
