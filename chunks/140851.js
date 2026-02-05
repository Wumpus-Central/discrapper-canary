"use strict";
n.d(t, {
    DD: () => m,
    GM: () => g,
    Mn: () => r,
    OM: () => l,
    Ol: () => h,
    R9: () => _,
    WY: () => d,
    _N: () => c,
    ir: () => p,
    kb: () => s,
    ni: () => u,
    pG: () => a,
    qZ: () => o,
    sQ: () => i,
    xf: () => f,
});
var r = "top",
    i = "bottom",
    a = "right",
    s = "left",
    o = "auto",
    l = [r, i, a, s],
    u = "start",
    c = "end",
    d = "clippingParents",
    _ = "viewport",
    f = "popper",
    p = "reference",
    h = l.reduce(function (e, t) {
        return e.concat([t + "-" + u, t + "-" + c]);
    }, []),
    m = [].concat(l, [o]).reduce(function (e, t) {
        return e.concat([t, t + "-" + u, t + "-" + c]);
    }, []),
    g = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
