n.d(t, {
    Db: () => f,
    Dy: () => h,
    E4: () => d,
    E8: () => c,
    FZ: () => s,
    Ov: () => u,
    kx: () => o,
    uc: () => g,
    vg: () => r,
    xu: () => m,
});
var l = n(242779),
    a = n(248675),
    i = n(660183);
let r = 1e3,
    s = 1800,
    o = [a.default["AX+5lk"], a.default.VAU6A7, a.default["1emysd"], a.default.EXHX3L, a.default.ChslmX];
function d(e, t) {
    let n = i.intl.string(a.default.xCdlEF);
    return (e === n) != (t === n);
}
function u(e) {
    return i.intl.string(o[e % o.length]);
}
function c(e) {
    return o.some((t) => i.intl.string(t) === e);
}
function f(e) {
    switch (e) {
        case "connecting":
            return i.intl.string(a.default["ECl+Dx"]);
        case "closed":
            return i.intl.string(a.default.mQZSp1);
        case "failed":
            return i.intl.string(a.default.xzJSZ6);
    }
}
function m(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: i = !1,
            remixing: r = !1,
            recalling: s = !1,
            controlling: d = !1,
            publishPending: u = !1,
        } = e,
        c = null != t && "end" !== t.phase;
    return d
        ? a.default["1jqaAc"]
        : u
          ? a.default.xCdlEF
          : i
            ? a.default.M4KI5F
            : r
              ? a.default.j8tmjK
              : s
                ? o[0]
                : l
                  ? a.default.mKK6wB
                  : n
                    ? a.default.xnCAaP
                    : c
                      ? a.default.izrt52
                      : a.default.L9EDub;
}
function h(e) {
    return i.intl.string(m(e));
}
function g(e) {
    let t = (0, l.a7)(e.cost_usd);
    return {
        text: i.intl.formatToPlainString(a.default.gMuw5d, { runes: t.toLocaleString() }),
        aria: i.intl.formatToPlainString(a.default.Z4LvGa, { runes: t, turns: e.turns }),
    };
}
