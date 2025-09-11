n.d(t, {
    $_: () => s.$_,
    B0: () => s.B0,
    Dw: () => s.Dw,
    FG: () => s.FG,
    GS: () => o.G,
    Ny: () => s.Ny,
    Sr: () => u,
    Tg: () => s.Tg,
    Yd: () => s.Yd,
    Yv: () => s.Yv,
    lo: () => s.lo,
    q3: () => s.q3,
    qM: () => s.qM,
    yI: () => s.yI,
    z9: () => s.z9,
});
var r = n(951288);
n(647438);
var i = n(657707),
    a = n(47280);
n(131429);
var o = n(16030),
    s = n(147432);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = (e) => {
    let t = (0, a.ZP)({ location: "NitroWheelIcon" }) ? i.n_w : i.SrA;
    return (0, r.jsx)(t, c({}, e));
};
