n.d(t, {
    BL: () => c,
    Ct: () => h,
    F2: () => a,
    I: () => i,
    Pj: () => f,
    YP: () => _,
    bw: () => m,
    d7: () => s,
    k5: () => p,
    mv: () => l,
    t$: () => o,
    ut: () => u,
    we: () => r,
    xs: () => g,
    zV: () => d,
});
var r = "top",
    i = "bottom",
    a = "right",
    o = "left",
    s = "auto",
    l = [r, i, a, o],
    c = "start",
    u = "end",
    d = "clippingParents",
    f = "viewport",
    p = "popper",
    _ = "reference",
    m = l.reduce(function (e, t) {
        return e.concat([t + "-" + c, t + "-" + u]);
    }, []),
    h = [].concat(l, [s]).reduce(function (e, t) {
        return e.concat([t, t + "-" + c, t + "-" + u]);
    }, []),
    g = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
