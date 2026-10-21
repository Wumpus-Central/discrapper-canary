n.d(t, {
    Db: () => f,
    Dy: () => g,
    E4: () => d,
    E8: () => m,
    FZ: () => s,
    Ov: () => c,
    kx: () => u,
    uc: () => x,
    vg: () => i,
    xu: () => h,
});
var l = n(242779),
    a = n(261425),
    r = n(105292);
let i = 1e3,
    s = 1800,
    u = [a.default["AX+5lk"], a.default.VAU6A7, a.default["1emysd"], a.default.EXHX3L, a.default.ChslmX];
function o(e) {
    return e === r.intl.string(a.default.xCdlEF) || e === r.intl.string(a.default.Rhx0rn);
}
function d(e, t) {
    return o(e) !== o(t);
}
function c(e) {
    return r.intl.string(u[e % u.length]);
}
function m(e) {
    return u.some((t) => r.intl.string(t) === e);
}
function f(e) {
    switch (e) {
        case "connecting":
            return r.intl.string(a.default["ECl+Dx"]);
        case "closed":
            return r.intl.string(a.default.mQZSp1);
        case "failed":
            return r.intl.string(a.default.xzJSZ6);
    }
}
function h(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: i = !1,
            recalling: s = !1,
            controlling: o = !1,
            publishPending: d = !1,
            publishing: c = !1,
        } = e,
        m = null != t && "end" !== t.phase;
    return o
        ? a.default["1jqaAc"]
        : d
          ? a.default.xCdlEF
          : c
            ? a.default.Rhx0rn
            : r
              ? a.default.M4KI5F
              : i
                ? a.default.j8tmjK
                : s
                  ? u[0]
                  : l
                    ? a.default.mKK6wB
                    : n
                      ? a.default.xnCAaP
                      : m
                        ? a.default.izrt52
                        : a.default.L9EDub;
}
function g(e) {
    return r.intl.string(h(e));
}
function x(e) {
    let t = (0, l.a7)(e.cost_usd);
    return {
        text: r.intl.formatToPlainString(a.default.gMuw5d, { runes: t.toLocaleString() }),
        aria: r.intl.formatToPlainString(a.default.Z4LvGa, { runes: t, turns: e.turns }),
    };
}
