n.d(t, {
    Db: () => h,
    Dy: () => p,
    E4: () => c,
    E8: () => f,
    FZ: () => s,
    Ov: () => d,
    kx: () => u,
    uc: () => g,
    vg: () => i,
    xu: () => m,
});
var l = n(242779),
    r = n(809526),
    a = n(105292);
let i = 1e3,
    s = 1800,
    u = [r.default["AX+5lk"], r.default.VAU6A7, r.default["1emysd"], r.default.EXHX3L, r.default.ChslmX];
function o(e) {
    return e === a.intl.string(r.default.xCdlEF) || e === a.intl.string(r.default.Rhx0rn);
}
function c(e, t) {
    return o(e) !== o(t);
}
function d(e) {
    return a.intl.string(u[e % u.length]);
}
function f(e) {
    return u.some((t) => a.intl.string(t) === e);
}
function h(e) {
    switch (e) {
        case "connecting":
            return a.intl.string(r.default["ECl+Dx"]);
        case "closed":
            return a.intl.string(r.default.mQZSp1);
        case "failed":
            return a.intl.string(r.default.xzJSZ6);
    }
}
function m(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: a = !1,
            remixing: i = !1,
            recalling: s = !1,
            controlling: o = !1,
            publishPending: c = !1,
            publishing: d = !1,
        } = e,
        f = null != t && "end" !== t.phase;
    return o
        ? r.default["1jqaAc"]
        : c
          ? r.default.xCdlEF
          : d
            ? r.default.Rhx0rn
            : a
              ? r.default.M4KI5F
              : i
                ? r.default.j8tmjK
                : s
                  ? u[0]
                  : l
                    ? r.default.mKK6wB
                    : n
                      ? r.default.xnCAaP
                      : f
                        ? r.default.izrt52
                        : r.default.L9EDub;
}
function p(e) {
    return a.intl.string(m(e));
}
function g(e) {
    let t = (0, l.a7)(e.cost_usd);
    return {
        text: a.intl.formatToPlainString(r.default.gMuw5d, { runes: t.toLocaleString() }),
        aria: a.intl.formatToPlainString(r.default.Z4LvGa, { runes: t, turns: e.turns }),
    };
}
