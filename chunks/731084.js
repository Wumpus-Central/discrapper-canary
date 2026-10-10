n.d(t, {
    Db: () => c,
    Dy: () => m,
    E8: () => o,
    FZ: () => s,
    Ov: () => d,
    kx: () => u,
    uc: () => h,
    vg: () => i,
    xu: () => f,
});
var l = n(164892),
    a = n(248675),
    r = n(660183);
let i = 1e3,
    s = 1800,
    u = [a.default["AX+5lk"], a.default.VAU6A7, a.default["1emysd"], a.default.EXHX3L, a.default.ChslmX];
function d(e) {
    return r.intl.string(u[e % u.length]);
}
function o(e) {
    return u.some((t) => r.intl.string(t) === e);
}
function c(e) {
    switch (e) {
        case "connecting":
            return r.intl.string(a.default["ECl+Dx"]);
        case "closed":
            return r.intl.string(a.default.mQZSp1);
        case "failed":
            return r.intl.string(a.default.xzJSZ6);
    }
}
function f(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            recalling: i = !1,
            controlling: s = !1,
        } = e,
        d = null != t && "end" !== t.phase;
    return s
        ? a.default["1jqaAc"]
        : r
          ? a.default.M4KI5F
          : i
            ? u[0]
            : l
              ? a.default.mKK6wB
              : n
                ? a.default.xnCAaP
                : d
                  ? a.default.izrt52
                  : a.default.L9EDub;
}
function m(e) {
    return r.intl.string(f(e));
}
function h(e) {
    let t = (0, l.a7)(e.cost_usd);
    return {
        text: r.intl.formatToPlainString(a.default.gMuw5d, { runes: t.toLocaleString() }),
        aria: r.intl.formatToPlainString(a.default.Z4LvGa, { runes: t, turns: e.turns }),
    };
}
