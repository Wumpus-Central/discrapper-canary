n.d(t, {
    Db: () => m,
    Dy: () => g,
    E4: () => u,
    E8: () => f,
    FZ: () => s,
    Ov: () => c,
    kx: () => o,
    uc: () => p,
    vg: () => r,
    xu: () => h,
});
var l = n(242779),
    a = n(248675),
    i = n(105292);
let r = 1e3,
    s = 1800,
    o = [a.default["AX+5lk"], a.default.VAU6A7, a.default["1emysd"], a.default.EXHX3L, a.default.ChslmX];
function d(e) {
    return e === i.intl.string(a.default.xCdlEF) || e === i.intl.string(a.default.Rhx0rn);
}
function u(e, t) {
    return d(e) !== d(t);
}
function c(e) {
    return i.intl.string(o[e % o.length]);
}
function f(e) {
    return o.some((t) => i.intl.string(t) === e);
}
function m(e) {
    switch (e) {
        case "connecting":
            return i.intl.string(a.default["ECl+Dx"]);
        case "closed":
            return i.intl.string(a.default.mQZSp1);
        case "failed":
            return i.intl.string(a.default.xzJSZ6);
    }
}
function h(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: i = !1,
            remixing: r = !1,
            recalling: s = !1,
            controlling: d = !1,
            publishPending: u = !1,
            publishing: c = !1,
        } = e,
        f = null != t && "end" !== t.phase;
    return d
        ? a.default["1jqaAc"]
        : u
          ? a.default.xCdlEF
          : c
            ? a.default.Rhx0rn
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
                      : f
                        ? a.default.izrt52
                        : a.default.L9EDub;
}
function g(e) {
    return i.intl.string(h(e));
}
function p(e) {
    let t = (0, l.a7)(e.cost_usd);
    return {
        text: i.intl.formatToPlainString(a.default.gMuw5d, { runes: t.toLocaleString() }),
        aria: i.intl.formatToPlainString(a.default.Z4LvGa, { runes: t, turns: e.turns }),
    };
}
