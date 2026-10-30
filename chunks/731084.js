n.d(t, {
    Db: () => m,
    Dy: () => x,
    E4: () => d,
    E8: () => f,
    FZ: () => s,
    Ov: () => c,
    kx: () => o,
    uc: () => g,
    vg: () => i,
    xu: () => p,
});
var l = n(242779),
    a = n(809526),
    r = n(105292);
let i = 1e3,
    s = 1800,
    o = [a.default["AX+5lk"], a.default.VAU6A7, a.default["1emysd"], a.default.EXHX3L, a.default.ChslmX];
function u(e) {
    return e === r.intl.string(a.default.xCdlEF) || e === r.intl.string(a.default.Rhx0rn);
}
function d(e, t) {
    return u(e) !== u(t);
}
function c(e) {
    return r.intl.string(o[e % o.length]);
}
function f(e) {
    return o.some((t) => r.intl.string(t) === e);
}
function m(e) {
    switch (e) {
        case "connecting":
            return r.intl.string(a.default["ECl+Dx"]);
        case "closed":
            return r.intl.string(a.default.mQZSp1);
        case "failed":
            return r.intl.string(a.default.xzJSZ6);
    }
}
function p(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: i = !1,
            recalling: s = !1,
            controlling: u = !1,
            publishPending: d = !1,
            publishing: c = !1,
        } = e,
        f = null != t && "end" !== t.phase;
    return u
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
                  ? o[0]
                  : l
                    ? a.default.mKK6wB
                    : n
                      ? a.default.xnCAaP
                      : f
                        ? a.default.izrt52
                        : a.default.L9EDub;
}
function x(e) {
    return r.intl.string(p(e));
}
function g(e) {
    let t = (0, l.a7)(e.cost_usd);
    return {
        text: r.intl.formatToPlainString(a.default.gMuw5d, { runes: t.toLocaleString() }),
        aria: r.intl.formatToPlainString(a.default.Z4LvGa, { runes: t, turns: e.turns }),
    };
}
