"use strict";
n.d(t, {
    DD: () => E,
    GM: () => m,
    Mn: () => r,
    OM: () => l,
    Ol: () => h,
    R9: () => _,
    WY: () => d,
    _N: () => c,
    ir: () => p,
    kb: () => a,
    ni: () => u,
    pG: () => s,
    qZ: () => o,
    sQ: () => i,
    xf: () => f,
});
var r = "top",
    i = "bottom",
    s = "right",
    a = "left",
    o = "auto",
    l = [r, i, s, a],
    u = "start",
    c = "end",
    d = "clippingParents",
    _ = "viewport",
    f = "popper",
    p = "reference",
    h = l.reduce(function (e, t) {
        return e.concat([t + "-" + u, t + "-" + c]);
    }, []),
    E = [].concat(l, [o]).reduce(function (e, t) {
        return e.concat([t, t + "-" + u, t + "-" + c]);
    }, []),
    m = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
