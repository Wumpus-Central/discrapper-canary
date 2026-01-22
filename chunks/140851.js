n.d(t, {
    DD: () => m,
    GM: () => g,
    Mn: () => r,
    OM: () => l,
    Ol: () => h,
    R9: () => f,
    WY: () => d,
    _N: () => u,
    ir: () => _,
    kb: () => s,
    ni: () => c,
    pG: () => a,
    qZ: () => o,
    sQ: () => i,
    xf: () => p,
});
var r = "top",
    i = "bottom",
    a = "right",
    s = "left",
    o = "auto",
    l = [r, i, a, s],
    c = "start",
    u = "end",
    d = "clippingParents",
    f = "viewport",
    p = "popper",
    _ = "reference",
    h = l.reduce(function (e, t) {
        return e.concat([t + "-" + c, t + "-" + u]);
    }, []),
    m = [].concat(l, [o]).reduce(function (e, t) {
        return e.concat([t, t + "-" + c, t + "-" + u]);
    }, []),
    g = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
