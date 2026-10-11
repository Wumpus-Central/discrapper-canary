n.d(t, {
    Db: () => f,
    Dy: () => h,
    E4: () => o,
    E8: () => c,
    FZ: () => s,
    Ov: () => d,
    kx: () => u,
    uc: () => g,
    vg: () => i,
    xu: () => m,
});
var l = n(242779),
    a = n(248675),
    r = n(660183);
let i = 1e3,
    s = 1800,
    u = [a.default["AX+5lk"], a.default.VAU6A7, a.default["1emysd"], a.default.EXHX3L, a.default.ChslmX];
function o(e, t) {
    let n = r.intl.string(a.default.xCdlEF);
    return (e === n) != (t === n);
}
function d(e) {
    return r.intl.string(u[e % u.length]);
}
function c(e) {
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
function m(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            recalling: i = !1,
            controlling: s = !1,
            publishPending: o = !1,
        } = e,
        d = null != t && "end" !== t.phase;
    return s
        ? a.default["1jqaAc"]
        : o
          ? a.default.xCdlEF
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
function h(e) {
    return r.intl.string(m(e));
}
function g(e) {
    let t = (0, l.a7)(e.cost_usd);
    return {
        text: r.intl.formatToPlainString(a.default.gMuw5d, { runes: t.toLocaleString() }),
        aria: r.intl.formatToPlainString(a.default.Z4LvGa, { runes: t, turns: e.turns }),
    };
}
